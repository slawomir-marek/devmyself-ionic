import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesGridComponent } from './tiles-grid.component';

describe('TilesGridComponent', () => {
  let component: TilesGridComponent;
  let fixture: ComponentFixture<TilesGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilesGridComponent]
    });
    fixture = TestBed.createComponent(TilesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
