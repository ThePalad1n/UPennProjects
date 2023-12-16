var $submitBtn = $("#pgfour");

var API = {
    saveSkill: function (skill) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/skills",
            data: JSON.stringify(skill)
        });
    },
    getSkills: function () {
        return $.ajax({
            url: "api/skills",
            type: "GET"
        });
    },
    deleteSkill: function (id) {
        return $.ajax({
            url: "api/skills/" + id,
            type: "DELETE"
        });
    }
};

var handleFormSubmit = function (event) {
    event.preventDefault();

    var skill = {
        skillName: $("#skill").val().trim(),
        skillLevel: $("#lvl").val().trim(),
        keyword: $("#keyword").val().trim(),
        skillName2: $("#skill2").val().trim(),
        skillLevel2: $("#lvl2").val().trim(),
        keyword2: $("#keyword2").val().trim(),
        skillName3: $("#skill3").val().trim(),
        skillLevel3: $("#lvl3").val().trim(),
        keyword3: $("#keyword3").val().trim(),
        skillName4: $("#skill4").val().trim(),
        skillLevel4: $("#lvl4").val().trim(),
        keyword4: $("#keyword4").val().trim(),
        skillName5: $("#skill5").val().trim(),
        skillLevel5: $("#lvl5").val().trim(),
        keyword5: $("#keyword5").val().trim()
    }


    API.saveSkill(skill).then(function () {
        console.log("yuh")
    });

    $("#skill").val().trim(),
        $("#lvl").val().trim(),
        $("#keyword").val().trim(),
        $("#skill2").val().trim(),
        $("#lvl2").val().trim(),
        $("#keyword2").val().trim(),
        $("#skill3").val().trim(),
        $("#lvl3").val().trim(),
        $("#keyword3").val().trim(),
        $("#skill4").val().trim(),
        $("#lvl4").val().trim(),
        $("#keyword4").val().trim(),
        $("#skill5").val().trim(),
        $("#lvl5").val().trim(),
        $("#keyword5").val().trim()

        submitPost(skill);


};

function submitPost(skill) {
    $.post("/api/skills", skill, function () {
        window.location.href = "/mancerpt5";
    });
}
$submitBtn.on("click", handleFormSubmit);
