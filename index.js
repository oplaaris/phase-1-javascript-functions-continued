// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
  }
  
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Example usage:
  const encouragingPromptFunction = wrapAdjective("!!!");
  console.log(encouragingPromptFunction("awesome")); // "You are !!!awesome!!!"
  console.log(encouragingPromptFunction()); // "You are !!!special!!!"
  