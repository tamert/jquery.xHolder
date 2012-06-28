// GPL Licensed
// Author: Umur Gedik
// Date: 28/06/2012

;(function ($) {
	$.fn.xHolder = function (options) {
		return this.each(function () {
			$el = $(this);

			var holder_text = $el.attr('rel');

			if ($el.val() == '') {
				$el.val(holder_text);
			};

			$el.focusin(function () {
				$el = $(this);
				if ($el.val() == holder_text) {
					$el.val('');
				}
			}).focusout(function () {
				$el = $(this);
				if ($el.val() == '') {
					$el.val(holder_text);
				};
			});
		});
	};
})(jQuery);