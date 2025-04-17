import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-collection-container',
    templateUrl: './collection-container.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class CollectionContainerComponent {
    @Input({ required: true }) collection: unknown[] = [];
    @Input() emptyMessage: string = 'Nenhum item encontrado';
}