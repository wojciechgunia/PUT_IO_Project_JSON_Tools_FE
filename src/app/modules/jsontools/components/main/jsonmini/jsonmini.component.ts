import { Component, OnInit } from '@angular/core';
import { JsontoolsService } from '../../../../core/services/jsontools.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-jsonmini',
  templateUrl: './jsonmini.component.html',
  styleUrls: ['./jsonmini.component.scss'],
})
export class JsonminiComponent implements OnInit {
  nameControl: FormControl = new FormControl('');
  JSONsList: string[] = [];
  jsonData = '';

  constructor(private jsonservice: JsontoolsService) {}

  ngOnInit() {
    this.jsonservice.syncJsonList();
    this.jsonservice.getJsonList().subscribe({
      next: (list) => {
        this.JSONsList = list;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  minimalize() {
    if (this.nameControl.value != '' && this.nameControl.value != undefined)
      this.jsonservice.getMinimalize(this.nameControl.value).subscribe({
        next: (mini) => {
          this.jsonData = mini;
        },
        error: (err) => {
          console.log(err);
        },
      });
    else this.jsonData = '';
  }
}
