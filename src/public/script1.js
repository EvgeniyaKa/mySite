// 'use strict';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: 'AIzaSyB_tJdvC96FQuwJFCWUBy0Z5KBEhxtqVUs',
  authDomain: 'site-1f883.firebaseapp.com',
  databaseURL: 'https://site-1f883-default-rtdb.firebaseio.com',
  projectId: 'site-1f883',
  storageBucket: 'site-1f883.appspot.com',
  messagingSenderId: '727259993055',
  appId: '1:727259993055:web:164c67fa67fd0d6efa2a6a',
  measurementId: "G-BYEHPDR078"
  };
  firebase.initializeApp(config);
  const base = firebase.database().ref()
  console.log(base.ing);
  base.on("value", function(data) {
    let dict = data.val();
    console.log(dict);
  })

//   let a = []
//   base.orderByKey().on("child_added", function(data) {
//       a.push(data.key)
//     console.log(a);
//  });
// import {base} from '../index'
// base.on("child_added", function(data) {
//     var newPlayer = data.val();
//     console.log("name: " + newPlayer.ing);

//  });
// let a = base.on("value")
// console.log(a);
// console.log(playersRef);
// var config = {
//     apiKey: "AIzaSyB_tJdvC96FQuwJFCWUBy0Z5KBEhxtqVUs",
//   authDomain: "site-1f883.firebaseapp.com",
//   databaseURL: "https://site-1f883-default-rtdb.firebaseio.com",
//   projectId: "site-1f883",
//   storageBucket: "site-1f883.appspot.com",
//   messagingSenderId: "727259993055",
//   appId: "1:727259993055:web:164c67fa67fd0d6efa2a6a",
//   measurementId: "G-BYEHPDR078"
//   };
//   firebase.initializeApp(config);
  
// function getReference() {
//   // [START rtdb_get_reference]
//   var database = firebase.database();
//   // [END rtdb_get_reference]
// }

let text_ing = document.querySelector('.text_ing');
let ing_list = document.querySelector('.ing_list');
let text_rus = document.querySelector('.text_rus')
let rus_list = document.querySelector('.rus_list')
const showIng = (input, list, dict) => {
    list.textContent = ''

    if(input.value !== '') {
        const filterIng = dict.filter((item) => {
            const fixItem = item.ing.toLowerCase();
            console.log(fixItem);
            return fixItem.includes(input.value.toLowerCase())
        });
        console.log(filterIng);
        filterIng.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dictionary_link');
            ing_list.classList.add('ing_lists');
            li.textContent = item.ing;
            list.append(li)
        })
    }
}
const showRus = (input, list, dict) => {
    list.textContent = ''

    if(input.value !== '') {
        const filterIng = dict.filter((item) => {
            const fixItem = item.rus.toLowerCase();

            return fixItem.includes(input.value.toLowerCase())
        });
        filterIng.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dictionary_link');
            rus_list.classList.add('rus_lists');
            li.textContent = item.rus;
            list.append(li)
        })
    }
}
let showTarget = (evt, input, list, dict) => {
   
    const targetIng = evt.target
    const targetValue = evt.target.innerHTML
    const targetValue1 = dict.filter(item => item.ing == targetValue)
    if (targetIng.tagName.toLowerCase() === 'li') {
        input.value = targetIng.textContent
        list.textContent = ''
        let asd = targetValue1.map(item => item.rus)
        console.log(asd);
        text_rus.value = asd
    }
}
let showTargetRus = (evt, input, list, dict) => {
   
    const targetIng = evt.target
    const targetValue = evt.target.innerHTML
    const targetValue1 = dict.filter(item => item.rus == targetValue)
    if (targetIng.tagName.toLowerCase() === 'li') {
        input.value = targetIng.textContent
        list.textContent = ''
        let asd = targetValue1.map(item => item.ing)
        console.log(asd);
        text_ing.value = asd
    }
}

text_ing.addEventListener('input', () => {
    showIng(text_ing, ing_list, )
})
text_rus.addEventListener('input', () => {
    showRus(text_rus, rus_list)
})
ing_list.addEventListener('click', (evt) => {
    console.log(evt);
    showTarget(evt, text_ing, ing_list, dictionary)
})
rus_list.addEventListener('click', (evt) => {
    showTargetRus(evt, text_rus, rus_list, dictionary)
})

// Добавление слов
let addWordsIng = document.querySelector('.add_words_ing');
let addWordsRus = document.querySelector('.add_words_rus');
let addWordsButton = document.querySelector('.add_words_button');
console.log(addWordsIng.value);

// addWordsIng.addEventListener('input', (e) => {
// let ab = e.target.value
// console.log(ab);
// })
// addWordsRus.addEventListener('input', (e) => {
// let a = e.target.value
// console.log(a);
// })
addWordsButton.addEventListener('click', (e) => {
    console.log(e);

let wordIng = addWordsIng.value
console.log(wordIng);
let wordRus = addWordsRus.value
if (wordIng) {
    alert('Слово уже есть')
}
else {
    base.push ({
        ing: wordIng,
        rus: wordRus
    });
}
// let obj = {
//     ing: wordIng, rus: wordRus
// }
// dictionary.push(obj)
// console.log(dictionary);
// let aadbase = firebase.database().ref();
// console.log(aadbase);
});

// вывод всех слов
let allWordsButton = document.querySelector('.all_words_button')
let allWordsList = document.querySelector('.all_words_list')


base.on("child_added", function(data) {
    let dict = data.val();
    let showAllWodrs = (evt, list, dict) => {
        
        // dict.map(item => {
        const li = document.createElement('li');
                li.classList.add('dictionary_link');
                allWordsList.classList.add('allWordsList');
                li.textContent = `${dict.ing}: ${dict.rus}`;
                list.append(li)
        //  } )
        }
    // const li = document.createElement('li');
    //             li.classList.add('dictionary_link');
    //             allWordsList.classList.add('allWordsList');
    //             li.textContent = `${dict.ing}: ${dict.rus}`;
    //             list.append(li)
    console.log(dict);
    
    allWordsButton.addEventListener('click', (evt) => {
        showAllWodrs(evt, allWordsList, dict)
        console.log(evt);
    })

 });
// var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
// console.log(playersRef);