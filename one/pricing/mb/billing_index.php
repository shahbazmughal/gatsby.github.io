<?php

function mumara_billing_order() {
	$calculatormb_output = billing_script();
	return $calculatormb_output;
	 return "hello";
}

function billing_script() {
	include('mb_html.php');
	return $cal_html_output;
}
