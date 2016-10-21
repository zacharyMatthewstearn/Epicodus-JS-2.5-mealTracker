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
      <div class="containter">
        <div class="row">
          <div class="col col-md-6">
            <div class="inner-box">
              <filter
                (changeCaloriesFilterSender)="passFilterOnToList($event)"
              ></filter>
              <new-meal
                (newMealSender)="submitNewMeal($event)"
              ></new-meal>
              <edit-meal
                [childSelectedMeal]="selectedMeal"
                (doneEditingSender)="closeEditor()"
              ></edit-meal>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="inner-box">
              <meal-list
                [childMealList]="masterMealList"
                [selectedCalorieCount]="selectedCalorieCountFilter"
                (openEditorSenderStepTwo)="openEditor($event)"
              ></meal-list>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [];
  public selectedMeal: Meal = null;
  public selectedCalorieCountFilter: string = "";

  openEditor(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  closeEditor() {
    this.selectedMeal = null;
  }
  submitNewMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  passFilterOnToList(calorieCount: string) {
    this.selectedCalorieCountFilter = calorieCount;
  }
}
