import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'devmyself-product-shipment',
  templateUrl: './product-shipment.component.html',
  styleUrls: ['./product-shipment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductShipmentComponent implements OnInit {
  ngOnInit(): void {
    console.log('ee');
  }
}
