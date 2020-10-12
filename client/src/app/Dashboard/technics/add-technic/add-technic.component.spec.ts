import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnicComponent } from './add-technic.component';

describe('AddTechnicComponent', () => {
  let component: AddTechnicComponent;
  let fixture: ComponentFixture<AddTechnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTechnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
