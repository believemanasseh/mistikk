(function($) {
    'use strict';
    $(function() {
<<<<<<< HEAD
        $('.cancel-link').click(function(e) {
            e.preventDefault();
            window.history.back();
=======
        $('.cancel-link').on('click', function(e) {
            e.preventDefault();
            if (window.location.search.indexOf('&_popup=1') === -1) {
                window.history.back();  // Go back if not a popup.
            } else {
                window.close(); // Otherwise, close the popup.
            }
>>>>>>> 7b825a43d15c4a80af35c812a3960cfdaeea238f
        });
    });
})(django.jQuery);
