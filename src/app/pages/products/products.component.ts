import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  sortedProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any>('https://dummyjson.com/products')
      .subscribe((response) => {
        this.products = response.products;
        this.sortedProducts = [...this.products];
      });
  }

  sortProducts(event: any) {
    const value = event.target.value;
    if (value === 'asc') {
      this.sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'desc') {
      this.sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      this.sortedProducts = [...this.products];
    }
  }
}
