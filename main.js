$(function () {


    var panels = $(".panel");
    var panel2 = $("#Todo");
    var panel3 = $("#What");

    panels.on('click', function () {
        var panelId = $(this).attr("data-panel")
        console.log(panelId)
    });

});