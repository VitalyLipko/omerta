import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  reviews: string[] = ["review1", "review2", "review3", "review4", "review5"];
  constructor() { }

  ngOnInit() {
  }

}
