var $submitBtn = $("#pgthree");

var API = {
    saveCert: function (cert) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/certs",
            data: JSON.stringify(cert)
        });
    },
    getCerts: function () {
        return $.ajax({
            url: "api/certs",
            type: "GET"
        });
    },
    deleteCert: function (id) {
        return $.ajax({
            url: "api/certs/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();
    var cert = {
        title: $("#title").val().trim(),
        certdate: $("#date").val().trim(),
        awarder: $("#awarder").val().trim(),
        title2: $("#title2").val().trim(),
        certdate2: $("#date2").val().trim(),
        awarder2: $("#awarder2").val().trim()
    };

    API.saveCert(cert).then(function () {
        console.log("yuh")
    });

    $("#title").val().trim(),
        $("#date").val().trim(),
        $("#awarder").val().trim(),
        $("#title2").val().trim(),
        $("#date2").val().trim(),
        $("#awarder2").val().trim()

        submitPost(cert);


};

function submitPost(cert) {
    $.post("/api/certs", cert, function () {
        window.location.href = "/mancerpt4";
    });
}
$submitBtn.on("click", handleFormSubmit)