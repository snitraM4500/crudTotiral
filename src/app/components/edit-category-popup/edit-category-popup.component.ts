import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../types';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-edit-category-popup',
  standalone: true,
  imports: [DialogModule, CommonModule, FormsModule,ButtonModule],
  templateUrl: './edit-category-popup.component.html',
  styleUrl: './edit-category-popup.component.scss',
})
export class EditCategoryPopupComponent {
  @Input() display: boolean = false;
  @Output() displayChange = new EventEmitter<boolean>();
  @Input() header!: string;

  @Input() category: Category = {
    name: '',
    description: '',
  };

  @Output() confirm = new EventEmitter<Category>();
  onConfirm = () => {
    this.confirm.emit(this.category);
    this.display=false;
    this.displayChange.emit(this.display);
  };

  onCancel = () => {
    this.display=false;
    this.displayChange.emit(this.display);
  };
}
