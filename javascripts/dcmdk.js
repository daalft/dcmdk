/**
 * Created by David on 25.07.2014.
 */
$(document).ready(function() {
    /*
    $('.input').on("click", function() {
        if(confirm("Do you want to clear this box?")) {
            $(this).text("");
        }
    });
    */

    $('#go').on("click", function() {
        // get letters to replace
        var a = $('#rep').val().split(",");
        // get letters to replace with
        var b = $('#rap').val().split(",");
        // get collapse value
        var c = $('#col').is(':checked');
        // for each letter to replace with
        b.forEach(function(d) {
            // calculate replaced string
            var t = $('#origin').val().split("").map(function(e) {
                return $.inArray(e, a) > -1 ? d : e === "\n" ? "<br/>" : e;
            });
            // collapse if checked
            t = c ? collapse(t, d) : t.join("");
            // append output
            $('.output').append(t).append("<br/><br/>");
        });
        $('html, body').animate({
            scrollTop: $("#output").offset().top
        }, 2000);
    });

    $('#clear').on('click', function() {
       $('#output').text("");
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 2000);
    });

    function collapse(a,d) {
        var r = new RegExp("(" + d + "){2,}", "gi");
        return a.join("").replace(r, d);
    }
});