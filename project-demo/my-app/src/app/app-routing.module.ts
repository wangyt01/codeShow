import { NgModule } from '@angular/core';
// 要使用路由功能，并且你要用到 RouterLink,.forRoot() 和 .forChild() 时
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { OpenCloseComponent } from './modules/open-close/open-close.component';
import { HeroFormComponent } from './modules/hero-form/hero-form.component';
import { HeroTemplateComponent } from './modules/hero-template/hero-template.component';
import { NameEditorComponent } from './modules/name-editor/name-editor.component';
import { ZorroComponent } from './modules/zorro/zorro.component';
import { RxjsDemoComponent } from './modules/rxjs-demo/rxjs-demo.component';
import { ConfigComponent } from './modules/config/config.component';
import { ParameterSettingComponent } from './modules/parameter-setting/parameter-setting.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'open-close', component: OpenCloseComponent },
  { path: 'hero-form', component: HeroFormComponent },
  { path: 'hero-template', component: HeroTemplateComponent },
  { path: 'name-editor', component: NameEditorComponent },
  { path: 'zorro', component: ZorroComponent },
  { path: 'rxjx-demo', component: RxjsDemoComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'parameter-setting', component: ParameterSettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
