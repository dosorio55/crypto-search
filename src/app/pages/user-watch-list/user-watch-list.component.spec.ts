import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWatchListComponent } from './user-watch-list.component';

describe('UserWatchListComponent', () => {
  let component: UserWatchListComponent;
  let fixture: ComponentFixture<UserWatchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWatchListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
