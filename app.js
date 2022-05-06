const dataOutputContainer = document.querySelector('[data-output]');
const valueInput = document.querySelector('[data-value]');
const buttonFind = document.querySelector('[data-find]');
const searchedWord = document.querySelector('[data-searched-word]');
const wordMeaning = document.querySelector('[data-word-meaning]');
const wordExample = document.querySelector('[data-word-example]');
const wordPhonetic = document.querySelector('[data-phonetic]');


// Display Output Container
buttonFind.addEventListener('click', (e) => {
    e.preventDefault();
    //Display Output container on press Enter or Find
    const value = valueInput.value;
    if(value != ''){
        dataOutputContainer.classList.remove('unshow');
    } else if (value === '') {
        dataOutputContainer.classList.add('unshow');
    }
})

valueInput.addEventListener('change', () => {
    const value = valueInput.value;
    // Dictionary word meaning
    const getWordMeaning = (word) => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => {
            response.json().then(data =>{
                if ( data.title == 'No Definitions Found'){
                    searchedWord.innerText = `No Definitions Found`;
                    wordMeaning.innerHTML = `<i class="fa-solid fa-exclamation"></i> This word doesn't exist. <br/>
                    <i class="fa-solid fa-exclamation"></i> This dictionary receives words only in English - <strong>${value}</strong> may not be in english language.`;
                    wordPhonetic.innerText = ``;
                    wordExample.innerHTML = ``;
                } else {
                    let title = data[0].word;
                    let definition1 = data[0].meanings[0].definitions[0].definition;
                    let definition2 = data[0].meanings[0].definitions[1].definition;
                    let phonetic = data[0].phonetic;
                    let example = data[0].meanings[0].definitions[0].example;
                    
                    searchedWord.innerText = `${title}`;
                    wordMeaning.innerHTML = `${definition1} <br/> ${definition2}`;
                    if(phonetic) {
                        wordPhonetic.innerText =` - ${phonetic}`;
                    } else {
                        wordPhonetic.innerText = ``;
                    };
                    if(example){
                        wordExample.innerHTML = `Example of using <b>${title}</b> in action: <em>${example}</em>`;
                    } else {
                        wordExample.innerHTML = ``;
                    };
                }
                
            })
        })
    }
    getWordMeaning(value);
})
