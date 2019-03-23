// 账户余额查询


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root-component/rootcomponent';

import { FrameworkComponent } from './components/framework/framework.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'qdpview', component: FrameworkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrmBalanceOfBankAccountQryRoutingModule {}


// 日记账查询

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent } from './components/root-component/rootcomponent';
import { FrameworkComponent } from './components/framework/framework.component';
const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'qdpview', component: FrameworkComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FrmUnitJournalQryRoutingModule { }






