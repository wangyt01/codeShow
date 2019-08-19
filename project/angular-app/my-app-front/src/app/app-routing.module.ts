import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppModule } from './app.module';
import { OrderListComponent } from './order-list/components/order-list.component';
import { OrderDetailComponent } from './order-detail/components/order-detail.component';
import { ProductListComponent } from './product-list/components/product-list.component';
import { ProductDetailComponent } from './product-detail/components/product-detail.component';
import { KUiButtonComponent } from './kendo-ui-angular/k-ui-button/components/k-ui-button.component';
import { KUiChartsComponent } from './kendo-ui-angular/k-ui-charts/k-ui-charts.component';
import { KUiDialogsComponent } from './kendo-ui-angular/k-ui-dialogs/components/k-ui-dialogs.component';
import { KUiDialogsWindowComponent } from './kendo-ui-angular/k-ui-dialogs/k-ui-dialogs-window/k-ui-dialogs-window.component';
import { KUiGaugesComponent } from './kendo-ui-angular/k-ui-gauges/k-ui-gauges.component';
import { KUiTooltipComponent } from './kendo-ui-angular/k-ui-tooltip/k-ui-tooltip.component';
import { KUiTreeviewComponent } from './kendo-ui-angular/k-ui-treeview/k-ui-treeview.component';
import { KUiRippleComponent } from './kendo-ui-angular/k-ui-ripple/k-ui-ripple.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-detail', component: ProductDetailComponent },
  { path: 'k-ui-button', component: KUiButtonComponent },
  { path: 'k-ui-charts', component: KUiChartsComponent },
  { path: 'k-ui-dialogs', component: KUiDialogsComponent },
  { path: 'k-ui-dialogs-window', component: KUiDialogsWindowComponent },
  { path: 'k-ui-gauges', component: KUiGaugesComponent },
  { path: 'k-ui-tooltip', component: KUiTooltipComponent },
  { path: 'k-ui-treeview', component: KUiTreeviewComponent },
  { path: 'k-ui-ripple', component: KUiRippleComponent },
];

// { path: '', component:  },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
