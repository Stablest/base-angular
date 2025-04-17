import { Injectable } from "@angular/core";
import { ReplaySubject, filter, map } from "rxjs";
import { LocalStorage } from "./local-storage.interface";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    public storageChange$ = new ReplaySubject<keyof LocalStorage | null>(1);

    constructor() {
        this.storageChange$.next(null);
    }

    observeItem<T extends keyof LocalStorage>(key: T) {
        return this.storageChange$.pipe(
            filter((localKey) => {
                return key === localKey || localKey === null
            }),
            map(() => this.getItem(key))
        )
    }

    getItem<T extends keyof LocalStorage>(key: T): LocalStorage[T] | null {
        const stringifiedObject = localStorage.getItem(key);
        return stringifiedObject ? JSON.parse(stringifiedObject) : null;
    }

    setItem<T extends keyof LocalStorage>(key: T, value: LocalStorage[T]) {
        localStorage.setItem(key, JSON.stringify(value));
        this.storageChange$.next(key);
    }

    removeItem(key: keyof LocalStorage) {
        localStorage.removeItem(key);
        this.storageChange$.next(key);
    }

    clear(): void {
        localStorage.clear();
        this.storageChange$.next(null);
    }
}