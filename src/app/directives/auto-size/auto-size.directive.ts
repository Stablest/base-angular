import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: 'textarea[autoSize]',
    standalone: true,
})
export class AutoSizeDirective {
    @Input() maxHeight = 256;
    @Input() minHeight = 64;

    constructor(private element: ElementRef<HTMLTextAreaElement>) {
    }

    ngAfterViewInit() {
        this.onInput();
    }

    @HostListener('input', ['$event.target'])
    onInput() {
        const nativeElement = this.element.nativeElement;
        if (this.getPixelAsNumber(nativeElement.style.height) <= this.maxHeight) {
            nativeElement.style.overflowY = 'hidden';
            const nextHeight = nativeElement.scrollHeight;
            if (nextHeight < this.minHeight) {
                nativeElement.style.height = this.minHeight + 'px';
            } else {
                nativeElement.style.height = nextHeight + 'px';
            }
        } else {
            nativeElement.style.overflowY = 'auto';
        }
    }

    getPixelAsNumber(pixel: string) {
        const pixelSuffixStartPosition = pixel.length - 2;
        return Number(pixel.slice(0, pixelSuffixStartPosition))
    }
}