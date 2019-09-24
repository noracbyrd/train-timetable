# train-timetable
Train Timetable

This project allows the user to view a fictitious train schedule, and to add their own trains to the schedule.

For each new entry, the user enters a name for the train, the train's destination, the first time of day the train runs (in military time), and how frequently the train runs in minutes. When a user hits the Submit button, the new entry is stored in Firebase, and the DOM displays, in a new row on the schedule, the train's name, destination, and frequency. Lastly, the time of the next train to arrive and the number of minutes until that next train are calculated from the current time and the frequency of the train. 

Upon revisiting the site, any trains that have been entered are displayed in the train schedule.

Areas for improvement:
- There should be some method in place for accounting for AM versus PM. 
- There should be a way to ensure that the time is converted into the correct format if it isn't entered correctly.
