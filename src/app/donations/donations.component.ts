import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DonateService } from '../service/donate.service';


@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {


  
  constructor( private http: HttpClient, private router: Router,  donateService:DonateService) { }



  ngOnInit(): void {

  

  }

onSubmit(data: any) {

    this.http.post('https://donationappke.herokuapp.com/api/donations/',data)
    .subscribe((Response)=>{

      // this.router.navigate(['/payment']);
      console.warn(Response);
  
    })
    
    console.log(data);

  
  }



  
  }




