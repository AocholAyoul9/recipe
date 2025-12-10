import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
    standalone: true,  
  templateUrl: './recipe-list.html',
  imports: [CommonModule,RouterModule],
  styleUrls: ['./recipe-list.scss']
})
export class RecipeList implements OnInit {
  recipes: Recipe[] = [];
  currentPage = 1;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.recipeService.getRecipes(this.currentPage).subscribe(res => {
      this.recipes = res['hydra:member'] || res; 
    });
  }

  nextPage() {
    this.currentPage++;
    this.loadRecipes();
  }

  prevPage() {
    if(this.currentPage > 1) {
      this.currentPage--;
      this.loadRecipes();
    }
  }
}
