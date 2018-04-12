
$(document).ready(function() {
  'use strict';

  let bp = $('.blog-post');
  let all = document.querySelectorAll(".blog-post");


  function removeVowels(content){
    let removedContent;
    content.forEach(function(element) {

      let removedContent = element.textContent.replace(/[aeiou]/gi, '');

      console.log(removedContent);
      $('.blog-post').append(removedContent);
    })
  }

  $('#trigger').click(function() {
    console.log('***** button fired ********');

    // console.log(bp);
    removeVowels(all);
  });

  // $('.blog-post').dissemvowel();
});
