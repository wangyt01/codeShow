import { ModuleWithProviders,NgModule,Optional,SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { UserServiceConfig } from './user.service';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ TitleComponent ],
  exports:      [ TitleComponent ],
  providers:    [ UserService ]
})
// static forRoot(config: UserServiceConfig):ModuleWithProviders{
//   return {
//     NgModule: CoreModule,
//     providers:[
//       {provide:UserService,useValue:config}
//     ]
//   }
// }
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule:CoreModule){
    if(parentModule){
      throw new Error(
        'Coremodule is already loaded.Import it in the AppModule only'
      );
    }
  }
  static forRoot(config:UserServiceConfig): ModuleWithProviders{
    return {
      ngModule: CoreModule,
      providers:[
        {provide:UserServiceConfig,useValue:config}
      ]
    }
  }
}
