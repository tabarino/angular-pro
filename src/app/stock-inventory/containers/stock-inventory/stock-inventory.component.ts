import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-inventory',
    templateUrl: './stock-inventory.component.html',
    styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
    form = this.fb.group({
        store: this.fb.group({
            branch: '',
            code: ''
        }),
        selector: this.createStock({}),
        stock: this.fb.array([
            this.createStock({ product_id: 1, quantity: 10 }),
            this.createStock({ product_id: 3, quantity: 50 })
        ])
    });

    product: Product[] = [
        { id: 1, name: 'Macbook Pro', price: 2800 },
        { id: 2, name: 'USB-C Adapter', price: 50 },
        { id: 3, name: 'Ipod', price: 400 },
        { id: 4, name: 'Iphone', price: 900 },
        { id: 5, name: 'Apple Watch', price: 600 }
    ];

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    createStock(stock) {
        return this.fb.group({
            product_id: parseInt(stock.product_id, 10) || '',
            quantity: stock.quantity || 10
        });
    }

    addStock(stock) {
        const control = this.form.get('stock') as FormArray;
        control.push(this.createStock(stock));
    }

    removeStock({ group, index }: { group: FormGroup, index: number }) {
        const control = this.form.get('stock') as FormArray;
        control.removeAt(index);
    }

    onSubmit() {
        console.log('Submit: ', this.form.value);
    }
}
