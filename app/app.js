require('./sass/index.scss');

require('angular').module(
    'myApp',
    [
        require('angular-ui-router'),
        require('angular-material'),
        require('./view1/view1'),
        require('./view2/view2'),
        require('./components/version/version')
    ])

    // App config
    .config(require('./config'))

    // App init
    .run(require('./run'));