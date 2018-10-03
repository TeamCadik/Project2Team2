import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCenterColComponent } from './set-center-col.component';

describe('SetCenterColComponent', () => {
  let component: SetCenterColComponent;
  let fixture: ComponentFixture<SetCenterColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCenterColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCenterColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
