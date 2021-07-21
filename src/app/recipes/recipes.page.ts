import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recieps: Recipe[];

  constructor(private recipesServices: RecipesService) { }

  ngOnInit() {
    this.recieps = this.recipesServices.getAllRecipes();
  }

}
