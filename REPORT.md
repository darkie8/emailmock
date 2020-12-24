# HENNGE Admission Challenge Report (Email Archiver UI Mockup)

====================================================================================================================

  A simple mock up for Email Archiver. Core Design has been provided by HENNGE (Desktp + Mobile view). States are not maintained as there are no server side DB + APs.

## Technology Stack Used

  Application has been written in Typescript(JS superset) and Angular +11 framework has been used.

## Installation

  `npm i` should do the trick. If you dont have Angular latest cli. run npm script as needed. 

## 3rd party packages(Module) Used

  All the packages are noted in package.json. 
  `Bootstrap`, `Primeng`, `Primeicon` are the main directly used packages.
  `Bootstrap` has been used for direct css manipulations (flexbox,borders etc.).
  `Primeng` has been used for high fidelity angular UI  componenets(accordion, badge, calendar input etc.) for app's skeleton.
  `Primeicons` has been used for some nessesery icons.

## Core Technical Architecture (summary)

  `EmailSearchModule` is the core module. It has three componenet mounted for rendering : `CoreBackgroundComponent` , `SearchRangeComponent` & `EmailResultsComponent`. There is a service called `EmailService` for mock data fetching. There is also one custom pipe(data transformer) called `SafeHtmlPipe` for bypassing framework's inbuilt security against XSS and other script injection attacks, which will be used to render  email's html inside the document body seperately. 

## Core Business Logics and their Implementations (summary)
   
   `SearchRangeComponent` renders a calender input which has a out of date range(coming as an array of Dates whereas 1st one is from-date and the last one is to-date respectively). 
   `CoreBackgroundComponent` is the hosting componenet of both  `SearchRangeComponent` & `EmailResultsComponent` componenets, it works as data buffer-zone between these two child componenets. This component deals with non-business-logic programs such as window screen resizing , flowing data from `SearchRangeComponent` to `EmailResultsComponent`. this componenet template also manages the outer margin requirement based on screeen resizing.

   `EmailResultsComponent` fetches data from `EmailService` and renders all the email threads and their consecutive hosted emails. Date array coming from `SearchRangeComponent` filters the email thread list. The thread list gets sorted based on date on either ascending or descending order. clicking on date table header entity (in movile view , it's the From header entity) can manually start the sorting proccess. 
   `EmailResultsComponent` component has many small templates inside it which gets turned on/off based on `ngif` structural directive's conditions. Every email and thread has their own respective interfaces `email` & `EmailThread`. please look into `email.service.ts` file to look into thos instances.  


## Conclusion
    Even though, this application is a mock up, with further time investment it can be made into an actual production grade app as every approach is modular. 

     