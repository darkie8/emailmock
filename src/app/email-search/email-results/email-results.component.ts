import { Component, OnInit } from '@angular/core';
import { EmailService, EmailThread, email, Attachment } from 'src/app/services/email.service';

@Component({
  selector: 'result',
  templateUrl: './email-results.component.html',
  styleUrls: ['./email-results.component.css']
})
export class EmailResultsComponent implements OnInit {
  mailCount = 0;
  threads: EmailThread[];
  descending = false;
  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.threads = this.sortByDate(this.renderThreadList(), this.descending);
    this.mailCount = this.threads.length;
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
  public countOpened(emails: email[]): number {
    return emails.filter(email => !email.opened).length ;
  }
  /**
   * sortByDate
   */
  private sortByDate(threads: EmailThread[], descending?: boolean): EmailThread[] {
    const dateToTs = (d: EmailThread) => Date.parse(d.emails[d.emails.length-1].date.toISOString())
    return !descending ? threads.sort((a, b) => dateToTs(b) - dateToTs(a)) : threads.sort((a, b) => dateToTs(a) - dateToTs(b));
  }
  /**
   * sorting List While Rendering
   */
  public sortingWhileRendering(): void {
    this.descending = !this.descending;
    this.threads = this.sortByDate(this.renderThreadList(), this.descending);
  }
  /**
   * Attachment checker
   */
  public isThereAttachments(threadData: EmailThread): boolean {
    return threadData.emails.some(
      email => {
        const attachments = email.attachments;
        if(!attachments) {return false}
        try {
          if(attachments[0].fileURL) {return true}
        } catch (error) {
          return false;
        }
      } 
    )
  }
}
