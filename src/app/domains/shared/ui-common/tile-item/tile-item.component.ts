import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TileItemModel } from '@devmyself/shared/util-common';

@Component({
  selector: 'devmyself-tile-item',
  templateUrl: './tile-item.component.html',
  styleUrls: ['./tile-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TileItemComponent {
  @Input() data: TileItemModel | undefined;
  @Input() disabled: boolean = false;

  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    if (this.disabled) return;
    this.clicked.emit(event);
  }
}
