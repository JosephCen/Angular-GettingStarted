import { Component } from '@angular/core'
import { IProduct } from './product.interface'

@Component({
    selector: 'pm-productList',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    productImageWidth: number = 50;
    isShowImage: boolean = false;
    productArray: IProduct[] = [
        {
            'productId': 2,
            'productCode': 'GDN-0023',
            'productName': 'Garden Cart',
            'releaseDate': 'March 18, 2016',
            'description': '<Description of Garden Cart>',
            'price': 32.99,
            'starRating': 4.2,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
        },
        {
            'productId': 5,
            'productCode': 'TBX-0048',
            'productName': 'Hammer',
            'releaseDate': 'May 21, 2016',
            'description': '<Description of Garden Hammer>',
            'price': 8.9,
            'starRating': 4.8,
            'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
        }
    ]

    constructor(){
        this.filterProductArray = this.productArray
    }

    _filterProductBy: string = 'cart';
    get filterProductBy(): string {
        return this._filterProductBy;
    }
    set filterProductBy(value: string) {
        this._filterProductBy = value;

        this.filterProductArray = this.filterProduct(this._filterProductBy);
    }

    filterProductArray: IProduct[] = [];

    filterProduct(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();

        return this.productArray.filter((value: IProduct) => 
                    value.productName.toLowerCase().indexOf(filterBy) != -1);
    }

    toggleProductImage(): void {
        this.isShowImage = !this.isShowImage;
    }
}