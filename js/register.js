$(document).ready(function() {
    //点击选框切换背景
    // $("input").on("click", function() {
    //         $(".main_1").addClass("main_2")
    //     })
    //显示司机注册
    $(".driver").on("click", function() {
        // $(".main_1").rmoveClass("main_2");
        $(".main_1").addClass("main_3");
        $(".company").removeClass("register_active");
        $(".person").addClass("register_active")
    });
    //显示货方注册
    $(".comp").on("click", function() {
        $(".main_1").removeClass("main_3");
        $(".main_1").addClass("main_2");
        $(".person").removeClass("register_active");
        $(".company").addClass("register_active")
    });
})
