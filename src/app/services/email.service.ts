import { Injectable } from '@angular/core';
export interface Attachment {
  imageURL: string,
  fileURL: string,
  name: string
}
export interface email {
  body: string,
  attachments?: Attachment[],
  date: Date,
  opened: boolean,
  replyOf: number,
  replytTo?: string[],
  replyFrom?: string
}
export interface EmailThread {
    To: string[],
    From: string,
    Subject: string,
    emails: email[]
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
    
   }
   /**
    * Get Email Threads
    */
   public getEmailThreads(): EmailThread[] {
     return [{
       To: ['Lorem@dolor.com'],
       From: 'Lorem@consectetur.com',
       Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
       emails: [{
         body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
         date: new Date('2018'),
         opened: true,
         replyOf: 0
       },
       {
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date('2018'),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date('2018'),
       opened: true,
       replyOf: 0
     }
      ]
       
     },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date('2019'),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date('2019'),
       opened: true,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date('2019'),
      opened: true,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date(),
        opened: false,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date(),
       opened: false,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date(),
      opened: false,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date(),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date(),
       opened: true,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date(),
      opened: false,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date('2020'),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date('2020'),
       opened: true,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date('2020'),
      opened: false,
      replyOf: 0,
      attachments: [{
        name: 'sayantan-dev.pdf',
        fileURL: 'assets/sayantan-dev.pdf',
        imageURL: 'assets/sayantan-dev.PNG'
      }]
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date(1590969600000),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date(1590969600020),
       opened: true,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date(1590969600023),
      opened: true,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
        date: new Date(),
        opened: true,
        replyOf: 0
      },
      {
       body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Unde repellendus accusamus quam esse qui ut facere minima,
        voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
       date: new Date(),
       opened: true,
       replyOf: 0
     },
     {
      body: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
       Unde repellendus accusamus quam esse qui ut facere minima,
       voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!`,
      date: new Date(),
      opened: false,
      replyOf: 0
    }
     ]
      
    }]
   }
}
