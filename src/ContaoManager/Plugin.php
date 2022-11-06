<?php

declare(strict_types=1);

/*
 * This file is part of Article list with css classes and ids.
 *
 * (c) heimseiten.de - Webdesign aus Köln 2022 <info@heimseiten.de>
 * @license GPL-3.0-or-later
 * For the full copyright and license information,
 * please view the LICENSE file that was distributed with this source code.
 * @link https://github.com/heimseiten/contao-article-list-with-css-classes-and-ids-bundle
 */

namespace Heimseiten\ContaoArticleListWithCssClassesAndIdsBundle\ContaoManager;

use Contao\ManagerPlugin\Bundle\BundlePluginInterface;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\ParserInterface;

class Plugin implements BundlePluginInterface
{
    public function getBundles(ParserInterface $parser): array
    {
        return [
            BundleConfig::create('Heimseiten\ContaoArticleListWithCssClassesAndIdsBundle\HeimseitenContaoArticleListWithCssClassesAndIdsBundle')
                ->setLoadAfter(['Contao\CoreBundle\ContaoCoreBundle']),
        ];
    }
}
