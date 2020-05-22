import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './content/list/list.component';


@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    ContentComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
