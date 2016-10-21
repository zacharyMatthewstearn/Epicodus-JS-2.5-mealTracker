import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';
import { AppComponent }       from './app.component';
import { EditMealComponent }  from './edit-meal.component';
import { FilterComponent }    from './filter.component';
import { MealListComponent }  from './meal-list.component';
import { MealComponent }      from './meal.component';
import { NewMealComponent }   from './new-meal.component';
import { CaloriesPipe }       from './calories.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    EditMealComponent,
    FilterComponent,
    MealListComponent,
    MealComponent,
    NewMealComponent,
    CaloriesPipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
