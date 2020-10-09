import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
    declarations: [
        AppComponent,
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
