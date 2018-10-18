document.getElementById('calculate').addEventListener('click', handleCalculation)


function handleCalculation() {
  var x = document.getElementById('number_1').value;
  var y = document.getElementById('number_2').value;
  var total =   (parseInt (y) + parseInt (x));

  var answer = document.getElementById('total').innerHTML = total;

}
