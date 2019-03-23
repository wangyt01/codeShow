import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IntlModule } from '@progress/kendo-angular-intl';
import '@progress/kendo-angular-intl/locales/zh/all';
import { FARRIS_DEVKIT_APP_PROVIDERS } from '@farris/devkit';
import { KendoBindingModule } from '@farris/kendo-binding';
import { FlexLayoutMoudle, LoadingModule, MessagerModule, NotifyModule, LookupModule, TreeTableModule, FieldGroupModule, InputModeModule, FResponseToolbarModule } from '@farris/ui';
import { BE_SERVER_URI_TOKEN, FrameworkSessionService } from '@farris/bef';
import { LangPipe } from './lang/lang-pipe';
import { FrmBalanceOfBankAccountQryRoutingModule } from './routing';
import { BalanceOfBankAccountRepository } from './models/balanceofbankaccountrepository';
import { EchartsModule } from '@qdp/ui';
import { RootComponent } from './components/root-component/rootcomponent';
import { BasicFormComponent } from './components/basic-form-component/basicformcomponent';

import { FrameworkComponent } from './components/framework/framework.component';
import { QueryFrameworkModule, SpreadModule, Server_Host, Load_Data_Uri } from '@qdp/ui';
@NgModule({
  declarations: [
    LangPipe,
    RootComponent,
    BasicFormComponent,
    FrameworkComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GridModule,
    DateInputsModule,
    DropDownsModule,
    ButtonsModule,
    InputsModule,
    LayoutModule,
    IntlModule,
    KendoBindingModule,
    FlexLayoutMoudle,
    LoadingModule.forRoot(),
    MessagerModule.forRoot(),
    NotifyModule.forRoot(),
    LookupModule,
    TreeTableModule,
    FieldGroupModule,
    InputModeModule,
    FResponseToolbarModule,
    FrmBalanceOfBankAccountQryRoutingModule,
    EchartsModule,
    // 导入查询结果页模块QueryFrameworkModule SpreadModule
    QueryFrameworkModule,
    SpreadModule.forRoot()
  ],
  providers: [
    FARRIS_DEVKIT_APP_PROVIDERS,
    { provide: LOCALE_ID, useValue: 'zh' },
    FrameworkSessionService,
    {
      provide: BE_SERVER_URI_TOKEN,
      useFactory: function () { return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; }
    },
    {
      provide: Server_Host,
      useFactory: function() { return `${window.location.protocol}//${window.location.hostname}:5000`; }
    },
    {
      provide: Load_Data_Uri,
      useValue: '/api/tm/cm/v1.0/balanceofba/query'
    },
    BalanceOfBankAccountRepository

  ]
})
export class FrmBalanceOfBankAccountQryModule {
  constructor() {}
}

