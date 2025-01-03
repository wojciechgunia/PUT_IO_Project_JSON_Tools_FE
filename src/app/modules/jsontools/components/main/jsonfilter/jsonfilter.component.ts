import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsontoolsService } from '../../../../core/services/jsontools.service';

@Component({
  selector: 'app-jsonfilter',
  templateUrl: './jsonfilter.component.html',
  styleUrls: ['./jsonfilter.component.scss'],
})
export class JsonfilterComponent implements OnInit {
  nameControl: FormControl = new FormControl('');
  keyControl: FormControl = new FormControl('');
  JSONsList: string[] = [];
  jsonData = '';

  filterkeys: string[] = [];

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

  filter() {
    if (this.nameControl.value != '' && this.nameControl.value != undefined) {
      if (this.filterkeys.length == 0) {
        this.jsonservice.getJsonAsStr(this.nameControl.value).subscribe({
          next: (json) => {
            this.jsonData = json;
          },
          error: (err) => {
            console.log(err);
          },
        });
      } else {
        this.jsonservice
          .getFiltered(this.nameControl.value, this.filterkeys.join(','))
          .subscribe({
            next: (mini) => {
              this.jsonData = mini;
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    } else this.jsonData = '';
  }

  deleteKey(key: string) {
    return (this.filterkeys = this.filterkeys.filter(
      (element) => element !== key,
    ));
  }

  addKey() {
    if (this.keyControl.value != '' && this.keyControl.value != undefined) {
      this.filterkeys.push(this.keyControl.value);
      this.keyControl.reset();
    }
  }
}
