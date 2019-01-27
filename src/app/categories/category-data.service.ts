import { Injectable } from '@angular/core';
import {Category} from './category';

@Injectable()
export class CategoryDataService {
	//automatic increment id
	lastId = 0 ;

	//placehondel category
	categories: Category[] = [];

  constructor() { }
  	//simple post /categories
  	addCategory(category: Category): CategoryDataService{
  		if(!category.id){
  			category.id = ++this.lastId;
  		}
  		this.categories.push(category);
  		return this;
  	}

  	//simple delete /categories/:id
  	deleteCategoryById(id: number): CategoryDataService{
  		this.categories = this.categories
  			.filter(category => category.id !== id);
  		return this;
  	}

  	//simple PUT categories/:id
  	updateCategoryById(id: number, values: Object = {}): Category | any {
  		let category = this.getCategoryById(id);
  		if(!category){
  			return null;
  		}
  		Object.assign(category, values);
  		return category;
  	}	

  	//simple GET /categories
  	getAllCategories(): Category[] {
  		return this.categories;
  	}

  	//simple get by Id
  	getCategoryById(id: number): Category | any{
  		return this.categories
  			.filter(category => category.id === id)
  			.pop();
  	}
}
