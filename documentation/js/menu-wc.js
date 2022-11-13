'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">first_nest documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' : 'data-target="#xs-controllers-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' :
                                            'id="xs-controllers-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' : 'data-target="#xs-injectables-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' :
                                        'id="xs-injectables-links-module-AppModule-37c34670473ffbe6086ddff1840e669688b347ec3f4d8d6d4be704d5b527603829cda9611daf2e9847422e29f16a4a30094f43e1326d67b771d3db78e739d7c8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' : 'data-target="#xs-controllers-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' :
                                            'id="xs-controllers-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' : 'data-target="#xs-injectables-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' :
                                        'id="xs-injectables-links-module-CompaniesModule-6529662db43d34d8fc91cd1f0dd81d704fdb51b7b24f779d68070d53da008cfa1a99805c60065bbe0b8a496c65c2caad98aab8aa45f91a30244ac479872d0ef9"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link" >ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' : 'data-target="#xs-controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' :
                                            'id="xs-controllers-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                            <li class="link">
                                                <a href="controllers/ProductsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' : 'data-target="#xs-injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' :
                                        'id="xs-injectables-links-module-ProductsModule-f14927f72516b6a0cad32bc5d041059596e508e5653b8a90f193372a4e02cca1468fee5c0860e1a99e10c3bb74b76b3a791d86082f7f3e9df519fe338ad93397"' }>
                                        <li class="link">
                                            <a href="injectables/ProductsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' : 'data-target="#xs-controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' :
                                            'id="xs-controllers-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' : 'data-target="#xs-injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' :
                                        'id="xs-injectables-links-module-UsersModule-64e78cc996d47c8481f51262fbfa5f935c2cf5449659d3bd8b53ce3ff07e8bdfe62350f46152053ab5843f18cec761f643be3268a7f5247295006b81f58e5ad9"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateProductDto.html" data-type="entity-link" >CreateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateProductDto.html" data-type="entity-link" >UpdateProductDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});