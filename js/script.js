/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth

(function ($) {
  $(document).ready(function() { 
    // add glyphicon ok icon in front of publication list in box
    $('#block-views-publikationen-block-1 .view ul li a').prepend('<span class="glyphicon glyphicon-ok"></span>');
    
    // add glyphicon user icon in front of team member list in box
    $('.sidebar .view-team .views-row span.field-content a').prepend('<span class="glyphicon glyphicon-ok"></span>');

    // add glyphicon user icon in front of team member list in box
    $('#block-views-news-block-block .views-row span.field-content a').prepend('<span class="glyphicon glyphicon-ok"></span>');

        // add glyphicon ok icon in front of Forschung menu list in box
    // $('#block-menu-block-2 ul.menu li a').prepend('<span class="glyphicon glyphicon-ok"></span>');

     // add glyphicon ok icon in front of Forschung menu list in box
    // $('#block-menu-block-3 ul.menu li a').prepend('<span class="glyphicon glyphicon-ok"></span>');

        $('div[id^="block-menu-block-"] ul.menu li a').prepend('<span class="glyphicon glyphicon-ok"></span>');


    // add glyphicon download icon for download files
    $('ul.download-file a').prepend('<span class="glyphicon glyphicon-cloud-download"></span>');
    });
})(jQuery);
