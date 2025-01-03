import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonfilterComponent } from './jsonfilter.component';

describe('JsonfilterComponent', () => {
  let component: JsonfilterComponent;
  let fixture: ComponentFixture<JsonfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonfilterComponent],
    });
    fixture = TestBed.createComponent(JsonfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
