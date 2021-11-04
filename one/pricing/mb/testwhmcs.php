<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://billing.mumara.com/includes/api.php');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
    http_build_query(
        array(
            'action' => 'GetProducts',
            // See https://developers.whmcs.com/api/authentication
            // updated
            'username' => 'lTR97pC9yUPp5ypvpz2fq1rSO3IT97wA',
            'password' => '1djItQC6NyU54aJ4AyOtvMW9AguuEt8q',
            'gid' => '8',
            'responsetype' => 'json',
        )
    )
);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

echo "<pre>";
print_r(json_decode($response));
echo "<br><br>===================================<br><br><br><br><br><br>";
exit;

$response2 = json_decode($response , true);

$pid = $response2['products']['product']['0']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['0']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['0']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['0']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['0']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['0']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['0']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['0']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['0']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['0']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['1']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['1']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['1']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['1']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['1']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['1']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['1']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['1']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['1']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['1']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['2']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['2']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['2']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['2']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['2']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['2']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['2']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['2']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['2']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['2']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['3']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['3']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['3']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['3']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['3']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['3']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['3']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['3']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['3']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['3']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['4']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['4']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['4']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['4']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['4']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['4']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['4']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['4']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['4']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['4']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['5']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['5']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['5']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['5']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['5']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['5']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['5']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['5']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['5']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['5']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";


$pid = $response2['products']['product']['6']['pid'];
echo "PID: " . $pid . " <br>";

$gid = $response2['products']['product']['6']['gid'];
echo "GID: " . $gid . " <br>";

$type = $response2['products']['product']['6']['type'];
echo "Type: " . $type . " <br>";

$name = $response2['products']['product']['6']['name'];
echo "Name: " . $name . " <br>";

$description = $response2['products']['product']['6']['description'];
echo "Description: " . $description . " <br>";

$module = $response2['products']['product']['6']['module'];
echo "Module: " . $module . " <br>";

$paytype = $response2['products']['product']['6']['paytype'];
echo "Paytype: " . $paytype . " <br>";

$pricing  = $response2['products']['product']['6']['pricing'];
echo "Pricing : ";
print_r($pricing);
echo "<br>";

$customfields  = $response2['products']['product']['6']['customfields'];
echo "Customfields : ";
print_r($customfields);
echo "<br>";

$configoptions  = $response2['products']['product']['6']['configoptions'];
echo "Configoptions : ";
print_r($configoptions);
echo "<br>";

echo "<br>------------------------------------------------------ <br><br>";



//print_r(json_decode($response));

?>