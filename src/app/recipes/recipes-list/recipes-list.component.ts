import { Component,OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe("A test Recipe","this is a just description","https://tse1.mm.bing.net/th?id=OIP.-I2nHpGPGmA-mn_2TLV-yQHaJ9&pid=Api&P=0&h=180")
  ];
  constructor(){

  }

  ngOnInit() {
    
  }
}
