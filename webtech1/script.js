

$(document).ready(function () {
    counter=0;
    $("#indeximage").click(function () {
        $(this).animate({ height: "240px", width: "240px" });
    });
    $("#indeximage").dblclick(function () {
        $(this).animate({ height: "480px", width: "480px" });
    });

    $("#pictureHide").click(function(){
        
        if(counter%2==0){
        $("#indeximage").hide();
        }else{
            $("#indeximage").show();
        }
        counter++;
    });

    $("#calculate").click(function () {
        
        var personWeight=$("#personWeight").val();
        var personHeight=$("#personHeight").val()/100;
        var clr = document.getElementById("colorpicker").value;
        var bmi = personWeight / (personHeight*personHeight);
        document.getElementById("bmi").style.color=clr;
        $("#personWeight").css('border','1px solid #ccc');
        $("#personHeight").css('border','1px solid #ccc');
        if(personWeight==""){
            alert("Add meg a testsúlyt!");
            $("#personWeight").css('border','2px solid #ff0000');
            return;
        }
        if(personHeight==""){
            alert("Add meg a magasságot!");
            $("#personHeight").css('border','2px solid #ff0000');
            return;
        }
        if(document.getElementById('gender_male').checked == false && document.getElementById('gender_female').checked == false) {
            alert("Válaszd ki a nemet!");
            return;
          }
          document.getElementById("bmi").innerHTML = bmi.toFixed(2);
          document.getElementById("bmi").style.color = clr;
              
       
    });

    
   
});