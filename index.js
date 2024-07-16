
function saturdayFun(activity = "roller-skate") {
  if (activity === "roller-skate") {
    return "This Saturday, I want to roller-skate!";
  } else {
    return "This Saturday, I want to bathe my dog!";
  }
}
function mondayWork(toDo = "go to the office"){
    if(toDo === "go to the office"){
        return "This Monday, I will go to the office.";
    }
    if(toDo = "work from home"){
        return "This Monday, I will work from home.";
    }
}
function wrapAdjective(symbol) {
    return function(adjective) {
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}

// code your solution here
