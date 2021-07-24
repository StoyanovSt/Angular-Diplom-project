import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewGuestComponent } from './home-view-guest.component';

describe('HomeViewGuestComponent', () => {
  let component: HomeViewGuestComponent;
  let fixture: ComponentFixture<HomeViewGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeViewGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeViewGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
