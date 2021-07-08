# Inspecto-Gadget

## Deployed Application
[Inspecto-Gadget](https://arcane-taiga-84005.herokuapp.com/)

### Admin-view Login
Username: Administrator <br>
Password: pass12345

### Inspector-view Login
Username: Electrical <br>
Password: pass12345

## Description
An inspection scheduling application to be utilized by the City of Orchard Lake Building Department. The City currently uses BS&A software with a SQL database to schedule/store inspection information. City inspectors and administrative staff will be able to view today’s inspections and upcoming inspections, as well as store results/notes when the inspection is completed.

### Current Problem
Currently, when an inspection is scheduled, each inspector needs to be notified in different ways (email, fax, phone call) and this often creates more work for administrative staff to ensure the information is passed along. Oftentimes, there are miscommunications that cause scheduled inspections to be missed and then require more work to have them rescheduled. Finally, inspection results are frequently input late, and inspectors often must be contacted in order for administrative staff to receive results.

### Solution
This new app will become the main portal for inspectors and admins to login and view past, present, and future inspections. The dashboard will show today's inspections, upcoming inspections, and features a calendar component that will give users a better visual in order to plan their work schedule accordingly. Inspectors will be able to input the results of their inspections, and any custom notes, which will be saved for all users to view. Users will be notified if results are missing from an inspection based on specific colorings and notification system.

### Functionality 
* Admins and Inspectors must login with their own unique IDs (username & password)
* When the details button is clicked on a given inspection, the inspection details page is opened which will display all information which includes: date of inspection, permit number, site address, inspection type, any custom comments/notes, owner name/information, contractor name, contractor phone number, work description, permit expiration date, and fee information.
* Admins will be able to view all inspection results/result notes when they are input by Inspectors.
* When an inspection is created, the time and admin that created it will be displayed.
* Inspectors will be able to view scheduled inspections and choose their result status (Approved, Disapproved, Partially Approved, etc) and input any custom notes.
* Once an inspection has been assigned a result by the Inspector, inspections on the dashboard will change from a yellow color to a green color. Inspector’s may edit/update results and notes at any time. 
* Any results input or edits made to inspections, will be saved and posted with a time stamp.
* There will be a search bar on the “past inspections” page for inspections to be able to quickly search past results.
* Inspection types will correspond with each Inspector (Ex: Mechanical Inspections can only be viewed by the Mechanical Inspector and Admins)
* The calendar will display the inspections scheduled for each day (Admins will see all types, Inspectors will see their specific type only)
* Should an Inspector fail to input results on the day of the inspection, an “Action Required” notification will appear on the Inspector’s Dashboard. Once they click on it, they will be taken to the “Past Inspections” page, and any inspections that do not have results, will be highlighted in red. Clicking on the details button on a given inspection will bring them to the “Inspection Results/Details” Page where results can be input.

## Table of Contents
- [Technology Utilized](#technology-utilized)
- [Future Development](#future-development)
- [Collaborators](#collaborators)
- [Questions](#questions)

![Screenshot (132)](https://user-images.githubusercontent.com/76264693/124687259-8e653e00-dea2-11eb-8abf-6a065a355744.png)
![Screenshot (133)](https://user-images.githubusercontent.com/76264693/124687263-8f966b00-dea2-11eb-823b-dca1d74a9c3e.png)
![Screenshot (134)](https://user-images.githubusercontent.com/76264693/124687266-91602e80-dea2-11eb-8060-568b4771b7d8.png)
![Screenshot (136)](https://user-images.githubusercontent.com/76264693/124687270-9329f200-dea2-11eb-946f-24d4ebd51cfc.png)
![Screenshot (137)](https://user-images.githubusercontent.com/76264693/124687276-958c4c00-dea2-11eb-8a78-915aa7747521.png)
![Screenshot (138)](https://user-images.githubusercontent.com/76264693/124687281-96bd7900-dea2-11eb-8861-ae0ac30277bf.png)
![Screenshot (139)](https://user-images.githubusercontent.com/76264693/124687287-991fd300-dea2-11eb-8cb6-affec1540494.png)
![Screenshot (141)](https://user-images.githubusercontent.com/76264693/124687293-9ae99680-dea2-11eb-92a4-77ccb67bbb09.png)
![Screenshot (131)](https://user-images.githubusercontent.com/76264693/124687250-8a392080-dea2-11eb-9836-4ba4757d04b5.png)

## Technology Utilized
[React.js](https://reactjs.org/), SQL, [Bootstrap (v4.6.0)](https://getbootstrap.com/), [sweetalert2](https://www.npmjs.com/package/sweetalert2), [FullCalendar](https://fullcalendar.io/), and [Moment](https://momentjs.com/).

## Future Development 
* When an inspection record is created in BS&A, this data will immediately populate into the new app.
* When a record of inspection is populated into Inspecto-Gadget, a brief notification email will be sent to the Inspector.
* Login history will be tracked to verify that inspectors did or did not login to view their inspections in a timely manner.
* Admins will be able to see when an inspector clicks on a scheduled inspection (read receipts) and the last time they logged in to the app.
* Inspectors will be able to update another calendar component to demonstrate their availability.
* Inspection results will be printable in PDF form.
* Past Inspections will be sortable by month and year.

## Collaborators
**Lauren Wenzel**
- [Github](https://github.com/Laurenzel93)
- [Email](lwenzelwebdev@gmail.com)
- [Portfolio](https://laurenzel93.github.io/my-portfolio/)

**Kelly Johnson**
- [Github](https://github.com/KellyJohnson364)
- [Email](KJ3641402@gmail.com)
- [Portfolio](https://kellyjohnson364.github.io/knj-portfolio-page/)

**Corey Rapala**
- [Github](https://github.com/crudd03)
- [Email](coreyrapala@gmail.com)
- [Portfolio](https://crudd03.github.io/my-portfolio/)

**Alissa Garzoni**
- [Github](https://github.com/RevyWatson)
- [Email](agarzoni.282@gmail.com)
- [Portfolio](https://revywatson.github.io/rebooted-portfolio/)

**Jakob Knicley**
- [Github](https://github.com/Fiskoal)
- [Email](knicleyjakob@gmail.com)
- [Portfolio](http://jakobknicley.com/)

**Ian Everitt**
- [Github](https://github.com/rflctvEQ)
- [Email](ian.andrew.everitt@gmail.com)
- [Portfolio](https://rflctveq.github.io/ian-everitt-portfolio/)

## Questions
Have questions or comments about this application?
Please feel free to email us with any inquiries at LWenzelWebDev@gmail.com.