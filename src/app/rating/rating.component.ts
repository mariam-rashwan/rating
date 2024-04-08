import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  @Input() rating: number = 0;

  stars: number[] = [1, 2, 3, 4, 5];
  // selectedValue: number = 0;
  isMouseover = true;
  
  countStar(star: number) {
    this.isMouseover = false;
    this.rating = star;
  }
  
   addClass(star: number) {
    if (this.isMouseover) {
      this.rating = star;
    }
   }
  
   removeClass() {
     if (this.isMouseover) {
        this.rating = 0;
     }
   }
}
