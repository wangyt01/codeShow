// 账户余额查询

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent as FrmBalanceOfBankAccountQryRootComponent } from './FrmBalanceOfBankAccountQry/components/root-component/rootcomponent';
import { FrameworkComponent } from './FrmBalanceOfBankAccountQry/components/framework/framework.component';
const routes: Routes = [
  { path: '', component: FrmBalanceOfBankAccountQryRootComponent },
  { path: 'qdpview', component: FrameworkComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// 日记账查询

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootComponent as FrmUnitJournalQryRootComponent } from './FrmUnitJournalQry/components/root-component/rootcomponent';
import { FrameworkComponent } from './FrmUnitJournalQry/components/framework/framework.component';
const routes: Routes = [
{path: '',component:FrmUnitJournalQryRootComponent},
  { path: 'qdpview', component: FrameworkComponent }
];
@NgModule({
            imports: [RouterModule.forRoot(routes, { useHash: true })],
            exports: [RouterModule]
          })
          export class AppRoutingModule { }





