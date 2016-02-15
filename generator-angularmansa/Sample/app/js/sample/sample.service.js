'use strict';
angular.module('sample')
    .factory('sample', sample)
    .run(connect);

function connect (sample) {
    sample.set('');
}

function sample() {

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