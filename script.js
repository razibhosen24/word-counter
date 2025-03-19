

var wcInput = document.getElementById('wc-input');
var wcChar = document.getElementById('wc-characters');
var wcCount = document.getElementById('wc-count');

wcInput.addEventListener('input', function() {
  var words = wcInput.value.match(/\b[-?(\w+)?]+\b/gi);
  wcCount.textContent = words ? words.length : 0;
  wcChar.textContent = wcInput.value.length;
});

// wcInput.addEventListener('input', function() {
//   var textBox = wcInput.value;
//   var char = textBox.length;
//   wcChar.innerHTML = char;
//   textBox = textBox.trim();
//   var words = textBox.split(" ");
//   var wordsCount = words.filter(function(elm){
//     return elm != "";
//   });
//   wcCount.innerHTML = wordsCount.length;
// });
