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
            let main_keys;
            let exam_key;
            

            $.each(data.exams, function (key, val) {
                exam_key = key;
                let exam_name = exam_key.replace("_", " ");
                let exams_list = $('<li class="nav-item">'+
                    '<a class="nav-link examname active" data-toggle="pill" data-exam="'+exam_key+'" href="#'+exam_key+'">'+ exam_name +'</a>'+
                    '</li>');
                $('#exam-pills').append(exams_list);

                      let subj_name
                    let subj_key
                        for (let subj in val) {
                           subj_name = val[subj].subject_name;
                           subj_key = val[subj].key;
                        

                let materials = $('<div id="'+exam_key+'" class="container tab-pane '+exam_key+'"><br>' +
                    '<a class="subject-name" data-subject="'+subj_key+'" href="#'+subj_key+'">' + subj_name + '</a>'+
                            '</div>' +
                            '</div>');
                        $('#exam-content').append(materials);
                        $('.group_1').addClass('active');

                    }


                $('[data-exam]').on('click', function () {
                    present_exam = $(this).data("exam");
                    if (key == present_exam) {
                        $('.container.tab-pane').removeClass('active');
                        $('.'+present_exam).addClass('active');
                    }
                        });

                        
                });

            // Testing code..
            let subject_k;
            $.each(data, function (k, v) {
                $('[data-subject]').on("click", function () {
                    curSubj = $(this).data("subject");
                    subject_k = k;
                    if (curSubj == subject_k) {
                        for (let items in v.units) {

                            //console.log(v.units[items].chapter_title);
                            let lesson_detais = $('<div id="'+curSubj+'" class="subj-content ' + curSubj + ' dis-none"><h3>' + v.units[items].chapter_title + '</h3><br/><div>' + v.units[items].lesson_content + '</div></div>');
                            $('.display_lesson').append(lesson_detais)
                        }

                        $('.subj-content').removeClass('dis-block').addClass('dis-none');
                        $('.' + curSubj).addClass('dis-block').removeClass('dis-none');
                    }

                });

            });


        });    
      
});
