import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FoodsPipe } from './pipes/foods.pipe';
import { AppComponent } from './app.component';
import { FoodListComponent } from './componenentes/food-list/food-list.component';

@NgModule({
  declarations: [AppComponent, FoodListComponent, FoodsPipe],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
