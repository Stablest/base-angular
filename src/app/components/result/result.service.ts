import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResultService {
    createSubject<T>($observable: Observable<T>) {
        const $newObservable = new Subject<T>();
        $observable.subscribe($newObservable)
        return $newObservable;
    }
}