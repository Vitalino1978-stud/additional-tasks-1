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

// / function includes(array, value) {
//   // Пиши код ниже этой строки
// for (const element of array) {
//   if (element === value){
//     return true
//   }
// }
//   return false
 //   // Пиши код выше этой строки
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const price of order) {
  // total += price;
//   }
//   //for (let i = 0; i < order.length; i += 1) {
//   //  total += order[i];
//   //}

//   // Пиши код выше этой строки
//   return total;
// }

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//   for (const number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
  
// }
// filterArray([1, 2, 3, 4, 5], 3); 

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// const values = Object.values(colors);
// for (const color of colors) {
//   //console.log(color.hex);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);

//   // hexColors.push(colors.hex);
//   // rgbColors.push(colors.rgb);

// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   //const values = Object.values(products)
//   for (const value of products) {
// //console.log(value);
//     if (value.name === productName) {
//       return value.price;
//     }
//   }
  
  
//   // Пиши код выше этой строки
// }
// console.log(getProductPrice('Радар'));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
  
//   const newArr = [];
  
//   for (const value of products) {
//     for (const key in value) {
//      console.log(key);
//       if (propName === key) {
//       //console.log(propName); 
//       //console.log(value.name);
//       newArr.push(value[key]);
//        //console.log(newArr);
//     }
//     }
//   }
//   return newArr;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };
// console.log(hotel.name);
// console.log(Object.values(hotel));

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
//    for (const value of products) {
//      //console.log(value.quantity);
//      if (value.name === productName) {
//        totalPrice = (value.price) * (value.quantity);
       
//      }
        
//       //console.log(totalPrice); 
     
//     }
  
//   return totalPrice;
//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Радар')); 
//  console.log(calculateTotalPrice('Дроид'));

// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   public: true,
//  //rating: 8.38,
// };
// const { title, author, rating: rat } = book;
// //console.log(title);
// //console.log(author);
// console.log(rat);

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки


// for (const color of colors){
//   const { hex, rgb } = color;
//   console.log(hex);
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {today:{low: lowToday, high: highToday, icon: todayIcon}, tomorrow: {low: lowTomorrow, high: highTomorrow, tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},} = forecast;

// console.log(tomorrowIcon);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
  
//   const { text, ...rest } = data;
//   const newObject = {text, category, priority, completed, ...data};
//   //return data;
//   return newObject;

//   // Пиши код выше этой строки
// }
// console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));
// // { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.

// function add(...args) {
//   let total = 0;
//   for (let i = 0; i<args.length; i+=1) {
//     total +=args[i];
  
//   // Пиши код выше этой строки
// }
//   return total;
// }
// console.log(add(12, 4, 11, 48));