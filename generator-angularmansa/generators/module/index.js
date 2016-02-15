'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var underscoreString = require('underscore.string');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('modulename', {type: String, required: true});
        this.modulename = underscoreString.camelize(underscoreString.slugify(underscoreString.humanize(this.modulename)));
        this.modulePath = path.join('app','js');

    },
    welcome: function () {
        this.log(yosay(
            'Welcome to the ' + chalk.red('generator-angularmansa') + ' generator!'
        ));
        this.log(yosay(
            chalk.blue('Module Scaffolding is Being done ! Wait !! ')
        ));

    },

    writingModule: function () {
        this.fs.copyTpl(
            this.templatePath('../../templates/module.js'),
            this.destinationPath(path.join(this.modulePath, this.modulename , this.modulename +'.module.js')),
            {moduleName: this.modulename}
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/routes.js'),
            this.destinationPath(path.join(this.modulePath, this.modulename , this.modulename +'.routes.js')),
            {moduleName: this.modulename , capModuleName : underscoreString.capitalize(this.modulename)}
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/service.js'),
            this.destinationPath(path.join(this.modulePath, this.modulename , this.modulename +'.service.js')),
            {moduleName: this.modulename , capModuleName : underscoreString.capitalize(this.modulename)}
        );
        this.fs.copy(
            this.templatePath('../../templates/empty.html'),
            this.destinationPath(path.join(this.modulePath, this.modulename , this.modulename +'.html'))
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/controller.js'),
            this.destinationPath(path.join(this.modulePath, this.modulename , this.modulename +'.controller.js')),
            {moduleName: this.modulename , capModuleName : underscoreString.capitalize(this.modulename)}
        );
    },

    install: function () {
        this.installDependencies();
    },

    end: function () {
        this.log(yosay(
            chalk.green("Scaffolding done ! Cheers !! Don't forget to add files in app.js and index.html")
        ));

    }
});
