import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmyself-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFiltersComponent {}
