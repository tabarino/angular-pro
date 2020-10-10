import {
    AfterViewInit,
    Component, TemplateRef,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
    @ViewChild('tpl') tpl: TemplateRef<any>;

    constructor() { }

    ngAfterViewInit(): void {
        this.entry.createEmbeddedView(this.tpl);
    }

    loginUser(user: User) {
        console.log('Login', user);
    }
}
