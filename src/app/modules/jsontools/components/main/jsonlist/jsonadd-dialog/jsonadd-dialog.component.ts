import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

export interface DialogData {
  name: string;
  jsonData: string;
}

@Component({
  selector: 'app-jsonadd-dialog',
  templateUrl: './jsonadd-dialog.component.html',
  styleUrls: ['./jsonadd-dialog.component.scss'],
})
export class JsonaddDialogComponent {
  nameControl: FormControl = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<JsonaddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }

  changeJson(json: string): void {
    this.data.jsonData = json;
  }

  addJson() {
    this.data.name = this.nameControl.value;
    this.dialogRef.close(this.data);
  }
}
