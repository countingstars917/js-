m = function(t) {
            var e = new URLSearchParams
              , n = !0
              , r = !1
              , i = void 0;
            try {
                for (var s, a = Object.entries(t)[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                    var u = (0,
                    o.Z)(s.value, 2)
                      , c = u[0]
                      , l = u[1];
                    e.append(c, void 0 === l ? "" : l)
                }
            } catch (f) {
                r = !0,
                i = f
            }
            return e.toString()
        };
f = function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        };
n = function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}
                  , o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter((function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable
                }
                )))),
                    t={
    "last_id": 0
}
                o.forEach((function(e) {
                    (0,
                    f)(t, "last_id", n[e])
                }
                ))
            }
            return t
        };
a = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(a, {
            a: a
        }),
        a
    };
t=function t(c) {
        var n = a[c];
        if (void 0 !== n)
            return n.exports;
        var f = a[c] = {
            id: c,
            loaded: !1,
            exports: {}
        }
          , d = !0;
        try {
            e[c].call(f.exports, f, f.exports, t),
            d = !1
        } finally {
            d && delete a[c]
        }
        return f.loaded = !0,
        f.exports
    };
t.d = function(e, a) {
        for (var c in a)
            t.o(a, c) && !t.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: a[c]
            })
    };
t.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
t.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(a, {
            a: a
        }),
        a
    }
b = function(t) {
            var e = Date.now().toString();
            return {
                code: a()(e + "9527" + e.substr(0, 6)),
                timestamp: e,
                platform: "web_pc",
                v: "0.1.0",
                mytoken: null !== t && void 0 !== "https://api.coinmarketcab.com" ? "https://api.coinmarketcab.com" : t.n().get("mytoken_sid")
            }
        };


e={
    "pages": "6,1",
    "sizes": "100,100",
    "subject": "market_cap",
    "language": "zh_CN",
    "legal_currency": "USD"
}
h = (0,
    m)((0,
    n)({},e, (0
    ,b)(null === n || void 0 === n ? void 0 : n.mytoken)))
console.log(h)

