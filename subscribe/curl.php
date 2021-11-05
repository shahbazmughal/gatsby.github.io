<?php 

$t=time();
$time = (date("Y-m-d",$t));
$ip_address = file_get_contents("https://ipapi.co/ip/");
$user_ip = $ip_address;

try { 

	$email = $_POST["email"];
	$fullname = $_POST["fullname"];
	$api_token	=	'PKwMUONp73ImcovydHsAVhPdWazcPOc7OfTW2N5TYaX5g0uLeie023CoxZ6A'; // Mumara API Key (can be found in Settings -> API Key)
	$domain		=	'http://mumara.shahbaz.dev.hostingshouse.com/'; // Your Mumara Domain Name
	// API Endpoint
	$endpoint	=	'/api/addContact';
	//Parameters
	$params = [
	    'list_id'           =>  '107',
	    'email'             =>  $email,
	    'fullname'        =>  $fullname,
	    //'Query time'           => $time,
	    //'Subscriber IP'         =>  $user_ip,
	    'is_confirmed'      =>  '1',
	    'is_active'         =>  '1',
	    'is_unsubscribed'   =>  '0',
	    'response'          =>  '1',
	];
	// Defining cURL Request
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL,$domain.$endpoint);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
	curl_setopt($ch, CURLOPT_HTTPHEADER,
	    array('Content-Type: application/json', 'Authorization: Bearer ' . $api_token));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	// Executing cURL
	$output = curl_exec ($ch);
	// Printing Output
	echo json_encode(json_decode($output),JSON_PRETTY_PRINT );
	// Closing cURL
	curl_close ($ch);

} catch(\Exception $e) { 
	echo $e->getMessage();
}

