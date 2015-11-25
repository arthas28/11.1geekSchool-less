/**
 * Created by YANG on 15/10/13.
 */
var num ; //类序变量
var state = 0;   //轮播状态函数
var state1 = 0;  //轮播状态函数
var state2 = 0;  //轮播状态函数
var state3 = 0;  //轮播状态函数
var changeDiv;  //当前改变样式的div对象
var indexSpan;  //轮播图对应span标签

$(document).ready(function(){
    //鼠标移动到导航栏上页面切换效果
    $('.hot-lesson ul li').each(function(){
        $('.hot-lesson ul li').mouseover(function(){
            $('.classfiyNavStyle').removeClass('classfiyNavStyle');
            $(this).addClass('classfiyNavStyle');
            $('.classfiyLessonOn').removeClass('classfiyLessonOn');
            $('.one-classfiy-lesson').eq($(this).index()).addClass('classfiyLessonOn');
            });
    });

    //轮播图导航点击效果
    $('.banner-box').mouseover(function(){
        changeDiv = $('.swiper-inner');
        indexSpan = $('.swiper-pagination-switch');

        //遍历轮播图片对应导航标签
        indexSpan.each(function(){
            indexSpan.unbind('click').click(function(){
                $('.swiper-active-switch').removeClass('swiper-active-switch');
                //点击相应标签进行相应的位移，当前状态state改变
                switch ($(this).index()){
                    case 0: {
                        changeDiv.animate({left:'0'},'slow');
                        state = 1;
                        indexSpan.eq(0).addClass('swiper-active-switch');
                    }break;
                    case 1: {
                        changeDiv.animate({left:'-569px'},'slow');
                        state = 0;
                        indexSpan.eq(1).addClass('swiper-active-switch');
                    }break;
                    case 2: {
                        changeDiv.animate({left:'-1138px'},'slow');
                        state = -1;
                        indexSpan.eq(2).addClass('swiper-active-switch');
                    }break;
                    case 3:
                    {
                        changeDiv.animate({left: '-1708px'}, 'slow');
                        state = -2;
                        indexSpan.eq(3).addClass('swiper-active-switch');
                    }break;
                }
            });
        });
        //鼠标移动到轮播图区域左右方向按钮出现
        $('.banner-left').css({display:'block'}).mouseover(function(){
            $('.banner-left').css({'background-position':'-10px -65px'});
        }).mouseout(function(){
            $('.banner-left').css({'background-position':'-10px -5px'});
        }).unbind('click').click(function(){
            //点击左右方向按钮进行相应位移效果
            $('.swiper-active-switch').removeClass('swiper-active-switch');
            switch (state){
                case 0: {
                    changeDiv.animate({left:'0'},'slow');
                    state++;
                    indexSpan.eq(0).addClass('swiper-active-switch');
                }break;
                case -1: {
                    changeDiv.animate({left:'-569px'},'slow');
                    state++;
                    indexSpan.eq(1).addClass('swiper-active-switch');
                }break;
                case -2: {
                    changeDiv.animate({left:'-1138px'},'slow');
                    state++;
                    indexSpan.eq(2).addClass('swiper-active-switch');
                }break;
                default :
                    indexSpan.eq(0).addClass('swiper-active-switch');
            }
        });
        $('.banner-right').css({display:'block'}).mouseover(function(){
            $('.banner-right').css({'background-position':'-10px -65px'});
        }).mouseout(function(){
            $('.banner-right').css({'background-position':'-10px -5px'});
        }).unbind('click').click(function(){
            $('.swiper-active-switch').removeClass('swiper-active-switch');
            switch (state){
                case 0: {
                    changeDiv.animate({left:'-1138px'},'slow');
                    state--;
                    indexSpan.eq(2).addClass('swiper-active-switch');
                }break;
                case -1: {
                    changeDiv.animate({left:'-1708px'},'slow');
                    state--;
                    indexSpan.eq(3).addClass('swiper-active-switch');
                }break;
                case 1: {changeDiv.animate({left:'-569px'},'slow');
                    state--;
                    indexSpan.eq(1).addClass('swiper-active-switch');
                }break;
                default :
                    indexSpan.eq(3).addClass('swiper-active-switch');
            }
        });
    }).mouseout(function(){
        $('.banner-left').css({display:'none'});
        $('.banner-right').css({display:'none'});
    });

    //战略合作，合作院校，媒体报道左右导航点击轮播效果
    $('.strategy').each(function(){
        $('.strategy').mouseover(function(){
            //判断是战略合作区域还是合作院校区域或是媒体报道区域div
            num = ($(this).index()-8)/2;
            var sCont = $('.swiper-container div');
            switch (num){
                case 0:changeDiv = sCont.eq(0);break;                  //战略合作
                case 1:changeDiv = $('.swiper-container1 div');break;  //合作院校
                case 2:changeDiv = sCont.eq(1);break;                  //媒体报道
            }
            $('.banner-left1').eq(num).css({display:'block'}).mouseover(function(){
                $('.banner-left1').eq(num).css({'background-position':'-10px -65px'});
            }).mouseout(function(){
                $('.banner-left1').eq(num).css({'background-position':'-10px -5px'});
            }).unbind('click').click(function(){
                //点击判断div类型并进行相应位移
                if(num == 0){
                    switch (state1){
                        case 0: {changeDiv.animate({left:'-160px'},'slow');state1++;}break;
                        case 1: {changeDiv.animate({left:'0'},'slow');state1++;}break;
                        case -1: {changeDiv.animate({left:'-320px'},'slow');state1++;}break;
                        case -2: {changeDiv.animate({left:'-480px'},'slow');state1++;}break;
                        default :
                    }
                }else if(num == 1){
                    switch (state3){
                        case 0: {changeDiv.animate({left:'-132px'},'slow');state3++;}break;
                        case 1: {changeDiv.animate({left:'0'},'slow');state3++;}break;
                        case -1: {changeDiv.animate({left:'-264px'},'slow');state3++;}break;
                        case -2: {changeDiv.animate({left:'-396px'},'slow');state3++;}break;
                        default :
                    }
                }else if(num == 2){
                    switch (state2){
                        case 0: {changeDiv.animate({left:'-160px'},'slow');state2++;}break;
                        case 1: {changeDiv.animate({left:'0'},'slow');state2++;}break;
                        case -1: {changeDiv.animate({left:'-320px'},'slow');state2++;}break;
                        case -2: {changeDiv.animate({left:'-480px'},'slow');state2++;}break;
                        default :
                    }
                }
            });
            $('.banner-right1').eq(num).css({display:'block'}).mouseover(function(){
                $('.banner-right1').eq(num).css({'background-position':'-10px -65px'});
            }).mouseout(function(){
                $('.banner-right1').eq(num).css({'background-position':'-10px -5px'});
            }).unbind('click').click(function(){
                if(num == 0){
                    switch (state1){
                        case 0: {changeDiv.animate({left:'-480px'},'slow');state1--;}break;
                        case -1: {changeDiv.animate({left:'-640px'},'slow');state1--;}break;
                        case 1: {changeDiv.animate({left:'-320px'},'slow');state1--;}break;
                        case 2: {changeDiv.animate({left:'-160px'},'slow');state1--;}break;
                        default :
                    }
                }else if(num == 1){
                    switch (state3){
                        case 0: {changeDiv.animate({left:'-396px'},'slow');state3--;}break;
                        case -1: {changeDiv.animate({left:'-528px'},'slow');state3--;}break;
                        case 1: {changeDiv.animate({left:'-264px'},'slow');state3--;}break;
                        case 2: {changeDiv.animate({left:'-132px'},'slow');state3--;}break;
                        default :
                    }

                }else if(num == 2){
                    switch (state2){
                        case 0: {changeDiv.animate({left:'-480px'},'slow');state2--;}break;
                        case -1: {changeDiv.animate({left:'-640px'},'slow');state2--;}break;
                        case 1: {changeDiv.animate({left:'-320px'},'slow');state2--;}break;
                        case 2: {changeDiv.animate({left:'-160px'},'slow');state2--;}break;
                        default :
                    }
                }
            });
        }).mouseout(function(){
            $('.banner-left1').eq(num).css({display:'none'});
            $('.banner-right1').eq(num).css({display:'none'});
        });
    });

});