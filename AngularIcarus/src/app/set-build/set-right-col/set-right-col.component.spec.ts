import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRightColComponent } from './set-right-col.component';

describe('SetRightColComponent', () => {
  let component: SetRightColComponent;
  let fixture: ComponentFixture<SetRightColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRightColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRightColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
