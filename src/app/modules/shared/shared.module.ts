import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, MaterialModule],
  exports: [CommonModule, MaterialModule, HttpClientModule],
})
export class SharedModule {}
