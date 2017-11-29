import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarComponent } from '../shared/star.component'
import { ConvertToSpacePipe } from '../shared/convert-to-space.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe
  ],
  exports: [
    StarComponent,
    ConvertToSpacePipe
  ]
})
export class SharedModule { }
