import { Component, OnInit } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
    selector: 'content-projection',
    templateUrl: './content-projection.component.html',
    styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    createUser(user: User) {
        console.log('Create User', user);
    }

    loginUser(user: User) {
        console.log('Login', user);
    }
}
