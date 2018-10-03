import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBuildComponent } from './set-build.component';

describe('SetBuildComponent', () => {
  let component: SetBuildComponent;
  let fixture: ComponentFixture<SetBuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
