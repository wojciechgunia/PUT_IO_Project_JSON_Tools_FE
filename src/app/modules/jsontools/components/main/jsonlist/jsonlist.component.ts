import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JsontoolsService } from '../../../../core/services/jsontools.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-jsonlist',
  templateUrl: './jsonlist.component.html',
  styleUrls: ['./jsonlist.component.scss'],
})
export class JsonlistComponent implements OnInit {
  jsonData = '';

  form: FormGroup;
  JSONsList: string[] = [];
  JSONControl = new FormControl();

  constructor(
    private jsonservice: JsontoolsService,
    public dialog: MatDialog,
  ) {
    this.form = new FormGroup({
      JSONs: this.JSONControl,
    });
  }

  ngOnInit() {
    this.jsonservice.syncJsonList();
    this.jsonservice.getStringList().subscribe({
      next: (list) => {
        this.JSONsList = list;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onSelectChange(): void {
    const selectedValue: string = this.form.get('JSONs')?.value[0];
    this.jsonservice.getJsonAsStr(selectedValue).subscribe({
      next: (data) => {
        this.jsonData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
