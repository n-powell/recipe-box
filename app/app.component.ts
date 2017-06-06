import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<ul class="nav nav-pills navbar-inverse">
  <a href="/" class="navbar-brand"><img width="30" height="30" src="/img/reddit-logo.png" alt="">
  </a>
  <li role="presentation"><a href="/">Home</a></li>
  <li role="presentation"><a href="about">About</a></li>
</ul>
  <div class="container">
    <h1>CHeck out these recipes if you are hungry for some food to eat and you need to get some help finding out what that is that you want to eat today.</h1>
    <h2>Recipe boy says todays date is {{month}}/{{day}}/{{year}}</h2>
    <ul>
    <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}<br>{{currentRecipe.ingredients}}</li>
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
    new Recipe ('Pizza', ['cheese', 'dough', 'meat'], 'get it cookin, then eat', 67),
    new Recipe ('Hot Pizza', ['cheese', 'dough', 'meat'], 'get it cookin, then eat', 67),
    new Recipe ('Cold Pizza', ['cheese', 'dough', 'meat'], 'get it cookin, then eat', 67),
  ];
}

export class Recipe {
  constructor(
    public title: string,
    public ingredients: any[],
    public instructions: string,
    public rating: number) { }
}
