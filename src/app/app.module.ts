import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './01-content-projection/content-projection.component';
import { AuthFormComponent } from './01-content-projection/auth-form/auth-form.component';

@NgModule({
    declarations: [
        AppComponent,
        ContentProjectionComponent,
        AuthFormComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
