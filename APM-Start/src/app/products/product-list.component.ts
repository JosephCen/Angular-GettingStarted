import { Component, OnInit } from '@angular/core'
import { IProduct } from './product.interface'
import { ProductService } from './product.service';

@Component({
    selector: 'pm-productList',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    
    pageTitle: string = 'Product List';
    productImageWidth: number = 50;
    isShowImage: boolean = false;
    productArray: IProduct[] = [];

    constructor(private _productService: ProductService){
    }

    ngOnInit(): void {
        this.productArray = this._productService.getProducts();
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