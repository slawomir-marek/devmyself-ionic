import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileItemComponent } from './tile-item.component';

describe('TileItemComponent', () => {
  let component: TileItemComponent;
  let fixture: ComponentFixture<TileItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TileItemComponent]
    });
    fixture = TestBed.createComponent(TileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
