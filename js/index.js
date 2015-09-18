// See https://github.com/thlorenz/brace

var brace = require('brace');
var braceEdit = brace.edit;

/**
 * Redifine the require function, allowing it to take a mode and theme.
 * From that, we can require the brace mode/theme before calling ace itself.
 */
brace.edit = function (element) {
    // We need to explicitly require them or they will not be bundled.
    require('brace/mode/groovy');
    require('brace/theme/eclipse');        
    
    var editor = braceEdit(element);        
    editor.getSession().setMode("ace/mode/groovy");
    editor.setTheme('ace/theme/eclipse');        
    
    return editor;
}

module.exports = brace;