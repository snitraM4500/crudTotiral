import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Category, Categories } from '../types';
import { CategoryComponent } from '../components/category/category.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private categoryService: CategoryService) {}

  categories: Category[] = [];

  totalRecords: number = 0;
  rows: number = 6;

  onPageChange = (event: any) => {
    this.fetchCategories(event.page, event.rows);
  };

  fetchCategories = (page: number, perPage: number) => {
    this.categoryService
      .getCategories('http://localhost:3000/categories', {
        page,
        perPage,
      })
      .subscribe((categories: Categories) => {
        this.categories = categories.items;
        this.totalRecords = categories.total;
      });
  };

  editCategory = (category: Category) => {
    console.log('Edit category', category);
  }

  deleteCategory = (category: Category) => {
    console.log('Delete category', category);
  }

  addCategory = (category:Category) => {
    console.log('Add category');
  }

  ngOnInit() {
    this.fetchCategories(0, this.rows);
  }
}
