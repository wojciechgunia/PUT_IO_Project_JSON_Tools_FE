import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { SharedModule } from '../shared/shared.module';
import { JsonlistComponent } from './components/main/jsonlist/jsonlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { JsonaddDialogComponent } from './components/main/jsonlist/jsonadd-dialog/jsonadd-dialog.component';
import { JsonminiComponent } from './components/main/jsonmini/jsonmini.component';

@NgModule({
  declarations: [
    MainComponent,
    JsonlistComponent,
    JsonaddDialogComponent,
    JsonminiComponent,
  ],
  imports: [SharedModule, ReactiveFormsModule, MatDialogModule, FormsModule],
  exports: [MainComponent],
})
export class JsontoolsModule {}
