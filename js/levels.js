var levels = [
  {
    name: 'justify-content 1',
    task:{
      'id-0' : 'const array = [-1, -2, 3, 4, 5, -6, 0]',
      'id-1': 'for(let i = 0; i < array.length; i++){',
      'id-2': 'if(array[i] > 0){',
      'id-3': 'print(array[i]);',
      'id-4' : '}}',
    },
    instructions: {
      'en': '<p>Welcome to Flexbox Froggy, a game where you help Froggy and friends by writing CSS code! Guide this frog to the lilypad on the right by using the <code>justify-content</code> property, which aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul><p>For example, <code>justify-content: flex-end;</code> will move the frog to the right. <img src="https://code.org/api/hour/begin_flexbox_froggy.png"></p>',
     'uk': '<p>Вітаємо у Flexbox Froggy - гра, де ви маєте допомогати жабеняті Фрогі та його друзям написанням CSS коду! Всади жабеня на лист латаття праворуч, за допомогою властивості <code>justify-content</code>, яка вирівнює елементи по горизонталі й набуває таких значень:</p><ul><li><code>flex-start</code>: Елементи вирівнюються по лівій стороні контейнера.</li><li><code>flex-end</code>: Елементи вирівнюються по правій стороні контейнера.</li><li><code>center</code>: Елементи вирівнюються по центру контейнера.</li><li><code>space-between</code>: Елементи буде зображено з рівними відступами поміж них.</li><li><code>space-around</code>: Елементи буде зображено з рівними відступами навколо них.</li></ul><p>Наприклад, <code>justify-content: flex-end;</code> пересуне жабеня праворуч.</p>',
     },
    board: 'g',
    style: {'justify-content': 'flex-end'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  },
  {
    name: 'justify-content 2',
    instructions: {
      'en': '<p>Use <code>justify-content</code> again to help these frogs get to their lilypads. Remember that this CSS property aligns items horizontally and accepts the following values:</p><ul><li><code>flex-start</code>: Items align to the left side of the container.</li><li><code>flex-end</code>: Items align to the right side of the container.</li><li><code>center</code>: Items align at the center of the container.</li><li><code>space-between</code>: Items display with equal spacing between them.</li><li><code>space-around</code>: Items display with equal spacing around them.</li></ul>',
     'uk': '<p>Скористайся <code>justify-content</code> ще раз, та допоможи жабенятам потрапити на свої листи латаття. Памʼятай, що ця CSS-властивість набуває таких значень:</p><ul><li><code>flex-start</code>: Елементи вирівнюються по лівій стороні контейнера.</li><li><code>flex-end</code>: Елементи вирівнюються по правій стороні контейнера.</li><li><code>center</code>: Елементи вирівнюються по центру контейнера.</li><li><code>space-between</code>: Елементи буде зображено з рівними відступами поміж них.</li><li><code>space-around</code>: Елементи буде зображено з рівними відступами навколо них.</li></ul>',
      },
    task:{
      'id-0' : 'const array = [-1, -2, 3, 4, 5, -6, 0]',
      'id-1': 'for(let i = 0; i < array.length; i++){',
      'id-2': 'if(array[i] > 0){',
      'id-3': 'print(array[i]);',
      'id-4': '}else{',
      'id-5': 'print(\'lower than 0\');',
      'id-6' : '}}',
    },
    board: 'gy',
    style: {'justify-content': 'center'},
    before: "#pond {\n  display: flex;\n",
    after: "}"
  }
];

var levelWin = {
  name: 'win',
  instructions: {
    'en': '<p>You win! Thanks to your mastery of flexbox, you were able to help all of the frogs to their lilypads. Just look how hoppy they are!</p><p>If you found this ribbeting, be sure to visit <a href="http://cssgridgarden.com/">Grid Garden</a> to learn about another powerful new feature of CSS layout. You can also check out my other projects on <a href="http://thomaspark.co">my blog</a> or <a href="http://twitter.com/thomashpark">Twitter</a>.</p><p>Want to keep learning while supporting Flexbox Froggy? Try out the topnotch web design and coding courses offered by <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy">Treehouse</a>. And be sure to share Flexbox Froggy with your friends!</p>',
   'uk': '<p>Ти виграв! Завдяки твоїй майстерності з flexbox, ти зміг допомогти всім жабенятам дістатися до їх листів латаття. Лиш подивись які вони щасливі!</p><p>Якщо ця гра тобі сподобалась, переглянь мої інші проекти у <a href="http://thomaspark.co">блозі</a> або <a href="http://twitter.com/thomashpark">Твітері</a>, й не забудь поділитися грою Flexbox Froggy зі своїми друзями!</p>',
    },
  board: 'gyrgyrgyrgyrgyrgyrgyrgyrg',
  classes: {'#pond, #background': 'wrap'},
  task: {},
  before: "#pond {\n  display: flex;\n",
  after: "}"
};
