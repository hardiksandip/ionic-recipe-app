import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.page.html',
  styleUrls: ['./recipes-detail.page.scss'],
})
export class RecipesDetailPage implements OnInit {

  loadedRecipes: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private routes: Router,
    private alertCtr: ActionSheetController
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.routes.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipes = this.recipesService.getRecipe(recipeId);
    })
  }

  async onDeleteRecipe() {

   const alert = await this.alertCtr.create({
      header: 'Are you sure?',
      buttons:[
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipes.id);
              this.routes.navigate(['/recipes']);
          }
        }
      ]
    });
      
    await alert.present();

  }

}
