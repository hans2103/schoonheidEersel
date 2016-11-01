'use strict';

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img

module.exports = function (grunt) {
    // Show elapsed time after tasks run
    require('time-grunt')(grunt);
    // Load all Grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        yeoman: {
            app: 'app',
            dist: 'dist',
            url: 'http://eenpersoonsmaaltijd.nl',
            git: 'git@github.com:hans2103/schoonheidEersel.git',
            scripts: [
                '<%= yeoman.app %>/js/bootstrap.js',
                '<%= yeoman.app %>/js/owl.carousel.js',
                '<%= yeoman.app %>/js/jquery.magnific-popup.js',
                '<%= yeoman.app %>/js/svg-injector.js',
                '<%= yeoman.app %>/js/gmap3.js',
                //'bower_components/gmap3/dist/gmap3.js',
                '<%= yeoman.app %>/js/custom.js'
            ]
        },
        watch: {
            sass: {
                files: ['<%= yeoman.app %>/_scss/**/*.scss'],
                tasks: ['sass', 'postcss:server', 'penthouse']
            },
            postcss: {
                files: ['<%= yeoman.app %>/css/styles.css'],
                tasks: ['copy:stageCss', 'postcss:server']
            },
            jekyll: {
                files: ['<%= yeoman.app %>/**/*.{html,md,rb,svg,xml,yml}'],
                tasks: ['jekyll:server']
            }
        },
        browserSync: {
            server: {
                bsFiles: {
                    src: [
                        '.jekyll/**/*.html',
                        '.tmp/css/**/*.css',
                        '{.tmp,<%= yeoman.app %>}/js/**/*.js',
                        '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg}'
                    ]
                },
                options: {
                    server: {
                        baseDir: [
                            '.jekyll',
                            '.tmp',
                            '<%= yeoman.app %>'
                        ]
                    },
                    watchTask: true
                }
            },
            dist: {
                options: {
                    server: {
                        baseDir: '<%= yeoman.dist %>'
                    }
                }
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*',
                        '!<%= yeoman.dist %>/img/**', // don’t clean this directory because these files don’t get revved and I optimize by hand
                        '!<%= yeoman.dist %>/perf'
                    ]
                }]
            },
            server: [
                '.tmp',
                '.jekyll'
            ]
        },
        scsslint: {
            options: {
                bundleExec: true,
                config: '.scss-lint.yml',
                colorizeOutput: true,
                exclude: [
                    '<%= yeoman.app %>/_scss/vendor/_magnific-popup.scss',
                    '<%= yeoman.app %>/_scss/vendor/_owl-carousel.scss'
                ]
            },
            server: '<%= yeoman.app %>/_scss/**/*.scss'
        },
        sass: {
            options: {
                precision: 5,
                sourceMap: false
            },
            dist: {
                files: {
                    '.tmp/css/styles.css': '<%= yeoman.app %>/_scss/styles.scss'
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: 'last 2 versions, safari 6, ie 9, opera 12.1, ios 6, android 4'})
                ]
            },
            dist: {
                src: '.tmp/concat/css/styles.css',
                dest: '.tmp/styles.css'
            },
            server: {
                src: '.tmp/css/*.css',
            }
        },
        penthouse: {
            server: {
                outfile: '<%= yeoman.app %>/_includes/critical.css',
                css: '.tmp/css/styles.css',
                url: 'http://localhost:3000',
                width: 1280,
                height: 800
            }
        },
        csscomb: {
            dist: {
                files: {
                    '.tmp/concat/css/styles.css': '.tmp/concat/css/styles.css'
                }
            }
        },
        jekyll: {
            options: {
                bundleExec: true,
                config: '_config.yml,_config.build.yml',
                src: '<%= yeoman.app %>'
            },
            dist: {
                options: {
                    dest: '<%= yeoman.dist %>',
                }
            },
            server: {
                options: {
                    config: '_config.yml',
                    dest: '.jekyll',
                    incremental: true
                }
            },
            check: {
                options: {
                    doctor: true
                }
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= yeoman.dist %>'
            },
            html: '<%= yeoman.dist %>/index.html'
        },
        usemin: {
            options: {
                assetsDirs: '<%= yeoman.dist %>',
                blockReplacements: { // https://github.com/yeoman/grunt-usemin/issues/391
                    js: function (block) {
                        return '<script async src="' + block.dest + '"><\/script>';
                    }
                },
                patterns: {
                    html: [
                        [/<link[^\>]+href=['"]([^"']+)["']/gm, 'Update the link tags'],
                        [/loadCSS\(['"]([^"']+)['"]\)/gm, 'Replacing reference to CSS within loadCSS']
                    ]
                }
            },
            html: ['<%= yeoman.dist %>/**/*.html'],
            css: ['<%= yeoman.dist %>/css/**/*.css'],
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    keepClosingSlash: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['**/*.html', '!perf/**/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        // Usemin adds files to concat
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: '<%= yeoman.scripts %>',
                dest: '<%= yeoman.app %>/js/all.js'
            }
        },
        // Usemin adds files to uglify
        uglify: {
            generated: {
                files: [
                    {
                        dest: '<%= yeoman.app %>/js/all.min.js',
                        src: '<%= yeoman.app %>/js/all.js'
                    }
                ]
            }
        },
        // Usemin adds files to cssmin
        // https://github.com/jakubpawlowicz/clean-css
        cssmin: {
            options: {
                check: 'min',
                shorthandCompacting: false
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '**/*.svg',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        xmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: '**/*.xml',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    src: [
                        // Jekyll processes and moves HTML and text files.
                        // Usemin moves CSS and javascript inside of Usemin blocks.
                        // Copy moves asset files and directories.
                        'img/**/*',
                        // Like Jekyll, exclude files & folders prefixed with an underscore.
                        '!**/_*{,/**}',
                        // Explicitly add any files your site needs for distribution here.
                        'favicon*.{ico,png}'
                    ],
                    dest: '<%= yeoman.dist %>'
                }]
            },
            // Copy CSS into .tmp directory for Autoprefixer processing
            stageCss: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>/css',
                    src: '**/*.css',
                    dest: '.tmp/css'
                }]
            },
            stageLoadCSS: {
                files: {
                    '<%= yeoman.app %>/_includes/loadCSS.js': 'bower_components/loadCSS/loadCSS.js'
                }
            },
            stageOptimizedWebfontLoading: {
                files: {
                    '<%= yeoman.app %>/_includes/fontloader.js': 'bower_components/OptimizedWebfontLoading/build/fontloader.js'
                }
            }
        },
        filerev: {
            options: {
                length: 4
            },
            dist: {
                files: [{
                    src: [
                        '<%= yeoman.dist %>/js/**/*.js',
                        '<%= yeoman.dist %>/css/styles.css',
                        '<%= yeoman.dist %>/favicon*.png'
                    ]
                }]
            }
        },
        buildcontrol: {
            dist: {
                options: {
                    remote: '<%= yeoman.git %>',
                    branch: 'gh-pages',
                    commit: true,
                    push: true
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/**/*.js'
            ]
        },
        pagespeed: {
            options: {
                locale: 'en_GB',
                nokey: true,
                url: '<%= yeoman.url %>'
            },
            desktop: {
                options: {
                    strategy: 'desktop'
                }
            },
            mobile: {
                options: {
                    strategy: 'mobile'
                }
            }
        },
        phantomas: {
            site: {
                options: {
                    indexPath: '<%= yeoman.dist %>/perf/phantomas/',
                    options: {
                        'film-strip': false,
                        'no-externals': true,
                        'timeout': 60
                    },
                    url: '<%= yeoman.url %>',
                    buildUi: true
                }
            }
        },
        concurrent: {
            server: [
                'sass',
                'copy:stageCss',
                'jekyll:server'
            ],
            dist: [
                'sass',
                'copy:dist'
            ]
        }
    });

    // Define Tasks
    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'browserSync:dist']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'postcss:server',
            'browserSync:server',
            'watch'
        ]);
    });

    grunt.registerTask('stage', [
        'copy:stageLoadCSS',
        'copy:stageOptimizedWebfontLoading'
    ]);

    grunt.registerTask('test', [
        'jshint:test',
        'clean:server',
        'concurrent:server',
        'browserSync:server'
    ]);

    grunt.registerTask('check', [
        'clean:server',
        'jekyll:check',
        'scsslint',
        'jshint'
    ]);

    grunt.registerTask('perf', [
        'pagespeed',
        'phantomas'
    ]);

    grunt.registerTask('build', [
        'clean',
        'stage',
        'jekyll:dist',
        'concurrent:dist',
        'useminPrepare',
        'concat',
        'postcss:dist',
        'csscomb',
        'cssmin',
        'uglify',
        'svgmin',
        'filerev',
        'usemin',
        'htmlmin',
        'xmlmin'
    ]);

    grunt.registerTask('deploy', [
        //'perf',
        'buildcontrol'
    ]);

    grunt.registerTask('default', [
        'check',
        'build'
    ]);
};
