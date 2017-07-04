<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Homepage</title>
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta name="description" content="villermen's homepage" />
        <meta name="keywords" content="villermen homepage villermen.com filebrowser vapor minecraft server" />
        <meta name="author" content="Villermen" />
        <link rel="shortcut icon" href="favicon.ico" />
        <style type="text/css">
            body {
                background-color: black;
                color: #430700;
                text-align: center;
                margin-top: 50px;
                font: 14pt impact;
                white-space: nowrap;
            }
            .bigbutton {
                width: 349px;
                height: 349px;
                display: inline-block;
                background-image: url(buttonsprites.png);
            }
            #button_projects {
                background-position: 0 0;
            }
            #button_projects:hover {
                background-position: 0 349px;
            }
            #button_minecraft {
                background-position: 1050px 0;
            }
            #button_minecraft:hover {
                background-position: 1050px 349px;
            }
            #button_tools {
                background-position: 700px 0;
            }
            #button_tools:hover {
                background-position: 700px 349px;
            }
            #button_filebrowser {
                background-position: 350px 0;
            }
            #button_filebrowser:hover {
                background-position: 350px 349px;
            }
            #button_noie {
                display: block;
                width: 50px;
                height: 50px;
                background: url(noiebuttonsprites.png) 0 0;
                margin: auto;
            }
            #button_noie:hover {
                background-position: 50px 0;
            }
        </style>
    </head>
    <body>
        <a class='bigbutton' id='button_projects' href='/'></a><a class='bigbutton' id='button_minecraft' href='/minecraft'></a><br />
        <?php
        if (preg_match("~MSIE|Internet Explorer~i",$_SERVER["HTTP_USER_AGENT"]))
            echo "<a id='button_noie' href='noie' /><br />";
        ?>
        <a class='bigbutton' id='button_tools' href='/browser'></a><a class='bigbutton' id='button_filebrowser' href='/browser'></a>
    </body>
</html>