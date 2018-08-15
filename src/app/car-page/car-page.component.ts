import { Component, OnInit } from '@angular/core';
import { 
  ActivatedRoute,  // ActivatedRoute for getting id fron url
  Params,            // getting params reactive
  Router            // for navigation pragrammatically from ts
} from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html'
})
export class CarPageComponent implements OnInit {

  id:number;
  name: string;
  
  //queryParams
  year: string;
  color: string;
  //hesh
  hesh: string;

  constructor(
    private route: ActivatedRoute, //for getting params
    private router: Router
  ) { }
  
  // localhost:4200/cars/1/Ford ? year=2017 & color=red # pic
  
  ngOnInit() {
    //static
    this.id = +this.route.snapshot.params['id'];      // getting id from url once
    this.name = this.route.snapshot.params['name'];  // getting name from url once
    this.color = this.route.snapshot.queryParams['color'];  // getting queryParams from url once
    this.year = this.route.snapshot.queryParams['year'];  // getting hesh from url once 'string'
    this.hesh = this.route.snapshot.fragment;


    //reactive
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id']; // getting id from url reactive (Mazda)
      this.name = params['name']; // getting name from url reactive (Mazda)
    });            
  
    //getting queryParams from url - ? year=2017 & color=red
    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    })

    this.route.fragment.subscribe((params:any) => {
      this.hesh = params;
    })
  }


  openMazdaPage(){
     this.router.navigate(['./cars', 8, 'Mazda'], {
       queryParams: {
         color: 'Pink',
         year: 2018
       },
       fragment: 'pic'
     });
  }

}
