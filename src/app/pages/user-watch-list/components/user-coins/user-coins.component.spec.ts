import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCoinsComponent } from './user-coins.component';

describe('UserCoinsComponent', () => {
  let component: UserCoinsComponent;
  let fixture: ComponentFixture<UserCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
