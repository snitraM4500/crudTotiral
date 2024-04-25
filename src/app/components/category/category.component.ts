import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Category } from '../../types';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ToastModule} from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ButtonModule,FormsModule,ConfirmPopupModule, ToastModule],
  providers:[ConfirmationService],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent {
  constructor(private confirmationService:ConfirmationService){}

  @ViewChild('deleteButton') deleteButton: any;

  @Input() category!: Category;
  @Output() edit: EventEmitter<Category> = new EventEmitter<Category>();
  @Output() delete: EventEmitter<Category> = new EventEmitter<Category>();

  editCategory() {
    this.edit.emit(this.category);
  }

  confirmDelete(){
    this.confirmationService.confirm({
      target: this.deleteButton.nativeElement,
      message: 'Are you sure that you want to delete this category?',
      accept: () => {
        this.deleteCategory();
      }
    });
  }

  deleteCategory() {
    this.delete.emit(this.category);
  }

  ngOnInit() {}
}
