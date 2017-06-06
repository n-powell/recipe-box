import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<ul class="nav nav-pills navbar-inverse">
  <a href="/" class="navbar-brand">
  </a>
  <li role="presentation"><a href="/">Home</a></li>

</ul>
  <div class="container">
    <h1>CHeck out these recipes if you are hungry for some food to eat and you need to get some help finding out what that is that you want to eat today.</h1>
    <h2>Recipe boy says todays date is {{month}}/{{day}}/{{year}}</h2>
    <ul>
    <li [class]="ratingColor(currentRecipe)" (click)="showRating(currentRecipe)" *ngFor="let currentRecipe of recipes">  {{currentRecipe.title}}{{currentRecipe.ingredients}} <button (click)="editRecipe()">Please, Please, Edit Reciplease!</button></li>
    </ul>
  </div>
  `
})



export class AppComponent {
  currentDate = new Date();
  month: number = this.currentDate.getMonth() + 1;
  day: number = this.currentDate.getDate();
  year: number = this.currentDate.getFullYear();
  recipes: Recipe[] = [
    new Recipe ('Pizza', ['cheese', 'dough', 'meat'], 'get it cookin, then eat', 20),
    new Recipe ('Hot Pizza', ['cheese', 'dough', 'meat'], 'get it cookin, then eat', 55),
    new Recipe ('Cold Pizza', ['hotdog'], 'get it cookin, then eat', 67)];
  selectedRecipe: Recipe = this.recipes[0]

  editRecipe() {
    alert('Thank You');
  }

  showRating(clickedRecipe) {
    alert(clickedRecipe.rating);
  }

  ratingColor(currentRecipe){
    if (currentRecipe.rating <= 20) {
      return "bg-danger";
    }else if (currentRecipe.rating <= 40) {
      return "bg-warning";
    }else if (currentRecipe.rating <= 60) {
      return "bg-info";
    }else {
      return "bg-success";
    }
  }

}

export class Recipe {
  constructor(
    public title: string,
    public ingredients: any[],
    public instructions: string,
    public rating: number) { }
}
