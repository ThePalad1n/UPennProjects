var $submitBtn = $("#pgtwo");

var API = {
    saveEducation: function (education) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/educations",
            data: JSON.stringify(education)
        });
    },
    getEducations: function () {
        return $.ajax({
            url: "api/educations",
            type: "GET"
        });
    },
    deleteEducation: function (id) {
        return $.ajax({
            url: "api/educations/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit2 = function (event) {
    event.preventDefault();
    var education = {
        instiution: $("#uni").val().trim(),
        field: $("#fieldd").val().trim(),
        strtDate: $("#dates").val().trim(),
        endDate: $("#datee").val().trim()
    };

    API.saveEducation(education).then(function () {
        console.log("yuh")
    });

    $("#uni").val().trim(),
        $("#fieldd").val().trim(),
        $("#dates").val().trim(),
        $("#datee").val().trim()


        submitPost(education);


};

function submitPost(education) {
    $.post("/api/educations", education, function () {
        window.location.href = "/mancerpt3";
    });
}
$submitBtn.on("click", handleFormSubmit2);
