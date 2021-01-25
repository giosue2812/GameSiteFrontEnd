import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupUserEditComponent } from './setup-user-edit.component';

describe('SetupUserEditComponent', () => {
  let component: SetupUserEditComponent;
  let fixture: ComponentFixture<SetupUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
