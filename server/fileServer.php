<!-- <?php
    header("Access-Control-Allow-Origin: *");
    // php.exe -S 172.16.2.98:3000 ..\..\MyStuff\ResponsiveWebSite\server\fileServer.php
    
    // One file at a time
    // echo "Hello " . $_FILES['data']["name"] . "!";

    $name = $_FILES['data']["name"];
    //  Creating server file
    $serverFile = "uploads/".$name;
    copy($_FILES['data']['tmp_name'], $serverFile);
    // if(move_uploaded_file($_FILES['data']['tmp_name'], $serverFile)){
        $source = imagecreatefromjpeg($serverFile);
        list($width, $height) = getimagesize($serverFile);
        
        $newwidth = $width/5;
        $newheight = $height/5;
        
        $destination = imagecreatetruecolor($newwidth, $newheight);
        imagecopyresampled($destination, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
    
        imagejpeg($destination, "thumbnails/".$name, 100);
        // echo "<br/><b>File Name:</b> " . $_FILES["file"]["name"] . "<br>";
        // echo "The file ". basename( $_FILES['data']['name']). " has been uploaded.";

        // $fileName = $_FILES['data']['name'];
        // $fileType = $_FILES['data']['type'];
        // $fileContent = file_get_contents($_FILES['data']['tmp_name']);
        // $dataUrl = 'data:' . $fileType . ';base64,' . base64_encode($fileContent);
        // $json = json_encode(array(
        //     'name' => $fileName,
        //     'type' => $fileType,
        //     'dataUrl' => $dataUrl
        //     ));
        // echo $json;
    // }
   
            // Make a thumbnail, doesnt care how small the image is
           
           
            // echo base64_encode(file_get_contents("thumbnails/".$name));
		


    // ------------------------------POST old version, problem refreshes page---------------
    // $function = $_POST['function'];
    
    // // This is probably the string we are sending back
    // $log = array();
    // echo getcwd();
    // switch($function) {
		
	// 	// Server stuff
	// 	case('saveImage'):
    //         $log['name'] = $_POST['name'];
    //         $data = $_POST['data'];
    //         $name = $_POST['name'];

    //         // Creating server file
    //         $serverFile = "uploads/".$name;
    //         $fp = fopen($serverFile, 'x+');
    //         if($fp == false){
    //             // $log['text']."It already exist or something went wrong";
    //             // $txt =  "It already exist or something went wrong";
    //         } else {
    //             $decodedData = file_get_contents($data);
    //             fwrite($fp, $decodedData);
                
    //             // make a thumbnail
    //             // $log['text']."Success";
    //         }
            
    //         fclose($fp);

    //         // Make a thumbnail, doesnt care how small the image is
    //         $source = imagecreatefromjpeg($serverFile);
    //         list($width, $height) = getimagesize($serverFile);
            
    //         $newwidth = $width/5;
    //         $newheight = $height/5;
            
    //         $destination = imagecreatetruecolor($newwidth, $newheight);
    //         imagecopyresampled($destination, $source, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
        
    //         imagejpeg($destination, "thumbnails/".$name, 100);

    //         header("location: PictureLibrary.html");
    //         echo "peek a boo";
    //         // echo base64_encode(file_get_contents("thumbnails/".$name));
	// 		break;



	// 		// ----------------------------------------------------------Chat-----------------------------------------------------
	// 	// Chat
    // 	//  case('getState'):
    //     // 	 if(file_exists('chat.txt')){
    //     //        $lines = file('chat.txt');
    //     // 	 }
    //     //      $log['state'] = count($lines); 
    //     // 	 break;	
    	
    // 	//  case('update'):
    //     // 	$state = $_POST['state'];
    //     // 	if(file_exists('chat.txt')){
    //     // 	   $lines = file('chat.txt');
    //     // 	 }
    //     // 	 $count =  count($lines);
    //     // 	 if($state == $count){
    //     // 		 $log['state'] = $state;
    //     // 		 $log['text'] = false;
        		 
    //     // 		 }
    //     // 		 else{
    //     // 			 $text= array();
    //     // 			 $log['state'] = $state + count($lines) - $state;
    //     // 			 foreach ($lines as $line_num => $line)
    //     //                {
    //     // 				   if($line_num >= $state){
    //     //                  $text[] =  $line = str_replace("\n", "", $line);
    //     // 				   }
         
    //     //                 }
    //     // 			 $log['text'] = $text; 
    //     // 		 }
        	  
    //     //      break;
    	 
    // 	//  case('send'):
	// 	//   $nickname = htmlentities(strip_tags($_POST['nickname']));
	// 	// 	 $reg_exUrl = "/(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/";
	// 	// 	  $message = htmlentities(strip_tags($_POST['message']));
	// 	//  if(($message) != "\n"){
        	
	// 	// 	 if(preg_match($reg_exUrl, $message, $url)) {
    //    	// 		$message = preg_replace($reg_exUrl, '<a href="'.$url[0].'" target="_blank">'.$url[0].'</a>', $message);
	// 	// 		} 
			 
        	
    //     // 	 fwrite(fopen('chat.txt', 'a'), "<span>". $nickname . "</span>" . $message = str_replace("\n", " ", $message) . "\n"); 
	// 	//  }
    //     // 	 break;
    	
    // }
    
    // echo $txt;
    // echo json_encode($log);
?> -->

