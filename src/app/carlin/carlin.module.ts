import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarlinPageRoutingModule } from './carlin-routing.module';

import { CarlinPage } from './carlin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarlinPageRoutingModule
  ],
  declarations: [CarlinPage]
})
export class CarlinPageModule {}
