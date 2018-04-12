
$(document).ready(function() {
  'use strict';

  let bp = $('.blog-post');
  let all = document.querySelectorAll(".blog-post");


  function removeVowels(content){
    console.log(content);
    let removedContent;
    content.forEach(function(element) {

      let removedContent = element.textContent.replace(/[aeiou]/gi, '');

      element.textContent = removedContent;
      console.log(removedContent);
    })
    // document.getElementById('display').innerHTML = removedContent;
  }

  $('#trigger').click(function() {
    console.log('***** button fired ********');

    // console.log(bp);
    removeVowels(all);
  });

  // $('.blog-post').dissemvowel();
});
