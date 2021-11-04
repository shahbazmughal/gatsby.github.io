<?php

$url1=$_SERVER['REQUEST_URI'];
header("Refresh: 300; URL=$url1");

//$request = json_decode(file_get_contents('https://school.mumara.com/wp-json/wp/v2/posts?filter[orderby]=desc&filter[posts_per_page]=1'));
$posts = json_decode(file_get_contents('https://school.mumara.com/wp-json/wp/v2/posts'));

$fh = fopen('../../content/blocks/main/posts.json', 'w');
if (is_array($posts)) {
print_r('<-------- line variable output-------->');   
	foreach ($posts as $line) {
		// with this foreach, if value is array, replace it with first array value
		foreach ($line as $key => $value) {
			if (is_array($value)) {
				$line[$key] = $value[0];
			}
		}
		print_r('<pre>'); print_r($line); print_r('</pre>');
		// no need for foreach, as fputcsv expects array, which we already have
		if (is_array($line)) {
			//fputcsv($fh,$line);
			fwrite($fh, json_encode($line));
		}
		print_r('<pre>'); print_r($line); print_r('</pre>');
	}
}
fclose($fh);
print_r('Converted Successfully');


for ($x = 0; $x <= 2; $x++) {
	$allpsots = $posts[$x];
	//print_r(["title:".$posts[$x]->title->rendered]);
	//print_r(json_encode("title:".$posts[$x]->title->rendered));
	// print_r('<pre>');
	// print_r($posts[$x]);
	// print_r('<pre>');

	// $fp = fopen('../../content/blocks/main/posts.json', 'w');
	// fwrite($fp, json_encode($response[0]));
	// fclose($fp);
}

// echo "<br /><br /><br />";
// print_r($posts[0]->title->rendered);
// echo "<br />";
// print_r($posts[0]->excerpt->rendered);
// echo "<br />";
// print_r($posts[0]->link);
// echo "<br />";
// print_r($posts[0]->date);
// echo "<br />";
// print_r($request[0]->categories);
// echo "<br /><br /><br />";



function jsonContent() {
	$response = json_decode(file_get_contents('https://school.mumara.com/wp-json/wp/v2/posts?filter[orderby]=desc&filter[posts_per_page]=1'));
	$fp = fopen('../../content/blocks/main/posts.json', 'w');
	fwrite($fp, json_encode($response[0]));
	fclose($fp);
}

//header("Refresh:10");

//jsonContent();

	
?>