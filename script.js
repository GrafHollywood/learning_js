'use strict';
let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

function rememberMyFilms() {
    for (let i = 0; i < numberOfFilms; i++) {
        let film, rate;
        film = prompt('Один из последних просмотреных фильмов?');
        rate = prompt('На сколько оцените его?');
        if (film != null && rate != null && film != '' && rate != '' && film.length < 50) {
            personalMovieDB.movies[film] = rate;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDB() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}