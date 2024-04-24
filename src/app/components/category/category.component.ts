import { Component, Input } from '@angular/core';
import { Category } from '../../types';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input()  category!: Category;
}
