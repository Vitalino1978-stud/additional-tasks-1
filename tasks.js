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

// class Storage {
//   #items;
//   constructor (items){
//     this.#items = items;
//   }
// getItems () {
//   return this.#items;
// };
// addItem (newItem) {
//   this.#items.push(newItem);
// };
// removeItem (item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// };
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// t 12-5
// Задание
// Выполни рефакторинг заменив функцию-конструктор StringBuilder на класс с методами. 
// Сделай так, чтобы свойство value было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, 
// в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс StringBuilder.
// Свойство value в классе StringBuilder объявлено приватным.
// Вызов StringBuilder.prototype.hasOwnProperty('getValue') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padEnd') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padStart') возвращает true.
// Вызов StringBuilder.prototype.hasOwnProperty('padBoth') возвращает true.
// В результате вызова new StringBuilder('.') значение переменной builder это объект.
// Вызов StringBuilder.prototype.isPrototypeOf(builder) возвращает true.
// У объекта builder нет свойства value.
// Первый вызов builder.getValue(), сразу после инциализации экземпляра, возвращает строку '.'.
// Второй вызов builder.getValue(), после вызова builder.padStart('^'), возвращает строку '^.'.
// Третий вызов builder.getValue(), после вызова builder.padEnd('^'), возвращает строку '^.^'.
// Четвёртый вызов builder.getValue(), после вызова builder.padBoth('='), возвращает строку '=^.^='.
// class StringBuilder {
//   #value;
//   constructor (value) {
//     this.#value = value;
// }

// getValue () {
//   return this.#value;
// };

// padEnd (str) {
//   this.#value += str;
// };

// padStart (str) {
//   this.#value = str + this.#value;
// };

// padBoth (str) {
//   this.padStart(str);
//   this.padEnd(str);
// };
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

// t 14-5
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE <= newPrice){
//       // return Car.MAX_PRICE;
//       console.log(newPrice);
//       console.log(Car.MAX_PRICE);
//     }
//     else {
//   if (Car.MAX_PRICE > newPrice) 
 
//         this.#price = newPrice;
//       console.log(newPrice);
//   } 
//   }
  
 
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 

// task 15-5

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (Car.MAX_PRICE <= newPrice){
//     return this.#price;
//    };
//      this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// task 16-5

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price) {
// if (price > Car.#MAX_PRICE){
//   return 'Внимание! Цена превышает допустимую.'
// }
//   return 'Всё хорошо, цена в порядке.'
// }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// task 17-5

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
// static AccessLevel = { 
//   BASIC: 'basic', 
//   SUPERUSER: 'superuser' }
// }

// task 18-5
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   constructor({email, accessLevel}){
//   super(email);
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// task 19-5

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
  
// blacklistedEmails = [];
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
    
//     return this.blacklistedEmails.includes(email);
    
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// practice 20.022021
// замикание

// function foo() {
//   let total = 0;
//   function add(n) {
//     total += n;
//     console.log(this);
//     return this;
//   }
//   function result() {
//     return total;
//   }
//   console.log(this);
//   return {
//     add,
//     result,
//   };
// }
// const prev = foo();
// const next = foo();
// console.log(prev);
// prev.add(1).add(2).result(); // 3
// console.log(prev.add(1).add(2).result());
// console.log(next.add(2).add(2).add(3).result());
// function counter() {
//   let total = 0;
//   function increment() {
//     this.total += 1;
//     total += 1;
//   }
//   function decrement() {
//     this.total -= 1;
//     total -= 1;
//   }
//   return {
//     increment,
//     decrement,
//     show() {
//       return this.total;
//     },
//     showThis() {
//       console.log(this);
//     },
//     total,
//   };
// }
// const count1 = counter();
// const count2 = counter();
// // count1.increment();
// // count1.increment();
// // count1.increment();
// // console.log(count1.total);
// count2.increment();
// count2.increment();
// // console.log(count1.show());
// // console.log(count2.show());
// function bar(cbAct, cbShow) {
//   cbAct();
//   console.log(cbShow());
// }
// const cbAct1 = count1.increment.bind(count1);
// const cbShow1 = count1.show.bind(count1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// bar(cbAct1, cbShow1);
// // count1.showThis();

// кастомний фільтр
// function filter(cb) {
//   console.log(this);
//   const newArr = [];
//   for (let i = 0; i < this.length; i++){
//     if (cb(this[i], i, this)) {
//       newArr.push(this[i]);
//     }
//   }
//   return newArr;
// }
// // console.log(filter((e, i) => i > 2));
// Array.prototype.newFilter = filter;
// const arrr = [2, 5, 7, 9];
// console.log(arrr.newFilter((e) => e > 2));


// class User {

//   #users = [];

//   constructor({ login, email, password, status }) {
//     this._login = login;
//     this.email = email;
//     this.password = password;
//     this.status = status;
//   }
//   showUsers() {
//     console.log(this.#users);
//    }
//   showLogin() {
//     return this._login;
//   }
//   get login() {
//     return this._login;
//   }
//   set login(newLogin) {
//     this._login = newLogin;
  
//   }
//   addUser(User) {
//     this.#users.push(User);
//   }

// }

// const bob = new User({login: 'bob',  email: 'bob@mail.com', password: 'bobdillan', status: 'visitor'});
// // console.log(bob);
// // console.log(bob.login); 

// bob.login = 'jack';
// console.log(bob.users);
// console.log(bob.showUsers());

// // console.log(bob.login);

// class Admin extends User {
//   constructor({masterPassword, ...rest}) {
//     super(rest);
//     this.masterPassword = masterPassword;
    
//   }

// }
// const bobAdmin = new Admin({ login: 'bobAdmin', email: 'bobAdmin@mail.com', password: 'bobdillanAdmin', status: 'Admin', masterPassword: 'bobSuperAdmin' })
// console.log(bobAdmin);
// console.log(bobAdmin.login);

// module 6

// task 6-1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(function(number, index) {
//     totalPrice += number;
//   })

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// task 6-2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     numbers.forEach(function(number) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     })
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// task 6-3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(function(number) {
//       if (secondArray.includes(number)) {
//         commonElements.push(number);
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// task 6-4
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

// task 6-5
// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//    quantity * pricePerItem;

// Пиши код выше этой строки

// task 6-6
// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//  let totalPrice = 0;

//   orderedItems.forEach((item)=> {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Пиши код выше этой строки

// task 6-7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//     }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// task 6-8
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
//   }

// task 6-9
// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number += value;
        
//       }
//    newArray.push(number);
//     });
//   return newArray;
//     // Пиши код выше этой строки
//   }

// task 6-10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки

// const planetsLengths = planets.map((planet)=> planet.length);

// task 6-11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
//   const titles = books.map(book => book.title); 

// task 6-12

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
//   const genres = books.flatMap((book) => book.genres);

//  task 6-13
// // Пиши код ниже этой строки
// const getUserNames = users => {
//     return users.map((user) => user.name);

//   };
//   // Пиши код выше этой строки

// task 6-14
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//    return users.map((user) => user.email);  

//   };

// task 6-15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers. filter(number => number % 2 !== 0);
  // Пиши код выше этой строки

  // task 6-16
  // const books = [
  //   {
  //     title: 'Последнее королевство',
  //     author: 'Бернард Корнуэлл',
  //     genres: ['приключения', 'историческое']
  //   },
  //   {
  //     title: 'На берегу спокойных вод',
  //     author: 'Роберт Шекли',
  //     genres: ['фантастика', 'мистика']
  //   },
  //   {
  //     title: 'Красна как кровь',
  //     author: 'Ли Танит',
  //     genres: ['ужасы', 'мистика', 'приключения']
  //   }
  // ];
  // // Пиши код ниже этой строки
  // const allGenres = books.flatMap(book => book.genres);
  // const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
// // -----------

// const logMessage = () => {
//   console.log('Лог привызове колбек-функции через 3 секунды');

// };
// console.log('До вызова setTimeout');
// setTimeout(() => {
//   console.log('Внутри callback for setTimeout');
// }, 2000);

// console.log('After call setTimeout');
// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }
// const logger = time => {
//   console.log(`Лог через ${time}ms, потому, что не отменили таймаут`);
// };
// const timerId = setTimeout(logger, 2000, 2000);
// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }

// const logger = time => console.log(`Log every ${time}ms - ${Date.now()}`);
// console.log('Before call setInterval');
// setInterval(logger, 2000, 2000);
// console.log('After call setInterval');

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);
// if (shouldCancelInterval) {
//   clearInterval(intervalId);
// };

// console.log('До вызова setTimeout');
// setTimeout(() => {
//   console.log('вызов отложеной функции 2000');
// }, 2000);
// setTimeout(() => {
//   console.log('вызов отложеной функции 1000');
// }, 1000);

// console.log('после вызова setTimeout');

// Оповещение
// const NOTIFICATION_DELAY = 3000;
// let timerId = null;
// const refs = {
//   notification: document.querySelector('.js-alert'),
// };
// refs.notification.addEventListener('click', onNotificationClick);
// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   clearTimeout(timeoutId);
// }
// function showNotification() {
//   refs.notification.classList.add('is-visible');
//   timeoutId = setTimeout(() => {
//     console.log('Закрываем алерт автоматически, чтоб не висел');
//     hideNotification();
//   }, NOTIFICATION_DELAY);
// }
// function hideNotification() {
//   refs.notification.classList.remove('is-visible')
// }
// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//   if (promptCounter === MAX_PROMPT_ATTEMPTS) {
//     console.log('нужно остановить интервал');
//     clearInterval(intervalId);
//     return;
//   }
//   console.log('Подпишитесь на рассылку - ' + Date.now());
//   promptCounter += 1;
// }, PROMPT_DELAY);

// const date1 = new Date().getTime();
// console.log('date1', date1);
// setTimeout(() => {
//   const date2 = new Date().getTime();
//   console.log('date1', date1);
//   console.log('date2', date2);
//   console.log(date2 - date1);
// }, 3000);


///////////////////////////  TIMER BY REPETA  /////////
// import './common.css'
// const timer = {
//   start() {
//     const startTime = Date.now();
//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const {hours, mins, secs} = getTimeComponents(deltaTime);
//       // console.log('start -> currentTime', currentTime);
//       // console.log('start -> startTime', startTime);
//       // console.log('qweqweqwe');

//       // console.log(currentTime - startTime);
//       console.log(`${pad(new Date(deltaTime).getUTCHours())}:
//       ${pad(new Date(deltaTime).getMinutes())}:
//       ${pad(new Date(deltaTime).getSeconds())}`);
//     }, 1000);
//   },
// };
// timer.start();

// function updateClockFace({ hours, mins, secs }) {
//   refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//   ));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   return { hours, mins, secs };
// }

// task 6-17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);

// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// task 6-18
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
//   };
// task 6-19
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter((user) => user.age >= minAge && user.age <= maxAge);

// };
// task 6-20
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName)); 
// };
// task 6-21
// const getFriends = (users) => {
//    const commonFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = commonFriends.filter((friends, index, array) => array.indexOf(friends) === index);
  
//   return uniqueFriends;
  
// };
// task 6-22
// const getActiveUsers = (users) => {
//    return users.filter((user) => user.isActive === true); 
// };
// task 6-23
// const getInactiveUsers = (users) => {
 
//     return users.filter((user) => user.isActive !== true); 
// }; 
// task 6-24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// task 6-25
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => { return users.find((user) => user.email === email); 
   
// };
// // Пиши код выше этой строки
