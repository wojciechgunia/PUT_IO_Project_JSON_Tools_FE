import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonminiComponent } from './jsonmini.component';

describe('JsonminiComponent', () => {
  let component: JsonminiComponent;
  let fixture: ComponentFixture<JsonminiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonminiComponent],
    });
    fixture = TestBed.createComponent(JsonminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
