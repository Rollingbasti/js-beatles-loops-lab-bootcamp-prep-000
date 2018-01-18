function theBeatlesPlay(musicians,instruments){
  var array = [];
  
  for(let i = 0;i < musicians.length;i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  
  return array;
}

function johnLennonFacts(facts){
  var i;
  while(facts.lengt <= i){
    facts[0] = facts[0] + "!!!";
    i++;
  }
  return facts;
}