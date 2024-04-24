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
}
