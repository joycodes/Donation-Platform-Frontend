import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DonationsapiservicesService } from '../service/donationsapiservices.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {
  donationForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor() { }



  ngOnInit(): void {
    
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.donationForm.value);
  }
}