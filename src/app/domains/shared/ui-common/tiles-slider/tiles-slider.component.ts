import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { TileItemModel } from '../tile-item/tile-item.model';

@Component({
  selector: 'devmyself-tiles-slider',
  templateUrl: './tiles-slider.component.html',
  styleUrls: ['./tiles-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesSliderComponent {
  private swiperInstance: any;

  @Input() items: TileItemModel[] | undefined;

  @ViewChild('swiper')
  set swiper(swiperRef: ElementRef) {
    setTimeout(() => {
      this.swiperInstance = swiperRef.nativeElement.swiper;
    }, 0);
  }
}
