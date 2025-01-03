import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonlistComponent } from './jsonlist.component';

describe('JsonlistComponent', () => {
  let component: JsonlistComponent;
  let fixture: ComponentFixture<JsonlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonlistComponent],
    });
    fixture = TestBed.createComponent(JsonlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
