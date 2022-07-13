import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DonateService } from '../service/donate.service';
import { DonationsapiservicesService } from '../service/donationsapiservices.service';
declare let paypal:any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  // Start of express paypal checkout

  addScript: boolean = false;

  paypalLoad: boolean = false;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ATed4StI8u8idUqzC6goYriIYTrXcFstEfOFzLJOs_z-QconZi7lFx7Fx1aEEnYh7FK_nBH6q3WhoMEy',
    },
    commit: true,
    payment: (data:any, actions:any) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD' } }
          ]
        }
      });
    },

    onAuthorize: (data:any, actions:any) => {
      return actions.payment.execute().then((payment:any) => {
        // Do something
        alert('Transaction successful!')
      })
    }

  };

  ngAfterViewChecked(): void {
    if(!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#myPaypalButtons');
        this.paypalLoad = true;
      })
    }
  }

  

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }





  // End of express paypal checkout

  // Getting the data from the form inputs

  displayVal1:string = '';

  getValue1(val:string) {
    console.warn(val)
    this.displayVal1 = val
  }


  displayVal2:string = '';

  getValue2(val:string) {
    console.warn(val)
    this.displayVal2 = val
  }

  // End of getting the form inputs data

  constructor(private _service:DonateService, private _route:ActivatedRoute, private route:Router) { 
    // render(
    //  { 
    //   id: '#myPaypalButtons',
    //   currency: 'USD',
    //   value: '200',
    //   onApprove: (details) => {
    //     alert('Transaction successful');
    //   }       
    //   }
    // )
  }

  charityDisplayed: Array<any> = [];
  charity: any;

  sent: any;

  ngOnInit(): void {
    let id = 0;

    this._route.paramMap.subscribe(( data:any ) => {
      // console.log('Data received is');
      id = data.params.id
    

    this._service.charitiesProps().subscribe((data: any[])=>{

      this.charityDisplayed = data
      this.charityDisplayed = this.charityDisplayed.filter((data :any) => data.id == id);

      // if(this.charityDisplayed.length <= 0) {
      //   this.route.navigateByUrl('');
      // }

      this.charity = this.charityDisplayed[0];

      console.log(this.charity)

    });

    });

    this.sent = {

      amount: '',

    };

  }

  donating(){

    this._service.donationsMade(this.sent).subscribe((userData: any)=>{
      console.log(userData)

    },
    );

  }
}