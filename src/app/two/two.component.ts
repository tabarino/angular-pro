import { ChangeDetectionStrategy, Component, Input, OnInit,  } from '@angular/core';

@Component({
    selector: 'example-two',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './two.component.html',
    styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
    @Input() user;

    constructor() { }

    ngOnInit(): void {
    }

    update() {
        this.user.name = 'Scott Raynor';
    }
}
