function crossPlayer() {
    if ($("#miniplayer").css("position") == "sticky") {
        $("#miniplayer").slideUp(function() {
            $("#miniplayer").css('position', 'relative');
            $("#miniplayer").slideDown('fast');
        });
    } else if ($("#miniplayer").css('position') == "relative") {
        $("#miniplayer").slideUp();
    }
}

function showPlaylist() {
    //$("#player").css("display", "block");
    $("#player").slideDown('fast', function() {
        $("#slideicon").removeClass('fa-chevron-up');
        $("#slideicon").addClass('fa-minus');

        if ($("#spotify").attr("height") === "500px") {
            $("#spotify").attr("height", "80px");
        } else {
            $("#spotify").attr("height", "500px");
        }

        $("#playlisticon").toggleClass('fa-th-list');
        $("#playlisticon").toggleClass('fa-indent');
    });
}

$("#miniplayer").css('display', 'none');
$("#miniplayer").slideDown('fast');