// ################################ 'use strict'; is bad for this code..... #############################################

/**
 * Bubble Breaker
 * A Javascript Clone of the Windows Mobile Evergreen
 * (To stop my Wife playing it on my Phone ;-) )
 * @requires YUI 2.4.1
 * http://developer.yahoo.com/yui/
 *
 * http://blog.ginader.de/dev/bubble-breaker/index.php
 *
 * Copyright (c) 2008
 * Dirk Ginader (ginader.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0
 */

//NOTE; Constructor

YAHOO.namespace('GINADER.BubbleBreaker');
YAHOO.GINADER.BubbleBreaker = function (config) {
  //NOTE: function expression , created bubblebreaker object?
  this.config = config; // TODO:this is  a global object?? because this is a normal function without method or object.
  this.moduleObj = null;
  this.tiles = [];
  this.activeNeighbours = [];
  this.moduleObj = this.moduleObj = YAHOO.util.Dom.get(this.config.moduleId);
  this.running = false;
  this.onBubbleclicked = new YAHOO.util.CustomEvent( // NOTE:this is a function call (new keyword)
    'onBubbleclicked',
    this,
    true
  );
  this.onBubbleKilled = new YAHOO.util.CustomEvent(
    'onBubbleKilled',
    this,
    true
  );
  this.onInit = new YAHOO.util.CustomEvent('onInit', this, true); //TODO: what is this exactly?
  this.onFinish = new YAHOO.util.CustomEvent('onFinish', this, true);
  this.onEpicWin = new YAHOO.util.CustomEvent('onEpicWin', this, true);
  this.onBubbleclicked.subscribe(this.onclick);
  return this;
};
YAHOO.GINADER.BubbleBreaker.prototype = {
  init: function () {
    //NOTE: These are methods in green...
    this.setup();
    this.randomizeBubbles(); //NOTE: this points to the object prototype.
    this.score = 0;
    this.running = true;
    this.onInit.fire();
  },
  setup: function () {
    var that = this; //NOTE: this is like self variable to access object in a function call
    var markup = '<div class="board">';
    for (var i = 0; i < this.config.size.x; i++) {
      markup += '<div class="col x' + i + '">';
      for (var j = 0; j < this.config.size.y; j++) {
        markup += '<div class="bubble y' + j + '"></div>';
      }
      markup += '</div>';
    }
    markup += '</div>';
    markup += '<div class="points">0</div>';
    markup += '<div class="score">0</div>';
    markup +=
      '<div class="initiator"><a href="#">' +
      this.config.initiateText +
      '</a></div>';
    this.moduleObj.innerHTML = markup;
    this.pointsDisplay = YAHOO.util.Dom.getElementsByClassName(
      'points',
      null,
      this.moduleObj
    )[0];
    this.scoreDisplay = YAHOO.util.Dom.getElementsByClassName(
      'score',
      null,
      this.moduleObj
    )[0];
    this.initiator = YAHOO.util.Dom.getElementsByClassName(
      'initiator',
      null,
      this.moduleObj
    )[0].getElementsByTagName('a')[0];
    this.initiator.onclick = function () {
      that.init();
    }; //NOTE: change it to arrow function to solve "that"..
    for (var x = 0; x < this.config.size.x; x++) {
      this.tiles[x] = [];
      var col = YAHOO.util.Dom.getElementsByClassName(
        'x' + x,
        null,
        this.moduleObj
      )[0];
      for (var y = 0; y < this.config.size.y; y++) {
        var el = YAHOO.util.Dom.getElementsByClassName('y' + y, null, col)[0];
        //NOTE;added
        //        console.log(el);
        el.onclick = function () {
          that.onclick(this);
        }; //NOTE: change it to arrow function to solve "that"..
        this.tiles[x][y] = el;
        el.prop = {
          x: x,
          y: y,
        };
      }
    }
  },
  randomizeBubbles: function () {
    for (var x = 0; x < this.config.size.x; x++) {
      for (var y = 0; y < this.config.size.y; y++) {
        var el = this.tiles[x][y];
        //NOTE: added
        //console.log(el.prop);
        //
        var type = this.getRandomType();
        YAHOO.util.Dom.addClass(el, type);
        el.prop.type = type;
      }
    }
    // NOTE: added
    //    console.log(this);
  },
  onclick: function (el) {
    if (!this.running) {
      return;
    }
    if (el.prop.type) {
      if (YAHOO.util.Dom.hasClass(el, 'active')) {
        this.onBubbleKilled.fire();
        this.killNeighbours(el, el.prop.type);
      } else if (el.prop) {
        this.onBubbleclicked.fire();
        this.uncheckNeighbours();
        this.checkNeighbours(el, el.prop.type);
        //NOTE: added
        //console.log(arguments);
        //
      }
    }
    //    console.log(this);
  },
  updatePointsDisplay: function () {
    var points =
      this.activeNeighbours.length * (this.activeNeighbours.length - 1);
    this.pointsDisplay.innerHTML = points;
    var topLeft = this.getTopLeftActiveNeighbour();
    YAHOO.util.Dom.addClass(this.pointsDisplay, 'active');
    var posMod = YAHOO.util.Dom.getXY(this.moduleObj);
    var posTopLeft = YAHOO.util.Dom.getXY(topLeft);
    YAHOO.util.Dom.setStyle(
      this.pointsDisplay,
      'left',
      posTopLeft[0] - posMod[0] + 'px'
    );
    YAHOO.util.Dom.setStyle(
      this.pointsDisplay,
      'top',
      posTopLeft[1] - posMod[1] + 'px'
    );
  },
  hidePointsDisplay: function () {
    YAHOO.util.Dom.removeClass(this.pointsDisplay, 'active');
  },
  checkNeighbours: function (el, type) {
    this.activeNeighbours[this.activeNeighbours.length] = el;
    YAHOO.util.Dom.addClass(el, 'active');
    var hasNeighbours = false;
    if (
      this.tiles[el.prop.x] &&
      this.tiles[el.prop.x][el.prop.y - 1] &&
      type == this.tiles[el.prop.x][el.prop.y - 1].prop.type
    ) {
      // check above
      YAHOO.util.Dom.addClass(el, 'hasActiveNeighbourTop');
      if (
        !YAHOO.util.Dom.hasClass(this.tiles[el.prop.x][el.prop.y - 1], 'active')
      ) {
        this.checkNeighbours(this.tiles[el.prop.x][el.prop.y - 1], type);
        hasNeighbours = true;
      }
    }
    if (
      this.tiles[el.prop.x + 1] &&
      this.tiles[el.prop.x + 1][el.prop.y] &&
      type == this.tiles[el.prop.x + 1][el.prop.y].prop.type
    ) {
      // check right
      YAHOO.util.Dom.addClass(el, 'hasActiveNeighbourRight');
      if (
        !YAHOO.util.Dom.hasClass(this.tiles[el.prop.x + 1][el.prop.y], 'active')
      ) {
        this.checkNeighbours(this.tiles[el.prop.x + 1][el.prop.y], type);
        hasNeighbours = true;
      }
    }
    if (
      this.tiles[el.prop.x] &&
      this.tiles[el.prop.x][el.prop.y + 1] &&
      type == this.tiles[el.prop.x][el.prop.y + 1].prop.type
    ) {
      // check below
      YAHOO.util.Dom.addClass(el, 'hasActiveNeighbourBottom');
      if (
        !YAHOO.util.Dom.hasClass(this.tiles[el.prop.x][el.prop.y + 1], 'active')
      ) {
        this.checkNeighbours(this.tiles[el.prop.x][el.prop.y + 1], type);
        hasNeighbours = true;
      }
    }
    if (
      this.tiles[el.prop.x - 1] &&
      this.tiles[el.prop.x - 1][el.prop.y] &&
      type == this.tiles[el.prop.x - 1][el.prop.y].prop.type
    ) {
      // check left
      YAHOO.util.Dom.addClass(el, 'hasActiveNeighbourLeft');
      if (
        !YAHOO.util.Dom.hasClass(this.tiles[el.prop.x - 1][el.prop.y], 'active')
      ) {
        this.checkNeighbours(this.tiles[el.prop.x - 1][el.prop.y], type);
        hasNeighbours = true;
      }
    }
    if (!hasNeighbours && this.activeNeighbours.length < 2) {
      this.removeActiveClasses(el);
      this.activeNeighbours = [];
    } else {
      this.updatePointsDisplay();
    }
  },
  uncheckNeighbours: function () {
    for (var l = this.activeNeighbours.length - 1; l >= 0; l--) {
      this.removeActiveClasses(this.activeNeighbours[l]);
      this.activeNeighbours.splice(l, 1);
    }
    this.hidePointsDisplay();
  },
  killNeighbours: function () {
    this.updateScore();
    var n = this.activeNeighbours;
    for (var l = n.length - 1; l >= 0; l--) {
      var el = n[l];
      this.removeActiveClasses(el);
      YAHOO.util.Dom.removeClass(el, el.prop.type);
      el.prop.type = '';
      this.activeNeighbours.splice(l, 1);
    }
    this.updateTiles();
    this.updateTiles();
    this.hidePointsDisplay();
  },
  areThereAnymoreNeighboursAvailable: function () {
    for (var x = this.tiles.length - 1; x >= 0; x--) {
      for (var y = this.tiles[x].length - 1; y >= 0; y--) {
        var hasNeighbourRight =
          this.tiles[x + 1] &&
          this.tiles[x][y].prop.type &&
          this.tiles[x][y].prop.type == this.tiles[x + 1][y].prop.type;
        var hasNeighbourBottom =
          this.tiles[x][y + 1] &&
          this.tiles[x][y].prop.type &&
          this.tiles[x][y].prop.type == this.tiles[x][y + 1].prop.type;
        if (hasNeighbourRight || hasNeighbourBottom) {
          return true;
        }
      }
    }
    return false;
  },
  updateScore: function () {
    // added to get clicked elementID
    // console.log(this.tiles[x][y]);

    // following code is not working to get elementID
    // a = string(console.log(this.tiles[x][y]));
    // alert(a)
    ////////////////////////////////////////////////////////////////////////// End of added code
    this.score +=
      this.activeNeighbours.length * (this.activeNeighbours.length - 1);
    this.scoreDisplay.innerHTML = this.score;

    // NOTE: added: extract step_score as global variable and use in fitness function.
    step_score =
      this.activeNeighbours.length * (this.activeNeighbours.length - 1);
    //alert('step score ' + step_score + '\n total score ' + this.score);
  },

  // check which functions are needed for the new puzzle layout after each move!

  updateTiles: function () {
    var boardEmpty = true;
    for (var x = this.tiles.length - 1; x >= 0; x--) {
      var colEmpty = true;
      for (var y = this.tiles[x].length - 1; y >= 0; y--) {
        if (this.tiles[x][y].prop.type) {
          boardEmpty = colEmpty = false;
        }
        if (
          this.tiles[x][y + 1] &&
          this.tiles[x][y].prop.type &&
          !this.tiles[x][y + 1].prop.type
        ) {
          this.fallDown(x, y);
        }
      }
      if (colEmpty) {
        for (var y = this.tiles[x].length - 1; y >= 0; y--) {
          this.fallRight(x, y);
        }
      }
    }
    if (boardEmpty) {
      this.gameFinished('BOARD_EMPTY');
    }
    if (!this.areThereAnymoreNeighboursAvailable()) {
      this.gameFinished('NO_MORE_NEIGHBOURS');
    }
  },
  fallRight: function (x, y) {
    if (!this.tiles[x - 1]) {
      return;
    }
    var bubbleA = this.tiles[x - 1][y];
    var bubbleB = this.tiles[x][y];
    this.swapBubbles(bubbleA, bubbleB);
  },
  fallDown: function (x, y) {
    var bubbleA = this.tiles[x][y];
    var bubbleB = this.getNextSolidBubble(x, y);
    this.swapBubbles(bubbleA, bubbleB);
  },
  getNextSolidBubble: function (x, y) {
    while (this.tiles[x][y + 1] && !this.tiles[x][y + 1].prop.type) {
      y++;
    }
    return this.tiles[x][y];
  },
  swapBubbles: function (bubbleA, bubbleB) {
    var bubbleAType = bubbleA.prop.type;
    var bubbleBType = bubbleB.prop.type;
    bubbleA.prop.type = bubbleBType;
    YAHOO.util.Dom.addClass(bubbleA, bubbleBType);
    YAHOO.util.Dom.removeClass(bubbleA, bubbleAType);
    bubbleB.prop.type = bubbleAType;
    YAHOO.util.Dom.addClass(bubbleB, bubbleAType);
    YAHOO.util.Dom.removeClass(bubbleB, bubbleBType);
  },
  removeActiveClasses: function (el) {
    YAHOO.util.Dom.removeClass(el, 'active');
    YAHOO.util.Dom.removeClass(el, 'hasActiveNeighbourTop');
    YAHOO.util.Dom.removeClass(el, 'hasActiveNeighbourRight');
    YAHOO.util.Dom.removeClass(el, 'hasActiveNeighbourBottom');
    YAHOO.util.Dom.removeClass(el, 'hasActiveNeighbourLeft');
  },
  getTopLeftActiveNeighbour: function () {
    var topLeft = {
      prop: {
        x: this.config.size.x,
        y: this.config.size.y,
      },
    };
    for (var l = this.activeNeighbours.length - 1; l >= 0; l--) {
      var el = this.activeNeighbours[l];
      if (el.prop.x <= topLeft.prop.x) {
        if (el.prop.y < topLeft.prop.y) {
          topLeft = el;
        }
      }
    }
    return topLeft;
  },
  getRandomType: function () {
    return this.config.types[
      Math.floor(Math.random() * this.config.types.length)
    ];
  },
  gameFinished: function (msg) {
    this.log('game finished: ' + msg);
    if (msg == 'BOARD_EMPTY') {
      this.onEpicWin.fire();
    } else if (msg == 'NO_MORE_NEIGHBOURS') {
      this.onFinish.fire();
    }
    this.running = false;

    // send command to end fitness function and cut the gene to where it reached.
  },
  log: function (msg) {
    if (this.config.debug && window.console && window.console.log) {
      window.console.log(msg);
    }
  },

  //NOTE: Added search function, unstructured
  // search: function () {
  //   for (let x = 0; x < 11; x++) {
  //     for (let y = 0; y < 11; y++) {
  //       bubbleBreaker.onclick(bubbleBreaker.tiles[x][y]);
  //       bubbleBreaker.onclick(bubbleBreaker.tiles[x][y]);
  //     }
  //   }
  // },
};
