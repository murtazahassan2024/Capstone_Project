import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  shampoo: Product[] = [
    { name: 'Anti-Dandruff', image: '/assets/images/dandruffShampoo.png' },
    { name: 'Soft & Fresh', image: '/assets/images/softFreshShampoo.png' },
    {
      name: 'Volume and Bounce',
      image: '/assets/images/volumeShampoo.png',
    },
  ];

  hairColor: Product[] = [
    {
      name: 'Natural Black',
      image: '/assets/images/Natural-Black-01.png',
    },
    { name: 'Brown Black', image: '/assets/images/Brown-Black-02.png' },
    { name: 'Dark Brown', image: '/assets/images/Dark-Brown-03.png' },
    { name: 'Medium Brown', image: '/assets/images/Medium-Brown-04.png' },
    { name: 'Light Brown', image: '/assets/images/Light-Brown-05.png' },
    { name: 'Golden Brwon', image: '/assets/images/Golden-Brown-06.png' },
    { name: 'Burgundy ', image: '/assets/images/Burgundy-07.png' },
    { name: 'Arbum Brown', image: '/assets/images/Arbum-Brown-08.png' },
    { name: 'Mahogany ', image: '/assets/images/Mahogany-09.png' },
    { name: 'Arbum Bright', image: '/assets/images/Arburn-Bright-10.png' },
    {
      name: 'Dark Ash Blonde',
      image: '/assets/images/Dark-Ash-Blonde-11.png',
    },
    {
      name: 'Light Ash Blonde',
      image: '/assets/images/Light-Ash-Blonde-12.png',
    },
  ];

  hairOil: Product[] = [
    { name: 'Weak Hair Repair', image: '/assets/images/Hair-Oil-1.png' },
    { name: 'Dry Hair Repair', image: '/assets/images/Hair-Oil-2.png' },
    { name: 'Hair Fall Control', image: '/assets/images/Hair-Oil-3.png' },
  ];

  vaseline: Product[] = [
    { name: 'Coconut', image: '/assets/images/Vaseline-1.png' },
    { name: 'Alor Fresh', image: '/assets/images/Vaseline-2.png' },
    { name: 'Sensitive Skin', image: '/assets/images/Vaseline-3.png' },
    { name: 'Orignial', image: '/assets/images/Vaseline-4.png' },
  ];

  powder: Product[] = [
    { name: 'Purple Pride', image: '/assets/images/Powder-1.png' },
    { name: 'Royal Tulip', image: '/assets/images/Powder-2.png' },
    { name: 'Black Bloom', image: '/assets/images/Powder-3.png' },
    { name: 'Cool Collection', image: '/assets/images/Powder-4.png' },
    { name: 'Rosey Red', image: '/assets/images/Powder-5.png' },
  ];
  constructor() {}

  ngOnInit() {}
}
