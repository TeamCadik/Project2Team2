import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCharHeaderComponent } from './set-char-header.component';

describe('SetCharHeaderComponent', () => {
  let component: SetCharHeaderComponent;
  let fixture: ComponentFixture<SetCharHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCharHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCharHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
