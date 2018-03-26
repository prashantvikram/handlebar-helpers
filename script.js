$(document).ready(function () {
    //request data via ajax or use local json as in this example

    // $.ajax({
    //     type: "get",
    //     url: 'https://jsonplaceholder.typicode.com/posts',
    //     dataType: 'json'
    // })
    // .done(function (results) {
    //     updateTemplate("#posts-template", "#posts-container", results)
    // });
    
    updateTemplate()
})

function updateTemplate() {

    var context = {
        data,
        sortBy: document.getElementById("sortby").value, //takes string
        sortOrder: document.getElementById("sortorder").value, //valid values ASC, asc, DESC, or desc
        keyphrase: document.getElementById("search").value, //space separated words
        searchIn: 'title' //takes string or array of strings
    };

    $("#posts-container").html(Handlebars.compile($("#posts-template").html())(context));
}

var data = [
    {
        "id": 1,
        "title": "Boring Title",
        "body": "A boring article about how to create boring titles"
    },
    {
        "id": 2,
        "title": "Cool Title",
        "body": "The title's cool but the article is boring. What'dya expect?"
    },
    {
        "id": 3,
        "title": "10 ways to come up with a cool title",
        "body": "Clickbait. Here are the Ads!"
    },
    {
        "id": 4,
        "title": "You'll never guess how boring this title is",
        "body": "Because neither can we! Some random BS. Some more random BS"
    },
    {
        "id": 5,
        "title": "Title's, Title's Everywhere",
        "body": "But no relevant content"
    },
    {
        "id": 6,
        "title": "That's Enough",
        "body": "Yes, I think it is"
    },
    {
        "id": 7,
        "title": "I'm running out of things to write",
        "body": "Then don't"
    },
    {
        "id": 8,
        "title": "Title 8",
        "body": "Body for Title 8"
    },
    {
        "id": 9,
        "title": "Title 9",
        "body": "Body for Title 9"
    },
    {
        "id": 10,
        "title": "Title 10",
        "body": "Body for Title 10"
    }
];