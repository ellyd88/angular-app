import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Creamy pesto & kale pasta',
      'Enjoy our creamy pesto and kale pasta as a tasty and nutritious supper. Make it with just a handful of ingredients and store cupboard staples',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/creamy-pesto-kale-pasta-d582e18.jpg?quality=90&webp=true&resize=440,400',
      [
        new Ingredient('Oil', 1),
        new Ingredient('Red onions', 2),
        new Ingredient('Kale', 300),
        new Ingredient('Pesto', 4),
        new Ingredient('Pasta', 300),
        new Ingredient('Soft cheese', 4),
      ]
    ),
    new Recipe(
      'Miso noodles with fried eggs',
      'This quick and healthy veggie dinner has a base of wholemeal noodles for a filling, fibre-rich supper.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/miso-noodles-with-fried-eggs-2-440-400-d05a6ed.jpg?quality=90&webp=true&resize=440,400',
      [
        new Ingredient('oil', 1),
        new Ingredient('ginger', 1),
        new Ingredient('noodles', 100),
        new Ingredient('green pepper', 1),
        new Ingredient('eggs', 2),
        new Ingredient('miso', 1),
        new Ingredient('peas', 100),
        new Ingredient('spinach', 160),
        new Ingredient('garlic', 3),
        new Ingredient('ginger', 30),
        new Ingredient('paprika', 1),
        new Ingredient('chilli', 1),
        new Ingredient('spring onions', 3),
        new Ingredient('beansprouts', 160),
      ]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // return a copy of the array
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
