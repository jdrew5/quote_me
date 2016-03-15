module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            client: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: 'client/scripts/controllers/*.js',
                dest: 'server/public/assets/scripts/controllers/controllers.min.js'
            },
            factories: {
                src: 'client/scripts/factories/*.js',
                dest: "server/public/assets/scripts/factories/factories.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map",
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"
                ],
                "dest": "server/public/vendors/"
            },
            angularUiGrid: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-ui-grid/ui-grid.min.js",
                    "angular-ui-grid/ui-grid.min.css"
                ],
                "dest": "server/public/vendors/"
            },
            angularUiBootstrap: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-ui-bootstrap/ui-bootstrap.min.js",
                    "angular-ui-bootstrap/ui-bootstrap-tpls.min.js"
                ],
                "dest": "server/public/vendors/"
            },
            bootstrap: {
                expand: true,
                cwd: 'node_modules/bootstrap/dist/css',
                src: [
                    "bootstrap.min.css",
                    "bootstrap.min.css.map"
                ],
                "dest": "server/public/vendors/bootstrap"
            },
            bootstrapFonts: {
                expand: true,
                cwd: 'node_modules/bootstrap/fonts',
                src: [
                    "glyphicons-halflings-regular.woff2",
                    "glyphicons-halflings-regular.woff",
                    "glyphicons-halflings-regular.ttf"
                ],
                "dest": "server/public/vendors/fonts"
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },
            htmlLogin: {
                expand: true,
                cwd: "client",
                src: "views/login.html",
                dest: "server/public/assets/"
            },
            htmlRoutes:{
                expand: true,
                cwd: "client/views/routes/",
                src: [
                    "main.html",
                    "maintenance.html"
                ],
                dest: "server/public/assets/views/routes/"
            },
            htmlTemplates: {
                expand: true,
                cwd: "client/views/templates",
                src : "*.html",
                dest: "server/public/assets/views/templates/"
            },
            style: {
                expand: true,
                cwd: "client",
                src: 'styles/style.css',
                dest: 'server/public/assets/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
