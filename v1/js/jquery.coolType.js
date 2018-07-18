(function ($) {

    var defaults = {
        typeSpeed: 10,
        inline: true,
        delayBeforeType: 1000,
        delayAfterType: 3000,
        onComplete: false,
        onBeforeType: false,
        onAfterType: false,
        expansions: [
            '&nbsp;',
            '&gt;',
            '&lt;',
            '&quot;',
            '&amp;'
        ]
    };

    $.fn.coolType = function (text, options) {
        var $this = this,
            settings = $.extend({}, defaults, options),
            $container = $('<span>');

        $container.appendTo($this);


        function expandChar(charIndex) {
            var char = text[charIndex];
            for (var expansionIndex in settings.expansions) {
                var expansion = settings.expansions[expansionIndex];
                if (expansion[0] === char) {
                    var textToCompare = text.substr(charIndex, expansion.length);
                    if (textToCompare === expansion)
                        return { char: expansion, charIndex: charIndex + (expansion.length - 1) };
                }
            }
            return { char: char, charIndex: charIndex };
        }

        function typeText() {
            if (settings.onBeforeType) settings.onBeforeType();
            var charIndex = 0;
            var intervalId = setInterval(function () {
                var expanded = expandChar(charIndex),
                    char = expanded.char;
                charIndex = expanded.charIndex;
                $container.append(char);
                charIndex++;
                if (charIndex === text.length) {
                    clearInterval(intervalId);
                    if (settings.onAfterType) settings.onAfterType();
                    if (settings.delayAfterType > 0) {
                        setTimeout(function () {
                            if (settings.onComplete) settings.onComplete();
                        }, settings.delayAfterType);
                    }
                    else {
                        if (settings.onComplete) settings.onComplete();
                    }
                }
            }, settings.typeSpeed);
        }

        if (settings.delayBeforeType > 0) {
            setTimeout(function () {
                typeText();
            }, settings.delayBeforeType);
        }
        else {
            typeText();
        }
    };
})(jQuery);
