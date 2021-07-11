import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewLoggedInComponent } from './home-view-logged-in.component';

describe('HomeViewLoggedInComponent', () => {
  let component: HomeViewLoggedInComponent;
  let fixture: ComponentFixture<HomeViewLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewLoggedInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
