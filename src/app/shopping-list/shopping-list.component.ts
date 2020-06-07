import { ShoppingListService } from './shopping-list.service';
import { Ingredients } from './../shared/ingredients.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private shoppyListServ: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppyListServ.getIngre();
    this.shoppyListServ.ingredientsChanged.subscribe((ingred: Ingredients[]) => {
      this.ingredients = ingred;
      console.log(this.ingredients);
    });
  }

  



}
