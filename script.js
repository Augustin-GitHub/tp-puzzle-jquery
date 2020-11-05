$('.item').click(function () {
    var CurrentX = $(this).css('left')
    var CurrentY = $(this).css('top')

    var emptyY = $('vide').css('left')
    var emptyY = $('vide').css('top')

    $(this).css({top: emptyY, left: emptyX});
    $('vide').css({top: CurrentY, left: currentX});
});