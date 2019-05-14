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
            'uk': '<p>Вітаємо у Space Lab - гра, де ви маєте за допомогою коду запустити ракету на потрібну планету! Цікаво? А ви готові разом з нами використати всі свої знання з мови програмування Python? <br/>'+
                '<br/> Супер! Давай пригадаємо, а як зробити так щоб' +
                '<ul><li><code>вивести</code> запитання для користувача</li>' +
                '<li><code>ввести дані</code> і присвоїти їх у змінну</li>' +
                '<li>вивести цю змінну</li></ul> </p> ',
        },
        animation: 'printSimple',
    },
    {
        name: 'for-loop-simple',
        task: {
            'id-0': 'names = [\'Аня\', \'Вадим\', \'Тарас\']',
            'id-1': 'for name in names: ',
            'id-2': '   print(name)',
        },
        instructions: {
            'uk': '<p>А тепер уявімо, що у нас є список з усіма іменами космонавтів (Так, їх всього троє).  На черговому зібранні нашої команди вас попросили прочитати імена цих космонавтів. Як ж це можна було б запрограмувати?\n' +
                '<br/> <br/> P.S. Тут точно потрібно використати <code>цикл</code></p>'
        },
        animation: 'forLoopSimple',
        rockets: {[ROCKET_SIMPLE]: 'Аня', [ROCKET_PINK]: 'Вадим', [ROCKET_DARK]: 'Тарас'},
    },
    {
        name: 'foor-loop-advanged',
        task: {
            'id-0': 'for i in range(5, 8):',
            'id-1': '   print(i)',
            'id-2': 'print(\'Кінець програми!\')',
        },
        animation: 'forLoopAdvanced',
        instructions: {
            'uk': '<p>А тепер вам треба зробити так, щоб програма вивела числа від 5 до 8 , а потім сказала, що код закінчив своє виконання' +
                '<br/> <br/>Тут потрібно використати інший <code>цикл</code>, ніж той, який був в минулому завданні. </p>',
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
            'uk': '<p>Важливо, щоб код працював коректно , незалежно від введених даних. Уявімо, що нам потрібно запитати у космонавта його вік. І якщо вік введено неправильно, вивести повідомлення про це.<br/>' +
                '<br/><ul> <li>спочатку треба ввести вік і присвоїти його змінній</li>' +
                '<li>потім потрібно перевірити чи вік більший за нуль</li> </ul>' +
                '<br/><br/> P.S. А пам\'ятаєш,що таке галуження? </p>',
        },
        rockets: {[ROCKET_SIMPLE]: '', [ROCKET_PINK]: ''},
        animation: 'ifElse',
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
            'uk': '<p>А  тепер залишилось останнє найважче завдання. Воно схоже до попереднього, але тут є три гілки розвитку подій' +
                '<br/><ul> <li>спочатку треба ввести вік і присвоїти його змінній</li>' +
                '<li>потім потрібно перевірити кому належить цей вік:   Дитині, Підлітку чи Дорослому</li> </ul>' +
                '<br/><br/> P.S. А пам\'ятаєте, які ще є елементи галуження , крім if та else? </p>',
        },
        rockets: {[ROCKET_SIMPLE]: '', [ROCKET_PINK]: '', [ROCKET_DARK]: '',},
        animation: 'ifElse',
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
