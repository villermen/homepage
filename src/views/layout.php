<?php /** @var \Symfony\Component\Templating\PhpEngine $view */ ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="initial-scale=1" />
		<title><?php $view["slots"]->output("title", "Villermen's homepage"); ?></title>
		<link type="text/css" rel="stylesheet" href="<?=$baseUrl."styles/default.css"?>" />
		<link rel="shortcut icon" href="<?=$baseUrl."favicon.ico"?>" />
	</head>
	
	<body>
		<div class="container">
			<div class="background"></div>

            <?php $view["slots"]->output("_content"); ?>
			
			<footer id="footer" class="section">
                <?php if ($page !== "index"): ?>
                    <a class="home-button" href="<?=$baseUrl?>" title="Home">
                        <img src="<?=$baseUrl."images/home.png"?>" alt="Home" />
                    </a>
                <?php endif; ?>

				© 2011-<?php echo date("Y"); ?> Villermen
			</footer>
		</div>
		
		<?php $view["slots"]->output("scripts"); ?>
	</body>
</html>
