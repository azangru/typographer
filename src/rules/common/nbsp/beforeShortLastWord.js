Typograf.rule({
    title: 'Неразрывный пробел перед последним коротким словом в предложении',
    name: 'common/nbsp/beforeShortLastWord',
    sortIndex: 620,
    func: function(text, settings) {
        var len = settings.lengthLastWord,
            re = new RegExp(' ([\\w]{1,' + len + '})(\\.|\\?|:|!|,)', 'g');

        return text.replace(re, '\u00A0$1$2');
    },
    settings: {
        lengthLastWord: 3
    }
});