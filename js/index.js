// See https://github.com/thlorenz/brace

var brace = require('brace');
var braceEdit = brace.edit;

/**
 * Redifine the require function, allowing it to take a mode and theme.
 * From that, we can require the brace mode/theme before calling ace itself.
 */
brace.edit = function (element, mode, theme) {
    if (mode) {
        require('brace/mode/' + mode);
    }
    if (theme) {
        require('brace/theme/' + theme);        
    }

    var editor = braceEdit(element);        
    if (mode) {
        editor.getSession().setMode("ace/mode/" + mode);
    }
    if (theme) {
        editor.setTheme('ace/theme/' + theme);        
    }
    
    return editor;
}

module.exports = brace;