$(document).ready(function(){
    $(".n2").click(function(){
        $("#bg1").animate({opacity:"0"}); 
        $("#bg2").animate({opacity:"1",top:"52.5%"},500); 
        $("#bg2").animate({left:"55%"},5000);
        
        $(".n2").css("background-color","white");
        $(".n1").css("background-color","transparent");
        
        $(".n2 span").css("display","block");
        $(".n1 span").css("display","none");
    });
    
    $(".n3").click(function(){
        $("#bg2").animate({opacity:"0"}); 
        $("#bg3").animate({opacity:"1",top:"52.5%"},500); 
        $("#bg3").animate({left:"55%"},5000);
        
        $(".n3").css("background-color","white");
        $(".n2").css("background-color","transparent");
        
        $(".n3 span").css("display","block");
        $(".n2 span").css("display","none");
    });
    
    $(".n4").click(function(){
        $("#bg3").animate({opacity:"0"}); 
        $("#bg4").animate({opacity:"1",top:"52.5%"},500); 
        $("#bg4").animate({left:"55%"},5000);
        
        $(".n4").css("background-color","white");
        $(".n3").css("background-color","transparent");
        
        $(".n4 span").css("display","block");
        $(".n3 span").css("display","none");
    });
});









