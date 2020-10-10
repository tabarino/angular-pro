import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver,
    ViewChild,
    ViewContainerRef
} from '@angular/core';

import { User } from './auth-form/auth-form.interface';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

    constructor(
        private resolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
        const component = this.entry.createComponent(authFormFactory);
        component.instance.title = 'Create Account';
        this.cd.detectChanges();
    }

    loginUser(user: User) {
        console.log('Login', user);
    }
}
