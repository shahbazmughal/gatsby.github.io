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

$products = json_decode($response);
//print_r($products); exit;
$no_of_emails = array();
$pids = array();
$prices = array();
$transactional_array = array();
$segments_array = array();
$triggers_array = array();
$monthly_emails_array = array();
$ip_array = array();
$prices = array();
foreach($products->products->product as $product) {
    $description = explode("\n" , $product->description);
    $contacts = explode(":" , $description[0]);
    $monthly_emails = explode(":" , $description[1]);
    $transactional = explode(":" , $description[2]);
    $segments = explode(":" , $description[3]);
    $triggers = explode(":" , $description[4]);
    $IPs = explode(":" , $description[5]);
    //echo "<pre>"; print_r($product); exit;
    $no_of_emails[] = trim($contacts[1]); 
    $prices[] = trim($product->pricing->USD->monthly);
    $pids[] = trim($product->pid); 
    $names[] = trim($product->name); 
    $triggers_array[] = trim($triggers[1]); 
    $segments_array[] = trim($segments[1]);
    $transactional_array[] = trim($transactional[1]);
    $monthly_emails_array[] = trim($monthly_emails[1]);
    $ip_array[] = trim($IPs[1]);
}
//print_r(json_decode($response));
$array_count = count($ip_array) - 2;
//echo $response;
$price_first = "$" . $prices[0];  
if($prices[0] < 0) { 
    $price_first = "Free"; 
}

  $cal_html_output = '<div class="loading" id="loading"><div class="loader"></div></div>
<div id="tab-666" class="tab-pane fusion-clearfix active in">
  <div class="row package-pans">
    <form action="" method="POST" id="packages" class="">
        <div class="form-body">
            <div id="step1">
                <div class="form-group step1 mb0">
                    <div class="col-md-8 range-block">
                        <div id="contactsrow" style="display:block; !important">
                            <div class="form-group row">
                                <h3 style="margin-bottom: 15px">Your contact list size?</h3> 
                                <h5 class="emails12">Select the plan below as per your contact list size</h5>
                                <div class="kt-ion-range-slider">
                                    <input type="hidden" id="contact11"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 base-block">
                        <h3>Your Plan!</h3>
                        <h5>' .  $names[0] . '</h5>
                        <p>Test the platform with no commitment</p>
                        <input type="hidden"  id="pp1" value="' .  $prices[0] . '" />
                        <input type="hidden" id="fprice" />
                        <div class="plan">
                            <h5 id="pricemain">'  . $price_first .  '</h5><h5> / month</h5>
                        </div><a href="https://one.mumara.com/signup?pid=' .  $pids[0] . '" id="buy" class="btn btn-success">Order Now</a><a href="#" id="seeBrDwn" rel="noopener noreferrer" data-toggle="modal" data-target=".fusion-modal.seeBrDwn">See Cost Breakdown</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </form>
  </div>
  <div class="features row" id="features-blk">
    <div class="panel panel-product panel-default panel-primary" id="product1">
        <div class="panel-heading">
            <h3 class="panel-title pull-left" id="product-name">1 - 500</h3>
            <div class="pull-right text-right product-price">
                <span class="pull-right text-right">
                    <span><i>Starting from</i></span>&nbsp;&nbsp;
                    <span class="price" id="panel-head-price"><strong>'.  $price_first . '</strong></span><br>
                    <span class="type"></span>
                </span>
            </div>
            <div style="clear:both;"></div>
        </div>
        <div class="panel-body text-left">
            <div class="feature-container">
                <div class="row">
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Contacts</span>
                        <span class="feature-value pull-right"><strong id="Contacts">500</strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="contacts-progress" role="progressbar" aria-valuenow="' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%"></div></div>
                    </div>
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Daily Sending Limit</span>
                        <span class="feature-value pull-right"><strong id="MonthlyEmails">500</strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="emails-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
                    </div>
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Monthly Quota</span>
                        <span class="feature-value pull-right"><strong id="Transactional"> ' .  $transactional_array[0] . ' </strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="transactional-progress" role="progressbar" aria-valuenow="' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '%"></div></div>
                    </div>
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Triggers</span>
                        <span class="feature-value pull-right"><strong id="Segments">' .  $segments_array[0] . '</strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="segments-progress" role="progressbar" aria-valuenow="' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '%"></div></div>
                    </div>
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Transactional Emails</span>
                        <span class="feature-value pull-right"><strong id="Triggers">' .  $triggers_array[0] . '</strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="triggers-progress" role="progressbar" aria-valuenow="' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '%"></div></div>
                    </div>
                    <div class="product-feature col-md-4">
                        <span class="pull-left">Maximum Dedicated IPs</span>
                        <span class="feature-value pull-right"><strong id="IP">' .  $ip_array[0] . '</strong></span>
                        <br>
                        <div class="progress"><div class="progress-bar progress-bar-success" id="ip-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="panel panel-default" id="feature-list">
        <div class="panel-heading">
            <h4 id="list-name">Included With Every Plan</h4>
        </div>
        <div class="panel-body">
            <div class="feature-container">
                <div class="row">
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Contact List Management
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Suppression Management
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Custom Fields
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Contacts Management
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Bulk Update
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Broadcast Editor
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Drip Campaigns
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Spintags
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Dynamic Content Tags
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Future Scheduling
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Bounce Processing
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Custom Bounce Rules
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Sending Domains
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Custom Tracking Domains
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Domain Keys Authentication
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Shared/Dedicated IPs
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Segmentation
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Triggers
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Web Forms
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Spam Processing
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Bounce Processing
                    </div>

                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Custom Headers
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Geo Tracking
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Advanced Statistics
                    </div>
                    
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Split Tests
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Community Support
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Support Desk
                    </div>
                    <div class="product-feature col-md-4">
                        <i class="fa fa-check blue"></i>&nbsp;&nbsp;Restful API
                    </div>
                    
                </div>
            </div>        
        </div>
    </div>

    <div class="col-md-6" style="display:none;"> 
        <span> Contacts </span>
        <span id="Contacts"> ' .  $no_of_emails[0] . '  </span>
        <span id="ContactsPerccent"> ' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%</span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="contacts-progress" role="progressbar" aria-valuenow="' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%"></div></div>
    </div>
    <div class="col-md-6" style="display:none;"> 
        <span> Monthly Emails </span>
        <span id="MonthlyEmails">  ' .  $monthly_emails[0] . ' </span>
        <span id="MonthlyEmailsPerccent"> 100% </span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="emails-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
    </div>
    <div class="col-md-6" style="display:none;"> 
        <span> Transactional </span>
        <span id="Transactional"> ' .  $transactional_array[0] . ' </span>
        <span id="TransactionalPerccent">  ' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '% </span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="transactional-progress" role="progressbar" aria-valuenow="' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '%"></div></div>
    </div>
    <div class="col-md-6" style="display:none;"> 
        <span> Segments </span>
        <span id="Segments">  ' .  $segments_array[0] . '  </span>
        <span id="SegmentsPerccent"> ' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '% </span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="segments-progress" role="progressbar" aria-valuenow="' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '%"></div></div>
    </div>
    <div class="col-md-6" style="display:none;"> 
        <span> Triggers </span>
        <span id="Triggers"> ' .  $triggers_array[0] . ' </span>
        <span id="TriggersPerccent"> ' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '% </span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="triggers-progress" role="progressbar" aria-valuenow="' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '%"></div></div>
    </div>
    <div class="col-md-6" style="display:none;"> 
        <span> IP </span>
        <span id="IP"> ' .  $ip_array[0] . ' </span>
        <span id="IPPerccent"> 100% </span>
        <div class="progress"><div class="progress-bar progress-bar-success" id="ip-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
    </div>

</div>
</div>';


   
    
echo $cal_html_output;

?>

<div id="loading"><div class="loading">Loading ...</div></div>

<link href="../css/mbSlider.css" rel="stylesheet" >
<link href="../css/style.css" rel="stylesheet" >

<script src="../../../assets/js/jquery.min.js"></script>
<script src="../js/mbSlider.js"></script>

<script type="text/javascript">

    var KTIONRangeSlider = function () {
        var $ = jQuery.noConflict();
        // Private functions
        
        var demos = function () {

            var $c2 = $("#contact11");
            // using postfixes
            $("#contact11").ionRangeSlider({
                type: "single",
                skin: "big",
                grid: true,
                min: <?php echo $no_of_emails[0]; ?>,
                max: <?php echo $no_of_emails[$array_count]; ?>,
                from: 0,
                onStart: function (data) {
                     var names = <?php echo json_encode($names); ?>;
                     //$(".irs-single").html(names[data.from]);
                      console.log(names[data.from]);
                      setTimeout(function() {
                        $(".irs-single").html(names[0]);
                      },1);
                  
                },
                 onFinish: function (data) {
                     var names = <?php echo json_encode($names); ?>;
                     $(".irs-single").html(names[data.from]);
                  
                },

                

                values:<?php echo json_encode($no_of_emails); ?>
            });

            $("#contact11").on("change", function () {
                var pp1 = $("#pp1").val();
                var $inp2 = $(this);
                var from5 = $inp2.prop("value"); 
                $("#no_of_contacts").val(from5);
                var from6 = $inp2.data("from");
                var email_limit = from5 * 12;
                //console.log(email_limit);
                var result2 = 12 + parseFloat(((2)*from6).toFixed(2));
                var prices = <?php echo json_encode($prices); ?>;
                var pids = <?php echo json_encode($pids); ?>;
                var names = <?php echo json_encode($names); ?>;
                var no_of_emails = <?php echo json_encode($no_of_emails); ?>;
                var monthly_emails = <?php echo json_encode($monthly_emails); ?>;
                var transactional = <?php echo json_encode($transactional_array); ?>;
                var segments = <?php echo json_encode($segments_array); ?>;
                var triggers = <?php echo json_encode($triggers_array); ?>;
                var monthly_emails_array = <?php echo json_encode($monthly_emails_array); ?>;
                var ip_array = <?php echo json_encode($ip_array); ?>;
                var array_count = <?php echo $array_count; ?>;
               
                if(Number(prices[from6]) < 0) { 
                    var total_price = "Free";
                }  else { 
                    var total_price = "$" + prices[from6];
                }
                if (Number(array_count) + 1  == from6)
                {
                     var total_price = "Custom";
                }

                   $("#Contacts").html(no_of_emails[from6]);
                   $(".irs-single").html(names[from6]);

                   $("#MonthlyEmails").html(monthly_emails_array[from6]);
                   $("#Transactional").html(transactional[from6]);
                   $("#Segments").html(segments[from6]);
                   $("#Triggers").html(triggers[from6]);
                   $("#IP").html(ip_array[from6]);

                   if(from6 <= array_count) { 
                       $("#ContactsPerccent").html((no_of_emails[from6] / no_of_emails[array_count]) * 100 + "%");
                       $("#contacts-progress").attr("aria-valuenow", (no_of_emails[from6] / no_of_emails[array_count]) * 100);
                       $("#contacts-progress").css("width", (no_of_emails[from6] / no_of_emails[array_count]) * 100 + "%");

                       $("#TransactionalPerccent").html((transactional[from6] / transactional[array_count]) * 100 + "%");
                       $("#transactional-progress").attr("aria-valuenow", (transactional[from6] / transactional[array_count]) * 100);
                       $("#transactional-progress").css("width", (transactional[from6] / transactional[array_count]) * 100 + "%");

                       $("#SegmentsPerccent").html((segments[from6] / segments[array_count]) * 100 + "%");
                       $("#segments-progress").attr("aria-valuenow", (segments[from6] / segments[array_count]) * 100);
                       $("#segments-progress").css("width", (segments[from6] / segments[array_count]) * 100 + "%");

                       $("#TriggersPerccent").html((triggers[from6] / triggers[array_count]) * 100 + "%");
                       $("#triggers-progress").attr("aria-valuenow", (triggers[from6] / triggers[array_count]) * 100);
                       $("#triggers-progress").css("width", (triggers[from6] / triggers[array_count]) * 100 + "%");
                   }
                   

                    //$(".emails12").html(from5+" <span>contacts</span>");
                    //$(".emails12").html(names[from6]+" <span>contacts</span>");
                    $("#base-contacts").html(from5);
                    $(".base-block>h5").html(names[from6]);
                    $("#product-name").html(names[from6]);
                    
                    if(total_price == "Custom") { 
                        $("#buy").html("Contact Sales");
						$("#buy").attr("href", 'https://mumara.com/contact-us/');
                    } else { 
                        $("#buy").html("Order Now");
						$("#buy").attr("href" , "https://one.mumara.com/signup?pid=" + pids[from6] );
                    }
                    
                    
                    $(".plan").html("<h5 id='pricemain'>" + total_price + "</h5><h5> / month</h5>");
                    if(Number(prices[from6]) > 0) { 
                        $("#panel-head-price").html("<strong>" + total_price + " USD</strong>");
                    } else { 
                        $("#panel-head-price").html("<strong>" + total_price + " </strong>");
                    }

                    $("#total-cost").html("$<span>"+result2+"</span> / month");
                    $(".emails22").html(email_limit);
                    $("#amount").val(prices[from6]);
                
            });
        }

        return {
            // public functions
            init: function() {
                demos(); 
            }
        };
    }();

  


    jQuery(document).ready(function() {
        KTIONRangeSlider.init();
		setTimeout(function() {
          jQuery("#loading").hide();
      }, 2000);
    });
</script>