import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoaderButtonComponent } from "./loader-button.component";

describe('LoaderButtonComponent', () => {
    let component: LoaderButtonComponent;
    let fixture: ComponentFixture<LoaderButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoaderButtonComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(LoaderButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('loading container should be visible if isLoading is true', () => {
        component.isLoading = true;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const loadingContainer = compiled.querySelector('[data-testid="loading-container"]');
        expect(loadingContainer?.classList.contains('invisible')).toBeFalse();
    });

    it('loading container should be invisible if isLoading is false', () => {
        component.isLoading = false;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const loadingContainer = compiled.querySelector('[data-testid="loading-container"]');
        expect(loadingContainer?.classList.contains('invisible')).toBeTrue();
    });

    it('content container should be invisible if isLoading is true', () => {
        component.isLoading = true;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const loadingContainer = compiled.querySelector('[data-testid="content-container"]');
        expect(loadingContainer?.classList.contains('invisible')).toBeTrue();
    });

    it('content container should be visible if isLoading is false', () => {
        component.isLoading = false;
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const loadingContainer = compiled.querySelector('[data-testid="content-container"]');
        expect(loadingContainer?.classList.contains('invisible')).toBeFalse();
    });
})