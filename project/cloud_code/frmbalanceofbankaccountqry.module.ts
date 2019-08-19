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
import { FlexLayoutModule } from '@farris/ui-flex-layout';
import { FarrisFormsModule } from '@farris/ui-forms';
import { FormMessageModule } from '@farris/ui-forms/validation-message';
import { LoadingModule, } from '@farris/ui-loading';
import { MessagerModule } from '@farris/ui-messager';
import { NotifyModule } from '@farris/ui-notify';
import { LookupModule } from '@farris/ui-lookup';
import { TreeTableModule } from '@farris/ui-treetable';
import { FieldGroupModule } from '@farris/ui-field-group';
import { FResponseToolbarModule } from '@farris/ui-response-toolbar';
import { BE_SERVER_URI_TOKEN, FrameworkSessionService } from '@farris/bef';
import { LangPipe } from './lang/lang-pipe';
import { QueryFrameworkModule } from '@qdp/query-framework';
import { SpreadModule } from '@qdp/spread';
// import { EchartsModule } from '@qdp/echarts';
import { QdpCommonModule, Server_Host, Load_Data_Uri } from '@qdp/common';
import { FinishLoadService } from '@qdp/condition-schema';
import { FrmBalanceOfBankAccountQryRoutingModule } from './routing';
import { BalanceOfBankAccountRepository } from './models/balanceofbankaccountrepository';
import { EchartsModule } from '@qdp/echarts';
import { RootComponent } from './components/root-component/rootcomponent';
import { BasicFormComponent } from './components/basic-form-component/basicformcomponent';
// ++
import { FrameworkComponent } from './components/framework/framework.component';

@NgModule({
  exports: [
    RootComponent
  ],
  declarations: [
    LangPipe,
    RootComponent,
    BasicFormComponent,
    // ++
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
    FlexLayoutModule,
    LoadingModule.forRoot(),
    MessagerModule.forRoot(),
    NotifyModule.forRoot(),
    LookupModule,
    TreeTableModule,
    FieldGroupModule,
    // InputModeModule,
    QdpCommonModule.forRoot(),
    QueryFrameworkModule,
    SpreadModule.forRoot(),
    FResponseToolbarModule,
    FarrisFormsModule,
    FormMessageModule,
    FrmBalanceOfBankAccountQryRoutingModule,
    EchartsModule
  ],
  providers: [
    FARRIS_DEVKIT_APP_PROVIDERS,
    { provide: LOCALE_ID, useValue: 'zh' },
    FrameworkSessionService,
    FinishLoadService,
    {
      provide: BE_SERVER_URI_TOKEN,
      useFactory: function () { return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; }
    },
    {
      provide: Server_Host,
      useFactory: function () { return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; }
    },
    // {
    //   provide: Load_Data_Uri,
    //   useValue: '/api/tm/cm/v1.0/balanceofba/query'
    // },
    BalanceOfBankAccountRepository

  ]
})
export class FrmBalanceOfBankAccountQryModule {
  constructor() { }
}
