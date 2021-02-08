// // function formatMessage(message, maxLength) {
// //   let result;
// // Пиши код ниже этой строки
// //   const str = message.split('')
// //   if (str < maxLength) {
// //     result = message;
// //   return result
  
// //   } else {
// //     message = str.join('') + '...';
// //   // result = message;
// // }

//   const formatMessage = (message, maxLength) => {
//   // let result;
// // Пиши код ниже этой строки
//  result = message.length < maxLength ? message : message.slice(0, maxLength)+'...';
// // Пиши код выше этой строки
//   // return result;
// }
// // Пиши код выше этой строки
//   return result;

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//     if (message.includes('spam') || message.includes('sale')) {
    
//     result = true;
//     }
//   result = false;
//   // Пиши код выше этой строки
//   return result;
// };


//  checkForSpam('Latest technology news') ;
// checkForSpam('Get best sale offers now!'); 
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('Trust me, this is not a spam message'); 
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');

// function slugify(title) {
//   // Пиши код ниже этой строки
 
//   const slug = title.toLowerCase().split(' ').join('-');
  
//  return slug;
//   // Пиши код выше этой строки
// }
// slugify('Массивы для новичков');
// console.log(slugify('Массивы для новичков'));

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
//   const makeArray1 = firstArray.concat(secondArray).slice(0, maxLength);
//   // console.log(unitedArray);

//   console.log(makeArray1);

//   //  return makeArray; 
//     // Пиши код выше этой строки
// } 
// makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3); //возвращает ['Манго', 'Поли', 'Аякс']
// makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран'], 4);


// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   let total = 0;
// for (let i = 1; i <= number; i +=1) {
//   total += i;
  
// }

// return total;
//   // Пиши код выше этой строки
// }

// // calculateTotal(3);
// console.log(calculateTotal(3));

// function calculateTotalPrice(order) {
//   let total = 0;
//   console.log(order.length);
//   // Пиши код ниже этой строки
// for (let i=0; i< order.length; i+=1) {
// total += order[i];
// }
//   // Пиши код выше этой строки
//   return total;
// }
// //calculateTotalPrice([12, 85, 37, 4])
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки

//   const newArray = [];
  
//   for (element of array1) {
//     if (array2.includes(element)) {
//       newArray.push(element);
//     }
//   }
//   return newArray;

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   const arr = [];
  //   for (let i = start; i <= end; i+=1) {
//     if (i % 2 === 0){
//       arr.push(i);
//     }
//   }
//   return arr;
  //     // Пиши код выше этой строки
//   }

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       //number = i;
//       //break;
//        return i;
//     }
  //   }
//   // Пиши код выше этой строки
// }