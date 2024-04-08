import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-bootstrap-rating',
  templateUrl: './ng-bootstrap-rating.component.html',
  styleUrl: './ng-bootstrap-rating.component.css'
})
export class NgBootstrapRatingComponent implements OnInit  {
  @Input() starRating: number = 0;

 
  // starRating = 0; 
  ngOnInit(): void {
    
  }
  rateChanged(rate:number){
    this.starRating = rate;
    console.log(this.starRating);
    
  }
}
