
//DECLARING SUBMIT VAR
var submit = document.getElementById("submitbutton");

//SUBMIT FUNCTION
submit.addEventListener("click", function () {

    //VARIABLES FOR EACH GRADE SECTION
    var assignments = document.getElementById("assignments").value;
    var groupproject = document.getElementById("groupproject").value;
    var quizzes = document.getElementById("quizzes").value;
    var exams = document.getElementById("exams").value;
    var intex = document.getElementById("intex").value;

    //VARS FOR FINAL PERCENT/FINAL GRADE
    var finalpercent = ((assignments * .5) + (groupproject * .1) + (quizzes * .1) + (exams * .2) + (intex * .1)).toFixed(2);
    var finalgrade = ""

    //IF STATEMENTS FOR FINDING FINAL GRADE
    if (finalpercent >= .94) {
        finalgrade = "A";
    } else if (finalpercent >= .90) {
        finalgrade = "A-";
    } else if (finalpercent >= .87) {
        finalgrade = "B+";
    } else if (finalpercent >= .84) {
        finalgrade = "B";
    } else if (finalpercent >= .80) {
        finalgrade = "B-";
    } else if (finalpercent >= .77) {
        finalgrade = "C+";
    } else if (finalpercent >= .74) {
        finalgrade = "C";
    } else if (finalpercent >= .70) {
        finalgrade = "C-";
    } else if (finalpercent >= .67) {
        finalgrade = "D+";
    } else if (finalpercent >= .64) {
        finalgrade = "D";
    } else if (finalpercent >= .60) {
        finalgrade = "D-";
    } else if (finalpercent >= .00) {
        finalgrade = "E";
    }


    //ALERTING FINAL PERCENT & FINAL GRADE
    alert(
    "Final Percentage: " + finalpercent
    + "\n" + 
    "Final Grade: " + finalgrade);
});

