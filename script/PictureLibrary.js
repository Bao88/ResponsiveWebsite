$(document).ready(function(e){
    var img_index = 1;
    var output = "";
    var fileData = "";
    var fileName = "";
   
//    $("#library").sortable();
//    $("#library").disableSelection();

    $("#inputID").change(function(event){
        $("#inputID").submit();
        
        // output = document.getElementById("inputID");
        // output.src = URL.createObjectURL(event.target.files[0]);
        // // console.log(output.src);
        // var reader = new FileReader();
        // reader.readAsDataURL(output.files[0]);

        // reader.onload = function(event){
        //     fileData = event.target.result;
        //     fileName = output.files[0].name;
        // }

        // var img = $("<img />").attr({
        //     "id": "myImage"+img_index,
        //     "src": output.src,
        //     "alt": "picture",
        //     "title": "title",
        //     "width": 250
        // }).appendTo("body");
        // img_index++;
    });
    

    $("#formID").submit(function(e){
        e.preventDefault();
        var fd = new FormData($(this)[0]);
        // console.log(fd.getAll());
        $.ajax({
            url: 'http://172.16.2.98:8080/upload',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                alert("Saved to server");
            },
            error: function(err){
                alert(err);
            }
        });
        this.reset();
    });
});

count = 0;
function fetchImages()
{
    var fd = new FormData();
    fd.append("counter", count);

    $.ajax({
        url: 'http://172.16.2.98:8080/get',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST',
        success: function(data){
            alert(data.data);
            
            count++;
            // alert(count);
        },
        error: function(err){
            alert(err);
        }
    });
}

function dropImage(event)
{
    event.preventDefault();
    // alert("Here");
    // alert(event.dataTransfer.items[0].type);
    // var elementObj = document.getElementById(event.target.id);
    var type = event.dataTransfer.items[0].type;
    if(type == "text/plain"){
        alert("The file already exist");
    } else if(!type.includes("image")) {
        alert("The file is not an image");
    } else {
        var dt = event.dataTransfer;
        var f = dt.items[0].getAsFile();
    
        // alert(dt.files[0]);
        // document.getElementById("inputID").value = f;
        // alert(f);
        // var myForm = document.getElementById("formID");
        var fd = new FormData();
        // var fd = new FormData($(this)[0]);
        fd.append("data", dt.files[0], f.name);
        
        // fd.append("data", f.name);

        $.ajax({
            url: 'http://172.16.2.98:8080/upload',
            data: fd,
            processData: false,
            contentType: false,
            type: 'POST',
            success: function(data){
                alert("Saved to server");
            },
            error: function(err){
                alert(err);
            }
        });
        // alert(f.name);
    }
   
    // if(dt.items){

    // }
}

currentTarget = undefined;
function dragStart(event){
    currentTarget = event.target.id;
}


function allowDrop(event) {
    event.preventDefault();
}

function drop(event){
    event.preventDefault();
    var curObject = document.getElementById(currentTarget);
    if(event.target.id == "trash" || event.target.id == "droppedItems"){
        
        $("#droppedItems").append(curObject);

    } else {
        
        $("#library").append(curObject);
    }
    currentTarget = null;
}

function inputClick()
{
    $("#inputID").click();
}
// function saveImageOnServer(event) {
//     event.preventDefault();
//     var currentFiles = document.getElementById("fileIDs").files;
//     // If there are files
// //    alert(currentFiles.length);
//     if(currentFiles.length > 0){
//         var file = currentFiles[0];
//         var fData = new FormData();
//         fData.append("data", file);

//         // var request = new X

//         $.ajax({
//             url: "http://172.16.2.98:3000",
//             type: "POST",
//             data: fData,
//             processData: false,
//             contentType: false,
//             cache: false,
//             success: function(data){
//                 alert(data);
//                 //  $("#library").html(data);
                
//             }
//         });
//         // $("#library").append("<p>" + " Hello people " + "</p>");
//         // var FileLoad = currentFiles[0];
//         // var reader =  new FileReader();
        
//         // reader.readAsDataURL(FileLoad);
//         // $("#library").append("<p>" + " Hello people " + "</p>");
//         // reader.onload = function(event)
//         // {
//         //     content = event.target.result;
//         //     // alert(content);
//         //     $.post("http://172.16.2.98:3000", {
//         //         function: "saveImage", 
//         //         data: content, 
//         //         name: FileLoad.name
//         //     });
//         //     return false;
            
        
        
       
//         // alert(reader.result);
//         //  window.stop();
//         //  window.stop();
        
//     }
//     // window.stop();
// }
// function saveImage(file) {
//     $("#library").append("<p>" + " Hello people " + "</p>");
//     var reader = new FileReader();
//     reader.readAsDataURL(file);

//     reader.onload = function(event) {
//         var fileData = event.target.result;
//         var fileName = $("#fileIDs")[0].files[0].name;
//         $.post("http://172.16.2.98:3000", {
//             function: "saveImage",
//             data: fileData,
//             name: fileName
//         }, function(result){
//             // alert("Hello");
            
//             // alert(result);
//         });
//     }

//     // alert(window.currentTarget);
// }

// $(document).ready(function (e) {
//     $("#uploadimage").on('submit',(function(e) {
//     e.preventDefault();
//     $("#message").empty();
//     $('#loading').show();
//     $.ajax({
//     url: "http://172.16.2.98:3000", // Url to which the request is send
//     type: "POST",             // Type of request to be send, called as method
//     data: new FormData(this), // Data sent to server, a set of key/value pairs (i.e. form fields and values)
//     contentType: false,       // The content type used when sending data to the server.
//     cache: false,             // To unable request pages to be cached
//     processData:false,        // To send DOMDocument or non processed data file it is set to false
//     success: function(data)   // A function to be called if request succeeds
//     {
//     $('#loading').hide();
//     $("#message").html(data);
//     }
//     });
//     }));
    
//     // Function to preview image after validation
//     $(function() {
//     $("#file").change(function() {
//     $("#message").empty(); // To remove the previous error message
//     var file = this.files[0];
//     var imagefile = file.type;
//     var match= ["image/jpeg","image/png","image/jpg"];
//     if(!((imagefile==match[0]) || (imagefile==match[1]) || (imagefile==match[2])))
//     {
//     $('#previewing').attr('src','noimage.png');
//     $("#message").html("<p id='error'>Please Select A valid Image File</p>"+"<h4>Note</h4>"+"<span id='error_message'>Only jpeg, jpg and png Images type allowed</span>");
//     return false;
//     }
//     else
//     {
//     var reader = new FileReader();
//     reader.onload = imageIsLoaded;
//     reader.readAsDataURL(this.files[0]);
//     }
//     });
//     });
//     function imageIsLoaded(e) {
//     $("#file").css("color","green");
//     $('#image_preview').css("display", "block");
//     $('#previewing').attr('src', e.target.result);
//     $('#previewing').attr('width', '250px');
//     $('#previewing').attr('height', '230px');
//     };
//     });