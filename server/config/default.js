module.exports = {
  client: {
    bower: {
      css: [
        'bower_components/materialize/dist/css/materialize.css',
      ],
      js: [
        'bower_components/angular/angular.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/angular-translate/angular-translate.js',
        'bower_components/materialize/dist/js/materialize.js'
      ]
    },
    css: [
      'assets/css/styles.css'
    ],
    sass: [
      // 'client/assets/scss/*.scss'
    ],
    js: [
      'app/app.js',
      'app/routes/index.route.js',
      'app/routes/user.route.js',
      'app/controllers/index.controller.js',
      'app/controllers/users.controller.js',
      'assets/js/script.js',
      // 'client/app/**/*.js'
    ],
    views: ['client/app/views/**/*.jade'],
  },
  server: {
    gulpConfig: 'gulpfile.js',
    allJS: ['server.js', 'server/api/*.js', 'server/api/**/*.js'],
    models: 'server/api/models/**/*.js',
    routes: 'server/api/routes/**/*.js',
    sockets: 'server/api/sockets/**/*.js',
    permission: 'server/api/permission/*.js',
  }
};