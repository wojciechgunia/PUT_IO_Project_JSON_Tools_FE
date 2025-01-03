import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonCodemirrorComponent } from './jsoncodemirror.component';

describe('CodemirrorComponent', () => {
  let component: JsonCodemirrorComponent;
  let fixture: ComponentFixture<JsonCodemirrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonCodemirrorComponent],
    });
    fixture = TestBed.createComponent(JsonCodemirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
