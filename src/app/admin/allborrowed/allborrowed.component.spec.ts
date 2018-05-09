import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllborrowedComponent } from './allborrowed.component';

describe('AllborrowedComponent', () => {
  let component: AllborrowedComponent;
  let fixture: ComponentFixture<AllborrowedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllborrowedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllborrowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
