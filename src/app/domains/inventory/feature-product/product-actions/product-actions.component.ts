import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'devmyself-product-actions',
  templateUrl: './product-actions.component.html',
  styleUrls: ['./product-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductActionsComponent implements OnInit {
  ngOnInit(): void {
    console.log('dd');
  }
}
