'use strict';

let text_ing = document.querySelector('.text_ing');
let ing_list = document.querySelector('.ing_list');
let text_rus = document.querySelector('.text_rus')
let rus_list = document.querySelector('.rus_list')

let dictionary = {cat: 'кот', dog: 'собака', mouse: 'мышь'}
  let dict = 'https://raw.githubusercontent.com/EvgeniyaKa/dictionary/main/dict'  
// function as(dict) {
//     return fetch(dict).then(d => d.json())
//     .then(data => {
//                 console.log('Data: ', data);
//             })
//  };

 async function getData(dict) {
    // console.log('Fetch todo started...')
    try {
        // await delay(2000)
        const response = await fetch(dict)
        const data = await response.json()
        console.log(data);
        text_ing.addEventListener('input', () => {
            showIng(text_ing, ing_list, data)
        })
        text_rus.addEventListener('input', () => {
            showRus(text_rus, rus_list, data)
        })
        return data
    } catch (e) {
        console.log(e)
    }
} 

//console.log(data);
// let as = getData(dict)

const showIng = (input, list, di) => {
    list.textContent = ''

    if(input.value !== '') {
        let b = [];
        for(let key in di) {
            b.push(key)
        }
        const filterIng = b.filter((item) => {
            const fixItem = item.toLowerCase();

            return fixItem.includes(input.value.toLowerCase())
        });
        filterIng.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dictionary_link');
            ing_list.classList.add('ing_lists');
            li.textContent = item;
            list.append(li)
        })
    }
}
const showRus = (input, list, di) => {
    list.textContent = ''

    if(input.value !== '') {
        let b = [];
        for(let key in di) {
            b.push(di[key])
        }
        const filterIng = b.filter((item) => {
            const fixItem = item.toLowerCase();

            return fixItem.includes(input.value.toLowerCase())
        });
        filterIng.forEach((item) => {
            const li = document.createElement('li');
            li.classList.add('dictionary_link');
            ing_list.classList.add('rus_lists');
            li.textContent = item;
            list.append(li)
        })
    }
}
let showTarget = (evt, input, list) => {
   
    const targetIng = evt.target
    const targetValue = evt.target.innerHTML
    console.log(targetValue);
    if (targetIng.tagName.toLowerCase() === 'li') {
        input.value = targetIng.textContent
        list.textContent = ''
        text_rus.value = dictionary[targetValue]
    }
}
function getKeyByValue(object, value) {
    for (var prop in object) {
        if (object.hasOwnProperty(prop)) {
            if (object[prop] === value)
            return prop;
        }
    }
}
let showTargetRus = (evt, input, list) => {
   
    const targetIng = evt.target
    const targetValue = evt.target.innerHTML
    const targetValueRus = getKeyByValue(dictionary, targetValue)
    console.log(evt);
    // if (targetValue != '') {
    //     text_ing.value = ''
    // }
    if (targetIng.tagName.toLowerCase() === 'li') {
        input.value = targetIng.textContent
        list.textContent = ''
        text_ing.value = targetValueRus
    }
}

// text_ing.addEventListener('input', () => {
//     showIng(text_ing, ing_list )
// })
getData(dict)
// text_rus.addEventListener('input', () => {
//     showRus(text_rus, rus_list)
// })
ing_list.addEventListener('click', (evt) => {
    showTarget(evt, text_ing, ing_list)
})
rus_list.addEventListener('click', (evt) => {
    showTargetRus(evt, text_rus, rus_list)
})

// Добавление слов
let addWordsIng = document.querySelector('.add_words_ing')
let addWordsRus = document.querySelector('.add_words_rus')
let addWordsButton = document.querySelector('.add_words_button')
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
let wordRus = addWordsRus.value
dictionary[wordIng] = wordRus
});
