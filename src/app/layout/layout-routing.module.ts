import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BookComponent } from './content/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'book/:id',
    component: BookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
