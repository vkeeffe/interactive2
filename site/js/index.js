window.onload = function () {
    "use strict";
    var paths = document.getElementsByTagName('path');
    var visualizer = document.getElementById('visualizer');
    var mask = visualizer.getElementById('mask');
    var h = document.getElementsByTagName('h1')[0];
    var path;
    var report = 0;







    $( "#one" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#luke-name").delay(3000).fadeTo("slow", 1);
      $("#luke-info").delay(10000).fadeTo("slow", 1);
      $('#backbutton').delay(10000).fadeTo("slow", 0.9);
    });

    $( "#two" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#winderen-name").delay(3000).fadeTo("slow", 1);
      $("#winderen-info").delay(10000).fadeTo("slow", 1);
      $('#backbutton').delay(10000).fadeTo("slow", 1);
    });

    $( "#three" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#fusinato-name").delay(3000).fadeTo("slow", 1);
      $("#fusinato-info").delay(5000).fadeTo("slow", 1);
      $('#backbutton').delay(4000).fadeTo("slow", 1);
    });

    $( "#four" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#norment-name").delay(4000).fadeTo("slow", 1);
      $("#norment-info").delay(10000).fadeTo("slow", 1);
      $('#backbutton').delay(10000).fadeTo("slow", 1);
    });

    $( "#five" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#kim-name").delay(4000).fadeTo("slow", 1);
      $("#kim-info").delay(10000).fadeTo("slow", 1);
      $('#backbutton').delay(10000).fadeTo("slow", 1);
    });

    $( "#six" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#jacob-name").delay(4000).fadeTo("slow", 1);
      $("#jacob-info").delay(10000).fadeTo("slow", 1);
      $('#backbutton').delay(10000).fadeTo("slow", 1);
    });

    $( "#seven" ).click(function() {
      $( "#mass" ).fadeTo( "slow", 0);
      $("#mirza-name").delay(2000).fadeTo("slow", 1);
      $("#mirza-info").delay(4000).fadeTo("slow", 1);
      $('#backbutton').delay(4000).fadeTo("slow", 1);
    });

    $( "#backbutton" ).click(function() {
        setTimeout( function(){
          $('.artist-info').css('display', 'none');
        },2000);

      $("#luke-info").fadeTo("slow", 0);
      $("#winderen-info").fadeTo("slow", 0);
      $("#fusinato-info").fadeTo("slow", 0);
      $("#norment-info").fadeTo("slow", 0);
      $("#kim-info").fadeTo("slow", 0);
      $("#jacob-info").fadeTo("slow", 0);
      $("#mirza-info").fadeTo("slow", 0);
      $("#backbutton").fadeTo("slow", 0);

      $("#luke-name").fadeTo("slow", 0);
      $("#winderen-name").fadeTo("slow", 0);
      $("#fusinato-name").fadeTo("slow", 0);
      $("#norment-name").fadeTo("slow", 0);
      $("#kim-name").fadeTo("slow", 0);
      $("#jacob-name").fadeTo("slow", 0);
      $("#mirza-name").fadeTo("slow", 0);

      $("#mass").delay(2000).fadeTo(2500, 1);

});





    $(document).on('mousemove', function(e){
      $('#cursor').css({
        left:  e.pageX,
        top:   e.pageY
      });
    });


    $("#artist-scroll").niceScroll({
      cursorwidth:"4.5px",
      cursorborderradius:0,
      cursoropacitymin:1,
      smoothscroll: true,
      cursorfixedheight: 30,
      cursorcolor: "#191919",
    });

    var soundAllowed = function (stream) {
      $(function() {
          $('body').removeClass('fade-out');
      });
        window.persistAudioStream = stream;
        h.innerHTML = "   ";
        h.setAttribute('style', 'opacity: 0;');
        var audioContent = new AudioContext();
        var audioStream = audioContent.createMediaStreamSource( stream );
        var analyser = audioContent.createAnalyser();
        audioStream.connect(analyser);
        analyser.fftSize = 1024;

        var frequencyArray = new Uint8Array(analyser.frequencyBinCount);
        visualizer.setAttribute('viewBox', '0 0 255 255');

        for (var i = 0 ; i < 250; i++) {
            path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('stroke-dasharray', 'none');
            mask.appendChild(path);
        }
        var doDraw = function () {
            requestAnimationFrame(doDraw);
            analyser.getByteFrequencyData(frequencyArray);
          	var adjustedLength;
            for (var i = 0 ; i < 255; i++) {
              	adjustedLength = Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
                paths[i].setAttribute('d', 'M '+ (i) +',255 l 0,-' + adjustedLength);
            }

        }
        doDraw();
    }

    var soundNotAllowed = function (error) {
        h.innerHTML = "please allow your microphone";
        console.log(error);
    }


    navigator.getUserMedia({audio:true}, soundAllowed, soundNotAllowed);

};





var nice = $(".artist-info").getNiceScroll();
$(document).ready(function() {$(".artist-info").niceScroll({
  cursorcolor: "#191919",
  cursoropacitymin: 0,
  cursoropacityma,
  cursorwidth: "5px",
  zindex: "auto" | 20,
  scrollspeed: 35,
  mousescrollstep: 20,
  emulatetouch: true,
  boxzoom: true,
  dblclickzoom: false,
  gesturezoom: false,
  autohidemode: true | "scroll",
  iframeautoresize: true,
  spacebarenabled: true,
  enablemousewheel: true,
  enablekeyboard: true,
  smoothscroll: true,
  sensitiverail: false

});
});
