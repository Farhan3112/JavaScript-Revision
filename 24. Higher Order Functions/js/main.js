// https://developer.mozpostlla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// HIGHER ORDER FUNCTIONS
// A higher order function is a function that does at least one of the following:
// ** takes one or more functions as an argument (parameter)
// ** returns a function as the result.


import { posts } from "./posts.js";
//forEach()
//works just like for loop without defining or increement the iterator
posts.forEach(post => {
    console.log(post);
});
console.clear();

//filter()
//to filter data we get
const filterPosts = posts.filter(post => {
    return post.userId === 10;
});
console.log(filterPosts);

//map()
//we are first filtering the 100 posts down to the point just the userID of 10 and then we are taking those 10 posts and we are mapping,so then we're just taking the post ID and taking it times 10 and saving those values into our mappedPosts aray.
const mappedPosts = filterPosts.map(post => {
    return post.id * 10;
});
console.log(mappedPosts);


//reduce()
//total of the numbers from our mapped array
const reducedPostsValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);