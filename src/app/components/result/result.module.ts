import { NgModule } from "@angular/core";
import { ResultComponent } from "./result.component";
import { PendingDirective } from "./directives/pending.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ResultComponent, PendingDirective],
    imports: [CommonModule],
    exports: [ResultComponent, PendingDirective],
})
export class ResultModule { }