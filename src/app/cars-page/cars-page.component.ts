import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html'
})
export class CarsPageComponent implements OnInit {

  cars=[];

  constructor(private carsSerice: CarsService) { }

  ngOnInit() {
    this.cars = this.carsSerice.cars;
  }

}
