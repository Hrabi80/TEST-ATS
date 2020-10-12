import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechnicsComponent } from './list-technics.component';

describe('ListTechnicsComponent', () => {
  let component: ListTechnicsComponent;
  let fixture: ComponentFixture<ListTechnicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTechnicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTechnicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
