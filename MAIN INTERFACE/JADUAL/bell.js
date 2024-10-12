$(document).ready(function() {
    var ids = [];
    $('#over').on('click', function() {
        $('#list').toggle();
    });

    // Message with Ellipsis
    $('div.msg').each(function() {
        var len = $(this).text().trim().split(" ");
        if (len.length > 12) {
            var add_elip = $(this).text().trim().substring(0, 65) + "…";
            $(this).text(add_elip);
        }
    });
});
