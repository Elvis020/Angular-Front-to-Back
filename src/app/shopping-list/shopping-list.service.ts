import { Ingredients } from './../shared/ingredients.model';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();
  private ingredients$: Ingredients[] = [
    new Ingredients('Apples', 20),
    new Ingredients('Tomatoes', 39),
  ];

  constructor() { }


  getIngre() {
    return this.ingredients$.slice();
  }

  addIngre(ingre: Ingredients) {
    this.ingredients$.push(ingre);
    this.ingredientsChanged.emit(this.ingredients$.slice());
  }

  onAddIngToReciP(ingre: Ingredients[]) {
    this.ingredients$.push(...ingre);
    this.ingredientsChanged.emit(this.ingredients$.slice());
  }

}
