import { Component, OnInit } from '@angular/core';

interface File {
    name: string;
    size: number;
    type: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    files: File[];

    constructor() { }

    ngOnInit() {
        this.files = [
            { name: 'logo.svg', size: 2120109, type: 'image/svg' },
            { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
            { name: 'background.png', size: 1784562, type: 'image/png' }
        ];
    }
}
