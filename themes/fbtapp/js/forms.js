/**
 * (in [your-app-theme]/js/forms.js)
 * Add forms to App engine
 */
define([
    'jquery',
    'core/theme-app',
    ], function($,App) {

    //Create a custom app screen called "contact" associated to template "contact.html", where the contact form is implemented.
    //We also add a link to this contact screen in app menu (see menu.html template).
    App.addCustomRoute( 'contact', 'contact' );

});