// 当你想要在浏览器中运行应用时
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 当你要和服务器对话时
import { HttpClientModule } from '@angular/common/http';
// 当要构建模板驱动表单时（它包含 NgModel)
import { FormsModule } from '@angular/forms';
// 当要构建响应式表单时
import { ReactiveFormsModule } from '@angular/forms';
// css动画模块引入
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// 配置 angular i18n
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// 响应式表单
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Material(UI组件)
import { DevAppMaterialModule } from './material-module';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';
import 'hammerjs';

// module(模型)
import { AppRoutingModule } from './app-routing.module';
import { CustomerDashboardModule } from './modules/customer-dashboard/customer-dashboard.module';
// component(组件)
import { AppComponent } from './app.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { CHeaderComponent } from './modules/c-header/c-header.component';
import { CFooterComponent } from './modules/c-footer/c-footer.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { MessagesComponent } from './modules/messages/messages.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component'; // <-- NgModel lives here
import { HeroSearchComponent } from './modules/hero-search/hero-search.component';
import { OpenCloseComponent } from './modules/open-close/open-close.component';
import { HeroFormComponent } from './modules/hero-form/hero-form.component';
import { HeroTemplateComponent } from './modules/hero-template/hero-template.component';
import { NameEditorComponent } from './modules/name-editor/name-editor.component';
import { ProfileEditorComponent } from './modules/profile-editor/profile-editor.component';
import { ConfigComponent } from './modules/config/config.component';
import { ZorroComponent } from './modules/zorro/zorro.component';
import { RxjsDemoComponent } from './modules/rxjs-demo/rxjs-demo.component';
import { ParameterSettingComponent } from './modules/parameter-setting/parameter-setting.component';
import { AddressFormDemoComponent } from './modules/material-demo/address-form-demo/address-form-demo.component';
import { DashboardDemoComponent } from './modules/material-demo/dashboard-demo/dashboard-demo.component';
import { DragDropDemoComponent } from './modules/material-demo/drag-drop-demo/drag-drop-demo.component';
import { NavDemoComponent } from './modules/material-demo/nav-demo/nav-demo.component';
import { TableDemoComponent } from './modules/material-demo/table-demo/table-demo.component';
import { TreeDemoComponent } from './modules/material-demo/tree-demo/tree-demo.component';
import { MaterialDemoComponent } from './modules/material-demo/material-demo.component';

// service(服务)
import { InMemoryDataService } from './service/in-memory-data.service';

import { LayoutModule } from '@angular/cdk/layout';
import { ThreeDemoComponent } from './modules/three-demo/three-demo.component';
registerLocaleData(zh);

@NgModule({
  // declarations（可声明对象表） —— 那些属于本 NgModule 的组件、指令、管道。
  declarations: [
    AppComponent,
    HeroesComponent,
    CHeaderComponent,
    CFooterComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    OpenCloseComponent,
    HeroFormComponent,
    HeroTemplateComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    ZorroComponent,
    RxjsDemoComponent,
    ConfigComponent,
    ParameterSettingComponent,
    AddressFormDemoComponent,
    NavDemoComponent,
    TableDemoComponent,
    DashboardDemoComponent,
    TreeDemoComponent,
    DragDropDemoComponent,
    MaterialDemoComponent,
    ThreeDemoComponent,
  ],
  // imports（导入表） —— 那些导出了本模块中的组件模板所需的类的其它模块。
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerDashboardModule,
    DevAppMaterialModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    LayoutModule,
  ],
  bootstrap: [AppComponent],
  // 提供服务 https://www.angular.cn/guide/architecture-services
  // providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  providers: [{
    provide: MATERIAL_SANITY_CHECKS,
    useValue: false
  }]
})

export class AppModule { }
