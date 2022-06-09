# Task-Flow
## Project Overview
This app was created to help you manage and acheive your tasks.

## Project Manager Rotation
Monday - Erin Cobb <br>
Tuesday - Shadi Isshac <br>
Wednesday- Vianney Ledesma <br>
Thursday - Erin Cobb <br>

## Project Schedule  

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Complete Planning, TaskFlow ReadMe, Approval from Instructors| Complete
|Day 2| Complete Front-end MVP, Complete Back-end MVP| Incomplete
|Day 3| Run app locally, Deploy MVP | Incomplete
|Day 4| Troubleshooting, Stretch goals| Incomplete
|Day 5| Present | Incomplete


## Project Description

This tool was created to assist you in organizing and accomplishing your tasks.

## Wireframes
Front-End:
- [Mobile](https://ibb.co/ZYPHq5m)
- [Desktop](https://ibb.co/n0kHK23)

Wireframing Resources:

- [Moqups](https://moqups.com/)
- [Procreate](https://procreate.art/)

## React Architecture
- [Front-End React Architecture](https://ibb.co/MMdHT8f)

## Backend Route Endpoints
- [Route Structure and Endpoints](https://ibb.co/ZMynnZF)

## DB Architecture
```
Users [
        {
            userName: "Sarah",
            id: "230497231509879",
            taskList: [
                {
                    task: "Complete Homework",
                    status: "red",
                    _id: 43-83408
                }
               
            ]
        }
    ]
```


## Time/Priority Matrix 

[Link](https://i.imgur.com/77vEHrg.png)

Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 2hrs.  This line will be used to estimate how much time any one feature will take to complete. 

Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.  

Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 2hrs to complete than break it down into smaller tasks and reassign them a new letter. 

Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo. 

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP (examples)

- Pull data using google json api
- Render data on page 
- Allow user to choose favorites 
- Save their choices in firebase

#### PostMVP 

- Anything else that is not MVP

## Functional Components
- Home
    - App Landing Page
- Nav
    - Navigation Menu
- Login
    - Allows users to log in and manage their tasks on the site.
- Tasks
    - Displays list of tasks user has made
- Signup
    - Allows users to register on the site and begin creating tasks
- OurTeam
    - Displays information about the website's development team 

Time frames are also key in the development cycle.  You have limited time to code all phases of the portfolio. Your estimates can then be used to evalute possibilities based on time needed and the actual time you have before the portfolio must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Home | H | 2hrs | hr |
| Nav | H | 2hrs | hr |
| Login | H | 2hrs | hr |
| Tasks| H | 2hrs | hr |
| Our Team | H | 2hrs | hr |
| Routes 1 & 2 | H | 2hrs |  hr | 
| Front end CRUD functionality | H | 2.5hrs | hr | hr |
| Seed User Model | H | 2hrs | hr |  
| Seed Task Model | H | 2hrs | hr |
| Add Controller | H | 2hrs | hr |
| Add Connection.js | H | 2hrs | hr |
| Create Cluster | H | 2hrs | hr
| Back end CRUD | H | 2.5hrs | hr| 
| Deploy front end to Github | H | 2hrs |  hr |
| Deploy back end to Heroku | H | 2hrs |  hr |

| Total | H | 31hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Status Bar | M | 3hr | hr | hr |
| Logo | L | 2hr | hr | hr |
| SignUp | H | 2hrs | hr |
| Total | H | 7hrs| hrs |

## Additional Libraries
- Cors
- Dotenv
- Express
- Github Pages
- Heroku
- MongoDB
- Mongoose
- Node
- React, React Router

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
>>>>>>> 14f2e8fcfed4aef0221766cc2004c5cfa3b3e68c
