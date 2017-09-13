$(document).ready(function(){

$('a').click(function(e) {
    e.preventDefault();  //stop the browser from following
    window.location.href = 'uploads/file.doc';
});

});
