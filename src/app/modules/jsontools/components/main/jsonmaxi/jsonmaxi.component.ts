import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsontoolsService } from '../../../../core/services/jsontools.service';

@Component({
  selector: 'app-jsonmaxi',
  templateUrl: './jsonmaxi.component.html',
  styleUrls: ['./jsonmaxi.component.scss']
})
export class JsonmaxiComponent {
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

  maximalize() {
    if (this.nameControl.value != '' && this.nameControl.value != undefined)
      this.jsonservice.getMaximalize(this.nameControl.value).subscribe({
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
