<?php

use Contao\System;
use Symfony\Component\HttpFoundation\Request;

if (System::getContainer()->get('contao.routing.scope_matcher')->isBackendRequest(System::getContainer()->get('request_stack')->getCurrentRequest() ?? Request::create(''))) {
    $GLOBALS['TL_CSS'][] = 'bundles/heimseitencontaoarticlelistwithcssclassesandids/contao-article-list-with-css-classes-and-ids-bundle.scss|static';
    $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/heimseitencontaoarticlelistwithcssclassesandids/contao-article-list-with-css-classes-and-ids-bundle.js';
    $GLOBALS['TL_JAVASCRIPT'][] = 'bundles/heimseitencontaoarticlelistwithcssclassesandids/contao-content-list-with-css-classes-and-ids-bundle.js';
}
