 $(document).ready(function() {

      //hide the dog catcher by default on page start
      $(".dogCatcher").hide();

      var hideStatus = false;

 
        //SHOW AND HIDE EVENTS
        $(".alejandroBark").on("click", function() {


          // if true
          if(hideStatus == false){
              console.log("HIDE!!!! DOG CATCHER IS COMING..");
              $(".2").hide();
              $(".3").hide();
              $(".4").hide();
              $(".5").hide();
              $(".6").hide();
              $(".7").hide();
              $(".8").hide();
              $(".9").hide();
              $(".dogCatcher").show();

              hideStatus = true;
          } 
          else{
             console.log("I escaped!! COAST IS CLEAR!! EVERYONE CAN COME BACK OUT.");
              $(".2").show();
              $(".3").show();
              $(".4").show();
              $(".5").show();
              $(".6").show();
              $(".7").show();
              $(".8").show();
              $(".9").show();
              $(".dogCatcher").hide();
              hideStatus = false;
          }


      });
});