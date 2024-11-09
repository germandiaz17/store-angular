import { Component, signal, inject } from '@angular/core';

import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  products = signal<Product[]>([])
  private cartService = inject(CartService)
  private productService = inject(ProductService)

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
          this.products.set(products)
      },
      error: () => {

      }
    })
  }

addToCart(product:Product){
  this.cartService.addToCart(product)
}
}
