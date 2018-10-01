import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStatsComponent } from './set-stats.component';

describe('SetStatsComponent', () => {
  let component: SetStatsComponent;
  let fixture: ComponentFixture<SetStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
