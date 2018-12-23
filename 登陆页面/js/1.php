
<?php

$a=$_GET["user"];
$b=$_GET["password"];
// 
$arr=array("guolaoshizhenpang","guolaoshitaipangle","guolaoshizhennengchi");
$arr1=array("guolaoshizhenpang"=>wotongyi,"guolaoshitaipangle"=>duiaduia,"guolaoshizhennengchi"=>najianzhile);
if(in_array($a, $arr)){
	if($arr1[$a]==$b){   
		echo '{"code":1}';
	}else{
		echo '{"code":2}';
	}
}else{
	echo '{"code":0}'; 
}

?>