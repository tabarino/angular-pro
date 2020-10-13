import { Component, OnInit } from '@angular/core';

import { FilesizePipe } from './pipes/filesize/filesize.pipe';

interface File {
    name: string;
    size: any;
    type: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [FilesizePipe]
})
export class AppComponent implements OnInit {
    files: File[];
    mapped: File[];

    constructor(private filesizePipe: FilesizePipe) { }

    ngOnInit() {
        this.files = [
            { name: 'logo.svg', size: 2120109, type: 'image/svg' },
            { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
            { name: 'background.png', size: 1784562, type: 'image/png' }
        ];

        this.mapped = this.files.map(file => {
            return {
                name: file.name,
                type: file.type,
                size: this.filesizePipe.transform(file.size, 'Megabytes')
            };
        });
    }
}
