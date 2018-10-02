import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetViewItemComponent } from './set-view-item.component';

describe('SetViewItemComponent', () => {
  let component: SetViewItemComponent;
  let fixture: ComponentFixture<SetViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
