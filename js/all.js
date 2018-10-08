/*! jQuery v1.9.0 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */
(function (e, t) {
    function n(e) {
        var t = e.length, n = st.type(e);
        return st.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Tt[e] = {};
        return st.each(e.match(lt) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (st.acceptData(e)) {
            var o, a, s = st.expando, u = "string" == typeof n, l = e.nodeType, c = l ? st.cache : e,
                f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t) {
                return f || (l ? e[s] = f = K.pop() || st.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = st.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = st.extend(c[f], n) : c[f].data = st.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[st.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[st.camelCase(n)])) : a = o, a
            }
        }
    }

    function o(e, t, n) {
        if (st.acceptData(e)) {
            var r, i, o, a = e.nodeType, u = a ? st.cache : e, l = a ? e[st.expando] : st.expando;
            if (u[l]) {
                if (t && (r = n ? u[l] : u[l].data)) {
                    st.isArray(t) ? t = t.concat(st.map(t, st.camelCase)) : t in r ? t = [t] : (t = st.camelCase(t), t = t in r ? [t] : t.split(" "));
                    for (i = 0, o = t.length; o > i; i++) {
                        delete r[t[i]]
                    }
                    if (!(n ? s : st.isEmptyObject)(r)) {
                        return
                    }
                }
                (n || (delete u[l].data, s(u[l]))) && (a ? st.cleanData([e], !0) : st.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(Nt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : wt.test(r) ? st.parseJSON(r) : r
                } catch (o) {
                }
                st.data(e, n, r)
            } else {
                r = t
            }
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e) {
            if (("data" !== t || !st.isEmptyObject(e[t])) && "toJSON" !== t) {
                return !1
            }
        }
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do {
            e = e[t]
        } while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (t = t || 0, st.isFunction(t)) {
            return st.grep(e, function (e, r) {
                var i = !!t.call(e, r, e);
                return i === n
            })
        }
        if (t.nodeType) {
            return st.grep(e, function (e) {
                return e === t === n
            })
        }
        if ("string" == typeof t) {
            var r = st.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (Wt.test(t)) {
                return st.filter(t, r, !n)
            }
            t = st.filter(t, r)
        }
        return st.grep(e, function (e) {
            return st.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        var t = zt.split("|"), n = e.createDocumentFragment();
        if (n.createElement) {
            for (; t.length;) {
                n.createElement(t.pop())
            }
        }
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = nn.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) {
            st._data(n, "globalEval", !t || st._data(t[r], "globalEval"))
        }
    }

    function y(e, t) {
        if (1 === t.nodeType && st.hasData(e)) {
            var n, r, i, o = st._data(e), a = st._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) {
                    for (r = 0, i = s[n].length; i > r; r++) {
                        st.event.add(t, n, s[n][r])
                    }
                }
            }
            a.data && (a.data = st.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !st.support.noCloneEvent && t[st.expando]) {
                r = st._data(t);
                for (i in r.events) {
                    st.removeEvent(t, i, r.handle)
                }
                t.removeAttribute(st.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), st.support.html5Clone && e.innerHTML && !st.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Zt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0,
            a = e.getElementsByTagName !== t ? e.getElementsByTagName(n || "*") : e.querySelectorAll !== t ? e.querySelectorAll(n || "*") : t;
        if (!a) {
            for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) {
                !n || st.nodeName(i, n) ? a.push(i) : st.merge(a, b(i, n))
            }
        }
        return n === t || n && st.nodeName(e, n) ? st.merge([e], a) : a
    }

    function x(e) {
        Zt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function T(e, t) {
        if (t in e) {
            return t
        }
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Nn.length; i--;) {
            if (t = Nn[i] + n, t in e) {
                return t
            }
        }
        return r
    }

    function w(e, t) {
        return e = t || e, "none" === st.css(e, "display") || !st.contains(e.ownerDocument, e)
    }

    function N(e, t) {
        for (var n, r = [], i = 0, o = e.length; o > i; i++) {
            n = e[i], n.style && (r[i] = st._data(n, "olddisplay"), t ? (r[i] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && w(n) && (r[i] = st._data(n, "olddisplay", S(n.nodeName)))) : r[i] || w(n) || st._data(n, "olddisplay", st.css(n, "display")))
        }
        for (i = 0; o > i; i++) {
            n = e[i], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[i] || "" : "none"))
        }
        return e
    }

    function C(e, t, n) {
        var r = mn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) {
            "margin" === n && (a += st.css(e, n + wn[o], !0, i)), r ? ("content" === n && (a -= st.css(e, "padding" + wn[o], !0, i)), "margin" !== n && (a -= st.css(e, "border" + wn[o] + "Width", !0, i))) : (a += st.css(e, "padding" + wn[o], !0, i), "padding" !== n && (a += st.css(e, "border" + wn[o] + "Width", !0, i)))
        }
        return a
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = ln(e),
            a = st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = un(e, t, o), (0 > i || null == i) && (i = e.style[t]), yn.test(i)) {
                return i
            }
            r = a && (st.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e) {
        var t = V, n = bn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || st("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), bn[e] = n), n
    }

    function A(e, t) {
        var n = st(t.createElement(e)).appendTo(t.body), r = st.css(n[0], "display");
        return n.remove(), r
    }

    function j(e, t, n, r) {
        var i;
        if (st.isArray(t)) {
            st.each(t, function (t, i) {
                n || kn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
            })
        } else {
            if (n || "object" !== st.type(t)) {
                r(e, t)
            } else {
                for (i in t) {
                    j(e + "[" + i + "]", t[i], n, r)
                }
            }
        }
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(lt) || [];
            if (st.isFunction(n)) {
                for (; r = o[i++];) {
                    "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
                }
            }
        }
    }

    function L(e, n, r, i) {
        function o(u) {
            var l;
            return a[u] = !0, st.each(e[u] || [], function (e, u) {
                var c = u(n, r, i);
                return "string" != typeof c || s || a[c] ? s ? !(l = c) : t : (n.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        var a = {}, s = e === $n;
        return o(n.dataTypes[0]) || !a["*"] && o("*")
    }

    function H(e, n) {
        var r, i, o = st.ajaxSettings.flatOptions || {};
        for (r in n) {
            n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r])
        }
        return i && st.extend(!0, e, i), e
    }

    function M(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (o in c) {
            o in r && (n[c[o]] = r[o])
        }
        for (; "*" === l[0];) {
            l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"))
        }
        if (i) {
            for (o in u) {
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
            }
        }
        if (l[0] in r) {
            a = l[0]
        } else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    a = o;
                    break
                }
                s || (s = o)
            }
            a = a || s
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : t
    }

    function q(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) {
            for (n in e.converters) {
                a[n.toLowerCase()] = e.converters[n]
            }
        }
        for (; i = u[++s];) {
            if ("*" !== i) {
                if ("*" !== l && l !== i) {
                    if (n = a[l + " " + i] || a["* " + i], !n) {
                        for (r in a) {
                            if (o = r.split(" "), o[1] === i && (n = a[l + " " + o[0]] || a["* " + o[0]])) {
                                n === !0 ? n = a[r] : a[r] !== !0 && (i = o[0], u.splice(s--, 0, i));
                                break
                            }
                        }
                    }
                    if (n !== !0) {
                        if (n && e["throws"]) {
                            t = n(t)
                        } else {
                            try {
                                t = n(t)
                            } catch (c) {
                                return {state: "parsererror", error: n ? c : "No conversion from " + l + " to " + i}
                            }
                        }
                    }
                }
                l = i
            }
        }
        return {state: "success", data: t}
    }

    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function O() {
        return setTimeout(function () {
            Qn = t
        }), Qn = st.now()
    }

    function B(e, t) {
        st.each(t, function (t, n) {
            for (var r = (rr[t] || []).concat(rr["*"]), i = 0, o = r.length; o > i; i++) {
                if (r[i].call(e, t, n)) {
                    return
                }
            }
        })
    }

    function P(e, t, n) {
        var r, i, o = 0, a = nr.length, s = st.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i) {
                return !1
            }
            for (var t = Qn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) {
                l.tweens[a].run(o)
            }
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: st.extend({}, t),
            opts: st.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Qn || O(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = st.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) {
                    return this
                }
                for (i = !0; r > n; n++) {
                    l.tweens[n].run(1)
                }
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++) {
            if (r = nr[o].call(l, e, c, l.opts)) {
                return r
            }
        }
        return B(l, c), st.isFunction(l.opts.start) && l.opts.start.call(e, l), st.fx.timer(st.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (n in e) {
            if (r = st.camelCase(n), i = t[r], o = e[n], st.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = st.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) {
                    n in e || (e[n] = o[n], t[n] = i)
                }
            } else {
                t[r] = i
            }
        }
    }

    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && w(e);
        n.queue || (c = st._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, p.always(function () {
            p.always(function () {
                c.unqueued--, st.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === st.css(e, "display") && "none" === st.css(e, "float") && (st.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", st.support.shrinkWrapBlocks || p.done(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (r in t) {
            if (o = t[r], Zn.exec(o)) {
                if (delete t[r], u = u || "toggle" === o, o === (m ? "hide" : "show")) {
                    continue
                }
                g.push(r)
            }
        }
        if (a = g.length) {
            s = st._data(e, "fxshow") || st._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? st(e).show() : p.done(function () {
                st(e).hide()
            }), p.done(function () {
                var t;
                st._removeData(e, "fxshow");
                for (t in h) {
                    st.style(e, t, h[t])
                }
            });
            for (r = 0; a > r; r++) {
                i = g[r], l = p.createTween(i, m ? s[i] : 0), h[i] = s[i] || st.style(e, i), i in s || (s[i] = l.start, m && (l.end = l.start, l.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function I(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
            n = wn[i], r["margin" + n] = r["padding" + n] = e
        }
        return t && (r.opacity = r.width = e), r
    }

    function z(e) {
        return st.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var X, U, V = e.document, Y = e.location, J = e.jQuery, G = e.$, Q = {}, K = [], Z = "1.9.0", et = K.concat,
        tt = K.push, nt = K.slice, rt = K.indexOf, it = Q.toString, ot = Q.hasOwnProperty, at = Z.trim,
        st = function (e, t) {
            return new st.fn.init(e, t, X)
        }, ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, lt = /\S+/g, ct = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ft = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, dt = /^[\],:{}\s]*$/,
        ht = /(?:^|:|,)(?:\s*\[)+/g, gt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, yt = /^-ms-/, vt = /-([\da-z])/gi,
        bt = function (e, t) {
            return t.toUpperCase()
        }, xt = function () {
            V.addEventListener ? (V.removeEventListener("DOMContentLoaded", xt, !1), st.ready()) : "complete" === V.readyState && (V.detachEvent("onreadystatechange", xt), st.ready())
        };
    st.fn = st.prototype = {
        jquery: Z, constructor: st, init: function (e, n, r) {
            var i, o;
            if (!e) {
                return this
            }
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ft.exec(e), !i || !i[1] && n) {
                    return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
                }
                if (i[1]) {
                    if (n = n instanceof st ? n[0] : n, st.merge(this, st.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : V, !0)), pt.test(i[1]) && st.isPlainObject(n)) {
                        for (i in n) {
                            st.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
                        }
                    }
                    return this
                }
                if (o = V.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) {
                        return r.find(e)
                    }
                    this.length = 1, this[0] = o
                }
                return this.context = V, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : st.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), st.makeArray(e, this))
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return nt.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = st.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return st.each(this, e, t)
        }, ready: function (e) {
            return st.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(nt.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(st.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: tt, sort: [].sort, splice: [].splice
    }, st.fn.init.prototype = st.fn, st.extend = st.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || st.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) {
            if (null != (e = arguments[u])) {
                for (n in e) {
                    r = s[n], i = e[n], s !== i && (c && i && (st.isPlainObject(i) || (o = st.isArray(i))) ? (o ? (o = !1, a = r && st.isArray(r) ? r : []) : a = r && st.isPlainObject(r) ? r : {}, s[n] = st.extend(c, a, i)) : i !== t && (s[n] = i))
                }
            }
        }
        return s
    }, st.extend({
        noConflict: function (t) {
            return e.$ === st && (e.$ = G), t && e.jQuery === st && (e.jQuery = J), st
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? st.readyWait++ : st.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--st.readyWait : !st.isReady) {
                if (!V.body) {
                    return setTimeout(st.ready)
                }
                st.isReady = !0, e !== !0 && --st.readyWait > 0 || (U.resolveWith(V, [st]), st.fn.trigger && st(V).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === st.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === st.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[it.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if (!e || "object" !== st.type(e) || e.nodeType || st.isWindow(e)) {
                return !1
            }
            try {
                if (e.constructor && !ot.call(e, "constructor") && !ot.call(e.constructor.prototype, "isPrototypeOf")) {
                    return !1
                }
            } catch (n) {
                return !1
            }
            var r;
            for (r in e) {
            }
            return r === t || ot.call(e, r)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) {
                return !1
            }
            return !0
        }, error: function (e) {
            throw Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e) {
                return null
            }
            "boolean" == typeof t && (n = t, t = !1), t = t || V;
            var r = pt.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = st.buildFragment([e], t, i), i && st(i).remove(), st.merge([], r.childNodes))
        }, parseJSON: function (n) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = st.trim(n), n && dt.test(n.replace(gt, "@").replace(mt, "]").replace(ht, ""))) ? Function("return " + n)() : (st.error("Invalid JSON: " + n), t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n) {
                return null
            }
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && st.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(yt, "ms-").replace(vt, bt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s) {
                    for (; a > o && (i = t.apply(e[o], r), i !== !1); o++) {
                    }
                } else {
                    for (o in e) {
                        if (i = t.apply(e[o], r), i === !1) {
                            break
                        }
                    }
                }
            } else {
                if (s) {
                    for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++) {
                    }
                } else {
                    for (o in e) {
                        if (i = t.call(e[o], o, e[o]), i === !1) {
                            break
                        }
                    }
                }
            }
            return e
        }, trim: at && !at.call("\ufeff\u00a0") ? function (e) {
            return null == e ? "" : at.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ct, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? st.merge(r, "string" == typeof e ? [e] : e) : tt.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (rt) {
                    return rt.call(t, e, n)
                }
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
                    if (n in t && t[n] === e) {
                        return n
                    }
                }
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r) {
                for (; r > o; o++) {
                    e[i++] = n[o]
                }
            } else {
                for (; n[o] !== t;) {
                    e[i++] = n[o++]
                }
            }
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++) {
                r = !!t(e[o], o), n !== r && i.push(e[o])
            }
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s) {
                for (; a > o; o++) {
                    i = t(e[o], o, r), null != i && (u[u.length] = i)
                }
            } else {
                for (o in e) {
                    i = t(e[o], o, r), null != i && (u[u.length] = i)
                }
            }
            return et.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), st.isFunction(e) ? (i = nt.call(arguments, 2), o = function () {
                return e.apply(n || this, i.concat(nt.call(arguments)))
            }, o.guid = e.guid = e.guid || st.guid++, o) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === st.type(r)) {
                o = !0;
                for (u in r) {
                    st.access(e, n, u, r[u], !0, a, s)
                }
            } else {
                if (i !== t && (o = !0, st.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                        return c.call(st(e), n)
                    })), n)) {
                    for (; l > u; u++) {
                        n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)))
                    }
                }
            }
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }
    }), st.ready.promise = function (t) {
        if (!U) {
            if (U = st.Deferred(), "complete" === V.readyState) {
                setTimeout(st.ready)
            } else {
                if (V.addEventListener) {
                    V.addEventListener("DOMContentLoaded", xt, !1), e.addEventListener("load", st.ready, !1)
                } else {
                    V.attachEvent("onreadystatechange", xt), e.attachEvent("onload", st.ready);
                    var n = !1;
                    try {
                        n = null == e.frameElement && V.documentElement
                    } catch (r) {
                    }
                    n && n.doScroll && function i() {
                        if (!st.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(i, 50)
                            }
                            st.ready()
                        }
                    }()
                }
            }
        }
        return U.promise(t)
    }, st.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        Q["[object " + t + "]"] = t.toLowerCase()
    }), X = st(V);
    var Tt = {};
    st.Callbacks = function (e) {
        e = "string" == typeof e ? Tt[e] || r(e) : st.extend({}, e);
        var n, i, o, a, s, u, l = [], c = !e.once && [], f = function (t) {
            for (n = e.memory && t, i = !0, u = a || 0, a = 0, s = l.length, o = !0; l && s > u; u++) {
                if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            }
            o = !1, l && (c ? c.length && f(c.shift()) : n ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    (function r(t) {
                        st.each(t, function (t, n) {
                            var i = st.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    })(arguments), o ? s = l.length : n && (a = t, f(n))
                }
                return this
            }, remove: function () {
                return l && st.each(arguments, function (e, t) {
                    for (var n; (n = st.inArray(t, l, n)) > -1;) {
                        l.splice(n, 1), o && (s >= n && s--, u >= n && u--)
                    }
                }), this
            }, has: function (e) {
                return st.inArray(e, l) > -1
            }, empty: function () {
                return l = [], this
            }, disable: function () {
                return l = c = n = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = t, n || p.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!i
            }
        };
        return p
    }, st.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", st.Callbacks("once memory"), "resolved"], ["reject", "fail", st.Callbacks("once memory"), "rejected"], ["notify", "progress", st.Callbacks("memory")]],
                n = "pending", r = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return st.Deferred(function (n) {
                            st.each(t, function (t, o) {
                                var a = o[0], s = st.isFunction(e[t]) && e[t];
                                i[o[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && st.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? st.extend(e, r) : r
                    }
                }, i = {};
            return r.pipe = r.then, st.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = nt.call(arguments), a = o.length,
                s = 1 !== a || e && st.isFunction(e.promise) ? a : 0, u = 1 === s ? e : st.Deferred(),
                l = function (e, n, r) {
                    return function (i) {
                        n[e] = this, r[e] = arguments.length > 1 ? nt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                    }
                };
            if (a > 1) {
                for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) {
                    o[i] && st.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s
                }
            }
            return s || u.resolveWith(r, o), u.promise()
        }
    }), st.support = function () {
        var n, r, i, o, a, s, u, l, c, f, p = V.createElement("div");
        if (p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = p.getElementsByTagName("*"), i = p.getElementsByTagName("a")[0], !r || !i || !r.length) {
            return {}
        }
        o = V.createElement("select"), a = o.appendChild(V.createElement("option")), s = p.getElementsByTagName("input")[0], i.style.cssText = "top:1px;float:left;opacity:.5", n = {
            getSetAttribute: "t" !== p.className,
            leadingWhitespace: 3 === p.firstChild.nodeType,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(i.getAttribute("style")),
            hrefNormalized: "/a" === i.getAttribute("href"),
            opacity: /^0.5/.test(i.style.opacity),
            cssFloat: !!i.style.cssFloat,
            checkOn: !!s.value,
            optSelected: a.selected,
            enctype: !!V.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== V.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === V.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, n.noCloneChecked = s.cloneNode(!0).checked, o.disabled = !0, n.optDisabled = !a.disabled;
        try {
            delete p.test
        } catch (d) {
            n.deleteExpando = !1
        }
        s = V.createElement("input"), s.setAttribute("value", ""), n.input = "" === s.getAttribute("value"), s.value = "t", s.setAttribute("type", "radio"), n.radioValue = "t" === s.value, s.setAttribute("checked", "t"), s.setAttribute("name", "t"), u = V.createDocumentFragment(), u.appendChild(s), n.appendChecked = s.checked, n.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, p.attachEvent && (p.attachEvent("onclick", function () {
            n.noCloneEvent = !1
        }), p.cloneNode(!0).click());
        for (f in {submit: !0, change: !0, focusin: !0}) {
            p.setAttribute(l = "on" + f, "t"), n[f + "Bubbles"] = l in e || p.attributes[l].expando === !1
        }
        return p.style.backgroundClip = "content-box", p.cloneNode(!0).style.backgroundClip = "", n.clearCloneStyle = "content-box" === p.style.backgroundClip, st(function () {
            var r, i, o,
                a = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = V.getElementsByTagName("body")[0];
            s && (r = V.createElement("div"), r.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(r).appendChild(p), p.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = p.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", n.reliableHiddenOffsets = c && 0 === o[0].offsetHeight, p.innerHTML = "", p.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", n.boxSizing = 4 === p.offsetWidth, n.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (n.pixelPosition = "1%" !== (e.getComputedStyle(p, null) || {}).top, n.boxSizingReliable = "4px" === (e.getComputedStyle(p, null) || {width: "4px"}).width, i = p.appendChild(V.createElement("div")), i.style.cssText = p.style.cssText = a, i.style.marginRight = i.style.width = "0", p.style.width = "1px", n.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), p.style.zoom !== t && (p.innerHTML = "", p.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", n.inlineBlockNeedsLayout = 3 === p.offsetWidth, p.style.display = "block", p.innerHTML = "<div></div>", p.firstChild.style.width = "5px", n.shrinkWrapBlocks = 3 !== p.offsetWidth, s.style.zoom = 1), s.removeChild(r), r = p = o = i = null)
        }), r = o = u = a = i = s = null, n
    }();
    var wt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Nt = /([A-Z])/g;
    st.extend({
        cache: {},
        expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? st.cache[e[st.expando]] : e[st.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n, !1)
        },
        removeData: function (e, t) {
            return o(e, t, !1)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && st.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), st.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = st.data(o), 1 === o.nodeType && !st._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; r.length > s; s++) {
                        i = r[s].name, i.indexOf("data-") || (i = st.camelCase(i.substring(5)), a(o, i, u[i]))
                    }
                    st._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                st.data(this, e)
            }) : st.access(this, function (n) {
                return n === t ? o ? a(o, e, st.data(o, e)) : null : (this.each(function () {
                    st.data(this, e, n)
                }), t)
            }, null, n, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                st.removeData(this, e)
            })
        }
    }), st.extend({
        queue: function (e, n, r) {
            var i;
            return e ? (n = (n || "fx") + "queue", i = st._data(e, n), r && (!i || st.isArray(r) ? i = st._data(e, n, st.makeArray(r)) : i.push(r)), i || []) : t
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = st.queue(e, t), r = n.length, i = n.shift(), o = st._queueHooks(e, t), a = function () {
                st.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return st._data(e, n) || st._data(e, n, {
                empty: st.Callbacks("once memory").add(function () {
                    st._removeData(e, t + "queue"), st._removeData(e, n)
                })
            })
        }
    }), st.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? st.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = st.queue(this, e, n);
                st._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && st.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                st.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = st.fx ? st.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = st.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) {
                r = st._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u))
            }
            return u(), o.promise(n)
        }
    });
    var Ct, kt, Et = /[\t\r\n]/g, St = /\r/g, At = /^(?:input|select|textarea|button|object)$/i, jt = /^(?:a|area)$/i,
        Dt = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        Lt = /^(?:checked|selected)$/i, Ht = st.support.getSetAttribute, Mt = st.support.input;
    st.fn.extend({
        attr: function (e, t) {
            return st.access(this, st.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                st.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return st.access(this, st.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = st.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (st.isFunction(e)) {
                return this.each(function (t) {
                    st(this).addClass(e.call(this, t, this.className))
                })
            }
            if (u) {
                for (t = (e || "").match(lt) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                        for (o = 0; i = t[o++];) {
                            0 > r.indexOf(" " + i + " ") && (r += i + " ")
                        }
                        n.className = st.trim(r)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (st.isFunction(e)) {
                return this.each(function (t) {
                    st(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (u) {
                for (t = (e || "").match(lt) || []; s > a; a++) {
                    if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                        for (o = 0; i = t[o++];) {
                            for (; r.indexOf(" " + i + " ") >= 0;) {
                                r = r.replace(" " + i + " ", " ")
                            }
                        }
                        n.className = e ? st.trim(r) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return st.isFunction(e) ? this.each(function (n) {
                st(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if ("string" === n) {
                    for (var i, o = 0, a = st(this), s = t, u = e.match(lt) || []; i = u[o++];) {
                        s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i)
                    }
                } else {
                    ("undefined" === n || "boolean" === n) && (this.className && st._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : st._data(this, "__className__") || "")
                }
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) {
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) {
                    return !0
                }
            }
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            if (arguments.length) {
                return i = st.isFunction(e), this.each(function (r) {
                    var o, a = st(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), n = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                })
            }
            if (o) {
                return n = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(St, "") : null == r ? "" : r)
            }
        }
    }), st.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) {
                        if (n = r[u], !(!n.selected && u !== i || (st.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && st.nodeName(n.parentNode, "optgroup"))) {
                            if (t = st(n).val(), o) {
                                return t
                            }
                            a.push(t)
                        }
                    }
                    return a
                }, set: function (e, t) {
                    var n = st.makeArray(t);
                    return st(e).find("option").each(function () {
                        this.selected = st.inArray(st(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return e.getAttribute === t ? st.prop(e, n, r) : (a = 1 !== s || !st.isXMLDoc(e), a && (n = n.toLowerCase(), o = st.attrHooks[n] || (Dt.test(n) ? kt : Ct)), r === t ? o && a && "get" in o && null !== (i = o.get(e, n)) ? i : (e.getAttribute !== t && (i = e.getAttribute(n)), null == i ? t : i) : null !== r ? o && a && "set" in o && (i = o.set(e, r, n)) !== t ? i : (e.setAttribute(n, r + ""), r) : (st.removeAttr(e, n), t))
            }
        },
        removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(lt);
            if (o && 1 === e.nodeType) {
                for (; n = o[i++];) {
                    r = st.propFix[n] || n, Dt.test(n) ? !Ht && Lt.test(n) ? e[st.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : st.attr(e, n, ""), e.removeAttribute(Ht ? n : r)
                }
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!st.support.radioValue && "radio" === t && st.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) {
                return a = 1 !== s || !st.isXMLDoc(e), a && (n = st.propFix[n] || n, o = st.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
            }
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), kt = {
        get: function (e, n) {
            var r = st.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n),
                o = "boolean" == typeof r ? Mt && Ht ? null != i : Lt.test(n) ? e[st.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            return t === !1 ? st.removeAttr(e, n) : Mt && Ht || !Lt.test(n) ? e.setAttribute(!Ht && st.propFix[n] || n, n) : e[st.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, Mt && Ht || (st.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return st.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        }, set: function (e, n, r) {
            return st.nodeName(e, "input") ? (e.defaultValue = n, t) : Ct && Ct.set(e, n, r)
        }
    }), Ht || (Ct = st.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        }, set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, st.attrHooks.contenteditable = {
        get: Ct.get, set: function (e, t, n) {
            Ct.set(e, "" === t ? !1 : t, n)
        }
    }, st.each(["width", "height"], function (e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            set: function (e, r) {
                return "" === r ? (e.setAttribute(n, "auto"), r) : t
            }
        })
    })), st.support.hrefNormalized || (st.each(["href", "src", "width", "height"], function (e, n) {
        st.attrHooks[n] = st.extend(st.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), st.each(["href", "src"], function (e, t) {
        st.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), st.support.style || (st.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), st.support.optSelected || (st.propHooks.selected = st.extend(st.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), st.support.enctype || (st.propFix.enctype = "encoding"), st.support.checkOn || st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), st.each(["radio", "checkbox"], function () {
        st.valHooks[this] = st.extend(st.valHooks[this], {
            set: function (e, n) {
                return st.isArray(n) ? e.checked = st.inArray(st(e).val(), n) >= 0 : t
            }
        })
    });
    var qt = /^(?:input|select|textarea)$/i, _t = /^key/, Ft = /^(?:mouse|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/, Bt = /^([^.]*)(?:\.(.+)|)$/;
    st.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = 3 !== e.nodeType && 8 !== e.nodeType && st._data(e);
            if (y) {
                for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = st.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function (e) {
                    return st === t || e && st.event.triggered === e.type ? t : st.event.dispatch.apply(s.elem, arguments)
                }, s.elem = e), n = (n || "").match(lt) || [""], c = n.length; c--;) {
                    u = Bt.exec(n[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), p = st.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = st.event.special[h] || {}, f = st.extend({
                        type: h,
                        origType: m,
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        needsContext: o && st.expr.match.needsContext.test(o),
                        namespace: g.join(".")
                    }, a), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || (e.addEventListener ? e.addEventListener(h, s, !1) : e.attachEvent && e.attachEvent("on" + h, s))), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), st.event.global[h] = !0
                }
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = st.hasData(e) && st._data(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(lt) || [""], l = t.length; l--;) {
                    if (s = Bt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = st.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
                            c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c))
                        }
                        a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || st.removeEvent(e, d, m.handle), delete u[d])
                    } else {
                        for (d in u) {
                            st.event.remove(e, d + t[l], n, r, !0)
                        }
                    }
                }
                st.isEmptyObject(u) && (delete m.handle, st._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || V], h = n.type || n, g = n.namespace ? n.namespace.split(".") : [];
            if (s = u = i = i || V, 3 !== i.nodeType && 8 !== i.nodeType && !Ot.test(h + st.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = 0 > h.indexOf(":") && "on" + h, n = n[st.expando] ? n : new st.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : st.makeArray(r, [n]), p = st.event.special[h] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
                if (!o && !p.noBubble && !st.isWindow(i)) {
                    for (l = p.delegateType || h, Ot.test(l + h) || (s = s.parentNode); s; s = s.parentNode) {
                        d.push(s), u = s
                    }
                    u === (i.ownerDocument || V) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (a = 0; (s = d[a++]) && !n.isPropagationStopped();) {
                    n.type = a > 1 ? l : p.bindType || h, f = (st._data(s, "events") || {})[n.type] && st._data(s, "handle"), f && f.apply(s, r), f = c && s[c], f && st.acceptData(s) && f.apply && f.apply(s, r) === !1 && n.preventDefault()
                }
                if (n.type = h, !(o || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === h && st.nodeName(i, "a") || !st.acceptData(i) || !c || !i[h] || st.isWindow(i))) {
                    u = i[c], u && (i[c] = null), st.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {
                    }
                    st.event.triggered = t, u && (i[c] = u)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = st.event.fix(e);
            var n, r, i, o, a, s = [], u = nt.call(arguments), l = (st._data(this, "events") || {})[e.type] || [],
                c = st.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = st.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();) {
                    for (e.currentTarget = o.elem, r = 0; (a = o.handlers[r++]) && !e.isImmediatePropagationStopped();) {
                        (!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, i = ((st.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()))
                    }
                }
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type)) {
                for (; l != this; l = l.parentNode || this) {
                    if (l.disabled !== !0 || "click" !== e.type) {
                        for (i = [], r = 0; u > r; r++) {
                            a = n[r], o = a.selector + " ", i[o] === t && (i[o] = a.needsContext ? st(o, this).index(l) >= 0 : st.find(o, this, null, [l]).length), i[o] && i.push(a)
                        }
                        i.length && s.push({elem: l, handlers: i})
                    }
                }
            }
            return n.length > u && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[st.expando]) {
                return e
            }
            var t, n, r = e, i = st.event.fixHooks[e.type] || {}, o = i.props ? this.props.concat(i.props) : this.props;
            for (e = new st.Event(r), t = o.length; t--;) {
                n = o[t], e[n] = r[n]
            }
            return e.target || (e.target = r.srcElement || V), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || V, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, click: {
                trigger: function () {
                    return st.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
                }
            }, focus: {
                trigger: function () {
                    if (this !== V.activeElement && this.focus) {
                        try {
                            return this.focus(), !1
                        } catch (e) {
                        }
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === V.activeElement && this.blur ? (this.blur(), !1) : t
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = st.extend(new st.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? st.event.trigger(i, null, t) : st.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, st.removeEvent = V.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, n, r) {
        var i = "on" + n;
        e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r))
    }, st.Event = function (e, n) {
        return this instanceof st.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, n && st.extend(this, n), this.timeStamp = e && e.timeStamp || st.now(), this[st.expando] = !0, t) : new st.Event(e, n)
    }, st.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, st.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        st.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !st.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), st.support.submitBubbles || (st.event.special.submit = {
        setup: function () {
            return st.nodeName(this, "form") ? !1 : (st.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = st.nodeName(n, "input") || st.nodeName(n, "button") ? n.form : t;
                r && !st._data(r, "submitBubbles") && (st.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), st._data(r, "submitBubbles", !0))
            }), t)
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && st.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return st.nodeName(this, "form") ? !1 : (st.event.remove(this, "._submit"), t)
        }
    }), st.support.changeBubbles || (st.event.special.change = {
        setup: function () {
            return qt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (st.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), st.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), st.event.simulate("change", this, e, !0)
            })), !1) : (st.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                qt.test(t.nodeName) && !st._data(t, "changeBubbles") && (st.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || st.event.simulate("change", this.parentNode, e, !0)
                }), st._data(t, "changeBubbles", !0))
            }), t)
        }, handle: function (e) {
            var n = e.target;
            return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
        }, teardown: function () {
            return st.event.remove(this, "._change"), !qt.test(this.nodeName)
        }
    }), st.support.focusinBubbles || st.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            st.event.simulate(t, e.target, st.event.fix(e), !0)
        };
        st.event.special[t] = {
            setup: function () {
                0 === n++ && V.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && V.removeEventListener(e, r, !0)
            }
        }
    }), st.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (s in e) {
                    this.on(s, n, r, e[s], o)
                }
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
                i = l
            } else {
                if (!i) {
                    return this
                }
            }
            return 1 === o && (a = i, i = function (e) {
                return st().off(e), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = st.guid++)), this.each(function () {
                st.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) {
                return i = e.handleObj, st(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
            }
            if ("object" == typeof e) {
                for (o in e) {
                    this.off(o, n, e[o])
                }
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                st.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                st.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, n) {
            var r = this[0];
            return r ? st.event.trigger(e, n, r, !0) : t
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        st.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, _t.test(t) && (st.event.fixHooks[t] = st.event.keyHooks), Ft.test(t) && (st.event.fixHooks[t] = st.event.mouseHooks)
    }), function (e, t) {
        function n(e) {
            return ht.test(e + "")
        }

        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function i(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) {
                return n
            }
            if (1 !== (s = t.nodeType) && 9 !== s) {
                return []
            }
            if (!M && !r) {
                if (i = gt.exec(e)) {
                    if (a = i[1]) {
                        if (9 === s) {
                            if (o = t.getElementById(a), !o || !o.parentNode) {
                                return n
                            }
                            if (o.id === a) {
                                return n.push(o), n
                            }
                        } else {
                            if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a) {
                                return n.push(o), n
                            }
                        }
                    } else {
                        if (i[2]) {
                            return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n
                        }
                        if ((a = i[3]) && W.getByClassName && t.getElementsByClassName) {
                            return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                        }
                    }
                }
                if (W.qsa && !q.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) {
                            l[u] = d + p(l[u])
                        }
                        h = dt.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g) {
                        try {
                            return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
                        } catch (m) {
                        } finally {
                            c || t.removeAttribute("id")
                        }
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }

        function s(e, t) {
            for (var n = e && t && e.nextSibling; n; n = n.nextSibling) {
                if (n === t) {
                    return -1
                }
            }
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) {
                        n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                    }
                })
            })
        }

        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c) {
                return t ? 0 : c.slice(0)
            }
            for (s = e, u = [], l = C.preFilter; s;) {
                (!n || (r = ut.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in C.filter) {
                    !(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                        value: n,
                        type: o,
                        matches: r
                    }), s = s.slice(n.length))
                }
                if (!n) {
                    break
                }
            }
            return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) {
                r += e[t].value
            }
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === t.dir, o = I++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];) {
                    if (1 === t.nodeType || i) {
                        return e(t, n, o)
                    }
                }
            } : function (t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];) {
                        if ((1 === t.nodeType || i) && e(t, n, a)) {
                            return !0
                        }
                    }
                } else {
                    for (; t = t[r];) {
                        if (1 === t.nodeType || i) {
                            if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                                if ((s = u[1]) === !0 || s === N) {
                                    return s === !0
                                }
                            } else {
                                if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0) {
                                    return !0
                                }
                            }
                        }
                    }
                }
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;) {
                    if (!e[i](t, n, r)) {
                        return !1
                    }
                }
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) {
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s))
            }
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)), o && !o[P] && (o = m(o, a)), i(function (i, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, m = i || b(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !i && t ? m : g(m, p, e, s, u), v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r) {
                    for (l = g(v, d), r(l, [], s, u), c = l.length; c--;) {
                        (f = l[c]) && (v[d[c]] = !(y[d[c]] = f))
                    }
                }
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;) {
                                (f = v[c]) && l.push(y[c] = f)
                            }
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;) {
                            (f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                        }
                    }
                } else {
                    v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : Q.apply(a, v)
                }
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, a, !0), l = d(function (e) {
                return Z.call(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++) {
                if (n = C.relative[e[s].type]) {
                    c = [d(h(c), n)]
                } else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                        for (r = ++s; i > r && !C.relative[e[r].type]; r++) {
                        }
                        return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                    }
                    c.push(n)
                }
            }
            return h(c)
        }

        function v(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function (i, s, u, l, c) {
                var f, p, d, h = [], m = 0, y = "0", v = i && [], b = null != c, x = j,
                    T = i || o && C.find.TAG("*", c && s.parentNode || s), w = $ += null == x ? 1 : Math.E;
                for (b && (j = s !== L && s, N = n); null != (f = T[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p]; p++) {
                            if (d(f, s, u)) {
                                l.push(f);
                                break
                            }
                        }
                        b && ($ = w, N = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p]; p++) {
                        d(v, h, s, u)
                    }
                    if (i) {
                        if (m > 0) {
                            for (; y--;) {
                                v[y] || h[y] || (h[y] = G.call(l))
                            }
                        }
                        h = g(h)
                    }
                    Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = w, j = x), v
            };
            return r ? i(s) : s
        }

        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++) {
                a(e, t[r], n)
            }
            return n
        }

        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !M && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, Tt), t)[0], !t) {
                        return n
                    }
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? -1 : o.length - 1; i >= 0 && (a = o[i], !C.relative[s = a.type]); i--) {
                    if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, Tt), dt.test(o[0].type) && t.parentNode || t))) {
                        if (o.splice(i, 1), e = r.length && p(o), !e) {
                            return Q.apply(n, K.call(r, 0)), n
                        }
                        break
                    }
                }
            }
            return S(e, l)(r, t, M, n, dt.test(e)), n
        }

        function T() {
        }

        var w, N, C, k, E, S, A, j, D, L, H, M, q, _, F, O, B, P = "sizzle" + -new Date, R = e.document, W = {}, $ = 0,
            I = 0, z = r(), X = r(), U = r(), V = typeof t, Y = 1 << 31, J = [], G = J.pop, Q = J.push, K = J.slice,
            Z = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++) {
                    if (this[t] === e) {
                        return t
                    }
                }
                return -1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"),
            rt = "([*^$|!~]?=)",
            it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]",
            ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)",
            at = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
            ut = RegExp("^" + et + "*," + et + "*"), lt = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
            ct = RegExp(ot), ft = RegExp("^" + nt + "$"), pt = {
                ID: RegExp("^#(" + tt + ")"),
                CLASS: RegExp("^\\.(" + tt + ")"),
                NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
                TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
                ATTR: RegExp("^" + it),
                PSEUDO: RegExp("^" + ot),
                CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
                needsContext: RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
            }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /\{\s*\[native code\]\s*\}/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g,
            bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
            Tt = function (e, t) {
                var n = "0x" + t - 65536;
                return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
            };
        try {
            K.call(H.childNodes, 0)[0].nodeType
        } catch (wt) {
            K = function (e) {
                for (var t, n = []; t = this[e]; e++) {
                    n.push(t)
                }
                return n
            }
        }
        E = a.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = a.setDocument = function (e) {
            var r = e ? e.ownerDocument || e : R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, M = E(r), W.tagNameNoComments = o(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), W.attributes = o(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function (e) {
                e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P), H.removeChild(e), t
            }), C.attrHandle = o(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, W.getIdNotName ? (C.find.ID = function (e, t) {
                if (typeof t.getElementById !== V && !M) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xt, Tt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function (e, n) {
                if (typeof n.getElementById !== V && !M) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xt, Tt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ? function (e, n) {
                return typeof n.getElementsByTagName !== V ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i]; i++) {
                        1 === n.nodeType && r.push(n)
                    }
                    return r
                }
                return o
            }, C.find.NAME = W.getByName && function (e, n) {
                return typeof n.getElementsByName !== V ? n.getElementsByName(name) : t
            }, C.find.CLASS = W.getByClassName && function (e, n) {
                return typeof n.getElementsByClassName === V || M ? t : n.getElementsByClassName(e)
            }, _ = [], q = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || q.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || q.push(":checked")
            }), o(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && q.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
                W.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), _.push("!=", ot)
            }), q = RegExp(q.join("|")), _ = RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) {
                    for (; t = t.parentNode;) {
                        if (t === e) {
                            return !0
                        }
                    }
                }
                return !1
            }, B = H.compareDocumentPosition ? function (e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (e === t) {
                    return A = !0, 0
                }
                if (e.sourceIndex && t.sourceIndex) {
                    return (~t.sourceIndex || Y) - (O(R, e) && ~e.sourceIndex || Y)
                }
                if (!o || !a) {
                    return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0
                }
                if (o === a) {
                    return s(e, t)
                }
                for (n = e; n = n.parentNode;) {
                    u.unshift(n)
                }
                for (n = t; n = n.parentNode;) {
                    l.unshift(n)
                }
                for (; u[i] === l[i];) {
                    i++
                }
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        }, a.matches = function (e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || M || _ && _.test(t) || q.test(t))) {
                try {
                    var n = F.call(e, t);
                    if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
                        return n
                    }
                } catch (r) {
                }
            }
            return a(t, L, null, [e]).length > 0
        }, a.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && D(e), O(e, t)
        }, a.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e), M || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : M || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++) {
                    t === e[r - 1] && (i = n.push(r))
                }
                for (; i--;) {
                    e.splice(n[i], 1)
                }
            }
            return e
        }, k = a.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) {
                        return e.textContent
                    }
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += k(e)
                    }
                } else {
                    if (3 === i || 4 === i) {
                        return e.nodeValue
                    }
                }
            } else {
                for (; t = e[r]; r++) {
                    n += k(t)
                }
            }
            return n
        }, C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, Tt), e[3] = (e[4] || e[5] || "").replace(xt, Tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, Tt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function (e) {
                        return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.substr(i.length - n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode,
                            y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];) {
                                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) {
                                            return !1
                                        }
                                    }
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) {
                                    if (1 === f.nodeType && ++p && f === t) {
                                        c[e] = [$, d, p];
                                        break
                                    }
                                }
                            } else {
                                if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $) {
                                    p = l[1]
                                } else {
                                    for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t));) {
                                    }
                                }
                            }
                            return p -= i, p === r || 0 === p % r && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;) {
                            i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = S(e.replace(at, "$1"));
                    return r[P] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                            (o = a[s]) && (e[s] = !(t[s] = o))
                        }
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return a(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, Tt).toLowerCase(), function (t) {
                        var n;
                        do {
                            if (n = M ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
                                return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
                            }
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
                            return !1
                        }
                    }
                    return !0
                }, parent: function (e) {
                    return !C.pseudos.empty(e)
                }, header: function (e) {
                    return yt.test(e.nodeName)
                }, input: function (e) {
                    return mt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2) {
                        e.push(n)
                    }
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;) {
                        e.push(r)
                    }
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; t > ++r;) {
                        e.push(r)
                    }
                    return e
                })
            }
        };
        for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) {
            C.pseudos[w] = u(w)
        }
        for (w in {submit: !0, reset: !0}) {
            C.pseudos[w] = l(w)
        }
        S = a.compile = function (e, t) {
            var n, r = [], i = [], o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;) {
                    o = y(t[n]), o[P] ? r.push(o) : i.push(o)
                }
                o = U(e, v(i, r))
            }
            return o
        }, C.pseudos.nth = C.pseudos.eq, C.filters = T.prototype = C.pseudos, C.setFilters = new T, D(), a.attr = st.attr, st.find = a, st.expr = a.selectors, st.expr[":"] = st.expr.pseudos, st.unique = a.uniqueSort, st.text = a.getText, st.isXMLDoc = a.isXML, st.contains = a.contains
    }(e);
    var Pt = /Until$/, Rt = /^(?:parents|prev(?:Until|All))/, Wt = /^.[^:#\[\.,]*$/, $t = st.expr.match.needsContext,
        It = {children: !0, contents: !0, next: !0, prev: !0};
    st.fn.extend({
        find: function (e) {
            var t, n, r;
            if ("string" != typeof e) {
                return r = this, this.pushStack(st(e).filter(function () {
                    for (t = 0; r.length > t; t++) {
                        if (st.contains(r[t], this)) {
                            return !0
                        }
                    }
                }))
            }
            for (n = [], t = 0; this.length > t; t++) {
                st.find(e, this[t], n)
            }
            return n = this.pushStack(st.unique(n)), n.selector = (this.selector ? this.selector + " " : "") + e, n
        }, has: function (e) {
            var t, n = st(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) {
                    if (st.contains(this, n[t])) {
                        return !0
                    }
                }
            })
        }, not: function (e) {
            return this.pushStack(f(this, e, !1))
        }, filter: function (e) {
            return this.pushStack(f(this, e, !0))
        }, is: function (e) {
            return !!e && ("string" == typeof e ? $t.test(e) ? st(e, this.context).index(this[0]) >= 0 : st.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = $t.test(e) || "string" != typeof e ? st(e, t || this.context) : 0; i > r; r++) {
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : st.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return this.pushStack(o.length > 1 ? st.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? st.inArray(this[0], st(e)) : st.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? st(e, t) : st.makeArray(e && e.nodeType ? [e] : e),
                r = st.merge(this.get(), n);
            return this.pushStack(st.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), st.fn.andSelf = st.fn.addBack, st.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return st.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return st.dir(e, "parentNode", n)
        }, next: function (e) {
            return c(e, "nextSibling")
        }, prev: function (e) {
            return c(e, "previousSibling")
        }, nextAll: function (e) {
            return st.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return st.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return st.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return st.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return st.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return st.sibling(e.firstChild)
        }, contents: function (e) {
            return st.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : st.merge([], e.childNodes)
        }
    }, function (e, t) {
        st.fn[e] = function (n, r) {
            var i = st.map(this, t, n);
            return Pt.test(e) || (r = n), r && "string" == typeof r && (i = st.filter(r, i)), i = this.length > 1 && !It[e] ? st.unique(i) : i, this.length > 1 && Rt.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), st.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? st.find.matchesSelector(t[0], e) ? [t[0]] : [] : st.find.matches(e, t)
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !st(o).is(r));) {
                1 === o.nodeType && i.push(o), o = o[n]
            }
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling) {
                1 === e.nodeType && e !== t && n.push(e)
            }
            return n
        }
    });
    var zt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Xt = / jQuery\d+="(?:null|\d+)"/g, Ut = RegExp("<(?:" + zt + ")[\\s/>]", "i"), Vt = /^\s+/,
        Yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Jt = /<([\w:]+)/,
        Gt = /<tbody/i, Qt = /<|&#?\w+;/, Kt = /<(?:script|style|link)/i, Zt = /^(?:checkbox|radio)$/i,
        en = /checked\s*(?:[^=]|=\s*.checked.)/i, tn = /^$|\/(?:java|ecma)script/i, nn = /^true\/(.*)/,
        rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, on = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: st.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, an = p(V), sn = an.appendChild(V.createElement("div"));
    on.optgroup = on.option, on.tbody = on.tfoot = on.colgroup = on.caption = on.thead, on.th = on.td, st.fn.extend({
        text: function (e) {
            return st.access(this, function (e) {
                return e === t ? st.text(this) : this.empty().append((this[0] && this[0].ownerDocument || V).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (st.isFunction(e)) {
                return this.each(function (t) {
                    st(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = st(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return st.isFunction(e) ? this.each(function (t) {
                st(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = st(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = st.isFunction(e);
            return this.each(function (n) {
                st(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++) {
                (!e || st.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || st.cleanData(b(n)), n.parentNode && (t && st.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)))
            }
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && st.cleanData(b(e, !1)); e.firstChild;) {
                    e.removeChild(e.firstChild)
                }
                e.options && st.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return st.clone(this, e, t)
            })
        }, html: function (e) {
            return st.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t) {
                    return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t
                }
                if (!("string" != typeof e || Kt.test(e) || !st.support.htmlSerialize && Ut.test(e) || !st.support.leadingWhitespace && Vt.test(e) || on[(Jt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Yt, "<$1></$2>");
                    try {
                        for (; i > r; r++) {
                            n = this[r] || {}, 1 === n.nodeType && (st.cleanData(b(n, !1)), n.innerHTML = e)
                        }
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            var t = st.isFunction(e);
            return t || "string" == typeof e || (e = st(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling, n = this.parentNode;
                (n && 1 === this.nodeType || 11 === this.nodeType) && (st(this).remove(), t ? t.parentNode.insertBefore(e, t) : n.appendChild(e))
            })
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = et.apply([], e);
            var i, o, a, s, u, l, c = 0, f = this.length, p = this, m = f - 1, y = e[0], v = st.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || st.support.checkClone) && en.test(y)) {
                return this.each(function (i) {
                    var o = p.eq(i);
                    v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
                })
            }
            if (f && (i = st.buildFragment(e, this[0].ownerDocument, !1, this), o = i.firstChild, 1 === i.childNodes.length && (i = o), o)) {
                for (n = n && st.nodeName(o, "tr"), a = st.map(b(i, "script"), h), s = a.length; f > c; c++) {
                    u = i, c !== m && (u = st.clone(u, !0, !0), s && st.merge(a, b(u, "script"))), r.call(n && st.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], u, c)
                }
                if (s) {
                    for (l = a[a.length - 1].ownerDocument, st.map(a, g), c = 0; s > c; c++) {
                        u = a[c], tn.test(u.type || "") && !st._data(u, "globalEval") && st.contains(l, u) && (u.src ? st.ajax({
                            url: u.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : st.globalEval((u.text || u.textContent || u.innerHTML || "").replace(rn, "")))
                    }
                }
                i = o = null
            }
            return this
        }
    }), st.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        st.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = st(e), a = o.length - 1; a >= r; r++) {
                n = r === a ? this : this.clone(!0), st(o[r])[t](n), tt.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    }), st.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = st.contains(e.ownerDocument, e);
            if (st.support.html5Clone || st.isXMLDoc(e) || !Ut.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (sn.innerHTML = e.outerHTML, sn.removeChild(s = sn.firstChild)), !(st.support.noCloneEvent && st.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || st.isXMLDoc(e))) {
                for (r = b(s), i = b(e), a = 0; null != (o = i[a]); ++a) {
                    r[a] && v(o, r[a])
                }
            }
            if (t) {
                if (n) {
                    for (i = i || b(e), r = r || b(s), a = 0; null != (o = i[a]); a++) {
                        y(o, r[a])
                    }
                } else {
                    y(e, s)
                }
            }
            return r = b(s, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = i = o = null, s
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++) {
                if (o = e[g], o || 0 === o) {
                    if ("object" === st.type(o)) {
                        st.merge(h, o.nodeType ? [o] : o)
                    } else {
                        if (Qt.test(o)) {
                            for (s = s || d.appendChild(t.createElement("div")), a = (Jt.exec(o) || ["", ""])[1].toLowerCase(), u = on[a] || on._default, s.innerHTML = u[1] + o.replace(Yt, "<$1></$2>") + u[2], c = u[0]; c--;) {
                                s = s.lastChild
                            }
                            if (!st.support.leadingWhitespace && Vt.test(o) && h.push(t.createTextNode(Vt.exec(o)[0])), !st.support.tbody) {
                                for (o = "table" !== a || Gt.test(o) ? "<table>" !== u[1] || Gt.test(o) ? 0 : s : s.firstChild, c = o && o.childNodes.length; c--;) {
                                    st.nodeName(l = o.childNodes[c], "tbody") && !l.childNodes.length && o.removeChild(l)
                                }
                            }
                            for (st.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) {
                                s.removeChild(s.firstChild)
                            }
                            s = d.lastChild
                        } else {
                            h.push(t.createTextNode(o))
                        }
                    }
                }
            }
            for (s && d.removeChild(s), st.support.appendChecked || st.grep(b(h, "input"), x), g = 0; o = h[g++];) {
                if ((!r || -1 === st.inArray(o, r)) && (i = st.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), i && m(s), n)) {
                    for (c = 0; o = s[c++];) {
                        tn.test(o.type || "") && n.push(o)
                    }
                }
            }
            return s = null, d
        }, cleanData: function (e, n) {
            for (var r, i, o, a, s = 0, u = st.expando, l = st.cache, c = st.support.deleteExpando, f = st.event.special; null != (o = e[s]); s++) {
                if ((n || st.acceptData(o)) && (i = o[u], r = i && l[i])) {
                    if (r.events) {
                        for (a in r.events) {
                            f[a] ? st.event.remove(o, a) : st.removeEvent(o, a, r.handle)
                        }
                    }
                    l[i] && (delete l[i], c ? delete o[u] : o.removeAttribute !== t ? o.removeAttribute(u) : o[u] = null, K.push(i))
                }
            }
        }
    });
    var un, ln, cn, fn = /alpha\([^)]*\)/i, pn = /opacity\s*=\s*([^)]*)/, dn = /^(top|right|bottom|left)$/,
        hn = /^(none|table(?!-c[ea]).+)/, gn = /^margin/, mn = RegExp("^(" + ut + ")(.*)$", "i"),
        yn = RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"), vn = RegExp("^([+-])=(" + ut + ")", "i"), bn = {BODY: "block"},
        xn = {position: "absolute", visibility: "hidden", display: "block"}, Tn = {letterSpacing: 0, fontWeight: 400},
        wn = ["Top", "Right", "Bottom", "Left"], Nn = ["Webkit", "O", "Moz", "ms"];
    st.fn.extend({
        css: function (e, n) {
            return st.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (st.isArray(n)) {
                    for (i = ln(e), o = n.length; o > s; s++) {
                        a[n[s]] = st.css(e, n[s], !1, i)
                    }
                    return a
                }
                return r !== t ? st.style(e, n, r) : st.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : w(this)) ? st(this).show() : st(this).hide()
            })
        }
    }), st.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = un(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": st.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = st.camelCase(n), l = e.style;
                if (n = st.cssProps[u] || (st.cssProps[u] = T(l, u)), s = st.cssHooks[n] || st.cssHooks[u], r === t) {
                    return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]
                }
                if (a = typeof r, "string" === a && (o = vn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(st.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || st.cssNumber[u] || (r += "px"), st.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
                    try {
                        l[n] = r
                    } catch (c) {
                    }
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = st.camelCase(n);
            return n = st.cssProps[u] || (st.cssProps[u] = T(e.style, u)), s = st.cssHooks[n] || st.cssHooks[u], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = un(e, n, i)), "normal" === o && n in Tn && (o = Tn[n]), r ? (a = parseFloat(o), r === !0 || st.isNumeric(a) ? a || 0 : o) : o
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t) {
                a[o] = e.style[o], e.style[o] = t[o]
            }
            i = n.apply(e, r || []);
            for (o in t) {
                e.style[o] = a[o]
            }
            return i
        }
    }), e.getComputedStyle ? (ln = function (t) {
        return e.getComputedStyle(t, null)
    }, un = function (e, n, r) {
        var i, o, a, s = r || ln(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || st.contains(e.ownerDocument, e) || (u = st.style(e, n)), yn.test(u) && gn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : V.documentElement.currentStyle && (ln = function (e) {
        return e.currentStyle
    }, un = function (e, n, r) {
        var i, o, a, s = r || ln(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), yn.test(u) && !dn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), st.each(["height", "width"], function (e, n) {
        st.cssHooks[n] = {
            get: function (e, r, i) {
                return r ? 0 === e.offsetWidth && hn.test(st.css(e, "display")) ? st.swap(e, xn, function () {
                    return E(e, n, i)
                }) : E(e, n, i) : t
            }, set: function (e, t, r) {
                var i = r && ln(e);
                return C(e, t, r ? k(e, n, r, st.support.boxSizing && "border-box" === st.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), st.support.opacity || (st.cssHooks.opacity = {
        get: function (e, t) {
            return pn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = st.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === st.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = fn.test(o) ? o.replace(fn, i) : o + " " + i)
        }
    }), st(function () {
        st.support.reliableMarginRight || (st.cssHooks.marginRight = {
            get: function (e, n) {
                return n ? st.swap(e, {display: "inline-block"}, un, [e, "marginRight"]) : t
            }
        }), !st.support.pixelPosition && st.fn.position && st.each(["top", "left"], function (e, n) {
            st.cssHooks[n] = {
                get: function (e, r) {
                    return r ? (r = un(e, n), yn.test(r) ? st(e).position()[n] + "px" : r) : t
                }
            }
        })
    }), st.expr && st.expr.filters && (st.expr.filters.hidden = function (e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !st.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || st.css(e, "display"))
    }, st.expr.filters.visible = function (e) {
        return !st.expr.filters.hidden(e)
    }), st.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        st.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) {
                    i[e + wn[r] + t] = o[r] || o[r - 2] || o[0]
                }
                return i
            }
        }, gn.test(e) || (st.cssHooks[e + t].set = C)
    });
    var Cn = /%20/g, kn = /\[\]$/, En = /\r?\n/g, Sn = /^(?:submit|button|image|reset)$/i,
        An = /^(?:input|select|textarea|keygen)/i;
    st.fn.extend({
        serialize: function () {
            return st.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = st.prop(this, "elements");
                return e ? st.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !st(this).is(":disabled") && An.test(this.nodeName) && !Sn.test(e) && (this.checked || !Zt.test(e))
            }).map(function (e, t) {
                var n = st(this).val();
                return null == n ? null : st.isArray(n) ? st.map(n, function (e) {
                    return {name: t.name, value: e.replace(En, "\r\n")}
                }) : {name: t.name, value: n.replace(En, "\r\n")}
            }).get()
        }
    }), st.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = st.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(e) || e.jquery && !st.isPlainObject(e)) {
            st.each(e, function () {
                o(this.name, this.value)
            })
        } else {
            for (r in e) {
                j(r, e[r], n, o)
            }
        }
        return i.join("&").replace(Cn, "+")
    };
    var jn, Dn, Ln = st.now(), Hn = /\?/, Mn = /#.*$/, qn = /([?&])_=[^&]*/, _n = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, On = /^(?:GET|HEAD)$/, Bn = /^\/\//,
        Pn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Rn = st.fn.load, Wn = {}, $n = {}, In = "*/".concat("*");
    try {
        Dn = Y.href
    } catch (zn) {
        Dn = V.createElement("a"), Dn.href = "", Dn = Dn.href
    }
    jn = Pn.exec(Dn.toLowerCase()) || [], st.fn.load = function (e, n, r) {
        if ("string" != typeof e && Rn) {
            return Rn.apply(this, arguments)
        }
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), st.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), s.length > 0 && st.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n
        }).done(function (e) {
            a = arguments, s.html(i ? st("<div>").append(st.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, a || [e.responseText, t, e])
        }), this
    }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        st.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), st.each(["get", "post"], function (e, n) {
        st[n] = function (e, r, i, o) {
            return st.isFunction(r) && (o = o || i, i = r, r = t), st.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), st.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dn,
            type: "GET",
            isLocal: Fn.test(jn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": In,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": st.parseJSON, "text xml": st.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, st.ajaxSettings), t) : H(st.ajaxSettings, e)
        },
        ajaxPrefilter: D(Wn),
        ajaxTransport: D($n),
        ajax: function (e, n) {
            function r(e, n, r, s) {
                var l, f, v, b, T, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), i = t, a = s || "", w.readyState = e > 0 ? 4 : 0, r && (b = M(p, w, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = w.getResponseHeader("Last-Modified"), T && (st.lastModified[o] = T), T = w.getResponseHeader("etag"), T && (st.etag[o] = T)), 304 === e ? (l = !0, N = "notmodified") : (l = q(p, b), N = l.state, f = l.data, v = l.error, l = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (n || N) + "", l ? g.resolveWith(d, [f, N, w]) : g.rejectWith(d, [w, N, v]), w.statusCode(y), y = t, c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [w, p, l ? f : v]), m.fireWith(d, [w, N]), c && (h.trigger("ajaxComplete", [w, p]), --st.active || st.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = st.ajaxSetup({}, n), d = p.context || p,
                h = p.context && (d.nodeType || d.jquery) ? st(d) : st.event, g = st.Deferred(),
                m = st.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, T = "canceled", w = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!s) {
                                for (s = {}; t = _n.exec(a);) {
                                    s[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === x ? a : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || (e = b[n] = b[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return x || (p.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) {
                            if (2 > x) {
                                for (t in e) {
                                    y[t] = [y[t], e[t]]
                                }
                            } else {
                                w.always(e[w.status])
                            }
                        }
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || Dn) + "").replace(Mn, "").replace(Bn, jn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = st.trim(p.dataType || "*").toLowerCase().match(lt) || [""], null == p.crossDomain && (l = Pn.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === jn[1] && l[2] === jn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (jn[3] || ("http:" === jn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = st.param(p.data, p.traditional)), L(Wn, p, n, w), 2 === x) {
                return w
            }
            c = p.global, c && 0 === st.active++ && st.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !On.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (Hn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = qn.test(o) ? o.replace(qn, "$1_=" + Ln++) : o + (Hn.test(o) ? "&" : "?") + "_=" + Ln++)), p.ifModified && (st.lastModified[o] && w.setRequestHeader("If-Modified-Since", st.lastModified[o]), st.etag[o] && w.setRequestHeader("If-None-Match", st.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + In + "; q=0.01" : "") : p.accepts["*"]);
            for (f in p.headers) {
                w.setRequestHeader(f, p.headers[f])
            }
            if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) {
                return w.abort()
            }
            T = "abort";
            for (f in {success: 1, error: 1, complete: 1}) {
                w[f](p[f])
            }
            if (i = L($n, p, n, w)) {
                w.readyState = 1, c && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    w.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, i.send(v, r)
                } catch (N) {
                    if (!(2 > x)) {
                        throw N
                    }
                    r(-1, N)
                }
            } else {
                r(-1, "No Transport")
            }
            return w
        },
        getScript: function (e, n) {
            return st.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return st.get(e, t, n, "json")
        }
    }), st.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return st.globalEval(e), e
            }
        }
    }), st.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), st.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = V.head || st("head")[0] || V.documentElement;
            return {
                send: function (t, i) {
                    n = V.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xn = [], Un = /(=)\?(?=&|$)|\?\?/;
    st.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Xn.pop() || st.expando + "_" + Ln++;
            return this[e] = !0, e
        }
    }), st.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s,
            u = n.jsonp !== !1 && (Un.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Un.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = st.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Un, "$1" + o) : n.jsonp !== !1 && (n.url += (Hn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || st.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Xn.push(o)), s && st.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Vn, Yn, Jn = 0, Gn = e.ActiveXObject && function () {
        var e;
        for (e in Vn) {
            Vn[e](t, !0)
        }
    };
    st.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && _() || F()
    } : _, Yn = st.ajaxSettings.xhr(), st.support.cors = !!Yn && "withCredentials" in Yn, Yn = st.support.ajax = !!Yn, Yn && st.ajaxTransport(function (n) {
        if (!n.crossDomain || st.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) {
                        for (s in n.xhrFields) {
                            u[s] = n.xhrFields[s]
                        }
                    }
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i) {
                            u.setRequestHeader(s, i[s])
                        }
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, f, p;
                        try {
                            if (r && (i || 4 === u.readyState)) {
                                if (r = t, a && (u.onreadystatechange = st.noop, Gn && delete Vn[a]), i) {
                                    4 !== u.readyState && u.abort()
                                } else {
                                    f = {}, s = u.status, p = u.responseXML, c = u.getAllResponseHeaders(), p && p.documentElement && (f.xml = p), "string" == typeof u.responseText && (f.text = u.responseText);
                                    try {
                                        l = u.statusText
                                    } catch (d) {
                                        l = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            }
                        } catch (h) {
                            i || o(-1, h)
                        }
                        f && o(s, l, f, c)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Jn, Gn && (Vn || (Vn = {}, st(e).unload(Gn)), Vn[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Qn, Kn, Zn = /^(?:toggle|show|hide)$/, er = RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
        tr = /queueHooks$/, nr = [W], rr = {
            "*": [function (e, t) {
                var n, r, i = this.createTween(e, t), o = er.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
                if (o) {
                    if (n = +o[2], r = o[3] || (st.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                        s = st.css(i.elem, e, !0) || n || 1;
                        do {
                            u = u || ".5", s /= u, st.style(i.elem, e, s + r)
                        } while (u !== (u = i.cur() / a) && 1 !== u && --l)
                    }
                    i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
                }
                return i
            }]
        };
    st.Animation = st.extend(P, {
        tweener: function (e, t) {
            st.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) {
                n = e[r], rr[n] = rr[n] || [], rr[n].unshift(t)
            }
        }, prefilter: function (e, t) {
            t ? nr.unshift(e) : nr.push(e)
        }
    }), st.Tween = $, $.prototype = {
        constructor: $, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (st.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? st.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = st.css(e.elem, e.prop, "auto"), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                st.fx.step[e.prop] ? st.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[st.cssProps[e.prop]] || st.cssHooks[e.prop]) ? st.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, st.each(["toggle", "show", "hide"], function (e, t) {
        var n = st.fn[t];
        st.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), st.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(w).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = st.isEmptyObject(e), o = st.speed(t, n, r), a = function () {
                var t = P(this, st.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }, (i || st._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = st.timers, a = st._data(this);
                if (n) {
                    a[n] && a[n].stop && i(a[n])
                } else {
                    for (n in a) {
                        a[n] && a[n].stop && tr.test(n) && i(a[n])
                    }
                }
                for (n = o.length; n--;) {
                    o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
                }
                (t || !r) && st.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = st._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = st.timers,
                    a = r ? r.length : 0;
                for (n.finish = !0, st.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) {
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                }
                for (t = 0; a > t; t++) {
                    r[t] && r[t].finish && r[t].finish.call(this)
                }
                delete n.finish
            })
        }
    }), st.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        st.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), st.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? st.extend({}, e) : {
            complete: n || !n && t || st.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !st.isFunction(t) && t
        };
        return r.duration = st.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in st.fx.speeds ? st.fx.speeds[r.duration] : st.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            st.isFunction(r.old) && r.old.call(this), r.queue && st.dequeue(this, r.queue)
        }, r
    }, st.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2
        }
    }, st.timers = [], st.fx = $.prototype.init, st.fx.tick = function () {
        var e, n = st.timers, r = 0;
        for (Qn = st.now(); n.length > r; r++) {
            e = n[r], e() || n[r] !== e || n.splice(r--, 1)
        }
        n.length || st.fx.stop(), Qn = t
    }, st.fx.timer = function (e) {
        e() && st.timers.push(e) && st.fx.start()
    }, st.fx.interval = 13, st.fx.start = function () {
        Kn || (Kn = setInterval(st.fx.tick, st.fx.interval))
    }, st.fx.stop = function () {
        clearInterval(Kn), Kn = null
    }, st.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, st.fx.step = {}, st.expr && st.expr.filters && (st.expr.filters.animated = function (e) {
        return st.grep(st.timers, function (t) {
            return e === t.elem
        }).length
    }), st.fn.offset = function (e) {
        if (arguments.length) {
            return e === t ? this : this.each(function (t) {
                st.offset.setOffset(this, e, t)
            })
        }
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        if (a) {
            return n = a.documentElement, st.contains(n, o) ? (o.getBoundingClientRect !== t && (i = o.getBoundingClientRect()), r = z(a), {
                top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
            }) : i
        }
    }, st.offset = {
        setOffset: function (e, t, n) {
            var r = st.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = st(e), s = a.offset(), u = st.css(e, "top"), l = st.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && st.inArray("auto", [u, l]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), st.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
        }
    }, st.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === st.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), st.nodeName(e[0], "html") || (n = e.offset()), n.top += st.css(e[0], "borderTopWidth", !0), n.left += st.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - st.css(r, "marginTop", !0),
                    left: t.left - n.left - st.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || V.documentElement; e && !st.nodeName(e, "html") && "static" === st.css(e, "position");) {
                    e = e.offsetParent
                }
                return e || V.documentElement
            })
        }
    }), st.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        st.fn[e] = function (i) {
            return st.access(this, function (e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? st(a).scrollLeft() : o, r ? o : st(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    }), st.each({Height: "height", Width: "width"}, function (e, n) {
        st.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            st.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i),
                    s = r || (i === !0 || o === !0 ? "margin" : "border");
                return st.access(this, function (n, r, i) {
                    var o;
                    return st.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? st.css(n, r, s) : st.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = st, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return st
    })
})(window);
(function (n, p, w) {
    var y = n([]), s = n.resize = n.extend(n.resize, {}), o, l = "setTimeout", m = "resize", u = m + "-special-event",
        x = "delay", r = "throttleWindow";
    s[x] = 250;
    s[r] = true;
    n.event.special[m] = {
        setup: function () {
            if (!s[r] && this[l]) {
                return false
            }
            var a = n(this);
            y = y.add(a);
            n.data(this, u, {w: a.width(), h: a.height()});
            if (y.length === 1) {
                q()
            }
        }, teardown: function () {
            if (!s[r] && this[l]) {
                return false
            }
            var a = n(this);
            y = y.not(a);
            a.removeData(u);
            if (!y.length) {
                clearTimeout(o)
            }
        }, add: function (b) {
            if (!s[r] && this[l]) {
                return false
            }
            var c;

            function a(d, h, g) {
                var f = n(this), e = n.data(this, u);
                e.w = h !== w ? h : f.width();
                e.h = g !== w ? g : f.height();
                c.apply(this, arguments)
            }

            if (n.isFunction(b)) {
                c = b;
                return a
            } else {
                c = b.handler;
                b.handler = a
            }
        }
    };

    function q() {
        o = p[l](function () {
            y.each(function () {
                var d = n(this), a = d.width(), b = d.height(), c = n.data(this, u);
                if (a !== c.w || b !== c.h) {
                    d.trigger(m, [c.w = a, c.h = b])
                }
            });
            q()
        }, s[x])
    }
})(jQuery, this);
/*
 * ! jQuery Cookie Plugin v1.3.1 https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl Released under the MIT license
 */
(function (b) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], b)
    } else {
        b(jQuery)
    }
}(function (k) {
    var h = /\+/g;

    function l(a) {
        return a
    }

    function g(a) {
        return decodeURIComponent(a.replace(h, " "))
    }

    function j(b) {
        if (b.indexOf('"') === 0) {
            b = b.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")
        }
        try {
            return m.json ? JSON.parse(b) : b
        } catch (a) {
        }
    }

    var m = k.cookie = function (c, d, B) {
        if (d !== undefined) {
            B = k.extend({}, m.defaults, B);
            if (typeof B.expires === "number") {
                var b = B.expires, C = B.expires = new Date();
                C.setDate(C.getDate() + b)
            }
            d = m.json ? JSON.stringify(d) : String(d);
            return (document.cookie = [m.raw ? c : encodeURIComponent(c), "=", m.raw ? d : encodeURIComponent(d), B.expires ? "; expires=" + B.expires.toUTCString() : "", B.path ? "; path=" + B.path : "", B.domain ? "; domain=" + B.domain : "", B.secure ? "; secure" : ""].join(""))
        }
        var z = m.raw ? l : g;
        var a = document.cookie.split("; ");
        var A = c ? undefined : {};
        for (var e = 0, w = a.length; e < w; e++) {
            var f = a[e].split("=");
            var y = z(f.shift());
            var x = z(f.join("="));
            if (c && c === y) {
                A = j(x);
                break
            }
            if (!c) {
                A[y] = j(x)
            }
        }
        return A
    };
    m.defaults = {};
    k.removeCookie = function (a, b) {
        if (k.cookie(a) !== undefined) {
            k.cookie(a, "", k.extend({}, b, {expires: -1}));
            return true
        }
        return false
    }
}));
(function (e) {
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(this).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length) {
                return
            }
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type) {
            if (void 0 !== t.offsetX) {
                i.clk_x = t.offsetX, i.clk_y = t.offsetY
            } else {
                if ("function" == typeof e.fn.offset) {
                    var o = a.offset();
                    i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
                } else {
                    i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop
                }
            }
        }
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i) {
            return this.attr.apply(this, arguments)
        }
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++) {
                i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])])
            }
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; a.length > i; i++) {
                n.append(a[i].name, a[i].value)
            }
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; o.length > i; i++) {
                    o[i] && n.append(o[i][0], o[i][1])
                }
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(100 * (a / n))), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var l = s.beforeSend;
            return s.beforeSend = function (e, t) {
                t.data = n, l && l.call(this, e, t)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t) {
                    return t
                }
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(D), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action");
                w.setAttribute("target", d), u || w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(k)
                }, m.timeout));
                var o = [];
                try {
                    if (m.extraData) {
                        for (var l in m.extraData) {
                            m.extraData.hasOwnProperty(l) && (e.isPlainObject(m.extraData[l]) && m.extraData[l].hasOwnProperty("name") && m.extraData[l].hasOwnProperty("value") ? o.push(e('<input type="hidden" name="' + m.extraData[l].name + '">').val(m.extraData[l].value).appendTo(w)[0]) : o.push(e('<input type="hidden" name="' + l + '">').val(m.extraData[l]).appendTo(w)[0]))
                        }
                    }
                    m.iframeTarget || (v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1)), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (c) {
                        var p = document.createElement("form").submit;
                        p.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(o).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = D), t === k && x) {
                        return x.abort("timeout"), S.reject(x, "timeout"), void 0
                    }
                    if (t == D && x) {
                        return x.abort("server abort"), S.reject(x, "error", "server abort"), void 0
                    }
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T) {
                                throw"timeout"
                            }
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) {
                                return a("requeing onLoad callback, DOM not available"), setTimeout(s, 250), void 0
                            }
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var l = (m.dataType || "").toLowerCase(), c = /(json|script|text)/.test(l);
                            if (c || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) {
                                    x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText
                                } else {
                                    if (c) {
                                        var d = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                        d ? x.responseText = d.textContent ? d.textContent : d.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                    }
                                }
                            } else {
                                "xml" == l && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText))
                            }
                            try {
                                L = _(x, l, m)
                            } catch (b) {
                                i = "parsererror", x.error = r = b || i
                            }
                        } catch (b) {
                            a("error caught: ", b), i = "error", x.error = r = b || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && 300 > x.status || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, L, "success", x), S.resolve(x.responseText, "success", x), p && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), p && e.event.trigger("ajaxError", [x, m, r])), p && e.event.trigger("ajaxComplete", [x, m]), p && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget || v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var l, c, m, p, d, v, g, x, b, y, T, j, w = f[0], S = e.Deferred();
            if (r) {
                for (c = 0; h.length > c; c++) {
                    l = e(h[c]), i ? l.prop("disabled", !1) : l.removeAttr("disabled")
                }
            }
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, d = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), y = v.attr2("name"), y ? d = y : v.attr2("name", d)) : (v = e('<iframe name="' + d + '" src="' + m.iframeSrc + '" />'), v.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {
                        }
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), p && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, p = m.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), p && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) {
                return m.global && e.active--, S.reject(), S
            }
            if (x.aborted) {
                return S.reject(), S
            }
            b = w.clk, b && (y = b.name, y && !b.disabled && (m.extraData = m.extraData || {}, m.extraData[y] = b.value, "image" == b.type && (m.extraData[y + ".x"] = w.clk_x, m.extraData[y + ".y"] = w.clk_y)));
            var k = 1, D = 2, A = e("meta[name=csrf-token]").attr("content"),
                E = e("meta[name=csrf-param]").attr("content");
            E && A && (m.extraData = m.extraData || {}, m.extraData[E] = A), m.forceSync ? o() : setTimeout(o, 10);
            var L, M, F, O = 50, X = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, C = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0,
                    o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length) {
            return a("ajaxSubmit: skipping submit process - no element selected"), this
        }
        var u, l, c, f = this;
        "function" == typeof t && (t = {success: t}), u = t.type || this.attr2("method"), l = t.url || this.attr2("action"), c = "string" == typeof l ? e.trim(l) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: u || "GET",
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) {
            return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this
        }
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) {
            return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this
        }
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var d, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, d = e.param(t.data, p)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) {
            return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this
        }
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) {
            return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this
        }
        var g = e.param(v, p);
        d && (g = g ? g + "&" + d : d), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var b = t.success || function () {
            };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(b, arguments)
            })
        } else {
            t.success && x.push(t.success)
        }
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++) {
                    x[i].apply(n, [e, r, a || f, f])
                }
            }, t.error) {
            var y = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                y.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e('input[type=file]:enabled[value!=""]', this), w = j.length > 0, S = "multipart/form-data",
            k = f.attr("enctype") == S || f.attr("encoding") == S, D = n.fileapi && n.formdata;
        a("fileAPI :" + D);
        var A, E = (w || k) && !D;
        t.iframe !== !1 && (t.iframe || E) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || k) && D ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var L = 0; h.length > L; L++) {
            h[L] = null
        }
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length) {
            return a
        }
        var i = this[0], o = t ? i.getElementsByTagName("*") : i.elements;
        if (!o) {
            return a
        }
        var s, u, l, c, f, m, p;
        for (s = 0, m = o.length; m > s; s++) {
            if (f = o[s], l = f.name, l && !f.disabled) {
                if (t && i.clk && "image" == f.type) {
                    i.clk == f && (a.push({name: l, value: e(f).val(), type: f.type}), a.push({
                        name: l + ".x",
                        value: i.clk_x
                    }, {name: l + ".y", value: i.clk_y}))
                } else {
                    if (c = e.fieldValue(f, !0), c && c.constructor == Array) {
                        for (r && r.push(f), u = 0, p = c.length; p > u; u++) {
                            a.push({name: l, value: c[u]})
                        }
                    } else {
                        if (n.fileapi && "file" == f.type) {
                            r && r.push(f);
                            var d = f.files;
                            if (d.length) {
                                for (u = 0; d.length > u; u++) {
                                    a.push({name: l, value: d[u], type: f.type})
                                }
                            } else {
                                a.push({name: l, value: "", type: f.type})
                            }
                        } else {
                            null !== c && c !== void 0 && (r && r.push(f), a.push({
                                name: l,
                                value: c,
                                type: f.type,
                                required: f.required
                            }))
                        }
                    }
                }
            }
        }
        if (!t && i.clk) {
            var h = e(i.clk), v = h[0];
            l = v.name, l && !v.disabled && "image" == v.type && (a.push({
                name: l,
                value: h.val()
            }), a.push({name: l + ".x", value: i.clk_x}, {name: l + ".y", value: i.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array) {
                    for (var i = 0, o = n.length; o > i; i++) {
                        r.push({name: a, value: n[i]})
                    }
                } else {
                    null !== n && n !== void 0 && r.push({name: this.name, value: n})
                }
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || void 0 === o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) {
            return null
        }
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o) {
                return null
            }
            for (var s = [], u = t.options, l = "select-one" == n, c = l ? o + 1 : u.length, f = l ? o : 0; c > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var p = m.value;
                    if (p || (p = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), l) {
                        return p
                    }
                    s.push(p)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) {
                this.checked = t
            } else {
                if ("option" == this.tagName.toLowerCase()) {
                    var a = e(this).parent("select");
                    t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
                }
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
})(jQuery);
/*
 * ! ZUI: zui for ranzhi - v1.7.0 - 2017-11-07 http://zui.sexy GitHub:
 * https://github.com/easysoft/zui.git Copyright (c) 2017 cnezsoft.com; Licensed
 * MIT
 */
/*
 * ! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013
 * Twitter, Inc. Licensed under http://www.apache.org/licenses/)
 */
!function (d, f, c) {
    if ("undefined" == typeof d) {
        throw new Error("ZUI requires jQuery")
    }
    d.zui || (d.zui = function (a) {
        d.isPlainObject(a) && d.extend(d.zui, a)
    });
    var b = {all: -1, left: 0, middle: 1, right: 2}, g = 0;
    d.zui({
        uuid: function () {
            return 1000 * (new Date).getTime() + g++ % 1000
        }, callEvent: function (j, h, k) {
            if (d.isFunction(j)) {
                k !== c && (j = d.proxy(j, k));
                var l = j(h);
                return h && (h.result = l), !(l !== c && !l)
            }
            return 1
        }, clientLang: function () {
            var h, e = f.config;
            if ("undefined" != typeof e && e.clientLang && (h = e.clientLang), !h) {
                var j = d("html").attr("lang");
                h = j ? j : navigator.userLanguage || navigator.userLanguage || "zh_cn"
            }
            return h.replace("-", "_").toLowerCase()
        }, strCode: function (h) {
            var j = 0;
            if (h && h.length) {
                for (var a = 0; a < h.length; ++a) {
                    j += a * h.charCodeAt(a)
                }
            }
            return j
        }, getMouseButtonCode: function (a) {
            return "number" != typeof a && (a = b[a]), a !== c && null !== a || (a = -1), a
        }
    }), d.fn.callEvent = function (p, j, u) {
        var w = d(this), k = p.indexOf(".zui."), m = k < 0 ? p : p.substring(0, k), h = d.Event(m, j);
        if (u === c && k > 0 && (u = w.data(p.substring(k + 1))), u && u.options) {
            var q = u.options[m];
            d.isFunction(q) && (h.result = d.zui.callEvent(q, h, u))
        }
        return w.trigger(h), h
    }
}(jQuery, window, void 0), function () {
    String.prototype.format || (String.prototype.format = function (d) {
        var f = this;
        if (arguments.length > 0) {
            var c;
            if (arguments.length <= 2 && "object" == typeof d) {
                for (var b in d) {
                    void 0 !== d[b] && (c = new RegExp("(" + (arguments[1] ? arguments[1].replace("0", b) : "{" + b + "}") + ")", "g"), f = f.replace(c, d[b]))
                }
            } else {
                for (var g = 0; g < arguments.length; g++) {
                    void 0 !== arguments[g] && (c = new RegExp("({[" + g + "]})", "g"), f = f.replace(c, arguments[g]))
                }
            }
        }
        return f
    }), String.prototype.isNum || (String.prototype.isNum = function (b) {
        if (null !== b) {
            var c, a;
            return a = /\d*/i, c = b.match(a), c == b
        }
        return !1
    })
}(),
    /*
 * ! jQuery resize event - v1.1
 * http://benalman.com/projects/jquery-resize-plugin/ Copyright (c) 2010
 * "Cowboy" Ben Alman MIT & GPL http://benalman.com/about/license/
 */
    function (x, p, k) {
        function w() {
            f = p[b](function () {
                g.each(function () {
                    var h = x(this), d = h.width(), c = h.height(), l = x.data(this, q);
                    d === l.w && c === l.h || h.trigger(j, [l.w = d, l.h = c])
                }), w()
            }, y[u])
        }

        var f, g = x([]), y = x.resize = x.extend(x.resize, {}), b = "setTimeout", j = "resize",
            q = j + "-special-event", u = "delay", m = "throttleWindow";
        y[u] = 250, y[m] = !0, x.event.special[j] = {
            setup: function () {
                if (!y[m] && this[b]) {
                    return !1
                }
                var a = x(this);
                g = g.add(a), x.data(this, q, {w: a.width(), h: a.height()}), 1 === g.length && w()
            }, teardown: function () {
                if (!y[m] && this[b]) {
                    return !1
                }
                var a = x(this);
                g = g.not(a), a.removeData(q), g.length || clearTimeout(f)
            }, add: function (d) {
                function c(A, l, B) {
                    var o = x(this), z = x.data(this, q) || {};
                    z.w = l !== k ? l : o.width(), z.h = B !== k ? B : o.height(), h.apply(this, arguments)
                }

                if (!y[m] && this[b]) {
                    return !1
                }
                var h;
                return x.isFunction(d) ? (h = d, c) : (h = d.handler, void (d.handler = c))
            }
        }
    }(jQuery, this), function () {
    Date.ONEDAY_TICKS = 86400000, Date.prototype.format || (Date.prototype.format = function (b) {
        var c = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S+": this.getMilliseconds()
        };
        /(y+)/i.test(b) && (b = b.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var a in c) {
            new RegExp("(" + a + ")").test(b) && (b = b.replace(RegExp.$1, 1 == RegExp.$1.length ? c[a] : ("00" + c[a]).substr(("" + c[a]).length)))
        }
        return b
    }), Date.prototype.addMilliseconds || (Date.prototype.addMilliseconds = function (a) {
        return this.setTime(this.getTime() + a), this
    }), Date.prototype.addDays || (Date.prototype.addDays = function (a) {
        return this.addMilliseconds(a * Date.ONEDAY_TICKS), this
    }), Date.prototype.clone || (Date.prototype.clone = function () {
        var a = new Date;
        return a.setTime(this.getTime()), a
    }), Date.isLeapYear || (Date.isLeapYear = function (a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
    }), Date.getDaysInMonth || (Date.getDaysInMonth = function (a, b) {
        return [31, Date.isLeapYear(a) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][b]
    }), Date.prototype.isLeapYear || (Date.prototype.isLeapYear = function () {
        return Date.isLeapYear(this.getFullYear())
    }), Date.prototype.clearTime || (Date.prototype.clearTime = function () {
        return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
    }), Date.prototype.getDaysInMonth || (Date.prototype.getDaysInMonth = function () {
        return Date.getDaysInMonth(this.getFullYear(), this.getMonth())
    }), Date.prototype.addMonths || (Date.prototype.addMonths = function (a) {
        var b = this.getDate();
        return this.setDate(1), this.setMonth(this.getMonth() + a), this.setDate(Math.min(b, this.getDaysInMonth())), this
    }), Date.prototype.getLastWeekday || (Date.prototype.getLastWeekday = function (a) {
        a = a || 1;
        for (var b = this.clone(); b.getDay() != a;) {
            b.addDays(-1)
        }
        return b.clearTime(), b
    }), Date.prototype.isSameDay || (Date.prototype.isSameDay = function (a) {
        return a.toDateString() === this.toDateString()
    }), Date.prototype.isSameWeek || (Date.prototype.isSameWeek = function (b) {
        var c = this.getLastWeekday(), a = c.clone().addDays(7);
        return b >= c && b < a
    }), Date.prototype.isSameYear || (Date.prototype.isSameYear = function (a) {
        return this.getFullYear() === a.getFullYear()
    })
}(), +function (a) {
    function b() {
        var d = document.createElement("bootstrap"), f = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in f) {
            if (void 0 !== d.style[c]) {
                return {end: f[c]}
            }
        }
        return !1
    }

    a.fn.emulateTransitionEnd = function (f) {
        var d = !1, c = this;
        a(this).one("bsTransitionEnd", function () {
            d = !0
        });
        var g = function () {
            d || a(c).trigger(a.support.transition.end)
        };
        return setTimeout(g, f), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (c) {
                if (a(c.target).is(this)) {
                    return c.handleObj.handler.apply(this, arguments)
                }
            }
        })
    })
}(jQuery), function (d, f) {
    var c = "zui.draggable", b = {container: "body", move: !0}, g = 0, h = function (j, a) {
        var k = this;
        k.$ = d(j), k.id = g++, k.options = d.extend({}, b, k.$.data(), a), k.init()
    };
    h.DEFAULTS = b, h.NAME = c, h.prototype.init = function () {
        var Q, G, H, B, E, J = this, N = J.$, O = "before", K = "drag", F = "finish", M = "." + c + "." + J.id,
            A = "mousedown" + M, L = "mouseup" + M, I = "mousemove" + M, z = J.options, P = z.selector, j = z.handle,
            q = N, D = function (l) {
                var m = l.pageX, a = l.pageY;
                E = !0;
                var n = {left: m - H.x, top: a - H.y};
                q.removeClass("drag-ready").addClass("dragging"), z.move && q.css(n), z[K] && z[K]({
                    event: l,
                    element: q,
                    startOffset: H,
                    pos: n,
                    offset: {x: m - Q.x, y: a - Q.y},
                    smallOffset: {x: m - B.x, y: a - B.y}
                }), B.x = m, B.y = a, z.stopPropagation && l.stopPropagation()
            }, k = function (a) {
                if (d(f).off(M), !E) {
                    return void q.removeClass("drag-ready")
                }
                var l = {left: a.pageX - H.x, top: a.pageY - H.y};
                q.removeClass("drag-ready dragging"), z.move && q.css(l), z[F] && z[F]({
                    event: a,
                    element: q,
                    startOffset: H,
                    pos: l,
                    offset: {x: a.pageX - Q.x, y: a.pageY - Q.y},
                    smallOffset: {x: a.pageX - B.x, y: a.pageY - B.y}
                }), a.preventDefault(), z.stopPropagation && a.stopPropagation()
            }, e = function (m) {
                var a = d.zui.getMouseButtonCode(z.mouseButton);
                if (!(a > -1 && m.button !== a)) {
                    var s = d(this);
                    if (P && (q = j ? s.closest(P) : s), z[O]) {
                        var n = z[O]({event: m, element: q});
                        if (n === !1) {
                            return
                        }
                    }
                    var r = d(z.container), o = q.offset();
                    G = r.offset(), Q = {x: m.pageX, y: m.pageY}, H = {
                        x: m.pageX - o.left + G.left,
                        y: m.pageY - o.top + G.top
                    }, B = d.extend({}, Q), E = !1, q.addClass("drag-ready"), m.preventDefault(), z.stopPropagation && m.stopPropagation(), d(f).on(I, D).on(L, k)
                }
            };
        j ? N.on(A, j, e) : P ? N.on(A, P, e) : N.on(A, e)
    }, h.prototype.destroy = function () {
        var e = "." + c + "." + this.id;
        this.$.off(e), d(f).off(e), this.$.data(c, null)
    }, d.fn.draggable = function (a) {
        return this.each(function () {
            var e = d(this), k = e.data(c), j = "object" == typeof a && a;
            k || e.data(c, k = new h(this, j)), "string" == typeof a && k[a]()
        })
    }, d.fn.draggable.Constructor = h
}(jQuery, document), function (d, g, c) {
    var b = "zui.droppable", h = {target: ".droppable-target", deviation: 5, sensorOffsetX: 0, sensorOffsetY: 0}, j = 0,
        f = function (m, l) {
            var k = this;
            k.id = j++, k.$ = d(m), k.options = d.extend({}, h, k.$.data(), l), k.init()
        };
    f.DEFAULTS = h, f.NAME = b, f.prototype.trigger = function (k, a) {
        return d.zui.callEvent(this.options[k], a, this)
    }, f.prototype.init = function () {
        var ab, ac, W, Y, ae, ak, al, ah, aa, aj, R, ai, ad, Q = this, am = Q.$, J = Q.options, N = J.deviation,
            X = "." + b + "." + Q.id, M = "mousedown" + X, q = "mouseup" + X, af = "mousemove" + X, a = J.selector,
            U = J.handle, H = J.flex, V = J.container, e = J.canMoveHere, G = am, F = !1,
            ag = V ? d(J.container).first() : a ? am : d("body"), K = function (p) {
                if (F && (R = {left: p.pageX, top: p.pageY}, !(c.abs(R.left - ah.left) < N && c.abs(R.top - ah.top) < N))) {
                    if (null === W) {
                        var o = ag.css("position");
                        "absolute" != o && "relative" != o && "fixed" != o && (ak = o, ag.css("position", "relative")), W = G.clone().removeClass("drag-from").addClass("drag-shadow").css({
                            position: "absolute",
                            width: G.outerWidth(),
                            transition: "none"
                        }).appendTo(ag), G.addClass("dragging"), Q.trigger("start", {event: p, element: G})
                    }
                    var s = {left: R.left - aj.left, top: R.top - aj.top},
                        n = {left: s.left - aa.left, top: s.top - aa.top};
                    W.css(n), d.extend(ai, R);
                    var l = !1;
                    Y = !1, H || ab.removeClass("drop-to");
                    var r = null;
                    if (ab.each(function () {
                            var x = d(this), u = x.offset(), m = x.outerWidth(), y = x.outerHeight(),
                                z = u.left + J.sensorOffsetX, w = u.top + J.sensorOffsetY;
                            if (R.left > z && R.top > w && R.left < z + m && R.top < w + y && (r && r.removeClass("drop-to"), r = x, !J.nested)) {
                                return !1
                            }
                        }), r) {
                        Y = !0;
                        var k = r.data("id");
                        G.data("id") != k && (ae = !1), (null === ac || ac.data("id") !== k && !ae) && (l = !0), ac = r, H && ab.removeClass("drop-to"), ac.addClass("drop-to")
                    }
                    H ? null !== ac && ac.length && (Y = !0) : (G.toggleClass("drop-in", Y), W.toggleClass("drop-in", Y)), e && e(G, ac) === !1 || Q.trigger("drag", {
                        event: p,
                        isIn: Y,
                        target: ac,
                        element: G,
                        isNew: l,
                        selfTarget: ae,
                        clickOffset: aj,
                        offset: s,
                        position: {left: s.left - aa.left, top: s.top - aa.top},
                        mouseOffset: R
                    }), p.preventDefault()
                }
            }, Z = function (m) {
                if (d(g).off(X), clearTimeout(ad), F) {
                    if (F = !1, ak && ag.css("position", ak), null === W) {
                        return G.removeClass("drag-from"), void Q.trigger("always", {event: m, cancel: !0})
                    }
                    Y || (ac = null);
                    var l = !0;
                    R = m ? {left: m.pageX, top: m.pageY} : ai;
                    var o = {left: R.left - aj.left, top: R.top - aj.top},
                        n = {left: R.left - ai.left, top: R.top - ai.top};
                    ai.left = R.left, ai.top = R.top;
                    var k = {
                        event: m,
                        isIn: Y,
                        target: ac,
                        element: G,
                        isNew: !ae && null !== ac,
                        selfTarget: ae,
                        offset: o,
                        mouseOffset: R,
                        position: {left: o.left - aa.left, top: o.top - aa.top},
                        lastMouseOffset: ai,
                        moveOffset: n
                    };
                    l = Q.trigger("beforeDrop", k), l && Y && Q.trigger("drop", k), ab.removeClass("drop-to"), G.removeClass("dragging").removeClass("drag-from"), W.remove(), W = null, Q.trigger("finish", k), Q.trigger("always", k), m && m.preventDefault()
                }
            }, B = function (m) {
                var k = d.zui.getMouseButtonCode(J.mouseButton);
                if (!(k > -1 && m.button !== k)) {
                    var l = d(this);
                    a && (G = U ? l.closest(a) : l), G.hasClass("drag-shadow") || J.before && J.before({
                        event: m,
                        element: G
                    }) === !1 || (F = !0, ab = d.isFunction(J.target) ? J.target(am) : ag.find(J.target), ac = null, W = null, Y = !1, ae = !0, ak = null, al = G.offset(), aa = ag.offset(), ah = {
                        left: m.pageX,
                        top: m.pageY
                    }, ai = d.extend({}, ah), aj = {
                        left: ah.left - al.left,
                        top: ah.top - al.top
                    }, G.addClass("drag-from"), d(g).on(af, K).on(q, Z), ad = setTimeout(function () {
                        d(g).on(M, Z)
                    }, 10), m.preventDefault())
                }
            };
        U ? am.on(M, U, B) : a ? am.on(M, a, B) : am.on(M, B)
    }, f.prototype.destroy = function () {
        var a = "." + b + "." + this.id;
        this.$.off(a), d(g).off(a), this.$.data(b, null)
    }, f.prototype.reset = function () {
        this.destroy(), this.init()
    }, d.fn.droppable = function (a) {
        return this.each(function () {
            var e = d(this), k = e.data(b), l = "object" == typeof a && a;
            k || e.data(b, k = new f(this, l)), "string" == typeof a && k[a]()
        })
    }, d.fn.droppable.Constructor = f
}(jQuery, document, Math), function (a) {
    if (!a.fn.droppable) {
        throw new Error("Droppable requires for boards")
    }
    var b = function (d, c) {
        this.$ = a(d), this.options = this.getOptions(c), this.getLang(), this.init()
    };
    b.DEFAULTS = {
        langs: {
            zh_cn: {append2end: "移动到末尾"},
            zh_tw: {append2end: "移动到末尾"},
            en: {append2end: "Move to the end."}
        }
    }, b.prototype.getOptions = function (c) {
        return c = a.extend({lang: a.zui.clientLang()}, b.DEFAULTS, this.$.data(), c)
    }, b.prototype.getLang = function () {
        var c = this.options;
        this.lang = c.langs[c.lang] || c.langs[b.DEFAULTS.lang]
    }, b.prototype.init = function () {
        var d = 1, c = this.lang;
        this.$.find('.board-item:not(".disable-drop"), .board:not(".disable-drop")').each(function () {
            var e = a(this);
            e.attr("id") ? e.attr("data-id", e.attr("id")) : e.attr("data-id") || e.attr("data-id", "board" + d++), e.hasClass("board") && e.find(".board-list").append('<div class="board-item board-item-empty"><i class="icon-plus"></i> {append2end}</div>'.format(c)).append('<div class="board-item board-item-shadow"></div>'.format(c))
        }), this.bind()
    }, b.prototype.bind = function (f) {
        var d = this.$, c = this.options;
        d.droppable(a.extend({
            before: c.before,
            target: '.board-item:not(".disable-drop, .board-item-shadow")',
            flex: !0,
            selector: '.board-item:not(".disable-drop, .board-item-shadow")',
            start: function (e) {
                d.addClass("dragging").find(".board-item-shadow").height(e.element.outerHeight())
            },
            drag: function (h) {
                if (d.find(".board.drop-in-empty").removeClass("drop-in-empty"), h.isIn) {
                    var j = h.target.closest(".board").addClass("drop-in"), g = j.find(".board-item-shadow"),
                        k = h.target;
                    d.addClass("drop-in").find(".board.drop-in").not(j).removeClass("drop-in"), g.insertBefore(k), j.toggleClass("drop-in-empty", k.hasClass("board-item-empty"))
                }
            },
            drop: function (h) {
                if (h.isNew) {
                    var g;
                    a.isFunction(c.drop) && (g = c.drop(h)), g !== !1 && h.element.insertBefore(h.target)
                }
            },
            finish: function () {
                d.removeClass("dragging").removeClass("drop-in").find(".board.drop-in").removeClass("drop-in")
            }
        }, c.droppable))
    }, a.fn.boards = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("zui.boards"), f = "object" == typeof c && c;
            e || d.data("zui.boards", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.boards.Constructor = b
}(jQuery), function (a) {
    a.fn.fixOlPd = function (b) {
        return b = b || 10, this.each(function () {
            var c = a(this);
            c.css("paddingLeft", Math.ceil(Math.log10(c.children().length)) * b + 10)
        })
    }, a(function () {
        a(".ol-pd-fix,.article ol").fixOlPd()
    })
}(jQuery), function (b) {
    var c = {
        zh_cn: '您的浏览器版本过低，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        zh_tw: '您的瀏覽器版本過低，無法體驗所有功能，建議升級或者更换瀏覽器。<a href="http://browsehappy.com/" target="_blank" class="alert-link">了解更多...</a>',
        en: 'Your browser is too old, it has been unable to experience the colorful internet. We strongly recommend that you upgrade a better one. <a href="http://browsehappy.com/" target="_blank" class="alert-link">Learn more...</a>'
    }, a = function () {
        var d = this.isIE() || this.isIE10() || !1;
        if (d) {
            for (var f = 10; f > 5; f--) {
                if (this.isIE(f)) {
                    d = f;
                    break
                }
            }
        }
        this.ie = d, this.cssHelper()
    };
    a.prototype.cssHelper = function () {
        var f = this.ie, d = b("html");
        d.toggleClass("ie", f).removeClass("ie-6 ie-7 ie-8 ie-9 ie-10"), f && d.addClass("ie-" + f).toggleClass("gt-ie-7 gte-ie-8 support-ie", f >= 8).toggleClass("lte-ie-7 lt-ie-8 outdated-ie", f < 8).toggleClass("gt-ie-8 gte-ie-9", f >= 9).toggleClass("lte-ie-8 lt-ie-9", f < 9).toggleClass("gt-ie-9 gte-ie-10", f >= 10).toggleClass("lte-ie-9 lt-ie-10", f < 10)
    }, a.prototype.tip = function (e) {
        var d = b("#browseHappyTip");
        d.length || (d = b('<div id="browseHappyTip" class="alert alert-dismissable alert-danger-inverse alert-block" style="position: relative; z-index: 99999"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button><div class="container"><div class="content text-center"></div></div></div>'), d.prependTo("body")), d.find(".content").html(e || this.browseHappyTip || c[b.zui.clientLang() || "zh_cn"])
    }, a.prototype.isIE = function (d) {
        if (10 === d) {
            return this.isIE10()
        }
        var f = document.createElement("b");
        return f.innerHTML = "<!--[if IE " + (d || "") + "]><i></i><![endif]-->", 1 === f.getElementsByTagName("i").length
    }, a.prototype.isIE10 = function () {
        return !1
    }, b.zui({browser: new a}), b(function () {
        b("body").hasClass("disabled-browser-tip") || b.zui.browser.ie && b.zui.browser.ie < 8 && b.zui.browser.tip()
    })
}(jQuery), +function (d) {
    var f = "zui.tab", c = function (a) {
        this.element = d(a)
    };
    c.prototype.show = function () {
        var g = this.element, e = g.closest("ul:not(.dropdown-menu)"), k = g.attr("data-target") || g.attr("data-tab");
        if (k || (k = g.attr("href"), k = k && k.replace(/.*(?=#[^\s]*$)/, "")), !g.parent("li").hasClass("active")) {
            var l = e.find(".active:last a")[0], h = d.Event("show." + f, {relatedTarget: l});
            if (g.trigger(h), !h.isDefaultPrevented()) {
                var j = d(k);
                this.activate(g.parent("li"), e), this.activate(j, j.parent(), function () {
                    g.trigger({type: "shown." + f, relatedTarget: l})
                })
            }
        }
    }, c.prototype.activate = function (k, h, g) {
        function l() {
            m.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), k.addClass("active"), j ? (k[0].offsetWidth, k.addClass("in")) : k.removeClass("fade"), k.parent(".dropdown-menu") && k.closest("li.dropdown").addClass("active"), g && g()
        }

        var m = h.find("> .active"), j = g && d.support.transition && m.hasClass("fade");
        j ? m.one(d.support.transition.end, l).emulateTransitionEnd(150) : l(), m.removeClass("in")
    };
    var b = d.fn.tab;
    d.fn.tab = function (e) {
        return this.each(function () {
            var a = d(this), g = a.data(f);
            g || a.data(f, g = new c(this)), "string" == typeof e && g[e]()
        })
    }, d.fn.tab.Constructor = c, d.fn.tab.noConflict = function () {
        return d.fn.tab = b, this
    }, d(document).on("click.zui.tab.data-api", '[data-toggle="tab"], [data-tab]', function (a) {
        a.preventDefault(), d(this).tab("show")
    })
}(window.jQuery), function (d, h) {
    var c = 1200, b = 992, j = 768, k = {
        desktop: "screen-desktop",
        desktopLg: "screen-desktop-wide",
        tablet: "screen-tablet",
        phone: "screen-phone",
        isMobile: "device-mobile",
        isDesktop: "device-desktop",
        touch: "is-touchable"
    }, f = h(d), g = function () {
        var a = f.width();
        h("html").toggleClass(k.desktop, a >= b && a < c).toggleClass(k.desktopLg, a >= c).toggleClass(k.tablet, a >= j && a < b).toggleClass(k.phone, a < j).toggleClass(k.isMobile, a < b).toggleClass(k.touch, "ontouchstart" in document.documentElement).toggleClass(k.isDesktop, a >= b)
    };
    f.resize(g), g()
}(window, jQuery), +function (d) {
    var f = '[data-dismiss="alert"]', c = "zui.alert", b = function (a) {
        d(a).on("click", f, this.close)
    };
    b.prototype.close = function (k) {
        function h() {
            j.trigger("closed." + c).remove()
        }

        var l = d(this), m = l.attr("data-target");
        m || (m = l.attr("href"), m = m && m.replace(/.*(?=#[^\s]*$)/, ""));
        var j = d(m);
        k && k.preventDefault(), j.length || (j = l.hasClass("alert") ? l : l.parent()), j.trigger(k = d.Event("close." + c)), k.isDefaultPrevented() || (j.removeClass("in"), d.support.transition && j.hasClass("fade") ? j.one(d.support.transition.end, h).emulateTransitionEnd(150) : h())
    };
    var g = d.fn.alert;
    d.fn.alert = function (a) {
        return this.each(function () {
            var e = d(this), h = e.data(c);
            h || e.data(c, h = new b(this)), "string" == typeof a && h[a].call(e)
        })
    }, d.fn.alert.Constructor = b, d.fn.alert.noConflict = function () {
        return d.fn.alert = g, this
    }, d(document).on("click." + c + ".data-api", f, b.prototype.close)
}(window.jQuery), +function (b) {
    var c = function (e, d) {
        this.$element = b(e), this.options = b.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (g) {
        var f = "disabled", d = this.$element, h = d.is("input") ? "val" : "html", j = d.data();
        g += "Text", j.resetText || d.data("resetText", d[h]()), d[h](j[g] || this.options[g]), setTimeout(b.proxy(function () {
            "loadingText" == g ? (this.isLoading = !0, d.addClass(f).attr(f, f)) : this.isLoading && (this.isLoading = !1, d.removeClass(f).removeAttr(f))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var f = !0, g = this.$element.closest('[data-toggle="buttons"]');
        if (g.length) {
            var d = this.$element.find("input");
            "radio" == d.prop("type") && (d.prop("checked") && this.$element.hasClass("active") ? f = !1 : g.find(".active").removeClass("active")), f && d.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        f && this.$element.toggleClass("active")
    };
    var a = b.fn.button;
    b.fn.button = function (d) {
        return this.each(function () {
            var e = b(this), f = e.data("zui.button"), g = "object" == typeof d && d;
            f || e.data("zui.button", f = new c(this, g)), "toggle" == d ? f.toggle() : d && f.setState(d)
        })
    }, b.fn.button.Constructor = c, b.fn.button.noConflict = function () {
        return b.fn.button = a, this
    }, b(document).on("click.zui.button.data-api", "[data-toggle^=button]", function (f) {
        var d = b(f.target);
        d.hasClass("btn") || (d = d.closest(".btn")), d.button("toggle"), f.preventDefault()
    })
}(jQuery), +function (d) {
    var f = "zui.collapse", c = function (h, g) {
        this.$element = d(h), this.options = d.extend({}, c.DEFAULTS, g), this.transitioning = null, this.options.parent && (this.$parent = d(this.options.parent)), this.options.toggle && this.toggle()
    };
    c.DEFAULTS = {toggle: !0}, c.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, c.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var g = d.Event("show." + f);
            if (this.$element.trigger(g), !g.isDefaultPrevented()) {
                var e = this.$parent && this.$parent.find(".in");
                if (e && e.length) {
                    var k = e.data(f);
                    if (k && k.transitioning) {
                        return
                    }
                    e.collapse("hide"), k || e.data(f, null)
                }
                var l = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[l](0), this.transitioning = 1;
                var h = function () {
                    this.$element.removeClass("collapsing").addClass("in")[l]("auto"), this.transitioning = 0, this.$element.trigger("shown." + f)
                };
                if (!d.support.transition) {
                    return h.call(this)
                }
                var j = d.camelCase(["scroll", l].join("-"));
                this.$element.one(d.support.transition.end, d.proxy(h, this)).emulateTransitionEnd(350)[l](this.$element[0][j])
            }
        }
    }, c.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var g = d.Event("hide." + f);
            if (this.$element.trigger(g), !g.isDefaultPrevented()) {
                var e = this.dimension();
                this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var h = function () {
                    this.transitioning = 0, this.$element.trigger("hidden." + f).removeClass("collapsing").addClass("collapse")
                };
                return d.support.transition ? void this.$element[e](0).one(d.support.transition.end, d.proxy(h, this)).emulateTransitionEnd(350) : h.call(this)
            }
        }
    }, c.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var b = d.fn.collapse;
    d.fn.collapse = function (e) {
        return this.each(function () {
            var g = d(this), h = g.data(f), a = d.extend({}, c.DEFAULTS, g.data(), "object" == typeof e && e);
            h || g.data(f, h = new c(this, a)), "string" == typeof e && h[e]()
        })
    }, d.fn.collapse.Constructor = c, d.fn.collapse.noConflict = function () {
        return d.fn.collapse = b, this
    }, d(document).on("click." + f + ".data-api", "[data-toggle=collapse]", function (k) {
        var q, g = d(this),
            h = g.attr("data-target") || k.preventDefault() || (q = g.attr("href")) && q.replace(/.*(?=#[^\s]+$)/, ""),
            u = d(h), e = u.data(f), j = e ? "toggle" : g.data(), m = g.attr("data-parent"), p = m && d(m);
        e && e.transitioning || (p && p.find('[data-toggle=collapse][data-parent="' + m + '"]').not(g).addClass("collapsed"), g[u.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), u.collapse(j)
    })
}(window.jQuery), +function (k) {
    function h() {
        k(c).remove(), k(d).each(function (a) {
            var l = g(k(this));
            l.hasClass("open") && (l.trigger(a = k.Event("hide." + j)), a.isDefaultPrevented() || l.removeClass("open").trigger("hidden." + j))
        })
    }

    function g(p) {
        var n = p.attr("data-target");
        n || (n = p.attr("href"), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var l;
        try {
            l = n && k(n)
        } catch (q) {
        }
        return l && l.length ? l : p.parent()
    }

    var j = "zui.dropdown", c = ".dropdown-backdrop", d = "[data-toggle=dropdown]", m = function (a) {
        k(a).on("click." + j, this.toggle)
    };
    m.prototype.toggle = function (l) {
        var p = k(this);
        if (!p.is(".disabled, :disabled")) {
            var a = g(p), e = a.hasClass("open");
            if (h(), !e) {
                if ("ontouchstart" in document.documentElement && !a.closest(".navbar-nav").length && k('<div class="dropdown-backdrop"/>').insertAfter(k(this)).on("click", h), a.trigger(l = k.Event("show." + j)), l.isDefaultPrevented()) {
                    return
                }
                a.toggleClass("open").trigger("shown." + j), p.focus()
            }
            return !1
        }
    }, m.prototype.keydown = function (w) {
        if (/(38|40|27)/.test(w.keyCode)) {
            var p = k(this);
            if (w.preventDefault(), w.stopPropagation(), !p.is(".disabled, :disabled")) {
                var x = g(p), q = x.hasClass("open");
                if (!q || q && 27 == w.keyCode) {
                    return 27 == w.which && x.find(d).focus(), p.click()
                }
                var u = k("[role=menu] li:not(.divider):visible a", x);
                if (u.length) {
                    var n = u.index(u.filter(":focus"));
                    38 == w.keyCode && n > 0 && n--, 40 == w.keyCode && n < u.length - 1 && n++, ~n || (n = 0), u.eq(n).focus()
                }
            }
        }
    };
    var b = k.fn.dropdown;
    k.fn.dropdown = function (a) {
        return this.each(function () {
            var l = k(this), e = l.data("dropdown");
            e || l.data("dropdown", e = new m(this)), "string" == typeof a && e[a].call(l)
        })
    }, k.fn.dropdown.Constructor = m, k.fn.dropdown.noConflict = function () {
        return k.fn.dropdown = b, this
    };
    var f = j + ".data-api";
    k(document).on("click." + f, h).on("click." + f, ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click." + f, d, m.prototype.toggle).on("keydown." + f, d + ", [role=menu]", m.prototype.keydown)
}(window.jQuery), +function (d) {
    function f(a, h, j) {
        return this.each(function () {
            var k = d(this), m = k.data(c), e = d.extend({}, b.DEFAULTS, k.data(), "object" == typeof a && a);
            m || k.data(c, m = new b(this, e)), "string" == typeof a ? m[a](h, j) : e.show && m.show(h, j)
        })
    }

    var c = "zui.modal", b = function (j, h) {
        this.options = h, this.$body = d(document.body), this.$element = d(j), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, "undefined" == typeof this.options.moveable && (this.options.moveable = this.$element.hasClass("modal-moveable")), this.options.remote && this.$element.find(".modal-content").load(this.options.remote, d.proxy(function () {
            this.$element.trigger("loaded." + c)
        }, this))
    };
    b.VERSION = "3.2.0", b.TRANSITION_DURATION = 300, b.BACKDROP_TRANSITION_DURATION = 150, b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0,
        position: "fit"
    }, b.prototype.toggle = function (a, h) {
        return this.isShown ? this.hide() : this.show(a, h)
    }, b.prototype.ajustPosition = function (l) {
        if ("undefined" == typeof l && (l = this.options.position), "undefined" != typeof l) {
            var h = this.$element.find(".modal-dialog"), m = Math.max(0, (d(window).height() - h.outerHeight()) / 2),
                p = "fit" == l ? 2 * m / 3 : "center" == l ? m : l;
            if (h.hasClass("modal-moveable")) {
                var j = null, k = this.options.rememberPos;
                k && (k === !0 ? j = this.$element.data("modal-pos") : d.zui.store && (j = d.zui.store.pageGet(c + ".rememberPos." + k))), j || (j = {
                    left: Math.max(0, (d(window).width() - h.outerWidth()) / 2),
                    top: p
                }), h.css(j)
            } else {
                h.css("margin-top", p)
            }
        }
    }, b.prototype.setMoveale = function () {
        d.fn.draggable || console.error("Moveable modal requires draggable.js.");
        var j = this, h = j.options, k = j.$element.find(".modal-dialog").removeClass("modal-dragged");
        k.toggleClass("modal-moveable", h.moveable), j.$element.data("modal-moveable-setup") || k.draggable({
            container: j.$element,
            handle: ".modal-header",
            before: function () {
                k.css("margin-top", "").addClass("modal-dragged")
            },
            finish: function (a) {
                var e = h.rememberPos;
                e && (j.$element.data("modal-pos", a.pos), d.zui.store && e !== !0 && d.zui.store.pageSet(c + ".rememberPos." + e, a.pos))
            }
        })
    }, b.prototype.show = function (h, j) {
        var k = this, a = d.Event("show." + c, {relatedTarget: h});
        k.$element.trigger(a), k.isShown || a.isDefaultPrevented() || (k.isShown = !0, k.options.moveable && k.setMoveale(), k.checkScrollbar(), k.$body.addClass("modal-open"), k.setScrollbar(), k.escape(), k.$element.on("click.dismiss." + c, '[data-dismiss="modal"]', d.proxy(k.hide, k)), k.backdrop(function () {
            var e = d.support.transition && k.$element.hasClass("fade");
            k.$element.parent().length || k.$element.appendTo(k.$body), k.$element.show().scrollTop(0), e && k.$element[0].offsetWidth, k.$element.addClass("in").attr("aria-hidden", !1), k.ajustPosition(j), k.enforceFocus();
            var l = d.Event("shown." + c, {relatedTarget: h});
            e ? k.$element.find(".modal-dialog").one("bsTransitionEnd", function () {
                k.$element.trigger("focus").trigger(l)
            }).emulateTransitionEnd(b.TRANSITION_DURATION) : k.$element.trigger("focus").trigger(l)
        }))
    }, b.prototype.hide = function (a) {
        a && a.preventDefault(), a = d.Event("hide." + c), this.$element.trigger(a), this.isShown && !a.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), d(document).off("focusin." + c), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss." + c), d.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", d.proxy(this.hideModal, this)).emulateTransitionEnd(b.TRANSITION_DURATION) : this.hideModal())
    }, b.prototype.enforceFocus = function () {
        d(document).off("focusin." + c).on("focusin." + c, d.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, b.prototype.escape = function () {
        this.isShown && this.options.keyboard ? d(document).on("keydown.dismiss." + c, d.proxy(function (j) {
            if (27 == j.which) {
                var h = d.Event("escaping." + c), k = this.$element.triggerHandler(h, "esc");
                if (void 0 != k && !k) {
                    return
                }
                this.hide()
            }
        }, this)) : this.isShown || d(document).off("keydown.dismiss." + c)
    }, b.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$element.trigger("hidden." + c)
        })
    }, b.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function (j) {
        var k = this, l = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var a = d.support.transition && l;
            if (this.$backdrop = d('<div class="modal-backdrop ' + l + '" />').appendTo(this.$body), this.$element.on("mousedown.dismiss." + c, d.proxy(function (e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), a && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !j) {
                return
            }
            a ? this.$backdrop.one("bsTransitionEnd", j).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : j()
        } else {
            if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var h = function () {
                    k.removeBackdrop(), j && j()
                };
                d.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", h).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION) : h()
            } else {
                j && j()
            }
        }
    }, b.prototype.checkScrollbar = function () {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, b.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.scrollbarWidth && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, b.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "")
    }, b.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var h = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), h
    };
    var g = d.fn.modal;
    d.fn.modal = f, d.fn.modal.Constructor = b, d.fn.modal.noConflict = function () {
        return d.fn.modal = g, this
    }, d(document).on("click." + c + ".data-api", '[data-toggle="modal"]', function (h) {
        var m = d(this), p = m.attr("href"), j = null;
        try {
            j = d(m.attr("data-target") || p && p.replace(/.*(?=#[^\s]+$)/, ""))
        } catch (k) {
            return
        }
        if (j.length) {
            var e = j.data(c) ? "toggle" : d.extend({remote: !/#/.test(p) && p}, j.data(), m.data());
            m.is("a") && h.preventDefault(), j.one("show." + c, function (a) {
                a.isDefaultPrevented() || j.one("hidden." + c, function () {
                    m.is(":visible") && m.trigger("focus")
                })
            }), f.call(j, e, this, m.data("position"))
        }
    })
}(jQuery), function (u, k) {
    if (!u.fn.modal) {
        throw new Error("Modal trigger requires modal.js")
    }
    var j = "zui.modaltrigger", q = "ajax", f = ".zui.modal", g = "string", w = function (c, a) {
        c = u.extend({}, w.DEFAULTS, u.ModalTriggerDefaults, a ? a.data() : null, c), this.isShown, this.$trigger = a, this.options = c, this.id = u.zui.uuid()
    };
    w.DEFAULTS = {
        type: "custom",
        height: "auto",
        name: "triggerModal",
        fade: !0,
        position: "fit",
        showHeader: !0,
        delay: 0,
        backdrop: !0,
        keyboard: !0,
        waittime: 0,
        loadingIcon: "icon-spinner-indicator"
    }, w.prototype.init = function (n) {
        var o = this;
        if (n.url && (!n.type || n.type != q && "iframe" != n.type) && (n.type = q), n.remote) {
            n.type = q, typeof n.remote === g && (n.url = n.remote)
        } else {
            if (n.iframe) {
                n.type = "iframe", typeof n.iframe === g && (n.url = n.iframe)
            } else {
                if (n.custom && (n.type = "custom", typeof n.custom === g)) {
                    var a;
                    try {
                        a = u(n.custom)
                    } catch (x) {
                    }
                    a && a.length ? n.custom = a : u.isFunction(k[n.custom]) && (n.custom = k[n.custom])
                }
            }
        }
        var y = u("#" + n.name);
        y.length && (o.isShown || y.off(f), y.remove()), y = u('<div id="' + n.name + '" class="modal modal-trigger ' + (n.className || "") + '">' + ("string" == typeof n.loadingIcon && 0 === n.loadingIcon.indexOf("icon-") ? '<div class="icon icon-spin loader ' + n.loadingIcon + '"></div>' : n.loadingIcon) + '<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button class="close" data-dismiss="modal">×</button><h4 class="modal-title"><i class="modal-icon"></i> <span class="modal-title-name"></span></h4></div><div class="modal-body"></div></div></div></div>').appendTo("body").data(j, o);
        var e = function (l, d) {
            var c = n[l];
            u.isFunction(c) && y.on(d + f, c)
        };
        e("onShow", "show"), e("shown", "shown"), e("onHide", "hide"), e("hidden", "hidden"), e("loaded", "loaded"), y.on("shown" + f, function () {
            o.isShown = !0
        }).on("hidden" + f, function () {
            o.isShown = !1
        }), this.$modal = y, this.$dialog = y.find(".modal-dialog"), n.mergeOptions && (this.options = n)
    }, w.prototype.show = function (I) {
        var a = u.extend({}, this.options, {url: this.$trigger ? this.$trigger.attr("href") || this.$trigger.attr("data-url") || this.$trigger.data("url") : this.options.url}, I);
        this.init(a);
        var o = this, B = this.$modal, C = this.$dialog, x = a.custom, e = C.find(".modal-body").css("padding", ""),
            A = C.find(".modal-header"), H = C.find(".modal-content");
        B.toggleClass("fade", a.fade).addClass(a.className).toggleClass("modal-loading", !this.isShown), C.toggleClass("modal-md", "md" === a.size).toggleClass("modal-sm", "sm" === a.size).toggleClass("modal-lg", "lg" === a.size).toggleClass("modal-fullscreen", "fullscreen" === a.size), A.toggle(a.showHeader), A.find(".modal-icon").attr("class", "modal-icon icon-" + a.icon), A.find(".modal-title-name").text(a.title || ""), a.size && "fullscreen" === a.size && (a.width = "", a.height = "");
        var z = function () {
            clearTimeout(this.resizeTask), this.resizeTask = setTimeout(function () {
                o.ajustPosition()
            }, 100)
        }, n = function (c, d) {
            return "undefined" == typeof c && (c = a.delay), setTimeout(function () {
                C = B.find(".modal-dialog"), a.width && "auto" != a.width && C.css("width", a.width), a.height && "auto" != a.height && (C.css("height", a.height), "iframe" === a.type && e.css("height", C.height() - A.outerHeight())), o.ajustPosition(a.position), B.removeClass("modal-loading"), "iframe" != a.type && C.off("resize." + j).on("resize." + j, z), d && d()
            }, c)
        };
        if ("custom" === a.type && x) {
            if (u.isFunction(x)) {
                var G = x({modal: B, options: a, modalTrigger: o, ready: n});
                typeof G === g && (e.html(G), n())
            } else {
                x instanceof u ? (e.html(u("<div>").append(x.clone()).html()), n()) : (e.html(x), n())
            }
        } else {
            if (a.url) {
                var E = function () {
                    console.error("onLoadBroken error");
                    var c = B.callEvent("broken" + f, o, o).result;
                    console.log("brokenContent", c, e, B), c && e.html(c)
                };
                if (B.attr("ref", a.url), "iframe" === a.type) {
                    B.addClass("modal-iframe"), this.firstLoad = !0;
                    var D = "iframe-" + a.name;
                    A.detach(), e.detach(), H.empty().append(A).append(e), e.css("padding", 0).html('<iframe id="' + D + '" name="' + D + '" src="' + a.url + '" frameborder="no"  allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"  allowtransparency="true" scrolling="auto" style="width: 100%; height: 100%; left: 0px;"></iframe>'), a.waittime > 0 && (o.waitTimeout = n(a.waittime, E));
                    var F = document.getElementById(D);
                    F.onload = F.onreadystatechange = function () {
                        if (o.firstLoad && B.addClass("modal-loading"), !this.readyState || "complete" == this.readyState) {
                            o.firstLoad = !1, a.waittime > 0 && clearTimeout(o.waitTimeout);
                            try {
                                B.attr("ref", F.contentWindow.location.href);
                                var d = k.frames[D].$;
                                if (d && "auto" === a.height && "fullscreen" != a.size) {
                                    var c = d("body").addClass("body-modal");
                                    a.iframeBodyClass && c.addClass(a.iframeBodyClass);
                                    var r = function (s) {
                                        B.removeClass("fade");
                                        var y = c.outerHeight();
                                        s === !0 && a.onlyIncreaseHeight && (y = Math.max(y, e.data("minModalHeight") || 0), e.data("minModalHeight", y)), e.css("height", y), a.fade && B.addClass("fade"), n()
                                    };
                                    B.callEvent("loaded" + f, {
                                        modalType: "iframe",
                                        jQuery: d
                                    }, null), setTimeout(r, 100), c.off("resize." + j).on("resize." + j, z)
                                } else {
                                    n()
                                }
                                d.extend({closeModal: k.closeModal})
                            } catch (l) {
                                n()
                            }
                        }
                    }
                } else {
                    u.ajax(u.extend({
                        url: a.url, success: function (d) {
                            try {
                                var c = u(d);
                                c.hasClass("modal-dialog") ? C.replaceWith(c) : c.hasClass("modal-content") ? C.find(".modal-content").replaceWith(c) : e.wrapInner(c)
                            } catch (l) {
                                B.html(d)
                            }
                            B.callEvent("loaded" + f, {modalType: q}, o), n()
                        }, error: E
                    }, a.ajaxOptions))
                }
            }
        }
        B.modal({
            show: "show",
            backdrop: a.backdrop,
            moveable: a.moveable,
            rememberPos: a.rememberPos,
            keyboard: a.keyboard
        })
    }, w.prototype.close = function (d, c) {
        (d || c) && this.$modal.on("hidden" + f, function () {
            u.isFunction(d) && d(), typeof c === g && ("this" === c ? k.location.reload() : k.location = c)
        }), this.$modal.modal("hide")
    }, w.prototype.toggle = function (a) {
        this.isShown ? this.close() : this.show(a)
    }, w.prototype.ajustPosition = function (a) {
        this.$modal.modal("ajustPosition", a || this.options.position)
    }, u.zui({ModalTrigger: w, modalTrigger: new w}), u.fn.modalTrigger = function (d, c) {
        return u(this).each(function () {
            var n = u(this), e = n.data(j), a = u.extend({
                title: n.attr("title") || n.text(),
                url: n.attr("href"),
                type: n.hasClass("iframe") ? "iframe" : ""
            }, n.data(), u.isPlainObject(d) && d);
            e || n.data(j, e = new w(a, n)), typeof d == g ? e[d](c) : a.show && e.show(c), n.on((a.trigger || "click") + ".toggle." + j, function (l) {
                e.toggle(a), n.is("a") && l.preventDefault()
            })
        })
    };
    var b = u.fn.modal;
    u.fn.modal = function (c, a) {
        return u(this).each(function () {
            var d = u(this);
            d.hasClass("modal") ? b.call(d, c, a) : d.modalTrigger(c, a)
        })
    };
    var h = function (c) {
        var a = typeof c;
        return "undefined" === a ? c = u(".modal.modal-trigger") : a === g && (c = u(c)), c && c instanceof u ? c : null
    }, m = function (d, c, l) {
        if (u.isFunction(d)) {
            var r = l;
            l = c, c = d, d = r
        }
        d = h(d), d && d.length && d.each(function () {
            u(this).data(j).close(c, l)
        })
    }, p = function (a, c) {
        c = h(c), c && c.length && c.modal("ajustPosition", a)
    };
    u.zui({
        closeModal: m,
        ajustModalPosition: p
    }), u(document).on("click." + j + ".data-api", '[data-toggle="modal"]', function (l) {
        var c = u(this), r = c.attr("href"), x = null;
        try {
            x = u(c.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
        } catch (d) {
        }
        x && x.length || (c.data(j) ? c.trigger(".toggle." + j) : c.modalTrigger({show: !0})), c.is("a") && l.preventDefault()
    })
}(window.jQuery, window), +function (b) {
    var c = function (d, f) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.init("tooltip", d, f)
    };
    c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, c.prototype.init = function (k, g, f) {
        this.enabled = !0, this.type = k, this.$element = b(g), this.options = this.getOptions(f);
        for (var m = this.options.trigger.split(" "), p = m.length; p--;) {
            var h = m[p];
            if ("click" == h) {
                this.$element.on("click." + this.type, this.options.selector, b.proxy(this.toggle, this))
            } else {
                if ("manual" != h) {
                    var j = "hover" == h ? "mouseenter" : "focus", d = "hover" == h ? "mouseleave" : "blur";
                    this.$element.on(j + "." + this.type, this.options.selector, b.proxy(this.enter, this)), this.$element.on(d + "." + this.type, this.options.selector, b.proxy(this.leave, this))
                }
            }
        }
        this.options.selector ? this._options = b.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (d) {
        return d = b.extend({}, this.getDefaults(), this.$element.data(), d), d.delay && "number" == typeof d.delay && (d.delay = {
            show: d.delay,
            hide: d.delay
        }), d
    }, c.prototype.getDelegateOptions = function () {
        var f = {}, d = this.getDefaults();
        return this._options && b.each(this._options, function (g, e) {
            d[g] != e && (f[g] = e)
        }), f
    }, c.prototype.enter = function (f) {
        var d = f instanceof this.constructor ? f : b(f.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        return clearTimeout(d.timeout), d.hoverState = "in", d.options.delay && d.options.delay.show ? void (d.timeout = setTimeout(function () {
            "in" == d.hoverState && d.show()
        }, d.options.delay.show)) : d.show()
    }, c.prototype.leave = function (f) {
        var d = f instanceof this.constructor ? f : b(f.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type);
        return clearTimeout(d.timeout), d.hoverState = "out", d.options.delay && d.options.delay.hide ? void (d.timeout = setTimeout(function () {
            "out" == d.hoverState && d.hide()
        }, d.options.delay.hide)) : d.hide()
    }, c.prototype.show = function (G) {
        var C = b.Event("show.zui." + this.type);
        if ((G || this.hasContent()) && this.enabled) {
            var K = this;
            if (K.$element.trigger(C), C.isDefaultPrevented()) {
                return
            }
            var y = K.tip();
            K.setContent(G), K.options.animation && y.addClass("fade");
            var z = "function" == typeof K.options.placement ? K.options.placement.call(K, y[0], K.$element[0]) : K.options.placement,
                q = /\s?auto?\s?/i, w = q.test(z);
            w && (z = z.replace(q, "") || "top"), y.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(z), K.options.container ? y.appendTo(K.options.container) : y.insertAfter(K.$element);
            var B = K.getPosition(), H = y[0].offsetWidth, I = y[0].offsetHeight;
            if (w) {
                var D = K.$element.parent(), x = z, F = document.documentElement.scrollTop || document.body.scrollTop,
                    k = "body" == K.options.container ? window.innerWidth : D.outerWidth(),
                    E = "body" == K.options.container ? window.innerHeight : D.outerHeight(),
                    A = "body" == K.options.container ? 0 : D.offset().left;
                z = "bottom" == z && B.top + B.height + I - F > E ? "top" : "top" == z && B.top - F - I < 0 ? "bottom" : "right" == z && B.right + H > k ? "left" : "left" == z && B.left - H < A ? "right" : z, y.removeClass(x).addClass(z)
            }
            var j = K.getCalculatedOffset(z, B, H, I);
            K.applyPlacement(j, z);
            var J = function () {
                var d = K.hoverState;
                K.$element.trigger("shown.zui." + K.type), K.hoverState = null, "out" == d && K.leave(K)
            };
            b.support.transition && K.$tip.hasClass("fade") ? y.one("bsTransitionEnd", J).emulateTransitionEnd(150) : J()
        }
    }, c.prototype.applyPlacement = function (w, m) {
        var k, u = this.tip(), g = u[0].offsetWidth, h = u[0].offsetHeight, x = parseInt(u.css("margin-top"), 10),
            f = parseInt(u.css("margin-left"), 10);
        isNaN(x) && (x = 0), isNaN(f) && (f = 0), w.top = w.top + x, w.left = w.left + f, u.offset(w).addClass("in");
        var j = u[0].offsetWidth, p = u[0].offsetHeight;
        if ("top" == m && p != h && (k = !0, w.top = w.top + h - p), /bottom|top/.test(m)) {
            var q = 0;
            w.left < 0 && (q = w.left * -2, w.left = 0, u.offset(w), j = u[0].offsetWidth, p = u[0].offsetHeight), this.replaceArrow(q - g + j, j, "left")
        } else {
            this.replaceArrow(p - h, p, "top")
        }
        k && u.offset(w)
    }, c.prototype.replaceArrow = function (f, g, d) {
        this.arrow().css(d, f ? 50 * (1 - f / g) + "%" : "")
    }, c.prototype.setContent = function (f) {
        var g = this.tip(), d = f || this.getTitle();
        this.options.tipId && g.attr("id", this.options.tipId), this.options.tipClass && g.addClass(this.options.tipClass), g.find(".tooltip-inner")[this.options.html ? "html" : "text"](d), g.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function () {
        function g() {
            "in" != f.hoverState && d.detach()
        }

        var f = this, d = this.tip(), h = b.Event("hide.zui." + this.type);
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            return d.removeClass("in"), b.support.transition && this.$tip.hasClass("fade") ? d.one(b.support.transition.end, g).emulateTransitionEnd(150) : g(), this.$element.trigger("hidden.zui." + this.type), this
        }
    }, c.prototype.fixTitle = function () {
        var d = this.$element;
        (d.attr("title") || "string" != typeof d.attr("data-original-title")) && d.attr("data-original-title", d.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function () {
        var d = this.$element[0];
        return b.extend({}, "function" == typeof d.getBoundingClientRect ? d.getBoundingClientRect() : {
            width: d.offsetWidth,
            height: d.offsetHeight
        }, this.$element.offset())
    }, c.prototype.getCalculatedOffset = function (g, h, f, d) {
        return "bottom" == g ? {
            top: h.top + h.height,
            left: h.left + h.width / 2 - f / 2
        } : "top" == g ? {
            top: h.top - d,
            left: h.left + h.width / 2 - f / 2
        } : "left" == g ? {top: h.top + h.height / 2 - d / 2, left: h.left - f} : {
            top: h.top + h.height / 2 - d / 2,
            left: h.left + h.width
        }
    }, c.prototype.getTitle = function () {
        var f, g = this.$element, d = this.options;
        return f = g.attr("data-original-title") || ("function" == typeof d.title ? d.title.call(g[0]) : d.title)
    }, c.prototype.tip = function () {
        return this.$tip = this.$tip || b(this.options.template)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.validate = function () {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (f) {
        var d = f ? b(f.currentTarget)[this.type](this.getDelegateOptions()).data("zui." + this.type) : this;
        d.tip().hasClass("in") ? d.leave(d) : d.enter(d)
    }, c.prototype.destroy = function () {
        this.hide().$element.off("." + this.type).removeData("zui." + this.type)
    };
    var a = b.fn.tooltip;
    b.fn.tooltip = function (e, d) {
        return this.each(function () {
            var g = b(this), h = g.data("zui.tooltip"), f = "object" == typeof e && e;
            h || g.data("zui.tooltip", h = new c(this, f)), "string" == typeof e && h[e](d)
        })
    }, b.fn.tooltip.Constructor = c, b.fn.tooltip.noConflict = function () {
        return b.fn.tooltip = a, this
    }
}(window.jQuery), +function (b) {
    var c = function (d, f) {
        this.init("popover", d, f)
    };
    if (!b.fn.tooltip) {
        throw new Error("Popover requires tooltip.js")
    }
    c.DEFAULTS = b.extend({}, b.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = b.extend({}, b.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var g = this.tip(), h = this.getTarget();
        if (h) {
            return h.find(".arrow").length < 1 && g.addClass("no-arrow"), void g.html(h.html())
        }
        var f = this.getTitle(), d = this.getContent();
        g.find(".popover-title")[this.options.html ? "html" : "text"](f), g.find(".popover-content")[this.options.html ? "html" : "text"](d), g.removeClass("fade top bottom left right in"), this.options.tipId && g.attr("id", this.options.tipId), this.options.tipClass && g.addClass(this.options.tipClass), g.find(".popover-title").html() || g.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTarget() || this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var d = this.$element, f = this.options;
        return d.attr("data-content") || ("function" == typeof f.content ? f.content.call(d[0]) : f.content)
    }, c.prototype.getTarget = function () {
        var g = this.$element, f = this.options,
            d = g.attr("data-target") || ("function" == typeof f.target ? f.target.call(g[0]) : f.target);
        return !!d && ("$next" == d ? g.next(".popover") : b(d))
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, c.prototype.tip = function () {
        return this.$tip || (this.$tip = b(this.options.template)), this.$tip
    };
    var a = b.fn.popover;
    b.fn.popover = function (d) {
        return this.each(function () {
            var e = b(this), f = e.data("zui.popover"), g = "object" == typeof d && d;
            f || e.data("zui.popover", f = new c(this, g)), "string" == typeof d && f[d]()
        })
    }, b.fn.popover.Constructor = c, b.fn.popover.noConflict = function () {
        return b.fn.popover = a, this
    }
}(window.jQuery),
    /* ! TangBin: image.ready.js http://www.planeart.cn/?p=1121 */
    function (a) {
        a.zui.imgReady = function () {
            var d = [], f = null, c = function () {
                for (var g = 0; g < d.length; g++) {
                    d[g].end ? d.splice(g--, 1) : d[g]()
                }
                !d.length && b()
            }, b = function () {
                clearInterval(f), f = null
            };
            return function (x, j, k, y) {
                var e, m, u, w, q, g = new Image;
                return g.src = x, g.complete ? (j.call(g), void (k && k.call(g))) : (m = g.width, u = g.height, g.onerror = function () {
                    y && y.call(g), e.end = !0, g = g.onload = g.onerror = null
                }, e = function () {
                    w = g.width, q = g.height, (w !== m || q !== u || w * q > 1024) && (j.call(g), e.end = !0)
                }, e(), g.onload = function () {
                    !e.end && e(), k && k.call(g), g = g.onload = g.onerror = null
                }, void (e.end || (d.push(e), null === f && (f = setInterval(c, 40)))))
            }
        }()
    }(jQuery), function (d, f, c) {
    if (!d.fn.modalTrigger) {
        throw new Error("modal & modalTrigger requires for lightbox")
    }
    if (!d.zui.imgReady) {
        throw new Error("imgReady requires for lightbox")
    }
    var b = function (g, a) {
        this.$ = d(g), this.options = this.getOptions(a), this.init()
    };
    b.DEFAULTS = {modalTeamplate: '<div class="icon-spinner icon-spin loader"></div><div class="modal-dialog"><button class="close" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i></button><button class="controller prev"><i class="icon icon-chevron-left"></i></button><button class="controller next"><i class="icon icon-chevron-right"></i></button><img class="lightbox-img" src="{image}" alt="" data-dismiss="modal" /><div class="caption"><div class="content">{caption}<div></div></div>'}, b.prototype.getOptions = function (g) {
        var a = "image";
        return g = d.extend({}, b.DEFAULTS, this.$.data(), g), g[a] || (g[a] = this.$.attr("src") || this.$.attr("href") || this.$.find("img").attr("src"), this.$.data(a, g[a])), g
    }, b.prototype.init = function () {
        this.bindEvents()
    }, b.prototype.initGroups = function () {
        var a = this.$.data("groups");
        a || (a = d('[data-toggle="lightbox"][data-group="' + this.options.group + '"], [data-lightbox-group="' + this.options.group + '"]'), this.$.data("groups", a), a.each(function (g) {
            d(this).attr("data-group-index", g)
        })), this.groups = a, this.groupIndex = parseInt(this.$.data("group-index"))
    }, b.prototype.bindEvents = function () {
        var e = this.$, g = this, h = this.options;
        return !!h.image && void e.modalTrigger({
            type: "custom",
            name: "lightboxModal",
            position: "center",
            custom: function (k) {
                g.initGroups();
                var m = k.modal, n = g.groups, j = g.groupIndex;
                m.addClass("modal-lightbox").html(h.modalTeamplate.format(h)).toggleClass("lightbox-with-caption", "string" == typeof h.caption).removeClass("lightbox-full").data("group-index", j);
                var o = m.find(".modal-dialog"), p = d(f).width();
                d.zui.imgReady(h.image, function () {
                    o.css({width: c.min(p, this.width)}), p < this.width + 30 && m.addClass("lightbox-full"), k.ready(200)
                }), m.find(".prev").toggleClass("show", n.filter('[data-group-index="' + (j - 1) + '"]').length > 0), m.find(".next").toggleClass("show", n.filter('[data-group-index="' + (j + 1) + '"]').length > 0), m.find(".controller").click(function () {
                    var s = d(this), u = m.data("group-index") + (s.hasClass("prev") ? -1 : 1),
                        a = n.filter('[data-group-index="' + u + '"]');
                    if (a.length) {
                        var q = a.data("image"), r = a.data("caption");
                        m.addClass("modal-loading").data("group-index", u).toggleClass("lightbox-with-caption", "string" == typeof r).removeClass("lightbox-full"), m.find(".lightbox-img").attr("src", q), m.find(".caption > .content").text(r), p = d(f).width(), d.zui.imgReady(q, function () {
                            o.css({width: c.min(p, this.width)}), p < this.width + 30 && m.addClass("lightbox-full"), k.ready()
                        })
                    }
                    return m.find(".prev").toggleClass("show", n.filter('[data-group-index="' + (u - 1) + '"]').length > 0), m.find(".next").toggleClass("show", n.filter('[data-group-index="' + (u + 1) + '"]').length > 0), !1
                })
            }
        })
    }, d.fn.lightbox = function (g) {
        var a = "group" + (new Date).getTime();
        return this.each(function () {
            var h = d(this), j = "object" == typeof g && g;
            "object" == typeof j && j.group ? h.attr("data-lightbox-group", j.group) : h.data("group") ? h.attr("data-lightbox-group", h.data("group")) : h.attr("data-lightbox-group", a), h.data("group", h.data("lightbox-group"));
            var e = h.data("zui.lightbox");
            e || h.data("zui.lightbox", e = new b(this, j)), "string" == typeof g && e[g]()
        })
    }, d.fn.lightbox.Constructor = b, d(function () {
        d('[data-toggle="lightbox"]').lightbox()
    })
}(jQuery, window, Math),
    /* ! bootbox.js v4.4.0 http://bootboxjs.com/license.txt */
    function (a, b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.bootbox = b(a.jQuery)
    }(this, function t(C, y) {
        function F(a) {
            var c = w[G.locale];
            return c ? c[a] : w.en[a]
        }

        function k(e, d, c) {
            e.stopPropagation(), e.preventDefault();
            var f = C.isFunction(c) && c.call(d, e) === !1;
            f || d.modal("hide")
        }

        function q(c) {
            var d, a = 0;
            for (d in c) {
                a++
            }
            return a
        }

        function H(e, d) {
            var c = 0;
            C.each(e, function (a, f) {
                d(a, f, c++)
            })
        }

        function b(e) {
            var d, c;
            if ("object" != typeof e) {
                throw new Error("Please supply an object of options")
            }
            if (!e.message) {
                throw new Error("Please specify a message")
            }
            return e = C.extend({}, G, e), e.buttons || (e.buttons = {}), d = e.buttons, c = q(d), H(d, function (a, f, g) {
                if (C.isFunction(f) && (f = d[a] = {callback: f}), "object" !== C.type(f)) {
                    throw new Error("button with key " + a + " must be an object")
                }
                f.label || (f.label = a), f.className || (2 === c && ("ok" === a || "confirm" === a) || 1 === c ? f.className = "btn-primary" : f.className = "btn-default")
            }), e
        }

        function x(f, g) {
            var d = f.length, c = {};
            if (d < 1 || d > 2) {
                throw new Error("Invalid argument length")
            }
            return 2 === d || "string" == typeof f[0] ? (c[g[0]] = f[0], c[g[1]] = f[1]) : c = f[0], c
        }

        function D(e, d, c) {
            return C.extend(!0, {}, e, x(d, c))
        }

        function E(f, g, d, c) {
            var h = {className: "bootbox-" + f, buttons: z.apply(null, g)};
            return j(D(h, c, d), g)
        }

        function z() {
            for (var c = {}, f = 0, a = arguments.length; f < a; f++) {
                var g = arguments[f], h = g.toLowerCase(), d = g.toUpperCase();
                c[h] = {label: F(d)}
            }
            return c
        }

        function j(d, f) {
            var c = {};
            return H(f, function (a, g) {
                c[g] = !0
            }), H(d.buttons, function (a) {
                if (c[a] === y) {
                    throw new Error("button key " + a + " is not allowed (options are " + f.join("\n") + ")")
                }
            }), d
        }

        var B = {
            dialog: "<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",
            header: "<div class='modal-header'><h4 class='modal-title'></h4></div>",
            footer: "<div class='modal-footer'></div>",
            closeButton: "<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",
            form: "<form class='bootbox-form'></form>",
            inputs: {
                text: "<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",
                textarea: "<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",
                email: "<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",
                select: "<select class='bootbox-input bootbox-input-select form-control'></select>",
                checkbox: "<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",
                date: "<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",
                time: "<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",
                number: "<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",
                password: "<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"
            }
        }, G = {
            locale: C.zui && C.zui.clientLang ? C.zui.clientLang() : "zh_cn",
            backdrop: "static",
            animate: !0,
            className: null,
            closeButton: !0,
            show: !0,
            container: "body"
        }, A = {};
        A.alert = function () {
            var a;
            if (a = E("alert", ["ok"], ["message", "callback"], arguments), a.callback && !C.isFunction(a.callback)) {
                throw new Error("alert requires callback property to be a function when provided")
            }
            return a.buttons.ok.callback = a.onEscape = function () {
                return !C.isFunction(a.callback) || a.callback.call(this)
            }, A.dialog(a)
        }, A.confirm = function () {
            var a;
            if (a = E("confirm", ["confirm", "cancel"], ["message", "callback"], arguments), a.buttons.cancel.callback = a.onEscape = function () {
                    return a.callback.call(this, !1)
                }, a.buttons.confirm.callback = function () {
                    return a.callback.call(this, !0)
                }, !C.isFunction(a.callback)) {
                throw new Error("confirm requires a callback")
            }
            return A.dialog(a)
        }, A.prompt = function () {
            var J, s, e, f, d, h, p;
            if (f = C(B.form), s = {
                    className: "bootbox-prompt",
                    buttons: z("cancel", "confirm"),
                    value: "",
                    inputType: "text"
                }, J = j(D(s, arguments, ["title", "callback"]), ["confirm", "cancel"]), h = J.show === y || J.show, J.message = f, J.buttons.cancel.callback = J.onEscape = function () {
                    return J.callback.call(this, null)
                }, J.buttons.confirm.callback = function () {
                    var l;
                    switch (J.inputType) {
                        case"text":
                        case"textarea":
                        case"email":
                        case"select":
                        case"date":
                        case"time":
                        case"number":
                        case"password":
                            l = d.val();
                            break;
                        case"checkbox":
                            var c = d.find("input:checked");
                            l = [], H(c, function (n, m) {
                                l.push(C(m).val())
                            })
                    }
                    return J.callback.call(this, l)
                }, J.show = !1, !J.title) {
                throw new Error("prompt requires a title")
            }
            if (!C.isFunction(J.callback)) {
                throw new Error("prompt requires a callback")
            }
            if (!B.inputs[J.inputType]) {
                throw new Error("invalid prompt type")
            }
            switch (d = C(B.inputs[J.inputType]), J.inputType) {
                case"text":
                case"textarea":
                case"email":
                case"date":
                case"time":
                case"number":
                case"password":
                    d.val(J.value);
                    break;
                case"select":
                    var I = {};
                    if (p = J.inputOptions || [], !C.isArray(p)) {
                        throw new Error("Please pass an array of input options")
                    }
                    if (!p.length) {
                        throw new Error("prompt with select requires options")
                    }
                    H(p, function (l, c) {
                        var m = d;
                        if (c.value === y || c.text === y) {
                            throw new Error("given options in wrong format")
                        }
                        c.group && (I[c.group] || (I[c.group] = C("<optgroup/>").attr("label", c.group)), m = I[c.group]), m.append("<option value='" + c.value + "'>" + c.text + "</option>")
                    }), H(I, function (a, c) {
                        d.append(c)
                    }), d.val(J.value);
                    break;
                case"checkbox":
                    var g = C.isArray(J.value) ? J.value : [J.value];
                    if (p = J.inputOptions || [], !p.length) {
                        throw new Error("prompt with checkbox requires options")
                    }
                    if (!p[0].value || !p[0].text) {
                        throw new Error("given options in wrong format")
                    }
                    d = C("<div/>"), H(p, function (l, c) {
                        var m = C(B.inputs[J.inputType]);
                        m.find("input").attr("value", c.value), m.find("label").append(c.text), H(g, function (a, n) {
                            n === c.value && m.find("input").prop("checked", !0)
                        }), d.append(m)
                    })
            }
            return J.placeholder && d.attr("placeholder", J.placeholder), J.pattern && d.attr("pattern", J.pattern), J.maxlength && d.attr("maxlength", J.maxlength), f.append(d), f.on("submit", function (a) {
                a.preventDefault(), a.stopPropagation(), e.find(".btn-primary").click()
            }), e = A.dialog(J), e.off("shown.zui.modal"), e.on("shown.zui.modal", function () {
                d.focus()
            }), h === !0 && e.modal("show"), e
        }, A.dialog = function (g) {
            g = b(g);
            var f = C(B.dialog), u = f.find(".modal-dialog"), e = f.find(".modal-body"), r = g.buttons, s = "",
                m = {onEscape: g.onEscape};
            if (C.fn.modal === y) {
                throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.")
            }
            if (H(r, function (a, c) {
                    s += "<button data-bb-handler='" + a + "' type='button' class='btn " + c.className + "'>" + c.label + "</button>", m[a] = c.callback
                }), e.find(".bootbox-body").html(g.message), g.animate === !0 && f.addClass("fade"), g.className && f.addClass(g.className), "large" === g.size ? u.addClass("modal-lg") : "small" === g.size && u.addClass("modal-sm"), g.title && e.before(B.header), g.closeButton) {
                var o = C(B.closeButton);
                g.title ? f.find(".modal-header").prepend(o) : o.css("margin-top", "-10px").prependTo(e)
            }
            return g.title && f.find(".modal-title").html(g.title), s.length && (e.after(B.footer), f.find(".modal-footer").html(s)), f.on("hidden.zui.modal", function (a) {
                a.target === this && f.remove()
            }), f.on("shown.zui.modal", function () {
                f.find(".btn-primary:first").focus()
            }), "static" !== g.backdrop && f.on("click.dismiss.zui.modal", function (a) {
                f.children(".modal-backdrop").length && (a.currentTarget = f.children(".modal-backdrop").get(0)), a.target === a.currentTarget && f.trigger("escape.close.bb")
            }), f.on("escape.close.bb", function (a) {
                m.onEscape && k(a, f, m.onEscape)
            }), f.on("click", ".modal-footer button", function (c) {
                var a = C(this).data("bb-handler");
                k(c, f, m[a])
            }), f.on("click", ".bootbox-close-button", function (a) {
                k(a, f, m.onEscape)
            }), f.on("keyup", function (a) {
                27 === a.which && f.trigger("escape.close.bb")
            }), C(g.container).append(f), f.modal({
                backdrop: !!g.backdrop && "static",
                keyboard: !1,
                show: !1
            }), g.show && f.modal("show"), f
        }, A.setDefaults = function () {
            var a = {};
            2 === arguments.length ? a[arguments[0]] = arguments[1] : a = arguments[0], C.extend(G, a)
        }, A.hideAll = function () {
            return C(".bootbox").modal("hide"), A
        };
        var w = {
            en: {OK: "OK", CANCEL: "Cancel", CONFIRM: "OK"},
            zh_cn: {OK: "确认", CANCEL: "取消", CONFIRM: "确认"},
            zh_tw: {OK: "確認", CANCEL: "取消", CONFIRM: "確認"}
        };
        return A.addLocale = function (c, a) {
            return C.each(["OK", "CANCEL", "CONFIRM"], function (d, f) {
                if (!a[f]) {
                    throw new Error("Please supply a translation for '" + f + "'")
                }
            }), w[c] = {OK: a.OK, CANCEL: a.CANCEL, CONFIRM: a.CONFIRM}, A
        }, A.removeLocale = function (a) {
            return delete w[a], A
        }, A.setLocale = function (a) {
            return A.setDefaults("locale", a)
        }, A.init = function (a) {
            return t(a || C)
        }, A
    }), function (x, p, k) {
    var w = 0,
        f = '<div class="messager messager-{type} {placement}" style="display: none"><div class="messager-content"></div><div class="messager-actions"></div></div>',
        g = {type: "default", placement: "top", time: 4000, parent: "body", icon: null, close: !0, fade: !0, scale: !0},
        y = {}, b = function (A, o) {
            x.isPlainObject(A) && (o = A, A = o.message);
            var a = this;
            o = a.options = x.extend({}, g, o), a.id = o.id || w++;
            var B = y[a.id];
            B && B.destroy(), y[a.id] = a, a.message = (o.icon ? '<i class="icon-' + o.icon + ' icon"></i> ' : "") + A, a.$ = x(f.format(o)).toggleClass("fade", o.fade).toggleClass("scale", o.scale).attr("id", "messager-" + a.id), o.cssClass && a.$.addClass(o.cssClass);
            var C = !1, n = a.$.find(".messager-actions"), z = function (d) {
                var c = x('<button type="button" class="action action-' + d.name + '"/>');
                "close" === d.name && c.addClass("close"), d.html !== k && c.html(d.html), d.icon !== k && c.append('<i class="action-icon icon-' + d.icon + '"/>'), d.text !== k && c.append('<span class="action-text">' + d.text + "</span>"), d.tooltip !== k && c.attr("title", d.tooltip).tooltip(), c.data("action", d), n.append(c)
            };
            o.actions && x.each(o.actions, function (c, d) {
                d.name === k && (d.name = c), "close" == d.name && (C = !0), z(d)
            }), !C && o.close && z({name: "close", html: "&times;"}), a.$.on("click", ".action", function (h) {
                var d, c = x(this).data("action");
                o.onAction && (d = o.onAction.call(this, c.name, c, a), d === !1) || x.isFunction(c.action) && (d = c.action.call(this, a), d === !1) || (a.hide(), h.stopPropagation())
            }), a.$.on("click", function (c) {
                if (o.onAction) {
                    var d = o.onAction.call(this, "content", null, a);
                    d === !0 && a.hide()
                }
            });
            var s = a.$.find(".messager-content").html(a.message);
            o.contentClass && s.addClass(o.contentClass), a.$.data("zui.messager", a), o.show && a.message !== k && a.show()
        };
    b.prototype.update = function (h, d) {
        var c = this, l = c.options;
        c.$.removeClass("messager-" + l.type), d && (l = x.extend(l, d)), c.$.addClass("messager-" + l.type), h && (c.message = (l.icon ? '<i class="icon-' + l.icon + ' icon"></i> ' : "") + h, c.$.find(".messager-content").html(c.message))
    }, b.prototype.show = function (F, z) {
        var A = this, G = this.options;
        if (x.isFunction(F)) {
            var e = z;
            z = F, e !== k && (F = e)
        }
        if (A.isShow) {
            return void A.hide(function () {
                A.show(F, z)
            })
        }
        A.hiding && (clearTimeout(A.hiding), A.hiding = null), A.update(F);
        var B = G.placement, D = x(G.parent), E = D.children(".messagers-holder." + B);
        if (E.length || (E = x("<div/>").attr("class", "messagers-holder " + B).appendTo(D)), E.append(A.$), "center" === B) {
            var C = x(p).height() - E.height();
            E.css("top", Math.max(-C, C / 2))
        }
        return A.$.show().addClass("in"), G.time && (A.hiding = setTimeout(function () {
            A.hide()
        }, G.time)), A.isShow = !0, z && z(), A
    }, b.prototype.hide = function (h, l) {
        h === !0 && (l = !0, h = null);
        var d = this;
        if (d.$.hasClass("in")) {
            d.$.removeClass("in");
            var c = function () {
                var a = d.$.parent();
                d.$.detach(), a.children().length || a.remove(), h && h(!0)
            };
            l ? c() : setTimeout(c, 200)
        } else {
            h && h(!1)
        }
        d.isShow = !1
    }, b.prototype.destroy = function () {
        var a = this;
        a.hide(function () {
            a.$.remove(), a.$ = null
        }, !0), delete y[a.id]
    }, b.all = y;
    var j = function () {
        x(".messager").each(function () {
            var a = x(this).data("zui.messager");
            a && a.hide && a.hide(!0)
        })
    }, q = function (d, c) {
        "string" == typeof c && (c = {type: c}), c = x.extend({}, c), c.id === k && j();
        var h = y[c.id] || new b(d, c);
        return h.show(), h
    }, u = function (a) {
        return "string" == typeof a ? {placement: a} : a
    }, m = {show: q, hide: j};
    x.each({
        primary: 0,
        success: "ok-sign",
        info: "info-sign",
        warning: "warning-sign",
        danger: "exclamation-sign",
        important: 0,
        special: 0
    }, function (c, a) {
        m[c] = function (d, e) {
            return q(d, x.extend({type: c, icon: a || null}, u(e)))
        }
    }), x.zui({Messager: b, showMessager: q, messager: m})
}(jQuery, window, void 0), function (z, N, J, R) {
    function F(d) {
        if (d = d.toLowerCase(), d && P.test(d)) {
            var f;
            if (4 === d.length) {
                var c = "#";
                for (f = 1; f < 4; f += 1) {
                    c += d.slice(f, f + 1).concat(d.slice(f, f + 1))
                }
                d = c
            }
            var b = [];
            for (f = 1; f < 7; f += 2) {
                b.push(j("0x" + d.slice(f, f + 2)))
            }
            return {r: b[0], g: b[1], b: b[2], a: 1}
        }
        throw new Error("Wrong hex string! (hex: " + d + ")")
    }

    function G(a) {
        return typeof a === x && ("transparent" === a.toLowerCase() || H[a.toLowerCase()] || P.test(z.trim(a.toLowerCase())))
    }

    function A(p) {
        function h(a) {
            return a = a < 0 ? a + 1 : a > 1 ? a - 1 : a, 6 * a < 1 ? b + (u - b) * a * 6 : 2 * a < 1 ? u : 3 * a < 2 ? b + (u - b) * (2 / 3 - a) * 6 : b
        }

        var g = p.h, m = p.s, d = p.l, f = p.a;
        g = O(g) % E / E, m = I(O(m)), d = I(O(d)), f = I(O(f));
        var u = d <= 0.5 ? d * (m + 1) : d + m - d * m, b = 2 * d - u,
            l = {r: h(g + 1 / 3) * K, g: h(g) * K, b: h(g - 1 / 3) * K, a: f};
        return l
    }

    function D(d, c, b) {
        return q(b) && (b = 0), q(c) && (c = K), N.min(N.max(d, b), c)
    }

    function I(a, b) {
        return D(a, b)
    }

    function O(a) {
        return "number" == typeof a ? a : parseFloat(a)
    }

    var P = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/, K = 255, E = 360, M = 100, x = "string", L = "object", H = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    }, q = function (a) {
        return a === R
    }, Q = function (a) {
        return !q(a)
    }, j = function (a) {
        return parseInt(a)
    }, k = function (a) {
        return j(I(O(a), K))
    }, B = function (f, h, d, b) {
        var m = this;
        if (m.r = m.g = m.b = 0, m.a = 1, Q(b) && (m.a = I(O(b), 1)), Q(f) && Q(h) && Q(d)) {
            m.r = k(f), m.g = k(h), m.b = k(d)
        } else {
            if (Q(f)) {
                var g = typeof f;
                if (g == x) {
                    f = f.toLowerCase(), "transparent" === f ? m.a = 0 : H[f] ? this.rgb(F(H[f])) : m.rgb(F(f))
                } else {
                    if ("number" == g && q(h)) {
                        m.r = m.g = m.b = k(f)
                    } else {
                        if (g == L && Q(f.r)) {
                            m.r = k(f.r), Q(f.g) && (m.g = k(f.g)), Q(f.b) && (m.b = k(f.b)), Q(f.a) && (m.a = I(O(f.a), 1))
                        } else {
                            if (g == L && Q(f.h)) {
                                var l = {h: I(O(f.h), E), s: 1, l: 1, a: 1};
                                Q(f.s) && (l.s = I(O(f.s), 1)), Q(f.l) && (l.l = I(O(f.l), 1)), Q(f.a) && (l.a = I(O(f.a), 1)), m.rgb(A(l))
                            }
                        }
                    }
                }
            }
        }
    };
    B.prototype.rgb = function (b) {
        var c = this;
        if (Q(b)) {
            if (typeof b == L) {
                Q(b.r) && (c.r = k(b.r)), Q(b.g) && (c.g = k(b.g)), Q(b.b) && (c.b = k(b.b)), Q(b.a) && (c.a = I(O(b.a), 1))
            } else {
                var a = j(O(b));
                c.r = a, c.g = a, c.b = a
            }
            return c
        }
        return {r: c.r, g: c.g, b: c.b, a: c.a}
    }, B.prototype.hue = function (b) {
        var c = this, a = c.toHsl();
        return q(b) ? a.h : (a.h = I(O(b), E), c.rgb(A(a)), c)
    }, B.prototype.darken = function (b) {
        var c = this, a = c.toHsl();
        return a.l -= b / M, a.l = I(a.l, 1), c.rgb(A(a)), c
    }, B.prototype.clone = function () {
        var a = this;
        return new B(a.r, a.g, a.b, a.a)
    }, B.prototype.lighten = function (a) {
        return this.darken(-a)
    }, B.prototype.fade = function (a) {
        return this.a = I(a / M, 1), this
    }, B.prototype.spin = function (b) {
        var c = this.toHsl(), a = (c.h + b) % E;
        return c.h = a < 0 ? E + a : a, this.rgb(A(c))
    }, B.prototype.toHsl = function () {
        var C, m, y = this, e = y.r / K, g = y.g / K, S = y.b / K, b = y.a, h = N.max(e, g, S), u = N.min(e, g, S),
            w = (h + u) / 2, p = h - u;
        if (h === u) {
            C = m = 0
        } else {
            switch (m = w > 0.5 ? p / (2 - h - u) : p / (h + u), h) {
                case e:
                    C = (g - S) / p + (g < S ? 6 : 0);
                    break;
                case g:
                    C = (S - e) / p + 2;
                    break;
                case S:
                    C = (e - g) / p + 4
            }
            C /= 6
        }
        return {h: C * E, s: m, l: w, a: b}
    }, B.prototype.luma = function () {
        var d = this.r / K, c = this.g / K, b = this.b / K;
        return d = d <= 0.03928 ? d / 12.92 : N.pow((d + 0.055) / 1.055, 2.4), c = c <= 0.03928 ? c / 12.92 : N.pow((c + 0.055) / 1.055, 2.4), b = b <= 0.03928 ? b / 12.92 : N.pow((b + 0.055) / 1.055, 2.4), 0.2126 * d + 0.7152 * c + 0.0722 * b
    }, B.prototype.saturate = function (a) {
        var b = this.toHsl();
        return b.s += a / M, b.s = I(b.s), this.rgb(A(b))
    }, B.prototype.desaturate = function (a) {
        return this.saturate(-a)
    }, B.prototype.contrast = function (d, f, c) {
        if (f = q(f) ? new B(K, K, K, 1) : new B(f), d = q(d) ? new B(0, 0, 0, 1) : new B(d), d.luma() > f.luma()) {
            var b = f;
            f = d, d = b
        }
        return this.a < 0.5 ? d : (c = q(c) ? 0.43 : O(c), this.luma() < c ? f : d)
    }, B.prototype.hexStr = function () {
        var b = this.r.toString(16), c = this.g.toString(16), a = this.b.toString(16);
        return 1 == b.length && (b = "0" + b), 1 == c.length && (c = "0" + c), 1 == a.length && (a = "0" + a), "#" + b + c + a
    }, B.prototype.toCssStr = function () {
        var a = this;
        return a.a > 0 ? a.a < 1 ? "rgba(" + a.r + "," + a.g + "," + a.b + "," + a.a + ")" : a.hexStr() : "transparent"
    }, B.isColor = G, B.names = H, B.get = function (a) {
        return new B(a)
    }, z.zui({Color: B})
}(jQuery, Math, window, void 0),
    /*
 * ! ZUI: Generated from less code - v1.7.0 - 2017-10-11 http://zui.sexy GitHub:
 * https://github.com/easysoft/zui.git Copyright (c) 2017 cnezsoft.com; Licensed
 * MIT
 */
    function (d) {
        var f = 0, c = ["primary", "red", "yellow", "green", "blue", "purple", "brown", "dark"], b = {
            primary: "#3280fc",
            secondary: "#145ccd",
            pale: "#ebf2f9",
            fore: "#353535",
            back: "#fff",
            grayDarker: "#222222",
            grayDark: "#333333",
            gray: "#808080",
            grayLight: "#dddddd",
            grayLighter: "#e5e5e5",
            grayPale: "#f1f1f1",
            white: "#fff",
            black: "#000",
            red: "#ea644a",
            yellow: "#f1a325",
            green: "#38b03f",
            blue: "#03b8cf",
            purple: "#8666b8",
            brown: "#bd7b46",
            greenPale: "#ddf4df",
            yellowPale: "#fff0d5",
            redPale: "#ffe5e0",
            bluePale: "#ddf3f5",
            brownPale: "#f7ebe1",
            purplePale: "#f5eeff",
            light: "#fff",
            dark: "#353535",
            success: "#38b03f",
            warning: "#f1a325",
            danger: "#ea644a",
            info: "#03b8cf",
            important: "#bd7b46",
            special: "#8666b8",
            successPale: "#ddf4df",
            warningPale: "#fff0d5",
            dangerPale: "#ffe5e0",
            infoPale: "#ddf3f5",
            importantPale: "#f7ebe1",
            specialPale: "#f5eeff"
        };
        b.get = function (a) {
            "undefined" != typeof a && "random" !== a || (a = c[f++ % c.length]);
            var e = b[a] ? b[a] : a;
            return d.zui.Color ? new d.zui.Color(e) : e
        }, d.zui({colorset: b}), d.zui.Color && d.extend(d.zui.Color, b)
    }(jQuery), +function (d, g, c) {
    if (!d.fn.droppable) {
        return void console.error("Sortable requires droppable.js")
    }
    var b = "zui.sortable", h = {selector: "li,div", dragCssClass: "invisible", sortingClass: "sortable-sorting"},
        j = "order", f = function (m, l) {
            var k = this;
            k.$ = d(m), k.options = d.extend({}, h, k.$.data(), l), k.init()
        };
    f.DEFAULTS = h, f.NAME = b, f.prototype.init = function () {
        var u = this, n = u.$, m = u.options, x = m.selector, p = m.sortingClass, q = m.dragCssClass, k = m.reverse,
            w = function (l) {
                l = l || u.getItems(1);
                var e = [];
                l.each(function () {
                    var a = d(this).data(j);
                    "number" == typeof a && e.push(a)
                }), e.sort(function (a, o) {
                    return a - o
                });
                for (var r = l.length; e.length < r;) {
                    e.push(e.length ? e[e.length - 1] + 1 : 0)
                }
                k && e.reverse(), l.each(function (a) {
                    d(this).data(j, e[a]).attr("data-" + j, e[a])
                })
            };
        w(), n.droppable({
            handle: m.trigger,
            target: x,
            selector: x,
            container: n,
            always: m.always,
            flex: !0,
            lazy: m.lazy,
            canMoveHere: m.canMoveHere,
            nested: m.nested,
            before: m.before,
            mouseButton: m.mouseButton,
            start: function (a) {
                q && a.element.addClass(q), u.trigger("start", a)
            },
            drag: function (l) {
                if (n.addClass(p), l.isIn) {
                    var e = l.element, z = l.target, y = e.data(j), A = z.data(j);
                    if (y == A) {
                        return
                    }
                    y > A ? z[k ? "after" : "before"](e) : z[k ? "before" : "after"](e);
                    var s = u.getItems(1);
                    w(s), u.trigger(j, {list: s, element: e})
                }
            },
            finish: function (a) {
                q && a.element && a.element.removeClass(q), n.removeClass(p), u.trigger("finish", {
                    list: u.getItems(1),
                    element: a.element
                })
            }
        })
    }, f.prototype.destroy = function () {
        this.$.droppable("destroy"), this.$.data(b, null)
    }, f.prototype.reset = function () {
        this.destroy(), this.init()
    }, f.prototype.getItems = function (k) {
        var a = this.$.children(this.options.selector).not(".drag-shadow");
        return k ? a : a.map(function () {
            var l = d(this);
            return {item: l, order: l.data("order")}
        })
    }, f.prototype.trigger = function (k, a) {
        return d.zui.callEvent(this.options[k], a, this)
    }, d.fn.sortable = function (a) {
        return this.each(function () {
            var e = d(this), k = e.data(b), l = "object" == typeof a && a;
            k ? "object" == typeof a && k.reset() : e.data(b, k = new f(this, l)), "string" == typeof a && k[a]()
        })
    }, d.fn.sortable.Constructor = f
}(jQuery, window, document), function (d, g) {
    var c, b, h = "localStorage", j = "page_" + d.location.pathname + d.location.search, f = function () {
        this.slience = !0;
        try {
            h in d && d[h] && d[h].setItem && (this.enable = !0, c = d[h])
        } catch (a) {
        }
        this.enable || (b = {}, c = {
            getLength: function () {
                var e = 0;
                return g.each(b, function () {
                    e++
                }), e
            }, key: function (k) {
                var e, l = 0;
                return g.each(b, function (m) {
                    return l === k ? (e = m, !1) : void l++
                }), e
            }, removeItem: function (e) {
                delete b[e]
            }, getItem: function (e) {
                return b[e]
            }, setItem: function (k, l) {
                b[k] = l
            }, clear: function () {
                b = {}
            }
        }), this.storage = c, this.page = this.get(j, {})
    };
    f.prototype.pageSave = function () {
        if (g.isEmptyObject(this.page)) {
            this.remove(j)
        } else {
            var l, k = [];
            for (l in this.page) {
                var e = this.page[l];
                null === e && k.push(l)
            }
            for (l = k.length - 1; l >= 0; l--) {
                delete this.page[k[l]]
            }
            this.set(j, this.page)
        }
    }, f.prototype.pageRemove = function (a) {
        "undefined" != typeof this.page[a] && (this.page[a] = null, this.pageSave())
    }, f.prototype.pageClear = function () {
        this.page = {}, this.pageSave()
    }, f.prototype.pageGet = function (k, l) {
        var a = this.page[k];
        return void 0 === l || null !== a && void 0 !== a ? a : l
    }, f.prototype.pageSet = function (e, a) {
        g.isPlainObject(e) ? g.extend(!0, this.page, e) : this.page[this.serialize(e)] = a, this.pageSave()
    }, f.prototype.check = function () {
        if (!this.enable && !this.slience) {
            throw new Error("Browser not support localStorage or enable status been set true.")
        }
        return this.enable
    }, f.prototype.length = function () {
        return this.check() ? c.getLength ? c.getLength() : c.length : 0
    }, f.prototype.removeItem = function (a) {
        return c.removeItem(a), this
    }, f.prototype.remove = function (a) {
        return this.removeItem(a)
    }, f.prototype.getItem = function (a) {
        return c.getItem(a)
    }, f.prototype.get = function (k, l) {
        var a = this.deserialize(this.getItem(k));
        return "undefined" != typeof a && null !== a || "undefined" == typeof l ? a : l
    }, f.prototype.key = function (a) {
        return c.key(a)
    }, f.prototype.setItem = function (a, k) {
        return c.setItem(a, k), this
    }, f.prototype.set = function (a, k) {
        return void 0 === k ? this.remove(a) : (this.setItem(a, this.serialize(k)), this)
    }, f.prototype.clear = function () {
        return c.clear(), this
    }, f.prototype.forEach = function (l) {
        for (var m = this.length(), k = m - 1; k >= 0; k--) {
            var n = c.key(k);
            l(n, this.get(n))
        }
        return this
    }, f.prototype.getAll = function () {
        var a = {};
        return this.forEach(function (l, k) {
            a[l] = k
        }), a
    }, f.prototype.serialize = function (a) {
        return "string" == typeof a ? a : JSON.stringify(a)
    }, f.prototype.deserialize = function (a) {
        if ("string" == typeof a) {
            try {
                return JSON.parse(a)
            } catch (k) {
                return a || void 0
            }
        }
    }, g.zui({store: new f})
}(window, jQuery), function (d) {
    var f = "zui.datatable", c = d.zui.store, b = function (g, e) {
        this.name = f, this.$ = d(g), this.isTable = "TABLE" === this.$[0].tagName, this.firstShow = !0, this.isTable ? (this.$table = this.$, this.id = "datatable-" + (this.$.attr("id") || d.zui.uuid())) : (this.$datatable = this.$.addClass("datatable"), this.$.attr("id") ? this.id = this.$.attr("id") : (this.id = "datatable-" + d.zui.uuid(), this.$.attr("id", this.id))), this.getOptions(e), this.load(), this.callEvent("ready")
    };
    b.DEFAULTS = {
        checkable: !1,
        checkByClickRow: !0,
        checkedClass: "active",
        checkboxName: null,
        selectable: !0,
        sortable: !1,
        storage: !0,
        fixedHeader: !1,
        fixedHeaderOffset: 0,
        fixedLeftWidth: "30%",
        fixedRightWidth: "30%",
        flexHeadDrag: !0,
        scrollPos: "in",
        rowHover: !0,
        colHover: !0,
        hoverClass: "hover",
        colHoverClass: "col-hover",
        fixCellHeight: !0,
        mergeRows: !1,
        minColWidth: 20,
        minFixedLeftWidth: 200,
        minFixedRightWidth: 200,
        minFlexAreaWidth: 200
    }, b.prototype.getOptions = function (g) {
        var a = this.$;
        g = d.extend({}, b.DEFAULTS, this.$.data(), g), g.tableClass = g.tableClass || "", g.tableClass = " " + g.tableClass + " table-datatable", d.each(["bordered", "condensed", "striped", "condensed", "fixed"], function (h, e) {
            e = "table-" + e, a.hasClass(e) && (g.tableClass += " " + e)
        }), (a.hasClass("table-hover") || g.rowHover) && (g.tableClass += " table-hover"), g.checkable && d.fn.selectable || (g.selectable = !1), this.options = g
    }, b.prototype.load = function (w) {
        var C, k = this.options;
        if (d.isFunction(w)) {
            w = w(this.data, this), w.keepSort = !0
        } else {
            if (d.isPlainObject(w)) {
                this.data = w
            } else {
                if ("string" == typeof w) {
                    var m = d(w);
                    m.length && (this.$table = m.first(), this.$table.data(f, this), this.isTable = !0), w = null
                } else {
                    w = k.data
                }
            }
        }
        if (!w) {
            if (!this.isTable) {
                throw new Error("No data avaliable!")
            }
            w = {cols: [], rows: []}, C = w.cols;
            var E, e, q, A, B, x, j = w.rows, z = this.$table;
            z.children("thead").children("tr:first").children("th").each(function () {
                e = d(this), C.push(d.extend({
                    text: e.html(),
                    flex: e.hasClass("flex-col"),
                    width: "auto",
                    cssClass: e.attr("class"),
                    css: e.attr("style"),
                    type: "string",
                    ignore: e.hasClass("ignore"),
                    sort: !e.hasClass("sort-disabled"),
                    mergeRows: e.attr("merge-rows")
                }, e.data()))
            }), z.children("tbody").children("tr").each(function () {
                q = d(this), B = d.extend({
                    data: [],
                    checked: !1,
                    cssClass: q.attr("class"),
                    css: q.attr("style"),
                    id: q.attr("id")
                }, q.data()), q.children("td").each(function () {
                    if (A = d(this), x = A.attr("colspan") || 1, B.data.push(d.extend({
                            cssClass: A.attr("class"),
                            css: A.attr("style"),
                            text: A.html(),
                            colSpan: x,
                            title: A.attr("title")
                        }, A.data())), x > 1) {
                        for (E = 1; E < x; E++) {
                            B.data.push({empty: !0})
                        }
                    }
                }), j.push(B)
            });
            var D = z.children("tfoot");
            D.length && (w.footer = d('<table class="table' + k.tableClass + '"></table>').append(D))
        }
        w.flexStart = -1, w.flexEnd = -1, C = w.cols, w.colsLength = C.length;
        for (var E = 0; E < w.colsLength; ++E) {
            var y = C[E];
            y.flex && (w.flexStart < 0 && (w.flexStart = E), w.flexEnd = E)
        }
        0 === w.flexStart && w.flexEnd === w.colsLength && (w.flexStart = -1, w.flexEnd = -1), w.flexArea = w.flexStart >= 0, w.fixedRight = w.flexEnd >= 0 && w.flexEnd < w.colsLength - 1, w.fixedLeft = w.flexStart > 0, w.flexStart < 0 && w.flexEnd < 0 && (w.fixedLeft = !0, w.flexStart = w.colsLength, w.flexEnd = w.colsLength), this.data = w, this.callEvent("afterLoad", {data: w}), this.render()
    }, b.prototype.render = function () {
        var ac, aj, W, X, Q = this,
            U = Q.$datatable || (Q.isTable ? d('<div class="datatable" id="' + Q.id + '"/>') : Q.$datatable),
            Z = Q.options, ag = Q.data, ah = Q.data.cols, ad = Q.data.rows, V = Z.checkable,
            af = '<div class="datatable-rows-span datatable-span"><div class="datatable-wrapper"><table class="table"></table></div></div>',
            M = '<div class="datatable-head-span datatable-span"><div class="datatable-wrapper"><table class="table"><thead></thead></table></div></div>';
        U.children(".datatable-head, .datatable-rows, .scroll-wrapper").remove(), U.toggleClass("sortable", Z.sortable);
        var ae, Y, K, ai = d('<div class="datatable-head"/>');
        for (ac = d('<tr class="datatable-row datatable-row-left"/>'), W = d('<tr class="datatable-row datatable-row-right"/>'), X = d('<tr class="datatable-row datatable-row-flex"/>'), aj = 0; aj < ah.length; aj++) {
            K = ah[aj], ae = aj < ag.flexStart ? ac : aj >= ag.flexStart && aj <= ag.flexEnd ? X : W, 0 === aj && V && ae.append('<th data-index="check" class="check-all check-btn"><i class="icon-check-empty"></i></th>'), K.ignore || (Y = d('<th class="datatable-head-cell"/>'), Y.toggleClass("sort-down", "down" === K.sort).toggleClass("sort-up", "up" === K.sort).toggleClass("sort-disabled", K.sort === !1), Y.addClass(K.cssClass).addClass(K.colClass).html(K.text).attr({
                "data-index": aj,
                "data-type": K.type,
                style: K.css
            }).css("width", K.width), ae.append(Y))
        }
        var H;
        ag.fixedLeft && (H = d(M), H.addClass("fixed-left").find("table").addClass(Z.tableClass).find("thead").append(ac), ai.append(H)), ag.flexArea && (H = d(M), H.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(Z.tableClass).find("thead").append(X), ai.append(H)), ag.fixedRight && (H = d(M), H.addClass("fixed-right").find("table").addClass(Z.tableClass).find("thead").append(W), ai.append(H)), U.append(ai);
        var J, R, I, A, aa, e, N, G, P = d('<div class="datatable-rows">'), q = ad.length;
        ac = d("<tbody/>"), W = d("<tbody/>"), X = d("<tbody/>");
        for (var F = 0; F < q; ++F) {
            for (e = ad[F], "undefined" == typeof e.id && (e.id = F), e.index = F, J = d("<tr/>"), J.addClass(e.cssClass).toggleClass(Z.checkedClass, !!e.checked).attr({
                "data-index": F,
                "data-id": e.id
            }), R = J.clone(), I = J.clone(), G = e.data.length, aj = 0; aj < G; ++aj) {
                N = e.data[aj], aj > 0 && N.empty || (ae = aj < ag.flexStart ? J : aj >= ag.flexStart && aj <= ag.flexEnd ? R : I, 0 === aj && V && (aa = d('<td data-index="check" class="check-row check-btn"><i class="icon-check-empty"></i></td>'), Z.checkboxName && aa.append('<input class="hide" type="checkbox" name="' + Z.checkboxName + '" value="' + e.id + '">'), ae.append(aa)), ah[aj].ignore || (d.isPlainObject(N) ? (N.row = F, N.index = aj) : N = {
                    text: N,
                    row: F,
                    index: aj
                }, e.data[aj] = N, A = d('<td class="datatable-cell"/>'), A.html(N.text).addClass(N.cssClass).addClass(ah[aj].colClass).attr("colspan", N.colSpan).attr({
                    "data-row": F,
                    "data-index": aj,
                    "data-flex": !1,
                    "data-type": ah[aj].type,
                    style: N.css,
                    title: N.title || ""
                }).css("width", ah[aj].width), ae.append(A)))
            }
            ac.append(J), X.append(R), W.append(I)
        }
        var B;
        ag.fixedLeft && (B = d(af), B.addClass("fixed-left").find("table").addClass(Z.tableClass).append(ac), P.append(B)), ag.flexArea && (B = d(af), B.addClass("flexarea").find(".datatable-wrapper").append('<div class="scrolled-shadow scrolled-in-shadow"></div><div class="scrolled-shadow scrolled-out-shadow"></div>').find("table").addClass(Z.tableClass).append(X), P.append(B)), ag.fixedRight && (B = d(af), B.addClass("fixed-right").find("table").addClass(Z.tableClass).append(W), P.append(B)), U.append(P), ag.flexArea && U.append('<div class="scroll-wrapper"><div class="scroll-slide scroll-pos-' + Z.scrollPos + '"><div class="bar"></div></div></div>');
        var ab = U.children(".datatable-footer").detach();
        ag.footer ? (U.append(d('<div class="datatable-footer"/>').append(ag.footer)), ag.footer = null) : ab.length && U.append(ab), Q.$datatable = U.data(f, Q), Q.isTable && Q.firstShow && (Q.$table.attr("data-datatable-id", this.id).hide().after(U), Q.firstShow = !1), Q.bindEvents(), Q.refreshSize(), Q.callEvent("render")
    }, b.prototype.bindEvents = function () {
        var aB = this, aF = this.data, ar = this.options, at = this.$datatable,
            ao = aB.$dataSpans = at.children(".datatable-head, .datatable-rows").find(".datatable-span"),
            ap = aB.$rowsSpans = at.children(".datatable-rows").children(".datatable-rows-span"),
            av = aB.$headSpans = at.children(".datatable-head").children(".datatable-head-span"),
            aC = aB.$cells = ao.find(".datatable-head-cell,.datatable-cell"),
            aD = aB.$dataCells = aC.filter(".datatable-cell");
        aB.$headCells = aC.filter(".datatable-head-cell");
        var ay = aB.$rows = aB.$rowsSpans.find(".datatable-row");
        if (ar.rowHover) {
            var aq = ar.hoverClass;
            ap.on("mouseenter", ".datatable-cell", function () {
                aD.filter("." + aq).removeClass(aq), ay.filter("." + aq).removeClass(aq), ay.filter('[data-index="' + d(this).addClass(aq).closest("tr").data("index") + '"]').addClass(aq)
            }).on("mouseleave", ".datatable-cell", function () {
                aD.filter("." + aq).removeClass(aq), ay.filter("." + aq).removeClass(aq)
            })
        }
        if (ar.colHover) {
            var aA = ar.colHoverClass;
            av.on("mouseenter", ".datatable-head-cell", function () {
                aC.filter("." + aA).removeClass(aA), aC.filter('[data-index="' + d(this).data("index") + '"]').addClass(aA)
            }).on("mouseleave", ".datatable-head-cell", function () {
                aC.filter("." + aA).removeClass(aA)
            })
        }
        if (aF.flexArea) {
            var an, az, au, am, aE, aj, al, af = at.find(".scroll-slide"), ak = at.find(".datatable-span.flexarea"),
                ah = at.find(".datatable-span.fixed-left"), aw = at.find(".datatable-span.flexarea .table-datatable"),
                G = af.children(".bar"), ad = aB.id + "_scrollOffset";
            aB.width = at.width(), at.resize(function () {
                aB.width = at.width()
            });
            var ai = function (a, g) {
                aE = Math.max(0, Math.min(an - az, a)), g || at.addClass("scrolling"), G.css("left", aE), al = 0 - Math.floor((au - an) * aE / (an - az)), aw.css("left", al), am = aE, at.toggleClass("scrolled-in", aE > 2).toggleClass("scrolled-out", aE < an - az - 2), ar.storage && c.pageSet(ad, aE)
            }, ae = function () {
                an = ak.width(), af.width(an).css("left", ah.width()), au = aw.width(), az = Math.floor(an * an / au), G.css("width", az), aw.css("min-width", an), at.toggleClass("show-scroll-slide", au > an), aj || an === az || (aj = !0, ai(c.pageGet(ad, 0), !0)), at.hasClass("size-changing") && ai(aE, !0)
            };
            ak.resize(ae), ar.storage && ae();
            var J = {
                move: !1, stopPropagation: !0, drag: function (a) {
                    ai(G.position().left + a.smallOffset.x * (a.element.hasClass("bar") ? 1 : -1))
                }, finish: function () {
                    at.removeClass("scrolling")
                }
            };
            d.fn.draggable ? (G.draggable(J), ar.flexHeadDrag && at.find(".datatable-head-span.flexarea").draggable(J)) : console.error("DataTable requires draggable.js to improve UI."), af.mousedown(function (a) {
                var g = a.pageX - af.offset().left;
                ai(g - az / 2)
            })
        }
        if (ar.checkable) {
            var Z, V = aB.id + "_checkedStatus", ax = ar.checkedClass, aa = function () {
                var g = ap.first().find(".datatable-row"), a = g.filter("." + ax);
                ar.checkboxName && g.find(".check-row input:checkbox").prop("checked", !1);
                var e = {
                    checkedAll: g.length === a.length && a.length > 0, checks: a.map(function () {
                        return Z = d(this).data("id"), ar.checkboxName && d(this).find(".check-row input:checkbox").prop("checked", !0), Z
                    }).toArray()
                };
                aB.checks = e, d.each(aF.rows, function (j, h) {
                    h.checked = d.inArray(h.id, e.checks) > -1
                }), av.find(".check-all").toggleClass("checked", !!e.checkedAll), ar.storage && c.pageSet(V, e), aB.callEvent("checksChanged", {checks: e})
            }, ag = function (j, h) {
                var g = d(j).closest("tr");
                void 0 === h && (h = !g.hasClass(ax)), ay.filter('[data-index="' + g.data("index") + '"]').toggleClass(ax, !!h)
            }, Q = "click.zui.datatable.check";
            if (ar.selectable) {
                var ab = {
                    selector: ".datatable-rows .datatable-row", trigger: ".datatable-rows", start: function (g) {
                        var a = d(g.target).closest(".check-row, .check-btn");
                        if (a.length) {
                            return a.is(".check-row") && (ag(a), aa()), !1
                        }
                    }, rangeFunc: function (a, g) {
                        return Math.max(a.top, g.top) < Math.min(a.top + a.height, g.top + g.height)
                    }, select: function (a) {
                        ag(a.target, !0)
                    }, unselect: function (a) {
                        ag(a.target, !1)
                    }, finish: function (a) {
                        aa()
                    }
                };
                d.isPlainObject(ar.selectable) && d.extend(ab, ar.selectable), this.$datatable.selectable(ab)
            } else {
                this.$rowsSpans.off(Q).on(Q + "row", ar.checkByClickRow ? "tr" : ".check-row", function () {
                    ag(this), aa()
                })
            }
            if (this.$datatable.off(Q).on("click.zui.datatable.check", ".check-all", function () {
                    ay.toggleClass(ax, d(this).toggleClass("checked").hasClass("checked")), aa()
                }).on(Q + ".none", ".check-none", function () {
                    ay.toggleClass(ax, !1), aa()
                }).on(Q + ".inverse", ".check-inverse", function () {
                    ay.toggleClass(ax), aa()
                }), ar.storage) {
                var Y = c.pageGet(V);
                Y && (av.find(".check-all").toggleClass("checked", Y.checkedAll), Y.checkedAll ? ay.addClass(ax) : (ay.removeClass(ax), d.each(Y.checks, function (a, g) {
                    ay.filter('[data-id="' + g + '"]').addClass(ax)
                })), Y.checks.length && aa())
            }
        }
        if (ar.fixedHeader) {
            var ac, q, X, K = at.children(".datatable-head"),
                B = ar.fixedHeaderOffset || d(".navbar.navbar-fixed-top").height() || 0, aG = function () {
                    ac = at.offset().top, X = d(window).scrollTop(), q = at.height(), at.toggleClass("head-fixed", X + B > ac && X + B < ac + q), at.hasClass("head-fixed") ? K.css({
                        width: at.width(),
                        top: B
                    }) : K.attr("style", "")
                };
            d(window).scroll(aG), aG()
        }
        ar.sortable ? (av.on("click", "th:not(.sort-disabled, .check-btn)", function () {
            at.hasClass("size-changing") || aB.sortTable(d(this))
        }), ar.storage && aB.sortTable()) : ar.mergeRows && this.mergeRows()
    }, b.prototype.mergeRows = function () {
        for (var l = this.$rowsSpans.find(".datatable-cell"), h = this.data.cols, g = 0; g < h.length; g++) {
            var m = h[g];
            if (m.mergeRows) {
                var p = l.filter('[data-index="' + g + '"]');
                if (p.length > 1) {
                    var j, k;
                    p.each(function () {
                        var a = d(this);
                        j && a.html() === j.html() ? (k = j.attr("rowspan") || 1, "number" != typeof k && (k = parseInt(k), isNaN(k) && (k = 1)), j.attr("rowspan", k + 1).css("vertical-align", "middle"), a.remove()) : j = a
                    })
                }
            }
        }
    }, b.prototype.sortTable = function (M) {
        var I = d.zui.store, Q = this.options, E = this.id + "_datatableSorter", F = Q.storage ? I.pageGet(E) : null;
        if (M || (M = F ? this.$headCells.filter('[data-index="' + F.index + '"]').addClass("sort-" + F.type) : this.$headCells.filter(".sort-up, .sort-down").first()), M.length) {
            var z, B, H, N = this.data, O = N.cols, J = N.rows, D = this.$headCells;
            z = !M.hasClass("sort-up"), N.keepSort && (z = !z), N.keepSort = null, D.removeClass("sort-up sort-down"), M.addClass(z ? "sort-up" : "sort-down"), H = M.data("index"), d.each(O, function (a, g) {
                a == H || "up" !== g.sort && "down" !== g.sort ? a == H && (g.sort = z ? "up" : "down", B = g.type) : g.sort = !0
            });
            var L, x, K, G = this.$dataCells.filter('[data-index="' + H + '"]');
            J.sort(function (a, g) {
                return a = a.data[H], g = g.data[H], L = G.filter('[data-row="' + a.row + '"]').text(), x = G.filter('[data-row="' + g.row + '"]').text(), "number" === B ? (L = parseFloat(L), x = parseFloat(x)) : "date" === B ? (L = Date.parse(L), x = Date.parse(x)) : (L = L.toLowerCase(), x = x.toLowerCase()), K = L > x ? 1 : L < x ? -1 : 0, z && (K *= -1), K
            });
            var q, P, j, k = this.$rows, A = [];
            d.each(J, function (g, a) {
                q = k.filter('[data-index="' + a.index + '"]'), q.each(function (h) {
                    j = d(this), P = A[h], P ? P.after(j) : j.parent().prepend(j), A[h] = j
                })
            }), F = {
                index: H,
                type: z ? "up" : "down"
            }, Q.storage && I.pageSet(E, F), this.callEvent("sort", {sorter: F})
        }
    }, b.prototype.refreshSize = function () {
        var p, m = this.$datatable, w = this.options, h = this.data.rows;
        this.data.cols;
        if (m.find(".datatable-span.fixed-left").css("width", w.fixedLeftWidth), m.find(".datatable-span.fixed-right").css("width", w.fixedRightWidth), w.fixCellHeight) {
            var j = function (r) {
                var n, l, s = 0;
                return r.css("height", "auto"), r.each(function () {
                    n = d(this), l = n.attr("rowspan"), l && 1 != l || (s = Math.max(s, n.outerHeight()))
                }), s
            }, x = this.$dataCells, g = (this.$cells, this.$headCells), k = j(g);
            g.css("min-height", k).css("height", k);
            var q;
            for (p = 0; p < h.length; ++p) {
                q = x.filter('[data-row="' + p + '"]');
                var u = j(q);
                q.css("min-height", u).css("height", u)
            }
        }
    }, b.prototype.callEvent = function (g, h) {
        var a = this.$.callEvent(g + "." + this.name, h, this).result;
        return !(void 0 !== a && !a)
    }, d.fn.datatable = function (a, e) {
        return this.each(function () {
            var j = d(this), g = j.data(f), h = "object" == typeof a && a;
            g || j.data(f, g = new b(this, h)), "string" == typeof a && ("load" !== a || !d.isPlainObject(e) || void 0 !== e.keepSort && null !== e.keepSort || (e.keepSort = !0), g[a](e))
        })
    }, d.fn.datatable.Constructor = b
}(jQuery), function (d, h, c) {
    function b(m, l, e, n) {
        return h.abs((e - m) * (n - l))
    }

    function j(p, q, m, l, r, s) {
        return p >= m && p <= r && q >= l && q <= s
    }

    function k(B, q, m, C, a, o, y, z) {
        var w = h.max(B, a), e = h.max(q, o), x = h.min(m, y), A = h.min(C, z);
        return j(w, e, B, q, m, C) && j(x, A, B, q, m, C) && j(w, e, a, o, y, z) && j(x, A, a, o, y, z) ? b(w, e, x, A) : 0
    }

    var f = d.zui.Messager ? new d.zui.Messager({placement: "top", time: 1500, close: 0, scale: !1, fade: !1}) : 0,
        g = function (l, a) {
            this.$ = d(l), this.options = this.getOptions(a), this.draggable = this.$.hasClass("dashboard-draggable") || this.options.draggable, this.init()
        };
    g.DEFAULTS = {
        minHeight: 100,
        height: 360,
        shadowType: "normal",
        sensitive: !1,
        circleShadowSize: 100,
        onlyRefreshBody: !0,
        resizable: !0,
        resizeMessage: !1
    }, g.prototype.getOptions = function (a) {
        return a = d.extend({}, g.DEFAULTS, this.$.data(), a)
    }, g.prototype.handleRemoveEvent = function () {
        var m = this.options.afterPanelRemoved, l = this.options.panelRemovingTip;
        this.$.on("click", ".remove-panel", function () {
            var e = d(this).closest(".panel"),
                p = e.data("name") || e.find(".panel-heading").text().replace("\n", "").replace(/(^\s*)|(\s*$)/g, ""),
                a = e.attr("data-id");
            (l === c || l === !1 || confirm(l.format(p))) && (e.parent().remove(), m && d.isFunction(m) && m(a))
        })
    }, g.prototype.handleRefreshEvent = function () {
        var l = this, a = this.options.onlyRefreshBody;
        this.$.on("click", ".refresh-panel", function () {
            var e = d(this).closest(".panel");
            l.refresh(e, a)
        })
    }, g.prototype.handleDraggable = function () {
        var e = this.$, q = this.options, m = "circle" === q.shadowType, n = q.circleShadowSize, a = n / 2,
            p = q.afterOrdered;
        this.$.addClass("dashboard-draggable"), this.$.on("mousedown", ".panel-actions, .drag-disabled", function (l) {
            l.stopPropagation()
        });
        var u;
        this.$.on("mousedown", ".panel-heading, .panel-drag-handler", function (U) {
            function P(x) {
                var y = K.data("mouseOffset");
                V = x.pageX - y.x, Q = x.pageY - y.y, I = V + A, X = Q + s, K.css({
                    left: V,
                    top: Q
                }), l.find(".dragging-in").removeClass("dragging-in"), N = !1, H = null;
                var z, w = 0;
                l.children(":not(.dragging-col)").each(function () {
                    var Z = d(this);
                    if (Z.hasClass("dragging-col-holder")) {
                        return N = !q.sensitive || w < 100, !0
                    }
                    var L = Z.children(".panel"), O = L.offset(), D = L.width(), C = L.height(), E = O.left, Y = O.top;
                    if (q.sensitive) {
                        E -= M.left, Y -= M.top, z = k(V, Q, I, X, E, Y, E + D, Y + C), z > 100 && z > w && z > h.min(b(V, Q, I, X), b(E, Y, E + D, Y + C)) / 3 && (w = z, H = Z)
                    } else {
                        var S = x.pageX, T = x.pageY;
                        if (S > E && T > Y && S < E + D && T < Y + C) {
                            return H = Z, !1
                        }
                    }
                }), H && (F && clearTimeout(F), G = H, F = setTimeout(W, 50)), x.preventDefault()
            }

            function W() {
                G && (G.addClass("dragging-in"), N ? o.insertAfter(G) : o.insertBefore(G), e.addClass("dashboard-holding"), F = null, G = null)
            }

            function J(x) {
                F && clearTimeout(F);
                var w = r.data("order");
                r.parent().insertAfter(o);
                var y = 0, z = {};
                l.children(":not(.dragging-col-holder)").each(function () {
                    var C = d(this).children(".panel");
                    C.data("order", ++y), z[C.data("id") || C.attr("id")] = y, C.parent().attr("data-order", y)
                }), w != z[r.data("id") || r.attr("id")] && (l.data("orders", z), p && d.isFunction(p) && p(z)), K.remove(), e.removeClass("dashboard-holding"), e.find(".dragging-col").removeClass("dragging-col"), e.find(".panel-dragging").removeClass("panel-dragging"), l.find(".dragging-in").removeClass("dragging-in"), e.removeClass("dashboard-dragging"), d(document).off("mousemove", P).off("mouseup", J), x.preventDefault()
            }

            var V, Q, I, X, F, H, N, G, r = d(this).closest(".panel"), R = r.parent(), l = r.closest(".row"),
                K = r.clone().addClass("panel-dragging-shadow"), B = r.offset(), M = e.offset(),
                o = l.find(".dragging-col-holder"), A = r.width(), s = r.height();
            o.length || (o = d('<div class="dragging-col-holder"><div class="panel"></div></div>').removeClass("dragging-col").appendTo(l)), u && o.removeClass(u), o.addClass(u = R.attr("class")), o.insertBefore(R).find(".panel").replaceWith(r.clone().addClass("panel-dragging panel-dragging-holder")), e.addClass("dashboard-dragging"), r.addClass("panel-dragging").parent().addClass("dragging-col"), K.css({
                left: B.left - M.left,
                top: B.top - M.top,
                width: A,
                height: s
            }).appendTo(e).data("mouseOffset", {
                x: U.pageX - B.left + M.left,
                y: U.pageY - B.top + M.top
            }), m && (K.addClass("circle"), setTimeout(function () {
                K.css({
                    left: U.pageX - M.left - a,
                    top: U.pageY - M.top - a,
                    width: n,
                    height: n
                }).data("mouseOffset", {x: M.left + a, y: M.top + a})
            }, 100)), d(document).on("mousemove", P).on("mouseup", J), U.preventDefault()
        })
    }, g.prototype.handlePanelPadding = function () {
        this.$.find(".panel-body > table, .panel-body > .list-group").parent().addClass("no-padding")
    }, g.prototype.updatePanelHeight = function () {
        var l = this, e = l.options.height, m = l.options.minHeight, p = {};
        return l.id && d.zui.store && (p = d.zui.store.pageGet("zui.dashboard." + l.id + ".sizeConfig", p)), this.$.children(".row").each(function () {
            var n = d(this), o = n.width(), q = [], a = [], u = 0;
            n.children(":not(.dragging-col-holder)").each(function () {
                var s = d(this), r = s.width();
                u + r > o ? (a.length && q.push(a), a = [s], u = r) : (u += r, a.push(s))
            }), a.length && q.push(a), q.length && d.each(q, function (r) {
                a = q[r];
                var w = 0, x = [], y = !1;
                d.each(a, function (z) {
                    var s = a[z].data("row-id", r), B = s.children(".panel:first");
                    if (x.push(B), !y) {
                        var A = B.data("newHeight");
                        if (A) {
                            B.data("newHeight", null).data("height", A), w = h.max(m, A), y = !0
                        } else {
                            var C = B.data("height") || p[B.data("id")];
                            C && (w = h.max(w, C))
                        }
                    }
                }), w || (w = e), d.each(x, function (s) {
                    var z = x[s].css("height", w);
                    p[z.data("id")] = z.data("height")
                })
            })
        }), l.id && d.zui.store && d.zui.store.pageSet("zui.dashboard." + l.id + ".sizeConfig", p), p
    }, g.prototype.handleResizeEvent = function () {
        var p = this, m = p.options, u = m.resizable, x = m.onResize, q = m.minHeight, e = m.resizeMessage, s = e && f;
        p.$.on("mousedown", ".resize-handle", function (J) {
            var z = d(this), B = z.hasClass("resize-vertical"),
                G = z.parent().addClass("resizing").toggleClass("resizing-v", B).toggleClass("resizing-h", !B),
                D = G.closest(".row"), r = G.children(".panel"), F = J.pageX, M = J.pageY, E = G.width(),
                A = r.height(), L = D.width(), I = h.round(12 * E / L), H = I;
            B || G.attr("data-grid", I);
            var K = function (y) {
                if (B) {
                    r.css("height", h.max(q, A + (y.pageY - M)))
                } else {
                    var o = y.pageX, l = h.max(1, h.min(12, h.round(12 * (E + (o - F)) / L)));
                    H != l && (G.attr("data-grid", l).css("width", 100 * l / 12 + "%"), s && f[f.isShow ? "update" : "show"](h.round(100 * l / 12) + "% (" + l + "/12)"), H = l)
                }
                y.preventDefault(), y.stopPropagation()
            }, n = function (l) {
                if (G.removeClass("resizing resizing-v resizing-h"), B) {
                    var O = h.max(q, A + (l.pageY - M));
                    if (O !== A) {
                        if (d.isFunction(x)) {
                            var y = function () {
                                r.css("height", A).data("height", A), p.updatePanelHeight()
                            }, N = x({type: "vertical", id: r.data("id"), element: G, old: A, height: O, revert: y});
                            N === !1 && y()
                        }
                        r.css("height", O).data("newHeight", O)
                    }
                } else {
                    var C = G.attr("data-grid");
                    if (I != C && d.isFunction(x)) {
                        var y = function () {
                            G.attr("data-grid", I).css("width", null), p.updatePanelHeight()
                        }, N = x({type: "horizontal", id: r.data("id"), element: G, old: I, grid: C, revert: y});
                        N === !1 ? y() : N !== !0 && s && f.show(h.round(100 * C / 12) + "% (" + C + "/12)")
                    }
                }
                p.updatePanelHeight(), d("body").off("mousemove.resize", K).off("mouseup.resize", n), l.preventDefault(), l.stopPropagation()
            };
            d("body").on("mousemove.resize", K).on("mouseup.resize", n), J.preventDefault(), J.stopPropagation()
        });
        var w = p.$.children(".row").children(":not(.dragging-col-holder)");
        u !== !0 && "horizontal" !== u || w.append('<div class="resize-handle resize-horizontal"><i class="icon icon-resize-h"></i></div>'), u !== !0 && "vertical" !== u || w.append('<div class="resize-handle resize-vertical"><i class="icon icon-resize-v"></i></div>')
    }, g.prototype.refresh = function (m, l) {
        l === c && (l = this.options.onlyRefreshBody);
        var p = this.options.afterRefresh;
        m = d(m);
        var q = m.data("url");
        q && (m.addClass("panel-loading").find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").addClass("icon-spin"), d.ajax({
            url: q,
            dataType: "html"
        }).done(function (a) {
            var e = d(a);
            e.hasClass("panel") ? m.empty().append(e.children()) : l ? m.find(".panel-body").empty().html(a) : m.html(a), d.isFunction(p) && p.call(this, {
                result: !0,
                data: a,
                $panel: m
            })
        }).fail(function () {
            m.addClass("panel-error"), d.isFunction(p) && p.call(this, {result: !1, $panel: m})
        }).always(function () {
            m.removeClass("panel-loading"), m.find(".panel-heading .icon-refresh,.panel-heading .icon-repeat").removeClass("icon-spin")
        }))
    }, g.prototype.init = function () {
        var m = this.options, l = this;
        if (l.id = m.id ? m.id : l.$.attr("id"), m.data) {
            var p = d('<div class="row"/>');
            d.each(m.data, function (x, o) {
                var y = d('<div class="col-sm-' + (o.colWidth || 4) + '"/>');
                o.colAttrs && y.attr(o.colAttrs);
                var u = d('<div class="panel" data-id="' + (o.id || d.zui.uuid()) + '"/>');
                if (o.panelAttrs && u.attr(o.panelAttrs), o.height !== c && u.data("height", o.height), o.content !== c) {
                    if (d.isFunction(o.content)) {
                        var w = o.content(u);
                        w !== !0 && u.html(w)
                    } else {
                        u.html(o.content)
                    }
                }
                p.append(y.append(u.data("url", o.url)))
            }), l.$.append(p)
        }
        l.updatePanelHeight(), l.handlePanelPadding(), l.handleRemoveEvent(), l.handleRefreshEvent(), m.resizable && l.handleResizeEvent(), l.draggable && l.handleDraggable();
        var q = 0;
        l.$.find(".panel").each(function () {
            var a = d(this);
            a.data("order", ++q), a.attr("id") || a.attr("id", "panel" + q), a.attr("data-id") || a.attr("data-id", q), l.refresh(a, m.onlyRefreshBody)
        }), l.$.find('[data-toggle="tooltip"]').tooltip({container: "body"})
    }, d.fn.dashboard = function (a) {
        return this.each(function () {
            var l = d(this), e = l.data("zui.dashboard"), m = "object" == typeof a && a;
            e || l.data("zui.dashboard", e = new g(this, m)), "string" == typeof a && e[a]()
        })
    }, d.fn.dashboard.Constructor = g
}(jQuery, Math, void 0), function (d, f, c) {
    d.fn.draggable || console.error("img-cutter requires draggable.js"), d.zui.imgReady || console.error("img-cutter requires image.ready.js");
    var b = "zui.imgCutter", g = function (h, a) {
        this.$ = d(h), this.initOptions(a), this.init()
    };
    g.DEFAULTS = {
        coverColor: "#000",
        coverOpacity: 0.6,
        defaultWidth: 128,
        defaultHeight: 128,
        minWidth: 48,
        minHeight: 48
    }, g.prototype.callEvent = function (a, h) {
        var j = this.$.callEvent(a + "." + b, h, this);
        return !(j.result !== c && !j.result)
    }, g.prototype.initOptions = function (a) {
        this.options = d.extend({}, g.DEFAULTS, this.$.data(), a), this.options.coverOpacityIE = 100 * this.options.coverOpacity, this.clipWidth = this.options.defaultWidth, this.clipHeight = this.options.defaultHeight
    }, g.prototype.init = function () {
        this.initDom(), this.initSize(), this.bindEvents()
    }, g.prototype.initDom = function () {
        this.$canvas = this.$.children(".canvas"), this.$img = this.$canvas.children("img"), this.$actions = this.$.children(".actions"), this.$btn = this.$.find(".img-cutter-submit"), this.$preview = this.$.find(".img-cutter-preview"), this.options.img = this.$img.attr("src"), this.$canvas.append('<div class="cover" style="background: {coverColor}; opacity: {coverOpacity}; filter:alpha(opacity={coverOpacityIE});"></div><div class="controller" style="width: {defaultWidth}px; height: {defaultHeight}px"><div class="control" data-direction="top"></div><div class="control" data-direction="right"></div><div class="control" data-direction="bottom"></div><div class="control" data-direction="left"></div><div class="control" data-direction="top-left"></div><div class="control" data-direction="top-right"></div><div class="control" data-direction="bottom-left"></div><div class="control" data-direction="bottom-right"></div></div><div class="cliper"><img src="{img}"/></div>'.format(this.options)), this.$cover = this.$canvas.children(".cover"), this.$controller = this.$canvas.children(".controller"), this.$cliper = this.$canvas.children(".cliper"), this.$chipImg = this.$cliper.children("img"), this.options.fixedRatio && this.$.addClass("fixed-ratio")
    }, g.prototype.resetImage = function (a) {
        var h = this;
        h.options.img = a, h.$img.attr("src", a), h.$chipImg.attr("src", a), h.imgWidth = c, h.left = c, h.initSize()
    }, g.prototype.initSize = function () {
        var e = this;
        e.imgWidth || d.zui.imgReady(e.options.img, function () {
            e.imgWidth = this.width, e.imgHeight = this.height, e.callEvent("ready")
        });
        var h = setInterval(function () {
            e.imgWidth && (clearInterval(h), e.width = f.min(e.imgWidth, e.$.width()), e.$canvas.css("width", this.width), e.$cliper.css("width", this.width), e.height = e.$canvas.height(), e.left === c && (e.left = f.floor((e.width - e.$controller.width()) / 2), e.top = f.floor((e.height - e.$controller.height()) / 2)), e.refreshSize())
        }, 0)
    }, g.prototype.refreshSize = function (e) {
        var a = this.options;
        this.clipWidth = f.max(a.minWidth, f.min(this.width, this.clipWidth)), this.clipHeight = f.max(a.minHeight, f.min(this.height, this.clipHeight)), a.fixedRatio && (e && "height" === e ? (this.clipWidth = f.max(a.minWidth, f.min(this.width, this.clipHeight * a.defaultWidth / a.defaultHeight)), this.clipHeight = this.clipWidth * a.defaultHeight / a.defaultWidth) : (this.clipHeight = f.max(a.minHeight, f.min(this.height, this.clipWidth * a.defaultHeight / a.defaultWidth)), this.clipWidth = this.clipHeight * a.defaultWidth / a.defaultHeight)), this.left = f.min(this.width - this.clipWidth, f.max(0, this.left)), this.top = f.min(this.height - this.clipHeight, f.max(0, this.top)), this.right = this.left + this.clipWidth, this.bottom = this.top + this.clipHeight, this.$controller.css({
            left: this.left,
            top: this.top,
            width: this.clipWidth,
            height: this.clipHeight
        }), this.$cliper.css("clip", "rect({0}px {1}px {2}px {3}px".format(this.top, this.left + this.clipWidth, this.top + this.clipHeight, this.left)), this.callEvent("change", {
            top: this.top,
            left: this.left,
            bottom: this.bottom,
            right: this.right,
            width: this.clipWidth,
            height: this.clipHeight
        })
    }, g.prototype.getData = function () {
        var a = this;
        return a.data = {
            originWidth: a.imgWidth,
            originHeight: a.imgHeight,
            scaleWidth: a.width,
            scaleHeight: a.height,
            width: a.right - a.left,
            height: a.bottom - a.top,
            left: a.left,
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            scaled: a.imgWidth != a.width || a.imgHeight != a.height
        }, a.data
    }, g.prototype.bindEvents = function () {
        var h = this, e = this.options;
        this.$.resize(d.proxy(this.initSize, this)), this.$btn.hover(function () {
            h.$.toggleClass("hover")
        }).click(function () {
            var a = h.getData();
            if (h.callEvent("before", a)) {
                var j = e.post || e.get || e.url || null;
                null !== j && d.ajax({type: e.post ? "POST" : "GET", url: j, data: a}).done(function (k) {
                    h.callEvent("done", k)
                }).fail(function (k) {
                    h.callEvent("fail", k)
                }).always(function (k) {
                    h.callEvent("always", k)
                })
            }
        }), this.$controller.draggable({
            move: !1, container: this.$canvas, drag: function (a) {
                h.left += a.smallOffset.x, h.top += a.smallOffset.y, h.refreshSize()
            }
        }), this.$controller.children(".control").draggable({
            move: !1,
            container: this.$canvas,
            stopPropagation: !0,
            drag: function (a) {
                var k = a.element.data("direction"), l = a.smallOffset, j = !1;
                switch (k) {
                    case"left":
                    case"top-left":
                    case"bottom-left":
                        h.left += l.x, h.left = f.min(h.right - e.minWidth, f.max(0, h.left)), h.clipWidth = h.right - h.left;
                        break;
                    case"right":
                    case"top-right":
                    case"bottom-right":
                        h.clipWidth += l.x, h.clipWidth = f.min(h.width - h.left, f.max(e.minWidth, h.clipWidth))
                }
                switch (k) {
                    case"top":
                    case"top-left":
                    case"top-right":
                        h.top += l.y, h.top = f.min(h.bottom - e.minHeight, f.max(0, h.top)), h.clipHeight = h.bottom - h.top, j = !0;
                        break;
                    case"bottom":
                    case"bottom-left":
                    case"bottom-right":
                        h.clipHeight += l.y, h.clipHeight = f.min(h.height - h.top, f.max(e.minHeight, h.clipHeight)), j = !0
                }
                h.refreshSize(j)
            }
        })
    }, d.fn.imgCutter = function (a) {
        return this.each(function () {
            var e = d(this), j = e.data(b), h = "object" == typeof a && a;
            j || e.data(b, j = new g(this, h)), "string" == typeof a && j[a]()
        })
    }, d.fn.imgCutter.Constructor = g, d(function () {
        d('[data-toggle="imgCutter"]').imgCutter()
    })
}(jQuery, Math, void 0), function (a) {
    var b = function (d, c) {
        this.$ = a(d), this.options = this.getOptions(c), this.init()
    };
    b.DEFAULTS = {auto: !1, foldicon: "icon-chevron-right"}, b.prototype.getOptions = function (c) {
        return c = a.extend({}, b.DEFAULTS, this.$.data(), c)
    }, b.prototype.init = function () {
        var c = this.$.children(".nav");
        c.find(".nav").closest("li").addClass("nav-parent"), c.find(".nav > li.active").parent().closest("li").addClass("active"), c.find(".nav-parent > a").append('<i class="' + this.options.foldicon + ' nav-parent-fold-icon"></i>'), c.find(".nav-parent.show").find(".nav-parent-fold-icon").addClass("icon-rotate-90"), this.handleFold()
    }, b.prototype.handleFold = function () {
        var d = this.options.auto, c = this.$;
        this.$.on("click", ".nav-parent > a", function (e) {
            d && (c.find(".nav-parent.show").find(".nav").slideUp(function () {
                a(this).closest(".nav-parent").removeClass("show")
            }), c.find(".icon-rotate-90").removeClass("icon-rotate-90"));
            var f = a(this).closest(".nav-parent");
            return f.hasClass("show") ? (f.find(".icon-rotate-90").removeClass("icon-rotate-90"), f.find(".nav").slideUp(function () {
                a(this).closest(".nav-parent").removeClass("show")
            })) : (f.find(".nav-parent-fold-icon").addClass("icon-rotate-90"), f.find(".nav").slideDown(function () {
                a(this).closest(".nav-parent").addClass("show")
            })), e.preventDefault(), !1
        })
    }, a.fn.menu = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("zui.menu"), f = "object" == typeof c && c;
            e || d.data("zui.menu", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.menu.Constructor = b, a(function () {
        a('[data-toggle="menu"],[data-ride="menu"]').menu()
    })
}(jQuery), +function (b) {
    var c = function (f, d) {
        this.$element = b(f), this.$indicators = this.$element.find(".carousel-indicators"), this.options = d, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", b.proxy(this.pause, this)).on("mouseleave", b.proxy(this.cycle, this))
    };
    c.DEFAULTS = {interval: 5000, pause: "hover", wrap: !0, touchable: !0}, c.prototype.touchable = function () {
        function g(p) {
            var p = p || window.event;
            p.originalEvent && (p = p.originalEvent);
            var q = b(this);
            switch (p.type) {
                case"touchstart":
                    d = p.touches[0].pageX, h = p.touches[0].pageY;
                    break;
                case"touchend":
                    var m = p.changedTouches[0].pageX - d, o = p.changedTouches[0].pageY - h;
                    if (Math.abs(m) > Math.abs(o)) {
                        f(q, m), Math.abs(m) > 10 && p.preventDefault()
                    } else {
                        var k = b(window);
                        b("body,html").animate({scrollTop: k.scrollTop() - o}, 400)
                    }
            }
        }

        function f(k, l) {
            l > 10 ? j.prev() : l < -10 && j.next()
        }

        if (this.options.touchable) {
            this.$element.on("touchstart touchmove touchend", g);
            var d, h, j = this
        }
    }, c.prototype.cycle = function (d) {
        return d || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(b.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getActiveIndex = function () {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, c.prototype.to = function (g) {
        var f = this, d = this.getActiveIndex();
        if (!(g > this.$items.length - 1 || g < 0)) {
            return this.sliding ? this.$element.one("slid", function () {
                f.to(g)
            }) : d == g ? this.pause().cycle() : this.slide(g > d ? "next" : "prev", b(this.$items[g]))
        }
    }, c.prototype.pause = function (d) {
        return d || (this.paused = !0), this.$element.find(".next, .prev").length && b.support.transition.end && (this.$element.trigger(b.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        if (!this.sliding) {
            return this.slide("next")
        }
    }, c.prototype.prev = function () {
        if (!this.sliding) {
            return this.slide("prev")
        }
    }, c.prototype.slide = function (m, k) {
        var q = this.$element.find(".item.active"), g = k || q[m](), h = this.interval,
            u = "next" == m ? "left" : "right", f = "next" == m ? "first" : "last", j = this;
        if (!g.length) {
            if (!this.options.wrap) {
                return
            }
            g = this.$element.find(".item")[f]()
        }
        this.sliding = !0, h && this.pause();
        var p = b.Event("slide.zui.carousel", {relatedTarget: g[0], direction: u});
        if (!g.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function () {
                    var d = b(j.$indicators.children()[j.getActiveIndex()]);
                    d && d.addClass("active")
                })), b.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(p), p.isDefaultPrevented()) {
                    return
                }
                g.addClass(m), g[0].offsetWidth, q.addClass(u), g.addClass(u), q.one(b.support.transition.end, function () {
                    g.removeClass([m, u].join(" ")).addClass("active"), q.removeClass(["active", u].join(" ")), j.sliding = !1, setTimeout(function () {
                        j.$element.trigger("slid")
                    }, 0)
                }).emulateTransitionEnd(600)
            } else {
                if (this.$element.trigger(p), p.isDefaultPrevented()) {
                    return
                }
                q.removeClass("active"), g.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
            }
            return h && this.cycle(), this
        }
    };
    var a = b.fn.carousel;
    b.fn.carousel = function (d) {
        return this.each(function () {
            var e = b(this), g = e.data("zui.carousel"),
                h = b.extend({}, c.DEFAULTS, e.data(), "object" == typeof d && d),
                f = "string" == typeof d ? d : h.slide;
            g || e.data("zui.carousel", g = new c(this, h)), "number" == typeof d ? g.to(d) : f ? g[f]() : h.interval && g.pause().cycle(), h.touchable && g.touchable()
        })
    }, b.fn.carousel.Constructor = c, b.fn.carousel.noConflict = function () {
        return b.fn.carousel = a, this
    }, b(document).on("click.zui.carousel.data-api", "[data-slide], [data-slide-to]", function (h) {
        var f, d = b(this), j = b(d.attr("data-target") || (f = d.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
            k = b.extend({}, j.data(), d.data()), g = d.attr("data-slide-to");
        g && (k.interval = !1), j.carousel(k), (g = d.attr("data-slide-to")) && j.data("zui.carousel").to(g), h.preventDefault()
    }), b(window).on("load", function () {
        b('[data-ride="carousel"]').each(function () {
            var d = b(this);
            d.carousel(d.data())
        })
    })
}(window.jQuery), function (d) {
    function g(m, l) {
        if (m === !1) {
            return m
        }
        if (!m) {
            return l
        }
        m === !0 ? m = {add: !0, "delete": !0, edit: !0, sort: !0} : "string" == typeof m && (m = m.split(","));
        var k;
        return d.isArray(m) && (k = {}, d.each(m, function (n, a) {
            d.isPlainObject(a) ? k[a.action] = a : k[a] = !0
        }), m = k), d.isPlainObject(m) && (k = {}, d.each(m, function (n, a) {
            a ? k[n] = d.extend({type: n}, f[n], d.isPlainObject(a) ? a : null) : k[n] = !1
        }), m = k), l ? d.extend(!0, {}, l, m) : m
    }

    function c(m, l, k) {
        return l = l || m.type, d(k || m.template).addClass("tree-action").attr(d.extend({
            "data-type": l,
            title: m.title || ""
        }, m.attr)).data("action", m)
    }

    var b = "zui.tree", h = 0, j = function (k, a) {
        this.name = b, this.$ = d(k), this.getOptions(a), this._init()
    }, f = {
        sort: {template: '<a class="sort-handler" href="javascript:;"><i class="icon icon-move"></i></a>'},
        add: {template: '<a href="javascript:;"><i class="icon icon-plus"></i></a>'},
        edit: {template: '<a href="javascript:;"><i class="icon icon-pencil"></i></a>'},
        "delete": {template: '<a href="javascript:;"><i class="icon icon-trash"></i></a>'}
    };
    j.DEFAULTS = {
        animate: null,
        initialState: "normal",
        toggleTemplate: '<i class="list-toggle icon"></i>'
    }, j.prototype.add = function (w, u, y, m, p) {
        var z, k = d(w), q = this.options;
        if (k.is("li") ? (z = k.children("ul"), z.length || (z = d("<ul/>"), k.append(z), this._initList(z, k))) : z = k, z) {
            var x = this;
            d.isArray(u) || (u = [u]), d.each(u, function (s, r) {
                var l = d("<li/>").data(r).appendTo(z);
                void 0 !== r.id && l.attr("data-id", r.id);
                var A = q.itemWrapper ? d(q.itemWrapper === !0 ? '<div class="tree-item-wrapper"/>' : q.itemWrapper).appendTo(l) : l;
                if (r.html) {
                    A.html(r.html)
                } else {
                    if (d.isFunction(x.options.itemCreator)) {
                        var B = x.options.itemCreator(l, r);
                        B !== !0 && B !== !1 && A.html(B)
                    } else {
                        r.url ? A.append(d("<a/>", {href: r.url}).text(r.title || r.name)) : A.append(d("<span/>").text(r.title || r.name))
                    }
                }
                x._initItem(l, r.idx || s, z, r), r.children && r.children.length && x.add(l, r.children)
            }), this._initList(z), y && !z.hasClass("tree") && x.expand(z.parent("li"), m, p)
        }
    }, j.prototype.reload = function (k) {
        var a = this;
        k && (a.$.empty(), a.add(a.$, k)), a.isPreserve && a.store.time && a.$.find("li:not(.tree-action-item)").each(function () {
            var l = d(this);
            a[a.store[l.data("id")] ? "expand" : "collapse"](l, !0, !0)
        })
    }, j.prototype._initList = function (k, u, x, m) {
        var p = this;
        k.hasClass("tree") ? (x = 0, u = null) : (u = (u || k.closest("li")).addClass("has-list"), u.find(".list-toggle").length || u.prepend(this.options.toggleTemplate), x = x || u.data("idx"));
        var e = k.attr("data-idx", x || 0).children("li:not(.tree-action-item)").each(function (a) {
            p._initItem(d(this), a + 1, k)
        });
        1 !== e.length || e.find("ul").length || e.addClass("tree-single-item"), m = m || (u ? u.data() : null);
        var q = g(m ? m.actions : null, this.actions);
        if (q) {
            if (q.add && q.add.templateInList !== !1) {
                var w = k.children("li.tree-action-item");
                w.length ? w.detach().appendTo(k) : d('<li class="tree-action-item"/>').append(c(q.add, "add", q.add.templateInList)).appendTo(k)
            }
            q.sort && k.sortable(d.extend({
                dragCssClass: "tree-drag-holder",
                trigger: ".sort-handler",
                selector: "li:not(.tree-action-item)",
                finish: function (a) {
                    p.callEvent("action", {action: q.sort, $list: k, target: a.target, item: m})
                }
            }, q.sort.options, d.isPlainObject(this.options.sortable) ? this.options.sortable : null))
        }
        u && (u.hasClass("open") || m && m.open) && u.addClass("open in")
    }, j.prototype._initItem = function (x, k, m, y) {
        if (void 0 === k) {
            var e = x.prev("li");
            k = e.length ? e.data("idx") + 1 : 1
        }
        if (m = m || x.closest("ul"), x.attr("data-idx", k).removeClass("tree-single-item"), !x.data("id")) {
            var p = k;
            m.hasClass("tree") || (p = m.parent("li").data("id") + "-" + p), x.attr("data-id", p)
        }
        y = y || x.data();
        var u = g(y.actions, this.actions);
        if (u) {
            var w = x.find(".tree-actions");
            w.length || (w = d('<div class="tree-actions"/>').appendTo(this.options.itemWrapper ? x.find(".tree-item-wrapper") : x), d.each(u, function (a, l) {
                l && w.append(c(l, a))
            }))
        }
        var q = x.children("ul");
        q.length && this._initList(q, x, k, y)
    }, j.prototype._init = function () {
        var a = this.options, l = this;
        this.actions = g(a.actions), this.$.addClass("tree"), a.animate && this.$.addClass("tree-animate"), this._initList(this.$);
        var e = a.initialState, k = d.zui && d.zui.store && d.zui.store.enable;
        k && (this.selector = b + "::" + (a.name || "") + "#" + (this.$.attr("id") || h++), this.store = d.zui.store[a.name ? "get" : "pageGet"](this.selector, {})), "preserve" === e && (k ? this.isPreserve = !0 : this.options.initialState = e = "normal"), this.reload(a.data), k && (this.isPreserve = !0), "expand" === e ? this.expand() : "collapse" === e && this.collapse(), this.$.on("click", '.list-toggle,a[href="#"],.tree-toggle', function (o) {
            var n = d(this), m = n.parent("li");
            l.callEvent("hit", {target: m, item: m.data()}), l.toggle(m), n.is("a") && o.preventDefault()
        }).on("click", ".tree-action", function () {
            var o = d(this), n = o.data();
            if (n.action && (n = n.action), "sort" !== n.type) {
                var m = o.closest("li:not(.tree-action-item)");
                l.callEvent("action", {action: n, target: this, $item: m, item: m.data()})
            }
        })
    }, j.prototype.preserve = function (m, l, k) {
        if (this.isPreserve) {
            if (m) {
                l = l || m.data("id"), k = void 0 === k && m.hasClass("open"), k ? this.store[l] = k : delete this.store[l], this.store.time = (new Date).getTime(), d.zui.store[this.options.name ? "set" : "pageSet"](this.selector, this.store)
            } else {
                var n = this;
                this.store = {}, this.$.find("li").each(function () {
                    n.preserve(d(this))
                })
            }
        }
    }, j.prototype.expand = function (k, l, a) {
        k ? (k.addClass("open"), !l && this.options.animate ? setTimeout(function () {
            k.addClass("in")
        }, 10) : k.addClass("in")) : k = this.$.find("li.has-list").addClass("open in"), a || this.preserve(k), this.callEvent("expand", k, this)
    }, j.prototype.show = function (m, l, k) {
        var n = this;
        m.each(function () {
            var o = d(this);
            if (n.expand(o, l, k), o) {
                for (var p = o.parent("ul"); p && p.length && !p.hasClass("tree");) {
                    var a = p.parent("li");
                    a.length ? (n.expand(a, l, k), p = a.parent("ul")) : p = !1
                }
            }
        })
    }, j.prototype.collapse = function (k, l, a) {
        k ? !l && this.options.animate ? (k.removeClass("in"), setTimeout(function () {
            k.removeClass("open")
        }, 300)) : k.removeClass("open in") : k = this.$.find("li.has-list").removeClass("open in"), a || this.preserve(k), this.callEvent("collapse", k, this)
    }, j.prototype.toggle = function (a) {
        var k = a && a.hasClass("open") || a === !1 || void 0 === a && this.$.find("li.has-list.open").length;
        this[k ? "collapse" : "expand"](a)
    }, j.prototype.getOptions = function (a) {
        this.options = d.extend({}, j.DEFAULTS, this.$.data(), a), null === this.options.animate && this.$.hasClass("tree-animate") && (this.options.animate = !0)
    }, j.prototype.toData = function (m, l) {
        d.isFunction(m) && (l = m, m = null), m = m || this.$;
        var k = this;
        return m.children("li:not(.tree-action-item)").map(function () {
            var a = d(this), p = a.data();
            delete p["zui.droppable"];
            var q = a.children("ul");
            return q.length && (p.children = k.toData(q)), d.isFunction(l) ? l(p, a) : p
        }).get()
    }, j.prototype.callEvent = function (m, l) {
        var k;
        return d.isFunction(this.options[m]) && (k = this.options[m](l, this)), this.$.trigger(d.Event(m + "." + this.name, l)), k
    }, d.fn.tree = function (k, a) {
        return this.each(function () {
            var m = d(this), e = m.data(b), l = "object" == typeof k && k;
            e || m.data(b, e = new j(this, l)), "string" == typeof k && e[k](a)
        })
    }, d.fn.tree.Constructor = j, d(function () {
        d('[data-ride="tree"]').tree()
    })
}(jQuery);
/*
 * ! ZUI: Chart.js - v1.6.0 - 2017-03-23 http://zui.sexy GitHub:
 * https://github.com/easysoft/zui.git Copyright (c) 2017 cnezsoft.com; Licensed
 * MIT
 */
/*
 * ! Chart.js 1.0.2 Copyright 2015 Nick Downie Released under the MIT license
 * http://chartjs.org/
 */
(function (X) {
    var aj = X && X.zui ? X.zui : this, an = (aj.Chart, function (b) {
        this.canvas = b.canvas, this.ctx = b;
        var a = function (f, e) {
            return f["offset" + e] ? f["offset" + e] : document.defaultView.getComputedStyle(f).getPropertyValue(e)
        }, c = this.width = a(b.canvas, "Width"), d = this.height = a(b.canvas, "Height");
        b.canvas.width = c, b.canvas.height = d;
        var c = this.width = b.canvas.width, d = this.height = b.canvas.height;
        return this.aspectRatio = this.width / this.height, Y.retinaScale(this), this
    });
    an.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function () {
            },
            onAnimationComplete: function () {
            }
        }
    }, an.types = {};
    var Y = an.helpers = {}, af = Y.each = function (b, a, d) {
        var c = Array.prototype.slice.call(arguments, 3);
        if (b) {
            if (b.length === +b.length) {
                var g;
                for (g = 0; g < b.length; g++) {
                    a.apply(d, [b[g], g].concat(c))
                }
            } else {
                for (var f in b) {
                    a.apply(d, [b[f], f].concat(c))
                }
            }
        }
    }, ae = Y.clone = function (b) {
        var a = {};
        return af(b, function (d, c) {
            b.hasOwnProperty(c) && (a[c] = d)
        }), a
    }, ar = Y.extend = function (a) {
        return af(Array.prototype.slice.call(arguments, 1), function (b) {
            af(b, function (d, c) {
                b.hasOwnProperty(c) && (a[c] = d)
            })
        }), a
    }, ak = Y.merge = function (b, a) {
        var c = Array.prototype.slice.call(arguments, 0);
        return c.unshift({}), ar.apply(null, c)
    }, ah = Y.indexOf = function (b, a) {
        if (Array.prototype.indexOf) {
            return b.indexOf(a)
        }
        for (var c = 0; c < b.length; c++) {
            if (b[c] === a) {
                return c
            }
        }
        return -1
    }, aa = (Y.where = function (b, a) {
        var c = [];
        return Y.each(b, function (d) {
            a(d) && c.push(d)
        }), c
    }, Y.findNextWhere = function (b, a, d) {
        d || (d = -1);
        for (var c = d + 1; c < b.length; c++) {
            var f = b[c];
            if (a(f)) {
                return f
            }
        }
    }, Y.findPreviousWhere = function (b, a, d) {
        d || (d = b.length);
        for (var c = d - 1; c >= 0; c--) {
            var f = b[c];
            if (a(f)) {
                return f
            }
        }
    }, Y.inherits = function (b) {
        var a = this, d = b && b.hasOwnProperty("constructor") ? b.constructor : function () {
            return a.apply(this, arguments)
        }, c = function () {
            this.constructor = d
        };
        return c.prototype = a.prototype, d.prototype = new c, d.extend = aa, b && ar(d.prototype, b), d.__super__ = a.prototype, d
    }), ap = Y.noop = function () {
    }, V = Y.uid = function () {
        var a = 0;
        return function () {
            return "chart-" + a++
        }
    }(), ao = Y.warn = function (a) {
        window.console && "function" == typeof window.console.warn && console.warn(a)
    }, am = Y.amd = "function" == typeof define && define.amd, ad = Y.isNumber = function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a)
    }, al = Y.max = function (a) {
        return Math.max.apply(Math, a)
    }, Q = Y.min = function (a) {
        return Math.min.apply(Math, a)
    }, N = (Y.cap = function (b, a, c) {
        if (ad(a)) {
            if (b > a) {
                return a
            }
        } else {
            if (ad(c) && c > b) {
                return c
            }
        }
        return b
    }, Y.getDecimalPlaces = function (a) {
        return a % 1 !== 0 && ad(a) ? a.toString().split(".")[1].length : 0
    }), ag = Y.radians = function (a) {
        return a * (Math.PI / 180)
    }, K = (Y.getAngleFromPoint = function (b, a) {
        var d = a.x - b.x, c = a.y - b.y, g = Math.sqrt(d * d + c * c), f = 2 * Math.PI + Math.atan2(c, d);
        return 0 > d && 0 > c && (f += 2 * Math.PI), {angle: f, distance: g}
    }, Y.aliasPixel = function (a) {
        return a % 2 === 0 ? 0 : 0.5
    }), O = (Y.splineCurve = function (d, c, k, g) {
        var m = Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2)),
            l = Math.sqrt(Math.pow(k.x - c.x, 2) + Math.pow(k.y - c.y, 2)), b = g * m / (m + l), f = g * l / (m + l);
        return {
            inner: {x: c.x - b * (k.x - d.x), y: c.y - b * (k.y - d.y)},
            outer: {x: c.x + f * (k.x - d.x), y: c.y + f * (k.y - d.y)}
        }
    }, Y.calculateOrderOfMagnitude = function (a) {
        return Math.floor(Math.log(a) / Math.LN10)
    }), D = (Y.calculateScaleRange = function (T, A, F, W, w) {
        var k = 2, R = Math.floor(A / (1.5 * F)), B = k >= R, z = al(T), b = Q(T);
        z === b && (z += 0.5, b >= 0.5 && !W ? b -= 0.5 : z += 0.5);
        for (var M = Math.abs(z - b), S = O(M), L = Math.ceil(z / (1 * Math.pow(10, S))) * Math.pow(10, S), C = W ? 0 : Math.floor(b / (1 * Math.pow(10, S))) * Math.pow(10, S), g = L - C, P = Math.pow(10, S), y = Math.round(g / P); (y > R || R > 2 * y) && !B;) {
            if (y > R) {
                P *= 2, y = Math.round(g / P), y % 1 !== 0 && (B = !0)
            } else {
                if (w && S >= 0) {
                    if (P / 2 % 1 !== 0) {
                        break
                    }
                    P /= 2, y = Math.round(g / P)
                } else {
                    P /= 2, y = Math.round(g / P)
                }
            }
        }
        return B && (y = k, P = g / y), {steps: y, stepValue: P, min: C, max: C + y * P}
    }, Y.template = function (b, a) {
        function d(g, f) {
            var h = /\W/.test(g) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + g.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : c[g] = c[g];
            return f ? h(f) : h
        }

        if (b instanceof Function) {
            return b(a)
        }
        var c = {};
        return d(b, a)
    }), Z = (Y.generateLabels = function (b, a, d, c) {
        var f = new Array(a);
        return labelTemplateString && af(f, function (e, g) {
            f[g] = D(b, {value: d + c * (g + 1)})
        }), f
    }, Y.easingEffects = {
        linear: function (a) {
            return a
        }, easeInQuad: function (a) {
            return a * a
        }, easeOutQuad: function (a) {
            return -1 * a * (a - 2)
        }, easeInOutQuad: function (a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a : -0.5 * (--a * (a - 2) - 1)
        }, easeInCubic: function (a) {
            return a * a * a
        }, easeOutCubic: function (a) {
            return 1 * ((a = a / 1 - 1) * a * a + 1)
        }, easeInOutCubic: function (a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
        }, easeInQuart: function (a) {
            return a * a * a * a
        }, easeOutQuart: function (a) {
            return -1 * ((a = a / 1 - 1) * a * a * a - 1)
        }, easeInOutQuart: function (a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a * a : -0.5 * ((a -= 2) * a * a * a - 2)
        }, easeInQuint: function (a) {
            return 1 * (a /= 1) * a * a * a * a
        }, easeOutQuint: function (a) {
            return 1 * ((a = a / 1 - 1) * a * a * a * a + 1)
        }, easeInOutQuint: function (a) {
            return (a /= 0.5) < 1 ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
        }, easeInSine: function (a) {
            return -1 * Math.cos(a / 1 * (Math.PI / 2)) + 1
        }, easeOutSine: function (a) {
            return 1 * Math.sin(a / 1 * (Math.PI / 2))
        }, easeInOutSine: function (a) {
            return -0.5 * (Math.cos(Math.PI * a / 1) - 1)
        }, easeInExpo: function (a) {
            return 0 === a ? 1 : 1 * Math.pow(2, 10 * (a / 1 - 1))
        }, easeOutExpo: function (a) {
            return 1 === a ? 1 : 1 * (-Math.pow(2, -10 * a / 1) + 1)
        }, easeInOutExpo: function (a) {
            return 0 === a ? 0 : 1 === a ? 1 : (a /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (-Math.pow(2, -10 * --a) + 2)
        }, easeInCirc: function (a) {
            return a >= 1 ? a : -1 * (Math.sqrt(1 - (a /= 1) * a) - 1)
        }, easeOutCirc: function (a) {
            return 1 * Math.sqrt(1 - (a = a / 1 - 1) * a)
        }, easeInOutCirc: function (a) {
            return (a /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }, easeInElastic: function (b) {
            var a = 1.70158, d = 0, c = 1;
            return 0 === b ? 0 : 1 == (b /= 1) ? 1 : (d || (d = 0.3), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), -(c * Math.pow(2, 10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d)))
        }, easeOutElastic: function (b) {
            var a = 1.70158, d = 0, c = 1;
            return 0 === b ? 0 : 1 == (b /= 1) ? 1 : (d || (d = 0.3), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), c * Math.pow(2, -10 * b) * Math.sin((1 * b - a) * (2 * Math.PI) / d) + 1)
        }, easeInOutElastic: function (b) {
            var a = 1.70158, d = 0, c = 1;
            return 0 === b ? 0 : 2 == (b /= 0.5) ? 1 : (d || (d = 1 * (0.3 * 1.5)), c < Math.abs(1) ? (c = 1, a = d / 4) : a = d / (2 * Math.PI) * Math.asin(1 / c), 1 > b ? -0.5 * (c * Math.pow(2, 10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d)) : c * Math.pow(2, -10 * (b -= 1)) * Math.sin((1 * b - a) * (2 * Math.PI) / d) * 0.5 + 1)
        }, easeInBack: function (b) {
            var a = 1.70158;
            return 1 * (b /= 1) * b * ((a + 1) * b - a)
        }, easeOutBack: function (b) {
            var a = 1.70158;
            return 1 * ((b = b / 1 - 1) * b * ((a + 1) * b + a) + 1)
        }, easeInOutBack: function (b) {
            var a = 1.70158;
            return (b /= 0.5) < 1 ? 0.5 * (b * b * (((a *= 1.525) + 1) * b - a)) : 0.5 * ((b -= 2) * b * (((a *= 1.525) + 1) * b + a) + 2)
        }, easeInBounce: function (a) {
            return 1 - Z.easeOutBounce(1 - a)
        }, easeOutBounce: function (a) {
            return (a /= 1) < 1 / 2.75 ? 1 * (7.5625 * a * a) : 2 / 2.75 > a ? 1 * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) : 2.5 / 2.75 > a ? 1 * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) : 1 * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375)
        }, easeInOutBounce: function (a) {
            return 0.5 > a ? 0.5 * Z.easeInBounce(2 * a) : 0.5 * Z.easeOutBounce(2 * a - 1) + 0.5
        }
    }), aq = Y.requestAnimFrame = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            return window.setTimeout(a, 1000 / 60)
        }
    }(), G = Y.cancelAnimFrame = function () {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (a) {
            return window.clearTimeout(a, 1000 / 60)
        }
    }(), I = (Y.animationLoop = function (p, f, k, r, c, b) {
        var m = 0, g = Z[k] || Z.linear, d = function () {
            m++;
            var h = m / f, a = g(h);
            p.call(b, a, h, m), r.call(b, a, h), f > m ? b.animationFrame = aq(d) : c.apply(b)
        };
        aq(d)
    }, Y.getRelativePosition = function (b) {
        var a, d, c = b.originalEvent || b, g = b.currentTarget || b.srcElement, f = g.getBoundingClientRect();
        return c.touches ? (a = c.touches[0].clientX - f.left, d = c.touches[0].clientY - f.top) : (a = c.clientX - f.left, d = c.clientY - f.top), {
            x: a,
            y: d
        }
    }, Y.addEvent = function (b, a, c) {
        b.addEventListener ? b.addEventListener(a, c) : b.attachEvent ? b.attachEvent("on" + a, c) : b["on" + a] = c
    }), ai = Y.removeEvent = function (b, a, c) {
        b.removeEventListener ? b.removeEventListener(a, c, !1) : b.detachEvent ? b.detachEvent("on" + a, c) : b["on" + a] = ap
    }, U = (Y.bindEvents = function (b, a, c) {
        b.events || (b.events = {}), af(a, function (d) {
            b.events[d] = function () {
                c.apply(b, arguments)
            }, I(b.chart.canvas, d, b.events[d])
        })
    }, Y.unbindEvents = function (b, a) {
        af(a, function (c, d) {
            ai(b.chart.canvas, d, c)
        })
    }), J = Y.getMaximumWidth = function (b) {
        var a = b.parentNode;
        return a.clientWidth
    }, q = Y.getMaximumHeight = function (b) {
        var a = b.parentNode;
        return a.clientHeight
    }, H = (Y.getMaximumSize = Y.getMaximumWidth, Y.retinaScale = function (b) {
        var a = b.ctx, d = b.canvas.width, c = b.canvas.height;
        window.devicePixelRatio && (a.canvas.style.width = d + "px", a.canvas.style.height = c + "px", a.canvas.height = c * window.devicePixelRatio, a.canvas.width = d * window.devicePixelRatio, a.scale(window.devicePixelRatio, window.devicePixelRatio))
    }), E = Y.clear = function (a) {
        a.ctx.clearRect(0, 0, a.width, a.height)
    }, ac = Y.fontString = function (b, a, c) {
        return a + " " + b + "px " + c
    }, j = Y.longestText = function (b, a, d) {
        b.font = a;
        var c = 0;
        return af(d, function (f) {
            var g = b.measureText(f).width;
            c = g > c ? g : c
        }), c
    }, ab = Y.drawRoundedRectangle = function (b, a, d, c, g, f) {
        b.beginPath(), b.moveTo(a + f, d), b.lineTo(a + c - f, d), b.quadraticCurveTo(a + c, d, a + c, d + f), b.lineTo(a + c, d + g - f), b.quadraticCurveTo(a + c, d + g, a + c - f, d + g), b.lineTo(a + f, d + g), b.quadraticCurveTo(a, d + g, a, d + g - f), b.lineTo(a, d + f), b.quadraticCurveTo(a, d, a + f, d), b.closePath()
    };
    an.instances = {}, an.Type = function (b, a, c) {
        this.options = a, this.chart = c, this.id = V(), an.instances[this.id] = this, a.responsive && this.resize(), this.initialize.call(this, b)
    }, ar(an.Type.prototype, {
        initialize: function () {
            return this
        }, clear: function () {
            return E(this.chart), this
        }, stop: function () {
            return G(this.animationFrame), this
        }, resize: function (b) {
            this.stop();
            var a = this.chart.canvas, d = J(this.chart.canvas),
                c = this.options.maintainAspectRatio ? d / this.chart.aspectRatio : q(this.chart.canvas);
            return a.width = this.chart.width = d, a.height = this.chart.height = c, H(this.chart), "function" == typeof b && b.apply(this, Array.prototype.slice.call(arguments, 1)), this
        }, reflow: ap, render: function (a) {
            return a && this.reflow(), this.options.animation && !a ? Y.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        }, generateLegend: function () {
            return D(this.options.legendTemplate, this)
        }, destroy: function () {
            this.clear(), U(this, this.events);
            var a = this.chart.canvas;
            a.width = this.chart.width, a.height = this.chart.height, a.style.removeProperty ? (a.style.removeProperty("width"), a.style.removeProperty("height")) : (a.style.removeAttribute("width"), a.style.removeAttribute("height")), delete an.instances[this.id]
        }, showTooltip: function (p, f) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var e = function (c) {
                var a = !1;
                return c.length !== this.activeElements.length ? a = !0 : (af(c, function (d, h) {
                    d !== this.activeElements[h] && (a = !0)
                }, this), a)
            }.call(this, p);
            if (e || f) {
                if (this.activeElements = p, this.draw(), this.options.customTooltips && this.options.customTooltips(!1), p.length > 0) {
                    if (this.datasets && this.datasets.length > 1) {
                        for (var m, g, b = this.datasets.length - 1; b >= 0 && (m = this.datasets[b].points || this.datasets[b].bars || this.datasets[b].segments, g = ah(m, p[0]), -1 === g); b--) {
                        }
                        var l = [], n = [], k = function (A) {
                            var w, x, s, h, z, u = [], c = [], y = [];
                            return Y.each(this.datasets, function (a) {
                                a.showTooltips !== !1 && (w = a.points || a.bars || a.segments, w[g] && w[g].hasValue() && u.push(w[g]))
                            }), Y.each(u, function (a) {
                                c.push(a.x), y.push(a.y), l.push(Y.template(this.options.multiTooltipTemplate, a)), n.push({
                                    fill: a._saved.fillColor || a.fillColor,
                                    stroke: a._saved.strokeColor || a.strokeColor
                                })
                            }, this), z = Q(y), s = al(y), h = Q(c), x = al(c), {
                                x: h > this.chart.width / 2 ? h : x,
                                y: (z + s) / 2
                            }
                        }.call(this, g);
                        new an.MultiTooltip({
                            x: k.x,
                            y: k.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: l,
                            legendColors: n,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: p[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else {
                        af(p, function (c) {
                            var a = c.tooltipPosition();
                            new an.Tooltip({
                                x: Math.round(a.x),
                                y: Math.round(a.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: D(this.options.tooltipTemplate, c),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this)
                    }
                }
                return this
            }
        }, toBase64Image: function () {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), an.Type.extend = function (c) {
        var b = this, d = function () {
            return b.apply(this, arguments)
        };
        if (d.prototype = ae(b.prototype), ar(d.prototype, c), d.extend = an.Type.extend, c.name || b.prototype.name) {
            var e = c.name || b.prototype.name,
                a = an.defaults[b.prototype.name] ? ae(an.defaults[b.prototype.name]) : {};
            an.defaults[e] = ar(a, c.defaults), an.types[e] = d, an.prototype[e] = function (g, f) {
                var h = ak(an.defaults.global, an.defaults[e], f || {});
                return new d(g, h, this)
            }
        } else {
            ao("Name not provided for this chart, so it hasn't been registered")
        }
        return b
    }, an.Element = function (a) {
        ar(this, a), this.initialize.apply(this, arguments), this.save()
    }, ar(an.Element.prototype, {
        initialize: function () {
        }, restore: function (a) {
            return a ? af(a, function (b) {
                this[b] = this._saved[b]
            }, this) : ar(this, this._saved), this
        }, save: function () {
            return this._saved = ae(this), delete this._saved._saved, this
        }, update: function (a) {
            return af(a, function (c, b) {
                this._saved[b] = this[b], this[b] = c
            }, this), this
        }, transition: function (b, a) {
            return af(b, function (c, d) {
                this[d] = (c - this._saved[d]) * a + this._saved[d]
            }, this), this
        }, tooltipPosition: function () {
            return {x: this.x, y: this.y}
        }, hasValue: function () {
            return ad(this.value)
        }
    }), an.Element.extend = aa, an.Point = an.Element.extend({
        display: !0, inRange: function (b, a) {
            var c = this.hitDetectionRadius + this.radius;
            return Math.pow(b - this.x, 2) + Math.pow(a - this.y, 2) < Math.pow(c, 2)
        }, draw: function () {
            if (this.display) {
                var a = this.ctx;
                a.beginPath(), a.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.stroke()
            }
        }
    }), an.Arc = an.Element.extend({
        inRange: function (b, a) {
            var c = Y.getAngleFromPoint(this, {x: b, y: a}), f = c.angle >= this.startAngle && c.angle <= this.endAngle,
                d = c.distance >= this.innerRadius && c.distance <= this.outerRadius;
            return f && d
        }, tooltipPosition: function () {
            var b = this.startAngle + (this.endAngle - this.startAngle) / 2,
                a = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {x: this.x + Math.cos(b) * a, y: this.y + Math.sin(b) * a}
        }, draw: function (b) {
            var a = this.ctx;
            a.beginPath(), a.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), a.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), a.closePath(), a.strokeStyle = this.strokeColor, a.lineWidth = this.strokeWidth, a.fillStyle = this.fillColor, a.fill(), a.lineJoin = "bevel", this.showStroke && a.stroke()
        }
    }), an.Rectangle = an.Element.extend({
        draw: function () {
            var b = this.ctx, a = this.width / 2, d = this.x - a, c = this.x + a, g = this.base - (this.base - this.y),
                f = this.strokeWidth / 2;
            this.showStroke && (d += f, c -= f, g += f), b.beginPath(), b.fillStyle = this.fillColor, b.strokeStyle = this.strokeColor, b.lineWidth = this.strokeWidth, b.moveTo(d, this.base), b.lineTo(d, g), b.lineTo(c, g), b.lineTo(c, this.base), b.fill(), this.showStroke && b.stroke()
        }, height: function () {
            return this.base - this.y
        }, inRange: function (b, a) {
            return b >= this.x - this.width / 2 && b <= this.x + this.width / 2 && a >= this.y && a <= this.base
        }
    }), an.Tooltip = an.Element.extend({
        draw: function () {
            var d = this.chart.ctx;
            d.font = ac(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var c = this.caretPadding = 2, g = d.measureText(this.text).width + 2 * this.xPadding,
                f = this.fontSize + 2 * this.yPadding, k = f + this.caretHeight + c;
            this.x + g / 2 > this.chart.width ? this.xAlign = "left" : this.x - g / 2 < 0 && (this.xAlign = "right"), this.y - k < 0 && (this.yAlign = "below");
            var h = this.x - g / 2, b = this.y - k;
            if (d.fillStyle = this.fillColor, this.custom) {
                this.custom(this)
            } else {
                switch (this.yAlign) {
                    case"above":
                        d.beginPath(), d.moveTo(this.x, this.y - c), d.lineTo(this.x + this.caretHeight, this.y - (c + this.caretHeight)), d.lineTo(this.x - this.caretHeight, this.y - (c + this.caretHeight)), d.closePath(), d.fill();
                        break;
                    case"below":
                        b = this.y + c + this.caretHeight, d.beginPath(), d.moveTo(this.x, this.y + c), d.lineTo(this.x + this.caretHeight, this.y + c + this.caretHeight), d.lineTo(this.x - this.caretHeight, this.y + c + this.caretHeight), d.closePath(), d.fill()
                }
                switch (this.xAlign) {
                    case"left":
                        h = this.x - g + (this.cornerRadius + this.caretHeight);
                        break;
                    case"right":
                        h = this.x - (this.cornerRadius + this.caretHeight)
                }
                ab(d, h, b, g, f, this.cornerRadius), d.fill(), d.fillStyle = this.textColor, d.textAlign = "center", d.textBaseline = "middle", d.fillText(this.text, h + g / 2, b + f / 2)
            }
        }
    }), an.MultiTooltip = an.Element.extend({
        initialize: function () {
            this.font = ac(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = ac(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var b = this.ctx.measureText(this.title).width, a = j(this.ctx, this.font, this.labels) + this.fontSize + 3,
                d = al([a, b]);
            this.width = d + 2 * this.xPadding;
            var c = this.height / 2;
            this.y - c < 0 ? this.y = c : this.y + c > this.chart.height && (this.y = this.chart.height - c), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        }, getLineHeight: function (b) {
            var a = this.y - this.height / 2 + this.yPadding, c = b - 1;
            return 0 === b ? a + this.titleFontSize / 2 : a + (1.5 * this.fontSize * c + this.fontSize / 2) + 1.5 * this.titleFontSize
        }, draw: function () {
            if (this.custom) {
                this.custom(this)
            } else {
                ab(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var a = this.ctx;
                a.fillStyle = this.fillColor, a.fill(), a.closePath(), a.textAlign = "left", a.textBaseline = "middle", a.fillStyle = this.titleTextColor, a.font = this.titleFont, a.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), a.font = this.font, Y.each(this.labels, function (b, c) {
                    a.fillStyle = this.textColor, a.fillText(b, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(c + 1)), a.fillStyle = this.legendColorBackground, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize), a.fillStyle = this.legendColors[c].fill, a.fillRect(this.x + this.xPadding, this.getLineHeight(c + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }), an.Scale = an.Element.extend({
        initialize: function () {
            this.fit()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var b = N(this.stepValue), a = 0; a <= this.steps; a++) {
                this.yLabels.push(D(this.templateString, {value: (this.min + a * this.stepValue).toFixed(b)}))
            }
            this.yLabelWidth = this.display && this.showLabels ? j(this.ctx, this.font, this.yLabels) : 0
        }, addXLabel: function (a) {
            this.xLabels.push(a), this.valuesCount++, this.fit()
        }, removeXLabel: function () {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        }, fit: function () {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var b, a = this.endPoint - this.startPoint;
            for (this.calculateYRange(a), this.buildYLabels(), this.calculateXLabelRotation(); a > this.endPoint - this.startPoint;) {
                a = this.endPoint - this.startPoint, b = this.yLabelWidth, this.calculateYRange(a), this.buildYLabels(), b < this.yLabelWidth && this.calculateXLabelRotation()
            }
        }, calculateXLabelRotation: function () {
            this.ctx.font = this.font;
            var d, c, g = this.ctx.measureText(this.xLabels[0]).width,
                f = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = f / 2 + 3, this.xScalePaddingLeft = g / 2 > this.yLabelWidth + 10 ? g / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var k, h = j(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = h;
                for (var b = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > b && 0 === this.xLabelRotation || this.xLabelWidth > b && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) {
                    k = Math.cos(ag(this.xLabelRotation)), d = k * g, c = k * f, d + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = d + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = k * h
                }
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(ag(this.xLabelRotation)) * h + 3)
            } else {
                this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
            }
        }, calculateYRange: ap, drawingArea: function () {
            return this.startPoint - this.endPoint
        }, calculateY: function (b) {
            var a = this.drawingArea() / (this.min - this.max);
            return this.endPoint - a * (b - this.min)
        }, calculateX: function (b) {
            var a = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                d = a / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1),
                c = d * b + this.xScalePaddingLeft;
            return this.offsetGridLines && (c += d / 2), Math.round(c)
        }, update: function (a) {
            Y.extend(this, a), this.fit()
        }, draw: function () {
            var b = this.ctx, a = (this.endPoint - this.startPoint) / this.steps,
                c = Math.round(this.xScalePaddingLeft);
            if (this.display) {
                b.fillStyle = this.textColor, b.font = this.font;
                var d = this.showBeyondLine ? 5 : 0;
                af(this.yLabels, function (m, f) {
                    var g = this.endPoint - a * f, e = Math.round(g), k = this.showHorizontalLines;
                    b.textAlign = "right", b.textBaseline = "middle", this.showLabels && b.fillText(m, c - 10, g), 0 !== f || k || (k = !0), k && b.beginPath(), f > 0 ? (b.lineWidth = this.gridLineWidth, b.strokeStyle = this.gridLineColor) : (b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor), e += Y.aliasPixel(b.lineWidth), k && (b.moveTo(c, e), b.lineTo(this.width, e), b.stroke(), b.closePath()), b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor, b.beginPath(), b.moveTo(c - d, e), b.lineTo(c, e), b.stroke(), b.closePath()
                }, this), af(this.xLabels, function (g, m) {
                    var l = this.calculateX(m) + K(this.lineWidth),
                        o = this.calculateX(m - (this.offsetGridLines ? 0.5 : 0)) + K(this.lineWidth),
                        f = this.xLabelRotation > 0, k = this.showVerticalLines;
                    0 !== m || k || (k = !0), k && b.beginPath(), m > 0 ? (b.lineWidth = this.gridLineWidth, b.strokeStyle = this.gridLineColor) : (b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor), k && (b.moveTo(o, this.endPoint), b.lineTo(o, this.startPoint - 3), b.stroke(), b.closePath()), b.lineWidth = this.lineWidth, b.strokeStyle = this.lineColor, b.beginPath(), b.moveTo(o, this.endPoint), b.lineTo(o, this.endPoint + d), b.stroke(), b.closePath(), b.save(), b.translate(l, f ? this.endPoint + 12 : this.endPoint + 8), b.rotate(-1 * ag(this.xLabelRotation)), b.font = this.font, b.textAlign = f ? "right" : "center", b.textBaseline = f ? "middle" : "top", b.fillText(g, 0, 0), b.restore()
                }, this)
            }
        }
    }), an.RadialScale = an.Element.extend({
        initialize: function () {
            this.size = Q([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        }, calculateCenterOffset: function (b) {
            var a = this.drawingArea / (this.max - this.min);
            return (b - this.min) * a
        }, update: function () {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        }, buildYLabels: function () {
            this.yLabels = [];
            for (var b = N(this.stepValue), a = 0; a <= this.steps; a++) {
                this.yLabels.push(D(this.templateString, {value: (this.min + a * this.stepValue).toFixed(b)}))
            }
        }, getCircumference: function () {
            return 2 * Math.PI / this.valuesCount
        }, setScaleSize: function () {
            var M, w, A, P, m, k, F, x, p, b, C, L,
                B = Q([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), z = this.width, y = 0;
            for (this.ctx.font = ac(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), w = 0; w < this.valuesCount; w++) {
                M = this.getPointPosition(w, B), A = this.ctx.measureText(D(this.templateString, {value: this.labels[w]})).width + 5, 0 === w || w === this.valuesCount / 2 ? (P = A / 2, M.x + P > z && (z = M.x + P, m = w), M.x - P < y && (y = M.x - P, F = w)) : w < this.valuesCount / 2 ? M.x + A > z && (z = M.x + A, m = w) : w > this.valuesCount / 2 && M.x - A < y && (y = M.x - A, F = w)
            }
            p = y, b = Math.ceil(z - this.width), k = this.getIndexAngle(m), x = this.getIndexAngle(F), C = b / Math.sin(k + Math.PI / 2), L = p / Math.sin(x + Math.PI / 2), C = ad(C) ? C : 0, L = ad(L) ? L : 0, this.drawingArea = B - (L + C) / 2, this.setCenterPoint(L, C)
        }, setCenterPoint: function (b, a) {
            var d = this.width - a - this.drawingArea, c = b + this.drawingArea;
            this.xCenter = (c + d) / 2, this.yCenter = this.height / 2
        }, getIndexAngle: function (b) {
            var a = 2 * Math.PI / this.valuesCount;
            return b * a - Math.PI / 2
        }, getPointPosition: function (b, a) {
            var c = this.getIndexAngle(b);
            return {x: Math.cos(c) * a + this.xCenter, y: Math.sin(c) * a + this.yCenter}
        }, draw: function () {
            if (this.display) {
                var n = this.ctx;
                if (af(this.yLabels, function (r, x) {
                        if (x > 0) {
                            var w, z = x * (this.drawingArea / this.steps), y = this.yCenter - z;
                            if (this.lineWidth > 0) {
                                if (n.strokeStyle = this.lineColor, n.lineWidth = this.lineWidth, this.lineArc) {
                                    n.beginPath(), n.arc(this.xCenter, this.yCenter, z, 0, 2 * Math.PI), n.closePath(), n.stroke()
                                } else {
                                    n.beginPath();
                                    for (var l = 0; l < this.valuesCount; l++) {
                                        w = this.getPointPosition(l, this.calculateCenterOffset(this.min + x * this.stepValue)), 0 === l ? n.moveTo(w.x, w.y) : n.lineTo(w.x, w.y)
                                    }
                                    n.closePath(), n.stroke()
                                }
                            }
                            if (this.showLabels) {
                                if (n.font = ac(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var u = n.measureText(r).width;
                                    n.fillStyle = this.backdropColor, n.fillRect(this.xCenter - u / 2 - this.backdropPaddingX, y - this.fontSize / 2 - this.backdropPaddingY, u + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                n.textAlign = "center", n.textBaseline = "middle", n.fillStyle = this.fontColor, n.fillText(r, this.xCenter, y)
                            }
                        }
                    }, this), !this.lineArc) {
                    n.lineWidth = this.angleLineWidth, n.strokeStyle = this.angleLineColor;
                    for (var f = this.valuesCount - 1; f >= 0; f--) {
                        if (this.angleLineWidth > 0) {
                            var k = this.getPointPosition(f, this.calculateCenterOffset(this.max));
                            n.beginPath(), n.moveTo(this.xCenter, this.yCenter), n.lineTo(k.x, k.y), n.stroke(), n.closePath()
                        }
                        var p = this.getPointPosition(f, this.calculateCenterOffset(this.max) + 5);
                        n.font = ac(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), n.fillStyle = this.pointLabelFontColor;
                        var c = this.labels.length, m = this.labels.length / 2, g = m / 2, d = g > f || f > c - g,
                            b = f === g || f === c - g;
                        0 === f ? n.textAlign = "center" : f === m ? n.textAlign = "center" : m > f ? n.textAlign = "left" : n.textAlign = "right", b ? n.textBaseline = "middle" : d ? n.textBaseline = "bottom" : n.textBaseline = "top", n.fillText(this.labels[f], p.x, p.y)
                    }
                }
            }
        }
    }), Y.addEvent(window, "resize", function () {
        var a;
        return function () {
            clearTimeout(a), a = setTimeout(function () {
                af(an.instances, function (b) {
                    b.options.responsive && b.resize(b.render, !0)
                })
            }, 50)
        }
    }()), am ? define(function () {
        return an
    }) : "object" == typeof module && module.exports && (module.exports = an), aj.Chart = an, X.fn.chart = function () {
        var a = [];
        return this.each(function () {
            a.push(new an(this.getContext("2d")))
        }), 1 === a.length ? a[0] : a
    }
}).call(this, jQuery), function (b) {
    var a = b && b.zui ? b.zui : this, d = a.Chart, c = d.helpers, f = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowBeyondLine: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: 0.4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Line", defaults: f, initialize: function (e) {
            this.PointClass = d.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function (g) {
                    return Math.pow(g - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (h) {
                var g = "mouseout" !== h.type ? this.getPointsAtEvent(h) : [];
                this.eachPoints(function (j) {
                    j.restore(["fillColor", "strokeColor"])
                }), c.each(g, function (j) {
                    j.fillColor = j.highlightFill, j.strokeColor = j.highlightStroke
                }), this.showTooltip(g)
            }), c.each(e.datasets, function (h) {
                if (b.zui && b.zui.Color && b.zui.Color.get) {
                    var k = b.zui.Color.get(h.color), j = k.toCssStr();
                    h.fillColor || (h.fillColor = k.clone().fade(20).toCssStr()), h.strokeColor || (h.strokeColor = j), h.pointColor || (h.pointColor = j), h.pointStrokeColor || (h.pointStrokeColor = "#fff"), h.pointHighlightFill || (h.pointHighlightFill = "#fff"), h.pointHighlightStroke || (h.pointHighlightStroke = j)
                }
                var g = {
                    label: h.label || null,
                    fillColor: h.fillColor,
                    strokeColor: h.strokeColor,
                    pointColor: h.pointColor,
                    pointStrokeColor: h.pointStrokeColor,
                    showTooltips: h.showTooltips !== !1,
                    points: []
                };
                this.datasets.push(g), c.each(h.data, function (l, m) {
                    g.points.push(new this.PointClass({
                        value: l,
                        label: e.labels[m],
                        datasetLabel: h.label,
                        strokeColor: h.pointStrokeColor,
                        fillColor: h.pointColor,
                        highlightFill: h.pointHighlightFill || h.pointColor,
                        highlightStroke: h.pointHighlightStroke || h.pointStrokeColor
                    }))
                }, this), this.buildScale(e.labels), this.eachPoints(function (m, l) {
                    c.extend(m, {x: this.scale.calculateX(l), y: this.scale.endPoint}), m.save()
                }, this)
            }, this), this.render()
        }, update: function () {
            this.scale.update(), c.each(this.activeElements, function (e) {
                e.restore(["fillColor", "strokeColor"])
            }), this.eachPoints(function (e) {
                e.save()
            }), this.render()
        }, eachPoints: function (e) {
            c.each(this.datasets, function (g) {
                c.each(g.points, e, this)
            }, this)
        }, getPointsAtEvent: function (h) {
            var g = [], j = c.getRelativePosition(h);
            return c.each(this.datasets, function (e) {
                c.each(e.points, function (k) {
                    k.inRange(j.x, j.y) && g.push(k)
                })
            }, this), g
        }, buildScale: function (g) {
            var e = this, j = function () {
                var k = [];
                return e.eachPoints(function (l) {
                    k.push(l.value)
                }), k
            }, h = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: g.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (l) {
                    var k = c.calculateScaleRange(j(), l, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, k)
                },
                xLabels: g,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                showBeyondLine: this.options.scaleShowBeyondLine,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(h, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new d.Scale(h)
        }, addData: function (g, e) {
            c.each(g, function (h, j) {
                this.datasets[j].points.push(new this.PointClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[j].pointStrokeColor,
                    fillColor: this.datasets[j].pointColor
                }))
            }, this), this.scale.addXLabel(e), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (e) {
                e.points.shift()
            }, this), this.update()
        }, reflow: function () {
            var e = c.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(e)
        }, draw: function (j) {
            var h = j || 1;
            this.clear();
            var k = this.chart.ctx, m = function (e) {
                return null !== e.value
            }, l = function (o, n, p) {
                return c.findNextWhere(n, m, p) || o
            }, g = function (o, n, p) {
                return c.findPreviousWhere(n, m, p) || o
            };
            this.scale.draw(h), c.each(this.datasets, function (e) {
                var n = c.where(e.points, m);
                c.each(e.points, function (o, p) {
                    o.hasValue() && o.transition({y: this.scale.calculateY(o.value), x: this.scale.calculateX(p)}, h)
                }, this), this.options.bezierCurve && c.each(n, function (p, o) {
                    var q = o > 0 && o < n.length - 1 ? this.options.bezierCurveTension : 0;
                    p.controlPoints = c.splineCurve(g(p, n, o), p, l(p, n, o), q), p.controlPoints.outer.y > this.scale.endPoint ? p.controlPoints.outer.y = this.scale.endPoint : p.controlPoints.outer.y < this.scale.startPoint && (p.controlPoints.outer.y = this.scale.startPoint), p.controlPoints.inner.y > this.scale.endPoint ? p.controlPoints.inner.y = this.scale.endPoint : p.controlPoints.inner.y < this.scale.startPoint && (p.controlPoints.inner.y = this.scale.startPoint)
                }, this), k.lineWidth = this.options.datasetStrokeWidth, k.strokeStyle = e.strokeColor, k.beginPath(), c.each(n, function (p, o) {
                    if (0 === o) {
                        k.moveTo(p.x, p.y)
                    } else {
                        if (this.options.bezierCurve) {
                            var q = g(p, n, o);
                            k.bezierCurveTo(q.controlPoints.outer.x, q.controlPoints.outer.y, p.controlPoints.inner.x, p.controlPoints.inner.y, p.x, p.y)
                        } else {
                            k.lineTo(p.x, p.y)
                        }
                    }
                }, this), k.stroke(), this.options.datasetFill && n.length > 0 && (k.lineTo(n[n.length - 1].x, this.scale.endPoint), k.lineTo(n[0].x, this.scale.endPoint), k.fillStyle = e.fillColor, k.closePath(), k.fill()), c.each(n, function (o) {
                    o.draw()
                })
            }, this)
        }
    }), b.fn.lineChart = function (e, g) {
        var h = [];
        return this.each(function () {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Line(e, b.extend(j.data(), g)))
        }), 1 === h.length ? h[0] : h
    }
}.call(this, jQuery), function (b) {
    var a = b && b.zui ? b.zui : this, d = a.Chart, c = d.helpers, f = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 1,
        percentageInnerCutout: 50,
        scaleShowLabels: !1,
        scaleLabel: "<%=value%>",
        scaleLabelPlacement: "auto",
        animationSteps: 60,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Doughnut", defaults: f, initialize: function (e) {
            this.segments = [], this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = d.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (h) {
                var g = "mouseout" !== h.type ? this.getSegmentsAtEvent(h) : [];
                c.each(this.segments, function (j) {
                    j.restore(["fillColor"])
                }), c.each(g, function (j) {
                    j.fillColor = j.highlightColor
                }), this.showTooltip(g)
            }), this.calculateTotal(e), c.each(e, function (h, g) {
                this.addData(h, g, !0)
            }, this), this.render()
        }, getSegmentsAtEvent: function (h) {
            var g = [], j = c.getRelativePosition(h);
            return c.each(this.segments, function (e) {
                e.inRange(j.x, j.y) && g.push(e)
            }, this), g
        }, addData: function (g, j, h) {
            if (b.zui && b.zui.Color && b.zui.Color.get) {
                var l = new b.zui.Color.get(g.color);
                g.color = l.toCssStr(), g.highlight || (g.highlight = l.lighten(5).toCssStr())
            }
            var k = j || this.segments.length;
            this.segments.splice(k, 0, new this.SegmentArc({
                id: "undefined" == typeof g.id ? k : g.id,
                value: g.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: g.color,
                highlightColor: g.highlight || g.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(g.value),
                showLabel: g.showLabel !== !1,
                label: g.label
            })), h || (this.reflow(), this.update())
        }, calculateCircumference: function (e) {
            return 2 * Math.PI * (Math.abs(e) / this.total)
        }, calculateTotal: function (e) {
            this.total = 0, c.each(e, function (g) {
                this.total += Math.abs(g.value)
            }, this)
        }, update: function () {
            this.calculateTotal(this.segments), c.each(this.activeElements, function (e) {
                e.restore(["fillColor"])
            }), c.each(this.segments, function (e) {
                e.save()
            }), this.render()
        }, removeData: function (g) {
            var e = c.isNumber(g) ? g : this.segments.length - 1;
            this.segments.splice(e, 1), this.reflow(), this.update()
        }, reflow: function () {
            c.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }), this.outerRadius = (c.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, c.each(this.segments, function (e) {
                e.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        }, drawLabel: function (E, I, B) {
            var A = this.options, L = (E.endAngle + E.startAngle) / 2, F = A.scaleLabelPlacement;
            "inside" !== F && "outside" !== F && this.chart.width - this.chart.height > 50 && E.circumference < Math.PI / 18 && (F = "outside");
            var D = Math.cos(L) * E.outerRadius, w = Math.sin(L) * E.outerRadius, K = c.template(A.scaleLabel, {
                value: "undefined" == typeof I ? E.value : Math.round(I * E.value),
                label: E.label
            }), s = this.chart.ctx;
            s.font = c.fontString(A.scaleFontSize, A.scaleFontStyle, A.scaleFontFamily), s.textBaseline = "middle", s.textAlign = "center";
            var J = (s.measureText(K).width, this.chart.width / 2), H = this.chart.height / 2;
            if ("outside" === F) {
                var z = D >= 0, G = D + J, q = w + H;
                s.textAlign = z ? "left" : "right", s.measureText(K).width, D = z ? Math.max(J + E.outerRadius + 10, D + 30 + J) : Math.min(J - E.outerRadius - 10, D - 30 + J);
                var k = A.scaleFontSize * (A.scaleLineHeight || 1), C = Math.round((0.8 * w + H) / k) + 1,
                    j = (Math.floor(this.chart.width / k) + 1, z ? 1 : -1);
                if (B[C * j] && (C > 1 ? C-- : C++), B[C * j]) {
                    return
                }
                w = (C - 1) * k + A.scaleFontSize / 2, B[C * j] = !0, s.beginPath(), s.moveTo(G, q), s.lineTo(D, w), D = z ? D + 5 : D - 5, s.lineTo(D, w), s.strokeStyle = b.zui && b.zui.Color ? new b.zui.Color(E.fillColor).fade(40).toCssStr() : E.fillColor, s.strokeWidth = A.scaleLineWidth, s.stroke(), s.fillStyle = E.fillColor
            } else {
                D = 0.7 * D + J, w = 0.7 * w + H, s.fillStyle = b.zui && b.zui.Color ? new b.zui.Color(E.fillColor).contrast().toCssStr() : "#fff"
            }
            s.fillText(K, D, w)
        }, draw: function (h) {
            var g = h ? h : 1;
            this.clear();
            var j;
            if (c.each(this.segments, function (l, m) {
                    l.transition({
                        circumference: this.calculateCircumference(l.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, g), l.endAngle = l.startAngle + l.circumference, l.draw(), 0 === m && (l.startAngle = 1.5 * Math.PI), m < this.segments.length - 1 && (this.segments[m + 1].startAngle = l.endAngle)
                }, this), this.options.scaleShowLabels) {
                var k = this.segments.slice().sort(function (l, e) {
                    return e.value - l.value
                }), j = {};
                c.each(k, function (e, l) {
                    e.showLabel && this.drawLabel(e, h, j)
                }, this)
            }
        }
    }), d.types.Doughnut.extend({
        name: "Pie",
        defaults: c.merge(f, {percentageInnerCutout: 0})
    }), b.fn.pieChart = function (e, g) {
        var h = [];
        return this.each(function () {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Pie(e, b.extend(j.data(), g)))
        }), 1 === h.length ? h[0] : h
    }, b.fn.doughnutChart = function (e, g) {
        var h = [];
        return this.each(function () {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Doughnut(e, b.extend(j.data(), g)))
        }), 1 === h.length ? h[0] : h
    }
}.call(this, jQuery), function (b) {
    var a = b && b.zui ? b.zui : this, d = a.Chart, c = d.helpers, f = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        scaleShowBeyondLine: !0,
        barShowStroke: !0,
        barStrokeWidth: 1,
        scaleValuePlacement: "auto",
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
    };
    d.Type.extend({
        name: "Bar", defaults: f, initialize: function (e) {
            var g = this.options;
            this.ScaleClass = d.Scale.extend({
                offsetGridLines: !0, calculateBarX: function (k, j, m) {
                    var l = this.calculateBaseWidth(), n = this.calculateX(m) - l / 2, h = this.calculateBarWidth(k);
                    return n + h * j + j * g.barDatasetSpacing + h / 2
                }, calculateBaseWidth: function () {
                    return this.calculateX(1) - this.calculateX(0) - 2 * g.barValueSpacing
                }, calculateBarWidth: function (j) {
                    var h = this.calculateBaseWidth() - (j - 1) * g.barDatasetSpacing;
                    return h / j
                }
            }), this.datasets = [], this.options.showTooltips && c.bindEvents(this, this.options.tooltipEvents, function (j) {
                var h = "mouseout" !== j.type ? this.getBarsAtEvent(j) : [];
                this.eachBars(function (k) {
                    k.restore(["fillColor", "strokeColor"])
                }), c.each(h, function (k) {
                    k.fillColor = k.highlightFill, k.strokeColor = k.highlightStroke
                }), this.showTooltip(h)
            }), this.BarClass = d.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }), c.each(e.datasets, function (l, p) {
                if (b.zui && b.zui.Color && b.zui.Color.get) {
                    var m = b.zui.Color.get(l.color), j = m.toCssStr();
                    l.fillColor || (l.fillColor = m.clone().fade(50).toCssStr()), l.strokeColor || (l.strokeColor = j)
                }
                var k = {label: l.label || null, fillColor: l.fillColor, strokeColor: l.strokeColor, bars: []};
                this.datasets.push(k), c.each(l.data, function (h, n) {
                    k.bars.push(new this.BarClass({
                        value: h,
                        label: e.labels[n],
                        datasetLabel: l.label,
                        strokeColor: l.strokeColor,
                        fillColor: l.fillColor,
                        highlightFill: l.highlightFill || l.fillColor,
                        highlightStroke: l.highlightStroke || l.strokeColor
                    }))
                }, this)
            }, this), this.buildScale(e.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function (j, h, k) {
                c.extend(j, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, k, h),
                    y: this.scale.endPoint
                }), j.save()
            }, this), this.render()
        }, update: function () {
            this.scale.update(), c.each(this.activeElements, function (e) {
                e.restore(["fillColor", "strokeColor"])
            }), this.eachBars(function (e) {
                e.save()
            }), this.render()
        }, eachBars: function (e) {
            c.each(this.datasets, function (g, h) {
                c.each(g.bars, e, this, h)
            }, this)
        }, getBarsAtEvent: function (j) {
            for (var h, k = [], m = c.getRelativePosition(j), l = function (e) {
                k.push(e.bars[h])
            }, g = 0; g < this.datasets.length; g++) {
                for (h = 0; h < this.datasets[g].bars.length; h++) {
                    if (this.datasets[g].bars[h].inRange(m.x, m.y)) {
                        return c.each(this.datasets, l), k
                    }
                }
            }
            return k
        }, buildScale: function (h) {
            var g = this, j = function () {
                var e = [];
                return g.eachBars(function (l) {
                    e.push(l.value)
                }), e
            }, k = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: h.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function (l) {
                    var e = c.calculateScaleRange(j(), l, this.fontSize, this.beginAtZero, this.integersOnly);
                    c.extend(this, e)
                },
                xLabels: h,
                font: c.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                showBeyondLine: this.options.scaleShowBeyondLine,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && c.extend(k, {
                calculateYRange: c.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }), this.scale = new this.ScaleClass(k)
        }, addData: function (g, e) {
            c.each(g, function (h, j) {
                this.datasets[j].bars.push(new this.BarClass({
                    value: h,
                    label: e,
                    x: this.scale.calculateBarX(this.datasets.length, j, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[j].strokeColor,
                    fillColor: this.datasets[j].fillColor
                }))
            }, this), this.scale.addXLabel(e), this.update()
        }, removeData: function () {
            this.scale.removeXLabel(), c.each(this.datasets, function (e) {
                e.bars.shift()
            }, this), this.update()
        }, reflow: function () {
            c.extend(this.BarClass.prototype, {y: this.scale.endPoint, base: this.scale.endPoint});
            var e = c.extend({height: this.chart.height, width: this.chart.width});
            this.scale.update(e)
        }, drawLabel: function (h, g) {
            var j = this.options;
            g = g || j.scaleValuePlacement, g = g ? g.toLowerCase() : "auto", "auto" === g && (g = h.y < 15 ? "insdie" : "outside");
            var l = "insdie" === g ? h.y + 10 : h.y - 10, k = this.chart.ctx;
            k.font = c.fontString(j.scaleFontSize, j.scaleFontStyle, j.scaleFontFamily), k.textBaseline = "middle", k.textAlign = "center", k.fillStyle = j.scaleFontColor, k.fillText(h.value, h.x, l)
        }, draw: function (h) {
            var g = h || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(g);
            var j = this.options.scaleShowLabels && this.options.scaleValuePlacement;
            c.each(this.datasets, function (e, k) {
                c.each(e.bars, function (l, m) {
                    l.hasValue() && (l.base = this.scale.endPoint, l.transition({
                        x: this.scale.calculateBarX(this.datasets.length, k, m),
                        y: this.scale.calculateY(l.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, g).draw()), j && this.drawLabel(l)
                }, this)
            }, this)
        }
    }), b.fn.barChart = function (e, g) {
        var h = [];
        return this.each(function () {
            var j = b(this);
            h.push(new d(this.getContext("2d")).Bar(e, b.extend(j.data(), g)))
        }), 1 === h.length ? h[0] : h
    }
}.call(this, jQuery);
(function () {
    $.ModalTriggerDefaults = {name: "ajaxModal", backdrop: "static"}
})();
(function (d, c) {
    var f = function (a, e) {
        this.$ = d(a), this.options = this.getOptions(e), this.init()
    };
    f.DEFAULTS = {}, f.prototype.getOptions = function (a) {
        return a = d.extend({}, f.DEFAULTS, this.$.data(), a)
    }, f.prototype.init = function () {
        this.handleRowClickable()
    }, f.prototype.handleRowClickable = function () {
        this.$, this.$.find('tr[data-url]:not(".app-btn") td:not(".actions")').click(function (b) {
            if (!d(b.target).is("a, .caret")) {
                var a = d(this).closest("tr").data("url");
                a && (c.location = a)
            }
        })
    }, d.fn.dataTable = function (a) {
        return this.each(function () {
            var g = d(this), e = g.data("zui.dataTable"), b = "object" == typeof a && a;
            e || g.data("zui.dataTable", e = new f(this, b)), "string" == typeof a && e[a]()
        })
    }, d.fn.dataTable.Constructor = f, d(function () {
        d("table.table-data").dataTable()
    })
}(jQuery, window, document, Math));
(function () {
    var a = function () {
        if (!config) {
            return
        }
        if (config.currentModule == "index") {
            if (config.currentMethod == "index" && window.frameElement && window.frameElement.tagName == "IFRAME") {
                window.top.location.href = location.href
            }
        } else {
            if ((!window.frameElement || window.frameElement.tagName != "IFRAME") && typeof v != "undefined" && typeof v.entryID != "undefined" && v.entryID != "") {
                location.href = config.webRoot + "sys/index.php?entryID=" + v.entryID + "&entryUrl=" + encodeURIComponent(window.location.pathname + window.location.search)
            }
        }
    };
    a();
    $(a)
}());
$.extend({
    setAjaxForm: function (c, d, b) {
        if ($(document).data("setAjaxForm:" + c)) {
            return
        }
        form = $(c);
        var a = {
            target: null, timeout: config.timeout, dataType: "json", success: function (j) {
                var h = $(c).find(":input[type=submit], .submit");
                if ($.type(j) != "object") {
                    $.enableForm(c);
                    if (j) {
                        return bootbox.alert(j)
                    }
                    return bootbox.alert("No response.")
                }
                if (j.result == "success") {
                    if (j.message && j.message.length) {
                        var k = j.placement ? j.placement : "right";
                        h.popover({trigger: "manual", content: j.message, placement: k}).popover("show");
                        h.next(".popover").addClass("popover-success");

                        function e() {
                            h.popover("destroy")
                        }

                        setTimeout(e, 2000)
                    }
                    if ($.isFunction(d)) {
                        return d(j)
                    }
                    if ($("#responser").length && j.message && j.message.length) {
                        $("#responser").html(j.message).addClass("red f-12px").show().delay(3000).fadeOut(100)
                    }
                    if (j.closeModal) {
                        setTimeout($.zui.closeModal, 1200)
                    }
                    if (j.callback) {
                        var f = window[j.callback];
                        if ($.isFunction(f)) {
                            if (f() === false) {
                                return
                            }
                        }
                    }
                    if (j.locate) {
                        if (j.locate == "loadInModal") {
                            var n = $(".modal");
                            setTimeout(function () {
                                n.load(n.attr("ref"), function () {
                                    $(this).find(".modal-dialog").css("width", $(this).data("width"));
                                    $.zui.ajustModalPosition()
                                })
                            }, 1000)
                        } else {
                            var m = j.locate == "reload" ? location.href : j.locate;
                            setTimeout(function () {
                                location.href = m
                            }, 1200)
                        }
                    }
                    if (j.ajaxReload) {
                        var g = $(j.ajaxReload);
                        if (g.length === 1) {
                            g.load(document.location.href + " " + j.ajaxReload, function () {
                                g.dataTable();
                                g.find('[data-toggle="modal"]').modalTrigger()
                            })
                        }
                    }
                    return true
                }
                $.enableForm(c);
                if ($.type(j.message) == "string") {
                    if ($("#responser").length == 0) {
                        var k = j.placement ? j.placement : "right";
                        h.popover({trigger: "manual", content: j.message, placement: k}).popover("show");
                        h.next(".popover").addClass("popover-danger");

                        function e() {
                            h.popover("destroy")
                        }

                        setTimeout(e, 2000)
                    }
                    $("#responser").html(j.message).addClass("red small text-danger").show().delay(5000).fadeOut(100)
                }
                if ($.type(j.message) == "object") {
                    $.each(j.message, function (q, w) {
                        var r = "#" + q;
                        var u = q + "Label";
                        var s = '<span id="' + u + '" for="' + q + '"  class="text-error red">';
                        s += $.type(w) == "string" ? w : w.join(";");
                        s += "</span>";
                        $("#" + u).remove();
                        var p = $(c).find(r);
                        if (p.closest(".input-group").length > 0) {
                            p.closest(".input-group").after(s)
                        } else {
                            p.parent().append(s)
                        }
                        p.css("margin-bottom", 0);
                        p.css("border-color", "#953B39");
                        p.change(function () {
                            p.css("margin-bottom", 0);
                            p.css("border-color", "");
                            $("#" + u).remove()
                        })
                    });
                    var o = $("#" + $("span.red").first().attr("for"));
                    var l;
                    if (o.length) {
                        l = parseInt(o.offset().top) - 20
                    }
                    if ($(".navbar-fixed-top").size()) {
                        l = l - parseInt($(".navbar-fixed-top").height())
                    }
                    $(document).scrollTop(l);
                    o.focus()
                }
                if ($.isFunction(d)) {
                    return d(j)
                }
            }, error: function (e, g, f) {
                $.enableForm(c);
                if (g == "timeout") {
                    bootbox.alert(v.lang.timeout);
                    return false
                }
                bootbox.alert(e.responseText + g + f)
            }
        };
        $(document).on("submit", c, function () {
            $.disableForm(c);
            if (!b || b() !== false) {
                $(this).ajaxSubmit(a)
            } else {
                $.enableForm(c)
            }
            return false
        }).data("setAjaxForm:" + c, true)
    }, setSubmitButton: function (c, b) {
        var a = $(c).find(":submit");
        label = a.val();
        loading = a.data("loading");
        disabled = b == "disable";
        a.attr("disabled", disabled);
        a.val(loading);
        a.data("loading", label)
    }, disableForm: function (a) {
        $.setSubmitButton(a, "disable")
    }, enableForm: function (a) {
        $.setSubmitButton(a, "enable")
    }
});
$.extend({
    setAjaxLoader: function (a, c) {
        var b = $("body").data("ajaxLoader");
        if (b && b[a]) {
            return
        }
        if (!b) {
            b = {}
        }
        b[a] = true;
        $("body").data("ajaxLoader", b);
        $(document).on("click", a, function () {
            var e = $(this).attr("href");
            if (!e) {
                e = $(this).data("rel")
            }
            if (!e) {
                return false
            }
            var d = $(c);
            if (!d.size()) {
                return false
            }
            var f = $(this).data("width");
            d.load(e, function () {
                if (f) {
                    d.find(".modal-dialog").css("width", f)
                }
                if (d.hasClass("modal") && $.zui.ajustModalPosition) {
                    $.zui.ajustModalPosition()
                }
            });
            return false
        })
    }, setAjaxJSONER: function (a, b) {
        $(document).on("click", a, function () {
            url = $(this).attr("href");
            if (!url) {
                url = $(this).data("rel")
            }
            if (!url) {
                return false
            }
            $.getJSON(url, function (c) {
                if ($.isFunction(b)) {
                    return b(c)
                }
                if (c.message) {
                    if ($("#responser").length) {
                        $("#responser").html(c.message);
                        $("#responser").addClass("text-info f-12px");
                        $("#responser").show().delay(3000).fadeOut(100)
                    } else {
                        bootbox.alert(c.message)
                    }
                }
                if (c.locate) {
                    return location.href = c.locate
                }
                if (c.target && c.source) {
                    $(c.target).load(c.source)
                }
            });
            return false
        })
    }, setAjaxDeleter: function (a, b) {
        $(document).on("click", a, function () {
            if (confirm(v.lang.confirmDelete)) {
                var c = $(this);
                c.text(v.lang.deleteing);
                $.getJSON(c.attr("href"), function (d) {
                    b && b(d);
                    if (d.result == "success") {
                        if (c.parents("#ajaxModal").size()) {
                            return $.reloadAjaxModal(1200)
                        }
                        if (d.locate) {
                            return location.href = d.locate
                        }
                        return location.reload()
                    } else {
                        alert(d.message);
                        return location.reload()
                    }
                })
            }
            return false
        })
    }, setReloadDeleter: function (a) {
        $(document).on("click", a, function () {
            if (confirm(v.lang.confirmDelete)) {
                var b = $(this);
                b.text(v.lang.deleteing);
                $.getJSON(b.attr("href"), function (f) {
                    var c = b.data("afterDelete");
                    if ($.isFunction(c)) {
                        $.proxy(c, b)(f)
                    }
                    if (f.result == "success") {
                        var e = $(b).closest("table");
                        var g = e.attr("id");
                        e.wrap("<div id='tmpDiv'></div>");
                        var d = $("#tmpDiv");
                        d.load(document.location.href + " #" + g, function () {
                            d.replaceWith(d.html());
                            var h = $("#" + g);
                            h.find(".reloadDeleter").data("afterDelete", c);
                            h.find('[data-toggle="modal"]').modalTrigger();
                            if (h.hasClass("table-data")) {
                                h.dataTable()
                            }
                            if (typeof sortTable == "function") {
                                sortTable()
                            } else {
                                $("tfoot td").css("background", "white").unbind("click").unbind("hover")
                            }
                        })
                    } else {
                        alert(f.message)
                    }
                })
            }
            return false
        })
    }, setReload: function (a) {
        $(document).on("click", a, function () {
            var b = $(this);
            $.getJSON(b.attr("href"), function (d) {
                if (d.result == "success") {
                    var c = $(b).closest("table");
                    var e = c.attr("id");
                    c.wrap("<div id='tmpDiv'></div>");
                    $("#tmpDiv").load(document.location.href + " #" + e, function () {
                        $("#tmpDiv").replaceWith($("#tmpDiv").html());
                        if (typeof sortTable == "function") {
                            sortTable()
                        } else {
                            $("tfoot td").css("background", "white").unbind("click").unbind("hover")
                        }
                    })
                } else {
                    alert(d.message)
                }
            });
            return false
        })
    }, reloadAjaxModal: function (a) {
        if (typeof(a) == "undefined") {
            a = 1000
        }
        setTimeout(function () {
            var b = $("#ajaxModal");
            b.load(b.attr("ref"), function () {
                $(this).find(".modal-dialog").css("width", $(this).data("width"));
                $.zui.ajustModalPosition()
            })
        }, a)
    }
});

function isNum(b) {
    if (b != null) {
        var c, a;
        a = /\d*/i;
        c = b.match(a);
        return (c == b) ? true : false
    }
    return false
}

function createLink(c, b, d, a) {
    if (!a) {
        a = config.defaultView
    }
    if (d) {
        d = d.split("&");
        for (i = 0; i < d.length; i++) {
            d[i] = d[i].split("=")
        }
    }
    appName = config.appName;
    router = config.router;
    if (c.indexOf(".") >= 0) {
        moduleNames = c.split(".");
        appName = moduleNames[0];
        c = moduleNames[1];
        router = router.replace(config.appName, appName)
    }
    if (config.requestType == "PATH_INFO") {
        link = config.webRoot + appName + "/" + c + config.requestFix + b;
        if (d) {
            if (config.pathType == "full") {
                for (i = 0; i < d.length; i++) {
                    link += config.requestFix + d[i][0] + config.requestFix + d[i][1]
                }
            } else {
                for (i = 0; i < d.length; i++) {
                    link += config.requestFix + d[i][1]
                }
            }
        }
        link += "." + a
    } else {
        link = router + "?" + config.moduleVar + "=" + c + "&" + config.methodVar + "=" + b + "&" + config.viewVar + "=" + a;
        if (d) {
            for (i = 0; i < d.length; i++) {
                link += "&" + d[i][0] + "=" + d[i][1]
            }
        }
    }
    return link
}

function setRequiredFields() {
    if (!config.requiredFields) {
        return false
    }
    requiredFields = config.requiredFields.split(",");
    for (i = 0; i < requiredFields.length; i++) {
        $("#" + requiredFields[i]).closest("td,th").prepend("<div class='required required-wrapper'></div>");
        var a = $("#" + requiredFields[i]).closest('[class*="col-"]');
        if (a.parent().hasClass("form-group")) {
            a.addClass("required")
        }
    }
}

function selectLang(a) {
    $.cookie("lang", a, {expires: config.cookieLife, path: config.webRoot});
    location.href = removeAnchor(location.href)
}

function selectTheme(a) {
    $.cookie("theme", a, {expires: config.cookieLife, path: config.webRoot});
    location.href = removeAnchor(location.href)
}

function removeAnchor(a) {
    pos = a.indexOf("#");
    if (pos > 0) {
        return a.substring(0, pos)
    }
    return a
}

function ping() {
    var b = "";
    var a = getShowedNotice().join(",");
    $.get(createLink("misc", "ping", "notice=" + a), function (c) {
        if (typeof(c.notices) != "undefined") {
            for (key in c.notices) {
                showNotice(c.notices[key])
            }
        }
    }, "json")
}

function getShowedNotice() {
    var a = [];
    $("#noticeBox").find("[id^=notice]").each(function () {
        if ($(this).data("id") != undefined) {
            a.push($(this).data("id"))
        }
    });
    return a
}

function adjustNoticePosition() {
    var a = 25;
    $("#noticeBox").find("[id^=notice]").each(function () {
        $(this).css("bottom", a + "px");
        a += $(this).outerHeight(true) - 10
    })
}

function showNotice(c) {
    if (typeof(c.type) == "undefined") {
        c.type = "success"
    }
    if (typeof(c.read) == "undefined") {
        c.read = ""
    }
    if ($("#noticeBox").length < 1) {
        $("body").append("<div id='noticeBox'></div>")
    }
    var b = $("#noticeBox");
    if ($("#notice" + c.id).length > 0) {
        $("#notice" + c.id).remove()
    }
    var a = "<div id='notice{id}' data-id='{id}' class='alert alert-{type} with-icon alert-dismissable' style='width:380px; position:fixed; bottom:25px; right:15px; z-index: 9999;'>";
    a += "<i class='icon icon-envelope-alt'></i>";
    a += "<div class='content'><p><strong>{title}</strong></p>{content}</div>";
    a += "<button type='button' class='close' data-dismiss='alert' aria-hidden='true' data-read='{read}'>×</button>";
    a += "</div>";
    a = a.replace(/\{id\}/g, c.id);
    a = a.replace(/\{title\}/g, c.title);
    a = a.replace(/\{content\}/g, c.content);
    a = a.replace(/\{type\}/g, c.type);
    a = a.replace(/\{read\}/g, c.read);
    b.append(a);
    adjustNoticePosition();
    $("#notice" + c.id).find(".close").click(function () {
        if ($(this).data("read") != "") {
            $.get($(this).data("read"), function () {
                adjustNoticePosition()
            })
        }
    });
    $("#notice" + c.id).find("a").click(function () {
        $(this).closest(".alert").find(".close").click();
        $.openEntry($(this).data("appid"), $(this).prop("href"));
        $(this).prop("href", "###");
        return false
    })
}

function fixTableHeader() {
    var c = $(".page-content > .panel > .table:not(.table-noFixedHeader), #tradeList, #todoList, #attendStat, .calendar-view .table, .table-fixedHeader");
    if (!c.length) {
        return
    }
    if (c.parent(".panel").css("display") == "none") {
        return
    }
    var b = c.find("thead");
    var f = $("#mainNavbar").outerHeight();
    var e = b.offset().top - $("#mainNavbar").outerHeight();
    var a = c.closest(".page-content");
    $(window).scroll(function () {
        if (c.parent(".panel").css("display") == "none") {
            return
        }
        var g = $("#fixedHeader");
        if (!g.length) {
            g = $('<table class="table" id="fixedHeader"></table>').attr("class", c.attr("class")).append(b.clone()).appendTo(a);
            d()
        }
        if ($(window).scrollTop() > e) {
            a.addClass("with-fixed-table")
        } else {
            a.removeClass("with-fixed-table")
        }
    }).resize(d);

    function d() {
        var j = $("#fixedHeader thead th");
        var h = b.find("th");
        for (var g = j.length - 1; g >= 0; g--) {
            $(j[g]).css("width", parseInt($(h[g]).css("width")) || $(h[g]).width())
        }
        $("#fixedHeader").css({top: f, left: c.offset().left, width: (parseInt(c.css("width")) || c.width())})
    }
}

function fixTableFooter(b) {
    var a = b.next(".table-footer");
    if (!a.length) {
        return
    }
    a.addClass("table-fixed-footer");
    var c = b.closest(".page-content");
    var f = $(window).scroll(e).resize(d);
    e();

    function e() {
        var g = b.offset().top + b.height() + a.outerHeight() / 3;
        var h = f.scrollTop() + f.height();
        c.toggleClass("with-fixed-table-footer", h < g)
    }

    function d() {
        a.css({bottom: 0, left: b.offset().left, width: b.width()});
        e()
    }
}

function condensedForm() {
    $(".form-condensed legend").click(function () {
        $(this).closest("fieldset").toggleClass("collapsed")
    })
}

function setPageActions() {
    var d = $(".page-actions"), c, b, a;
    if (d.length) {
        c = d.offset().top + d.outerHeight();
        b = d.width();
        wW = 0;
        $(window).scroll(e).resize(function () {
            var f = $(window).width();
            if (Math.abs(wW - f) < 100) {
                return
            }
            wW = f;
            d = $(".page-actions");
            d.removeClass("fixed");
            d.css("width", "100%");
            c = d.offset().top + d.outerHeight();
            b = d.width();
            e()
        });
        e()
    }

    function e() {
        if (a) {
            clearTimeout(a);
            a = null
        }
        a = setTimeout(function () {
            var h = $(window);
            var f = h.height();
            var g = c > f && h.scrollTop() < (c - f);
            if (g) {
                d.css("width", b)
            }
            $("body").toggleClass("page-actions-fixed", g);
            d.toggleClass("fixed", g)
        }, 50)
    }
}

function reloadHome() {
    $("#dashboardWrapper").load(createLink("index", "index") + " #dashboard", function () {
        $("#dashboard").dashboard({
            height: 240,
            draggable: true,
            shadowType: false,
            sensitive: true,
            afterOrdered: sortBlocks,
            afterPanelRemoved: deleteBlock,
            onResize: resizeBlock,
            panelRemovingTip: $("#dashboard").attr("data-confirm-remove-block")
        });
        $("#home .refresh-all-panel").first().click()
    });
    $.zui.closeModal()
}

function showDropMenu(c, f, d, e, b) {
    var a = $("#currentItem").closest("li");
    if (a.hasClass("show")) {
        a.removeClass("show");
        return
    }
    if (!a.data("showagain")) {
        a.data("showagain", true);
        $(document).click(function () {
            a.removeClass("show")
        });
        $("#dropMenu, #currentItem").click(function (g) {
            g.stopPropagation()
        })
    }
    $.get(createLink(c, "ajaxGetDropMenu", "objectID=" + f + "&module=" + d + "&method=" + e + "&extra=" + b), function (g) {
        $("#dropMenu").html(g).find("#search").focus()
    });
    a.addClass("show")
}

function searchItems(d, b, f, c, e, a) {
    if (d == "") {
        showMenu = 0;
        showDropResult(b, f, c, e, a)
    } else {
        d = encodeURI(d);
        if (d != "-") {
            $.get(createLink(b, "ajaxGetMatchedItems", "keywords=" + d + "&module=" + c + "&method=" + e + "&extra=" + a), function (g) {
                $("#searchResult").html(g)
            })
        }
    }
}

function switchFinished() {
    $("#search").width($("#search").width()).focus();
    $("#finishedMenu").width($("#defaultMenu").outerWidth());
    $("#searchResult").removeClass("show-suspend");
    $("#searchResult").toggleClass("show-finished")
}

function switchSuspend() {
    $("#search").width($("#search").width()).focus();
    $("#suspendMenu").width($("#defaultMenu").outerWidth());
    $("#searchResult").removeClass("show-finished");
    $("#searchResult").toggleClass("show-suspend")
}

function setFormAction(a, b, c) {
    $form = typeof(c) == "undefined" ? $("form") : $(c).closest("form");
    if (b) {
        $form.attr("target", b)
    } else {
        $form.removeAttr("target")
    }
    $form.attr("action", a).submit()
}

function fixNavbar() {
    if ($(".navbar-nav").length == 0) {
        return false
    }
    var e = $(".navbar-nav");
    var c = $("#mainNavbar").width();
    var a = $(".navbar-header").width();
    var d = e.width();
    var f = $(".dashboard-actions").length == 0 ? 100 : 200;
    if (d > c - a - f) {
        e.find(".moreMenu").removeClass("hidden");
        var b = $(".navbar-nav > li").not(".moreMenu").last();
        e.find(".moreMenu .dropdown-menu").prepend(b);
        fixNavbar()
    }
}

$(document).ready(function () {
    fixNavbar();
    setRequiredFields();
    $.setAjaxForm("#ajaxForm");
    $.setAjaxDeleter(".deleter");
    $.setReload(".reload");
    $.setReloadDeleter(".reloadDeleter");
    $.setAjaxLoader(".loadInModal", "#ajaxModal");
    $.setAjaxJSONER(".jsoner");
    if (typeof $.ipsStart != "undefined") {
        setInterval("ping()", 1000 * config.pingInterval);
        ping()
    } else {
        $(document).on("click", ".app-btn", function (a) {
            if ($(this).attr("data-id")) {
                $.openEntry($(this).attr("data-id"), $(this).data("url") || $(this).attr("href"));
                return false
            }
        })
    }
    $("body").tooltip({html: true, selector: "[data-toggle='tooltip']", container: "body"});
    fixTableHeader();
    condensedForm();
    setPageActions();
    $(document).on("click", ".reloadModal", function () {
        $.reloadAjaxModal()
    });
    $(document).on("click", "a.iframe", function (d) {
        var c = $(this);
        if (!c.data("zui.modaltrigger")) {
            var a = "";
            var b = "";
            if (c.attr("width") != "undefined") {
                a = c.attr("width")
            }
            if (c.attr("height") != "undefined") {
                b = c.attr("width")
            }
            c.modalTrigger({width: a, height: b, show: true})
        } else {
            c.trigger(".toggle.zui.modaltrigger")
        }
        d.preventDefault()
    });
    setMenu();
    initSearch();
    $(document).on("click", "#noticeAttend .close", function () {
        $.get(createLink("oa.attend", "read"))
    })
});
$(document).on("keyup", function (a) {
    if (a.keyCode == "37") {
        if ($("#ajaxModal").css("display") == "block") {
            return false
        }
        if ($("input,textarea").is(":focus")) {
            return false
        }
        preLink = ($("#pre").attr("href"));
        if (typeof(preLink) != "undefined") {
            location.href = preLink
        }
    }
    if (a.keyCode == "39") {
        if ($("#ajaxModal").css("display") == "block") {
            return false
        }
        if ($("input,textarea").is(":focus")) {
            return false
        }
        nextLink = ($("#next").attr("href"));
        if (typeof(nextLink) != "undefined") {
            location.href = nextLink
        }
    }
});

function switchMore() {
    $("#search").width($("#search").width()).focus();
    $("#moreMenu").width($("#defaultMenu").outerWidth());
    $("#searchResult").toggleClass("show-more")
}

function initSearch() {
    $searchTab = $("#bysearchTab");
    if ($searchTab.data("initSearch")) {
        return
    }
    if (!$searchTab.closest("#menu").length) {
        $("#menu > ul:first").append($searchTab)
    }
    var a = $("#querybox");
    if (!a.length) {
        a = $("<div id='querybox' class='hidden'/>").insertAfter($("#menu"))
    }
    if (v && v.mode == "bysearch") {
        $("#menu > ul > li.active").removeClass("active");
        ajaxGetSearchForm(a);
        $searchTab.addClass("active").find("a").attr("href", "#bysearch");
        a.removeClass("hidden")
    }
    $searchTab.on("click", function () {
        if ($searchTab.hasClass("active")) {
            var b = $searchTab.data("oldTab");
            $searchTab.removeClass("active");
            if (b) {
                b.addClass("active")
            } else {
                $searchTab.addClass("selected")
            }
            a.addClass("hidden")
        } else {
            $searchTab.data("oldTab", $("#menu > ul > li.active").removeClass("active")).addClass("active");
            ajaxGetSearchForm(a);
            a.removeClass("hidden")
        }
    });
    $searchTab.data("initSearch", true)
}

function ajaxGetSearchForm(a, b) {
    if (!a) {
        a = $("#querybox")
    }
    if (a.html() == "") {
        $.get(createLink("search", "buildForm"), function (c) {
            a.html(c);
            b && b()
        })
    }
}

function setMenu() {
    $menuTitle = $("#menuTitle");
    $menu = $("#menu");
    if ($menu.length && $menuTitle.length) {
        $menu.children("ul.nav:not(.pull-right)").hide();
        $menu.prepend($menuTitle.addClass("nav"))
    }
}

function removeDitto() {
    $firstTr = $(".table").find("tbody tr:first");
    $firstTr.find("td select").each(function () {
        $(this).find("option[value='ditto']").remove();
        $(this).trigger("chosen:updated")
    })
}

function startCron() {
    $.ajax({type: "GET", timeout: 100, url: createLink("cron", "ajaxExec")})
}

function setMailto(a, b) {
    link = createLink("usercontact", "ajaxGetContactMembers", "id=" + b);
    $.get(link, function (c) {
        $("#" + a).replaceWith(c);
        $("#" + a + "_chosen").remove();
        $("#" + a).chosen()
    })
};