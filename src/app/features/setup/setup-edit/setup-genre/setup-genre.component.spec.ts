import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGenreComponent } from './setup-genre.component';

describe('SetupGenreComponent', () => {
  let component: SetupGenreComponent;
  let fixture: ComponentFixture<SetupGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
