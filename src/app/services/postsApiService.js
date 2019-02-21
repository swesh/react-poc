var url = "https://jsonplaceholder.typicode.com/posts";

const postsApiService = {
    getPosts: function (successCB, errorCB) {
        $.getJSON(url).done((data) => {
            console.log(data);
            successCB(data);
        }).fail((err) => {
            console.log(err);
            errorCB("Something went wrong, call Admin...");
        });
    },

    getPostsUsingPromise: function () {
        var promise = new Promise((resolve, reject) => { 
            return $.getJSON(url).done((data) => {
                resolve(data);
            }).fail((err) => {
                // console.log(err);
                reject("Something went wrong, call Admin...");
            });
        });
        return promise;
    }
};

export default postsApiService;