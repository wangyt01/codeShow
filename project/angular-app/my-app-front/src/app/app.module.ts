import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import 'hammerjs';
import { KUiChartsComponent } from './kendo-ui-angular/k-ui-charts/k-ui-charts.component';
import { KUiDialogsComponent } from './kendo-ui-angular/k-ui-dialogs/components/k-ui-dialogs.component';

import { KUiDialogsWindowComponent } from './kendo-ui-angular/k-ui-dialogs/k-ui-dialogs-window/k-ui-dialogs-window.component';
import { KUiGaugesComponent } from './kendo-ui-angular/k-ui-gauges/k-ui-gauges.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KUiTooltipComponent } from './kendo-ui-angular/k-ui-tooltip/k-ui-tooltip.component';
import { KUiTreeviewComponent } from './kendo-ui-angular/k-ui-treeview/k-ui-treeview.component';
import { KUiRippleComponent } from './kendo-ui-angular/k-ui-ripple/k-ui-ripple.component';
import { OrderListComponent } from './order-list/components/order-list.component';
import { ProductListComponent } from './product-list/components/product-list.component';
import { OrderDetailComponent } from './order-detail/components/order-detail.component';
import { ProductDetailComponent } from './product-detail/components/product-detail.component';
import { from } from 'rxjs';
import { KUiButtonComponent } from './kendo-ui-angular/k-ui-button/components/k-ui-button.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    ProductListComponent,
    OrderDetailComponent,
    ProductDetailComponent,
    KUiButtonComponent,
    KUiChartsComponent,
    KUiDialogsComponent,
    KUiDialogsWindowComponent,
    KUiGaugesComponent,
    KUiTooltipComponent,
    KUiTreeviewComponent,
    KUiRippleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    DialogsModule,
    GaugesModule,
    InputsModule,
    TreeViewModule,
    RippleModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
