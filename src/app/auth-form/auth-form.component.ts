import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { User } from './auth-form.interface';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
    title = 'Login';
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit(value: User) {
        this.submitted.emit(value);
    }
}
