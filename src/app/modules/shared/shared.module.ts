import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JsonCodemirrorComponent } from './components/codemirror/jsoncodemirror.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [JsonCodemirrorComponent],
  imports: [CommonModule, CodemirrorModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    MaterialModule,
    JsonCodemirrorComponent,
    HttpClientModule,
  ],
})
export class SharedModule {}
