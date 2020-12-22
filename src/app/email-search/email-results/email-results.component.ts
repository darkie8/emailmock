import { Component, OnInit } from '@angular/core';
import { EmailService, EmailThread, email } from 'src/app/services/email.service';

@Component({
  selector: 'result',
  templateUrl: './email-results.component.html',
  styleUrls: ['./email-results.component.css']
})
export class EmailResultsComponent implements OnInit {
  mailCount = 1;
  threads: EmailThread[];
  ascending = false;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.threads = this.sortByDate(this.renderThreadList(), this.ascending);
  }
  /**
   * Render Thread List
   */
  public renderThreadList(): EmailThread[] {
    return this.emailService.getEmailThreads();
  }
  /**
   * dateDifference
   */
  public dateDifference(date: Date): Object {
    const monthSame = (new Date()).getMonth() === date.getMonth() ;
    const daySame = (new Date()).getDate() === date.getDate();
    const yearSame = (new Date()).getFullYear() === date.getFullYear();
    return {monthSame, daySame, yearSame};
  }
  /**
   * Count Opened Emails
   */
  public countOpened(emails: email[]) {
    return emails.filter(email => !email.opened).length ;
  }
  /**
   * sortByDate
   */
  private sortByDate(threads: EmailThread[], ascending?: boolean): EmailThread[] {
    const dateToTs = (d: EmailThread) => Date.parse(d.emails[d.emails.length-1].date.toISOString())
    return !ascending ? threads.sort((a, b) => dateToTs(b) - dateToTs(a)) : threads.sort((a, b) => dateToTs(a) - dateToTs(b));
  }
  /**
   * sorting List While Rendering
   */
  public sortingWhileRendering() {
    this.ascending = !this.ascending;
    this.threads = this.sortByDate(this.renderThreadList(), this.ascending);
  }
}
