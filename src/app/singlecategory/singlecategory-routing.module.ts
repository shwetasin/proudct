import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglecategoryPage } from './singlecategory.page';

const routes: Routes = [
  {
    path: '',
    component: SinglecategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglecategoryPageRoutingModule {}
