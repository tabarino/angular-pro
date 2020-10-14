import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-inventory',
    templateUrl: './stock-inventory.component.html',
    styleUrls: ['./stock-inventory.component.scss']
})
export class StockInventoryComponent implements OnInit {
    form = new FormGroup({
        store: new FormGroup({
            branch: new FormControl('B182'),
            code: new FormControl('1234')
        })
    });

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log('Submit: ', this.form.value);
    }
}
