$(document).ready(function() {
    $("#btn").click(function(){
        var dep=$("#p1").val();
        var nm=$("#t1").val();
        var em=$("#t2").val();
        var dt=$("#t3").val();
        var qual=$("#t4").val();
        var spc=$("#t5").val();
        var yop=$("#t6").val();
        var exp=$("#t7").val();
        var mob=$("#t8").val();
        
        var cv=$("#t9").val();

         if(dep == "")
         {
            $(".deperror").html("Please fill your name");
            $(".deperror").css("color","red");
            return false;
         }
         if(nm == "")
         {
            $(".usererror").html("Please fill your name");
            $(".usererror").css("color","red");
            return false;
         }
         if(em == "")
         {
            $(".emerror").html("Please fill your email id");
            $(".emerror").css("color","red");
            return false;
         }
         
         if(dt == "")
         {
            $(".dterror").html("Please fill this date");
            $(".dterror").css("color","red");
            return false;
         }

         if(qual == "")
         {
            $(".qualerror").html("Please fill Your Qualifications");
            $(".qualerror").css("color","red");
            return false;
         }

         if(spc == "")
         {
            $(".spcerror").html("Please fill your specialisation");
            $(".spcerror").css("color","red");
            return false;
         }

         if(yop == "")
         {
            $(".yoperror").html("Please fill this detail");
            $(".yoperror").css("color","red");
            return false;
         }
         if(exp == "")
         {
            $(".experror").html("Please fill this detail");
            $(".experror").css("color","red");
            return false;
         }
         if(mob == "")
         {
            $(".moberror").html("Please fill this detail");
            $(".moberror").css("color","red");
            return false;
         }
         if(cv == "")
         {
            $(".cverror").html("Please attach your cv here");
            $(".cvrerror").css("color","red");
            return false;
         }

         
    });        
});