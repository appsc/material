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
            $.each(data.group1.history.oldhistory, function (key, val) {
                let materials = $('<div class="col-md-3">' + val.chapter1 + '</div>')
                $('#examList').append(materials);

            });

        });       



    });
