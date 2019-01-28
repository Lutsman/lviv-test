import fixtureArticles from '../fixtures';

export const getArticles = () => new Promise((resolve, reject) => {
    if (typeof(Storage) !== "undefined") {
        const articles = JSON.parse(localStorage.getItem('articles')) || fixtureArticles;

        resolve(articles);
    } else {
        reject(new Error('no local storage'));
    }
});

export const setArticles = articles => new Promise((resolve, reject) => {
    if (typeof(Storage) !== "undefined") {
        const json = JSON.stringify(articles);
        localStorage.setItem('articles', json);
        resolve();
    } else {
        reject(new Error('no local storage'));
    }
});
