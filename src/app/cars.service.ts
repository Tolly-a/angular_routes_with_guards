import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
 cars= [
   {
     name: "Ford",
     id: 1,
     year: 2013,
     color: 'red'
   },
   {
    name: "Audi",
    id: 2,
    year: 2015,
    color: 'black'
  },
  {
    name: "BMW",
    id: 3,
    year: 2017,
    color: 'green'
  },
  {
    name: "Mercedes",
    id: 4,
    year: 2018,
    color: 'blue'
  }
 ]
}
