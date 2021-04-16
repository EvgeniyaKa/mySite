'use strict';

let text_ing = document.querySelector('.text_ing');
let ing_list = document.querySelector('.ing_list');
let text_rus = document.querySelector('.text_rus')
let rus_list = document.querySelector('.rus_list')

let dictionary = [
    {ing: 'cat', rus: 'кот'},
    {ing: 'dog', rus: 'собака'},
    {ing: 'mouse', rus: 'мышь'},
    {ing: 'cccc', rus: '4444'}
]
 // let dict = 'https://raw.githubusercontent.com/EvgeniyaKa/dictionary/main/dict'  

const showIng = (input, list) => {
    list.textContent = ''

    if(input.value !== '') {
        const filterIng = dictionary.filter((item) => {
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
const showRus = (input, list) => {
    list.textContent = ''

    if(input.value !== '') {
        const filterIng = dictionary.filter((item) => {
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
    showIng(text_ing, ing_list )
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
console.log(wordIng);
let wordRus = addWordsRus.value

let obj = {
    ing: wordIng, rus: wordRus
}
dictionary.push(obj)
console.log(dictionary);
});

// вывод всех слов
let allWordsButton = document.querySelector('.all_words_button')
let allWordsList = document.querySelector('.all_words_list')

let showAllWodrs = (evt, list, dict) => {
    dict.map(item => {
    const li = document.createElement('li');
            li.classList.add('dictionary_link');
            allWordsList.classList.add('allWordsList');
            li.textContent = `${item.ing}: ${item.rus}`;
            list.append(li)
     } )}


allWordsButton.addEventListener('click', (evt) => {
    showAllWodrs(evt, allWordsList, dictionary)
    console.log(evt);
})