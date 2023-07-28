/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок 24:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/




'use strict';

// Код возьмите из предыдущего домашнего задания


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt('How many films do you watched?', '')

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you watched?', '')
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('What is your last viewed film?', '').trim()
            let b = prompt('What is rank of this film would you mind?', '')

            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log("Not much");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("You are typical cinephile")
        } else if (personalMovieDB.count > 30) {
            console.log("You are advanced cinephile")
        } else {
            console.error("Wrong qty")
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            return console.log(personalMovieDB)
        }
    },

    toggleVisibleMyDB: function() {
        personalMovieDB.privat ? personalMovieDB.privat = false : personalMovieDB.privat = true
    },

    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = prompt(`What is your favourite genres by rank ${i}`, '')

            if (genre != null && genre !== '' && genre.length < 20) {
                personalMovieDB.genres[i - 1] = genre;
            } else {
                console.log('error');
                i--;
            }
        }
        personalMovieDB.genres.forEach( (genre, i) => console.log(`Любимый жанр ${ i + 1 } - это ${genre}`))
    }
}

// console.log(personalMovieDB.toggleVisibleMyDB(personalMovieDB));
// console.log(personalMovieDB.showMyDB(personalMovieDB));

// console.log(personalMovieDB.writeYourGenres());












