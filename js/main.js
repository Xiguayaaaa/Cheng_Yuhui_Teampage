$(function() {
    var $close = $('.close');
    var $detailPage = $('.mask');

    var content = {
        "yuhui" : {
            name : 'Yuhui Cheng',
            img : 'images/yuhui.jpg',
            desp1 : 'Fanshawe Student',
            desp2 : 'I am from Hubei, China',
            desp3 : 'My program is Interactive Media Design.',
            desp4 : 'I like movie, music, and video game.'
        },
        'tom':{
            name : 'Tom',
            img : 'images/tom.png',
            desp1 : 'Cartoon character',
            desp2 : 'From (Tom and Jerry)<br> Very famous cartoon.',
            desp3 : 'I like to catch Jerry.',
            desp4 : 'Even I get played around a lot by he, I believe I can catch him.'
        }
    };

    $close.click(function () {
        $detailPage.css('display','none');
    });

    $('.content div').click(function (e) {
        var id = $(this).attr('data-id');
        $('.detail').empty().append(`<p>${content[id].name}</p>` +
            `<p>${content[id].desp1}</p>` +
            `<p>${content[id].desp2}</p>` +
            `<p>${content[id].desp3}</p>` +
            `<p>${content[id].desp4}</p>`);
        $('.photo img').attr('src',`${content[id].img}`);
        $detailPage.css('display','block');
    })


});
