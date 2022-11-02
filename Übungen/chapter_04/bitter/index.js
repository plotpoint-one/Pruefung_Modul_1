const POSTS = [
    {
        author: "Linus Torvalds",
        avatar: "./images/torvalds.png",
        post: "Abstraction sucks!",
    },
    {
        author: "Richard Stallman",
        avatar: "./images/stallman.jpg",
        post: "I'm a GNUru!",
    },
];

const postsElement = document.querySelector("#posts");
const newPostElement = document.createElement("div");
newPostElement.innerText =
    POSTS[0].author + ": " + POSTS[0].post;
postsElement.appendChild(newPostElement);
