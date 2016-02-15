'use strict';

angular.module('sample')
    .run(Run);

function Run(routerHelper) {
    routerHelper.configureStates(getSampleStates(), '/sample');
}

function getSampleStates() {
    return [
        {
            state: 'sample',
            config: {
                controller: SampleController,
                templateUrl: 'js/sample/sample.html',
                url: '/sample'
            }
        }
    ];
}