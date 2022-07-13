import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charities-details',
  templateUrl: './charities-details.component.html',
  styleUrls: ['./charities-details.component.css']
})
export class CharitiesDetailsComponent implements OnInit {

  constructor(private router: Router) { }


  gotoDonations(){
    this.router.navigate(['/donations']);  // define your component where you want to go
}
  ngOnInit(): void {
  }

}
