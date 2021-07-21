import { Injectable } from '@angular/core';

import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recieps: Recipe[] = [
    {
      id: 'r1',
      title: 'Maggie Nudels',
      imageUrl: 'https://picsum.photos/200/300',
      ingrediant: ['1 Pack of Maggie', 'Masala', 'Mithu', 'Pani']
    },
    {
      id: 'r2',
      title: 'Cup Cake',
      imageUrl: 'https://picsum.photos/200/300',
      ingrediant: ['1 Pack of Maggie', 'Masala', 'Mithu', 'Pani']
    },
    {
      id: 'r3',
      title: 'Pani Puri',
      imageUrl: 'https://picsum.photos/200/300',
      ingrediant: ['1 Pack of Maggie', 'Masala', 'Mithu', 'Pani']
    },
  ];

  constructor() { }

  getAllRecipes() {
    return [
      ...this.recieps
    ];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recieps.find(recipe => {
        return recipe.id === recipeId
      })
    };
  }
}
