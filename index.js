function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(nested, target){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){

  var elements = document.querySelectorAll('.ranked-list');
  for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = (elements[i]+= n).toString();
  }
  return elements;
}

function deepestChild(){
    var el = document.querySelector('#grand-node');
    divs = el.querySelectorAll('div');
    for (var i = 0; i < divs.length; i++) {
      if (divs[i].children.length === 0){
      return divs[i];
    }
    }
}
