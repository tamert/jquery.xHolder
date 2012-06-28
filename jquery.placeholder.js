(function ($) {
	$.fn.xHolder = function (options) {
		return this.each(function () {
			$el = $(this);

			var holder_text = $el.attr('rel');

			if ($el.val() == '') {
				$el.val(holder_text);
			};

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