var ROCKET_SIMPLE = 'rocket'
var ROCKET_PINK = 'rocket-pink'
var ROCKET_DARK = 'rocket-dark'

var levels = [
    {
        name: 'print-simple',
        task: {
            'id-0': 'print(\'Введи своє ім\'я: \')',
            'id-1': 'name = input()',
            'id-2': 'print(\'Привіт, \' + name)',
        },
        instructions: {
            'uk': '<p>Привіт! А чи зможеш ти зробити так, щоб програма запитала у тебе твоє ім\'я?  Потім приствоїла це в змінну під назвою name . А потім вивела введені дані?</p>',
        },
        animation: 'forLoopAdvanced',
    },
    {
        name: 'for-loop-simple',
        task: {
            'id-0': 'names = [\'Аня\', \'Вадим\', \'Тарас\', \'Оля\']',
            'id-1': 'for name in names: ',
            'id-2': '   print(name)',
        },
        instructions: {
            'uk': '<p>Привіт! А чи зможеш ти зробити так, щоб програма вивела кожне ім\'я зі списку?</p>'
        },
        rockets: [ROCKET_SIMPLE, ROCKET_PINK, ROCKET_DARK],
    },
    {
        name: 'foor-loop-advanged',
        task: {
            'id-0': 'for i in range(5, 8):',
            'id-1': '   print(i)',
            'id-2': 'print(\'Кінець програми!\')',
        },
        instructions: {
            'uk': '<p>Привіт! А чи зможеш ти зробити так, щоб програма вивела числа від 5 до 8 , а потім сказала, що програма закінчила виконання?</p>',
        },
    },
    {
        name: 'if-else-1',
        task: {
            'id-0': 'my_age = int(input())',
            'id-1': 'if my_age > 0:',
            'id-2': '   print(\'Вік вказано правильно \')',
            'id-3': 'else:',
            'id-4': '   print(\'Вік вказано не правильно \')',
        },
        instructions: {
            'uk': '<p>Привіт! А чи зможеш ти зробити так, щоб програма запитала у тебе твій вік?  А потім перевірила, чи є число додатним чи від\'ємним</p>',
        },
    },
    {
        name: 'if-else-2',
        task: {
            'id-0': 'my_age = int(input())',
            'id-1': 'if my_age < 10:',
            'id-2': '   print(\'Дитина\')',
            'id-3': 'elif  10 <= my_age < 18:',
            'id-4': '   print(\'Підліток\')',
            'id-5': 'else:',
            'id-6': '   print(\'Дорослий \')',
        },
        instructions: {
            'uk': '<p>Привіт! А чи зможеш ти зробити так, щоб програма запитала у тебе твій вік? А потім перевірила, кому відповідає твій вік : Дитині, підлітку чи дорослому.</p>',
        },
    },
];

var levelWin = {
    name: 'win',
    instructions: {
        'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
        'uk': '<p>Ти виграв! Завдяки твоїй майстерності з flexbox, ти зміг допомогти всім жабенятам дістатися до їх листів латаття. Лиш подивись які вони щасливі!</p><p>Якщо ця гра тобі сподобалась, переглянь мої інші проекти у <a href="http://thomaspark.co">блозі</a> або <a href="http://twitter.com/thomashpark">Твітері</a>, й не забудь поділитися грою Flexbox Froggy зі своїми друзями!</p>',
    },
    task: {},
};
