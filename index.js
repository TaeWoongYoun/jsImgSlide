var 지금사진 = 1;

$('.btn1').on('click', function(){
    $('.slide').css('transform', 'translateX(0vw');
})

$('.btn2').on('click', function(){
    $('.slide').css('transform', 'translateX(-100vw');
})

$('.btn3').on('click', function(){
    $('.slide').css('transform', 'translateX(-200vw');
})

$('.next').on('click', function(){
    if (지금사진 == 1){
        $('.slide').css('transform', 'translateX(-100vw');
        지금사진 ++;
    } else if(지금사진 == 2){
        $('.slide').css('transform', 'translateX(-200vw');
        지금사진 ++;
    } else if(지금사진 == 3){
        $('.slide').css('transform', 'translateX(0vw');
        지금사진 = 1;
    }
})
