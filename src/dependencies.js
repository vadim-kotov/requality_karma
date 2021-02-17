require('../../jquery/jquery.js');
require('../../jquery/jquery.actual.js');
require('../../ckeditor/ckeditor.js');
require('../../ckeditor/adapters/jquery.js');

var getExtraAttrsNames = function() { return "foo"; };
window.TP_ALLOWED = true;
window.COMMENT_ALLOWED = true;
var constructNodeChildren = [];

module.exports = {
    getExtraAttrsNames,
    constructNodeChildren
}