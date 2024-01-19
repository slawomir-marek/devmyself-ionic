import { Component } from '@angular/core';

@Component({
  selector: 'devmyself-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  constructor() {}
}
