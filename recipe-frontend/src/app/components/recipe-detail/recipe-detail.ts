import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.html',
  imports: [CommonModule]
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  originalServings = 1;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe(r => {
      this.recipe = r;
      this.originalServings = r.servings;
    });
  }

  adjustServings(newServings: number) {
    const factor = newServings / this.originalServings;
    this.recipe.ingredients.forEach(ing => {
      ing.quantity = ing.quantity * factor;
    });
  }
}
