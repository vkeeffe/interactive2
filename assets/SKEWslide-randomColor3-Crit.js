$(document).ready(function(){


  var array1 =
        ["red",
        "white",
        "black"];
  var array2 =
        ["orange",
        "green",
        "pearl",]
  var array3 =
        ["purple",
        "light",
        "dark",]

        var classes =
              ["red",
              "orange",
              "pruple",]
        var random = [Math.floor(Math.random() * classes.length)]

          $(".btn1").addClass(classes[random]);



      $(".btn1").each(function(){
      if ($(".btn1").hasClass("red")) {

        $(".btn").each(function(){
            $(this).addClass(array1[~~(Math.random()*array1.length)]);
            $('.container').css(
              "background-image", "linear-gradient(to top, #383838 0%, #383838 30%, #B48B7D 40%, #B48B7D 70%, #D6D9CE 80%, #D6D9CE 100%");
        })
      }
        else if ($(".btn1").hasClass("orange")) {

          $(".btn").each(function(){
              $(this).addClass(array2[~~(Math.random()*array2.length)]);
              $('.container').css(
                "background-image", "linear-gradient(to top, #e4e6c3 0%, #e4e6c3 30%, #1ea896 40%, #1ea896 70%, #FF715B 80%, #FF715B 100%)");
          })
        }
        else  {

          $(".btn").each(function(){
              $(this).addClass(array3[~~(Math.random()*array3.length)]);
              $('.container').css(
                "background-image", "linear-gradient(to top, #c4b7cb 0%, #c4b7cb 30%, #383838 40%, #383838 70%, #e5e5e5 80%, #e5e5e5 100%");
              });
      }
});



        $(".btn").on({
          mouseenter: function() {

            var classes = ['slideside-faster', 'slideup-faster', 'slideside', 'slideup', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'];
            var randomnumber = Math.floor(Math.random() * classes.length);

            $(this).addClass(classes[randomnumber]);
          },
            });



            $(document).on("keydown", function(e){
              var code = e.keyCode;
              if(code == 87){
                $(".btn").animate({
                "width": "+=5px", "height": "+=5px"},1000)
              }
              if(code == 83)
                $(".btn").animate({
                  "width": "-=5px", "height": "-=5px"},1000)
              if(code == 32)
                  location.reload();
                });










            });
