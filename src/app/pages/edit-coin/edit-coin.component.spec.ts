import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCoinComponent } from './edit-coin.component';

describe('EditCoinComponent', () => {
  let component: EditCoinComponent;
  let fixture: ComponentFixture<EditCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
