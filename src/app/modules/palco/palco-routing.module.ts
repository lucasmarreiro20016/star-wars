import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PalcoComponent } from './palco/palco.component';

const routes: Routes = [
  {path: '', component: PalcoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PalcoRoutingModule { }
