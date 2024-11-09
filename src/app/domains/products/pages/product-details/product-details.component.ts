import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '@shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export default class ProductDetailsComponent {

    @Input() id?: string
    private productService = inject(ProductService)
    private cartService = inject(CartService)
    product = signal<Product | null>(null)

    ngOnInit() {
      if(this.id){
        this.productService.getOne(this.id).subscribe({
          next: (product) => {
            this.product.set(product)
          }
        })
      }
    }

    addToCart() {
      const product = this.product()
      if(product) {
        this.cartService.addToCart(product)
      }
    }
}
