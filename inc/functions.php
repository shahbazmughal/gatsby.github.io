<?php

function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}


function get_data($url,$timeout=0) 
{
    $ch = curl_init();
    $timeout = $timeout;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    $data = curl_exec($ch);
    curl_close($ch);
    return $data;
}


function getBrowser() 
{ 
    $u_agent = $_SERVER['HTTP_USER_AGENT']; 
    $bname = 'Unknown';
    $platform = 'Unknown';
    $version= "";

    //First get the platform?
    if (preg_match('/linux/i', $u_agent)) {
        $platform = 'linux';
    }
    elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
        $platform = 'mac';
    }
    elseif (preg_match('/windows|win32/i', $u_agent)) {
        $platform = 'windows';
    }
    
    // Next get the name of the useragent yes seperately and for good reason
    if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent)) 
    { 
        $bname = 'Internet Explorer'; 
        $ub = "MSIE"; 
    } 
    elseif(preg_match('/Firefox/i',$u_agent)) 
    { 
        $bname = 'Mozilla Firefox'; 
        $ub = "Firefox"; 
    } 
    elseif(preg_match('/Chrome/i',$u_agent)) 
    { 
        $bname = 'Google Chrome'; 
        $ub = "Chrome"; 
    } 
    elseif(preg_match('/Safari/i',$u_agent)) 
    { 
        $bname = 'Apple Safari'; 
        $ub = "Safari"; 
    } 
    elseif(preg_match('/Opera/i',$u_agent)) 
    { 
        $bname = 'Opera'; 
        $ub = "Opera"; 
    } 
    elseif(preg_match('/Netscape/i',$u_agent)) 
    { 
        $bname = 'Netscape'; 
        $ub = "Netscape"; 
    } 
    
    // finally get the correct version number
    $known = array('Version', $ub, 'other');
    $pattern = '#(?<browser>' . join('|', $known) .
    ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
    if (!preg_match_all($pattern, $u_agent, $matches)) {
        // we have no matching number just continue
    }
    
    // see how many we have
    $i = count($matches['browser']);
    if ($i != 1) {
        //we will have two since we are not using 'other' argument yet
        //see if version is before or after the name
        if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
            $version= $matches['version'][0];
        }
        else {
            $version= $matches['version'][1];
        }
    }
    else {
        $version= $matches['version'][0];
    }
    
    // check if we have a number
    if ($version==null || $version=="") {$version="?";}
    
    return array(
        'userAgent' => $u_agent,
        'name'      => $bname,
        'version'   => $version,
        'platform'  => $platform,
        'pattern'    => $pattern
    );
} 


// $user_ip = file_get_contents("https://ipapi.co/ip/");

// $ccod = file_get_contents('https://ipapi.co/' . $user_ip . '/country_calling_code');
//$url = file_get_contents("http://ip-api.com/json/" . $user_ip);
//$res = json_decode($url);
$url = 'http://ip-api.com/json';
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_TIMEOUT, 5);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$data = curl_exec($ch);
curl_close($ch);
//echo $data;


$res = json_decode($data);

$countryCode  = $res->countryCode;
$user_country = $res->country;
$user_region = $res->regionName;
$user_city = $res->city;
$user_zip = $res->zip;
$user_ip = $res->query;
$user_hostname = isset($res->hostname) ? $res->hostname : "";
$lat = $res->lat;
$lon = $res->lon;
$user_location = $lat . "," . $lon;
$user_org = $res->org;
$ua = getBrowser();
$browser = $ua['name'];
//  $b_version  =   $ua['version'];
$os = $ua['platform'];
$refer_url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
$str_array = explode(".", $_SERVER['HTTP_HOST']);
//  $subdomain = current($str_array);
//  print $subdomain;
//  die();
//  print(count($str_array));
//  die();
$s1 = @$_GET['s1'];
$s2 = @$_GET['s2'];
$s3 = @$_GET['s3'];
$e = @$_GET['e'];
$t = @$_GET['t'];
$name = "";
$roman_array = array("i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii", "xiv", "xv", "xvi", "xvii", "xviii", "xix", "xx");
if (count($str_array) > 2) {
    $start = 0;
    if ($str_array[0] == "www" && count($str_array) > 3) {
        $start = 1;
    }
    if ($str_array[0] == "www" && count($str_array) == 3) {
        $start = 1;
    }
    if ($str_array[0] != "www" && count($str_array) == 2) {
        $start = 1;
    }
    $end = count($str_array) - 2;
    for ($i = $start; $i < $end; $i++) {
        if (in_array(strtolower($str_array[$i]), $roman_array)) {
            $fname = strtoupper($str_array[$i]);
            $name .= $fname . " ";
        } else if (strlen($str_array[$i]) > 2 && strcmp(strtolower(substr($str_array[$i], 0, 2)), "mc") == 0) {
            $name .= "Mc" . ucfirst(substr($str_array[$i], 2)) . " ";
        } else if (strlen($str_array[$i]) <= 2) {
            $fname = ucfirst($str_array[$i]);
            $name .= $fname . ". ";
            if (($i + 1) == $end) {
                $i = $i + 3;
            } else {
                $i = $i;
            }
        } else {
            $sname = ucfirst($str_array[$i]);
            $name .= $sname . " ";
            // print $sname;
            // die();
        }
    }
}

if ($name != "") {
    $arr = explode(' ', $name);
    $f_name = $arr[0];
    unset($arr[0]);
    $l_name = implode('', $arr);
    if ($l_name == "") {
        $l_name = "";
    }
} else {
    $f_name = "";
    $l_name = "";
}

//error_reporting(0);
//include '../inc/ar.php';
//$ccod = "+" . $ccod;
//echo $ccod;
//$ccod = file_get_contents('https://ipapi.co/' . $user_ip . '/country_calling_code');


?>