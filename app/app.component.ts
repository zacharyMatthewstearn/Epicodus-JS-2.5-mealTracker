import { Component }  from '@angular/core';
import { Meal }       from './meal.model';

@Component({
  selector: 'app',
  template: `
    <div class="root-component">
      <div class="jumbotron">
        <div class="container">
          <h1>Zack's Super-Fantastic Meal Tracker App</h1>
        </div>
      </div>
      <!--<div class="containter">
        <div class="row">
          <div class="col col-md-6">
            <div class="inner-box">
              <meal-list
                [childMealList]="masterMealList"
                (editClickIntermediarySender)="showDetails($event)"
              ></meal-list>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="inner-box">
              <edit-meal
                [childSelectedMeal]="selectedMeal"
                (doneClickedSender)="finishedEditing()"
              ></edit-meal>
              <new-meal
                (newMealSender)="addMeal($event)"
              ></new-meal>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  `
})

export class AppComponent {
  // public masterMealList: Meal[] = [
  //     new Meal(),
  //     new Meal(),
  //     new Meal(),
  //     new Meal()
  // ];
  // selectedMeal: Meal = null;
  // showDetails(clickedMeal: Meal) {
  //   this.selectedMeal = clickedMeal;
  // }
  // finishedEditing() {
  //   this.selectedMeal = null;
  // }
  // addMeal(newMealFromChild: Meal) {
  //   this.masterMealList.push(newMealFromChild);
  // }
}
