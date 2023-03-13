import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglecategoryPageRoutingModule } from './singlecategory-routing.module';

import { SinglecategoryPage } from './singlecategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SinglecategoryPageRoutingModule
  ],
  declarations: [SinglecategoryPage]
})
export class SinglecategoryPageModule {}
