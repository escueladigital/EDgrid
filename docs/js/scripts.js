(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
'use strict';

var _activeMenu = require('./modules/activeMenu');

var _activeMenu2 = _interopRequireDefault(_activeMenu);

var _menu = require('./modules/menu');

var _menu2 = _interopRequireDefault(_menu);

var _scrollBarWIdth = require('./modules/scrollBarWIdth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _activeMenu2.default)('main-menu'); // import menu from './modules/menu'
// import migrate from './modules/migrate'
//
// export default { menu, migrate }

(0, _activeMenu2.default)('vertical-menu');
(0, _menu2.default)('main-menu', 'main-menu-toggle');
(0, _menu2.default)('vertical-menu', 'vertical-menu-toggle');

/* PrismJS 1.9.0
http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+scss&plugins=toolbar+show-language */
var _self = 'undefined' != typeof window ? window : 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function () {
  var e = /\blang(?:uage)?-(\w+)\b/i,
      t = 0,
      n = _self.Prism = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : 'Array' === n.util.type(e) ? e.map(n.util.encode) : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
      }, type: function type(e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1];
      }, objId: function objId(e) {
        return e.__id || Object.defineProperty(e, '__id', { value: ++t }), e.__id;
      }, clone: function clone(e) {
        var t = n.util.type(e);
        switch (t) {
          case 'Object':
            var r = {};
            for (var a in e) {
              e.hasOwnProperty(a) && (r[a] = n.util.clone(e[a]));
            }return r;
          case 'Array':
            return e.map(function (e) {
              return n.util.clone(e);
            });
        }
        return e;
      }
    },
    languages: {
      extend: function extend(e, t) {
        var r = n.util.clone(n.languages[e]);
        for (var a in t) {
          r[a] = t[a];
        }return r;
      }, insertBefore: function insertBefore(e, t, r, a) {
        a = a || n.languages;
        var l = a[e];
        if (2 == arguments.length) {
          r = arguments[1];
          for (var i in r) {
            r.hasOwnProperty(i) && (l[i] = r[i]);
          }return l;
        }
        var o = {};
        for (var s in l) {
          if (l.hasOwnProperty(s)) {
            if (s == t) for (var i in r) {
              r.hasOwnProperty(i) && (o[i] = r[i]);
            }o[s] = l[s];
          }
        }return n.languages.DFS(n.languages, function (t, n) {
          n === a[e] && t != e && (this[t] = o);
        }), a[e] = o;
      }, DFS: function DFS(e, t, r, a) {
        a = a || {};
        for (var l in e) {
          e.hasOwnProperty(l) && (t.call(e, l, e[l], r || l), 'Object' !== n.util.type(e[l]) || a[n.util.objId(e[l])] ? 'Array' !== n.util.type(e[l]) || a[n.util.objId(e[l])] || (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, l, a)) : (a[n.util.objId(e[l])] = !0, n.languages.DFS(e[l], t, null, a)));
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, t) {
      n.highlightAllUnder(document, e, t);
    },
    highlightAllUnder: function highlightAllUnder(e, t, r) {
      var a = {
        callback: r,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      n.hooks.run('before-highlightall', a);
      for (var l, i = a.elements || e.querySelectorAll(a.selector), o = 0; l = i[o++];) {
        n.highlightElement(l, t === !0, a.callback);
      }
    },
    highlightElement: function highlightElement(t, r, a) {
      for (var l, i, o = t; o && !e.test(o.className);) {
        o = o.parentNode;
      }o && (l = (o.className.match(e) || [, ''])[1].toLowerCase(), i = n.languages[l]), t.className = t.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + l, t.parentNode && (o = t.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, '').replace(/\s+/g, ' ') + ' language-' + l));
      var s = t.textContent,
          g = { element: t, language: l, grammar: i, code: s };
      if (n.hooks.run('before-sanity-check', g), !g.code || !g.grammar) return g.code && (n.hooks.run('before-highlight', g), g.element.textContent = g.code, n.hooks.run('after-highlight', g)), n.hooks.run('complete', g), void 0;
      if (n.hooks.run('before-highlight', g), r && _self.Worker) {
        var u = new Worker(n.filename);
        u.onmessage = function (e) {
          g.highlightedCode = e.data, n.hooks.run('before-insert', g), g.element.innerHTML = g.highlightedCode, a && a.call(g.element), n.hooks.run('after-highlight', g), n.hooks.run('complete', g);
        }, u.postMessage(JSON.stringify({
          language: g.language,
          code: g.code,
          immediateClose: !0
        }));
      } else g.highlightedCode = n.highlight(g.code, g.grammar, g.language), n.hooks.run('before-insert', g), g.element.innerHTML = g.highlightedCode, a && a.call(t), n.hooks.run('after-highlight', g), n.hooks.run('complete', g);
    },
    highlight: function highlight(e, t, a) {
      var l = n.tokenize(e, t);
      return r.stringify(n.util.encode(l), a);
    },
    matchGrammar: function matchGrammar(e, t, r, a, l, i, o) {
      var s = n.Token;
      for (var g in r) {
        if (r.hasOwnProperty(g) && r[g]) {
          if (g == o) return;
          var u = r[g];
          u = 'Array' === n.util.type(u) ? u : [u];
          for (var c = 0; c < u.length; ++c) {
            var h = u[c],
                f = h.inside,
                d = !!h.lookbehind,
                m = !!h.greedy,
                p = 0,
                y = h.alias;
            if (m && !h.pattern.global) {
              var v = h.pattern.toString().match(/[imuy]*$/)[0];
              h.pattern = RegExp(h.pattern.source, v + 'g');
            }
            h = h.pattern || h;
            for (var b = a, k = l; b < t.length; k += t[b].length, ++b) {
              var w = t[b];
              if (t.length > e.length) return;
              if (!(w instanceof s)) {
                h.lastIndex = 0;
                var _ = h.exec(w),
                    P = 1;
                if (!_ && m && b != t.length - 1) {
                  if (h.lastIndex = k, _ = h.exec(e), !_) break;
                  for (var A = _.index + (d ? _[1].length : 0), j = _.index + _[0].length, x = b, O = k, N = t.length; N > x && (j > O || !t[x].type && !t[x - 1].greedy); ++x) {
                    O += t[x].length, A >= O && (++b, k = O);
                  }if (t[b] instanceof s || t[x - 1].greedy) continue;
                  P = x - b, w = e.slice(k, O), _.index -= k;
                }
                if (_) {
                  d && (p = _[1].length);
                  var A = _.index + p,
                      _ = _[0].slice(p),
                      j = A + _.length,
                      S = w.slice(0, A),
                      C = w.slice(j),
                      M = [b, P];
                  S && (++b, k += S.length, M.push(S));
                  var E = new s(g, f ? n.tokenize(_, f) : _, y, _, m);
                  if (M.push(E), C && M.push(C), Array.prototype.splice.apply(t, M), 1 != P && n.matchGrammar(e, t, r, b, k, !0, g), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, t) {
      var r = [e],
          a = t.rest;
      if (a) {
        for (var l in a) {
          t[l] = a[l];
        }delete t.rest;
      }
      return n.matchGrammar(e, r, t, 0, 0, !1), r;
    },
    hooks: {
      all: {}, add: function add(e, t) {
        var r = n.hooks.all;
        r[e] = r[e] || [], r[e].push(t);
      }, run: function run(e, t) {
        var r = n.hooks.all[e];
        if (r && r.length) for (var a, l = 0; a = r[l++];) {
          a(t);
        }
      }
    }
  },
      r = n.Token = function (e, t, n, r, a) {
    this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || '').length, this.greedy = !!a;
  };
  if (r.stringify = function (e, t, a) {
    if ('string' == typeof e) return e;
    if ('Array' === n.util.type(e)) return e.map(function (n) {
      return r.stringify(n, t, e);
    }).join('');
    var l = {
      type: e.type,
      content: r.stringify(e.content, t, a),
      tag: 'span',
      classes: ['token', e.type],
      attributes: {},
      language: t,
      parent: a
    };
    if (e.alias) {
      var i = 'Array' === n.util.type(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(l.classes, i);
    }
    n.hooks.run('wrap', l);
    var o = Object.keys(l.attributes).map(function (e) {
      return e + '="' + (l.attributes[e] || '').replace(/"/g, '&quot;') + '"';
    }).join(' ');
    return '<' + l.tag + ' class="' + l.classes.join(' ') + '"' + (o ? ' ' + o : '') + '>' + l.content + '</' + l.tag + '>';
  }, !_self.document) return _self.addEventListener ? (n.disableWorkerMessageHandler || _self.addEventListener('message', function (e) {
    var t = JSON.parse(e.data),
        r = t.language,
        a = t.code,
        l = t.immediateClose;
    _self.postMessage(n.highlight(a, n.languages[r], r)), l && _self.close();
  }, !1), _self.Prism) : _self.Prism;
  var a = document.currentScript || [].slice.call(document.getElementsByTagName('script')).pop();
  return a && (n.filename = a.src, n.manual || a.hasAttribute('data-manual') || ('loading' !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(n.highlightAll) : window.setTimeout(n.highlightAll, 16) : document.addEventListener('DOMContentLoaded', n.highlightAll))), _self.Prism;
}();
'undefined' != typeof module && module.exports && (module.exports = Prism), 'undefined' != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
      },
      'attr-value': {
        pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /(^|[^\\])["']/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      'attr-name': { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside['attr-value'].inside.entity = Prism.languages.markup.entity, Prism.hooks.add('wrap', function (a) {
  'entity' === a.type && (a.attributes.title = a.content.replace(/&amp;/, '&'));
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
Prism.languages.css = {
  comment: /\/\*[\s\S]*?\*\//,
  atrule: { pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i, inside: { rule: /@[\w-]+/ } },
  url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
  selector: /[^{}\s][^{};]*?(?=\s*\{)/,
  string: {
    pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
  important: /\B!important\b/i,
  'function': /[-a-z0-9]+(?=\()/i,
  punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore('markup', 'tag', {
  style: {
    pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
    lookbehind: !0,
    inside: Prism.languages.css,
    alias: 'language-css',
    greedy: !0
  }
}), Prism.languages.insertBefore('inside', 'attr-value', {
  'style-attr': {
    pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
    inside: {
      'attr-name': {
        pattern: /^\s*style/i,
        inside: Prism.languages.markup.tag.inside
      },
      punctuation: /^\s*=\s*['"]|['"]\s*$/,
      'attr-value': { pattern: /.+/i, inside: Prism.languages.css }
    },
    alias: 'language-css'
  }
}, Prism.languages.markup.tag));
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0 }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: { punctuation: /[.\\]/ }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /[a-z0-9_]+(?=\()/i,
  number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend('clike', {
  keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
  number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
  'function': /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.insertBefore('javascript', 'keyword', {
  regex: {
    pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
    lookbehind: !0,
    greedy: !0
  },
  'function-variable': {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
    alias: 'function'
  }
}), Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|[^\\`])*`/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\$\{[^}]+\}/,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\$\{|\}$/,
            alias: 'punctuation'
          }, rest: Prism.languages.javascript
        }
      }, string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.insertBefore('markup', 'tag', {
  script: {
    pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
    lookbehind: !0,
    inside: Prism.languages.javascript,
    alias: 'language-javascript',
    greedy: !0
  }
}), Prism.languages.js = Prism.languages.javascript;
Prism.languages.scss = Prism.languages.extend('css', {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: { rule: /@[\w-]+/ }
  },
  url: /(?:[-a-z]+-)*url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|&|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      parent: { pattern: /&/, alias: 'important' },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
}), Prism.languages.insertBefore('scss', 'atrule', {
  keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.scss.property = {
  pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/i,
  inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }
}, Prism.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }), Prism.languages.insertBefore('scss', 'function', {
  placeholder: {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  statement: { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
  'boolean': /\b(?:true|false)\b/,
  'null': /\bnull\b/,
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: !0
  }
}), Prism.languages.scss.atrule.inside.rest = Prism.util.clone(Prism.languages.scss);
!function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    var t = [],
        e = {},
        n = function n() {};
    Prism.plugins.toolbar = {};
    var a = Prism.plugins.toolbar.registerButton = function (n, a) {
      var o;
      o = 'function' == typeof a ? a : function (t) {
        var e;
        return 'function' == typeof a.onClick ? (e = document.createElement('button'), e.type = 'button', e.addEventListener('click', function () {
          a.onClick.call(this, t);
        })) : 'string' == typeof a.url ? (e = document.createElement('a'), e.href = a.url) : e = document.createElement('span'), e.textContent = a.text, e;
      }, t.push(e[n] = o);
    },
        o = Prism.plugins.toolbar.hook = function (a) {
      var o = a.element.parentNode;
      if (o && /pre/i.test(o.nodeName) && !o.classList.contains('code-toolbar')) {
        o.classList.add('code-toolbar');
        var r = document.createElement('div');
        r.classList.add('toolbar'), document.body.hasAttribute('data-toolbar-order') && (t = document.body.getAttribute('data-toolbar-order').split(',').map(function (t) {
          return e[t] || n;
        })), t.forEach(function (t) {
          var e = t(a);
          if (e) {
            var n = document.createElement('div');
            n.classList.add('toolbar-item'), n.appendChild(e), r.appendChild(n);
          }
        }), o.appendChild(r);
      }
    };
    a('label', function (t) {
      var e = t.element.parentNode;
      if (e && /pre/i.test(e.nodeName) && e.hasAttribute('data-label')) {
        var n,
            a,
            o = e.getAttribute('data-label');
        try {
          a = document.querySelector('template#' + o);
        } catch (r) {}
        return a ? n = a.content : (e.hasAttribute('data-url') ? (n = document.createElement('a'), n.href = e.getAttribute('data-url')) : n = document.createElement('span'), n.textContent = o), n;
      }
    }), Prism.hooks.add('complete', o);
  }
}();
!function () {
  if ('undefined' != typeof self && self.Prism && self.document) {
    if (!Prism.plugins.toolbar) return console.warn('Show Languages plugin loaded before Toolbar plugin.'), void 0;
    var e = {
      html: 'HTML',
      xml: 'XML',
      svg: 'SVG',
      mathml: 'MathML',
      css: 'CSS',
      clike: 'C-like',
      javascript: 'JavaScript',
      abap: 'ABAP',
      actionscript: 'ActionScript',
      apacheconf: 'Apache Configuration',
      apl: 'APL',
      applescript: 'AppleScript',
      asciidoc: 'AsciiDoc',
      asm6502: '6502 Assembly',
      aspnet: 'ASP.NET (C#)',
      autohotkey: 'AutoHotkey',
      autoit: 'AutoIt',
      basic: 'BASIC',
      csharp: 'C#',
      cpp: 'C++',
      coffeescript: 'CoffeeScript',
      'css-extras': 'CSS Extras',
      django: 'Django/Jinja2',
      fsharp: 'F#',
      glsl: 'GLSL',
      graphql: 'GraphQL',
      http: 'HTTP',
      ichigojam: 'IchigoJam',
      inform7: 'Inform 7',
      json: 'JSON',
      latex: 'LaTeX',
      livescript: 'LiveScript',
      lolcode: 'LOLCODE',
      matlab: 'MATLAB',
      mel: 'MEL',
      n4js: 'N4JS',
      nasm: 'NASM',
      nginx: 'nginx',
      nsis: 'NSIS',
      objectivec: 'Objective-C',
      ocaml: 'OCaml',
      opencl: 'OpenCL',
      parigp: 'PARI/GP',
      php: 'PHP',
      'php-extras': 'PHP Extras',
      powershell: 'PowerShell',
      properties: '.properties',
      protobuf: 'Protocol Buffers',
      jsx: 'React JSX',
      renpy: 'Ren\'py',
      rest: 'reST (reStructuredText)',
      sas: 'SAS',
      sass: 'Sass (Sass)',
      scss: 'Sass (Scss)',
      sql: 'SQL',
      typescript: 'TypeScript',
      vbnet: 'VB.Net',
      vhdl: 'VHDL',
      vim: 'vim',
      wiki: 'Wiki markup',
      xojo: 'Xojo (REALbasic)',
      yaml: 'YAML'
    };
    Prism.plugins.toolbar.registerButton('show-language', function (t) {
      var a = t.element.parentNode;
      if (a && /pre/i.test(a.nodeName)) {
        var s = a.getAttribute('data-language') || e[t.language] || t.language.substring(0, 1).toUpperCase() + t.language.substring(1),
            i = document.createElement('span');
        return i.textContent = s, i;
      }
    });
  }
}();

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./modules/activeMenu":2,"./modules/menu":3,"./modules/scrollBarWIdth":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var activeMenu = function activeMenu(menuId) {
  var menu = document.getElementById(menuId);
  if (!menu) return;
  var links = [].concat(_toConsumableArray(menu.querySelectorAll('a')));
  if (!links) return;
  links.map(function (link) {
    var url = document.location.href;
    if (link.href === url || link.href === url.slice(0, -1)) link.classList.add('active');
  });
};

exports.default = activeMenu;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var openMenu = function openMenu(navId, toggleId) {
  var nav = document.getElementById(navId);
  var toggle = document.getElementById(toggleId);

  if (!nav || !toggle) return;

  toggle.addEventListener('click', function () {
    nav.classList.toggle('show');
    toggle.classList.toggle('active');
  });
};

exports.default = openMenu;
module.exports = exports['default'];

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollBarWidth = function getScrollBarWidth() {
  return window.innerWidth - document.documentElement.getBoundingClientRect().width;
};

document.documentElement.style.setProperty('--scrollbar', getScrollBarWidth() + 'px');

exports.getScrollBarWidth = getScrollBarWidth;

},{}]},{},[1]);

//# sourceMappingURL=scripts.js.map
