var $submitBtn = $("#pgsix");

var API = {
    saveWorkHistory: function (workhistory) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/workhistorys",
            data: JSON.stringify(workhistory)
        });
    },
    getWorkHistorys: function () {
        return $.ajax({
            url: "api/workhistorys",
            type: "GET"
        });
    },
    deleteWorkHistory: function (id) {
        return $.ajax({
            url: "api/workhistorys/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var workhistory = {
        nameComp: $("#nameComp").val().trim(),
        title: $("#title").val().trim(),
        startDate: $("#startDate").val().trim(),
        endDate: $("#endDate").val().trim(),
        description1a: $("#description1a").val().trim(),
        description1b: $("#description1b").val().trim(),
        description1c: $("#description1c").val().trim(),
        nameComp2: $("#nameComp2").val().trim(),
        title2: $("#title2").val().trim(),
        startDate2: $("#startDate2").val().trim(),
        endDate2: $("#endDate2").val().trim(),
        description2a: $("#description2a").val().trim(),
        description2b: $("#description2b").val().trim(),
        description2c: $("#description2c").val().trim(),
    }


    API.saveWorkHistory(workhistory).then(function () {
        console.log("yuh")
    });

    $("#nameComp").val().trim(),
        $("#title").val().trim(),
        $("#startDate").val().trim(),
        $("#endDate").val().trim(),
        $("#description1a").val().trim(),
        $("#description1b").val().trim(),
        $("#description1c").val().trim(),
        $("#nameComp2").val().trim(),
        $("#title2").val().trim(),
        $("#startDate2").val().trim(),
        $("#endDate2").val().trim(),
        $("#description2a").val().trim(),
        $("#description2b").val().trim(),
        $("#description2c").val().trim(),

        submitPost(workhistory);


};

function submitPost(workhistory) {
    $.post("/api/workhistorys", workhistory, function () {
        window.location.href = "/mancercomplete";
    });
}
$submitBtn.on("click", handleFormSubmit);
