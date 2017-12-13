module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/redirect/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ./node_modules/mobile-detect/mobile-detect.js
var mobile_detect = __webpack_require__("UMwo");
var mobile_detect_default = /*#__PURE__*/__webpack_require__.n(mobile_detect);

// EXTERNAL MODULE: ./button.css
var button_0 = __webpack_require__("g6LU");
var button_default = /*#__PURE__*/__webpack_require__.n(button_0);

// CONCATENATED MODULE: ./components/AndroidButton2.js


// import { Component } from 'preact'

var _ref2 = Object(preact_min["h"])(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 60", width: "155" },
  Object(preact_min["h"])(
    "defs",
    null,
    Object(preact_min["h"])(
      "linearGradient",
      { id: "a", x1: "31.8", y1: "183.29", x2: "15.02", y2: "166.51", gradientTransform: "matrix(1 0 0 -1 0 202)",
        gradientUnits: "userSpaceOnUse" },
      Object(preact_min["h"])("stop", { offset: "0", "stop-color": "#00a0ff" }),
      Object(preact_min["h"])("stop", { offset: ".01", "stop-color": "#00a1ff" }),
      Object(preact_min["h"])("stop", { offset: ".26", "stop-color": "#00beff" }),
      Object(preact_min["h"])("stop", { offset: ".51", "stop-color": "#00d2ff" }),
      Object(preact_min["h"])("stop", { offset: ".76", "stop-color": "#00dfff" }),
      Object(preact_min["h"])("stop", { offset: "1", "stop-color": "#00e3ff" })
    ),
    Object(preact_min["h"])(
      "linearGradient",
      { id: "b", x1: "43.83", y1: "172", x2: "19.64", y2: "172", gradientTransform: "matrix(1 0 0 -1 0 202)",
        gradientUnits: "userSpaceOnUse" },
      Object(preact_min["h"])("stop", { offset: "0", "stop-color": "#ffe000" }),
      Object(preact_min["h"])("stop", { offset: ".41", "stop-color": "#ffbd00" }),
      Object(preact_min["h"])("stop", { offset: ".78", "stop-color": "orange" }),
      Object(preact_min["h"])("stop", { offset: "1", "stop-color": "#ff9c00" })
    ),
    Object(preact_min["h"])(
      "linearGradient",
      { id: "c", x1: "34.83", y1: "169.7", x2: "12.07", y2: "146.95", gradientTransform: "matrix(1 0 0 -1 0 202)",
        gradientUnits: "userSpaceOnUse" },
      Object(preact_min["h"])("stop", { offset: "0", "stop-color": "#ff3a44" }),
      Object(preact_min["h"])("stop", { offset: "1", "stop-color": "#c31162" })
    ),
    Object(preact_min["h"])(
      "linearGradient",
      { id: "d", x1: "17.3", y1: "191.82", x2: "27.46", y2: "181.66", gradientTransform: "matrix(1 0 0 -1 0 202)",
        gradientUnits: "userSpaceOnUse" },
      Object(preact_min["h"])("stop", { offset: "0", "stop-color": "#32a071" }),
      Object(preact_min["h"])("stop", { offset: ".07", "stop-color": "#2da771" }),
      Object(preact_min["h"])("stop", { offset: ".48", "stop-color": "#15cf74" }),
      Object(preact_min["h"])("stop", { offset: ".8", "stop-color": "#06e775" }),
      Object(preact_min["h"])("stop", { offset: "1", "stop-color": "#00f076" })
    )
  ),
  Object(preact_min["h"])(
    "title",
    null,
    "fil_get"
  ),
  Object(preact_min["h"])("path", { fill: "none", d: "M0 0h155v60H0z" }),
  Object(preact_min["h"])("rect", { x: "10", y: "10", width: "135", height: "40", rx: "5", ry: "5" }),
  Object(preact_min["h"])("path", {
    d: "M140 10.8a4.2 4.2 0 0 1 4.2 4.2v30a4.2 4.2 0 0 1-4.2 4.2H15a4.2 4.2 0 0 1-4.2-4.2V15a4.2 4.2 0 0 1 4.2-4.2h125m0-.8H15a5 5 0 0 0-5 5v30a5 5 0 0 0 5 5h125a5 5 0 0 0 5-5V15a5 5 0 0 0-5-5z",
    fill: "#a6a6a6" }),
  Object(preact_min["h"])("path", {
    d: "M57.42 20.24a2.71 2.71 0 0 1-.75 2 2.91 2.91 0 0 1-2.2.89 3.15 3.15 0 0 1-2.21-5.37 3 3 0 0 1 2.21-.9 3.1 3.1 0 0 1 1.23.25 2.47 2.47 0 0 1 .94.67l-.53.53a2 2 0 0 0-1.64-.71 2.32 2.32 0 0 0-2.33 2.4 2.36 2.36 0 0 0 4 1.73 1.89 1.89 0 0 0 .5-1.22h-2.17v-.72h2.91a2.54 2.54 0 0 1 .04.45zM62 17.74h-2.7v1.9h2.46v.72H59.3v1.9H62V23h-3.5v-6H62zM65.28 23h-.77v-5.26h-1.68V17H67v.74h-1.72zM69.94 23v-6h.77v6zM74.13 23h-.77v-5.26h-1.68V17h4.12v.74h-1.67zM83.61 22.22a3.12 3.12 0 0 1-4.4 0 3.24 3.24 0 0 1 0-4.45 3.1 3.1 0 0 1 4.4 0 3.23 3.23 0 0 1 0 4.45zm-3.83-.5a2.31 2.31 0 0 0 3.26 0 2.56 2.56 0 0 0 0-3.44 2.31 2.31 0 0 0-3.26 0 2.56 2.56 0 0 0 0 3.44zM85.58 23v-6h.94l2.92 4.67V17h.77v6h-.8l-3.05-4.89V23z",
    fill: "#fff", stroke: "#fff", "stroke-miterlimit": "10", "stroke-width": ".2" }),
  Object(preact_min["h"])("path", {
    d: "M78.14 31.75A4.25 4.25 0 1 0 82.41 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83a2.58 2.58 0 1 1 2.4-2.58 2.46 2.46 0 0 1-2.4 2.58zm-9.31-6.83A4.25 4.25 0 1 0 73.09 36a4.19 4.19 0 0 0-4.27-4.25zm0 6.83A2.58 2.58 0 1 1 71.22 36a2.46 2.46 0 0 1-2.4 2.58zm-11.09-5.52v1.8h4.32a3.77 3.77 0 0 1-1 2.27 4.42 4.42 0 0 1-3.33 1.32 4.8 4.8 0 0 1 0-9.6A4.6 4.6 0 0 1 61 30.14l1.27-1.27A6.29 6.29 0 0 0 57.74 27a6.61 6.61 0 1 0 0 13.21 6 6 0 0 0 4.61-1.85 6 6 0 0 0 1.56-4.22 5.87 5.87 0 0 0-.1-1.13zm45.31 1.4a4 4 0 0 0-3.64-2.71 4 4 0 0 0-4 4.25 4.16 4.16 0 0 0 4.22 4.25 4.23 4.23 0 0 0 3.54-1.88l-1.45-1a2.43 2.43 0 0 1-2.09 1.18 2.16 2.16 0 0 1-2.06-1.29l5.69-2.35zm-5.8 1.42a2.33 2.33 0 0 1 2.22-2.48 1.65 1.65 0 0 1 1.58.9zM92.63 40h1.87V27.5h-1.87zm-3.06-7.3h-.07a3 3 0 0 0-2.24-1 4.26 4.26 0 0 0 0 8.51 2.9 2.9 0 0 0 2.24-1h.06v.61c0 1.63-.87 2.5-2.27 2.5a2.35 2.35 0 0 1-2.14-1.51l-1.63.68A4.05 4.05 0 0 0 87.29 44c2.19 0 4-1.29 4-4.43V32h-1.72zm-2.14 5.88a2.59 2.59 0 0 1 0-5.16A2.4 2.4 0 0 1 89.7 36a2.38 2.38 0 0 1-2.28 2.58zm24.38-11.08h-4.47V40h1.87v-4.74h2.61a3.89 3.89 0 1 0 0-7.76zm0 6h-2.61v-4.26h2.65a2.14 2.14 0 1 1 0 4.29zm11.53-1.8a3.5 3.5 0 0 0-3.33 1.91l1.66.69a1.77 1.77 0 0 1 1.7-.92 1.8 1.8 0 0 1 2 1.61v.13a4.13 4.13 0 0 0-1.95-.48c-1.79 0-3.6 1-3.6 2.81a2.89 2.89 0 0 0 3.1 2.75 2.63 2.63 0 0 0 2.4-1.2h.06v1h1.8v-4.81c0-2.19-1.66-3.46-3.79-3.46zm-.23 6.85c-.61 0-1.46-.31-1.46-1.06 0-1 1.06-1.33 2-1.33a3.32 3.32 0 0 1 1.7.42 2.26 2.26 0 0 1-2.19 2zM133.74 32l-2.14 5.42h-.06L129.32 32h-2l3.33 7.58-1.9 4.21h1.95L135.82 32zm-16.81 8h1.87V27.5h-1.87z",
    fill: "#fff" }),
  Object(preact_min["h"])("path", { d: "M20.44 17.54a2 2 0 0 0-.46 1.4v22.12a2 2 0 0 0 .46 1.4l.07.07L32.9 30.15v-.29L20.51 17.47z",
    fill: "url(#a)" }),
  Object(preact_min["h"])("path", { d: "M37 34.28l-4.1-4.13v-.29l4.1-4.14.09.05L42 28.56c1.4.79 1.4 2.09 0 2.89l-4.89 2.78z", fill: "url(#b)" }),
  Object(preact_min["h"])("path", { d: "M37.12 34.22L32.9 30 20.44 42.46a1.63 1.63 0 0 0 2.08.06l14.61-8.3", fill: "url(#c)" }),
  Object(preact_min["h"])("path", { d: "M37.12 25.78l-14.61-8.3a1.63 1.63 0 0 0-2.08.06L32.9 30z", fill: "url(#d)" }),
  Object(preact_min["h"])("path", { d: "M37 34.13l-14.49 8.25a1.67 1.67 0 0 1-2 0l-.07.07.07.07a1.66 1.66 0 0 0 2 0l14.61-8.3z",
    style: "isolation:isolate", opacity: ".2" }),
  Object(preact_min["h"])("path", {
    d: "M20.44 42.32a2 2 0 0 1-.46-1.4v.15a2 2 0 0 0 .46 1.4l.07-.07zM42 31.3l-5 2.83.09.09L42 31.44A1.75 1.75 0 0 0 43 30a1.86 1.86 0 0 1-1 1.3z",
    style: "isolation:isolate", opacity: ".12" }),
  Object(preact_min["h"])("path", {
    d: "M22.51 17.62L42 28.7a1.86 1.86 0 0 1 1 1.3 1.75 1.75 0 0 0-1-1.44L22.51 17.48c-1.4-.79-2.54-.13-2.54 1.47v.15c.03-1.61 1.15-2.27 2.54-1.48z",
    style: "isolation:isolate", fill: "#fff", opacity: ".25" })
);

var AndroidButton2_AndroidButton = function AndroidButton(_ref) {
  var href = _ref.href;
  return Object(preact_min["h"])(
    "a",
    { href: href },
    _ref2
  );
};

/* harmony default export */ var AndroidButton2 = (AndroidButton2_AndroidButton);
// CONCATENATED MODULE: ./components/AppleButton2.js



var AppleButton2__ref2 = Object(preact_min["h"])(
						"svg",
						{ version: "1.1", id: "US_UK_Download_on_the", x: "0px", y: "0px", width: "135px", height: "40px", viewBox: "0 0 135 40", "enable-background": "new 0 0 135 40" },
						Object(preact_min["h"])(
												"g",
												null,
												Object(preact_min["h"])("path", { fill: "#A6A6A6", d: "M130.197,40H4.729C2.122,40,0,37.872,0,35.267V4.726C0,2.12,2.122,0,4.729,0h125.468 C132.803,0,135,2.12,135,4.726v30.541C135,37.872,132.803,40,130.197,40L130.197,40z" }),
												Object(preact_min["h"])("path", { d: "M134.032,35.268c0,2.116-1.714,3.83-3.834,3.83H4.729c-2.119,0-3.839-1.714-3.839-3.83V4.725 c0-2.115,1.72-3.835,3.839-3.835h125.468c2.121,0,3.834,1.72,3.834,3.835L134.032,35.268L134.032,35.268z" }),
												Object(preact_min["h"])(
																		"g",
																		null,
																		Object(preact_min["h"])(
																								"g",
																								null,
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M30.128,19.784c-0.029-3.223,2.639-4.791,2.761-4.864c-1.511-2.203-3.853-2.504-4.676-2.528 c-1.967-0.207-3.875,1.177-4.877,1.177c-1.022,0-2.565-1.157-4.228-1.123c-2.14,0.033-4.142,1.272-5.24,3.196 c-2.266,3.923-0.576,9.688,1.595,12.859c1.086,1.553,2.355,3.287,4.016,3.226c1.625-0.067,2.232-1.036,4.193-1.036 c1.943,0,2.513,1.036,4.207,0.997c1.744-0.028,2.842-1.56,3.89-3.127c1.255-1.78,1.759-3.533,1.779-3.623 C33.507,24.924,30.161,23.647,30.128,19.784z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M26.928,10.306c0.874-1.093,1.472-2.58,1.306-4.089c-1.265,0.056-2.847,0.875-3.758,1.944 c-0.806,0.942-1.526,2.486-1.34,3.938C24.557,12.205,26.016,11.382,26.928,10.306z" })
																		)
												),
												Object(preact_min["h"])(
																		"g",
																		null,
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M53.645,31.504h-2.271l-1.244-3.909h-4.324l-1.185,3.909h-2.211l4.284-13.308h2.646L53.645,31.504z M49.755,25.955L48.63,22.48c-0.119-0.355-0.342-1.191-0.671-2.507h-0.04c-0.131,0.566-0.342,1.402-0.632,2.507l-1.105,3.475 H49.755z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M64.662,26.588c0,1.632-0.441,2.922-1.323,3.869c-0.79,0.843-1.771,1.264-2.942,1.264 c-1.264,0-2.172-0.454-2.725-1.362h-0.04v5.055h-2.132V25.067c0-1.026-0.027-2.079-0.079-3.159h1.875l0.119,1.521h0.04 c0.711-1.146,1.79-1.718,3.238-1.718c1.132,0,2.077,0.447,2.833,1.342C64.284,23.949,64.662,25.127,64.662,26.588z M62.49,26.666 c0-0.934-0.21-1.704-0.632-2.31c-0.461-0.632-1.08-0.948-1.856-0.948c-0.526,0-1.004,0.176-1.431,0.523 c-0.428,0.35-0.708,0.807-0.839,1.373c-0.066,0.264-0.099,0.48-0.099,0.65v1.6c0,0.698,0.214,1.287,0.642,1.768 s0.984,0.721,1.668,0.721c0.803,0,1.428-0.31,1.875-0.928C62.266,28.496,62.49,27.68,62.49,26.666z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M75.699,26.588c0,1.632-0.441,2.922-1.324,3.869c-0.789,0.843-1.77,1.264-2.941,1.264 c-1.264,0-2.172-0.454-2.724-1.362H68.67v5.055h-2.132V25.067c0-1.026-0.027-2.079-0.079-3.159h1.875l0.119,1.521h0.04 c0.71-1.146,1.789-1.718,3.238-1.718c1.131,0,2.076,0.447,2.834,1.342C75.32,23.949,75.699,25.127,75.699,26.588z M73.527,26.666 c0-0.934-0.211-1.704-0.633-2.31c-0.461-0.632-1.078-0.948-1.855-0.948c-0.527,0-1.004,0.176-1.432,0.523 c-0.428,0.35-0.707,0.807-0.838,1.373c-0.065,0.264-0.099,0.48-0.099,0.65v1.6c0,0.698,0.214,1.287,0.64,1.768 c0.428,0.48,0.984,0.721,1.67,0.721c0.803,0,1.428-0.31,1.875-0.928C73.303,28.496,73.527,27.68,73.527,26.666z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M88.039,27.772c0,1.132-0.393,2.053-1.182,2.764c-0.867,0.777-2.074,1.165-3.625,1.165 c-1.432,0-2.58-0.276-3.449-0.829l0.494-1.777c0.936,0.566,1.963,0.85,3.082,0.85c0.803,0,1.428-0.182,1.877-0.544 c0.447-0.362,0.67-0.848,0.67-1.454c0-0.54-0.184-0.995-0.553-1.364c-0.367-0.369-0.98-0.712-1.836-1.029 c-2.33-0.869-3.494-2.142-3.494-3.816c0-1.094,0.408-1.991,1.225-2.689c0.814-0.699,1.9-1.048,3.258-1.048 c1.211,0,2.217,0.211,3.02,0.632l-0.533,1.738c-0.75-0.408-1.598-0.612-2.547-0.612c-0.75,0-1.336,0.185-1.756,0.553 c-0.355,0.329-0.533,0.73-0.533,1.205c0,0.526,0.203,0.961,0.611,1.303c0.355,0.316,1,0.658,1.936,1.027 c1.145,0.461,1.986,1,2.527,1.618C87.77,26.081,88.039,26.852,88.039,27.772z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M95.088,23.508h-2.35v4.659c0,1.185,0.414,1.777,1.244,1.777c0.381,0,0.697-0.033,0.947-0.099l0.059,1.619 c-0.42,0.157-0.973,0.236-1.658,0.236c-0.842,0-1.5-0.257-1.975-0.77c-0.473-0.514-0.711-1.376-0.711-2.587v-4.837h-1.4v-1.6h1.4 v-1.757l2.094-0.632v2.389h2.35V23.508z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M105.691,26.627c0,1.475-0.422,2.686-1.264,3.633c-0.883,0.975-2.055,1.461-3.516,1.461 c-1.408,0-2.529-0.467-3.365-1.401s-1.254-2.113-1.254-3.534c0-1.487,0.43-2.705,1.293-3.652c0.861-0.948,2.023-1.422,3.484-1.422 c1.408,0,2.541,0.467,3.396,1.402C105.283,24.021,105.691,25.192,105.691,26.627z M103.479,26.696 c0-0.885-0.189-1.644-0.572-2.277c-0.447-0.766-1.086-1.148-1.914-1.148c-0.857,0-1.508,0.383-1.955,1.148 c-0.383,0.634-0.572,1.405-0.572,2.317c0,0.885,0.189,1.644,0.572,2.276c0.461,0.766,1.105,1.148,1.936,1.148 c0.814,0,1.453-0.39,1.914-1.168C103.281,28.347,103.479,27.58,103.479,26.696z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M112.621,23.783c-0.211-0.039-0.436-0.059-0.672-0.059c-0.75,0-1.33,0.283-1.738,0.85 c-0.355,0.5-0.533,1.132-0.533,1.895v5.035h-2.131l0.02-6.574c0-1.106-0.027-2.113-0.08-3.021h1.857l0.078,1.836h0.059 c0.225-0.631,0.58-1.139,1.066-1.52c0.475-0.343,0.988-0.514,1.541-0.514c0.197,0,0.375,0.014,0.533,0.039V23.783z" }),
																		Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M122.156,26.252c0,0.382-0.025,0.704-0.078,0.967h-6.396c0.025,0.948,0.334,1.673,0.928,2.173 c0.539,0.447,1.236,0.671,2.092,0.671c0.947,0,1.811-0.151,2.588-0.454l0.334,1.48c-0.908,0.396-1.98,0.593-3.217,0.593 c-1.488,0-2.656-0.438-3.506-1.313c-0.848-0.875-1.273-2.05-1.273-3.524c0-1.447,0.395-2.652,1.186-3.613 c0.828-1.026,1.947-1.539,3.355-1.539c1.383,0,2.43,0.513,3.141,1.539C121.873,24.047,122.156,25.055,122.156,26.252z M120.123,25.699c0.014-0.632-0.125-1.178-0.414-1.639c-0.369-0.593-0.936-0.889-1.699-0.889c-0.697,0-1.264,0.289-1.697,0.869 c-0.355,0.461-0.566,1.014-0.631,1.658H120.123z" })
												),
												Object(preact_min["h"])(
																		"g",
																		null,
																		Object(preact_min["h"])(
																								"g",
																								null,
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M49.05,10.009c0,1.177-0.353,2.063-1.058,2.658c-0.653,0.549-1.581,0.824-2.783,0.824 c-0.596,0-1.106-0.026-1.533-0.078V6.982c0.557-0.09,1.157-0.136,1.805-0.136c1.145,0,2.008,0.249,2.59,0.747 C48.723,8.156,49.05,8.961,49.05,10.009z M47.945,10.038c0-0.763-0.202-1.348-0.606-1.756c-0.404-0.407-0.994-0.611-1.771-0.611 c-0.33,0-0.611,0.022-0.844,0.068v4.889c0.129,0.02,0.365,0.029,0.708,0.029c0.802,0,1.421-0.223,1.857-0.669 S47.945,10.892,47.945,10.038z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M54.909,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.009,0.718-1.727,0.718 c-0.692,0-1.243-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.712-0.698 c0.692,0,1.248,0.229,1.669,0.688C54.708,9.757,54.909,10.333,54.909,11.037z M53.822,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.22-0.376-0.533-0.564-0.94-0.564c-0.421,0-0.741,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.714-0.191,0.94-0.574 C53.725,11.882,53.822,11.506,53.822,11.071z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M62.765,8.719l-1.475,4.714h-0.96l-0.611-2.047c-0.155-0.511-0.281-1.019-0.379-1.523h-0.019 c-0.091,0.518-0.217,1.025-0.379,1.523l-0.649,2.047h-0.971l-1.387-4.714h1.077l0.533,2.241c0.129,0.53,0.235,1.035,0.32,1.513 h0.019c0.078-0.394,0.207-0.896,0.389-1.503l0.669-2.25h0.854l0.641,2.202c0.155,0.537,0.281,1.054,0.378,1.552h0.029 c0.071-0.485,0.178-1.002,0.32-1.552l0.572-2.202H62.765z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M68.198,13.433H67.15v-2.7c0-0.832-0.316-1.248-0.95-1.248c-0.311,0-0.562,0.114-0.757,0.343 c-0.193,0.229-0.291,0.499-0.291,0.808v2.796h-1.048v-3.366c0-0.414-0.013-0.863-0.038-1.349h0.921l0.049,0.737h0.029 c0.122-0.229,0.304-0.418,0.543-0.569c0.284-0.176,0.602-0.265,0.95-0.265c0.44,0,0.806,0.142,1.097,0.427 c0.362,0.349,0.543,0.87,0.543,1.562V13.433z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M71.088,13.433h-1.047V6.556h1.047V13.433z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M77.258,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.01,0.718-1.727,0.718 c-0.693,0-1.244-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.711-0.698 c0.693,0,1.248,0.229,1.67,0.688C77.057,9.757,77.258,10.333,77.258,11.037z M76.17,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.219-0.376-0.533-0.564-0.939-0.564c-0.422,0-0.742,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.713-0.191,0.939-0.574 C76.074,11.882,76.17,11.506,76.17,11.071z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M82.33,13.433h-0.941l-0.078-0.543h-0.029c-0.322,0.433-0.781,0.65-1.377,0.65 c-0.445,0-0.805-0.143-1.076-0.427c-0.246-0.258-0.369-0.579-0.369-0.96c0-0.576,0.24-1.015,0.723-1.319 c0.482-0.304,1.16-0.453,2.033-0.446V10.3c0-0.621-0.326-0.931-0.979-0.931c-0.465,0-0.875,0.117-1.229,0.349l-0.213-0.688 c0.438-0.271,0.979-0.407,1.617-0.407c1.232,0,1.85,0.65,1.85,1.95v1.736C82.262,12.78,82.285,13.155,82.33,13.433z M81.242,11.813v-0.727c-1.156-0.02-1.734,0.297-1.734,0.95c0,0.246,0.066,0.43,0.201,0.553c0.135,0.123,0.307,0.184,0.512,0.184 c0.23,0,0.445-0.073,0.641-0.218c0.197-0.146,0.318-0.331,0.363-0.558C81.236,11.946,81.242,11.884,81.242,11.813z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M88.285,13.433h-0.93l-0.049-0.757h-0.029c-0.297,0.576-0.803,0.864-1.514,0.864 c-0.568,0-1.041-0.223-1.416-0.669s-0.562-1.025-0.562-1.736c0-0.763,0.203-1.381,0.611-1.853c0.395-0.44,0.879-0.66,1.455-0.66 c0.633,0,1.076,0.213,1.328,0.64h0.02V6.556h1.049v5.607C88.248,12.622,88.26,13.045,88.285,13.433z M87.199,11.445v-0.786 c0-0.136-0.01-0.246-0.029-0.33c-0.059-0.252-0.186-0.464-0.379-0.635c-0.195-0.171-0.43-0.257-0.701-0.257 c-0.391,0-0.697,0.155-0.922,0.466c-0.223,0.311-0.336,0.708-0.336,1.193c0,0.466,0.107,0.844,0.322,1.135 c0.227,0.31,0.533,0.465,0.916,0.465c0.344,0,0.619-0.129,0.828-0.388C87.1,12.069,87.199,11.781,87.199,11.445z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M97.248,11.037c0,0.725-0.207,1.319-0.621,1.785c-0.434,0.479-1.008,0.718-1.727,0.718 c-0.691,0-1.242-0.229-1.654-0.689c-0.41-0.459-0.615-1.038-0.615-1.736c0-0.73,0.211-1.329,0.635-1.794s0.994-0.698,1.713-0.698 c0.691,0,1.248,0.229,1.668,0.688C97.047,9.757,97.248,10.333,97.248,11.037z M96.162,11.071c0-0.435-0.094-0.808-0.281-1.119 c-0.221-0.376-0.533-0.564-0.941-0.564c-0.42,0-0.74,0.188-0.961,0.564c-0.188,0.311-0.281,0.69-0.281,1.138 c0,0.435,0.094,0.808,0.281,1.119c0.227,0.376,0.543,0.564,0.951,0.564c0.4,0,0.715-0.191,0.941-0.574 C96.064,11.882,96.162,11.506,96.162,11.071z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M102.883,13.433h-1.047v-2.7c0-0.832-0.316-1.248-0.951-1.248c-0.311,0-0.562,0.114-0.756,0.343 s-0.291,0.499-0.291,0.808v2.796h-1.049v-3.366c0-0.414-0.012-0.863-0.037-1.349h0.92l0.049,0.737h0.029 c0.123-0.229,0.305-0.418,0.543-0.569c0.285-0.176,0.602-0.265,0.951-0.265c0.439,0,0.805,0.142,1.096,0.427 c0.363,0.349,0.543,0.87,0.543,1.562V13.433z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M109.936,9.504h-1.154v2.29c0,0.582,0.205,0.873,0.611,0.873c0.188,0,0.344-0.016,0.467-0.049 l0.027,0.795c-0.207,0.078-0.479,0.117-0.814,0.117c-0.414,0-0.736-0.126-0.969-0.378c-0.234-0.252-0.35-0.676-0.35-1.271V9.504 h-0.689V8.719h0.689V7.855l1.027-0.31v1.173h1.154V9.504z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M115.484,13.433h-1.049v-2.68c0-0.845-0.316-1.268-0.949-1.268c-0.486,0-0.818,0.245-1,0.735 c-0.031,0.103-0.049,0.229-0.049,0.377v2.835h-1.047V6.556h1.047v2.841h0.02c0.33-0.517,0.803-0.775,1.416-0.775 c0.434,0,0.793,0.142,1.078,0.427c0.355,0.355,0.533,0.883,0.533,1.581V13.433z" }),
																								Object(preact_min["h"])("path", { fill: "#FFFFFF", d: "M121.207,10.853c0,0.188-0.014,0.346-0.039,0.475h-3.143c0.014,0.466,0.164,0.821,0.455,1.067 c0.266,0.22,0.609,0.33,1.029,0.33c0.465,0,0.889-0.074,1.271-0.223l0.164,0.728c-0.447,0.194-0.973,0.291-1.582,0.291 c-0.73,0-1.305-0.215-1.721-0.645c-0.418-0.43-0.625-1.007-0.625-1.731c0-0.711,0.193-1.303,0.582-1.775 c0.406-0.504,0.955-0.756,1.648-0.756c0.678,0,1.193,0.252,1.541,0.756C121.068,9.77,121.207,10.265,121.207,10.853z M120.207,10.582c0.008-0.311-0.061-0.579-0.203-0.805c-0.182-0.291-0.459-0.437-0.834-0.437c-0.342,0-0.621,0.142-0.834,0.427 c-0.174,0.227-0.277,0.498-0.311,0.815H120.207z" })
																		)
												)
						)
);

var AppleButton2_AppleButton = function AppleButton(_ref) {
						var href = _ref.href;
						return Object(preact_min["h"])(
												"a",
												{ href: href },
												AppleButton2__ref2
						);
};

/* harmony default export */ var AppleButton2 = (AppleButton2_AppleButton);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var scheme = 'trustlines';
var host = 'trustlines.network';
var prefix = 'v1';
var md = {};

if (typeof window !== 'undefined') {
  md = new mobile_detect_default.a(window.navigator.userAgent);
}

var index__ref = Object(preact_min["h"])(
  'div',
  { className: 'logoWrapper' },
  Object(preact_min["h"])('img', { src: './assets/logo.png', className: 'logo' }),
  Object(preact_min["h"])(
    'h2',
    null,
    'Trustlines Network'
  )
);

var index__ref2 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(AndroidButton2, { href: 'https://play.google.com/store/apps/details?id=network.trustlines.mobileapp' })
);

var _ref3 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(AppleButton2, { href: 'https://itunes.apple.com/app/trustlines-network/id1274919729?mt=8' })
);

var index_App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      opened: 0
    };
    return _this;
  }

  App.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return !this.state.url;
  };

  App.prototype.componentDidMount = function componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setState({
        path: window.location.pathname,
        url: scheme + '://' + host + '/' + prefix + window.location.pathname
      });
    }
  };

  App.prototype.openApp = function openApp() {
    // const url = `${scheme}://${host}/${prefix}${path}`
    this.setState({
      opened: ++this.state.opened
    });
    try {
      if (typeof window !== 'undefined') {
        window.location = this.state.url;
      }
    } catch (e) {
      console.log(e);
    }
  };

  App.prototype.render = function render(props, state) {
    if (state.path) {
      if (md.os() === 'iOS') {
        this.openApp(state.path);
      }
    }

    return Object(preact_min["h"])(
      'div',
      null,
      index__ref,
      state.url && Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
          'a',
          { href: state.url, className: 'open-btn' },
          'Open the app'
        ),
        (md.os() === 'AndroidOS' || !md.mobile()) && index__ref2,
        (md.os() === 'iOS' || !md.mobile()) && _ref3
      )
    );
  };

  return App;
}(preact_min["Component"]);



/***/ }),

/***/ "LGuY":
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "UMwo":
/***/ (function(module, exports, __webpack_require__) {

// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.0 2017-12-09*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
    define(function () {
        'use strict';

        var impl = {};

        impl.mobileDetectRules = {
            "phones": {
                "iPhone": "\\biPhone\\b|\\biPod\\b",
                "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+",
                "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190",
                "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                "Asus": "Asus.*Galaxy|PadFone.*Mobile",
                "NokiaLumia": "Lumia [0-9]{3,4}",
                "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                "Palm": "PalmSource|Palm",
                "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                "Alcatel": "Alcatel",
                "Nintendo": "Nintendo 3DS",
                "Amoi": "Amoi",
                "INQ": "INQ",
                "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            "tablets": {
                "iPad": "iPad|iPad.*Mobile",
                "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
                "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y",
                "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
                "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b",
                "BlackBerryTablet": "PlayBook|RIM Tablet",
                "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
                "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                "IRUTablet": "M702pro",
                "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                "NokiaLumiaTablet": "Lumia 2520",
                "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                "FlyTablet": "IQ310|Fly Vision",
                "bqTablet": "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus",
                "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                "NecTablet": "\\bN-06D|\\bN-08D",
                "PantechTablet": "Pantech.*P4100",
                "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
                "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                "ZyncTablet": "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
                "NabiTablet": "Android.*\\bNabi",
                "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                "PlaystationTablet": "Playstation.*(Portable|Vita)",
                "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                "GalapadTablet": "Android.*\\bG1\\b",
                "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
                "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                "DPSTablet": "DPS Dream 9|DPS Dual 7",
                "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
                "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
                "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
                "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                "iMobileTablet": "i-mobile i-note",
                "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
                "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                "AMPETablet": "Android.* A78 ",
                "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                "TecnoTablet": "TECNO P9",
                "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                "FX2Tablet": "FX2 PAD7|FX2 PAD10",
                "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                "CaptivaTablet": "CAPTIVA PAD",
                "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                "JaytechTablet": "TPC-PA762",
                "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
                "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
                "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                "UbislateTablet": "UbiSlate[\\s]?7C",
                "PocketBookTablet": "Pocketbook",
                "KocasoTablet": "\\b(TB-1207)\\b",
                "HisenseTablet": "\\b(F5281|E2371)\\b",
                "Hudl": "Hudl HT7S3|Hudl 2",
                "TelstraTablet": "T-Hub2",
                "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b"
            },
            "oss": {
                "AndroidOS": "Android",
                "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
                "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad",
                "MeeGoOS": "MeeGo",
                "MaemoOS": "Maemo",
                "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
                "webOS": "webOS|hpwOS",
                "badaOS": "\\bBada\\b",
                "BREWOS": "BREW"
            },
            "uas": {
                "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
                "Dolfin": "\\bDolfin\\b",
                "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+|Coast\/[0-9.]+",
                "Skyfire": "Skyfire",
                "Edge": "Mobile Safari\/[.0-9]* Edge",
                "IE": "IEMobile|MSIEMobile",
                "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                "Bolt": "bolt",
                "TeaShark": "teashark",
                "Blazer": "Blazer",
                "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                "UCBrowser": "UC.*Browser|UCWEB",
                "baiduboxapp": "baiduboxapp",
                "baidubrowser": "baidubrowser",
                "DiigoBrowser": "DiigoBrowser",
                "Puffin": "Puffin",
                "Mercury": "\\bMercury\\b",
                "ObigoBrowser": "Obigo",
                "NetFront": "NF-Browser",
                "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            "props": {
                "Mobile": "Mobile\/[VER]",
                "Build": "Build\/[VER]",
                "Version": "Version\/[VER]",
                "VendorID": "VendorID\/[VER]",
                "iPad": "iPad.*CPU[a-z ]+[VER]",
                "iPhone": "iPhone.*CPU[a-z ]+[VER]",
                "iPod": "iPod.*CPU[a-z ]+[VER]",
                "Kindle": "Kindle\/[VER]",
                "Chrome": ["Chrome\/[VER]", "CriOS\/[VER]", "CrMo\/[VER]"],
                "Coast": ["Coast\/[VER]"],
                "Dolfin": "Dolfin\/[VER]",
                "Firefox": ["Firefox\/[VER]", "FxiOS\/[VER]"],
                "Fennec": "Fennec\/[VER]",
                "Edge": "Edge\/[VER]",
                "IE": ["IEMobile\/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident\/[0-9.]+;.*rv:[VER]"],
                "NetFront": "NetFront\/[VER]",
                "NokiaBrowser": "NokiaBrowser\/[VER]",
                "Opera": [" OPR\/[VER]", "Opera Mini\/[VER]", "Version\/[VER]"],
                "Opera Mini": "Opera Mini\/[VER]",
                "Opera Mobi": "Version\/[VER]",
                "UC Browser": "UC Browser[VER]",
                "MQQBrowser": "MQQBrowser\/[VER]",
                "MicroMessenger": "MicroMessenger\/[VER]",
                "baiduboxapp": "baiduboxapp\/[VER]",
                "baidubrowser": "baidubrowser\/[VER]",
                "SamsungBrowser": "SamsungBrowser\/[VER]",
                "Iron": "Iron\/[VER]",
                "Safari": ["Version\/[VER]", "Safari\/[VER]"],
                "Skyfire": "Skyfire\/[VER]",
                "Tizen": "Tizen\/[VER]",
                "Webkit": "webkit[ \/][VER]",
                "PaleMoon": "PaleMoon\/[VER]",
                "Gecko": "Gecko\/[VER]",
                "Trident": "Trident\/[VER]",
                "Presto": "Presto\/[VER]",
                "Goanna": "Goanna\/[VER]",
                "iOS": " \\bi?OS\\b [VER][ ;]{1}",
                "Android": "Android [VER]",
                "BlackBerry": ["BlackBerry[\\w]+\/[VER]", "BlackBerry.*Version\/[VER]", "Version\/[VER]"],
                "BREW": "BREW [VER]",
                "Java": "Java\/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE\/[VER]",
                "Windows NT": "Windows NT [VER]",
                "Symbian": ["SymbianOS\/[VER]", "Symbian\/[VER]"],
                "webOS": ["webOS\/[VER]", "hpwOS\/[VER];"]
            },
            "utils": {
                "Bot": "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
                "DesktopMode": "WPDesktop",
                "TV": "SonyDTV|HbbTV",
                "WebKit": "(webkit)[ \/]([\\w.]+)",
                "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                "Watch": "SM-V700"
            }
        };

        // following patterns come from http://detectmobilebrowsers.com/
        impl.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };

        var hasOwnProp = Object.prototype.hasOwnProperty,
            isArray;

        impl.FALLBACK_PHONE = 'UnknownPhone';
        impl.FALLBACK_TABLET = 'UnknownTablet';
        impl.FALLBACK_MOBILE = 'UnknownMobile';

        isArray = 'isArray' in Array ? Array.isArray : function (value) {
            return Object.prototype.toString.call(value) === '[object Array]';
        };

        function equalIC(a, b) {
            return a != null && b != null && a.toLowerCase() === b.toLowerCase();
        }

        function containsIC(array, value) {
            var valueLC,
                i,
                len = array.length;
            if (!len || !value) {
                return false;
            }
            valueLC = value.toLowerCase();
            for (i = 0; i < len; ++i) {
                if (valueLC === array[i].toLowerCase()) {
                    return true;
                }
            }
            return false;
        }

        function convertPropsToRegExp(object) {
            for (var key in object) {
                if (hasOwnProp.call(object, key)) {
                    object[key] = new RegExp(object[key], 'i');
                }
            }
        }

        function prepareUserAgent(userAgent) {
            return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
        }

        (function init() {
            var key,
                values,
                value,
                i,
                len,
                verPos,
                mobileDetectRules = impl.mobileDetectRules;
            for (key in mobileDetectRules.props) {
                if (hasOwnProp.call(mobileDetectRules.props, key)) {
                    values = mobileDetectRules.props[key];
                    if (!isArray(values)) {
                        values = [values];
                    }
                    len = values.length;
                    for (i = 0; i < len; ++i) {
                        value = values[i];
                        verPos = value.indexOf('[VER]');
                        if (verPos >= 0) {
                            value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                        }
                        values[i] = new RegExp(value, 'i');
                    }
                    mobileDetectRules.props[key] = values;
                }
            }
            convertPropsToRegExp(mobileDetectRules.oss);
            convertPropsToRegExp(mobileDetectRules.phones);
            convertPropsToRegExp(mobileDetectRules.tablets);
            convertPropsToRegExp(mobileDetectRules.uas);
            convertPropsToRegExp(mobileDetectRules.utils);

            // copy some patterns to oss0 which are tested first (see issue#15)
            mobileDetectRules.oss0 = {
                WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
                WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
            };
        })();

        /**
         * Test userAgent string against a set of rules and find the first matched key.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
         * @private
         */
        impl.findMatch = function (rules, userAgent) {
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        return key;
                    }
                }
            }
            return null;
        };

        /**
         * Test userAgent string against a set of rules and return an array of matched keys.
         * @param {Object} rules (key is String, value is RegExp)
         * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
         * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
         * @private
         */
        impl.findMatches = function (rules, userAgent) {
            var result = [];
            for (var key in rules) {
                if (hasOwnProp.call(rules, key)) {
                    if (rules[key].test(userAgent)) {
                        result.push(key);
                    }
                }
            }
            return result;
        };

        /**
         * Check the version of the given property in the User-Agent.
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {String} version or <tt>null</tt> if version not found
         * @private
         */
        impl.getVersionStr = function (propertyName, userAgent) {
            var props = impl.mobileDetectRules.props,
                patterns,
                i,
                len,
                match;
            if (hasOwnProp.call(props, propertyName)) {
                patterns = props[propertyName];
                len = patterns.length;
                for (i = 0; i < len; ++i) {
                    match = patterns[i].exec(userAgent);
                    if (match !== null) {
                        return match[1];
                    }
                }
            }
            return null;
        };

        /**
         * Check the version of the given property in the User-Agent.
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} propertyName
         * @param {String} userAgent
         * @return {Number} version or <tt>NaN</tt> if version not found
         * @private
         */
        impl.getVersion = function (propertyName, userAgent) {
            var version = impl.getVersionStr(propertyName, userAgent);
            return version ? impl.prepareVersionNo(version) : NaN;
        };

        /**
         * Prepare the version number.
         *
         * @param {String} version
         * @return {Number} the version number as a floating number
         * @private
         */
        impl.prepareVersionNo = function (version) {
            var numbers;

            numbers = version.split(/[a-z._ \/\-]/i);
            if (numbers.length === 1) {
                version = numbers[0];
            }
            if (numbers.length > 1) {
                version = numbers[0] + '.';
                numbers.shift();
                version += numbers.join('');
            }
            return Number(version);
        };

        impl.isMobileFallback = function (userAgent) {
            return impl.detectMobileBrowsers.fullPattern.test(userAgent) || impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0, 4));
        };

        impl.isTabletFallback = function (userAgent) {
            return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
        };

        impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
            if (cache.mobile !== undefined) {
                return;
            }
            var phone, tablet, phoneSized;

            // first check for stronger tablet rules, then phone (see issue#5)
            tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
            if (tablet) {
                cache.mobile = cache.tablet = tablet;
                cache.phone = null;
                return; // unambiguously identified as tablet
            }

            phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
            if (phone) {
                cache.mobile = cache.phone = phone;
                cache.tablet = null;
                return; // unambiguously identified as phone
            }

            // our rules haven't found a match -> try more general fallback rules
            if (impl.isMobileFallback(userAgent)) {
                phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
                if (phoneSized === undefined) {
                    cache.mobile = impl.FALLBACK_MOBILE;
                    cache.tablet = cache.phone = null;
                } else if (phoneSized) {
                    cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                    cache.tablet = null;
                } else {
                    cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                    cache.phone = null;
                }
            } else if (impl.isTabletFallback(userAgent)) {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            } else {
                // not mobile at all!
                cache.mobile = cache.tablet = cache.phone = null;
            }
        };

        // t is a reference to a MobileDetect instance
        impl.mobileGrade = function (t) {
            // impl note:
            // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
            // When changes are made in Mobile_Detect.php, copy this method and replace:
            //     $this-> / t.
            //     self::MOBILE_GRADE_(.) / '$1'
            //     , self::VERSION_TYPE_FLOAT / (nothing)
            //     isIOS() / os('iOS')
            //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
            var $isMobile = t.mobile() !== null;

            if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad') >= 4.3 || t.os('iOS') && t.version('iPhone') >= 3.1 || t.os('iOS') && t.version('iPod') >= 3.1 ||

            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            t.version('Android') > 2.1 && t.is('Webkit') ||

            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS') >= 7.0 ||

            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry') >= 6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||

            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            t.version('webOS') >= 1.4 && t.match('Palm|Pre|Pixi') ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||

            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            t.is('Firefox') && t.version('Firefox') >= 12 ||

            // Chrome for Android - Tested on Android 4.0, 4.1 device
            t.is('Chrome') && t.is('AndroidOS') && t.version('Android') >= 4.0 ||

            // Skyfire 4.1 - Tested on Android 2.3 device
            t.is('Skyfire') && t.version('Skyfire') >= 4.1 && t.is('AndroidOS') && t.version('Android') >= 2.3 ||

            // Opera Mobile 11.5-12: Tested on Android 2.3
            t.is('Opera') && t.version('Opera Mobi') > 11 && t.is('AndroidOS') ||

            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||

            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||

            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada') >= 2.0 ||

            // UC Browser - Tested on Android 2.3 device
            (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android') >= 2.3 ||

            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            t.match('Kindle Fire') || t.is('Kindle') && t.version('Kindle') >= 3.0 ||

            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||

            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome') >= 11 && !$isMobile ||

            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari') >= 5.0 && !$isMobile ||

            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox') >= 4.0 && !$isMobile ||

            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE') >= 7.0 && !$isMobile ||

            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera') >= 10 && !$isMobile) {
                return 'A';
            }

            if (t.os('iOS') && t.version('iPad') < 4.3 || t.os('iOS') && t.version('iPhone') < 3.1 || t.os('iOS') && t.version('iPod') < 3.1 ||

            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry') >= 5 && t.version('BlackBerry') < 6 ||

            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            t.version('Opera Mini') >= 5.0 && t.version('Opera Mini') <= 6.5 && (t.version('Android') >= 2.3 || t.is('iOS')) ||

            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||

            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi') >= 11 && t.is('SymbianOS')) {
                return 'B';
            }

            if (
            // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry') < 5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile') <= 5.2) {
                return 'C';
            }

            //All older smartphone platforms and featurephones - Any device that doesn't support media queries
            //will receive the basic, C grade experience.
            return 'C';
        };

        impl.detectOS = function (ua) {
            return impl.findMatch(impl.mobileDetectRules.oss0, ua) || impl.findMatch(impl.mobileDetectRules.oss, ua);
        };

        impl.getDeviceSmallerSide = function () {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
        };

        /**
         * Constructor for MobileDetect object.
         * <br>
         * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
         * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
         *     <strong>Find information how to download and install:</strong>
         *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
         * </div>
         *
         * @example <pre>
         *     var md = new MobileDetect(window.navigator.userAgent);
         *     if (md.mobile()) {
         *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
         *     }
         * </pre>
         *
         * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
         * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
         *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
         *        as phone.
         *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
         *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
         *        for Android</a>.<br>
         *        If you provide a value < 0, then this "fuzzy" check is disabled.
         * @constructor
         * @global
         */
        function MobileDetect(userAgent, maxPhoneWidth) {
            this.ua = prepareUserAgent(userAgent);
            this._cache = {};
            //600dp is typical 7" tablet minimum width
            this.maxPhoneWidth = maxPhoneWidth || 600;
        }

        MobileDetect.prototype = {
            constructor: MobileDetect,

            /**
             * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
             * <br>
             * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
             * <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
             * @function MobileDetect#mobile
             */
            mobile: function mobile() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.mobile;
            },

            /**
             * Returns the detected phone type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
             * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
             * Wolfgang, Alcatel, Nintendo, Amoi, INQ, GenericPhone</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the phone family or producer, e.g. "iPhone"
             * @function MobileDetect#phone
             */
            phone: function phone() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.phone;
            },

            /**
             * Returns the detected tablet type/family string or <tt>null</tt>.
             * <br>
             * The returned tablet (family or producer) is one of following keys:<br>
             * <br><tt>iPad, NexusTablet, SamsungTablet, Kindle, SurfaceTablet, HPTablet, AsusTablet,
             * BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet, AcerTablet,
             * ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet, LenovoTablet,
             * DellTablet, YarvikTablet, MedionTablet, ArnovaTablet, IntensoTablet, IRUTablet,
             * MegafonTablet, EbodaTablet, AllViewTablet, ArchosTablet, AinolTablet,
             * NokiaLumiaTablet, SonyTablet, PhilipsTablet, CubeTablet, CobyTablet, MIDTablet,
             * MSITablet, SMiTTablet, RockChipTablet, FlyTablet, bqTablet, HuaweiTablet,
             * NecTablet, PantechTablet, BronchoTablet, VersusTablet, ZyncTablet,
             * PositivoTablet, NabiTablet, KoboTablet, DanewTablet, TexetTablet,
             * PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
             * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
             * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
             * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
             * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
             * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
             * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
             * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
             * OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet, OndaTablet,
             * JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet, LavaTablet,
             * AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MiTablet, NibiruTablet,
             * NexoTablet, LeaderTablet, UbislateTablet, PocketBookTablet, KocasoTablet,
             * HisenseTablet, Hudl, TelstraTablet, GenericTablet</tt><br>
             * <br>
             * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
             * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
             * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
             * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
             * <br>
             * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
             * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
             * will return <code>UnknownMobile</code>.<br>
             * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
             * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
             * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
             * <br>
             * In most cases you will use the return value just as a boolean.
             *
             * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
             * @function MobileDetect#tablet
             */
            tablet: function tablet() {
                impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
                return this._cache.tablet;
            },

            /**
             * Returns the (first) detected user-agent string or <tt>null</tt>.
             * <br>
             * The returned user-agent is one of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {String} the key for the detected user-agent or <tt>null</tt>
             * @function MobileDetect#userAgent
             */
            userAgent: function userAgent() {
                if (this._cache.userAgent === undefined) {
                    this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgent;
            },

            /**
             * Returns all detected user-agent strings.
             * <br>
             * The array is empty or contains one or more of following keys:<br>
             * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
             * Safari, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Puffin, Mercury,
             * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
             * <br>
             * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
             * cases where a mobile device pretends to be more than one particular browser. You can get the
             * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
             * providing one of the defined keys as first argument to {@link MobileDetect#is}.
             *
             * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
             * @function MobileDetect#userAgents
             */
            userAgents: function userAgents() {
                if (this._cache.userAgents === undefined) {
                    this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
                }
                return this._cache.userAgents;
            },

            /**
             * Returns the detected operating system string or <tt>null</tt>.
             * <br>
             * The operating system is one of following keys:<br>
             * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
             * iOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
             *
             * @returns {String} the key for the detected operating system.
             * @function MobileDetect#os
             */
            os: function os() {
                if (this._cache.os === undefined) {
                    this._cache.os = impl.detectOS(this.ua);
                }
                return this._cache.os;
            },

            /**
             * Get the version (as Number) of the given property in the User-Agent.
             * <br>
             * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
             *          Be careful when comparing this value with '==' operator!
             * @function MobileDetect#version
             */
            version: function version(key) {
                return impl.getVersion(key, this.ua);
            },

            /**
             * Get the version (as String) of the given property in the User-Agent.
             * <br>
             *
             * @param {String} key a key defining a thing which has a version.<br>
             *        You can use one of following keys:<br>
             * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
             * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
             * Opera Mobi, UC Browser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
             * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
             * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
             * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
             *
             * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
             *
             * @function MobileDetect#versionStr
             */
            versionStr: function versionStr(key) {
                return impl.getVersionStr(key, this.ua);
            },

            /**
             * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
             *
             * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
             *        tablet family.<br>
             *        For a complete list of possible values, see {@link MobileDetect#userAgent},
             *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
             *        Additionally you have following keys:<br>
             * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
             *
             * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
             *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
             * @function MobileDetect#is
             */
            is: function is(key) {
                return containsIC(this.userAgents(), key) || equalIC(key, this.os()) || equalIC(key, this.phone()) || equalIC(key, this.tablet()) || containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
            },

            /**
             * Do a quick test against navigator::userAgent.
             *
             * @param {String|RegExp} pattern the pattern, either as String or RegExp
             *                        (a string will be converted to a case-insensitive RegExp).
             * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
             * @function MobileDetect#match
             */
            match: function match(pattern) {
                if (!(pattern instanceof RegExp)) {
                    pattern = new RegExp(pattern, 'i');
                }
                return pattern.test(this.ua);
            },

            /**
             * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
             * <br>
             * Obviously this method makes sense in browser environments only (not for Node.js)!
             * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
             *        The argument is optional and if not present or falsy, the value of the constructor is taken.
             * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
             *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
             *          Will always return <code>undefined</code> server-side.
             */
            isPhoneSized: function isPhoneSized(maxPhoneWidth) {
                return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
            },

            /**
             * Returns the mobile grade ('A', 'B', 'C').
             *
             * @returns {String} one of the mobile grades ('A', 'B', 'C').
             * @function MobileDetect#mobileGrade
             */
            mobileGrade: function mobileGrade() {
                if (this._cache.grade === undefined) {
                    this._cache.grade = impl.mobileGrade(this);
                }
                return this._cache.grade;
            }
        };

        // environment-dependent
        if (typeof window !== 'undefined' && window.screen) {
            MobileDetect.isPhoneSized = function (maxPhoneWidth) {
                return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
            };
        } else {
            MobileDetect.isPhoneSized = function () {};
        }

        // should not be replaced by a completely new object - just overwrite existing methods
        MobileDetect._impl = impl;

        MobileDetect.version = '1.4.0 2017-12-09';

        return MobileDetect;
    }); // end of call of define()
})(function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) {
            module.exports = factory();
        };
    } else if (true) {
        return __webpack_require__("LGuY");
    } else if (typeof window !== 'undefined') {
        return function (factory) {
            window.MobileDetect = factory();
        };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
}());

/***/ }),

/***/ "g6LU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map