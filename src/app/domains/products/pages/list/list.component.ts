import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService)

constructor() {
  const initProducts: Product[] = [
    {id: Date.now(), title: 'product 1', price:18, image: 'https://picsum.photos/640/640?r=23', creationAt: new Date().toISOString()},
    {id: Date.now(), title: 'product 2', price:12, image: 'https://picsum.photos/640/640?r=25', creationAt: new Date().toISOString()},
    {id: Date.now(), title: 'product 3', price:16, image: 'https://picsum.photos/640/640?r=24', creationAt: new Date().toISOString()},
    {id: Date.now(), title: 'product 4', price:11, image: 'https://picsum.photos/640/640?r=28', creationAt: new Date().toISOString()}
  ]
  this.products.set(initProducts)
}
addToCart(product:Product){
  this.cartService.addToCart(product)
}
}
