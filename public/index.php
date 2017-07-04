<?php

require_once("../src/Viller.php");

$viller = new Viller();

$viller->title = "Villermen's homepage";
$viller->afterContent = "";

//process page argument and set content
$viller->content = "";

$viller->page = isset($viller->pathArgs[0]) ? $viller->pathArgs[0] : "index";

if (!preg_match("/^\w+$/", $viller->page))
    $viller->page = "404";

$pageFile = stream_resolve_include_path("../src/pages/{$viller->page}.php");
if (!$pageFile)
{
    $viller->page = "404";
    $pageFile = "../src/pages/404.php";
}

ob_start();

require($pageFile);

$viller->content .= ob_get_clean();

require_once("../src/layout.php");
