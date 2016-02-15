'use strict';

angular.module('<%= moduleName %>')
    .run(Run);

function Run(routerHelper) {
    routerHelper.configureStates(get<%= capModuleName %>States(), '/<%= moduleName %>');
}

function get<%= capModuleName %>States() {
    return [
        {
            state: '<%= moduleName %>',
            config: {
                controller: <%= capModuleName %>Controller,
                templateUrl: 'js/<%= moduleName %>/<%= moduleName %>.html',
                url: '/<%= moduleName %>'
            }
        }
    ];
}