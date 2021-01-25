import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressionNewComponent } from './impression-new.component';

describe('ImpressionNewComponent', () => {
  let component: ImpressionNewComponent;
  let fixture: ComponentFixture<ImpressionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
