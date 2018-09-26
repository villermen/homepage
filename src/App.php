<?php

namespace Villermen\Homepage;

use InvalidArgumentException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Templating\EngineInterface;
use Symfony\Component\Templating\Helper\SlotsHelper;
use Symfony\Component\Templating\Loader\FilesystemLoader;
use Symfony\Component\Templating\PhpEngine;
use Symfony\Component\Templating\TemplateNameParser;

class App
{
    /** @var EngineInterface */
    protected $templating;

    /** @var string */
    protected $requestedPageName;

    public function __construct()
    {
        $request = Request::createFromGlobals();

        // Obtain page from request
        $pathInfoParts = explode('/', $request->getPathInfo());

        if (count($pathInfoParts) > 1 && $pathInfoParts[1]) {
            $this->requestedPageName = $pathInfoParts[1];
        } else {
            $this->requestedPageName = 'index';
        }

        $this->templating = new PhpEngine(
            new TemplateNameParser(),
            new FilesystemLoader(__DIR__ . '/views/%name%.php'),
            [
                new SlotsHelper()
            ]
        );

        $this->templating->addGlobal('page', $this->requestedPageName);
        $this->templating->addGlobal('request', $request);
        $this->templating->addGlobal('baseUrl', $request->getBasePath() . '/');
        $this->templating->addGlobal('pathInfo', '/' . implode('/', array_slice($pathInfoParts, 2)));
    }

    public function run()
    {
        if ($this->templating->exists('pages/' . $this->requestedPageName)) {
            echo $this->templating->render('pages/' . $this->requestedPageName);
        } elseif ($this->templating->exists('pages/404')) {
            echo $this->templating->render('pages/404');
        } else {
            header('HTTP/1.0 404 Not Found');
            echo '<h1>Page not found</h1>';
        }
    }
}
