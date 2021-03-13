'use strict';

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        this.count = numberOfFilms;
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < this.count; i++) {
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
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('Пользователь решил не раскрывать информацию');
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            if (personalMovieDB.genres[i - 1] === '' || personalMovieDB.genres[i - 1] === null) {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${++i} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        this.privat = !this.privat;
    }
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();

// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();