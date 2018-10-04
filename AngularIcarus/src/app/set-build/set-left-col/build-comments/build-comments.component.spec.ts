import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCommentsComponent } from './build-comments.component';

describe('BuildCommentsComponent', () => {
  let component: BuildCommentsComponent;
  let fixture: ComponentFixture<BuildCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
