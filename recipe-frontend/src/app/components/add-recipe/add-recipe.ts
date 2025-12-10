import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-recipe',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.scss',
})
export class AddRecipe {
  recipeForm: FormGroup;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {
    this.recipeForm = this.fb.group({
      title: [''],
      description: [''],
      servings: [1],
      ingredients: this.fb.array([])
    });
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.fb.group({
      name: [''],
      quantity: [0],
      unit: ['']
    }));
  }

  submit() {
    this.recipeService.addRecipe(this.recipeForm.value).subscribe(res => {
      alert('Recette ajoutée !');
      this.recipeForm.reset();
    });
  }
}
