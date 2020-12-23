import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search-range.component.html',
  styleUrls: ['./search-range.component.css']
})
export class SearchRangeComponent implements OnInit {

  rangeDates: Date[];
  maxDate= new Date();
  searchRange = `1980:${(new Date()).getFullYear()}`
  @Output() rangeDateFlow = new EventEmitter(true);
  constructor() { }

  ngOnInit(): void {
  }
  /**
   * selecting date range
   */
  public onSelectRange() {
    if(this.rangeDates.every(date => date)){
    this.rangeDateFlow.emit(this.rangeDates);
    }
  }
}
