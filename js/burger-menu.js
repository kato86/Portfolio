$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

$('.a-burger').click(function() {
    $('#toggle').toggleClass('active');
    $('#overlay').toggleClass('open');

})
