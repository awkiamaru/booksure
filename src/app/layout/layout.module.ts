import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './content/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookComponent } from './content/book/book.component';
import { HomeComponent } from './content/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    ListComponent,
    BookComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [ContentComponent, HeaderComponent, FooterComponent],
})
export class LayoutModule {
  constructor() {
    library.add(faGithub, faLinkedin);
  }
}
