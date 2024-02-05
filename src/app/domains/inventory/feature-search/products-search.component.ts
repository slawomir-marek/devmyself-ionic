import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'devmyself-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSearchComponent implements OnInit {
  query: string = '';

  constructor(private Activatedroute: ActivatedRoute) {}

  ngOnInit(): void {
    this.Activatedroute.queryParamMap.subscribe((params) => {
      this.query = params.get('query') || '';
    });
  }
}
