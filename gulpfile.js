var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");//压缩js.
var concat = require("gulp-concat");//合并。
var cssmin =require("gulp-cssmin");
var imagemin = require("gulp-imagemin");
var babel = require("gulp-babel");


gulp.task("styles",function(){
   gulp.src("sass/*.scss").
    pipe(sass().on("error",sass.logError))
    .pipe(autoprefixer({
          browsers:["last 2 versions","android>=4.0"],
          cascade:false,
          remove:true
        }))
           .pipe(gulp.dest("css"))});
           
gulp.task("minjs",function(){
	gulp.src("js/verifyCode.js").pipe(babel()).pipe(uglify()).pipe(gulp.dest("jsmin"));
	
	
	
})

gulp.task("mincss",function(){
	gulp.src("css/*").pipe(cssmin()).pipe(gulp.dest("mincss"));
	
})
gulp.task("minimg",function(){
	gulp.src("img/*").pipe(imagemin()).pipe(gulp.dest("minimg"));
	
})

gulp.task("watch",function(){
     
      gulp.watch("sass/*.scss",["styles"]);
     
     });
     
gulp.task("default",["styles","watch","minjs","mincss","minimg"]);