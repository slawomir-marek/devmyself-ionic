import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/util-common';

@Component({
  selector: 'devmyself-tiles-slider',
  templateUrl: './tiles-slider.component.html',
  styleUrls: ['./tiles-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesSliderComponent {
  private swiperInstance: any;

  @Input() items: TileItemModel[] | undefined;

  @Output() clicked: EventEmitter<TileItemModel> = new EventEmitter();

  @ViewChild('swiper')
  set swiper(swiperRef: ElementRef) {
    setTimeout(() => {
      this.swiperInstance = swiperRef.nativeElement.swiper;
    }, 0);
  }

  onTileItemClicked(item: TileItemModel): void {
    this.clicked.next(item);
  }
}
