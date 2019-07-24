import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PalcoRoutingModule } from './palco-routing.module';
import { PalcoComponent } from './palco/palco.component';
import { StarsComponent } from 'src/app/shared/components/stars/stars.component';
import { SpaceshipComponent } from 'src/app/shared/components/spaceship/spaceship.component';

@NgModule({
  declarations: [
    PalcoComponent,
    StarsComponent,
    SpaceshipComponent
  ],
  imports: [
    CommonModule,
    PalcoRoutingModule
  ]
})
export class PalcoModule { }
