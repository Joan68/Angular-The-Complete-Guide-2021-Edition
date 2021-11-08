import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe(
            'Schnitzel',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 50)
            ]),
        new Recipe('Another Test Recipe',
        'This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 3)
        ])
    ];

    constructor(private shoppingListService : ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToSL(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}