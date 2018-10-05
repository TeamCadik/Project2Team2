import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChrStatsComponent } from './new-chr-stats.component';

describe('NewChrStatsComponent', () => {
  let component: NewChrStatsComponent;
  let fixture: ComponentFixture<NewChrStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChrStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChrStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
