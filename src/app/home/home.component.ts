import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Product, Products } from '../types';
import { CategoryComponent } from '../components/category/category.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Product[] = [];
  ngOnInit() {
    this.categoryService
      .getCategories('http://localhost:3000/categories', { page: 0, perPage: 5 })
      .subscribe((categories: Products) => {
        this.categories = categories.items;
        console.log(this.categories)
      });
  }
}
