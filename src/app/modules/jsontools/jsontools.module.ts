import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { JsonlistComponent } from './components/main/jsonlist/jsonlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [MainComponent, JsonlistComponent],
  imports: [SharedModule, ReactiveFormsModule, MatDialogModule, FormsModule],
  exports: [MainComponent],
})
export class JsontoolsModule {}
