import { Component, OnInit } from '@angular/core';
import { foods } from '../../../assets/foods';
import { FoodsModel } from '../../models/foodsmodel.model';

@Component({
  selector: 'food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public alimentos: any;
  pattern!: string;
  public verForm: boolean;
  public foodsmodel: FoodsModel;
  public new_alimento = new Array();
  public show_data;

  constructor() {
    this.alimentos = foods;
    this.verForm = false;
    this.foodsmodel = new FoodsModel('', '', 0, 0);
    this.show_data = this.foodsmodel;
  }
  verFormularioAlta(value: boolean) {
    this.verForm = value;
  }
  altaAlimento(form: any) {
    console.log(this.show_data);
  }
  getAlimentos() {}
  ngOnInit(): void {}
}
