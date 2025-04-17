import { CommonModule } from "@angular/common";
import { Component, ElementRef, Input, SimpleChanges, ViewEncapsulation } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ButtonVariant } from "./interfaces/variant.interface";

@Component({
    selector: "button[default]",
    templateUrl: "./button.component.html",
    standalone: true,
    imports: [CommonModule],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input() variant: ButtonVariant = 'primary'
    @Input() observable?: Observable<any>;
    subscription?: Subscription
    isLoading = false;

    constructor(private element: ElementRef<HTMLButtonElement>) { }

    ngOnInit() {
        this.element.nativeElement.classList.add('button-default')
        this.loadVariant();
        this.subscribeToObservable();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['variant']) {
            this.loadVariant();
        }
        if (changes['observable']) {
            this.subscription?.unsubscribe();
            this.subscribeToObservable();
        }
    }

    subscribeToObservable() {
        if (this.observable) {
            this.isLoading = true;
        }
        this.subscription = this.observable?.subscribe()
        this.subscription?.add(() => {
            this.isLoading = false;
        })
    }

    loadVariant() {
        if (this.variant === 'primary') {
            this.element.nativeElement.classList.remove("secondary-button")
            this.element.nativeElement.classList.remove("tertiary-button")
            this.element.nativeElement.classList.add("primary-button")
            return;
        }
        if (this.variant === 'secondary') {
            this.element.nativeElement.classList.remove("primary-button")
            this.element.nativeElement.classList.remove("tertiary-button")
            this.element.nativeElement.classList.add("secondary-button")
            return;
        }
        if (this.variant === 'tertiary') {
            this.element.nativeElement.classList.remove("primary-button")
            this.element.nativeElement.classList.remove("secondary-button")
            this.element.nativeElement.classList.add("tertiary-button")
            return;
        }
    }
}