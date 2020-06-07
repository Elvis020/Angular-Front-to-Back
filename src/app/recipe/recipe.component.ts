import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  selectedItem: Recipe;


  constructor(private recipSery: RecipeService) { }

  ngOnInit(): void {
    this.recipSery.selectedRecipe.subscribe( (recipe: Recipe) => {
      this.selectedItem = recipe;
    });
  }

}
