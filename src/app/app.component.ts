import {
    AfterViewInit, ChangeDetectorRef,
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

    constructor(private cd: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this.entry.createEmbeddedView(this.tpl, {
            $implicit: 'Ivan Tabarino',
            location: 'Portugal, PT'
        });
        this.cd.detectChanges();
    }

    loginUser(user: User) {
        console.log('Login', user);
    }
}
