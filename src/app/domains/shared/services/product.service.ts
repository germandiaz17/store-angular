import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient)

  constructor() { }
  urlApi = 'https://fakestoreapi.com/products'

  getProducts() {
    return this.http.get<Product[]>(this.urlApi)
  }

  getOne(id: string) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`)
  }
}
