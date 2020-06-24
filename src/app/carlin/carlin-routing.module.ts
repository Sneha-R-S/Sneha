import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarlinPage } from './carlin.page';

const routes: Routes = [
  {
    path: '',
    component: CarlinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarlinPageRoutingModule {}
