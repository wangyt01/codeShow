
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 16:05:43
 * @LastEditTime: 2019-09-26 19:20:19
 * @LastEditors: Please set LastEditors
 */
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
import { KendoBindingModule } from '@farris/kendo-binding';
import { FlexLayoutModule } from '@farris/ui-flex-layout';
import {FarrisFormsModule} from  '@farris/ui-forms';
import { FormMessageModule } from '@farris/ui-forms/validation-message';
import { LoadingModule, } from '@farris/ui-loading';
import { MessagerModule } from '@farris/ui-messager';
import { NotifyModule } from '@farris/ui-notify';
import { LookupModule } from '@farris/ui-lookup';
import { TreeTableModule } from '@farris/ui-treetable';
import { FieldGroupModule } from '@farris/ui-field-group';
import { FResponseToolbarModule } from '@farris/ui-response-toolbar';
import { BE_SERVER_URI_TOKEN } from '@farris/bef';
import { LangPipe } from './lang/lang-pipe';
import { FarrisTabsModule } from '@farris/ui-tabs';
import { FarrisTagModule } from '@farris/ui-tag';
import { FarrisSidebarModule } from '@farris/ui-sidebar';
import { UploadDialogMoudle } from '@gsp-svc/formdoc-upload';
import { FarrisSectionModule } from '@farris/ui-section';
import { FarrisDatePickerModule } from '@farris/ui-datepicker';
import { FarrisTimeSpinnerModule } from '@farris/ui-time-spinner';
import { DatagridModule } from '@farris/ui-datagrid';
import { WizardModule } from '@farris/ui-wizard';
import { QuerySolutionModule } from '@gsp-cmp/querysolution';
import {FarrisButtonModule} from '@farris/ui-button';
import {FARRIS_DEVKIT_APP_PROVIDERS} from '@farris/devkit';
import { CommandServicesModule } from '@farris/command-services';
import { ListViewModule } from '@farris/ui-list-view';
import { TimePickerModule }  from '@farris/ui-time-picker';
import { AngularDraggableModule } from '@farris/ui-draggable';
import { SplitterModule } from '@farris/ui-splitter';
import { ListNavModule } from '@farris/ui-list-nav';
import { TextModule } from '@farris/ui-text';
import { WFRuntimeModule } from '@gsp-wf/rtdevkit'
import { MultiSelectModule } from '@farris/ui-multi-select';
import { InputGroupModule } from '@farris/ui-input-group';


import { FrmBalanceOfBankAccountQryRoutingModule } from './routing';
import { RootComponent } from './components/root-component/rootcomponent';
import { BasicFormComponent } from './components/basic-form-component/basicformcomponent';

// ++
import { FrameworkComponent } from './components/framework/framework.component';
import { BalanceOfBankAccountRepository } from './models/balanceofbankaccountrepository';
import { QueryFrameworkModule } from '@qdp/query-framework';
import { SpreadModule } from '@qdp/spread';
import { FinishLoadService } from '@qdp/condition-schema';
import { EchartsModule } from '@qdp/echarts';
import { QdpCommonModule, Server_Host, Load_Data_Uri } from '@qdp/common';


@NgModule({
  exports:[
    RootComponent
 ],
 entryComponents:[
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
    FarrisTabsModule,
    FarrisTagModule,
    FarrisSidebarModule,
    UploadDialogMoudle,
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
    FarrisSectionModule,
    DatagridModule,
    FarrisDatePickerModule,
    FarrisTimeSpinnerModule,
    WizardModule,
    QuerySolutionModule,
    FarrisButtonModule,
    CommandServicesModule,
    ListViewModule,
    TimePickerModule,
    AngularDraggableModule,
    SplitterModule,
    ListNavModule,
    TextModule,
    WFRuntimeModule,
    MultiSelectModule,
    InputGroupModule,    FResponseToolbarModule,
    FarrisFormsModule,
    FormMessageModule,
    FrmBalanceOfBankAccountQryRoutingModule,
    // ++
    QueryFrameworkModule,
    QdpCommonModule.forRoot(),
    SpreadModule,
    EchartsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh' },
     FARRIS_DEVKIT_APP_PROVIDERS,
     // ++
    FinishLoadService,
    {
      provide: BE_SERVER_URI_TOKEN,
      useFactory: function () { return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; }
    },
    {
      provide: Server_Host,
      useFactory: function () { return `${window.location.protocol}//${window.location.hostname}:${window.location.port}`; }
    },
    BalanceOfBankAccountRepository
  ]
})
export class FrmBalanceOfBankAccountQryModule {
  constructor() {}
}


/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 16:05:30
 * @LastEditTime: 2019-09-05 16:05:30
 * @LastEditors: your name
 */
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule , SystemJsNgModuleLoaderConfig } from '@angular/core'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module'; 
import { HttpClientModule } from '@angular/common/http';
import { CacheService, HttpService, SessionService } from '@ecp-caf/caf-common';
import { FrameworkService, FrmEventBus, LoadingService,AppService, FuncsService } from '@gsp-sys/rtf-common';
import { CommonModule } from '@angular/common';
import { FrmBalanceOfBankAccountQryModule } from './frmbalanceofbankaccountqry/frmbalanceofbankaccountqry.module';

@NgModule({
declarations: [
   AppComponent 
  ],
  imports: [
  BrowserModule,
  BrowserAnimationsModule,
 AppRoutingModule,
 CommonModule,
 FrmBalanceOfBankAccountQryModule,
 HttpClientModule  ],
        providers: [
            CacheService,
            SessionService,
            FrmEventBus,
            HttpService,
            FuncsService,
            AppService,
            LoadingService,
            FrameworkService,
            {
                provide: SystemJsNgModuleLoaderConfig, useValue: {
                  factoryPathPrefix: '',
                  factoryPathSuffix: '.js'
                }
              }
        ],
        bootstrap: [AppComponent]
      })
export class AppModule { }


























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

