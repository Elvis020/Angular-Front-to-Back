import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'A very nice recipe', '/assets/img/ladies.jpg'),
    new Recipe('Another test recipe', 'Yam recipe by an African Chef ', '/assets/img/ladies.jpg')
  ];
  @Output() passingClicky =  new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  clicky(recipe: Recipe) {
    this.passingClicky.emit(recipe);
  }

}
