import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/util-common';

@Component({
  selector: 'devmyself-tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesGridComponent {
  @Input() items: TileItemModel[] | undefined;

  @Output() clicked: EventEmitter<TileItemModel> = new EventEmitter();

  onTileItemClicked(item: TileItemModel): void {
    this.clicked.next(item);
  }
}
