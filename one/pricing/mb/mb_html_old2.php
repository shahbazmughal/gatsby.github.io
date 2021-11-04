<?php

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'http://billing.dev.mumara.com/includes/api.php');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,
    http_build_query(
        array(
            'action' => 'GetProducts',
            // See https://developers.whmcs.com/api/authentication
            'username' => 'WAhwELbevmcqyWo6d4xJaM5uJRbbBE9S',
            'password' => 'L7T4t9QFuMqBfxsWMWpiGx1eaL0ggdZt',
            'gid' => '10',
            'responsetype' => 'json',
        )
    )
);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$response = curl_exec($ch);
curl_close($ch);

$products = json_decode($response);
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

  $cal_html_output = '<div class="loading" id="loading"><div class="loader"></div></div>
<div id="tab-666" class="tab-pane fusion-clearfix active in">
  <div class="row package-pans">
    <form action="" method="POST" id="packages" class="">
        <div class="form-body">
            <div id="step1">
                <div class="form-group step1 mb0">
                    <div class="col-md-8 range-block">
                        <div id="contactsrow">
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of contacts</h4> 
                                <h5 class="emails12">' . $no_of_emails[0] . ' <span>Contacts Limit</span></h5>
                                <div class="kt-ion-range-slider">
                                    <input type="hidden" id="contact11"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 base-block">
                        <h3>Design Your Own Plan:</h3>
                        <h5>My Package 1</h5>
                        <p>Test the platform with no commitment</p>
                        <input type="hidden"  id="pp1" value="' .  $prices[0] . '" />
                        <input type="hidden" id="fprice" />
                        <div class="plan">
                            <h5 id="pricemain">$0</h5><h5> / month</h5>
                        </div><a href="javascript:;" id="buy" class="btn btn-success">ORDER NOW</a><a href="#" id="seeBrDwn" rel="noopener noreferrer" data-toggle="modal" data-target=".fusion-modal.seeBrDwn">See Cost Breakdown</a>
                    </div>
                    
                </div>
            </div>
            <div class="features row" id="features-blk">

                <div class="panel panel-product panel-default panel-primary" id="product1">
                    <div class="panel-heading">
                        <h3 class="panel-title pull-left" id="product1-name">1 - 500</h3>
                        <div class="pull-right text-right blue product-price">
                            <span class="pull-right text-right">
                                <span><i>Starting from</i></span>&nbsp;&nbsp;
                                <span class="price"><strong>$0.00 USD</strong></span><br>
                                <span class="type"></span>
                            </span>
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="panel-body text-left">
                        <br>
                        <div class="feature-container">
                            <div class="row">
                                <div id="product1-feature1" class="col-md-6">
                                    <span class="pull-left">Contacts</span>
                                    <span class="feature-value pull-right"><strong id="Contacts">500</strong></span>
                                    <br>
                                    <div class="progress"><div class="progress-bar progress-bar-success" id="contacts-progress" role="progressbar" aria-valuenow="' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%"></div></div>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="features-head">
                    <h3 class="panel-title pull-left" id="product1-name">1 - 500</h3>
                </div>

                <div class="col-md-6"> 
                    <span> Contacts </span>
                    <span id="Contacts"> ' .  $no_of_emails[0] . '  </span>
                    <span id="ContactsPerccent"> ' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%</span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="contacts-progress" role="progressbar" aria-valuenow="' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($no_of_emails[0] / $no_of_emails[$array_count]) * 100  . '%"></div></div>
                </div>
                <div class="col-md-6"> 
                    <span> Monthly Emails </span>
                    <span id="MonthlyEmails">  ' .  $monthly_emails[0] . ' </span>
                    <span id="MonthlyEmailsPerccent"> 100% </span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="emails-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
                </div>

                <div class="col-md-6"> 
                    <span> Transactional </span>
                    <span id="Transactional"> ' .  $transactional_array[0] . ' </span>
                    <span id="TransactionalPerccent">  ' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '% </span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="transactional-progress" role="progressbar" aria-valuenow="' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($transactional_array[0] / $transactional_array[$array_count]) * 100 . '%"></div></div>
                </div>
                <div class="col-md-6"> 
                    <span> Segments </span>
                    <span id="Segments">  ' .  $segments_array[0] . '  </span>
                    <span id="SegmentsPerccent"> ' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '% </span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="segments-progress" role="progressbar" aria-valuenow="' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($segments_array[0] / $segments_array[$array_count]) * 100 . '%"></div></div>
                </div>
                <div class="col-md-6"> 
                    <span> Triggers </span>
                    <span id="Triggers"> ' .  $triggers_array[0] . ' </span>
                    <span id="TriggersPerccent"> ' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '% </span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="triggers-progress" role="progressbar" aria-valuenow="' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '" aria-valuemin="0" aria-valuemax="100" style="width:' . ($triggers_array[0] / $triggers_array[$array_count]) * 100 . '%"></div></div>
                </div>
                <div class="col-md-6"> 
                    <span> IP </span>
                    <span id="IP"> ' .  $ip_array[0] . ' </span>
                    <span id="IPPerccent"> 100% </span>
                    <div class="progress"><div class="progress-bar progress-bar-success" id="ip-progress" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%"></div></div>
                </div>

            </div>
        </div>
    </form>
  </div>
</div>';


   
    


?>


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
                min: 0,
                max: 200000,
                from: 0,
                values:<?php echo json_encode($no_of_emails); ?>
            });

            $("#contact11").on("change", function () {
                var pp1 = $("#pp1").val();
                var $inp2 = $(this);
                var from5 = $inp2.prop("value"); 
                $("#no_of_contacts").val(from5);
                var from6 = $inp2.data("from");
                var email_limit = from5 * 12;
                console.log(email_limit);
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
                    var total_price = "0.00";
                }  else { 
                    var total_price = prices[from6];
                }


                   $("#Contacts").html(no_of_emails[from6]);
                   

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
                   

                   $(".emails12").html(from5+" <span>contacts</span>");
                    $("#base-contacts").html(from5);
                    $(".base-block>h5").html(names[from6]);
                    $(".base-block>h5").html(names[from6]);
                   
                    $("#buy").html("Order Now");
                     $("#buy").attr("href" , "http://billing.dev.mumara.com/cart.php?a=add&pid=" + pids[from6] + "&billingcycle=monthly");
                    $(".plan").html("<h5 id='pricemain'>$" + total_price + "</h5><h5> / month</h5>");
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
    });
</script>