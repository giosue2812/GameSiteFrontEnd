import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupEditeurComponent } from './setup-editeur.component';

describe('SetupEditeurComponent', () => {
  let component: SetupEditeurComponent;
  let fixture: ComponentFixture<SetupEditeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupEditeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
