// Declare 4 object data types

const CInfo = {
    id: 345,
    name: "name"

};

const AGroup = {
    id: 89,
    name: "name",
    course_id: 345,
    group_weight: 0,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

const AInfo = {
    id: 0,
    name: "name",
    due_at: "yyyymmdd",
    points_possible: 0
};

const LSubmission = [ //assignment is due; late
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-26",
            score: 47
        }
    },
    {
        learner_id: 125, //assignment is due; on time submission
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125, //assignent is not due
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132, //assignment is due; late!
        assignment_id: 1,
        submission: {
            submitted_at: "2050-01-24",
            score: 39
        }
    },
    {
        learner_id: 132, //assignment is due; late!
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

// console.log(LSubmission[3].submission.submitted_at);
// let friend = new Date(LSubmission[3].submission.submitted_at);
// console.log(friend);
// console.log(Date.now);
// // console.log(friend > Date.now);
// console.log(Date(AGroup.assignments[0].due_at));
// console.log(Date("2023-01-25"));

// function getLearnerData(course, ag, submissions) {
//   // here, we would process this data to achieve the desired result.
//   const result = [
//     {
//       id: 125,
//       avg: 0.985, // (47 + 150) / (50 + 150)
//       1: 0.94, // 47 / 50
//       2: 1.0 // 150 / 150
//     },
//     {
//       id: 132,
//       avg: 0.82, // (39 + 125) / (50 + 150)
//       1: 0.78, // 39 / 50
//       2: 0.833 // late: (140 - 15) / 150
//     }
// ]
// }

// //   "learner_id": number,
// "assignment_id": number,
// "submission": {
//   "submitted_at": Date string,
//   "score": number

// kk for this function, I would need to loop through an array of grades and for each iteration
// i would need to average weighted points. I would need to select only matching points to average. This will require a filter 
// And I would need to organize this by each learner id
// logic of validations (with rank):
// 1. matching course info id with  assignment id: if assignmentgroup.courseid === courseinfo.id proceed else "Assignment group doesnt not match course Id. Please resubmit."
// 2. assignment due date: if (due = due at date < time.now ); then if (on time = submit date <= due at , else late) else not due
//      if not due (due else) = do not average 
//      if due & on time = average. if due and not on time (on time else) deduct 10% of possible point from the actual points earned.
// 3. asignment id match
// 4
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmission) {
    //Course info Validation
    if (CourseInfo.id !== AssignmentGroup.course_id) {
        return console.log("Assignment Group and Course provided do not match. Please review and try again.");
    }

    //need to extract unique learner ids to be used in other functions:
    let uniqueLearnerIDs = [];

    LearnerSubmission.forEach((x) => {
        if (uniqueLearnerIDs.includes(x.learner_id)) { }
        else {
            uniqueLearnerIDs.push(x.learner_id);
        }
    });

    // SAme logic to extract unique assignment ids:

    let uniqueAssignmentIds = [];

    LearnerSubmission.forEach((x) => {
        if (uniqueAssignmentIds.includes(x.assignment_id)) { }
        else {
            uniqueAssignmentIds.push(x.assignment_id);
        }
    });

    //extract valid assignment ids:
    let validAssignmentIds = AssignmentGroup.assignments.map((x) => x.id);

    // Similar logic to Transform LS for due date considerations
    const NewLearnerSubmission = [];
    for (j = 0; j < LearnerSubmission.length; j++) {
        for (i = 0; i < validAssignmentIds.length; i++) {
            if (LearnerSubmission[j].assignment_id !== validAssignmentIds[i]) {
                continue
            }
            else {
                if (new Date(AssignmentGroup.assignments[i].due_at) > Date.now()) { // future due date validation
                    continue
                }
                else if (new Date(LearnerSubmission[j].submission.submitted_at) <= (new Date(AssignmentGroup.assignments[i].due_at))) { //on time validation
                    NewLearnerSubmission.push(LearnerSubmission[j]);

                }
                else {
                    LearnerSubmission[j].submission.score = LearnerSubmission[j].submission.score - (AssignmentGroup.assignments[i].points_possible / 10); //deduct points for late
                    NewLearnerSubmission.push(LearnerSubmission[j]);
                }
            }



        }
    }

    LearnerSubmission = LearnerSubmission.filter((x) => Date(x.submission.submitted_at) <= Date.now) //filter out assignments turnedin but not due.






    // filter non due submissions out
    //  
    // let dueAssignments = 


    let scoreArr = [];
    // maybe filter first? Filter assignment id in learner submission to ids within the assignment group

    //use .includes to validate id



    // for (let eachSubmission of LearnerSubmission) {
    //     const result = words.filter((word) => word.length > 6)

    // }
    return scoreArr;

};


console.log(getLearnerData(CInfo, AGroup, LSubmission));