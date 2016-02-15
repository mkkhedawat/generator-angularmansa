'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var underscoreString = require('underscore.string');
var mkdirp = require('mkdirp');

module.exports = yeoman.generators.Base.extend({
    constructor: function () {
        yeoman.generators.Base.apply(this, arguments);

        this.argument('appname', {type: String, required: true});
        //this.appname = this.appname || path.basename(process.cwd());
        this.appname = underscoreString.camelize(underscoreString.slugify(underscoreString.humanize(this.appname)));

        this.scriptAppName = this.appname + 'App';

        this.appPath = 'app';
        this.scriptPath = 'js';

    },
    welcome: function () {
        this.log(yosay(
            'Welcome to the ' + chalk.red('generator-angularmansa') + ' generator!'
        ));
        this.log(yosay(
            chalk.blue('Scaffolding is Being done ! Wait !! ')
        ));

    },

    writingPackage: function () {
        this.fs.copyTpl(
            this.templatePath('../../templates/package.json'),
            this.destinationPath('package.json'),
            {appname: this.appname}
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/bower.json'),
            this.destinationPath('bower.json'),
            {appname: this.appname}
        );

        this.fs.copy(
            this.templatePath('../../templates/Readme.md'),
            this.destinationPath('Readme.md')
        );

        this.fs.copy(
            this.templatePath('../../templates/Gruntfile.js'),
            this.destinationPath('Gruntfile.js')
        );
        this.fs.copy(
            this.templatePath('../../templates/karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
        this.fs.copy(
            this.templatePath('../../templates/gitignore.txt'),
            this.destinationPath('.gitignore')
        );
    },

    writingApp: function () {
        this.fs.copyTpl(
            this.templatePath('../../templates/app.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'app.js')),
            {scriptAppName: this.scriptAppName}
        );
        this.fs.copy(
            this.templatePath('../../templates/main.css'),
            this.destinationPath(path.join(this.appPath, 'styles/main.css'))
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/index.html'),
            this.destinationPath(path.join(this.appPath, 'index.html')),
            {scriptAppName: this.scriptAppName, appname: this.appname}
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/module.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'router/router.module.js')),
            {moduleName: 'router'}
        );
        this.fs.copy(
            this.templatePath('../../templates/routerhelper.service.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'router/routerhelper.service.js'))
        );
        this.fs.copyTpl(
            this.templatePath('../../templates/module.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'common/common.module.js')),
            {moduleName: 'common'}
        );
        this.fs.copy(
            this.templatePath('../../templates/constants.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'common/constants.js'))
        );
        this.fs.copy(
            this.templatePath('../../templates/values.js'),
            this.destinationPath(path.join(this.appPath, this.scriptPath, 'common/values.js'))
        );
    },

    install: function () {
        this.installDependencies();
    },

    end: function () {
        this.log(yosay(
            chalk.green('Scaffolding done ! Cheers !! ')
        ));

    }
});
