var game = {
    colorblind: (localStorage.colorblind && JSON.parse(localStorage.colorblind)) || 'false',
    language: window.location.hash.substring(1) || 'uk',
    difficulty: 'easy',
    level: parseInt(localStorage.level, 10) || 0,
    answers: (localStorage.answers && JSON.parse(localStorage.answers)) || {},
    solved: (localStorage.solved && JSON.parse(localStorage.solved)) || [],
    user: localStorage.user || '',
    changed: false,

    start: function () {
        game.language = 'uk';
        window.location.hash = 'uk';

        game.translate();
        $('#level-counter .total').text(levels.length);
        $('#editor').show();
        $('#share').hide();
        $('#language').val(game.language);
        $('input[value="' + game.colorblind + '"]', '#colorblind').prop('checked', true);

        if (!localStorage.user) {
            game.user = '' + (new Date()).getTime() + Math.random().toString(36).slice(1);
            localStorage.setItem('user', game.user);
        }

        this.setHandlers();
        this.loadMenu();
        game.loadLevel(levels[game.level]);
    },

    setHandlers: function () {
        $('#next').on('click', function () {
            $('#code').focus();

            if ($(this).hasClass('disabled')) {
                if (!$('.frog').hasClass('animated')) {
                    console.log('try again')
                    game.tryagain();
                }

                return;
            }

            //todo: hz $('.frog').addClass('animated bounceOutUp');
            $('.arrow, #next').addClass('disabled');

            setTimeout(function () {
                console.log(game.level, levels.length - 1)
                if (game.level >= levels.length - 1) {
                    game.win();
                } else {
                    game.next();
                }
            }, 2000);
        });


        $('#editor').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass();
        });

        $('#labelReset').on('click', function () {
            var warningReset = messages.warningReset[game.language] || messages.warningReset.en;
            var r = confirm(warningReset);

            if (r) {
                game.level = 0;
                game.answers = {};
                game.solved = [];
                game.loadLevel(levels[0]);

                $('.level-marker').removeClass('solved');
            }
        });

        $('#labelSettings').on('click', function () {
            $('#levelsWrapper').hide();
            $('#settings .tooltip').toggle();
        })

        $('body').on('click', function () {
            $('.tooltip').hide();
        });

        $('.tooltip, .toggle, #level-indicator').on('click', function (e) {
            e.stopPropagation();
        });

        $(window).on('beforeunload', function () {
            game.saveAnswer();
            localStorage.setItem('level', game.level);
            localStorage.setItem('answers', JSON.stringify(game.answers));
            localStorage.setItem('solved', JSON.stringify(game.solved));
        }).on('hashchange', function () {
            game.language = window.location.hash.substring(1) || 'uk';
            game.translate();

            if (game.language === 'uk') {
                history.replaceState({}, document.title, './');
            }
        });
    },

    prev: function () {
        this.level--;

        var levelData = levels[this.level];
        this.loadLevel(levelData);
    },

    next: function () {
        console.log('next')
        if (this.difficulty === "hard") {
            this.level = Math.floor(Math.random() * levels.length)
        } else {
            this.level++
        }

        var levelData = levels[this.level];
        this.loadLevel(levelData);
    },

    loadMenu: function () {
        levels.forEach(function (level, i) {
            var levelMarker = $('<span/>').addClass('level-marker').attr('data-level', i).text(i + 1);

            if ($.inArray(level.name, game.solved) !== -1) {
                levelMarker.addClass('solved');
            }

            levelMarker.appendTo('#levels');
        });

        $('.level-marker').on('click', function () {
            game.saveAnswer();

            var level = $(this).attr('data-level');
            game.level = parseInt(level, 10);
            game.loadLevel(levels[level]);
        });

        $('#level-indicator').on('click', function () {
            $('#settings .tooltip').hide();
            $('#levelsWrapper').toggle();
        });

        $('.arrow.left').on('click', function () {
            if ($(this).hasClass('disabled')) {
                return;
            }

            game.saveAnswer();
            game.prev();
        });

        $('.arrow.right').on('click', function () {
            if ($(this).hasClass('disabled')) {
                return;
            }

            game.saveAnswer();
            game.next();
        });
    },

    shuffle: function (a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    },

    loadLevel: function (level) {
        $('#editor').show();
        $('#share').hide();
        $('#levelsWrapper').hide();
        $('.level-marker').removeClass('current').eq(this.level).addClass('current');
        $('#level-counter .current').text(this.level + 1);
        $('#next').addClass('disabled');
        $('#line-numbers').empty();

        for (let i = 1; i < Object.keys(level.task).length + 3; i++) {
            $('#line-numbers').append(
                $('<span>' + i + '</span>'),
                $('<br/>')
            )
        }
        $('#sortable').empty()
        const shuffledArr = game.shuffle(Object.keys(level.task))
        for (let i = 0; i < shuffledArr.length; i++) {
            const newLi = document.createElement("li");
            $(newLi).attr('id', shuffledArr[i]);
            $(newLi).attr('class', 'ui-state-default');
            console.log(level.task[shuffledArr[i]])
            $(newLi).text(level.task[shuffledArr[i]]);
            $('#sortable').append(newLi);
        }

        var instructions = level.instructions[game.language] || level.instructions.uk;
        $('#instructions').html(instructions);

        $('.arrow.disabled').removeClass('disabled');

        if (this.level === 0) {
            $('.arrow.left').addClass('disabled');
        }

        if (this.level === levels.length - 1) {
            $('.arrow.right').addClass('disabled');
        }

        var answer = game.answers[level.name];
        $('#code').val(answer).focus();

        this.loadDocs();

        $('#view').empty();
        const rocket = $('<div/>').addClass('rocket');
        $('<div/>').addClass('bg animated pulse infinite').attr('id', 'rocket').appendTo(rocket);
        console.log(rocket)
        $('#view').append(rocket);

        var classes = level.classes;

        if (classes) {
            for (var rule in classes) {
                $(rule).addClass(classes[rule]);
            }
        }

        game.changed = false;
        game.check();
    },

    loadDocs: function () {
        $('#instructions code').each(function () {
            var code = $(this);
            var text = code.text();

            if (text in docs) {
                code.addClass('help');
                code.on('mouseenter', function (e) {
                    if ($('#instructions .tooltip').length === 0) {
                        var html = docs[text][game.language] || docs[text].en;
                        var tooltipX = code.offset().left;
                        var tooltipY = code.offset().top + code.height() + 13;
                        $('<div class="tooltip"></div>').html(html).css({
                            top: tooltipY,
                            left: tooltipX
                        }).appendTo($('#instructions'));
                    }
                }).on('mouseleave', function () {
                    $('#instructions .tooltip').remove();
                });
            }
        });
    },


    check: function () {
        console.log('game check', game.level)
        const sortedIDs = $("#sortable").sortable("toArray");
        const level = levels[game.level];
        let correct = true;
        const answers = Object.keys(level.task);
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] !== sortedIDs[i]) {
                correct = false
            }
        }


        if (correct) {
            $("#form1").append(
                $("<iframe/>", {
                    src: "https://docs.google.com/forms/d/e/1FAIpQLScnar6J4g18NZTpTbtM7_nBvNsndHDD6u9ZwCGIEhAU4QAqCg/viewform?embedded=true",
                    width: "640",
                    height: "1983",
                    frameborder: "0",
                    marginheight: "0",
                    marginwidth: "0"
                }));
            $('#rocket').addClass('tada-success')
            const planets = $('<div/>').addClass('planets');
            $('<div/>').addClass('bg animated pulse infinite').appendTo(planets);
            $('#view').append(planets);

            if ($.inArray(level.name, game.solved) === -1) {
                game.solved.push(level.name);
            }

            $('[data-level=' + game.level + ']').addClass('solved');
            $('#next').removeClass('disabled');
        } else {

            $('#next').addClass('disabled');
        }
    },

    saveAnswer: function () {
        var level = levels[this.level];
        game.answers[level.name] = $('#code').val();
    },

    tryagain: function () {
        $('#editor').addClass('animated shake');
    },

    win: function () {
        console.log('WIN!')
        var solution = $('#code').val();

        this.loadLevel(levelWin);

        $('#editor').hide();
        $('#code').val(solution);
        $('#share').show();
        $('.frog .bg').removeClass('pulse').addClass('bounce');
    },

    transform: function () {
        var scale = 1 + ((Math.random() / 5) - 0.2);
        var rotate = 360 * Math.random();

        return {'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg)'};
    },

    translate: function () {
        document.title = messages.title[game.language] || messages.title.en;
        $('html').attr('lang', game.language);

        var level = levels[game.level];
        var instructions = level.instructions[game.language] || level.instructions.en;
        $('#instructions').html(instructions);
        game.loadDocs();

        $('.translate').each(function () {
            var label = $(this).attr('id');
            if (messages[label]) {
                var text = messages[label][game.language] || messages[label].en;
            }

            $('#' + label).text(text);
        });
    },

    debounce: function (func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
};

$(document).ready(function () {
    game.start();
});
