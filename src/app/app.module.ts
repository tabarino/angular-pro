import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthFormModule } from './auth-form/auth-form.module';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { CreditCardDirective } from './credit-card/credit-card.directive';

@NgModule({
    declarations: [
        AppComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        CreditCardDirective
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AuthFormModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
