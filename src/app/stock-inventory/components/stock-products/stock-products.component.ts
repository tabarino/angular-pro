import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-products',
    templateUrl: './stock-products.component.html',
    styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent implements OnInit {
    @Input() parent: FormGroup;
    @Input() map: Map<number, Product>;
    @Output() removed = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    get stocks() {
        return (this.parent.get('stock') as FormArray).controls;
    }

    getProduct(id) {
        return this.map.get(id);
    }

    onRemove(group: AbstractControl, index: number) {
        this.removed.emit({ group, index });
    }
}
