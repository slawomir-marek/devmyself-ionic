import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { InventoryFacade } from '@devmyself/inventory/data';

@Component({
  selector: 'devmyself-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  query: string = '';

  constructor(private service: InventoryFacade) {}

  ngOnInit(): void {
    this.service.query$().subscribe((value) => (this.query = value));
  }

  executeSearch(phrase: string): void {
    this.service.executeSearch(phrase);
  }
}
