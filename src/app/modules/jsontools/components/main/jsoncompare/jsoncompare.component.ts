import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JsontoolsService } from '../../../../core/services/jsontools.service';

interface LineDifferences {
  differingLines: number[];
  json1LineCount: number;
  json2LineCount: number;
}

function parseJsonDifferences(
  input: string,
  json1: string,
  json2: string,
): LineDifferences {
  const differingLines: number[] = [];
  let json1LineCount = 0;
  let json2LineCount = 0;

  const lines = input.split('\n');

  for (const line of lines) {
    const lineDifferenceMatch = line.match(/^(\d+):/);
    if (lineDifferenceMatch) {
      differingLines.push(parseInt(lineDifferenceMatch[1], 10));
    }
    const regex = new RegExp('- ' + json1 + ':\\s*(\\d+)');
    const json1LineCountMatch = line.match(regex);
    if (json1LineCountMatch) {
      json1LineCount = parseInt(json1LineCountMatch[1], 10);
    }

    const regex2 = new RegExp('- ' + json2 + ':\\s*(\\d+)');
    const json2LineCountMatch = line.match(regex2);
    if (json2LineCountMatch) {
      json2LineCount = parseInt(json2LineCountMatch[1], 10);
    }
  }

  return {
    differingLines,
    json1LineCount,
    json2LineCount,
  };
}

@Component({
  selector: 'app-jsoncompare',
  templateUrl: './jsoncompare.component.html',
  styleUrls: ['./jsoncompare.component.scss'],
})
export class JsoncompareComponent implements OnInit {
  nameControl1: FormControl = new FormControl('');
  nameControl2: FormControl = new FormControl('');
  JSONsList: string[] = [];
  jsonData1 = '';
  jsonData2 = '';
  JSONLinesDif: number[] = [];
  JSONLinesAdd: number[] = [];

  constructor(private jsonservice: JsontoolsService) {}

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

  compare() {
    if (
      this.nameControl1.value != '' &&
      this.nameControl1.value != undefined &&
      this.nameControl2.value != '' &&
      this.nameControl2.value != undefined
    ) {
      this.jsonservice.getJsonAsStr(this.nameControl1.value).subscribe({
        next: (data) => {
          this.jsonData1 = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.jsonservice.getJsonAsStr(this.nameControl2.value).subscribe({
        next: (data) => {
          this.jsonData2 = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
      this.jsonservice
        .getCompared(this.nameControl1.value, this.nameControl2.value)
        .subscribe({
          next: (data) => {
            const info: LineDifferences = parseJsonDifferences(
              data,
              this.nameControl1.value,
              this.nameControl2.value,
            );
            console.log(data);
            console.log(info);
            this.JSONLinesDif = info.differingLines;
            if (info.json1LineCount > info.json2LineCount)
              this.JSONLinesAdd = Array.from(
                { length: info.json1LineCount - info.json2LineCount + 1 },
                (_, index) => info.json2LineCount + 1 + index,
              );
            else if (info.json1LineCount < info.json2LineCount)
              this.JSONLinesAdd = Array.from(
                { length: info.json2LineCount - info.json1LineCount + 1 },
                (_, index) => info.json1LineCount + 1 + index,
              );
            else this.JSONLinesAdd = [];
          },
          error: (err) => {
            console.log(err);
          },
        });
    } else {
      this.jsonData1 = '';
      this.jsonData2 = '';
    }
  }
}
