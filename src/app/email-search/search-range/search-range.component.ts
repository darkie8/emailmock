import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search-range.component.html',
  styleUrls: ['./search-range.component.css']
})
export class SearchRangeComponent implements OnInit {

  rangeDates: Date[];
  maxDate= new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
