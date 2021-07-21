
verificaPalindrome('arara');
verificaPalindrome('genesis');
verificaPalindrome('tenet');

function verificaPalindrome(palavra){
  if (palavra[0] == palavra[palavra.length-1]){
    if (palavra[1] == palavra[palavra.length-2]){
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}