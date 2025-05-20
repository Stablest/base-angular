import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CollectionContainerComponent } from "./collection-container.component";


describe('CollectionContainerComponent', () => {
    let component: CollectionContainerComponent;
    let fixture: ComponentFixture<CollectionContainerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CollectionContainerComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CollectionContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should render empty message if items list is empty', () => {
        component.collection = [];
        component.emptyMessage = 'No items available';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const htmlMessage = compiled.querySelector('div');
        expect(htmlMessage?.textContent).toContain('No items available');
    });


    it('should not render empty message if items list is not empty', () => {
        component.collection = ['Something'];
        component.emptyMessage = 'No items available';
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        const htmlMessage = compiled.querySelector('div');
        expect(htmlMessage?.textContent).not.toContain('No items available');
    });

});
