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
    <li [class]="ratingColor(currentRecipe)" (click)="showRating(currentRecipe)" *ngFor="let currentRecipe of recipes">  {{currentRecipe.title}} <button (click)="editRecipe(currentRecipe)">Please, Please, Edit Reciplease!</button></li>
    </ul>
    <hr>
    <div *ngIf="selectedRecipe">
      <h2> {{selectedRecipe.ingredients}}</h2>
      <h3>{{selectedRecipe.instructions}}</h3>
      <br>
      <h3>Edit Recipe rating</h3>
      <label>Enter Recipe name</label>
      <input [(ngModel)]="selectedRecipe.title">
      <label>Enter Recipe instructions:</label>
      <input [(ngModel)]="selectedRecipe.instructions">
      <label>Enter Recipe Boy Rating (1-80):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="15">1 (Low rating)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="45">2 (Low-Medium rating)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="55">3 (Medium-Medium rating)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="65">4 (Med-High rating)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.rating" [value]="99">5 (High rating)<br>
      <button (click)="finishedEditing()">Done</button>
    </div>
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
    selectedRecipe = null;
    showNewRecipeForm = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe
  }

  showRating(clickedRecipe) {
    console.log(clickedRecipe.rating);
  }

  finishedEditing() {
    this.selectedRecipe = null;
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
    public rating: number) {}
}
