import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-core-background',
  templateUrl: './core-background.component.html',
  styleUrls: ['./core-background.component.css']
})
export class CoreBackgroundComponent implements OnInit {
  rangeDateFlowMain : Date[]
  screenwidth = window.innerWidth;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * rangeDateFlow from search
   */
  public rangeDateFlow(e: Date[]) {
    this.rangeDateFlowMain = e;
  }
  /**
   * get updated innerwidth
   */
  @HostListener('window:resize', ['$event'])
  onResize(e: { target: Window }): void {
    this.screenwidth = e.target.innerWidth;
  }
}
