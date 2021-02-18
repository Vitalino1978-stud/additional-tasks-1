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

// function addOverNum(firstElement, ...args) {
// let total = 0;
// for (const arg of args) {
// if (arg > firstElement) {
// total += arg;
// }
// }
// return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// console.log(addOverNum(50, 15, 27));

// Пиши код ниже этой строки
// function findMatches(firstArray, ...args) {
//   const matches = []; // Не изменяй эту строку
//    for (let i = 0; i < firstArray.length; i+=1) {
//     for (const arg of args) {
//       if (arg === firstArray[i]) {
//          matches.push(arg);
//       }
//     }
//   }
  
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//    const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1);
//     this.books.splice(bookIndex, 0, newName);
	
	
//     // Пиши код выше этой строки
//   },
// };
//const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//    addPotion(potionName) {
//     this.potions.push(potionName);
//   },
//     removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//   },
//   // Пиши код выше этой строки
// };

//4 module//
// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром(параметр callback)
// колбэк - функцию и возвращала ее вызов.
// Функция deliverPizza или makePizza будет передаваться как колбэк и ожидать аргументом
// имя готовой доставляемой пиццы.

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
  
// }
// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
  
// }
// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
//     // callback(makePizza);
// }
// console.log(makeMessage('Роял гранд', makePizza));
// // возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// console.log(makeMessage('Ультрасыр', deliverPizza));
// // возвращает строку 'Доставляем пиццу Ультрасыр.'.

// const printMessage = function(message) {
//   console.log(message);
// };
// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };
// higherOrderFunction(printMessage);

// Task3-4

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
// console.log(`Едим пиццу ${pizzaName}.`);
// });

// Task4 - 4
// Необходимо написать логику обработки заказа пиццы.
// Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка
// onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName,
//   метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку
// 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName,
//   метод order должен возвращать результат вызова колбэка onSuccess,
//     передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// Тесты
// Метод order объявляет три параметра.
// Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает
// 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает
// 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает
// 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает
// 'Ошибка! В ассортименте нет пиццы с названием Венская.'.
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     else {
//       return onError(pizzaName);
//     };
//   },
// };
// // Пиши код выше этой строки
// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }
// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${error}.`;
// }
// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
// pizzaPalace.order('Биг майк', makePizza, onOrderError);
// pizzaPalace.order('Венская', makePizza, onOrderError);

// Task7-4
// Задание
// Сервису приготовления и доставки еды требуется функция
// генерации сообщений о статусе заказа.
// Дополни функцию composeMessage(position) так,
//   чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. 
// Ваш заказ < позиция > -й в очереди.' 
// Позиция это значение параметра position - позиция элемента в массиве(на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта - заказа в
// контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages, с помощью метода map,
//   получился массив сообщений о статусе заказов из массива orders.

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.` 
// }

// const messages = orders.map((order, index) => {
//   return composeMessage.call(order, index+1);

// })
// // [order, index, array] 


// console.table(messages);

// Task9-4
// Задание
// Функция composeMessage(customerName) создаёт приветственные сообщения для ресторанов.
// Дополни код так, чтобы в переменных pizzaPalaceComposer и burgerShackComposer были её копии
// с привязанным контекстом к соответствующим объектам.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }
// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, добро пожаловать в «Steam»."
// const gmail = { service: 'Gmail' };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Поли'); // "Поли, добро пожаловать в «Gmail»."

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };
// const burgerShack = {
//   company: 'Burger Shack',
// };
// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');


// Task10 - 4
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики.
// Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на
// метод объекта service.
// Сбор статистики симулируется логированием строки.Разберись и дополни код так, чтобы он работал верно.

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };
// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }
// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.
// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']


// module-5
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);
 
// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;


// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// --
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// --
// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// --
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// --
// function Storage(items){
//   this.items = items;
// }
// Storage.prototype.getItems = function() {
//   return this.items;
// }
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// }
// Storage.prototype.removeItem = function (item) {
//   const index = this.items.indexOf(item);
//   this.items.splice(index, 1);
//   return this.items;
// }
  // --
//   function StringBuilder(baseValue) {
//   this.value = baseValue;
// };
// StringBuilder.prototype.getValue = function() {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function(str) {
//   return (this.value = this.value + str);
// };
// StringBuilder.prototype.padStart = function(str) {
//   return (this.value = str + this.value );
// };
// StringBuilder.prototype.padBoth = function(str) {
//   return (this.value = str + this.value + str);
// };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// class Car {
//   brand;
//   model;
//   price;
//   constructor({ brand, model, price }){
//     this.brand = brand;
//   this.model = model;
//   this.price = price;
    
// }
// }
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// t 10-5
// Задание
// Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и 
// добавь два метода для публичного интерфейса, для чтения и изменения этого свойства.

// getBrand() - возвращает значение приватного свойства brand.
// changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
// Тесты
// Объявлен класс Car.
// Свойство brand в классе Car объявлено приватным.
// Конструктор класса принимает объект со свойствами brand, model и price.
// В результате вызова new Car({ brand: 'Audi', model: 'Q3', price: 36000 }) получится 
// объект { model: 'Q3', price: 36000 }.
// В результате вызова new Car({ brand: 'BMW', model: 'X5', price: 58900 }) получится 
// объект { model: 'X5', price: 58900 }.
// В результате вызова new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }) получится 
// объект { model: 'Murano', price: 31700 }.
// У экземпляра нет публичного свойства brand.
// Метод getBrand() возвращает значение приватного свойства brand.
// Метод changeBrand('Honda') изменяет значение приватного свойства brand на 'Honda'.

// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }