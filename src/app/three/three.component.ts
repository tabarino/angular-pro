import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'example-three',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './three.component.html',
    styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
