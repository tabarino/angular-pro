import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'example-one',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './one.component.html',
    styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
    @Input() user;

    constructor() { }

    ngOnInit(): void {
    }

    update() {
        this.user.name = 'Matt Skiba';
    }
}
