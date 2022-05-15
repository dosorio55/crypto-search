import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsListComponent } from './coins-list.component';

describe('CoinsListComponent', () => {
  let component: CoinsListComponent;
  let fixture: ComponentFixture<CoinsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
