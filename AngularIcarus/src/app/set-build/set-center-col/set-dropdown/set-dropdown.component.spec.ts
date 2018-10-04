import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDropdownComponent } from './set-dropdown.component';

describe('SetDropdownComponent', () => {
  let component: SetDropdownComponent;
  let fixture: ComponentFixture<SetDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
