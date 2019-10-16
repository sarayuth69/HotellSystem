import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageroomComponent } from './manageroom.component';

describe('ManageroomComponent', () => {
  let component: ManageroomComponent;
  let fixture: ComponentFixture<ManageroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
