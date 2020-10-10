import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'example-two',
    encapsulation: ViewEncapsulation.ShadowDom,
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
    }
}
