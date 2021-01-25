import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionEditerComponent } from './impression-editer.component';

describe('ImpressionEditerComponent', () => {
  let component: ImpressionEditerComponent;
  let fixture: ComponentFixture<ImpressionEditerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressionEditerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressionEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
