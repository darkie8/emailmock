import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreBackgroundComponent } from './core-background/core-background.component';
import { SearchRangeComponent } from './search-range/search-range.component';
import { EmailResultsComponent } from './email-results/email-results.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';



@NgModule({
  declarations: [CoreBackgroundComponent, SearchRangeComponent, EmailResultsComponent, SafeHtmlPipe],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule
  ]
})
export class EmailSearchModule { }
