import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TileItemModel } from '../tile-item/tile-item.model';

@Component({
  selector: 'devmyself-tiles-grid',
  templateUrl: './tiles-grid.component.html',
  styleUrls: ['./tiles-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TilesGridComponent {
  @Input() items: TileItemModel[] | undefined;
}
