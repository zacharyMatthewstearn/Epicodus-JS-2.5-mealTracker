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
              <meal-list
                [childMealList]="masterMealList"
                (openEditorSenderStepTwo)="openEditor($event)"
              ></meal-list>
            </div>
          </div>
          <div class="col col-md-6">
            <div class="inner-box">
              <edit-meal
                [childSelectedMeal]="selectedMeal"
                (doneClickedSender)="closeEditor()"
              ></edit-meal>
              <new-meal
                (newMealSender)="submitNewMeal($event)"
              ></new-meal>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal('Food1', 'Details1', 100),
      new Meal('Food2', 'Details2', 200),
      new Meal('Food3', 'Details3', 300),
      new Meal('Food4', 'Details4', 400)
  ];
  selectedMeal: Meal = null;

  openEditor(clickedMeal: Meal) {
    // console.log("3" + clickedMeal);
    this.selectedMeal = clickedMeal;
  }
  closeEditor() {
    this.selectedMeal = null;
  }
  submitNewMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
