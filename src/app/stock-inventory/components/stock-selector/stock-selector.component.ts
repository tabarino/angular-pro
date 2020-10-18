import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-selector',
    templateUrl: './stock-selector.component.html',
    styleUrls: ['./stock-selector.component.scss']
})
export class StockSelectorComponent implements OnInit {
    @Input() parent: FormGroup;
    @Input() products: Product[];
    @Output() added = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    onAdd() {
        this.added.emit(this.parent.get('selector').value);
    }
}
