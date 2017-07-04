<!doctype html>
<html>
    <head>
        <meta charset='utf-8' />
        <meta name='viewport' content='initial-scale=1' />
        <title><?php echo $viller->title; ?></title>
        <link type='text/css' rel='stylesheet' href='<?php echo $viller->GetUrl("default.css"); ?>' />
        <link rel='shortcut icon' href='<?php echo $viller->GetUrl("/favicon.ico"); ?>' />
    </head>

    <body>
        <div id='container'>
            <div id='background'></div>

            <?php if ($viller->page != "index"): ?>
                <section>
                    <a class='contactlink home' href='<?php echo $viller->GetUrl(""); ?>' title='Home'></a>
                </section>
            <?php endif; ?>

            <?php echo $viller->content; ?>

            <footer id='footer' class='section'>
                © 2011-<?php echo date("Y"); ?> Villermen
            </footer>
        </div>

        <?php echo $viller->afterContent; ?>
    </body>
</html>
