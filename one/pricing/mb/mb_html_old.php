<?php

////// Free Package 
$ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://accounts.mumara.com/api/group_products/3");
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $result3 = curl_exec($ch);
    curl_close($ch);
    $m_min_value = 0; 
    $free_product = json_decode($result3 , true);
    $free_no_of_emails = 0; 
    //echo "<pre>"; print_r($marketing_products); exit; 
    foreach($free_product["product_data"] as $k=>$fp) {
        $free_no_of_emails = $fp["product_module_fields_data"][1]["field_value"]; 
        $f_product_id = $fp["id"]; 
        $f_name = $fp["name"]; 
    }

 ////// Newsletter Emails 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://accounts.mumara.com/api/group_products/2");
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $result1 = curl_exec($ch);
    curl_close($ch);
    $m_min_value = 0; 
    $marketing_products = json_decode($result1 , true);
    $marketing_no_of_emails = 0; 
    //echo "<pre>"; print_r($marketing_products); exit; 
    $m_product_ids = array();
    $m_names = array();
    $t_no_of_emails = array();
    $m_monthly = array();
    $m_product_ids = array();
    foreach($marketing_products["product_data"] as $k=>$mp) {

        $m_product_ids[] = $mp["id"];
        $m_names[] = $mp["name"];

        $t_no_of_emails[] = $mp["product_module_fields_data"][1]["field_value"];

         $marketing_no_of_emails = $mp["product_module_fields_data"][1]["field_value"]; 
         $m_min_value = $mp["product_config_option_data"]["response"][0]["product_config_options_data"]["qty_minimum"];
         $m_max_value = $mp["product_config_option_data"]["response"][0]["product_config_options_data"]["qty_maximum"];
        
        $m_increment_value = $mp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];

         $m_monthly_setup_fee = $mp["recurring_monthly_setup_price"];
         $m_monthly[] = round($mp["recurring_monthly_fee_price"]);

          $mpriceOne = $mp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];
          $mpriceOneContacts = $mp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];
          $mpriceOne = 1/$mpriceOne;

          /*print_r(number_format($m_monthly[0])); 
          exit;*/

    }


  
    $marketing_products = array();
    for($i=$m_min_value; $i<=$m_max_value; $i += $m_increment_value ) { 
        $marketing_products[] = $i;
    }

    $marketting_startup_price =  $m_monthly[0];

    ////// Transectional emails 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://accounts.mumara.com/api/group_products/1");
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
    curl_setopt($ch,CURLOPT_FOLLOWLOCATION,true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $result2 = curl_exec($ch);
    curl_close($ch);
    $m_min_value = 0; 
    $transectional_products = json_decode($result2 , true);
    //echo "<pre>"; print_r($transectional_products["product_data"]); 
    $no_of_emails = array(); 
    $trans_prices = array(); 
    $t_monthly_setup_prices = array(); 
    $t_product_ids = array(); 
 
    foreach($transectional_products["product_data"] as $k=>$tp) {
        $t_product_ids[] = $tp["id"];
        $t_names[] = $tp["name"];
        $no_of_emails[] = $tp["product_module_fields_data"][1]["field_value"];
        $trans_prices[] = $tp["recurring_monthly_fee_price"];
        $t_monthly_setup_prices[] = $tp["recurring_monthly_setup_price"];

          $t_min_value = $tp["product_config_option_data"]["response"][0]["product_config_options_data"]["qty_minimum"];
         $t_max_value = $tp["product_config_option_data"]["response"][0]["product_config_options_data"]["qty_maximum"];
         $t_increment_value = $tp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];

         $t_monthly_setup_fee = $tp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["pricings"]["monthly_setup_fee"];
         $t_monthly = $tp["recurring_monthly_fee_price"];

         $priceOne = $tp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];
         $priceOneContacts = $tp["product_config_option_data"]["response"][0]["product_config_options_values"][0]["option_name"];
         $priceOne = 1/$priceOne;

    }
    

    $t_products = array();
    for($i=$t_min_value; $i<=$t_max_value; $i += $t_increment_value) { 
        $t_products[] = $i;
    }

    $transectional_startup_price = $t_monthly_setup_fee + $t_monthly;



  $cal_html_output = '<div class="loading" id="loading"><div class="loader"></div></div>
<div id="tab-666" class="tab-pane fusion-clearfix active in">
  <div class="row package-pans">
    <form action="" method="POST" id="packages" class="">
        <div class="form-body">
            <div id="step1">
                <div class="form-group step1 mb0">
                    <div class="col-md-8 range-block">
                        <div class="row mb10"><div class="col-lg-4"><label class="kt-option"><span class="kt-option__control"><span class="kt-radio kt-radio--check-bold mt-radio"><input type="radio" name="package_type" id="free" class="statsOpts" value="3" checked=""> <span></span></span></span><span class="kt-option__label"><span class="kt-option__head"><span class="kt-option__title"> Free Plan </span><span class="kt-option__focus"></span></span><span class="kt-option__body">Send up to 6000 emails per month and manage 500 contacts for free forever.</span></span></label></div><div class="col-lg-4"><label class="kt-option"><span class="kt-option__control"><span class="kt-radio kt-radio--check-bold mt-radio"><input type="radio" name="package_type" id="newsletter" class="statsOpts" value="2"> <span></span></span></span><span class="kt-option__label"><span class="kt-option__head"><span class="kt-option__title"> Marketing & Newsletters </span><span class="kt-option__focus"></span></span><span class="kt-option__body">Send promotions and newsletters to your subscribers through MumaraOne platform.</span></span></label></div><div class="col-lg-4"> <label class="kt-option"><span class="kt-option__control "><span class="kt-radio kt-radio--check-bold mt-radio"><input type="radio" name="package_type" id="transactional" class="listOps statsOpts" value="1"> <span></span></span></span><span class="kt-option__label"><span class="kt-option__head"><span class="kt-option__title"> Transactional & Marketing </span><span class="kt-option__focus"></span></span><span class="kt-option__body">Use MumaraOne API to relay emails using your own application.</span></span></label></div></div>
                        <div id="freerow">
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of Emails per month</h4> 
                                <h5 class="emailsfr">' . $free_no_of_emails . ' <span>emails</span></h5>
                            </div>
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of contacts</h4> 
                                <h5 class="emailsfr">' . $t_products[0] . ' <span>Contacts Limit</span></h5>
                            </div>
                        </div>
                        <div id="contactsrow">
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of contacts</h4> 
                                <h5 class="emails12">' . $t_no_of_emails[0] . ' <span>Contacts Limit</span></h5>
                                <div class="kt-ion-range-slider">
                                    <input type="hidden" id="contact11"/>
                                </div>
                            </div>
                            <div class="form-group row contact-email">
                                <h4>Emails Limit</h4> 
                                <h5 class="emails22">' .   number_format($t_no_of_emails[0] * 12 ) . ' </h5>
                            </div>
                        </div>
                        <div id="emailrow">
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of Emails per month</h4> 
                                <h5 class="emails1">' .   $no_of_emails[0] . ' <span>emails</span></h5>
                                <div class="kt-ion-range-slider">
                                    <input type="hidden" id="email1"/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <h4 style="margin-bottom: 15px">Number of contacts</h4> 
                                <h5 class="emails2">' . $t_products[0] . ' <span>Contacts Limit</span></h5>
                                <div class="kt-ion-range-slider">
                                    <input type="hidden" id="contact1"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 base-block">
                        <h3>Design Your Own Plan:</h3>
                        <h5>Free</h5>
                        <p>Test the platform with no commitment</p>
                        <input type="hidden"  id="pp1" value="' .  $monthly . '" />
                        <input type="hidden" id="fprice" />
                        <div class="plan">
                            <h5 id="pricemain">$0</h5><h5> / month</h5>
                        </div><a href="javascript:;" id="buy" class="btn btn-success">ORDER NOW</a><a href="#" class="brpopup" rel="noopener noreferrer" data-toggle="modal" data-target="#seeBrDwn">See Cost Breakdown</a>
                    </div>
                </div>
            </div>
        </div>
    </form>
  </div>
</div>

<div id="seeBrDwn" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Cost breakdown</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table id="pack" class="table table-bordered">
            <thead>
                <tr>
                    <th>PLAN</th>
                    <th>BASE PRICE</th>
                    <th>EMAILS</th>
                    <th>CONTACTS LIMIT</th>
                    <th>TOTAL COST</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="plan-name">My Package 1</td>
                    <td id="base-price">$10</td>
                    <td id="base-emails">10000</td>
                    <td id="base-contacts">500</td>
                    <td id="total-cost">$10 / month</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
<input type="hidden" id="product_id" value="' . $f_product_id . '">
';
?>

<script type="text/javascript">


jQuery(document).ready(function($) {

    $("#free").click(function() {
        $("#product_id").val(<?php echo $f_product_id; ?>);
        $(".base-block>h5").html("<?php echo $f_name; ?>");
        $("#plan-name").html("<?php echo $f_name; ?>");
         $("#step1 h3.p-title").html("<?php echo $f_name; ?>");
        $("#pricemain").html("$0");
        $("#loading").show();
        $('body').css('overflow', 'hidden');
        setTimeout(function() {
            $("#freerow").show();
            $(".base-block a.brpopup").hide();
            $("#contactsrow").hide();
            $("#emailrow").hide();
            $("#email1").attr("disabled", "disabled");
            $(".base-block").css("height", "auto");
            $('body').css('overflow', 'auto');
            $("#loading").hide();
            $(".base-block").css("height", "400px");
        }, 1000);
    });
    $("#newsletter").click(function() {
        $(".base-block>h5").html("<?php echo $m_names[0]; ?>");
        $("#plan-name").html("<?php echo $m_names[0]; ?>");
        $("#step1 h3.p-title").html("<?php echo $m_names[0]; ?>");
         $("#contact11").ionRangeSlider();
          let my_range = $("#contact11").data("ionRangeSlider");
           my_range.update({
                 type: "single",
                 skin: "big",
                 grid: true,
                 min: <?php echo $m_min_value; ?>,
                 max: <?php echo $m_max_value; ?>,
                 from: 0,
                 values:<?php echo json_encode($t_no_of_emails); ?>
            });

        $("#pricemain").html("$<?php echo $m_monthly[0];?>");
        $("#contact11").val(<?php echo $t_no_of_emails[0]; ?>);
       $("#product_id").val(<?php echo $m_product_id; ?>);
        $("#freerow").hide();
        $("#loading").show();
        $('body').css('overflow', 'hidden');
        setTimeout(function() {
            $("#contactsrow").show();
            $(".base-block a.brpopup").hide();
            $("#emailrow").hide();
            $("#email1").attr("disabled", "disabled");
            $(".base-block").css("height", "auto");
            $('body').css('overflow', 'auto');
            $("#loading").hide();
            $(".base-block").css("height", "440px");
        }, 1000);
    });
     $("#transactional").click(function() {
        $(".base-block>h5").html("<?php echo $t_names[0]; ?>");
        $("#plan-name").html("<?php echo $t_names[0]; ?>");
        $("#step1 h3.p-title").html("<?php echo $t_names[0]; ?>");
        $("#product_id").val(<?php echo $t_product_id[0]; ?>);
        $("#email1").ionRangeSlider({ from: 0 });
        $("#cotnact1").ionRangeSlider({ from: 0 });
        //$("#pricemain").html("$10");
        $("#pp1").val(<?php echo $t_monthly_setup_prices[0] +  $trans_prices[0] + ($t_products[0] * $mpriceOne); ?>);
        $("#pricemain").html("$" + <?php echo $t_monthly_setup_prices[0] +  $trans_prices[0] + ($t_products[0] * $priceOne); ?>);
       
        $("#email1").ionRangeSlider();
          let my_range1 = $("#email1").data("ionRangeSlider");
           my_range1.update({
                    type: "single",
                    skin: "big",
                    grid: true,
                    min: <?php echo $no_of_emails[0]; ?>,
                    max: <?php echo $no_of_emails[count($no_of_emails) - 1]; ?>,
                    from: 0,
                    values:<?php echo json_encode($no_of_emails); ?>,
            });


           $("#contact1").ionRangeSlider();
          let my_range2 = $("#contact1").data("ionRangeSlider");
           my_range2.update({
                type: "single",
                skin: "big",
                grid: true,
                min: <?php echo $t_min_value; ?>,
                max: <?php echo $t_max_value; ?>,
                from: 0,
                values:<?php echo json_encode($t_products); ?>
            });


        console.log($("#pricemain").val());
        $("#loading").show();
        $('body').css('overflow', 'hidden');
        setTimeout(function() {
            $("#freerow").hide();
            $(".base-block a.brpopup").show();
            $("#contactsrow").hide();
            $("#emailrow").show();
            $("#email1").removeAttr("disabled");
            $(".base-block").css("height", "475px");
            $('body').css('overflow', 'auto');
            $("#loading").hide();
        }, 1000);
    }); 


       $("body").on("click" , "#buy" , function() { 
            var order = $(".statsOpts:checked").val();
            var no_of_contacts = 500;
            if(order == 2) { 
                no_of_contacts = $("#contact11").val()
            }

            if(order == 1) { 
                no_of_contacts = $("#contact1").val()
            }

            var product_id = $("#product_id").val();
            let url = "https://accounts.mumara.com/order/" + product_id + "/" + no_of_contacts;
            window.open(url, '_blank');
           
            //window.location.href = "";
        });
   

});



    var KTIONRangeSlider = function () {
        var $ = jQuery.noConflict();
        // Private functions
        
        var demos = function () {

            var $e1 = $("#email1");

            

            // using postfixes
            $("#email1").ionRangeSlider({
                type: "single",
                skin: "big",
                grid: true,
                min: <?php echo $no_of_emails[0]; ?>,
                max: <?php echo $no_of_emails[count($no_of_emails) - 1]; ?>,
                from: 0,
                values:<?php echo json_encode($no_of_emails); ?>,
                //prefix: "Contacts: "
            });


            

            $("#email1").on("change", function () {
                var prices = <?php echo json_encode($trans_prices); ?>;
                var setup_prices = <?php echo json_encode($t_monthly_setup_prices); ?>;
                var products = <?php echo json_encode($t_product_ids); ?>;
                var names = <?php echo json_encode($t_names); ?>;
                var $inp = $(this);
                var from = $inp.prop("value"); 
                var from2 = $inp.data("from");
                var price = prices[from2];
                var setup_price = setup_prices[from2];

                var package_name = names[from2];

                $("#product_id").val(products[from2]);
              
                var result = price;

                var result_final = parseFloat(price) + parseFloat(setup_price) + parseFloat(((<?php echo $priceOne; ?>) * $("#contact1").val() ).toFixed(2));

                $(".base-block>h5").html(package_name);
                $("#plan-name").html(package_name);
                $("#step1 h3.p-title").html(package_name);
                $("#base-price").html("$"+result);
                $("#pp1").val(parseFloat(result) + parseFloat(setup_price));
                $(".emails1").html(from+" <span>emails</span>");
                $("#base-emails").html(from);
                $("#total-cost").html("$<span>"+result_final+"</span> / month");
                $(".plan").html("<h5 id='pricemain'>$"+result_final+"</h5><h5> / month</h5>");
            });

            var $c1 = $("#contact1");
            // using postfixes
            $("#contact1").ionRangeSlider({
                type: "single",
                skin: "big",
                grid: true,
                min: <?php echo $t_min_value; ?>,
                max: <?php echo $t_max_value; ?>,
                from: 0,
                values:<?php echo json_encode($t_products); ?>
            });

            $("#contact1").on("change", function () {
                var prices = <?php echo json_encode($trans_prices); ?>;
                var setup_prices = <?php echo json_encode($t_monthly_setup_prices); ?>;

                var pp1 = $("#pp1").val();
                var $inp2 = $(this);
                var from3 = $inp2.prop("value"); 
                $("#no_of_contacts").val(from3);
                var from4 = $inp2.data("from");
               
                var result2 = parseFloat(pp1) +   parseFloat(((<?php echo $priceOne; ?>) * $("#contact1").val() ).toFixed(2));
              
                    $(".emails2").html(from3+" <span>contacts</span>");
                    $("#base-contacts").html(from3);
                    $("#buy").html("Order Now");
                    $("#buy").attr("href", "#");
                    $(".plan").html("<h5 id='pricemain'>$"+result2+"</h5><h5> / month</h5>");
                    $("#total-cost").html("$<span>"+result2+"</span> / month");
                    $("#amount").val(result2);
                    
                
            });

            var $c2 = $("#contact11");
            // using postfixes
            $("#contact11").ionRangeSlider({
                type: "single",
                skin: "big",
                grid: true,
                min: <?php echo $m_min_value; ?>,
                max: <?php echo $m_max_value; ?>,
                from: 0,
                values:<?php echo json_encode($t_no_of_emails); ?>
            });

            $("#contact11").on("change", function () { 
                 var names = <?php echo json_encode($m_names); ?>;
                var mproduct_ids = <?php echo json_encode($m_product_ids); ?>;
                var m_monthly = <?php echo json_encode($m_monthly); ?>;
                var no_of_contacts = <?php echo json_encode($t_no_of_emails); ?>;



                var pp1 = $("#pp1").val();
                var $inp2 = $(this);
                var from5 = $inp2.prop("value"); 
                $("#no_of_contacts").val(from5);
                var from6 = $inp2.data("from");
                //var email_limit = from5 * 12;
                m_product_id = mproduct_ids[from6];
                m_month = m_monthly[from6];
                var email_limit = no_of_contacts[from6] * 12;
                if(no_of_contacts[from6] <= 5000) { 
                    email_limit =  "Unlimited";
                }

                 var package_name = names[from6];
                $(".base-block>h5").html(package_name);
                $("#plan-name").html(package_name);
                $("#step1 h3.p-title").html(package_name);


                $("#product_id").val(m_product_id);
                var result2 = m_month;
                    $(".emails12").html(from5+" <span>contacts</span>");
                    $("#base-contacts").html(from5);
                    $("#buy").html("Order Now");
                    $("#buy").attr("href", "#");
                    $(".plan").html("<h5 id='pricemain'>$"+result2+"</h5><h5> / month</h5>");
                    $("#total-cost").html("$<span>"+result2+"</span> / month");
                    $(".emails22").html(email_limit);
                    $("#amount").val(result2);
                    console.log(from6);
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
