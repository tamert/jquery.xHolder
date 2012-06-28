(function ($) {
	$.fn.placeholder = function (options) {
		return this.each(function () {
			$el = $(this);

			var holder_text = $el.attr('rel');
			$el.focusin(function () {
				if ($el.val() == holder_text) {
					$el.val('');
				}
			}).focusout(function () {
				if ($el.val() == '') {
					$el.val(holder_text);
				};
			});
		});
	};
})(jQuery);