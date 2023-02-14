const { src, dest, watch } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');

// Imagenes 
const webp = require('gulp-webp');

function css(done) {

    src('src/scss/**/*.scss') // Identificar el archivo SASS
        .pipe( plumber() )
        .pipe( sass() ) // Compilar
        .pipe(dest("build/css")); // Almacenarlo en el disco duro
 
    done(); // Callback que avisa a gulp cuando llegamos al final
}

function versionWebp( done ) {
    src('src/img/**/*.{png,jpg}');
    done();
}

function dev( done ) {
    watch('src/scss/**/*.scss', css);
    done();
}

exports.css = css;
exports.dev = dev;