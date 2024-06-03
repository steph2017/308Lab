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

const LSubmission = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

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
function getLearnerData(CourseInfo, AssignmentGroup, [LearnerSubmission]) {
    //Course info Validation
    if (CourseInfo.id !== AssignmentGroup.course_id) {
        return console.log("Assignment Group and Course provided do not match. Please review and try again.");
    }

    let scoreArr = [];
    // maybe filter first? Filter assignment id in learner submission to ids within the assignment group
    let validAssignmentIds = AssignmentGroup.assignments.map((x) => x.id);
    //use .includes to validate id



    // for (let eachSubmission of LearnerSubmission) {
    //     const result = words.filter((word) => word.length > 6)

    // }
    return scoreArr;

};


console.log(getLearnerData(CInfo, AGroup, LSubmission));