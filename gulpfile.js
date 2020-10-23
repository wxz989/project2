//一、导入模块
let gulp = require('gulp');
let jsmin = require('gulp-uglify');
let sass = require('gulp-sass');
let cssmin = require('gulp-cssnano');
let imgmin = require('gulp-imagemin');
let rename = require('gulp-rename');
let babel = require('gulp-babel');


//二、发布任务
//js
function fnJS(){
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(jsmin())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/js'));
}
//插件
function fnCopyLib(){
    return gulp.src('./src/lib/*.js')
        .pipe(gulp.dest('./dist/js'));
}
//css
function fnCSS(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle : 'expanded'}))
        // .pipe(cssmin())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}

//images
function fnIMG(){
    return gulp.src('./src/images/*')
        .pipe(imgmin())
        .pipe(gulp.dest('./dist/images'));
}

//复制页面
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));
}
function fnCopyPages(){
    return gulp.src('./src/pages/*.html')
        .pipe(gulp.dest('./dist/pages'));
}
function fnCopyJson(){
    return gulp.src('./src/json/*.json')
        .pipe(gulp.dest('./dist/json'));
}
//监听任务
function fnWatch(){
    gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnCSS);
    gulp.watch('./src/images/*',fnIMG);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/pages/*.html',fnCopyPages);
    gulp.watch('./src/lib/*.js',fnCopyLib);
    gulp.watch('./src/json/*.json',fnCopyJson);
}


//导出任务
exports.js = fnJS;
exports.css = fnCSS;
exports.img = fnIMG;
exports.copyIndex = fnCopyIndex;
exports.copyPages = fnCopyPages;
exports.copyLib = fnCopyLib;
exports.copyJson = fnCopyJson;
exports.default = fnWatch;