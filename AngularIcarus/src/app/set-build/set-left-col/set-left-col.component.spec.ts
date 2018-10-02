import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLeftColComponent } from './set-left-col.component';

describe('SetLeftColComponent', () => {
  let component: SetLeftColComponent;
  let fixture: ComponentFixture<SetLeftColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLeftColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLeftColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
