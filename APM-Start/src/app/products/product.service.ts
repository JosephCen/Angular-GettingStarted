import { Injectable } from "@angular/core";
import { IProduct } from "./product.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable()
export class ProductService {
    getProductsUrl: string = '/api/products/products.json';

    constructor(private _httpClient: HttpClient) {
    }
    
    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this.getProductsUrl);
    }
}