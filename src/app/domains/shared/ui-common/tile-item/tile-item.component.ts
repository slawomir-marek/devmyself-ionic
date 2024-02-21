import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/util-common';

@Component({
  selector: 'devmyself-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileItemComponent {
  @Input() data: TileItemModel | undefined;
}
