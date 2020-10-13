import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthFormModule } from './components/auth-form/auth-form.module';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

import { AppComponent } from './app.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
import { CreditCardDirective } from './directives/credit-card/credit-card.directive';
import { TooltipDirective } from './directives/tooltip/tooltip.directive';
import { MyForDirective } from './directives/my-for/my-for.directive';
import { FilesizePipe } from './pipes/filesize/filesize.pipe';


@NgModule({
    declarations: [
        AppComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        CreditCardDirective,
        TooltipDirective,
        MyForDirective,
        FilesizePipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        AuthFormModule,
        StockInventoryModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
