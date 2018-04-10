
$(document).ready(function() {
  'use strict';

  // function dissemvowel() {
  //   console.log('*****test test test ********');
  // }
  let bp = $('.blog-post').text();

  function removeVowels(content){
    let holder = [];

  //   for (let i=0; i<content.length; i++) {
  //     // console.log(content[i]);
  //
  //     if (content[i].toString() !== 'A' || 'a' || 'E' || 'e' || 'I' || 'i' || 'O' || 'o' || 'U' || 'u' || 'Y' || 'y') {
  //       holder.push(content[i]);
  //     }
  //   }
  //   console.log(holder);
  //   let noMoreVowels = holder.join('');
  //   console.log(noMoreVowels);
  //   $('.blog-post').append(noMoreVowels);
  // }



  $('#trigger').click(function() {
    console.log('***** button fired ********');

    // console.log(bp);
    removeVowels(bp);
  });

  // $('.blog-post').dissemvowel();
});
