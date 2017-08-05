let $navitem=$('.nav-item');
console.log($navitem);

$navitem.on('click',e=>{
    $('this').addClass('active');
    console.log($(e));
})