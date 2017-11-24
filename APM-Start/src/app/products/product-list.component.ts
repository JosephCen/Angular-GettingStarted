import { Component } from '@angular/core'

@Component({
    selector: 'pm-productList',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    productArray: any[] = [
        {
            'productId': 2,
            'productName': 'Garden Cart',
            'releaseDate': 'March 18, 2016',
            'description': '<Description of Garden Cart>',
            'price': 32.99,
            'starRating': 4.2
        },
        {
            'productId': 5,
            'productName': 'Hammer',
            'releaseDate': 'May 21, 2016',
            'description': '<Description of Garden Hammer>',
            'price': 8.9,
            'starRating': 4.8
        }
    ]
}