import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubjectComponent } from './table-subject.component';

describe('TableSubjectComponent', () => {
  let component: TableSubjectComponent;
  let fixture: ComponentFixture<TableSubjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableSubjectComponent]
    });
    fixture = TestBed.createComponent(TableSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
