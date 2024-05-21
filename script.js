
function showOutput (value){
    document.getElementById("output-field").innerHTML = value
}


function handleClearBtn(){
    showOutput("")
}

function handleIfCondition(){
    let num = prompt("Enter an integer")
    if(num%2 == 0){
        showOutput("The number is Even")
    }else{
        showOutput("The number is odd")
    }
}

function handleSwitchCase(){
    let grade = prompt("Enter your grade")
     grade = grade.toUpperCase()
    switch (grade) {
        case "A":
            showOutput("Excellent")
            break;
        case "B":
            showOutput("Good")
            break;
        case "C":
            showOutput("Fair")
            break;
        case "D":
            showOutput("Poor")
            break;
        case "F":
            showOutput("Fail")
            break;
        default:
            showOutput("Invalid Grade")
    }
}

function handleName(){
   let name;
        
    do{
        name = prompt("Enter name")
        name = name.trim()

    }while(name === "" || name.length < 3)
        showOutput(name)
}