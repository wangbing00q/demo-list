<?php
$fdata=$_GET["fdata"]
$bdata='[{img:"images/banner1.jpg",pgname:"首冲壕礼",url:"#"},
		{img:"images/banner2.jpg",pgname:"夺宝行动",url:"#"},
		{img:"images/banner3.jpg",pgname:"乐游服务",url:"#"},
		{img:"images/banner4.png",pgname:"推理解谜",url:"#"},
		{img:"images/banner5.jpg",pgname:"同人征集",url:"#"},
		{img:"images/banner1.jpg",url:"#"}]';
$b=;
$c=;
$d='[1,2,3,4]';
if($fdata=="bdata"){
	echo $bdata
}else if($user=="b"){
	echo $b
}




?>

$.ajax({
	type:"get",
	url:"1.php",
	data:"user=b"
})