import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoncompareComponent } from './jsoncompare.component';

describe('JsoncompareComponent', () => {
  let component: JsoncompareComponent;
  let fixture: ComponentFixture<JsoncompareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsoncompareComponent],
    });
    fixture = TestBed.createComponent(JsoncompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
