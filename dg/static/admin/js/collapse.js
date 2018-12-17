/*global gettext*/
(function($) {
    'use strict';
    $(document).ready(function() {
        // Add anchor tag for Show/Hide link
        $("fieldset.collapse").each(function(i, elem) {
            // Don't hide if fields in this fieldset have errors
            if ($(elem).find("div.errors").length === 0) {
                $(elem).addClass("collapsed").find("h2").first().append(' (<a id="fieldsetcollapser' +
                    i + '" class="collapse-toggle" href="#">' + gettext("Show") +
                    '</a>)');
            }
        });
        // Add toggle to anchor tag
<<<<<<< HEAD
        $("fieldset.collapse a.collapse-toggle").click(function(ev) {
=======
        $("fieldset.collapse a.collapse-toggle").on('click', function(ev) {
>>>>>>> 7b825a43d15c4a80af35c812a3960cfdaeea238f
            if ($(this).closest("fieldset").hasClass("collapsed")) {
                // Show
                $(this).text(gettext("Hide")).closest("fieldset").removeClass("collapsed").trigger("show.fieldset", [$(this).attr("id")]);
            } else {
                // Hide
                $(this).text(gettext("Show")).closest("fieldset").addClass("collapsed").trigger("hide.fieldset", [$(this).attr("id")]);
            }
            return false;
        });
    });
})(django.jQuery);
