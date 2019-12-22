// Q:1
/*
  reverseText('hello world!') => '!dlrow olleh'
*/

var reverseTxt = function(txt) {
  var output ='';
  [...txt].forEach(chr => output = chr + output);

  return output;
}
console.log(reverseTxt('hellow world!'));
