var $submitBtn = $("#pgone");

var API = {
    saveUser: function (user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/users",
            data: JSON.stringify(user)
        });
    },
    getUsers: function () {
        return $.ajax({
            url: "api/users",
            type: "GET"
        });
    },
    deleteUser: function (id) {
        return $.ajax({
            url: "api/users/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var user = {
        fullName: $("#fname").val().trim(),
        curTitle: $("#t").val().trim(),
        per: $("#p").val().trim(),
        street: $("#autocomplete").val().trim(),
        city: $("#inputCity").val().trim(),
        ustate: $("#inputState").val().trim(),
        zip: $("#inputZip").val().trim(),
        country: $("#inputCountry").val().trim(),
        email: $("#emailc").val().trim(),
        phone: $("#numb").val().trim(),
        network1: $("#site1").val().trim(),
        net_username1: $("#nun1").val().trim(),
        siteurl1: $("#url1").val().trim(),
        network2: $("#site2").val().trim(),
        net_username2: $("#nun2").val().trim(),
        siteurl2: $("#url2").val().trim(),
        network3: $("#site3").val().trim(),
        net_username3: $("#nun3").val().trim(),
        siteurl3: $("#url3").val().trim()
    };



    API.saveUser(user).then(function () {
        console.log("yuh")
    });


    $("#fname").val().trim(),
        $("#t").val().trim(),
        $("#p").val().trim(),
        $("#autocomplete").val().trim(),
        $("#inputCity").val().trim(),
        $("#inputState").val().trim(),
        $("#inputZip").val().trim(),
        $("#inputCountry").val().trim(),
        $("#emailc").val().trim(),
        $("#numb").val().trim(),
        $("#site1").val().trim(),
        $("#nun1").val().trim(),
        $("#url1").val().trim(),
        $("#site2").val().trim(),
        $("#nun2").val().trim(),
        $("#url2").val().trim(),
        $("#site3").val().trim(),
        $("#nun3").val().trim(),
        $("#url3").val().trim()

    submitPost(user);


};

function submitPost(user) {
    $.post("/api/users", user, function () {
        window.location.href = "/mancerpt2";
    });
}
$submitBtn.on("click", handleFormSubmit);





