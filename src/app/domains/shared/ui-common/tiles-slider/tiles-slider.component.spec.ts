import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesSliderComponent } from './tiles-slider.component';

describe('TilesSliderComponent', () => {
  let component: TilesSliderComponent;
  let fixture: ComponentFixture<TilesSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TilesSliderComponent],
    });
    fixture = TestBed.createComponent(TilesSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
