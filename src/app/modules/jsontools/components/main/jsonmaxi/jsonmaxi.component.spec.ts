import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonmaxiComponent } from './jsonmaxi.component';

describe('JsonmaxiComponent', () => {
  let component: JsonmaxiComponent;
  let fixture: ComponentFixture<JsonmaxiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonmaxiComponent]
    });
    fixture = TestBed.createComponent(JsonmaxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
