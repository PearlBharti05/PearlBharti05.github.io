! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function(e, t, i) {
    i(4), e.exports = i(3)
}, function(e, t) {
    document.addEventListener("DOMContentLoaded", (function() {
        if ("/" === window.location.pathname) {
            var e = Array.from(document.querySelectorAll(".other-work-card"));
            e.slice(0, 4).forEach((function(e) {
                e.style.display = "block"
            }));
            var t = document.querySelector("#load-more-other-work");
            t.addEventListener("click", (function(i) {
                i.preventDefault();
                var s = e.filter((function(e) {
                    return "block" !== e.style.display
                }));
                s.slice(0, 2).forEach((function(e) {
                    e.style.display = "block"
                })), s.length - 2 <= 0 && (t.disabled = !0, t.style.display = "none")
            }))
        }
    }))
}, function(e, t) {
    window.location.pathname.includes("contact") && function() {
        function e(e) {
            e.preventDefault();
            var t = e.target,
                i = function(e) {
                    var t, i = e.elements,
                        s = Object.keys(i).filter((function(e) {
                            return "honeypot" !== i[e].name || (t = i[e].value, !1)
                        })).map((function(e) {
                            return void 0 !== i[e].name ? i[e].name : i[e].length > 0 ? i[e].item(0).name : void 0
                        })).filter((function(e, t, i) {
                            return i.indexOf(e) === t && e
                        })),
                        n = {};
                    return s.forEach((function(e) {
                        var t = i[e];
                        if (n[e] = t.value, t.length) {
                            for (var s = [], a = 0; a < t.length; a++) {
                                var r = t.item(a);
                                (r.checked || r.selected) && s.push(r.value)
                            }
                            n[e] = s.join(", ")
                        }
                    })), n.formDataNameOrder = JSON.stringify(s), n.formGoogleSheetName = e.dataset.sheet || "responses", n.formGoogleSendEmail = e.dataset.email || "", {
                        data: n,
                        honeypot: t
                    }
                }(t),
                s = i.data;
            if (i.honeypot) return !1;
            ! function(e) {
                for (var t = e.querySelectorAll("button"), i = 0; i < t.length; i++) t[i].disabled = !0
            }(t);
            var n = t.action,
                a = new XMLHttpRequest;
            a.open("POST", n), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), a.onreadystatechange = function() {
                if (4 === a.readyState && 200 === a.status) {
                    t.reset();
                    var e = t.querySelector(".form-elements");
                    e && (e.style.display = "none");
                    var i = t.querySelector(".thankyou_message");
                    i && (i.style.display = "flex"), setTimeout((function() {
                        e && (e.style.display = "block"), i && (i.style.display = "none")
                    }), 5e3)
                }
            };
            var r = Object.keys(s).map((function(e) {
                return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(s[e]))
            })).join("&");
            a.send(r)
        }
        document.addEventListener("DOMContentLoaded", (function() {
            for (var t = document.querySelectorAll("form.gform"), i = 0; i < t.length; i++) t[i].addEventListener("submit", e, !1)
        }), !1)
    }()
}, function(e, t, i) {}, function(e, t, i) {
    "use strict";

    function s(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(i) {
            void 0 === e[i] ? e[i] = t[i] : s(t[i]) && s(e[i]) && Object.keys(t[i]).length > 0 && n(e[i], t[i])
        }))
    }
    i.r(t);
    var a = "undefined" != typeof document ? document : {},
        r = {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            createElementNS: function() {
                return {}
            },
            importNode: function() {
                return null
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
    n(a, r);
    var o = "undefined" != typeof window ? window : {};
    n(o, {
        document: r,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        }
    });
    class l {
        constructor(e) {
            const t = this;
            for (let i = 0; i < e.length; i += 1) t[i] = e[i];
            return t.length = e.length, this
        }
    }

    function d(e, t) {
        const i = [];
        let s = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                let n, r;
                const o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    let e = "div";
                    for (0 === o.indexOf("<li") && (e = "ul"), 0 === o.indexOf("<tr") && (e = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (e = "tr"), 0 === o.indexOf("<tbody") && (e = "table"), 0 === o.indexOf("<option") && (e = "select"), r = a.createElement(e), r.innerHTML = o, s = 0; s < r.childNodes.length; s += 1) i.push(r.childNodes[s])
                } else
                    for (n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || a).querySelectorAll(e.trim()) : [a.getElementById(e.trim().split("#")[1])], s = 0; s < n.length; s += 1) n[s] && i.push(n[s])
            } else if (e.nodeType || e === o || e === a) i.push(e);
        else if (e.length > 0 && e[0].nodeType)
            for (s = 0; s < e.length; s += 1) i.push(e[s]);
        return new l(i)
    }

    function c(e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    d.fn = l.prototype, d.Class = l, d.Dom7 = l;
    "resize scroll".split(" ");
    var h = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        u = "undefined" == typeof window ? {
            document: h,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window;
    const p = {
        addClass: function(e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[e]);
            return this
        },
        removeClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[e]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[e]);
            return this
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i].setAttribute(e, t);
                else
                    for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            let i;
            if (void 0 !== t) {
                for (let s = 0; s < this.length; s += 1) i = this[s], i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0], i) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                const t = i.getAttribute("data-" + e);
                return t || void 0
            }
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function(...e) {
            let [t, i, s, n] = e;

            function a(e) {
                const t = e.target;
                if (!t) return;
                const n = e.target.dom7EventData || [];
                if (n.indexOf(e) < 0 && n.unshift(e), d(t).is(i)) s.apply(t, n);
                else {
                    const e = d(t).parents();
                    for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && s.apply(e[t], n)
                }
            }

            function r(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const o = t.split(" ");
            let l;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (l = 0; l < o.length; l += 1) {
                        const e = o[l];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: a
                        }), t.addEventListener(e, a, n)
                    } else
                        for (l = 0; l < o.length; l += 1) {
                            const e = o[l];
                            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                                listener: s,
                                proxyListener: r
                            }), t.addEventListener(e, r, n)
                        }
            }
            return this
        },
        off: function(...e) {
            let [t, i, s, n] = e;
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const a = t.split(" ");
            for (let e = 0; e < a.length; e += 1) {
                const t = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    let r;
                    if (!i && a.dom7Listeners ? r = a.dom7Listeners[t] : i && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]), r && r.length)
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const i = r[e];
                            s && i.listener === s || s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1)) : s || (a.removeEventListener(t, i.proxyListener, n), r.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = e[0].split(" "),
                i = e[1];
            for (let s = 0; s < t.length; s += 1) {
                const n = t[s];
                for (let t = 0; t < this.length; t += 1) {
                    const s = this[t];
                    let r;
                    try {
                        r = new o.CustomEvent(n, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        r = a.createEvent("Event"), r.initEvent(n, !0, !0), r.detail = i
                    }
                    s.dom7EventData = e.filter((e, t) => t > 0), s.dispatchEvent(r), s.dom7EventData = [], delete s.dom7EventData
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = ["webkitTransitionEnd", "transitionend"],
                i = this;
            let s;

            function n(a) {
                if (a.target === this)
                    for (e.call(this, a), s = 0; s < t.length; s += 1) i.off(t[s], n)
            }
            if (e)
                for (s = 0; s < t.length; s += 1) i.on(t[s], n);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                const e = this[0],
                    t = e.getBoundingClientRect(),
                    i = a.body,
                    s = e.clientTop || i.clientTop || 0,
                    n = e.clientLeft || i.clientLeft || 0,
                    r = e === o ? o.scrollY : e.scrollTop,
                    l = e === o ? o.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - s,
                    left: t.left + l - n
                }
            }
            return null
        },
        css: function(e, t) {
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (let t in e) this[i].style[t] = e[t];
                    return this
                }
                if (this[0]) return o.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = this[0];
            let i, s;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (t.matches) return t.matches(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                for (i = d(e), s = 0; s < i.length; s += 1)
                    if (i[s] === t) return !0;
                return !1
            }
            if (e === a) return t === a;
            if (e === o) return t === o;
            if (e.nodeType || e instanceof l) {
                for (i = e.nodeType ? [e] : e, s = 0; s < i.length; s += 1)
                    if (i[s] === t) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            let i;
            return e > t - 1 ? new l([]) : e < 0 ? (i = t + e, new l(i < 0 ? [] : [this[i]])) : new l([this[e]])
        },
        append: function(...e) {
            let t;
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const i = a.createElement("div");
                        for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                    } else if (t instanceof l)
                    for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
                else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            let t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    const s = a.createElement("div");
                    for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof l)
                for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                const s = i.nextElementSibling;
                e ? d(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new l(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                const s = i.previousElementSibling;
                e ? d(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new l(t)
        },
        parent: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? d(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return d(c(t))
        },
        parents: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let s = this[i].parentNode;
                for (; s;) e ? d(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
            }
            return d(c(t))
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) t.push(s[e])
            }
            return new l(t)
        },
        children: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].childNodes;
                for (let i = 0; i < s.length; i += 1) e ? 1 === s[i].nodeType && d(s[i]).is(e) && t.push(s[i]) : 1 === s[i].nodeType && t.push(s[i])
            }
            return new l(c(t))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function(...e) {
            const t = this;
            let i, s;
            for (i = 0; i < e.length; i += 1) {
                const n = d(e[i]);
                for (s = 0; s < n.length; s += 1) t[t.length] = n[s], t.length += 1
            }
            return t
        },
        styles: function() {
            return this[0] ? o.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(p).forEach(e => {
        d.fn[e] = d.fn[e] || p[e]
    });
    const g = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: (e, t = 0) => setTimeout(e, t),
            now: () => Date.now(),
            getTranslate(e, t = "x") {
                let i, s, n;
                const a = u.getComputedStyle(e, null);
                return u.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), n = new u.WebKitCSSMatrix("none" === s ? "" : s)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), "x" === t && (s = u.WebKitCSSMatrix ? n.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = u.WebKitCSSMatrix ? n.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
            },
            parseUrlQuery(e) {
                const t = {};
                let i, s, n, a, r = e || u.location.href;
                if ("string" == typeof r && r.length)
                    for (r = r.indexOf("?") > -1 ? r.replace(/\S*\?/, "") : "", s = r.split("&").filter(e => "" !== e), a = s.length, i = 0; i < a; i += 1) n = s[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                return t
            },
            isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object,
            extend(...e) {
                const t = Object(e[0]);
                for (let i = 1; i < e.length; i += 1) {
                    const s = e[i];
                    if (null != s) {
                        const e = Object.keys(Object(s));
                        for (let i = 0, n = e.length; i < n; i += 1) {
                            const n = e[i],
                                a = Object.getOwnPropertyDescriptor(s, n);
                            void 0 !== a && a.enumerable && (g.isObject(t[n]) && g.isObject(s[n]) ? g.extend(t[n], s[n]) : !g.isObject(t[n]) && g.isObject(s[n]) ? (t[n] = {}, g.extend(t[n], s[n])) : t[n] = s[n])
                        }
                    }
                }
                return t
            }
        },
        m = function() {
            const e = h.createElement("div");
            return {
                touch: u.Modernizr && !0 === u.Modernizr.touch || !!(u.navigator.maxTouchPoints > 0 || "ontouchstart" in u || u.DocumentTouch && h instanceof u.DocumentTouch),
                pointerEvents: !!(u.navigator.pointerEnabled || u.PointerEvent || "maxTouchPoints" in u.navigator && u.navigator.maxTouchPoints > 0),
                prefixedPointerEvents: !!u.navigator.msPointerEnabled,
                transition: function() {
                    const t = e.style;
                    return "transition" in t || "webkitTransition" in t || "MozTransition" in t
                }(),
                transforms3d: u.Modernizr && !0 === u.Modernizr.csstransforms3d || function() {
                    const t = e.style;
                    return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                }(),
                flexbox: function() {
                    const t = e.style,
                        i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                    for (let e = 0; e < i.length; e += 1)
                        if (i[e] in t) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in u || "WebkitMutationObserver" in u,
                passiveListener: function() {
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        u.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in u
            }
        }(),
        f = {
            isIE: !!u.navigator.userAgent.match(/Trident/g) || !!u.navigator.userAgent.match(/MSIE/g),
            isEdge: !!u.navigator.userAgent.match(/Edge/g),
            isSafari: function() {
                const e = u.navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(u.navigator.userAgent)
        };
    class v {
        constructor(e = {}) {
            const t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e])
            })
        }
        on(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;
            const n = i ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
            }), s
        }
        once(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;

            function n(...i) {
                t.apply(s, i), s.off(e, n), n.f7proxy && delete n.f7proxy
            }
            return n.f7proxy = t, s.on(e, n, i)
        }
        off(e, t) {
            const i = this;
            return i.eventsListeners ? (e.split(" ").forEach(e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((s, n) => {
                    (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(n, 1)
                })
            }), i) : i
        }
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let i, s, n;
            "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = t) : (i = e[0].events, s = e[0].data, n = e[0].context || t);
            return (Array.isArray(i) ? i : i.split(" ")).forEach(e => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const i = [];
                    t.eventsListeners[e].forEach(e => {
                        i.push(e)
                    }), i.forEach(e => {
                        e.apply(n, s)
                    })
                }
            }), t
        }
        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const s = t.modules[i];
                s.params && g.extend(e, s.params)
            })
        }
        useModules(e = {}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const s = t.modules[i],
                    n = e[i] || {};
                s.instance && Object.keys(s.instance).forEach(e => {
                    const i = s.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }), s.on && t.on && Object.keys(s.on).forEach(e => {
                    t.on(e, s.on[e])
                }), s.create && s.create.bind(t)(n)
            })
        }
        static set components(e) {
            this.use && this.use(e)
        }
        static installModule(e, ...t) {
            const i = this;
            i.prototype.modules || (i.prototype.modules = {});
            const s = e.name || `${Object.keys(i.prototype.modules).length}_${g.now()}`;
            return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(t => {
                i.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(t => {
                i[t] = e.static[t]
            }), e.install && e.install.apply(i, t), i
        }
        static use(e, ...t) {
            const i = this;
            return Array.isArray(e) ? (e.forEach(e => i.installModule(e)), i) : i.installModule(e, ...t)
        }
    }
    var b = {
        updateSize: function() {
            const e = this;
            let t, i;
            const s = e.$el;
            t = void 0 !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10), i = i - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10), g.extend(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }))
        },
        updateSlides: function() {
            const e = this,
                t = e.params,
                {
                    $wrapperEl: i,
                    size: s,
                    rtlTranslate: n,
                    wrongRTL: a
                } = e,
                r = e.virtual && t.virtual.enabled,
                o = r ? e.virtual.slides.length : e.slides.length,
                l = i.children("." + e.params.slideClass),
                d = r ? e.virtual.slides.length : l.length;
            let c = [];
            const h = [],
                p = [];
            let v = t.slidesOffsetBefore;
            "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
            let b = t.slidesOffsetAfter;
            "function" == typeof b && (b = t.slidesOffsetAfter.call(e));
            const y = e.snapGrid.length,
                w = e.snapGrid.length;
            let x, T, C = t.spaceBetween,
                S = -v,
                E = 0,
                I = 0;
            if (void 0 === s) return;
            "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * s), e.virtualSize = -C, n ? l.css({
                marginLeft: "",
                marginTop: ""
            }) : l.css({
                marginRight: "",
                marginBottom: ""
            }), t.slidesPerColumn > 1 && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn,
                $ = x / M,
                k = Math.floor(d / t.slidesPerColumn);
            for (let i = 0; i < d; i += 1) {
                T = 0;
                const n = l.eq(i);
                if (t.slidesPerColumn > 1) {
                    let s, a, r;
                    if ("column" === t.slidesPerColumnFill || "row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                        if ("column" === t.slidesPerColumnFill) a = Math.floor(i / M), r = i - a * M, (a > k || a === k && r === M - 1) && (r += 1, r >= M && (r = 0, a += 1));
                        else {
                            const e = Math.floor(i / t.slidesPerGroup);
                            r = Math.floor(i / t.slidesPerView) - e * t.slidesPerColumn, a = i - r * t.slidesPerView - e * t.slidesPerView
                        }
                        s = a + r * x / M, n.css({
                            "-webkit-box-ordinal-group": s,
                            "-moz-box-ordinal-group": s,
                            "-ms-flex-order": s,
                            "-webkit-order": s,
                            order: s
                        })
                    } else r = Math.floor(i / $), a = i - r * $;
                    n.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== r && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", a).attr("data-swiper-row", r)
                }
                if ("none" !== n.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const i = u.getComputedStyle(n[0], null),
                            s = n[0].style.transform,
                            a = n[0].style.webkitTransform;
                        if (s && (n[0].style.transform = "none"), a && (n[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else if (e.isHorizontal()) {
                            const e = parseFloat(i.getPropertyValue("width")),
                                t = parseFloat(i.getPropertyValue("padding-left")),
                                s = parseFloat(i.getPropertyValue("padding-right")),
                                n = parseFloat(i.getPropertyValue("margin-left")),
                                a = parseFloat(i.getPropertyValue("margin-right")),
                                r = i.getPropertyValue("box-sizing");
                            T = r && "border-box" === r && !f.isIE ? e + n + a : e + t + s + n + a
                        } else {
                            const e = parseFloat(i.getPropertyValue("height")),
                                t = parseFloat(i.getPropertyValue("padding-top")),
                                s = parseFloat(i.getPropertyValue("padding-bottom")),
                                n = parseFloat(i.getPropertyValue("margin-top")),
                                a = parseFloat(i.getPropertyValue("margin-bottom")),
                                r = i.getPropertyValue("box-sizing");
                            T = r && "border-box" === r && !f.isIE ? e + n + a : e + t + s + n + a
                        }
                        s && (n[0].style.transform = s), a && (n[0].style.webkitTransform = a), t.roundLengths && (T = Math.floor(T))
                    } else T = (s - (t.slidesPerView - 1) * C) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[i] && (e.isHorizontal() ? l[i].style.width = T + "px" : l[i].style.height = T + "px");
                    l[i] && (l[i].swiperSlideSize = T), p.push(T), t.centeredSlides ? (S = S + T / 2 + E / 2 + C, 0 === E && 0 !== i && (S = S - s / 2 - C), 0 === i && (S = S - s / 2 - C), Math.abs(S) < .001 && (S = 0), t.roundLengths && (S = Math.floor(S)), I % t.slidesPerGroup == 0 && c.push(S), h.push(S)) : (t.roundLengths && (S = Math.floor(S)), I % t.slidesPerGroup == 0 && c.push(S), h.push(S), S = S + T + C), e.virtualSize += T + C, E = T, I += 1
                }
            }
            let P;
            if (e.virtualSize = Math.max(e.virtualSize, s) + b, n && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }), m.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                })), t.slidesPerColumn > 1 && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                    width: e.virtualSize + t.spaceBetween + "px"
                }) : i.css({
                    height: e.virtualSize + t.spaceBetween + "px"
                }), t.centeredSlides)) {
                P = [];
                for (let i = 0; i < c.length; i += 1) {
                    let s = c[i];
                    t.roundLengths && (s = Math.floor(s)), c[i] < e.virtualSize + c[0] && P.push(s)
                }
                c = P
            }
            if (!t.centeredSlides) {
                P = [];
                for (let i = 0; i < c.length; i += 1) {
                    let n = c[i];
                    t.roundLengths && (n = Math.floor(n)), c[i] <= e.virtualSize - s && P.push(n)
                }
                c = P, Math.floor(e.virtualSize - s) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - s)
            }
            if (0 === c.length && (c = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? n ? l.css({
                    marginLeft: C + "px"
                }) : l.css({
                    marginRight: C + "px"
                }) : l.css({
                    marginBottom: C + "px"
                })), t.centerInsufficientSlides) {
                let e = 0;
                if (p.forEach(i => {
                        e += i + (t.spaceBetween ? t.spaceBetween : 0)
                    }), e -= t.spaceBetween, e < s) {
                    const t = (s - e) / 2;
                    c.forEach((e, i) => {
                        c[i] = e - t
                    }), h.forEach((e, i) => {
                        h[i] = e + t
                    })
                }
            }
            g.extend(e, {
                slides: l,
                snapGrid: c,
                slidesGrid: h,
                slidesSizesGrid: p
            }), d !== o && e.emit("slidesLengthChange"), c.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== w && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        },
        updateAutoHeight: function(e) {
            const t = this,
                i = [];
            let s, n = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length) break;
                    i.push(t.slides.eq(e)[0])
                } else i.push(t.slides.eq(t.activeIndex)[0]);
            for (s = 0; s < i.length; s += 1)
                if (void 0 !== i[s]) {
                    const e = i[s].offsetHeight;
                    n = e > n ? e : n
                }
            n && t.$wrapperEl.css("height", n + "px")
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
        },
        updateSlidesProgress: function(e = this && this.translate || 0) {
            const t = this,
                i = t.params,
                {
                    slides: s,
                    rtlTranslate: n
                } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            n && (a = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < s.length; e += 1) {
                const r = s[e],
                    o = (a + (i.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    const n = -(a - r.swiperSlideOffset),
                        o = n + t.slidesSizesGrid[e];
                    (n >= 0 && n < t.size - 1 || o > 1 && o <= t.size || n <= 0 && o >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass))
                }
                r.progress = n ? -o : o
            }
            t.visibleSlides = d(t.visibleSlides)
        },
        updateProgress: function(e = this && this.translate || 0) {
            const t = this,
                i = t.params,
                s = t.maxTranslate() - t.minTranslate();
            let {
                progress: n,
                isBeginning: a,
                isEnd: r
            } = t;
            const o = a,
                l = r;
            0 === s ? (n = 0, a = !0, r = !0) : (n = (e - t.minTranslate()) / s, a = n <= 0, r = n >= 1), g.extend(t, {
                progress: n,
                isBeginning: a,
                isEnd: r
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n,
                    realIndex: a
                } = e,
                r = e.virtual && i.virtual.enabled;
            let o;
            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), o = r ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n), o.addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass));
            let l = o.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = t.eq(0), l.addClass(i.slideNextClass));
            let d = o.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = t.eq(-1), d.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            const t = this,
                i = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: s,
                    snapGrid: n,
                    params: a,
                    activeIndex: r,
                    realIndex: o,
                    snapIndex: l
                } = t;
            let d, c = e;
            if (void 0 === c) {
                for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? c = e : i >= s[e] && i < s[e + 1] && (c = e + 1) : i >= s[e] && (c = e);
                a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if (d = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(c / a.slidesPerGroup), d >= n.length && (d = n.length - 1), c === r) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
            const h = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            g.extend(t, {
                snapIndex: d,
                realIndex: h,
                previousIndex: r,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== h && t.emit("realIndexChange"), (t.initialized || t.runCallbacksOnInit) && t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                i = t.params,
                s = d(e.target).closest("." + i.slideClass)[0];
            let n = !1;
            if (s)
                for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === s && (n = !0);
            if (!s || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = d(s).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var y = {
        getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
            const {
                params: t,
                rtlTranslate: i,
                translate: s,
                $wrapperEl: n
            } = this;
            if (t.virtualTranslate) return i ? -s : s;
            let a = g.getTranslate(n[0], e);
            return i && (a = -a), a || 0
        },
        setTranslate: function(e, t) {
            const i = this,
                {
                    rtlTranslate: s,
                    params: n,
                    $wrapperEl: a,
                    progress: r
                } = i;
            let o, l = 0,
                d = 0;
            i.isHorizontal() ? l = s ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), n.virtualTranslate || (m.transforms3d ? a.transform(`translate3d(${l}px, ${d}px, 0px)`) : a.transform(`translate(${l}px, ${d}px)`)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
            const c = i.maxTranslate() - i.minTranslate();
            o = 0 === c ? 0 : (e - i.minTranslate()) / c, o !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var w = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e = !0, t) {
            const i = this,
                {
                    activeIndex: s,
                    params: n,
                    previousIndex: a
                } = i;
            n.autoHeight && i.updateAutoHeight();
            let r = t;
            if (r || (r = s > a ? "next" : s < a ? "prev" : "reset"), i.emit("transitionStart"), e && s !== a) {
                if ("reset" === r) return void i.emit("slideResetTransitionStart");
                i.emit("slideChangeTransitionStart"), "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e = !0, t) {
            const i = this,
                {
                    activeIndex: s,
                    previousIndex: n
                } = i;
            i.animating = !1, i.setTransition(0);
            let a = t;
            if (a || (a = s > n ? "next" : s < n ? "prev" : "reset"), i.emit("transitionEnd"), e && s !== n) {
                if ("reset" === a) return void i.emit("slideResetTransitionEnd");
                i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
            }
        }
    };
    var x = {
        slideTo: function(e = 0, t = this.params.speed, i = !0, s) {
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
                params: r,
                snapGrid: o,
                slidesGrid: l,
                previousIndex: d,
                activeIndex: c,
                rtlTranslate: h
            } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            let u = Math.floor(a / r.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
            const p = -o[u];
            if (n.updateProgress(p), r.normalizeSlideIndex)
                for (let e = 0; e < l.length; e += 1) - Math.floor(100 * p) >= Math.floor(100 * l[e]) && (a = e);
            if (n.initialized && a !== c) {
                if (!n.allowSlideNext && p < n.translate && p < n.minTranslate()) return !1;
                if (!n.allowSlidePrev && p > n.translate && p > n.maxTranslate() && (c || 0) !== a) return !1
            }
            let g;
            return g = a > c ? "next" : a < c ? "prev" : "reset", h && -p === n.translate || !h && p === n.translate ? (n.updateActiveIndex(a), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(p), "reset" !== g && (n.transitionStart(i, g), n.transitionEnd(i, g)), !1) : (0 !== t && m.transition ? (n.setTransition(t), n.setTranslate(p), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, g), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, g))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(p), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, g), n.transitionEnd(i, g)), !0)
        },
        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
            const n = this;
            let a = e;
            return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, i, s)
        },
        slideNext: function(e = this.params.speed, t = !0, i) {
            const s = this,
                {
                    params: n,
                    animating: a
                } = s;
            return n.loop ? !a && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)) : s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e = this.params.speed, t = !0, i) {
            const s = this,
                {
                    params: n,
                    animating: a,
                    snapGrid: r,
                    slidesGrid: o,
                    rtlTranslate: l
                } = s;
            if (n.loop) {
                if (a) return !1;
                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const c = d(l ? s.translate : -s.translate),
                h = r.map(e => d(e)),
                u = (o.map(e => d(e)), r[h.indexOf(c)], r[h.indexOf(c) - 1]);
            let p;
            return void 0 !== u && (p = o.indexOf(u), p < 0 && (p = s.activeIndex - 1)), s.slideTo(p, e, t, i)
        },
        slideReset: function(e = this.params.speed, t = !0, i) {
            return this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e = this.params.speed, t = !0, i) {
            const s = this;
            let n = s.activeIndex;
            const a = Math.floor(n / s.params.slidesPerGroup);
            if (a < s.snapGrid.length - 1) {
                const e = s.rtlTranslate ? s.translate : -s.translate,
                    t = s.snapGrid[a];
                e - t > (s.snapGrid[a + 1] - t) / 2 && (n = s.params.slidesPerGroup)
            }
            return s.slideTo(n, e, t, i)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: i
                } = e,
                s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, a = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                n = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - s / 2 || a > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g.nextTick(() => {
                    e.slideTo(a)
                })) : e.slideTo(a) : a > e.slides.length - s ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), g.nextTick(() => {
                    e.slideTo(a)
                })) : e.slideTo(a)
            } else e.slideTo(a)
        }
    };
    var T = {
        loopCreate: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: i
                } = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let s = i.children("." + t.slideClass);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - s.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let s = 0; s < e; s += 1) {
                        const e = d(h.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        i.append(e)
                    }
                    s = i.children("." + t.slideClass)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
            const n = [],
                a = [];
            s.each((t, i) => {
                const r = d(i);
                t < e.loopedSlides && a.push(i), t < s.length && t >= s.length - e.loopedSlides && n.push(i), r.attr("data-swiper-slide-index", t)
            });
            for (let e = 0; e < a.length; e += 1) i.append(d(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = n.length - 1; e >= 0; e -= 1) i.prepend(d(n[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this,
                {
                    params: t,
                    activeIndex: i,
                    slides: s,
                    loopedSlides: n,
                    allowSlidePrev: a,
                    allowSlideNext: r,
                    snapGrid: o,
                    rtlTranslate: l
                } = e;
            let d;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const c = -o[i] - e.getTranslate();
            if (i < n) {
                d = s.length - 3 * n + i, d += n;
                e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)
            } else if ("auto" === t.slidesPerView && i >= 2 * n || i >= s.length - n) {
                d = -s.length + i + n, d += n;
                e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)
            }
            e.allowSlidePrev = a, e.allowSlideNext = r
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: i
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var C = {
        setGrabCursor: function(e) {
            if (m.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
            const t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
        },
        unsetGrabCursor: function() {
            m.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var S = {
        appendSlide: function(e) {
            const t = this,
                {
                    $wrapperEl: i,
                    params: s
                } = t;
            if (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
            else i.append(e);
            s.loop && t.loopCreate(), s.observer && m.observer || t.update()
        },
        prependSlide: function(e) {
            const t = this,
                {
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n
                } = t;
            i.loop && t.loopDestroy();
            let a = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
                a = n + e.length
            } else s.prepend(e);
            i.loop && t.loopCreate(), i.observer && m.observer || t.update(), t.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            const i = this,
                {
                    $wrapperEl: s,
                    params: n,
                    activeIndex: a
                } = i;
            let r = a;
            n.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = s.children("." + n.slideClass));
            const o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
                l = r > e ? r + t.length : r
            } else s.append(t);
            for (let e = 0; e < d.length; e += 1) s.append(d[e]);
            n.loop && i.loopCreate(), n.observer && m.observer || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        },
        removeSlide: function(e) {
            const t = this,
                {
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n
                } = t;
            let a = n;
            i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = s.children("." + i.slideClass));
            let r, o = a;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1) r = e[i], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                o = Math.max(o, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
            i.loop && t.loopCreate(), i.observer && m.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        },
        removeAllSlides: function() {
            const e = this,
                t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t)
        }
    };
    const E = function() {
        const e = u.navigator.userAgent,
            t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: u.cordova || u.phonegap,
                phonegap: u.cordova || u.phonegap
            },
            i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            s = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            n = e.match(/(iPad).*OS\s([\d_]+)/),
            a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            r = !n && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), s && !i && (t.os = "android", t.osVersion = s[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (n || r || a) && (t.os = "ios", t.ios = !0), r && !a && (t.osVersion = r[2].replace(/_/g, "."), t.iphone = !0), n && (t.osVersion = n[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (r || n || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            const e = t.osVersion.split("."),
                i = h.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (a || r) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && i && i.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = u.devicePixelRatio || 1, t
    }();

    function I(e) {
        const t = this,
            i = t.touchEventsData,
            {
                params: s,
                touches: n
            } = t;
        if (t.animating && s.preventInteractionOnTransition) return;
        let a = e;
        if (a.originalEvent && (a = a.originalEvent), i.isTouchEvent = "touchstart" === a.type, !i.isTouchEvent && "which" in a && 3 === a.which) return;
        if (!i.isTouchEvent && "button" in a && a.button > 0) return;
        if (i.isTouched && i.isMoved) return;
        if (s.noSwiping && d(a.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) return void(t.allowClick = !0);
        if (s.swipeHandler && !d(a).closest(s.swipeHandler)[0]) return;
        n.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, n.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
        const r = n.currentX,
            o = n.currentY,
            l = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
            c = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
        if (!l || !(r <= c || r >= u.screen.width - c)) {
            if (g.extend(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), n.startX = r, n.startY = o, i.touchStartTime = g.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== a.type) {
                let e = !0;
                d(a.target).is(i.formElements) && (e = !1), h.activeElement && d(h.activeElement).is(i.formElements) && h.activeElement !== a.target && h.activeElement.blur();
                const n = e && t.allowTouchMove && s.touchStartPreventDefault;
                (s.touchStartForcePreventDefault || n) && a.preventDefault()
            }
            t.emit("touchStart", a)
        }
    }

    function M(e) {
        const t = this,
            i = t.touchEventsData,
            {
                params: s,
                touches: n,
                rtlTranslate: a
            } = t;
        let r = e;
        if (r.originalEvent && (r = r.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", r));
        if (i.isTouchEvent && "mousemove" === r.type) return;
        const o = "touchmove" === r.type ? r.targetTouches[0].pageX : r.pageX,
            l = "touchmove" === r.type ? r.targetTouches[0].pageY : r.pageY;
        if (r.preventedByNestedSwiper) return n.startX = o, void(n.startY = l);
        if (!t.allowTouchMove) return t.allowClick = !1, void(i.isTouched && (g.extend(n, {
            startX: o,
            startY: l,
            currentX: o,
            currentY: l
        }), i.touchStartTime = g.now()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
            if (t.isVertical()) {
                if (l < n.startY && t.translate <= t.maxTranslate() || l > n.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
            } else if (o < n.startX && t.translate <= t.maxTranslate() || o > n.startX && t.translate >= t.minTranslate()) return;
        if (i.isTouchEvent && h.activeElement && r.target === h.activeElement && d(r.target).is(i.formElements)) return i.isMoved = !0, void(t.allowClick = !1);
        if (i.allowTouchCallbacks && t.emit("touchMove", r), r.targetTouches && r.targetTouches.length > 1) return;
        n.currentX = o, n.currentY = l;
        const c = n.currentX - n.startX,
            u = n.currentY - n.startY;
        if (t.params.threshold && Math.sqrt(c ** 2 + u ** 2) < t.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (e = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = t.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && t.emit("touchMoveOpposite", r), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        t.allowClick = !1, r.preventDefault(), s.touchMoveStopPropagation && !s.nested && r.stopPropagation(), i.isMoved || (s.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", r)), t.emit("sliderMove", r), i.isMoved = !0;
        let p = t.isHorizontal() ? c : u;
        n.diff = p, p *= s.touchRatio, a && (p = -p), t.swipeDirection = p > 0 ? "prev" : "next", i.currentTranslate = p + i.startTranslate;
        let m = !0,
            f = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (f = 0), p > 0 && i.currentTranslate > t.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + p) ** f)) : p < 0 && i.currentTranslate < t.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - p) ** f)), m && (r.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
            if (!(Math.abs(p) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void(n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        }
        s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
            position: n[t.isHorizontal() ? "startX" : "startY"],
            time: i.touchStartTime
        }), i.velocities.push({
            position: n[t.isHorizontal() ? "currentX" : "currentY"],
            time: g.now()
        })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
    }

    function $(e) {
        const t = this,
            i = t.touchEventsData,
            {
                params: s,
                touches: n,
                rtlTranslate: a,
                $wrapperEl: r,
                slidesGrid: o,
                snapGrid: l
            } = t;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const c = g.now(),
            h = c - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), h < 300 && c - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = g.nextTick(() => {
                t && !t.destroyed && t.emit("click", d)
            }, 300)), h < 300 && c - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = g.now(), g.nextTick(() => {
                t.destroyed || (t.allowClick = !0)
            }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
        let u;
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, u = s.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
            if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (u > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    const e = i.velocities.pop(),
                        n = i.velocities.pop(),
                        a = e.position - n.position,
                        r = e.time - n.time;
                    t.velocity = a / r, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (r > 150 || g.now() - e.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                let e = 1e3 * s.freeModeMomentumRatio;
                const n = t.velocity * e;
                let o = t.translate + n;
                a && (o = -o);
                let d, c = !1;
                const h = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                let u;
                if (o < t.maxTranslate()) s.freeModeMomentumBounce ? (o + t.maxTranslate() < -h && (o = t.maxTranslate() - h), d = t.maxTranslate(), c = !0, i.allowMomentumBounce = !0) : o = t.maxTranslate(), s.loop && s.centeredSlides && (u = !0);
                else if (o > t.minTranslate()) s.freeModeMomentumBounce ? (o - t.minTranslate() > h && (o = t.minTranslate() + h), d = t.minTranslate(), c = !0, i.allowMomentumBounce = !0) : o = t.minTranslate(), s.loop && s.centeredSlides && (u = !0);
                else if (s.freeModeSticky) {
                    let e;
                    for (let t = 0; t < l.length; t += 1)
                        if (l[t] > -o) {
                            e = t;
                            break
                        }
                    o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1], o = -o
                }
                if (u && t.once("transitionEnd", () => {
                        t.loopFix()
                    }), 0 !== t.velocity) e = a ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity);
                else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && c ? (t.updateProgress(d), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(d), r.transitionEnd(() => {
                        t && !t.destroyed && t.transitionEnd()
                    }))
                })) : t.velocity ? (t.updateProgress(o), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                    t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(o), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest();
            return void((!s.freeModeMomentum || h >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
        }
        let p = 0,
            m = t.slidesSizesGrid[0];
        for (let e = 0; e < o.length; e += s.slidesPerGroup) void 0 !== o[e + s.slidesPerGroup] ? u >= o[e] && u < o[e + s.slidesPerGroup] && (p = e, m = o[e + s.slidesPerGroup] - o[e]) : u >= o[e] && (p = e, m = o[o.length - 1] - o[o.length - 2]);
        const f = (u - o[p]) / m;
        if (h > s.longSwipesMs) {
            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (f >= s.longSwipesRatio ? t.slideTo(p + s.slidesPerGroup) : t.slideTo(p)), "prev" === t.swipeDirection && (f > 1 - s.longSwipesRatio ? t.slideTo(p + s.slidesPerGroup) : t.slideTo(p))
        } else {
            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(p + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(p)
        }
    }

    function k() {
        const e = this,
            {
                params: t,
                el: i
            } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: s,
            allowSlidePrev: n,
            snapGrid: a
        } = e;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            const i = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }

    function P(e) {
        const t = this;
        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }
    var L = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
    const z = {
            update: b,
            translate: y,
            transition: w,
            slide: x,
            loop: T,
            grabCursor: C,
            manipulation: S,
            events: {
                attachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: i,
                            el: s,
                            wrapperEl: n
                        } = e;
                    e.onTouchStart = I.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = $.bind(e), e.onClick = P.bind(e);
                    const a = "container" === t.touchEventsTarget ? s : n,
                        r = !!t.nested;
                    if (m.touch || !m.pointerEvents && !m.prefixedPointerEvents) {
                        if (m.touch) {
                            const s = !("touchstart" !== i.start || !m.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a.addEventListener(i.start, e.onTouchStart, s), a.addEventListener(i.move, e.onTouchMove, m.passiveListener ? {
                                passive: !1,
                                capture: r
                            } : r), a.addEventListener(i.end, e.onTouchEnd, s)
                        }(t.simulateTouch && !E.ios && !E.android || t.simulateTouch && !m.touch && E.ios) && (a.addEventListener("mousedown", e.onTouchStart, !1), h.addEventListener("mousemove", e.onTouchMove, r), h.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else a.addEventListener(i.start, e.onTouchStart, !1), h.addEventListener(i.move, e.onTouchMove, r), h.addEventListener(i.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && a.addEventListener("click", e.onClick, !0), e.on(E.ios || E.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k, !0)
                },
                detachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: i,
                            el: s,
                            wrapperEl: n
                        } = e,
                        a = "container" === t.touchEventsTarget ? s : n,
                        r = !!t.nested;
                    if (m.touch || !m.pointerEvents && !m.prefixedPointerEvents) {
                        if (m.touch) {
                            const s = !("onTouchStart" !== i.start || !m.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            a.removeEventListener(i.start, e.onTouchStart, s), a.removeEventListener(i.move, e.onTouchMove, r), a.removeEventListener(i.end, e.onTouchEnd, s)
                        }(t.simulateTouch && !E.ios && !E.android || t.simulateTouch && !m.touch && E.ios) && (a.removeEventListener("mousedown", e.onTouchStart, !1), h.removeEventListener("mousemove", e.onTouchMove, r), h.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else a.removeEventListener(i.start, e.onTouchStart, !1), h.removeEventListener(i.move, e.onTouchMove, r), h.removeEventListener(i.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && a.removeEventListener("click", e.onClick, !0), e.off(E.ios || E.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", k)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: i,
                            loopedSlides: s = 0,
                            params: n
                        } = e,
                        a = n.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const r = e.getBreakpoint(a);
                    if (r && e.currentBreakpoint !== r) {
                        const o = r in a ? a[r] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                            const t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        const l = o || e.originalParams,
                            d = l.direction && l.direction !== n.direction,
                            c = n.loop && (l.slidesPerView !== n.slidesPerView || d);
                        d && i && e.changeDirection(), g.extend(e.params, l), g.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = r, c && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                },
                getBreakpoint: function(e) {
                    const t = this;
                    if (!e) return;
                    let i = !1;
                    const s = [];
                    Object.keys(e).forEach(e => {
                        s.push(e)
                    }), s.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                    for (let e = 0; e < s.length; e += 1) {
                        const n = s[e];
                        t.params.breakpointsInverse ? n <= u.innerWidth && (i = n) : n >= u.innerWidth && !i && (i = n)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    const {
                        classNames: e,
                        params: t,
                        rtl: i,
                        $el: s
                    } = this, n = [];
                    n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), m.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), E.android && n.push("android"), E.ios && n.push("ios"), (f.isIE || f.isEdge) && (m.pointerEvents || m.prefixedPointerEvents) && n.push("wp8-" + t.direction), n.forEach(i => {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, s, n, a) {
                    let r;

                    function o() {
                        a && a()
                    }
                    e.complete && n ? o() : t ? (r = new u.Image, r.onload = o, r.onerror = o, s && (r.sizes = s), i && (r.srcset = i), t && (r.src = t)) : o()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        const s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        O = {};
    class D extends v {
        constructor(...e) {
            let t, i;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : [t, i] = e, i || (i = {}), i = g.extend({}, i), t && !i.el && (i.el = t), super(i), Object.keys(z).forEach(e => {
                Object.keys(z[e]).forEach(t => {
                    D.prototype[t] || (D.prototype[t] = z[e][t])
                })
            });
            const s = this;
            void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(e => {
                const t = s.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0],
                        s = t.params[e];
                    if ("object" != typeof s || null === s) return;
                    if (!(e in i) || !("enabled" in s)) return;
                    !0 === i[e] && (i[e] = {
                        enabled: !0
                    }), "object" != typeof i[e] || "enabled" in i[e] || (i[e].enabled = !0), i[e] || (i[e] = {
                        enabled: !1
                    })
                }
            });
            const n = g.extend({}, L);
            s.useModulesParams(n), s.params = g.extend({}, n, O, i), s.originalParams = g.extend({}, s.params), s.passedParams = g.extend({}, i), s.$ = d;
            const a = d(s.params.el);
            if (t = a[0], !t) return;
            if (a.length > 1) {
                const e = [];
                return a.each((t, s) => {
                    const n = g.extend({}, i, {
                        el: s
                    });
                    e.push(new D(n))
                }), e
            }
            t.swiper = s, a.data("swiper", s);
            const r = a.children("." + s.params.wrapperClass);
            return g.extend(s, {
                $el: a,
                el: t,
                $wrapperEl: r,
                wrapperEl: r[0],
                classNames: [],
                slides: d(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
                rtlTranslate: "horizontal" === s.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return m.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : m.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, s.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, m.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: g.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.useModules(), s.params.init && s.init(), s
        }
        slidesPerViewDynamic() {
            const {
                params: e,
                slides: t,
                slidesGrid: i,
                size: s,
                activeIndex: n
            } = this;
            let a = 1;
            if (e.centeredSlides) {
                let e, i = t[n].swiperSlideSize;
                for (let r = n + 1; r < t.length; r += 1) t[r] && !e && (i += t[r].swiperSlideSize, a += 1, i > s && (e = !0));
                for (let r = n - 1; r >= 0; r -= 1) t[r] && !e && (i += t[r].swiperSlideSize, a += 1, i > s && (e = !0))
            } else
                for (let e = n + 1; e < t.length; e += 1) i[e] - i[n] < s && (a += 1);
            return a
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: i
            } = e;

            function s() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let n;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), n || s()), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const i = this,
                s = i.params.direction;
            return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s} wp8-${s}`).addClass(`${i.params.containerModifierClass}${e}`), (f.isIE || f.isEdge) && (m.pointerEvents || m.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`), i.params.direction = e, i.slides.each((t, i) => {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }), i.emit("changeDirection"), t && i.update()), i
        }
        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
        }
        destroy(e = !0, t = !0) {
            const i = this,
                {
                    params: s,
                    $el: n,
                    $wrapperEl: a,
                    slides: r
                } = i;
            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), g.deleteProps(i)), i.destroyed = !0), null
        }
        static extendDefaults(e) {
            g.extend(O, e)
        }
        static get extendedDefaults() {
            return O
        }
        static get defaults() {
            return L
        }
        static get Class() {
            return v
        }
        static get $() {
            return d
        }
    }
    var A = {
            name: "device",
            proto: {
                device: E
            },
            static: {
                device: E
            }
        },
        B = {
            name: "support",
            proto: {
                support: m
            },
            static: {
                support: m
            }
        },
        G = {
            name: "browser",
            proto: {
                browser: f
            },
            static: {
                browser: f
            }
        },
        H = {
            name: "resize",
            create() {
                const e = this;
                g.extend(e, {
                    resize: {
                        resizeHandler() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init() {
                    u.addEventListener("resize", this.resize.resizeHandler), u.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy() {
                    u.removeEventListener("resize", this.resize.resizeHandler), u.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
    const X = {
        func: u.MutationObserver || u.WebkitMutationObserver,
        attach(e, t = {}) {
            const i = this,
                s = new(0, X.func)(e => {
                    if (1 === e.length) return void i.emit("observerUpdate", e[0]);
                    const t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    u.requestAnimationFrame ? u.requestAnimationFrame(t) : u.setTimeout(t, 0)
                });
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(s)
        },
        init() {
            const e = this;
            if (m.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                }
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy() {
            this.observer.observers.forEach(e => {
                e.disconnect()
            }), this.observer.observers = []
        }
    };
    var N = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create() {
            g.extend(this, {
                observer: {
                    init: X.init.bind(this),
                    attach: X.attach.bind(this),
                    destroy: X.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init() {
                this.observer.init()
            },
            destroy() {
                this.observer.destroy()
            }
        }
    };
    const _ = {
        update(e) {
            const t = this,
                {
                    slidesPerView: i,
                    slidesPerGroup: s,
                    centeredSlides: n
                } = t.params,
                {
                    addSlidesBefore: a,
                    addSlidesAfter: r
                } = t.params.virtual,
                {
                    from: o,
                    to: l,
                    slides: d,
                    slidesGrid: c,
                    renderSlide: h,
                    offset: u
                } = t.virtual;
            t.updateActiveIndex();
            const p = t.activeIndex || 0;
            let m, f, v;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", n ? (f = Math.floor(i / 2) + s + a, v = Math.floor(i / 2) + s + r) : (f = i + (s - 1) + a, v = s + r);
            const b = Math.max((p || 0) - v, 0),
                y = Math.min((p || 0) + f, d.length - 1),
                w = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

            function x() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }
            if (g.extend(t.virtual, {
                    from: b,
                    to: y,
                    offset: w,
                    slidesGrid: t.slidesGrid
                }), o === b && l === y && !e) return t.slidesGrid !== c && w !== u && t.slides.css(m, w + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: w,
                from: b,
                to: y,
                slides: function() {
                    const e = [];
                    for (let t = b; t <= y; t += 1) e.push(d[t]);
                    return e
                }()
            }), void x();
            const T = [],
                C = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
            else
                for (let e = o; e <= l; e += 1)(e < b || e > y) && t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
            for (let t = 0; t < d.length; t += 1) t >= b && t <= y && (void 0 === l || e ? C.push(t) : (t > l && C.push(t), t < o && T.push(t)));
            C.forEach(e => {
                t.$wrapperEl.append(h(d[e], e))
            }), T.sort((e, t) => t - e).forEach(e => {
                t.$wrapperEl.prepend(h(d[e], e))
            }), t.$wrapperEl.children(".swiper-slide").css(m, w + "px"), x()
        },
        renderSlide(e, t) {
            const i = this,
                s = i.params.virtual;
            if (s.cache && i.virtual.cache[t]) return i.virtual.cache[t];
            const n = s.renderSlide ? d(s.renderSlide.call(i, e, t)) : d(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
            return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", t), s.cache && (i.virtual.cache[t] = n), n
        },
        appendSlide(e) {
            const t = this;
            if ("object" == typeof e && "length" in e)
                for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.push(e[i]);
            else t.virtual.slides.push(e);
            t.virtual.update(!0)
        },
        prependSlide(e) {
            const t = this,
                i = t.activeIndex;
            let s = i + 1,
                n = 1;
            if (Array.isArray(e)) {
                for (let i = 0; i < e.length; i += 1) e[i] && t.virtual.slides.unshift(e[i]);
                s = i + e.length, n = e.length
            } else t.virtual.slides.unshift(e);
            if (t.params.virtual.cache) {
                const e = t.virtual.cache,
                    i = {};
                Object.keys(e).forEach(t => {
                    i[parseInt(t, 10) + n] = e[t]
                }), t.virtual.cache = i
            }
            t.virtual.update(!0), t.slideTo(s, 0)
        },
        removeSlide(e) {
            const t = this;
            if (null == e) return;
            let i = t.activeIndex;
            if (Array.isArray(e))
                for (let s = e.length - 1; s >= 0; s -= 1) t.virtual.slides.splice(e[s], 1), t.params.virtual.cache && delete t.virtual.cache[e[s]], e[s] < i && (i -= 1), i = Math.max(i, 0);
            else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
            t.virtual.update(!0), t.slideTo(i, 0)
        },
        removeAllSlides() {
            const e = this;
            e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0)
        }
    };
    var V = {
        name: "virtual",
        params: {
            virtual: {
                enabled: !1,
                slides: [],
                cache: !0,
                renderSlide: null,
                renderExternal: null,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        },
        create() {
            g.extend(this, {
                virtual: {
                    update: _.update.bind(this),
                    appendSlide: _.appendSlide.bind(this),
                    prependSlide: _.prependSlide.bind(this),
                    removeSlide: _.removeSlide.bind(this),
                    removeAllSlides: _.removeAllSlides.bind(this),
                    renderSlide: _.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                if (!e.params.virtual.enabled) return;
                e.classNames.push(e.params.containerModifierClass + "virtual");
                const t = {
                    watchSlidesProgress: !0
                };
                g.extend(e.params, t), g.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
            },
            setTranslate() {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    };
    const F = {
        handle(e) {
            const t = this,
                {
                    rtlTranslate: i
                } = t;
            let s = e;
            s.originalEvent && (s = s.originalEvent);
            const n = s.keyCode || s.charCode;
            if (!t.allowSlideNext && (t.isHorizontal() && 39 === n || t.isVertical() && 40 === n || 34 === n)) return !1;
            if (!t.allowSlidePrev && (t.isHorizontal() && 37 === n || t.isVertical() && 38 === n || 33 === n)) return !1;
            if (!(s.shiftKey || s.altKey || s.ctrlKey || s.metaKey || h.activeElement && h.activeElement.nodeName && ("input" === h.activeElement.nodeName.toLowerCase() || "textarea" === h.activeElement.nodeName.toLowerCase()))) {
                if (t.params.keyboard.onlyInViewport && (33 === n || 34 === n || 37 === n || 39 === n || 38 === n || 40 === n)) {
                    let e = !1;
                    if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                    const s = u.innerWidth,
                        n = u.innerHeight,
                        a = t.$el.offset();
                    i && (a.left -= t.$el[0].scrollLeft);
                    const r = [
                        [a.left, a.top],
                        [a.left + t.width, a.top],
                        [a.left, a.top + t.height],
                        [a.left + t.width, a.top + t.height]
                    ];
                    for (let t = 0; t < r.length; t += 1) {
                        const i = r[t];
                        i[0] >= 0 && i[0] <= s && i[1] >= 0 && i[1] <= n && (e = !0)
                    }
                    if (!e) return
                }
                t.isHorizontal() ? (33 !== n && 34 !== n && 37 !== n && 39 !== n || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), (34 !== n && 39 !== n || i) && (33 !== n && 37 !== n || !i) || t.slideNext(), (33 !== n && 37 !== n || i) && (34 !== n && 39 !== n || !i) || t.slidePrev()) : (33 !== n && 34 !== n && 38 !== n && 40 !== n || (s.preventDefault ? s.preventDefault() : s.returnValue = !1), 34 !== n && 40 !== n || t.slideNext(), 33 !== n && 38 !== n || t.slidePrev()), t.emit("keyPress", n)
            }
        },
        enable() {
            this.keyboard.enabled || (d(h).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        },
        disable() {
            this.keyboard.enabled && (d(h).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
    };
    var Y = {
        name: "keyboard",
        params: {
            keyboard: {
                enabled: !1,
                onlyInViewport: !0
            }
        },
        create() {
            g.extend(this, {
                keyboard: {
                    enabled: !1,
                    enable: F.enable.bind(this),
                    disable: F.disable.bind(this),
                    handle: F.handle.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.keyboard.enabled && e.keyboard.enable()
            },
            destroy() {
                const e = this;
                e.keyboard.enabled && e.keyboard.disable()
            }
        }
    };
    const W = {
        lastScrollTime: g.now(),
        event: u.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            let e = "onwheel" in h;
            if (!e) {
                const t = h.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && h.implementation && h.implementation.hasFeature && !0 !== h.implementation.hasFeature("", "") && (e = h.implementation.hasFeature("Events.wheel", "3.0")), e
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0,
                i = 0,
                s = 0,
                n = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: n
            }
        },
        handleMouseEnter() {
            this.mouseEntered = !0
        },
        handleMouseLeave() {
            this.mouseEntered = !1
        },
        handle(e) {
            let t = e;
            const i = this,
                s = i.params.mousewheel;
            if (!i.mouseEntered && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            let n = 0;
            const a = i.rtlTranslate ? -1 : 1,
                r = W.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                    n = r.pixelX * a
                } else {
                    if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                    n = r.pixelY
                }
            else n = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * a : -r.pixelY;
            if (0 === n) return !0;
            if (s.invert && (n = -n), i.params.freeMode) {
                i.params.loop && i.loopFix();
                let e = i.getTranslate() + n * s.sensitivity;
                const a = i.isBeginning,
                    r = i.isEnd;
                if (e >= i.minTranslate() && (e = i.minTranslate()), e <= i.maxTranslate() && (e = i.maxTranslate()), i.setTransition(0), i.setTranslate(e), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!a && i.isBeginning || !r && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = g.nextTick(() => {
                        i.slideToClosest()
                    }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), e === i.minTranslate() || e === i.maxTranslate()) return !0
            } else {
                if (g.now() - i.mousewheel.lastScrollTime > 60)
                    if (n < 0)
                        if (i.isEnd && !i.params.loop || i.animating) {
                            if (s.releaseOnEdges) return !0
                        } else i.slideNext(), i.emit("scroll", t);
                else if (i.isBeginning && !i.params.loop || i.animating) {
                    if (s.releaseOnEdges) return !0
                } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new u.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable() {
            const e = this;
            if (!W.event) return !1;
            if (e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = d(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(W.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        },
        disable() {
            const e = this;
            if (!W.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = d(e.params.mousewheel.eventsTarged)), t.off(W.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
    };
    const j = {
        update() {
            const e = this,
                t = e.params.navigation;
            if (e.params.loop) return;
            const {
                $nextEl: i,
                $prevEl: s
            } = e.navigation;
            s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
        },
        onPrevClick(e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        },
        onNextClick(e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        },
        init() {
            const e = this,
                t = e.params.navigation;
            if (!t.nextEl && !t.prevEl) return;
            let i, s;
            t.nextEl && (i = d(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && i.length > 1 && 1 === e.$el.find(t.nextEl).length && (i = e.$el.find(t.nextEl))), t.prevEl && (s = d(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && s.length > 1 && 1 === e.$el.find(t.prevEl).length && (s = e.$el.find(t.prevEl))), i && i.length > 0 && i.on("click", e.navigation.onNextClick), s && s.length > 0 && s.on("click", e.navigation.onPrevClick), g.extend(e.navigation, {
                $nextEl: i,
                nextEl: i && i[0],
                $prevEl: s,
                prevEl: s && s[0]
            })
        },
        destroy() {
            const e = this,
                {
                    $nextEl: t,
                    $prevEl: i
                } = e.navigation;
            t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
        }
    };
    const R = {
        update() {
            const e = this,
                t = e.rtl,
                i = e.params.pagination;
            if (!i.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                n = e.pagination.$el;
            let a;
            const r = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), a > s - 1 - 2 * e.loopedSlides && (a -= s - 2 * e.loopedSlides), a > r - 1 && (a -= r), a < 0 && "bullets" !== e.params.paginationType && (a = r + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const s = e.pagination.bullets;
                let r, o, l;
                if (i.dynamicBullets && (e.pagination.bulletSize = s.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), r = a - e.pagination.dynamicBulletIndex, o = r + (Math.min(s.length, i.dynamicMainBullets) - 1), l = (o + r) / 2), s.removeClass(`${i.bulletActiveClass} ${i.bulletActiveClass}-next ${i.bulletActiveClass}-next-next ${i.bulletActiveClass}-prev ${i.bulletActiveClass}-prev-prev ${i.bulletActiveClass}-main`), n.length > 1) s.each((e, t) => {
                    const s = d(t),
                        n = s.index();
                    n === a && s.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= r && n <= o && s.addClass(i.bulletActiveClass + "-main"), n === r && s.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), n === o && s.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                });
                else {
                    if (s.eq(a).addClass(i.bulletActiveClass), i.dynamicBullets) {
                        const e = s.eq(r),
                            t = s.eq(o);
                        for (let e = r; e <= o; e += 1) s.eq(e).addClass(i.bulletActiveClass + "-main");
                        e.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), t.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")
                    }
                }
                if (i.dynamicBullets) {
                    const n = Math.min(s.length, i.dynamicMainBullets + 4),
                        a = (e.pagination.bulletSize * n - e.pagination.bulletSize) / 2 - l * e.pagination.bulletSize,
                        r = t ? "right" : "left";
                    s.css(e.isHorizontal() ? r : "top", a + "px")
                }
            }
            if ("fraction" === i.type && (n.find("." + i.currentClass).text(i.formatFractionCurrent(a + 1)), n.find("." + i.totalClass).text(i.formatFractionTotal(r))), "progressbar" === i.type) {
                let t;
                t = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const s = (a + 1) / r;
                let o = 1,
                    l = 1;
                "horizontal" === t ? o = s : l = s, n.find("." + i.progressbarFillClass).transform(`translate3d(0,0,0) scaleX(${o}) scaleY(${l})`).transition(e.params.speed)
            }
            "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(e, a + 1, r)), e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass)
        },
        render() {
            const e = this,
                t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                s = e.pagination.$el;
            let n = "";
            if ("bullets" === t.type) {
                const a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                for (let i = 0; i < a; i += 1) t.renderBullet ? n += t.renderBullet.call(e, i, t.bulletClass) : n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                s.html(n), e.pagination.bullets = s.find("." + t.bulletClass)
            }
            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, s.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, s.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        },
        init() {
            const e = this,
                t = e.params.pagination;
            if (!t.el) return;
            let i = d(t.el);
            0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", "." + t.bulletClass, (function(t) {
                t.preventDefault();
                let i = d(this).index() * e.params.slidesPerGroup;
                e.params.loop && (i += e.loopedSlides), e.slideTo(i)
            })), g.extend(e.pagination, {
                $el: i,
                el: i[0]
            }))
        },
        destroy() {
            const e = this.params.pagination;
            if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
            const t = this.pagination.$el;
            t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
        }
    };
    const q = {
        setTranslate() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t,
                rtlTranslate: i,
                progress: s
            } = e, {
                dragSize: n,
                trackSize: a,
                $dragEl: r,
                $el: o
            } = t, l = e.params.scrollbar;
            let d = n,
                c = (a - n) * s;
            i ? (c = -c, c > 0 ? (d = n - c, c = 0) : -c + n > a && (d = a + c)) : c < 0 ? (d = n + c, c = 0) : c + n > a && (d = a - c), e.isHorizontal() ? (m.transforms3d ? r.transform(`translate3d(${c}px, 0, 0)`) : r.transform(`translateX(${c}px)`), r[0].style.width = d + "px") : (m.transforms3d ? r.transform(`translate3d(0px, ${c}px, 0)`) : r.transform(`translateY(${c}px)`), r[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(() => {
                o[0].style.opacity = 0, o.transition(400)
            }, 1e3))
        },
        setTransition(e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        },
        updateSize() {
            const e = this;
            if (!e.params.scrollbar.el || !e.scrollbar.el) return;
            const {
                scrollbar: t
            } = e, {
                $dragEl: i,
                $el: s
            } = t;
            i[0].style.width = "", i[0].style.height = "";
            const n = e.isHorizontal() ? s[0].offsetWidth : s[0].offsetHeight,
                a = e.size / e.virtualSize,
                r = a * (n / e.size);
            let o;
            o = "auto" === e.params.scrollbar.dragSize ? n * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = o + "px" : i[0].style.height = o + "px", s[0].style.display = a >= 1 ? "none" : "", e.params.scrollbar.hide && (s[0].style.opacity = 0), g.extend(t, {
                trackSize: n,
                divider: a,
                moveDivider: r,
                dragSize: o
            }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
        },
        getPointerPosition(e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
        },
        setDragPosition(e) {
            const {
                scrollbar: t,
                rtlTranslate: i
            } = this, {
                $el: s,
                dragSize: n,
                trackSize: a,
                dragStartPos: r
            } = t;
            let o;
            o = (t.getPointerPosition(e) - s.offset()[this.isHorizontal() ? "left" : "top"] - (null !== r ? r : n / 2)) / (a - n), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
            const l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        },
        onDragStart(e) {
            const t = this.params.scrollbar,
                {
                    scrollbar: i,
                    $wrapperEl: s
                } = this,
                {
                    $el: n,
                    $dragEl: a
                } = i;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === a[0] || e.target === a ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), n.transition(0), t.hide && n.css("opacity", 1), this.emit("scrollbarDragStart", e)
        },
        onDragMove(e) {
            const {
                scrollbar: t,
                $wrapperEl: i
            } = this, {
                $el: s,
                $dragEl: n
            } = t;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), n.transition(0), this.emit("scrollbarDragMove", e))
        },
        onDragEnd(e) {
            const t = this,
                i = t.params.scrollbar,
                {
                    scrollbar: s
                } = t,
                {
                    $el: n
                } = s;
            t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = g.nextTick(() => {
                n.css("opacity", 0), n.transition(400)
            }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
        },
        enableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {
                scrollbar: t,
                touchEventsTouch: i,
                touchEventsDesktop: s,
                params: n
            } = e, a = t.$el[0], r = !(!m.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            }, o = !(!m.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            m.touch ? (a.addEventListener(i.start, e.scrollbar.onDragStart, r), a.addEventListener(i.move, e.scrollbar.onDragMove, r), a.addEventListener(i.end, e.scrollbar.onDragEnd, o)) : (a.addEventListener(s.start, e.scrollbar.onDragStart, r), h.addEventListener(s.move, e.scrollbar.onDragMove, r), h.addEventListener(s.end, e.scrollbar.onDragEnd, o))
        },
        disableDraggable() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {
                scrollbar: t,
                touchEventsTouch: i,
                touchEventsDesktop: s,
                params: n
            } = e, a = t.$el[0], r = !(!m.passiveListener || !n.passiveListeners) && {
                passive: !1,
                capture: !1
            }, o = !(!m.passiveListener || !n.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            m.touch ? (a.removeEventListener(i.start, e.scrollbar.onDragStart, r), a.removeEventListener(i.move, e.scrollbar.onDragMove, r), a.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) : (a.removeEventListener(s.start, e.scrollbar.onDragStart, r), h.removeEventListener(s.move, e.scrollbar.onDragMove, r), h.removeEventListener(s.end, e.scrollbar.onDragEnd, o))
        },
        init() {
            const e = this;
            if (!e.params.scrollbar.el) return;
            const {
                scrollbar: t,
                $el: i
            } = e, s = e.params.scrollbar;
            let n = d(s.el);
            e.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === i.find(s.el).length && (n = i.find(s.el));
            let a = n.find("." + e.params.scrollbar.dragClass);
            0 === a.length && (a = d(`<div class="${e.params.scrollbar.dragClass}"></div>`), n.append(a)), g.extend(t, {
                $el: n,
                el: n[0],
                $dragEl: a,
                dragEl: a[0]
            }), s.draggable && t.enableDraggable()
        },
        destroy() {
            this.scrollbar.disableDraggable()
        }
    };
    const U = {
        setTransform(e, t) {
            const {
                rtl: i
            } = this, s = d(e), n = i ? -1 : 1, a = s.attr("data-swiper-parallax") || "0";
            let r = s.attr("data-swiper-parallax-x"),
                o = s.attr("data-swiper-parallax-y");
            const l = s.attr("data-swiper-parallax-scale"),
                c = s.attr("data-swiper-parallax-opacity");
            if (r || o ? (r = r || "0", o = o || "0") : this.isHorizontal() ? (r = a, o = "0") : (o = a, r = "0"), r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t * n + "%" : r * t * n + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != c) {
                const e = c - (c - 1) * (1 - Math.abs(t));
                s[0].style.opacity = e
            }
            if (null == l) s.transform(`translate3d(${r}, ${o}, 0px)`);
            else {
                const e = l - (l - 1) * (1 - Math.abs(t));
                s.transform(`translate3d(${r}, ${o}, 0px) scale(${e})`)
            }
        },
        setTranslate() {
            const e = this,
                {
                    $el: t,
                    slides: i,
                    progress: s,
                    snapGrid: n
                } = e;
            t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                e.parallax.setTransform(i, s)
            }), i.each((t, i) => {
                let a = i.progress;
                e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - s * (n.length - 1)), a = Math.min(Math.max(a, -1), 1), d(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                    e.parallax.setTransform(i, a)
                })
            })
        },
        setTransition(e = this.params.speed) {
            const {
                $el: t
            } = this;
            t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t, i) => {
                const s = d(i);
                let n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (n = 0), s.transition(n)
            })
        }
    };
    const K = {
        getDistanceBetweenTouches(e) {
            if (e.targetTouches.length < 2) return 1;
            const t = e.targetTouches[0].pageX,
                i = e.targetTouches[0].pageY,
                s = e.targetTouches[1].pageX,
                n = e.targetTouches[1].pageY;
            return Math.sqrt((s - t) ** 2 + (n - i) ** 2)
        },
        onGestureStart(e) {
            const t = this,
                i = t.params.zoom,
                s = t.zoom,
                {
                    gesture: n
                } = s;
            if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !m.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                s.fakeGestureTouched = !0, n.scaleStart = K.getDistanceBetweenTouches(e)
            }
            n.$slideEl && n.$slideEl.length || (n.$slideEl = d(e.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = t.slides.eq(t.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== n.$imageWrapEl.length) ? (n.$imageEl.transition(0), t.zoom.isScaling = !0) : n.$imageEl = void 0
        },
        onGestureChange(e) {
            const t = this.params.zoom,
                i = this.zoom,
                {
                    gesture: s
                } = i;
            if (!m.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = K.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (m.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + (i.scale - s.maxRatio + 1) ** .5), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - (t.minRatio - i.scale + 1) ** .5), s.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
        },
        onGestureEnd(e) {
            const t = this.params.zoom,
                i = this.zoom,
                {
                    gesture: s
                } = i;
            if (!m.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !E.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform(`translate3d(0,0,0) scale(${i.scale})`), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        },
        onTouchStart(e) {
            const t = this.zoom,
                {
                    gesture: i,
                    image: s
                } = t;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (E.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        },
        onTouchMove(e) {
            const t = this,
                i = t.zoom,
                {
                    gesture: s,
                    image: n,
                    velocity: a
                } = i;
            if (!s.$imageEl || 0 === s.$imageEl.length) return;
            if (t.allowClick = !1, !n.isTouched || !s.$slideEl) return;
            n.isMoved || (n.width = s.$imageEl[0].offsetWidth, n.height = s.$imageEl[0].offsetHeight, n.startX = g.getTranslate(s.$imageWrapEl[0], "x") || 0, n.startY = g.getTranslate(s.$imageWrapEl[0], "y") || 0, s.slideWidth = s.$slideEl[0].offsetWidth, s.slideHeight = s.$slideEl[0].offsetHeight, s.$imageWrapEl.transition(0), t.rtl && (n.startX = -n.startX, n.startY = -n.startY));
            const r = n.width * i.scale,
                o = n.height * i.scale;
            if (!(r < s.slideWidth && o < s.slideHeight)) {
                if (n.minX = Math.min(s.slideWidth / 2 - r / 2, 0), n.maxX = -n.minX, n.minY = Math.min(s.slideHeight / 2 - o / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !i.isScaling) {
                    if (t.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                    if (!t.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                }
                e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - (n.minX - n.currentX + 1) ** .8), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + (n.currentX - n.maxX + 1) ** .8), n.currentY < n.minY && (n.currentY = n.minY + 1 - (n.minY - n.currentY + 1) ** .8), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + (n.currentY - n.maxY + 1) ** .8), a.prevPositionX || (a.prevPositionX = n.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = n.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (n.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (n.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(n.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(n.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = n.touchesCurrent.x, a.prevPositionY = n.touchesCurrent.y, a.prevTime = Date.now(), s.$imageWrapEl.transform(`translate3d(${n.currentX}px, ${n.currentY}px,0)`)
            }
        },
        onTouchEnd() {
            const e = this.zoom,
                {
                    gesture: t,
                    image: i,
                    velocity: s
                } = e;
            if (!t.$imageEl || 0 === t.$imageEl.length) return;
            if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
            i.isTouched = !1, i.isMoved = !1;
            let n = 300,
                a = 300;
            const r = s.x * n,
                o = i.currentX + r,
                l = s.y * a,
                d = i.currentY + l;
            0 !== s.x && (n = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (a = Math.abs((d - i.currentY) / s.y));
            const c = Math.max(n, a);
            i.currentX = o, i.currentY = d;
            const h = i.width * e.scale,
                u = i.height * e.scale;
            i.minX = Math.min(t.slideWidth / 2 - h / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - u / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform(`translate3d(${i.currentX}px, ${i.currentY}px,0)`)
        },
        onTransitionEnd() {
            const e = this.zoom,
                {
                    gesture: t
                } = e;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        },
        toggle(e) {
            const t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        },
        in (e) {
            const t = this,
                i = t.zoom,
                s = t.params.zoom,
                {
                    gesture: n,
                    image: a
                } = i;
            if (n.$slideEl || (n.$slideEl = t.clickedSlide ? d(t.clickedSlide) : t.slides.eq(t.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + s.containerClass)), !n.$imageEl || 0 === n.$imageEl.length) return;
            let r, o, l, c, h, u, p, g, m, f, v, b, y, w, x, T, C, S;
            n.$slideEl.addClass("" + s.zoomedSlideClass), void 0 === a.touchesStart.x && e ? (r = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (r = a.touchesStart.x, o = a.touchesStart.y), i.scale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, i.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, e ? (C = n.$slideEl[0].offsetWidth, S = n.$slideEl[0].offsetHeight, l = n.$slideEl.offset().left, c = n.$slideEl.offset().top, h = l + C / 2 - r, u = c + S / 2 - o, m = n.$imageEl[0].offsetWidth, f = n.$imageEl[0].offsetHeight, v = m * i.scale, b = f * i.scale, y = Math.min(C / 2 - v / 2, 0), w = Math.min(S / 2 - b / 2, 0), x = -y, T = -w, p = h * i.scale, g = u * i.scale, p < y && (p = y), p > x && (p = x), g < w && (g = w), g > T && (g = T)) : (p = 0, g = 0), n.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${g}px,0)`), n.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
        },
        out() {
            const e = this,
                t = e.zoom,
                i = e.params.zoom,
                {
                    gesture: s
                } = t;
            s.$slideEl || (s.$slideEl = e.clickedSlide ? d(e.clickedSlide) : e.slides.eq(e.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (t.scale = 1, t.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + i.zoomedSlideClass), s.$slideEl = void 0)
        },
        enable() {
            const e = this,
                t = e.zoom;
            if (t.enabled) return;
            t.enabled = !0;
            const i = !("touchstart" !== e.touchEvents.start || !m.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            m.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
        },
        disable() {
            const e = this,
                t = e.zoom;
            if (!t.enabled) return;
            e.zoom.enabled = !1;
            const i = !("touchstart" !== e.touchEvents.start || !m.passiveListener || !e.params.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            m.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
        }
    };
    const Z = {
        loadInSlide(e, t = !0) {
            const i = this,
                s = i.params.lazy;
            if (void 0 === e) return;
            if (0 === i.slides.length) return;
            const n = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(`.${i.params.slideClass}[data-swiper-slide-index="${e}"]`) : i.slides.eq(e);
            let a = n.find(`.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`);
            !n.hasClass(s.elementClass) || n.hasClass(s.loadedClass) || n.hasClass(s.loadingClass) || (a = a.add(n[0])), 0 !== a.length && a.each((e, a) => {
                const r = d(a);
                r.addClass(s.loadingClass);
                const o = r.attr("data-background"),
                    l = r.attr("data-src"),
                    c = r.attr("data-srcset"),
                    h = r.attr("data-sizes");
                i.loadImage(r[0], l || o, c, h, !1, () => {
                    if (null != i && i && (!i || i.params) && !i.destroyed) {
                        if (o ? (r.css("background-image", `url("${o}")`), r.removeAttr("data-background")) : (c && (r.attr("srcset", c), r.removeAttr("data-srcset")), h && (r.attr("sizes", h), r.removeAttr("data-sizes")), l && (r.attr("src", l), r.removeAttr("data-src"))), r.addClass(s.loadedClass).removeClass(s.loadingClass), n.find("." + s.preloaderClass).remove(), i.params.loop && t) {
                            const e = n.attr("data-swiper-slide-index");
                            if (n.hasClass(i.params.slideDuplicateClass)) {
                                const t = i.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${i.params.slideDuplicateClass})`);
                                i.lazy.loadInSlide(t.index(), !1)
                            } else {
                                const t = i.$wrapperEl.children(`.${i.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`);
                                i.lazy.loadInSlide(t.index(), !1)
                            }
                        }
                        i.emit("lazyImageReady", n[0], r[0])
                    }
                }), i.emit("lazyImageLoad", n[0], r[0])
            })
        },
        load() {
            const e = this,
                {
                    $wrapperEl: t,
                    params: i,
                    slides: s,
                    activeIndex: n
                } = e,
                a = e.virtual && i.virtual.enabled,
                r = i.lazy;
            let o = i.slidesPerView;

            function l(e) {
                if (a) {
                    if (t.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]`).length) return !0
                } else if (s[e]) return !0;
                return !1
            }

            function c(e) {
                return a ? d(e).attr("data-swiper-slide-index") : d(e).index()
            }
            if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each((t, i) => {
                const s = a ? d(i).attr("data-swiper-slide-index") : d(i).index();
                e.lazy.loadInSlide(s)
            });
            else if (o > 1)
                for (let t = n; t < n + o; t += 1) l(t) && e.lazy.loadInSlide(t);
            else e.lazy.loadInSlide(n);
            if (r.loadPrevNext)
                if (o > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                    const t = r.loadPrevNextAmount,
                        i = o,
                        a = Math.min(n + i + Math.max(t, i), s.length),
                        d = Math.max(n - Math.max(i, t), 0);
                    for (let t = n + o; t < a; t += 1) l(t) && e.lazy.loadInSlide(t);
                    for (let t = d; t < n; t += 1) l(t) && e.lazy.loadInSlide(t)
                } else {
                    const s = t.children("." + i.slideNextClass);
                    s.length > 0 && e.lazy.loadInSlide(c(s));
                    const n = t.children("." + i.slidePrevClass);
                    n.length > 0 && e.lazy.loadInSlide(c(n))
                }
        }
    };
    const J = {
        LinearSpline: function(e, t) {
            const i = function() {
                let e, t, i;
                return (s, n) => {
                    for (t = -1, e = s.length; e - t > 1;) i = e + t >> 1, s[i] <= n ? t = i : e = i;
                    return e
                }
            }();
            let s, n;
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                return e ? (n = i(this.x, e), s = n - 1, (e - this.x[s]) * (this.y[n] - this.y[s]) / (this.x[n] - this.x[s]) + this.y[s]) : 0
            }, this
        },
        getInterpolateFunction(e) {
            const t = this;
            t.controller.spline || (t.controller.spline = t.params.loop ? new J.LinearSpline(t.slidesGrid, e.slidesGrid) : new J.LinearSpline(t.snapGrid, e.snapGrid))
        },
        setTranslate(e, t) {
            const i = this,
                s = i.controller.control;
            let n, a;

            function r(e) {
                const t = i.rtlTranslate ? -i.translate : i.translate;
                "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e), a = -i.controller.spline.interpolate(-t)), a && "container" !== i.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()), a = (t - i.minTranslate()) * n + e.minTranslate()), i.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            if (Array.isArray(s))
                for (let e = 0; e < s.length; e += 1) s[e] !== t && s[e] instanceof D && r(s[e]);
            else s instanceof D && t !== s && r(s)
        },
        setTransition(e, t) {
            const i = this,
                s = i.controller.control;
            let n;

            function a(t) {
                t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && g.nextTick(() => {
                    t.updateAutoHeight()
                }), t.$wrapperEl.transitionEnd(() => {
                    s && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd())
                }))
            }
            if (Array.isArray(s))
                for (n = 0; n < s.length; n += 1) s[n] !== t && s[n] instanceof D && a(s[n]);
            else s instanceof D && t !== s && a(s)
        }
    };
    const Q = {
        makeElFocusable: e => (e.attr("tabIndex", "0"), e),
        addElRole: (e, t) => (e.attr("role", t), e),
        addElLabel: (e, t) => (e.attr("aria-label", t), e),
        disableEl: e => (e.attr("aria-disabled", !0), e),
        enableEl: e => (e.attr("aria-disabled", !1), e),
        onEnterKey(e) {
            const t = this,
                i = t.params.a11y;
            if (13 !== e.keyCode) return;
            const s = d(e.target);
            t.navigation && t.navigation.$nextEl && s.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && s.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && s.is("." + t.params.pagination.bulletClass) && s[0].click()
        },
        notify(e) {
            const t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        },
        updateNavigation() {
            const e = this;
            if (e.params.loop) return;
            const {
                $nextEl: t,
                $prevEl: i
            } = e.navigation;
            i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t))
        },
        updatePagination() {
            const e = this,
                t = e.params.a11y;
            e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each((i, s) => {
                const n = d(s);
                e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
            })
        },
        init() {
            const e = this;
            e.$el.append(e.a11y.liveRegion);
            const t = e.params.a11y;
            let i, s;
            e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.nextSlideMessage), i.on("keydown", e.a11y.onEnterKey)), s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.prevSlideMessage), s.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        },
        destroy() {
            const e = this;
            let t, i;
            e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), i && i.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
        }
    };
    const ee = {
        init() {
            const e = this;
            if (!e.params.history) return;
            if (!u.history || !u.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
            const t = e.history;
            t.initialized = !0, t.paths = ee.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || u.addEventListener("popstate", e.history.setHistoryPopState))
        },
        destroy() {
            const e = this;
            e.params.history.replaceState || u.removeEventListener("popstate", e.history.setHistoryPopState)
        },
        setHistoryPopState() {
            this.history.paths = ee.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        },
        getPathValues() {
            const e = u.location.pathname.slice(1).split("/").filter(e => "" !== e),
                t = e.length;
            return {
                key: e[t - 2],
                value: e[t - 1]
            }
        },
        setHistory(e, t) {
            if (!this.history.initialized || !this.params.history.enabled) return;
            const i = this.slides.eq(t);
            let s = ee.slugify(i.attr("data-history"));
            u.location.pathname.includes(e) || (s = `${e}/${s}`);
            const n = u.history.state;
            n && n.value === s || (this.params.history.replaceState ? u.history.replaceState({
                value: s
            }, null, s) : u.history.pushState({
                value: s
            }, null, s))
        },
        slugify: e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
        scrollToSlide(e, t, i) {
            const s = this;
            if (t)
                for (let n = 0, a = s.slides.length; n < a; n += 1) {
                    const a = s.slides.eq(n);
                    if (ee.slugify(a.attr("data-history")) === t && !a.hasClass(s.params.slideDuplicateClass)) {
                        const t = a.index();
                        s.slideTo(t, e, i)
                    }
                } else s.slideTo(0, e, i)
        }
    };
    const te = {
        onHashCange() {
            const e = this,
                t = h.location.hash.replace("#", "");
            if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                const i = e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${t}"]`).index();
                if (void 0 === i) return;
                e.slideTo(i)
            }
        },
        setHash() {
            const e = this;
            if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                if (e.params.hashNavigation.replaceState && u.history && u.history.replaceState) u.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                else {
                    const t = e.slides.eq(e.activeIndex),
                        i = t.attr("data-hash") || t.attr("data-history");
                    h.location.hash = i || ""
                }
        },
        init() {
            const e = this;
            if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
            e.hashNavigation.initialized = !0;
            const t = h.location.hash.replace("#", "");
            if (t) {
                const i = 0;
                for (let s = 0, n = e.slides.length; s < n; s += 1) {
                    const n = e.slides.eq(s);
                    if ((n.attr("data-hash") || n.attr("data-history")) === t && !n.hasClass(e.params.slideDuplicateClass)) {
                        const t = n.index();
                        e.slideTo(t, i, e.params.runCallbacksOnInit, !0)
                    }
                }
            }
            e.params.hashNavigation.watchState && d(u).on("hashchange", e.hashNavigation.onHashCange)
        },
        destroy() {
            const e = this;
            e.params.hashNavigation.watchState && d(u).off("hashchange", e.hashNavigation.onHashCange)
        }
    };
    const ie = {
        run() {
            const e = this,
                t = e.slides.eq(e.activeIndex);
            let i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = g.nextTick(() => {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, i)
        },
        start() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        },
        stop() {
            const e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        },
        pause(e) {
            const t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    };
    const se = {
        setTranslate() {
            const e = this,
                {
                    slides: t
                } = e;
            for (let i = 0; i < t.length; i += 1) {
                const t = e.slides.eq(i);
                let s = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (s -= e.translate);
                let n = 0;
                e.isHorizontal() || (n = s, s = 0);
                const a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({
                    opacity: a
                }).transform(`translate3d(${s}px, ${n}px, 0px)`)
            }
        },
        setTransition(e) {
            const t = this,
                {
                    slides: i,
                    $wrapperEl: s
                } = t;
            if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.transitionEnd(() => {
                    if (e) return;
                    if (!t || t.destroyed) return;
                    e = !0, t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1) s.trigger(i[e])
                })
            }
        }
    };
    const ne = {
        setTranslate() {
            const {
                $el: e,
                $wrapperEl: t,
                slides: i,
                width: s,
                height: n,
                rtlTranslate: a,
                size: r
            } = this, o = this.params.cubeEffect, l = this.isHorizontal(), c = this.virtual && this.params.virtual.enabled;
            let h, u = 0;
            o.shadow && (l ? (h = t.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), t.append(h)), h.css({
                height: s + "px"
            })) : (h = e.find(".swiper-cube-shadow"), 0 === h.length && (h = d('<div class="swiper-cube-shadow"></div>'), e.append(h))));
            for (let e = 0; e < i.length; e += 1) {
                const t = i.eq(e);
                let s = e;
                c && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                let n = 90 * s,
                    h = Math.floor(n / 360);
                a && (n = -n, h = Math.floor(-n / 360));
                const p = Math.max(Math.min(t[0].progress, 1), -1);
                let g = 0,
                    m = 0,
                    f = 0;
                s % 4 == 0 ? (g = 4 * -h * r, f = 0) : (s - 1) % 4 == 0 ? (g = 0, f = 4 * -h * r) : (s - 2) % 4 == 0 ? (g = r + 4 * h * r, f = r) : (s - 3) % 4 == 0 && (g = -r, f = 3 * r + 4 * r * h), a && (g = -g), l || (m = g, g = 0);
                const v = `rotateX(${l?0:-n}deg) rotateY(${l?n:0}deg) translate3d(${g}px, ${m}px, ${f}px)`;
                if (p <= 1 && p > -1 && (u = 90 * s + 90 * p, a && (u = 90 * -s - 90 * p)), t.transform(v), o.slideShadows) {
                    let e = l ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                        i = l ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = d(`<div class="swiper-slide-shadow-${l?"left":"top"}"></div>`), t.append(e)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${l?"right":"bottom"}"></div>`), t.append(i)), e.length && (e[0].style.opacity = Math.max(-p, 0)), i.length && (i[0].style.opacity = Math.max(p, 0))
                }
            }
            if (t.css({
                    "-webkit-transform-origin": `50% 50% -${r/2}px`,
                    "-moz-transform-origin": `50% 50% -${r/2}px`,
                    "-ms-transform-origin": `50% 50% -${r/2}px`,
                    "transform-origin": `50% 50% -${r/2}px`
                }), o.shadow)
                if (l) h.transform(`translate3d(0px, ${s/2+o.shadowOffset}px, ${-s/2}px) rotateX(90deg) rotateZ(0deg) scale(${o.shadowScale})`);
                else {
                    const e = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                        t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2),
                        i = o.shadowScale,
                        s = o.shadowScale / t,
                        a = o.shadowOffset;
                    h.transform(`scale3d(${i}, 1, ${s}) translate3d(0px, ${n/2+a}px, ${-n/2/s}px) rotateX(-90deg)`)
                }
            const p = f.isSafari || f.isUiWebView ? -r / 2 : 0;
            t.transform(`translate3d(0px,0,${p}px) rotateX(${this.isHorizontal()?0:u}deg) rotateY(${this.isHorizontal()?-u:0}deg)`)
        },
        setTransition(e) {
            const {
                $el: t,
                slides: i
            } = this;
            i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    };
    const ae = {
        setTranslate() {
            const e = this,
                {
                    slides: t,
                    rtlTranslate: i
                } = e;
            for (let s = 0; s < t.length; s += 1) {
                const n = t.eq(s);
                let a = n[0].progress;
                e.params.flipEffect.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
                let r = -180 * a,
                    o = 0,
                    l = -n[0].swiperSlideOffset,
                    c = 0;
                if (e.isHorizontal() ? i && (r = -r) : (c = l, l = 0, o = -r, r = 0), n[0].style.zIndex = -Math.abs(Math.round(a)) + t.length, e.params.flipEffect.slideShadows) {
                    let t = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                        i = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                    0 === t.length && (t = d(`<div class="swiper-slide-shadow-${e.isHorizontal()?"left":"top"}"></div>`), n.append(t)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${e.isHorizontal()?"right":"bottom"}"></div>`), n.append(i)), t.length && (t[0].style.opacity = Math.max(-a, 0)), i.length && (i[0].style.opacity = Math.max(a, 0))
                }
                n.transform(`translate3d(${l}px, ${c}px, 0px) rotateX(${o}deg) rotateY(${r}deg)`)
            }
        },
        setTransition(e) {
            const t = this,
                {
                    slides: i,
                    activeIndex: s,
                    $wrapperEl: n
                } = t;
            if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                i.eq(s).transitionEnd((function() {
                    if (e) return;
                    if (!t || t.destroyed) return;
                    e = !0, t.animating = !1;
                    const i = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < i.length; e += 1) n.trigger(i[e])
                }))
            }
        }
    };
    const re = {
        setTranslate() {
            const {
                width: e,
                height: t,
                slides: i,
                $wrapperEl: s,
                slidesSizesGrid: n
            } = this, a = this.params.coverflowEffect, r = this.isHorizontal(), o = this.translate, l = r ? e / 2 - o : t / 2 - o, c = r ? a.rotate : -a.rotate, h = a.depth;
            for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i.eq(e),
                    s = n[e],
                    o = (l - t[0].swiperSlideOffset - s / 2) / s * a.modifier;
                let u = r ? c * o : 0,
                    p = r ? 0 : c * o,
                    g = -h * Math.abs(o),
                    m = r ? 0 : a.stretch * o,
                    f = r ? a.stretch * o : 0;
                Math.abs(f) < .001 && (f = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0);
                const v = `translate3d(${f}px,${m}px,${g}px)  rotateX(${p}deg) rotateY(${u}deg)`;
                if (t.transform(v), t[0].style.zIndex = 1 - Math.abs(Math.round(o)), a.slideShadows) {
                    let e = r ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                        i = r ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                    0 === e.length && (e = d(`<div class="swiper-slide-shadow-${r?"left":"top"}"></div>`), t.append(e)), 0 === i.length && (i = d(`<div class="swiper-slide-shadow-${r?"right":"bottom"}"></div>`), t.append(i)), e.length && (e[0].style.opacity = o > 0 ? o : 0), i.length && (i[0].style.opacity = -o > 0 ? -o : 0)
                }
            }
            if (m.pointerEvents || m.prefixedPointerEvents) {
                s[0].style.perspectiveOrigin = l + "px 50%"
            }
        },
        setTransition(e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    };
    const oe = {
        init() {
            const e = this,
                {
                    thumbs: t
                } = e.params,
                i = e.constructor;
            t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, g.extend(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), g.extend(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })) : g.isObject(t.swiper) && (e.thumbs.swiper = new i(g.extend({}, t.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
        },
        onThumbClick() {
            const e = this,
                t = e.thumbs.swiper;
            if (!t) return;
            const i = t.clickedIndex,
                s = t.clickedSlide;
            if (s && d(s).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
            if (null == i) return;
            let n;
            if (n = t.params.loop ? parseInt(d(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
                let t = e.activeIndex;
                e.slides.eq(t).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, t = e.activeIndex);
                const i = e.slides.eq(t).prevAll(`[data-swiper-slide-index="${n}"]`).eq(0).index(),
                    s = e.slides.eq(t).nextAll(`[data-swiper-slide-index="${n}"]`).eq(0).index();
                n = void 0 === i ? s : void 0 === s ? i : s - t < t - i ? s : i
            }
            e.slideTo(n)
        },
        update(e) {
            const t = this,
                i = t.thumbs.swiper;
            if (!i) return;
            const s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            if (t.realIndex !== i.realIndex) {
                let n, a = i.activeIndex;
                if (i.params.loop) {
                    i.slides.eq(a).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, a = i.activeIndex);
                    const e = i.slides.eq(a).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                        s = i.slides.eq(a).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                    n = void 0 === e ? s : void 0 === s ? e : s - a == a - e ? a : s - a < a - e ? s : e
                } else n = t.realIndex;
                i.visibleSlidesIndexes && i.visibleSlidesIndexes.indexOf(n) < 0 && (i.params.centeredSlides ? n = n > a ? n - Math.floor(s / 2) + 1 : n + Math.floor(s / 2) - 1 : n > a && (n = n - s + 1), i.slideTo(n, e ? 0 : void 0))
            }
            let n = 1;
            const a = t.params.thumbs.slideThumbActiveClass;
            if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), i.slides.removeClass(a), i.params.loop || i.params.virtual)
                for (let e = 0; e < n; e += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(a);
            else
                for (let e = 0; e < n; e += 1) i.slides.eq(t.realIndex + e).addClass(a)
        }
    };
    const le = [A, B, G, H, N, V, Y, {
        name: "mousewheel",
        params: {
            mousewheel: {
                enabled: !1,
                releaseOnEdges: !1,
                invert: !1,
                forceToAxis: !1,
                sensitivity: 1,
                eventsTarged: "container"
            }
        },
        create() {
            g.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: W.enable.bind(this),
                    disable: W.disable.bind(this),
                    handle: W.handle.bind(this),
                    handleMouseEnter: W.handleMouseEnter.bind(this),
                    handleMouseLeave: W.handleMouseLeave.bind(this),
                    lastScrollTime: g.now()
                }
            })
        },
        on: {
            init() {
                this.params.mousewheel.enabled && this.mousewheel.enable()
            },
            destroy() {
                this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock"
            }
        },
        create() {
            g.extend(this, {
                navigation: {
                    init: j.init.bind(this),
                    update: j.update.bind(this),
                    destroy: j.destroy.bind(this),
                    onNextClick: j.onNextClick.bind(this),
                    onPrevClick: j.onPrevClick.bind(this)
                }
            })
        },
        on: {
            init() {
                this.navigation.init(), this.navigation.update()
            },
            toEdge() {
                this.navigation.update()
            },
            fromEdge() {
                this.navigation.update()
            },
            destroy() {
                this.navigation.destroy()
            },
            click(e) {
                const t = this,
                    {
                        $nextEl: i,
                        $prevEl: s
                    } = t.navigation;
                if (t.params.navigation.hideOnClick && !d(e.target).is(s) && !d(e.target).is(i)) {
                    let e;
                    i ? e = i.hasClass(t.params.navigation.hiddenClass) : s && (e = s.hasClass(t.params.navigation.hiddenClass)), !0 === e ? t.emit("navigationShow", t) : t.emit("navigationHide", t), i && i.toggleClass(t.params.navigation.hiddenClass), s && s.toggleClass(t.params.navigation.hiddenClass)
                }
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create() {
            g.extend(this, {
                pagination: {
                    init: R.init.bind(this),
                    render: R.render.bind(this),
                    update: R.update.bind(this),
                    destroy: R.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init() {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            },
            activeIndexChange() {
                const e = this;
                (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
            },
            snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update()
            },
            slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(), e.pagination.update())
            },
            snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(), e.pagination.update())
            },
            destroy() {
                this.pagination.destroy()
            },
            click(e) {
                const t = this;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !d(e.target).hasClass(t.params.pagination.bulletClass)) {
                    !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }
    }, {
        name: "scrollbar",
        params: {
            scrollbar: {
                el: null,
                dragSize: "auto",
                hide: !1,
                draggable: !1,
                snapOnRelease: !0,
                lockClass: "swiper-scrollbar-lock",
                dragClass: "swiper-scrollbar-drag"
            }
        },
        create() {
            g.extend(this, {
                scrollbar: {
                    init: q.init.bind(this),
                    destroy: q.destroy.bind(this),
                    updateSize: q.updateSize.bind(this),
                    setTranslate: q.setTranslate.bind(this),
                    setTransition: q.setTransition.bind(this),
                    enableDraggable: q.enableDraggable.bind(this),
                    disableDraggable: q.disableDraggable.bind(this),
                    setDragPosition: q.setDragPosition.bind(this),
                    getPointerPosition: q.getPointerPosition.bind(this),
                    onDragStart: q.onDragStart.bind(this),
                    onDragMove: q.onDragMove.bind(this),
                    onDragEnd: q.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        },
        on: {
            init() {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            },
            update() {
                this.scrollbar.updateSize()
            },
            resize() {
                this.scrollbar.updateSize()
            },
            observerUpdate() {
                this.scrollbar.updateSize()
            },
            setTranslate() {
                this.scrollbar.setTranslate()
            },
            setTransition(e) {
                this.scrollbar.setTransition(e)
            },
            destroy() {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax",
        params: {
            parallax: {
                enabled: !1
            }
        },
        create() {
            g.extend(this, {
                parallax: {
                    setTransform: U.setTransform.bind(this),
                    setTranslate: U.setTranslate.bind(this),
                    setTransition: U.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            },
            init() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTranslate() {
                this.params.parallax.enabled && this.parallax.setTranslate()
            },
            setTransition(e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom",
        params: {
            zoom: {
                enabled: !1,
                maxRatio: 3,
                minRatio: 1,
                toggle: !0,
                containerClass: "swiper-zoom-container",
                zoomedSlideClass: "swiper-slide-zoomed"
            }
        },
        create() {
            const e = this,
                t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {
                        x: void 0,
                        y: void 0,
                        prevPositionX: void 0,
                        prevPositionY: void 0,
                        prevTime: void 0
                    }
                };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(i => {
                t[i] = K[i].bind(e)
            }), g.extend(e, {
                zoom: t
            });
            let i = 1;
            Object.defineProperty(e.zoom, "scale", {
                get: () => i,
                set(t) {
                    if (i !== t) {
                        const i = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                            s = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;
                        e.emit("zoomChange", t, i, s)
                    }
                    i = t
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.zoom.enabled && e.zoom.enable()
            },
            destroy() {
                this.zoom.disable()
            },
            touchStart(e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            },
            touchEnd(e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            },
            doubleTap(e) {
                const t = this;
                t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e)
            },
            transitionEnd() {
                const e = this;
                e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create() {
            g.extend(this, {
                lazy: {
                    initialImageLoaded: !1,
                    load: Z.load.bind(this),
                    loadInSlide: Z.loadInSlide.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const e = this;
                e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
            },
            init() {
                const e = this;
                e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load()
            },
            scroll() {
                const e = this;
                e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
            },
            resize() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            scrollbarDragMove() {
                const e = this;
                e.params.lazy.enabled && e.lazy.load()
            },
            transitionStart() {
                const e = this;
                e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
            },
            transitionEnd() {
                const e = this;
                e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
            }
        }
    }, {
        name: "controller",
        params: {
            controller: {
                control: void 0,
                inverse: !1,
                by: "slide"
            }
        },
        create() {
            g.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: J.getInterpolateFunction.bind(this),
                    setTranslate: J.setTranslate.bind(this),
                    setTransition: J.setTransition.bind(this)
                }
            })
        },
        on: {
            update() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            },
            resize() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            },
            observerUpdate() {
                const e = this;
                e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
            },
            setTranslate(e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            },
            setTransition(e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create() {
            const e = this;
            g.extend(e, {
                a11y: {
                    liveRegion: d(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
                }
            }), Object.keys(Q).forEach(t => {
                e.a11y[t] = Q[t].bind(e)
            })
        },
        on: {
            init() {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            },
            toEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            fromEdge() {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            },
            paginationUpdate() {
                this.params.a11y.enabled && this.a11y.updatePagination()
            },
            destroy() {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history",
        params: {
            history: {
                enabled: !1,
                replaceState: !1,
                key: "slides"
            }
        },
        create() {
            g.extend(this, {
                history: {
                    init: ee.init.bind(this),
                    setHistory: ee.setHistory.bind(this),
                    setHistoryPopState: ee.setHistoryPopState.bind(this),
                    scrollToSlide: ee.scrollToSlide.bind(this),
                    destroy: ee.destroy.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.history.enabled && e.history.init()
            },
            destroy() {
                const e = this;
                e.params.history.enabled && e.history.destroy()
            },
            transitionEnd() {
                const e = this;
                e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
            }
        }
    }, {
        name: "hash-navigation",
        params: {
            hashNavigation: {
                enabled: !1,
                replaceState: !1,
                watchState: !1
            }
        },
        create() {
            g.extend(this, {
                hashNavigation: {
                    initialized: !1,
                    init: te.init.bind(this),
                    destroy: te.destroy.bind(this),
                    setHash: te.setHash.bind(this),
                    onHashCange: te.onHashCange.bind(this)
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.init()
            },
            destroy() {
                const e = this;
                e.params.hashNavigation.enabled && e.hashNavigation.destroy()
            },
            transitionEnd() {
                const e = this;
                e.hashNavigation.initialized && e.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create() {
            const e = this;
            g.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: ie.run.bind(e),
                    start: ie.start.bind(e),
                    stop: ie.stop.bind(e),
                    pause: ie.pause.bind(e),
                    onTransitionEnd(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            },
            beforeTransitionStart(e, t) {
                const i = this;
                i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
            },
            sliderFirstMove() {
                const e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            },
            destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    }, {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create() {
            g.extend(this, {
                fadeEffect: {
                    setTranslate: se.setTranslate.bind(this),
                    setTransition: se.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("fade" !== this.params.effect) return;
                this.classNames.push(this.params.containerModifierClass + "fade");
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e)
            },
            setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            },
            setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube",
        params: {
            cubeEffect: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            }
        },
        create() {
            g.extend(this, {
                cubeEffect: {
                    setTranslate: ne.setTranslate.bind(this),
                    setTransition: ne.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("cube" !== this.params.effect) return;
                this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e)
            },
            setTranslate() {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            },
            setTransition(e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip",
        params: {
            flipEffect: {
                slideShadows: !0,
                limitRotation: !0
            }
        },
        create() {
            g.extend(this, {
                flipEffect: {
                    setTranslate: ae.setTranslate.bind(this),
                    setTransition: ae.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("flip" !== this.params.effect) return;
                this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                g.extend(this.params, e), g.extend(this.originalParams, e)
            },
            setTranslate() {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            },
            setTransition(e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow",
        params: {
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            }
        },
        create() {
            g.extend(this, {
                coverflowEffect: {
                    setTranslate: re.setTranslate.bind(this),
                    setTransition: re.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            },
            setTranslate() {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            },
            setTransition(e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs",
        params: {
            thumbs: {
                swiper: null,
                slideThumbActiveClass: "swiper-slide-thumb-active",
                thumbsContainerClass: "swiper-container-thumbs"
            }
        },
        create() {
            g.extend(this, {
                thumbs: {
                    swiper: null,
                    init: oe.init.bind(this),
                    update: oe.update.bind(this),
                    onThumbClick: oe.onThumbClick.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                const {
                    thumbs: e
                } = this.params;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            },
            slideChange() {
                this.thumbs.swiper && this.thumbs.update()
            },
            update() {
                this.thumbs.swiper && this.thumbs.update()
            },
            resize() {
                this.thumbs.swiper && this.thumbs.update()
            },
            observerUpdate() {
                this.thumbs.swiper && this.thumbs.update()
            },
            setTransition(e) {
                const t = this.thumbs.swiper;
                t && t.setTransition(e)
            },
            beforeDestroy() {
                const e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    void 0 === D.use && (D.use = D.Class.use, D.installModule = D.Class.installModule), D.use(le);
    var de = D;

    function ce(e) {
        return e && e.length > 1 && "/" === e.at(-1) ? e.slice(0, -1) : e
    }
    i(1);
    /*!
     * lightgallery | 2.7.0 | October 9th 2022
     * http://www.lightgalleryjs.com/
     * Copyright (c) 2020 Sachin Neravath;
     * @license GPLv3
     */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    var he = function() {
        return (he = Object.assign || function(e) {
            for (var t, i = 1, s = arguments.length; i < s; i++)
                for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        }).apply(this, arguments)
    };
    var ue = "lgAfterAppendSlide",
        pe = "lgInit",
        ge = "lgHasVideo",
        me = "lgContainerResize",
        fe = "lgUpdateSlides",
        ve = "lgAfterAppendSubHtml",
        be = "lgBeforeOpen",
        ye = "lgAfterOpen",
        we = "lgSlideItemLoad",
        xe = "lgBeforeSlide",
        Te = "lgAfterSlide",
        Ce = "lgPosterClick",
        Se = "lgDragStart",
        Ee = "lgDragMove",
        Ie = "lgDragEnd",
        Me = "lgBeforeNextSlide",
        $e = "lgBeforePrevSlide",
        ke = "lgBeforeClose",
        Pe = "lgAfterClose",
        Le = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: "",
            startAnimationDuration: 400,
            zoomFromOrigin: !0,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: !0,
            allowMediaOverlap: !1,
            videoMaxSize: "1280-720",
            loadYouTubePoster: !0,
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            resetScrollPosition: !0,
            hideScrollbar: !1,
            closable: !0,
            swipeToClose: !0,
            closeOnTap: !0,
            showCloseIcon: !0,
            showMaximizeIcon: !1,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            trapFocus: !0,
            controls: !0,
            slideEndAnimation: !0,
            hideControlOnEnd: !1,
            mousewheel: !1,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            iframeMaxWidth: "100%",
            iframeMaxHeight: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: !1,
                showCloseIcon: !1,
                download: !1
            },
            plugins: [],
            strings: {
                closeGallery: "Close gallery",
                toggleMaximize: "Toggle maximize",
                previousSlide: "Previous slide",
                nextSlide: "Next slide",
                download: "Download",
                playVideo: "Play video"
            }
        };
    var ze = function() {
        function e(e) {
            return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"], this.selector = this._getSelector(e), this.firstElement = this._getFirstEl(), this
        }
        return e.generateUUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" == e ? t : 3 & t | 8).toString(16)
            }))
        }, e.prototype._getSelector = function(e, t) {
            return void 0 === t && (t = document), "string" != typeof e ? e : (t = t || document, "#" === e.substring(0, 1) ? t.querySelector(e) : t.querySelectorAll(e))
        }, e.prototype._each = function(e) {
            return this.selector ? (void 0 !== this.selector.length ? [].forEach.call(this.selector, e) : e(this.selector, 0), this) : this
        }, e.prototype._setCssVendorPrefix = function(e, t, i) {
            var s = t.replace(/-([a-z])/gi, (function(e, t) {
                return t.toUpperCase()
            })); - 1 !== this.cssVenderPrefixes.indexOf(s) ? (e.style[s.charAt(0).toLowerCase() + s.slice(1)] = i, e.style["webkit" + s] = i, e.style["moz" + s] = i, e.style["ms" + s] = i, e.style["o" + s] = i) : e.style[s] = i
        }, e.prototype._getFirstEl = function() {
            return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector
        }, e.prototype.isEventMatched = function(e, t) {
            var i = t.split(".");
            return e.split(".").filter((function(e) {
                return e
            })).every((function(e) {
                return -1 !== i.indexOf(e)
            }))
        }, e.prototype.attr = function(e, t) {
            return void 0 === t ? this.firstElement ? this.firstElement.getAttribute(e) : "" : (this._each((function(i) {
                i.setAttribute(e, t)
            })), this)
        }, e.prototype.find = function(e) {
            return Oe(this._getSelector(e, this.selector))
        }, e.prototype.first = function() {
            return this.selector && void 0 !== this.selector.length ? Oe(this.selector[0]) : Oe(this.selector)
        }, e.prototype.eq = function(e) {
            return Oe(this.selector[e])
        }, e.prototype.parent = function() {
            return Oe(this.selector.parentElement)
        }, e.prototype.get = function() {
            return this._getFirstEl()
        }, e.prototype.removeAttr = function(e) {
            var t = e.split(" ");
            return this._each((function(e) {
                t.forEach((function(t) {
                    return e.removeAttribute(t)
                }))
            })), this
        }, e.prototype.wrap = function(e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return t.className = e, this.firstElement.parentNode.insertBefore(t, this.firstElement), this.firstElement.parentNode.removeChild(this.firstElement), t.appendChild(this.firstElement), this
        }, e.prototype.addClass = function(e) {
            return void 0 === e && (e = ""), this._each((function(t) {
                e.split(" ").forEach((function(e) {
                    e && t.classList.add(e)
                }))
            })), this
        }, e.prototype.removeClass = function(e) {
            return this._each((function(t) {
                e.split(" ").forEach((function(e) {
                    e && t.classList.remove(e)
                }))
            })), this
        }, e.prototype.hasClass = function(e) {
            return !!this.firstElement && this.firstElement.classList.contains(e)
        }, e.prototype.hasAttribute = function(e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e)
        }, e.prototype.toggleClass = function(e) {
            return this.firstElement ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e), this) : this
        }, e.prototype.css = function(e, t) {
            var i = this;
            return this._each((function(s) {
                i._setCssVendorPrefix(s, e, t)
            })), this
        }, e.prototype.on = function(t, i) {
            var s = this;
            return this.selector ? (t.split(" ").forEach((function(t) {
                Array.isArray(e.eventListeners[t]) || (e.eventListeners[t] = []), e.eventListeners[t].push(i), s.selector.addEventListener(t.split(".")[0], i)
            })), this) : this
        }, e.prototype.once = function(e, t) {
            var i = this;
            return this.on(e, (function() {
                i.off(e), t(e)
            })), this
        }, e.prototype.off = function(t) {
            var i = this;
            return this.selector ? (Object.keys(e.eventListeners).forEach((function(s) {
                i.isEventMatched(t, s) && (e.eventListeners[s].forEach((function(e) {
                    i.selector.removeEventListener(s.split(".")[0], e)
                })), e.eventListeners[s] = [])
            })), this) : this
        }, e.prototype.trigger = function(e, t) {
            if (!this.firstElement) return this;
            var i = new CustomEvent(e.split(".")[0], {
                detail: t || null
            });
            return this.firstElement.dispatchEvent(i), this
        }, e.prototype.load = function(e) {
            var t = this;
            return fetch(e).then((function(e) {
                return e.text()
            })).then((function(e) {
                t.selector.innerHTML = e
            })), this
        }, e.prototype.html = function(e) {
            return void 0 === e ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each((function(t) {
                t.innerHTML = e
            })), this)
        }, e.prototype.append = function(e) {
            return this._each((function(t) {
                "string" == typeof e ? t.insertAdjacentHTML("beforeend", e) : t.appendChild(e)
            })), this
        }, e.prototype.prepend = function(e) {
            return this._each((function(t) {
                t.insertAdjacentHTML("afterbegin", e)
            })), this
        }, e.prototype.remove = function() {
            return this._each((function(e) {
                e.parentNode.removeChild(e)
            })), this
        }, e.prototype.empty = function() {
            return this._each((function(e) {
                e.innerHTML = ""
            })), this
        }, e.prototype.scrollTop = function(e) {
            return void 0 !== e ? (document.body.scrollTop = e, document.documentElement.scrollTop = e, this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }, e.prototype.scrollLeft = function(e) {
            return void 0 !== e ? (document.body.scrollLeft = e, document.documentElement.scrollLeft = e, this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }, e.prototype.offset = function() {
            if (!this.firstElement) return {
                left: 0,
                top: 0
            };
            var e = this.firstElement.getBoundingClientRect(),
                t = Oe("body").style().marginLeft;
            return {
                left: e.left - parseFloat(t) + this.scrollLeft(),
                top: e.top + this.scrollTop()
            }
        }, e.prototype.style = function() {
            return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
        }, e.prototype.width = function() {
            var e = this.style();
            return this.firstElement.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
        }, e.prototype.height = function() {
            var e = this.style();
            return this.firstElement.clientHeight - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom)
        }, e.eventListeners = {}, e
    }();

    function Oe(e) {
        return function() {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: null
                };
                var i = document.createEvent("CustomEvent");
                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
            }
        }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), new ze(e)
    }
    var De = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];

    function Ae(e) {
        return "href" === e ? "src" : e = (e = (e = e.replace("data-", "")).charAt(0).toLowerCase() + e.slice(1)).replace(/-([a-z])/g, (function(e) {
            return e[1].toUpperCase()
        }))
    }
    var Be = function(e, t, i, s) {
            void 0 === i && (i = 0);
            var n = Oe(e).attr("data-lg-size") || s;
            if (n) {
                var a = n.split(",");
                if (a[1])
                    for (var r = window.innerWidth, o = 0; o < a.length; o++) {
                        var l = a[o];
                        if (parseInt(l.split("-")[2], 10) > r) {
                            n = l;
                            break
                        }
                        o === a.length - 1 && (n = l)
                    }
                var d = n.split("-"),
                    c = parseInt(d[0], 10),
                    h = parseInt(d[1], 10),
                    u = t.width(),
                    p = t.height() - i,
                    g = Math.min(u, c),
                    m = Math.min(p, h),
                    f = Math.min(g / c, m / h);
                return {
                    width: c * f,
                    height: h * f
                }
            }
        },
        Ge = function(e, t, i, s, n) {
            if (n) {
                var a = Oe(e).find("img").first();
                if (a.get()) {
                    var r = t.get().getBoundingClientRect(),
                        o = r.width,
                        l = t.height() - (i + s),
                        d = a.width(),
                        c = a.height(),
                        h = a.style(),
                        u = (o - d) / 2 - a.offset().left + (parseFloat(h.paddingLeft) || 0) + (parseFloat(h.borderLeft) || 0) + Oe(window).scrollLeft() + r.left,
                        p = (l - c) / 2 - a.offset().top + (parseFloat(h.paddingTop) || 0) + (parseFloat(h.borderTop) || 0) + Oe(window).scrollTop() + i;
                    return "translate3d(" + (u *= -1) + "px, " + (p *= -1) + "px, 0) scale3d(" + d / n.width + ", " + c / n.height + ", 1)"
                }
            }
        },
        He = function(e, t, i, s, n, a) {
            return '<div class="lg-video-cont lg-has-iframe" style="width:' + e + "; max-width:" + i + "; height: " + t + "; max-height:" + s + '">\n                    <iframe class="lg-object" frameborder="0" ' + (a ? 'title="' + a + '"' : "") + ' src="' + n + '"  allowfullscreen="true"></iframe>\n                </div>'
        },
        Xe = function(e, t, i, s, n, a) {
            var r = "<img " + i + " " + (s ? 'srcset="' + s + '"' : "") + "  " + (n ? 'sizes="' + n + '"' : "") + ' class="lg-object lg-image" data-index="' + e + '" src="' + t + '" />',
                o = "";
            a && (o = ("string" == typeof a ? JSON.parse(a) : a).map((function(e) {
                var t = "";
                return Object.keys(e).forEach((function(i) {
                    t += " " + i + '="' + e[i] + '"'
                })), "<source " + t + "></source>"
            })));
            return "" + o + r
        },
        Ne = function(e) {
            for (var t = [], i = [], s = "", n = 0; n < e.length; n++) {
                var a = e[n].split(" ");
                "" === a[0] && a.splice(0, 1), i.push(a[0]), t.push(a[1])
            }
            for (var r = window.innerWidth, o = 0; o < t.length; o++)
                if (parseInt(t[o], 10) > r) {
                    s = i[o];
                    break
                }
            return s
        },
        _e = function(e) {
            return !!e && (!!e.complete && 0 !== e.naturalWidth)
        },
        Ve = function(e, t, i, s, n) {
            return '<div class="lg-video-cont ' + (n && n.youtube ? "lg-has-youtube" : n && n.vimeo ? "lg-has-vimeo" : "lg-has-html5") + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' + s + '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' + s + '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (t || "") + '\n            <img class="lg-object lg-video-poster" src="' + e + '" />\n        </div>'
        },
        Fe = function(e) {
            var t = e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
            return [].filter.call(t, (function(e) {
                var t = window.getComputedStyle(e);
                return "none" !== t.display && "hidden" !== t.visibility
            }))
        },
        Ye = function(e, t, i, s) {
            var n = [],
                a = function() {
                    for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                    var s = Array(e),
                        n = 0;
                    for (t = 0; t < i; t++)
                        for (var a = arguments[t], r = 0, o = a.length; r < o; r++, n++) s[n] = a[r];
                    return s
                }(De, t);
            return [].forEach.call(e, (function(e) {
                for (var t = {}, r = 0; r < e.attributes.length; r++) {
                    var o = e.attributes[r];
                    if (o.specified) {
                        var l = Ae(o.name),
                            d = "";
                        a.indexOf(l) > -1 && (d = l), d && (t[d] = o.value)
                    }
                }
                var c = Oe(e),
                    h = c.find("img").first().attr("alt"),
                    u = c.attr("title"),
                    p = s ? c.attr(s) : c.find("img").first().attr("src");
                t.thumb = p, i && !t.subHtml && (t.subHtml = u || h || ""), t.alt = h || u || "", n.push(t)
            })), n
        },
        We = function() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        },
        je = function(e, t, i) {
            if (!e) return t ? {
                html5: !0
            } : void console.error("lightGallery :- data-src is not provided on slide item " + (i + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
            var s = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i),
                n = e.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i),
                a = e.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
            return s ? {
                youtube: s
            } : n ? {
                vimeo: n
            } : a ? {
                wistia: a
            } : void 0
        },
        Re = 0,
        qe = function() {
            function e(e, t) {
                if (this.lgOpened = !1, this.index = 0, this.plugins = [], this.lGalleryOn = !1, this.lgBusy = !1, this.currentItemsInDom = [], this.prevScrollTop = 0, this.bodyPaddingRight = 0, this.isDummyImageRemoved = !1, this.dragOrSwipeEnabled = !1, this.mediaContainerPosition = {
                        top: 0,
                        bottom: 0
                    }, !e) return this;
                if (Re++, this.lgId = Re, this.el = e, this.LGel = Oe(e), this.generateSettings(t), this.buildModules(), this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.galleryItems = this.getItems(), this.normalizeSettings(), this.init(), this.validateLicense(), this
            }
            return e.prototype.generateSettings = function(e) {
                if (this.settings = he(he({}, Le), e), this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : We()) {
                    var t = he(he({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = he(he({}, this.settings), t)
                }
            }, e.prototype.normalizeSettings = function() {
                this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1), this.settings.closable || (this.settings.swipeToClose = !1), this.zoomFromOrigin = this.settings.zoomFromOrigin, this.settings.dynamic && (this.zoomFromOrigin = !1), this.settings.container || (this.settings.container = document.body), this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
            }, e.prototype.init = function() {
                var e = this;
                this.addSlideVideoInfo(this.galleryItems), this.buildStructure(), this.LGel.trigger(pe, {
                    instance: this
                }), this.settings.keyPress && this.keyPress(), setTimeout((function() {
                    e.enableDrag(), e.enableSwipe(), e.triggerPosterClick()
                }), 50), this.arrow(), this.settings.mousewheel && this.mousewheel(), this.settings.dynamic || this.openGalleryOnItemClick()
            }, e.prototype.openGalleryOnItemClick = function() {
                for (var e = this, t = function(t) {
                        var s = i.items[t],
                            n = Oe(s),
                            a = ze.generateUUID();
                        n.attr("data-lg-id", a).on("click.lgcustom-item-" + a, (function(i) {
                            i.preventDefault();
                            var n = e.settings.index || t;
                            e.openGallery(n, s)
                        }))
                    }, i = this, s = 0; s < this.items.length; s++) t(s)
            }, e.prototype.buildModules = function() {
                var e = this;
                this.settings.plugins.forEach((function(t) {
                    e.plugins.push(new t(e, Oe))
                }))
            }, e.prototype.validateLicense = function() {
                this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
            }, e.prototype.getSlideItem = function(e) {
                return Oe(this.getSlideItemId(e))
            }, e.prototype.getSlideItemId = function(e) {
                return "#lg-item-" + this.lgId + "-" + e
            }, e.prototype.getIdName = function(e) {
                return e + "-" + this.lgId
            }, e.prototype.getElementById = function(e) {
                return Oe("#" + this.getIdName(e))
            }, e.prototype.manageSingleSlideClassName = function() {
                this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
            }, e.prototype.buildStructure = function() {
                var e = this;
                if (!(this.$container && this.$container.get())) {
                    var t = "",
                        i = "";
                    this.settings.controls && (t = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="' + this.settings.strings.previousSlide + '" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="' + this.settings.strings.nextSlide + '" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"), ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                    var s = "";
                    this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
                    var n = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "",
                        a = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "",
                        r = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : ""),
                        o = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="' + this.settings.strings.closeGallery + '" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "",
                        l = this.settings.showMaximizeIcon ? '<button type="button" aria-label="' + this.settings.strings.toggleMaximize + '" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "",
                        d = '\n        <div class="' + r + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + n + " " + a + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + s + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + t + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + l + "\n                    " + o + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                    Oe(this.settings.container).append(d), document.body !== this.settings.container && Oe(this.settings.container).css("position", "relative"), this.outer = this.getElementById("lg-outer"), this.$lgComponents = this.getElementById("lg-components"), this.$backdrop = this.getElementById("lg-backdrop"), this.$container = this.getElementById("lg-container"), this.$inner = this.getElementById("lg-inner"), this.$content = this.getElementById("lg-content"), this.$toolbar = this.getElementById("lg-toolbar"), this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                    var c = this.settings.mode + " ";
                    this.manageSingleSlideClassName(), this.settings.enableDrag && (c += "lg-grab "), this.outer.addClass(c), this.$inner.css("transition-timing-function", this.settings.easing), this.$inner.css("transition-duration", this.settings.speed + "ms"), this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="' + this.settings.strings.download + '" download class="lg-download lg-icon"></a>'), this.counter(), Oe(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                        e.refreshOnResize()
                    })), this.hideBars(), this.manageCloseGallery(), this.toggleMaximize(), this.initModules()
                }
            }, e.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var e = this.galleryItems[this.index].__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var t = this.mediaContainerPosition,
                        i = t.top,
                        s = t.bottom;
                    if (this.currentImageSize = Be(this.items[this.index], this.outer, i + s, e && this.settings.videoMaxSize), e && this.resizeVideoSlide(this.index, this.currentImageSize), this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var n = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", n)
                    }
                    this.LGel.trigger(me)
                }
            }, e.prototype.resizeVideoSlide = function(e, t) {
                var i = this.getVideoContStyle(t);
                this.getSlideItem(e).find(".lg-video-cont").attr("style", i)
            }, e.prototype.updateSlides = function(e, t) {
                if (this.index > e.length - 1 && (this.index = e.length - 1), 1 === e.length && (this.index = 0), e.length) {
                    var i = this.galleryItems[t].src;
                    this.galleryItems = e, this.updateControls(), this.$inner.empty(), this.currentItemsInDom = [];
                    var s = 0;
                    this.galleryItems.some((function(e, t) {
                        return e.src === i && (s = t, !0)
                    })), this.currentItemsInDom = this.organizeSlideItems(s, -1), this.loadContent(s, !0), this.getSlideItem(s).addClass("lg-current"), this.index = s, this.updateCurrentCounter(s), this.LGel.trigger(fe)
                } else this.closeGallery()
            }, e.prototype.getItems = function() {
                if (this.items = [], this.settings.dynamic) return this.settings.dynamicEl || [];
                if ("this" === this.settings.selector) this.items.push(this.el);
                else if (this.settings.selector)
                    if ("string" == typeof this.settings.selector)
                        if (this.settings.selectWithin) {
                            var e = Oe(this.settings.selectWithin);
                            this.items = e.find(this.settings.selector).get()
                        } else this.items = this.el.querySelectorAll(this.settings.selector);
                else this.items = this.settings.selector;
                else this.items = this.el.children;
                return Ye(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage)
            }, e.prototype.shouldHideScrollbar = function() {
                return this.settings.hideScrollbar && document.body === this.settings.container
            }, e.prototype.hideScrollbar = function() {
                if (this.shouldHideScrollbar()) {
                    this.bodyPaddingRight = parseFloat(Oe("body").style().paddingRight);
                    var e = document.documentElement.getBoundingClientRect(),
                        t = window.innerWidth - e.width;
                    Oe(document.body).css("padding-right", t + this.bodyPaddingRight + "px"), Oe(document.body).addClass("lg-overlay-open")
                }
            }, e.prototype.resetScrollBar = function() {
                this.shouldHideScrollbar() && (Oe(document.body).css("padding-right", this.bodyPaddingRight + "px"), Oe(document.body).removeClass("lg-overlay-open"))
            }, e.prototype.openGallery = function(e, t) {
                var i = this;
                if (void 0 === e && (e = this.settings.index), !this.lgOpened) {
                    this.lgOpened = !0, this.outer.removeClass("lg-hide-items"), this.hideScrollbar(), this.$container.addClass("lg-show");
                    var s = this.getItemsToBeInsertedToDom(e, e);
                    this.currentItemsInDom = s;
                    var n = "";
                    s.forEach((function(e) {
                        n = n + '<div id="' + e + '" class="lg-item"></div>'
                    })), this.$inner.append(n), this.addHtml(e);
                    var a = "";
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var r = this.mediaContainerPosition,
                        o = r.top,
                        l = r.bottom;
                    this.settings.allowMediaOverlap || this.setMediaContainerPosition(o, l);
                    var d = this.galleryItems[e].__slideVideoInfo;
                    this.zoomFromOrigin && t && (this.currentImageSize = Be(t, this.outer, o + l, d && this.settings.videoMaxSize), a = Ge(t, this.outer, o, l, this.currentImageSize)), this.zoomFromOrigin && a || (this.outer.addClass(this.settings.startClass), this.getSlideItem(e).removeClass("lg-complete"));
                    var c = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                    setTimeout((function() {
                        i.outer.addClass("lg-components-open")
                    }), c), this.index = e, this.LGel.trigger(be), this.getSlideItem(e).addClass("lg-current"), this.lGalleryOn = !1, this.prevScrollTop = Oe(window).scrollTop(), setTimeout((function() {
                        if (i.zoomFromOrigin && a) {
                            var t = i.getSlideItem(e);
                            t.css("transform", a), setTimeout((function() {
                                t.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"), i.outer.addClass("lg-zoom-from-image")
                            })), setTimeout((function() {
                                t.css("transform", "translate3d(0, 0, 0)")
                            }), 100)
                        }
                        setTimeout((function() {
                            i.$backdrop.addClass("in"), i.$container.addClass("lg-show-in")
                        }), 10), setTimeout((function() {
                            i.settings.trapFocus && document.body === i.settings.container && i.trapFocus()
                        }), i.settings.backdropDuration + 50), i.zoomFromOrigin && a || setTimeout((function() {
                            i.outer.addClass("lg-visible")
                        }), i.settings.backdropDuration), i.slide(e, !1, !1, !1), i.LGel.trigger(ye)
                    })), document.body === this.settings.container && Oe("html").addClass("lg-on")
                }
            }, e.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var e = this.$toolbar.get().clientHeight || 0,
                    t = this.outer.find(".lg-components .lg-sub-html").get(),
                    i = this.settings.defaultCaptionHeight || t && t.clientHeight || 0,
                    s = this.outer.find(".lg-thumb-outer").get();
                return {
                    top: e,
                    bottom: (s ? s.clientHeight : 0) + i
                }
            }, e.prototype.setMediaContainerPosition = function(e, t) {
                void 0 === e && (e = 0), void 0 === t && (t = 0), this.$content.css("top", e + "px").css("bottom", t + "px")
            }, e.prototype.hideBars = function() {
                var e = this;
                setTimeout((function() {
                    e.outer.removeClass("lg-hide-items"), e.settings.hideBarsDelay > 0 && (e.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                        e.outer.removeClass("lg-hide-items"), clearTimeout(e.hideBarTimeout), e.hideBarTimeout = setTimeout((function() {
                            e.outer.addClass("lg-hide-items")
                        }), e.settings.hideBarsDelay)
                    })), e.outer.trigger("mousemove.lg"))
                }), this.settings.showBarsAfter)
            }, e.prototype.initPictureFill = function(e) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [e.get()]
                    })
                } catch (e) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
                }
            }, e.prototype.counter = function() {
                if (this.settings.counter) {
                    var e = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(e)
                }
            }, e.prototype.addHtml = function(e) {
                var t, i;
                if (this.galleryItems[e].subHtmlUrl ? i = this.galleryItems[e].subHtmlUrl : t = this.galleryItems[e].subHtml, !i)
                    if (t) {
                        var s = t.substring(0, 1);
                        "." !== s && "#" !== s || (t = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? Oe(this.items).eq(e).find(t).first().html() : Oe(t).first().html())
                    } else t = "";
                if (".lg-item" !== this.settings.appendSubHtmlTo) i ? this.outer.find(".lg-sub-html").load(i) : this.outer.find(".lg-sub-html").html(t);
                else {
                    var n = Oe(this.getSlideItemId(e));
                    i ? n.load(i) : n.append('<div class="lg-sub-html">' + t + "</div>")
                }
                null != t && ("" === t ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")), this.LGel.trigger(ve, {
                    index: e
                })
            }, e.prototype.preload = function(e) {
                for (var t = 1; t <= this.settings.preload && !(t >= this.galleryItems.length - e); t++) this.loadContent(e + t, !1);
                for (var i = 1; i <= this.settings.preload && !(e - i < 0); i++) this.loadContent(e - i, !1)
            }, e.prototype.getDummyImgStyles = function(e) {
                return e ? "width:" + e.width + "px;\n                margin-left: -" + e.width / 2 + "px;\n                margin-top: -" + e.height / 2 + "px;\n                height:" + e.height + "px" : ""
            }, e.prototype.getVideoContStyle = function(e) {
                return e ? "width:" + e.width + "px;\n                height:" + e.height + "px" : ""
            }, e.prototype.getDummyImageContent = function(e, t, i) {
                var s;
                if (this.settings.dynamic || (s = Oe(this.items).eq(t)), s) {
                    var n = void 0;
                    if (!(n = this.settings.exThumbImage ? s.attr(this.settings.exThumbImage) : s.find("img").first().attr("src"))) return "";
                    var a = "<img " + i + ' style="' + this.getDummyImgStyles(this.currentImageSize) + '" class="lg-dummy-img" src="' + n + '" />';
                    return e.addClass("lg-first-slide"), this.outer.addClass("lg-first-slide-loading"), a
                }
                return ""
            }, e.prototype.setImgMarkup = function(e, t, i) {
                var s = this.galleryItems[i],
                    n = s.alt,
                    a = s.srcset,
                    r = s.sizes,
                    o = s.sources,
                    l = n ? 'alt="' + n + '"' : "",
                    d = '<picture class="lg-img-wrap"> ' + (this.isFirstSlideWithZoomAnimation() ? this.getDummyImageContent(t, i, l) : Xe(i, e, l, a, r, o)) + "</picture>";
                t.prepend(d)
            }, e.prototype.onSlideObjectLoad = function(e, t, i, s) {
                var n = e.find(".lg-object").first();
                _e(n.get()) || t ? i() : (n.on("load.lg error.lg", (function() {
                    i && i()
                })), n.on("error.lg", (function() {
                    s && s()
                })))
            }, e.prototype.onLgObjectLoad = function(e, t, i, s, n, a) {
                var r = this;
                this.onSlideObjectLoad(e, a, (function() {
                    r.triggerSlideItemLoad(e, t, i, s, n)
                }), (function() {
                    e.addClass("lg-complete lg-complete_"), e.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')
                }))
            }, e.prototype.triggerSlideItemLoad = function(e, t, i, s, n) {
                var a = this,
                    r = this.galleryItems[t],
                    o = n && "video" === this.getSlideType(r) && !r.poster ? s : 0;
                setTimeout((function() {
                    e.addClass("lg-complete lg-complete_"), a.LGel.trigger(we, {
                        index: t,
                        delay: i || 0,
                        isFirstSlide: n
                    })
                }), o)
            }, e.prototype.isFirstSlideWithZoomAnimation = function() {
                return !(this.lGalleryOn || !this.zoomFromOrigin || !this.currentImageSize)
            }, e.prototype.addSlideVideoInfo = function(e) {
                var t = this;
                e.forEach((function(e, i) {
                    e.__slideVideoInfo = je(e.src, !!e.video, i), e.__slideVideoInfo && t.settings.loadYouTubePoster && !e.poster && e.__slideVideoInfo.youtube && (e.poster = "//img.youtube.com/vi/" + e.__slideVideoInfo.youtube[1] + "/maxresdefault.jpg")
                }))
            }, e.prototype.loadContent = function(e, t) {
                var i = this,
                    s = this.galleryItems[e],
                    n = Oe(this.getSlideItemId(e)),
                    a = s.poster,
                    r = s.srcset,
                    o = s.sizes,
                    l = s.sources,
                    d = s.src,
                    c = s.video,
                    h = c && "string" == typeof c ? JSON.parse(c) : c;
                if (s.responsive) {
                    var u = s.responsive.split(",");
                    d = Ne(u) || d
                }
                var p = s.__slideVideoInfo,
                    g = "",
                    m = !!s.iframe,
                    f = !this.lGalleryOn,
                    v = 0;
                if (f && (v = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10), !n.hasClass("lg-loaded")) {
                    if (p) {
                        var b = this.mediaContainerPosition,
                            y = b.top,
                            w = b.bottom,
                            x = Be(this.items[e], this.outer, y + w, p && this.settings.videoMaxSize);
                        g = this.getVideoContStyle(x)
                    }
                    if (m) {
                        var T = He(this.settings.iframeWidth, this.settings.iframeHeight, this.settings.iframeMaxWidth, this.settings.iframeMaxHeight, d, s.iframeTitle);
                        n.prepend(T)
                    } else if (a) {
                        var C = "";
                        f && this.zoomFromOrigin && this.currentImageSize && (C = this.getDummyImageContent(n, e, ""));
                        T = Ve(a, C || "", g, this.settings.strings.playVideo, p);
                        n.prepend(T)
                    } else if (p) {
                        T = '<div class="lg-video-cont " style="' + g + '"></div>';
                        n.prepend(T)
                    } else if (this.setImgMarkup(d, n, e), r || l) {
                        var S = n.find(".lg-object");
                        this.initPictureFill(S)
                    }(a || p) && this.LGel.trigger(ge, {
                        index: e,
                        src: d,
                        html5Video: h,
                        hasPoster: !!a
                    }), this.LGel.trigger(ue, {
                        index: e
                    }), this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(e)
                }
                var E = 0;
                v && !Oe(document.body).hasClass("lg-from-hash") && (E = v), this.isFirstSlideWithZoomAnimation() && (setTimeout((function() {
                    n.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
                }), this.settings.startAnimationDuration + 100), n.hasClass("lg-loaded") || setTimeout((function() {
                    if ("image" === i.getSlideType(s)) {
                        var t = s.alt,
                            c = t ? 'alt="' + t + '"' : "";
                        if (n.find(".lg-img-wrap").append(Xe(e, d, c, r, o, s.sources)), r || l) {
                            var h = n.find(".lg-object");
                            i.initPictureFill(h)
                        }
                    }("image" === i.getSlideType(s) || "video" === i.getSlideType(s) && a) && (i.onLgObjectLoad(n, e, v, E, !0, !1), i.onSlideObjectLoad(n, !(!p || !p.html5 || a), (function() {
                        i.loadContentOnFirstSlideLoad(e, n, E)
                    }), (function() {
                        i.loadContentOnFirstSlideLoad(e, n, E)
                    })))
                }), this.settings.startAnimationDuration + 100)), n.addClass("lg-loaded"), this.isFirstSlideWithZoomAnimation() && ("video" !== this.getSlideType(s) || a) || this.onLgObjectLoad(n, e, v, E, f, !(!p || !p.html5 || a)), this.zoomFromOrigin && this.currentImageSize || !n.hasClass("lg-complete_") || this.lGalleryOn || setTimeout((function() {
                    n.addClass("lg-complete")
                }), this.settings.backdropDuration), this.lGalleryOn = !0, !0 === t && (n.hasClass("lg-complete_") ? this.preload(e) : n.find(".lg-object").first().on("load.lg error.lg", (function() {
                    i.preload(e)
                })))
            }, e.prototype.loadContentOnFirstSlideLoad = function(e, t, i) {
                var s = this;
                setTimeout((function() {
                    t.find(".lg-dummy-img").remove(), t.removeClass("lg-first-slide"), s.outer.removeClass("lg-first-slide-loading"), s.isDummyImageRemoved = !0, s.preload(e)
                }), i + 300)
            }, e.prototype.getItemsToBeInsertedToDom = function(e, t, i) {
                var s = this;
                void 0 === i && (i = 0);
                var n = [],
                    a = Math.max(i, 3);
                a = Math.min(a, this.galleryItems.length);
                var r = "lg-item-" + this.lgId + "-" + t;
                if (this.galleryItems.length <= 3) return this.galleryItems.forEach((function(e, t) {
                    n.push("lg-item-" + s.lgId + "-" + t)
                })), n;
                if (e < (this.galleryItems.length - 1) / 2) {
                    for (var o = e; o > e - a / 2 && o >= 0; o--) n.push("lg-item-" + this.lgId + "-" + o);
                    var l = n.length;
                    for (o = 0; o < a - l; o++) n.push("lg-item-" + this.lgId + "-" + (e + o + 1))
                } else {
                    for (o = e; o <= this.galleryItems.length - 1 && o < e + a / 2; o++) n.push("lg-item-" + this.lgId + "-" + o);
                    for (l = n.length, o = 0; o < a - l; o++) n.push("lg-item-" + this.lgId + "-" + (e - o - 1))
                }
                return this.settings.loop && (e === this.galleryItems.length - 1 ? n.push("lg-item-" + this.lgId + "-0") : 0 === e && n.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))), -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + t), n
            }, e.prototype.organizeSlideItems = function(e, t) {
                var i = this,
                    s = this.getItemsToBeInsertedToDom(e, t, this.settings.numberOfSlideItemsInDom);
                return s.forEach((function(e) {
                    -1 === i.currentItemsInDom.indexOf(e) && i.$inner.append('<div id="' + e + '" class="lg-item"></div>')
                })), this.currentItemsInDom.forEach((function(e) {
                    -1 === s.indexOf(e) && Oe("#" + e).remove()
                })), s
            }, e.prototype.getPreviousSlideIndex = function() {
                var e = 0;
                try {
                    var t = this.outer.find(".lg-current").first().attr("id");
                    e = parseInt(t.split("-")[3]) || 0
                } catch (t) {
                    e = 0
                }
                return e
            }, e.prototype.setDownloadValue = function(e) {
                if (this.settings.download) {
                    var t = this.galleryItems[e];
                    if (!1 === t.downloadUrl || "false" === t.downloadUrl) this.outer.addClass("lg-hide-download");
                    else {
                        var i = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download"), i.attr("href", t.downloadUrl || t.src), t.download && i.attr("download", t.download)
                    }
                }
            }, e.prototype.makeSlideAnimation = function(e, t, i) {
                var s = this;
                this.lGalleryOn && i.addClass("lg-slide-progress"), setTimeout((function() {
                    s.outer.addClass("lg-no-trans"), s.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"), "prev" === e ? (t.addClass("lg-prev-slide"), i.addClass("lg-next-slide")) : (t.addClass("lg-next-slide"), i.addClass("lg-prev-slide")), setTimeout((function() {
                        s.outer.find(".lg-item").removeClass("lg-current"), t.addClass("lg-current"), s.outer.removeClass("lg-no-trans")
                    }), 50)
                }), this.lGalleryOn ? this.settings.slideDelay : 0)
            }, e.prototype.slide = function(e, t, i, s) {
                var n = this,
                    a = this.getPreviousSlideIndex();
                if (this.currentItemsInDom = this.organizeSlideItems(e, a), !this.lGalleryOn || a !== e) {
                    var r = this.galleryItems.length;
                    if (!this.lgBusy) {
                        this.settings.counter && this.updateCurrentCounter(e);
                        var o = this.getSlideItem(e),
                            l = this.getSlideItem(a),
                            d = this.galleryItems[e],
                            c = d.__slideVideoInfo;
                        if (this.outer.attr("data-lg-slide-type", this.getSlideType(d)), this.setDownloadValue(e), c) {
                            var h = this.mediaContainerPosition,
                                u = h.top,
                                p = h.bottom,
                                g = Be(this.items[e], this.outer, u + p, c && this.settings.videoMaxSize);
                            this.resizeVideoSlide(e, g)
                        }
                        if (this.LGel.trigger(xe, {
                                prevIndex: a,
                                index: e,
                                fromTouch: !!t,
                                fromThumb: !!i
                            }), this.lgBusy = !0, clearTimeout(this.hideBarTimeout), this.arrowDisable(e), s || (e < a ? s = "prev" : e > a && (s = "next")), t) {
                            this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                            var m = void 0,
                                f = void 0;
                            r > 2 ? (m = e - 1, f = e + 1, (0 === e && a === r - 1 || e === r - 1 && 0 === a) && (f = 0, m = r - 1)) : (m = 0, f = 1), "prev" === s ? this.getSlideItem(f).addClass("lg-next-slide") : this.getSlideItem(m).addClass("lg-prev-slide"), o.addClass("lg-current")
                        } else this.makeSlideAnimation(s, o, l);
                        this.lGalleryOn ? setTimeout((function() {
                            n.loadContent(e, !0), ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(e)
                        }), this.settings.speed + 50 + (t ? 0 : this.settings.slideDelay)) : this.loadContent(e, !0), setTimeout((function() {
                            n.lgBusy = !1, l.removeClass("lg-slide-progress"), n.LGel.trigger(Te, {
                                prevIndex: a,
                                index: e,
                                fromTouch: t,
                                fromThumb: i
                            })
                        }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (t ? 0 : this.settings.slideDelay))
                    }
                    this.index = e
                }
            }, e.prototype.updateCurrentCounter = function(e) {
                this.getElementById("lg-counter-current").html(e + 1 + "")
            }, e.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
            }, e.prototype.getSlideType = function(e) {
                return e.__slideVideoInfo ? "video" : e.iframe ? "iframe" : "image"
            }, e.prototype.touchMove = function(e, t, i) {
                var s = t.pageX - e.pageX,
                    n = t.pageY - e.pageY,
                    a = !1;
                if (this.swipeDirection ? a = !0 : Math.abs(s) > 15 ? (this.swipeDirection = "horizontal", a = !0) : Math.abs(n) > 15 && (this.swipeDirection = "vertical", a = !0), a) {
                    var r = this.getSlideItem(this.index);
                    if ("horizontal" === this.swipeDirection) {
                        null == i || i.preventDefault(), this.outer.addClass("lg-dragging"), this.setTranslate(r, s, 0);
                        var o = r.get().offsetWidth,
                            l = 15 * o / 100 - Math.abs(10 * s / 100);
                        this.setTranslate(this.outer.find(".lg-prev-slide").first(), -o + s - l, 0), this.setTranslate(this.outer.find(".lg-next-slide").first(), o + s + l, 0)
                    } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) {
                        null == i || i.preventDefault(), this.$container.addClass("lg-dragging-vertical");
                        var d = 1 - Math.abs(n) / window.innerHeight;
                        this.$backdrop.css("opacity", d);
                        var c = 1 - Math.abs(n) / (2 * window.innerWidth);
                        this.setTranslate(r, 0, n, c, c), Math.abs(n) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
                    }
                }
            }, e.prototype.touchEnd = function(e, t, i) {
                var s, n = this;
                "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"), setTimeout((function() {
                    n.$container.removeClass("lg-dragging-vertical"), n.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var a = !0;
                    if ("horizontal" === n.swipeDirection) {
                        s = e.pageX - t.pageX;
                        var r = Math.abs(e.pageX - t.pageX);
                        s < 0 && r > n.settings.swipeThreshold ? (n.goToNextSlide(!0), a = !1) : s > 0 && r > n.settings.swipeThreshold && (n.goToPrevSlide(!0), a = !1)
                    } else if ("vertical" === n.swipeDirection) {
                        if (s = Math.abs(e.pageY - t.pageY), n.settings.closable && n.settings.swipeToClose && s > 100) return void n.closeGallery();
                        n.$backdrop.css("opacity", 1)
                    }
                    if (n.outer.find(".lg-item").removeAttr("style"), a && Math.abs(e.pageX - t.pageX) < 5) {
                        var o = Oe(i.target);
                        n.isPosterElement(o) && n.LGel.trigger(Ce)
                    }
                    n.swipeDirection = void 0
                })), setTimeout((function() {
                    n.outer.hasClass("lg-dragging") || "lg-slide" === n.settings.mode || n.outer.removeClass("lg-slide")
                }), this.settings.speed + 100)
            }, e.prototype.enableSwipe = function() {
                var e = this,
                    t = {},
                    i = {},
                    s = !1,
                    n = !1;
                this.settings.enableSwipe && (this.$inner.on("touchstart.lg", (function(i) {
                    e.dragOrSwipeEnabled = !0;
                    var s = e.getSlideItem(e.index);
                    !Oe(i.target).hasClass("lg-item") && !s.get().contains(i.target) || e.outer.hasClass("lg-zoomed") || e.lgBusy || 1 !== i.touches.length || (n = !0, e.touchAction = "swipe", e.manageSwipeClass(), t = {
                        pageX: i.touches[0].pageX,
                        pageY: i.touches[0].pageY
                    })
                })), this.$inner.on("touchmove.lg", (function(a) {
                    n && "swipe" === e.touchAction && 1 === a.touches.length && (i = {
                        pageX: a.touches[0].pageX,
                        pageY: a.touches[0].pageY
                    }, e.touchMove(t, i, a), s = !0)
                })), this.$inner.on("touchend.lg", (function(a) {
                    if ("swipe" === e.touchAction) {
                        if (s) s = !1, e.touchEnd(i, t, a);
                        else if (n) {
                            var r = Oe(a.target);
                            e.isPosterElement(r) && e.LGel.trigger(Ce)
                        }
                        e.touchAction = void 0, n = !1
                    }
                })))
            }, e.prototype.enableDrag = function() {
                var e = this,
                    t = {},
                    i = {},
                    s = !1,
                    n = !1;
                this.settings.enableDrag && (this.outer.on("mousedown.lg", (function(i) {
                    e.dragOrSwipeEnabled = !0;
                    var n = e.getSlideItem(e.index);
                    (Oe(i.target).hasClass("lg-item") || n.get().contains(i.target)) && (e.outer.hasClass("lg-zoomed") || e.lgBusy || (i.preventDefault(), e.lgBusy || (e.manageSwipeClass(), t = {
                        pageX: i.pageX,
                        pageY: i.pageY
                    }, s = !0, e.outer.get().scrollLeft += 1, e.outer.get().scrollLeft -= 1, e.outer.removeClass("lg-grab").addClass("lg-grabbing"), e.LGel.trigger(Se))))
                })), Oe(window).on("mousemove.lg.global" + this.lgId, (function(a) {
                    s && e.lgOpened && (n = !0, i = {
                        pageX: a.pageX,
                        pageY: a.pageY
                    }, e.touchMove(t, i), e.LGel.trigger(Ee))
                })), Oe(window).on("mouseup.lg.global" + this.lgId, (function(a) {
                    if (e.lgOpened) {
                        var r = Oe(a.target);
                        n ? (n = !1, e.touchEnd(i, t, a), e.LGel.trigger(Ie)) : e.isPosterElement(r) && e.LGel.trigger(Ce), s && (s = !1, e.outer.removeClass("lg-grabbing").addClass("lg-grab"))
                    }
                })))
            }, e.prototype.triggerPosterClick = function() {
                var e = this;
                this.$inner.on("click.lg", (function(t) {
                    !e.dragOrSwipeEnabled && e.isPosterElement(Oe(t.target)) && e.LGel.trigger(Ce)
                }))
            }, e.prototype.manageSwipeClass = function() {
                var e = this.index + 1,
                    t = this.index - 1;
                this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? t = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (e = 0)), this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"), this.getSlideItem(e).addClass("lg-next-slide")
            }, e.prototype.goToNextSlide = function(e) {
                var t = this,
                    i = this.settings.loop;
                e && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++, this.LGel.trigger(Me, {
                    index: this.index
                }), this.slide(this.index, !!e, !1, "next")) : i ? (this.index = 0, this.LGel.trigger(Me, {
                    index: this.index
                }), this.slide(this.index, !!e, !1, "next")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-right-end"), setTimeout((function() {
                    t.outer.removeClass("lg-right-end")
                }), 400)))
            }, e.prototype.goToPrevSlide = function(e) {
                var t = this,
                    i = this.settings.loop;
                e && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index > 0 ? (this.index--, this.LGel.trigger($e, {
                    index: this.index,
                    fromTouch: e
                }), this.slide(this.index, !!e, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1, this.LGel.trigger($e, {
                    index: this.index,
                    fromTouch: e
                }), this.slide(this.index, !!e, !1, "prev")) : this.settings.slideEndAnimation && !e && (this.outer.addClass("lg-left-end"), setTimeout((function() {
                    t.outer.removeClass("lg-left-end")
                }), 400)))
            }, e.prototype.keyPress = function() {
                var e = this;
                Oe(window).on("keydown.lg.global" + this.lgId, (function(t) {
                    e.lgOpened && !0 === e.settings.escKey && 27 === t.keyCode && (t.preventDefault(), e.settings.allowMediaOverlap && e.outer.hasClass("lg-can-toggle") && e.outer.hasClass("lg-components-open") ? e.outer.removeClass("lg-components-open") : e.closeGallery()), e.lgOpened && e.galleryItems.length > 1 && (37 === t.keyCode && (t.preventDefault(), e.goToPrevSlide()), 39 === t.keyCode && (t.preventDefault(), e.goToNextSlide()))
                }))
            }, e.prototype.arrow = function() {
                var e = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    e.goToPrevSlide()
                })), this.getElementById("lg-next").on("click.lg", (function() {
                    e.goToNextSlide()
                }))
            }, e.prototype.arrowDisable = function(e) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var t = this.getElementById("lg-prev"),
                        i = this.getElementById("lg-next");
                    e + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"), 0 === e ? t.attr("disabled", "disabled").addClass("disabled") : t.removeAttr("disabled").removeClass("disabled")
                }
            }, e.prototype.setTranslate = function(e, t, i, s, n) {
                void 0 === s && (s = 1), void 0 === n && (n = 1), e.css("transform", "translate3d(" + t + "px, " + i + "px, 0px) scale3d(" + s + ", " + n + ", 1)")
            }, e.prototype.mousewheel = function() {
                var e = this,
                    t = 0;
                this.outer.on("wheel.lg", (function(i) {
                    if (i.deltaY && !(e.galleryItems.length < 2)) {
                        i.preventDefault();
                        var s = (new Date).getTime();
                        s - t < 1e3 || (t = s, i.deltaY > 0 ? e.goToNextSlide() : i.deltaY < 0 && e.goToPrevSlide())
                    }
                }))
            }, e.prototype.isSlideElement = function(e) {
                return e.hasClass("lg-outer") || e.hasClass("lg-item") || e.hasClass("lg-img-wrap")
            }, e.prototype.isPosterElement = function(e) {
                var t = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return e.hasClass("lg-video-poster") || e.hasClass("lg-video-play-button") || t && t.contains(e.get())
            }, e.prototype.toggleMaximize = function() {
                var e = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    e.$container.toggleClass("lg-inline"), e.refreshOnResize()
                }))
            }, e.prototype.invalidateItems = function() {
                for (var e = 0; e < this.items.length; e++) {
                    var t = Oe(this.items[e]);
                    t.off("click.lgcustom-item-" + t.attr("data-lg-id"))
                }
            }, e.prototype.trapFocus = function() {
                var e = this;
                this.$container.get().focus({
                    preventScroll: !0
                }), Oe(window).on("keydown.lg.global" + this.lgId, (function(t) {
                    if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                        var i = Fe(e.$container.get()),
                            s = i[0],
                            n = i[i.length - 1];
                        t.shiftKey ? document.activeElement === s && (n.focus(), t.preventDefault()) : document.activeElement === n && (s.focus(), t.preventDefault())
                    }
                }))
            }, e.prototype.manageCloseGallery = function() {
                var e = this;
                if (this.settings.closable) {
                    var t = !1;
                    this.getElementById("lg-close").on("click.lg", (function() {
                        e.closeGallery()
                    })), this.settings.closeOnTap && (this.outer.on("mousedown.lg", (function(i) {
                        var s = Oe(i.target);
                        t = !!e.isSlideElement(s)
                    })), this.outer.on("mousemove.lg", (function() {
                        t = !1
                    })), this.outer.on("mouseup.lg", (function(i) {
                        var s = Oe(i.target);
                        e.isSlideElement(s) && t && (e.outer.hasClass("lg-dragging") || e.closeGallery())
                    })))
                }
            }, e.prototype.closeGallery = function(e) {
                var t = this;
                if (!this.lgOpened || !this.settings.closable && !e) return 0;
                this.LGel.trigger(ke), this.settings.resetScrollPosition && !this.settings.hideScrollbar && Oe(window).scrollTop(this.prevScrollTop);
                var i, s = this.items[this.index];
                if (this.zoomFromOrigin && s) {
                    var n = this.mediaContainerPosition,
                        a = n.top,
                        r = n.bottom,
                        o = this.galleryItems[this.index],
                        l = o.__slideVideoInfo,
                        d = o.poster,
                        c = Be(s, this.outer, a + r, l && d && this.settings.videoMaxSize);
                    i = Ge(s, this.outer, a, r, c)
                }
                this.zoomFromOrigin && i ? (this.outer.addClass("lg-closing lg-zoom-from-image"), this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", i)) : (this.outer.addClass("lg-hide-items"), this.outer.removeClass("lg-zoom-from-image")), this.destroyModules(), this.lGalleryOn = !1, this.isDummyImageRemoved = !1, this.zoomFromOrigin = this.settings.zoomFromOrigin, clearTimeout(this.hideBarTimeout), this.hideBarTimeout = !1, Oe("html").removeClass("lg-on"), this.outer.removeClass("lg-visible lg-components-open"), this.$backdrop.removeClass("in").css("opacity", 0);
                var h = this.zoomFromOrigin && i ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                return this.$container.removeClass("lg-show-in"), setTimeout((function() {
                    t.zoomFromOrigin && i && t.outer.removeClass("lg-zoom-from-image"), t.$container.removeClass("lg-show"), t.resetScrollBar(), t.$backdrop.removeAttr("style").css("transition-duration", t.settings.backdropDuration + "ms"), t.outer.removeClass("lg-closing " + t.settings.startClass), t.getSlideItem(t.index).removeClass("lg-start-end-progress"), t.$inner.empty(), t.lgOpened && t.LGel.trigger(Pe, {
                        instance: t
                    }), t.$container.get() && t.$container.get().blur(), t.lgOpened = !1
                }), h + 100), h + 100
            }, e.prototype.initModules = function() {
                this.plugins.forEach((function(e) {
                    try {
                        e.init()
                    } catch (e) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated")
                    }
                }))
            }, e.prototype.destroyModules = function(e) {
                this.plugins.forEach((function(t) {
                    try {
                        e ? t.destroy() : t.closeGallery && t.closeGallery()
                    } catch (e) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
                    }
                }))
            }, e.prototype.refresh = function(e) {
                this.settings.dynamic || this.invalidateItems(), this.galleryItems = e || this.getItems(), this.updateControls(), this.openGalleryOnItemClick(), this.LGel.trigger(fe)
            }, e.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems), this.updateCounterTotal(), this.manageSingleSlideClassName()
            }, e.prototype.destroyGallery = function() {
                this.destroyModules(!0), this.settings.dynamic || this.invalidateItems(), Oe(window).off(".lg.global" + this.lgId), this.LGel.off(".lg"), this.$container.remove()
            }, e.prototype.destroy = function() {
                var e = this.closeGallery(!0);
                return e ? setTimeout(this.destroyGallery.bind(this), e) : this.destroyGallery(), e
            }, e
        }();
    var Ue = function(e, t) {
            return new qe(e, t)
        },
        Ke = function() {
            return (Ke = Object.assign || function(e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        },
        Ze = {
            thumbnail: !0,
            animateThumb: !0,
            currentPagerPosition: "middle",
            alignThumbnails: "middle",
            thumbWidth: 100,
            thumbHeight: "80px",
            thumbMargin: 5,
            appendThumbnailsTo: ".lg-components",
            toggleThumb: !1,
            enableThumbDrag: !0,
            enableThumbSwipe: !0,
            thumbnailSwipeThreshold: 10,
            loadYouTubeThumbnail: !0,
            youTubeThumbSize: 1,
            thumbnailPluginStrings: {
                toggleThumbnails: "Toggle thumbnails"
            }
        },
        Je = "lgContainerResize",
        Qe = "lgUpdateSlides",
        et = "lgBeforeOpen",
        tt = "lgBeforeSlide",
        it = function() {
            function e(e, t) {
                return this.thumbOuterWidth = 0, this.thumbTotalWidth = 0, this.translateX = 0, this.thumbClickable = !1, this.core = e, this.$LG = t, this
            }
            return e.prototype.init = function() {
                this.settings = Ke(Ke({}, Ze), this.core.settings), this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.galleryItems.length * (this.settings.thumbWidth + this.settings.thumbMargin), this.translateX = 0, this.setAnimateThumbStyles(), this.core.settings.allowMediaOverlap || (this.settings.toggleThumb = !1), this.settings.thumbnail && (this.build(), this.settings.animateThumb ? (this.settings.enableThumbDrag && this.enableThumbDrag(), this.settings.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toggleThumbBar(), this.thumbKeyPress())
            }, e.prototype.build = function() {
                var e = this;
                this.setThumbMarkup(), this.manageActiveClassOnSlideChange(), this.$lgThumb.first().on("click.lg touchend.lg", (function(t) {
                    var i = e.$LG(t.target);
                    i.hasAttribute("data-lg-item-id") && setTimeout((function() {
                        if (e.thumbClickable && !e.core.lgBusy) {
                            var t = parseInt(i.attr("data-lg-item-id"));
                            e.core.slide(t, !1, !0, !1)
                        }
                    }), 50)
                })), this.core.LGel.on(tt + ".thumb", (function(t) {
                    var i = t.detail.index;
                    e.animateThumb(i)
                })), this.core.LGel.on(et + ".thumb", (function() {
                    e.thumbOuterWidth = e.core.outer.get().offsetWidth
                })), this.core.LGel.on(Qe + ".thumb", (function() {
                    e.rebuildThumbnails()
                })), this.core.LGel.on(Je + ".thumb", (function() {
                    e.core.lgOpened && setTimeout((function() {
                        e.thumbOuterWidth = e.core.outer.get().offsetWidth, e.animateThumb(e.core.index), e.thumbOuterWidth = e.core.outer.get().offsetWidth
                    }), 50)
                }))
            }, e.prototype.setThumbMarkup = function() {
                var e = "lg-thumb-outer ";
                this.settings.alignThumbnails && (e += "lg-thumb-align-" + this.settings.alignThumbnails);
                var t = '<div class="' + e + '">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';
                this.core.outer.addClass("lg-has-thumb"), ".lg-components" === this.settings.appendThumbnailsTo ? this.core.$lgComponents.append(t) : this.core.outer.append(t), this.$thumbOuter = this.core.outer.find(".lg-thumb-outer").first(), this.$lgThumb = this.core.outer.find(".lg-thumb").first(), this.settings.animateThumb && this.core.outer.find(".lg-thumb").css("transition-duration", this.core.settings.speed + "ms").css("width", this.thumbTotalWidth + "px").css("position", "relative"), this.setThumbItemHtml(this.core.galleryItems)
            }, e.prototype.enableThumbDrag = function() {
                var e = this,
                    t = {
                        cords: {
                            startX: 0,
                            endX: 0
                        },
                        isMoved: !1,
                        newTranslateX: 0,
                        startTime: new Date,
                        endTime: new Date,
                        touchMoveTime: 0
                    },
                    i = !1;
                this.$thumbOuter.addClass("lg-grab"), this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb", (function(s) {
                    e.thumbTotalWidth > e.thumbOuterWidth && (s.preventDefault(), t.cords.startX = s.pageX, t.startTime = new Date, e.thumbClickable = !1, i = !0, e.core.outer.get().scrollLeft += 1, e.core.outer.get().scrollLeft -= 1, e.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
                })), this.$LG(window).on("mousemove.lg.thumb.global" + this.core.lgId, (function(s) {
                    e.core.lgOpened && i && (t.cords.endX = s.pageX, t = e.onThumbTouchMove(t))
                })), this.$LG(window).on("mouseup.lg.thumb.global" + this.core.lgId, (function() {
                    e.core.lgOpened && (t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0, i && (i = !1, e.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))
                }))
            }, e.prototype.enableThumbSwipe = function() {
                var e = this,
                    t = {
                        cords: {
                            startX: 0,
                            endX: 0
                        },
                        isMoved: !1,
                        newTranslateX: 0,
                        startTime: new Date,
                        endTime: new Date,
                        touchMoveTime: 0
                    };
                this.$lgThumb.on("touchstart.lg", (function(i) {
                    e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t.cords.startX = i.targetTouches[0].pageX, e.thumbClickable = !1, t.startTime = new Date)
                })), this.$lgThumb.on("touchmove.lg", (function(i) {
                    e.thumbTotalWidth > e.thumbOuterWidth && (i.preventDefault(), t.cords.endX = i.targetTouches[0].pageX, t = e.onThumbTouchMove(t))
                })), this.$lgThumb.on("touchend.lg", (function() {
                    t.isMoved ? t = e.onThumbTouchEnd(t) : e.thumbClickable = !0
                }))
            }, e.prototype.rebuildThumbnails = function() {
                var e = this;
                this.$thumbOuter.addClass("lg-rebuilding-thumbnails"), setTimeout((function() {
                    e.thumbTotalWidth = e.core.galleryItems.length * (e.settings.thumbWidth + e.settings.thumbMargin), e.$lgThumb.css("width", e.thumbTotalWidth + "px"), e.$lgThumb.empty(), e.setThumbItemHtml(e.core.galleryItems), e.animateThumb(e.core.index)
                }), 50), setTimeout((function() {
                    e.$thumbOuter.removeClass("lg-rebuilding-thumbnails")
                }), 200)
            }, e.prototype.setTranslate = function(e) {
                this.$lgThumb.css("transform", "translate3d(-" + e + "px, 0px, 0px)")
            }, e.prototype.getPossibleTransformX = function(e) {
                return e > this.thumbTotalWidth - this.thumbOuterWidth && (e = this.thumbTotalWidth - this.thumbOuterWidth), e < 0 && (e = 0), e
            }, e.prototype.animateThumb = function(e) {
                if (this.$lgThumb.css("transition-duration", this.core.settings.speed + "ms"), this.settings.animateThumb) {
                    var t = 0;
                    switch (this.settings.currentPagerPosition) {
                        case "left":
                            t = 0;
                            break;
                        case "middle":
                            t = this.thumbOuterWidth / 2 - this.settings.thumbWidth / 2;
                            break;
                        case "right":
                            t = this.thumbOuterWidth - this.settings.thumbWidth
                    }
                    this.translateX = (this.settings.thumbWidth + this.settings.thumbMargin) * e - 1 - t, this.translateX > this.thumbTotalWidth - this.thumbOuterWidth && (this.translateX = this.thumbTotalWidth - this.thumbOuterWidth), this.translateX < 0 && (this.translateX = 0), this.setTranslate(this.translateX)
                }
            }, e.prototype.onThumbTouchMove = function(e) {
                return e.newTranslateX = this.translateX, e.isMoved = !0, e.touchMoveTime = (new Date).valueOf(), e.newTranslateX -= e.cords.endX - e.cords.startX, e.newTranslateX = this.getPossibleTransformX(e.newTranslateX), this.setTranslate(e.newTranslateX), this.$thumbOuter.addClass("lg-dragging"), e
            }, e.prototype.onThumbTouchEnd = function(e) {
                e.isMoved = !1, e.endTime = new Date, this.$thumbOuter.removeClass("lg-dragging");
                var t = e.endTime.valueOf() - e.startTime.valueOf(),
                    i = e.cords.endX - e.cords.startX,
                    s = Math.abs(i) / t;
                return s > .15 && e.endTime.valueOf() - e.touchMoveTime < 30 ? ((s += 1) > 2 && (s += 1), s += s * (Math.abs(i) / this.thumbOuterWidth), this.$lgThumb.css("transition-duration", Math.min(s - 1, 2) + "settings"), i *= s, this.translateX = this.getPossibleTransformX(this.translateX - i), this.setTranslate(this.translateX)) : this.translateX = e.newTranslateX, Math.abs(e.cords.endX - e.cords.startX) < this.settings.thumbnailSwipeThreshold && (this.thumbClickable = !0), e
            }, e.prototype.getThumbHtml = function(e, t) {
                var i, s = this.core.galleryItems[t].__slideVideoInfo || {};
                return i = s.youtube && this.settings.loadYouTubeThumbnail ? "//img.youtube.com/vi/" + s.youtube[1] + "/" + this.settings.youTubeThumbSize + ".jpg" : e, '<div data-lg-item-id="' + t + '" class="lg-thumb-item ' + (t === this.core.index ? " active" : "") + '" \n        style="width:' + this.settings.thumbWidth + "px; height: " + this.settings.thumbHeight + ";\n            margin-right: " + this.settings.thumbMargin + 'px;">\n            <img data-lg-item-id="' + t + '" src="' + i + '" />\n        </div>'
            }, e.prototype.getThumbItemHtml = function(e) {
                for (var t = "", i = 0; i < e.length; i++) t += this.getThumbHtml(e[i].thumb, i);
                return t
            }, e.prototype.setThumbItemHtml = function(e) {
                var t = this.getThumbItemHtml(e);
                this.$lgThumb.html(t)
            }, e.prototype.setAnimateThumbStyles = function() {
                this.settings.animateThumb && this.core.outer.addClass("lg-animate-thumb")
            }, e.prototype.manageActiveClassOnSlideChange = function() {
                var e = this;
                this.core.LGel.on(tt + ".thumb", (function(t) {
                    var i = e.core.outer.find(".lg-thumb-item"),
                        s = t.detail.index;
                    i.removeClass("active"), i.eq(s).addClass("active")
                }))
            }, e.prototype.toggleThumbBar = function() {
                var e = this;
                this.settings.toggleThumb && (this.core.outer.addClass("lg-can-toggle"), this.core.$toolbar.append('<button type="button" aria-label="' + this.settings.thumbnailPluginStrings.toggleThumbnails + '" class="lg-toggle-thumb lg-icon"></button>'), this.core.outer.find(".lg-toggle-thumb").first().on("click.lg", (function() {
                    e.core.outer.toggleClass("lg-components-open")
                })))
            }, e.prototype.thumbKeyPress = function() {
                var e = this;
                this.$LG(window).on("keydown.lg.thumb.global" + this.core.lgId, (function(t) {
                    e.core.lgOpened && e.settings.toggleThumb && (38 === t.keyCode ? (t.preventDefault(), e.core.outer.addClass("lg-components-open")) : 40 === t.keyCode && (t.preventDefault(), e.core.outer.removeClass("lg-components-open")))
                }))
            }, e.prototype.destroy = function() {
                this.settings.thumbnail && (this.$LG(window).off(".lg.thumb.global" + this.core.lgId), this.core.LGel.off(".lg.thumb"), this.core.LGel.off(".thumb"), this.$thumbOuter.remove(), this.core.outer.removeClass("lg-has-thumb"))
            }, e
        }(),
        st = function() {
            return (st = Object.assign || function(e) {
                for (var t, i = 1, s = arguments.length; i < s; i++)
                    for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }).apply(this, arguments)
        },
        nt = "lgSlideItemLoad",
        at = "lgBeforeSlide",
        rt = "lgAfterSlide",
        ot = "lgDragStart",
        lt = "lgDragEnd",
        dt = "lgAutoplay",
        ct = "lgAutoplayStart",
        ht = "lgAutoplayStop",
        ut = {
            autoplay: !0,
            slideShowAutoplay: !1,
            slideShowInterval: 5e3,
            progressBar: !0,
            forceSlideShowAutoplay: !1,
            autoplayControls: !0,
            appendAutoplayControlsTo: ".lg-toolbar",
            autoplayPluginStrings: {
                toggleAutoplay: "Toggle Autoplay"
            }
        },
        pt = function() {
            function e(e) {
                return this.core = e, this.settings = st(st({}, ut), this.core.settings), this
            }
            return e.prototype.init = function() {
                var e = this;
                this.settings.autoplay && (this.interval = !1, this.fromAuto = !0, this.pausedOnTouchDrag = !1, this.pausedOnSlideChange = !1, this.settings.autoplayControls && this.controls(), this.settings.progressBar && this.core.outer.append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), this.settings.slideShowAutoplay && this.core.LGel.once(nt + ".autoplay", (function() {
                    e.startAutoPlay()
                })), this.core.LGel.on(ot + ".autoplay touchstart.lg.autoplay", (function() {
                    e.interval && (e.stopAutoPlay(), e.pausedOnTouchDrag = !0)
                })), this.core.LGel.on(lt + ".autoplay touchend.lg.autoplay", (function() {
                    !e.interval && e.pausedOnTouchDrag && (e.startAutoPlay(), e.pausedOnTouchDrag = !1)
                })), this.core.LGel.on(at + ".autoplay", (function() {
                    e.showProgressBar(), !e.fromAuto && e.interval ? (e.stopAutoPlay(), e.pausedOnSlideChange = !0) : e.pausedOnSlideChange = !1, e.fromAuto = !1
                })), this.core.LGel.on(rt + ".autoplay", (function() {
                    e.pausedOnSlideChange && !e.interval && e.settings.forceSlideShowAutoplay && (e.startAutoPlay(), e.pausedOnSlideChange = !1)
                })), this.showProgressBar())
            }, e.prototype.showProgressBar = function() {
                var e = this;
                if (this.settings.progressBar && this.fromAuto) {
                    var t = this.core.outer.find(".lg-progress-bar"),
                        i = this.core.outer.find(".lg-progress");
                    this.interval && (i.removeAttr("style"), t.removeClass("lg-start"), setTimeout((function() {
                        i.css("transition", "width " + (e.core.settings.speed + e.settings.slideShowInterval) + "ms ease 0s"), t.addClass("lg-start")
                    }), 20))
                }
            }, e.prototype.controls = function() {
                var e = this,
                    t = '<button aria-label="' + this.settings.autoplayPluginStrings.toggleAutoplay + '" type="button" class="lg-autoplay-button lg-icon"></button>';
                this.core.outer.find(this.settings.appendAutoplayControlsTo).append(t), this.core.outer.find(".lg-autoplay-button").first().on("click.lg.autoplay", (function() {
                    e.core.outer.hasClass("lg-show-autoplay") ? e.stopAutoPlay() : e.interval || e.startAutoPlay()
                }))
            }, e.prototype.startAutoPlay = function() {
                var e = this;
                this.core.outer.find(".lg-progress").css("transition", "width " + (this.core.settings.speed + this.settings.slideShowInterval) + "ms ease 0s"), this.core.outer.addClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").addClass("lg-start"), this.core.LGel.trigger(ct, {
                    index: this.core.index
                }), this.interval = setInterval((function() {
                    e.core.index + 1 < e.core.galleryItems.length ? e.core.index++ : e.core.index = 0, e.core.LGel.trigger(dt, {
                        index: e.core.index
                    }), e.fromAuto = !0, e.core.slide(e.core.index, !1, !1, "next")
                }), this.core.settings.speed + this.settings.slideShowInterval)
            }, e.prototype.stopAutoPlay = function() {
                this.interval && (this.core.LGel.trigger(ht, {
                    index: this.core.index
                }), this.core.outer.find(".lg-progress").removeAttr("style"), this.core.outer.removeClass("lg-show-autoplay"), this.core.outer.find(".lg-progress-bar").removeClass("lg-start")), clearInterval(this.interval), this.interval = !1
            }, e.prototype.closeGallery = function() {
                this.stopAutoPlay()
            }, e.prototype.destroy = function() {
                this.settings.autoplay && this.core.outer.find(".lg-progress-bar").remove(), this.core.LGel.off(".lg.autoplay"), this.core.LGel.off(".autoplay")
            }, e
        }();
    /*!
     * lightgallery | 2.7.0 | October 9th 2022
     * http://www.lightgalleryjs.com/
     * Copyright (c) 2020 Sachin Neravath;
     * @license GPLv3
     */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    Ue(document.getElementById("design-work-gallery"), {
        autoplayFirstVideo: !1,
        pager: !1,
        galleryId: "design-work",
        flipHorizontal: !1,
        flipVertical: !1,
        rotateLeft: !1,
        download: !1,
        plugins: [it, pt],
        mobileSettings: {
            controls: !1
        }
    }), Ue(document.getElementById("online-assessment-screenshots"), {
        autoplayFirstVideo: !1,
        pager: !1,
        selector: "a",
        galleryId: "online-assessment-gallery",
        flipHorizontal: !1,
        flipVertical: !1,
        rotateLeft: !1,
        download: !1,
        plugins: [it, pt],
        mobileSettings: {
            controls: !1
        }
    }), Ue(document.getElementById("deal-management-screenshots"), {
        autoplayFirstVideo: !1,
        pager: !1,
        selector: "a",
        galleryId: "deal-management-gallery",
        flipHorizontal: !1,
        flipVertical: !1,
        rotateLeft: !1,
        download: !1,
        plugins: [it, pt],
        mobileSettings: {
            controls: !1
        }
    }), Ue(document.getElementById("literati-women-screenshots"), {
        autoplayFirstVideo: !1,
        pager: !1,
        selector: "a",
        galleryId: "literati-women-gallery",
        flipHorizontal: !1,
        flipVertical: !1,
        rotateLeft: !1,
        download: !1,
        plugins: [it, pt],
        mobileSettings: {
            controls: !1
        }
    }), Ue(document.getElementById("ux-research-images"), {
        autoplayFirstVideo: !1,
        pager: !1,
        selector: "a",
        galleryId: "ux-research-gallery",
        flipHorizontal: !1,
        flipVertical: !1,
        rotateLeft: !1,
        download: !1,
        plugins: [it, pt],
        mobileSettings: {
            controls: !1
        }
    });
    i(2);

    function gt(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }

    function mt(e, t, i) {
        return t && gt(e.prototype, t), i && gt(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }
    var ft = mt((function e(t, i, s, n, a, r, o, l, d, c) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.blogImage = t, this.blogImageAlt = i, this.blogTitle = s, this.datePublished = n, this.clapCount = a, this.commentCount = r, this.triggerIndex = o, this.mediumShareBaseUrl = l, this.blogUrl = d, this.blogContent = c
        })),
        vt = [{
            name: "UX for Sustainability",
            path: "/sustainable-ux",
            class: "sustainable_ux_color"
        }, {
            name: "Trader Joe's - User Research Plan",
            path: "/trader-joes",
            class: "trader_joes_color"
        }, {
            name: "Literati Women",
            path: "/literati-women",
            class: "literati_women_color"
        }, {
            name: "UX Research",
            path: "/ux-research",
            class: "ux_research_color"
        }, {
            name: "University Design Work",
            path: "/design-work",
            class: "design_work_color"
        }],
        bt = [{
            name: "Online Assessment",
            path: "/online-assessment",
            class: "online_assessment_color"
        }, {
            name: "Plant health monitoring",
            path: "/plant-health",
            class: "plant_health_color"
        }, {
            name: "Deal management",
            path: "/deal-management",
            class: "deal_management_color"
        }],
        yt = vt.map((function(e) {
            return e.path
        })),
        wt = bt.map((function(e) {
            return e.path
        }));

    function xt(e) {
        return (xt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Tt() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        Tt = function() {
            return e
        };
        var e = {},
            t = Object.prototype,
            i = t.hasOwnProperty,
            s = Object.defineProperty || function(e, t, i) {
                e[t] = i.value
            },
            n = "function" == typeof Symbol ? Symbol : {},
            a = n.iterator || "@@iterator",
            r = n.asyncIterator || "@@asyncIterator",
            o = n.toStringTag || "@@toStringTag";

        function l(e, t, i) {
            return Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            l({}, "")
        } catch (e) {
            l = function(e, t, i) {
                return e[t] = i
            }
        }

        function d(e, t, i, n) {
            var a = t && t.prototype instanceof u ? t : u,
                r = Object.create(a.prototype),
                o = new E(n || []);
            return s(r, "_invoke", {
                value: x(e, i, o)
            }), r
        }

        function c(e, t, i) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, i)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = d;
        var h = {};

        function u() {}

        function p() {}

        function g() {}
        var m = {};
        l(m, a, (function() {
            return this
        }));
        var f = Object.getPrototypeOf,
            v = f && f(f(I([])));
        v && v !== t && i.call(v, a) && (m = v);
        var b = g.prototype = u.prototype = Object.create(m);

        function y(e) {
            ["next", "throw", "return"].forEach((function(t) {
                l(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function w(e, t) {
            var n;
            s(this, "_invoke", {
                value: function(s, a) {
                    function r() {
                        return new t((function(n, r) {
                            ! function s(n, a, r, o) {
                                var l = c(e[n], e, a);
                                if ("throw" !== l.type) {
                                    var d = l.arg,
                                        h = d.value;
                                    return h && "object" == xt(h) && i.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                        s("next", e, r, o)
                                    }), (function(e) {
                                        s("throw", e, r, o)
                                    })) : t.resolve(h).then((function(e) {
                                        d.value = e, r(d)
                                    }), (function(e) {
                                        return s("throw", e, r, o)
                                    }))
                                }
                                o(l.arg)
                            }(s, a, n, r)
                        }))
                    }
                    return n = n ? n.then(r, r) : r()
                }
            })
        }

        function x(e, t, i) {
            var s = "suspendedStart";
            return function(n, a) {
                if ("executing" === s) throw new Error("Generator is already running");
                if ("completed" === s) {
                    if ("throw" === n) throw a;
                    return M()
                }
                for (i.method = n, i.arg = a;;) {
                    var r = i.delegate;
                    if (r) {
                        var o = T(r, i);
                        if (o) {
                            if (o === h) continue;
                            return o
                        }
                    }
                    if ("next" === i.method) i.sent = i._sent = i.arg;
                    else if ("throw" === i.method) {
                        if ("suspendedStart" === s) throw s = "completed", i.arg;
                        i.dispatchException(i.arg)
                    } else "return" === i.method && i.abrupt("return", i.arg);
                    s = "executing";
                    var l = c(e, t, i);
                    if ("normal" === l.type) {
                        if (s = i.done ? "completed" : "suspendedYield", l.arg === h) continue;
                        return {
                            value: l.arg,
                            done: i.done
                        }
                    }
                    "throw" === l.type && (s = "completed", i.method = "throw", i.arg = l.arg)
                }
            }
        }

        function T(e, t) {
            var i = e.iterator[t.method];
            if (void 0 === i) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, T(e, t), "throw" === t.method)) return h;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return h
            }
            var s = c(i, e.iterator, t.arg);
            if ("throw" === s.type) return t.method = "throw", t.arg = s.arg, t.delegate = null, h;
            var n = s.arg;
            return n ? n.done ? (t[e.resultName] = n.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : n : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
        }

        function C(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function S(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function E(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(C, this), this.reset(!0)
        }

        function I(e) {
            if (e) {
                var t = e[a];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var s = -1,
                        n = function t() {
                            for (; ++s < e.length;)
                                if (i.call(e, s)) return t.value = e[s], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return n.next = n
                }
            }
            return {
                next: M
            }
        }

        function M() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = g, s(b, "constructor", {
            value: g,
            configurable: !0
        }), s(g, "constructor", {
            value: p,
            configurable: !0
        }), p.displayName = l(g, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, g) : (e.__proto__ = g, l(e, o, "GeneratorFunction")), e.prototype = Object.create(b), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, y(w.prototype), l(w.prototype, r, (function() {
            return this
        })), e.AsyncIterator = w, e.async = function(t, i, s, n, a) {
            void 0 === a && (a = Promise);
            var r = new w(d(t, i, s, n), a);
            return e.isGeneratorFunction(i) ? r : r.next().then((function(e) {
                return e.done ? e.value : r.next()
            }))
        }, y(b), l(b, o, "Generator"), l(b, a, (function() {
            return this
        })), l(b, "toString", (function() {
            return "[object Generator]"
        })), e.keys = function(e) {
            var t = Object(e),
                i = [];
            for (var s in t) i.push(s);
            return i.reverse(),
                function e() {
                    for (; i.length;) {
                        var s = i.pop();
                        if (s in t) return e.value = s, e.done = !1, e
                    }
                    return e.done = !0, e
                }
        }, e.values = I, E.prototype = {
            constructor: E,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                    for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;

                function s(i, s) {
                    return r.type = "throw", r.arg = e, t.next = i, s && (t.method = "next", t.arg = void 0), !!s
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var a = this.tryEntries[n],
                        r = a.completion;
                    if ("root" === a.tryLoc) return s("end");
                    if (a.tryLoc <= this.prev) {
                        var o = i.call(a, "catchLoc"),
                            l = i.call(a, "finallyLoc");
                        if (o && l) {
                            if (this.prev < a.catchLoc) return s(a.catchLoc, !0);
                            if (this.prev < a.finallyLoc) return s(a.finallyLoc)
                        } else if (o) {
                            if (this.prev < a.catchLoc) return s(a.catchLoc, !0)
                        } else {
                            if (!l) throw new Error("try statement without catch or finally");
                            if (this.prev < a.finallyLoc) return s(a.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var s = this.tryEntries.length - 1; s >= 0; --s) {
                    var n = this.tryEntries[s];
                    if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                        var a = n;
                        break
                    }
                }
                a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                var r = a ? a.completion : {};
                return r.type = e, r.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, h) : this.complete(r)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var i = this.tryEntries[t];
                    if (i.finallyLoc === e) return this.complete(i.completion, i.afterLoc), S(i), h
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var i = this.tryEntries[t];
                    if (i.tryLoc === e) {
                        var s = i.completion;
                        if ("throw" === s.type) {
                            var n = s.arg;
                            S(i)
                        }
                        return n
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, i) {
                return this.delegate = {
                    iterator: I(e),
                    resultName: t,
                    nextLoc: i
                }, "next" === this.method && (this.arg = void 0), h
            }
        }, e
    }

    function Ct(e, t, i, s, n, a, r) {
        try {
            var o = e[a](r),
                l = o.value
        } catch (e) {
            return void i(e)
        }
        o.done ? t(l) : Promise.resolve(l).then(s, n)
    }

    function St(e) {
        return function() {
            var t = this,
                i = arguments;
            return new Promise((function(s, n) {
                var a = e.apply(t, i);

                function r(e) {
                    Ct(a, s, n, r, o, "next", e)
                }

                function o(e) {
                    Ct(a, s, n, r, o, "throw", e)
                }
                r(void 0)
            }))
        }
    }

    function Et() {
        document.querySelectorAll(".reveal").forEach((function(e) {
            var t = window.innerHeight;
            e.getBoundingClientRect().top < t - 0 ? e.classList.add("show-item") : e.classList.remove("show-item")
        }))
    }

    function It() {
        var e = document.getElementById("navigation-bar");
        document.body.scrollTop >= 65 || document.documentElement.scrollTop >= 65 ? e.classList.add("nav-with-bg") : e.classList.remove("nav-with-bg")
    }

    function Mt() {
        var e = window.location.href,
            t = document.getElementById("nav-links").getElementsByTagName("a");
        Array.from(t).forEach((function(t) {
            var i, s;
            i = t.href, s = e, i && s && ce(new URL(i).pathname) === ce(new URL(s).pathname) ? t.classList.add("active") : t.classList.remove("active")
        }))
    }
    if ("/" === window.location.pathname || "about" === window.location.pathname) {
        var $t = document.getElementById("resume-btn-download");
        $t.addEventListener("click", (function() {
            $t.classList.toggle("downloaded"), setTimeout((function() {
                $t.classList.toggle("downloaded")
            }), 5e3)
        }))
    }

    function kt(e, t) {
        return e.guid.includes("17befb37e735") ? -1 : t.guid.includes("17befb37e735") ? 1 : new Date(t.pubDate) - new Date(e.pubDate)
    }

    function Pt(e) {
        var t = document.getElementById("blog-section"),
            i = document.getElementById("blog-wrapper"),
            s = "";
        e.items.sort(kt), e.items.forEach((function(e, t) {
            var i, n = e.thumbnail,
                a = e.title,
                r = e.pubDate,
                o = e.guid,
                l = e.stats,
                d = e.content,
                c = e.link,
                h = new Date(r).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "short"
                }),
                u = function(e, t) {
                    return function(e) {
                        var t = e.replace(/(^\s*)|(\s*$)/gi, "");
                        return (t = (t = t.replace(/[ ]{2,}/gi, " ")).replace(/\n /, "\n")).split(" ")
                    }(e).splice(0, t)
                }((i = d, null !== i && "" !== i && i.toString().replace(/(<([^>]+)>)/gi, "")), 50).join(" "),
                p = new ft(n, a, a, h, l.claps.toString(), l.comments.toString(), t.toString(), o, c, u);
            s += function(e, t) {
                return "string" == typeof e && t instanceof Array ? e.replace(/({\d})/g, (function(e) {
                    return t[e.replace(/{/, "").replace(/}/, "")]
                })) : "string" == typeof e && t instanceof Object ? 0 === Object.keys(t).length ? e : e.replace(/({([^}]+)})/g, (function(e) {
                    var i = e.replace(/{/, "").replace(/}/, "");
                    return t[i] ? t[i] : e
                })) : ("string" == typeof e && t instanceof Array == !1 || "string" == typeof e && t instanceof Object == !1) && e
            }('<div class="blog-slider__item swiper-slide">\n<div class="blog-slider__img">\n  <img\n    src="{blogImage}"\n    alt="{blogImageAlt}"/>\n</div>\n<div class="blog-slider__content">\n  <div class="blog-slider__title">{blogTitle}</div>\n  <div class="blog-slider__code u-displayFlex u-alignItems-center u-justify-spaceBetween">\n    <div class="blog-slider-info">{datePublished}</div>\n    <div class="blog-slider-metrics">\n      <div class="claps">\n        <i class="fa-solid fa-hands-clapping"></i>\n        {clapCount}\n      </div>\n      <div class="comments">\n        <i class="fa-solid fa-comment"></i>\n        {commentCount}\n      </div>\n      <div class="share">\n        <input class="share-menu__trigger" type="checkbox" id="share-menu-trigger{triggerIndex}"/>\n        <div class="share-menu">\n          <label class="share-menu__btn" for="share-menu-trigger{triggerIndex}">\n            <i class="share-menu__btn-icon fa-solid fa-share-nodes"></i>\n          </label>\n          <div class="share-menu__list">\n            <div class="share-menu__item">\n              <a href="{mediumShareBaseUrl}/share/linkedIn" target="_blank" class="share-menu__link" for="share-menu-trigger{triggerIndex}">\n                <i class="share-menu__icon fa-brands fa-linkedin-in"></i>\n              </a>\n              <span class="share-menu__tip">Share to LinkedIn</span>\n            </div>\n            <div class="share-menu__item">\n              <a href="{mediumShareBaseUrl}/share/facebook" target="_blank" class="share-menu__link" for="share-menu-trigger{triggerIndex}">\n                <i class="share-menu__icon fa-brands fa-facebook-f"></i>\n              </a>\n              <span class="share-menu__tip">Share to Facebook</span>\n            </div>\n            <div class="share-menu__item">\n              <a href="{mediumShareBaseUrl}/share/twitter" target="_blank" class="share-menu__link" for="share-menu-trigger{triggerIndex}">\n                <i class="share-menu__icon fa-brands fa-twitter"></i>\n              </a>\n              <span class="share-menu__tip">Share to Twitter</span>\n            </div>\n            <div class="share-menu__item">\n              <a href="mailto:?subject=Checkout this blog &amp;body=Hey!%20%0AI came across this blog by Aatisha Cyrill. Do give it a read.%20%0ALink -> {blogUrl}"\n                class="share-menu__link" for="share-menu-trigger" target="_blank">\n                <i class="share-menu__icon  fa-solid fa-envelope"></i>\n              </a>\n              <span class="share-menu__tip">Send by Email</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="blog-slider__text">{blogContent}</div>\n  <div class="u-displayFlex u-alignItems-center u-justify-end">\n    <a href="{blogUrl}" target="_blank" class="blog-slider__button btn-primary">Read more</a>\n  </div>\n</div>\n</div>', p)
        })), i.innerHTML = s, t.style.display = "block", setTimeout((function() {
            new de(".blog-slider", {
                spaceBetween: 30,
                effect: "fade",
                loop: !1,
                mousewheel: {
                    invert: !1
                },
                pagination: {
                    el: ".blog-slider__pagination",
                    clickable: !0
                }
            })
        }), 500)
    }

    function Lt() {
        var e = document.getElementById("body-content");
        return e.style.display = "none", e
    }

    function zt(e) {
        ! function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
            setTimeout((function() {
                document.getElementById(e).style.display = "none", i()
            }), t)
        }("pre-loader", 500, (function() {
            e.style.display = "block", Mt(), document.getElementById("logo-dot").dataset.animate = "true", window.addEventListener("scroll", It), window.addEventListener("scroll", Et)
        }))
    }

    function Ot() {
        return Dt.apply(this, arguments)
    }

    function Dt() {
        return (Dt = St(Tt().mark((function e() {
            var t, i, s;
            return Tt().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, fetch("https://medium-apis.onrender.com/api/medium/user?id=".concat("@cyrillaatisha"));
                    case 2:
                        if ((t = e.sent).ok) {
                            e.next = 6;
                            break
                        }
                        throw i = "An error has occured: ".concat(t.status), new Error(i);
                    case 6:
                        return e.next = 8, t.json();
                    case 8:
                        return s = e.sent, e.abrupt("return", s);
                    case 10:
                    case "end":
                        return e.stop()
                }
            }), e)
        })))).apply(this, arguments)
    }

    function At() {
        var e = document.getElementById("design-work-filter"),
            t = document.querySelectorAll(".design-work-gallery-item");
        e.addEventListener("click", (function(i) {
            if (i.target.classList.contains("design-work-filter-item")) {
                e.querySelector(".active").classList.remove("active"), i.target.classList.add("active");
                var s = i.target.getAttribute("data-filter");
                t.forEach((function(e) {
                    e.classList.contains(s) || "all" === s ? (e.classList.remove("hide"), e.classList.add("show")) : (e.classList.remove("show"), e.classList.add("hide"))
                }))
            }
        }))
    }

    function Bt(e, t) {
        var i = document.getElementById("article-nav");
        if (i) {
            var s = function(e, t) {
                    var i = t.findIndex((function(t) {
                        return t.path === e
                    }));
                    if (-1 === i) return null;
                    var s = (i - 1 + t.length) % t.length,
                        n = (i + 1) % t.length;
                    return {
                        prev: t[s],
                        next: t[n]
                    }
                }(e, t),
                n = s.prev,
                a = s.next,
                r = document.getElementById("article-nav-previous");
            r.innerHTML = n.name, r.classList.add(n.class), document.getElementById("article-nav-previous-url").setAttribute("href", n.path);
            var o = document.getElementById("article-nav-next");
            o.innerHTML = a.name, o.classList.add(a.class), document.getElementById("article-nav-next-url").setAttribute("href", a.path), i.style.display = "block"
        }
    }
    document.getElementById("nav-hamburger").addEventListener("click", (function() {
        document.getElementById("nav-hamburger").classList.toggle("collapsed"), document.getElementById("navigation-bar").classList.toggle("u-heightAuto");
        var e = document.getElementById("nav-links");
        e.classList.toggle("expanded"), e.style.display = "flex";
        var t = document.getElementsByClassName("pretty-nav-wrapper")[0];
        t.classList.toggle("u-marginT4"), t.classList.toggle("u-heightAuto")
    })), window.onload = St(Tt().mark((function e() {
        var t;
        return Tt().wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
                case 0:
                    if (zt(Lt()), "/" !== window.location.pathname) {
                        e.next = 7;
                        break
                    }
                    return e.next = 5, Ot().catch((function(e) {
                        console.error(e)
                    }));
                case 5:
                    (t = e.sent) && Pt(t);
                case 7:
                    window.location.pathname.includes("design-work") && At(), document.getElementById("article-nav") && (i = void 0, (i = ce(window.location.pathname)) && (yt.includes(i) && Bt(i, vt), wt.includes(i) && Bt(i, bt)));
                case 9:
                case "end":
                    return e.stop()
            }
            var i
        }), e)
    })))
}]);