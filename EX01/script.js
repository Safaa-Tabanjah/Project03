
function calculateGrade(score) {
    if (score >= 90 && score <= 100 ){
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {      
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    }
    else {
        return "Invalid score";
    }
}

function checkAccess( age , hasTicket) {
    if (age >= 18 && hasTicket) {
        return  true    + "  Access granted";
    } else {
        return false    + "  Access denied";
    }

}
    //////testing the function calculateGrade
    console.log(calculateGrade(90));
    console.log(calculateGrade(89));
    console.log(calculateGrade(73));
    console.log(calculateGrade(61));    
    console.log(calculateGrade(0));
    console.log(calculateGrade(-2));
    console.log(calculateGrade(101));
    console.log(calculateGrade("a"));
  

    /////testing the function checkAccess
    console.log(checkAccess(18 , true));
    console.log(checkAccess(17 , true));
    console.log(checkAccess(18 , false));
    console.log(checkAccess(17 , false));



