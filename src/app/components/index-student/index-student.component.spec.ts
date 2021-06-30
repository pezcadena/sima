import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexStudentComponent } from './index-student.component';

describe('IndexStudentComponent', () => {
  let component: IndexStudentComponent;
  let fixture: ComponentFixture<IndexStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
