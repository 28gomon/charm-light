'use strict';

const heightTitle = () => {

    // высота заголовков [post, news, reviews] на главной странице
    const reviewTitle = document.querySelectorAll('.last-review__list .title');
    const postTitle = document.querySelectorAll('.last-post__list .title');
    const newsTitle = document.querySelectorAll('.last-news__list .title');
    const restTitle = document.querySelectorAll('.rest-post .title');

    const titleHeight = (titleList = []) => {
        const titleHeight = [];

        for (let i = 0; i < titleList.length; i++) {
            titleHeight.push(titleList[i].clientHeight);
        }

        const max = Math.max.apply(null, titleHeight);

        for (let i = 0; i < titleList.length; i++) {
            titleList[i].style.height = `${max}px`;
        }
    }

    if (postTitle) {
        titleHeight(postTitle);
    }
    if (reviewTitle) {
        titleHeight(reviewTitle);
    }
    if (newsTitle) {
        titleHeight(newsTitle);
    }
    if (restTitle) {
        titleHeight(restTitle);
    }
    // высота заголовков [post, news, reviews] на главной странице

};

export default heightTitle;