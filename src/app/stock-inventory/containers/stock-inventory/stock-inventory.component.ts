import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item, Product } from '../../models/product.interface';
import { StockInventoryService } from '../../services/stock-inventory.service';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'stock-inventory',
    templateUrl: './stock-inventory.component.html',
    styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
    products: Product[];
    productMap: Map<number, Product>;
    total: number;
    form = this.fb.group({
        store: this.fb.group({
            branch: ['', Validators.required],
            code: ['', Validators.required]
        }),
        selector: this.createStock({}),
        stock: this.fb.array([])
    });

    constructor(private fb: FormBuilder, private stockService: StockInventoryService) { }

    ngOnInit(): void {
        const cart = this.stockService.getCartItems();
        const products = this.stockService.getProducts();

        forkJoin([cart, products]).subscribe(([cartItems, productItems]: [Item[], Product[]]) => {
            const myMap = productItems.map<[number, Product]>(product => [product.id, product]);
            this.productMap = new Map<number, Product>(myMap);
            this.products = productItems;
            cartItems.forEach(item => this.addStock(item));

            this.calculateTotal(this.form.get('stock').value);
            this.form.get('stock').valueChanges.subscribe(value => this.calculateTotal(value));
        });
    }

    calculateTotal(value: Item[]) {
        this.total = value.reduce((prev, next) => {
            return prev + (next.quantity * this.productMap.get(next.product_id).price);
        }, 0);
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
