var KTIONRangeSlider = function() {
	var demos = function() {
		var $c2 = $("#contact11");
		$("#contact11").ionRangeSlider({
			type: "single",
			skin: "big",
			grid: true,
			min: 1,
			max: 10,
			from: 0,
			onStart: function(data) {
				var names = ["MC CLOUD - 1", "MC CLOUD - 2", "MC CLOUD - 3", "MC CLOUD - 4", "MC CLOUD - 5", "MC CLOUD - 6", "MC CLOUD - 7", "MC CLOUD - 8", "MC CLOUD - 9", "MC CLOUD - 10"];
				console.log(names[data.from]);
				setTimeout(function() {
					$(".irs-single").html("MC CLOUD - 1");
				}, 1);
			},
			onFinish: function(data) {
				var names = ["MC CLOUD - 1", "MC CLOUD - 2", "MC CLOUD - 3", "MC CLOUD - 4", "MC CLOUD - 5", "MC CLOUD - 6", "MC CLOUD - 7", "MC CLOUD - 8", "MC CLOUD - 9", "MC CLOUD - 10"];
				$(".irs-single").html(names[data.from]);
			},
			values: ["MC CLOUD - 1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
		});
		$(".irs-single").html("MC CLOUD - 1");
		$(".irs-single").attr("id", "ll_1");
		$("#contact11").on("change", function() {
			var pp1 = $("#pp1").val();
			var $inp2 = $(this);
			var from5 = $inp2.prop("value");
			var from6 = $inp2.data("from");
			var prices = ["47", "97", "147", "197", "397", "797", "1597", "3197", "4797", "6397"];
			var pids = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
			var names = ["MC CLOUD - 1", "MC CLOUD - 2", "MC CLOUD - 3", "MC CLOUD - 4", "MC CLOUD - 5", "MC CLOUD - 6", "MC CLOUD - 7", "MC CLOUD - 8", "MC CLOUD - 9", "MC CLOUD - 10"];
			var no_of_emails = ["1 GB", "2 GB", "4 GB", "8 GB", "16 GB", "32 GB", "64 GB", "96 GB", "128 GB", "192 GB"];
			var monthly_emails = ["1 Core", "1 Core", "2 Core", "4 Core", "6 Core", "8 Core", "16 Core", "20 Core", "24 Core", "32 Core"];
			var transactional = ["25 GB (SSD)", "50 GB (SSD)", "80 GB (SSD)", "160 GB (SSD)", "320 GB (SSD)", "640 GB (SSD)", "1280 GB (SSD)", "1920 GB (SSD)", "2560 GB (SSD)", "3840 GB (SSD)"];
			var segments = ["up to 10,000 contacts", "up to 25,000 contacts", "up to 100,000 contacts", "up to 250,000 contacts", "up to 1,000,000 contacts", "up to 2,500,000 contacts", "up to 10,000,000 contacts", "up to 25,000,000 contacts", "up to 100,000,000 contacts", "100,000,000+ contacts"];
			var monthly_emails_array = ["1 Core", "1 Core", "2 Core", "4 Core", "6 Core", "8 Core", "16 Core", "20 Core", "24 Core", "32 Core"];
			var array_count = 10;
			var total_price = "$" + prices[from6];
			$("#Contacts").html(no_of_emails[from6]);
			$(".irs-single").html(names[from6]);
			$("#MonthlyEmails").html(monthly_emails_array[from6]);
			$("#Transactional").html(transactional[from6]);
			$("#Segments").html(segments[from6]);
			var ram = [1, 2, 4, 8, 16, 32, 64, 96, 128, 192];
			var cpu = [1, 1, 2, 4, 6, 8, 16, 20, 24, 32];
			var storage = [25, 50, 80, 160, 320, 640, 1280, 1920, 2560, 3840];
			var suggest = [10000, 25000, 100000, 250000, 1000000, 2500000, 10000000, 25000000, 100000000, 100000000]
			var array_last_index = array_count - 1;
			if (from6 <= array_count) {
				$("#contacts-progress").attr("aria-valuenow", Math.round((ram[from6] / ram[array_last_index]) * 100));
				$("#contacts-progress").css("width", Math.round((ram[from6] / ram[array_last_index]) * 100) + "%");
				$("#emails-progress").attr("aria-valuenow", Math.round((cpu[from6] / cpu[array_last_index]) * 100));
				$("#emails-progress").css("width", Math.round((cpu[from6] / cpu[array_last_index]) * 100) + "%");
				$("#transactional-progress").attr("aria-valuenow", Math.round((storage[from6] / storage[array_last_index]) * 100));
				$("#transactional-progress").css("width", Math.round((storage[from6] / storage[array_last_index]) * 100) + "%");
				$("#segments-progress").attr("aria-valuenow", Math.round((suggest[from6] / suggest[array_last_index]) * 100));
				$("#segments-progress").css("width", Math.round((suggest[from6] / suggest[array_last_index]) * 100) + "%");
			}
			$(".base-block>h5").html(names[from6]);
			$("#product-name").html(names[from6]);
			$("#buy").html("Order Now");
			$("#buy").attr("href", "http://billing.mumara.com/cart.php?a=add&bid=" + pids[from6]);
			$(".plan").html("<h5 id='pricemain'>" + total_price + ".00</h5><h5> / month</h5>");
			$("#panel-head-price").html("<strong>" + total_price + ".00 USD</strong>");
			$("#amount").val(prices[from6]);
			if (from5 == 1) {
				$(".irs-single").html("MC CLOUD - 1");
				$(".irs-single").attr("id", "ll_1");
			} else if (from5 == 2) {
				$(".irs-single").html("MC CLOUD - 2");
				$(".irs-single").attr("id", "ll_2");
			} else if (from5 == 3) {
				$(".irs-single").html("MC CLOUD - 3");
				$(".irs-single").attr("id", "ll_3");
			} else if (from5 == 4) {
				$(".irs-single").html("MC CLOUD - 4");
				$(".irs-single").attr("id", "ll_4");
			} else if (from5 == 5) {
				$(".irs-single").html("MC CLOUD - 5");
				$(".irs-single").attr("id", "ll_5");
			} else if (from5 == 6) {
				$(".irs-single").html("MC CLOUD - 6");
				$(".irs-single").attr("id", "ll_6");
			} else if (from5 == 7) {
				$(".irs-single").html("MC CLOUD - 7");
				$(".irs-single").attr("id", "ll_7");
			} else if (from5 == 8) {
				$(".irs-single").html("MC CLOUD - 8");
				$(".irs-single").attr("id", "ll_8");
			} else if (from5 == 9) {
				$(".irs-single").html("MC CLOUD - 9");
				$(".irs-single").attr("id", "ll_9");
			} else if (from5 == 10) {
				$(".irs-single").html("MC CLOUD - 10");
				$(".irs-single").attr("id", "ll_10");
			} else {
				$(".irs-single").html("MC CLOUD - 1");
				$(".irs-single").attr("id", "ll_1");
			}
		});
	}
	return {
		init: function() {
			demos();
		}
	};
}();
jQuery(document).ready(function() {
	KTIONRangeSlider.init();
});