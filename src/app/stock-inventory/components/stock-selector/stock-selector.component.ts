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

    get notSelected() {
        return (
            !this.parent.get('selector.product_id').value
        );
    }

    get stockExists() {
        return (
            this.parent.hasError('stockExists') &&
            this.parent.get('selector.product_id').dirty
        );
    }

    onAdd() {
        this.added.emit(this.parent.get('selector').value);

        this.parent.get('selector').reset({
            product_id: '',
            quantity: 10
        });

        // The patchValue is used to changed only one of the parameters
        // this.parent.get('selector').patchValue({
        //     product_id: ''
        // });

        // The setValue is used to changed all the values, but it doesn't reset the form
        // this.parent.get('selector').setValue({
        //     product_id: '',
        //     quantity: 10
        // });
    }
}
