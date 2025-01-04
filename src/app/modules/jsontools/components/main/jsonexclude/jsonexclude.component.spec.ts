import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonexcludeComponent } from './jsonexclude.component';

describe('JsonexcludeComponent', () => {
  let component: JsonexcludeComponent;
  let fixture: ComponentFixture<JsonexcludeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonexcludeComponent]
    });
    fixture = TestBed.createComponent(JsonexcludeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
