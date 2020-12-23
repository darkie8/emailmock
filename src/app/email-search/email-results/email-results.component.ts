import { Component, EventEmitter, OnInit } from '@angular/core';
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
  // readingEvent: EventEmitter<{threadpos: number, index: number}>[]
  constructor(private emailService: EmailService) { }
  ngOnInit(): void {
    this.threads = this.sortByDateThreads(this.renderThreadList(), this.descending);
    // this.readingEvent = this.threads.map(el => (new EventEmitter()));
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
   * Count Read Emails
   */
  public countRead(emails: email[]): number {
    return emails.filter(email => !email.read).length ;
  }
  /**
   * sort By Date Threads
   */
  private sortByDateThreads(threads: EmailThread[], descending?: boolean): EmailThread[] {
    const dateToTs = (d: EmailThread) => Date.parse(d.emails[d.emails.length-1].date.toISOString())
    return !descending ? threads.sort((a, b) => dateToTs(b) - dateToTs(a)) : threads.sort((a, b) => dateToTs(a) - dateToTs(b));
  }
  /**
   * sorting List While Rendering
   */
  public sortingWhileRendering(): void {
    this.descending = !this.descending;
    this.threads = this.sortByDateThreads(this.renderThreadList(), this.descending);
  }
  /**
   * sortEmailsbydate
   */
  public sortEmailsbyDateEmails(emails: email[], descending: boolean) {
    const dateToTs = (d: email) => Date.parse(d.date.toISOString())
    return !descending ? emails.sort((a, b) => dateToTs(b) - dateToTs(a)) : emails.sort((a, b) => dateToTs(a) - dateToTs(b));
  }
  /**
   * Attachment checker for a thread
   */
  public isThereAttachments(threadData: EmailThread): boolean {
    return threadData.emails.some(
      email => this.isThereAttachmentInEmail(email) 
    )
  }
  /**
   * isThere Attachment In Email
   */
  public isThereAttachmentInEmail(email: email): boolean {
    const attachments = email.attachments;
    if(!attachments) {return false}
    try {
      if(attachments[0].fileURL) {return true}
    } catch (error) {
      return false;
    }
  }
  /**
   * email tab opened
   */
  public onTabOpen(e: any, i: number): void {
    this.threads[i].emails[e.index].opened = true;
    this.threads[i].emails[e.index].read = true;
    
  }
  /**
   * email tab close
   */
  public onTabClose(e: any, i: number): void {
    this.threads[i].emails[e.index].opened = false;
  }
  /**
   * thread tab opened
   */
  public onTabOpenMain(e: any): void {
    this.threads[e.index].opened = true;
  }
  /**
   * thread tab close
   */
  public onTabCloseMain(e: any): void {
    
    this.threads[e.index].opened = false;
  }
  /**
   * last index needs to be selected of email
   */
  public isSelected(thread: EmailThread, index: number): boolean {
    const islast = thread.emails.length === index + 1;
    const pos = this.threads.indexOf(thread);
    if(islast && !this.threads[pos].emails[index].read) {
      // this.readingEvent[pos].emit({threadpos: pos, index})
      this.threads[pos].emails[index].read = true;
      // setTimeout(() => {}, 10);
    }
    return islast;
  }
  /**
   * day difference From Today
   */
  public diffFromToday(d: Date): string {
    const diff = (new Date).getDate() - d.getDate() ;
    return diff === 0 ? `Today` : `${diff} day${diff > 1 ? 's' : ''}`
  }
  /**
   * getInnerText
   */
  public getInnerText(data: string) {
    const elementA = document.createElement('div');
    elementA.innerHTML = data;
    return elementA.innerText;
    
  }
}
