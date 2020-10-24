import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Item, Product } from '../models/product.interface';
import { convertSnaps } from './db-utils';

@Injectable()
export class StockInventoryService {
    constructor(private http: HttpClient) { }

    getCartItems(): Observable<Item[]> {
        return this.http.get<Item[]>('/api/cart').pipe(
            map(snaps => convertSnaps<Item>(snaps)),
            catchError(error => throwError(error))
        );
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>('/api/products').pipe(
            map(snaps => convertSnaps<Product>(snaps)),
            catchError(error => throwError(error))
        );
    }

    checkBranchId(id: string): Observable<boolean> {
        let params = new HttpParams();
        params = params.append('id', id);
        return this.http.get('/api/branches', { params }).pipe(
            map((branch) => {
                if (branch === null) {
                    branch = {};
                }

                return !!Object.keys(branch).length;
            }),
            catchError(error => throwError(error))
        );
    }
}
