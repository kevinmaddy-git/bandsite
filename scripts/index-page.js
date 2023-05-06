// API Key
const apiKey = "3dbe1dce-3a08-47d5-baf1-8f70e87ccaaa";

// Default Comments Array
function displayComments(arr) {
    let commentContainer = document.querySelector(".comment__default--comment");

    for (let i = 0; i < arr.length; i++) {
        //changes ms to actual date
        let m = new Date(arr[i]["timestamp"]);
        let dateString =
            m.getUTCMonth() + 1 + "/" + m.getUTCDate() + "/" + m.getUTCFullYear();

        let defaultContainer = document.createElement("div");
        defaultContainer.classList.add("comment__default");
        commentContainer.appendChild(defaultContainer);

        let imageContainer = document.createElement("div");
        imageContainer.classList.add("comment__image-container-one");
        defaultContainer.appendChild(imageContainer);

        let headerContainer = document.createElement("div");
        headerContainer.classList.add("comment__header");
        defaultContainer.appendChild(headerContainer);

        let image = document.createElement("div");
        image.classList.add("comment__header--image-none");
        imageContainer.appendChild(image);

        let name = document.createElement("p");
        name.classList.add("comment__header--name");
        name.innerText = arr[i]["name"];
        headerContainer.appendChild(name);

        let date = document.createElement("p");
        date.classList.add("comment__header--date");
        date.innerText = dateString;
        headerContainer.appendChild(date);

        let textContainer = document.createElement("div");
        textContainer.classList.add("comment__textcontainer-default");
        defaultContainer.appendChild(textContainer);

        let comment = document.createElement("p");
        comment.classList.add("comment__textcontainer-default--comment");
        comment.innerText = arr[i]["comment"];
        textContainer.appendChild(comment);
    }
}

// Comments Section
const form = document.querySelector(".comment__inputcontainer");

// Prevent page refresh
form.addEventListener("submit", submitEvent => {
    submitEvent.preventDefault();

    // Post Comments
    let newComment = {
        name: submitEvent.target.name.value,
        comment: submitEvent.target.comment.value
    };

    axios
        .post(
            `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
            newComment
        )
        .then(() => {
            getComments();
        });

    // Clear Name/Comment after post
    submitEvent.target.name.value = "";
    submitEvent.target.comment.value = "";
});

// Comments from API
function getComments() {
    axios
        .get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
        .then(response => {
            // Clear existing comments to prevent duplicate posts
            let commentContainer = document.querySelector(".comment__default--comment");
            commentContainer.innerHTML = "";
            displayComments(
                response.data.sort(function (a, b) {
                    return b.timestamp - a.timestamp;
                })
            );
        });
}

getComments();

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.querySelector("#name-input");
    const commentTextarea = document.querySelector("#comment-textarea");

    // Focus event listener for name input
    nameInput.addEventListener("focus", function () {
        nameInput.value = "";
    });

    // Focus event listener for comment textarea
    commentTextarea.addEventListener("focus", function () {
        commentTextarea.value = "";
    });

    // Input event listener for name input
    nameInput.addEventListener("input", () => {
        if (nameInput.value.trim() === "") {
            nameInput.style.borderColor = "red";
        } else {
            nameInput.style.borderColor = "";
        }
    });
});