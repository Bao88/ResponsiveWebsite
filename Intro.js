

$(function() {
    $("#navWheel").draggable();
});

function getBody() {
        $("#main").load("test.html #article", function(){
//             alert("Kidnapping complete");
        });
}

function getLibrary(){
    $("#main").load("PictureLibrary.html", function(){
    });
}

function getStory() {
    $("#main").load("StoryMode.html #story", function(){
    });
    // alert("implement stuff");
}

function getChat(){
        // var ifrm = document.createElement("iframe");
        // ifrm.setAttribute("src", "http://127.0.0.1:10000/Chat/index.php");
        // ifrm.style.width = "100%";
        // ifrm.style.height = "100%";
        // document.getElementById("main").appendChild(ifrm);
        // $.getScript("/Chat/chat.js");
        $("#main").load("chat.html", function(){
            
            //  $("#load").click();
            // checkData();
            // $("#main").css({"animation": "enterButton 2s forwards"});
//             alert("Kidnapping complete");
        });
        
//     alert("implement chat");
}

function getRegister() {
         $("#main").load("register.html", function(){
            //  $("#load").click();
            checkData();
            // $("#main").css({"animation": "enterButton 2s forwards"});
//             alert("Kidnapping complete");
        });
}

function intro(){
    
   
    $("video").stop().fadeOut(5000, function(){
         $("video").remove();
         $("#introButton").remove();
         $("#introTexts").stop().remove();
        
         var ui = $("#UserInterface");
//           $("p").css({"background-color": "yellow", "font-size": "200%"});
         ui.css({"animation": "enterButton 5s forwards"});
    });
    
    
//    $("#introButton").fadeOut(5000, function()
//                            {
//                                alert("Done I guess");
//                            });
//    var shield = $("#introButton");
//    shield.style.animationName = "fadeout";
//    shield.style.animationDuration = "5s";
    
    
//    alert("Doesnt Stop");
}

