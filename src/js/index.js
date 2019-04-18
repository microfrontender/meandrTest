/* Code by Kalinovsky.
    Find me here
    mail - kalinovsky.job@gmail.com
    tg - @AlexKalinovsky 
    */

import "jquery";
import 'reset-css';
import '../sass/index.sass';

$('.header__btn ').click(function (e){
    e.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});


function resetError(x){
    x.removeAttr('style');
}
$('.form__btn').click(function(e) {
    
    $('.form__input').each(function(){
        if(!$(this).val()){
            e.preventDefault();
            $(this).css({
                'border-bottom': '1px solid red',
                'background': 'rgba(255, 0, 0, 0.18)',
            });
            
        }
    });
});
$('.form__input').keydown(function(){
    resetError($(this));
});