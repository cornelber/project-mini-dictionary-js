# Project Dictionary App 📖
![GitHub top language](https://img.shields.io/github/languages/top/cornelber/project-mini-dictionary-js?color=FFEE62&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/cornelber/project-mini-dictionary-js?color=FFEE62&style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/cornelber/project-mini-dictionary-js?color=FFEE62&style=for-the-badge)

The Dictionary App project is a project within the **Web Development** course from **ITSchool**, which as a functionality aims to show the meaning of the word that the visitor is looking for in the input using the [Dictionary](https://openweathermap.org/) API for .

**[Demo Live !](https://bc-mini-dictionary-js.netlify.app)**  👈

## Table of contents
* About
* Features
* Languages and Tools

## About
At Javascript chapter during the **Web Development** course at **ITSchool** I had to do a dictionary app (only in English due to API) using free API from [Dictionary API](https://dictionaryapi.dev/) 📖.

The application is simple, the basic features that need to be included is to show meaning (additionally: phonetic, example and partOfSpeech). The visitor just type the word in input and submit by click 'Find' or Enter.

**The function below is an example of solution how to find phonetic of the word**
```javascript
const isHereWordPhonetic = (word) => {
                            let phoneticFound = data[0].phonetics;
                            for (let i = 0; i < phoneticFound.length; i++) {
                                if(phoneticFound[i].text){
                                    wordPhonetic.innerText =` - ${phoneticFound[i].text}`;
                                    return phoneticFound[i];
                                }
                            }
                            wordPhonetic.innerText = ``;
                        }
                        isHereWordPhonetic(data);
```

The API I used was the free of the [free dictionary api](https://dictionaryapi.dev/).

You can see the demo [here](https://bc-mini-dictionary-js.netlify.app) 👈

## Freatures

* Word meaning, part of speech, phonetic and example (in case the word have phonetic and example at he same path)
* Responsive app

## Languages and Tools

* Javascript ES6
* HTML5 & CSS

<hr>

<a href="https://github.com/cornelber">👉 Made by cornelber</a>
<a href="#top">👆 Back to top</a>

