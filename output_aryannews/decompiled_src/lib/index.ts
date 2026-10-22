const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f || (m.f = ['assets/ArticleModal-BGWtDsL3.js', 'assets/jsx-runtime-Cx0BB4qO.js', 'assets/vendor-icons-Cs9ApT42.js', 'assets/categories-DdU3ABrF.js', 'assets/QuickReadModal-xu-LBRQU.js', 'assets/SubmitNewsModal-YbX-dBIH.js', 'assets/BookmarksModal-CFjyJLcW.js', 'assets/LegalModal-D8sley9R.js', 'assets/AdminPanel-CMpiX2r1.js', 'assets/mediaHelper-C8t4LrS_.js'])) => i.map(i => d[i]);
import { i as e, n as t, r as n, t as r } from './jsx-runtime-Cx0BB4qO.js';
import { $ as i, At as a, Ct as o, Dt as s, Et as c, H as l, I as u, J as d, L as f, M as p, Mt as m, N as h, O as g, P as _, Q as v, R as y, S as b, St as x, U as S, V as ee, _ as te, _t as C, b as w, ct as ne, dt as re, g as ie, gt as ae, i as oe, l as se, lt as ce, mt as le, n as ue, nt as de, r as fe, rt as pe, st as me, t as T, tt as he, u as ge, v as _e, wt as ve, x as ye, y as be, yt as xe, z as E } from './vendor-icons-Cs9ApT42.js';
import { n as D, t as O } from './categories-DdU3ABrF.js';
import { n as Se, t as k } from './mediaHelper-C8t4LrS_.js';
import { t as Ce } from './vendor-supabase-VaY9-frs.js';
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e => {
    for (let t of e) if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, {
    childList: true,
    subtree: true
  });
  function t(e) {
    let t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`, t;
  }
  function n(e) {
    if (e.ep) return;
    e.ep = true;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var we = t(e => {
    function t(e, t) {
      var n = e.length;
      e.push(t);
      a: for (; 0 < n;) {
        var r = n - 1 >>> 1,
          a = e[r];
        if (0 < i(a, t)) {
          e[r] = t;
          e[n] = a;
          n = r;
        } else break a;
      }
    }
    function n(e) {
      return e.length === 0 ? null : e[0];
    }
    function r(e) {
      if (e.length === 0) return null;
      var t = e[0],
        n = e.pop();
      if (n !== t) {
        e[0] = n;
        a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
          var s = 2 * (r + 1) - 1,
            c = e[s],
            l = s + 1,
            u = e[l];
          if (0 > i(c, n)) {
            if (l < a && 0 > i(u, c)) {
              e[r] = u;
              e[l] = n;
              r = l;
            } else {
              e[r] = c;
              e[s] = n;
              r = s;
            }
          } else if (l < a && 0 > i(u, n)) {
            e[r] = u;
            e[l] = n;
            r = l;
          } else break a;
        }
      }
      return t;
    }
    function i(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return n === 0 ? e.id - t.id : n;
    }
    if (e.unstable_now = undefined, typeof performance == `object` && typeof performance.now == `function`) {
      var a = performance;
      e.unstable_now = function () {
        return a.now();
      };
    } else {
      var o = Date,
        s = o.now();
      e.unstable_now = function () {
        return o.now() - s;
      };
    }
    var c = [],
      l = [],
      u = 1,
      d = null,
      f = 3,
      p = false,
      m = false,
      h = false,
      g = false,
      _ = typeof setTimeout == `function` ? setTimeout : null,
      v = typeof clearTimeout == `function` ? clearTimeout : null,
      y = typeof setImmediate < `u` ? setImmediate : null;
    function b(e) {
      for (var i = n(l); i !== null;) {
        if (i.callback === null) r(l);else if (i.startTime <= e) {
          r(l);
          i.sortIndex = i.expirationTime;
          t(c, i);
        } else break;
        i = n(l);
      }
    }
    function x(e) {
      if (h = false, b(e), !m) {
        if (n(c) !== null) {
          m = true;
          S || (S = true, re());
        } else {
          var t = n(l);
          t !== null && oe(x, t.startTime - e);
        }
      }
    }
    var S = false,
      ee = -1,
      te = 5,
      C = -1;
    function w() {
      return g ? true : !(e.unstable_now() - C < te);
    }
    function ne() {
      if (g = false, S) {
        var t = e.unstable_now();
        C = t;
        var i = true;
        try {
          a: {
            m = false;
            h && (h = false, v(ee), ee = -1);
            p = true;
            var a = f;
            try {
              b: {
                for (b(t), d = n(c); d !== null && !(d.expirationTime > t && w());) {
                  var o = d.callback;
                  if (typeof o == `function`) {
                    d.callback = null;
                    f = d.priorityLevel;
                    var s = o(d.expirationTime <= t);
                    if (t = e.unstable_now(), typeof s == `function`) {
                      d.callback = s;
                      b(t);
                      i = true;
                      break b;
                    }
                    d === n(c) && r(c);
                    b(t);
                  } else r(c);
                  d = n(c);
                }
                if (d !== null) i = true;else {
                  var u = n(l);
                  u !== null && oe(x, u.startTime - t);
                  i = false;
                }
              }
              break a;
            } finally {
              d = null;
              f = a;
              p = false;
            }
            i = undefined;
          }
        } finally {
          if (i) {
            re();
          } else {
            S = false;
          }
        }
      }
    }
    var re;
    if (typeof y == `function`) re = function () {
      y(ne);
    };else if (typeof MessageChannel < `u`) {
      var ie = new MessageChannel(),
        ae = ie.port2;
      ie.port1.onmessage = ne;
      re = function () {
        ae.postMessage(null);
      };
    } else re = function () {
      _(ne, 0);
    };
    function oe(t, n) {
      ee = _(function () {
        t(e.unstable_now());
      }, n);
    }
    e.unstable_IdlePriority = 5;
    e.unstable_ImmediatePriority = 1;
    e.unstable_LowPriority = 4;
    e.unstable_NormalPriority = 3;
    e.unstable_Profiling = null;
    e.unstable_UserBlockingPriority = 2;
    e.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    e.unstable_forceFrameRate = function (e) {
      if (0 > e || 125 < e) {
        console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`);
      } else {
        te = 0 < e ? Math.floor(1e3 / e) : 5;
      }
    };
    e.unstable_getCurrentPriorityLevel = function () {
      return f;
    };
    e.unstable_next = function (e) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = f;
      }
      var n = f;
      f = t;
      try {
        return e();
      } finally {
        f = n;
      }
    };
    e.unstable_requestPaint = function () {
      g = true;
    };
    e.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var n = f;
      f = e;
      try {
        return t();
      } finally {
        f = n;
      }
    };
    e.unstable_scheduleCallback = function (r, i, a) {
      var o = e.unstable_now();
      switch (typeof a == `object` && a ? (a = a.delay, a = typeof a == `number` && 0 < a ? o + a : o) : a = o, r) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = a + s, r = {
        id: u++,
        callback: i,
        priorityLevel: r,
        startTime: a,
        expirationTime: s,
        sortIndex: -1
      }, a > o ? (r.sortIndex = a, t(l, r), n(c) === null && r === n(l) && (h ? (v(ee), ee = -1) : h = true, oe(x, a - o))) : (r.sortIndex = s, t(c, r), m || p || (m = true, S || (S = true, re()))), r;
    };
    e.unstable_shouldYield = w;
    e.unstable_wrapCallback = function (e) {
      var t = f;
      return function () {
        var n = f;
        f = t;
        try {
          return e.apply(this, arguments);
        } finally {
          f = n;
        }
      };
    };
  }),
  Te = t((e, t) => {
    t.exports = we();
  }),
  Ee = t(e => {
    var t = m();
    function n(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function r() {}
    var i = {
        d: {
          f: r,
          r: function () {
            throw Error(n(522));
          },
          D: r,
          C: r,
          L: r,
          m: r,
          X: r,
          S: r,
          M: r
        },
        p: 0,
        findDOMNode: null
      },
      a = Symbol.for(`react.portal`),
      o = Symbol.for(`react.recoverable`),
      s = Symbol.for(`react.optimistic_key`);
    function c(e, t, n) {
      var r = 3 < arguments.length && arguments[3] !== undefined ? arguments[3] : null;
      return {
        $$typeof: a,
        key: r == null ? null : r === s ? s : `` + r,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function u(e, t) {
      if (e === `font`) return ``;
      if (typeof t == `string`) return t === `use-credentials` ? t : ``;
    }
    e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i;
    e.browser = function (e) {
      return {
        $$typeof: o,
        _reason: e
      };
    };
    e.createPortal = function (e, t) {
      var r = 2 < arguments.length && arguments[2] !== undefined ? arguments[2] : null;
      if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(n(299));
      return c(e, t, null, r);
    };
    e.flushSync = function (e) {
      var t = l.T,
        n = i.p;
      try {
        if (l.T = null, i.p = 2, e) return e();
      } finally {
        l.T = t;
        i.p = n;
        i.d.f();
      }
    };
    e.preconnect = function (e, t) {
      typeof e == `string` && (t ? (t = t.crossOrigin, t = typeof t == `string` ? t === `use-credentials` ? t : `` : undefined) : t = null, i.d.C(e, t));
    };
    e.prefetchDNS = function (e) {
      typeof e == `string` && i.d.D(e);
    };
    e.preinit = function (e, t) {
      if (typeof e == `string` && t && typeof t.as == `string`) {
        var n = t.as,
          r = u(n, t.crossOrigin),
          a = typeof t.integrity == `string` ? t.integrity : undefined,
          o = typeof t.fetchPriority == `string` ? t.fetchPriority : undefined;
        if (n === `style`) {
          i.d.S(e, typeof t.precedence == `string` ? t.precedence : undefined, {
            crossOrigin: r,
            integrity: a,
            fetchPriority: o
          });
        } else {
          n === `script` && i.d.X(e, {
            crossOrigin: r,
            integrity: a,
            fetchPriority: o,
            nonce: typeof t.nonce == `string` ? t.nonce : undefined
          });
        }
      }
    };
    e.preinitModule = function (e, t) {
      if (typeof e == `string`) {
        if (typeof t == `object` && t) {
          if (t.as == null || t.as === `script`) {
            var n = u(t.as, t.crossOrigin);
            i.d.M(e, {
              crossOrigin: n,
              integrity: typeof t.integrity == `string` ? t.integrity : undefined,
              nonce: typeof t.nonce == `string` ? t.nonce : undefined,
              fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
            });
          }
        } else t ?? i.d.M(e);
      }
    };
    e.preload = function (e, t) {
      if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
        var n = t.as,
          r = u(n, t.crossOrigin);
        i.d.L(e, n, {
          crossOrigin: r,
          integrity: typeof t.integrity == `string` ? t.integrity : undefined,
          nonce: typeof t.nonce == `string` ? t.nonce : undefined,
          type: typeof t.type == `string` ? t.type : undefined,
          fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined,
          referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : undefined,
          imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : undefined,
          imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : undefined,
          media: typeof t.media == `string` ? t.media : undefined
        });
      }
    };
    e.preloadModule = function (e, t) {
      if (typeof e == `string`) {
        if (t) {
          var n = u(t.as, t.crossOrigin);
          i.d.m(e, {
            as: typeof t.as == `string` && t.as !== `script` ? t.as : undefined,
            crossOrigin: n,
            integrity: typeof t.integrity == `string` ? t.integrity : undefined,
            nonce: typeof t.nonce == `string` ? t.nonce : undefined,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
          });
        } else i.d.m(e);
      }
    };
    e.requestFormReset = function (e) {
      i.d.r(e);
    };
    e.unstable_batchedUpdates = function (e, t) {
      return e(t);
    };
    e.useFormState = function (e, t, n) {
      return l.H.useFormState(e, t, n);
    };
    e.useFormStatus = function () {
      return l.H.useHostTransitionStatus();
    };
    e.version = `19.3.0`;
  }),
  De = t((e, t) => {
    function n() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
    }
    n();
    t.exports = Ee();
  }),
  A = t(event => {
    var t = Te(),
      n = m(),
      r = De();
    function i(e) {
      var t = `https://react.dev/errors/` + e;
      if (1 < arguments.length) {
        t += `?args[]=` + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++) t += `&args[]=` + encodeURIComponent(arguments[n]);
      }
      return `Minified React error #` + e + `; visit ` + t + ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
    }
    function a(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function o(e) {
      for (var t = e, n = t; n && !n.alternate;) {
        t = n;
        t.flags & 4098 && (e = t.return);
        n = t.return;
      }
      for (; t.return;) t = t.return;
      return t.tag === 3 ? e : null;
    }
    function s(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function c(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function l(e) {
      if (o(e) !== e) throw Error(i(188));
    }
    function u(e) {
      var t = e.alternate;
      if (!t) {
        if (t = o(e), t === null) throw Error(i(188));
        return t === e ? e : null;
      }
      for (var n = e, r = t;;) {
        var a = n.return;
        if (a === null) break;
        var s = a.alternate;
        if (s === null) {
          if (r = a.return, r !== null) {
            n = r;
            continue;
          }
          break;
        }
        if (a.child === s.child) {
          for (s = a.child; s;) {
            if (s === n) return l(a), e;
            if (s === r) return l(a), t;
            s = s.sibling;
          }
          throw Error(i(188));
        }
        if (n.return !== r.return) {
          n = a;
          r = s;
        } else {
          for (var c = false, u = a.child; u;) {
            if (u === n) {
              c = true;
              n = a;
              r = s;
              break;
            }
            if (u === r) {
              c = true;
              r = a;
              n = s;
              break;
            }
            u = u.sibling;
          }
          if (!c) {
            for (u = s.child; u;) {
              if (u === n) {
                c = true;
                n = s;
                r = a;
                break;
              }
              if (u === r) {
                c = true;
                r = s;
                n = a;
                break;
              }
              u = u.sibling;
            }
            if (!c) throw Error(i(189));
          }
        }
        if (n.alternate !== r) throw Error(i(190));
      }
      if (n.tag !== 3) throw Error(i(188));
      return n.stateNode.current === n ? e : t;
    }
    function d(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null;) {
        if (t = d(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function f(e, t, n, r, i, a) {
      for (; e !== null;) {
        if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && f(e.child, t, n, r, i, a)) return true;
        e = e.sibling;
      }
      return false;
    }
    function p(e) {
      for (e = e.return; e !== null;) {
        if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
        e = e.return;
      }
      return null;
    }
    function h(e) {
      var t = false;
      for (e = e.return; e !== null && (e.tag === 4 && (t = true), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
      return t;
    }
    function g(e) {
      var t = [null, null],
        n = p(e);
      return n === null || _(t, e, n.child, {
        foundSelf: false
      }), t;
    }
    function _(e, t, n, r) {
      for (; n !== null;) {
        if (n === t) r.foundSelf = true;else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
          if (r.foundSelf) return e[1] = n, true;
          e[0] = n;
        } else if ((n.tag !== 22 || n.memoizedState === null) && _(e, t, n.child, r)) return true;
        n = n.sibling;
      }
      return false;
    }
    function v(e) {
      switch (e.tag) {
        case 5:
        case 27:
        case 6:
          return e.stateNode;
        case 3:
          return e.stateNode.containerInfo;
        default:
          throw Error(i(559));
      }
    }
    var y = null,
      b = null;
    function x(e, t, n) {
      return e === n || e === t && (y = e, true);
    }
    function S(e, t, n) {
      return e === n ? (b = e, false) : e === t && (b !== null && (y = e), true);
    }
    function ee(e) {
      if (e === null) return null;
      do e = e === null ? null : e.return; while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
      return e || null;
    }
    function te(e, t, n) {
      for (var r = 0, i = e; i; i = n(i)) r++;
      i = 0;
      for (var a = t; a; a = n(a)) i++;
      for (; 0 < r - i;) {
        e = n(e);
        r--;
      }
      for (; 0 < i - r;) {
        t = n(t);
        i--;
      }
      for (; r--;) {
        if (e === t || t !== null && e === t.alternate) return e;
        e = n(e);
        t = n(t);
      }
      return null;
    }
    var C = Object.assign,
      w = Symbol.for(`react.element`),
      ne = Symbol.for(`react.transitional.element`),
      re = Symbol.for(`react.portal`),
      ie = Symbol.for(`react.fragment`),
      ae = Symbol.for(`react.strict_mode`),
      oe = Symbol.for(`react.profiler`),
      se = Symbol.for(`react.consumer`),
      ce = Symbol.for(`react.context`),
      le = Symbol.for(`react.forward_ref`),
      ue = Symbol.for(`react.suspense`),
      de = Symbol.for(`react.suspense_list`),
      fe = Symbol.for(`react.memo`),
      pe = Symbol.for(`react.lazy`),
      me = Symbol.for(`react.activity`),
      T = Symbol.for(`react.legacy_hidden`),
      he = Symbol.for(`react.memo_cache_sentinel`),
      ge = Symbol.for(`react.view_transition`),
      _e = Symbol.for(`react.recoverable`),
      ve = Symbol.iterator;
    function ye(e) {
      return typeof e != `object` || !e ? null : (e = ve && e[ve] || e[`@@iterator`], typeof e == `function` ? e : null);
    }
    var be = Symbol.for(`react.client.reference`);
    function xe(e) {
      if (e == null) return null;
      if (typeof e == `function`) return e.$$typeof === be ? null : e.displayName || e.name || null;
      if (typeof e == `string`) return e;
      switch (e) {
        case ie:
          return `Fragment`;
        case oe:
          return `Profiler`;
        case ae:
          return `StrictMode`;
        case ue:
          return `Suspense`;
        case de:
          return `SuspenseList`;
        case me:
          return `Activity`;
        case ge:
          return `ViewTransition`;
      }
      if (typeof e == `object`) switch (e.$$typeof) {
        case re:
          return `Portal`;
        case ce:
          return e.displayName || `Context`;
        case se:
          return (e._context.displayName || `Context`) + `.Consumer`;
        case le:
          var t = e.render;
          return e = e.displayName, e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`), e;
        case fe:
          return t = e.displayName || null, t === null ? xe(e.type) || `Memo` : t;
        case pe:
          t = e._payload;
          e = e._init;
          try {
            return xe(e(t));
          } catch {}
      }
      return null;
    }
    var E = Array.isArray,
      D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      O = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
      Se = {
        pending: false,
        data: null,
        method: null,
        action: null
      },
      k = [],
      Ce = -1;
    function we(e) {
      return {
        current: e
      };
    }
    function Ee(e) {
      0 > Ce || (e.current = k[Ce], k[Ce] = null, Ce--);
    }
    function A(e, t) {
      Ce++;
      k[Ce] = e.current;
      e.current = t;
    }
    var Oe = we(null),
      j = we(null),
      ke = we(null),
      M = we(null);
    function Ae(e, t) {
      switch (A(ke, t), A(j, e), A(Oe, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) {
            t = up(t);
            e = dp(t, e);
          } else switch (e) {
            case `svg`:
              e = 1;
              break;
            case `math`:
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      Ee(Oe);
      A(Oe, e);
    }
    function je() {
      Ee(Oe);
      Ee(j);
      Ee(ke);
    }
    function Me(e) {
      var t = e.memoizedState;
      t !== null && (sh._currentValue = t.memoizedState, A(M, e));
      t = Oe.current;
      var n = dp(t, e.type);
      t !== n && (A(j, e), A(Oe, n));
    }
    function Ne(e) {
      j.current === e && (Ee(Oe), Ee(j));
      M.current === e && (Ee(M), sh._currentValue = Se);
    }
    var Pe, Fe;
    function Ie(e) {
      if (Pe === undefined) try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Pe = t && t[1] || ``;
        Fe = -1 < e.stack.indexOf(`
    at`) ? ` (<anonymous>)` : -1 < e.stack.indexOf(`@`) ? `@unknown:0:0` : ``;
      }
      return `
` + Pe + e + Fe;
    }
    var Le = false;
    function Re(e, t) {
      if (!e || Le) return ``;
      Le = true;
      var n = Error.prepareStackTrace;
      Error.prepareStackTrace = undefined;
      try {
        var r = {
          DetermineComponentFrameRoot: function () {
            try {
              if (t) {
                var n = function () {
                  throw Error();
                };
                if (Object.defineProperty(n.prototype, 'props', {
                  set: function () {
                    throw Error();
                  }
                }), typeof Reflect == `object` && Reflect.construct) {
                  try {
                    Reflect.construct(n, []);
                  } catch (e) {
                    var r = e;
                  }
                  Reflect.construct(e, [], n);
                } else {
                  try {
                    n.call();
                  } catch (e) {
                    r = e;
                  }
                  n = false;
                  try {
                    var i = Object.getOwnPropertyDescriptor(e.prototype, `props`);
                    Object.defineProperty(e.prototype, 'props', {
                      configurable: true,
                      set: function () {
                        throw Error();
                      }
                    });
                    n = true;
                    new e();
                  } finally {
                    n && (i === undefined ? delete e.prototype.props : Object.defineProperty(e.prototype, 'props', i));
                  }
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  r = e;
                }
                (n = e()) && typeof n.catch == `function` && n.catch(function () {});
              }
            } catch (e) {
              if (e && r && typeof e.stack == `string`) return [e.stack, r.stack];
            }
            return [null, null];
          }
        };
        r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
        var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
        i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: `DetermineComponentFrameRoot`
        });
        var a = r.DetermineComponentFrameRoot(),
          o = a[0],
          s = a[1];
        if (o && s) {
          var c = o.split(`
`),
            l = s.split(`
`);
          for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) r++;
          for (; i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);) i++;
          if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
          for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
            if (r !== 1 || i !== 1) do if (r--, i--, 0 > i || c[r] !== l[i]) {
              var u = `
` + c[r].replace(` at new `, ` at `);
              return e.displayName && u.includes(`<anonymous>`) && (u = u.replace(`<anonymous>`, e.displayName)), u;
            } while (1 <= r && 0 <= i);
            break;
          }
        }
      } finally {
        Le = false;
        Error.prepareStackTrace = n;
      }
      return (n = e ? e.displayName || e.name : ``) ? Ie(n) : ``;
    }
    function ze(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Ie(e.type);
        case 16:
          return Ie(`Lazy`);
        case 13:
          return e.child !== t && t !== null ? Ie(`Suspense Fallback`) : Ie(`Suspense`);
        case 19:
          return Ie(`SuspenseList`);
        case 0:
        case 15:
          return Re(e.type, false);
        case 11:
          return Re(e.type.render, false);
        case 1:
          return Re(e.type, true);
        case 31:
          return Ie(`Activity`);
        case 30:
          return Ie(`ViewTransition`);
        default:
          return ``;
      }
    }
    function Be(e) {
      try {
        var t = ``,
          n = null;
        do {
          t += ze(e, n);
          n = e;
          e = e.return;
        } while (e);
        return t;
      } catch (e) {
        return `
Error generating stack: ` + e.message + `
` + e.stack;
      }
    }
    var Ve = Object.prototype.hasOwnProperty,
      He = t.unstable_scheduleCallback,
      Ue = t.unstable_cancelCallback,
      We = t.unstable_shouldYield,
      Ge = t.unstable_requestPaint,
      N = t.unstable_now,
      Ke = t.unstable_getCurrentPriorityLevel,
      qe = t.unstable_ImmediatePriority,
      Je = t.unstable_UserBlockingPriority,
      Ye = t.unstable_NormalPriority,
      Xe = t.unstable_LowPriority,
      Ze = t.unstable_IdlePriority,
      Qe = t.log,
      $e = t.unstable_setDisableYieldValue,
      et = null,
      tt = null;
    function nt(e) {
      if (typeof Qe == `function` && $e(e), tt && typeof tt.setStrictMode == `function`) try {
        tt.setStrictMode(et, e);
      } catch {}
    }
    var rt = Math.clz32 ? Math.clz32 : ot,
      it = Math.log,
      at = Math.LN2;
    function ot(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (it(e) / at | 0) | 0;
    }
    var st = 256,
      ct = 262144,
      lt = 4194304;
    function ut(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & -e;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function dt(e, t, n) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var i = 0,
        a = e.suspendedLanes,
        o = e.pingedLanes;
      e = e.warmLanes;
      var s = r & 134217727;
      return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ut(n))) : i = ut(o) : i = ut(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ut(n))) : i = ut(o)) : i = ut(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
    }
    function ft(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function pt(e, t) {
      t & 8 && (t |= t & 32);
      var n = e.entangledLanes;
      if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
        var r = 31 - rt(n),
          i = 1 << r;
        t |= e[r];
        n &= ~i;
      }
      return t;
    }
    function mt(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function ht() {
      var e = lt;
      return lt <<= 1, !(lt & 62914560) && (lt = 4194304), e;
    }
    function gt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e);
      return t;
    }
    function P(e, t) {
      e.pendingLanes |= t;
      t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function _t(e, t, n, r, i, a) {
      var o = e.pendingLanes;
      e.pendingLanes = n;
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
      e.warmLanes = 0;
      e.expiredLanes &= n;
      e.entangledLanes &= n;
      e.errorRecoveryDisabledLanes &= n;
      e.shellSuspendCounter = 0;
      var s = e.entanglements,
        c = e.expirationTimes,
        l = e.hiddenUpdates;
      for (n = o & ~n; 0 < n;) {
        var u = 31 - rt(n),
          d = 1 << u;
        s[u] = 0;
        c[u] = -1;
        var f = l[u];
        if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
          var p = f[u];
          p !== null && (p.lane &= -536870913);
        }
        n &= ~d;
      }
      r !== 0 && F(e, r, 0);
      a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
    }
    function F(e, t, n) {
      e.pendingLanes |= t;
      e.suspendedLanes &= ~t;
      var r = 31 - rt(t);
      e.entangledLanes |= t;
      e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
    }
    function vt(e, t) {
      var n = e.entangledLanes |= t;
      for (e = e.entanglements; n;) {
        var r = 31 - rt(n),
          i = 1 << r;
        i & t | e[r] & t && (e[r] |= t);
        n &= ~i;
      }
    }
    function yt(e, t) {
      var n = t & -t;
      return n = n & 42 ? 1 : bt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
    }
    function bt(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function xt(e) {
      return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
    }
    function St() {
      var e = O.p;
      return e === 0 ? (e = window.event, e === undefined ? 32 : Ch(e.type)) : e;
    }
    function Ct(e, t) {
      var n = O.p;
      try {
        return O.p = e, t();
      } finally {
        O.p = n;
      }
    }
    var wt = Math.random().toString(36).slice(2),
      Tt = `__reactFiber$` + wt,
      Et = `__reactProps$` + wt,
      Dt = `__reactContainer$` + wt,
      Ot = `__reactEvents$` + wt,
      kt = `__reactListeners$` + wt,
      At = `__reactHandles$` + wt,
      jt = `__reactResources$` + wt,
      Mt = `__reactMarker$` + wt,
      Nt = `__reactLoad$` + wt;
    function Pt(e) {
      delete e[Tt];
      delete e[Et];
      delete e[kt];
      delete e[At];
    }
    function Ft(e) {
      var t;
      if (t = e[Tt]) return t;
      for (var n = e.parentNode; n;) {
        if (t = n[Dt] || n[Tt]) {
          if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
            if (n = e[Tt]) return n;
            e = fm(e);
          }
          return t;
        }
        e = n;
        n = e.parentNode;
      }
      return null;
    }
    function It(e) {
      if (e = e[Tt] || e[Dt]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Lt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(i(33));
    }
    function Rt(e) {
      var t = e[jt];
      return t ||= e[jt] = {
        hoistableStyles: new Map(),
        hoistableScripts: new Map()
      }, t;
    }
    function zt(e) {
      e[Mt] = true;
    }
    function Bt(e) {
      e[Nt] = undefined;
    }
    var Vt = new Set(),
      Ht = {};
    function Ut(e, t) {
      Wt(e, t);
      Wt(e + `Capture`, t);
    }
    function Wt(e, t) {
      for (Ht[e] = t, e = 0; e < t.length; e++) Vt.add(t[e]);
    }
    var Gt = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),
      Kt = {},
      qt = {};
    function Jt(e) {
      return Ve.call(qt, e) ? true : Ve.call(Kt, e) ? false : Gt.test(e) ? qt[e] = true : (Kt[e] = true, false);
    }
    var I = false;
    function Yt() {
      var e = I;
      return I = false, e;
    }
    function Xt(e, t, n) {
      if (Jt(t)) {
        if (n === null) e.removeAttribute(t);else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
              e.removeAttribute(t);
              return;
            case `boolean`:
              var r = t.toLowerCase().slice(0, 5);
              if (r !== `data-` && r !== `aria-`) {
                e.removeAttribute(t);
                return;
              }
          }
          e.setAttribute(t, n);
        }
      }
    }
    function Zt(e, t, n) {
      if (n === null) e.removeAttribute(t);else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, n);
      }
    }
    function Qt(e, t, n, r) {
      if (r === null) e.removeAttribute(n);else {
        switch (typeof r) {
          case `undefined`:
          case `function`:
          case `symbol`:
          case `boolean`:
            e.removeAttribute(n);
            return;
        }
        e.setAttributeNS(t, n, r);
      }
    }
    function $t(e) {
      switch (typeof e) {
        case `bigint`:
        case `boolean`:
        case `number`:
        case `string`:
        case `undefined`:
          return e;
        case `object`:
          return e;
        default:
          return ``;
      }
    }
    function en(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
    }
    function tn(e, t, n) {
      var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && r !== undefined && typeof r.get == `function` && typeof r.set == `function`) {
        var i = r.get,
          a = r.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function () {
            return i.call(this);
          },
          set: function (e) {
            n = `` + e;
            a.call(this, e);
          }
        }), Object.defineProperty(e, t, {
          enumerable: r.enumerable
        }), {
          getValue: function () {
            return n;
          },
          setValue: function (e) {
            n = `` + e;
          },
          stopTracking: function () {
            e._valueTracker = null;
            delete e[t];
          }
        };
      }
    }
    function nn(e) {
      if (!e._valueTracker) {
        var t = en(e) ? `checked` : `value`;
        e._valueTracker = tn(e, t, `` + e[t]);
      }
    }
    function rn(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var n = t.getValue(),
        r = ``;
      return e && (r = en(e) ? e.checked ? `true` : `false` : e.value), e = r, e !== n && (t.setValue(e), true);
    }
    var an = /[\n"\\]/g;
    function on(e) {
      return e.replace(an, function (e) {
        return `\\` + e.charCodeAt(0).toString(16) + ` `;
      });
    }
    function sn(e, t, n, r, i, a, o, s) {
      e.name = ``;
      if (o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`) {
        e.type = o;
      } else {
        e.removeAttribute(`type`);
      }
      if (t == null) {
        o !== `submit` && o !== `reset` || e.removeAttribute(`value`);
      } else {
        if (o === `number`) {
          (t === 0 && e.value === `` || e.value != t) && (e.value = `` + $t(t));
        } else {
          e.value !== `` + $t(t) && (e.value = `` + $t(t));
        }
      }
      if (t == null) {
        if (n == null) {
          r != null && e.removeAttribute(`value`);
        } else {
          ln(e, $t(n));
        }
      } else {
        if (o === `number` && e.value == t) {
          ln(e, $t(e.value));
        } else {
          ln(e, $t(t));
        }
      }
      i == null && a != null && (e.defaultChecked = !!a);
      i != null && (e.checked = i && typeof i != `function` && typeof i != `symbol`);
      if (s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`) {
        e.name = `` + $t(s);
      } else {
        e.removeAttribute(`name`);
      }
    }
    function cn(e, t, n, r, i, a, o, s) {
      if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean` && (e.type = a), t != null || n != null) {
        if (!(a !== `submit` && a !== `reset` || t != null)) {
          nn(e);
          return;
        }
        n = n == null ? `` : `` + $t(n);
        t = t == null ? n : `` + $t(t);
        s || t === e.value || (e.value = t);
        e.defaultValue = t;
      }
      r ??= i;
      r = typeof r != `function` && typeof r != `symbol` && !!r;
      e.checked = s ? e.checked : !!r;
      e.defaultChecked = !!r;
      o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean` && (e.name = o);
      nn(e);
    }
    function ln(e, t) {
      e.defaultValue !== `` + t && (e.defaultValue = `` + t);
    }
    function un(e, t, n, r) {
      if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t[`$` + n[i]] = true;
        for (n = 0; n < e.length; n++) {
          i = t.hasOwnProperty(`$` + e[n].value);
          e[n].selected !== i && (e[n].selected = i);
          i && r && (e[n].defaultSelected = true);
        }
      } else {
        for (n = `` + $t(n), t = null, i = 0; i < e.length; i++) {
          if (e[i].value === n) {
            e[i].selected = true;
            r && (e[i].defaultSelected = true);
            return;
          }
          t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = true);
      }
    }
    function dn(e, t, n) {
      if (t != null && (t = `` + $t(t), t !== e.value && (e.value = t), n == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = n == null ? `` : `` + $t(n);
    }
    function L(e, t, n, r) {
      if (t == null) {
        if (r != null) {
          if (n != null) throw Error(i(92));
          if (E(r)) {
            if (1 < r.length) throw Error(i(93));
            r = r[0];
          }
          n = r;
        }
        n ??= ``;
        t = n;
      }
      n = $t(t);
      e.defaultValue = n;
      r = e.textContent;
      r === n && r !== `` && r !== null && (e.value = r);
      nn(e);
    }
    function fn(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var pn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
    function mn(e, t, n) {
      var r = t.indexOf(`--`) === 0;
      if (n == null || typeof n == `boolean` || n === ``) {
        if (r) {
          e.setProperty(t, ``);
        } else {
          if (t === `float`) {
            e.cssFloat = ``;
          } else {
            e[t] = ``;
          }
        }
      } else {
        if (r) {
          e.setProperty(t, n);
        } else {
          if (typeof n != `number` || n === 0 || pn.has(t)) {
            if (t === `float`) {
              e.cssFloat = n;
            } else {
              e[t] = (`` + n).trim();
            }
          } else {
            e[t] = n + `px`;
          }
        }
      }
    }
    function hn(e, t, n) {
      if (t != null && typeof t != `object`) throw Error(i(62));
      if (e = e.style, n != null) {
        for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf(`--`) === 0 ? e.setProperty(r, ``) : r === `float` ? e.cssFloat = `` : e[r] = ``, I = true);
        for (var a in t) {
          r = t[a];
          t.hasOwnProperty(a) && n[a] !== r && (mn(e, a, r), I = true);
        }
      } else for (var o in t) t.hasOwnProperty(o) && mn(e, o, t[o]);
    }
    function gn(e) {
      if (e.indexOf(`-`) === -1) return false;
      switch (e) {
        case `annotation-xml`:
        case `color-profile`:
        case `font-face`:
        case `font-face-src`:
        case `font-face-uri`:
        case `font-face-format`:
        case `font-face-name`:
        case `missing-glyph`:
          return false;
        default:
          return true;
      }
    }
    var _n = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]),
      vn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function yn(e) {
      return vn.test(`` + e) ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')` : e;
    }
    function bn() {}
    var xn = null;
    function Sn(event) {
      return event = event.target || event.srcElement || window, event.correspondingUseElement && (event = event.correspondingUseElement), event.nodeType === 3 ? event.parentNode : event;
    }
    var Cn = null,
      wn = null;
    function R(e) {
      var t = It(e);
      if (t && (e = t.stateNode)) {
        var n = e[Et] || null;
        a: switch (e = t.stateNode, t.type) {
          case `input`:
            if (sn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === `radio` && t != null) {
              for (n = e; n.parentNode;) n = n.parentNode;
              for (n = n.querySelectorAll(`input[name="` + on(`` + t) + `"][type="radio"]`), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                  var a = r[Et] || null;
                  if (!a) throw Error(i(90));
                  sn(r, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name);
                }
              }
              for (t = 0; t < n.length; t++) {
                r = n[t];
                r.form === e.form && rn(r);
              }
            }
            break a;
          case `textarea`:
            dn(e, n.value, n.defaultValue);
            break a;
          case `select`:
            t = n.value;
            t != null && un(e, !!n.multiple, t, false);
        }
      }
    }
    var z = false;
    function Tn(e, t, n) {
      if (z) return e(t, n);
      z = true;
      try {
        return e(t);
      } finally {
        if (z = false, (Cn !== null || wn !== null) && (zd(), Cn && (t = Cn, e = wn, wn = Cn = null, R(t), e))) for (t = 0; t < e.length; t++) R(e[t]);
      }
    }
    function En(e, t) {
      var n = e.stateNode;
      if (n === null) return null;
      var r = n[Et] || null;
      if (r === null) return null;
      n = r[t];
      a: switch (t) {
        case `onClick`:
        case `onClickCapture`:
        case `onDoubleClick`:
        case `onDoubleClickCapture`:
        case `onMouseDown`:
        case `onMouseDownCapture`:
        case `onMouseMove`:
        case `onMouseMoveCapture`:
        case `onMouseUp`:
        case `onMouseUpCapture`:
        case `onMouseEnter`:
          (r = !r.disabled) || (e = e.type, r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`);
          e = !r;
          break a;
        default:
          e = false;
      }
      if (e) return null;
      if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
      return n;
    }
    var Dn = typeof window < `u` && window.document !== undefined && window.document.createElement !== undefined,
      B = false;
    if (Dn) try {
      var On = {};
      Object.defineProperty(On, 'passive', {
        get: function () {
          B = true;
        }
      });
      window.addEventListener(`test`, On, On);
      window.removeEventListener(`test`, On, On);
    } catch {
      B = false;
    }
    var kn = null,
      An = null,
      jn = null;
    function Mn() {
      if (jn) return jn;
      var e,
        t = An,
        n = t.length,
        r,
        i = `value` in kn ? kn.value : kn.textContent,
        a = i.length;
      for (e = 0; e < n && t[e] === i[e]; e++);
      var o = n - e;
      for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
      return jn = i.slice(e, 1 < r ? 1 - r : undefined);
    }
    function Nn(e) {
      var t = e.keyCode;
      return `charCode` in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Pn() {
      return true;
    }
    function Fn() {
      return false;
    }
    function In(event) {
      function t(t, n, r, i, a) {
        for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, event) event.hasOwnProperty(o) && (t = event[o], this[o] = t ? t(i) : i[o]);
        return this.isDefaultPrevented = (i.defaultPrevented == null ? false === i.returnValue : i.defaultPrevented) ? Pn : Fn, this.isPropagationStopped = Fn, this;
      }
      return C(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = true;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != `unknown` && (e.returnValue = false), this.isDefaultPrevented = Pn);
        },
        stopPropagation: function () {
          var e = this.nativeEvent;
          e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != `unknown` && (e.cancelBubble = true), this.isPropagationStopped = Pn);
        },
        persist: function () {},
        isPersistent: Pn
      }), t;
    }
    var Ln = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0
      },
      Rn = In(Ln),
      zn = C({}, Ln, {
        view: 0,
        detail: 0
      }),
      Bn = In(zn),
      Vn,
      Hn,
      Un,
      Wn = C({}, zn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: tr,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === undefined ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
        },
        movementX: function (e) {
          return `movementX` in e ? e.movementX : (e !== Un && (Un && e.type === `mousemove` ? (Vn = e.screenX - Un.screenX, Hn = e.screenY - Un.screenY) : Hn = Vn = 0, Un = e), Vn);
        },
        movementY: function (e) {
          return `movementY` in e ? e.movementY : Hn;
        }
      }),
      Gn = In(Wn),
      Kn = In(C({}, Wn, {
        dataTransfer: 0
      })),
      qn = In(C({}, zn, {
        relatedTarget: 0
      })),
      Jn = In(C({}, Ln, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
      Yn = In(C({}, Ln, {
        clipboardData: function (e) {
          return `clipboardData` in e ? e.clipboardData : window.clipboardData;
        }
      })),
      Xn = In(C({}, Ln, {
        data: 0
      })),
      Zn = {
        Esc: `Escape`,
        Spacebar: ` `,
        Left: `ArrowLeft`,
        Up: `ArrowUp`,
        Right: `ArrowRight`,
        Down: `ArrowDown`,
        Del: `Delete`,
        Win: `OS`,
        Menu: `ContextMenu`,
        Apps: `ContextMenu`,
        Scroll: `ScrollLock`,
        MozPrintableKey: `Unidentified`
      },
      Qn = {
        8: `Backspace`,
        9: `Tab`,
        12: `Clear`,
        13: `Enter`,
        16: `Shift`,
        17: `Control`,
        18: `Alt`,
        19: `Pause`,
        20: `CapsLock`,
        27: `Escape`,
        32: ` `,
        33: `PageUp`,
        34: `PageDown`,
        35: `End`,
        36: `Home`,
        37: `ArrowLeft`,
        38: `ArrowUp`,
        39: `ArrowRight`,
        40: `ArrowDown`,
        45: `Insert`,
        46: `Delete`,
        112: `F1`,
        113: `F2`,
        114: `F3`,
        115: `F4`,
        116: `F5`,
        117: `F6`,
        118: `F7`,
        119: `F8`,
        120: `F9`,
        121: `F10`,
        122: `F11`,
        123: `F12`,
        144: `NumLock`,
        145: `ScrollLock`,
        224: `Meta`
      },
      $n = {
        Alt: `altKey`,
        Control: `ctrlKey`,
        Meta: `metaKey`,
        Shift: `shiftKey`
      };
    function er(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = $n[e]) ? !!t[e] : false;
    }
    function tr() {
      return er;
    }
    var nr = In(C({}, zn, {
        key: function (e) {
          if (e.key) {
            var t = Zn[e.key] || e.key;
            if (t !== `Unidentified`) return t;
          }
          return e.type === `keypress` ? (e = Nn(e), e === 13 ? `Enter` : String.fromCharCode(e)) : e.type === `keydown` || e.type === `keyup` ? Qn[e.keyCode] || `Unidentified` : ``;
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: tr,
        charCode: function (e) {
          return e.type === `keypress` ? Nn(e) : 0;
        },
        keyCode: function (e) {
          return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === `keypress` ? Nn(e) : e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
        }
      })),
      rr = In(C({}, Wn, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
      })),
      ir = In(C({}, Ln, {
        submitter: 0
      })),
      ar = In(C({}, zn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: tr
      })),
      or = In(C({}, Ln, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
      })),
      sr = In(C({}, Wn, {
        deltaX: function (e) {
          return `deltaX` in e ? e.deltaX : `wheelDeltaX` in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
          return `deltaY` in e ? e.deltaY : `wheelDeltaY` in e ? -e.wheelDeltaY : `wheelDelta` in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      })),
      cr = In(C({}, Ln, {
        newState: 0,
        oldState: 0,
        source: 0
      })),
      lr = [9, 13, 27, 32],
      ur = Dn && `CompositionEvent` in window,
      dr = null;
    Dn && `documentMode` in document && (dr = document.documentMode);
    var fr = Dn && `TextEvent` in window && !dr,
      pr = Dn && (!ur || dr && 8 < dr && 11 >= dr),
      mr = ` `,
      hr = false;
    function gr(e, t) {
      switch (e) {
        case `keyup`:
          return lr.indexOf(t.keyCode) !== -1;
        case `keydown`:
          return t.keyCode !== 229;
        case `keypress`:
        case `mousedown`:
        case `focusout`:
          return true;
        default:
          return false;
      }
    }
    function _r(e) {
      return e = e.detail, typeof e == `object` && `data` in e ? e.data : null;
    }
    var vr = false;
    function yr(e, t) {
      switch (e) {
        case `compositionend`:
          return _r(t);
        case `keypress`:
          return t.which === 32 ? (hr = true, mr) : null;
        case `textInput`:
          return e = t.data, e === mr && hr ? null : e;
        default:
          return null;
      }
    }
    function br(e, t) {
      if (vr) return e === `compositionend` || !ur && gr(e, t) ? (e = Mn(), jn = An = kn = null, vr = false, e) : null;
      switch (e) {
        case `paste`:
          return null;
        case `keypress`:
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case `compositionend`:
          return pr && t.locale !== `ko` ? null : t.data;
        default:
          return null;
      }
    }
    var xr = {
      color: true,
      date: true,
      datetime: true,
      'datetime-local': true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function Sr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === `input` ? !!xr[e.type] : t === `textarea`;
    }
    function Cr(e, t, n, r) {
      if (Cn) {
        if (wn) {
          wn.push(r);
        } else {
          wn = [r];
        }
      } else {
        Cn = r;
      }
      t = Jf(t, `onChange`);
      0 < t.length && (n = new Rn(`onChange`, `change`, null, n, r), e.push({
        event: n,
        listeners: t
      }));
    }
    var wr = null,
      Tr = null;
    function Er(e) {
      Vf(e, 0);
    }
    function Dr(e) {
      if (rn(Lt(e))) return e;
    }
    function Or(e, t) {
      if (e === `change`) return t;
    }
    var kr = false;
    if (Dn) {
      var Ar;
      if (Dn) {
        var jr = `oninput` in document;
        if (!jr) {
          var Mr = document.createElement(`div`);
          Mr.setAttribute(`oninput`, `return;`);
          jr = typeof Mr.oninput == `function`;
        }
        Ar = jr;
      } else Ar = false;
      kr = Ar && (!document.documentMode || 9 < document.documentMode);
    }
    function Nr() {
      wr && (wr.detachEvent(`onpropertychange`, Pr), Tr = wr = null);
    }
    function Pr(e) {
      if (e.propertyName === `value` && Dr(Tr)) {
        var t = [];
        Cr(t, Tr, e, Sn(e));
        Tn(Er, t);
      }
    }
    function Fr(e, t, n) {
      if (e === `focusin`) {
        Nr();
        wr = t;
        Tr = n;
        wr.attachEvent(`onpropertychange`, Pr);
      } else {
        e === `focusout` && Nr();
      }
    }
    function Ir(e) {
      if (e === `selectionchange` || e === `keyup` || e === `keydown`) return Dr(Tr);
    }
    function Lr(e, t) {
      if (e === `click`) return Dr(t);
    }
    function Rr(e, t) {
      if (e === `input` || e === `change`) return Dr(t);
    }
    function zr(e, t) {
      return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
    }
    var Br = typeof Object.is == `function` ? Object.is : zr;
    function Vr(e, t) {
      if (Br(e, t)) return true;
      if (typeof e != `object` || !e || typeof t != `object` || !t) return false;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return false;
      for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ve.call(t, i) || !Br(e[i], t[i])) return false;
      }
      return true;
    }
    function Hr(e) {
      if (e ||= typeof document < `u` ? document : undefined, e === undefined) return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Ur(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function Wr(e, t) {
      var n = Ur(e);
      e = 0;
      for (var r; n;) {
        if (n.nodeType === 3) {
          if (r = e + n.textContent.length, e <= t && r >= t) return {
            node: n,
            offset: t - e
          };
          e = r;
        }
        a: {
          for (; n;) {
            if (n.nextSibling) {
              n = n.nextSibling;
              break a;
            }
            n = n.parentNode;
          }
          n = undefined;
        }
        n = Ur(n);
      }
    }
    function Gr(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Gr(e, t.parentNode) : `contains` in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Kr(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Hr(e.document); t instanceof e.HTMLIFrameElement;) {
        try {
          var n = typeof t.contentWindow.location.href == `string`;
        } catch {
          n = false;
        }
        if (n) e = t.contentWindow;else break;
        t = Hr(e.document);
      }
      return t;
    }
    function qr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
    }
    var Jr = Dn && `documentMode` in document && 11 >= document.documentMode,
      Yr = null,
      Xr = null,
      Zr = null,
      Qr = false;
    function $r(e, t, n) {
      var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
      Qr || Yr == null || Yr !== Hr(r) || (r = Yr, `selectionStart` in r && qr(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
      } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
      }), Zr && Vr(Zr, r) || (Zr = r, r = Jf(Xr, `onSelect`), 0 < r.length && (t = new Rn(`onSelect`, `select`, null, t, n), e.push({
        event: t,
        listeners: r
      }), t.target = Yr)));
    }
    function ei(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit` + e] = `webkit` + t, n[`Moz` + e] = `moz` + t, n;
    }
    var ti = {
        animationend: ei(`Animation`, `AnimationEnd`),
        animationiteration: ei(`Animation`, `AnimationIteration`),
        animationstart: ei(`Animation`, `AnimationStart`),
        transitionrun: ei(`Transition`, `TransitionRun`),
        transitionstart: ei(`Transition`, `TransitionStart`),
        transitioncancel: ei(`Transition`, `TransitionCancel`),
        transitionend: ei(`Transition`, `TransitionEnd`)
      },
      ni = {},
      ri = {};
    Dn && (ri = document.createElement(`div`).style, `AnimationEvent` in window || (delete ti.animationend.animation, delete ti.animationiteration.animation, delete ti.animationstart.animation), `TransitionEvent` in window || delete ti.transitionend.transition);
    function ii(e) {
      if (ni[e]) return ni[e];
      if (!ti[e]) return e;
      var t = ti[e],
        n;
      for (n in t) if (t.hasOwnProperty(n) && n in ri) return ni[e] = t[n];
      return e;
    }
    var ai = ii(`animationend`),
      oi = ii(`animationiteration`),
      si = ii(`animationstart`),
      ci = ii(`transitionrun`),
      li = ii(`transitionstart`),
      ui = ii(`transitioncancel`),
      di = ii(`transitionend`),
      fi = new Map(),
      pi = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
    pi.push(`scrollEnd`);
    function mi(e, t) {
      fi.set(e, t);
      Ut(t, [e]);
    }
    var hi = 0;
    function gi(e, t) {
      if (e.name != null && e.name !== `auto`) return e.name;
      if (t.autoName !== null) return t.autoName;
      e = bd.identifierPrefix;
      var n = hi++;
      return e = `_` + e + `t_` + n.toString(32) + `_`, t.autoName = e;
    }
    function _i(e) {
      if (e == null || typeof e == `string`) return e;
      var t = null,
        n = Od;
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = e[n[r]];
        if (i != null) {
          if (i === `none`) return `none`;
          t = t == null ? i : t + (` ` + i);
        }
      }
      return t ?? e.default;
    }
    function vi(e, t) {
      return e = _i(e), t = _i(t), t == null ? e === `auto` ? null : e : t === `auto` ? null : t;
    }
    var yi = typeof reportError == `function` ? reportError : function (e) {
        if (typeof window == `object` && typeof window.ErrorEvent == `function`) {
          var t = new window.ErrorEvent(`error`, {
            bubbles: true,
            cancelable: true,
            message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(t)) return;
        } else if (typeof process == `object` && typeof process.emit == `function`) {
          process.emit(`uncaughtException`, e);
          return;
        }
        console.error(e);
      },
      bi = [],
      xi = 0,
      Si = 0;
    function Ci() {
      for (var e = xi, t = Si = xi = 0; t < e;) {
        var n = bi[t];
        bi[t++] = null;
        var r = bi[t];
        bi[t++] = null;
        var i = bi[t];
        bi[t++] = null;
        var a = bi[t];
        if (bi[t++] = null, r !== null && i !== null) {
          var o = r.pending;
          if (o === null) {
            i.next = i;
          } else {
            i.next = o.next;
            o.next = i;
          }
          r.pending = i;
        }
        a !== 0 && Di(n, i, a);
      }
    }
    function wi(e, t, n, r) {
      bi[xi++] = e;
      bi[xi++] = t;
      bi[xi++] = n;
      bi[xi++] = r;
      Si |= r;
      e.lanes |= r;
      e = e.alternate;
      e !== null && (e.lanes |= r);
    }
    function Ti(e, t, n, r) {
      return wi(e, t, n, r), Oi(e);
    }
    function Ei(e, t) {
      return wi(e, null, null, t), Oi(e);
    }
    function Di(e, t, n) {
      e.lanes |= n;
      var r = e.alternate;
      r !== null && (r.lanes |= n);
      for (var i = false, a = e.return; a !== null;) {
        a.childLanes |= n;
        r = a.alternate;
        r !== null && (r.childLanes |= n);
        a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = true));
        e = a;
        a = a.return;
      }
      return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - rt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
    }
    function Oi(e) {
      if (50 < kd) throw kd = 0, Ad = null, Error(i(185));
      for (var t = e.return; t !== null;) {
        e = t;
        t = e.return;
      }
      return e.tag === 3 ? e.stateNode : null;
    }
    var ki = {};
    function Ai(e, t, n, r) {
      this.tag = e;
      this.key = n;
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
      this.index = 0;
      this.refCleanup = this.ref = null;
      this.pendingProps = t;
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
      this.mode = r;
      this.subtreeFlags = this.flags = 0;
      this.deletions = null;
      this.childLanes = this.lanes = 0;
      this.alternate = null;
    }
    function ji(e, t, n, r) {
      return new Ai(e, t, n, r);
    }
    function Mi(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ni(e, t) {
      var n = e.alternate;
      return n === null ? (n = ji(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
    }
    function Pi(e, t) {
      e.flags &= 1206910978;
      var n = e.alternate;
      return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function Fi(e, t, n, r, a, o) {
      var s = 0;
      if (r = e, typeof r == `function`) Mi(r) && (s = 1);else if (typeof r == `string`) s = qm(e, n, Oe.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;else a: switch (r) {
        case me:
          return e = ji(31, n, t, a), e.elementType = me, e.lanes = o, e;
        case ie:
          return Ii(n.children, a, o, t);
        case ae:
          s = 8;
          a |= 24;
          break;
        case oe:
          return e = ji(12, n, t, a | 2), e.elementType = oe, e.lanes = o, e;
        case ue:
          return e = ji(13, n, t, a), e.elementType = ue, e.lanes = o, e;
        case de:
          return e = ji(19, n, t, a), e.elementType = de, e.lanes = o, e;
        case T:
        case ge:
          return e = a | 32, e = ji(30, n, t, e), e.elementType = ge, e.lanes = o, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof r == `object` && r) switch (r.$$typeof) {
            case ce:
              s = 10;
              break a;
            case se:
              s = 9;
              break a;
            case le:
              s = 11;
              break a;
            case fe:
              s = 14;
              break a;
            case pe:
              s = 16;
              r = null;
              break a;
          }
          s = 29;
          n = Error(i(130, e === null ? `null` : typeof e, ``));
          r = null;
      }
      return t = ji(s, n, t, a), t.elementType = e, t.type = r, t.lanes = o, t;
    }
    function Ii(e, t, n, r) {
      return e = ji(7, e, r, t), e.lanes = n, e;
    }
    function Li(e, t, n) {
      return e = ji(6, e, null, t), e.lanes = n, e;
    }
    function Ri(e) {
      var t = ji(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function zi(e, t, n) {
      return t = ji(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var Bi = new WeakMap();
    function Vi(e, t) {
      if (typeof e == `object` && e) {
        var n = Bi.get(e);
        return n === undefined ? (t = {
          value: e,
          source: t,
          stack: Be(t)
        }, Bi.set(e, t), t) : n;
      }
      return {
        value: e,
        source: t,
        stack: Be(t)
      };
    }
    var Hi = [],
      Ui = 0,
      Wi = null,
      Gi = 0,
      Ki = [],
      qi = 0,
      Ji = null,
      Yi = 1,
      Xi = ``;
    function Zi(e, t) {
      Hi[Ui++] = Gi;
      Hi[Ui++] = Wi;
      Wi = e;
      Gi = t;
    }
    function Qi(e, t, n) {
      Ki[qi++] = Yi;
      Ki[qi++] = Xi;
      Ki[qi++] = Ji;
      Ji = e;
      var r = Yi;
      e = Xi;
      var i = 32 - rt(r) - 1;
      r &= ~(1 << i);
      n += 1;
      var a = 32 - rt(t) + i;
      if (30 < a) {
        var o = i - i % 5;
        a = (r & (1 << o) - 1).toString(32);
        r >>= o;
        i -= o;
        Yi = 1 << 32 - rt(t) + i | n << i | r;
        Xi = a + e;
      } else {
        Yi = 1 << a | n << i | r;
        Xi = e;
      }
    }
    function $i(e) {
      e.return !== null && (Zi(e, 1), Qi(e, 1, 0));
    }
    function ea(e) {
      for (; e === Wi;) {
        Wi = Hi[--Ui];
        Hi[Ui] = null;
        Gi = Hi[--Ui];
        Hi[Ui] = null;
      }
      for (; e === Ji;) {
        Ji = Ki[--qi];
        Ki[qi] = null;
        Xi = Ki[--qi];
        Ki[qi] = null;
        Yi = Ki[--qi];
        Ki[qi] = null;
      }
    }
    function ta(e, t) {
      Ki[qi++] = Yi;
      Ki[qi++] = Xi;
      Ki[qi++] = Ji;
      Yi = t.id;
      Xi = t.overflow;
      Ji = e;
    }
    var na = null,
      V = null,
      H = false,
      ra = null,
      ia = false,
      aa = Error(i(519));
    function oa(e) {
      throw fa(Vi(Error(i(418, 1 < arguments.length && arguments[1] !== undefined && arguments[1] ? `text` : `HTML`, ``)), e)), aa;
    }
    function sa(e) {
      var t = e.stateNode,
        n = e.type,
        r = e.memoizedProps;
      switch (t[Tt] = e, t[Et] = r, n) {
        case `dialog`:
          Q(`cancel`, t);
          Q(`close`, t);
          break;
        case `iframe`:
        case `object`:
        case `embed`:
          Q(`load`, t);
          break;
        case `video`:
        case `audio`:
          for (n = 0; n < zf.length; n++) Q(zf[n], t);
          break;
        case `source`:
          Q(`error`, t);
          break;
        case `img`:
        case `image`:
        case `link`:
          Q(`error`, t);
          Q(`load`, t);
          break;
        case `details`:
          Q(`toggle`, t);
          break;
        case `input`:
          Q(`invalid`, t);
          cn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true);
          break;
        case `select`:
          Q(`invalid`, t);
          break;
        case `textarea`:
          Q(`invalid`, t);
          L(t, r.value, r.defaultValue, r.children);
      }
      n = r.children;
      if (typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `` + n || true === r.suppressHydrationWarning || ep(t.textContent, n)) {
        r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t));
        r.onScroll != null && Q(`scroll`, t);
        r.onScrollEnd != null && Q(`scrollend`, t);
        r.onClick != null && (t.onclick = bn);
        t = true;
      } else {
        t = false;
      }
      t || oa(e, true);
    }
    function ca(e) {
      for (na = e.return; na;) switch (na.tag) {
        case 5:
        case 31:
        case 13:
          ia = false;
          return;
        case 27:
        case 3:
          ia = true;
          return;
        default:
          na = na.return;
      }
    }
    function la(e) {
      if (e !== na) return false;
      if (!H) return ca(e), H = true, false;
      var t = e.tag,
        n;
      if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === `form` || n === `button` || pp(e.type, e.memoizedProps)), n = !n), n && V && oa(e), ca(e), t === 13) {
        if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
        V = dm(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(317));
        V = dm(e);
      } else if (t === 27) {
        t = V;
        if (Sp(e.type)) {
          e = um;
          um = null;
          V = e;
        } else {
          V = t;
        }
      } else {
        V = na ? lm(e.stateNode.nextSibling) : null;
      }
      return true;
    }
    function ua() {
      V = na = null;
      H = false;
    }
    function da() {
      var e = ra;
      return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), ra = null), e;
    }
    function fa(e) {
      if (ra === null) {
        ra = [e];
      } else {
        ra.push(e);
      }
    }
    var pa = we(null),
      ma = null,
      ha = null;
    function ga(e, t, n) {
      A(pa, t._currentValue);
      t._currentValue = n;
    }
    function _a(e) {
      e._currentValue = pa.current;
      Ee(pa);
    }
    function va(e, t, n) {
      for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
        e = e.return;
      }
    }
    function ya(e, t, n, r) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null;) {
        var o = a.dependencies;
        if (o !== null) {
          var s = a.child;
          o = o.firstContext;
          a: for (; o !== null;) {
            var c = o;
            o = a;
            for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
              o.lanes |= n;
              c = o.alternate;
              c !== null && (c.lanes |= n);
              va(o.return, n, e);
              r || (s = null);
              break a;
            }
            o = c.next;
          }
        } else if (a.tag === 18) {
          if (s = a.return, s === null) throw Error(i(341));
          s.lanes |= n;
          o = s.alternate;
          o !== null && (o.lanes |= n);
          va(s, n, e);
          s = null;
        } else if (a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null) {
          a.lanes |= n;
          s = a.alternate;
          s !== null && (s.lanes |= n);
          va(a.return, n, e);
          s = a.child;
          s = s === null ? null : s.sibling;
        } else {
          s = a.child;
        }
        if (s !== null) s.return = a;else for (s = a; s !== null;) {
          if (s === e) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return;
            s = a;
            break;
          }
          s = s.return;
        }
        a = s;
      }
    }
    function ba(e, t, n, r) {
      e = null;
      for (var a = t, o = false; a !== null;) {
        if (!o) {
          if (a.flags & 524288) o = true;else if (a.flags & 262144) break;
        }
        if (a.tag === 10) {
          var s = a.alternate;
          if (s === null) throw Error(i(387));
          if (s = s.memoizedProps, s !== null) {
            var c = a.type;
            Br(a.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
          }
        } else if (a === M.current) {
          if (s = a.alternate, s === null) throw Error(i(387));
          s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
        }
        a = a.return;
      }
      return e !== null && ya(t, e, n, r), t.flags |= 262144, e !== null;
    }
    function xa(e) {
      for (e = e.firstContext; e !== null;) {
        if (!Br(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Sa(e) {
      ma = e;
      ha = null;
      e = e.dependencies;
      e !== null && (e.firstContext = null);
    }
    function Ca(e) {
      return Ta(ma, e);
    }
    function wa(e, t) {
      return ma === null && Sa(e), Ta(e, t);
    }
    function Ta(e, t) {
      var n = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: n,
        next: null
      }, ha === null) {
        if (e === null) throw Error(i(308));
        ha = t;
        e.dependencies = {
          lanes: 0,
          firstContext: t
        };
        e.flags |= 524288;
      } else ha = ha.next = t;
      return n;
    }
    var Ea = typeof AbortController < `u` ? AbortController : function () {
        var e = [],
          t = this.signal = {
            aborted: false,
            addEventListener: function (t, n) {
              e.push(n);
            }
          };
        this.abort = function () {
          t.aborted = true;
          e.forEach(function (e) {
            return e();
          });
        };
      },
      Da = t.unstable_scheduleCallback,
      Oa = t.unstable_NormalPriority,
      ka = {
        $$typeof: ce,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
      };
    function Aa() {
      return {
        controller: new Ea(),
        data: new Map(),
        refCount: 0
      };
    }
    function ja(e) {
      e.refCount--;
      e.refCount === 0 && Da(Oa, function () {
        e.controller.abort();
      });
    }
    function Ma(e, t) {
      if (e.pendingLanes & 4194048) {
        var n = e.transitionTypes;
        for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
          var r = t[e];
          n.indexOf(r) === -1 && n.push(r);
        }
      }
    }
    var Na = null;
    function Pa(e) {
      var t = e.transitionTypes;
      return e.transitionTypes = null, t;
    }
    var Fa = null,
      Ia = 0,
      La = 0,
      Ra = null;
    function za(e, t) {
      if (Fa === null) {
        var n = Fa = [];
        Ia = 0;
        La = Pf();
        Ra = {
          status: `pending`,
          value: undefined,
          then: function (e) {
            n.push(e);
          }
        };
      }
      return Ia++, t.then(Ba, Ba), t;
    }
    function Ba() {
      if (--Ia === 0 && (Na = null, Fa !== null)) {
        Ra !== null && (Ra.status = `fulfilled`);
        var e = Fa;
        Fa = null;
        La = 0;
        Ra = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Va(e, t) {
      var n = [],
        r = {
          status: `pending`,
          value: null,
          reason: null,
          then: function (e) {
            n.push(e);
          }
        };
      return e.then(function () {
        r.status = `fulfilled`;
        r.value = t;
        for (var e = 0; e < n.length; e++) (0, n[e])(t);
      }, function (e) {
        for (r.status = `rejected`, r.reason = e, e = 0; e < n.length; e++) (0, n[e])(undefined);
      }), r;
    }
    var Ha = D.S;
    D.S = function (e, t) {
      if (hd = N(), typeof t == `object` && t && typeof t.then == `function` && za(e, t), Na !== null) for (var n = bf; n !== null;) {
        Ma(n, Na);
        n = n.next;
      }
      if (n = e.types, n !== null) {
        for (var r = bf; r !== null;) {
          Ma(r, n);
          r = r.next;
        }
        if (La !== 0) {
          r = Na;
          r === null && (r = Na = []);
          for (var i = 0; i < n.length; i++) {
            var a = n[i];
            r.indexOf(a) === -1 && r.push(a);
          }
        }
      }
      Ha !== null && Ha(e, t);
    };
    var Ua = we(null);
    function Wa() {
      var e = Ua.current;
      return e === null ? q.pooledCache : e;
    }
    function Ga(e, t) {
      if (t === null) {
        A(Ua, Ua.current);
      } else {
        A(Ua, t.pool);
      }
    }
    function Ka() {
      var e = Wa();
      return e === null ? null : {
        parent: ka._currentValue,
        pool: e
      };
    }
    var qa = Error(i(460)),
      Ja = Error(i(474)),
      Ya = Error(i(542)),
      Xa = {
        then: function () {}
      };
    function Za(e) {
      return e = e.status, e === `fulfilled` || e === `rejected`;
    }
    function Qa(e, t, n) {
      switch (n = e[n], n === undefined ? e.push(t) : n !== t && (t.then(bn, bn), t = n), t.status) {
        case `fulfilled`:
          return t.value;
        case `rejected`:
          throw e = t.reason, no(e), e === undefined && !(`reason` in t) ? Error(i(600)) : e;
        default:
          if (typeof t.status == `string`) t.then(bn, bn);else {
            if (e = q, e !== null && 100 < e.shellSuspendCounter) throw Error(i(482));
            e = t;
            e.status = `pending`;
            e.then(function (e) {
              if (t.status === `pending`) {
                var n = t;
                n.status = `fulfilled`;
                n.value = e;
              }
            }, function (e) {
              if (t.status === `pending`) {
                var n = t;
                n.status = `rejected`;
                n.reason = e;
              }
            });
          }
          switch (t.status) {
            case `fulfilled`:
              return t.value;
            case `rejected`:
              throw e = t.reason, no(e), e;
          }
          throw eo = t, qa;
      }
    }
    function $a(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (e) {
        throw typeof e == `object` && e && typeof e.then == `function` ? (eo = e, qa) : e;
      }
    }
    var eo = null;
    function to() {
      if (eo === null) throw Error(i(459));
      var e = eo;
      return eo = null, e;
    }
    function no(e) {
      if (e === qa || e === Ya) throw Error(i(483));
    }
    var ro = null,
      io = 0;
    function ao(e) {
      var t = io;
      return io += 1, ro === null && (ro = []), Qa(ro, e, t);
    }
    function oo(e, t) {
      t = t.props.ref;
      e.ref = t === undefined ? null : t;
    }
    function so(e, t) {
      throw t.$$typeof === w ? Error(i(525)) : (e = Object.prototype.toString.call(t), Error(i(31, e === `[object Object]` ? `object with keys {` + Object.keys(t).join(`, `) + `}` : e)));
    }
    function co(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions;
          if (r === null) {
            t.deletions = [n];
            t.flags |= 16;
          } else {
            r.push(n);
          }
        }
      }
      function n(n, r) {
        if (!e) return null;
        for (; r !== null;) {
          t(n, r);
          r = r.sibling;
        }
        return null;
      }
      function r(e) {
        for (var t = new Map(); e !== null;) {
          if (e.key === null) {
            t.set(e.index, e);
          } else {
            t.set(e.key, e);
          }
          e = e.sibling;
        }
        return t;
      }
      function a(e, t) {
        return e = Ni(e, t), e.index = 0, e.sibling = null, e;
      }
      function o(t, n, r) {
        return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
      }
      function s(t) {
        return e && t.alternate === null && (t.flags |= 134217730), t;
      }
      function c(e, t, n, r) {
        return t === null || t.tag !== 6 ? (t = Li(n, e.mode, r), t.return = e, t) : (t = a(t, n), t.return = e, t);
      }
      function l(e, t, n, r) {
        var i = n.type;
        return i === ie ? (e = d(e, t, n.props.children, r, n.key), oo(e, n), e) : t !== null && (t.elementType === i || typeof i == `object` && i && i.$$typeof === pe && $a(i) === t.type) ? (t = a(t, n.props), oo(t, n), t.return = e, t) : (t = Fi(n.type, n.key, n.props, null, e.mode, r), oo(t, n), t.return = e, t);
      }
      function u(e, t, n, r) {
        return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = zi(n, e.mode, r), t.return = e, t) : (t = a(t, n.children || []), t.return = e, t);
      }
      function d(e, t, n, r, i) {
        return t === null || t.tag !== 7 ? (t = Ii(n, e.mode, r, i), t.return = e, t) : (t = a(t, n), t.return = e, t);
      }
      function f(e, t, n) {
        if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`) return t = Li(`` + t, e.mode, n), t.return = e, t;
        if (typeof t == `object` && t) {
          switch (t.$$typeof) {
            case ne:
              return n = Fi(t.type, t.key, t.props, null, e.mode, n), oo(n, t), n.return = e, n;
            case re:
              return t = zi(t, e.mode, n), t.return = e, t;
            case pe:
              return t = $a(t), f(e, t, n);
          }
          if (E(t) || ye(t)) return t = Ii(t, e.mode, n, null), t.return = e, t;
          if (typeof t.then == `function`) return f(e, ao(t), n);
          if (t.$$typeof === ce) return f(e, wa(e, t), n);
          so(e, t);
        }
        return null;
      }
      function p(e, t, n, r) {
        var i = t === null ? null : t.key;
        if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`) return i === null ? c(e, t, `` + n, r) : null;
        if (typeof n == `object` && n) {
          switch (n.$$typeof) {
            case ne:
              return n.key === i ? l(e, t, n, r) : null;
            case re:
              return n.key === i ? u(e, t, n, r) : null;
            case pe:
              return n = $a(n), p(e, t, n, r);
          }
          if (E(n) || ye(n)) return i === null ? d(e, t, n, r, null) : null;
          if (typeof n.then == `function`) return p(e, t, ao(n), r);
          if (n.$$typeof === ce) return p(e, t, wa(e, n), r);
          so(e, n);
        }
        return null;
      }
      function m(e, t, n, r, i) {
        if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`) return e = e.get(n) || null, c(t, e, `` + r, i);
        if (typeof r == `object` && r) {
          switch (r.$$typeof) {
            case ne:
              return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
            case re:
              return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
            case pe:
              return r = $a(r), m(e, t, n, r, i);
          }
          if (E(r) || ye(r)) return e = e.get(n) || null, d(t, e, r, i, null);
          if (typeof r.then == `function`) return m(e, t, n, ao(r), i);
          if (r.$$typeof === ce) return m(e, t, n, wa(t, r), i);
          so(t, r);
        }
        return null;
      }
      function h(i, a, s, c) {
        for (var l = null, u = null, d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
          if (d.index > h) {
            g = d;
            d = null;
          } else {
            g = d.sibling;
          }
          var _ = p(i, d, s[h], c);
          if (_ === null) {
            d === null && (d = g);
            break;
          }
          e && d && _.alternate === null && t(i, d);
          a = o(_, a, h);
          if (u === null) {
            l = _;
          } else {
            u.sibling = _;
          }
          u = _;
          d = g;
        }
        if (h === s.length) return n(i, d), H && Zi(i, h), l;
        if (d === null) {
          for (; h < s.length; h++) {
            d = f(i, s[h], c);
            d !== null && (a = o(d, a, h), u === null ? l = d : u.sibling = d, u = d);
          }
          return H && Zi(i, h), l;
        }
        for (d = r(d); h < s.length; h++) {
          g = m(d, i, h, s[h], c);
          g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), a = o(g, a, h), u === null ? l = g : u.sibling = g, u = g);
        }
        return e && d.forEach(function (e) {
          return t(i, e);
        }), H && Zi(i, h), l;
      }
      function g(a, s, c, l) {
        if (c == null) throw Error(i(151));
        for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
          if (h.index > g) {
            _ = h;
            h = null;
          } else {
            _ = h.sibling;
          }
          var y = p(a, h, v.value, l);
          if (y === null) {
            h === null && (h = _);
            break;
          }
          e && h && y.alternate === null && t(a, h);
          s = o(y, s, g);
          if (d === null) {
            u = y;
          } else {
            d.sibling = y;
          }
          d = y;
          h = _;
        }
        if (v.done) return n(a, h), H && Zi(a, g), u;
        if (h === null) {
          for (; !v.done; g++, v = c.next()) {
            v = f(a, v.value, l);
            v !== null && (s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
          }
          return H && Zi(a, g), u;
        }
        for (h = r(h); !v.done; g++, v = c.next()) {
          v = m(h, a, g, v.value, l);
          v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = o(v, s, g), d === null ? u = v : d.sibling = v, d = v);
        }
        return e && h.forEach(function (e) {
          return t(a, e);
        }), H && Zi(a, g), u;
      }
      function _(e, r, o, c) {
        if (typeof o == `object` && o && o.type === ie && o.key === null && o.props.ref === undefined && (o = o.props.children), typeof o == `object` && o) {
          switch (o.$$typeof) {
            case ne:
              a: {
                for (var l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (l = o.type, l === ie) {
                      if (r.tag === 7) {
                        n(e, r.sibling);
                        c = a(r, o.props.children);
                        oo(c, o);
                        c.return = e;
                        e = c;
                        break a;
                      }
                    } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === pe && $a(l) === r.type) {
                      n(e, r.sibling);
                      c = a(r, o.props);
                      oo(c, o);
                      c.return = e;
                      e = c;
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r);
                  r = r.sibling;
                }
                if (o.type === ie) {
                  c = Ii(o.props.children, e.mode, c, o.key);
                  oo(c, o);
                  c.return = e;
                  e = c;
                } else {
                  c = Fi(o.type, o.key, o.props, null, e.mode, c);
                  oo(c, o);
                  c.return = e;
                  e = c;
                }
              }
              return s(e);
            case re:
              a: {
                for (l = o.key; r !== null;) {
                  if (r.key === l) {
                    if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                      n(e, r.sibling);
                      c = a(r, o.children || []);
                      c.return = e;
                      e = c;
                      break a;
                    }
                    n(e, r);
                    break;
                  }
                  t(e, r);
                  r = r.sibling;
                }
                c = zi(o, e.mode, c);
                c.return = e;
                e = c;
              }
              return s(e);
            case pe:
              return o = $a(o), _(e, r, o, c);
          }
          if (E(o)) return h(e, r, o, c);
          if (ye(o)) {
            if (l = ye(o), typeof l != `function`) throw Error(i(150));
            return o = l.call(o), g(e, r, o, c);
          }
          if (typeof o.then == `function`) return _(e, r, ao(o), c);
          if (o.$$typeof === ce) return _(e, r, wa(e, o), c);
          so(e, o);
        }
        return typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint` ? (o = `` + o, r !== null && r.tag === 6 ? (n(e, r.sibling), c = a(r, o), c.return = e, e = c) : (n(e, r), c = Li(o, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
      }
      return function (e, t, n, r) {
        try {
          io = 0;
          var i = _(e, t, n, r);
          return ro = null, i;
        } catch (t) {
          if (t === qa || t === Ya) throw t;
          var a = ji(29, t, null, e.mode);
          return a.lanes = r, a.return = e, a;
        }
      };
    }
    var lo = co(true),
      uo = co(false),
      fo = false;
    function po(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function mo(e, t) {
      e = e.updateQueue;
      t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function ho(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function go(e, t, n) {
      var r = e.updateQueue;
      if (r === null) return null;
      if (r = r.shared, K & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Oi(e), Di(e, null, n), t;
      }
      return wi(e, r, t, n), Oi(e);
    }
    function _o(e, t, n) {
      if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
        var r = t.lanes;
        r &= e.pendingLanes;
        n |= r;
        t.lanes = n;
        vt(e, n);
      }
    }
    function vo(e, t) {
      var n = e.updateQueue,
        r = e.alternate;
      if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
          a = null;
        if (n = n.firstBaseUpdate, n !== null) {
          do {
            var o = {
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: null,
              next: null
            };
            if (a === null) {
              i = a = o;
            } else {
              a = a.next = o;
            }
            n = n.next;
          } while (n !== null);
          if (a === null) {
            i = a = t;
          } else {
            a = a.next = t;
          }
        } else i = a = t;
        n = {
          baseState: r.baseState,
          firstBaseUpdate: i,
          lastBaseUpdate: a,
          shared: r.shared,
          callbacks: r.callbacks
        };
        e.updateQueue = n;
        return;
      }
      e = n.lastBaseUpdate;
      if (e === null) {
        n.firstBaseUpdate = t;
      } else {
        e.next = t;
      }
      n.lastBaseUpdate = t;
    }
    var yo = false;
    function bo() {
      if (yo) {
        var e = Ra;
        if (e !== null) throw e;
      }
    }
    function xo(e, t, n, r) {
      yo = false;
      var i = e.updateQueue;
      fo = false;
      var a = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending;
      if (s !== null) {
        i.shared.pending = null;
        var c = s,
          l = c.next;
        c.next = null;
        if (o === null) {
          a = l;
        } else {
          o.next = l;
        }
        o = c;
        var u = e.alternate;
        u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
      }
      if (a !== null) {
        var d = i.baseState;
        o = 0;
        u = l = c = null;
        s = a;
        do {
          var f = s.lane & -536870913,
            p = f !== s.lane;
          if (p ? (Y & f) === f : (r & f) === f) {
            f !== 0 && f === La && (yo = true);
            u !== null && (u = u.next = {
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: null,
              next: null
            });
            a: {
              var m = e,
                h = s;
              f = t;
              var g = n;
              switch (h.tag) {
                case 1:
                  if (m = h.payload, typeof m == `function`) {
                    d = m.call(g, d, f);
                    break a;
                  }
                  d = m;
                  break a;
                case 3:
                  m.flags = m.flags & -65537 | 128;
                case 0:
                  if (m = h.payload, f = typeof m == `function` ? m.call(g, d, f) : m, f == null) break a;
                  d = C({}, d, f);
                  break a;
                case 2:
                  fo = true;
              }
            }
            f = s.callback;
            f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
          } else {
            p = {
              lane: f,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null
            };
            if (u === null) {
              l = u = p;
              c = d;
            } else {
              u = u.next = p;
            }
            o |= f;
          }
          if (s = s.next, s === null) {
            if (s = i.shared.pending, s === null) break;
            p = s;
            s = p.next;
            p.next = null;
            i.lastBaseUpdate = p;
            i.shared.pending = null;
          }
        } while (1);
        u === null && (c = d);
        i.baseState = c;
        i.firstBaseUpdate = l;
        i.lastBaseUpdate = u;
        a === null && (i.shared.lanes = 0);
        od |= o;
        e.lanes = o;
        e.memoizedState = d;
      }
    }
    function So(e, t) {
      if (typeof e != `function`) throw Error(i(191, e));
      e.call(t);
    }
    function Co(e, t) {
      var n = e.callbacks;
      if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) So(n[e], t);
    }
    var wo = we(null),
      To = we(0);
    function Eo(e, t) {
      e = id;
      A(To, e);
      A(wo, t);
      id = e | t.baseLanes;
    }
    function Do() {
      A(To, id);
      A(wo, wo.current);
    }
    function Oo() {
      id = To.current;
      Ee(wo);
      Ee(To);
    }
    var ko = we(null),
      Ao = null;
    function jo(e) {
      var t = e.alternate;
      A(Io, Io.current & 1);
      A(ko, e);
      Ao === null && (t === null || wo.current !== null || t.memoizedState !== null) && (Ao = e);
    }
    function Mo(e) {
      A(Io, Io.current);
      A(ko, e);
      Ao === null && (Ao = e);
    }
    function No(e) {
      if (e.tag === 22) {
        A(Io, Io.current);
        A(ko, e);
        Ao === null && (Ao = e);
      } else {
        Po();
      }
    }
    function Po() {
      A(Io, Io.current);
      A(ko, ko.current);
    }
    function Fo(e) {
      Ee(ko);
      Ao === e && (Ao = null);
      Ee(Io);
    }
    var Io = we(0);
    function Lo(e, t) {
      A(ko, ko.current);
      A(Io, t);
    }
    function Ro(e) {
      Ee(Io);
      Ee(ko);
      Ao === e && (Ao = null);
    }
    function zo(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var n = t.memoizedState;
          if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
          if (t.flags & 128) return t;
        } else if (t.child !== null) {
          t.child.return = t;
          t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return;
        t = t.sibling;
      }
      return null;
    }
    var Bo = 0,
      U = null,
      W = null,
      Vo = null,
      Ho = false,
      Uo = false,
      Wo = false,
      Go = 0,
      Ko = 0,
      qo = null,
      Jo = 0;
    function Yo() {
      throw Error(i(321));
    }
    function Xo(e, t) {
      if (t === null) return false;
      for (var n = 0; n < t.length && n < e.length; n++) if (!Br(e[n], t[n])) return false;
      return true;
    }
    function Zo(e, t, n, r, i, a) {
      return Bo = a, U = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, D.H = e === null || e.memoizedState === null ? mc : hc, Wo = false, a = n(r, i), Wo = false, Uo && (a = $o(t, n, r, i)), Qo(e), a;
    }
    function Qo(e) {
      D.H = pc;
      var t = W !== null && W.next !== null;
      if (Bo = 0, Vo = W = U = null, Ho = false, Ko = 0, qo = null, t) throw Error(i(300));
      e === null || Mc || (e = e.dependencies, e !== null && xa(e) && (Mc = true));
    }
    function $o(e, t, n, r) {
      U = e;
      var a = 0;
      do {
        if (Uo && (qo = null), Ko = 0, Uo = false, 25 <= a) throw Error(i(301));
        if (a += 1, Vo = W = null, e.updateQueue != null) {
          var o = e.updateQueue;
          o.lastEffect = null;
          o.events = null;
          o.stores = null;
          o.memoCache != null && (o.memoCache.index = 0);
        }
        D.H = gc;
        o = t(n, r);
      } while (Uo);
      return o;
    }
    function es() {
      var e = D.H,
        t = e.useState()[0];
      return t = typeof t.then == `function` ? ss(t) : t, e = e.useState()[0], (W === null ? null : W.memoizedState) !== e && (U.flags |= 1024), t;
    }
    function ts() {
      var e = Go !== 0;
      return Go = 0, e;
    }
    function ns(e, t, n) {
      t.updateQueue = e.updateQueue;
      t.flags &= -2053;
      e.lanes &= ~n;
    }
    function rs(e) {
      if (Ho) {
        for (e = e.memoizedState; e !== null;) {
          var t = e.queue;
          t !== null && (t.pending = null);
          e = e.next;
        }
        Ho = false;
      }
      Bo = 0;
      Vo = W = U = null;
      Uo = false;
      Ko = Go = 0;
      qo = null;
    }
    function is() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Vo === null ? U.memoizedState = Vo = e : Vo = Vo.next = e, Vo;
    }
    function as() {
      if (W === null) {
        var e = U.alternate;
        e = e === null ? null : e.memoizedState;
      } else e = W.next;
      var t = Vo === null ? U.memoizedState : Vo.next;
      if (t !== null) {
        Vo = t;
        W = e;
      } else {
        if (e === null) throw U.alternate === null ? Error(i(467)) : Error(i(310));
        W = e;
        e = {
          memoizedState: W.memoizedState,
          baseState: W.baseState,
          baseQueue: W.baseQueue,
          queue: W.queue,
          next: null
        };
        if (Vo === null) {
          U.memoizedState = Vo = e;
        } else {
          Vo = Vo.next = e;
        }
      }
      return Vo;
    }
    function os() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function ss(e) {
      var t = Ko;
      return Ko += 1, qo === null && (qo = []), e = Qa(qo, e, t), t = U, (Vo === null ? t.memoizedState : Vo.next) === null && (t = t.alternate, D.H = t === null || t.memoizedState === null ? mc : hc), e;
    }
    function cs(e) {
      if (typeof e == `object` && e) {
        if (typeof e.then == `function`) return ss(e);
        if (e.$$typeof === _e) return;
        if (e.$$typeof === ce) return Ca(e);
      }
      throw Error(i(438, String(e)));
    }
    function ls(e) {
      var t = null,
        n = U.updateQueue;
      if (n !== null && (t = n.memoCache), t == null) {
        var r = U.alternate;
        r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
          data: r.data.map(function (e) {
            return e.slice();
          }),
          index: 0
        })));
      }
      if (t ??= {
        data: [],
        index: 0
      }, n === null && (n = os(), U.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === undefined) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = he;
      return t.index++, n;
    }
    function us(e, t) {
      return typeof t == `function` ? t(e) : t;
    }
    function ds(e) {
      return fs(as(), W, e);
    }
    function fs(e, t, n) {
      var r = e.queue;
      if (r === null) throw Error(i(311));
      r.lastRenderedReducer = n;
      var a = e.baseQueue,
        o = r.pending;
      if (o !== null) {
        if (a !== null) {
          var s = a.next;
          a.next = o.next;
          o.next = s;
        }
        t.baseQueue = a = o;
        r.pending = null;
      }
      if (o = e.baseState, a === null) e.memoizedState = o;else {
        t = a.next;
        var c = s = null,
          l = null,
          u = t,
          d = false;
        do {
          var f = u.lane & -536870913;
          if (f === u.lane ? (Bo & f) === f : (Y & f) === f) {
            var p = u.revertLane;
            if (p === 0) {
              l !== null && (l = l.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              });
              f === La && (d = true);
            } else if ((Bo & p) === p) {
              u = u.next;
              p === La && (d = true);
              continue;
            } else {
              f = {
                lane: 0,
                revertLane: u.revertLane,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              };
              if (l === null) {
                c = l = f;
                s = o;
              } else {
                l = l.next = f;
              }
              U.lanes |= p;
              od |= p;
            }
            f = u.action;
            Wo && n(o, f);
            o = u.hasEagerState ? u.eagerState : n(o, f);
          } else {
            p = {
              lane: f,
              revertLane: u.revertLane,
              gesture: u.gesture,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            };
            if (l === null) {
              c = l = p;
              s = o;
            } else {
              l = l.next = p;
            }
            U.lanes |= f;
            od |= f;
          }
          u = u.next;
        } while (u !== null && u !== t);
        if (l === null ? s = o : l.next = c, !Br(o, e.memoizedState) && (Mc = true, d && (n = Ra, n !== null))) throw n;
        e.memoizedState = o;
        e.baseState = s;
        e.baseQueue = l;
        r.lastRenderedState = o;
      }
      return a === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
    }
    function ps(e) {
      var t = as(),
        n = t.queue;
      if (n === null) throw Error(i(311));
      n.lastRenderedReducer = e;
      var r = n.dispatch,
        a = n.pending,
        o = t.memoizedState;
      if (a !== null) {
        n.pending = null;
        var s = a = a.next;
        do {
          o = e(o, s.action);
          s = s.next;
        } while (s !== a);
        Br(o, t.memoizedState) || (Mc = true);
        t.memoizedState = o;
        t.baseQueue === null && (t.baseState = o);
        n.lastRenderedState = o;
      }
      return [o, r];
    }
    function ms(e, t, n) {
      var r = U,
        a = as(),
        o = H;
      if (o) {
        if (n === undefined) throw Error(i(407));
        n = n();
      } else n = t();
      var s = !Br((W || a).memoizedState, n);
      if (s && (a.memoizedState = n, Mc = true), a = a.queue, zs(_s.bind(null, r, a, e), [e]), e = a.getSnapshot !== t || s || Vo !== null && !!(Vo.memoizedState.tag & 1), Ps(e ? 9 : 8, {
        destroy: undefined
      }, gs.bind(null, r, a, n, t), null), e) {
        if (r.flags |= 2048, q === null) throw Error(i(349));
        o || Bo & 127 || hs(r, t, n);
      }
      return n;
    }
    function hs(e, t, n) {
      e.flags |= 16384;
      e = {
        getSnapshot: t,
        value: n
      };
      t = U.updateQueue;
      if (t === null) {
        t = os();
        U.updateQueue = t;
        t.stores = [e];
      } else {
        n = t.stores;
        if (n === null) {
          t.stores = [e];
        } else {
          n.push(e);
        }
      }
    }
    function gs(e, t, n, r) {
      t.value = n;
      t.getSnapshot = r;
      vs(t) && ys(e);
    }
    function _s(e, t, n) {
      return n(function () {
        vs(t) && ys(e);
      });
    }
    function vs(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var n = t();
        return !Br(e, n);
      } catch {
        return true;
      }
    }
    function ys(e) {
      var t = Ei(e, 2);
      t !== null && Pd(t, e, 2);
    }
    function bs(e) {
      var t = is();
      if (typeof e == `function`) {
        var n = e;
        if (e = n(), Wo) {
          nt(true);
          try {
            n();
          } finally {
            nt(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: us,
        lastRenderedState: e
      }, t;
    }
    function xs(e, t, n, r) {
      return e.baseState = n, fs(e, W, typeof r == `function` ? r : us);
    }
    function Ss(e, t, n, r, a) {
      if (uc(e)) throw Error(i(485));
      if (e = t.action, e !== null) {
        var o = {
          payload: a,
          action: e,
          next: null,
          isTransition: true,
          status: `pending`,
          value: null,
          reason: null,
          listeners: [],
          then: function (e) {
            o.listeners.push(e);
          }
        };
        if (D.T === null) {
          o.isTransition = false;
        } else {
          n(true);
        }
        r(o);
        n = t.pending;
        if (n === null) {
          o.next = t.pending = o;
          Cs(t, o);
        } else {
          o.next = n.next;
          t.pending = n.next = o;
        }
      }
    }
    function Cs(e, t) {
      var n = t.action,
        r = t.payload,
        i = e.state;
      if (t.isTransition) {
        var a = D.T,
          o = {};
        o.types = a === null ? null : a.types;
        D.T = o;
        try {
          var s = n(i, r),
            c = D.S;
          c !== null && c(o, s);
          ws(e, t, s);
        } catch (n) {
          Es(e, t, n);
        } finally {
          a !== null && o.types !== null && (a.types = o.types);
          D.T = a;
        }
      } else try {
        a = n(i, r);
        ws(e, t, a);
      } catch (n) {
        Es(e, t, n);
      }
    }
    function ws(e, t, n) {
      if (typeof n == `object` && n && typeof n.then == `function`) {
        n.then(function (n) {
          Ts(e, t, n);
        }, function (n) {
          return Es(e, t, n);
        });
      } else {
        Ts(e, t, n);
      }
    }
    function Ts(e, t, n) {
      t.status = `fulfilled`;
      t.value = n;
      Ds(t);
      e.state = n;
      t = e.pending;
      t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Cs(e, n)));
    }
    function Es(e, t, n) {
      var r = e.pending;
      if (e.pending = null, r !== null) {
        r = r.next;
        do {
          t.status = `rejected`;
          t.reason = n;
          Ds(t);
          t = t.next;
        } while (t !== r);
      }
      e.action = null;
    }
    function Ds(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Os(e, t) {
      return t;
    }
    function ks(e, t) {
      if (H) {
        var n = q.formState;
        if (n !== null) {
          a: {
            var r = U;
            if (H) {
              if (V) {
                b: {
                  for (var i = V, a = ia; i.nodeType !== 8;) {
                    if (!a) {
                      i = null;
                      break b;
                    }
                    if (i = lm(i.nextSibling), i === null) {
                      i = null;
                      break b;
                    }
                  }
                  a = i.data;
                  i = a === `F!` || a === `F` ? i : null;
                }
                if (i) {
                  V = lm(i.nextSibling);
                  r = i.data === `F!`;
                  break a;
                }
              }
              oa(r);
            }
            r = false;
          }
          r && (t = n[0]);
        }
      }
      return n = is(), n.memoizedState = n.baseState = t, r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Os,
        lastRenderedState: t
      }, n.queue = r, n = sc.bind(null, U, r), r.dispatch = n, r = bs(false), a = lc.bind(null, U, false, r.queue), r = is(), i = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, r.queue = i, n = Ss.bind(null, U, i, a, n), i.dispatch = n, r.memoizedState = e, [t, n, false];
    }
    function As(e) {
      return js(as(), W, e);
    }
    function js(e, t, n) {
      if (t = fs(e, t, Os)[0], e = ds(us)[0], typeof t == `object` && t && typeof t.then == `function`) try {
        var r = ss(t);
      } catch (e) {
        throw e === qa ? Ya : e;
      } else r = t;
      t = as();
      var i = t.queue,
        a = i.dispatch;
      return n !== t.memoizedState && (U.flags |= 2048, Ps(9, {
        destroy: undefined
      }, Ms.bind(null, i, n), null)), [r, a, e];
    }
    function Ms(e, t) {
      e.action = t;
    }
    function Ns(e) {
      var t = as(),
        n = W;
      if (n !== null) return js(t, n, e);
      as();
      t = t.memoizedState;
      n = as();
      var r = n.queue.dispatch;
      return n.memoizedState = e, [t, r, false];
    }
    function Ps(e, t, n, r) {
      return e = {
        tag: e,
        create: n,
        deps: r,
        inst: t,
        next: null
      }, t = U.updateQueue, t === null && (t = os(), U.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
    }
    function Fs() {
      return as().memoizedState;
    }
    function Is(e, t, n, r) {
      var i = is();
      U.flags |= e;
      i.memoizedState = Ps(1 | t, {
        destroy: undefined
      }, n, r === undefined ? null : r);
    }
    function Ls(e, t, n, r) {
      var i = as();
      r = r === undefined ? null : r;
      var a = i.memoizedState.inst;
      if (W !== null && r !== null && Xo(r, W.memoizedState.deps)) {
        i.memoizedState = Ps(t, a, n, r);
      } else {
        U.flags |= e;
        i.memoizedState = Ps(1 | t, a, n, r);
      }
    }
    function Rs(e, t) {
      Is(8390656, 8, e, t);
    }
    function zs(e, t) {
      Ls(2048, 8, e, t);
    }
    function Bs(e) {
      U.flags |= 4;
      var t = U.updateQueue;
      if (t === null) {
        t = os();
        U.updateQueue = t;
        t.events = [e];
      } else {
        var n = t.events;
        if (n === null) {
          t.events = [e];
        } else {
          n.push(e);
        }
      }
    }
    function Vs(e) {
      var t = as().memoizedState;
      return Bs({
        ref: t,
        nextImpl: e
      }), function () {
        if (K & 2) throw Error(i(440));
        return t.impl.apply(undefined, arguments);
      };
    }
    function Hs(e, t) {
      return Ls(4, 2, e, t);
    }
    function Us(e, t) {
      return Ls(4, 4, e, t);
    }
    function Ws(e, t) {
      if (typeof t == `function`) {
        e = e();
        var n = t(e);
        return function () {
          if (typeof n == `function`) {
            n();
          } else {
            t(null);
          }
        };
      }
      if (t != null) return e = e(), t.current = e, function () {
        t.current = null;
      };
    }
    function Gs(e, t, n) {
      n = n == null ? null : n.concat([e]);
      Ls(4, 4, Ws.bind(null, t, e), n);
    }
    function Ks() {}
    function qs(e, t) {
      var n = as();
      t = t === undefined ? null : t;
      var r = n.memoizedState;
      return t !== null && Xo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
    }
    function Js(e, t) {
      var n = as();
      t = t === undefined ? null : t;
      var r = n.memoizedState;
      if (t !== null && Xo(t, r[1])) return r[0];
      if (r = e(), Wo) {
        nt(true);
        try {
          e();
        } finally {
          nt(false);
        }
      }
      return n.memoizedState = [r, t], r;
    }
    function Ys(e, t, n) {
      return n === undefined || Bo & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), U.lanes |= e, od |= e, n);
    }
    function Xs(e, t, n, r) {
      return Br(n, t) ? n : wo.current === null ? !(Bo & 106) || Bo & 1073741824 && !(Y & 261930) ? (Mc = true, e.memoizedState = n) : (e = Md(), U.lanes |= e, od |= e, t) : (e = Ys(e, n, r), Br(e, t) || (Mc = true), e);
    }
    function Zs(e, t, n, r, i) {
      var a = O.p;
      O.p = a !== 0 && 8 > a ? a : 8;
      var o = D.T,
        s = {};
      s.types = o === null ? null : o.types;
      D.T = s;
      lc(e, false, t, n);
      try {
        var c = i(),
          l = D.S;
        l !== null && l(s, c);
        if (typeof c == `object` && c && typeof c.then == `function`) {
          cc(e, t, Va(c, r), jd(e));
        } else {
          cc(e, t, r, jd(e));
        }
      } catch (n) {
        cc(e, t, {
          then: function () {},
          status: `rejected`,
          reason: n
        }, jd());
      } finally {
        O.p = a;
        o !== null && s.types !== null && (o.types = s.types);
        D.T = o;
      }
    }
    function Qs() {}
    function $s(e, t, n, r) {
      if (e.tag !== 5) throw Error(i(476));
      var a = ec(e).queue;
      Zs(e, a, t, Se, n === null ? Qs : function () {
        return tc(e), n(r);
      });
    }
    function ec(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: Se,
        baseState: Se,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: us,
          lastRenderedState: Se
        },
        next: null
      };
      var n = {};
      return t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: us,
          lastRenderedState: n
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function tc(e) {
      var t = ec(e);
      t.next === null && (t = e.alternate.memoizedState);
      cc(e, t.next.queue, {}, jd());
    }
    function nc() {
      return Ca(sh);
    }
    function rc() {
      return as().memoizedState;
    }
    function ic() {
      return as().memoizedState;
    }
    function ac(e) {
      for (var t = e.return; t !== null;) {
        switch (t.tag) {
          case 24:
          case 3:
            var n = jd();
            e = ho(n);
            var r = go(t, e, n);
            r !== null && (Pd(r, t, n), _o(r, t, n));
            t = {
              cache: Aa()
            };
            e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function oc(e, t, n) {
      var r = jd();
      n = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (uc(e)) {
        dc(t, n);
      } else {
        n = Ti(e, t, n, r);
        n !== null && (Pd(n, e, r), fc(n, t, r));
      }
    }
    function sc(e, t, n) {
      cc(e, t, n, jd());
    }
    function cc(e, t, n, r) {
      var i = {
        lane: r,
        revertLane: 0,
        gesture: null,
        action: n,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (uc(e)) dc(t, i);else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
          var o = t.lastRenderedState,
            s = a(o, n);
          if (i.hasEagerState = true, i.eagerState = s, Br(s, o)) return wi(e, t, i, 0), q === null && Ci(), false;
        } catch {}
        if (n = Ti(e, t, i, r), n !== null) return Pd(n, e, r), fc(n, t, r), true;
      }
      return false;
    }
    function lc(e, t, n, r) {
      if (r = {
        lane: 2,
        revertLane: Pf(),
        gesture: null,
        action: r,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, uc(e)) {
        if (t) throw Error(i(479));
      } else {
        t = Ti(e, n, r, 2);
        t !== null && Pd(t, e, 2);
      }
    }
    function uc(e) {
      var t = e.alternate;
      return e === U || t !== null && t === U;
    }
    function dc(e, t) {
      Uo = Ho = true;
      var n = e.pending;
      if (n === null) {
        t.next = t;
      } else {
        t.next = n.next;
        n.next = t;
      }
      e.pending = t;
    }
    function fc(e, t, n) {
      if (n & 4194048) {
        var r = t.lanes;
        r &= e.pendingLanes;
        n |= r;
        t.lanes = n;
        vt(e, n);
      }
    }
    var pc = {
        readContext: Ca,
        use: cs,
        useCallback: Yo,
        useContext: Yo,
        useEffect: Yo,
        useImperativeHandle: Yo,
        useLayoutEffect: Yo,
        useInsertionEffect: Yo,
        useMemo: Yo,
        useReducer: Yo,
        useRef: Yo,
        useState: Yo,
        useDebugValue: Yo,
        useDeferredValue: Yo,
        useTransition: Yo,
        useSyncExternalStore: Yo,
        useId: Yo,
        useHostTransitionStatus: Yo,
        useFormState: Yo,
        useActionState: Yo,
        useOptimistic: Yo,
        useMemoCache: Yo,
        useCacheRefresh: Yo,
        useEffectEvent: Yo
      },
      mc = {
        readContext: Ca,
        use: cs,
        useCallback: function (e, t) {
          return is().memoizedState = [e, t === undefined ? null : t], e;
        },
        useContext: Ca,
        useEffect: Rs,
        useImperativeHandle: function (e, t, n) {
          n = n == null ? null : n.concat([e]);
          Is(4194308, 4, Ws.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
          return Is(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          Is(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var n = is();
          t = t === undefined ? null : t;
          var r = e();
          if (Wo) {
            nt(true);
            try {
              e();
            } finally {
              nt(false);
            }
          }
          return n.memoizedState = [r, t], r;
        },
        useReducer: function (e, t, n) {
          var r = is();
          if (n !== undefined) {
            var i = n(t);
            if (Wo) {
              nt(true);
              try {
                n(t);
              } finally {
                nt(false);
              }
            }
          } else i = t;
          return r.memoizedState = r.baseState = i, e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: i
          }, r.queue = e, e = e.dispatch = oc.bind(null, U, e), [r.memoizedState, e];
        },
        useRef: function (e) {
          var t = is();
          return e = {
            current: e
          }, t.memoizedState = e;
        },
        useState: function (e) {
          e = bs(e);
          var t = e.queue,
            n = sc.bind(null, U, t);
          return t.dispatch = n, [e.memoizedState, n];
        },
        useDebugValue: Ks,
        useDeferredValue: function (e, t) {
          return Ys(is(), e, t);
        },
        useTransition: function () {
          var e = bs(false);
          return e = Zs.bind(null, U, e.queue, true, false), is().memoizedState = e, [false, e];
        },
        useSyncExternalStore: function (e, t, n) {
          var r = U,
            a = is();
          if (H) {
            if (n === undefined) throw Error(i(407));
            n = n();
          } else {
            if (n = t(), q === null) throw Error(i(349));
            Y & 127 || hs(r, t, n);
          }
          a.memoizedState = n;
          var o = {
            value: n,
            getSnapshot: t
          };
          return a.queue = o, Rs(_s.bind(null, r, o, e), [e]), r.flags |= 2048, Ps(9, {
            destroy: undefined
          }, gs.bind(null, r, o, n, t), null), n;
        },
        useId: function () {
          var e = is(),
            t = q.identifierPrefix;
          if (H) {
            var n = Xi,
              r = Yi;
            n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n;
            t = `_` + t + `R_` + n;
            n = Go++;
            0 < n && (t += `H` + n.toString(32));
            t += `_`;
          } else {
            n = Jo++;
            t = `_` + t + `r_` + n.toString(32) + `_`;
          }
          return e.memoizedState = t;
        },
        useHostTransitionStatus: nc,
        useFormState: ks,
        useActionState: ks,
        useOptimistic: function (e) {
          var t = is();
          t.memoizedState = t.baseState = e;
          var n = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: null,
            lastRenderedState: null
          };
          return t.queue = n, t = lc.bind(null, U, true, n), n.dispatch = t, [e, t];
        },
        useMemoCache: ls,
        useCacheRefresh: function () {
          return is().memoizedState = ac.bind(null, U);
        },
        useEffectEvent: function (e) {
          var t = is(),
            n = {
              impl: e
            };
          return t.memoizedState = n, function () {
            if (K & 2) throw Error(i(440));
            return n.impl.apply(undefined, arguments);
          };
        }
      },
      hc = {
        readContext: Ca,
        use: cs,
        useCallback: qs,
        useContext: Ca,
        useEffect: zs,
        useImperativeHandle: Gs,
        useInsertionEffect: Hs,
        useLayoutEffect: Us,
        useMemo: Js,
        useReducer: ds,
        useRef: Fs,
        useState: function () {
          return ds(us);
        },
        useDebugValue: Ks,
        useDeferredValue: function (e, t) {
          return Xs(as(), W.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ds(us)[0],
            t = as().memoizedState;
          return [typeof e == `boolean` ? e : ss(e), t];
        },
        useSyncExternalStore: ms,
        useId: rc,
        useHostTransitionStatus: nc,
        useFormState: As,
        useActionState: As,
        useOptimistic: function (e, t) {
          return xs(as(), W, e, t);
        },
        useMemoCache: ls,
        useCacheRefresh: ic,
        useEffectEvent: Vs
      },
      gc = {
        readContext: Ca,
        use: cs,
        useCallback: qs,
        useContext: Ca,
        useEffect: zs,
        useImperativeHandle: Gs,
        useInsertionEffect: Hs,
        useLayoutEffect: Us,
        useMemo: Js,
        useReducer: ps,
        useRef: Fs,
        useState: function () {
          return ps(us);
        },
        useDebugValue: Ks,
        useDeferredValue: function (e, t) {
          var n = as();
          return W === null ? Ys(n, e, t) : Xs(n, W.memoizedState, e, t);
        },
        useTransition: function () {
          var e = ps(us)[0],
            t = as().memoizedState;
          return [typeof e == `boolean` ? e : ss(e), t];
        },
        useSyncExternalStore: ms,
        useId: rc,
        useHostTransitionStatus: nc,
        useFormState: Ns,
        useActionState: Ns,
        useOptimistic: function (e, t) {
          var n = as();
          return W === null ? (n.baseState = e, [e, n.queue.dispatch]) : xs(n, W, e, t);
        },
        useMemoCache: ls,
        useCacheRefresh: ic,
        useEffectEvent: Vs
      };
    function _c(e, t, n, r) {
      t = e.memoizedState;
      n = n(r, t);
      n = n == null ? t : C({}, t, n);
      e.memoizedState = n;
      e.lanes === 0 && (e.updateQueue.baseState = n);
    }
    var vc = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = ho(r);
        i.payload = t;
        n != null && (i.callback = n);
        t = go(e, i, r);
        t !== null && (Pd(t, e, r), _o(t, e, r));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = jd(),
          i = ho(r);
        i.tag = 1;
        i.payload = t;
        n != null && (i.callback = n);
        t = go(e, i, r);
        t !== null && (Pd(t, e, r), _o(t, e, r));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = jd(),
          r = ho(n);
        r.tag = 2;
        t != null && (r.callback = t);
        t = go(e, r, n);
        t !== null && (Pd(t, e, n), _o(t, e, n));
      }
    };
    function yc(e, t, n, r, i, a, o) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == `function` ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Vr(n, r) || !Vr(i, a) : true;
    }
    function bc(e, t, n, r) {
      e = t.state;
      typeof t.componentWillReceiveProps == `function` && t.componentWillReceiveProps(n, r);
      typeof t.UNSAFE_componentWillReceiveProps == `function` && t.UNSAFE_componentWillReceiveProps(n, r);
      t.state !== e && vc.enqueueReplaceState(t, t.state, null);
    }
    function xc(e, t) {
      var n = t;
      if (`ref` in t) for (var r in n = {}, t) r !== `ref` && (n[r] = t[r]);
      if (e = e.defaultProps) for (var i in n === t && (n = C({}, n)), e) n[i] === undefined && (n[i] = e[i]);
      return n;
    }
    function Sc(e) {
      yi(e);
    }
    function Cc(e) {
      console.error(e);
    }
    function wc(e) {
      yi(e);
    }
    function Tc(e, t) {
      try {
        var n = e.onUncaughtError;
        n(t.value, {
          componentStack: t.stack
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Ec(e, t, n) {
      try {
        var r = e.onCaughtError;
        r(n.value, {
          componentStack: n.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (e) {
        setTimeout(function () {
          throw e;
        });
      }
    }
    function Dc(e, t, n) {
      return n = ho(n), n.tag = 3, n.payload = {
        element: null
      }, n.callback = function () {
        Tc(e, t);
      }, n;
    }
    function Oc(e) {
      return e = ho(e), e.tag = 3, e;
    }
    function kc(e, t, n, r) {
      var i = n.type.getDerivedStateFromError;
      if (typeof i == `function`) {
        var a = r.value;
        e.payload = function () {
          return i(a);
        };
        e.callback = function () {
          Ec(t, n, r);
        };
      }
      var o = n.stateNode;
      o !== null && typeof o.componentDidCatch == `function` && (e.callback = function () {
        Ec(t, n, r);
        typeof i != `function` && (vd === null ? vd = new Set([this]) : vd.add(this));
        var e = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: e === null ? `` : e
        });
      });
    }
    function Ac(e, t, n, r, a) {
      if (n.flags |= 32768, typeof r == `object` && r && typeof r.then == `function`) {
        if (t = n.alternate, t !== null && ba(t, n, a, true), n = ko.current, n !== null) {
          switch (n.tag) {
            case 31:
            case 13:
            case 19:
              return Ao === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, r === Xa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = new Set([r]) : t.add(r), mf(e, r, a)), false;
            case 22:
              return n.flags |= 65536, r === Xa ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: new Set([r])
              }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = new Set([r]) : n.add(r)), mf(e, r, a)), false;
          }
          throw Error(i(435, n.tag));
        }
        return mf(e, r, a), Kd(), false;
      }
      if (H) return t = ko.current, t === null ? (r !== aa && (t = Error(i(423), {
        cause: r
      }), fa(Vi(t, n))), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, r = Vi(r, n), a = Dc(e.stateNode, r, a), vo(e, a), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = a, r !== aa && (e = Error(i(422), {
        cause: r
      }), fa(Vi(e, n)))), false;
      var o = Error(i(520), {
        cause: r
      });
      if (o = Vi(o, n), dd === null ? dd = [o] : dd.push(o), ad !== 4 && (ad = 2), t === null) return true;
      r = Vi(r, n);
      n = t;
      do {
        switch (n.tag) {
          case 3:
            return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Dc(n.stateNode, r, e), vo(n, e), false;
          case 1:
            if (t = n.type, o = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (vd === null || !vd.has(o)))) return n.flags |= 65536, a &= -a, n.lanes |= a, a = Oc(a), kc(a, e, n, r), vo(n, a), false;
            break;
          case 22:
            if (n.memoizedState !== null) return n.flags |= 65536, false;
        }
        n = n.return;
      } while (n !== null);
      return false;
    }
    var jc = Error(i(461)),
      Mc = false;
    function Nc(e, t, n, r) {
      t.child = e === null ? uo(t, null, n, r) : lo(t, e.child, n, r);
    }
    function Pc(e, t, n, r, i) {
      n = n.render;
      var a = t.ref;
      if (`ref` in r) {
        var o = {};
        for (var s in r) s !== `ref` && (o[s] = r[s]);
      } else o = r;
      return Sa(t), r = Zo(e, t, n, o, a, i), s = ts(), e !== null && !Mc ? (ns(e, t, i), cl(e, t, i)) : (H && s && $i(t), t.flags |= 1, Nc(e, t, r, i), t.child);
    }
    function Fc(e, t, n, r, i) {
      if (e === null) {
        var a = n.type;
        return typeof a == `function` && !Mi(a) && a.defaultProps === undefined && n.compare === null ? (t.tag = 15, t.type = a, Ic(e, t, a, r, i)) : (e = Fi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (a = e.child, !ll(e, i)) {
        var o = a.memoizedProps;
        if (n = n.compare, n = n === null ? Vr : n, n(o, r) && e.ref === t.ref) return cl(e, t, i);
      }
      return t.flags |= 1, e = Ni(a, r), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ic(e, t, n, r, i) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Vr(a, r) && e.ref === t.ref) {
          if (Mc = false, t.pendingProps = r = a, ll(e, i)) e.flags & 131072 && (Mc = true);else return t.lanes = e.lanes, cl(e, t, i);
        }
      }
      return Wc(e, t, n, r, i);
    }
    function Lc(e, t, n, r) {
      var i = r.children,
        a = e === null ? null : e.memoizedState;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), r.mode === `hidden`) {
        if (t.flags & 128) {
          if (a = a === null ? n : a.baseLanes | n, e !== null) {
            for (r = t.child = e.child, i = 0; r !== null;) {
              i = i | r.lanes | r.childLanes;
              r = r.sibling;
            }
            r = i & ~a;
          } else {
            r = 0;
            t.child = null;
          }
          return zc(e, t, a, n, r);
        }
        if (n & 536870912) {
          t.memoizedState = {
            baseLanes: 0,
            cachePool: null
          };
          e !== null && Ga(t, a === null ? null : a.cachePool);
          if (a === null) {
            Do();
          } else {
            Eo(t, a);
          }
          No(t);
        } else return r = t.lanes = 536870912, zc(e, t, a === null ? n : a.baseLanes | n, n, r);
      } else if (a === null) {
        e !== null && Ga(t, null);
        Do();
        Po();
      } else {
        Ga(t, a.cachePool);
        Eo(t, a);
        Po();
        t.memoizedState = null;
      }
      return Nc(e, t, i, n), t.child;
    }
    function Rc(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function zc(e, t, n, r, i) {
      var a = Wa();
      return a = a === null ? null : {
        parent: ka._currentValue,
        pool: a
      }, t.memoizedState = {
        baseLanes: n,
        cachePool: a
      }, e !== null && Ga(t, null), Do(), No(t), e !== null && ba(e, t, r, true), t.childLanes = i, null;
    }
    function Bc(e, t) {
      return t = $c({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Vc(e, t, n) {
      return lo(t, e.child, null, n), e = Bc(t, t.pendingProps), e.flags |= 2, Fo(t), t.memoizedState = null, e;
    }
    function Hc(e, t, n) {
      var r = t.pendingProps,
        a = !!(t.flags & 128);
      if (t.flags &= -129, e === null) {
        if (H) {
          if (r.mode === `hidden`) return e = Bc(t, r), t.lanes = 536870912, e.memoizedState = {
            baseLanes: 0,
            cachePool: null
          }, Rc(null, e);
          if (Mo(t), (e = V) ? (e = am(e, ia), e = e !== null && e.data === `&` ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: Ji === null ? null : {
              id: Yi,
              overflow: Xi
            },
            retryLane: 536870912,
            hydrationErrors: null
          }, n = Ri(e), n.return = t, t.child = n, na = t, V = null)) : e = null, e === null) throw oa(t);
          return t.lanes = 536870912, null;
        }
        return Bc(t, r);
      }
      var o = e.memoizedState;
      if (o !== null) {
        var s = o.dehydrated;
        if (Mo(t), a) {
          if (t.flags & 256) {
            t.flags &= -257;
            t = Vc(e, t, n);
          } else if (t.memoizedState !== null) {
            t.child = e.child;
            t.flags |= 128;
            t = null;
          } else throw Error(i(558));
        } else if (Mc || ba(e, t, n, false), a = (n & e.childLanes) !== 0, Mc || a) {
          if (wo.current === null) {
            if (r = q, r !== null && (s = yt(r, n), s !== 0 && s !== o.retryLane)) throw o.retryLane = s, Ei(e, s), Pd(r, e, s), jc;
            Kd();
          }
          t = Vc(e, t, n);
        } else {
          e = o.treeContext;
          V = lm(s.nextSibling);
          na = t;
          H = true;
          ra = null;
          ia = false;
          e !== null && ta(t, e);
          t = Bc(t, r);
          t.flags |= 134221824;
        }
        return t;
      }
      return e = Ni(e.child, {
        mode: r.mode,
        children: r.children
      }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Uc(e, t) {
      var n = t.ref;
      if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);else {
        if (typeof n != `function` && typeof n != `object`) throw Error(i(284));
        (e === null || e.ref !== n) && (t.flags |= 4194816);
      }
    }
    function Wc(e, t, n, r, i) {
      return Sa(t), n = Zo(e, t, n, r, undefined, i), r = ts(), e !== null && !Mc ? (ns(e, t, i), cl(e, t, i)) : (H && r && $i(t), t.flags |= 1, Nc(e, t, n, i), t.child);
    }
    function Gc(e, t, n, r, i, a) {
      return Sa(t), t.updateQueue = null, n = $o(t, r, n, i), Qo(e), r = ts(), e !== null && !Mc ? (ns(e, t, a), cl(e, t, a)) : (H && r && $i(t), t.flags |= 1, Nc(e, t, n, a), t.child);
    }
    function Kc(e, t, n, r, i) {
      if (Sa(t), t.stateNode === null) {
        var a = ki,
          o = n.contextType;
        typeof o == `object` && o && (a = Ca(o));
        a = new n(r, a);
        t.memoizedState = a.state !== null && a.state !== undefined ? a.state : null;
        a.updater = vc;
        t.stateNode = a;
        a._reactInternals = t;
        a = t.stateNode;
        a.props = r;
        a.state = t.memoizedState;
        a.refs = {};
        po(t);
        o = n.contextType;
        a.context = typeof o == `object` && o ? Ca(o) : ki;
        a.state = t.memoizedState;
        o = n.getDerivedStateFromProps;
        typeof o == `function` && (_c(t, n, o, r), a.state = t.memoizedState);
        typeof n.getDerivedStateFromProps == `function` || typeof a.getSnapshotBeforeUpdate == `function` || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (o = a.state, typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount(), o !== a.state && vc.enqueueReplaceState(a, a.state, null), xo(t, r, a, i), bo(), a.state = t.memoizedState);
        typeof a.componentDidMount == `function` && (t.flags |= 4194308);
        r = true;
      } else if (e === null) {
        a = t.stateNode;
        var s = t.memoizedProps,
          c = xc(n, s);
        a.props = c;
        var l = a.context,
          u = n.contextType;
        o = ki;
        typeof u == `object` && u && (o = Ca(u));
        var d = n.getDerivedStateFromProps;
        u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`;
        s = t.pendingProps !== s;
        u || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (s || l !== o) && bc(t, a, r, o);
        fo = false;
        var f = t.memoizedState;
        a.state = f;
        xo(t, r, a, i);
        bo();
        l = t.memoizedState;
        if (s || f !== l || fo) {
          typeof d == `function` && (_c(t, n, d, r), l = t.memoizedState);
          if (c = fo || yc(t, n, c, r, f, l, o)) {
            u || typeof a.UNSAFE_componentWillMount != `function` && typeof a.componentWillMount != `function` || (typeof a.componentWillMount == `function` && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == `function` && a.UNSAFE_componentWillMount());
            typeof a.componentDidMount == `function` && (t.flags |= 4194308);
          } else {
            typeof a.componentDidMount == `function` && (t.flags |= 4194308);
            t.memoizedProps = r;
            t.memoizedState = l;
          }
          a.props = r;
          a.state = l;
          a.context = o;
          r = c;
        } else {
          typeof a.componentDidMount == `function` && (t.flags |= 4194308);
          r = false;
        }
      } else {
        a = t.stateNode;
        mo(e, t);
        o = t.memoizedProps;
        u = xc(n, o);
        a.props = u;
        d = t.pendingProps;
        f = a.context;
        l = n.contextType;
        c = ki;
        typeof l == `object` && l && (c = Ca(l));
        s = n.getDerivedStateFromProps;
        (l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) || typeof a.UNSAFE_componentWillReceiveProps != `function` && typeof a.componentWillReceiveProps != `function` || (o !== d || f !== c) && bc(t, a, r, c);
        fo = false;
        f = t.memoizedState;
        a.state = f;
        xo(t, r, a, i);
        bo();
        var p = t.memoizedState;
        if (o !== d || f !== p || fo || e !== null && e.dependencies !== null && xa(e.dependencies)) {
          typeof s == `function` && (_c(t, n, s, r), p = t.memoizedState);
          if (u = fo || yc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && xa(e.dependencies)) {
            l || typeof a.UNSAFE_componentWillUpdate != `function` && typeof a.componentWillUpdate != `function` || (typeof a.componentWillUpdate == `function` && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == `function` && a.UNSAFE_componentWillUpdate(r, p, c));
            typeof a.componentDidUpdate == `function` && (t.flags |= 4);
            typeof a.getSnapshotBeforeUpdate == `function` && (t.flags |= 1024);
          } else {
            typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4);
            typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024);
            t.memoizedProps = r;
            t.memoizedState = p;
          }
          a.props = r;
          a.state = p;
          a.context = c;
          r = u;
        } else {
          typeof a.componentDidUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4);
          typeof a.getSnapshotBeforeUpdate != `function` || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024);
          r = false;
        }
      }
      return a = r, Uc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = lo(t, e.child, null, i), t.child = lo(t, null, n, i)) : Nc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = cl(e, t, i), e;
    }
    function qc(e, t, n, r) {
      return ua(), t.flags |= 256, Nc(e, t, n, r), t.child;
    }
    var Jc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Yc(e) {
      return {
        baseLanes: e,
        cachePool: Ka()
      };
    }
    function Xc(e, t, n) {
      return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
    }
    function Zc(e, t, n) {
      var r = t.pendingProps,
        i = false,
        a = !!(t.flags & 128),
        o;
      if ((o = a) || (o = e !== null && e.memoizedState === null ? false : !!(Io.current & 2)), o && (i = true, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
        if (H) {
          if (i ? jo(t) : Po(), (e = V) ? (e = am(e, ia), e = e !== null && e.data !== `&` ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: Ji === null ? null : {
              id: Yi,
              overflow: Xi
            },
            retryLane: 536870912,
            hydrationErrors: null
          }, n = Ri(e), n.return = t, t.child = n, na = t, V = null)) : e = null, e === null) throw oa(t);
          return t.lanes = sm(e) ? 32 : 536870912, null;
        }
        return a = r.children, r = r.fallback, i ? (Po(), i = t.mode, a = $c({
          mode: `hidden`,
          children: a
        }, i), r = Ii(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Yc(n), r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(null, r)) : (jo(t), Qc(t, a));
      }
      var s = e.memoizedState;
      if (s !== null) {
        var c = s.dehydrated;
        if (c !== null) return tl(e, t, a, o, r, c, s, n);
      }
      return i ? (Po(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Ni(s, {
        mode: `hidden`,
        children: r.children
      }), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Ii(i, a, n, null), i.flags |= 2) : i = Ni(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Rc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Yc(n) : (a = i.cachePool, a === null ? a = Ka() : (s = ka._currentValue, a = a.parent === s ? a : {
        parent: s,
        pool: s
      }), i = {
        baseLanes: i.baseLanes | n,
        cachePool: a
      }), r.memoizedState = i, r.childLanes = Xc(e, o, n), t.memoizedState = Jc, Rc(e.child, r)) : (jo(t), n = e.child, e = n.sibling, n = Ni(n, {
        mode: `visible`,
        children: r.children
      }), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
    }
    function Qc(e, t) {
      return t = $c({
        mode: `visible`,
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function $c(e, t) {
      return e = ji(22, e, null, t), e.lanes = 0, e;
    }
    function el(e, t, n) {
      return lo(t, e.child, null, n), e = Qc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function tl(e, t, n, r, a, o, s, c) {
      if (n) return t.flags & 256 ? (jo(t), t.flags &= -257, el(e, t, c)) : t.memoizedState === null ? (Po(), o = a.fallback, s = t.mode, a = $c({
        mode: `visible`,
        children: a.children
      }, s), o = Ii(o, s, c, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, lo(t, e.child, null, c), a = t.child, a.memoizedState = Yc(c), a.childLanes = Xc(e, r, c), t.memoizedState = Jc, Rc(null, a)) : (Po(), t.child = e.child, t.flags |= 128, null);
      if (jo(t), sm(o)) {
        if (r = o.nextSibling && o.nextSibling.dataset, r) var l = r.dgst;
        return r = l, r !== `` && (a = Error(i(419)), a.stack = ``, a.digest = r, fa({
          value: a,
          source: null,
          stack: null
        })), el(e, t, c);
      }
      if (Mc || ba(e, t, c, false), r = (c & e.childLanes) !== 0, Mc || r) {
        if (wo.current !== null) return el(e, t, c);
        if (r = q, r !== null && (a = yt(r, c), a !== 0 && a !== s.retryLane)) throw s.retryLane = a, Ei(e, a), Pd(r, e, a), jc;
        return om(o) || Kd(), el(e, t, c);
      }
      return om(o) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, V = lm(o.nextSibling), na = t, H = true, ra = null, ia = false, e !== null && ta(t, e), t = Qc(t, a.children), t.flags |= 134221824, t);
    }
    function nl(e, t, n) {
      e.lanes |= t;
      var r = e.alternate;
      r !== null && (r.lanes |= t);
      va(e.return, t, n);
    }
    function rl(e) {
      for (var t = null; e !== null;) {
        var n = e.alternate;
        n !== null && zo(n) === null && (t = e);
        e = e.sibling;
      }
      return t;
    }
    function il(e, t, n, r, i, a) {
      var o = e.memoizedState;
      if (o === null) {
        e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
          treeForkCount: a
        };
      } else {
        o.isBackwards = t;
        o.rendering = null;
        o.renderingStartTime = 0;
        o.last = r;
        o.tail = n;
        o.tailMode = i;
        o.treeForkCount = a;
      }
    }
    function al(e) {
      var t = e.child;
      for (e.child = null; t !== null;) {
        var n = t.sibling;
        t.sibling = e.child;
        e.child = t;
        t = n;
      }
    }
    function ol(e, t, n) {
      var r = t.pendingProps,
        i = r.revealOrder,
        a = r.tail;
      r = r.children;
      var o = Io.current;
      if (t.flags & 128) return Lo(t, o), null;
      var s = !!(o & 2);
      if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, Lo(t, o), i === `backwards` && e !== null ? (al(e), Nc(e, t, r, n), al(e)) : Nc(e, t, r, n), r = H ? Gi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && nl(e, n, t);else if (e.tag === 19) nl(e, n, t);else if (e.child !== null) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === t) break a;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) break a;
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
      switch (i) {
        case `backwards`:
          n = rl(t.child);
          if (n === null) {
            i = t.child;
            t.child = null;
          } else {
            i = n.sibling;
            n.sibling = null;
            al(t);
          }
          il(t, true, i, null, a, r);
          break;
        case `unstable_legacy-backwards`:
          for (n = null, i = t.child, t.child = null; i !== null;) {
            if (e = i.alternate, e !== null && zo(e) === null) {
              t.child = i;
              break;
            }
            e = i.sibling;
            i.sibling = n;
            n = i;
            i = e;
          }
          il(t, true, n, null, a, r);
          break;
        case `together`:
          il(t, false, null, null, undefined, r);
          break;
        case `independent`:
          t.memoizedState = null;
          break;
        default:
          n = rl(t.child);
          if (n === null) {
            i = t.child;
            t.child = null;
          } else {
            i = n.sibling;
            n.sibling = null;
          }
          il(t, false, i, n, a, r);
      }
      return t.child;
    }
    function sl(e, t, n) {
      var r = t.pendingProps;
      return ga(t, t.type, r.value), Nc(e, t, r.children, n), t.child;
    }
    function cl(e, t, n) {
      if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
        if (e !== null) {
          if (ba(e, t, n, false), (n & t.childLanes) === 0) return null;
        } else return null;
      }
      if (e !== null && t.child !== e.child) throw Error(i(153));
      if (t.child !== null) {
        for (e = t.child, n = Ni(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) {
          e = e.sibling;
          n = n.sibling = Ni(e, e.pendingProps);
          n.return = t;
        }
        n.sibling = null;
      }
      return t.child;
    }
    function ll(e, t) {
      return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && xa(e)));
    }
    function ul(e, t, n) {
      switch (t.tag) {
        case 3:
          Ae(t, t.stateNode.containerInfo);
          ga(t, ka, e.memoizedState.cache);
          ua();
          break;
        case 27:
        case 5:
          Me(t);
          break;
        case 4:
          Ae(t, t.stateNode.containerInfo);
          break;
        case 10:
          ga(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, Mo(t), null;
          break;
        case 13:
          var r = t.memoizedState;
          if (r !== null) {
            if (r.dehydrated !== null) return jo(t), t.flags |= 128, null;
            r = ba(e, t, n, false);
            var i = t.child.childLanes;
            return r || (n & i) !== 0 ? Zc(e, t, n) : (jo(t), e = cl(e, t, n), e === null ? null : e.sibling);
          }
          jo(t);
          break;
        case 19:
          if (t.flags & 128) return ol(e, t, n);
          if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (ba(e, t, n, false), (n & t.childLanes) !== 0), i) {
            if (r) return ol(e, t, n);
            t.flags |= 128;
          }
          if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Lo(t, Io.current), r) break;
          return null;
        case 22:
          return t.lanes = 0, Lc(e, t, n, t.pendingProps);
        case 24:
          ga(t, ka, e.memoizedState.cache);
      }
      return cl(e, t, n);
    }
    function dl(e, t, n) {
      if (e !== null) {
        if (e.memoizedProps !== t.pendingProps) Mc = true;else {
          if (!ll(e, n) && !(t.flags & 128)) return Mc = false, ul(e, t, n);
          Mc = !!(e.flags & 131072);
        }
      } else {
        Mc = false;
        H && t.flags & 1048576 && Qi(t, Gi, t.index);
      }
      switch (t.lanes = 0, t.tag) {
        case 16:
          a: {
            var r = t.pendingProps;
            if (e = $a(t.elementType), t.type = e, typeof e == `function`) {
              if (Mi(e)) {
                r = xc(e, r);
                t.tag = 1;
                t = Kc(null, t, e, r, n);
              } else {
                t.tag = 0;
                t = Wc(null, t, e, r, n);
              }
            } else {
              if (e != null) {
                var a = e.$$typeof;
                if (a === le) {
                  t.tag = 11;
                  t = Pc(null, t, e, r, n);
                  break a;
                }
                if (a === fe) {
                  t.tag = 14;
                  t = Fc(null, t, e, r, n);
                  break a;
                }
                if (a === ce) {
                  t.tag = 10;
                  t.type = e;
                  t = sl(null, t, n);
                  break a;
                }
              }
              throw t = xe(e) || e, Error(i(306, t, ``));
            }
          }
          return t;
        case 0:
          return Wc(e, t, t.type, t.pendingProps, n);
        case 1:
          return r = t.type, a = xc(r, t.pendingProps), Kc(e, t, r, a, n);
        case 3:
          a: {
            if (Ae(t, t.stateNode.containerInfo), e === null) throw Error(i(387));
            r = t.pendingProps;
            var o = t.memoizedState;
            a = o.element;
            mo(e, t);
            xo(t, r, null, n);
            var s = t.memoizedState;
            if (r = s.cache, ga(t, ka, r), r !== o.cache && ya(t, [ka], n, true), bo(), r = s.element, o.isDehydrated) {
              if (o = {
                element: r,
                isDehydrated: false,
                cache: s.cache
              }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                t = qc(e, t, r, n);
                break a;
              }
              if (r !== a) {
                a = Vi(Error(i(424)), t);
                fa(a);
                t = qc(e, t, r, n);
                break a;
              }
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
              }
              for (V = lm(e.firstChild), na = t, H = true, ra = null, ia = true, n = uo(t, null, r, n), t.child = n; n;) {
                n.flags = n.flags & -3 | 134221824;
                n = n.sibling;
              }
            } else {
              if (ua(), r === a) {
                t = cl(e, t, n);
                break a;
              }
              Nc(e, t, r, n);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Uc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : H || (t.stateNode = fp(t.type, t.pendingProps, ke.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return Me(t), e === null && H && (r = t.stateNode = hm(t.type, t.pendingProps, ke.current), na = t, ia = true, a = V, Sp(t.type) ? (um = a, V = lm(r.firstChild)) : V = a), Nc(e, t, t.pendingProps.children, n), Uc(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && H && ((a = r = V) && (r = rm(r, t.type, t.pendingProps, ia), r === null ? a = false : (t.stateNode = r, na = t, V = lm(r.firstChild), ia = false, a = true)), a || oa(t)), Me(t), a = t.type, o = t.pendingProps, s = e === null ? null : e.memoizedProps, r = o.children, pp(a, o) ? r = null : s !== null && pp(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = Zo(e, t, es, null, null, n), sh._currentValue = a), Uc(e, t), Nc(e, t, r, n), t.child;
        case 6:
          return e === null && H && ((e = n = V) && (n = im(n, t.pendingProps, ia), n === null ? e = false : (t.stateNode = n, na = t, V = null, e = true)), e || oa(t)), null;
        case 13:
          return Zc(e, t, n);
        case 4:
          return Ae(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = lo(t, null, r, n) : Nc(e, t, r, n), t.child;
        case 11:
          return Pc(e, t, t.type, t.pendingProps, n);
        case 7:
          return r = t.pendingProps, Uc(e, t), Nc(e, t, r, n), t.child;
        case 8:
          return Nc(e, t, t.pendingProps.children, n), t.child;
        case 12:
          return Nc(e, t, t.pendingProps.children, n), t.child;
        case 10:
          return sl(e, t, n);
        case 9:
          return a = t.type._context, r = t.pendingProps.children, Sa(t), a = Ca(a), r = r(a), t.flags |= 1, Nc(e, t, r, n), t.child;
        case 14:
          return Fc(e, t, t.type, t.pendingProps, n);
        case 15:
          return Ic(e, t, t.type, t.pendingProps, n);
        case 19:
          return ol(e, t, n);
        case 31:
          return Hc(e, t, n);
        case 22:
          return Lc(e, t, n, t.pendingProps);
        case 24:
          return Sa(t), r = Ca(ka), e === null ? (a = Wa(), a === null && (a = q, o = Aa(), a.pooledCache = o, o.refCount++, o !== null && (a.pooledCacheLanes |= n), a = o), t.memoizedState = {
            parent: r,
            cache: a
          }, po(t), ga(t, ka, a)) : ((e.lanes & n) !== 0 && (mo(e, t), xo(t, null, null, n), bo()), a = e.memoizedState, o = t.memoizedState, a.parent === r ? (r = o.cache, ga(t, ka, r), r !== a.cache && ya(t, [ka], n, true)) : (a = {
            parent: r,
            cache: r
          }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), ga(t, ka, r))), Nc(e, t, t.pendingProps.children, n), t.child;
        case 30:
          return t.stateNode === null && (t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }), r = t.pendingProps, r.name != null && r.name !== `auto` ? t.flags |= e === null ? 18882560 : 18874368 : H && $i(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Uc(e, t), Nc(e, t, r.children, n), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(i(156, t.tag));
    }
    function fl(e) {
      e.flags |= 4;
    }
    function pl(e, t, n, r, i) {
      var a;
      if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
        if (e.flags |= 16777216, (i & 335544128) === i) {
          if (e.stateNode.complete) e.flags |= 8192;else if (Ud()) e.flags |= 8192;else throw eo = Xa, Ja;
        }
      } else e.flags &= -16777217;
    }
    function ml(e, t) {
      if (t.type !== `stylesheet` || t.state.loading & 4) e.flags &= -16777217;else if (e.flags |= 16777216, !Ym(t)) {
        if (Ud()) e.flags |= 8192;else throw eo = Xa, Ja;
      }
    }
    function hl(e, t) {
      t !== null && (e.flags |= 4);
      e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ht(), e.lanes |= t, ud |= t);
    }
    function gl(e, t) {
      if (!H) switch (e.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n = e.tail, r = null; n !== null;) {
            n.alternate !== null && (r = n);
            n = n.sibling;
          }
          if (r === null) {
            if (t || e.tail === null) {
              e.tail = null;
            } else {
              e.tail.sibling = null;
            }
          } else {
            r.sibling = null;
          }
          break;
        default:
          for (t = e.tail, n = null; t !== null;) {
            t.alternate !== null && (n = t);
            t = t.sibling;
          }
          if (n === null) {
            e.tail = null;
          } else {
            n.sibling = null;
          }
      }
    }
    function _l(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
      if (t) for (var i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags & 1206910976;
        r |= i.flags & 1206910976;
        i.return = e;
        i = i.sibling;
      } else for (i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags;
        r |= i.flags;
        i.return = e;
        i = i.sibling;
      }
      return e.subtreeFlags |= r, e.childLanes = n, t;
    }
    function vl(e, t, n) {
      var r = t.pendingProps;
      switch (ea(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return _l(t), null;
        case 1:
          return _l(t), null;
        case 3:
          return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), _a(ka), je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (la(t) ? fl(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, da())), _l(t), null;
        case 26:
          var a = t.type,
            o = t.memoizedState;
          return e === null ? (fl(t), o === null ? (_l(t), pl(t, a, null, r, n)) : (_l(t), ml(t, o))) : o ? o === e.memoizedState ? (_l(t), t.flags &= -16777217) : (fl(t), _l(t), ml(t, o)) : (e = e.memoizedProps, e !== r && fl(t), _l(t), pl(t, a, e, r, n)), null;
        case 27:
          if (Ne(t), n = ke.current, a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return _l(t), t.subtreeFlags &= -33554433, null;
            }
            e = Oe.current;
            if (la(t)) {
              sa(t, e);
            } else {
              e = hm(a, r, n);
              t.stateNode = e;
              fl(t);
            }
          }
          return _l(t), t.subtreeFlags &= -33554433, null;
        case 5:
          if (Ne(t), a = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && fl(t);else {
            if (!r) {
              if (t.stateNode === null) throw Error(i(166));
              return _l(t), t.subtreeFlags &= -33554433, null;
            }
            if (o = Oe.current, la(t)) sa(t, o);else {
              var s = lp(ke.current);
              switch (o) {
                case 1:
                  o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                  break;
                case 2:
                  o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                  break;
                default:
                  switch (a) {
                    case `svg`:
                      o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                      break;
                    case `math`:
                      o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, a);
                      break;
                    case `script`:
                      o = s.createElement(`div`);
                      o.innerHTML = `<script><\/script>`;
                      o = o.removeChild(o.firstChild);
                      break;
                    case `select`:
                      o = typeof r.is == `string` ? s.createElement(`select`, {
                        is: r.is
                      }) : s.createElement(`select`);
                      if (r.multiple) {
                        o.multiple = true;
                      } else {
                        r.size && (o.size = r.size);
                      }
                      break;
                    default:
                      o = typeof r.is == `string` ? s.createElement(a, {
                        is: r.is
                      }) : s.createElement(a);
                  }
              }
              o[Tt] = t;
              o[Et] = r;
              a: for (s = t.child; s !== null;) {
                if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                  s.child.return = s;
                  s = s.child;
                  continue;
                }
                if (s === t) break a;
                for (; s.sibling === null;) {
                  if (s.return === null || s.return === t) break a;
                  s = s.return;
                }
                s.sibling.return = s.return;
                s = s.sibling;
              }
              t.stateNode = o;
              a: switch (np(o, a, r), a) {
                case `button`:
                case `input`:
                case `select`:
                case `textarea`:
                  r = !!r.autoFocus;
                  break a;
                case `img`:
                  r = true;
                  break a;
                default:
                  r = false;
              }
              r && fl(t);
            }
          }
          return _l(t), t.subtreeFlags &= -33554433, pl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== r && fl(t);else {
            if (typeof r != `string` && t.stateNode === null) throw Error(i(166));
            if (e = ke.current, la(t)) {
              if (e = t.stateNode, n = t.memoizedProps, r = null, a = na, a !== null) switch (a.tag) {
                case 27:
                case 5:
                  r = a.memoizedProps;
              }
              e[Tt] = t;
              e = !!(e.nodeValue === n || r !== null && true === r.suppressHydrationWarning || ep(e.nodeValue, n));
              e || oa(t, true);
            } else {
              e = lp(e).createTextNode(r);
              e[Tt] = t;
              t.stateNode = e;
            }
          }
          return _l(t), null;
        case 31:
          if (n = t.memoizedState, e === null || e.memoizedState !== null) {
            if (r = la(t), n !== null) {
              if (e === null) {
                if (!r) throw Error(i(318));
                if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(i(557));
                e[Tt] = t;
              } else {
                ua();
                !(t.flags & 128) && (t.memoizedState = null);
                t.flags |= 4;
              }
              _l(t);
              e = false;
            } else {
              n = da();
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n);
              e = true;
            }
            if (!e) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null);
            if (t.flags & 128) throw Error(i(558));
          }
          return _l(t), null;
        case 13:
          if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (a = la(t), r !== null && r.dehydrated !== null) {
              if (e === null) {
                if (!a) throw Error(i(318));
                if (a = t.memoizedState, a = a === null ? null : a.dehydrated, !a) throw Error(i(317));
                a[Tt] = t;
              } else {
                ua();
                !(t.flags & 128) && (t.memoizedState = null);
                t.flags |= 4;
              }
              _l(t);
              a = false;
            } else {
              a = da();
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a);
              a = true;
            }
            if (!a) return t.flags & 256 ? (Fo(t), t) : (Fo(t), null);
          }
          return Fo(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, a = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (a = r.alternate.memoizedState.cachePool.pool), o = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (o = r.memoizedState.cachePool.pool), o !== a && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), hl(t, t.updateQueue), _l(t), null);
        case 4:
          return je(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, _l(t), null;
        case 10:
          return _a(t.type), _l(t), null;
        case 19:
          if (Ro(t), r = t.memoizedState, r === null) return _l(t), null;
          if (a = !!(t.flags & 128), o = r.rendering, o === null) {
            if (a) gl(r, false);else {
              if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
                if (o = zo(e), o !== null) {
                  for (t.flags |= 128, gl(r, false), e = o.updateQueue, t.updateQueue = e, hl(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) {
                    Pi(n, e);
                    n = n.sibling;
                  }
                  return Lo(t, Io.current & 1 | 2), H && Zi(t, r.treeForkCount), t.child;
                }
                e = e.sibling;
              }
              r.tail !== null && N() > gd && (t.flags |= 128, a = true, gl(r, false), t.lanes = 4194304);
            }
          } else {
            if (!a) {
              if (e = zo(o), e !== null) {
                if (t.flags |= 128, a = true, e = e.updateQueue, t.updateQueue = e, hl(t, e), gl(r, true), r.tail === null && r.tailMode !== `collapsed` && r.tailMode !== `visible` && !o.alternate && !H) return _l(t), null;
              } else 2 * N() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, a = true, gl(r, false), t.lanes = 4194304);
            }
            if (r.isBackwards) {
              o.sibling = t.child;
              t.child = o;
            } else {
              e = r.last;
              if (e === null) {
                t.child = o;
              } else {
                e.sibling = o;
              }
              r.last = o;
            }
          }
          if (r.tail !== null) {
            e = r.tail;
            a: {
              for (n = e; n !== null;) {
                if (n.alternate !== null) {
                  n = false;
                  break a;
                }
                n = n.sibling;
              }
              n = true;
            }
            return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = N(), e.sibling = null, o = Io.current, o = a ? o & 1 | 2 : o & 1, r.tailMode === `visible` || r.tailMode === `collapsed` || !n || H ? Lo(t, o) : (n = o, A(ko, t), A(Io, n), Ao === null && (Ao = t)), H && Zi(t, r.treeForkCount), e;
          }
          return _l(t), null;
        case 22:
        case 23:
          return Fo(t), Oo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (_l(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : _l(t), n = t.updateQueue, n !== null && hl(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Ee(Ua), null;
        case 24:
          return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _a(ka), _l(t), null;
        case 25:
          return null;
        case 30:
          return t.flags |= 33554432, _l(t), null;
      }
      throw Error(i(156, t.tag));
    }
    function yl(e, t) {
      switch (ea(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return _a(ka), je(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Ne(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Fo(t), t.alternate === null) throw Error(i(340));
            ua();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (Fo(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(i(340));
            ua();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return Ro(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
        case 4:
          return je(), null;
        case 10:
          return _a(t.type), null;
        case 22:
        case 23:
          return Fo(t), Oo(), e !== null && Ee(Ua), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return _a(ka), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function bl(e, t) {
      switch (ea(t), t.tag) {
        case 3:
          _a(ka);
          je();
          break;
        case 26:
        case 27:
        case 5:
          Ne(t);
          break;
        case 4:
          je();
          break;
        case 31:
          t.memoizedState !== null && Fo(t);
          break;
        case 13:
          Fo(t);
          break;
        case 19:
          Ro(t);
          break;
        case 10:
          _a(t.type);
          break;
        case 22:
        case 23:
          Fo(t);
          Oo();
          e !== null && Ee(Ua);
          break;
        case 24:
          _a(ka);
      }
    }
    function xl(e, t) {
      try {
        var n = t.updateQueue,
          r = n === null ? null : n.lastEffect;
        if (r !== null) {
          var i = r.next;
          n = i;
          do {
            if ((n.tag & e) === e) {
              r = undefined;
              var a = n.create,
                o = n.inst;
              r = a();
              o.destroy = r;
            }
            n = n.next;
          } while (n !== i);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Sl(e, t, n) {
      try {
        var r = t.updateQueue,
          i = r === null ? null : r.lastEffect;
        if (i !== null) {
          var a = i.next;
          r = a;
          do {
            if ((r.tag & e) === e) {
              var o = r.inst,
                s = o.destroy;
              if (s !== undefined) {
                o.destroy = undefined;
                i = t;
                var c = n,
                  l = s;
                try {
                  l();
                } catch (e) {
                  Z(i, c, e);
                }
              }
            }
            r = r.next;
          } while (r !== a);
        }
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Cl(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var n = e.stateNode;
        try {
          Co(t, n);
        } catch (t) {
          Z(e, e.return, t);
        }
      }
    }
    function wl(e, t, n) {
      n.props = xc(e.type, e.memoizedProps);
      n.state = e.memoizedState;
      try {
        n.componentWillUnmount();
      } catch (n) {
        Z(e, t, n);
      }
    }
    function Tl(e, t) {
      try {
        var n = e.ref;
        if (n !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var r = e.stateNode;
              break;
            case 30:
              var i = e.stateNode,
                a = gi(e.memoizedProps, i);
              (i.ref === null || i.ref.name !== a) && (i.ref = Pp(a));
              r = i.ref;
              break;
            case 7:
              if (e.stateNode === null) {
                var o = new Fp(e);
                f(e.child, false, Qp, o, undefined, undefined);
                e.stateNode = o;
              }
              r = e.stateNode;
              break;
            default:
              r = e.stateNode;
          }
          if (typeof n == `function`) {
            e.refCleanup = n(r);
          } else {
            n.current = r;
          }
        }
      } catch (n) {
        Z(e, t, n);
      }
    }
    function El(e, t) {
      var n = e.ref,
        r = e.refCleanup;
      if (n !== null) {
        if (typeof r == `function`) try {
          r();
        } catch (n) {
          Z(e, t, n);
        } finally {
          e.refCleanup = null;
          e = e.alternate;
          e != null && (e.refCleanup = null);
        } else if (typeof n == `function`) try {
          n(null);
        } catch (n) {
          Z(e, t, n);
        } else n.current = null;
      }
    }
    function Dl(e, t) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
    }
    function Ol(e) {
      for (var t = e.return; t !== null && (jl(t) && em(e.stateNode, t.stateNode), !Al(t));) t = t.return;
    }
    function kl(e) {
      for (var t = e.return; t !== null && (jl(t) && tm(e.stateNode, t.stateNode), !Al(t));) t = t.return;
    }
    function Al(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 27;
    }
    function jl(e) {
      return e && e.tag === 7 && e.stateNode !== null;
    }
    function Ml(e) {
      var t = e.type,
        n = e.memoizedProps,
        r = e.stateNode;
      try {
        a: switch (t) {
          case `button`:
          case `input`:
          case `select`:
          case `textarea`:
            n.autoFocus && r.focus();
            break a;
          case `img`:
            if (n.src) {
              r.src = n.src;
            } else {
              n.srcSet && (r.srcset = n.srcSet);
            }
        }
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Nl(e, t, n) {
      try {
        var r = e.stateNode;
        ip(r, e.type, n, t);
        r[Et] = t;
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    function Pl(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
    }
    function Fl(e) {
      a: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || Pl(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
          if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
          e.child.return = e;
          e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Il(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6) {
        i = e.stateNode;
        if (t) {
          (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(i, t);
        } else {
          t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n;
          t.appendChild(i);
          n = n._reactRootContainer;
          n != null || t.onclick !== null || (t.onclick = bn);
        }
        Dl(e, r);
        I = true;
      } else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Il(e, t, n, r), e = e.sibling; e !== null;) {
        Il(e, t, n, r);
        e = e.sibling;
      }
    }
    function Ll(e, t, n, r) {
      var i = e.tag;
      if (i === 5 || i === 6) {
        i = e.stateNode;
        if (t) {
          n.insertBefore(i, t);
        } else {
          n.appendChild(i);
        }
        Dl(e, r);
        I = true;
      } else if (i !== 4 && (i === 27 && (Dl(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) {
        Ll(e, t, n, r);
        e = e.sibling;
      }
    }
    function Rl(e) {
      var t = e.stateNode,
        n = e.memoizedProps;
      try {
        for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
        np(t, r, n);
        t[Tt] = e;
        t[Et] = n;
      } catch (t) {
        Z(e, e.return, t);
      }
    }
    var zl = false,
      Bl = null;
    function Vl(e) {
      (e.tag === 30 || e.subtreeFlags & 33554432) && (zl = true);
    }
    var Hl = null;
    function Ul() {
      var e = Hl;
      return Hl = null, e;
    }
    var Wl = 0;
    function Gl(e, t, n, r, i) {
      return Wl = 0, Kl(e.child, t, n, r, i);
    }
    function Kl(e, t, n, r, i) {
      for (var a = false; e !== null;) {
        if (e.tag === 5) {
          var o = e.stateNode;
          if (r !== null) {
            var s = Op(o);
            r.push(s);
            s.view && (a = true);
          } else a || Op(o).view && (a = true);
          zl = true;
          Tp(o, Wl === 0 ? t : t + `_` + Wl, n);
          Wl++;
        } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && i || Kl(e.child, t, n, r, i) && (a = true));
        e = e.sibling;
      }
      return a;
    }
    function ql(e, t) {
      for (; e !== null;) {
        if (e.tag === 5) {
          Ep(e.stateNode, e.memoizedProps);
        } else {
          (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || ql(e.child, t));
        }
        e = e.sibling;
      }
    }
    function Jl(e) {
      if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === `auto`) throw Error(i(544));
          var n = t.name;
          t = vi(t.default, t.share);
          t !== `none` && (Gl(e, n, t, null, false) || ql(e.child, false));
        }
        e = e.sibling;
      }
    }
    function Yl(e, t) {
      if (e.tag === 30) {
        var n = e.stateNode,
          r = e.memoizedProps,
          i = gi(r, n),
          a = vi(r.default, n.paired ? r.share : r.enter);
        if (a === `none`) {
          Jl(e);
        } else {
          if (Gl(e, i, a, null, false)) {
            Jl(e);
            n.paired || t || Nd(e, r.onEnter);
          } else {
            ql(e.child, false);
          }
        }
      } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) {
        Yl(e, t);
        e = e.sibling;
      } else Jl(e);
    }
    function Xl(e) {
      if (Bl !== null && Bl.size !== 0) {
        var t = Bl;
        if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var n = e.memoizedProps,
                r = n.name;
              if (r != null && r !== `auto`) {
                var i = t.get(r);
                if (i !== undefined) {
                  var a = vi(n.default, n.share);
                  if (a !== `none` && (Gl(e, r, a, null, false) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : ql(e.child, false)), t.delete(r), t.size === 0) break;
                }
              }
            }
            Xl(e);
          }
          e = e.sibling;
        }
      }
    }
    function Zl(e) {
      if (e.tag === 30) {
        var t = e.memoizedProps,
          n = gi(t, e.stateNode),
          r = Bl === null ? undefined : Bl.get(n),
          i = vi(t.default, r === undefined ? t.exit : t.share);
        i !== `none` && (Gl(e, n, i, null, false) ? r === undefined ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Bl.delete(n), Nd(e, t.onShare)) : ql(e.child, false));
        Bl !== null && Xl(e);
      } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) {
        Zl(e);
        e = e.sibling;
      } else Bl !== null && Xl(e);
    }
    function Ql(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = gi(t, e.stateNode);
          t = vi(t.default, t.update);
          e.flags &= -5;
          t !== `none` && Gl(e, n, t, e.memoizedState = [], false);
        } else e.subtreeFlags & 33554432 && Ql(e);
        e = e.sibling;
      }
    }
    function $l(e) {
      if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && e.flags & 18874368) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, ql(e.child, false));
          }
          $l(e);
        }
        e = e.sibling;
      }
    }
    function eu(e) {
      if (e.tag === 30) {
        e.stateNode.paired = null;
        ql(e.child, false);
        $l(e);
      } else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) {
        eu(e);
        e = e.sibling;
      } else $l(e);
    }
    function tu(e) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          ql(e.child, false);
        } else {
          e.subtreeFlags & 33554432 && tu(e);
        }
        e = e.sibling;
      }
    }
    function nu(e, t, n, r, i, a, o) {
      for (var s = false; t !== null;) {
        if (t.tag === 5) {
          var c = t.stateNode;
          if (a !== null && Wl < a.length) {
            var l = a[Wl],
              u = Op(c);
            (l.view || u.view) && (s = true);
            var d;
            if (d = !(e.flags & 4)) {
              if (u.clip) d = true;else {
                d = l.rect;
                var f = u.rect;
                d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
              }
            }
            d && (e.flags |= 4);
            if (u.abs) {
              u = !l.abs;
            } else {
              l = l.rect;
              u = u.rect;
              u = l.height !== u.height || l.width !== u.width;
            }
            u && (e.flags |= 32);
          } else e.flags |= 32;
          e.flags & 4 && Tp(c, Wl === 0 ? n : n + `_` + Wl, i);
          s && e.flags & 4 || (Hl === null && (Hl = []), Hl.push(c, Wl === 0 ? r : r + `_` + Wl, t.memoizedProps));
          Wl++;
        } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : nu(e, t.child, n, r, i, a, o) && (s = true));
        t = t.sibling;
      }
      return s;
    }
    function ru(e, t) {
      for (e = e.child; e !== null;) {
        if (e.tag === 30) {
          var n = e.memoizedProps,
            r = e.stateNode,
            i = gi(n, r),
            a = vi(n.default, n.update);
          if (t) {
            r = r.clones;
            var o = r === null ? null : r.map(kp);
          } else {
            o = e.memoizedState;
            e.memoizedState = null;
          }
          r = e;
          var s = e.child;
          Wl = 0;
          i = nu(r, s, i, i, a, o, false);
          e.flags & 4 && i && (t || Nd(e, n.onUpdate));
        } else e.subtreeFlags & 33554432 && ru(e, t);
        e = e.sibling;
      }
    }
    var iu = false,
      G = false,
      au = false,
      ou = false,
      su = typeof WeakSet == `function` ? WeakSet : Set,
      cu = null,
      lu = false,
      uu = false,
      du = false,
      fu = false;
    function pu(e, t, n) {
      if (e = e.containerInfo, sp = gh, e = Kr(e), qr(e)) {
        if (`selectionStart` in e) var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };else a: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var a = i.anchorOffset,
              o = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType;
              o.nodeType;
            } catch {
              r = null;
              break a;
            }
            var s = 0,
              c = -1,
              l = -1,
              u = 0,
              d = 0,
              f = e,
              p = null;
            b: for (;;) {
              for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) {
                p = f;
                f = m;
              }
              for (;;) {
                if (f === e) break b;
                if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
                f = p;
                p = f.parentNode;
              }
              f = m;
            }
            r = c === -1 || l === -1 ? null : {
              start: c,
              end: l
            };
          } else r = null;
        }
        r ||= {
          start: 0,
          end: 0
        };
      } else r = null;
      for (cp = {
        focusedElem: e,
        selectionRange: r
      }, gh = false, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
        if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Zl(r[a]);
        if (e.alternate === null && e.flags & 2) {
          n && Vl(e);
          mu(n);
        } else {
          if (e.tag === 22) {
            if (r = e.alternate, e.memoizedState !== null) {
              r !== null && r.memoizedState === null && n && Zl(r);
              mu(n);
              continue;
            }
            if (r !== null && r.memoizedState !== null) {
              n && Vl(e);
              mu(n);
              continue;
            }
          }
          r = e.child;
          if ((e.subtreeFlags & t) !== 0 && r !== null) {
            r.return = e;
            cu = r;
          } else {
            n && Ql(e);
            mu(n);
          }
        }
      }
      Bl = null;
    }
    function mu(e) {
      for (; cu !== null;) {
        var t = cu,
          n = e,
          r = t.alternate,
          a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (a & 1024 && r !== null) {
              n = undefined;
              a = r.memoizedProps;
              r = r.memoizedState;
              var o = t.stateNode;
              try {
                var s = xc(t.type, a);
                n = o.getSnapshotBeforeUpdate(s, r);
                o.__reactInternalSnapshotBeforeUpdate = n;
              } catch (e) {
                Z(t, t.return, e);
              }
            }
            break;
          case 3:
            if (a & 1024) {
              if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);else if (n === 1) switch (r.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r);
                  break;
                default:
                  r.textContent = ``;
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          case 30:
            n && r !== null && (n = gi(r.memoizedProps, r.stateNode), a = t.memoizedProps, a = vi(a.default, a.update), a !== `none` && Gl(r, n, a, r.memoizedState = [], true));
            break;
          default:
            if (a & 1024) throw Error(i(163));
        }
        if (r = t.sibling, r !== null) {
          r.return = t.return;
          cu = r;
          break;
        }
        cu = t.return;
      }
    }
    function hu(e, t, n) {
      var r = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Fu(e, n);
          r & 4 && xl(5, n);
          break;
        case 1:
          if (Fu(e, n), r & 4) {
            if (e = n.stateNode, t === null) try {
              e.componentDidMount();
            } catch (e) {
              Z(n, n.return, e);
            } else {
              var i = xc(n.type, t.memoizedProps);
              t = t.memoizedState;
              try {
                e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
          }
          r & 64 && Cl(n);
          r & 512 && Tl(n, n.return);
          break;
        case 3:
          if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
            if (t = null, n.child !== null) switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
            try {
              Co(e, t);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
          break;
        case 27:
          t === null && r & 4 && Rl(n);
        case 26:
        case 5:
          Fu(e, n);
          t === null && r & 4 && Ml(n);
          r & 512 && Tl(n, n.return);
          break;
        case 12:
          Fu(e, n);
          break;
        case 31:
          Fu(e, n);
          r & 4 && wu(e, n);
          break;
        case 13:
          Fu(e, n);
          r & 4 && Tu(e, n);
          r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
          break;
        case 22:
          if (r = n.memoizedState !== null || iu, !r) {
            var a = t !== null && t.memoizedState !== null || G;
            t = iu;
            i = G;
            iu = r;
            if ((G = a) && !i) {
              r = 2;
              n.subtreeFlags & 8772 && (r |= 1);
              Lu(e, n, r);
            } else {
              Fu(e, n);
            }
            iu = t;
            G = i;
          }
          break;
        case 30:
          Fu(e, n);
          r & 512 && Tl(n, n.return);
          break;
        case 7:
          r & 512 && Tl(n, n.return);
        default:
          Fu(e, n);
      }
    }
    function gu(e, t) {
      for (e = e.child; e !== null;) {
        _u(e, t);
        e = e.sibling;
      }
    }
    function _u(e, t) {
      switch (e.tag) {
        case 5:
        case 26:
          try {
            var n = e.stateNode;
            if (t) {
              var r = n.style;
              if (typeof r.setProperty == `function`) {
                r.setProperty(`display`, `none`, `important`);
              } else {
                r.display = `none`;
              }
            } else {
              var i = e.stateNode,
                a = e.memoizedProps.style,
                o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
              i.style.display = o == null || typeof o == `boolean` ? `` : (`` + o).trim();
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          vu(e, t);
          break;
        case 6:
          try {
            e.stateNode.nodeValue = t ? `` : e.memoizedProps;
            I = true;
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 18:
          try {
            var s = e.stateNode;
            if (t) {
              wp(s, true);
            } else {
              wp(e.stateNode, false);
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          break;
        case 22:
        case 23:
          e.memoizedState === null && gu(e, t);
          break;
        default:
          gu(e, t);
      }
    }
    function vu(e, t) {
      if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
        a: {
          var n = e,
            r = t;
          switch (n.tag) {
            case 4:
              _u(n, r);
              break a;
            case 22:
              n.memoizedState === null && vu(n, r);
              break a;
            default:
              vu(n, r);
          }
        }
        e = e.sibling;
      }
    }
    function yu(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, yu(t));
      e.child = null;
      e.deletions = null;
      e.sibling = null;
      e.tag === 5 && (t = e.stateNode, t !== null && Pt(t));
      e.stateNode = null;
      e.return = null;
      e.dependencies = null;
      e.memoizedProps = null;
      e.memoizedState = null;
      e.pendingProps = null;
      e.stateNode = null;
      e.updateQueue = null;
    }
    var bu = null,
      xu = false;
    function Su(e, t, n) {
      for (n = n.child; n !== null;) {
        Cu(e, t, n);
        n = n.sibling;
      }
    }
    function Cu(e, t, n) {
      if (tt && typeof tt.onCommitFiberUnmount == `function`) try {
        tt.onCommitFiberUnmount(et, n);
      } catch {}
      switch (n.tag) {
        case 26:
          G || El(n, t);
          Su(e, t, n);
          if (n.memoizedState) {
            n.memoizedState.count--;
          } else {
            n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
          }
          break;
        case 27:
          G || El(n, t);
          kl(n);
          var r = bu,
            i = xu;
          Sp(n.type) && (bu = n.stateNode, xu = false);
          Su(e, t, n);
          gm(n.stateNode, n.type, n.memoizedProps);
          bu = r;
          xu = i;
          break;
        case 5:
          G || El(n, t);
          kl(n);
        case 6:
          if (n.tag === 6 && kl(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
            if (xu) try {
              (bu.nodeType === 9 ? bu.body : bu.nodeName === `HTML` ? bu.ownerDocument.body : bu).removeChild(n.stateNode);
              I = true;
            } catch (e) {
              Z(n, t, e);
            } else try {
              bu.removeChild(n.stateNode);
              I = true;
            } catch (e) {
              Z(n, t, e);
            }
          }
          break;
        case 18:
          bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
          break;
        case 4:
          r = bu;
          i = xu;
          bu = n.stateNode.containerInfo;
          xu = true;
          Su(e, t, n);
          bu = r;
          xu = i;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(2, n, t);
          G || Sl(4, n, t);
          Su(e, t, n);
          break;
        case 1:
          G || (El(n, t), r = n.stateNode, typeof r.componentWillUnmount == `function` && wl(n, t, r));
          Su(e, t, n);
          break;
        case 21:
          Su(e, t, n);
          break;
        case 22:
          G = (r = G) || n.memoizedState !== null;
          Su(e, t, n);
          G = r;
          break;
        case 30:
          El(n, t);
          Su(e, t, n);
          break;
        case 7:
          G || El(n, t);
          Su(e, t, n);
          break;
        default:
          Su(e, t, n);
      }
    }
    function wu(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          Hh(e);
        } catch (e) {
          Z(t, t.return, e);
        }
      }
    }
    function Tu(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Hh(e);
      } catch (e) {
        Z(t, t.return, e);
      }
    }
    function Eu(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new su()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
        default:
          throw Error(i(435, e.tag));
      }
    }
    function Du(e, t) {
      var n = Eu(e);
      t.forEach(function (t) {
        if (!n.has(t)) {
          n.add(t);
          var r = vf.bind(null, e, t);
          t.then(r, r);
        }
      });
    }
    function Ou(e, t, n) {
      var r = t.deletions;
      if (r !== null) for (var a = 0; a < r.length; a++) {
        var o = r[a],
          s = e,
          c = t,
          l = c;
        a: for (; l !== null;) {
          switch (l.tag) {
            case 27:
              if (Sp(l.type)) {
                bu = l.stateNode;
                xu = false;
                break a;
              }
              break;
            case 5:
              bu = l.stateNode;
              xu = false;
              break a;
            case 3:
            case 4:
              bu = l.stateNode.containerInfo;
              xu = true;
              break a;
          }
          l = l.return;
        }
        if (bu === null) throw Error(i(160));
        Cu(s, c, o);
        bu = null;
        xu = false;
        s = o.alternate;
        s !== null && (s.return = null);
        o.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) {
        Au(t, e, n);
        t = t.sibling;
      }
    }
    var ku = null;
    function Au(e, t, n) {
      var r = e.alternate,
        a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if (a & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var o = 0; o < r.length; o++) {
            var s = r[o];
            s.ref.impl = s.nextImpl;
          }
          Ou(t, e, n);
          ju(e);
          a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return));
          break;
        case 1:
          Ou(t, e, n);
          ju(e);
          a & 512 && (G || r === null || El(r, r.return));
          a & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
          break;
        case 26:
          if (o = ku, Ou(t, e, n), ju(e), a & 512 && (G || r === null || El(r, r.return)), a & 4) {
            if (a = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
              if (n === null) {
                if (e.stateNode === null) {
                  if (iu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);else {
                    a: {
                      t = e.type;
                      n = e.memoizedProps;
                      a = o.ownerDocument || o;
                      b: switch (t) {
                        case `title`:
                          r = a.getElementsByTagName(`title`)[0];
                          (!r || r[Mt] || r[Tt] || r.namespaceURI === `http://www.w3.org/2000/svg` || r.hasAttribute(`itemprop`)) && (r = a.createElement(t), a.head.insertBefore(r, a.querySelector(`head > title`)));
                          np(r, t, n);
                          r[Tt] = e;
                          zt(r);
                          t = r;
                          break a;
                        case `link`:
                          if (o = Gm(`link`, `href`, a).get(t + (n.href || ``))) {
                            for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && r.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && r.getAttribute(`title`) === (n.title == null ? null : n.title) && r.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                          r = a.createElement(t);
                          np(r, t, n);
                          a.head.appendChild(r);
                          break;
                        case `meta`:
                          if (o = Gm(`meta`, `content`, a).get(t + (n.content || ``))) {
                            for (s = 0; s < o.length; s++) if (r = o[s], r.getAttribute(`content`) === (n.content == null ? null : `` + n.content) && r.getAttribute(`name`) === (n.name == null ? null : n.name) && r.getAttribute(`property`) === (n.property == null ? null : n.property) && r.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                          r = a.createElement(t);
                          np(r, t, n);
                          a.head.appendChild(r);
                          break;
                        default:
                          throw Error(i(468, t));
                      }
                      r[Tt] = e;
                      zt(r);
                      t = r;
                    }
                    e.stateNode = t;
                  }
                } else iu || Km(o, e.type, e.stateNode);
              } else e.stateNode = Bm(o, n, e.memoizedProps);
            } else if (a === n) {
              n === null && e.stateNode !== null && Nl(e, e.memoizedProps, r.memoizedProps);
            } else {
              if (a === null) {
                t = r.stateNode;
                t === null || G || t.parentNode.removeChild(t);
              } else {
                a.count--;
              }
              if (n === null) {
                iu || Km(o, e.type, e.stateNode);
              } else {
                Bm(o, n, e.memoizedProps);
              }
            }
          }
          break;
        case 27:
          Ou(t, e, n);
          ju(e);
          a & 512 && (G || r === null || El(r, r.return));
          r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps);
          break;
        case 5:
          if (o = au, au = false, Ou(t, e, n), au = o, ju(e), a & 512 && (G || r === null || El(r, r.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              fn(t, ``);
              I = true;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          a & 4 && e.stateNode != null && (t = e.memoizedProps, Nl(e, t, r === null ? t : r.memoizedProps));
          a & 1024 && (ou = true);
          break;
        case 6:
          if (Ou(t, e, n), ju(e), a & 4) {
            if (e.stateNode === null) throw Error(i(162));
            t = e.memoizedProps;
            n = e.stateNode;
            try {
              n.nodeValue = t;
              I = true;
            } catch (t) {
              Z(e, e.return, t);
            }
          }
          break;
        case 3:
          if (I = false, Wm = null, o = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = o, ju(e), a & 4 && r !== null && r.memoizedState.isDehydrated) try {
            Hh(t.containerInfo);
          } catch (t) {
            Z(e, e.return, t);
          }
          ou && (ou = false, Mu(e));
          I = false;
          break;
        case 4:
          a = au;
          au = iu;
          r = Yt();
          o = ku;
          ku = bm(e.stateNode.containerInfo);
          Ou(t, e, n);
          ju(e);
          ku = o;
          I && uu && (du = true);
          I = r;
          au = a;
          break;
        case 12:
          Ou(t, e, n);
          ju(e);
          break;
        case 31:
          Ou(t, e, n);
          ju(e);
          a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
          break;
        case 13:
          Ou(t, e, n);
          ju(e);
          e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = N());
          a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
          break;
        case 22:
          o = e.memoizedState !== null;
          s = r !== null && r.memoizedState !== null;
          var c = iu,
            l = G,
            u = au;
          iu = c || o;
          au = u || o;
          G = l || s;
          Ou(t, e, n);
          G = l;
          au = u;
          iu = c;
          ju(e);
          a & 8192 && (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, !o || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = o || iu, G = t, Iu(e, 2), iu = n, G = r), !o && au || gu(e, o));
          a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
          break;
        case 19:
          Ou(t, e, n);
          ju(e);
          a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
          break;
        case 30:
          a & 512 && (G || r === null || El(r, r.return));
          a = Yt();
          o = uu;
          s = (n & 335544064) === n;
          c = e.memoizedProps;
          uu = s && vi(c.default, c.update) !== `none`;
          Ou(t, e, n);
          ju(e);
          s && r !== null && I && (e.flags |= 4);
          uu = o;
          I = a;
          break;
        case 21:
          break;
        case 7:
          a & 512 && (G || r === null || El(r, r.return));
          r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
        default:
          Ou(t, e, n);
          ju(e);
      }
    }
    function ju(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var n, r = e.return; r !== null;) {
            if (Pl(r)) {
              n = r;
              break;
            }
            r = r.return;
          }
          r = null;
          for (var a = e.return; a !== null;) {
            if (jl(a)) {
              var o = a.stateNode;
              if (r === null) {
                r = [o];
              } else {
                r.push(o);
              }
            }
            if (Al(a)) break;
            a = a.return;
          }
          var s = r;
          if (n == null) throw Error(i(160));
          switch (n.tag) {
            case 27:
              var c = n.stateNode;
              Ll(e, Fl(e), c, s);
              break;
            case 5:
              var l = n.stateNode;
              n.flags & 32 && (fn(l, ``), n.flags &= -33);
              Ll(e, Fl(e), l, s);
              break;
            case 3:
            case 4:
              var u = n.stateNode.containerInfo;
              Il(e, Fl(e), u, s);
              break;
            default:
              throw Error(i(161));
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Mu(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
        var t = e;
        Mu(t);
        t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = true, t.reset(), gh = false);
        e = e.sibling;
      }
    }
    function Nu(e, t) {
      if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) {
        Pu(t, e);
        t = t.sibling;
      } else ru(t, false);
    }
    function Pu(e, t) {
      var n = e.alternate;
      if (n === null) Yl(e, false);else switch (e.tag) {
        case 3:
          if (fu = lu = false, Ul(), Nu(t, e), !lu && !du) {
            if (e = Hl, e !== null) for (var r = 0; r < e.length; r += 3) {
              n = e[r];
              var i = e[r + 1];
              Ep(n, e[r + 2]);
              n = n.ownerDocument.documentElement;
              n !== null && n.animate({
                opacity: [0, 0],
                pointerEvents: [`none`, `none`]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition-group(` + i + `)`
              });
            }
            e = t.containerInfo;
            e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement;
            e !== null && e.style.viewTransitionName === `` && (e.style.viewTransitionName = `none`, e.animate({
              opacity: [0, 0],
              pointerEvents: [`none`, `none`]
            }, {
              duration: 0,
              fill: `forwards`,
              pseudoElement: `::view-transition-group(root)`
            }), e.animate({
              width: [0, 0],
              height: [0, 0]
            }, {
              duration: 0,
              fill: `forwards`,
              pseudoElement: `::view-transition`
            }));
            fu = true;
          }
          Hl = null;
          break;
        case 5:
          Nu(t, e);
          break;
        case 4:
          r = lu;
          lu = false;
          Nu(t, e);
          lu && (du = true);
          lu = r;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Yl(e, false));
          break;
        case 30:
          r = lu;
          i = Ul();
          lu = false;
          Nu(t, e);
          lu && (e.flags |= 4);
          var a = e.memoizedProps,
            o = e.stateNode;
          t = gi(a, o);
          o = gi(n.memoizedProps, o);
          var s = vi(a.default, a.update);
          if (s === `none`) {
            t = false;
          } else {
            a = n.memoizedState;
            n.memoizedState = null;
            n = e.child;
            Wl = 0;
            t = nu(e, n, t, o, s, a, true);
            Wl !== (a === null ? 0 : a.length) && (e.flags |= 32);
          }
          if (e.flags & 4 && t) {
            Nd(e, e.memoizedProps.onUpdate);
            Hl = i;
          } else {
            i !== null && (i.push.apply(i, Hl), Hl = i);
          }
          lu = e.flags & 32 ? true : r;
          break;
        default:
          Nu(t, e);
      }
    }
    function Fu(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) {
        hu(e, t.alternate, t);
        t = t.sibling;
      }
    }
    function Iu(e, t) {
      for (e = e.child; e !== null;) {
        var n = e,
          r = t;
        switch (n.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Sl(4, n, n.return);
            Iu(n, r);
            break;
          case 1:
            El(n, n.return);
            var i = n.stateNode;
            typeof i.componentWillUnmount == `function` && wl(n, n.return, i);
            Iu(n, r);
            break;
          case 27:
            r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
          case 5:
            El(n, n.return);
            n.tag !== 5 && n.tag !== 27 || kl(n);
            Iu(n, r);
            break;
          case 6:
            kl(n);
            break;
          case 26:
            El(n, n.return);
            i = n.stateNode;
            n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i);
            Iu(n, r);
            break;
          case 22:
            n.memoizedState === null && Iu(n, r);
            break;
          case 30:
            El(n, n.return);
            Iu(n, r);
            break;
          case 7:
            El(n, n.return);
          default:
            Iu(n, r);
        }
        e = e.sibling;
      }
    }
    function Lu(e, t, n) {
      for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
        var r = t.alternate,
          i = e,
          a = t,
          o = a.flags,
          s = !!(n & 1);
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            Lu(i, a, n);
            xl(4, a);
            break;
          case 1:
            if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == `function`) try {
              i.componentDidMount();
            } catch (e) {
              Z(r, r.return, e);
            }
            if (r = a, i = r.updateQueue, i !== null) {
              var c = r.stateNode;
              try {
                var l = i.shared.hiddenCallbacks;
                if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) So(l[i], c);
              } catch (e) {
                Z(r, r.return, e);
              }
            }
            s && o & 64 && Cl(a);
            Tl(a, a.return);
            break;
          case 27:
            n & 2 && Rl(a);
          case 5:
            a.tag !== 5 && a.tag !== 27 || Ol(a);
            Lu(i, a, n);
            s && r === null && o & 4 && Ml(a);
            Tl(a, a.return);
            break;
          case 6:
            Ol(a);
            break;
          case 26:
            c = a.stateNode;
            a.memoizedState !== null || c === null || iu || Km(bm(c.ownerDocument), a.type, c);
            Lu(i, a, n);
            s && r === null && o & 4 && Ml(a);
            Tl(a, a.return);
            break;
          case 12:
            Lu(i, a, n);
            break;
          case 31:
            Lu(i, a, n);
            s && o & 4 && wu(i, a);
            break;
          case 13:
            Lu(i, a, n);
            s && o & 4 && Tu(i, a);
            break;
          case 22:
            a.memoizedState === null && Lu(i, a, n);
            Tl(a, a.return);
            break;
          case 30:
            Lu(i, a, n);
            Tl(a, a.return);
            break;
          case 7:
            Tl(a, a.return);
          default:
            Lu(i, a, n);
        }
        t = t.sibling;
      }
    }
    function Ru(e, t) {
      var n = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool);
      e = null;
      t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool);
      e !== n && (e != null && e.refCount++, n != null && ja(n));
    }
    function zu(e, t) {
      e = null;
      t.alternate !== null && (e = t.alternate.memoizedState.cache);
      t = t.memoizedState.cache;
      t !== e && (t.refCount++, e != null && ja(e));
    }
    function Bu(e, t, n, r) {
      var i = (n & 335544064) === n;
      if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) {
        Vu(e, t, n, r);
        t = t.sibling;
      } else i && tu(t);
    }
    function Vu(e, t, n, r) {
      var i = (n & 335544064) === n;
      i && t.alternate === null && t.return !== null && t.return.alternate !== null && eu(t);
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Bu(e, t, n, r);
          a & 2048 && xl(9, t);
          break;
        case 1:
          Bu(e, t, n, r);
          break;
        case 3:
          Bu(e, t, n, r);
          i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, e.style.viewTransitionName === `root` && (e.style.viewTransitionName = ``), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === `none` && (e.style.viewTransitionName = ``));
          a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && ja(a)));
          break;
        case 12:
          if (a & 2048) {
            Bu(e, t, n, r);
            a = t.stateNode;
            try {
              var o = t.memoizedProps,
                s = o.id,
                c = o.onPostCommit;
              typeof c == `function` && c(s, t.alternate === null ? `mount` : `update`, a.passiveEffectDuration, -0);
            } catch (e) {
              Z(t, t.return, e);
            }
          } else Bu(e, t, n, r);
          break;
        case 31:
          Bu(e, t, n, r);
          break;
        case 13:
          Bu(e, t, n, r);
          break;
        case 23:
          break;
        case 22:
          o = t.stateNode;
          s = t.alternate;
          if (t.memoizedState === null) {
            i && s !== null && s.memoizedState !== null && eu(t);
            if (o._visibility & 2) {
              Bu(e, t, n, r);
            } else {
              o._visibility |= 2;
              Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || false);
            }
          } else {
            i && s !== null && s.memoizedState === null && eu(s);
            if (o._visibility & 2) {
              Bu(e, t, n, r);
            } else {
              Uu(e, t);
            }
          }
          a & 2048 && Ru(s, t);
          break;
        case 24:
          Bu(e, t, n, r);
          a & 2048 && zu(t.alternate, t);
          break;
        case 30:
          i && (a = t.alternate, a !== null && (ql(a.child, true), ql(t.child, true)));
          Bu(e, t, n, r);
          break;
        default:
          Bu(e, t, n, r);
      }
    }
    function Hu(e, t, n, r, i) {
      for (i &&= !!(t.subtreeFlags & 10256) || false, t = t.child; t !== null;) {
        var a = e,
          o = t,
          s = n,
          c = r,
          l = o.flags;
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            Hu(a, o, s, c, i);
            xl(8, o);
            break;
          case 23:
            break;
          case 22:
            var u = o.stateNode;
            if (o.memoizedState === null) {
              u._visibility |= 2;
              Hu(a, o, s, c, i);
            } else {
              if (u._visibility & 2) {
                Hu(a, o, s, c, i);
              } else {
                Uu(a, o);
              }
            }
            i && l & 2048 && Ru(o.alternate, o);
            break;
          case 24:
            Hu(a, o, s, c, i);
            i && l & 2048 && zu(o.alternate, o);
            break;
          default:
            Hu(a, o, s, c, i);
        }
        t = t.sibling;
      }
    }
    function Uu(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
        var n = e,
          r = t,
          i = r.flags;
        switch (r.tag) {
          case 22:
            Uu(n, r);
            i & 2048 && Ru(r.alternate, r);
            break;
          case 24:
            Uu(n, r);
            i & 2048 && zu(r.alternate, r);
            break;
          default:
            Uu(n, r);
        }
        t = t.sibling;
      }
    }
    var Wu = 8192;
    function Gu(e, t, n) {
      if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) {
        Ku(e, t, n);
        e = e.sibling;
      }
    }
    function Ku(e, t, n) {
      switch (e.tag) {
        case 26:
          Gu(e, t, n);
          e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
          break;
        case 5:
          Gu(e, t, n);
          e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
          break;
        case 3:
        case 4:
          var r = ku;
          ku = bm(e.stateNode.containerInfo);
          Gu(e, t, n);
          ku = r;
          break;
        case 22:
          e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
          break;
        case 30:
          if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== `auto`)) {
            var i = e.stateNode;
            i.paired = null;
            Bl === null && (Bl = new Map());
            Bl.set(r, i);
          }
          Gu(e, t, n);
          break;
        default:
          Gu(e, t, n);
      }
    }
    function qu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do {
          t = e.sibling;
          e.sibling = null;
          e = t;
        } while (e !== null);
      }
    }
    function Ju(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null) for (var n = 0; n < t.length; n++) {
          var r = t[n];
          cu = r;
          Zu(r, e);
        }
        qu(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) {
        Yu(e);
        e = e.sibling;
      }
    }
    function Yu(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Ju(e);
          e.flags & 2048 && Sl(9, e, e.return);
          break;
        case 3:
          Ju(e);
          break;
        case 12:
          Ju(e);
          break;
        case 22:
          var t = e.stateNode;
          if (e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)) {
            t._visibility &= -3;
            Xu(e);
          } else {
            Ju(e);
          }
          break;
        default:
          Ju(e);
      }
    }
    function Xu(e) {
      var t = e.deletions;
      if (e.flags & 16) {
        if (t !== null) for (var n = 0; n < t.length; n++) {
          var r = t[n];
          cu = r;
          Zu(r, e);
        }
        qu(e);
      }
      for (e = e.child; e !== null;) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, t, t.return);
            Xu(t);
            break;
          case 22:
            n = t.stateNode;
            n._visibility & 2 && (n._visibility &= -3, Xu(t));
            break;
          default:
            Xu(t);
        }
        e = e.sibling;
      }
    }
    function Zu(e, t) {
      for (; cu !== null;) {
        var n = cu;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, n, t);
            break;
          case 23:
          case 22:
            if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
              var r = n.memoizedState.cachePool.pool;
              r != null && r.refCount++;
            }
            break;
          case 24:
            ja(n.memoizedState.cache);
        }
        if (r = n.child, r !== null) {
          r.return = n;
          cu = r;
        } else a: for (n = e; cu !== null;) {
          r = cu;
          var i = r.sibling,
            a = r.return;
          if (yu(r), r === n) {
            cu = null;
            break a;
          }
          if (i !== null) {
            i.return = a;
            cu = i;
            break a;
          }
          cu = a;
        }
      }
    }
    var Qu = {
        getCacheForType: function (e) {
          var t = Ca(ka),
            n = t.data.get(e);
          return n === undefined && (n = e(), t.data.set(e, n)), n;
        },
        cacheSignal: function () {
          return Ca(ka).controller.signal;
        }
      },
      $u = typeof WeakMap == `function` ? WeakMap : Map,
      K = 0,
      q = null,
      J = null,
      Y = 0,
      X = 0,
      ed = null,
      td = false,
      nd = false,
      rd = false,
      id = 0,
      ad = 0,
      od = 0,
      sd = 0,
      cd = 0,
      ld = 0,
      ud = 0,
      dd = null,
      fd = null,
      pd = false,
      md = 0,
      hd = 0,
      gd = 1 / 0,
      _d = null,
      vd = null,
      yd = 0,
      bd = null,
      xd = null,
      Sd = 0,
      Cd = 0,
      wd = null,
      Td = null,
      Ed = null,
      Dd = null,
      Od = null,
      kd = 0,
      Ad = null;
    function jd() {
      return K & 2 && Y !== 0 ? Y & -Y : D.T === null ? St() : Pf();
    }
    function Md() {
      if (ld === 0) {
        if (!(Y & 536870912) || H) {
          var e = ct;
          ct <<= 1;
          !(ct & 3932160) && (ct = 262144);
          ld = e;
        } else ld = 536870912;
      }
      return e = ko.current, e !== null && (e.flags |= 32), ld;
    }
    function Nd(e, t) {
      if (t != null) {
        var n = e.stateNode,
          r = n.ref;
        r === null && (r = n.ref = Pp(gi(e.memoizedProps, n)));
        Dd === null && (Dd = []);
        Dd.push(t.bind(null, r));
      }
    }
    function Pd(e, t, n) {
      (e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, false));
      P(e, n);
      (!(K & 2) || e !== q) && (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, false)), Ef(e));
    }
    function Fd(e, t, n) {
      if (K & 6) throw Error(i(327));
      var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ft(e, t),
        a = r ? Yd(e, t) : qd(e, t, true),
        o = r;
      do {
        if (a === 0) {
          nd && !r && Rd(e, t, 0, false);
          break;
        }
        if (n = e.current.alternate, o && !Ld(n)) {
          a = qd(e, t, false);
          o = false;
          continue;
        }
        if (a === 2) {
          if (o = t, e.errorRecoveryDisabledLanes & o) var s = 0;else {
            s = e.pendingLanes & -536870913;
            s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
          }
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              a = dd;
              var l = c.current.memoizedState.isDehydrated;
              if (l && (Vd(c, s).flags |= 256), s = qd(c, s, false), s !== 2 && s !== 6) {
                if (rd && !l) {
                  c.errorRecoveryDisabledLanes |= o;
                  sd |= o;
                  a = 4;
                  break a;
                }
                o = fd;
                fd = a;
                o !== null && (fd === null ? fd = o : fd.push.apply(fd, o));
              }
              a = s;
            }
            if (o = false, a !== 2) continue;
          }
        }
        if (a === 1) {
          Vd(e, 0);
          Rd(e, t, 0, true);
          break;
        }
        a: {
          switch (r = e, o = a, o) {
            case 0:
            case 1:
              throw Error(i(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) break;
            case 6:
              Rd(r, t, ld, !td);
              break a;
            case 2:
              fd = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(i(329));
          }
          if ((t & 62914560) === t && (a = md + 300 - N(), 10 < a)) {
            if (Rd(r, t, ld, !td), dt(r, 0, true) !== 0) break a;
            Sd = t;
            r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, o, `Throttled`, -0, 0), a);
            break a;
          }
          Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
        }
        break;
      } while (1);
      Ef(e);
    }
    function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
      e.timeoutHandle = -1;
      var m = t.subtreeFlags,
        h = (a & 335544064) === a;
      if (d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: true,
        waitingForViewTransition: false,
        unsuspend: bn
      }, Bl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = true, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - N() : (a & 4194048) === a ? hd - N() : 0, m = eh(d, m), m !== null)) {
        Sd = a;
        e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p));
        Rd(e, a, o, !l);
        return;
      }
      nf(e, t, a, n, r, i, o, s, c, l, u, d);
    }
    function Ld(e) {
      for (var t = e;;) {
        var n = t.tag;
        if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.getSnapshot;
          i = i.value;
          try {
            if (!Br(a(), i)) return false;
          } catch {
            return false;
          }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) {
          n.return = t;
          t = n;
        } else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return;
          t = t.sibling;
        }
      }
      return true;
    }
    function Rd(e, t, n, r) {
      t = pt(e, t);
      t &= ~cd;
      t &= ~sd;
      e.suspendedLanes |= t;
      e.pingedLanes &= ~t;
      r && (e.warmLanes |= t);
      r = e.expirationTimes;
      for (var i = t; 0 < i;) {
        var a = 31 - rt(i),
          o = 1 << a;
        r[a] = -1;
        i &= ~o;
      }
      n !== 0 && F(e, n, t);
    }
    function zd() {
      return K & 6 ? true : (Df(0, false), false);
    }
    function Bd() {
      if (J !== null) {
        if (X === 0) var e = J.return;else {
          e = J;
          ha = ma = null;
          rs(e);
          ro = null;
          io = 0;
          e = J;
        }
        for (; e !== null;) {
          bl(e.alternate, e);
          e = e.return;
        }
        J = null;
      }
    }
    function Vd(e, t) {
      var n = e.timeoutHandle;
      return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), q = e, J = n = Ni(e.current, null), Y = t, X = 0, ed = null, td = false, nd = ft(e, t), rd = false, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = false, id = pt(e, t), Ci(), n;
    }
    function Hd(e, t) {
      U = null;
      D.H = pc;
      if (t === qa || t === Ya) {
        t = to();
        X = 3;
      } else {
        if (t === Ja) {
          t = to();
          X = 4;
        } else {
          X = t === jc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1;
        }
      }
      ed = t;
      J === null && (ad = 1, Tc(e, Vi(t, e.current)));
    }
    function Ud() {
      var e = ko.current;
      return e === null ? true : (Y & 4194048) === Y ? Ao === null : (Y & 62914560) === Y || Y & 536870912 ? e === Ao : false;
    }
    function Wd() {
      var e = D.H;
      return D.H = pc, e === null ? pc : e;
    }
    function Gd() {
      var e = D.A;
      return D.A = Qu, e;
    }
    function Kd() {
      ad = 4;
      td || (Y & 4194048) !== Y && ko.current !== null || (nd = true);
      !(od & 134217727) && !(sd & 134217727) || q === null || Rd(q, Y, ld, false);
    }
    function qd(e, t, n) {
      var r = K;
      K |= 2;
      var i = Wd(),
        a = Gd();
      (q !== e || Y !== t) && (_d = null, Vd(e, t));
      t = false;
      var o = ad;
      a: do try {
        if (X !== 0 && J !== null) {
          var s = J,
            c = ed;
          switch (X) {
            case 8:
              Bd();
              o = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              ko.current === null && (t = true);
              var l = X;
              if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
                o = 0;
                break a;
              }
              break;
            default:
              l = X;
              X = 0;
              ed = null;
              $d(e, s, c, l);
          }
        }
        Jd();
        o = ad;
        break;
      } catch (t) {
        Hd(e, t);
      } while (1);
      return t && e.shellSuspendCounter++, ha = ma = null, K = r, D.H = i, D.A = a, J === null && (q = null, Y = 0, Ci()), o;
    }
    function Jd() {
      for (; J !== null;) Zd(J);
    }
    function Yd(e, t) {
      var n = K;
      K |= 2;
      var r = Wd(),
        a = Gd();
      if (q !== e || Y !== t) {
        _d = null;
        gd = N() + 500;
        Vd(e, t);
      } else {
        nd = ft(e, t);
      }
      a: do try {
        if (X !== 0 && J !== null) {
          t = J;
          var o = ed;
          b: switch (X) {
            case 1:
              X = 0;
              ed = null;
              $d(e, t, o, 1);
              break;
            case 2:
            case 9:
              if (Za(o)) {
                X = 0;
                ed = null;
                Qd(t);
                break;
              }
              t = function () {
                X !== 2 && X !== 9 || q !== e || (X = 7);
                Ef(e);
              };
              o.then(t, t);
              break a;
            case 3:
              X = 7;
              break a;
            case 4:
              X = 5;
              break a;
            case 7:
              if (Za(o)) {
                X = 0;
                ed = null;
                Qd(t);
              } else {
                X = 0;
                ed = null;
                $d(e, t, o, 7);
              }
              break;
            case 5:
              var s = null;
              switch (J.tag) {
                case 26:
                  s = J.memoizedState;
                case 5:
                case 27:
                  var c = J;
                  if (s ? Ym(s) : c.stateNode.complete) {
                    X = 0;
                    ed = null;
                    var l = c.sibling;
                    if (l !== null) J = l;else {
                      var u = c.return;
                      if (u === null) {
                        J = null;
                      } else {
                        J = u;
                        ef(u);
                      }
                    }
                    break b;
                  }
              }
              X = 0;
              ed = null;
              $d(e, t, o, 5);
              break;
            case 6:
              X = 0;
              ed = null;
              $d(e, t, o, 6);
              break;
            case 8:
              Bd();
              ad = 6;
              break a;
            default:
              throw Error(i(462));
          }
        }
        Xd();
        break;
      } catch (t) {
        Hd(e, t);
      } while (1);
      return ha = ma = null, D.H = r, D.A = a, K = n, J === null ? (q = null, Y = 0, Ci(), ad) : 0;
    }
    function Xd() {
      for (; J !== null && !We();) Zd(J);
    }
    function Zd(e) {
      var t = dl(e.alternate, e, id);
      e.memoizedProps = e.pendingProps;
      if (t === null) {
        ef(e);
      } else {
        J = t;
      }
    }
    function Qd(e) {
      var t = e,
        n = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = Gc(n, t, t.pendingProps, t.type, undefined, Y);
          break;
        case 11:
          t = Gc(n, t, t.pendingProps, t.type.render, t.ref, Y);
          break;
        case 5:
          rs(t);
          var r = t;
          r === na && (H ? (ca(r), r.tag === 5 && r.stateNode != null && (V = r.stateNode)) : (ca(r), H = true));
        default:
          bl(n, t);
          t = J = Pi(t, id);
          t = dl(n, t, id);
      }
      e.memoizedProps = e.pendingProps;
      if (t === null) {
        ef(e);
      } else {
        J = t;
      }
    }
    function $d(e, t, n, r) {
      ha = ma = null;
      rs(t);
      ro = null;
      io = 0;
      var i = t.return;
      try {
        if (Ac(e, i, t, n, Y)) {
          ad = 1;
          Tc(e, Vi(n, e.current));
          J = null;
          return;
        }
      } catch (t) {
        if (i !== null) throw J = i, t;
        ad = 1;
        Tc(e, Vi(n, e.current));
        J = null;
        return;
      }
      if (t.flags & 32768) {
        if (H || r === 1) {
          e = true;
        } else {
          if (nd || Y & 536870912) {
            e = false;
          } else {
            td = e = true;
            (r === 2 || r === 9 || r === 3 || r === 6) && (r = ko.current, r !== null && r.tag === 13 && (r.flags |= 16384));
          }
        }
        tf(t, e);
      } else {
        ef(t);
      }
    }
    function ef(e) {
      var t = e;
      do {
        if (t.flags & 32768) {
          tf(t, td);
          return;
        }
        e = t.return;
        var n = vl(t.alternate, t, id);
        if (n !== null) {
          J = n;
          return;
        }
        if (t = t.sibling, t !== null) {
          J = t;
          return;
        }
        J = t = e;
      } while (t !== null);
      ad === 0 && (ad = 5);
    }
    function tf(e, t) {
      do {
        var n = yl(e.alternate, e);
        if (n !== null) {
          n.flags &= 32767;
          J = n;
          return;
        }
        if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
          J = e;
          return;
        }
        J = e = n;
      } while (e !== null);
      ad = 6;
      J = null;
    }
    function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
      e.cancelPendingCommit = null;
      do df(); while (yd !== 0);
      if (K & 6) throw Error(i(327));
      if (t !== null) {
        if (t === e.current) throw Error(i(177));
        e === q && (J = q = null, Y = 0);
        xd = t;
        bd = e;
        Sd = n;
        wd = a;
        Td = r;
        rf(e, t, n, s, c, l, f);
      }
    }
    function rf(e, t, n, r, i, a, o) {
      var s = t.lanes | t.childLanes;
      if (Cd = s, s |= Si, _t(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Pa(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Ye, function () {
        return ff(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), zl = false, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
        r = D.T;
        D.T = null;
        i = O.p;
        O.p = 2;
        a = K;
        K |= 4;
        try {
          pu(e, t, n);
        } finally {
          K = a;
          O.p = i;
          D.T = r;
        }
      }
      yd = 1;
      if (zl) {
        Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null);
      } else {
        sf();
        cf();
        lf();
      }
    }
    function af(e) {
      if (yd !== 0) {
        var t = bd.onRecoverableError;
        t(e, {
          componentStack: null
        });
      }
    }
    function of() {
      yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
    }
    function sf() {
      if (yd === 1) {
        yd = 0;
        var e = bd,
          t = xd,
          n = Sd,
          r = !!(t.flags & 13878);
        if (t.subtreeFlags & 13878 || r) {
          r = D.T;
          D.T = null;
          var i = O.p;
          O.p = 2;
          var a = K;
          K |= 4;
          try {
            uu = du = false;
            Au(t, e, n);
            n = cp;
            var o = Kr(e.containerInfo),
              s = n.focusedElem,
              c = n.selectionRange;
            if (o !== s && s && s.ownerDocument && Gr(s.ownerDocument.documentElement, s)) {
              if (c !== null && qr(s)) {
                var l = c.start,
                  u = c.end;
                if (u === undefined && (u = l), `selectionStart` in s) {
                  s.selectionStart = l;
                  s.selectionEnd = Math.min(u, s.value.length);
                } else {
                  var d = s.ownerDocument || document,
                    f = d && d.defaultView || window;
                  if (f.getSelection) {
                    var p = f.getSelection(),
                      m = s.textContent.length,
                      h = Math.min(c.start, m),
                      g = c.end === undefined ? h : Math.min(c.end, m);
                    !p.extend && h > g && (o = g, g = h, h = o);
                    var _ = Wr(s, h),
                      v = Wr(s, g);
                    if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                      var y = d.createRange();
                      y.setStart(_.node, _.offset);
                      p.removeAllRanges();
                      if (h > g) {
                        p.addRange(y);
                        p.extend(v.node, v.offset);
                      } else {
                        y.setEnd(v.node, v.offset);
                        p.addRange(y);
                      }
                    }
                  }
                }
              }
              for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
              for (typeof s.focus == `function` && s.focus(), s = 0; s < d.length; s++) {
                var b = d[s];
                b.element.scrollLeft = b.left;
                b.element.scrollTop = b.top;
              }
            }
            gh = !!sp;
            cp = sp = null;
          } finally {
            K = a;
            O.p = i;
            D.T = r;
          }
        }
        e.current = t;
        yd = 2;
      }
    }
    function cf() {
      if (yd === 2) {
        yd = 0;
        var e = bd,
          t = xd,
          n = !!(t.flags & 8772);
        if (t.subtreeFlags & 8772 || n) {
          n = D.T;
          D.T = null;
          var r = O.p;
          O.p = 2;
          var i = K;
          K |= 4;
          try {
            hu(e, t.alternate, t);
          } finally {
            K = i;
            O.p = r;
            D.T = n;
          }
        }
        yd = 3;
      }
    }
    function lf() {
      if (yd === 4 || yd === 3) {
        yd = 0;
        var e = Ed;
        Ed = null;
        Ge();
        var t = bd,
          n = xd,
          r = Sd,
          i = Td,
          a = (r & 335544064) === r ? 10262 : 10256;
        if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), xt(r), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == `function`) try {
          tt.onCommitFiberRoot(et, n, undefined, (n.current.flags & 128) == 128);
        } catch {}
        if (i !== null) {
          n = D.T;
          a = O.p;
          O.p = 2;
          D.T = null;
          try {
            for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
              var c = i[s];
              o(c.value, {
                componentStack: c.stack
              });
            }
          } finally {
            D.T = n;
            O.p = a;
          }
        }
        if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) {
          n = (0, i[c])(o);
          n !== undefined && e.finished.finally(n);
        }
        Sd & 3 && df();
        Ef(t);
        a = t.pendingLanes;
        if (r & 261930 && a & 42) {
          if (t === Ad) {
            kd++;
          } else {
            kd = 0;
            Ad = t;
          }
        } else {
          kd = 0;
          Ad = null;
        }
        Df(0, false);
      }
    }
    function uf(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ja(t)));
    }
    function df() {
      return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
    }
    function ff() {
      if (yd !== 5) return false;
      var e = bd,
        t = Cd;
      Cd = 0;
      var n = xt(Sd),
        r = D.T,
        a = O.p;
      try {
        O.p = 32 > n ? 32 : n;
        D.T = null;
        n = wd;
        wd = null;
        var o = bd,
          s = Sd;
        if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(i(331));
        var c = K;
        if (K |= 4, Yu(o.current), Vu(o, o.current, s, n), K = c, Df(0, false), tt && typeof tt.onPostCommitFiberRoot == `function`) try {
          tt.onPostCommitFiberRoot(et, o);
        } catch {}
        return true;
      } finally {
        O.p = a;
        D.T = r;
        uf(e, t);
      }
    }
    function pf(e, t, n) {
      t = Vi(n, t);
      t = Dc(e.stateNode, t, 2);
      e = go(e, t, 2);
      e !== null && (P(e, 2), Ef(e));
    }
    function Z(e, t, n) {
      if (e.tag === 3) pf(e, e, n);else for (; t !== null;) {
        if (t.tag === 3) {
          pf(t, e, n);
          break;
        }
        if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (vd === null || !vd.has(r))) {
            e = Vi(n, e);
            n = Oc(2);
            r = go(t, n, 2);
            r !== null && (kc(n, r, t, e), P(r, 2), Ef(r));
            break;
          }
        }
        t = t.return;
      }
    }
    function mf(e, t, n) {
      var r = e.pingCache;
      if (r === null) {
        r = e.pingCache = new $u();
        var i = new Set();
        r.set(t, i);
      } else {
        i = r.get(t);
        i === undefined && (i = new Set(), r.set(t, i));
      }
      i.has(n) || (rd = true, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
    }
    function hf(e, t, n) {
      var r = e.pingCache;
      r !== null && r.delete(t);
      e.pingedLanes |= e.suspendedLanes & n;
      e.warmLanes &= ~n;
      q === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > N() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0));
      Ef(e);
    }
    function gf(e, t) {
      t === 0 && (t = ht());
      e = Ei(e, t);
      e !== null && (P(e, t), Ef(e));
    }
    function _f(e) {
      var t = e.memoizedState,
        n = 0;
      t !== null && (n = t.retryLane);
      gf(e, n);
    }
    function vf(e, t) {
      var n = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var r = e.stateNode,
            a = e.memoizedState;
          a !== null && (n = a.retryLane);
          break;
        case 19:
          r = e.stateNode;
          break;
        case 22:
          r = e.stateNode._retryCache;
          break;
        default:
          throw Error(i(314));
      }
      r !== null && r.delete(t);
      gf(e, n);
    }
    function yf(e, t) {
      return He(e, t);
    }
    var bf = null,
      xf = null,
      Sf = false,
      Cf = false,
      wf = false,
      Tf = 0;
    function Ef(e) {
      e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e);
      Cf = true;
      Sf || (Sf = true, Nf());
    }
    function Df(e, t) {
      if (!wf && Cf) {
        wf = true;
        do for (var n = false, r = bf; r !== null;) {
          if (!t) {
            if (e !== 0) {
              var i = r.pendingLanes;
              if (i === 0) var a = 0;else {
                var o = r.suspendedLanes,
                  s = r.pingedLanes;
                a = (1 << 31 - rt(42 | e) + 1) - 1;
                a &= i & ~(o & ~s);
                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
              }
              a !== 0 && (n = true, Mf(r, a));
            } else {
              a = Y;
              a = dt(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1);
              !(a & 3) || ft(r, a) || (n = true, Mf(r, a));
            }
          }
          r = r.next;
        } while (n);
        wf = false;
      }
    }
    function Of() {
      kf();
    }
    function kf() {
      Cf = Sf = false;
      var e = 0;
      Tf !== 0 && hp() && (e = Tf);
      for (var t = N(), n = null, r = bf; r !== null;) {
        var i = r.next,
          a = Af(r, t);
        if (a === 0) {
          r.next = null;
          if (n === null) {
            bf = i;
          } else {
            n.next = i;
          }
          i === null && (xf = n);
        } else {
          n = r;
          (e !== 0 || a & 3) && (Cf = true);
        }
        r = i;
      }
      yd !== 0 && yd !== 5 || Df(e, false);
      Tf !== 0 && (Tf = 0);
    }
    function Af(e, t) {
      for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
        var o = 31 - rt(a),
          s = 1 << o,
          c = i[o];
        if (c === -1) {
          ((s & n) === 0 || (s & r) !== 0) && (i[o] = mt(s, t));
        } else {
          c <= t && (e.expiredLanes |= s);
        }
        a &= ~s;
      }
      if (t = q, n = Y, n = dt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ue(r), e.callbackNode = null, e.callbackPriority = 0;
      if (!(n & 3) || ft(e, n)) {
        if (t = n & -n, t === e.callbackPriority) return t;
        switch (r !== null && Ue(r), xt(n)) {
          case 2:
          case 8:
            n = Je;
            break;
          case 32:
            n = Ye;
            break;
          case 268435456:
            n = Ze;
            break;
          default:
            n = Ye;
        }
        return r = jf.bind(null, e), n = He(n, r), e.callbackPriority = t, e.callbackNode = n, t;
      }
      return r !== null && r !== null && Ue(r), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function jf(e, t) {
      if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var n = e.callbackNode;
      if (df() && e.callbackNode !== n) return null;
      var r = Y;
      return r = dt(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, N()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
    }
    function Mf(e, t) {
      if (df()) return null;
      Fd(e, t, true);
    }
    function Nf() {
      bp(function () {
        if (K & 6) {
          He(qe, Of);
        } else {
          kf();
        }
      });
    }
    function Pf() {
      if (Tf === 0) {
        var e = La;
        e === 0 && (e = st, st <<= 1, !(st & 261888) && (st = 256));
        Tf = e;
      }
      return Tf;
    }
    function Ff(e) {
      return e == null || typeof e == `symbol` || typeof e == `boolean` ? null : typeof e == `function` ? e : yn(e);
    }
    function If(e, t, n, r, i) {
      if (t === `submit` && n && n.stateNode === i) {
        var a = Ff((i[Et] || null).action),
          o = r.submitter;
        o && (t = (t = o[Et] || null) ? Ff(t.formAction) : o.getAttribute(`formAction`), t !== null && (a = t, o = null));
        var s = new Rn(`action`, `action`, null, r, i);
        e.push({
          event: s,
          listeners: [{
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Tf !== 0) {
                  var e = new FormData(i, o);
                  $s(n, {
                    pending: true,
                    data: e,
                    method: i.method,
                    action: a
                  }, null, e);
                }
              } else typeof a == `function` && (s.preventDefault(), e = new FormData(i, o), $s(n, {
                pending: true,
                data: e,
                method: i.method,
                action: a
              }, a, e));
            },
            currentTarget: i
          }]
        });
      }
    }
    for (var Lf = 0; Lf < pi.length; Lf++) {
      var Rf = pi[Lf];
      mi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
    }
    mi(ai, `onAnimationEnd`);
    mi(oi, `onAnimationIteration`);
    mi(si, `onAnimationStart`);
    mi(`dblclick`, `onDoubleClick`);
    mi(`focusin`, `onFocus`);
    mi(`focusout`, `onBlur`);
    mi(ci, `onTransitionRun`);
    mi(li, `onTransitionStart`);
    mi(ui, `onTransitionCancel`);
    mi(di, `onTransitionEnd`);
    Wt(`onMouseEnter`, [`mouseout`, `mouseover`]);
    Wt(`onMouseLeave`, [`mouseout`, `mouseover`]);
    Wt(`onPointerEnter`, [`pointerout`, `pointerover`]);
    Wt(`onPointerLeave`, [`pointerout`, `pointerover`]);
    Ut(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `));
    Ut(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `));
    Ut(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]);
    Ut(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `));
    Ut(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `));
    Ut(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
    var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),
      Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
    function Vf(e, t) {
      t = !!(t & 4);
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          i = r.event;
        r = r.listeners;
        a: {
          var a = undefined;
          if (t) for (var o = r.length - 1; 0 <= o; o--) {
            var s = r[o],
              c = s.instance,
              l = s.currentTarget;
            if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (e) {
              yi(e);
            }
            i.currentTarget = null;
            a = c;
          } else for (o = 0; o < r.length; o++) {
            if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (e) {
              yi(e);
            }
            i.currentTarget = null;
            a = c;
          }
        }
      }
    }
    function Q(e, t) {
      var n = t[Ot];
      n === undefined && (n = t[Ot] = new Set());
      var r = e + `__bubble`;
      n.has(r) || (Gf(t, e, 2, false), n.add(r));
    }
    function Hf(e, t, n) {
      var r = 0;
      t && (r |= 4);
      Gf(n, e, r, t);
    }
    var Uf = `_reactListening` + Math.random().toString(36).slice(2);
    function Wf(e) {
      if (!e[Uf]) {
        e[Uf] = true;
        Vt.forEach(function (t) {
          t !== `selectionchange` && (Bf.has(t) || Hf(t, false, e), Hf(t, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Uf] || (t[Uf] = true, Hf(`selectionchange`, false, t));
      }
    }
    function Gf(e, t, n, r) {
      switch (Ch(t)) {
        case 2:
          var i = _h;
          break;
        case 8:
          i = vh;
          break;
        default:
          i = yh;
      }
      n = i.bind(null, t, n, e);
      i = undefined;
      !B || t !== `touchstart` && t !== `touchmove` && t !== `wheel` || (i = true);
      if (r) {
        if (i === undefined) {
          e.addEventListener(t, n, true);
        } else {
          e.addEventListener(t, n, {
            capture: true,
            passive: i
          });
        }
      } else {
        if (i === undefined) {
          e.addEventListener(t, n, false);
        } else {
          e.addEventListener(t, n, {
            passive: i
          });
        }
      }
    }
    function Kf(e, t, n, r, i) {
      var a = r;
      if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
          var c = r.stateNode.containerInfo;
          if (c === i) break;
          if (s === 4) for (s = r.return; s !== null;) {
            var l = s.tag;
            if ((l === 3 || l === 4) && s.stateNode.containerInfo === i) return;
            s = s.return;
          }
          for (; c !== null;) {
            if (s = Ft(c), s === null) return;
            if (l = s.tag, l === 5 || l === 6 || l === 26 || l === 27) {
              r = a = s;
              continue a;
            }
            c = c.parentNode;
          }
        }
        r = r.return;
      }
      Tn(function () {
        var r = a,
          i = Sn(n),
          s = [];
        a: {
          var c = fi.get(e);
          if (c !== undefined) {
            var l = Rn,
              u = e;
            switch (e) {
              case `keypress`:
                if (Nn(n) === 0) break a;
              case `keydown`:
              case `keyup`:
                l = nr;
                break;
              case `focusin`:
                u = `focus`;
                l = qn;
                break;
              case `focusout`:
                u = `blur`;
                l = qn;
                break;
              case `beforeblur`:
              case `afterblur`:
                l = qn;
                break;
              case `click`:
                if (n.button === 2) break a;
              case `auxclick`:
              case `dblclick`:
              case `mousedown`:
              case `mousemove`:
              case `mouseup`:
              case `mouseout`:
              case `mouseover`:
              case `contextmenu`:
                l = Gn;
                break;
              case `drag`:
              case `dragend`:
              case `dragenter`:
              case `dragexit`:
              case `dragleave`:
              case `dragover`:
              case `dragstart`:
              case `drop`:
                l = Kn;
                break;
              case `touchcancel`:
              case `touchend`:
              case `touchmove`:
              case `touchstart`:
                l = ar;
                break;
              case ai:
              case oi:
              case si:
                l = Jn;
                break;
              case di:
                l = or;
                break;
              case `scroll`:
              case `scrollend`:
                l = Bn;
                break;
              case `wheel`:
                l = sr;
                break;
              case `copy`:
              case `cut`:
              case `paste`:
                l = Yn;
                break;
              case `gotpointercapture`:
              case `lostpointercapture`:
              case `pointercancel`:
              case `pointerdown`:
              case `pointermove`:
              case `pointerout`:
              case `pointerover`:
              case `pointerup`:
                l = rr;
                break;
              case `submit`:
                l = ir;
                break;
              case `toggle`:
              case `beforetoggle`:
                l = cr;
            }
            var d = !!(t & 4),
              f = !d && (e === `scroll` || e === `scrollend`),
              p = d ? c === null ? null : c + `Capture` : c;
            d = [];
            for (var m = r, h; m !== null;) {
              var g = m;
              if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = En(m, p), g != null && d.push(qf(m, g, h))), f) break;
              m = m.return;
            }
            0 < d.length && (c = new l(c, u, null, n, i), s.push({
              event: c,
              listeners: d
            }));
          }
        }
        if (!(t & 7)) {
          a: {
            if (l = e === `mouseover` || e === `pointerover`, c = e === `mouseout` || e === `pointerout`, l && n !== xn && (u = n.relatedTarget || n.fromElement) && (Ft(u) || u[Dt])) break a;
            (c || l) && (u = i.window === i ? i : (l = i.ownerDocument) ? l.defaultView || l.parentWindow : window, c ? (l = n.relatedTarget || n.toElement, c = r, l = l ? Ft(l) : null, l !== null && (f = o(l), d = l.tag, l !== f || d !== 5 && d !== 27 && d !== 6) && (l = null)) : (c = null, l = r), c !== l && (d = Gn, g = `onMouseLeave`, p = `onMouseEnter`, m = `mouse`, (e === `pointerout` || e === `pointerover`) && (d = rr, g = `onPointerLeave`, p = `onPointerEnter`, m = `pointer`), f = c == null ? u : Lt(c), h = l == null ? u : Lt(l), u = new d(g, m + `leave`, c, n, i), u.target = f, u.relatedTarget = h, g = null, Ft(i) === r && (d = new d(p, m + `enter`, l, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = c && l ? te(c, l, Yf) : null, c !== null && Xf(s, u, c, d, false), l !== null && f !== null && Xf(s, f, l, d, true)));
          }
          a: {
            if (c = r ? Lt(r) : window, l = c.nodeName && c.nodeName.toLowerCase(), l === `select` || l === `input` && c.type === `file`) var _ = Or;else if (Sr(c)) {
              if (kr) _ = Rr;else {
                _ = Ir;
                var v = Fr;
              }
            } else {
              l = c.nodeName;
              if (!l || l.toLowerCase() !== `input` || c.type !== `checkbox` && c.type !== `radio`) {
                r && gn(r.elementType) && (_ = Or);
              } else {
                _ = Lr;
              }
            }
            if (_ &&= _(e, r)) {
              Cr(s, _, n, i);
              break a;
            }
            v && v(e, c, r);
          }
          switch (v = r ? Lt(r) : window, e) {
            case `focusin`:
              (Sr(v) || v.contentEditable === `true`) && (Yr = v, Xr = r, Zr = null);
              break;
            case `focusout`:
              Zr = Xr = Yr = null;
              break;
            case `mousedown`:
              Qr = true;
              break;
            case `contextmenu`:
            case `mouseup`:
            case `dragend`:
              Qr = false;
              $r(s, n, i);
              break;
            case `selectionchange`:
              if (Jr) break;
            case `keydown`:
            case `keyup`:
              $r(s, n, i);
          }
          var y;
          if (ur) b: {
            switch (e) {
              case `compositionstart`:
                var b = `onCompositionStart`;
                break b;
              case `compositionend`:
                b = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b = `onCompositionUpdate`;
                break b;
            }
            b = undefined;
          } else if (vr) {
            gr(e, n) && (b = `onCompositionEnd`);
          } else {
            e === `keydown` && n.keyCode === 229 && (b = `onCompositionStart`);
          }
          b && (pr && n.locale !== `ko` && (vr || b !== `onCompositionStart` ? b === `onCompositionEnd` && vr && (y = Mn()) : (kn = i, An = `value` in kn ? kn.value : kn.textContent, vr = true)), v = Jf(r, b), 0 < v.length && (b = new Xn(b, e, null, n, i), s.push({
            event: b,
            listeners: v
          }), y ? b.data = y : (y = _r(n), y !== null && (b.data = y))));
          (y = fr ? yr(e, n) : br(e, n)) && (b = Jf(r, `onBeforeInput`), 0 < b.length && (v = new Xn(`onBeforeInput`, `beforeinput`, null, n, i), s.push({
            event: v,
            listeners: b
          }), v.data = y));
          If(s, e, r, n, i);
        }
        Vf(s, t);
      });
    }
    function qf(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function Jf(e, t) {
      for (var n = t + `Capture`, r = []; e !== null;) {
        var i = e,
          a = i.stateNode;
        if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = En(e, n), i != null && r.unshift(qf(e, i, a)), i = En(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
        e = e.return;
      }
      return [];
    }
    function Yf(e) {
      if (e === null) return null;
      do e = e.return; while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function Xf(e, t, n, r, i) {
      for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
          c = s.alternate,
          l = s.stateNode;
        if (s = s.tag, c !== null && c === r) break;
        s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = En(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = En(n, a), l != null && o.push(qf(n, l, c))));
        n = n.return;
      }
      o.length !== 0 && e.push({
        event: t,
        listeners: o
      });
    }
    var Zf = /\r\n?/g,
      Qf = /\u0000|\uFFFD/g;
    function $f(e) {
      return (typeof e == `string` ? e : `` + e).replace(Zf, `
`).replace(Qf, ``);
    }
    function ep(e, t) {
      return t = $f(t), $f(e) === t;
    }
    function $(e, t, n, r, a, o) {
      switch (n) {
        case `children`:
          if (typeof r == `string`) t === `body` || t === `textarea` && r === `` || fn(e, r);else if (typeof r == `number` || typeof r == `bigint`) t !== `body` && fn(e, `` + r);else return;
          break;
        case `className`:
          Zt(e, `class`, r);
          break;
        case `tabIndex`:
          Zt(e, `tabindex`, r);
          break;
        case `dir`:
        case `role`:
        case `viewBox`:
        case `width`:
        case `height`:
          Zt(e, n, r);
          break;
        case `style`:
          hn(e, r, o);
          return;
        case `data`:
          if (t !== `object`) {
            Zt(e, `data`, r);
            break;
          }
        case `src`:
        case `href`:
          if (r === `` && (t !== `a` || n !== `href`)) {
            e.removeAttribute(n);
            break;
          }
          if (r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          r = yn(r);
          e.setAttribute(n, r);
          break;
        case `action`:
        case `formAction`:
          if (typeof r == `function`) {
            e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
            break;
          }
          if (typeof o == `function` && (n === `formAction` ? (t !== `input` && $(e, t, `name`, a.name, a, null), $(e, t, `formEncType`, a.formEncType, a, null), $(e, t, `formMethod`, a.formMethod, a, null), $(e, t, `formTarget`, a.formTarget, a, null)) : ($(e, t, `encType`, a.encType, a, null), $(e, t, `method`, a.method, a, null), $(e, t, `target`, a.target, a, null))), r == null || typeof r == `symbol` || typeof r == `boolean`) {
            e.removeAttribute(n);
            break;
          }
          r = yn(r);
          e.setAttribute(n, r);
          break;
        case `onClick`:
          r != null && (e.onclick = bn);
          return;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (n = r.__html, n != null) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `multiple`:
          e.multiple = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `muted`:
          e.muted = r && typeof r != `function` && typeof r != `symbol`;
          break;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `defaultValue`:
        case `defaultChecked`:
        case `innerHTML`:
        case `ref`:
          break;
        case `autoFocus`:
          break;
        case `xlinkHref`:
          if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
            e.removeAttribute(`xlink:href`);
            break;
          }
          n = yn(r);
          e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
          break;
        case `contentEditable`:
        case `spellCheck`:
        case `draggable`:
        case `value`:
        case `autoReverse`:
        case `externalResourcesRequired`:
        case `focusable`:
        case `preserveAlpha`:
          if (r != null && typeof r != `function` && typeof r != `symbol`) {
            e.setAttribute(n, r);
          } else {
            e.removeAttribute(n);
          }
          break;
        case `inert`:
        case `allowFullScreen`:
        case `async`:
        case `autoPlay`:
        case `controls`:
        case `credentialless`:
        case `default`:
        case `defer`:
        case `disabled`:
        case `disablePictureInPicture`:
        case `disableRemotePlayback`:
        case `formNoValidate`:
        case `hidden`:
        case `loop`:
        case `noModule`:
        case `noValidate`:
        case `open`:
        case `playsInline`:
        case `readOnly`:
        case `required`:
        case `reversed`:
        case `scoped`:
        case `seamless`:
        case `itemScope`:
          if (r && typeof r != `function` && typeof r != `symbol`) {
            e.setAttribute(n, ``);
          } else {
            e.removeAttribute(n);
          }
          break;
        case `capture`:
        case `download`:
          if (true === r) {
            e.setAttribute(n, ``);
          } else {
            if (false !== r && r != null && typeof r != `function` && typeof r != `symbol`) {
              e.setAttribute(n, r);
            } else {
              e.removeAttribute(n);
            }
          }
          break;
        case `cols`:
        case `rows`:
        case `size`:
        case `span`:
          if (r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && 1 <= r) {
            e.setAttribute(n, r);
          } else {
            e.removeAttribute(n);
          }
          break;
        case `rowSpan`:
        case `start`:
          if (r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)) {
            e.removeAttribute(n);
          } else {
            e.setAttribute(n, r);
          }
          break;
        case `popover`:
          Q(`beforetoggle`, e);
          Q(`toggle`, e);
          Xt(e, `popover`, r);
          break;
        case `xlinkActuate`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
          break;
        case `xlinkArcrole`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
          break;
        case `xlinkRole`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
          break;
        case `xlinkShow`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
          break;
        case `xlinkTitle`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
          break;
        case `xlinkType`:
          Qt(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
          break;
        case `xmlBase`:
          Qt(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
          break;
        case `xmlLang`:
          Qt(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
          break;
        case `xmlSpace`:
          Qt(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
          break;
        case `is`:
          Xt(e, `is`, r);
          break;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!(2 < n.length) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
            n = _n.get(n) || n;
            Xt(e, n, r);
          } else return;
      }
      I = true;
    }
    function tp(e, t, n, r, a, o) {
      switch (n) {
        case `style`:
          hn(e, r, o);
          return;
        case `dangerouslySetInnerHTML`:
          if (r != null) {
            if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
            if (n = r.__html, n != null) {
              if (a.children != null) throw Error(i(60));
              o?.__html !== n && (e.innerHTML = n);
            }
          }
          break;
        case `children`:
          if (typeof r == `string`) fn(e, r);else if (typeof r == `number` || typeof r == `bigint`) fn(e, `` + r);else return;
          break;
        case `onScroll`:
          r != null && Q(`scroll`, e);
          return;
        case `onScrollEnd`:
          r != null && Q(`scrollend`, e);
          return;
        case `onClick`:
          r != null && (e.onclick = bn);
          return;
        case `suppressContentEditableWarning`:
        case `suppressHydrationWarning`:
        case `innerHTML`:
        case `ref`:
          return;
        case `innerText`:
        case `textContent`:
          return;
        default:
          if (!Ht.hasOwnProperty(n)) a: {
            if (n[0] === `o` && n[1] === `n` && (a = n.endsWith(`Capture`), o = n.slice(2, a ? n.length - 7 : undefined), t = e[Et] || null, t = t == null ? null : t[n], typeof t == `function` && e.removeEventListener(o, t, a), typeof r == `function`)) {
              typeof t != `function` && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n));
              e.addEventListener(o, r, a);
              break a;
            }
            I = true;
            if (n in e) {
              e[n] = r;
            } else {
              if (true === r) {
                e.setAttribute(n, ``);
              } else {
                Xt(e, n, r);
              }
            }
          }
          return;
      }
      I = true;
    }
    function np(e, t, n) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `img`:
          Q(`error`, e);
          Q(`load`, e);
          var r = false,
            a = false,
            o;
          for (o in n) if (n.hasOwnProperty(o)) {
            var s = n[o];
            if (s != null) switch (o) {
              case `src`:
                r = true;
                break;
              case `srcSet`:
                a = true;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(i(137, t));
              default:
                $(e, t, o, s, n, null);
            }
          }
          a && $(e, t, `srcSet`, n.srcSet, n, null);
          r && $(e, t, `src`, n.src, n, null);
          return;
        case `input`:
          Q(`invalid`, e);
          var c = o = s = a = null,
            l = null,
            u = null;
          for (r in n) if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null) switch (r) {
              case `name`:
                a = d;
                break;
              case `type`:
                s = d;
                break;
              case `checked`:
                l = d;
                break;
              case `defaultChecked`:
                u = d;
                break;
              case `value`:
                o = d;
                break;
              case `defaultValue`:
                c = d;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (d != null) throw Error(i(137, t));
                break;
              default:
                $(e, t, r, d, n, null);
            }
          }
          cn(e, o, c, l, u, s, a, false);
          return;
        case `select`:
          for (a in Q(`invalid`, e), r = s = o = null, n) if (n.hasOwnProperty(a) && (c = n[a], c != null)) switch (a) {
            case `value`:
              o = c;
              break;
            case `defaultValue`:
              s = c;
              break;
            case `multiple`:
              r = c;
            default:
              $(e, t, a, c, n, null);
          }
          t = o;
          n = s;
          e.multiple = !!r;
          if (t == null) {
            n != null && un(e, !!r, n, true);
          } else {
            un(e, !!r, t, false);
          }
          return;
        case `textarea`:
          for (s in Q(`invalid`, e), o = a = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
            case `value`:
              r = c;
              break;
            case `defaultValue`:
              a = c;
              break;
            case `children`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              if (c != null) throw Error(i(91));
              break;
            default:
              $(e, t, s, c, n, null);
          }
          L(e, r, a, o);
          return;
        case `option`:
          for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
            case `selected`:
              e.selected = r && typeof r != `function` && typeof r != `symbol`;
              break;
            default:
              $(e, t, l, r, n, null);
          }
          return;
        case `dialog`:
          Q(`beforetoggle`, e);
          Q(`toggle`, e);
          Q(`cancel`, e);
          Q(`close`, e);
          break;
        case `iframe`:
        case `object`:
          Q(`load`, e);
          break;
        case `video`:
        case `audio`:
          for (r = 0; r < zf.length; r++) Q(zf[r], e);
          break;
        case `image`:
          Q(`error`, e);
          Q(`load`, e);
          break;
        case `details`:
          Q(`toggle`, e);
          break;
        case `embed`:
        case `source`:
        case `link`:
          Q(`error`, e);
          Q(`load`, e);
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(i(137, t));
            default:
              $(e, t, u, r, n, null);
          }
          return;
        default:
          if (gn(t)) {
            for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== undefined && tp(e, t, d, r, n, undefined));
            return;
          }
      }
      for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
    }
    var rp = {};
    function ip(e, t, n, r) {
      switch (t) {
        case `div`:
        case `span`:
        case `svg`:
        case `path`:
        case `a`:
        case `g`:
        case `p`:
        case `li`:
          break;
        case `input`:
          var a = null,
            o = null,
            s = null,
            c = null,
            l = null,
            u = null,
            d = null;
          for (m in n) {
            var f = n[m];
            if (n.hasOwnProperty(m) && f != null) switch (m) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l = f;
              default:
                r.hasOwnProperty(m) || $(e, t, m, null, r, f);
            }
          }
          for (var p in r) {
            var m = r[p];
            if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
              case `type`:
                m !== f && (I = true);
                o = m;
                break;
              case `name`:
                m !== f && (I = true);
                a = m;
                break;
              case `checked`:
                m !== f && (I = true);
                u = m;
                break;
              case `defaultChecked`:
                m !== f && (I = true);
                d = m;
                break;
              case `value`:
                m !== f && (I = true);
                s = m;
                break;
              case `defaultValue`:
                m !== f && (I = true);
                c = m;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m != null) throw Error(i(137, t));
                break;
              default:
                m !== f && $(e, t, p, m, r, f);
            }
          }
          sn(e, s, c, l, u, d, o, a);
          return;
        case `select`:
          for (o in m = s = c = p = null, n) if (l = n[o], n.hasOwnProperty(o) && l != null) switch (o) {
            case `value`:
              break;
            case `multiple`:
              m = l;
            default:
              r.hasOwnProperty(o) || $(e, t, o, null, r, l);
          }
          for (a in r) if (o = r[a], l = n[a], r.hasOwnProperty(a) && (o != null || l != null)) switch (a) {
            case `value`:
              o !== l && (I = true);
              p = o;
              break;
            case `defaultValue`:
              o !== l && (I = true);
              c = o;
              break;
            case `multiple`:
              o !== l && (I = true);
              s = o;
            default:
              o !== l && $(e, t, a, o, r, l);
          }
          t = c;
          n = s;
          r = m;
          if (p == null) {
            !!r != !!n && (t == null ? un(e, !!n, n ? [] : ``, false) : un(e, !!n, t, true));
          } else {
            un(e, !!n, p, false);
          }
          return;
        case `textarea`:
          for (c in m = p = null, n) if (a = n[c], n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c)) switch (c) {
            case `value`:
              break;
            case `children`:
              break;
            default:
              $(e, t, c, null, r, a);
          }
          for (s in r) if (a = r[s], o = n[s], r.hasOwnProperty(s) && (a != null || o != null)) switch (s) {
            case `value`:
              a !== o && (I = true);
              p = a;
              break;
            case `defaultValue`:
              a !== o && (I = true);
              m = a;
              break;
            case `children`:
              break;
            case `dangerouslySetInnerHTML`:
              if (a != null) throw Error(i(91));
              break;
            default:
              a !== o && $(e, t, s, a, r, o);
          }
          dn(e, p, m);
          return;
        case `option`:
          for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
            case `selected`:
              e.selected = false;
              break;
            default:
              $(e, t, h, null, r, p);
          }
          for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
            case `selected`:
              p !== m && (I = true);
              e.selected = p && typeof p != `function` && typeof p != `symbol`;
              break;
            default:
              $(e, t, l, p, r, m);
          }
          return;
        case `img`:
        case `link`:
        case `area`:
        case `base`:
        case `br`:
        case `col`:
        case `embed`:
        case `hr`:
        case `keygen`:
        case `meta`:
        case `param`:
        case `source`:
        case `track`:
        case `wbr`:
        case `menuitem`:
          for (var g in n) {
            p = n[g];
            n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
          }
          for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              if (p != null) throw Error(i(137, t));
              break;
            default:
              $(e, t, u, p, r, m);
          }
          return;
        default:
          if (gn(t)) {
            for (var _ in n) {
              p = n[_];
              n.hasOwnProperty(_) && p !== undefined && !r.hasOwnProperty(_) && tp(e, t, _, undefined, r, p);
            }
            for (d in r) {
              p = r[d];
              m = n[d];
              !r.hasOwnProperty(d) || p === m || p === undefined && m === undefined || tp(e, t, d, p, r, m);
            }
            return;
          }
      }
      for (var v in n) {
        p = n[v];
        n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
      }
      for (f in r) {
        p = r[f];
        m = n[f];
        !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
      }
    }
    function ap(e) {
      switch (e) {
        case `css`:
        case `script`:
        case `font`:
        case `img`:
        case `image`:
        case `input`:
        case `link`:
          return true;
        default:
          return false;
      }
    }
    function op() {
      if (typeof performance.getEntriesByType == `function`) {
        for (var e = 0, t = 0, n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
          var i = n[r],
            a = i.transferSize,
            o = i.initiatorType,
            s = i.duration;
          if (a && s && ap(o)) {
            for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
              var c = n[r],
                l = c.startTime;
              if (l > s) break;
              var u = c.transferSize,
                d = c.initiatorType;
              u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
            }
            if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == `number`) ? e : 5;
    }
    var sp = null,
      cp = null;
    function lp(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function up(e) {
      switch (e) {
        case `http://www.w3.org/2000/svg`:
          return 1;
        case `http://www.w3.org/1998/Math/MathML`:
          return 2;
        default:
          return 0;
      }
    }
    function dp(e, t) {
      if (e === 0) switch (t) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
      return e === 1 && t === `foreignObject` ? 0 : e;
    }
    function fp(e, t, n, r) {
      return n = lp(n).createElement(e), n[Tt] = r, n[Et] = t, np(n, e, t), zt(n), n;
    }
    function pp(e, t) {
      return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var mp = null;
    function hp() {
      var e = window.event;
      return e && e.type === `popstate` ? e !== mp && (mp = e, true) : (mp = null, false);
    }
    var gp = typeof setTimeout == `function` ? setTimeout : undefined,
      _p = typeof clearTimeout == `function` ? clearTimeout : undefined,
      vp = typeof Promise == `function` ? Promise : undefined,
      yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp,
      bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === undefined ? gp : function (e) {
        return vp.resolve(null).then(e).catch(xp);
      };
    function xp(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Sp(e) {
      return e === `head`;
    }
    function Cp(e, t) {
      var n = t,
        r = 0;
      do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8) {
          if (n = i.data, n === `/$` || n === `/&`) {
            if (r === 0) {
              e.removeChild(i);
              Hh(t);
              return;
            }
            r--;
          } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) r++;else if (n === `html`) _m(e.ownerDocument.documentElement);else if (n === `head`) {
            n = e.ownerDocument.head;
            _m(n);
            for (var a = n.firstChild; a;) {
              var o = a.nextSibling,
                s = a.nodeName;
              a[Mt] || s === `SCRIPT` || s === `STYLE` || s === `LINK` && a.rel.toLowerCase() === `stylesheet` || n.removeChild(a);
              a = o;
            }
          } else n === `body` && _m(e.ownerDocument.body);
        }
        n = i;
      } while (n);
      Hh(t);
    }
    function wp(e, t) {
      var n = e;
      e = 0;
      do {
        var r = n.nextSibling;
        if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = `none`) : (n.style.display = n._stashedDisplay || ``, n.getAttribute(`style`) === `` && n.removeAttribute(`style`)) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = ``) : n.nodeValue = n._stashedText || ``), r && r.nodeType === 8) {
          if (n = r.data, n === `/$`) {
            if (e === 0) break;
            e--;
          } else n !== `$` && n !== `$?` && n !== `$~` && n !== `$!` || e++;
        }
        n = r;
      } while (n);
    }
    function Tp(e, t, n) {
      if (t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === `inline`) {
        if (t = e.getClientRects(), t.length === 1) var r = 1;else for (var i = r = 0; i < t.length; i++) {
          var a = t[i];
          0 < a.width && 0 < a.height && r++;
        }
        r === 1 && (e = e.style, e.display = t.length === 1 ? `inline-block` : `block`, e.marginTop = `-` + n.paddingTop, e.marginBottom = `-` + n.paddingBottom);
      }
    }
    function Ep(e, t) {
      e = e.style;
      t = t.style;
      var n = t == null ? null : t.hasOwnProperty(`viewTransitionName`) ? t.viewTransitionName : t.hasOwnProperty(`view-transition-name`) ? t[`view-transition-name`] : null;
      e.viewTransitionName = n == null || typeof n == `boolean` ? `` : (`` + n).trim();
      n = t == null ? null : t.hasOwnProperty(`viewTransitionClass`) ? t.viewTransitionClass : t.hasOwnProperty(`view-transition-class`) ? t[`view-transition-class`] : null;
      e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : (`` + n).trim();
      e.display === `inline-block` && (t == null ? e.display = e.margin = `` : (n = t.display, e.display = n == null || typeof n == `boolean` ? `` : n, n = t.margin, n == null ? (n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`], e.marginTop = n == null || typeof n == `boolean` ? `` : n, t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`], e.marginBottom = t == null || typeof t == `boolean` ? `` : t) : e.margin = n));
    }
    function Dp(e, t, n) {
      return n = n.ownerDocument.defaultView, {
        rect: e,
        abs: t.position === `absolute` || t.position === `fixed`,
        clip: t.clipPath !== `none` || t.overflow !== `visible` || t.filter !== `none` || t.mask !== `none` || t.mask !== `none` || t.borderRadius !== `0px`,
        view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
      };
    }
    function Op(e) {
      return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
    }
    function kp(e) {
      var t = e.getBoundingClientRect();
      t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
      var n = getComputedStyle(e);
      return Dp(t, n, e);
    }
    function Ap(e) {
      return e.documentElement.clientHeight;
    }
    function jp(e) {
      this.addEventListener(`load`, e);
      this.addEventListener(`error`, e);
    }
    function Mp(e, t, n, r, i, a, o, s, c) {
      var l = t.nodeType === 9 ? t : t.ownerDocument;
      try {
        var u = l.startViewTransition({
          update: function () {
            var t = l.defaultView,
              n = t.navigation && t.navigation.transition,
              o = l.fonts.status;
            r();
            var s = [];
            if (o === `loaded` && (Ap(l), l.fonts.status === `loading` && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
              var f = c[d];
              if (!f.complete) {
                var p = f.getBoundingClientRect();
                if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
                  if (u += Xm(f), u > $m) {
                    s.length = o;
                    break;
                  }
                  f = new Promise(jp.bind(f));
                  s.push(f);
                }
              }
            }
            if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function (e) {
              return setTimeout(e, 500);
            })]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
            if (i(), n) return n.finished.then(a, a);
            a();
          },
          types: n
        });
        l.__reactViewTransition = u;
        var d = [];
        return u.ready.then(function () {
          for (var e = l.documentElement.getAnimations({
              subtree: true
            }), t = 0; t < e.length; t++) {
            var n = e[t],
              r = n.effect,
              i = r.pseudoElement;
            if (i != null && i.startsWith(`::view-transition`)) {
              d.push(n);
              n = r.getKeyframes();
              for (var a = i = undefined, s = true, c = 0; c < n.length; c++) {
                var u = n[c],
                  f = u.width;
                if (i === undefined) i = f;else if (i !== f) {
                  s = false;
                  break;
                }
                if (f = u.height, a === undefined) a = f;else if (a !== f) {
                  s = false;
                  break;
                }
                delete u.width;
                delete u.height;
                u.transform === `none` && delete u.transform;
              }
              s && i !== undefined && a !== undefined && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
            }
          }
          o();
        }, function (e) {
          l.__reactViewTransition === u && (l.__reactViewTransition = null);
          try {
            if (typeof e == `object` && e) switch (e.name) {
              case `InvalidStateError`:
                (e.message === `View transition was skipped because document visibility state is hidden.` || e.message === `Skipping view transition because document visibility state has become hidden.` || e.message === `Skipping view transition because viewport size changed.` || e.message === `Transition was aborted because of invalid state`) && (e = null);
            }
            e !== null && c(e);
          } finally {
            r();
            i();
            o();
          }
        }), u.finished.finally(function () {
          for (var e = 0; e < d.length; e++) d[e].cancel();
          l.__reactViewTransition === u && (l.__reactViewTransition = null);
          s();
        }), u;
      } catch {
        return r(), i(), o(), null;
      }
    }
    function Np(e, t) {
      this._scope = document.documentElement;
      this._selector = `::view-transition-` + e + `(` + t + `)`;
    }
    Np.prototype.animate = function (e, t) {
      return t = typeof t == `number` ? {
        duration: t
      } : C({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
    };
    Np.prototype.getAnimations = function () {
      for (var e = this._scope, t = this._selector, n = e.getAnimations({
          subtree: true
        }), r = [], i = 0; i < n.length; i++) {
        var a = n[i].effect;
        a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
      }
      return r;
    };
    Np.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    };
    function Pp(e) {
      return {
        name: e,
        group: new Np(`group`, e),
        imagePair: new Np(`image-pair`, e),
        old: new Np(`old`, e),
        new: new Np(`new`, e)
      };
    }
    function Fp(e) {
      this._fragmentFiber = e;
      this._observers = this._eventListeners = null;
    }
    Fp.prototype.addEventListener = function (e, t, n) {
      var r = null,
        i = null;
      if (!(n != null && typeof n != `boolean` && (r = n.signal || null, r !== null && r.aborted))) {
        this._eventListeners === null && (this._eventListeners = []);
        var a = this._eventListeners;
        if (Bp(a, e, t, n) === -1) {
          var o = this,
            s = t;
          n != null && typeof n != `boolean` && true === n.once && (s = function (r) {
            o.removeEventListener(e, t, n);
            if (typeof t == `function`) {
              t.call(this, r);
            } else {
              t.handleEvent(r);
            }
          });
          r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener(`abort`, i, {
            once: true
          }), i = r.removeEventListener.bind(r, `abort`, i));
          r = Rp(n);
          a.push({
            type: e,
            listener: t,
            optionsOrUseCapture: n,
            attachedListener: s,
            cleanup: i
          });
          f(this._fragmentFiber.child, false, Ip, e, s, r);
        }
        this._eventListeners = a;
      }
    };
    function Ip(e, t, n, r) {
      return v(e).addEventListener(t, n, r), false;
    }
    Fp.prototype.removeEventListener = function (e, t, n) {
      var r = this._eventListeners;
      if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
        var i = r[t];
        n = i.attachedListener;
        var a = i.cleanup;
        i = Rp(i.optionsOrUseCapture);
        f(this._fragmentFiber.child, false, Lp, e, n, i);
        r.splice(t, 1);
        a !== null && a();
      }
    };
    function Lp(e, t, n, r) {
      return v(e).removeEventListener(t, n, r), false;
    }
    function Rp(e) {
      return e != null && typeof e != `boolean` && (true === e.once || e.signal instanceof AbortSignal) ? {
        capture: e.capture,
        passive: e.passive
      } : e;
    }
    function zp(e) {
      return e == null ? `c=0` : typeof e == `boolean` ? `c=` + (e ? `1` : `0`) : `c=` + (e.capture ? `1` : `0`);
    }
    function Bp(e, t, n, r) {
      if (e.length === 0) return -1;
      r = zp(r);
      for (var i = 0; i < e.length; i++) {
        var a = e[i];
        if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
      }
      return -1;
    }
    Fp.prototype.dispatchEvent = function (e) {
      var t = p(this._fragmentFiber);
      if (t === null) return true;
      t = v(t);
      var n = this._eventListeners;
      if (n !== null && 0 < n.length || !e.bubbles) {
        var r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
        if (n) for (var i = 0; i < n.length; i++) {
          var a = n[i];
          r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
        }
        if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) {
          a = n[i];
          r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
        }
        return t.removeChild(r), e;
      }
      return t.dispatchEvent(e);
    };
    Fp.prototype.focus = function (e) {
      f(this._fragmentFiber.child, true, Vp, e, undefined, undefined);
    };
    function Vp(e, t) {
      return e.tag !== 6 && (e = v(e), pm(e, t));
    }
    Fp.prototype.focusLast = function (e) {
      var t = [];
      f(this._fragmentFiber.child, true, Hp, t, undefined, undefined);
      for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
    };
    function Hp(e, t) {
      return t.push(e), false;
    }
    Fp.prototype.blur = function () {
      var e = p(this._fragmentFiber);
      e !== null && (e = v(e), e = lp(e).activeElement, e !== null && f(this._fragmentFiber.child, false, Up, e, undefined, undefined));
    };
    function Up(e, t) {
      return e.tag !== 6 && (e = v(e), e === t || e.contains(t) ? (t.blur(), true) : false);
    }
    Fp.prototype.observeUsing = function (e) {
      this._observers === null && (this._observers = new Set());
      this._observers.add(e);
      f(this._fragmentFiber.child, false, Wp, e, undefined, undefined);
    };
    function Wp(e, t) {
      return e.tag !== 6 && (e = v(e), t.observe(e), false);
    }
    Fp.prototype.unobserveUsing = function (e) {
      var t = this._observers;
      if (t !== null && t.has(e)) {
        t.delete(e);
        f(this._fragmentFiber.child, false, Gp, e, undefined, undefined);
        for (var n = t = 0; n < Kp.length; n++) {
          var r = Kp[n];
          if (r.fragmentInstance === this && r.observer === e) {
            e.unobserve(r.instance);
          } else {
            Kp[t++] = r;
          }
        }
        Kp.length = t;
      }
    };
    function Gp(e, t) {
      return e.tag !== 6 && (e = v(e), t.unobserve(e), false);
    }
    var Kp = [],
      qp = false;
    function Jp(e, t, n) {
      Kp.push({
        fragmentInstance: e,
        observer: t,
        instance: n
      });
      qp || (qp = true, mm(function () {
        qp = false;
        var e = Kp;
        Kp = [];
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.observer.unobserve(n.instance);
        }
      }));
    }
    Fp.prototype.getClientRects = function () {
      var e = [];
      return f(this._fragmentFiber.child, false, Yp, e, undefined, undefined), e;
    };
    function Yp(e, t) {
      if (e.tag === 6) {
        e = e.stateNode;
        var n = e.ownerDocument.createRange();
        n.selectNodeContents(e);
        t.push.apply(t, n.getClientRects());
      } else {
        e = v(e);
        t.push.apply(t, e.getClientRects());
      }
      return false;
    }
    Fp.prototype.getRootNode = function (e) {
      var t = p(this._fragmentFiber);
      return t === null ? this : v(t).getRootNode(e);
    };
    Fp.prototype.compareDocumentPosition = function (e) {
      var t = p(this._fragmentFiber);
      if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var n = [];
      f(this._fragmentFiber.child, false, Hp, n, undefined, undefined);
      var r = v(t);
      if (n.length === 0) {
        if (n = r, h(this._fragmentFiber)) {
          a: {
            for (t = this._fragmentFiber.return; t !== null;) {
              if (t.tag === 4) {
                t = t.stateNode.containerInfo;
                break a;
              }
              if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
              t = t.return;
            }
            t = null;
          }
          t != null && (n = t);
        }
        t = this._fragmentFiber;
        var i = r = n.compareDocumentPosition(e);
        return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = g(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = v(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
      }
      t = v(n[0]);
      i = v(n[n.length - 1]);
      var a = h(this._fragmentFiber) ? t.parentElement : r;
      if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
      var o = t.compareDocumentPosition(e),
        s = i.compareDocumentPosition(e),
        c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    };
    function Xp(e, t, n, r, i) {
      var a = Ft(i);
      if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        if (n = !!a) a: {
          for (; a !== null;) {
            if (a.tag === 7 && (a === t || a.alternate === t)) {
              n = true;
              break a;
            }
            a = a.return;
          }
          n = false;
        }
        return n;
      }
      if (e & Node.DOCUMENT_POSITION_CONTAINS) {
        if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
        a: {
          for (a = t, t = p(t); a !== null;) {
            if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
              a = true;
              break a;
            }
            a = a.return;
          }
          a = false;
        }
        return a;
      }
      return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = te(n, a, ee), t === null ? t = false : (f(t, true, x, a, n), a = y, y = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = te(r, a, ee), t === null ? t = false : (f(t, true, S, a, r), a = y, b = y = null, t = a !== null)), t) : false;
    }
    function Zp(e, t) {
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e);
      e = n.getBoundingClientRect();
      window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
    }
    Fp.prototype.scrollIntoView = function (e) {
      if (typeof e == `object`) throw Error(i(566));
      var t = [];
      f(this._fragmentFiber.child, false, Hp, t, undefined, undefined);
      var n = false !== e;
      if (t.length === 0) {
        var r = g(this._fragmentFiber);
        if (r = n ? r[1] || r[0] || p(this._fragmentFiber) : r[0] || r[1], r === null) return;
        if (r.tag === 6) {
          e = v(r);
          Zp(e, n);
          return;
        }
        if (r = v(r), r.nodeType !== 9) {
          if (r.nodeType === 11) {
            n = `host` in r ? r.host : null;
            n !== null && n.scrollIntoView(e);
            return;
          }
          r.scrollIntoView(e);
        }
      }
      for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
        var a = t[r];
        if (a.tag === 6) {
          a = v(a);
          Zp(a, n);
        } else {
          v(a).scrollIntoView(e);
        }
        r += n ? -1 : 1;
      }
    };
    function Qp(e, t) {
      return e = v(e), $p(e, t), false;
    }
    function $p(e, t) {
      e.reactFragments ??= new Set();
      e.reactFragments.add(t);
    }
    function em(e, t) {
      var n = t._eventListeners;
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
      e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function (n) {
        for (var r = 0, i = 0; i < Kp.length; i++) {
          var a = Kp[i];
          (a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
        }
        Kp.length = r;
        n.observe(e);
      }), $p(e, t));
    }
    function tm(e, t) {
      var n = t._eventListeners;
      if (n !== null) for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
      e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function (n) {
        if (typeof n.rootMargin == `string`) {
          Jp(t, n, e);
        } else {
          n.unobserve(e);
        }
      }), e.reactFragments != null && e.reactFragments.delete(t));
    }
    function nm(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
        var n = t;
        switch (t = t.nextSibling, n.nodeName) {
          case `HTML`:
          case `HEAD`:
          case `BODY`:
            nm(n);
            Pt(n);
            continue;
          case `SCRIPT`:
          case `STYLE`:
            continue;
          case `LINK`:
            if (n.rel.toLowerCase() === `stylesheet`) continue;
        }
        e.removeChild(n);
      }
    }
    function rm(e, t, n, r) {
      for (; e.nodeType === 1;) {
        var i = n;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
        } else if (!r) {
          if (t === `input` && e.type === `hidden`) {
            var a = i.name == null ? null : `` + i.name;
            if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
          } else return e;
        } else if (!e[Mt]) switch (t) {
          case `meta`:
            if (!e.hasAttribute(`itemprop`)) break;
            return e;
          case `link`:
            if (a = e.getAttribute(`rel`), a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title)) break;
            return e;
          case `style`:
            if (e.hasAttribute(`data-precedence`)) break;
            return e;
          case `script`:
            if (a = e.getAttribute(`src`), (a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`)) break;
            return e;
          default:
            return e;
        }
        if (e = lm(e.nextSibling), e === null) break;
      }
      return null;
    }
    function im(e, t, n) {
      if (t === ``) return null;
      for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = lm(e.nextSibling), e === null)) return null;
      return e;
    }
    function am(e, t) {
      for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = lm(e.nextSibling), e === null)) return null;
      return e;
    }
    function om(e) {
      return e.data === `$?` || e.data === `$~`;
    }
    function sm(e) {
      return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`;
    }
    function cm(e, t) {
      var n = e.ownerDocument;
      if (e.data === `$~`) e._reactRetry = t;else if (e.data !== `$?` || n.readyState !== `loading`) t();else {
        var r = function () {
          t();
          n.removeEventListener(`DOMContentLoaded`, r);
        };
        n.addEventListener(`DOMContentLoaded`, r);
        e._reactRetry = r;
      }
    }
    function lm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`) break;
          if (t === `/$` || t === `/&`) return null;
        }
      }
      return e;
    }
    var um = null;
    function dm(e) {
      e = e.nextSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `/$` || n === `/&`) {
            if (t === 0) return lm(e.nextSibling);
            t--;
          } else n !== `$` && n !== `$!` && n !== `$?` && n !== `$~` && n !== `&` || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function fm(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
            if (t === 0) return e;
            t--;
          } else n !== `/$` && n !== `/&` || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function pm(e, t) {
      function n() {
        r = true;
      }
      if (e.ownerDocument.activeElement === e) return true;
      var r = false;
      try {
        e.ownerDocument.addEventListener(`focus`, n, true);
        (e.focus || HTMLElement.prototype.focus).call(e, t);
      } finally {
        e.ownerDocument.removeEventListener(`focus`, n, true);
      }
      return r;
    }
    function mm(e) {
      yp(function () {
        yp(function (t) {
          return e(t);
        });
      });
    }
    function hm(e, t, n) {
      switch (t = lp(n), e) {
        case `html`:
          if (e = t.documentElement, !e) throw Error(i(452));
          return e;
        case `head`:
          if (e = t.head, !e) throw Error(i(453));
          return e;
        case `body`:
          if (e = t.body, !e) throw Error(i(454));
          return e;
        default:
          throw Error(i(451));
      }
    }
    function gm(e, t, n) {
      for (var r in n) {
        var i = n[r];
        n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
      }
      n.dangerouslySetInnerHTML != null && (e.textContent = ``);
      e.onclick === bn && (e.onclick = null);
      Pt(e);
    }
    function _m(e) {
      for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
      Pt(e);
    }
    var vm = new Map(),
      ym = new Set();
    function bm(e) {
      if (typeof e.getRootNode == `function`) {
        var t = e.getRootNode();
        if (t.nodeType === 9 || t.nodeType === 11) return t;
      }
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    var xm = O.d;
    O.d = {
      f: Sm,
      r: Cm,
      D: Em,
      C: Dm,
      L: Om,
      m: km,
      X: jm,
      S: Am,
      M: Mm
    };
    function Sm() {
      var e = xm.f(),
        t = zd();
      return e || t;
    }
    function Cm(e) {
      var t = It(e);
      if (t !== null && t.tag === 5 && t.type === `form`) {
        tc(t);
      } else {
        xm.r(e);
      }
    }
    var wm = typeof document > `u` ? null : document;
    function Tm(e, t, n) {
      var r = wm;
      if (r && typeof t == `string` && t) {
        var i = on(t);
        i = `link[rel="` + e + `"][href="` + i + `"]`;
        typeof n == `string` && (i += `[crossorigin="` + n + `"]`);
        ym.has(i) || (ym.add(i), e = {
          rel: e,
          crossOrigin: n,
          href: t
        }, r.querySelector(i) === null && (t = r.createElement(`link`), np(t, `link`, e), zt(t), r.head.appendChild(t)));
      }
    }
    function Em(e) {
      xm.D(e);
      Tm(`dns-prefetch`, e, null);
    }
    function Dm(e, t) {
      xm.C(e, t);
      Tm(`preconnect`, e, t);
    }
    function Om(e, t, n) {
      xm.L(e, t, n);
      var r = wm;
      if (r && e && t) {
        var i = `link[rel="preload"][as="` + on(t) + `"]`;
        if (t === `image` && n && n.imageSrcSet) {
          i += `[imagesrcset="` + on(n.imageSrcSet) + `"]`;
          typeof n.imageSizes == `string` && (i += `[imagesizes="` + on(n.imageSizes) + `"]`);
        } else {
          i += `[href="` + on(e) + `"]`;
        }
        var a = i;
        switch (t) {
          case `style`:
            a = Pm(e);
            break;
          case `script`:
            a = Rm(e);
        }
        if (!(vm.has(a) || (e = C({
          rel: `preload`,
          href: t === `image` && n && n.imageSrcSet ? undefined : e,
          as: t
        }, n), vm.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(Fm(a)) || t === `script` && r.querySelector(zm(a))))) {
          var o = r.createElement(`link`);
          np(o, `link`, e);
          t === `style` && (o[Nt] = true, o.onload = o.onerror = function () {
            Bt(o);
          });
          zt(o);
          r.head.appendChild(o);
        }
      }
    }
    function km(e, t) {
      xm.m(e, t);
      var n = wm;
      if (n && e) {
        var r = t && typeof t.as == `string` ? t.as : `script`,
          i = `link[rel="modulepreload"][as="` + on(r) + `"][href="` + on(e) + `"]`,
          a = i;
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            a = Rm(e);
        }
        if (!vm.has(a) && (e = C({
          rel: `modulepreload`,
          href: e
        }, t), vm.set(a, e), n.querySelector(i) === null)) {
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              if (n.querySelector(zm(a))) return;
          }
          r = n.createElement(`link`);
          np(r, `link`, e);
          zt(r);
          n.head.appendChild(r);
        }
      }
    }
    function Am(e, t, n) {
      xm.S(e, t, n);
      var r = wm;
      if (r && e) {
        var i = Rt(r).hoistableStyles,
          a = Pm(e);
        t ||= `default`;
        var o = i.get(a);
        if (!o) {
          var s = {
            loading: 0,
            preload: null
          };
          if (o = r.querySelector(Fm(a))) s.loading = 5;else {
            e = C({
              rel: `stylesheet`,
              href: e,
              'data-precedence': t
            }, n);
            (n = vm.get(a)) && Hm(e, n);
            var c = o = r.createElement(`link`);
            zt(c);
            np(c, `link`, e);
            c._p = new Promise(function (e, t) {
              c.onload = e;
              c.onerror = t;
            });
            c.addEventListener(`load`, function () {
              s.loading |= 1;
            });
            c.addEventListener(`error`, function () {
              s.loading |= 2;
            });
            s.loading |= 4;
            Vm(o, t, r);
          }
          o = {
            type: `stylesheet`,
            instance: o,
            count: 1,
            state: s
          };
          i.set(a, o);
        }
      }
    }
    function jm(e, t) {
      xm.X(e, t);
      var n = wm;
      if (n && e) {
        var r = Rt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a || (a = n.querySelector(zm(i)), a || (e = C({
          src: e,
          async: true
        }, t), (t = vm.get(i)) && Um(e, t), a = n.createElement(`script`), zt(a), np(a, `link`, e), n.head.appendChild(a)), a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        }, r.set(i, a));
      }
    }
    function Mm(e, t) {
      xm.M(e, t);
      var n = wm;
      if (n && e) {
        var r = Rt(n).hoistableScripts,
          i = Rm(e),
          a = r.get(i);
        a || (a = n.querySelector(zm(i)), a || (e = C({
          src: e,
          async: true,
          type: `module`
        }, t), (t = vm.get(i)) && Um(e, t), a = n.createElement(`script`), zt(a), np(a, `link`, e), n.head.appendChild(a)), a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        }, r.set(i, a));
      }
    }
    function Nm(e, t, n, r) {
      var a = (a = ke.current) ? bm(a) : null;
      if (!a) throw Error(i(446));
      switch (e) {
        case `meta`:
        case `title`:
          return null;
        case `style`:
          return typeof n.precedence == `string` && typeof n.href == `string` ? (n = Pm(n.href), t = Rt(a).hoistableStyles, r = t.get(n), r || (r = {
            type: `style`,
            instance: null,
            count: 0,
            state: null
          }, t.set(n, r)), r) : {
            type: `void`,
            instance: null,
            count: 0,
            state: null
          };
        case `link`:
          if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
            e = Pm(n.href);
            var o = Rt(a).hoistableStyles,
              s = o.get(e);
            if (s || (a = a.ownerDocument || a, s = {
              type: `stylesheet`,
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, o.set(e, s), (o = a.querySelector(Fm(e))) ? o._p || (s.instance = o, s.state.loading = 5) : (o = vm.get(e), o || (o = {
              rel: `preload`,
              as: `style`,
              href: n.href,
              crossOrigin: n.crossOrigin,
              integrity: n.integrity,
              media: n.media,
              hrefLang: n.hrefLang,
              referrerPolicy: n.referrerPolicy
            }, vm.set(e, o)), Lm(a, e, o, s.state))), t && r === null) throw Error(i(528, ``));
            return s;
          }
          if (t && r !== null) throw Error(i(529, ``));
          return null;
        case `script`:
          return t = n.async, n = n.src, typeof n == `string` && t && typeof t != `function` && typeof t != `symbol` ? (n = Rm(n), t = Rt(a).hoistableScripts, r = t.get(n), r || (r = {
            type: `script`,
            instance: null,
            count: 0,
            state: null
          }, t.set(n, r)), r) : {
            type: `void`,
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(i(444, e));
      }
    }
    function Pm(e) {
      return `href="` + on(e) + `"`;
    }
    function Fm(e) {
      return `link[rel="stylesheet"][` + e + `]`;
    }
    function Im(e) {
      return C({}, e, {
        'data-precedence': e.precedence,
        precedence: null
      });
    }
    function Lm(e, t, n, r) {
      if (t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`)) {
        if (true !== t[Nt]) {
          r.loading = 1;
          return;
        }
      } else {
        t = e.createElement(`link`);
        t[Nt] = true;
        t.onload = t.onerror = Bt.bind(null, t);
        np(t, `link`, n);
        zt(t);
        e.head.appendChild(t);
      }
      r.preload = t;
      t.addEventListener(`load`, function () {
        return r.loading |= 1;
      });
      t.addEventListener(`error`, function () {
        return r.loading |= 2;
      });
    }
    function Rm(e) {
      return `[src="` + on(e) + `"]`;
    }
    function zm(e) {
      return `script[async]` + e;
    }
    function Bm(e, t, n) {
      if (t.count++, t.instance === null) switch (t.type) {
        case `style`:
          var r = e.querySelector(`style[data-href~="` + on(n.href) + `"]`);
          if (r) return t.instance = r, zt(r), r;
          var a = C({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null
          });
          return r = (e.ownerDocument || e).createElement(`style`), zt(r), np(r, `style`, a), Vm(r, n.precedence, e), t.instance = r;
        case `stylesheet`:
          a = Pm(n.href);
          var o = e.querySelector(Fm(a));
          if (o) return t.state.loading |= 4, t.instance = o, zt(o), o;
          r = Im(n);
          (a = vm.get(a)) && Hm(r, a);
          o = (e.ownerDocument || e).createElement(`link`);
          zt(o);
          var s = o;
          return s._p = new Promise(function (e, t) {
            s.onload = e;
            s.onerror = t;
          }), np(o, `link`, r), t.state.loading |= 4, Vm(o, n.precedence, e), t.instance = o;
        case `script`:
          return o = Rm(n.src), (a = e.querySelector(zm(o))) ? (t.instance = a, zt(a), a) : (r = n, (a = vm.get(o)) && (r = C({}, n), Um(r, a)), e = e.ownerDocument || e, a = e.createElement(`script`), zt(a), np(a, `link`, r), e.head.appendChild(a), t.instance = a);
        case `void`:
          return null;
        default:
          throw Error(i(443, t.type));
      } else t.type === `stylesheet` && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
      return t.instance;
    }
    function Vm(e, t, n) {
      for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
        var s = r[o];
        if (s.dataset.precedence === t) a = s;else if (a !== i) break;
      }
      if (a) {
        a.parentNode.insertBefore(e, a.nextSibling);
      } else {
        t = n.nodeType === 9 ? n.head : n;
        t.insertBefore(e, t.firstChild);
      }
    }
    function Hm(e, t) {
      e.crossOrigin ??= t.crossOrigin;
      e.referrerPolicy ??= t.referrerPolicy;
      e.title ??= t.title;
    }
    function Um(e, t) {
      e.crossOrigin ??= t.crossOrigin;
      e.referrerPolicy ??= t.referrerPolicy;
      e.integrity ??= t.integrity;
    }
    var Wm = null;
    function Gm(e, t, n) {
      if (Wm === null) {
        var r = new Map(),
          i = Wm = new Map();
        i.set(n, r);
      } else {
        i = Wm;
        r = i.get(n);
        r || (r = new Map(), i.set(n, r));
      }
      if (r.has(e)) return r;
      for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
        var a = n[i];
        if (!(a[Mt] || a[Tt] || e === `link` && a.getAttribute(`rel`) === `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
          var o = a.getAttribute(t) || ``;
          o = e + o;
          var s = r.get(o);
          if (s) {
            s.push(a);
          } else {
            r.set(o, [a]);
          }
        }
      }
      return r;
    }
    function Km(e, t, n) {
      e = e.ownerDocument || e;
      e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null);
    }
    function qm(e, t, n) {
      if (n === 1 || t.itemProp != null) return false;
      switch (e) {
        case `meta`:
        case `title`:
          return true;
        case `style`:
          if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) break;
          return true;
        case `link`:
          if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) break;
          switch (t.rel) {
            case `stylesheet`:
              return e = t.disabled, typeof t.precedence == `string` && e == null;
            default:
              return true;
          }
        case `script`:
          if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`) return true;
      }
      return false;
    }
    function Jm(e, t) {
      return e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`;
    }
    function Ym(e) {
      return !(e.type === `stylesheet` && !(e.state.loading & 3));
    }
    function Xm(e) {
      return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
    }
    function Zm(e, t) {
      typeof t.decode == `function` && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
    }
    function Qm(e, t, n, r) {
      if (n.type === `stylesheet` && (typeof r.media != `string` || false !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
        if (n.instance === null) {
          var i = Pm(r.href),
            a = t.querySelector(Fm(i));
          if (a) {
            t = a._p;
            typeof t == `object` && t && typeof t.then == `function` && (e.count++, e = nh.bind(e), t.then(e, e));
            n.state.loading |= 4;
            n.instance = a;
            zt(a);
            return;
          }
          a = t.ownerDocument || t;
          r = Im(r);
          (i = vm.get(i)) && Hm(r, i);
          a = a.createElement(`link`);
          zt(a);
          var o = a;
          o._p = new Promise(function (e, t) {
            o.onload = e;
            o.onerror = t;
          });
          np(a, `link`, r);
          n.instance = a;
        }
        e.stylesheets === null && (e.stylesheets = new Map());
        e.stylesheets.set(n, t);
        (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener(`load`, n), t.addEventListener(`error`, n));
      }
    }
    var $m = 0;
    function eh(e, t) {
      return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function (n) {
        var r = setTimeout(function () {
          if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
            var t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, 6e4 + t);
        0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
        var i = setTimeout(function () {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
            var t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, (e.imgBytes > $m ? 50 : 800) + t);
        return e.unsuspend = n, function () {
          e.unsuspend = null;
          clearTimeout(r);
          clearTimeout(i);
        };
      } : null;
    }
    function th(e) {
      if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
        if (e.stylesheets) ah(e, e.stylesheets);else if (e.unsuspend) {
          var t = e.unsuspend;
          e.unsuspend = null;
          t();
        }
      }
    }
    function nh() {
      this.count--;
      th(this);
    }
    function rh() {
      this.imgCount--;
      th(this);
    }
    var ih = null;
    function ah(e, t) {
      e.stylesheets = null;
      e.unsuspend !== null && (e.count++, ih = new Map(), t.forEach(oh, e), ih = null, nh.call(e));
    }
    function oh(e, t) {
      if (!(t.state.loading & 4)) {
        var n = ih.get(e);
        if (n) var r = n.get(null);else {
          n = new Map();
          ih.set(e, n);
          for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
            var o = i[a];
            (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) && (n.set(o.dataset.precedence, o), r = o);
          }
          r && n.set(null, r);
        }
        i = t.instance;
        o = i.getAttribute(`data-precedence`);
        a = n.get(o) || r;
        a === r && n.set(null, i);
        n.set(o, i);
        this.count++;
        r = nh.bind(this);
        i.addEventListener(`load`, r);
        i.addEventListener(`error`, r);
        if (a) {
          a.parentNode.insertBefore(i, a.nextSibling);
        } else {
          e = e.nodeType === 9 ? e.head : e;
          e.insertBefore(i, e.firstChild);
        }
        t.state.loading |= 4;
      }
    }
    var sh = {
      $$typeof: ce,
      Provider: null,
      Consumer: null,
      _currentValue: Se,
      _currentValue2: Se,
      _threadCount: 0
    };
    function ch(e, t, n, r, i, a, o, s, c) {
      this.tag = 1;
      this.containerInfo = e;
      this.pingCache = this.current = this.pendingChildren = null;
      this.timeoutHandle = -1;
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
      this.callbackPriority = 0;
      this.expirationTimes = gt(-1);
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
      this.entanglements = gt(0);
      this.hiddenUpdates = gt(null);
      this.identifierPrefix = r;
      this.onUncaughtError = i;
      this.onCaughtError = a;
      this.onRecoverableError = o;
      this.pooledCache = null;
      this.pooledCacheLanes = 0;
      this.formState = c;
      this.transitionTypes = null;
      this.incompleteTransitions = new Map();
    }
    function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
      return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, true === a && (t |= 24), a = ji(3, null, null, t), e.current = a, a.stateNode = e, t = Aa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: t
      }, po(a), e;
    }
    function uh(e) {
      return e ? (e = ki, e) : ki;
    }
    function dh(e, t, n, r, i, a) {
      i = uh(i);
      if (r.context === null) {
        r.context = i;
      } else {
        r.pendingContext = i;
      }
      r = ho(t);
      r.payload = {
        element: n
      };
      a = a === undefined ? null : a;
      a !== null && (r.callback = a);
      n = go(e, r, t);
      n !== null && (Pd(n, e, t), _o(n, e, t));
    }
    function fh(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
      }
    }
    function ph(e, t) {
      fh(e, t);
      (e = e.alternate) && fh(e, t);
    }
    function mh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Ei(e, 67108864);
        t !== null && Pd(t, e, 67108864);
        ph(e, 67108864);
      }
    }
    function hh(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = jd();
        t = bt(t);
        var n = Ei(e, t);
        n !== null && Pd(n, e, t);
        ph(e, t);
      }
    }
    var gh = true;
    function _h(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        O.p = 2;
        yh(e, t, n, r);
      } finally {
        O.p = a;
        D.T = i;
      }
    }
    function vh(e, t, n, r) {
      var i = D.T;
      D.T = null;
      var a = O.p;
      try {
        O.p = 8;
        yh(e, t, n, r);
      } finally {
        O.p = a;
        D.T = i;
      }
    }
    function yh(e, t, n, r) {
      if (gh) {
        var i = bh(r);
        if (i === null) {
          Kf(e, t, r, xh, n);
          Mh(e, r);
        } else if (Ph(i, e, t, n, r)) r.stopPropagation();else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
          for (; i !== null;) {
            var a = It(i);
            if (a !== null) switch (a.tag) {
              case 3:
                if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
                  var o = ut(a.pendingLanes);
                  if (o !== 0) {
                    var s = a;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                      var c = 1 << 31 - rt(o);
                      s.entanglements[1] |= c;
                      o &= ~c;
                    }
                    Ef(a);
                    !(K & 6) && (gd = N() + 500, Df(0, false));
                  }
                }
                break;
              case 31:
              case 13:
                s = Ei(a, 2);
                s !== null && Pd(s, a, 2);
                zd();
                ph(a, 2);
            }
            if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
            i = a;
          }
          i !== null && r.stopPropagation();
        } else Kf(e, t, r, null, n);
      }
    }
    function bh(e) {
      return e = Sn(e), Sh(e);
    }
    var xh = null;
    function Sh(e) {
      if (xh = null, e = Ft(e), e !== null) {
        var t = o(e);
        if (t === null) e = null;else {
          var n = t.tag;
          if (n === 13) {
            if (e = s(t), e !== null) return e;
            e = null;
          } else if (n === 31) {
            if (e = c(t), e !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return xh = e, null;
    }
    function Ch(e) {
      switch (e) {
        case `beforetoggle`:
        case `cancel`:
        case `click`:
        case `close`:
        case `contextmenu`:
        case `copy`:
        case `cut`:
        case `auxclick`:
        case `dblclick`:
        case `dragend`:
        case `dragstart`:
        case `drop`:
        case `focusin`:
        case `focusout`:
        case `input`:
        case `invalid`:
        case `keydown`:
        case `keypress`:
        case `keyup`:
        case `mousedown`:
        case `mouseup`:
        case `paste`:
        case `pause`:
        case `play`:
        case `pointercancel`:
        case `pointerdown`:
        case `pointerup`:
        case `ratechange`:
        case `reset`:
        case `seeked`:
        case `submit`:
        case `toggle`:
        case `touchcancel`:
        case `touchend`:
        case `touchstart`:
        case `volumechange`:
        case `change`:
        case `selectionchange`:
        case `textInput`:
        case `compositionstart`:
        case `compositionend`:
        case `compositionupdate`:
        case `beforeblur`:
        case `afterblur`:
        case `beforeinput`:
        case `blur`:
        case `fullscreenchange`:
        case `fullscreenerror`:
        case `focus`:
        case `hashchange`:
        case `popstate`:
        case `select`:
        case `selectstart`:
          return 2;
        case `drag`:
        case `dragenter`:
        case `dragexit`:
        case `dragleave`:
        case `dragover`:
        case `mousemove`:
        case `mouseout`:
        case `mouseover`:
        case `pointermove`:
        case `pointerout`:
        case `pointerover`:
        case `resize`:
        case `scroll`:
        case `touchmove`:
        case `wheel`:
        case `mouseenter`:
        case `mouseleave`:
        case `pointerenter`:
        case `pointerleave`:
          return 8;
        case `message`:
          switch (Ke()) {
            case qe:
              return 2;
            case Je:
              return 8;
            case Ye:
            case Xe:
              return 32;
            case Ze:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var wh = false,
      Th = null,
      Eh = null,
      Dh = null,
      Oh = new Map(),
      kh = new Map(),
      Ah = [],
      jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
    function Mh(e, t) {
      switch (e) {
        case `focusin`:
        case `focusout`:
          Th = null;
          break;
        case `dragenter`:
        case `dragleave`:
          Eh = null;
          break;
        case `mouseover`:
        case `mouseout`:
          Dh = null;
          break;
        case `pointerover`:
        case `pointerout`:
          Oh.delete(t.pointerId);
          break;
        case `gotpointercapture`:
        case `lostpointercapture`:
          kh.delete(t.pointerId);
      }
    }
    function Nh(e, t, n, r, i, a) {
      return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
      }, t !== null && (t = It(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
    }
    function Ph(e, t, n, r, i) {
      switch (t) {
        case `focusin`:
          return Th = Nh(Th, e, t, n, r, i), true;
        case `dragenter`:
          return Eh = Nh(Eh, e, t, n, r, i), true;
        case `mouseover`:
          return Dh = Nh(Dh, e, t, n, r, i), true;
        case `pointerover`:
          var a = i.pointerId;
          return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), true;
        case `gotpointercapture`:
          return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), true;
      }
      return false;
    }
    function Fh(event) {
      var t = Ft(event.target);
      if (t !== null) {
        var n = o(t);
        if (n !== null) {
          if (t = n.tag, t === 13) {
            if (t = s(n), t !== null) {
              event.blockedOn = t;
              Ct(event.priority, function () {
                hh(n);
              });
              return;
            }
          } else if (t === 31) {
            if (t = c(n), t !== null) {
              event.blockedOn = t;
              Ct(event.priority, function () {
                hh(n);
              });
              return;
            }
          } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            event.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
          }
        }
      }
      event.blockedOn = null;
    }
    function Ih(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length;) {
        var n = bh(e.nativeEvent);
        if (n === null) {
          n = e.nativeEvent;
          var r = new n.constructor(n.type, n);
          xn = r;
          n.target.dispatchEvent(r);
          xn = null;
        } else return t = It(n), t !== null && mh(t), e.blockedOn = n, false;
        t.shift();
      }
      return true;
    }
    function Lh(e, t, n) {
      Ih(e) && n.delete(t);
    }
    function Rh() {
      wh = false;
      Th !== null && Ih(Th) && (Th = null);
      Eh !== null && Ih(Eh) && (Eh = null);
      Dh !== null && Ih(Dh) && (Dh = null);
      Oh.forEach(Lh);
      kh.forEach(Lh);
    }
    function zh(e, n) {
      e.blockedOn === n && (e.blockedOn = null, wh || (wh = true, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
    }
    var Bh = null;
    function Vh(e) {
      Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        Bh === e && (Bh = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            r = e[t + 1],
            i = e[t + 2];
          if (typeof r != `function`) {
            if (Sh(r || n) === null) continue;
            break;
          }
          var a = It(n);
          a !== null && (e.splice(t, 3), t -= 3, $s(a, {
            pending: true,
            data: i,
            method: n.method,
            action: r
          }, r, i));
        }
      }));
    }
    function Hh(e) {
      function t(t) {
        return zh(t, e);
      }
      Th !== null && zh(Th, e);
      Eh !== null && zh(Eh, e);
      Dh !== null && zh(Dh, e);
      Oh.forEach(t);
      kh.forEach(t);
      for (var n = 0; n < Ah.length; n++) {
        var r = Ah[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
      for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) {
        Fh(n);
        n.blockedOn === null && Ah.shift();
      }
      if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
        var i = n[r],
          a = n[r + 1],
          o = i[Et] || null;
        if (typeof a == `function`) o || Vh(n);else if (o) {
          var s = null;
          if (a && a.hasAttribute(`formAction`)) {
            if (i = a, o = a[Et] || null) s = o.formAction;else if (Sh(i) !== null) continue;
          } else s = o.action;
          if (typeof s == `function`) {
            n[r + 1] = s;
          } else {
            n.splice(r, 3);
            r -= 3;
          }
          Vh(n);
        }
      }
    }
    function Uh() {
      function e(e) {
        e.canIntercept && e.info === `react-transition` && e.intercept({
          handler: function () {
            return new Promise(function (e) {
              return i = e;
            });
          },
          focusReset: `manual`,
          scroll: `manual`
        });
      }
      function t() {
        i !== null && (i(), i = null);
        r || setTimeout(n, 20);
      }
      function n() {
        if (!r && !navigation.transition) {
          var e = navigation.currentEntry;
          e && e.url != null && navigation.navigate(e.url, {
            state: e.getState(),
            info: `react-transition`,
            history: `replace`
          });
        }
      }
      if (typeof navigation == `object`) {
        var r = false,
          i = null;
        return navigation.addEventListener(`navigate`, e), navigation.addEventListener(`navigatesuccess`, t), navigation.addEventListener(`navigateerror`, t), setTimeout(n, 100), function () {
          r = true;
          navigation.removeEventListener(`navigate`, e);
          navigation.removeEventListener(`navigatesuccess`, t);
          navigation.removeEventListener(`navigateerror`, t);
          i !== null && (i(), i = null);
        };
      }
    }
    function Wh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.render = Wh.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(i(409));
      var n = t.current;
      dh(n, jd(), e, t, null, null);
    };
    Gh.prototype.unmount = Wh.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        dh(e.current, 2, null, e, null, null);
        zd();
        t[Dt] = null;
      }
    };
    function Gh(e) {
      this._internalRoot = e;
    }
    Gh.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = St();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
        Ah.splice(n, 0, e);
        n === 0 && Fh(e);
      }
    };
    var Kh = n.version;
    if (Kh !== `19.3.0`) throw Error(i(527, Kh, `19.3.0`));
    O.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === undefined) throw typeof e.render == `function` ? Error(i(188)) : (e = Object.keys(e).join(`,`), Error(i(268, e)));
      return e = u(t), e = e === null ? null : d(e), e = e === null ? null : e.stateNode, e;
    };
    var qh = {
      bundleType: 0,
      version: `19.3.0`,
      rendererPackageName: `react-dom`,
      currentDispatcherRef: D,
      reconcilerVersion: `19.3.0`
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
      var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!Jh.isDisabled && Jh.supportsFiber) try {
        et = Jh.inject(qh);
        tt = Jh;
      } catch {}
    }
    event.createRoot = function (e, t) {
      if (!a(e)) throw Error(i(299));
      var n = false,
        r = ``,
        o = Sc,
        s = Cc,
        c = wc;
      return t != null && (true === t.unstable_strictMode && (n = true), t.identifierPrefix !== undefined && (r = t.identifierPrefix), t.onUncaughtError !== undefined && (o = t.onUncaughtError), t.onCaughtError !== undefined && (s = t.onCaughtError), t.onRecoverableError !== undefined && (c = t.onRecoverableError)), t = lh(e, 1, false, null, null, n, r, null, o, s, c, Uh), e[Dt] = t.current, Wf(e), new Wh(t);
    };
  }),
  Oe = t((e, t) => {
    function n() {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
    }
    n();
    t.exports = A();
  }),
  j = e(m(), 1),
  ke = Oe(),
  M = r();
function Ae({
  selectedCategory: e,
  onSelectCategory: t,
  lang: n,
  onToggleLang: r,
  theme: i,
  onToggleTheme: a,
  onOpenSubmitNews: s,
  onOpenBookmarks: c,
  bookmarksCount: u,
  searchQuery: d,
  onSearchChange: p,
  isLoadingLiveNews: m,
  onRefreshLiveNews: h,
  liveCount: v,
  activeCategoryIds: y
}) {
  let [x, S] = (0, j.useState)(false),
    [ee, te] = (0, j.useState)(``),
    [C, w] = (0, j.useState)(false);
  return (0, j.useEffect)(() => {
    let e = () => {
      let e = new Date(),
        t = {
          weekday: `long`,
          year: `numeric`,
          month: `long`,
          day: `numeric`
        },
        r = n === `hi` ? e.toLocaleDateString(`hi-IN`, t) : e.toLocaleDateString(`en-IN`, t);
      te(r);
    };
    e();
    let t = setInterval(e, 6e4);
    return () => clearInterval(t);
  }, [n]), (0, M.jsxs)(`header`, {
    className: `sticky top-0 z-40 w-full max-w-full shadow-md overflow-hidden`,
    children: [(0, M.jsxs)(`div`, {
      className: `bg-gradient-to-r from-red-800 via-brand-700 to-red-900 text-white text-xs px-2.5 sm:px-6 py-1.5 flex items-center justify-between border-b border-red-600/30 w-full overflow-hidden`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center space-x-2 sm:space-x-3 shrink-0`,
        children: [(0, M.jsxs)(`span`, {
          className: `flex items-center gap-1 font-medium text-amber-200`,
          children: [(0, M.jsx)(l, {
            className: `w-3.5 h-3.5 text-amber-300 shrink-0`
          }), (0, M.jsx)(`span`, {
            className: `font-bold`,
            children: `ब्यावर`
          }), (0, M.jsx)(`span`, {
            className: `hidden sm:inline`,
            children: `, राजस्थान`
          })]
        }), (0, M.jsx)(`span`, {
          className: `hidden md:inline text-red-200`,
          children: `|`
        }), (0, M.jsx)(`span`, {
          className: `hidden md:inline text-gray-100`,
          children: ee
        })]
      }), (0, M.jsxs)(`div`, {
        className: `flex items-center space-x-1 sm:space-x-3 shrink-0`,
        children: [(0, M.jsxs)(`button`, {
          onClick: h,
          disabled: m,
          className: `flex items-center gap-1 bg-red-950 hover:bg-black/50 text-white px-1.5 sm:px-2 py-0.5 rounded text-[11px] transition border border-red-500/40 disabled:opacity-50`,
          title: `लाइव खबरें रीफ्रेश करें`,
          children: [(0, M.jsx)(g, {
            className: `w-3 h-3 text-amber-300 ${m ? `animate-spin` : ``}`
          }), (0, M.jsx)(`span`, {
            className: `hidden sm:inline`,
            children: m ? `लोड हो रहा...` : `ताज़ा करें`
          })]
        }), (0, M.jsxs)(`a`, {
          href: `https://wa.me/${O.whatsapp}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%A8%20%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9C%E0%A4%BC%20%E0%A4%8F%E0%A4%9C%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%AA%E0%A4%A8%2F%E0%A4%B8%E0%A4%AE%E0%A4%BE%E0%A4%9A%E0%A4%BE%E0%A4%B0%20%E0%A4%95%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A7%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B8%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A5%8D%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          className: `flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-2 py-0.5 rounded text-[11px] transition shadow-sm`,
          title: `व्हाट्सएप हेल्पलाइन: ${O.phonePrimary}`,
          children: [(0, M.jsx)(_, {
            className: `w-3 h-3`
          }), (0, M.jsx)(`span`, {
            className: `hidden md:inline`,
            children: `हेल्पलाइन:`
          }), (0, M.jsx)(`span`, {
            className: `hidden sm:inline`,
            children: O.phonePrimary
          }), (0, M.jsx)(`span`, {
            className: `sm:hidden font-bold`,
            children: `संपर्क`
          })]
        }), (0, M.jsxs)(`button`, {
          onClick: r,
          className: `flex items-center gap-1 bg-black/20 hover:bg-black/40 px-1.5 sm:px-2 py-0.5 rounded text-[11px] font-semibold tracking-wide transition border border-white/20`,
          title: `भाषा बदलें`,
          children: [(0, M.jsx)(he, {
            className: `w-3 h-3 text-amber-300`
          }), (0, M.jsx)(`span`, {
            children: n === `hi` ? `EN` : `हिंदी`
          })]
        }), (0, M.jsx)(`button`, {
          onClick: a,
          className: `p-1 rounded bg-black/20 hover:bg-black/40 text-amber-200 transition`,
          title: `थीम बदलें`,
          children: i === `dark` ? (0, M.jsx)(ie, {
            className: `w-3.5 h-3.5`
          }) : (0, M.jsx)(f, {
            className: `w-3.5 h-3.5`
          })
        })]
      })]
    }), (0, M.jsx)(`div`, {
      className: `bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors`,
      children: (0, M.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2.5 sm:gap-3 cursor-pointer`,
          onClick: () => t(`all`),
          children: [(0, M.jsx)(`div`, {
            className: `w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white dark:bg-gray-800 p-1 shadow-md border border-gray-200 dark:border-gray-700 shrink-0 overflow-hidden flex items-center justify-center group hover:scale-105 transition-transform`,
            children: (0, M.jsx)(`img`, {
              src: `/logo.png`,
              alt: `Aryan News Agency Logo`,
              className: `w-9 h-9 sm:w-10 sm:h-10 object-contain`
            })
          }), (0, M.jsxs)(`div`, {
            children: [(0, M.jsx)(`div`, {
              className: `flex items-center gap-2`,
              children: (0, M.jsx)(`h1`, {
                className: `text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-gray-950 dark:text-white font-hindi leading-tight`,
                children: n === `hi` ? O.nameHi : O.nameEn
              })
            }), (0, M.jsxs)(`p`, {
              className: `text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 font-medium`,
              children: [n === `hi` ? O.taglineHi : O.taglineEn, (0, M.jsx)(`span`, {
                className: `text-red-600 dark:text-red-400 font-semibold ml-1.5 hidden sm:inline`,
                children: `• ब्यावर (राजस्थान)`
              })]
            })]
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, M.jsx)(`div`, {
            className: `relative`,
            children: C ? (0, M.jsxs)(`div`, {
              className: `flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 border border-red-500`,
              children: [(0, M.jsx)(b, {
                className: `w-4 h-4 text-gray-400 mr-2`
              }), (0, M.jsx)(`input`, {
                type: `text`,
                value: d,
                onChange: event => p(event.target.value),
                placeholder: `खबर या कीवर्ड खोजें...`,
                className: `bg-transparent text-sm text-gray-800 dark:text-gray-100 focus:outline-none w-32 sm:w-48`,
                autoFocus: true
              }), (0, M.jsx)(`button`, {
                onClick: () => w(false),
                className: `text-gray-400 hover:text-gray-600 ml-1`,
                children: (0, M.jsx)(ue, {
                  className: `w-3.5 h-3.5`
                })
              })]
            }) : (0, M.jsx)(`button`, {
              onClick: () => w(true),
              className: `p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition`,
              title: `खोजें`,
              children: (0, M.jsx)(b, {
                className: `w-5 h-5`
              })
            })
          }), (0, M.jsxs)(`button`, {
            onClick: c,
            className: `relative p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition`,
            title: `सहेजी गई खबरें`,
            children: [(0, M.jsx)(o, {
              className: `w-5 h-5`
            }), u > 0 && (0, M.jsx)(`span`, {
              className: `absolute top-1 right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center`,
              children: u
            })]
          }), (0, M.jsxs)(`button`, {
            onClick: s,
            className: `hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-brand-700 hover:from-red-700 hover:to-brand-800 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-sm transition transform active:scale-95`,
            children: [(0, M.jsx)(ye, {
              className: `w-3.5 h-3.5`
            }), (0, M.jsx)(`span`, {
              children: `अपनी खबर भेजें`
            })]
          }), (0, M.jsx)(`button`, {
            onClick: () => S(!x),
            className: `lg:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition`,
            children: x ? (0, M.jsx)(ue, {
              className: `w-6 h-6`
            }) : (0, M.jsx)(E, {
              className: `w-6 h-6`
            })
          })]
        })]
      })
    }), (0, M.jsx)(`nav`, {
      className: `bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 overflow-x-auto no-scrollbar py-1 w-full max-w-full`,
      children: (0, M.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-2 sm:px-6 flex items-center gap-1 sm:gap-2 whitespace-nowrap min-w-max`,
        children: D.filter(e => [`all`, `beawar`, `national`].includes(e.id)).map(r => {
          let i = e === r.id;
          return (0, M.jsxs)(`button`, {
            onClick: () => {
              t(r.id);
              S(false);
            },
            className: `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${i ? `bg-red-600 text-white shadow-sm shadow-red-500/30` : `text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-red-600`}`,
            children: [r.isHot && (0, M.jsx)(`span`, {
              className: `w-2 h-2 rounded-full bg-amber-400 animate-pulse`
            }), (0, M.jsx)(`span`, {
              children: n === `hi` ? r.nameHi : r.nameEn
            })]
          }, r.id);
        })
      })
    }), x && (0, M.jsxs)(`div`, {
      className: `lg:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 shadow-xl`,
      children: [(0, M.jsx)(`div`, {
        className: `text-xs font-bold text-gray-400 uppercase tracking-wider mb-2`,
        children: `सभी श्रेणियां (Categories)`
      }), (0, M.jsx)(`div`, {
        className: `grid grid-cols-2 gap-2 mb-3`,
        children: D.filter(e => [`all`, `beawar`, `national`].includes(e.id)).map(r => (0, M.jsx)(`button`, {
          onClick: () => {
            t(r.id);
            S(false);
          },
          className: `text-left p-2 rounded-lg text-sm font-medium transition ${e === r.id ? `bg-red-50 dark:bg-red-950/50 text-red-600 dark:text-red-400 font-bold` : `text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}`,
          children: n === `hi` ? r.nameHi : r.nameEn
        }, r.id))
      }), (0, M.jsxs)(`div`, {
        className: `pt-2 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-2`,
        children: [(0, M.jsxs)(`button`, {
          onClick: () => {
            s();
            S(false);
          },
          className: `w-full flex items-center justify-center gap-2 bg-red-600 text-white font-bold py-2 rounded-lg text-sm`,
          children: [(0, M.jsx)(ye, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `अपनी खबर या फोटो भेजें`
          })]
        }), (0, M.jsxs)(`a`, {
          href: `https://wa.me/${O.whatsapp}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%A8%20%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9C%E0%A4%BC%20%E0%A4%8F%E0%A4%9C%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%AA%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4`,
          target: `_blank`,
          rel: `noopener noreferrer`,
          className: `w-full flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2 rounded-lg text-sm`,
          children: [(0, M.jsx)(_, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `विज्ञापन के लिए संपर्क करें`
          })]
        })]
      })]
    })]
  });
}
function je({
  items: e = [],
  onSelectHeadline: t
}) {
  let [n, r] = (0, j.useState)(0);
  if ((0, j.useEffect)(() => {
    if (!e || e.length === 0) return;
    let t = setInterval(() => {
      r(t => (t + 1) % e.length);
    }, 5500);
    return () => clearInterval(t);
  }, [e]), !e || e.length === 0) return null;
  let i = () => {
      r(t => (t - 1 + e.length) % e.length);
    },
    a = () => {
      r(t => (t + 1) % e.length);
    },
    o = e[n];
  return (0, M.jsx)(`div`, {
    className: `bg-red-50 dark:bg-red-950/40 border-b border-red-200 dark:border-red-900/50`,
    children: (0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6 py-2 flex items-center justify-between gap-2`,
      children: [(0, M.jsx)(`div`, {
        className: `flex items-center gap-1 shrink-0 bg-[#b91c1c] text-white font-black text-xs px-2.5 py-0.5 rounded shadow-xs`,
        children: (0, M.jsx)(`span`, {
          children: `ताज़ा`
        })
      }), (0, M.jsx)(`div`, {
        className: `flex-1 overflow-hidden`,
        children: (0, M.jsx)(`div`, {
          onClick: () => t && t(o),
          className: `text-xs sm:text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-red-600 dark:hover:text-red-400 cursor-pointer truncate transition-all duration-500 animate-in fade-in slide-in-from-right-4 font-hindi`,
          children: o
        }, n)
      }), (0, M.jsxs)(`div`, {
        className: `flex items-center gap-1 shrink-0 text-gray-500 dark:text-gray-400 text-xs`,
        children: [(0, M.jsxs)(`span`, {
          className: `hidden sm:inline font-mono`,
          children: [n + 1, `/`, e.length]
        }), (0, M.jsx)(`button`, {
          onClick: i,
          className: `p-1 hover:bg-red-100 dark:hover:bg-red-900/50 rounded text-gray-700 dark:text-gray-300 transition`,
          title: `पिछली खबर`,
          children: (0, M.jsx)(C, {
            className: `w-4 h-4`
          })
        }), (0, M.jsx)(`button`, {
          onClick: a,
          className: `p-1 hover:bg-red-100 dark:hover:bg-red-900/50 rounded text-gray-700 dark:text-gray-300 transition`,
          title: `अगली खबर`,
          children: (0, M.jsx)(ae, {
            className: `w-4 h-4`
          })
        })]
      })]
    })
  });
}
function Me({
  rates: e = [],
  lastUpdatedAt: t = null,
  enabled: n = true
}) {
  let r = (e || []).filter(e => e && e.price && String(e.price).trim() !== `` && String(e.price).trim() !== `0`);
  if (!n || !t || r.length === 0) return null;
  let i = false,
    a = ``;
  if (t) try {
    let e = new Date(t);
    (new Date().getTime() - e.getTime()) / 36e5 >= 24 && (i = true);
    a = e.toLocaleDateString(`hi-IN`, {
      day: `numeric`,
      month: `short`,
      hour: `2-digit`,
      minute: `2-digit`,
      hour12: true
    });
  } catch {
    i = true;
  } else i = true;
  return (0, M.jsxs)(`div`, {
    className: `w-full bg-[#0a1128] border-b border-amber-500/20 py-2 overflow-hidden relative select-none shadow-inner`,
    children: [(0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-4 flex items-center`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center gap-2 pr-3 sm:pr-4 border-r border-amber-500/30 shrink-0 mr-3`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-gray-950 px-2.5 py-0.5 rounded-md font-black text-[11px] shadow-sm font-hindi`,
          children: [(0, M.jsx)(`span`, {
            children: `🪙`
          }), (0, M.jsx)(`span`, {
            children: `ब्यावर सर्राफा भाव`
          })]
        }), i ? (0, M.jsxs)(`span`, {
          className: `hidden md:inline-flex items-center gap-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded text-[10px] font-hindi font-bold`,
          children: [(0, M.jsx)(le, {
            className: `w-3 h-3 text-amber-400`
          }), (0, M.jsx)(`span`, {
            children: `आज के भाव अपडेट होने बाकी`
          })]
        }) : (0, M.jsxs)(`span`, {
          className: `hidden md:inline-flex items-center gap-1 text-gray-400 text-[10px] font-mono`,
          children: [(0, M.jsx)(re, {
            className: `w-3 h-3 text-emerald-400`
          }), (0, M.jsxs)(`span`, {
            children: [`अपडेट: `, a]
          })]
        })]
      }), (0, M.jsx)(`div`, {
        className: `flex-1 overflow-hidden relative`,
        children: (0, M.jsx)(`div`, {
          className: `flex animate-marquee whitespace-nowrap items-center hover:pause-animation`,
          children: [...r, ...r, ...r].map((e, t) => (0, M.jsxs)(`div`, {
            className: `inline-flex items-center gap-2 bg-[#101d42] border border-amber-500/20 rounded-lg px-3 py-1 mx-2 shrink-0 shadow-sm`,
            children: [(0, M.jsx)(`span`, {
              className: `text-xs font-bold text-amber-300 font-hindi`,
              children: e.item
            }), (0, M.jsxs)(`span`, {
              className: `text-[10px] text-gray-400 font-hindi`,
              children: [`(`, e.unit, `)`]
            }), (0, M.jsxs)(`span`, {
              className: `text-xs font-black text-white font-mono bg-black/40 px-2 py-0.5 rounded border border-white/10`,
              children: [`₹`, e.price]
            })]
          }, t))
        })
      }), i && (0, M.jsx)(`span`, {
        className: `md:hidden shrink-0 ml-2 text-[10px] text-amber-400 font-hindi bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/30`,
        children: `अपडेट बाकी`
      })]
    }), (0, M.jsx)(`style`, {
      children: `
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `
    })]
  });
}
function Ne(e, t) {
  this.v = e;
  this.k = t;
}
function Pe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Fe(e) {
  if (Array.isArray(e)) return e;
}
function Ie(e, t) {
  var n = e == null ? null : typeof Symbol < `u` && e[Symbol.iterator] || e[`@@iterator`];
  if (n != null) {
    var r,
      i,
      a,
      o,
      s = [],
      c = true,
      l = false;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = false;
      } else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = true);
    } catch (e) {
      l = true;
      i = e;
    } finally {
      try {
        if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
      } finally {
        if (l) throw i;
      }
    }
    return s;
  }
}
function Le() {
  throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Re(e, t) {
  return Fe(e) || Ie(e, t) || ze(e, t) || Le();
}
function ze(e, t) {
  if (e) {
    if (typeof e == `string`) return Pe(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === `Object` && e.constructor && (n = e.constructor.name), n === `Map` || n === `Set` ? Array.from(e) : n === `Arguments` || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : undefined;
  }
}
function Be(e) {
  var t, n;
  function r(t, n) {
    try {
      var a = e[t](n),
        o = a.value,
        s = o instanceof Ne;
      Promise.resolve(s ? o.v : o).then(function (n) {
        if (s) {
          var c = t === `return` && o.k ? t : `next`;
          if (!o.k || n.done) return r(c, n);
          n = e[c](n).value;
        }
        i(!!a.done, n);
      }, function (e) {
        r(`throw`, e);
      });
    } catch (e) {
      i(2, e);
    }
  }
  function i(e, i) {
    if (e === 2) {
      t.reject(i);
    } else {
      t.resolve({
        value: i,
        done: e
      });
    }
    if (t = t.next) {
      r(t.key, t.arg);
    } else {
      n = null;
    }
  }
  this._invoke = function (e, i) {
    return new Promise(function (a, o) {
      var s = {
        key: e,
        arg: i,
        resolve: a,
        reject: o,
        next: null
      };
      if (n) {
        n = n.next = s;
      } else {
        t = n = s;
        r(e, i);
      }
    });
  };
  typeof e.return != `function` && (this.return = undefined);
}
Be.prototype[typeof Symbol == `function` && Symbol.asyncIterator || `@@asyncIterator`] = function () {
  return this;
};
Be.prototype.next = function (e) {
  return this._invoke(`next`, e);
};
Be.prototype.throw = function (e) {
  return this._invoke(`throw`, e);
};
Be.prototype.return = function (e) {
  return this._invoke(`return`, e);
};
var Ve = Object.entries,
  He = Object.setPrototypeOf,
  Ue = Object.isFrozen,
  We = Object.getPrototypeOf,
  Ge = Object.getOwnPropertyDescriptor,
  N = Object.freeze,
  Ke = Object.seal,
  qe = Object.create,
  Je = typeof Reflect < `u` && Reflect,
  Ye = Je.apply,
  Xe = Je.construct;
N ||= function (e) {
  return e;
};
Ke ||= function (e) {
  return e;
};
Ye ||= function (e, t) {
  var n = [...arguments].slice(2);
  return e.apply(t, n);
};
Xe ||= function (e) {
  return new e(...[...arguments].slice(1));
};
var Ze = P(Array.prototype.forEach);
Array.prototype.indexOf;
var Qe = P(Array.prototype.lastIndexOf),
  $e = P(Array.prototype.pop),
  et = P(Array.prototype.push);
Array.prototype.slice;
var tt = P(Array.prototype.splice),
  nt = Array.isArray,
  rt = P(String.prototype.toLowerCase),
  it = P(String.prototype.toString),
  at = P(String.prototype.match),
  ot = P(String.prototype.replace),
  st = P(String.prototype.indexOf),
  ct = P(String.prototype.trim),
  lt = P(Number.prototype.toString),
  ut = P(Boolean.prototype.toString),
  dt = typeof BigInt > `u` ? null : P(BigInt.prototype.toString),
  ft = typeof Symbol > `u` ? null : P(Symbol.prototype.toString),
  pt = P(Object.prototype.hasOwnProperty),
  mt = P(Object.prototype.toString),
  ht = P(RegExp.prototype.test),
  gt = _t(TypeError);
function P(e) {
  return function (t) {
    t instanceof RegExp && (t.lastIndex = 0);
    var n = [...arguments].slice(1);
    return Ye(e, t, n);
  };
}
function _t(e) {
  return function () {
    return Xe(e, [...arguments]);
  };
}
function F(e, t) {
  let n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : rt;
  if (He && He(e, null), !nt(t)) return e;
  let r = t.length;
  for (; r--;) {
    let i = t[r];
    if (typeof i == `string`) {
      let e = n(i);
      e !== i && (Ue(t) || (t[r] = e), i = e);
    }
    e[i] = true;
  }
  return e;
}
function vt(e) {
  for (let t = 0; t < e.length; t++) pt(e, t) || (e[t] = null);
  return e;
}
function yt(e) {
  let t = qe(null);
  for (let r of Ve(e)) {
    var n = Re(r, 2);
    let i = n[0],
      a = n[1];
    pt(e, i) && (t[i] = nt(a) ? vt(a) : a && typeof a == `object` && a.constructor === Object ? yt(a) : a);
  }
  return t;
}
function bt(e) {
  switch (typeof e) {
    case `string`:
      return e;
    case `number`:
      return lt(e);
    case `boolean`:
      return ut(e);
    case `bigint`:
      return dt ? dt(e) : `0`;
    case `symbol`:
      return ft ? ft(e) : `Symbol()`;
    case `undefined`:
      return mt(e);
    case `function`:
    case `object`:
      {
        if (e === null) return mt(e);
        let t = e,
          n = xt(t, `toString`);
        if (typeof n == `function`) {
          let e = n(t);
          return typeof e == `string` ? e : mt(e);
        }
        return mt(e);
      }
    default:
      return mt(e);
  }
}
function xt(e, t) {
  for (; e !== null;) {
    let n = Ge(e, t);
    if (n) {
      if (n.get) return P(n.get);
      if (typeof n.value == `function`) return P(n.value);
    }
    e = We(e);
  }
  function n() {
    return null;
  }
  return n;
}
function St(e) {
  try {
    return ht(e, ``), true;
  } catch {
    return false;
  }
}
var Ct = N(`a.abbr.acronym.address.area.article.aside.audio.b.bdi.bdo.big.blink.blockquote.body.br.button.canvas.caption.center.cite.code.col.colgroup.content.data.datalist.dd.decorator.del.details.dfn.dialog.dir.div.dl.dt.element.em.fieldset.figcaption.figure.font.footer.form.h1.h2.h3.h4.h5.h6.head.header.hgroup.hr.html.i.img.input.ins.kbd.label.legend.li.main.map.mark.marquee.menu.menuitem.meter.nav.nobr.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.shadow.slot.small.source.spacer.span.strike.strong.style.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.track.tt.u.ul.var.video.wbr`.split(`.`)),
  wt = N(`svg.a.altglyph.altglyphdef.altglyphitem.animatecolor.animatemotion.animatetransform.circle.clippath.defs.desc.ellipse.enterkeyhint.exportparts.filter.font.g.glyph.glyphref.hkern.image.inputmode.line.lineargradient.marker.mask.metadata.mpath.part.path.pattern.polygon.polyline.radialgradient.rect.stop.style.switch.symbol.text.textpath.title.tref.tspan.view.vkern`.split(`.`)),
  Tt = N([`feBlend`, `feColorMatrix`, `feComponentTransfer`, `feComposite`, `feConvolveMatrix`, `feDiffuseLighting`, `feDisplacementMap`, `feDistantLight`, `feDropShadow`, `feFlood`, `feFuncA`, `feFuncB`, `feFuncG`, `feFuncR`, `feGaussianBlur`, `feImage`, `feMerge`, `feMergeNode`, `feMorphology`, `feOffset`, `fePointLight`, `feSpecularLighting`, `feSpotLight`, `feTile`, `feTurbulence`]),
  Et = N([`animate`, `color-profile`, `cursor`, `discard`, `font-face`, `font-face-format`, `font-face-name`, `font-face-src`, `font-face-uri`, `foreignobject`, `hatch`, `hatchpath`, `mesh`, `meshgradient`, `meshpatch`, `meshrow`, `missing-glyph`, `script`, `set`, `solidcolor`, `unknown`, `use`]),
  Dt = N(`math.menclose.merror.mfenced.mfrac.mglyph.mi.mlabeledtr.mmultiscripts.mn.mo.mover.mpadded.mphantom.mroot.mrow.ms.mspace.msqrt.mstyle.msub.msup.msubsup.mtable.mtd.mtext.mtr.munder.munderover.mprescripts`.split(`.`)),
  Ot = N([`maction`, `maligngroup`, `malignmark`, `mlongdiv`, `mscarries`, `mscarry`, `msgroup`, `mstack`, `msline`, `msrow`, `semantics`, `annotation`, `annotation-xml`, `mprescripts`, `none`]),
  kt = N([`#text`]),
  At = N(`accept.action.align.alt.autocapitalize.autocomplete.autopictureinpicture.autoplay.background.bgcolor.border.capture.cellpadding.cellspacing.checked.cite.class.clear.color.cols.colspan.command.commandfor.controls.controlslist.coords.crossorigin.datetime.decoding.default.dir.disabled.disablepictureinpicture.disableremoteplayback.download.draggable.enctype.enterkeyhint.exportparts.face.for.headers.height.hidden.high.href.hreflang.id.inert.inputmode.integrity.ismap.kind.label.lang.list.loading.loop.low.max.maxlength.media.method.min.minlength.multiple.muted.name.nonce.noshade.novalidate.nowrap.open.optimum.part.pattern.placeholder.playsinline.popover.popovertarget.popovertargetaction.poster.preload.pubdate.radiogroup.readonly.rel.required.rev.reversed.role.rows.rowspan.spellcheck.scope.selected.shape.size.sizes.slot.span.srclang.start.src.srcset.step.style.summary.tabindex.title.translate.type.usemap.valign.value.width.wrap.xmlns`.split(`.`)),
  jt = N(`accent-height.accumulate.additive.alignment-baseline.amplitude.ascent.attributename.attributetype.azimuth.basefrequency.baseline-shift.begin.bias.by.class.clip.clippathunits.clip-path.clip-rule.color.color-interpolation.color-interpolation-filters.color-profile.color-rendering.cx.cy.d.dx.dy.diffuseconstant.direction.display.divisor.dominant-baseline.dur.edgemode.elevation.end.exponent.fill.fill-opacity.fill-rule.filter.filterunits.flood-color.flood-opacity.font-family.font-size.font-size-adjust.font-stretch.font-style.font-variant.font-weight.fx.fy.g1.g2.glyph-name.glyphref.gradientunits.gradienttransform.height.href.id.image-rendering.in.in2.intercept.k.k1.k2.k3.k4.kerning.keypoints.keysplines.keytimes.lang.lengthadjust.letter-spacing.kernelmatrix.kernelunitlength.lighting-color.local.marker-end.marker-mid.marker-start.markerheight.markerunits.markerwidth.maskcontentunits.maskunits.max.mask.mask-type.media.method.mode.min.name.numoctaves.offset.operator.opacity.order.orient.orientation.origin.overflow.paint-order.path.pathlength.patterncontentunits.patterntransform.patternunits.pointer-events.points.preservealpha.preserveaspectratio.primitiveunits.r.rx.ry.radius.refx.refy.repeatcount.repeatdur.restart.result.rotate.scale.seed.shape-rendering.slope.specularconstant.specularexponent.spreadmethod.startoffset.stddeviation.stitchtiles.stop-color.stop-opacity.stroke-dasharray.stroke-dashoffset.stroke-linecap.stroke-linejoin.stroke-miterlimit.stroke-opacity.stroke.stroke-width.style.surfacescale.systemlanguage.tabindex.tablevalues.targetx.targety.transform.transform-origin.text-anchor.text-decoration.text-orientation.text-rendering.textlength.type.u1.u2.unicode.values.vector-effect.viewbox.visibility.version.vert-adv-y.vert-origin-x.vert-origin-y.width.word-spacing.wrap.writing-mode.xchannelselector.ychannelselector.x.x1.x2.xmlns.y.y1.y2.z.zoomandpan`.split(`.`)),
  Mt = N(`accent.accentunder.align.bevelled.close.columnalign.columnlines.columnspacing.columnspan.denomalign.depth.dir.display.displaystyle.encoding.fence.frame.height.href.id.largeop.length.linethickness.lquote.lspace.mathbackground.mathcolor.mathsize.mathvariant.maxsize.minsize.movablelimits.notation.numalign.open.rowalign.rowlines.rowspacing.rowspan.rspace.rquote.scriptlevel.scriptminsize.scriptsizemultiplier.selection.separator.separators.stretchy.subscriptshift.supscriptshift.symmetric.voffset.width.xmlns`.split(`.`)),
  Nt = N([`xlink:href`, `xml:id`, `xlink:title`, `xml:space`, `xmlns:xlink`]),
  Pt = Ke(/{{[\w\W]*|^[\w\W]*}}/g),
  Ft = Ke(/<%[\w\W]*|^[\w\W]*%>/g),
  It = Ke(/\${[\w\W]*/g),
  Lt = Ke(/^data-[\-\w.\u00B7-\uFFFF]+$/),
  Rt = Ke(/^aria-[\-\w]+$/),
  zt = Ke(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
  Bt = Ke(/^(?:\w+script|data):/i),
  Vt = Ke(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
  Ht = Ke(/^html$/i),
  Ut = Ke(/^[a-z][.\w]*(-[.\w]+)+$/i),
  Wt = Ke(/<[/\w!]/g),
  Gt = Ke(/<[/\w]/g),
  Kt = Ke(/<\/no(script|embed|frames)/i),
  qt = Ke(/\/>/i),
  Jt = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    entityNode: 6,
    processingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12
  },
  I = [`style`, `script`, `xmp`, `iframe`, `noembed`, `noframes`, `plaintext`, `noscript`],
  Yt = N(F({}, I)),
  Xt = function () {
    let e = {};
    return Ze(I, t => {
      e[t] = Ke(RegExp(`</` + t + `(?=[\\t\\n\\f\\r />])`, `i`));
    }), N(e);
  }(),
  Zt = function () {
    return typeof window > `u` ? null : window;
  },
  Qt = function (e, t) {
    if (typeof e != `object` || typeof e.createPolicy != `function`) return null;
    let n = null,
      r = `data-tt-policy-suffix`;
    t && t.hasAttribute(r) && (n = t.getAttribute(r));
    let i = `dompurify` + (n ? `#` + n : ``);
    try {
      return e.createPolicy(i, {
        createHTML(e) {
          return e;
        },
        createScriptURL(e) {
          return e;
        }
      });
    } catch {
      return console.warn(`TrustedTypes policy ` + i + ` could not be created.`), null;
    }
  },
  $t = function () {
    return {
      afterSanitizeAttributes: [],
      afterSanitizeElements: [],
      afterSanitizeShadowDOM: [],
      beforeSanitizeAttributes: [],
      beforeSanitizeElements: [],
      beforeSanitizeShadowDOM: [],
      uponSanitizeAttribute: [],
      uponSanitizeElement: [],
      uponSanitizeShadowNode: []
    };
  },
  en = function (e, t, n, r) {
    return pt(e, t) && nt(e[t]) ? F(r.base ? yt(r.base) : {}, e[t], r.transform) : n;
  },
  tn = function (e, t, n) {
    let r = pt(e, t) ? e[t] : undefined;
    return r && typeof r == `object` ? yt(r) : n();
  };
function nn() {
  let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Zt(),
    t = e => nn(e);
  if (t.version = `3.4.16`, t.removed = [], !e || !e.document || e.document.nodeType !== Jt.document || !e.Element) return t.isSupported = false, t;
  let n = e.document,
    r = n,
    i = r.currentScript;
  e.DocumentFragment;
  let a = e.HTMLTemplateElement,
    o = e.Node,
    s = e.Element,
    c = e.NodeFilter;
  e.NamedNodeMap === undefined && (e.NamedNodeMap || e.MozNamedAttrMap);
  e.HTMLFormElement;
  let l = e.DOMParser,
    u = e.trustedTypes,
    d = s.prototype,
    f = xt(d, `cloneNode`),
    p = xt(d, `remove`),
    m = xt(d, `removeAttributeNode`),
    h = xt(d, `nextSibling`),
    g = xt(d, `childNodes`),
    _ = xt(d, `parentNode`),
    v = xt(d, `shadowRoot`),
    y = xt(d, `attributes`),
    b = o && o.prototype ? xt(o.prototype, `nodeType`) : null,
    x = o && o.prototype ? xt(o.prototype, `nodeName`) : null,
    S = o && o.prototype ? xt(o.prototype, `ownerDocument`) : null,
    ee = function (e) {
      return b ? b(e) : e.nodeType;
    },
    te = function (e) {
      return x ? x(e) : e.nodeName;
    };
  if (typeof a == `function`) {
    let e = n.createElement(`template`);
    e.content && e.content.ownerDocument && (n = e.content.ownerDocument);
  }
  let C,
    w = ``,
    ne,
    re = false,
    ie = 0,
    ae = function () {
      if (ie > 0) throw gt(`A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.`);
    },
    oe = function (e) {
      ae();
      ie++;
      try {
        return C.createHTML(e);
      } finally {
        ie--;
      }
    },
    se = function (e) {
      ae();
      ie++;
      try {
        return C.createScriptURL(e);
      } finally {
        ie--;
      }
    },
    ce = function () {
      return re ||= (ne = Qt(u, i), true), ne;
    },
    le = n,
    ue = le.implementation,
    de = le.createNodeIterator,
    fe = le.createDocumentFragment,
    pe = le.getElementsByTagName,
    me = r.importNode,
    T = $t();
  t.isSupported = typeof Ve == `function` && typeof _ == `function` && ue && ue.createHTMLDocument !== undefined;
  let he = Pt,
    ge = Ft,
    _e = It,
    ve = Lt,
    ye = Rt,
    be = Bt,
    xe = Vt,
    E = Ut,
    D = zt,
    O = null,
    Se = F({}, [...Ct, ...wt, ...Tt, ...Dt, ...kt]),
    k = null,
    Ce = F({}, [...At, ...jt, ...Mt, ...Nt]),
    we = Object.seal(qe(null, {
      tagNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeNameCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: false
      }
    })),
    Te = null,
    Ee = null,
    De = Object.seal(qe(null, {
      tagCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      },
      attributeCheck: {
        writable: true,
        configurable: false,
        enumerable: true,
        value: null
      }
    })),
    A = true,
    Oe = true,
    j = false,
    ke = true,
    M = false,
    Ae = true,
    je = false,
    Me = false,
    Ne = null,
    Pe = null,
    Fe = false,
    Ie = false,
    Le = false,
    Re = false,
    ze = true,
    Be = false,
    He = `user-content-`,
    Ue = true,
    We = false,
    Ge = {},
    Je = null,
    Ye = F({}, `annotation-xml.audio.colgroup.desc.foreignobject.head.iframe.math.mi.mn.mo.ms.mtext.noembed.noframes.noscript.plaintext.script.selectedcontent.style.svg.template.thead.title.video.xmp`.split(`.`)),
    Xe = null,
    lt = F({}, [`audio`, `video`, `img`, `source`, `image`, `track`]),
    ut = null,
    dt = F({}, [`alt`, `class`, `for`, `id`, `label`, `name`, `pattern`, `placeholder`, `role`, `summary`, `title`, `value`, `style`, `xmlns`]),
    ft = `http://www.w3.org/1998/Math/MathML`,
    mt = `http://www.w3.org/2000/svg`,
    P = `http://www.w3.org/1999/xhtml`,
    _t = P,
    vt = false,
    I = null,
    rn = F({}, [ft, mt, P], it),
    an = N([`mi`, `mo`, `mn`, `ms`, `mtext`]),
    on = F({}, an),
    sn = N([`annotation-xml`]),
    cn = F({}, sn),
    ln = F({}, [`title`, `style`, `font`, `a`, `script`]),
    un = null,
    dn = [`application/xhtml+xml`, `text/html`],
    L = null,
    fn = null,
    pn = n.createElement(`form`),
    mn = function (e) {
      return e instanceof RegExp || e instanceof Function;
    },
    hn = function () {
      let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (fn && fn === e) return;
      (!e || typeof e != `object`) && (e = {});
      e = yt(e);
      un = dn.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? `text/html` : e.PARSER_MEDIA_TYPE;
      L = un === `application/xhtml+xml` ? it : rt;
      O = en(e, `ALLOWED_TAGS`, Se, {
        transform: L
      });
      k = en(e, `ALLOWED_ATTR`, Ce, {
        transform: L
      });
      I = en(e, `ALLOWED_NAMESPACES`, rn, {
        transform: it
      });
      ut = en(e, `ADD_URI_SAFE_ATTR`, dt, {
        transform: L,
        base: dt
      });
      Xe = en(e, `ADD_DATA_URI_TAGS`, lt, {
        transform: L,
        base: lt
      });
      Je = en(e, `FORBID_CONTENTS`, Ye, {
        transform: L
      });
      Te = en(e, `FORBID_TAGS`, yt({}), {
        transform: L
      });
      Ee = en(e, `FORBID_ATTR`, yt({}), {
        transform: L
      });
      Ge = pt(e, `USE_PROFILES`) ? e.USE_PROFILES && typeof e.USE_PROFILES == `object` ? yt(e.USE_PROFILES) : e.USE_PROFILES : false;
      A = e.ALLOW_ARIA_ATTR !== false;
      Oe = e.ALLOW_DATA_ATTR !== false;
      j = e.ALLOW_UNKNOWN_PROTOCOLS || false;
      ke = e.ALLOW_SELF_CLOSE_IN_ATTR !== false;
      M = e.SAFE_FOR_TEMPLATES || false;
      Ae = e.SAFE_FOR_XML !== false;
      je = e.WHOLE_DOCUMENT || false;
      Ie = e.RETURN_DOM || false;
      Le = e.RETURN_DOM_FRAGMENT || false;
      Re = e.RETURN_TRUSTED_TYPE || false;
      Fe = e.FORCE_BODY || false;
      ze = e.SANITIZE_DOM !== false;
      Be = e.SANITIZE_NAMED_PROPS || false;
      Ue = e.KEEP_CONTENT !== false;
      We = e.IN_PLACE || false;
      D = St(e.ALLOWED_URI_REGEXP) ? e.ALLOWED_URI_REGEXP : zt;
      _t = typeof e.NAMESPACE == `string` ? e.NAMESPACE : P;
      on = tn(e, `MATHML_TEXT_INTEGRATION_POINTS`, () => F({}, an));
      cn = tn(e, `HTML_INTEGRATION_POINTS`, () => F({}, sn));
      let t = tn(e, `CUSTOM_ELEMENT_HANDLING`, () => qe(null));
      if (we = qe(null), pt(t, `tagNameCheck`) && mn(t.tagNameCheck) && (we.tagNameCheck = t.tagNameCheck), pt(t, `attributeNameCheck`) && mn(t.attributeNameCheck) && (we.attributeNameCheck = t.attributeNameCheck), pt(t, `allowCustomizedBuiltInElements`) && typeof t.allowCustomizedBuiltInElements == `boolean` && (we.allowCustomizedBuiltInElements = t.allowCustomizedBuiltInElements), Ke(we), M && (Oe = false), Le && (Ie = true), Ge && (O = F({}, kt), k = qe(null), Ge.html === true && (F(O, Ct), F(k, At)), Ge.svg === true && (F(O, wt), F(k, jt), F(k, Nt)), Ge.svgFilters === true && (F(O, Tt), F(k, jt), F(k, Nt)), Ge.mathMl === true && (F(O, Dt), F(k, Mt), F(k, Nt))), De.tagCheck = null, De.attributeCheck = null, pt(e, `ADD_TAGS`) && (typeof e.ADD_TAGS == `function` ? De.tagCheck = e.ADD_TAGS : nt(e.ADD_TAGS) && (O === Se && (O = yt(O)), F(O, e.ADD_TAGS, L))), pt(e, `ADD_ATTR`) && (typeof e.ADD_ATTR == `function` ? De.attributeCheck = e.ADD_ATTR : nt(e.ADD_ATTR) && (k === Ce && (k = yt(k)), F(k, e.ADD_ATTR, L))), pt(e, `ADD_FORBID_CONTENTS`) && nt(e.ADD_FORBID_CONTENTS) && (Je === Ye && (Je = yt(Je)), F(Je, e.ADD_FORBID_CONTENTS, L)), Ue && (O[`#text`] = true), je && F(O, [`html`, `head`, `body`]), O.table && (F(O, [`tbody`]), delete Te.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != `function`) throw gt(`TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.`);
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != `function`) throw gt(`TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.`);
        let t = C;
        C = e.TRUSTED_TYPES_POLICY;
        try {
          w = oe(``);
        } catch (e) {
          throw C = t, e;
        }
      } else if (e.TRUSTED_TYPES_POLICY === null) {
        C = undefined;
        w = ``;
      } else {
        C === undefined && (C = ce());
        C && typeof w == `string` && (w = oe(``));
      }
      N && N(e);
      fn = e;
    },
    gn = F({}, [...wt, ...Tt, ...Et]),
    _n = F({}, [...Dt, ...Ot]),
    vn = function (e, t, n) {
      return t.namespaceURI === P ? e === `svg` : t.namespaceURI === ft ? e === `svg` && (n === `annotation-xml` || on[n]) : !!gn[e];
    },
    yn = function (e, t, n) {
      return t.namespaceURI === P ? e === `math` : t.namespaceURI === mt ? e === `math` && cn[n] : !!_n[e];
    },
    bn = function (e, t, n) {
      return t.namespaceURI === mt && !cn[n] || t.namespaceURI === ft && !on[n] ? false : !_n[e] && (ln[e] || !gn[e]);
    },
    xn = function (e) {
      let t = _(e);
      (!t || !t.tagName) && (t = {
        namespaceURI: _t,
        tagName: `template`
      });
      let n = rt(e.tagName),
        r = rt(t.tagName);
      return I[e.namespaceURI] ? e.namespaceURI === mt ? vn(n, t, r) : e.namespaceURI === ft ? yn(n, t, r) : e.namespaceURI === P ? bn(n, t, r) : !!(un === `application/xhtml+xml` && I[e.namespaceURI]) : false;
    },
    Sn = function (e) {
      et(t.removed, {
        element: e
      });
      try {
        _(e).removeChild(e);
      } catch {
        if (p(e), !_(e)) throw gt(`a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place`);
      }
    },
    Cn = function (e, t, n) {
      try {
        m(e, t);
      } catch {
        try {
          e.removeAttribute(n);
        } catch {}
      }
    },
    wn = function (e) {
      Tn(e);
      let t = g(e);
      if (t) {
        let e = [];
        Ze(t, t => {
          et(e, t);
        });
        Ze(e, e => {
          try {
            p(e);
          } catch {}
        });
      }
      let n = y(e);
      if (n) for (let t = n.length - 1; t >= 0; --t) {
        let r = n[t],
          i = r && r.name;
        typeof i == `string` && Cn(e, r, i);
      }
    },
    R = function (e, n, r) {
      if (!r) try {
        r = n.getAttributeNode(e);
      } catch {
        r = null;
      }
      et(t.removed, {
        attribute: r || null,
        from: n
      });
      try {
        if (r) {
          m(n, r);
        } else {
          n.removeAttribute(e);
        }
      } catch {
        try {
          n.removeAttribute(e);
        } catch {}
      }
      if (e === `is`) {
        if (Ie || Le) try {
          Sn(n);
        } catch {} else try {
          n.setAttribute(e, ``);
        } catch {}
      }
    },
    z = function (e) {
      let t = y(e);
      if (t) for (let n = t.length - 1; n >= 0; --n) {
        let r = t[n],
          i = r && r.name;
        typeof i != `string` || k[L(i)] || Cn(e, r, i);
      }
    },
    Tn = function (e) {
      let t = [e];
      for (; t.length > 0;) {
        let e = t.pop();
        ee(e) === Jt.element && z(e);
        let n = g(e);
        if (n) for (let e = n.length - 1; e >= 0; --e) t.push(n[e]);
      }
    },
    En = function (e, t) {
      return Ae ? e === `patchsrc` || e === `for` && t !== `label` && t !== `output` : false;
    },
    Dn = function (e) {
      if (!Ae) return;
      let t = [e];
      for (; t.length > 0;) {
        let e = t.pop(),
          n = ee(e);
        if (n === Jt.processingInstruction || n === Jt.comment && ht(Gt, e.data)) {
          try {
            p(e);
          } catch {}
          continue;
        }
        if (n === Jt.element) {
          let t = e,
            n = L(te(e));
          try {
            t.hasAttribute && t.hasAttribute(`patchsrc`) && t.removeAttribute(`patchsrc`);
            t.hasAttribute && t.hasAttribute(`for`) && En(`for`, n) && t.removeAttribute(`for`);
          } catch {}
        }
        let r = g(e);
        if (r) for (let e = r.length - 1; e >= 0; --e) t.push(r[e]);
      }
    },
    B = function (e) {
      let t = null,
        r = null;
      if (Fe) e = `<remove></remove>` + e;else {
        let t = at(e, /^[\r\n\t ]+/);
        r = t && t[0];
      }
      un === `application/xhtml+xml` && _t === P && (e = `<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>` + e + `</body></html>`);
      let i = C ? oe(e) : e;
      if (_t === P) try {
        t = new l().parseFromString(i, un);
      } catch {}
      if (!t || !t.documentElement) {
        t = ue.createDocument(_t, `template`, null);
        try {
          t.documentElement.innerHTML = vt ? w : i;
        } catch {}
      }
      let a = t.body || t.documentElement;
      return e && r && a.insertBefore(n.createTextNode(r), a.childNodes[0] || null), _t === P ? pe.call(t, je ? `html` : `body`)[0] : je ? t.documentElement : a;
    },
    On = function (e) {
      let t = S ? S(e) : e.ownerDocument;
      return de.call(t || e, e, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT | c.SHOW_PROCESSING_INSTRUCTION | c.SHOW_CDATA_SECTION, null);
    },
    kn = function (e) {
      return e = ot(e, he, ` `), e = ot(e, ge, ` `), e = ot(e, _e, ` `), e;
    },
    An = function (e) {
      e.normalize();
      let t = S ? S(e) : e.ownerDocument,
        n = de.call(t || e, e, c.SHOW_TEXT | c.SHOW_COMMENT | c.SHOW_CDATA_SECTION | c.SHOW_PROCESSING_INSTRUCTION, null),
        r = n.nextNode();
      for (; r;) {
        r.data = kn(r.data);
        r = n.nextNode();
      }
      let i = e.querySelectorAll?.call(e, `template`);
      i && Ze(i, e => {
        Mn(e.content) && An(e.content);
      });
    },
    jn = function (e) {
      let t = x ? x(e) : null;
      return typeof t != `string` || L(t) !== `form` ? false : typeof e.nodeName != `string` || typeof e.textContent != `string` || typeof e.removeChild != `function` || e.attributes !== y(e) || typeof e.removeAttribute != `function` || typeof e.removeAttributeNode != `function` || typeof e.getAttributeNode != `function` || typeof e.setAttribute != `function` || typeof e.namespaceURI != `string` || typeof e.insertBefore != `function` || typeof e.hasChildNodes != `function` || e.nodeType !== b(e) || e.childNodes !== g(e);
    },
    Mn = function (e) {
      if (!b || typeof e != `object` || !e) return false;
      try {
        return b(e) === Jt.documentFragment;
      } catch {
        return false;
      }
    },
    Nn = function (e) {
      if (!b || typeof e != `object` || !e) return false;
      try {
        return typeof b(e) == `number`;
      } catch {
        return false;
      }
    };
  function Pn(e, n, r) {
    e.length !== 0 && Ze(e, e => {
      e.call(t, n, r, fn);
    });
  }
  let Fn = function (e, t) {
      return !!(Ae && e.hasChildNodes() && !Nn(e.firstElementChild) && ht(Wt, e.textContent) && ht(Wt, e.innerHTML) || Ae && e.namespaceURI === P && Yt[t] && (Nn(e.firstElementChild) || typeof e.textContent == `string` && ht(Xt[t], e.textContent)) || e.nodeType === Jt.processingInstruction || Ae && e.nodeType === Jt.comment && ht(Gt, e.data));
    },
    In = function (e, t) {
      return e instanceof RegExp ? ht(e, t) : e instanceof Function && !!e(t, ...[...arguments].slice(2));
    },
    Ln = function (e, t, n) {
      if (!Te[t] && Un(t) && In(we.tagNameCheck, t)) return false;
      if (Ue && !Je[t]) {
        let t = _(e),
          r = g(e);
        if (r && t) {
          let i = r.length;
          for (let a = i - 1; a >= 0; --a) {
            let i = e === n ? f(r[a], true) : r[a];
            t.insertBefore(i, h(e));
          }
        }
      }
      return Sn(e), true;
    },
    Rn = function (e, t, n, r) {
      return e.length === 0 ? t : t === n || t === r ? yt(t) : t;
    },
    zn = function (e, t) {
      return e === t || _(e) !== null ? false : (We && Tn(e), true);
    },
    Bn = function (e, n) {
      if (Pn(T.beforeSanitizeElements, e, null), zn(e, n)) return true;
      if (jn(e)) return Sn(e), true;
      let r = L(te(e));
      if (O = Rn(T.uponSanitizeElement, O, Se, Ne), Pn(T.uponSanitizeElement, e, {
        tagName: r,
        allowedTags: O
      }), zn(e, n)) return true;
      if (Fn(e, r)) return Sn(e), true;
      if (Te[r] || !(De.tagCheck instanceof Function && De.tagCheck(r)) && !O[r]) {
        let t = Ln(e, r, n);
        return t === false && (Pn(T.afterSanitizeElements, e, null), zn(e, n)) ? true : t;
      }
      if (ee(e) === Jt.element && !xn(e) || (r === `noscript` || r === `noembed` || r === `noframes`) && ht(Kt, e.innerHTML)) return Sn(e), true;
      if (M && e.nodeType === Jt.text) {
        let n = kn(e.textContent);
        e.textContent !== n && (et(t.removed, {
          element: e.cloneNode()
        }), e.textContent = n);
      }
      return Pn(T.afterSanitizeElements, e, null), zn(e, n);
    },
    Vn = function (e, t, r) {
      if (Ee[t] || En(t, e) || ze && (t === `id` || t === `name`) && (r in n || r in pn)) return false;
      let i = k[t] || De.attributeCheck instanceof Function && De.attributeCheck(t, e);
      return Oe && ht(ve, t) || A && ht(ye, t) ? true : i ? ut[t] || ht(D, ot(r, xe, ``)) || (t === `src` || t === `xlink:href` || t === `href`) && e !== `script` && st(r, `data:`) === 0 && Xe[e] || j && !ht(be, ot(r, xe, ``)) ? true : !r : Un(e) && In(we.tagNameCheck, e) && In(we.attributeNameCheck, t, e) || t === `is` && we.allowCustomizedBuiltInElements && In(we.tagNameCheck, r);
    },
    Hn = F({}, [`annotation-xml`, `color-profile`, `font-face`, `font-face-format`, `font-face-name`, `font-face-src`, `font-face-uri`, `missing-glyph`]),
    Un = function (e) {
      return !Hn[rt(e)] && ht(E, e);
    },
    Wn = function (e, t, n, r) {
      if (C && typeof u == `object` && typeof u.getAttributeType == `function` && !n) switch (u.getAttributeType(e, t)) {
        case `TrustedHTML`:
          return oe(r);
        case `TrustedScriptURL`:
          return se(r);
      }
      return r;
    },
    Gn = function (e, t, n, r) {
      try {
        return n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r), !jn(e) || (Sn(e), false);
      } catch {
        return R(t, e), false;
      }
    },
    Kn = function (e, n) {
      if (Pn(T.beforeSanitizeAttributes, e, null), zn(e, n)) return;
      let r = e.attributes;
      if (!r || jn(e)) return;
      k = Rn(T.uponSanitizeAttribute, k, Ce, Pe);
      let i = {
          attrName: ``,
          attrValue: ``,
          keepAttr: true,
          allowedAttributes: k,
          forceKeepAttr: undefined
        },
        a = r.length,
        o = L(e.nodeName);
      for (; a--;) {
        let n = r[a],
          s = n.name,
          c = n.namespaceURI,
          l = n.value,
          u = L(s),
          d = l,
          f = s === `value` ? d : ct(d),
          p = false;
        if (i.attrName = u, i.attrValue = f, i.keepAttr = true, i.forceKeepAttr = undefined, Pn(T.uponSanitizeAttribute, e, i), f = i.attrValue, Be && (u === `id` || u === `name`) && st(f, He) !== 0 && (R(s, e, n), f = He + f, p = true), Ae && ht(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, f)) {
          R(s, e, n);
          continue;
        }
        if (u === `attributename` && at(f, `href`)) {
          R(s, e, n);
          continue;
        }
        if (!i.forceKeepAttr) {
          if (!i.keepAttr) {
            R(s, e, n);
            continue;
          }
          if (!ke && ht(qt, f)) {
            R(s, e, n);
            continue;
          }
          if (M && (f = kn(f)), !Vn(o, u, f)) {
            R(s, e, n);
            continue;
          }
          f = Wn(o, u, c, f);
          f !== d && Gn(e, s, c, f) && p && $e(t.removed);
        }
      }
      Pn(T.afterSanitizeAttributes, e, null);
      zn(e, n);
    },
    qn = function (e) {
      let t = null,
        n = On(e);
      for (Pn(T.beforeSanitizeShadowDOM, e, null); t = n.nextNode();) if (Pn(T.uponSanitizeShadowNode, t, null), Bn(t, e), Kn(t, e), Mn(t.content) && qn(t.content), ee(t) === Jt.element) {
        let e = v(t);
        Mn(e) && (Jn(e), qn(e));
      }
      Pn(T.afterSanitizeShadowDOM, e, null);
    },
    Jn = function (e) {
      let t = [{
        node: e,
        shadow: null
      }];
      for (; t.length > 0;) {
        let e = t.pop();
        if (e.shadow) {
          qn(e.shadow);
          continue;
        }
        let n = e.node,
          r = ee(n) === Jt.element,
          i = g(n);
        if (i) for (let e = i.length - 1; e >= 0; --e) t.push({
          node: i[e],
          shadow: null
        });
        if (r) {
          let e = x ? x(n) : null;
          if (typeof e == `string` && L(e) === `template`) {
            let e = n.content;
            Mn(e) && t.push({
              node: e,
              shadow: null
            });
          }
        }
        if (r) {
          let e = v(n);
          Mn(e) && t.push({
            node: null,
            shadow: e
          }, {
            node: e,
            shadow: null
          });
        }
      }
    };
  return t.sanitize = function (e) {
    let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      i = null,
      a = null,
      o = null,
      s = null;
    if (vt = !e, vt && (e = `<!-->`), typeof e != `string` && !Nn(e) && (e = bt(e), typeof e != `string`)) throw gt(`dirty is not a string, aborting`);
    if (!t.isSupported) return e;
    if (Me) {
      O = Ne;
      k = Pe;
    } else {
      hn(n);
    }
    (T.uponSanitizeElement.length > 0 || T.uponSanitizeAttribute.length > 0) && (O = yt(O));
    T.uponSanitizeAttribute.length > 0 && (k = yt(k));
    t.removed = [];
    let c = We && typeof e != `string` && Nn(e);
    if (c) {
      Dn(e);
      let t = te(e);
      if (typeof t == `string`) {
        let n = L(t);
        if (!O[n] || Te[n]) throw wn(e), gt(`root node is forbidden and cannot be sanitized in-place`);
      }
      if (jn(e)) throw wn(e), gt(`root node is clobbered and cannot be sanitized in-place`);
      try {
        Jn(e);
      } catch (t) {
        throw wn(e), t;
      }
    } else if (Nn(e)) {
      i = B(`<!---->`);
      a = i.ownerDocument.importNode(e, true);
      if (a.nodeType === Jt.element && a.nodeName === `BODY` || a.nodeName === `HTML`) {
        i = a;
      } else {
        i.appendChild(a);
      }
      Jn(i);
    } else {
      if (!Ie && !M && !je && e.indexOf(`<`) === -1) return C && Re ? oe(e) : e;
      if (i = B(e), !i) return Ie ? null : Re ? w : ``;
    }
    i && Fe && Sn(i.firstChild);
    let l = c ? e : i;
    try {
      let e = On(l);
      for (; o = e.nextNode();) {
        Bn(o, l);
        Kn(o, l);
        Mn(o.content) && qn(o.content);
      }
    } catch (n) {
      throw c && (wn(e), Ze(t.removed, e => {
        e.element && Tn(e.element);
      })), n;
    }
    if (c) {
      let n = false;
      if (Ze(t.removed, t => {
        t.element && (t.element === e && (n = true), Tn(t.element));
      }), n) throw gt(`a node selected for removal could not be safely returned; refusing to sanitize in place`);
      return M && An(e), e;
    }
    if (Ie) {
      if (M && An(i), Le) for (s = fe.call(i.ownerDocument); i.firstChild;) s.appendChild(i.firstChild);else s = i;
      return (k.shadowroot || k.shadowrootmode) && (s = me.call(r, s, true)), s;
    }
    let u = je ? i.outerHTML : i.innerHTML;
    return je && O[`!doctype`] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && ht(Ht, i.ownerDocument.doctype.name) && (u = `<!DOCTYPE ` + i.ownerDocument.doctype.name + `>
` + u), M && (u = kn(u)), C && Re ? oe(u) : u;
  }, t.setConfig = function () {
    let e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    hn(e);
    Me = true;
    Ne = O;
    Pe = k;
  }, t.clearConfig = function () {
    fn = null;
    Me = false;
    Ne = null;
    Pe = null;
    C = ne;
    w = ``;
  }, t.isValidAttribute = function (e, t, n) {
    fn || hn({});
    let r = L(e),
      i = L(t);
    return Vn(r, i, n);
  }, t.addHook = function (e, t) {
    typeof t == `function` && pt(T, e) && et(T[e], t);
  }, t.removeHook = function (e, t) {
    if (pt(T, e)) {
      if (t !== undefined) {
        let n = Qe(T[e], t);
        return n === -1 ? undefined : tt(T[e], n, 1)[0];
      }
      return $e(T[e]);
    }
  }, t.removeHooks = function (e) {
    pt(T, e) && (T[e] = []);
  }, t.removeAllHooks = function () {
    T = $t();
  }, t;
}
var rn = nn();
typeof rn.addHook == `function` && rn.addHook(`afterSanitizeAttributes`, e => {
  if (e.tagName === `A`) {
    let t = e.getAttribute(`href`);
    if (t) {
      let n = t.trim();
      /^(https?:\/\/|mailto:|tel:)/i.test(n) || e.removeAttribute(`href`);
    }
    e.getAttribute(`target`) === `_blank` && e.setAttribute(`rel`, `noopener noreferrer`);
  }
});
function an(e = ``) {
  return !e || typeof e != `string` ? `` : rn.sanitize(e, {
    ALLOWED_TAGS: `p.br.strong.b.em.i.u.s.strike.del.h1.h2.h3.h4.h5.h6.ul.ol.li.blockquote.span.div.hr.a.mark.sub.sup.code.pre`.split(`.`),
    ALLOWED_ATTR: [`href`, `target`, `rel`, `style`, `class`, `align`, `dir`, `title`],
    ALLOWED_URI_REGEXP: /^(?:https?:|mailto:|tel:)/i,
    ALLOW_DATA_ATTR: false
  });
}
function on(e = ``) {
  return !e || typeof e != `string` ? `` : e.replace(/(^|[^\w*])\*([^\s*](?:[^*]*[^\s*])?)\*([^\w*]|$)/g, `$1<strong>$2</strong>$3`).replace(/(^|[^\w_])_([^\s_](?:[^_]*[^\s_])?)_([^\w_]|$)/g, `$1<em>$2</em>$3`).replace(/(^|[^\w~])~([^\s~](?:[^~]*[^\s~])?)~([^\w~]|$)/g, `$1<del>$2</del>$3`).replace(/```([\s\S]*?)```/g, `<code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded font-mono text-xs">$1</code>`);
}
function sn(e = ``) {
  return !e || typeof e != `string` ? false : /<[a-z][\s\S]*>/i.test(e);
}
function cn(e = ``) {
  if (!e || typeof e != `string`) return ``;
  let t = e.replace(/<!--[\s\S]*?-->/g, ``).trim();
  if (sn(t)) return an(t);
  let n = on(t),
    r = n.split(/\n\s*\n/);
  return r.length > 1 ? r.map(e => {
    let t = e.trim().replace(/\n/g, `<br />`);
    return t ? `<p class="mb-4 leading-relaxed">${t}</p>` : ``;
  }).join(``) : n.replace(/\n/g, `<br />`);
}
function ln(e = ``) {
  return !e || typeof e != `string` ? `` : e.replace(/<!--[\s\S]*?-->/g, ``).replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ``).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ``).replace(/<br\s*\/?>/gi, `
`).replace(/<\/p>/gi, `

`).replace(/<\/div>/gi, `
`).replace(/<\/li>/gi, `
`).replace(/<li[^>]*>/gi, `• `).replace(/<[^>]*>/g, ``).replace(/&nbsp;/gi, ` `).replace(/&amp;/gi, `&`).replace(/&quot;/gi, `"`).replace(/&#39;/gi, `'`).replace(/&lt;/gi, `<`).replace(/&gt;/gi, `>`).replace(/[ \t]+/g, ` `).replace(/\n\s*\n\s*\n+/g, `

`).trim();
}
function un({
  articles: e = [],
  onOpenArticle: t
}) {
  let [n, r] = (0, j.useState)(null),
    i = e.filter(e => !e.category?.startsWith(`_`) && (e.category === `beawar` || !e.isLiveFeed)),
    a = (i.length > 0 ? i : e.filter(e => !e.category?.startsWith(`_`))).slice(0, 10).map((e, t) => {
      let n = k(e),
        r = !!(e.videoUrl || e.mediaType === `video`);
      return {
        id: e.id || `story-${t}`,
        title: ln(e.titleHi || e.title || ``),
        image: n,
        videoUrl: e.videoUrl || null,
        isVideo: r,
        summary: ln(e.summaryHi || e.contentHi || ``).slice(0, 140),
        author: e.author || `ब्यावर रिपोर्टर`,
        tag: `ब्यावर`,
        badgeColor: `bg-red-600 text-white`,
        article: e
      };
    }),
    o = e => {
      r(e);
    },
    s = () => {
      r(null);
    },
    c = () => {
      if (n < a.length - 1) {
        r(n + 1);
      } else {
        r(null);
      }
    },
    l = () => {
      n > 0 && r(n - 1);
    },
    u = e => {
      let t = `https://www.aryannewsagency.com/news/${e.article?.id || e.id}`,
        n = `*वेब स्टोरी: ${ln(e.title)}*\n\n👉 पूरी खबर एवं वीडियो देखें:\n${t}\n\n*आर्यन न्यूज़ एजेंसी (ब्यावर)*`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(n)}`, `_blank`);
    };
  return a.length === 0 ? null : (0, M.jsxs)(`section`, {
    className: `bg-white dark:bg-gray-900 py-5 sm:py-6 border-b border-gray-200 dark:border-gray-800`,
    children: [(0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center justify-between mb-3 pb-1 border-b border-gray-100 dark:border-gray-800`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, M.jsx)(`span`, {
            className: `w-1.5 h-5 bg-purple-600 rounded-full inline-block`
          }), (0, M.jsx)(`h2`, {
            className: `text-base sm:text-lg font-black font-hindi text-gray-950 dark:text-white`,
            children: `वेब स्टोरीज़`
          })]
        }), (0, M.jsx)(`span`, {
          className: `text-[11px] text-gray-400 font-hindi`,
          children: `स्वाइप करें 👉`
        })]
      }), (0, M.jsx)(`div`, {
        className: `flex items-center gap-3.5 overflow-x-auto no-scrollbar py-2`,
        children: a.map((e, t) => (0, M.jsxs)(`div`, {
          onClick: () => o(t),
          className: `flex-shrink-0 w-32 sm:w-36 h-48 sm:h-56 rounded-2xl overflow-hidden cursor-pointer relative shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between p-3 border border-gray-200/40 dark:border-gray-700 select-none bg-gray-900`,
          children: [(0, M.jsx)(`img`, {
            src: e.image,
            alt: e.title,
            className: `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
            loading: `lazy`
          }), (0, M.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20`
          }), (0, M.jsxs)(`div`, {
            className: `relative z-10 self-start flex items-center gap-1.5`,
            children: [(0, M.jsx)(`span`, {
              className: `text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-md shadow ${e.badgeColor}`,
              children: e.tag
            }), e.isVideo && (0, M.jsx)(`span`, {
              className: `p-1 rounded-md bg-black/70 backdrop-blur-sm text-white shadow`,
              children: (0, M.jsx)(p, {
                className: `w-2.5 h-2.5 fill-current`
              })
            })]
          }), (0, M.jsx)(`div`, {
            className: `relative z-10`,
            children: (0, M.jsx)(`h3`, {
              className: `text-xs sm:text-sm font-bold font-hindi text-white line-clamp-3 leading-snug drop-shadow-md`,
              children: e.title
            })
          })]
        }, e.id || t))
      })]
    }), n !== null && (0, M.jsx)(`div`, {
      className: `fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-0 sm:p-4`,
      children: (0, M.jsxs)(`div`, {
        className: `relative w-full max-w-sm h-full sm:h-[680px] bg-gray-900 rounded-none sm:rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl`,
        children: [(0, M.jsx)(`div`, {
          className: `absolute top-2 left-2 right-2 z-20 flex gap-1`,
          children: a.map((e, t) => (0, M.jsx)(`div`, {
            className: `h-1 flex-1 rounded-full transition-all duration-300 ${t === n ? `bg-white` : t < n ? `bg-white/70` : `bg-white/20`}`
          }, e.id))
        }), (0, M.jsxs)(`div`, {
          className: `absolute top-5 left-4 right-4 z-20 flex items-center justify-between text-white`,
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, M.jsx)(`div`, {
              className: `w-7 h-7 rounded-full bg-red-600 flex items-center justify-center font-bold text-xs`,
              children: `आ`
            }), (0, M.jsxs)(`div`, {
              children: [(0, M.jsx)(`span`, {
                className: `text-xs font-bold block`,
                children: `आर्यन न्यूज़ एजेंसी`
              }), (0, M.jsx)(`span`, {
                className: `text-[10px] text-gray-300`,
                children: `ब्यावर विशेष`
              })]
            })]
          }), (0, M.jsx)(`button`, {
            onClick: s,
            className: `p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white`,
            children: (0, M.jsx)(ue, {
              className: `w-5 h-5`
            })
          })]
        }), (0, M.jsx)(`img`, {
          src: a[n].image,
          alt: a[n].title,
          className: `absolute inset-0 w-full h-full object-cover`
        }), (0, M.jsx)(`div`, {
          className: `absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60 pointer-events-none`
        }), (0, M.jsxs)(`div`, {
          className: `absolute inset-0 z-10 flex`,
          children: [(0, M.jsx)(`div`, {
            onClick: l,
            className: `w-1/3 h-full cursor-pointer`
          }), (0, M.jsx)(`div`, {
            onClick: c,
            className: `w-2/3 h-full cursor-pointer`
          })]
        }), (0, M.jsxs)(`div`, {
          className: `relative z-20 p-5 mt-auto text-white`,
          children: [(0, M.jsx)(`span`, {
            className: `inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2`,
            children: a[n].tag
          }), (0, M.jsx)(`h3`, {
            className: `text-lg sm:text-xl font-bold leading-snug drop-shadow-md`,
            children: a[n].title
          }), (0, M.jsxs)(`div`, {
            className: `mt-4 flex flex-col gap-2`,
            children: [t && a[n].article && (0, M.jsxs)(`button`, {
              onClick: () => {
                let e = a[n].article;
                s();
                t(e);
              },
              className: `w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl shadow-lg transition active:scale-95`,
              children: [(0, M.jsx)(ve, {
                className: `w-4 h-4`
              }), (0, M.jsx)(`span`, {
                children: `📖 पूरी खबर विस्तार से पढ़ें`
              })]
            }), (0, M.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [(0, M.jsxs)(`button`, {
                onClick: () => u(a[n]),
                className: `flex-1 flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl shadow-lg`,
                children: [(0, M.jsx)(w, {
                  className: `w-4 h-4`
                }), (0, M.jsx)(`span`, {
                  children: `व्हाट्सएप पर शेयर करें`
                })]
              }), (0, M.jsx)(`button`, {
                onClick: c,
                className: `p-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white`,
                children: (0, M.jsx)(ae, {
                  className: `w-5 h-5`
                })
              })]
            })]
          })]
        })]
      })
    })]
  });
}
function dn({
  category: e = `national`,
  sourceName: t = ``,
  articleTitle: n = ``,
  size: r = `standard`
}) {
  let i = (D.find(t => t.id === e) || D[3]).nameHi,
    a = t && (t.includes(`PIB`) || t.includes(`सूचना कार्यालय`) || t.includes(`भारत सरकार`));
  return r === `horizontal` ? (0, M.jsxs)(`div`, {
    className: `w-full h-full relative overflow-hidden bg-gray-950 select-none flex flex-col justify-between p-2 text-white border border-red-900/40 group`,
    children: [(0, M.jsx)(`img`, {
      src: `/images/agency-office.jpg`,
      alt: `आर्यन न्यूज़ एजेंसी`,
      className: `absolute inset-0 w-full h-full object-cover scale-105 filter brightness-50 contrast-110 group-hover:scale-110 transition-transform duration-500`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-gradient-to-t from-black via-black/60 to-red-950/40`
    }), (0, M.jsxs)(`div`, {
      className: `relative z-10 flex items-center justify-between w-full`,
      children: [(0, M.jsx)(`span`, {
        className: `text-[9px] font-black text-amber-300 tracking-wider`,
        children: `आर्यन ब्यूरो`
      }), (0, M.jsx)(`span`, {
        className: `text-[8px] text-gray-300`,
        children: `ब्यावर`
      })]
    }), (0, M.jsx)(`div`, {
      className: `relative z-10 text-center my-auto py-0.5`,
      children: (0, M.jsx)(`span`, {
        className: `text-[10px] font-bold font-hindi leading-tight line-clamp-2 text-white drop-shadow`,
        children: n || i
      })
    }), (0, M.jsx)(`div`, {
      className: `relative z-10 flex items-center justify-between text-[8px] text-gray-300 border-t border-white/10 pt-0.5`,
      children: (0, M.jsx)(`span`, {
        className: `text-amber-200 truncate max-w-[85%]`,
        children: a ? `आधिकारिक रिलीज` : i
      })
    })]
  }) : r === `large` || r === `hero` ? (0, M.jsxs)(`div`, {
    className: `w-full ${r === `hero` ? `h-full min-h-[340px] sm:min-h-[440px]` : `h-56 sm:h-72`} rounded-2xl relative shadow-xl overflow-hidden select-none bg-gray-950 text-white flex flex-col justify-between p-5 sm:p-8 border border-red-900/50 group`,
    children: [(0, M.jsx)(`img`, {
      src: `/images/agency-office.jpg`,
      alt: `आर्यन न्यूज़ एजेंसी ब्यावर`,
      className: `absolute inset-0 w-full h-full object-cover scale-105 filter brightness-45 contrast-115 group-hover:scale-110 transition-transform duration-700`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-gradient-to-t from-black via-black/75 to-red-950/60`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-radial-at-c from-transparent via-black/30 to-black/80`
    }), (0, M.jsxs)(`div`, {
      className: `relative z-10 flex items-center justify-between flex-wrap gap-2`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center gap-2 bg-red-900/80 backdrop-blur-md border border-red-500/40 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg`,
        children: [(0, M.jsx)(`span`, {
          className: `w-2 h-2 rounded-full bg-amber-400 animate-pulse`
        }), (0, M.jsx)(`span`, {
          children: `आर्यन न्यूज़ एजेंसी • डिजिटल डेस्क (ब्यावर)`
        })]
      }), (0, M.jsx)(`span`, {
        className: `text-xs font-medium text-amber-300/90 bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/10`,
        children: a ? `भारत सरकार • आधिकारिक विज्ञप्ति` : `विशेष समाचार बुलेटिन`
      })]
    }), (0, M.jsx)(`div`, {
      className: `relative z-10 my-auto py-4`,
      children: (0, M.jsx)(`h3`, {
        className: `text-lg sm:text-2xl md:text-3xl font-black font-hindi text-white leading-snug drop-shadow-lg line-clamp-3`,
        children: n ? `"${n}"` : i
      })
    }), (0, M.jsxs)(`div`, {
      className: `relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-gray-300`,
      children: [(0, M.jsx)(`span`, {
        className: `font-semibold text-amber-300`,
        children: t ? `रिपोर्टिंग स्रोत: ${t}` : `आर्यन न्यूज़ नेटवर्क • ब्यावर (राज.)`
      }), (0, M.jsx)(`span`, {
        className: `text-white font-bold bg-red-600/90 px-3 py-1 rounded-lg shadow`,
        children: `विस्तार से पढ़ें ↓`
      })]
    })]
  }) : (0, M.jsxs)(`div`, {
    className: `w-full h-full relative overflow-hidden bg-gray-950 shadow-inner select-none flex flex-col justify-between p-3.5 sm:p-4 text-white border-b border-gray-800 group`,
    children: [(0, M.jsx)(`img`, {
      src: `/images/agency-office.jpg`,
      alt: `आर्यन न्यूज़ एजेंसी ब्यावर`,
      className: `absolute inset-0 w-full h-full object-cover scale-105 filter brightness-45 contrast-110 group-hover:scale-110 transition-transform duration-500`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-gradient-to-t from-black via-black/70 to-red-950/50`
    }), (0, M.jsxs)(`div`, {
      className: `relative z-10 flex items-center justify-between text-[10px] sm:text-[11px]`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center gap-1.5 font-bold tracking-wide text-amber-300 bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded border border-white/15`,
        children: [(0, M.jsx)(`span`, {
          className: `w-1.5 h-1.5 rounded-full bg-red-500 animate-ping`
        }), (0, M.jsx)(`span`, {
          children: `आर्यन डिजिटल डेस्क`
        })]
      }), (0, M.jsx)(`span`, {
        className: `text-[9px] text-gray-300 font-bold bg-red-900/80 px-1.5 py-0.5 rounded border border-red-500/30`,
        children: `ब्यावर`
      })]
    }), (0, M.jsx)(`div`, {
      className: `relative z-10 my-auto py-2`,
      children: (0, M.jsx)(`p`, {
        className: `text-xs sm:text-[13px] font-bold font-hindi text-white line-clamp-3 leading-snug drop-shadow-md`,
        children: n || i
      })
    }), (0, M.jsxs)(`div`, {
      className: `relative z-10 pt-2 border-t border-white/15 flex items-center justify-between text-[10px] text-gray-300`,
      children: [(0, M.jsx)(`span`, {
        className: `truncate max-w-[70%] text-amber-300 font-medium`,
        children: t || `आर्यन न्यूज़ एजेंसी`
      }), (0, M.jsx)(`span`, {
        className: `font-hindi text-[10px] text-white font-semibold flex items-center gap-0.5`,
        children: `पूरी खबर →`
      })]
    })]
  });
}
function L({
  images: e = [],
  videoUrl: t = null,
  mediaType: n = `image`,
  title: r = ``,
  aspectRatio: i = `aspect-[16/10]`,
  autoPlayInterval: a = 3500,
  showControls: o = false,
  className: s = ``,
  objectPosition: c = `object-left`,
  onOpen: l = null,
  mediaCaption: d = ``
}) {
  let f = Array.isArray(e) ? e.filter(e => typeof e == `string` && e.trim().length > 0 && !e.includes(`unsplash.com`)) : typeof e == `string` && e.trim().length > 0 && !e.includes(`unsplash.com`) ? [e] : [],
    m = f.length > 1,
    h = n === `video` || !!t,
    [g, _] = (0, j.useState)(0),
    [y, b] = (0, j.useState)(true),
    [x, S] = (0, j.useState)(false),
    [te, w] = (0, j.useState)(true),
    [ne, re] = (0, j.useState)(null),
    ie = (0, j.useRef)(null);
  (0, j.useEffect)(() => {
    if (!m || h || !y || x) return;
    let e = setInterval(() => {
      _(e => (e + 1) % f.length);
    }, a);
    return () => clearInterval(e);
  }, [m, h, y, x, f.length, a]);
  let se = e => {
      e?.stopPropagation();
      _(e => (e - 1 + f.length) % f.length);
    },
    ce = e => {
      e?.stopPropagation();
      _(e => (e + 1) % f.length);
    },
    le = (event, t) => {
      event.stopPropagation();
      _(t);
    },
    ue = event => {
      event.stopPropagation();
      b(e => !e);
    },
    de = f.find(e => e && !e.includes(`unsplash.com`));
  if (!de && t && (de = Se(t)), !de && f.length > 0 && (de = f[0]), h && t) return o ? (0, M.jsxs)(`div`, {
    className: `relative w-full rounded-2xl overflow-hidden bg-black shadow-lg ${s}`,
    children: [(0, M.jsx)(`video`, {
      ref: ie,
      src: t,
      poster: de || undefined,
      controls: true,
      preload: `metadata`,
      playsInline: true,
      className: `w-full h-auto max-h-[460px] object-contain mx-auto bg-black`
    }), (0, M.jsxs)(`div`, {
      className: `p-2.5 bg-gray-900 text-white text-xs flex items-center justify-between font-hindi border-t border-gray-800`,
      children: [(0, M.jsxs)(`span`, {
        className: `flex items-center gap-1.5 text-red-400 font-bold truncate`,
        children: [(0, M.jsx)(oe, {
          className: `w-4 h-4 shrink-0`
        }), (0, M.jsx)(`span`, {
          className: `truncate`,
          children: d || `वीडियो रिपोर्ट`
        })]
      }), (0, M.jsx)(`span`, {
        className: `text-[11px] text-gray-400 shrink-0 hidden sm:inline`,
        children: `प्ले / पॉज व फुलस्क्रीन`
      })]
    })]
  }) : (0, M.jsxs)(`div`, {
    onClick: l,
    className: `relative w-full overflow-hidden bg-black group/video ${i} ${s}`,
    children: [de && (0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-cover bg-center filter blur-2xl scale-125 opacity-40 brightness-75 select-none pointer-events-none`,
      style: {
        backgroundImage: `url(${de})`
      },
      'aria-hidden': `true`
    }), de ? (0, M.jsx)(`img`, {
      src: de,
      alt: r,
      className: `relative z-10 w-full h-full object-contain mx-auto group-hover/video:scale-105 transition-transform duration-500`,
      loading: `lazy`
    }) : (0, M.jsx)(`video`, {
      src: t,
      muted: true,
      playsInline: true,
      preload: `metadata`,
      className: `w-full h-full object-contain mx-auto`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 z-20 flex items-center justify-center`,
      children: (0, M.jsx)(`div`, {
        className: `w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover/video:scale-110 group-hover/video:bg-red-600 transition-all`,
        children: (0, M.jsx)(p, {
          className: `w-5 h-5 fill-current ml-0.5`
        })
      })
    }), (0, M.jsxs)(`div`, {
      className: `absolute bottom-2 left-2 z-20 bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1`,
      children: [(0, M.jsx)(oe, {
        className: `w-3 h-3 text-red-500`
      }), (0, M.jsx)(`span`, {
        children: `वीडियो`
      })]
    })]
  });
  let [fe, pe] = (0, j.useState)(`contain`);
  if (f.length === 0) return (0, M.jsx)(`div`, {
    className: `relative w-full overflow-hidden bg-gray-100 dark:bg-gray-800 ${i} ${s}`,
    children: (0, M.jsx)(`img`, {
      src: `https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1000&auto=format&fit=crop&q=80`,
      alt: r,
      className: `w-full h-full object-cover ${c}`,
      loading: `lazy`
    })
  });
  let me = f[g] || f[0],
    T = fe;
  return m ? (0, M.jsxs)(`div`, {
    className: `relative w-full overflow-hidden bg-black group/carousel select-none ${i} ${s}`,
    onMouseEnter: () => S(true),
    onMouseLeave: () => S(false),
    children: [(0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-cover bg-center filter blur-2xl scale-125 opacity-40 brightness-75 select-none pointer-events-none transition-all duration-700`,
      style: {
        backgroundImage: `url(${me})`
      },
      'aria-hidden': `true`
    }), (0, M.jsx)(`img`, {
      src: f[0],
      alt: ``,
      className: `w-full h-full object-contain invisible pointer-events-none select-none max-h-[520px]`,
      'aria-hidden': `true`
    }), (0, M.jsx)(`div`, {
      className: `absolute inset-0 w-full h-full overflow-hidden z-10 flex items-center justify-center`,
      children: f.map((event, t) => (0, M.jsx)(`div`, {
        className: `absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center ${t === g ? `opacity-100 z-10` : `opacity-0 z-0 pointer-events-none`}`,
        children: (0, M.jsx)(`img`, {
          src: event,
          alt: `${r} - फोटो ${t + 1}`,
          onError: event => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = `https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1000&auto=format&fit=crop&q=80`;
          },
          onClick: t => {
            o && (t.stopPropagation(), re(event));
          },
          className: `w-full h-full ${T === `contain` ? `object-contain mx-auto` : `object-cover ${c}`} ${o ? `cursor-zoom-in` : ``} transition-all duration-300`,
          loading: t === 0 ? `eager` : `lazy`
        })
      }, t))
    }), o && (0, M.jsxs)(`div`, {
      className: `absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5`,
      children: [(0, M.jsx)(`button`, {
        type: `button`,
        onClick: event => {
          event.stopPropagation();
          pe(fe === `contain` ? `cover` : `contain`);
        },
        title: fe === `contain` ? `स्क्रीन भरें (Fill Box)` : `पूरा फोटो देखें (Fit Whole Photo)`,
        className: `bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20 transition active:scale-95`,
        children: (0, M.jsx)(`span`, {
          children: fe === `contain` ? `🔍 पूरा फोटो (Fit)` : `📐 क्रॉप भरा (Fill)`
        })
      }), (0, M.jsx)(`button`, {
        type: `button`,
        onClick: event => {
          event.stopPropagation();
          re(me);
        },
        title: `फुलस्क्रीन ज़ूम`,
        className: `p-1 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition active:scale-95`,
        children: (0, M.jsx)(ee, {
          className: `w-3.5 h-3.5`
        })
      })]
    }), (0, M.jsxs)(`div`, {
      className: `absolute top-2.5 right-2.5 z-20 bg-black/70 backdrop-blur-md text-white font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-md border border-white/20`,
      children: [(0, M.jsx)(v, {
        className: `w-3 h-3 text-amber-400`
      }), (0, M.jsxs)(`span`, {
        children: [g + 1, ` / `, f.length, ` फोटो`]
      })]
    }), x && !o && (0, M.jsx)(`div`, {
      className: `absolute top-2.5 right-24 z-20 bg-black/60 backdrop-blur-sm text-white text-[9px] font-bold px-2 py-0.5 rounded-full animate-fade-in`,
      children: `रोक दिया गया (Paused)`
    }), (o || x) && (0, M.jsxs)(M.Fragment, {
      children: [(0, M.jsx)(`button`, {
        type: `button`,
        onClick: se,
        'aria-label': `Previous photo`,
        className: `absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition shadow-lg backdrop-blur-sm hover:scale-105 active:scale-95`,
        children: (0, M.jsx)(C, {
          className: `w-5 h-5`
        })
      }), (0, M.jsx)(`button`, {
        type: `button`,
        onClick: ce,
        'aria-label': `Next photo`,
        className: `absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition shadow-lg backdrop-blur-sm hover:scale-105 active:scale-95`,
        children: (0, M.jsx)(ae, {
          className: `w-5 h-5`
        })
      })]
    }), (0, M.jsxs)(`div`, {
      className: `absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10`,
      children: [o && (0, M.jsx)(`button`, {
        type: `button`,
        onClick: ue,
        className: `text-white hover:text-amber-400 pr-1 mr-0.5 border-r border-white/20 transition`,
        title: y ? `ऑटो-स्लाइड रोकें` : `ऑटो-स्लाइड चालू करें`,
        children: y ? (0, M.jsx)(u, {
          className: `w-3 h-3`
        }) : (0, M.jsx)(p, {
          className: `w-3 h-3 fill-current`
        })
      }), f.map((e, t) => (0, M.jsx)(`button`, {
        type: `button`,
        onClick: e => le(e, t),
        'aria-label': `Go to slide ${t + 1}`,
        className: `h-1.5 rounded-full transition-all duration-300 ${t === g ? `bg-amber-400 w-4 shadow-sm` : `bg-white/60 hover:bg-white w-1.5`}`
      }, t))]
    }), y && !x && (0, M.jsx)(`div`, {
      className: `absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-20 overflow-hidden`,
      children: (0, M.jsx)(`div`, {
        className: `h-full bg-amber-400 animate-slide-progress origin-left`,
        style: {
          animationDuration: `${a}ms`
        }
      }, g)
    }), ne && (0, M.jsxs)(`div`, {
      className: `fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-6 cursor-zoom-out backdrop-blur-md animate-in fade-in duration-200`,
      onClick: event => {
        event.stopPropagation();
        re(null);
      },
      children: [(0, M.jsx)(`img`, {
        src: ne,
        alt: `Zoomed preview`,
        className: `max-w-full max-h-full object-contain rounded-xl shadow-2xl`
      }), (0, M.jsx)(`button`, {
        type: `button`,
        className: `absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 transition flex items-center gap-1.5 text-xs font-bold border border-white/20`,
        children: `✕ बंद करें (Close)`
      })]
    })]
  }) : (0, M.jsxs)(`div`, {
    className: `relative w-full overflow-hidden bg-black ${i} ${s}`,
    children: [(0, M.jsx)(`div`, {
      className: `absolute inset-0 bg-cover bg-center filter blur-2xl scale-125 opacity-40 brightness-75 select-none pointer-events-none transition-all duration-700`,
      style: {
        backgroundImage: `url(${f[0]})`
      },
      'aria-hidden': `true`
    }), (0, M.jsx)(`img`, {
      src: f[0],
      alt: r,
      onError: event => {
        event.currentTarget.onerror = null;
        event.currentTarget.src = `https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1000&auto=format&fit=crop&q=80`;
      },
      onClick: event => {
        o && (event.stopPropagation(), re(f[0]));
      },
      className: `relative z-10 w-full h-full ${T === `contain` ? `object-contain mx-auto` : `object-cover ${c}`} ${o ? `cursor-zoom-in` : ``} transition-all duration-300`,
      loading: `lazy`
    }), o && (0, M.jsxs)(`div`, {
      className: `absolute top-2.5 left-2.5 z-20 flex items-center gap-1.5`,
      children: [(0, M.jsx)(`button`, {
        type: `button`,
        onClick: event => {
          event.stopPropagation();
          pe(fe === `contain` ? `cover` : `contain`);
        },
        title: fe === `contain` ? `स्क्रीन भरें (Fill Box)` : `पूरा फोटो देखें (Fit Whole Photo)`,
        className: `bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md border border-white/20 transition active:scale-95`,
        children: (0, M.jsx)(`span`, {
          children: fe === `contain` ? `🔍 पूरा फोटो (Fit)` : `📐 क्रॉप भरा (Fill)`
        })
      }), (0, M.jsx)(`button`, {
        type: `button`,
        onClick: event => {
          event.stopPropagation();
          re(f[0]);
        },
        title: `फुलस्क्रीन ज़ूम`,
        className: `p-1 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/20 backdrop-blur-md transition active:scale-95`,
        children: (0, M.jsx)(ee, {
          className: `w-3.5 h-3.5`
        })
      })]
    }), ne && (0, M.jsxs)(`div`, {
      className: `fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-2 sm:p-6 cursor-zoom-out backdrop-blur-md animate-in fade-in duration-200`,
      onClick: event => {
        event.stopPropagation();
        re(null);
      },
      children: [(0, M.jsx)(`img`, {
        src: ne,
        alt: `Zoomed preview`,
        className: `max-w-full max-h-full object-contain rounded-xl shadow-2xl`
      }), (0, M.jsx)(`button`, {
        type: `button`,
        className: `absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full px-3 py-1.5 transition flex items-center gap-1.5 text-xs font-bold border border-white/20`,
        children: `✕ बंद करें (Close)`
      })]
    })]
  });
}
function fn({
  article: e,
  lang: t = `hi`,
  onOpenArticle: n,
  onPlayTTS: r,
  isPlayingAudio: i = false,
  isBookmarked: a = false,
  onToggleBookmark: s,
  layout: c = `standard`
}) {
  let l = D.find(t => t.id === e.category) || D[1],
    u = t === `hi` ? l.nameHi : l.nameEn,
    d = t === `hi` ? e.titleHi : e.titleEn || e.titleHi,
    f = t === `hi` ? e.summaryHi : e.summaryEn || e.summaryHi,
    p = e => {
      try {
        let t = new Date() - new Date(e),
          n = Math.floor(t / 6e4);
        if (n < 60) return `${Math.max(1, n)} मिनट पहले`;
        let r = Math.floor(n / 60);
        return r < 24 ? `${r} घंटे पहले` : `${Math.floor(r / 24)} दिन पहले`;
      } catch {
        return `ताज़ा`;
      }
    },
    m = t => {
      t.stopPropagation();
      let n = `https://www.aryannewsagency.com/news/${e.id}`,
        r = ln(f || e.contentHi || ``),
        i = r ? r.length > 140 ? r.slice(0, 140) + `...` : r : ``,
        a = `*${ln(d)}*\n\n${i}\n\n👉 पूरी खबर एवं फोटो देखें:\n${n}\n\n*आर्यन न्यूज़ एजेंसी (ब्यावर)* - सबसे तेज, सबसे विश्वसनीय।`;
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(a)}`, `_blank`);
    },
    h = t => {
      t.stopPropagation();
      r(e);
    },
    g = t => {
      t.stopPropagation();
      s(e.id);
    };
  return c === `horizontal` ? (0, M.jsxs)(`article`, {
    onClick: () => n(e),
    className: `group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-3 sm:p-4 hover:shadow-lg transition-all duration-200 cursor-pointer flex gap-3 sm:gap-4 items-start`,
    children: [(0, M.jsx)(`div`, {
      className: `relative w-28 h-24 sm:w-36 sm:h-28 shrink-0 rounded-lg overflow-hidden bg-black`,
      children: e.image ? (0, M.jsxs)(M.Fragment, {
        children: [(0, M.jsx)(`img`, {
          src: e.image,
          alt: d,
          onError: event => {
            event.target.style.display = `none`;
            event.target.nextSibling && (event.target.nextSibling.style.display = `block`);
          },
          className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`,
          loading: `lazy`
        }), (0, M.jsx)(`div`, {
          style: {
            display: `none`
          },
          className: `w-full h-full absolute inset-0`,
          children: (0, M.jsx)(dn, {
            category: e.category,
            sourceName: e.sourceName,
            size: `horizontal`
          })
        }), (0, M.jsx)(`span`, {
          className: `absolute top-1 left-1 z-20 bg-red-600/90 text-white font-bold text-[9px] px-1.5 py-0.5 rounded shadow`,
          children: u
        })]
      }) : e.isLiveFeed ? (0, M.jsx)(dn, {
        category: e.category,
        sourceName: e.sourceName,
        articleTitle: d,
        size: `horizontal`
      }) : (0, M.jsxs)(M.Fragment, {
        children: [(0, M.jsx)(L, {
          images: e.gallery && e.gallery.length > 0 ? e.gallery : [e.image],
          videoUrl: e.videoUrl,
          mediaType: e.mediaType,
          title: d,
          aspectRatio: `w-full h-full`,
          autoPlayInterval: 3500,
          showControls: false
        }), (0, M.jsx)(`span`, {
          className: `absolute top-1 left-1 z-20 bg-red-600/90 text-white font-bold text-[9px] px-1.5 py-0.5 rounded shadow`,
          children: u
        })]
      })
    }), (0, M.jsxs)(`div`, {
      className: `flex-1 min-w-0 flex flex-col justify-between h-full`,
      children: [(0, M.jsxs)(`div`, {
        children: [(0, M.jsx)(`h3`, {
          className: `text-xs sm:text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-2 leading-snug`,
          children: d
        }), (0, M.jsx)(`p`, {
          className: `hidden sm:block text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1`,
          children: f
        })]
      }), (0, M.jsxs)(`div`, {
        className: `flex items-center justify-between mt-2 pt-1 border-t border-gray-50 dark:border-gray-800/80 text-[11px] text-gray-500`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2 flex-wrap`,
          children: [(0, M.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [(0, M.jsx)(re, {
              className: `w-3 h-3 text-gray-400`
            }), (0, M.jsx)(`span`, {
              children: p(e.publishedAt)
            })]
          }), (e.isGovtFeed || e.sourceName && e.sourceName.includes(`PIB`)) && (0, M.jsx)(`span`, {
            className: `text-[10px] text-blue-700 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200/50 dark:border-blue-800/40 truncate max-w-[130px] sm:max-w-none`,
            children: `स्रोत/फोटो: पत्र सूचना कार्यालय (PIB), भारत सरकार`
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [(0, M.jsx)(`button`, {
            onClick: h,
            className: `p-1.5 rounded-full transition ${i ? `bg-red-600 text-white animate-pulse` : `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-600`}`,
            title: `खबर सुनें`,
            children: (0, M.jsx)(fe, {
              className: `w-3.5 h-3.5`
            })
          }), (0, M.jsx)(`button`, {
            onClick: g,
            className: `p-1.5 rounded-full transition ${a ? `bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400` : `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600`}`,
            title: `सेव करें`,
            children: (0, M.jsx)(o, {
              className: `w-3.5 h-3.5`
            })
          }), (0, M.jsxs)(`button`, {
            onClick: m,
            className: `flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-1 rounded-md text-[10px] shadow-sm transition active:scale-95`,
            title: `व्हाट्सएप पर शेयर करें`,
            children: [(0, M.jsx)(w, {
              className: `w-3 h-3`
            }), (0, M.jsx)(`span`, {
              className: `hidden xs:inline`,
              children: `शेयर`
            })]
          })]
        })]
      })]
    })]
  }) : (0, M.jsxs)(`article`, {
    onClick: () => n(e),
    className: `group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between`,
    children: [(0, M.jsx)(`div`, {
      className: `relative aspect-[16/10] w-full overflow-hidden bg-black`,
      children: e.image ? (0, M.jsxs)(M.Fragment, {
        children: [(0, M.jsx)(`img`, {
          src: e.image,
          alt: d,
          onError: event => {
            event.target.style.display = `none`;
            event.target.nextSibling && (event.target.nextSibling.style.display = `block`);
          },
          className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
          loading: `lazy`
        }), (0, M.jsx)(`div`, {
          style: {
            display: `none`
          },
          className: `w-full h-full absolute inset-0`,
          children: (0, M.jsx)(dn, {
            category: e.category,
            sourceName: e.sourceName,
            size: `standard`
          })
        }), (0, M.jsx)(`span`, {
          className: `absolute top-2.5 left-2.5 z-20 bg-red-600 text-white font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-md`,
          children: u
        }), e.isBreaking && (0, M.jsx)(`span`, {
          className: `absolute top-2.5 right-2.5 z-20 bg-amber-500 text-gray-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow animate-pulse`,
          children: `ब्रेकिंग`
        })]
      }) : e.isLiveFeed ? (0, M.jsx)(dn, {
        category: e.category,
        sourceName: e.sourceName,
        articleTitle: d,
        size: `standard`
      }) : (0, M.jsxs)(M.Fragment, {
        children: [(0, M.jsx)(L, {
          images: e.gallery && e.gallery.length > 0 ? e.gallery : [e.image],
          videoUrl: e.videoUrl,
          mediaType: e.mediaType,
          title: d,
          aspectRatio: `w-full h-full`,
          autoPlayInterval: 3500,
          showControls: false
        }), (0, M.jsx)(`span`, {
          className: `absolute top-2.5 left-2.5 z-20 bg-red-600 text-white font-bold text-[10px] sm:text-xs px-2.5 py-1 rounded-full shadow-md`,
          children: u
        }), e.isBreaking && (0, M.jsx)(`span`, {
          className: `absolute top-2.5 right-2.5 z-20 bg-amber-500 text-gray-950 font-black text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow animate-pulse`,
          children: `ब्रेकिंग`
        })]
      })
    }), (0, M.jsxs)(`div`, {
      className: `p-3 sm:p-4 flex-1 flex flex-col justify-between`,
      children: [(0, M.jsxs)(`div`, {
        children: [(0, M.jsx)(`h3`, {
          className: `text-sm sm:text-base font-bold text-gray-900 dark:text-gray-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-2 leading-snug transition-colors`,
          children: d
        }), (0, M.jsx)(`p`, {
          className: `mt-1.5 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed`,
          children: f
        })]
      }), (0, M.jsxs)(`div`, {
        className: `mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2 text-[11px] flex-wrap`,
          children: [(0, M.jsxs)(`span`, {
            className: `flex items-center gap-1`,
            children: [(0, M.jsx)(re, {
              className: `w-3 h-3 text-gray-400`
            }), (0, M.jsx)(`span`, {
              children: p(e.publishedAt)
            })]
          }), (e.isGovtFeed || e.sourceName && e.sourceName.includes(`PIB`)) && (0, M.jsx)(`span`, {
            className: `text-[10px] text-blue-700 dark:text-blue-300 font-semibold bg-blue-50 dark:bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-200/50 dark:border-blue-800/40 truncate max-w-[150px]`,
            children: `स्रोत/फोटो: पत्र सूचना कार्यालय (PIB), भारत सरकार`
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [(0, M.jsx)(`button`, {
            onClick: h,
            className: `p-1.5 rounded-full transition ${i ? `bg-red-600 text-white animate-pulse` : `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-red-600`}`,
            title: `खबर सुनें`,
            children: (0, M.jsx)(fe, {
              className: `w-3.5 h-3.5`
            })
          }), (0, M.jsx)(`button`, {
            onClick: g,
            className: `p-1.5 rounded-full transition ${a ? `bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400` : `bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-amber-600`}`,
            title: `सेव करें`,
            children: (0, M.jsx)(o, {
              className: `w-3.5 h-3.5`
            })
          }), (0, M.jsxs)(`button`, {
            onClick: m,
            className: `flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2 py-1 rounded-lg text-[11px] shadow-sm transition active:scale-95`,
            title: `व्हाट्सएप पर शेयर करें`,
            children: [(0, M.jsx)(w, {
              className: `w-3 h-3`
            }), (0, M.jsx)(`span`, {
              children: `शेयर`
            })]
          })]
        })]
      })]
    })]
  });
}
function pn({
  articles: e = [],
  lang: t = `hi`,
  onOpenArticle: n,
  onPlayTTS: r,
  currentTTSId: i,
  bookmarks: o = [],
  onToggleBookmark: s,
  onSelectCategory: c
}) {
  if (!e || e.length === 0) return null;
  let u = e.find(e => (e.id.startsWith(`custom-`) || e.category === `beawar`) && e.isHero),
    d = e.find(e => e.category === `beawar` || e.id.startsWith(`custom-`)),
    f = u || d || e[0],
    p = e.filter(e => e.id !== f.id),
    m = p.filter(e => e.category === `national` || e.isGovtFeed || e.sourceName?.includes(`PIB`)),
    h = p.filter(e => e.category === `beawar` || e.id.startsWith(`custom-`)),
    g = p.filter(e => !m.some(t => t.id === e.id) && !h.some(t => t.id === e.id)),
    _ = [m[0], h[0] || g[0], m[1] || g[1]].filter(Boolean).slice(0, 3),
    v = t === `hi` ? f.titleHi : f.titleEn || f.titleHi,
    y = t === `hi` ? f.summaryHi : f.summaryEn || f.summaryHi;
  return (0, M.jsx)(`section`, {
    className: `py-3 sm:py-5 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800`,
    children: (0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center justify-between mb-2.5 sm:mb-3`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, M.jsx)(`div`, {
            className: `p-1.5 rounded-lg bg-red-600 text-white shadow-md shadow-red-500/30`,
            children: (0, M.jsx)(de, {
              className: `w-4 h-4 sm:w-5 sm:h-5 fill-current`
            })
          }), (0, M.jsxs)(`div`, {
            children: [(0, M.jsx)(`h2`, {
              className: `text-base sm:text-lg font-black text-gray-950 dark:text-white font-hindi leading-tight`,
              children: t === `hi` ? `प्रमुख सुर्खियां (टॉप मिक्स)` : `Top Headlines (Mixed Highlights)`
            }), (0, M.jsx)(`p`, {
              className: `text-[10px] sm:text-xs text-gray-500 dark:text-gray-400`,
              children: `ब्यावर, राजस्थान, देश-दुनिया व व्यापार की सबसे बड़ी खबरें`
            })]
          })]
        }), (0, M.jsxs)(`button`, {
          onClick: () => c(`beawar`),
          className: `flex items-center gap-1.5 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 bg-red-50 dark:bg-red-950/40 px-3 py-1.5 rounded-xl border border-red-200 dark:border-red-900/40 transition hover:scale-105 active:scale-95 shadow-sm`,
          children: [(0, M.jsx)(l, {
            className: `w-3.5 h-3.5`
          }), (0, M.jsx)(`span`, {
            children: `ब्यावर लोकल (और देखें)`
          }), (0, M.jsx)(a, {
            className: `w-3.5 h-3.5`
          })]
        })]
      }), (0, M.jsxs)(`div`, {
        className: `grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 items-stretch`,
        children: [(0, M.jsxs)(`div`, {
          onClick: () => n(f),
          className: `lg:col-span-7 group relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg w-full h-full min-h-[300px] flex flex-col justify-end`,
          children: [f.image ? (0, M.jsx)(`div`, {
            className: `absolute inset-0 w-full h-full`,
            children: (0, M.jsx)(`img`, {
              src: f.image,
              alt: v,
              className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-700`
            })
          }) : f.isLiveFeed ? (0, M.jsx)(`div`, {
            className: `absolute inset-0 w-full h-full`,
            children: (0, M.jsx)(dn, {
              category: f.category,
              sourceName: f.sourceName,
              articleTitle: v,
              size: `hero`
            })
          }) : (0, M.jsx)(`div`, {
            className: `absolute inset-0 w-full h-full`,
            children: (0, M.jsx)(L, {
              images: f.gallery && f.gallery.length > 0 ? f.gallery : [f.image],
              videoUrl: f.videoUrl,
              mediaType: f.mediaType,
              title: v,
              aspectRatio: `w-full h-full`,
              autoPlayInterval: 4e3,
              showControls: false,
              objectPosition: `object-left`
            })
          }), (0, M.jsx)(`div`, {
            className: `absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent`
          }), (0, M.jsxs)(`div`, {
            className: `absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 flex items-center gap-2`,
            children: [(0, M.jsxs)(`span`, {
              className: `bg-red-600 text-white text-[10px] sm:text-xs font-black px-2.5 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1`,
              children: [(0, M.jsx)(te, {
                className: `w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300`
              }), (0, M.jsx)(`span`, {
                children: `संपादकीय पसंद`
              })]
            }), (0, M.jsx)(`span`, {
              className: `bg-black/60 backdrop-blur-md text-amber-300 text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full border border-white/20`,
              children: f.category === `beawar` ? `ब्यावर विशेष` : f.category === `rajasthan` ? `राजस्थान` : f.category === `sports` ? `खेल जगत` : f.category === `business` ? `व्यापार` : `लाइव हेडलाइन`
            })]
          }), (0, M.jsxs)(`div`, {
            className: `relative z-10 p-3.5 sm:p-5 text-white`,
            children: [(0, M.jsx)(`h3`, {
              className: `text-base sm:text-xl md:text-2xl font-black font-hindi leading-tight drop-shadow-md group-hover:text-red-300 transition-colors line-clamp-2`,
              children: v
            }), (0, M.jsx)(`p`, {
              className: `mt-1.5 text-xs sm:text-sm text-gray-200 line-clamp-1 sm:line-clamp-2 leading-relaxed drop-shadow`,
              children: y
            }), (0, M.jsxs)(`div`, {
              className: `mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between flex-wrap gap-2 text-xs`,
              children: [(0, M.jsxs)(`div`, {
                className: `flex items-center gap-2.5 text-gray-300 text-[10px] sm:text-xs`,
                children: [(0, M.jsx)(`span`, {
                  className: `font-semibold text-white truncate max-w-[140px] sm:max-w-none`,
                  children: f.author
                }), (0, M.jsx)(`span`, {
                  children: `•`
                }), (0, M.jsx)(`span`, {
                  children: f.readTime
                })]
              }), (0, M.jsxs)(`div`, {
                className: `flex items-center gap-2`,
                children: [(0, M.jsxs)(`button`, {
                  onClick: event => {
                    event.stopPropagation();
                    r(f);
                  },
                  className: `flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition ${i === f.id ? `bg-red-600 text-white animate-pulse` : `bg-white/20 hover:bg-white/30 text-white`}`,
                  children: [(0, M.jsx)(fe, {
                    className: `w-3.5 h-3.5`
                  }), (0, M.jsx)(`span`, {
                    className: `hidden xs:inline`,
                    children: `खबर सुनें`
                  })]
                }), (0, M.jsxs)(`button`, {
                  onClick: event => {
                    event.stopPropagation();
                    let t = `https://www.aryannewsagency.com/news/${f.id}`,
                      n = ln(y || f.contentHi || ``),
                      r = n ? n.length > 140 ? n.slice(0, 140) + `...` : n : ``,
                      i = `*${ln(v)}*\n\n${r}\n\n👉 पूरी खबर एवं वीडियो देखें:\n${t}\n\n*आर्यन न्यूज़ एजेंसी (ब्यावर)*`;
                    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(i)}`, `_blank`);
                  },
                  className: `flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 sm:px-3 py-1 rounded-full text-xs shadow-lg transition active:scale-95`,
                  children: [(0, M.jsx)(w, {
                    className: `w-3.5 h-3.5`
                  }), (0, M.jsx)(`span`, {
                    children: `शेयर`
                  })]
                })]
              })]
            })]
          })]
        }), (0, M.jsxs)(`div`, {
          className: `lg:col-span-5 flex flex-col justify-between gap-2.5 h-full`,
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center justify-between pb-1 border-b border-gray-100 dark:border-gray-800`,
            children: [(0, M.jsxs)(`span`, {
              className: `text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1`,
              children: [(0, M.jsx)(ge, {
                className: `w-3.5 h-3.5 text-red-600`
              }), (0, M.jsx)(`span`, {
                children: `ट्रेंडिंग मिक्स (Trending Mix)`
              })]
            }), (0, M.jsx)(`span`, {
              className: `text-[10px] text-gray-400`,
              children: `लाइव अपडेट्स`
            })]
          }), (0, M.jsx)(`div`, {
            className: `flex flex-col gap-2 sm:gap-2.5 flex-1 justify-between`,
            children: _.map(e => (0, M.jsx)(fn, {
              article: e,
              lang: t,
              layout: `horizontal`,
              onOpenArticle: n,
              onPlayTTS: r,
              isPlayingAudio: i === e.id,
              isBookmarked: o.includes(e.id),
              onToggleBookmark: s
            }, e.id))
          })]
        })]
      }), p.length > 3 && (0, M.jsxs)(`div`, {
        className: `mt-6 pt-5 border-t border-gray-100 dark:border-gray-800`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center justify-between mb-3.5`,
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, M.jsx)(`span`, {
              className: `w-2 h-4 bg-red-600 rounded-full`
            }), (0, M.jsx)(`h3`, {
              className: `text-sm sm:text-base font-bold font-hindi text-gray-950 dark:text-white`,
              children: `अन्य प्रमुख सुर्खियां (देश, प्रदेश एवं ब्यावर)`
            })]
          }), (0, M.jsx)(`span`, {
            className: `text-[11px] text-gray-400`,
            children: `टॉप अपडेट्स`
          })]
        }), (0, M.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4`,
          children: (() => {
            let e = new Set([f.id, ..._.map(e => e.id)]),
              a = m.filter(t => !e.has(t.id)),
              c = h.filter(t => !e.has(t.id)),
              l = g.filter(t => !e.has(t.id)),
              u = [];
            for (let e = 0; e < 6; e++) if (e % 2 == 0 && a.length > 0) {
              u.push(a.shift());
            } else {
              if (c.length > 0) {
                u.push(c.shift());
              } else {
                if (a.length > 0) {
                  u.push(a.shift());
                } else {
                  l.length > 0 && u.push(l.shift());
                }
              }
            }
            return u.map(e => (0, M.jsx)(fn, {
              article: e,
              lang: t,
              layout: `standard`,
              onOpenArticle: n,
              onPlayTTS: r,
              isPlayingAudio: i === e.id,
              isBookmarked: o.includes(e.id),
              onToggleBookmark: s
            }, e.id));
          })()
        })]
      }), (0, M.jsx)(`div`, {
        className: `mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center`,
        children: (0, M.jsxs)(`button`, {
          onClick: () => c(`beawar`),
          className: `inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-xs sm:text-sm px-6 py-2.5 sm:py-3 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 active:scale-95 border border-red-500/30`,
          children: [(0, M.jsx)(l, {
            className: `w-4 h-4 text-amber-300`
          }), (0, M.jsx)(`span`, {
            children: `ब्यावर लोकल की और खबरें देखें (Beawar Local News →)`
          }), (0, M.jsx)(a, {
            className: `w-4 h-4`
          })]
        })
      })]
    })
  });
}
var mn = {
  beawar: l,
  rajasthan: d,
  national: he,
  sports: se,
  entertainment: pe,
  business: x,
  crime: be
};
function hn({
  categoryId: e,
  articles: t = [],
  lang: n = `hi`,
  onOpenArticle: r,
  onPlayTTS: i,
  currentTTSId: o,
  bookmarks: s = [],
  onToggleBookmark: c,
  onViewMoreCategory: u
}) {
  let d = D.find(t => t.id === e);
  if (!d) return null;
  let f = mn[e] || l,
    p = n === `hi` ? d.nameHi : d.nameEn,
    m = t.filter(t => t.category === e);
  return m.length === 0 ? e === `beawar` ? (0, M.jsx)(`section`, {
    className: `py-6 border-b border-gray-200 dark:border-gray-800`,
    children: (0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center gap-2.5 mb-4`,
        children: [(0, M.jsx)(`div`, {
          className: `p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 shadow-sm`,
          children: (0, M.jsx)(l, {
            className: `w-5 h-5`
          })
        }), (0, M.jsxs)(`div`, {
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, M.jsx)(`h3`, {
              className: `text-base sm:text-xl font-black text-gray-950 dark:text-white font-hindi`,
              children: n === `hi` ? `ब्यावर विशेष (लोकल न्यूज़)` : `Beawar Local News`
            }), (0, M.jsx)(`span`, {
              className: `text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold px-2 py-0.5 rounded-full`,
              children: `लाइव डेस्क`
            })]
          }), (0, M.jsx)(`p`, {
            className: `text-[11px] text-gray-500`,
            children: `चांग गेट, मेवाड़ी गेट, सेंदड़ा रोड व आसपास की खबरें`
          })]
        })]
      }), (0, M.jsxs)(`div`, {
        className: `bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950/20 border-2 border-dashed border-amber-300 dark:border-amber-800/60 rounded-3xl p-6 sm:p-8 text-center shadow-sm`,
        children: [(0, M.jsx)(`div`, {
          className: `w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner`,
          children: `📍`
        }), (0, M.jsx)(`h4`, {
          className: `text-base sm:text-lg font-black font-hindi text-gray-900 dark:text-white`,
          children: `अभी ब्यावर क्षेत्र की कोई नई खबर उपलब्ध नहीं है`
        }), (0, M.jsx)(`p`, {
          className: `text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-hindi mt-1.5 max-w-lg mx-auto leading-relaxed`,
          children: `हमारे स्थानीय संवाददाता एवं ब्यूरो द्वारा खबर अपलोड होते ही यहाँ सबसे पहले प्रदर्शित होगी। क्या आपके पास कोई स्थानीय समाचार है?`
        }), (0, M.jsx)(`div`, {
          className: `mt-5 flex flex-wrap items-center justify-center gap-3`,
          children: (0, M.jsx)(`a`, {
            href: `https://wa.me/919829058949?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%20%E0%A4%95%E0%A5%80%20%E0%A4%96%E0%A4%AC%E0%A4%B0%20%E0%A4%AD%E0%A5%87%E0%A4%9C%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4`,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition active:scale-95`,
            children: (0, M.jsx)(`span`, {
              children: `📲 ब्यावर की खबर व्हाट्सएप पर भेजें (+91 98290-58949)`
            })
          })
        })]
      })]
    })
  }) : null : (0, M.jsx)(`section`, {
    className: `py-4 sm:py-6 border-b border-gray-200 dark:border-gray-800`,
    children: (0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center justify-between mb-4`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2.5`,
          children: [(0, M.jsx)(`div`, {
            className: `p-2 rounded-xl bg-gray-100 dark:bg-gray-800 ${d.color} shadow-sm`,
            children: (0, M.jsx)(f, {
              className: `w-5 h-5`
            })
          }), (0, M.jsxs)(`div`, {
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [(0, M.jsx)(`h3`, {
                className: `text-base sm:text-xl font-black text-gray-950 dark:text-white font-hindi leading-tight`,
                children: p
              }), d.isHot && (0, M.jsx)(`span`, {
                className: `text-[10px] bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold px-2 py-0.5 rounded-full`,
                children: `विशेष`
              })]
            }), (0, M.jsxs)(`p`, {
              className: `text-[11px] text-gray-500 dark:text-gray-400`,
              children: [m.length, ` ताज़ा रिपोर्ट्स`]
            })]
          })]
        }), u && (0, M.jsxs)(`button`, {
          onClick: () => u(e),
          className: `flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 transition`,
          children: [(0, M.jsx)(`span`, {
            children: `और देखें`
          }), (0, M.jsx)(a, {
            className: `w-3.5 h-3.5`
          })]
        })]
      }), (0, M.jsx)(`div`, {
        className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5`,
        children: m.slice(0, 6).map(e => (0, M.jsx)(fn, {
          article: e,
          lang: n,
          layout: `standard`,
          onOpenArticle: r,
          onPlayTTS: i,
          isPlayingAudio: o === e.id,
          isBookmarked: s.includes(e.id),
          onToggleBookmark: c
        }, e.id))
      }), u && (0, M.jsx)(`div`, {
        className: `mt-5 pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center`,
        children: (0, M.jsxs)(`button`, {
          onClick: () => u(e),
          className: `inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-red-600 dark:text-red-400 hover:text-red-700 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-900/40 px-5 py-2.5 rounded-xl border border-red-200 dark:border-red-900/40 transition active:scale-95 shadow-sm`,
          children: [(0, M.jsxs)(`span`, {
            children: [p, ` की सभी खबरें देखें (और देखें)`]
          }), (0, M.jsx)(a, {
            className: `w-4 h-4`
          })]
        })
      })]
    })
  });
}
function gn({
  onOpenCookiePolicy: e
}) {
  let [t, n] = (0, j.useState)(false);
  return (0, j.useEffect)(() => {
    try {
      if (!localStorage.getItem(`ana_cookie_consent`)) {
        let e = setTimeout(() => n(true), 1200);
        return () => clearTimeout(e);
      }
    } catch {}
  }, []), t ? (0, M.jsx)(`div`, {
    className: `fixed bottom-0 left-0 right-0 z-50 p-2 sm:p-4 animate-in fade-in slide-in-from-bottom duration-500 pointer-events-none font-hindi`,
    children: (0, M.jsx)(`div`, {
      className: `max-w-4xl mx-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 p-3 sm:p-4 pointer-events-auto`,
      children: (0, M.jsxs)(`div`, {
        className: `flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-start gap-2.5 flex-1`,
          children: [(0, M.jsx)(`div`, {
            className: `p-2 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 shrink-0`,
            children: (0, M.jsx)(ce, {
              className: `w-5 h-5`
            })
          }), (0, M.jsxs)(`div`, {
            className: `space-y-0.5`,
            children: [(0, M.jsxs)(`h4`, {
              className: `text-sm font-black text-gray-900 dark:text-white flex items-center gap-2`,
              children: [(0, M.jsx)(`span`, {
                children: `कुकी एवं डेटा उपयोग सहमति`
              }), (0, M.jsx)(`span`, {
                className: `text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold px-2 py-0.5 rounded-full`,
                children: `सुरक्षित अनुभव`
              })]
            }), (0, M.jsx)(`p`, {
              className: `text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 leading-snug`,
              children: `हम आपके पठन अनुभव (डार्क मोड, बुकमार्क, आदि) हेतु आवश्यक कुकीज़ का उपयोग करते हैं।`
            })]
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex flex-wrap items-center gap-2 w-full sm:w-auto shrink-0 pt-1 sm:pt-0`,
          children: [(0, M.jsx)(`button`, {
            onClick: () => {
              n(false);
              e?.();
            },
            className: `px-2 py-1.5 text-[11px] font-bold text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition`,
            children: `नीति पढ़ें`
          }), (0, M.jsx)(`button`, {
            onClick: () => {
              try {
                localStorage.setItem(`ana_cookie_consent`, `essential_only`);
                localStorage.setItem(`ana_cookie_date`, new Date().toISOString());
              } catch {}
              n(false);
            },
            className: `flex-1 sm:flex-none px-3 py-1.5 text-[11px] font-bold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition active:scale-95`,
            children: `केवल आवश्यक`
          }), (0, M.jsxs)(`button`, {
            onClick: () => {
              try {
                localStorage.setItem(`ana_cookie_consent`, `accepted`);
                localStorage.setItem(`ana_cookie_date`, new Date().toISOString());
              } catch {}
              n(false);
            },
            className: `flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition active:scale-95`,
            children: [(0, M.jsx)(xe, {
              className: `w-3 h-3`
            }), (0, M.jsx)(`span`, {
              children: `स्वीकार करें`
            })]
          })]
        })]
      })
    })
  }) : null;
}
function _n({
  activeTab: e,
  onSelectTab: t,
  onOpenQuickRead: n,
  onOpenMobileMenu: r,
  activeCategoryIds: a
}) {
  return (0, M.jsx)(`div`, {
    className: `lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 pb-safe shadow-2xl`,
    children: (0, M.jsxs)(`div`, {
      className: `flex items-center justify-around py-1.5 px-2`,
      children: [(0, M.jsxs)(`button`, {
        onClick: () => t(`all`),
        className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition ${e === `all` ? `text-red-600 dark:text-red-400 font-bold` : `text-gray-500 dark:text-gray-400 hover:text-gray-900`}`,
        children: [(0, M.jsx)(i, {
          className: `w-5 h-5`
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] mt-0.5`,
          children: `होम`
        })]
      }), (0, M.jsxs)(`button`, {
        onClick: () => t(`beawar`),
        className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition ${e === `beawar` ? `text-red-600 dark:text-red-400 font-bold` : `text-gray-500 dark:text-gray-400 hover:text-gray-900`}`,
        children: [(0, M.jsxs)(`div`, {
          className: `relative`,
          children: [(0, M.jsx)(l, {
            className: `w-5 h-5`
          }), (0, M.jsx)(`span`, {
            className: `absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping`
          })]
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] mt-0.5`,
          children: `ब्यावर`
        })]
      }), (0, M.jsxs)(`button`, {
        onClick: n,
        className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl text-red-600 transition -mt-3`,
        children: [(0, M.jsx)(`div`, {
          className: `w-10 h-10 rounded-full bg-gradient-to-tr from-red-600 to-amber-500 text-white flex items-center justify-center shadow-lg shadow-red-500/30`,
          children: (0, M.jsx)(T, {
            className: `w-5 h-5 fill-current`
          })
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] mt-0.5 font-bold text-gray-800 dark:text-gray-200`,
          children: `शॉर्ट्स`
        })]
      }), (!a || a.has(`rajasthan`)) && (0, M.jsxs)(`button`, {
        onClick: () => t(`rajasthan`),
        className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl transition ${e === `rajasthan` ? `text-red-600 dark:text-red-400 font-bold` : `text-gray-500 dark:text-gray-400 hover:text-gray-900`}`,
        children: [(0, M.jsx)(d, {
          className: `w-5 h-5`
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] mt-0.5`,
          children: `राजस्थान`
        })]
      }), (0, M.jsxs)(`button`, {
        onClick: r,
        className: `flex flex-col items-center justify-center py-1 px-2 rounded-xl text-gray-500 dark:text-gray-400 hover:text-gray-900 transition`,
        children: [(0, M.jsx)(E, {
          className: `w-5 h-5`
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] mt-0.5`,
          children: `मेन्यू`
        })]
      })]
    })
  });
}
function vn({
  onSelectCategory: e,
  onOpenSubmitNews: t,
  onOpenLegal: n,
  lang: r = `hi`,
  activeCategoryIds: i
}) {
  return (0, M.jsx)(`footer`, {
    className: `bg-gray-950 text-gray-300 pt-10 pb-20 lg:pb-10 border-t border-gray-800 transition-colors`,
    children: (0, M.jsxs)(`div`, {
      className: `max-w-7xl mx-auto px-4 sm:px-6`,
      children: [(0, M.jsxs)(`div`, {
        className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800`,
        children: [(0, M.jsxs)(`div`, {
          className: `space-y-4`,
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center gap-3`,
            children: [(0, M.jsx)(`div`, {
              className: `w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-lg shrink-0 overflow-hidden border border-gray-700`,
              children: (0, M.jsx)(`img`, {
                src: `/logo.png`,
                alt: `Aryan News Agency Logo`,
                className: `w-10 h-10 object-contain`
              })
            }), (0, M.jsxs)(`div`, {
              children: [(0, M.jsx)(`h3`, {
                className: `text-xl font-black text-white font-hindi`,
                children: O.nameHi
              }), (0, M.jsx)(`span`, {
                className: `text-xs text-red-400 font-semibold`,
                children: O.nameEn
              })]
            })]
          }), (0, M.jsx)(`p`, {
            className: `text-xs text-gray-400 leading-relaxed font-hindi`,
            children: `ब्यावर व संपूर्ण राजस्थान का प्रमुख डिजिटल समाचार मंच। निष्पक्ष, सटीक और सबसे तेज स्थानीय व राष्ट्रीय समाचार कवरेज।`
          }), (0, M.jsx)(`div`, {
            className: `pt-1`,
            children: (0, M.jsxs)(`a`, {
              href: `https://wa.me/${O.whatsapp}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%A8%20%E0%A4%A8%E0%A5%8D%E0%A4%AF%E0%A5%82%E0%A4%9C%E0%A4%BC%20%E0%A4%8F%E0%A4%9C%E0%A5%87%E0%A4%82%E0%A4%B8%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A5%8D%E0%A4%9E%E0%A4%BE%E0%A4%AA%E0%A4%A8%20%E0%A4%A6%E0%A5%87%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              className: `inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow`,
              children: [(0, M.jsx)(ye, {
                className: `w-3.5 h-3.5`
              }), (0, M.jsx)(`span`, {
                children: `विज्ञापन / प्रेस रिलीज संपर्क`
              })]
            })
          })]
        }), (0, M.jsxs)(`div`, {
          children: [(0, M.jsx)(`h4`, {
            className: `text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2`,
            children: `समाचार श्रेणियां`
          }), (0, M.jsx)(`div`, {
            className: `grid grid-cols-2 gap-2 text-xs`,
            children: D.filter(e => !i || e.id === `all` || e.id === `beawar` || i.has(e.id)).map(t => (0, M.jsxs)(`button`, {
              onClick: () => e && e(t.id),
              className: `text-left text-gray-400 hover:text-red-400 transition py-1 font-hindi`,
              children: [`• `, r === `hi` ? t.nameHi : t.nameEn]
            }, t.id))
          })]
        }), (0, M.jsxs)(`div`, {
          children: [(0, M.jsx)(`h4`, {
            className: `text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2`,
            children: `कार्यालय संपर्क`
          }), (0, M.jsxs)(`ul`, {
            className: `space-y-3 text-xs text-gray-400`,
            children: [(0, M.jsxs)(`li`, {
              className: `flex items-start gap-2.5`,
              children: [(0, M.jsx)(l, {
                className: `w-4 h-4 text-red-500 shrink-0 mt-0.5`
              }), (0, M.jsx)(`span`, {
                children: O.address
              })]
            }), (0, M.jsxs)(`li`, {
              className: `flex items-center gap-2.5`,
              children: [(0, M.jsx)(h, {
                className: `w-4 h-4 text-emerald-500 shrink-0`
              }), (0, M.jsx)(`a`, {
                href: `tel:${O.phonePrimary}`,
                className: `hover:text-white transition font-sans`,
                children: O.phonePrimary
              })]
            }), (0, M.jsxs)(`li`, {
              className: `flex items-center gap-2.5`,
              children: [(0, M.jsx)(S, {
                className: `w-4 h-4 text-blue-400 shrink-0`
              }), (0, M.jsx)(`a`, {
                href: `mailto:${O.email}`,
                className: `hover:text-white transition`,
                children: O.email
              })]
            }), (0, M.jsxs)(`li`, {
              className: `flex items-center gap-2.5`,
              children: [(0, M.jsx)(he, {
                className: `w-4 h-4 text-amber-400 shrink-0`
              }), (0, M.jsx)(`a`, {
                href: `https://www.aryannewsagency.com/`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `hover:text-white transition`,
                children: O.domain
              })]
            })]
          })]
        }), (0, M.jsxs)(`div`, {
          children: [(0, M.jsx)(`h4`, {
            className: `text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-red-600 pl-2`,
            children: `गूगल मैप्स व स्थान`
          }), (0, M.jsxs)(`div`, {
            className: `bg-gray-900 p-3 rounded-xl border border-gray-800 space-y-2`,
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center gap-2 text-xs font-semibold text-gray-200`,
              children: [(0, M.jsx)(_e, {
                className: `w-4 h-4 text-emerald-400`
              }), (0, M.jsx)(`span`, {
                children: `गूगल प्रमाणित व्यापार प्रोफ़ाइल`
              })]
            }), (0, M.jsx)(`p`, {
              className: `text-[11px] text-gray-400`,
              children: `आर्यन न्यूज़ एजेंसी, 5, 5 (1) पुराना बस स्टैंड ब्यावर - 305901 (राजस्थान)`
            }), (0, M.jsxs)(`a`, {
              href: `https://share.google/Ym10Z0EfA9LH3UnfV`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              className: `inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 pt-1`,
              children: [(0, M.jsx)(`span`, {
                children: `गूगल मैप्स पर देखें`
              }), (0, M.jsx)(me, {
                className: `w-3.5 h-3.5`
              })]
            })]
          }), (0, M.jsx)(`div`, {
            className: `mt-3`,
            children: (0, M.jsx)(`button`, {
              onClick: t,
              className: `w-full text-center text-xs font-bold text-white bg-red-700/80 hover:bg-red-600 py-2 rounded-xl transition shadow`,
              children: `नागरिक पत्रकारिता: अपनी खबर भेजें`
            })
          })]
        })]
      }), (0, M.jsxs)(`div`, {
        className: `mt-8 p-4 rounded-2xl bg-gray-900/80 border border-gray-800 text-[11px] text-gray-400 leading-relaxed font-hindi space-y-2`,
        children: [(0, M.jsx)(`p`, {
          className: `font-bold text-gray-300`,
          children: `⚖️ कॉपीराइट एवं स्रोत अस्वीकरण (Copyright Notice):`
        }), (0, M.jsx)(`p`, {
          children: `आर्यन न्यूज़ एजेंसी (aryannewsagency.com) पर प्रकाशित ब्यावर व स्थानीय समाचार हमारे संवाददाताओं द्वारा तैयार किए जाते हैं। अन्य प्रकाशकों की खबरों के केवल शीर्षक व संक्षिप्त अंश मूल स्रोत के लिंक के साथ दिखाए जाते हैं; सभी अधिकार मूल प्रकाशकों के हैं।`
        }), (0, M.jsxs)(`p`, {
          children: [`समस्त बौद्धिक संपदा अधिकार एवं ट्रेडमार्क उनके संबंधित मूल प्रकाशकों के पास पूर्णतः सुरक्षित हैं। किसी भी सामग्री या कॉपीराइट से संबंधित जानकारी अथवा आपत्ति हेतु कृपया `, (0, M.jsx)(`a`, {
            href: `mailto:info@aryannewsagency.com`,
            className: `text-red-400 underline font-sans`,
            children: `info@aryannewsagency.com`
          }), ` पर संपर्क करें।`]
        })]
      }), (0, M.jsxs)(`div`, {
        className: `pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500`,
        children: [(0, M.jsxs)(`p`, {
          className: `text-center sm:text-left`,
          children: [`© `, new Date().getFullYear(), ` `, (0, M.jsx)(`strong`, {
            className: `text-gray-300`,
            children: `Aryan News Agency (आर्यन न्यूज़ एजेंसी)`
          }), `. सर्वाधिकार सुरक्षित।`]
        }), (0, M.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-center gap-3`,
          children: [(0, M.jsx)(`button`, {
            onClick: () => n && n(`about`),
            className: `hover:text-gray-300 transition`,
            children: `हमारे बारे में`
          }), (0, M.jsx)(`span`, {
            children: `•`
          }), (0, M.jsx)(`button`, {
            onClick: () => n && n(`grievance`),
            className: `hover:text-gray-300 transition`,
            children: `शिकायत निवारण`
          }), (0, M.jsx)(`span`, {
            children: `•`
          }), (0, M.jsx)(`button`, {
            onClick: () => n && n(`terms`),
            className: `hover:text-gray-300 transition`,
            children: `नियम व शर्तें`
          }), (0, M.jsx)(`span`, {
            children: `•`
          }), (0, M.jsx)(`button`, {
            onClick: () => n && n(`privacy`),
            className: `hover:text-gray-300 transition`,
            children: `गोपनीयता नीति`
          }), (0, M.jsx)(`span`, {
            children: `•`
          }), (0, M.jsx)(`button`, {
            onClick: () => n && n(`cookies`),
            className: `hover:text-gray-300 transition`,
            children: `कुकी नीति`
          }), (0, M.jsx)(`span`, {
            children: `•`
          }), (0, M.jsx)(`span`, {
            className: `text-gray-600`,
            children: `ब्यावर (राज.)`
          })]
        })]
      })]
    })
  });
}
var yn = `arya_notified_beawar_articles`,
  bn = `arya_beawar_notification_dismissed`,
  xn = {
    isSupported() {
      return `Notification` in window && `serviceWorker` in navigator;
    },
    getPermission() {
      return this.isSupported() ? Notification.permission : `denied`;
    },
    isPromptDismissed() {
      try {
        return localStorage.getItem(bn) === `true`;
      } catch {
        return false;
      }
    },
    dismissPrompt() {
      try {
        localStorage.setItem(bn, `true`);
      } catch {}
    },
    async registerServiceWorker() {
      if (!(`serviceWorker` in navigator)) return null;
      try {
        return await navigator.serviceWorker.register(`/sw.js`, {
          scope: `/`
        });
      } catch (e) {
        return console.warn(`Service Worker registration skipped or failed:`, e), null;
      }
    },
    async requestPermission() {
      if (!this.isSupported()) return `denied`;
      try {
        let e = await Notification.requestPermission();
        return e === `granted` && (await this.registerServiceWorker()), e;
      } catch (e) {
        return console.error(`Permission request failed:`, e), `denied`;
      }
    },
    async showBeawarNotification(e) {
      if (this.getPermission() !== `granted`) return;
      let t = `🔴 ब्यावर ब्रेकिंग: ${e.titleHi || e.title || `नई खबर`}`,
        n = {
          body: (e.summaryHi || e.contentHi || e.description || ``).replace(/<[^>]*>?/gm, ``).slice(0, 110) + `...`,
          icon: e.imageUrl || `/images/agency-office.jpg`,
          badge: `/favicon.png`,
          tag: `beawar-${e.id}`,
          renotify: true,
          data: {
            url: `/#/news/${e.id || ``}`
          }
        };
      try {
        if (`serviceWorker` in navigator) {
          let e = await navigator.serviceWorker.getRegistration();
          if (e) {
            await e.showNotification(t, n);
            return;
          }
        }
        new Notification(t, n);
      } catch (e) {
        console.warn(`Could not display notification:`, e);
      }
    },
    checkAndNotifyBeawarArticles(e = []) {
      if (this.getPermission() !== `granted` || !Array.isArray(e) || e.length === 0) return;
      let t = [];
      try {
        let e = localStorage.getItem(yn);
        e && (t = JSON.parse(e));
      } catch {
        t = [];
      }
      let n = e.filter(e => {
        if (!e) return false;
        let t = (e.category || ``).toLowerCase(),
          n = Array.isArray(e.tags) ? e.tags.join(` `).toLowerCase() : ``,
          r = typeof e.id == `string` && e.id.startsWith(`custom-`);
        return t === `beawar` || n.includes(`beawar`) || n.includes(`ब्यावर`) || r;
      });
      if (!localStorage.getItem(yn)) {
        try {
          localStorage.setItem(yn, JSON.stringify(n.map(e => e.id).filter(Boolean)));
        } catch {}
        return;
      }
      let r = n.filter(e => e.id && !t.includes(e.id));
      if (r.length > 0) {
        let e = r[0];
        this.showBeawarNotification(e);
        let n = Array.from(new Set([...t, ...r.map(e => e.id)]));
        try {
          localStorage.setItem(yn, JSON.stringify(n.slice(-200)));
        } catch {}
      }
    }
  };
function Sn() {
  let [e, t] = (0, j.useState)(`default`),
    [n, r] = (0, j.useState)(false),
    [i, a] = (0, j.useState)(false);
  (0, j.useEffect)(() => {
    if (!xn.isSupported()) return;
    let e = xn.getPermission();
    if (t(e), e === 'default' && !xn.isPromptDismissed()) {
      let e = setTimeout(() => {
        r(true);
      }, 4e3);
      return () => clearTimeout(e);
    }
  }, []);
  let o = async () => {
      a(true);
      let e = await xn.requestPermission();
      t(e);
      a(false);
      r(false);
    },
    l = () => {
      xn.dismissPrompt();
      r(false);
    };
  return xn.isSupported() ? (0, M.jsx)(M.Fragment, {
    children: n && e === 'default' && (0, M.jsx)(`div`, {
      className: `fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300`,
      children: (0, M.jsx)(`div`, {
        className: `bg-white dark:bg-gray-900 border-2 border-red-500/30 dark:border-red-500/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md`,
        children: (0, M.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [(0, M.jsx)(`div`, {
            className: `w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center shrink-0`,
            children: (0, M.jsx)(s, {
              className: `w-5 h-5 animate-bounce`
            })
          }), (0, M.jsxs)(`div`, {
            className: `flex-1 min-w-0`,
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center justify-between gap-2`,
              children: [(0, M.jsx)(`h4`, {
                className: `text-sm font-bold font-hindi text-gray-900 dark:text-white`,
                children: `🔴 ब्यावर ताज़ा ख़बर सूचनाएं`
              }), (0, M.jsx)(`button`, {
                onClick: l,
                className: `text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1`,
                title: `बंद करें`,
                children: (0, M.jsx)(ue, {
                  className: `w-4 h-4`
                })
              })]
            }), (0, M.jsxs)(`p`, {
              className: `text-xs text-gray-600 dark:text-gray-300 mt-1 font-hindi leading-relaxed`,
              children: [`केवल `, (0, M.jsx)(`strong`, {
                children: `ब्यावर शहर व आसपास`
              }), ` की नई ब्रेकिंग खबरों का तुरंत अलर्ट अपने फोन/स्क्रीन पर पाएं। (फालतू सूचनाएं नहीं भेजी जाएंगी)`]
            }), (0, M.jsxs)(`div`, {
              className: `mt-3 flex items-center gap-2`,
              children: [(0, M.jsxs)(`button`, {
                onClick: o,
                disabled: i,
                className: `flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-bold text-xs py-2 px-3 rounded-xl shadow-md transition font-hindi flex items-center justify-center gap-1.5`,
                children: [(0, M.jsx)(c, {
                  className: `w-3.5 h-3.5`
                }), (0, M.jsx)(`span`, {
                  children: i ? `स्वीकार किया जा रहा है...` : `हां, सूचनाएं चालू करें`
                })]
              }), (0, M.jsx)(`button`, {
                onClick: l,
                className: `text-xs font-semibold text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 px-3 py-2 rounded-xl transition font-hindi`,
                children: `बाद में`
              })]
            })]
          })]
        })
      })
    })
  }) : null;
}
var Cn = `https://giorcyxpcgpmvjxgfucs.supabase.co`,
  wn = `sb_publishable_tv41PJI403eInRMtvKfyXQ_hl2LPoJ5`,
  R = !(!Cn.startsWith(`https://`) || Cn.includes(`your-project`));
R || console.warn(`[Supabase] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY not configured. Running with fallback local storage.`);
var z = R ? Ce(Cn, wn, {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }) : null,
  Tn = {
    BOOKMARKS: `arya_news_bookmarks_v4`,
    LANG: `arya_news_lang_v4`,
    THEME: `arya_news_theme_v4`
  };
function En(e, {
  gallery: t,
  videoUrl: n,
  mediaType: r,
  mediaCaption: i,
  isHidden: a
}) {
  let o = (e || ``).replace(/<!--MEDIA_META:[\s\S]*?-->\n?/g, ``).trim(),
    s = Array.isArray(t) ? t.filter(Boolean) : [];
  if (s.length <= 1 && !n && (!r || r === `image`) && !i && a === undefined) return o;
  let c = {
    gallery: s,
    videoUrl: n || null,
    mediaType: r || (n ? `video` : s.length > 1 ? `gallery` : `image`),
    mediaCaption: i || `फोटो / वीडियो: आर्यन न्यूज़ एजेंसी डिजिटल नेटवर्क (ब्यावर)`,
    isHidden: a === true
  };
  return `<!--MEDIA_META:${JSON.stringify(c)}-->\n${o}`;
}
function Dn(e, t = {}) {
  let n = e || ``,
    r = t.gallery || [],
    i = t.video_url || t.videoUrl || null,
    a = t.media_type || t.mediaType || `image`,
    o = t.mediaCaption || `फोटो / वीडियो: आर्यन न्यूज़ एजेंसी डिजिटल नेटवर्क (ब्यावर)`,
    s = t.isHidden === true,
    c = n.match(/<!--MEDIA_META:([\s\S]*?)-->/);
  if (c) try {
    let e = JSON.parse(c[1]);
    Array.isArray(e.gallery) && e.gallery.length > 0 && (r = e.gallery);
    e.videoUrl && (i = e.videoUrl);
    e.mediaType && (a = e.mediaType);
    typeof e.isHidden == `boolean` && (s = e.isHidden);
    e.mediaCaption && (o = e.mediaCaption);
    n = n.replace(/<!--MEDIA_META:[\s\S]*?-->\n?/, ``).trim();
  } catch (e) {
    console.warn(`[StorageService] Failed to parse MEDIA_META:`, e);
  }
  return (!r || r.length === 0) && t.image && (r = [t.image]), i && (!a || a === `image`) ? a = `video` : r.length > 1 && (!a || a === `image`) && (a = `gallery`), {
    content: n,
    gallery: r,
    videoUrl: i,
    mediaType: a,
    mediaCaption: o,
    isHidden: s
  };
}
var B = {
  async fetchCustomArticles() {
    if (!R || !z) return console.info(`[StorageService] Supabase not configured. Using empty Beawar custom list.`), [];
    try {
      let {
        data: e,
        error: t
      } = await z.from(`articles`).select(`*`).order(`published_at`, {
        ascending: false
      });
      if (t) return console.error(`[StorageService] Error fetching articles from Supabase:`, t.message), [];
      if (!e) return [];
      let n = e.filter(e => e.category && !e.category.startsWith(`_`) && e.category !== `_system` && e.category !== `_advertisement`).map(e => {
        let {
            content: t,
            gallery: n,
            videoUrl: r,
            mediaType: i,
            mediaCaption: a,
            isHidden: o
          } = Dn(e.content_hi, e),
          {
            content: s
          } = Dn(e.content_en || e.content_hi, e);
        return {
          id: e.id,
          titleHi: e.title_hi,
          titleEn: e.title_en || e.title_hi,
          summaryHi: e.summary_hi,
          summaryEn: e.summary_en || e.summary_hi,
          contentHi: t,
          contentEn: s || t,
          category: e.category || `beawar`,
          image: e.image,
          gallery: n && n.length > 0 ? n : e.image ? [e.image] : [],
          videoUrl: r,
          mediaType: i,
          mediaCaption: a,
          isHidden: o,
          publishedAt: e.published_at,
          author: e.author || `आर्यन ब्यूरो, ब्यावर`,
          isHero: !!e.is_hero,
          isTrending: !!e.is_trending,
          isBreaking: !!e.is_breaking,
          readTime: e.read_time || `2 मिनट`,
          views: e.views || 0,
          created_at: e.created_at,
          updated_at: e.updated_at
        };
      });
      return this.setCachedCustomArticlesSync(n), n;
    } catch (e) {
      return console.error(`[StorageService] fetchCustomArticles error:`, e.message), this.getCachedCustomArticlesSync();
    }
  },
  getCachedCustomArticlesSync() {
    try {
      let e = localStorage.getItem(`arya_custom_articles_cache_v1`);
      if (e) {
        let t = JSON.parse(e);
        if (Array.isArray(t) && t.length > 0) return t;
      }
    } catch {}
    return [];
  },
  setCachedCustomArticlesSync(e) {
    try {
      Array.isArray(e) && localStorage.setItem(`arya_custom_articles_cache_v1`, JSON.stringify(e.slice(0, 50)));
    } catch {}
  },
  async fetchArticleById(e) {
    if (!R || !z || !e) return null;
    try {
      let {
        data: t,
        error: n
      } = await z.from(`articles`).select(`*`).eq(`id`, e).maybeSingle();
      if (n || !t || t.category === `_system` || t.category === `_advertisement` || t.category?.startsWith(`_`)) return null;
      let {
          content: r,
          gallery: i,
          videoUrl: a,
          mediaType: o,
          mediaCaption: s,
          isHidden: c
        } = Dn(t.content_hi, t),
        {
          content: l
        } = Dn(t.content_en || t.content_hi, t);
      return {
        id: t.id,
        titleHi: t.title_hi,
        titleEn: t.title_en || t.title_hi,
        summaryHi: t.summary_hi,
        summaryEn: t.summary_en || t.summary_hi,
        contentHi: r,
        contentEn: l || r,
        category: t.category || `beawar`,
        image: t.image,
        gallery: i && i.length > 0 ? i : t.image ? [t.image] : [],
        videoUrl: a,
        mediaType: o,
        mediaCaption: s,
        isHidden: c,
        publishedAt: t.published_at,
        author: t.author || `आर्यन ब्यूरो, ब्यावर`,
        isHero: !!t.is_hero,
        isTrending: !!t.is_trending,
        isBreaking: !!t.is_breaking,
        readTime: t.read_time || `2 मिनट`,
        views: t.views || 0,
        created_at: t.created_at,
        updated_at: t.updated_at
      };
    } catch (e) {
      return console.warn(`[StorageService] fetchArticleById notice:`, e.message), null;
    }
  },
  async incrementArticleViews(e) {
    if (R && z && e) try {
      let {
        error: t
      } = await z.rpc(`increment_article_views`, {
        article_id: e
      });
      if (!t) return;
      let {
          data: n
        } = await z.from(`articles`).select(`views`).eq(`id`, e).maybeSingle(),
        r = (n?.views || 0) + 1;
      await z.from(`articles`).update({
        views: r
      }).eq(`id`, e);
    } catch (e) {
      console.warn(`[StorageService] incrementArticleViews notice:`, e.message);
    }
  },
  async saveArticle(e) {
    if (!R || !z) throw Error(`Supabase credentials not configured in environment variables.`);
    let t = Array.isArray(e.gallery) ? e.gallery.filter(Boolean) : e.image ? [e.image] : [],
      n = t[0] || e.image || null,
      r = e.videoUrl || null,
      i = e.mediaType || (r ? `video` : t.length > 1 ? `gallery` : `image`),
      a = e.isHidden === true,
      o = e.mediaCaption || `फोटो / वीडियो: आर्यन न्यूज़ एजेंसी डिजिटल नेटवर्क (ब्यावर)`,
      s = En(e.contentHi, {
        gallery: t,
        videoUrl: r,
        mediaType: i,
        mediaCaption: o,
        isHidden: a
      }),
      c = {
        id: e.id || `custom-bwr-${Date.now()}`,
        title_hi: e.titleHi,
        title_en: e.titleEn || e.titleHi,
        summary_hi: e.summaryHi,
        summary_en: e.summaryEn || e.summaryHi,
        content_hi: s,
        content_en: e.contentEn || e.contentHi,
        category: e.category || `beawar`,
        image: n,
        published_at: e.publishedAt || new Date().toISOString(),
        author: e.author || `आर्यन ब्यूरो, ब्यावर`,
        is_hero: !!e.isHero,
        is_trending: !!e.isTrending,
        is_breaking: !!e.isBreaking,
        read_time: e.readTime || `2 मिनट`,
        views: e.views || 0,
        updated_at: new Date().toISOString()
      },
      {
        data: l,
        error: u
      } = await z.from(`articles`).upsert(c).select();
    if (u) throw console.error(`[StorageService] Error saving article to Supabase:`, u.message), u;
    try {
      let n = this.getCachedCustomArticlesSync(),
        s = {
          id: c.id,
          titleHi: c.title_hi,
          titleEn: c.title_en,
          summaryHi: c.summary_hi,
          summaryEn: c.summary_en,
          contentHi: e.contentHi,
          contentEn: e.contentEn || e.contentHi,
          category: c.category,
          image: c.image,
          gallery: t,
          videoUrl: r,
          mediaType: i,
          mediaCaption: o,
          isHidden: a,
          publishedAt: c.published_at,
          author: c.author,
          isHero: c.is_hero,
          isTrending: c.is_trending,
          isBreaking: c.is_breaking,
          readTime: c.read_time,
          views: c.views || 0,
          updated_at: c.updated_at
        },
        l = n.filter(e => e.id !== c.id);
      this.setCachedCustomArticlesSync([s, ...l]);
    } catch {}
    return l;
  },
  async deleteArticle(e) {
    if (!R || !z) throw Error(`Supabase credentials not configured in environment variables.`);
    let {
      error: t
    } = await z.from(`articles`).delete().eq(`id`, e);
    if (t) throw console.error(`[StorageService] Error deleting article from Supabase:`, t.message), t;
    try {
      let t = this.getCachedCustomArticlesSync();
      this.setCachedCustomArticlesSync(t.filter(t => t.id !== e));
    } catch {}
    return true;
  },
  async uploadArticleMedia(e) {
    if (!e) throw Error(`No file provided`);
    if (e.size > 52428800) throw Error(`फ़ाइल बहुत बड़ी है! अधिकतम साइज़ 50MB है। (File too large. Max 50MB)`);
    if (![`image/jpeg`, `image/png`, `image/webp`, `image/gif`, `video/mp4`, `video/webm`, `video/quicktime`].includes(e.type)) throw Error(`अमान्य फ़ाइल फॉर्मेट! केवल JPG, PNG, WEBP, GIF, MP4, WEBM और MOV मान्य हैं।`);
    let t = e.type && e.type.startsWith(`video/`) ? `video` : `image`,
      n = null;
    try {
      let e = null;
      if (z) {
        let {
          data: {
            session: t
          }
        } = await z.auth.getSession();
        e = t?.access_token;
      }
      if (e) {
        let t = await fetch(`/api/upload-signature`, {
          method: `POST`,
          headers: {
            Authorization: `Bearer ${e}`,
            'Content-Type': `application/json`
          }
        });
        if (t.ok) n = await t.json();else {
          let e = await t.json();
          throw Error(e.error || `सर्वर ने अपलोड की अनुमति नहीं दी (Server rejected upload)`);
        }
      } else throw Error(`आप एडमिन के रूप में लॉग-इन नहीं हैं।`);
    } catch (e) {
      throw console.error(`[StorageService] Signature request failed:`, e.message), Error(`अपलोड सुरक्षा विफल: ${e.message}`);
    }
    if (!n || !n.signature) throw Error(`अपलोड सुरक्षा विफल: सर्वर से हस्ताक्षर प्राप्त नहीं हुए। (Missing upload signature)`);
    let r = new FormData();
    r.append(`file`, e);
    r.append(`api_key`, n.apiKey);
    r.append(`timestamp`, n.timestamp);
    r.append(`signature`, n.signature);
    r.append(`folder`, n.folder || `arya_news`);
    let i = `https://api.cloudinary.com/v1_1/${n.cloudName}/${t}/upload`;
    try {
      let e = await fetch(i, {
        method: `POST`,
        body: r
      });
      if (!e.ok) {
        let t = await e.text();
        throw console.error(`[StorageService] Cloudinary upload failed:`, t), Error(`Cloudinary upload failed: ` + t);
      }
      return (await e.json()).secure_url;
    } catch (e) {
      throw console.error(`[StorageService] Network error during Cloudinary upload:`, e), e;
    }
  },
  async uploadArticleImage(e) {
    return this.uploadArticleMedia(e);
  },
  async uploadMultipleMedia(e) {
    if (!e || e.length === 0) return [];
    let t = e.map(e => this.uploadArticleMedia(e));
    return Promise.all(t);
  },
  getApiNewsEnabledSync() {
    try {
      let e = localStorage.getItem(`arya_api_news_enabled`);
      return e === null || e !== `false`;
    } catch {
      return true;
    }
  },
  async fetchApiNewsEnabled() {
    let e = this.getApiNewsEnabledSync();
    if (!R || !z) return e;
    try {
      let {
        data: t,
        error: n
      } = await z.from(`articles`).select(`title_hi`).eq(`id`, `setting-api-news-status`).maybeSingle();
      !n && t && (e = t.title_hi !== `disabled`, localStorage.setItem(`arya_api_news_enabled`, e ? `true` : `false`));
    } catch (e) {
      console.warn(`[StorageService] fetchApiNewsEnabled notice:`, e.message);
    }
    return e;
  },
  async fetchBullionRates() {
    let e = localStorage.getItem(`arya_bullion_enabled`) !== `false`;
    if (!R || !z) return {
      rates: [],
      lastUpdatedAt: null,
      enabled: e
    };
    try {
      let {
        data: t
      } = await z.from(`articles`).select(`title_hi`).eq(`id`, `setting-bullion-status`).maybeSingle();
      t && (e = t.title_hi !== `disabled`, localStorage.setItem(`arya_bullion_enabled`, e ? `true` : `false`));
      let {
        data: n,
        error: r
      } = await z.from(`bullion_rates`).select(`*`).order(`id`);
      if (!r && n && n.length > 0) {
        let t = n.filter(e => e.price && String(e.price).trim() !== `` && String(e.price).trim() !== `0`),
          r = t.map(e => new Date(e.updated_at).getTime()).filter(e => !isNaN(e)),
          i = r.length > 0 ? new Date(Math.max(...r)).toISOString() : null;
        return {
          rates: n,
          lastUpdatedAt: i,
          enabled: e && !!(i && t.length > 0)
        };
      }
    } catch (e) {
      console.warn(`[StorageService] fetchBullionRates notice:`, e.message);
    }
    return {
      rates: [],
      lastUpdatedAt: null,
      enabled: false
    };
  },
  async setBullionEnabled(e) {
    if (localStorage.setItem(`arya_bullion_enabled`, e ? `true` : `false`), !R || !z) return e;
    try {
      let t = {
        id: `setting-bullion-status`,
        title_hi: e ? `enabled` : `disabled`,
        title_en: e ? `enabled` : `disabled`,
        summary_hi: `System Setting for Beawar Bullion Ticker Kill Switch`,
        summary_en: `System Setting for Beawar Bullion Ticker Kill Switch`,
        content_hi: e ? `Bullion Ticker is Active` : `Bullion Ticker is Disabled/Hidden`,
        content_en: e ? `Bullion Ticker is Active` : `Bullion Ticker is Disabled/Hidden`,
        category: `_system`,
        image: null,
        published_at: new Date().toISOString(),
        author: `System Admin`,
        views: 0,
        updated_at: new Date().toISOString()
      };
      await z.from(`articles`).upsert(t);
    } catch (e) {
      console.warn(`[StorageService] setBullionEnabled error:`, e.message);
    }
    return e;
  },
  async saveBullionRates(e) {
    if (!R || !z) throw Error(`Supabase credentials not configured.`);
    if (!Array.isArray(e) || e.length === 0) return;
    let t = new Date().toISOString(),
      n = e.map(e => ({
        id: e.id || e.item.toLowerCase().replace(/[^a-z0-9_]/g, `_`),
        item: e.item,
        unit: e.unit,
        price: e.price,
        updated_at: t
      })),
      {
        error: r
      } = await z.from(`bullion_rates`).upsert(n);
    if (r) throw r;
    return n;
  },
  getCachedAdvertisementsSync() {
    try {
      let e = localStorage.getItem(`arya_cached_ads`);
      if (e) {
        let t = JSON.parse(e);
        if (Array.isArray(t)) return t.filter(e => e && e.isActive);
      }
    } catch {}
    return [];
  },
  async fetchAdvertisements() {
    if (!R || !z) return this.getCachedAdvertisementsSync();
    try {
      let {
        data: e,
        error: t
      } = await z.from(`articles`).select(`*`).eq(`category`, `_advertisement`).order(`published_at`, {
        ascending: false
      });
      if (t || !e) return this.getCachedAdvertisementsSync();
      let n = e.map(e => {
        let t = {};
        try {
          e.content_hi && e.content_hi.startsWith(`{`) && (t = JSON.parse(e.content_hi));
        } catch {}
        let n = t.expiresAt || e.read_time || null,
          r = n && n !== `permanent` && new Date(n) < new Date(),
          i = e.is_trending === true || t.isHidden === true,
          a = Array.isArray(t.actions) && t.actions.length > 0 ? t.actions : t.actionType && t.actionTarget ? [{
            type: t.actionType,
            target: t.actionTarget
          }] : [],
          o = Array.isArray(t.placements) && t.placements.length > 0 ? t.placements : t.placement ? t.placement === `all` ? [`banner`, `feed`, `article`, `stories`] : [t.placement] : [`banner`, `feed`, `article`];
        return {
          id: e.id,
          businessName: e.title_hi,
          about: e.summary_hi,
          mediaUrl: e.image || t.videoUrl || null,
          mediaType: t.mediaType || (t.videoUrl ? `video` : `image`),
          videoUrl: t.videoUrl || null,
          actions: a,
          actionType: a[0]?.type || t.actionType || `whatsapp`,
          actionTarget: a[0]?.target || t.actionTarget || ``,
          placements: o,
          placement: t.placement || `all`,
          displayStyle: t.displayStyle || `poster`,
          duration: e.author || `permanent`,
          expiresAt: n,
          isExpired: r,
          isHidden: i,
          isActive: !i && !r,
          views: e.views || 0,
          clicks: t.clicks || 0,
          createdAt: e.published_at
        };
      });
      try {
        localStorage.setItem(`arya_cached_ads`, JSON.stringify(n));
      } catch {}
      return n;
    } catch (e) {
      return console.warn(`[StorageService] fetchAdvertisements notice:`, e.message), this.getCachedAdvertisementsSync();
    }
  },
  async saveAdvertisement(event) {
    if (!R || !z) throw Error(`Supabase credentials not configured.`);
    let t = `permanent`,
      n = new Date();
    if (event.duration === `24h`) t = new Date(n.getTime() + 864e5).toISOString();else if (event.duration === `48h`) t = new Date(n.getTime() + 1728e5).toISOString();else if (event.duration === `7d`) t = new Date(n.getTime() + 6048e5).toISOString();else if (event.duration === `30d`) t = new Date(n.getTime() + 2592e6).toISOString();else if (event.duration === `custom` && event.customDays) {
      let r = parseInt(event.customDays, 10) || 1;
      t = new Date(n.getTime() + r * 24 * 60 * 60 * 1e3).toISOString();
    } else event.expiresAt && (t = event.expiresAt);
    let r = event.mediaType === `video` || event.mediaUrl && /\.(mp4|webm|mov|mkv)$/i.test(event.mediaUrl),
      i = Array.isArray(event.actions) && event.actions.length > 0 ? event.actions : event.actionType && event.actionTarget ? [{
        type: event.actionType,
        target: event.actionTarget
      }] : [],
      a = Array.isArray(event.placements) && event.placements.length > 0 ? event.placements : event.placement ? event.placement === `all` ? [`banner`, `feed`, `article`] : [event.placement] : [`banner`, `feed`, `article`],
      o = event.isHidden === true,
      s = {
        videoUrl: r ? event.mediaUrl : null,
        mediaType: r ? `video` : `image`,
        actions: i,
        actionType: i[0]?.type || event.actionType || `whatsapp`,
        actionTarget: i[0]?.target || event.actionTarget || ``,
        placements: a,
        placement: a.join(`,`),
        displayStyle: event.displayStyle || `poster`,
        expiresAt: t,
        clicks: event.clicks || 0,
        isHidden: o
      },
      c = {
        id: event.id || `ad-${Date.now()}`,
        title_hi: event.businessName,
        title_en: event.businessName,
        summary_hi: event.about || ``,
        summary_en: i.map(event => `${event.type}:${event.target}`).join(` | `),
        content_hi: JSON.stringify(s),
        content_en: JSON.stringify(s),
        category: `_advertisement`,
        image: r ? null : event.mediaUrl,
        published_at: event.createdAt || new Date().toISOString(),
        author: event.duration || `permanent`,
        read_time: t,
        is_trending: o,
        views: event.views || 0,
        updated_at: new Date().toISOString()
      },
      {
        error: l
      } = await z.from(`articles`).upsert(c);
    if (l) throw l;
    return c;
  },
  async incrementAdClick(e) {
    if (R && z && e) try {
      let {
        data: t
      } = await z.from(`articles`).select(`content_hi`).eq(`id`, e).maybeSingle();
      if (t && t.content_hi) {
        let n = {};
        try {
          n = JSON.parse(t.content_hi);
        } catch {}
        n.clicks = (n.clicks || 0) + 1;
        await z.from(`articles`).update({
          content_hi: JSON.stringify(n)
        }).eq(`id`, e);
      }
    } catch {}
  },
  async deleteAdvertisement(e) {
    if (!R || !z || !e) return;
    let {
      error: t
    } = await z.from(`articles`).delete().eq(`id`, e);
    if (t) throw t;
  },
  async setApiNewsEnabled(e) {
    if (localStorage.setItem(`arya_api_news_enabled`, e ? `true` : `false`), !R || !z) return e;
    try {
      let t = {
          id: `setting-api-news-status`,
          title_hi: e ? `enabled` : `disabled`,
          title_en: e ? `enabled` : `disabled`,
          summary_hi: `System Setting for Live API News Kill Switch`,
          summary_en: `System Setting for Live API News Kill Switch`,
          content_hi: e ? `API News is ON (Active syndicated feeds)` : `API News is KILLED/DISABLED - Only Beawar news is displayed on website`,
          content_en: e ? `API News is ON` : `API News is KILLED/DISABLED`,
          category: `_system`,
          image: null,
          published_at: new Date().toISOString(),
          author: `System Admin`,
          is_hero: false,
          is_trending: false,
          is_breaking: false,
          views: 0,
          updated_at: new Date().toISOString()
        },
        {
          error: n
        } = await z.from(`articles`).upsert(t);
      if (n) throw console.error(`[StorageService] Error saving API news kill switch setting:`, n.message), n;
    } catch (e) {
      throw console.error(`[StorageService] setApiNewsEnabled error:`, e.message), e;
    }
    return e;
  },
  async fetchBreakingNews() {
    if (!R || !z) return [];
    try {
      let {
        data: e,
        error: t
      } = await z.from(`breaking_news`).select(`*`).order(`order_index`, {
        ascending: true
      });
      return t || !e || e.length === 0 ? [] : e.map(e => e.text);
    } catch (e) {
      return console.error(`[StorageService] fetchBreakingNews error:`, e.message), [];
    }
  },
  async saveBreakingNews(e) {
    if (!R || !z) throw Error(`Supabase credentials not configured.`);
    let {
      error: t
    } = await z.from(`breaking_news`).delete().neq(`id`, `___dummy_placeholder___`);
    t && console.warn(`[StorageService] Error cleaning old breaking news:`, t.message);
    let n = e.map((e, t) => ({
        id: `bn-${t}-${Date.now()}`,
        text: e,
        order_index: t,
        updated_at: new Date().toISOString()
      })),
      {
        error: r
      } = await z.from(`breaking_news`).insert(n);
    if (r) throw console.error(`[StorageService] saveBreakingNews insert error:`, r.message), r;
    return e;
  },
  getBookmarks() {
    try {
      let e = localStorage.getItem(Tn.BOOKMARKS);
      return e ? JSON.parse(e) : [];
    } catch {
      return [];
    }
  },
  toggleBookmark(e) {
    let t = this.getBookmarks(),
      n;
    return n = t.includes(e) ? t.filter(t => t !== e) : [...t, e], localStorage.setItem(Tn.BOOKMARKS, JSON.stringify(n)), n;
  },
  getLang() {
    return localStorage.getItem(Tn.LANG) || `hi`;
  },
  setLang(e) {
    localStorage.setItem(Tn.LANG, e);
  },
  getTheme() {
    return localStorage.getItem(Tn.THEME) || `light`;
  },
  setTheme(e) {
    localStorage.setItem(Tn.THEME, e);
  }
};
function On() {
  return typeof navigator > `u` ? false : /Android/i.test(navigator.userAgent || navigator.vendor || window.opera);
}
function kn() {
  return typeof navigator > `u` ? false : /iPhone|iPad|iPod/i.test(navigator.userAgent || ``);
}
function An() {
  return On() || kn();
}
async function jn({
  url: e,
  title: t = ``,
  text: n = ``
}) {
  if (!e) return;
  let r = encodeURIComponent(e),
    i = t || `आर्यन न्यूज़ एजेंसी`;
  if (An() && typeof navigator < `u` && typeof navigator.share == `function`) try {
    await navigator.share({
      title: i,
      text: n ? `${i}\n\n${n}` : i,
      url: e
    });
    return;
  } catch (e) {
    if (e.name === `AbortError`) return;
  }
  if (On()) {
    let e = `intent://facebook.com/sharer/sharer.php?u=${r}#Intent;scheme=https;package=com.facebook.katana;S.browser_fallback_url=${encodeURIComponent(`https://www.facebook.com/sharer/sharer.php?u=${r}`)};end`;
    try {
      window.location.href = e;
      return;
    } catch (e) {
      console.warn(`Android intent navigation failed, using browser popup:`, e);
    }
  }
  let a = `https://www.facebook.com/sharer/sharer.php?u=${r}`;
  if (An()) {
    window.location.href = a;
  } else {
    window.open(a, `_blank`, `width=620,height=580,scrollbars=yes,resizable=yes`);
  }
}
var Mn = n({
  default: () => Pn
});
function Nn({
  className: e = `w-5 h-5`
}) {
  return (0, M.jsx)(`svg`, {
    className: e,
    fill: `currentColor`,
    viewBox: `0 0 24 24`,
    children: (0, M.jsx)(`path`, {
      d: `M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z`
    })
  });
}
function Pn({
  ad: e = null,
  layout: t = `banner`
}) {
  let [n, r] = (0, j.useState)(null),
    [i, a] = (0, j.useState)(false),
    [o, s] = (0, j.useState)(false);
  if (!e || e.isHidden || e.isExpired) return null;
  let c = Array.isArray(e.actions) && e.actions.length > 0 ? e.actions : e.actionType && e.actionTarget ? [{
      type: e.actionType,
      target: e.actionTarget
    }] : [],
    u = (t, n) => {
      t && t.stopPropagation();
      e.id && B.incrementAdClick(e.id);
      let r = n.target || ``;
      if (n.type === `call`) window.location.href = `tel:${r.replace(/[^0-9+]/g, ``)}`;else if (n.type === `whatsapp`) {
        let t = r.replace(/[^0-9]/g, ``),
          n = encodeURIComponent(`नमस्ते ${e.businessName}, मैंने आर्यन न्यूज़ एजेंसी पर आपका विज्ञापन देखा और इस संबंध में जानकारी चाहिए।`);
        window.open(`https://wa.me/${t}?text=${n}`, `_blank`);
      } else if (n.type === `maps`) {
        let e = r.startsWith(`http`) ? r : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r)}`;
        window.open(e, `_blank`);
      } else {
        let e = r.startsWith(`http`) ? r : `https://${r}`;
        window.open(e, `_blank`);
      }
    },
    d = t => {
      if (e.mediaUrl) {
        r(e.mediaUrl);
      } else {
        c.length > 0 && u(t, c[0]);
      }
    },
    f = () => `https://www.aryannewsagency.com/ad/${encodeURIComponent(e.id || `special`)}`,
    p = () => {
      let t = [];
      c.length > 0 && c.forEach(event => {
        if (event.type === `whatsapp`) {
          t.push(`💬 WhatsApp: ${event.target}`);
        } else {
          if (event.type === `call`) {
            t.push(`📞 Phone: ${event.target}`);
          } else {
            if (event.type === `website`) {
              t.push(`🌐 Website: ${event.target}`);
            } else {
              event.type === `maps` && t.push(`📍 Map: ${event.target}`);
            }
          }
        }
      });
      let n = t.length > 0 ? `\n\n${t.join(`
`)}` : ``,
        r = f();
      return `📢 *विशेष विज्ञापन | Aryan News Agency*\n\n🏢 *${ln(e.businessName || ``)}*\n${ln(e.about || ``)}${n}\n\n👉 पूरा विज्ञापन एवं पोस्टर यहाँ देखें:\n${r}\n\n#AryanNewsAgency #BeawarNews #Advertisement #Rajasthan`;
    },
    m = event => {
      event && event.stopPropagation();
      let t = p();
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(t)}`, `_blank`);
    },
    h = t => {
      t && t.stopPropagation();
      let n = p();
      try {
        navigator.clipboard.writeText(n);
      } catch {}
      jn({
        url: f(),
        title: e.businessName || `विशेष विज्ञापन`,
        text: n
      });
    },
    g = t => {
      t && t.stopPropagation();
      let n = p();
      try {
        navigator.clipboard.writeText(n);
      } catch {}
      jn({
        url: f(),
        title: e.businessName || `विशेष विज्ञापन`,
        text: n
      });
    },
    v = event => {
      event && event.stopPropagation();
      let t = p();
      try {
        navigator.clipboard.writeText(t);
        s(true);
        setTimeout(() => s(false), 2500);
      } catch {
        prompt(`विज्ञापन लिंक कॉपी करें:`, f());
      }
    },
    b = async t => {
      t && t.stopPropagation();
      let n = p(),
        r = f();
      if (navigator.share) try {
        await navigator.share({
          title: `${e.businessName} - विशेष विज्ञापन | आर्यन न्यूज़ एजेंसी`,
          text: n,
          url: r
        });
      } catch {} else v(t);
    },
    x = (e = `normal`) => {
      let t = e === `small` ? `px-3 py-1.5 text-[11px]` : `px-4 py-2.5 text-xs sm:text-sm`;
      return (0, M.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2.5`,
        children: [c.map((event, n) => event.target ? event.type === `call` ? (0, M.jsxs)(`button`, {
          type: `button`,
          onClick: t => u(t, event),
          className: `inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 shrink-0 ${t}`,
          title: `कॉल करें`,
          children: [(0, M.jsx)(_, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `कॉल करें`
          })]
        }, n) : event.type === `whatsapp` ? (0, M.jsxs)(`button`, {
          type: `button`,
          onClick: t => u(t, event),
          className: `inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl shadow-md transition active:scale-95 shrink-0 ${t}`,
          title: `व्हाट्सएप पर चैट करें`,
          children: [(0, M.jsx)(y, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `व्हाट्सएप`
          })]
        }, n) : event.type === `maps` ? (0, M.jsxs)(`button`, {
          type: `button`,
          onClick: t => u(t, event),
          className: `inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 shrink-0 ${t}`,
          title: `गूगल मैप्स लोकेशन देखें`,
          children: [(0, M.jsx)(l, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `लोकेशन देखें`
          })]
        }, n) : event.type === `website` ? (0, M.jsxs)(`button`, {
          type: `button`,
          onClick: t => u(t, event),
          className: `inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 shrink-0 ${t}`,
          title: `वेबसाइट पर जाएं`,
          children: [(0, M.jsx)(he, {
            className: `w-4 h-4`
          }), (0, M.jsx)(`span`, {
            children: `वेबसाइट देखें`
          }), (0, M.jsx)(me, {
            className: `w-3 h-3 opacity-70 ml-0.5`
          })]
        }, n) : null : null), (0, M.jsxs)(`button`, {
          type: `button`,
          onClick: event => {
            event && event.stopPropagation();
            a(true);
          },
          className: `inline-flex items-center gap-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 shrink-0 ${t}`,
          title: `विज्ञापन शेयर करें`,
          children: [(0, M.jsx)(w, {
            className: `w-4 h-4 text-white`
          }), (0, M.jsx)(`span`, {
            children: `शेयर करें (Share)`
          })]
        })]
      });
    },
    S = () => n ? (0, M.jsx)(`div`, {
      className: `fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 cursor-zoom-out animate-in fade-in duration-200`,
      onClick: () => r(null),
      children: (0, M.jsxs)(`div`, {
        className: `relative max-w-4xl max-h-[92vh] w-full flex flex-col items-center justify-center`,
        children: [e.mediaType === `video` ? (0, M.jsx)(`video`, {
          src: n,
          controls: true,
          autoPlay: true,
          playsInline: true,
          className: `max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain bg-black`,
          onClick: event => event.stopPropagation()
        }) : (0, M.jsx)(`img`, {
          src: n,
          alt: e.businessName,
          className: `max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain`,
          onClick: event => event.stopPropagation()
        }), (0, M.jsxs)(`div`, {
          className: `absolute top-3 right-3 flex items-center gap-2`,
          children: [(0, M.jsxs)(`button`, {
            type: `button`,
            onClick: event => {
              event && event.stopPropagation();
              a(true);
            },
            className: `bg-rose-600 hover:bg-rose-700 text-white p-2 sm:px-4 sm:py-2 rounded-full font-bold text-xs shadow-lg transition flex items-center gap-1.5 border border-white/20`,
            children: [(0, M.jsx)(w, {
              className: `w-4 h-4`
            }), (0, M.jsx)(`span`, {
              className: `hidden sm:inline`,
              children: `शेयर करें`
            })]
          }), (0, M.jsxs)(`button`, {
            type: `button`,
            onClick: () => r(null),
            className: `bg-black/70 hover:bg-red-600 text-white p-2 sm:px-4 sm:py-2 rounded-full font-bold text-xs shadow-lg transition flex items-center gap-1.5 border border-white/20`,
            children: [(0, M.jsx)(ue, {
              className: `w-4 h-4`
            }), (0, M.jsx)(`span`, {
              className: `hidden sm:inline`,
              children: `बंद करें (Close)`
            })]
          })]
        }), (0, M.jsxs)(`div`, {
          className: `mt-4 bg-gray-900/90 border border-gray-700 px-4 py-2.5 rounded-2xl flex items-center justify-center gap-3 backdrop-blur-md`,
          onClick: event => event.stopPropagation(),
          children: [(0, M.jsx)(`span`, {
            className: `text-xs font-bold text-white font-hindi hidden md:inline`,
            children: e.businessName
          }), x(`small`)]
        })]
      })
    }) : null,
    te = () => {
      if (!i) return null;
      let t = f();
      return (0, M.jsx)(`div`, {
        className: `fixed inset-0 z-[110] bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200`,
        onClick: () => a(false),
        children: (0, M.jsxs)(`div`, {
          className: `bg-white dark:bg-gray-900 w-full max-w-lg rounded-3xl p-5 sm:p-6 shadow-2xl border border-gray-200 dark:border-gray-800 space-y-5 animate-in zoom-in-95 duration-150 text-left`,
          onClick: event => event.stopPropagation(),
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800`,
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center gap-2.5`,
              children: [(0, M.jsx)(`span`, {
                className: `p-2 bg-red-50 dark:bg-red-950/40 text-red-600 rounded-xl`,
                children: (0, M.jsx)(w, {
                  className: `w-5 h-5`
                })
              }), (0, M.jsxs)(`div`, {
                children: [(0, M.jsx)(`h3`, {
                  className: `text-base sm:text-lg font-bold font-hindi text-gray-950 dark:text-white`,
                  children: `📢 विज्ञापन शेयर करें (Share Advertisement)`
                }), (0, M.jsx)(`p`, {
                  className: `text-[11px] text-gray-500`,
                  children: `सोशल मीडिया, व्हाट्सएप और अन्य ऐप्स पर ज्यादा से ज्यादा ग्राहकों तक पहुँचाएँ`
                })]
              })]
            }), (0, M.jsx)(`button`, {
              onClick: () => a(false),
              className: `p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition`,
              children: (0, M.jsx)(ue, {
                className: `w-5 h-5`
              })
            })]
          }), (0, M.jsxs)(`div`, {
            className: `bg-gray-50 dark:bg-gray-850 p-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 flex items-center gap-3`,
            children: [e.mediaUrl ? e.mediaType === `video` ? (0, M.jsx)(`video`, {
              src: e.mediaUrl,
              className: `w-16 h-16 rounded-xl object-cover border bg-black shrink-0`,
              muted: true
            }) : (0, M.jsx)(`img`, {
              src: e.mediaUrl,
              alt: e.businessName,
              className: `w-16 h-16 rounded-xl object-cover border shrink-0`
            }) : (0, M.jsx)(`div`, {
              className: `w-16 h-16 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center text-2xl shrink-0 font-bold`,
              children: `📢`
            }), (0, M.jsxs)(`div`, {
              className: `flex-1 min-w-0`,
              children: [(0, M.jsx)(`span`, {
                className: `bg-red-600 text-white font-black text-[9px] px-2 py-0.5 rounded uppercase`,
                children: `विज्ञापन`
              }), (0, M.jsx)(`h4`, {
                className: `text-sm font-bold font-hindi text-gray-900 dark:text-white truncate mt-1`,
                children: e.businessName
              }), e.about && (0, M.jsx)(`p`, {
                className: `text-xs text-gray-500 line-clamp-1 font-hindi mt-0.5`,
                children: e.about
              })]
            })]
          }), (0, M.jsxs)(`div`, {
            className: `grid grid-cols-1 sm:grid-cols-2 gap-3`,
            children: [(0, M.jsxs)(`button`, {
              type: `button`,
              onClick: m,
              className: `flex items-center gap-3 p-3.5 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-300 dark:border-emerald-800 rounded-2xl text-emerald-900 dark:text-emerald-200 transition text-left group`,
              children: [(0, M.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`,
                children: (0, M.jsx)(y, {
                  className: `w-5 h-5`
                })
              }), (0, M.jsxs)(`div`, {
                className: `min-w-0`,
                children: [(0, M.jsx)(`div`, {
                  className: `text-xs font-bold font-hindi`,
                  children: `व्हाट्सएप पर भेजें`
                }), (0, M.jsx)(`div`, {
                  className: `text-[10px] text-emerald-600 dark:text-emerald-400 font-mono`,
                  children: `WhatsApp Chat & Groups`
                })]
              })]
            }), (0, M.jsxs)(`button`, {
              type: `button`,
              onClick: h,
              className: `flex items-center gap-3 p-3.5 bg-blue-50 hover:bg-blue-100 dark:bg-blue-950/30 dark:hover:bg-blue-900/40 border border-blue-300 dark:border-blue-800 rounded-2xl text-blue-900 dark:text-blue-200 transition text-left group`,
              children: [(0, M.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`,
                children: (0, M.jsx)(Nn, {
                  className: `w-5 h-5`
                })
              }), (0, M.jsxs)(`div`, {
                className: `min-w-0`,
                children: [(0, M.jsx)(`div`, {
                  className: `text-xs font-bold font-hindi`,
                  children: `फेसबुक पोस्ट / स्टोरी`
                }), (0, M.jsx)(`div`, {
                  className: `text-[10px] text-blue-600 dark:text-blue-400 font-mono`,
                  children: `Share on FB Timeline`
                })]
              })]
            }), (0, M.jsxs)(`button`, {
              type: `button`,
              onClick: g,
              className: `flex items-center gap-3 p-3.5 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 border border-indigo-300 dark:border-indigo-800 rounded-2xl text-indigo-900 dark:text-indigo-200 transition text-left group`,
              children: [(0, M.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`,
                children: (0, M.jsx)(he, {
                  className: `w-5 h-5`
                })
              }), (0, M.jsxs)(`div`, {
                className: `min-w-0`,
                children: [(0, M.jsx)(`div`, {
                  className: `text-xs font-bold font-hindi`,
                  children: `फेसबुक पेज / ग्रुप`
                }), (0, M.jsx)(`div`, {
                  className: `text-[10px] text-indigo-600 dark:text-indigo-400 font-mono`,
                  children: `Page & Business Groups`
                })]
              })]
            }), (0, M.jsxs)(`button`, {
              type: `button`,
              onClick: b,
              className: `flex items-center gap-3 p-3.5 bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/30 dark:hover:bg-purple-900/40 border border-purple-300 dark:border-purple-800 rounded-2xl text-purple-900 dark:text-purple-200 transition text-left group`,
              children: [(0, M.jsx)(`div`, {
                className: `w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform`,
                children: (0, M.jsx)(ye, {
                  className: `w-5 h-5`
                })
              }), (0, M.jsxs)(`div`, {
                className: `min-w-0`,
                children: [(0, M.jsx)(`div`, {
                  className: `text-xs font-bold font-hindi`,
                  children: `अन्य सभी ऐप्स`
                }), (0, M.jsx)(`div`, {
                  className: `text-[10px] text-purple-600 dark:text-purple-400 font-mono`,
                  children: `Instagram, Telegram, SMS`
                })]
              })]
            })]
          }), (0, M.jsxs)(`div`, {
            className: `pt-2 border-t border-gray-100 dark:border-gray-800`,
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-xl border border-gray-200 dark:border-gray-700`,
              children: [(0, M.jsx)(`input`, {
                type: `text`,
                readOnly: true,
                value: t,
                className: `flex-1 bg-transparent text-xs text-gray-700 dark:text-gray-300 outline-none px-2 font-mono truncate`
              }), (0, M.jsxs)(`button`, {
                type: `button`,
                onClick: v,
                className: `px-3 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition ${o ? `bg-emerald-600 text-white shadow` : `bg-red-600 hover:bg-red-700 text-white shadow`}`,
                children: [o ? (0, M.jsx)(xe, {
                  className: `w-3.5 h-3.5`
                }) : (0, M.jsx)(ne, {
                  className: `w-3.5 h-3.5`
                }), (0, M.jsx)(`span`, {
                  children: o ? `कॉपी हो गया!` : `कॉपी करें`
                })]
              })]
            }), o && (0, M.jsx)(`p`, {
              className: `text-[11px] text-emerald-600 dark:text-emerald-400 font-bold text-center mt-2 animate-in fade-in`,
              children: `✅ विज्ञापन का पूरा विवरण और लिंक क्लिपबोर्ड पर कॉपी हो चुका है!`
            })]
          })]
        })
      });
    };
  return t === `stories` || t === `compact-banner` ? (0, M.jsxs)(`div`, {
    id: `ad-${e.id}`,
    className: `max-w-7xl mx-auto px-3 sm:px-6 my-2 sm:my-3 scroll-mt-24`,
    children: [(0, M.jsxs)(`div`, {
      className: `bg-white dark:bg-gray-900 rounded-2xl p-3 sm:p-4 border border-red-500/30 dark:border-red-500/40 shadow-md relative overflow-hidden group`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center justify-between pb-1.5 mb-2.5 border-b border-gray-100 dark:border-gray-800`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, M.jsxs)(`span`, {
            className: `bg-red-600 text-white font-black text-[9px] sm:text-[10px] px-2 py-0.5 rounded uppercase tracking-wider shadow-sm flex items-center gap-1`,
            children: [(0, M.jsx)(`span`, {
              children: `📢`
            }), (0, M.jsx)(`span`, {
              children: `विशेष प्रायोजित विज्ञापन`
            })]
          }), (0, M.jsx)(`span`, {
            className: `text-[11px] font-semibold text-gray-500 dark:text-gray-400 hidden sm:inline`,
            children: `ब्यावर स्थानीय व्यापार एवं प्रतिष्ठान`
          })]
        }), (0, M.jsx)(`div`, {
          className: `flex items-center gap-2`,
          children: (0, M.jsxs)(`button`, {
            type: `button`,
            onClick: event => {
              event.stopPropagation();
              a(true);
            },
            className: `inline-flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer`,
            title: `विज्ञापन शेयर करें`,
            children: [(0, M.jsx)(w, {
              className: `w-3 h-3`
            }), (0, M.jsx)(`span`, {
              children: `शेयर करें`
            })]
          })
        })]
      }), (0, M.jsxs)(`div`, {
        className: `flex flex-col sm:flex-row items-center gap-3 sm:gap-4`,
        children: [e.mediaUrl && (0, M.jsxs)(`div`, {
          onClick: () => r(e.mediaUrl),
          className: `relative shrink-0 cursor-zoom-in group/poster rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center justify-center`,
          children: [e.mediaType === `video` ? (0, M.jsx)(`video`, {
            src: e.mediaUrl,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: `w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-contain`
          }) : (0, M.jsx)(`img`, {
            src: e.mediaUrl,
            alt: e.businessName,
            className: `w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 object-contain group-hover/poster:scale-105 transition-transform`
          }), (0, M.jsx)(`div`, {
            className: `absolute inset-0 bg-black/30 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center`,
            children: (0, M.jsx)(ee, {
              className: `w-4 h-4 text-white`
            })
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex-1 min-w-0 flex flex-col justify-between w-full`,
          children: [(0, M.jsxs)(`div`, {
            children: [(0, M.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [(0, M.jsx)(`span`, {
                className: `text-[10px] bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 font-bold px-2 py-0.5 rounded border border-red-200 dark:border-red-900`,
                children: `✨ विशेष ऑफर`
              }), (0, M.jsx)(`h3`, {
                onClick: d,
                className: `text-sm sm:text-base font-black font-hindi text-gray-900 dark:text-white truncate cursor-pointer hover:text-red-600 transition`,
                children: e.businessName
              })]
            }), e.about && (0, M.jsx)(`p`, {
              onClick: d,
              className: `text-xs font-hindi text-gray-600 dark:text-gray-300 mt-1 line-clamp-2 cursor-pointer leading-relaxed`,
              children: e.about
            })]
          }), (0, M.jsx)(`div`, {
            className: `mt-2.5 pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center flex-wrap gap-2`,
            children: x(`compact`)
          })]
        })]
      })]
    }), S(), te()]
  }) : t === `banner` ? (0, M.jsxs)(`div`, {
    id: `ad-${e.id}`,
    className: `max-w-7xl mx-auto px-3 sm:px-6 my-4 sm:my-5 scroll-mt-24`,
    children: [(0, M.jsxs)(`div`, {
      className: `bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-5 lg:p-6 border-2 border-red-500/30 dark:border-red-500/40 shadow-lg relative overflow-hidden group`,
      children: [(0, M.jsxs)(`div`, {
        className: `flex items-center justify-between pb-2.5 mb-4 border-b border-gray-100 dark:border-gray-800`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [(0, M.jsxs)(`span`, {
            className: `bg-red-600 text-white font-black text-[10px] sm:text-xs px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-sm flex items-center gap-1`,
            children: [(0, M.jsx)(`span`, {
              children: `📢`
            }), (0, M.jsx)(`span`, {
              children: `विशेष प्रायोजित विज्ञापन`
            })]
          }), (0, M.jsx)(`span`, {
            className: `text-xs font-semibold text-gray-500 dark:text-gray-400 hidden sm:inline`,
            children: `ब्यावर स्थानीय व्यापार एवं प्रतिष्ठान`
          })]
        }), (0, M.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [(0, M.jsxs)(`button`, {
            type: `button`,
            onClick: event => {
              event.stopPropagation();
              a(true);
            },
            className: `inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer`,
            title: `विज्ञापन शेयर करें`,
            children: [(0, M.jsx)(w, {
              className: `w-3.5 h-3.5`
            }), (0, M.jsx)(`span`, {
              children: `शेयर करें`
            })]
          }), (0, M.jsx)(`span`, {
            className: `text-[10px] sm:text-xs font-medium text-gray-400 dark:text-gray-500 hidden sm:inline`,
            children: `आर्यन न्यूज़ विज्ञापन नेटवर्क`
          })]
        })]
      }), (0, M.jsxs)(`div`, {
        className: `grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 items-center`,
        children: [e.mediaUrl && (0, M.jsx)(`div`, {
          className: `md:col-span-4 lg:col-span-4 flex items-center justify-center`,
          children: (0, M.jsxs)(`div`, {
            onClick: () => r(e.mediaUrl),
            className: `relative w-fit max-w-full mx-auto p-1.5 sm:p-2 bg-slate-100 dark:bg-gray-800 rounded-2xl border-2 border-gray-300 dark:border-gray-600 shadow-md flex items-center justify-center cursor-zoom-in group/poster hover:border-red-500 transition-all duration-300`,
            children: [e.mediaType === `video` ? (0, M.jsx)(`video`, {
              src: e.mediaUrl,
              autoPlay: true,
              loop: true,
              muted: true,
              playsInline: true,
              className: `block w-auto max-h-[340px] sm:max-h-[360px] rounded-xl object-contain shadow-sm`
            }) : (0, M.jsx)(`img`, {
              src: e.mediaUrl,
              alt: e.businessName,
              className: `block w-auto max-h-[340px] sm:max-h-[360px] rounded-xl object-contain shadow-sm group-hover/poster:scale-[1.01] transition-transform duration-300`
            }), (0, M.jsxs)(`div`, {
              className: `absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/80 hover:bg-red-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-md shadow-lg flex items-center gap-1 transition-all opacity-90 group-hover/poster:opacity-100 whitespace-nowrap border border-white/20`,
              children: [(0, M.jsx)(ee, {
                className: `w-3 h-3 text-amber-300`
              }), (0, M.jsx)(`span`, {
                children: `ज़ूम पोस्टर (Zoom)`
              })]
            })]
          })
        }), (0, M.jsxs)(`div`, {
          className: `${e.mediaUrl ? `md:col-span-8 lg:col-span-8` : `md:col-span-12`} flex flex-col justify-between space-y-3.5`,
          children: [(0, M.jsxs)(`div`, {
            onClick: d,
            className: `cursor-pointer space-y-2 group/text`,
            title: e.mediaUrl ? `बड़ा पोस्टर देखने हेतु क्लिक करें` : `विज्ञापन विवरण`,
            children: [(0, M.jsx)(`div`, {
              className: `inline-block bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-red-200 dark:border-red-900`,
              children: `✨ विशेष ऑफर एवं प्रतिष्ठान`
            }), (0, M.jsx)(`h3`, {
              className: `text-xl sm:text-2xl font-black font-hindi text-gray-950 dark:text-white leading-snug group-hover/text:text-red-600 dark:group-hover/text-red-400 transition-colors`,
              children: e.businessName
            }), e.about && (0, M.jsx)(`div`, {
              className: `p-3.5 sm:p-4 rounded-2xl bg-amber-50/80 dark:bg-gray-800/80 border border-amber-200 dark:border-gray-700 text-xs sm:text-sm font-hindi text-gray-800 dark:text-gray-100 leading-relaxed whitespace-pre-line shadow-sm max-h-[200px] overflow-y-auto pr-2`,
              children: e.about
            })]
          }), (0, M.jsxs)(`div`, {
            className: `pt-2.5 border-t border-gray-100 dark:border-gray-800`,
            children: [(0, M.jsx)(`div`, {
              className: `text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2`,
              children: `सीधा संपर्क एवं शेयर करें:`
            }), x(`normal`)]
          })]
        })]
      })]
    }), S(), te()]
  }) : t === `feed` ? (0, M.jsxs)(`div`, {
    id: `ad-${e.id}`,
    className: `bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-5 border-2 border-red-500/30 shadow-lg flex flex-col justify-between relative overflow-hidden group scroll-mt-24`,
    children: [(0, M.jsxs)(`div`, {
      className: `flex items-center justify-between pb-2 mb-2.5 border-b border-gray-100 dark:border-gray-800`,
      children: [(0, M.jsx)(`span`, {
        className: `bg-red-600 text-white font-black text-[9px] px-2.5 py-0.5 rounded uppercase tracking-widest shadow`,
        children: `विज्ञापन`
      }), (0, M.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, M.jsxs)(`button`, {
          type: `button`,
          onClick: event => {
            event.stopPropagation();
            a(true);
          },
          className: `text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1`,
          children: [(0, M.jsx)(w, {
            className: `w-3 h-3`
          }), (0, M.jsx)(`span`, {
            children: `शेयर`
          })]
        }), (0, M.jsx)(`span`, {
          className: `text-[10px] text-gray-400`,
          children: `लोकल प्रचार`
        })]
      })]
    }), (0, M.jsxs)(`div`, {
      children: [e.mediaUrl && (0, M.jsx)(`div`, {
        className: `flex justify-center mb-2.5`,
        children: (0, M.jsxs)(`div`, {
          onClick: () => r(e.mediaUrl),
          className: `relative w-fit max-w-full p-1.5 bg-slate-100 dark:bg-gray-800 rounded-2xl border-2 border-gray-300 dark:border-gray-600 shadow-sm cursor-zoom-in group/feedposter hover:border-red-500 transition`,
          children: [e.mediaType === `video` ? (0, M.jsx)(`video`, {
            src: e.mediaUrl,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: `block max-h-[300px] w-auto rounded-xl object-contain shadow-sm`
          }) : (0, M.jsx)(`img`, {
            src: e.mediaUrl,
            alt: e.businessName,
            className: `block max-h-[300px] w-auto rounded-xl object-contain shadow-sm group-hover/feedposter:scale-[1.01] transition duration-300`
          }), (0, M.jsxs)(`div`, {
            className: `absolute bottom-3.5 left-1/2 -translate-x-1/2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm shadow flex items-center gap-1 border border-white/20 whitespace-nowrap`,
            children: [(0, M.jsx)(ee, {
              className: `w-3 h-3 text-amber-300`
            }), (0, M.jsx)(`span`, {
              children: `ज़ूम करें`
            })]
          })]
        })
      }), (0, M.jsx)(`h3`, {
        onClick: d,
        className: `text-base font-black font-hindi text-gray-900 dark:text-white cursor-pointer hover:text-red-600 transition`,
        children: e.businessName
      }), e.about && (0, M.jsx)(`div`, {
        onClick: d,
        className: `text-xs text-gray-600 dark:text-gray-300 font-hindi mt-1.5 leading-relaxed bg-gray-50 dark:bg-gray-850/60 p-2.5 rounded-xl border border-gray-100 dark:border-gray-800 whitespace-pre-line cursor-pointer max-h-[140px] overflow-y-auto`,
        children: e.about
      })]
    }), (0, M.jsx)(`div`, {
      className: `mt-3 pt-2.5 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2`,
      children: x(`normal`)
    }), S(), te()]
  }) : (0, M.jsxs)(`div`, {
    id: `ad-${e.id}`,
    className: `my-5 p-4 sm:p-5 rounded-3xl bg-amber-50/70 dark:bg-gray-850 border-2 border-amber-300 dark:border-gray-700 shadow-md max-w-2xl mx-auto scroll-mt-24`,
    children: [(0, M.jsxs)(`div`, {
      className: `flex items-center justify-between mb-2.5 pb-2 border-b border-amber-200 dark:border-gray-700`,
      children: [(0, M.jsx)(`span`, {
        className: `bg-red-600 text-white font-black text-[9px] px-2.5 py-0.5 rounded uppercase tracking-wider`,
        children: `विशेष विज्ञापन`
      }), (0, M.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [(0, M.jsxs)(`button`, {
          type: `button`,
          onClick: event => {
            event.stopPropagation();
            a(true);
          },
          className: `text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline flex items-center gap-1`,
          children: [(0, M.jsx)(w, {
            className: `w-3 h-3`
          }), (0, M.jsx)(`span`, {
            children: `शेयर`
          })]
        }), (0, M.jsx)(`span`, {
          className: `text-[11px] text-gray-500 dark:text-gray-400 font-hindi`,
          children: `आर्यन न्यूज़ विज्ञापन`
        })]
      })]
    }), (0, M.jsxs)(`div`, {
      className: `flex flex-col items-center gap-3.5`,
      children: [e.mediaUrl && (0, M.jsx)(`div`, {
        className: `w-full flex justify-center`,
        children: (0, M.jsxs)(`div`, {
          onClick: () => r(e.mediaUrl),
          className: `relative w-fit max-w-full p-1.5 sm:p-2 bg-amber-100/60 dark:bg-gray-800 rounded-2xl border-2 border-amber-300 dark:border-gray-600 shadow-sm cursor-zoom-in hover:border-red-500 transition group/artposter`,
          children: [e.mediaType === `video` ? (0, M.jsx)(`video`, {
            src: e.mediaUrl,
            autoPlay: true,
            loop: true,
            muted: true,
            playsInline: true,
            className: `block max-h-[320px] w-auto rounded-xl object-contain shadow-sm`
          }) : (0, M.jsx)(`img`, {
            src: e.mediaUrl,
            alt: e.businessName,
            className: `block max-h-[320px] w-auto rounded-xl object-contain shadow-sm group-hover/artposter:scale-[1.01] transition duration-300`
          }), (0, M.jsxs)(`div`, {
            className: `absolute bottom-3.5 left-1/2 -translate-x-1/2 bg-black/75 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm shadow flex items-center gap-1 border border-white/20 whitespace-nowrap`,
            children: [(0, M.jsx)(ee, {
              className: `w-3 h-3 text-amber-300`
            }), (0, M.jsx)(`span`, {
              children: `बड़ा देखने हेतु क्लिक करें`
            })]
          })]
        })
      }), (0, M.jsxs)(`div`, {
        onClick: d,
        className: `w-full text-center cursor-pointer`,
        children: [(0, M.jsx)(`h4`, {
          className: `text-base sm:text-lg font-black font-hindi text-gray-900 dark:text-white hover:text-red-600 transition`,
          children: e.businessName
        }), e.about && (0, M.jsx)(`div`, {
          className: `text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-hindi mt-1.5 max-w-lg mx-auto leading-relaxed whitespace-pre-line text-left bg-amber-100/50 dark:bg-gray-800/60 p-3 rounded-xl border border-amber-200 dark:border-gray-700 max-h-[160px] overflow-y-auto`,
          children: e.about
        })]
      }), (0, M.jsx)(`div`, {
        className: `pt-1.5 w-full flex justify-center`,
        children: x(`normal`)
      })]
    }), S(), te()]
  });
}
var Fn = `arya_live_news_cache_v8`;
function In() {
  try {
    let e = localStorage.getItem(Fn);
    if (!e) for (let t = 5; t >= 1; t--) {
      let n = localStorage.getItem(`arya_live_news_cache_v${t}`);
      if (n) {
        e = n;
        break;
      }
    }
    if (e) {
      let t = JSON.parse(e);
      if (Array.isArray(t) && t.length > 0) return t;
    }
  } catch {}
  return [];
}
function Ln(e) {
  try {
    Array.isArray(e) && e.length > 0 && localStorage.setItem(Fn, JSON.stringify(e.slice(0, 50)));
  } catch {}
}
async function Rn() {
  try {
    let e = await fetch(`/api/news`);
    if (!e.ok) throw Error(`Failed to fetch /api/news: ${e.status}`);
    let t = await e.json();
    return t && Array.isArray(t.articles) ? (Ln(t.articles), t.articles) : In();
  } catch (e) {
    return console.warn(`[newsApi] Error fetching /api/news:`, e.message), In();
  }
}
var zn = new class {
    constructor() {
      this.synth = typeof window < `u` ? window.speechSynthesis : null;
      this.currentUtterance = null;
      this.isPlaying = false;
      this.isPaused = false;
      this.currentArticleId = null;
      this.subscribers = new Set();
      this.chunkQueue = [];
      this.currentChunkIndex = 0;
      this.keepAliveTimer = null;
      this.cachedVoices = [];
      typeof window < `u` && `speechSynthesis` in window && (this.cachedVoices = window.speechSynthesis.getVoices(), window.speechSynthesis.onvoiceschanged = () => {
        this.cachedVoices = window.speechSynthesis.getVoices();
      });
    }
    subscribe(e) {
      return this.subscribers.add(e), () => this.subscribers.delete(e);
    }
    notify() {
      this.subscribers.forEach(e => e({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        articleId: this.currentArticleId
      }));
    }
    splitIntoChunks(e) {
      let t = e.replace(/<[^>]*>?/gm, ` `).replace(/https?:\/\/\S+/g, ` `).replace(/[#*_~`]/g, ` `).replace(/\s+/g, ` `).trim();
      if (!t) return [];
      let n = t.split(/([।|!?.?\n]+)/),
        r = [];
      for (let e = 0; e < n.length; e += 2) {
        let t = n[e] ? n[e].trim() : ``,
          i = n[e + 1] ? n[e + 1].trim() : ``;
        t && r.push(`${t}${i ? ` ` + i : `।`}`);
      }
      let i = [];
      for (let e of r) if (e.length <= 150) i.push(e);else {
        let t = e.split(/([,;:\-–]+)/),
          n = ``;
        for (let e = 0; e < t.length; e++) if ((n + t[e]).length > 150 && n.trim().length > 0) {
          i.push(n.trim());
          n = t[e];
        } else {
          n += t[e];
        }
        n.trim().length > 0 && i.push(n.trim());
      }
      return i.filter(e => e.length > 0);
    }
    getBestVoice(e = `hi`) {
      let t = this.cachedVoices.length > 0 ? this.cachedVoices : this.synth?.getVoices() || [];
      if (!t || t.length === 0) return null;
      if (e === `hi`) {
        let e = t.filter(e => e.lang && (e.lang.toLowerCase().startsWith(`hi`) || e.lang.toLowerCase().includes(`hi-in`)));
        if (e.length > 0) return e.find(e => /google|natural|microsoft|swara|hemant|kalpana/i.test(e.name)) || e[0];
        let n = t.find(e => /hindi|india/i.test(e.name));
        if (n) return n;
      } else {
        let e = t.find(e => e.lang && e.lang.toLowerCase() === `en-in`);
        if (e) return e;
        let n = t.find(e => e.lang && e.lang.toLowerCase().startsWith(`en`));
        if (n) return n;
      }
      return null;
    }
    speak(e, t, n = `hi`) {
      if (!this.synth) {
        alert(`आपके ब्राउज़र में ऑडियो वाचन समर्थित नहीं है।`);
        return;
      }
      if (this.currentArticleId === t && this.synth.speaking) {
        if (this.isPlaying && !this.isPaused) {
          this.synth.pause();
          this.isPlaying = false;
          this.isPaused = true;
          this.notify();
          return;
        }
        if (this.isPaused) {
          this.synth.resume();
          this.isPlaying = true;
          this.isPaused = false;
          this.notify();
          return;
        }
      }
      this.stop();
      let r = this.splitIntoChunks(e);
      r.length !== 0 && (this.chunkQueue = r, this.currentChunkIndex = 0, this.currentArticleId = t, this.isPlaying = true, this.isPaused = false, this.notify(), this.startKeepAlive(), this.playNextChunk(n));
    }
    playNextChunk(e = `hi`) {
      if (!this.isPlaying || this.currentChunkIndex >= this.chunkQueue.length) {
        this.stop();
        return;
      }
      let t = this.chunkQueue[this.currentChunkIndex],
        n = new SpeechSynthesisUtterance(t);
      n.lang = e === `hi` ? `hi-IN` : `en-IN`;
      n.rate = 0.95;
      n.pitch = 1;
      let r = this.getBestVoice(e);
      r && (n.voice = r);
      n.onend = () => {
        this.isPlaying && (this.currentChunkIndex++, this.playNextChunk(e));
      };
      n.onerror = t => {
        t.error !== `interrupted` && t.error !== `canceled` && (console.warn(`[TTS] Utterance notice on chunk:`, t), this.isPlaying && this.currentChunkIndex < this.chunkQueue.length - 1 ? (this.currentChunkIndex++, this.playNextChunk(e)) : this.stop());
      };
      this.currentUtterance = n;
      this.synth.speak(n);
    }
    startKeepAlive() {
      this.clearKeepAlive();
      this.keepAliveTimer = setInterval(() => {
        this.isPlaying && this.synth && this.synth.speaking && !this.isPaused && (this.synth.pause(), this.synth.resume());
      }, 1e4);
    }
    clearKeepAlive() {
      this.keepAliveTimer &&= (clearInterval(this.keepAliveTimer), null);
    }
    stop() {
      if (this.clearKeepAlive(), this.synth) try {
        this.synth.cancel();
      } catch {}
      this.chunkQueue = [];
      this.currentChunkIndex = 0;
      this.isPlaying = false;
      this.isPaused = false;
      this.currentArticleId = null;
      this.currentUtterance = null;
      this.notify();
    }
  }(),
  Bn = `modulepreload`,
  Vn = function (e) {
    return `/` + e;
  },
  Hn = {},
  Un = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
          status: `fulfilled`,
          value: e
        }), e => ({
          status: `rejected`,
          reason: e
        }))));
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(t.map(t => {
        if (t = Vn(t, n), t = s(t), t in Hn) return;
        Hn[t] = true;
        let r = t.endsWith(`.css`);
        for (let n = e.length - 1; n >= 0; n--) {
          let i = e[n];
          if (i.href === t && (!r || i.rel === `stylesheet`)) return;
        }
        let i = document.createElement(`link`);
        if (i.rel = r ? `stylesheet` : Bn, r || (i.as = `script`), i.crossOrigin = ``, i.href = t, a && i.setAttribute(`nonce`, a), document.head.appendChild(i), r) return new Promise((e, n) => {
          i.addEventListener(`load`, e);
          i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)));
        });
      }).filter(e => e !== undefined));
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, {
        cancelable: true
      });
      if (t.payload = e, window.dispatchEvent(t), !t.defaultPrevented) throw e;
    }
    return r.then(t => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  Wn = (0, j.lazy)(() => Un(() => import(`./ArticleModal-BGWtDsL3.js`), __vite__mapDeps([0, 1, 2, 3]))),
  Gn = (0, j.lazy)(() => Un(() => import(`./QuickReadModal-xu-LBRQU.js`), __vite__mapDeps([4, 1, 2, 3]))),
  Kn = (0, j.lazy)(() => Un(() => import(`./SubmitNewsModal-YbX-dBIH.js`), __vite__mapDeps([5, 1, 2, 3]))),
  qn = (0, j.lazy)(() => Un(() => import(`./BookmarksModal-CFjyJLcW.js`), __vite__mapDeps([6, 1, 2]))),
  Jn = (0, j.lazy)(() => Un(() => import(`./LegalModal-D8sley9R.js`), __vite__mapDeps([7, 1, 2, 3]))),
  Yn = (0, j.lazy)(() => Un(() => import(`./AdminPanel-CMpiX2r1.js`).then(e => e.t), __vite__mapDeps([8, 1, 2, 3, 9])));
function Xn() {
  let e = typeof window < `u` && (window.location.pathname.includes(`admin`) || window.location.hash.includes(`admin`)),
    [t, n] = (0, j.useState)(e ? `admin` : `home`),
    r = () => {
      if (typeof window < `u`) {
        let e = new URLSearchParams(window.location.search).get(`category`);
        if (e && (e === `all` || D.some(t => t.id === e))) return e;
      }
      return `all`;
    },
    i = () => {
      if (typeof window < `u`) {
        let e = window.location.pathname.toLowerCase(),
          t = window.location.hash.toLowerCase();
        for (let n of [`about`, `grievance`, `terms`, `privacy`, `cookies`, `editorial`]) if (e.includes(n) || t.includes(n)) return {
          isOpen: true,
          page: n
        };
      }
      return {
        isOpen: false,
        page: `about`
      };
    },
    [a, o] = (0, j.useState)(() => {
      let e = B.getCachedCustomArticlesSync(),
        t = In();
      return [...e, ...t];
    }),
    [s, c] = (0, j.useState)([]),
    [l, u] = (0, j.useState)({
      rates: [],
      lastUpdatedAt: null,
      enabled: true
    }),
    [d, f] = (0, j.useState)(() => B.getCachedAdvertisementsSync()),
    [p, m] = (0, j.useState)(i),
    [h, _] = (0, j.useState)([]),
    [v, y] = (0, j.useState)(r),
    [b, x] = (0, j.useState)(B.getApiNewsEnabledSync),
    [S, ee] = (0, j.useState)(`hi`),
    [te, C] = (0, j.useState)(`light`),
    [w, ne] = (0, j.useState)(``),
    [re, ie] = (0, j.useState)(true),
    [ae, oe] = (0, j.useState)(() => B.getCachedCustomArticlesSync().length === 0),
    [se, ce] = (0, j.useState)(false),
    [le, ue] = (0, j.useState)(false),
    de = (0, j.useRef)(0),
    fe = (0, j.useRef)(false),
    [pe, me] = (0, j.useState)(null),
    [T, he] = (0, j.useState)(false),
    [ge, _e] = (0, j.useState)(false),
    [ve, ye] = (0, j.useState)(false),
    [be, xe] = (0, j.useState)(false),
    [E, Se] = (0, j.useState)({
      isPlaying: false,
      articleId: null
    }),
    k = async () => {
      try {
        let [e, t, n, r, i] = await Promise.all([B.fetchCustomArticles().then(e => e.filter(e => !e.isHidden)), B.fetchBreakingNews(), B.fetchApiNewsEnabled(), B.fetchBullionRates(), B.fetchAdvertisements()]);
        x(n);
        r && r.rates && u({
          rates: r.rates,
          lastUpdatedAt: r.lastUpdatedAt,
          enabled: r.enabled !== false
        });
        i && Array.isArray(i) && f(i.filter(e => e.isActive));
        e && e.length > 0 && o(t => {
          let n = t.filter(e => e.isLiveFeed);
          return [...e, ...n];
        });
        t && t.length > 0 && c(t);
      } catch (e) {
        console.warn(`Database data fetch notice:`, e);
      } finally {
        oe(false);
      }
    },
    Ce = e => {
      if (y(e), typeof window < `u`) {
        let t = new URL(window.location);
        if (e && e !== `all`) {
          t.searchParams.set(`category`, e);
        } else {
          t.searchParams.delete(`category`);
        }
        window.history.pushState({}, ``, t.pathname + t.search + t.hash);
      }
    },
    we = () => {
      if (typeof window > `u`) return null;
      if (window.location.pathname.startsWith(`/news/`)) {
        let e = window.location.pathname.replace(`/news/`, ``).split(`/`)[0].split(`?`)[0];
        if (e) return decodeURIComponent(e);
      }
      let e = new URLSearchParams(window.location.search);
      return e.get(`article`) || e.get(`id`);
    },
    Te = e => {
      e && (me(e), he(false), typeof window < `u` && window.history.pushState({}, ``, `/news/${e.id}`), B.incrementArticleViews(e.id), o(t => t.map(t => t.id === e.id ? {
        ...t,
        views: (t.views || 0) + 1
      } : t)));
    },
    Ee = () => {
      me(null);
      he(false);
      typeof window < `u` && (v && v !== `all` ? window.history.pushState({}, ``, `/?category=${v}`) : window.history.pushState({}, ``, `/`));
    };
  (0, j.useEffect)(() => {
    let e = B.getBookmarks(),
      t = B.getLang(),
      r = B.getTheme();
    _(e);
    ee(t);
    C(r);
    if (r === `dark`) {
      document.documentElement.classList.add(`dark`);
    } else {
      document.documentElement.classList.remove(`dark`);
    }
    xn.registerServiceWorker();
    let i = zn.subscribe(Se),
      a = () => {
        let e = window.location.pathname.includes(`admin`) || window.location.hash.includes(`admin`);
        n(e ? `admin` : `home`);
        let t = new URLSearchParams(window.location.search).get(`category`);
        y(t && (t === `all` || D.some(e => e.id === t)) ? t : `all`);
        let r = we();
        if (r) {
          o(e => {
            let t = e.find(e => e.id === r);
            return t ? (me(t), he(false)) : (he(true), B.fetchArticleById(r).then(e => {
              e && me(e);
              he(false);
            }).catch(() => {
              he(false);
            })), e;
          });
        } else {
          me(null);
          he(false);
        }
      };
    window.addEventListener(`popstate`, a);
    window.addEventListener(`hashchange`, a);
    let s = we();
    s && (fe.current = true, he(true), B.fetchArticleById(s).then(e => {
      if (e) {
        Te(e);
      } else {
        he(false);
      }
    }).catch(e => {
      console.warn(`Initial article fetch notice:`, e);
      he(false);
    }));
    A(false);
    k();
    let c = setInterval(() => {
        A(false);
        k();
      }, 6e5),
      l = () => {
        document.visibilityState === `visible` && Date.now() - (de.current || 0) > 6e5 && (A(true), k());
      };
    return document.addEventListener(`visibilitychange`, l), () => {
      i();
      zn.stop();
      clearInterval(c);
      document.removeEventListener(`visibilitychange`, l);
      window.removeEventListener(`popstate`, a);
      window.removeEventListener(`hashchange`, a);
    };
  }, []);
  (0, j.useEffect)(() => {
    if (typeof window > `u`) return;
    let e = we();
    if (e && !pe) {
      let t = a.find(t => t.id === e);
      if (t) {
        me(t);
        he(false);
      } else {
        B.fetchArticleById(e).then(e => {
          e && me(e);
          he(false);
        }).catch(() => he(false));
      }
    }
  }, [a, pe]);
  (0, j.useEffect)(() => {
    if (typeof window > `u`) return;
    let e = new URLSearchParams(window.location.search).get(`ad`) || (window.location.pathname.startsWith(`/ad/`) ? decodeURIComponent(window.location.pathname.replace(`/ad/`, ``).split(`/`)[0].split(`?`)[0]) : null);
    if (e) {
      let t = setTimeout(() => {
        let t = document.getElementById(`ad-${e}`) || document.querySelector(`[id^="ad-"]`);
        t && (t.scrollIntoView({
          behavior: `smooth`,
          block: `center`
        }), t.classList.add(`ring-4`, `ring-red-500`, `ring-offset-4`, `transition-all`, `duration-500`), setTimeout(() => {
          t.classList.remove(`ring-4`, `ring-red-500`, `ring-offset-4`);
        }, 4e3));
      }, 500);
      return () => clearTimeout(t);
    }
  }, [d]);
  let De = () => {
      window.history.pushState({}, ``, `/`);
      n(`home`);
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });
    },
    A = async (e = false) => {
      ie(true);
      ce(false);
      de.current = Date.now();
      try {
        let t = await B.fetchApiNewsEnabled();
        x(t);
        let n = await B.fetchCustomArticles().then(e => e.filter(e => !e.isHidden)),
          r = await Rn(),
          i = [...(n || []), ...(r || [])];
        if (r && r.length > 0) {
          let e = r.filter(e => e.titleHi && e.titleHi.length > 15).slice(0, 8).map(e => e.titleHi);
          e.length > 0 && c(e);
        }
        if (i.length > 0) {
          o(i);
          ce(false);
          xn.checkAndNotifyBeawarArticles(i);
        } else {
          ce(false);
        }
        e && r && r.length > 0 && (ue(true), setTimeout(() => ue(false), 3500));
      } catch (e) {
        console.warn(`Live news fetch notice:`, e);
        ce(true);
      } finally {
        ie(false);
      }
    },
    Oe = () => {
      let e = te === `light` ? `dark` : `light`;
      C(e);
      B.setTheme(e);
      if (e === `dark`) {
        document.documentElement.classList.add(`dark`);
      } else {
        document.documentElement.classList.remove(`dark`);
      }
    },
    ke = () => {
      let e = S === `hi` ? `en` : `hi`;
      ee(e);
      B.setLang(e);
    },
    Ne = e => {
      if (!e) return;
      let t = S === `hi`,
        n = t ? e.titleHi : e.titleEn || e.titleHi,
        r = t ? e.contentHi || `` : e.contentEn || e.contentHi || ``,
        i = t ? e.summaryHi || `` : e.summaryEn || e.summaryHi || ``,
        a = ``;
      if (r && r.trim()) {
        let e = i.trim(),
          t = r.trim();
        a = e && e !== t && !t.startsWith(e.slice(0, 30)) ? `${e}। ${t}` : t;
      } else i && i.trim() && (a = i.trim());
      let o = e.isLiveFeed && e.sourceName ? t ? `स्रोत: ${e.sourceName}। ` : `Source: ${e.sourceName}. ` : ``,
        s;
      s = t ? a ? `मुख्य समाचार: ${n}। ${o}अब विस्तार से खबर: ${a}` : `मुख्य समाचार: ${n}। ${o}` : a ? `Headline: ${n}. ${o}Full story: ${a}` : `Headline: ${n}. ${o}`;
      zn.speak(s, e.id, S);
    },
    Pe = e => {
      let t = B.toggleBookmark(e);
      _(t);
    },
    Fe = a.filter(e => {
      let t = w.trim() === `` || e.titleHi && e.titleHi.toLowerCase().includes(w.toLowerCase()) || e.titleEn && e.titleEn.toLowerCase().includes(w.toLowerCase()) || e.summaryHi && e.summaryHi.toLowerCase().includes(w.toLowerCase()),
        n = v === `all` || e.category === v;
      return t && n;
    }),
    Ie = a.filter(e => h.includes(e.id));
  if (t === `admin`) return (0, M.jsx)(j.Suspense, {
    fallback: (0, M.jsx)(`div`, {
      className: `min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900`,
      children: (0, M.jsx)(`div`, {
        className: `w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin`
      })
    }),
    children: (0, M.jsx)(Yn, {
      onNavigateHome: De,
      onNewsUpdated: () => {
        k();
        A();
      }
    })
  });
  let Le = new Set(a.map(e => e.category));
  return (0, M.jsxs)(`div`, {
    className: `min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col font-sans transition-colors duration-200 w-full max-w-full overflow-x-hidden`,
    children: [(0, M.jsx)(Ae, {
      selectedCategory: v,
      onSelectCategory: Ce,
      lang: S,
      onToggleLang: ke,
      theme: te,
      onToggleTheme: Oe,
      onOpenSubmitNews: () => ye(true),
      onOpenBookmarks: () => xe(true),
      bookmarksCount: h.length,
      searchQuery: w,
      onSearchChange: ne,
      isLoadingLiveNews: re,
      onRefreshLiveNews: () => A(true),
      liveCount: a.filter(e => e.isLiveFeed).length,
      activeCategoryIds: Le
    }), le && (0, M.jsxs)(`div`, {
      className: `fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-2xl border border-red-500/50 flex items-center gap-2 backdrop-blur-md animate-bounce`,
      children: [(0, M.jsx)(`span`, {
        className: `w-2 h-2 rounded-full bg-emerald-400 animate-ping`
      }), (0, M.jsx)(`span`, {
        children: `🔴 ताज़ा लाइव समाचार सफलतापूर्वक अपडेट हो चुके हैं!`
      })]
    }), l.enabled && (0, M.jsx)(Me, {
      rates: l.rates,
      lastUpdatedAt: l.lastUpdatedAt,
      enabled: l.enabled
    }), (0, M.jsx)(je, {
      items: s,
      onSelectHeadline: e => {
        let t = a.find(t => t.titleHi.includes(e.slice(0, 15)));
        t && Te(t);
      }
    }), d.find(e => e.placements?.includes(`stories`) || e.placement === `stories`) && (0, M.jsx)(`div`, {
      className: `max-w-7xl mx-auto px-3 sm:px-6 pt-1`,
      children: (0, M.jsx)(Pn, {
        ad: d.find(e => e.placements?.includes(`stories`) || e.placement === `stories`),
        layout: `stories`
      })
    }), (0, M.jsx)(un, {
      articles: a,
      onOpenArticle: Te
    }), (0, M.jsx)(`main`, {
      className: `flex-1 max-w-7xl w-full mx-auto pb-12 overflow-x-hidden`,
      children: w.trim() === `` ? v === `all` ? re && a.length === 0 ? (0, M.jsxs)(`div`, {
        className: `px-3 sm:px-6 py-12 max-w-5xl mx-auto`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex flex-col items-center justify-center py-12 text-center`,
          children: [(0, M.jsx)(`div`, {
            className: `w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-4`
          }), (0, M.jsx)(`p`, {
            className: `text-lg font-bold text-gray-800 dark:text-gray-200 font-hindi animate-pulse`,
            children: `खबरें लोड हो रही हैं…`
          }), (0, M.jsx)(`p`, {
            className: `text-xs text-gray-500 mt-1`,
            children: `विश्वसनीय एवं नवीनतम समाचार संकलित किए जा रहे हैं`
          })]
        }), (0, M.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse`,
          children: [1, 2, 3, 4, 5, 6].map(e => (0, M.jsxs)(`div`, {
            className: `bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3`,
            children: [(0, M.jsx)(`div`, {
              className: `h-44 bg-gray-200 dark:bg-gray-800 rounded-xl`
            }), (0, M.jsx)(`div`, {
              className: `h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4`
            }), (0, M.jsx)(`div`, {
              className: `h-3 bg-gray-100 dark:bg-gray-800 rounded w-full`
            }), (0, M.jsx)(`div`, {
              className: `h-3 bg-gray-100 dark:bg-gray-800 rounded w-2/3`
            })]
          }, e))
        })]
      }) : se && a.length === 0 ? (0, M.jsx)(`div`, {
        className: `px-3 sm:px-6 py-16 max-w-xl mx-auto text-center`,
        children: (0, M.jsxs)(`div`, {
          className: `bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-8 shadow-sm`,
          children: [(0, M.jsx)(`div`, {
            className: `w-14 h-14 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`,
            children: `⚠️`
          }), (0, M.jsx)(`h3`, {
            className: `text-lg sm:text-xl font-black font-hindi text-gray-900 dark:text-gray-100 mb-2`,
            children: `खबरें अभी उपलब्ध नहीं हैं, कृपया थोड़ी देर बाद देखें`
          }), (0, M.jsx)(`p`, {
            className: `text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-hindi mb-6 leading-relaxed`,
            children: `सर्वर अथवा नेटवर्क से संपर्क स्थापित नहीं हो सका। कृपया अपना इंटरनेट कनेक्शन जांचें अथवा पुनः प्रयास करें।`
          }), (0, M.jsxs)(`button`, {
            onClick: () => A(true),
            className: `inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow transition`,
            children: [(0, M.jsx)(g, {
              className: `w-4 h-4`
            }), `पुनः प्रयास करें`]
          })]
        })
      }) : (0, M.jsxs)(M.Fragment, {
        children: [(0, M.jsx)(pn, {
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onSelectCategory: Ce
        }), (0, M.jsx)(j.Suspense, {
          fallback: null,
          children: (0, M.jsx)(Pn, {
            ad: d.find(e => e.placements?.includes(`banner`) || e.placement === `banner` || e.placement === `all`),
            layout: `banner`
          })
        }), (0, M.jsx)(hn, {
          categoryId: `beawar`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `rajasthan`)) && (0, M.jsx)(hn, {
          categoryId: `rajasthan`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `national`)) && (0, M.jsx)(hn, {
          categoryId: `national`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `sports`)) && (0, M.jsx)(hn, {
          categoryId: `sports`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `entertainment`)) && (0, M.jsx)(hn, {
          categoryId: `entertainment`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `business`)) && (0, M.jsx)(hn, {
          categoryId: `business`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        }), (b || a.some(e => e.category === `crime`)) && (0, M.jsx)(hn, {
          categoryId: `crime`,
          articles: a,
          lang: S,
          onOpenArticle: Te,
          onPlayTTS: Ne,
          currentTTSId: E.isPlaying ? E.articleId : null,
          bookmarks: h,
          onToggleBookmark: Pe,
          onViewMoreCategory: Ce
        })]
      }) : (0, M.jsxs)(`div`, {
        className: `px-3 sm:px-6 py-6`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center justify-between mb-6`,
          children: [(0, M.jsxs)(`div`, {
            className: `flex items-center gap-2`,
            children: [(0, M.jsx)(`span`, {
              className: `p-2 rounded-xl bg-red-600 text-white font-bold`,
              children: `📰`
            }), (0, M.jsxs)(`div`, {
              children: [(0, M.jsx)(`h2`, {
                className: `text-xl sm:text-2xl font-black font-hindi`,
                children: S === `hi` ? D.find(e => e.id === v)?.nameHi : D.find(e => e.id === v)?.nameEn
              }), (0, M.jsxs)(`p`, {
                className: `text-xs text-gray-500`,
                children: [Fe.length, ` ताज़ा रिपोर्ट्स एवं अपडेट्स`]
              })]
            })]
          }), (0, M.jsx)(`button`, {
            onClick: () => Ce(`all`),
            className: `text-xs font-bold text-red-600 dark:text-red-400 hover:underline`,
            children: `← सभी मुख्य खबरें देखें`
          })]
        }), Fe.length === 0 ? ae || re ? (0, M.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse my-6`,
          children: [1, 2, 3, 4, 5, 6].map(e => (0, M.jsxs)(`div`, {
            className: `bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 shadow-sm space-y-3`,
            children: [(0, M.jsx)(`div`, {
              className: `h-44 bg-gray-200 dark:bg-gray-800 rounded-xl`
            }), (0, M.jsx)(`div`, {
              className: `h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4`
            }), (0, M.jsx)(`div`, {
              className: `h-3 bg-gray-100 dark:bg-gray-800 rounded w-full`
            }), (0, M.jsx)(`div`, {
              className: `h-3 bg-gray-100 dark:bg-gray-800 rounded w-2/3`
            })]
          }, e))
        }) : v === `beawar` ? (0, M.jsxs)(`div`, {
          className: `bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-amber-950/20 border-2 border-dashed border-amber-300 dark:border-amber-800/60 rounded-3xl p-6 sm:p-8 text-center shadow-sm my-6`,
          children: [(0, M.jsx)(`div`, {
            className: `w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner`,
            children: `📍`
          }), (0, M.jsx)(`h4`, {
            className: `text-base sm:text-lg font-black font-hindi text-gray-900 dark:text-white`,
            children: `अभी ब्यावर क्षेत्र की कोई नई खबर उपलब्ध नहीं है`
          }), (0, M.jsx)(`p`, {
            className: `text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-hindi mt-1.5 max-w-lg mx-auto leading-relaxed`,
            children: `हमारे स्थानीय संवाददाता एवं ब्यूरो द्वारा खबर अपलोड होते ही यहाँ सबसे पहले प्रदर्शित होगी। क्या आपके पास कोई स्थानीय समाचार है?`
          }), (0, M.jsx)(`div`, {
            className: `mt-5 flex flex-wrap items-center justify-center gap-3`,
            children: (0, M.jsx)(`a`, {
              href: `https://wa.me/${O.whatsapp}?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AC%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B5%E0%A4%B0%20%E0%A4%95%E0%A5%80%20%E0%A4%96%E0%A4%AC%E0%A4%B0%20%E0%A4%AD%E0%A5%87%E0%A4%9C%E0%A4%A8%E0%A5%80%20%E0%A4%B9%E0%A5%88%E0%A5%A4`,
              target: `_blank`,
              rel: `noopener noreferrer`,
              className: `inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md transition active:scale-95`,
              children: (0, M.jsxs)(`span`, {
                children: [`📲 ब्यावर की खबर व्हाट्सएप पर भेजें (`, O.phonePrimary, `)`]
              })
            })
          })]
        }) : (0, M.jsx)(`div`, {
          className: `text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 my-6`,
          children: (0, M.jsx)(`p`, {
            className: `text-base font-semibold font-hindi text-gray-500`,
            children: `इस श्रेणी में फिलहाल कोई खबर उपलब्ध नहीं है।`
          })
        }) : (0, M.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6`,
          children: Fe.map((e, t) => {
            let n = d.find(e => e.placements?.includes(`feed`) || e.placement === `feed` || e.placement === `all`),
              r = t === 2 && n;
            return (0, M.jsxs)(j.Fragment, {
              children: [(0, M.jsx)(fn, {
                article: e,
                lang: S,
                layout: `standard`,
                onOpenArticle: Te,
                onPlayTTS: Ne,
                isPlayingAudio: E.isPlaying && E.articleId === e.id,
                isBookmarked: h.includes(e.id),
                onToggleBookmark: Pe
              }), r && (0, M.jsx)(j.Suspense, {
                fallback: null,
                children: (0, M.jsx)(Pn, {
                  ad: n,
                  layout: `feed`
                })
              })]
            }, e.id);
          })
        })]
      }) : (0, M.jsxs)(`div`, {
        className: `px-3 sm:px-6 py-6`,
        children: [(0, M.jsxs)(`div`, {
          className: `flex items-center justify-between mb-4`,
          children: [(0, M.jsxs)(`h2`, {
            className: `text-lg font-bold font-hindi`,
            children: [`'`, w, `' के लिए खोज परिणाम (`, Fe.length, `)`]
          }), (0, M.jsx)(`button`, {
            onClick: () => ne(``),
            className: `text-xs text-red-600 font-bold hover:underline`,
            children: `खोज साफ़ करें`
          })]
        }), Fe.length === 0 ? (0, M.jsx)(`div`, {
          className: `text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800`,
          children: (0, M.jsx)(`p`, {
            className: `text-base font-semibold font-hindi text-gray-500`,
            children: `कोई खबर नहीं मिली। कृपया कोई अन्य शब्द खोजें।`
          })
        }) : (0, M.jsx)(`div`, {
          className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
          children: Fe.map(e => (0, M.jsx)(fn, {
            article: e,
            lang: S,
            layout: `standard`,
            onOpenArticle: Te,
            onPlayTTS: Ne,
            isPlayingAudio: E.isPlaying && E.articleId === e.id,
            isBookmarked: h.includes(e.id),
            onToggleBookmark: Pe
          }, e.id))
        })]
      })
    }), (0, M.jsx)(vn, {
      onSelectCategory: Ce,
      onOpenSubmitNews: () => ye(true),
      onOpenLegal: e => m({
        isOpen: true,
        page: e
      }),
      lang: S,
      activeCategoryIds: Le
    }), (0, M.jsx)(_n, {
      activeTab: v,
      onSelectTab: Ce,
      onOpenQuickRead: () => _e(true),
      onOpenMobileMenu: () => window.scrollTo({
        top: 0,
        behavior: `smooth`
      }),
      activeCategoryIds: Le
    }), (0, M.jsx)(j.Suspense, {
      fallback: null,
      children: (0, M.jsx)(Wn, {
        article: pe,
        isOpen: !!pe || T,
        isLoading: T,
        onClose: Ee,
        lang: S,
        onPlayTTS: Ne,
        isPlayingAudio: E.isPlaying && E.articleId === pe?.id,
        isBookmarked: pe ? h.includes(pe.id) : false,
        onToggleBookmark: Pe,
        relatedArticles: a.filter(e => e.id !== pe?.id && (e.category === pe?.category || e.category === `beawar`)),
        onSelectRelated: Te,
        ad: d.find(e => e.placements?.includes(`article`) || e.placement === `article` || e.placement === `all`)
      })
    }), (0, M.jsx)(j.Suspense, {
      fallback: null,
      children: (0, M.jsx)(Gn, {
        isOpen: ge,
        onClose: () => _e(false),
        articles: a,
        lang: S,
        onPlayTTS: Ne,
        isPlayingAudio: E.isPlaying,
        currentTTSId: E.articleId,
        bookmarks: h,
        onToggleBookmark: Pe
      })
    }), (0, M.jsx)(j.Suspense, {
      fallback: null,
      children: (0, M.jsx)(Kn, {
        isOpen: ve,
        onClose: () => ye(false)
      })
    }), (0, M.jsx)(j.Suspense, {
      fallback: null,
      children: (0, M.jsx)(qn, {
        isOpen: be,
        onClose: () => xe(false),
        bookmarkedArticles: Ie,
        lang: S,
        onOpenArticle: Te,
        onPlayTTS: Ne,
        currentTTSId: E.isPlaying ? E.articleId : null,
        onToggleBookmark: Pe
      })
    }), (0, M.jsx)(j.Suspense, {
      fallback: null,
      children: (0, M.jsx)(Jn, {
        isOpen: p.isOpen,
        onClose: () => m(e => ({
          ...e,
          isOpen: false
        })),
        page: p.page
      })
    }), (0, M.jsx)(gn, {
      onOpenCookiePolicy: () => m({
        isOpen: true,
        page: `cookies`
      })
    }), (0, M.jsx)(Sn, {})]
  });
}
(0, ke.createRoot)(document.getElementById(`root`)).render((0, M.jsx)(j.StrictMode, {
  children: (0, M.jsx)(Xn, {})
}));
export { R as a, L as c, on as d, an as f, B as i, dn as l, Mn as n, z as o, ln as p, jn as r, fn as s, Un as t, cn as u };