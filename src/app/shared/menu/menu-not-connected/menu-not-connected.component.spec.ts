import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNotConnectedComponent } from './menu-not-connected.component';

describe('MenuNotConnectedComponent', () => {
  let component: MenuNotConnectedComponent;
  let fixture: ComponentFixture<MenuNotConnectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNotConnectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNotConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
