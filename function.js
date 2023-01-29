var notNull = false, grades = [], subjects = ["English", "Math", "Science", "Hekasi", "Filipino", "Religion", "MAPEH", "TLE"];

function displayStudentName(){
    var name = document.getElementById("inputName").value;
    notNull = (name !== "") ? true : false;
    (notNull) ? document.getElementById("studentName").innerHTML = "Student: " + name : document.getElementById("studentName").innerHTML = "";
    getAverage();
    getFailedGrade(); 
    getPassedGrade();
}
function getAverage(){
    var name = document.getElementById("inputName").value;
    let average = 0, num = 0;
    if(notNull) 
    {
        for(let i = 0; i < subjects.length; i++){
            let inputGrade = parseFloat(document.getElementById(subjects[i]).value);
            grades[i] = inputGrade;
            if(inputGrade > 0){
                num++
            }
        }
        
        for(let i = 0; i < grades.length; i++){
            average += grades[i];
        }
        average /= 8;
        if(average <= 50 || average > 100){
            console.log("Invalid")
        } else if(average >= 51 && average <= 68){
            console.log("Retake/Failed")
        } else if(average >= 69 && average <= 74){
            console.log("Remidial")
        }else if(average >= 75 || average <= 100){
            console.log("Passed")
        } 
        (num === 8) ? alert("Mr. " +  name + " your grade is " + average) : ""
    }
    
}
function getFailedGrade(){
    let display = "";
    console.log("Grades Below 75")
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 75){
            display += subjects[i] + " === " + grades[i] + "\n"
        }
    }
    console.log(display)
}
function getPassedGrade(){
    let display = "";
    console.log("Grades Above 75")
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 75){
            display += subjects[i] + " === " + grades[i] + "\n"
        }
    }
    console.log(display)
}