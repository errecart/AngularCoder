import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubjectsComponent } from './form-subjects.component';

describe('FormSubjectsComponent', () => {
  let component: FormSubjectsComponent;
  let fixture: ComponentFixture<FormSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubjectsComponent]
    });
    fixture = TestBed.createComponent(FormSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
