    jQuery(document).ready(function () {
        //Disable full page
        $("body").on("contextmenu", function (e) {
            return false;
        });

        $('body').bind('cut copy paste', function (e) {
            e.preventDefault();
        });

        //json data get
        $.getJSON("js/meterials.json", function (data) {
            //  let main_key;
            //  let sub_key;
            //materials display logic
            let materials = $('<div class="col-md-3">' + data.key + '</div>')
            $('#examList').append(materials);

        });       



    });
