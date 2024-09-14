const mix = require('laravel-mix');
require('vuetifyjs-mix-extension')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
if (mix.inProduction()){
    mix.ts('resources/js/app.ts', 'public/js').vuetify('vuetify-loader')
        .sass('resources/sass/app.scss', 'public/css');
    mix.version();
} else {
    mix.webpackConfig({
        devtool : 'source-maps'
        })
        mix.ts('resources/js/app.ts', 'public/js').vuetify('vuetify-loader')
            .sourceMaps()
            .sass('resources/sass/app.scss', 'public/css'); 
    }
