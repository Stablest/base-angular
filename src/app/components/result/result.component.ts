import { Component, ContentChild, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Result } from "./interfaces/result.interface";
import { PendingDirective } from "./directives/pending.directive";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
})
export class ResultComponent implements OnInit, OnChanges, OnDestroy {
    @ContentChild(PendingDirective) pendingContent?: PendingDirective
    @Input() observable?: Observable<unknown>
    result: Result = 'pending'
    subscription?: Subscription;

    ngOnInit() {
        this.updateInternals()
    }

    ngOnChanges() {
        this.updateInternals()
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe()
    }

    updateInternals() {
        this.result = 'pending';
        this.subscription?.unsubscribe();
        this.subscription = this.observable?.subscribe(
            {
                next: () => {
                    this.result = 'success'
                },
                error: () => {
                    this.result = 'error'
                }
            }
        )
    }
}
