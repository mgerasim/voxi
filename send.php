<?php


$url = "https://api.voximplant.com/platform_api/StartScenarios/?account_id=".getenv('voximplant_account_id')."&api_key=".getenv('voximplant_api_key')."&rule_id=135498&script_custom_data=".$_REQUEST["phonea"]."%3A".$_REQUEST["phoneb"]."";

$response = file_get_contents($url);

echo getenv("voximplant_account_id")."\n";
echo $url."\n";

echo $response;

