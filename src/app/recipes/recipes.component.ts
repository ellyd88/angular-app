import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService], // provide the service to this component and all child components
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
