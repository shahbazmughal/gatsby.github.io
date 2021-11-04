<?php 

error_reporting(0);
include("../../inc/functions.php");
include '../../inc/ar.php';
$ccod = "+" . $ccod;


$t=time();
$time = (date("Y-m-d H:i:s ",$t));
$ip_address = file_get_contents("https://ipapi.co/ip/");
$user_ip = $ip_address;

//print_r($_POST); exit;

$pagecontents = file_get_contents("mail.html");
$pagecontents = str_replace("%%firstname%%" , $_POST["firstname"] , $pagecontents);
$pagecontents = str_replace("%%lastname%%" , $_POST["lastname"] , $pagecontents);
$pagecontents = str_replace("%%email%%" , $_POST["email"] , $pagecontents);
$pagecontents = str_replace("%%company%%" , $_POST["company"] , $pagecontents);
$pagecontents = str_replace("%%phoneno%%" , $_POST["phoneno"] , $pagecontents);
$pagecontents = str_replace("%%skype%%" , $_POST["skype"] , $pagecontents);
$pagecontents = str_replace("%%website%%" , $_POST["website"] , $pagecontents);
$pagecontents = str_replace("%%country%%" , $_POST["country"] , $pagecontents);
$pagecontents = str_replace("%%emailsquota%%" , $_POST["emailsquota"] , $pagecontents);
$pagecontents = str_replace("%%emailservers%%" , $_POST["emailservers"] , $pagecontents);
$pagecontents = str_replace("%%newsletter%%" , $_POST["newsletter"] , $pagecontents);
$pagecontents = str_replace("%%message%%" , $_POST["message"] , $pagecontents);

$pagecontents = str_replace("%%refer_url%%" , $refer_url , $pagecontents);
$pagecontents = str_replace("%%date_time%%" , $time , $pagecontents);
$pagecontents = str_replace("%%user_ip%%" , $user_ip , $pagecontents);
$pagecontents = str_replace("%%user_zip_post%%" , $user_zip , $pagecontents);
$pagecontents = str_replace("%%user_region_post%%" , $user_region , $pagecontents);
$pagecontents = str_replace("%%user_city_post%%" , $user_city , $pagecontents);
$pagecontents = str_replace("%%user_country_post%%" , $user_country , $pagecontents);
$pagecontents = str_replace("%%country_code%%" , $ccod , $pagecontents);
$pagecontents = str_replace("%%user_location_post%%" , $user_location , $pagecontents);
$pagecontents = str_replace("%%user_ip_post%%" , $user_ip , $pagecontents);
$pagecontents = str_replace("%%user_org_post%%" , $user_org , $pagecontents);
$pagecontents = str_replace("%%browser_post%%" , $browser , $pagecontents);
$pagecontents = str_replace("%%country_code%%" , $_POST["ccood"] , $pagecontents);
$pagecontents = str_replace("%%os_post%%" , $os , $pagecontents);
$pagecontents = str_replace("%%s1_post%%" , $s1 , $pagecontents);
$pagecontents = str_replace("%%s2_post%%" , $s2 , $pagecontents);
$pagecontents = str_replace("%%s3_post%%" , $s3 , $pagecontents);
$pagecontents = str_replace("%%source%%" , $source , $pagecontents);
$pagecontents = str_replace("%%campaign_id%%" , $campaign_id , $pagecontents);
$pagecontents = str_replace("%%adset_id%%" , $adset_id , $pagecontents);
$pagecontents = str_replace("%%insert_data%%" , $_POST["insert_data"] , $pagecontents);


//echo $pagecontents; exit;


$post = $_POST;

    $data = [
        'personalizations' => [[
            'to' => [
                [
                    'email' => "shahbazhh01@gmail.com",
                    'name' => "Mumara"
                ]
            ],
            'send_at' => $time,
            'subject' => "Mumara Campaigns+ Request Demo"
        ]
        ],
        'content' => [
            [
                'type' => 'text/plain',
                'value' => ""
            ],[
                'type' => 'text/html',
                'value' => $pagecontents
            ]
        ],
        'from' => [
            'email' => "sales@hostingshouse.com",
            'name' => $_POST['firstname'] . " " . $_POST['lastname']
        ],
        'reply_to' => [
            "email" => $_POST["email"]
        ],
        'api_token' => "V2FzaWZBaG1hZC05OC0zLXBvb2wtMjAzOC1TTVRQLTE2MzQxMTIwODktMTAx-616692598a2c81634112089-98"
    ];

    //print_r($data);
    


$email = $_POST["email"];
$api_token  = 'Nubao6FYBHGh1cpf4at2QHqMswtSmINKacTFd4P7qamXXwaS6m20LSPVbYy7';
$domain     =   'https://campaigns.shahbaz.dev.jt.hostingshouse.com/'; // Your Mumara Domain Name
// API Endpoint
$endpoint   =   '/api/addContact'; 
$list_id    =   22;

try { 

    $params = [
        'list_id'           =>  $list_id,
    	'api_token'		    =>  $api_token,
    	//'all'				=>  json_encode($_POST),
        'email'             =>  isset($_POST['email']) ? $_POST["email"] : "",
        'first_name'        =>  isset($_POST["firstname"]) ? $_POST["firstname"] : "",
        'last_name'         =>  isset($_POST["lastname"]) ? $_POST["lastname"] : "",
        'full_name'         =>  isset($_POST['fullname']) ? $_POST["fullname"] : "",
        'phone'             =>  isset($_POST['phoneno']) ? $_POST['phoneno'] : "",
        'subject'           =>  isset($_POST['subject']) ? $_POST['subject'] : "",
        'company'           =>  isset($_POST["company"]) ? $_POST["company"] : "",
        'country'           =>  isset($_POST["country"]) ? $_POST["country"] : "",
        'phone'             =>  isset($_POST["phone"]) ? $_POST["phone"] : "",
        'skype'             =>  isset($_POST["skype"]) ? $_POST["skype"] : "",
        'website'           =>  isset($_POST["website"]) ? $_POST["website"] : "",
        'edition'           =>  isset($_POST["edition"]) ? $_POST["edition"] : "",
        'emailsquota'       =>  isset($_POST["emailsquota"]) ? $_POST["emailsquota"] : "",
        'emailservers'      =>  isset($_POST["emailservers"]) ? $_POST["emailservers"] : "",
        'newsletter'        => isset($_POST["newsletter"]) ? json_encode($_POST["newsletter"]) : "",
        'message'           =>  isset($_POST["message"]) ? $_POST["message"] : "",
        'list_id'           =>  $list_id,
        'is_confirmed'      =>  '1',
        'is_active'         =>  '1',
        'is_unsubscribed'   =>  '0',
        'response'          =>  '1'
    ];
    //Parameters
    // $param = [
    //     'list_id'   =>  $list_id,
    //     'email'     =>  $email,
    //     'full_name'  =>  $_POST['fullname'],
    //     'message' => json_encode($params),
    //     'subject' => $_POST['subject'],
    //     'phoneno' => $_POST['phoneno']
    // ];

   

    // Defining cURL Request
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$domain.$endpoint);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($params));
    curl_setopt($ch, CURLOPT_HTTPHEADER,
        array('Content-Type: application/json', 'Authorization: Bearer ' . $api_token));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    // Executing cURL
    $output = curl_exec ($ch);
    // Printing Output
    $result = json_decode($output , true);

    
    // Closing cURL
    curl_close ($ch);
 try { 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://api.mumara.com/sendMail');
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER,
        array('Content-Type: application/json'));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $output = curl_exec($ch);
    if (curl_error($ch))
        $error = curl_error($ch);
    curl_close($ch);
    if (isset($error)) {
        $this->updateLog($error, $schedule_log, $smtp);
        return ['status' => 0, 'text' => 'Curl Error: ' . $error];
    }
    $response = json_decode($output, true);
    echo json_encode(['status' => 1, 'text' => $result["result"]]);
 } catch(\Exception $e) { 
    echo json_encode(['status' => 0, 'text' => $result["result"]]);
 }
       

   

} catch(\Exception $e) { 
    echo $e->getMessage();
}

