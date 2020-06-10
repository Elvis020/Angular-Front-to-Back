import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'A very nice recipe',
      '/assets/img/ladies.jpg',
      [
        new Ingredients('Meat', 21),
        new Ingredients('Fish', 5)
      ]
    ),
    new Recipe(
      'Another test recipe',
      'Yam recipe by an African Chef ',
      '/assets/img/ladies.jpg',
      [
        new Ingredients('Apples', 4),
        new Ingredients('Mangoes', 8)
      ]
    )
  ];

  constructor(private shoppyListServy: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addIngreToShoppingL(ingr: Ingredients[]) {
    this.shoppyListServy.onAddIngToReciP(ingr);
  }

}
