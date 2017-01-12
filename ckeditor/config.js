/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbar = [
		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'TextColor', 'Font', 'FontSize', 'NumberedList', 'BulletedList', '-', 'RemoveFormat', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', '-', 'Link', 'Unlink', '-', 'Table', 'HorizontalRule', 'Templates', 'Print', 'Maximize' ] }
	];
	config.height = 300;
	config.width = '100%';
	config.removePlugins = 'elementspath';
	config.resize_enabled = false;
};
