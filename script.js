
document.querySelector('button').addEventListener('click', function() {
    const birthdate = new Date(document.querySelector('input[type="date"]').value);
    var y1 = birthdate.getFullYear();
    var m1 = birthdate.getMonth();
    var d1 = birthdate.getDate();

  var date = new Date();
  var d2 = date.getDate();
  var m2 = date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if(d1 > d2){
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if(m1 > m2){
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;


    
    document.querySelector('#year').textContent = y;
    document.querySelector('#months').textContent = m;
    document.querySelector('#days').textContent = d;

});