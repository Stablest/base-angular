import { Component, ElementRef, EventEmitter, HostListener, Optional, Output, Renderer2 } from "@angular/core";
import { NgControl } from "@angular/forms";

@Component({
    selector: "input[app-input]",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"],

    standalone: true,
})
export class InputDefaultComponent {
    @Output() stateChange: EventEmitter<void> = new EventEmitter();
    isInvalid: boolean = false;

    constructor(private el: ElementRef, private renderer: Renderer2, @Optional() public control: NgControl | null) { }

    @HostListener('focus')
    onFocus() {
        this.updateStyle(false);
        this.handleStateChange(false);
    }

    @HostListener('focusout', ['$event.target'])
    onFocusOut() {
        if (this.control === null || this.control.invalid === null) {
            throw new Error('app-input must have a form control');
        }
        this.handleStateChange(this.control.invalid);
        this.updateStyle(this.control.invalid);
    }

    handleStateChange(newValue: boolean) {
        if (newValue !== this.isInvalid) {
            this.isInvalid = newValue;
            this.stateChange.emit();
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