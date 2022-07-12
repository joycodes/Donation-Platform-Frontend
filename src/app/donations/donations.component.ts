import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  // donationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });


  
  constructor( private http: HttpClient) { }



  ngOnInit(): void {
    
  }

  onSubmit(data: any) {

    this.http.post('https://donationappke.herokuapp.com/api/donations/',data)
    .subscribe((result)=>{
      console.warn('result', result);

    })
    // TODO: Use EventEmitter with form value
    console.warn(data);
  }
}