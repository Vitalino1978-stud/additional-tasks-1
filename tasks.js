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