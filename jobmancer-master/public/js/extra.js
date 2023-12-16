var $submitBtn = $("#pgfive");

var API = {
    saveExtra: function (extra) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/extras",
            data: JSON.stringify(extra)
        });
    },
    getExtras: function () {
        return $.ajax({
            url: "api/extras",
            type: "GET"
        });
    },
    deleteExtra: function (id) {
        return $.ajax({
            url: "api/extras/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();
    var extra = {
        org: $("#nameorg").val().trim(),
        pos: $("#pos").val().trim(),
        website: $("#orgsite").val().trim(),
        strtDate: $("#dates").val().trim(),
        endDate: $("#datee").val().trim()
    };

    console.log(extra)

    API.saveExtra(extra).then(function () {
        console.log("hi")
    });

    $("#nameorg").val().trim(),
        $("#pos").val().trim(),
        $("#orgsite").val().trim(),
        $("#dates").val().trim(),
        $("#datee").val().trim()

        submitPost(extra);


};

function submitPost(extra) {
    $.post("/api/extras", extra, function () {
        window.location.href = "/mancerpt6";
    });
};
$submitBtn.on("click", handleFormSubmit)