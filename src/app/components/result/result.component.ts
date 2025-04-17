import { CommonModule } from "@angular/common";
import { Component, ContentChild, Input, OnChanges, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Result } from "./interfaces/result.interface";
import { PendingDirective } from "./directives/pending.directive";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class ResultComponent implements OnInit, OnChanges {
    @ContentChild(PendingDirective) pendingContent?: PendingDirective
    @Input() observable?: Observable<unknown>
    result: Result = 'pending'

    ngOnInit() {
        this.updateInternals()
    }

    ngOnChanges() {
        this.updateInternals()
    }

    updateInternals() {
        this.result = 'pending';
        this.observable?.subscribe(
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
