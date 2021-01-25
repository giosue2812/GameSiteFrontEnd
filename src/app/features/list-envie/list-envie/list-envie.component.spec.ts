import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvieComponent } from './list-envie.component';

describe('ListEnvieComponent', () => {
  let component: ListEnvieComponent;
  let fixture: ComponentFixture<ListEnvieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnvieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
