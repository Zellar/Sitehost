window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_contact, .menu_btn'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})

// Modal

$('[data-modal=subscribe]').on('click', function() {
    $('.overlay, #subscribe').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #subscribe').fadeOut('slow');
});

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function(){
        $(this).find("imput").val("");

        $('form').trigger('reset');
    });
    return false;
});