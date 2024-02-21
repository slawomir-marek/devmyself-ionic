import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'devmyself-products-recommended',
  templateUrl: './products-recommended.component.html',
  styleUrls: ['./products-recommended.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsRecomendedComponent {
  menDetails = {
    title: 'Clothes for men',
    subtitle: 'Streetwear fashion you must have',
    description: 'Discover the mix that inspires your wardrobe',
  };
  womenDetails = {
    title: 'Clothes for women',
    subtitle: 'Must have for this season',
  };
  jeweleryDetails = {
    title: 'Jewelery',
    subtitle: 'Something shiny for him and her',
  };

  constructor() {
    // TODO: in ngOnInit call something like recommendation.service to get recommendation configuration
  }
}
