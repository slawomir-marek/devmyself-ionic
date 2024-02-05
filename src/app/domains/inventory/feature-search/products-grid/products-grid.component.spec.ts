import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsGridComponent } from './products-grid.component';

describe('FeatureProductsGridComponent', () => {
  let component: ProductsGridComponent;
  let fixture: ComponentFixture<ProductsGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsGridComponent],
    });
    fixture = TestBed.createComponent(ProductsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
