<?php
/** @var \Symfony\Component\Templating\PhpEngine $view */
$view->extend('layout');
header('HTTP/1.0 404 Not Found');
$view['slots']->set('title', 'Page not found');
?>
<section class="center">
    <h1>Page not found</h1>
    <p>
        I'm sorry senpai. I couldn't bring you the page...
    </p>
</section>
