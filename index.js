$(function () {


    //（１）ページの概念・初期ページを設定
    var page = 0;

    //（２）イメージの数を最後のページ数として変数化
    var lastPage = parseInt($("#slide img").length - 1);

    //（３）最初に全部のイメージを一旦非表示にします
    $("#slide img").css("display", "none");

    //（４）初期ページを表示
    $("#slide img").eq(page).css("display", "block");

    //（５）ページ切換用、自作関数作成
    function changePage() {
        $("#slide img").fadeOut(1000);
        $("#slide img").eq(page).fadeIn(1000);
    };

    //（６）～秒間隔でイメージ切換の発火設定
    var Timer;

    function startTimer() {
        Timer = setInterval(function () {
            if (page === lastPage) {
                page = 0;
                changePage();
            } else {
                page++;
                changePage();
            };
        }, 5000);
    }
    //（７）～秒間隔でイメージ切換の停止設定
    function stopTimer() {
        clearInterval(Timer);
    }

    //（８）タイマースタート
    startTimer();

    /*オプションを足す場合はここへ記載*/

});

$(function () {
    // スクロールしたときに実行
    $(window).scroll(function () {
        // 目的のスクロール量を設定(px)
        var TargetPos = 350;
        // 現在のスクロール位置を取得
        var ScrollPos = $(window).scrollTop();
        // 現在位置が目的のスクロール量に達しているかどうかを判断
        if (ScrollPos >= TargetPos) {
            // 達していれば表示
            $("#topbutton").fadeIn();
        } else {
            // 達していなければ非表示
            $("#topbutton").fadeOut();
        }
    });
});

jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery('.fadein').each(function () {
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 100) {
                jQuery(this).addClass('scrollin');
            }
        });
    });
});
