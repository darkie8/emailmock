import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { EmailService, EmailThread, email, Attachment } from 'src/app/services/email.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'result',
  templateUrl: './email-results.component.html',
  styleUrls: ['./email-results.component.css'],
  providers: [MessageService]
})
export class EmailResultsComponent implements OnInit, OnChanges {
  mailCount = 0;
  threads: EmailThread[];
  descending = false;
  @Input() rangeDateFlowMain: Date[];
  @Input() screenwidth: number;
  threadsDefault: EmailThread[];
  constructor(private readonly emailService: EmailService, private readonly messageService: MessageService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.rangeDateFlowMain?.currentValue) {
      console.log(this.threadsDefault);
      
      this.threads = this.filteringbetweenDates(this.threadsDefault, changes.rangeDateFlowMain.currentValue);
      console.log(this.threads);
      this.mailCount = this.threads.length;
      this.mailerror(this.mailCount);
    }
    if(changes.screenwidth?.currentValue) {
      this.screenwidth = changes.screenwidth.currentValue;
      
    }
  }
  ngOnInit(): void {
    this.threads = this.sortByDateThreads(this.renderThreadList(), this.descending);
    this.threadsDefault = [...this.threads];
    this.mailCount = this.threads.length;
    this.mailerror(this.mailCount);
  }
  /**
   * mailerror
   */
  private mailerror(mailCount: number) {
    if(mailCount === 0) {
      this.messageService.add({ key: 'err' ,severity:'warn', summary: 'Warn', detail: 'Emails not found !'})
    }
  }
  /**
   * Render Thread List
   */
  public renderThreadList(): EmailThread[] {
    return this.threads ?? this.emailService.getEmailThreads();
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
    const dateToTs = (d: EmailThread) => Date.parse(this.sortEmailsbyDateEmails(d.emails, true)[d.emails.length-1].date.toISOString())
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
  public sortEmailsbyDateEmails(emails: email[], descending?: boolean) {
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
    const newsorted = this.sortEmailsbyDateEmails(this.threads[e.index].emails, true);
    this.threads[e.index].emails[this.threads[e.index].emails.indexOf(newsorted[newsorted.length - 1])].read = true;
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
    return thread.emails.length === index + 1;
  }
  /**
   * day difference From Today
   */
  public diffFromToday(d: Date): string {
    let diff = Math.floor(((new Date()) as any - (d as any))/(1000 * 3600 * 24)) ;
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
  /**
   * filtering with search range
   */
  private filteringbetweenDates(threads: EmailThread[], range: Date[]) {
    const dateToTs = (d: EmailThread) => (this.sortEmailsbyDateEmails(d.emails, true)[d.emails.length-1].date)
    return threads.filter(thread => {
      const datenew = dateToTs(thread);
      range[0].setHours(0, 0, 0, 0);
      range[1].setHours(24, 0, 0, 0);
      return range[0] < datenew && datenew <= range[1]
    })
  }
  /**
   * label
   */
  public label(index: number, i: number) {
    const importance = !!this.threads[i].emails[index].important;
    this.threads[i].emails[index].important = !importance;
    // usually server side API calling happens here
    this.messageService.add({ key: 'err' ,severity:'info', summary: 'Info', detail: `Email is marked as ${!importance ? 'Unimportant' : 'Important'} !`})

  }
  /**
   * Delete email
   */
  public deleteEmail(index: number, i: number) {
    this.threads[i].emails.splice(index, 1);
    if(this.threads[i].emails.length === 0) {
      this.threads.splice(i, 1)
    } else {
      this.threads[i].emails[index - 1].read = true;
    }
    // usually server side API calling happens here
    this.messageService.add({ key: 'err' ,severity:'warn', summary: 'Warn', detail: `Email has been deleted !`})

  }
}
