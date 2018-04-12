
$(document).ready(function() {
  'use strict';

  let docContent = document.querySelectorAll(".blog-post");

  function removeVowels(content){
    let removedContent;
    content.forEach(function(element) {
      let childrenArr = element.children;

      for (let i=0; i<childrenArr.length; i++) {
        let noMoreVowels = childrenArr[i].innerText.replace(/[aeiou]/gi, '');
        childrenArr[i].innerText = noMoreVowels;
      }
    })
  }

  $('#trigger').click(function() {
    removeVowels(docContent);
  });
});
