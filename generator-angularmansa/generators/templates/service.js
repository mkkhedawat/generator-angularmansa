'use strict';
angular.module('<%=moduleName%>')
    .factory('<%=moduleName%>', <%=moduleName%>)
    .run(connect);

function connect (<%=moduleName%>) {
    <%=moduleName%>.set('');
}

function <%=moduleName%>() {

    var count = 2;
    var name = "Manish Kumar Khedawat";

    var service = {
        'get': get,
        'set': set,
    };
    return service;

    function get() {
        return name;
    }

    function set(item) {
        name = item;
    }

}