var $submitBtn2 = $("#done");

var API = {
    saveNew: function (user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/new",
            data: JSON.stringify(user)
        });
    },
    getNews: function () {
        return $.ajax({
            url: "api/new",
            type: "GET"
        });
    },
    
    deleteNew: function (id) {
        return $.ajax({
            url: "api/new/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    API.saveNew().then(function () {
        console.log("yuh")
    });


};

var donezo = function (event) {
    event.preventDefault();

    API.newbie(user).then(function () {
        console.log("yuhhh")
    });


};


// Add event listeners to the submit and delete buttons
$submitBtn2.on("click", donezo);