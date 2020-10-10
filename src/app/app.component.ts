import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ComponentFactoryResolver, ComponentRef,
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
    component: ComponentRef<AuthFormComponent>;
    @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

    constructor(
        private resolver: ComponentFactoryResolver,
        private cd: ChangeDetectorRef
    ) { }

    ngAfterViewInit(): void {
        const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
        this.entry.createComponent(authFormFactory);
        this.component = this.entry.createComponent(authFormFactory, 0);
        this.component.instance.title = 'Create Account';
        this.component.instance.submitted.subscribe(this.loginUser);
        this.cd.detectChanges();
    }

    loginUser(user: User) {
        console.log('Login', user);
    }

    moveComponent() {
        this.entry.move(this.component.hostView, 1);
    }

    destroyComponent() {
        this.component.destroy();
    }
}
