// document.querySelector('button').addEventListener('click', function() {
//     const birthdate = new Date(document.querySelector('input[type="date"]').value);
//     const currentDate = new Date();
//     const years = currentDate.getFullYear() - birthdate.getFullYear();
//     const months = currentDate.getMonth() - birthdate.getMonth();
//     const days = currentDate.getDate() - birthdate.getDate();

//     if (months < 0) {
//         years--;
//         months += 12;
//     }
//     if (days < 0) {
//         months--;
//         const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
//         days += daysInMonth;
//     }

//     document.querySelector('#year').textContent = years;
//     document.querySelector('#months').textContent = months;
//     document.querySelector('#days').textContent = days;
// });





// const months = [31,28,31,30,31,30,31,31,30,31,30,31];

// function ageCalculate(){
//     let today = new Date();
//     let inputDate = new Date(document.querySelector('input[type="date"]').value);
//     let birthMonth,birthDate,birthYear;
//     let birthDetails = {
//         date:inputDate.getDate(),
//         month:inputDate.getMonth()+1,
//         year:inputDate.getFullYear()
//     }
//     let currentYear = today.getFullYear();
//     let currentMonth = today.getMonth()+1;
//     let currentDate = today.getDate();

//     leapChecker(currentYear);

//     if(
//         birthDetails.year > currentYear ||
//         ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
//         (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
//     ){
//         alert("Not Born Yet");
//         displayResult("-","-","-");
//         return;
//     }

//     birthYear = currentYear - birthDetails.year;

//     if(currentMonth >= birthDetails.month){
//         birthMonth = currentMonth - birthDetails.month;
//     }
//     else{
//         birthYear--;
//         birthMonth = 12 + currentMonth - birthDetails.month;
//     }

//     if(currentDate >= birthDetails.date){
//         birthDate = currentDate - birthDetails.date;
//     }
//     else{
//         birthMonth--;
//         let days = months[currentMonth - 2];
//         birthDate = days + currentDate - birthDetails.date;
//         if(birthMonth < 0){
//             birthMonth = 11;
//             birthYear--;
//         }
//     }
//     displayResult(birthDate,birthMonth,birthYear);
// }

// function displayResult(bDate,bMonth,bYear){
//     document.querySelector('#year').textContent = years;
//     document.querySelector('#months').textContent = months;
//     document.querySelector('#days').textContent = days;
// }

// function leapChecker(year){
//     if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
//         months[1] = 29;
//     }
//     else{
//         months[1] = 28;
//     }
// }


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