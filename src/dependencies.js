require('../../jquery/jquery.js');
require('../../jquery/jquery.actual.js');
require('../../ckeditor/ckeditor.js');
require('../../ckeditor/adapters/jquery.js');


var getExtraAttrsNames = function() { return "foo"; };
window.TP_ALLOWED = true;
window.COMMENT_ALLOWED = true;
var constructNodeChildren = [];

var loadNodeTreeByUUID = function(uuid) { 
    var elems = {
        '7547c386-6c11-43ce-843f-42a39642cd1e': '{ "attributes": {"_type": { "key": "_type", "type": "STRING", "value": "Requirement" }}, "children": [ "648c2725-4db2-4ad1-8254-aaf4d1aa67fa", "f6c854e9-9058-4b36-a6dc-461b059969cf", "e23c5275-46c7-4e6f-8669-ee6d36f4003f", "450d5815-da17-404d-af93-0e75976ef961" ], "id": "Requirements", "uuid": "7547c386-6c11-43ce-843f-42a39642cd1e" }',
    };
    let result = uuid in elems ? elems[uuid] : null;
    return result;
};

module.exports = {
    getExtraAttrsNames,
    constructNodeChildren,
    loadNodeTreeByUUID
}