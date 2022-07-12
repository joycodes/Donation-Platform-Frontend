import { Component, OnInit } from '@angular/core';
import { CharitiesService } from '../service/charities.service';


@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {
  charities!:any[]

  constructor(private charityService:CharitiesService) { }

  ngOnInit(): void {
    this.getCharities()
  }


  getCharities() {
    this.charityService.getCharities().subscribe(
      data=>{
        this.charities=data
        console.log(this.charities)
      }

    )
  }
}
