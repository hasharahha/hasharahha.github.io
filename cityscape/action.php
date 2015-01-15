<?php
foreach ($_GET as $key => &$val) $val = filter_input(INPUT_GET, $key);

foreach ($_POST as $key => &$val) $val = filter_input(INPUT_POST, $key);


?>

<?php
$name = $_POST['name'];
$comment = $_POST['comment'];



$myFile = "comments.txt";
$fh = fopen($myFile, 'a') or die("can't open file");
fwrite($fh, "<comment><commentname>");
fwrite($fh, $name);
fwrite($fh, "</commentname>");
fwrite($fh, "$comment");
fwrite($fh, "</comment>");
fclose($fh);


strip_tags("<?php?>", "<img/>", "<script>")

?>
