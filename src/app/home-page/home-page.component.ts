import { Component, OnInit } from '@angular/core';
import { 
  Router,             // Router - for navigation from ts (programmatically)
  ActivatedRoute      // Router - for navigation relative this route from ts (programmatically)
} from '@angular/router'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router, 
    private route: ActivatedRoute,  //for relativeTo: this.route
    private authService: AuthService //for Guards
  ) { }

  ngOnInit() {}

  openCarsPage(){
    this.router.navigate(['/cars']);
    //  router.navigate takes several parameters:
    //  1 - array with path
    //  2 - relative path - (['cars'], { relativeTo: this.route } ) 
  }

  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut();
  }
}
