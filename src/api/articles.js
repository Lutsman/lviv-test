import fixtureArticles from '../fixtures';

export const getArticles = () => new Promise((resolve, reject) => {
    if (typeof(Storage) !== "undefined") {
        const articles = [];// JSON.parse(localStorage.getItem('articles')) || [];

        resolve([...articles, ...fixtureArticles]);
    } else {
        reject(new Error('no local storage'));
    }
});

export const setArticles = articles => new Promise((resolve, reject) => {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem('articles', JSON.stringify(articles));
        resolve();
    } else {
        reject(new Error('no local storage'));
    }
});
