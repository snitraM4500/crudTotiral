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
      .subscribe(
        {next: (data: Categories) => {
          this.categories = data.items;
          this.totalRecords = data.total;
        },
        error: (error: any) => {
          console.error('Error fetching categories', error);
        },
        }
      );
  };

  editCategory = (category: Category, id: number) => {
    this.categoryService
      .editCategory(`http://localhost:3000/categories/${id}`, category)
      .subscribe({
        next: (data: Categories) => {
          console.log('Category edited', data);
          this.fetchCategories(0, this.rows);
        },
        error: (error: any) => {
          console.error('Error editing category', error);
        },
      });
  };

  deleteCategory = (id: number) => {
    this.categoryService
      .deleteCategory(`http://localhost:3000/categories/${id}`)
      .subscribe({
        next: (data: Categories) => {
          console.log('Category deleted', data);
          this.fetchCategories(0, this.rows);
        },
        error: (error: any) => {
          console.error('Error deleting category', error);
        },
      });
  };

  addCategory = (category: Category) => {
    this.categoryService
      .addCategory('http://localhost:3000/categories', category)
      .subscribe({
        next: (data: Categories) => {
          console.log('Category added', data);
          this.fetchCategories(0, this.rows);
        },
        error: (error: any) => {
          console.error('Error adding category', error);
        },
      });
  };

  ngOnInit() {
    this.fetchCategories(0, this.rows);
  }
}
