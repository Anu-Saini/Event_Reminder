# Event_Reminder

## The Task

We are generating a daily task Scheduler page using a express.js, node.js and javascript application. The application is used by users to write and save notes, which acts as a reminder.

## User Story
```md
AS A user, I WANT to be able to write, save and read notes as required
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```md
With this application,
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I click on the delete icon in the left navigation pannel, 
THEN I am only able to see those records, which are alive. the deleted once are taken out of the list.
```

## Directory Structure

Our directory has the below structure :

```md
.
├── db/                    // Db_json file , holding the data entered and saved.  
├── images/                // images used in readme.md.
│                          //showing functionality of the code  
├── node_moodules          // modules by npm 
├── public   
│   ├── Assets/                  
│           ├── CSS/                 
│               ├── style.css/     //contains styling  sheet    
│           ├── js/
│               ├── indes.js/      //contains source code
│   ├── index.html                 //contains main landing HTMl document 
│   ├── notes.html                 //contains notes document
│                
|── .gitignore             //indicate files Git should ignore    
├── server.js              // runs the application
├── package-lock.jso       // locks the version of dependancies
└── package.json
├── README.md       

## Functionality of Application 



## Installation 
we need to install npm package for the inquirer, jest, Filesystem using npm init , npm install

## code of Functionality
the walkthrough of the functionality of the code from initiating the application , building up the array of team profile, reviewing the HTML Webpage and then verifying the unit tests is avialable at the following link:(https://drive.google.com/file/d/1WVdl_jI9oLSMVedKpE3msolQLeJAfTOF/view)

## Functionality of code images 
-To initiate our CLI application we need to run ' node index.js'
(./images/node start.jpg)

-The application will prompt us to enter the details of the employee as a manager followed by the choice of entering another employee or exiting the application.  
(./images/manager details.jpg)

- we choose to enter another employee as engineer position. once details filled, it will again give us choice of entering another employee or exiting the application.
(./images/engineer details.jpg)

- we choose to enter another employee as Intern. once details filled, it will again give us choice of entering another employee or exiting the application.
(./images/intern details.jpg)

- Once we finalise our details and exit, an array of our team will be generated.
(./images/array.jpg)

- This code functionality taking input from this array will generate a HTML page casting our team memebers.
(.images/teamhtml.jpg)

- Through this HTML page we can click to the email or github accounts toemabling opening a new email for communication in a new page and populate the emails TOT field for that respective team memeber.
(.images/contactdetails.jpg)

- To help secure the functionality of our code,we are also running some unit testing on the classes made.
(./images/testrun.jpg)
