import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StockCounterComponent),
    multi: true
};

@Component({
    selector: 'stock-counter',
    providers: [COUNTER_CONTROL_ACCESSOR],
    templateUrl: './stock-counter.component.html',
    styleUrls: ['./stock-counter.component.scss']
})
export class StockCounterComponent implements OnInit, ControlValueAccessor {
    @Input() step = 10;
    @Input() min = 10;
    @Input() max = 1000;

    value = 10;

    private onTouch: () => void;
    private onModelChange: (value) => void;

    constructor() { }

    ngOnInit(): void {
    }

    registerOnChange(fn: any): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    writeValue(value: any): void {
        this.value = value || 10;
    }

    increment() {
        this.onTouch();
        if (this.value < this.max) {
            this.value = this.value + this.step;
            this.onModelChange(this.value);
        }
    }

    decrement() {
        this.onTouch();
        if (this.value > this.min) {
            this.value = this.value - this.step;
            this.onModelChange(this.value);
        }
    }
}
