import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Categories, PaginationParams } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private apiService: ApiService) {}

  getCategories = (
    url: string,
    params: PaginationParams
  ): Observable<Categories> => {
    return this.apiService.get(url, { params, responseType: 'json' });
  };

  addCategory = (url: string, body: any): Observable<Categories> => {
    return this.apiService.post(url, body, {});
  }

  editCategory = (url: string, body: any): Observable<Categories> => {
    return this.apiService.put(url, body, {});
  }

  deleteCategory = (url: string): Observable<Categories> => {
    return this.apiService.delete(url, {});
  }

}
