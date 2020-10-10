import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.Default,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    user: any = {
        name: 'Mark Hoppus',
        age: 44,
        location: 'California'
    };

    constructor() { }

    addProp() {
        this.user.email = 'blink@blink-182.net';
    }

    changeName() {
        this.user.name = 'Travis Barker';
    }

    changeUser() {
        this.user = {
            name: 'Tom Delonge',
            age: 41,
            location: 'California'
        };
    }
}
