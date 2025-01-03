import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonaddDialogComponent } from './jsonadd-dialog.component';

describe('JsonaddDialogComponent', () => {
  let component: JsonaddDialogComponent;
  let fixture: ComponentFixture<JsonaddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsonaddDialogComponent],
    });
    fixture = TestBed.createComponent(JsonaddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
