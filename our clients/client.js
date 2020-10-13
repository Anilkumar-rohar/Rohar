//<Map  JS
  $(document).ready(function() {

            var inter = setInterval(function() {
                var x = Math.floor(Math.random() * 12) + 1;
                $("div").removeClass("animate");
                $(".mapsmall-circle" + x).addClass("animate");
            }, 2000);
            // var divs = document.querySelector(".small-circle1");
            $(".points").hover(function(event) {
                clearInterval(inter);
                $("div").removeClass("animate");
                $(this).addClass("animate");
            });

        });
        $(document).ready(function() {
            $(".mapsmall-circle2").hover(function() {
                $("#box1").show();
            }, function() {
                $("#box1").hide();
            });
            $(".mapsmall-circle7").hover(function() {
                $("#box7").show();
            }, function() {
                $("#box7").hide();
            });
            $(".mapsmall-circle9").hover(function() {
                $("#box9").show();
            }, function() {
                $("#box9").hide();
            });
        });