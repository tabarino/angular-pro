import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-inventory',
    templateUrl: './stock-inventory.component.html',
    styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl(''),
            code: new FormControl('')
        }),
        selector: new FormGroup({
            product_id: new FormControl(''),
            quantity: new FormControl(10)
        }),
        stock: new FormArray([])
    });

    product: Product[] = [
        { id: 1, name: 'Macbook Pro', price: 2800 },
        { id: 2, name: 'USB-C Adapter', price: 50 },
        { id: 3, name: 'Ipod', price: 400 },
        { id: 4, name: 'Iphone', price: 900 },
        { id: 5, name: 'Apple Watch', price: 600 }
    ];

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('Submit: ', this.form.value);
    }
}
