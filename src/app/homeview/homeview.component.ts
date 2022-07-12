import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  router: any;

  constructor( router: Router) { }
  gotoDetails(){
    this.router.navigate(['/charities-details']);  // define your component where you want to go
}
  ngOnInit(): void {
  }

}
