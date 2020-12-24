# HENNGE Admission Challenge Improvement Proposal (Email Archiver UI Mockup)

====================================================================================================================

  Even though, this mock-up UI design is serving its basic purpose, it lacks some mandatory features along with some complimentary ones. This writing will be based on my personal opinion from a frontend enginner's perspective.

## Mandatory Features

   1. `No reset data show feature` : This design doesnt deal with going back to its deafault state. It needs to have such button which can reset dafault data, once people's needs are met.
   2. `No complex data filter feature` : There are no features for `nested filter` and `time based(hh:mm:ss:ms)` queries.
   3. `No trash folder feature` : There is no `trash` folder option which can be a final place before permanant deletion of archived emails.
   4. `No design for handling complex email threads`: The design doesnt include `complex email threads`
   5. `Bland UI design`: The design doesnt look appealing , Monotounous color makes UI less engaging.It would be great to include different colors for different types of labelling.
   6. `This design also doesnt handle spam emails`: There should be a spam folder for this archive too.
   7. `Opening multiple email body at once might be a bad idea`: Opening multiple email body at once might be a bad idea as it can hamper app's performance (`Lazy loading` might save us) and it is kind of hard to handle longer threads and emails whith current design.  

## Complimentary Features
   1. `Revive and resend option`: The design may include this option to resend important emails to people .
   2. `Confidentiality`: Archived emails should not be mixed like this because their might be  confidential emails inside the db and opening them or getting access of them by unwanted party might be bad. I am assuming that it will be having strong password and networking firewall. Still the design needs to show that part.
   3. `From-date and to-date should have seperated fields`: This might be good for the user's perspective as it is kind of hard to go back and forth to get the date difference from one calender.
   etc.

## Conclusion
   We can safely assume that follwing these peoposals might make the design much more User friendly, secure ,engaging and production ready. 

