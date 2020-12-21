import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBackgroundComponent } from './core-background/core-background.component';
import { SearchRangeComponent } from './search-range/search-range.component';
import { EmailResultsComponent } from './email-results/email-results.component';



@NgModule({
  declarations: [CoreBackgroundComponent, SearchRangeComponent, EmailResultsComponent],
  imports: [
    CommonModule
  ]
})
export class EmailSearchModule { }
