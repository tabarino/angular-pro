import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
    Renderer2
} from '@angular/core';

import { User } from './auth-form.interface';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit, AfterContentInit, AfterViewInit {
    showMessage: boolean;
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
    @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
    @ViewChild('email') email: ElementRef;

    constructor(
        private cd: ChangeDetectorRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
    }

    ngAfterContentInit(): void {
        if (this.remember) {
            this.remember.forEach((item) => {
                item.checked.subscribe((checked: boolean) => this.showMessage = checked);
            });
        }
    }

    ngAfterViewInit(): void {
        // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
        // this.email.nativeElement.classList.add('email');
        // this.email.nativeElement.focus();
        this.renderer.setAttribute(this.email.nativeElement, 'placeholder', 'Enter your email address');
        this.renderer.addClass(this.email.nativeElement, 'email');
        this.renderer.selectRootElement('.email').focus();

        if (this.message) {
            this.message.forEach((message) => {
                message.days = 30;
            });
            this.cd.detectChanges();
        }
    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    }
}
