import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPlatformComponent } from './setup-platform.component';

describe('SetupPlatformComponent', () => {
  let component: SetupPlatformComponent;
  let fixture: ComponentFixture<SetupPlatformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupPlatformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
