import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToogleComponent } from './toogle.component';

@NgModule({
  declarations: [ToogleComponent],
  imports: [CommonModule],
  exports: [ToogleComponent],
})
export class ToogleModule {}
