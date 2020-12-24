import { Injectable } from '@angular/core';
export interface Attachment {
  imageURL: string,
  fileURL: string,
  name: string
}
export interface email {
  body?: string,
  html?: string,
  attachments?: Attachment[],
  date: Date,
  opened: boolean,
  replyOf?: number,
  replytTo?: string[],
  replyFrom?: string,
  important?: boolean,
  read: boolean
}
export interface EmailThread {
    To: string[],
    CC?: string[],
    BCC?: string[],
    From: string,
    Subject: string,
    emails: email[],
    opened?: boolean
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
     // usually server side API calling happens here
     return [{
      To: ['Eorem@dolor.com', 'JoR2w@dolor.com'],
      CC: ['LRrem@dolor.com'],
      BCC: ['LERrem@dolor.com'],
      From: 'sorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `hi,<br>
        [Lorem ipsum dolor] sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
         Warm Regards,<br>
         New Love`,
        date: new Date('2014'),
        opened: false,
        read: true,
        replyOf: 0
      },{
        body: `hi,<br>
        [Lorem ipsum dolor] sit, amet consectetur adipisicing elit.
         Unde repellendus accusamus quam esse qui ut facere minima,
         voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
         Warm Regards,<br>
         New Love`,
        date: new Date('2013'),
        opened: false,
        read: true,
        replyOf: 0
      }
     ]
    },
      {
        To: ['Jorem@dolor.com', 'Jorem@dolor.com'],
        CC: ['Lorem@dolor.com'],
        BCC: ['Lorem@dolor.com'],
        From: 'sorem@consectetur.com',
        Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        emails: [{
          body: `hi,<br>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Unde repellendus accusamus quam esse qui ut facere minima,
           voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
           Warm Regards,<br>
           New Love`,
          date: new Date('2017'),
          opened: false,
          read: true,
          replyOf: 0
        }
       ]
      },{
        To: ['Sorem@doloir.com'],
        CC: ['LoyEm@dolor.com'],
        BCC: ['Lorem@dolor.com'],
        From: 'sorem@consectetur.com',
        Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        emails: [{
          body: `hi,<br>
          [Lorem ipsum dolor] sit, amet consectetur adipisicing elit.
           Unde repellendus accusamus quam esse qui ut facere minima,
           voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
           Warm Regards,<br>
           New Love`,
          date: new Date('2016'),
          opened: false,
          read: true,
          replyOf: 0
        },
        {
          body: `hi,<br>
        [Lorem ipsum dolor] sit, amet consectetur adipisicing elit.
           Unde repellendus accusamus quam esse qui ut facere minima,
           voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
           Warm Regards,<br>
           New Love`,
          date: new Date('2016'),
          opened: false,
          read: true,
          replyOf: 0
        }
       ]
      },
       {
       To: ['Lorem@dolor.com'],
       CC: ['Lorem@dolor.com'],
       BCC: ['Lorem@dolor.com'],
       From: 'sorem@consectetur.com',
       Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
       emails: [{
         body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
         date: new Date('2018'),
         opened: false,
         read: true,
         replyOf: 0
       },
       {
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date('2018'),
        opened: false,
        read: true,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date('2018'),
       opened: false,
       read: false,
       replyOf: 0
     }
      ]
       
     },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      CC: ['Lorem@dolor.com'],
      BCC: ['sorem@dolor.com'],
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date('2019'),
        opened: false,
        read: false,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date('2019'),
       opened: false,
       read: false,
       replyOf: 0
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date('2019'),
      opened: false,
      read: false,
      replyOf: 0,
      attachments: [{
        name: 'sayantan-dev.pdf',
        fileURL: 'assets/sayantan-dev.pdf',
        imageURL: 'assets/sayantan-dev.PNG'
      },{
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
      emails: [
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date(),
       opened: false,
       read: false,
       replyOf: 0
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date(),
      opened: false,
      read: false,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date(),
        opened: false,
        read: false,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date(),
       opened: false,
       read: false,
       replyOf: 0
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date(),
      opened: false,
      read: false,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date('2020'),
        opened: false,
        read: false,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date('2020'),
       opened: false,
       read: false,
       replyOf: 0,
       attachments: [{
         name: 'sayantan-dev.pdf',
         fileURL: 'assets/sayantan-dev.pdf',
         imageURL: 'assets/sayantan-dev.PNG'
       }]
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date('2020'),
      opened: false,
      read: false,
      replyOf: 0,
      attachments: [{
        name: 'sayantan-dev.pdf',
        fileURL: 'assets/sayantan-dev.pdf',
        imageURL: 'assets/sayantan-dev.PNG'
      },{
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
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date(1590969600000),
        opened: false,
        read: false,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date(1590969600020),
       opened: false,
       read: false,
       replyOf: 0
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date(1590969600023),
      opened: false,
      read: false,
      replyOf: 0
    }
     ]
      
    },{
      To: ['Lorem@dolor.com', 'minus@dolor.in'],
      From: 'Lorem@consectetur.com',
      Subject: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      emails: [{
        body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
        date: new Date(),
        opened: false,
        read: false,
        replyOf: 0
      },
      {
       body: `hi,<br>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Unde repellendus accusamus quam esse qui ut facere minima,
          voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br>
          Warm Regards,<br>
          New Love`,
       date: new Date(),
       opened: false,
       read: false,
       replyOf: 0
     },
     {
      body: `hi,<br> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde repellendus accusamus quam esse qui ut facere minima, voluptate iure quis odit quas error minus consectetur voluptatem numquam a soluta eum!<br> Warm Regards,<br> New Love`,
      date: new Date(),
      opened: false,
      read: false,
      replyOf: 0
    }
     ]
      
    }]
   }
}
