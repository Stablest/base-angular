import { Component, ElementRef, HostListener, Input, OnChanges, Optional, Renderer2, SimpleChanges } from "@angular/core";
import { NgControl } from "@angular/forms";

@Component({
    selector: "input[app-input]",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],
    standalone: true,
})
export class InputDefaultComponent implements OnChanges {
    @Input() isInvalid: boolean | null = null;

    constructor(private el: ElementRef, private renderer: Renderer2, @Optional() private control: NgControl | null) { }

    @HostListener('focus')
    onFocus() {
        this.renderer.removeClass(this.el.nativeElement, 'error');
    }

    @HostListener('focusout', ['$event.target'])
    onFocusOut() {
        if (this.isInvalid !== null) {
            this.updateStyle(this.isInvalid)
            return;
        }
        if (this.control === null || this.control.invalid === null) {
            throw new Error('app-input must have an error handler');
        }
        this.updateStyle(this.control.invalid);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['isInvalid']) {
            if (this.isInvalid === null) {
                throw new Error('app-input must have an error handler');
            }
            this.updateStyle(this.isInvalid)
        }
    }

    updateStyle(isInvalid: boolean) {
        if (isInvalid) {
            this.renderer.addClass(this.el.nativeElement, 'error');
        } else {
            this.renderer.removeClass(this.el.nativeElement, 'error');
        }
    }

}