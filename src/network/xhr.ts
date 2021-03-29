import { Emulators } from "emulators";
import { Cache } from "emulators/dist/types/cache";

declare const emulators: Emulators;

export async function resolveBundle(url: string,
                                    options?: {
                                        cache?: Cache | null,
                                        httpCache?: boolean,
                                        onprogress?: (progress: number) => void
                                    }): Promise<Uint8Array> {
    const cache = options?.cache || null;
    const onprogress = options?.onprogress;
    const httpCache = !(options?.httpCache === false);

    try {
        if (cache === null) {
            throw new Error("no-cache");
        }
        const cacheImpl = cache || await emulators.cache();
        const buffer = await cacheImpl.get(url) as ArrayBuffer;
        if (onprogress !== undefined) {
            onprogress(100);
        }
        return new Uint8Array(buffer)
    } catch {
        return new Promise<Uint8Array>((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.overrideMimeType("text/plain; charset=x-user-defined");
            request.addEventListener("error", (evt) => {
                reject(new Error("Network error, can't download " + url));
            });
            request.addEventListener("abort", () => {
                reject(new Error("Request canceled for url " + url));
            }, false);
            request.responseType = "arraybuffer";
            request.onreadystatechange = () => {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        if (onprogress !== undefined) {
                            onprogress(100);
                        }
                        resolve(new Uint8Array(request.response));
                    } else {
                        reject(new Error("Network error, can't download " + url));
                    }
                }
            };
            if (onprogress !== undefined) {
                request.onprogress = (event) => {
                    if (event.total && event.total > 0) {
                        const porgress = Math.round(event.loaded * 10000 / event.total) / 100;
                        onprogress(porgress);
                    }
                }
            }
            if (httpCache === false) {
                request.setRequestHeader("Cache-Control", "no-cache, no-store, max-age=0");
                request.setRequestHeader("Expires", "Tue, 01 Jan 1980 1:00:00 GMT");
                request.setRequestHeader("Pragma", "no-cache");
            }
            request.send();
        });
    }
}
