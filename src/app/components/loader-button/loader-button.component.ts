import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Observable, Subscription } from "rxjs";

@Component({
    selector: "button[loader]",
    templateUrl: "./loader-button.component.html",
    standalone: true,
    imports: [CommonModule],
})
export class LoaderButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() observable?: Observable<any>;
    subscription?: Subscription
    isLoading = false;

    ngOnInit() {
        this.handleObservable();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['observable']) {
            this.handleObservable();
        }
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }

    handleObservable() {
        this.subscription?.unsubscribe();
        if (!this.observable) {
            this.isLoading = false;
            return;
        }
        this.isLoading = true;
        this.subscription = this.observable.subscribe()
        this.subscription.add(() => {
            this.isLoading = false;
        })
    }

}