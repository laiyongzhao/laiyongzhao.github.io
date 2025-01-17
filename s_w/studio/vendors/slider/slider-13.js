
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    _gsScope._gsDefine(
        "TweenMax",
        ["core.Animation", "core.SimpleTimeline", "TweenLite"],
        function (a, b, c) {
            var d = function (a) {
                    var b,
                        c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c;
                },
                e = function (a, b, c) {
                    var d,
                        e,
                        f = a.cycle;
                    for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                    delete a.cycle;
                },
                f = function (a, b, d) {
                    c.call(this, a, b, d),
                        (this._cycle = 0),
                        (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        this._repeat && this._uncache(!0),
                        (this.render = f.prototype.render);
                },
                g = 1e-10,
                h = c._internals,
                i = h.isSelector,
                j = h.isArray,
                k = (f.prototype = c.to({}, 0.1, {})),
                l = [];
            (f.version = "1.20.4"),
                (k.constructor = f),
                (k.kill()._gc = !1),
                (f.killTweensOf = f.killDelayedCallsTo = c.killTweensOf),
                (f.getTweensOf = c.getTweensOf),
                (f.lagSmoothing = c.lagSmoothing),
                (f.ticker = c.ticker),
                (f.render = c.render),
                (k.invalidate = function () {
                    return (
                        (this._yoyo = this.vars.yoyo === !0 || !!this.vars.yoyoEase),
                        (this._repeat = this.vars.repeat || 0),
                        (this._repeatDelay = this.vars.repeatDelay || 0),
                        (this._yoyoEase = null),
                        this._uncache(!0),
                        c.prototype.invalidate.call(this)
                    );
                }),
                (k.updateTo = function (a, b) {
                    var d,
                        e = this.ratio,
                        f = this.vars.immediateRender || a.immediateRender;
                    b && this._startTime < this._timeline._time && ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (d in a) this.vars[d] = a[d];
                    if (this._initted || f)
                        if (b) (this._initted = !1), f && this.render(0, !0, !0);
                        else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && c._onPluginEvent("_onDisable", this), this._time / this._duration > 0.998)) {
                            var g = this._totalTime;
                            this.render(0, !0, !1), (this._initted = !1), this.render(g, !0, !1);
                        } else if (((this._initted = !1), this._init(), this._time > 0 || f)) for (var h, i = 1 / (1 - e), j = this._firstPT; j; ) (h = j.s + j.c), (j.c *= i), (j.s = h - j.c), (j = j._next);
                    return this;
                }),
                (k.render = function (a, b, d) {
                    this._initted || (0 === this._duration && this.vars.repeat && this.invalidate());
                    var e,
                        f,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = this._dirty ? this.totalDuration() : this._totalDuration,
                        q = this._time,
                        r = this._totalTime,
                        s = this._cycle,
                        t = this._duration,
                        u = this._rawPrevTime;
                    if (
                        (a >= p - 1e-7 && a >= 0
                            ? ((this._totalTime = p),
                              (this._cycle = this._repeat),
                              this._yoyo && 0 !== (1 & this._cycle) ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0)) : ((this._time = t), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                              this._reversed || ((e = !0), (f = "onComplete"), (d = d || this._timeline.autoRemoveChildren)),
                              0 === t &&
                                  (this._initted || !this.vars.lazy || d) &&
                                  (this._startTime === this._timeline._duration && (a = 0),
                                  (0 > u || (0 >= a && a >= -1e-7) || (u === g && "isPause" !== this.data)) && u !== a && ((d = !0), u > g && (f = "onReverseComplete")),
                                  (this._rawPrevTime = n = !b || a || u === a ? a : g)))
                            : 1e-7 > a
                            ? ((this._totalTime = this._time = this._cycle = 0),
                              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                              (0 !== r || (0 === t && u > 0)) && ((f = "onReverseComplete"), (e = this._reversed)),
                              0 > a && ((this._active = !1), 0 === t && (this._initted || !this.vars.lazy || d) && (u >= 0 && (d = !0), (this._rawPrevTime = n = !b || a || u === a ? a : g))),
                              this._initted || (d = !0))
                            : ((this._totalTime = this._time = a),
                              0 !== this._repeat &&
                                  ((j = t + this._repeatDelay),
                                  (this._cycle = (this._totalTime / j) >> 0),
                                  0 !== this._cycle && this._cycle === this._totalTime / j && a >= r && this._cycle--,
                                  (this._time = this._totalTime - this._cycle * j),
                                  this._yoyo &&
                                      0 !== (1 & this._cycle) &&
                                      ((this._time = t - this._time),
                                      (o = this._yoyoEase || this.vars.yoyoEase),
                                      o &&
                                          (this._yoyoEase ||
                                              (o !== !0 || this._initted
                                                  ? (this._yoyoEase = o = o === !0 ? this._ease : o instanceof Ease ? o : Ease.map[o])
                                                  : ((o = this.vars.ease), (this._yoyoEase = o = o ? (o instanceof Ease ? o : "function" == typeof o ? new Ease(o, this.vars.easeParams) : Ease.map[o] || c.defaultEase) : c.defaultEase))),
                                          (this.ratio = o ? 1 - o.getRatio((t - this._time) / t) : 0))),
                                  this._time > t ? (this._time = t) : this._time < 0 && (this._time = 0)),
                              this._easeType && !o
                                  ? ((k = this._time / t),
                                    (l = this._easeType),
                                    (m = this._easePower),
                                    (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                                    3 === l && (k *= 2),
                                    1 === m ? (k *= k) : 2 === m ? (k *= k * k) : 3 === m ? (k *= k * k * k) : 4 === m && (k *= k * k * k * k),
                                    1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : this._time / t < 0.5 ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2))
                                  : o || (this.ratio = this._ease.getRatio(this._time / t))),
                        q === this._time && !d && s === this._cycle)
                    )
                        return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                    if (!this._initted) {
                        if ((this._init(), !this._initted || this._gc)) return;
                        if (!d && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
                            return (this._time = q), (this._totalTime = r), (this._rawPrevTime = u), (this._cycle = s), h.lazyTweens.push(this), void (this._lazy = [a, b]);
                        !this._time || e || o ? e && this._ease._calcEnd && !o && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : (this.ratio = this._ease.getRatio(this._time / t));
                    }
                    for (
                        this._lazy !== !1 && (this._lazy = !1),
                            this._active || (!this._paused && this._time !== q && a >= 0 && (this._active = !0)),
                            0 === r &&
                                (2 === this._initted && a > 0 && this._init(),
                                this._startAt && (a >= 0 ? this._startAt.render(a, !0, d) : f || (f = "_dummyGS")),
                                this.vars.onStart && (0 !== this._totalTime || 0 === t) && (b || this._callback("onStart"))),
                            i = this._firstPT;
                        i;

                    )
                        i.f ? i.t[i.p](i.c * this.ratio + i.s) : (i.t[i.p] = i.c * this.ratio + i.s), (i = i._next);
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, !0, d), b || ((this._totalTime !== r || f) && this._callback("onUpdate"))),
                        this._cycle !== s && (b || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                        f &&
                            (!this._gc || d) &&
                            (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, !0, d),
                            e && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                            !b && this.vars[f] && this._callback(f),
                            0 === t && this._rawPrevTime === g && n !== g && (this._rawPrevTime = 0));
                }),
                (f.to = function (a, b, c) {
                    return new f(a, b, c);
                }),
                (f.from = function (a, b, c) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new f(a, b, c);
                }),
                (f.fromTo = function (a, b, c, d) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new f(a, b, d);
                }),
                (f.staggerTo = f.allTo = function (a, b, g, h, k, m, n) {
                    h = h || 0;
                    var o,
                        p,
                        q,
                        r,
                        s = 0,
                        t = [],
                        u = function () {
                            g.onComplete && g.onComplete.apply(g.onCompleteScope || this, arguments), k.apply(n || g.callbackScope || this, m || l);
                        },
                        v = g.cycle,
                        w = g.startAt && g.startAt.cycle;
                    for (j(a) || ("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a))), a = a || [], 0 > h && ((a = d(a)), a.reverse(), (h *= -1)), o = a.length - 1, q = 0; o >= q; q++) {
                        p = {};
                        for (r in g) p[r] = g[r];
                        if ((v && (e(p, a, q), null != p.duration && ((b = p.duration), delete p.duration)), w)) {
                            w = p.startAt = {};
                            for (r in g.startAt) w[r] = g.startAt[r];
                            e(p.startAt, a, q);
                        }
                        (p.delay = s + (p.delay || 0)), q === o && k && (p.onComplete = u), (t[q] = new f(a[q], b, p)), (s += h);
                    }
                    return t;
                }),
                (f.staggerFrom = f.allFrom = function (a, b, c, d, e, g, h) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), f.staggerTo(a, b, c, d, e, g, h);
                }),
                (f.staggerFromTo = f.allFromTo = function (a, b, c, d, e, g, h, i) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), f.staggerTo(a, b, d, e, g, h, i);
                }),
                (f.delayedCall = function (a, b, c, d, e) {
                    return new f(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, useFrames: e, overwrite: 0 });
                }),
                (f.set = function (a, b) {
                    return new f(a, 0, b);
                }),
                (f.isTweening = function (a) {
                    return c.getTweensOf(a, !0).length > 0;
                });
            var m = function (a, b) {
                    for (var d = [], e = 0, f = a._first; f; ) f instanceof c ? (d[e++] = f) : (b && (d[e++] = f), (d = d.concat(m(f, b))), (e = d.length)), (f = f._next);
                    return d;
                },
                n = (f.getAllTweens = function (b) {
                    return m(a._rootTimeline, b).concat(m(a._rootFramesTimeline, b));
                });
            (f.killAll = function (a, c, d, e) {
                null == c && (c = !0), null == d && (d = !0);
                var f,
                    g,
                    h,
                    i = n(0 != e),
                    j = i.length,
                    k = c && d && e;
                for (h = 0; j > h; h++) (g = i[h]), (k || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && (a ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1));
            }),
                (f.killChildTweensOf = function (a, b) {
                    if (null != a) {
                        var e,
                            g,
                            k,
                            l,
                            m,
                            n = h.tweenLookup;
                        if (("string" == typeof a && (a = c.selector(a) || a), i(a) && (a = d(a)), j(a))) for (l = a.length; --l > -1; ) f.killChildTweensOf(a[l], b);
                        else {
                            e = [];
                            for (k in n) for (g = n[k].target.parentNode; g; ) g === a && (e = e.concat(n[k].tweens)), (g = g.parentNode);
                            for (m = e.length, l = 0; m > l; l++) b && e[l].totalTime(e[l].totalDuration()), e[l]._enabled(!1, !1);
                        }
                    }
                });
            var o = function (a, c, d, e) {
                (c = c !== !1), (d = d !== !1), (e = e !== !1);
                for (var f, g, h = n(e), i = c && d && e, j = h.length; --j > -1; ) (g = h[j]), (i || g instanceof b || ((f = g.target === g.vars.onComplete) && d) || (c && !f)) && g.paused(a);
            };
            return (
                (f.pauseAll = function (a, b, c) {
                    o(!0, a, b, c);
                }),
                (f.resumeAll = function (a, b, c) {
                    o(!1, a, b, c);
                }),
                (f.globalTimeScale = function (b) {
                    var d = a._rootTimeline,
                        e = c.ticker.time;
                    return arguments.length
                        ? ((b = b || g),
                          (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                          (d = a._rootFramesTimeline),
                          (e = c.ticker.frame),
                          (d._startTime = e - ((e - d._startTime) * d._timeScale) / b),
                          (d._timeScale = a._rootTimeline._timeScale = b),
                          b)
                        : d._timeScale;
                }),
                (k.progress = function (a, b) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration();
                }),
                (k.totalProgress = function (a, b) {
                    return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration();
                }),
                (k.time = function (a, b) {
                    return arguments.length
                        ? (this._dirty && this.totalDuration(),
                          a > this._duration && (a = this._duration),
                          this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
                          this.totalTime(a, b))
                        : this._time;
                }),
                (k.duration = function (b) {
                    return arguments.length ? a.prototype.duration.call(this, b) : this._duration;
                }),
                (k.totalDuration = function (a) {
                    return arguments.length
                        ? -1 === this._repeat
                            ? this
                            : this.duration((a - this._repeat * this._repeatDelay) / (this._repeat + 1))
                        : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)), this._totalDuration);
                }),
                (k.repeat = function (a) {
                    return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
                }),
                (k.repeatDelay = function (a) {
                    return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
                }),
                (k.yoyo = function (a) {
                    return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                }),
                f
            );
        },
        !0
    ),
        _gsScope._gsDefine(
            "TimelineLite",
            ["core.Animation", "core.SimpleTimeline", "TweenLite"],
            function (a, b, c) {
                var d = function (a) {
                        b.call(this, a),
                            (this._labels = {}),
                            (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
                            (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
                            (this._sortChildren = !0),
                            (this._onUpdate = this.vars.onUpdate);
                        var c,
                            d,
                            e = this.vars;
                        for (d in e) (c = e[d]), i(c) && -1 !== c.join("").indexOf("{self}") && (e[d] = this._swapSelfInParams(c));
                        i(e.tweens) && this.add(e.tweens, 0, e.align, e.stagger);
                    },
                    e = 1e-10,
                    f = c._internals,
                    g = (d._internals = {}),
                    h = f.isSelector,
                    i = f.isArray,
                    j = f.lazyTweens,
                    k = f.lazyRender,
                    l = _gsScope._gsDefine.globals,
                    m = function (a) {
                        var b,
                            c = {};
                        for (b in a) c[b] = a[b];
                        return c;
                    },
                    n = function (a, b, c) {
                        var d,
                            e,
                            f = a.cycle;
                        for (d in f) (e = f[d]), (a[d] = "function" == typeof e ? e(c, b[c]) : e[c % e.length]);
                        delete a.cycle;
                    },
                    o = (g.pauseCallback = function () {}),
                    p = function (a) {
                        var b,
                            c = [],
                            d = a.length;
                        for (b = 0; b !== d; c.push(a[b++]));
                        return c;
                    },
                    q = (d.prototype = new b());
                return (
                    (d.version = "1.20.4"),
                    (q.constructor = d),
                    (q.kill()._gc = q._forcingPlayhead = q._hasPause = !1),
                    (q.to = function (a, b, d, e) {
                        var f = (d.repeat && l.TweenMax) || c;
                        return b ? this.add(new f(a, b, d), e) : this.set(a, d, e);
                    }),
                    (q.from = function (a, b, d, e) {
                        return this.add(((d.repeat && l.TweenMax) || c).from(a, b, d), e);
                    }),
                    (q.fromTo = function (a, b, d, e, f) {
                        var g = (e.repeat && l.TweenMax) || c;
                        return b ? this.add(g.fromTo(a, b, d, e), f) : this.set(a, e, f);
                    }),
                    (q.staggerTo = function (a, b, e, f, g, i, j, k) {
                        var l,
                            o,
                            q = new d({ onComplete: i, onCompleteParams: j, callbackScope: k, smoothChildTiming: this.smoothChildTiming }),
                            r = e.cycle;
                        for ("string" == typeof a && (a = c.selector(a) || a), a = a || [], h(a) && (a = p(a)), f = f || 0, 0 > f && ((a = p(a)), a.reverse(), (f *= -1)), o = 0; o < a.length; o++)
                            (l = m(e)), l.startAt && ((l.startAt = m(l.startAt)), l.startAt.cycle && n(l.startAt, a, o)), r && (n(l, a, o), null != l.duration && ((b = l.duration), delete l.duration)), q.to(a[o], b, l, o * f);
                        return this.add(q, g);
                    }),
                    (q.staggerFrom = function (a, b, c, d, e, f, g, h) {
                        return (c.immediateRender = 0 != c.immediateRender), (c.runBackwards = !0), this.staggerTo(a, b, c, d, e, f, g, h);
                    }),
                    (q.staggerFromTo = function (a, b, c, d, e, f, g, h, i) {
                        return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), this.staggerTo(a, b, d, e, f, g, h, i);
                    }),
                    (q.call = function (a, b, d, e) {
                        return this.add(c.delayedCall(0, a, b, d), e);
                    }),
                    (q.set = function (a, b, d) {
                        return (d = this._parseTimeOrLabel(d, 0, !0)), null == b.immediateRender && (b.immediateRender = d === this._time && !this._paused), this.add(new c(a, 0, b), d);
                    }),
                    (d.exportRoot = function (a, b) {
                        (a = a || {}), null == a.smoothChildTiming && (a.smoothChildTiming = !0);
                        var e,
                            f,
                            g,
                            h,
                            i = new d(a),
                            j = i._timeline;
                        for (null == b && (b = !0), j._remove(i, !0), i._startTime = 0, i._rawPrevTime = i._time = i._totalTime = j._time, g = j._first; g; )
                            (h = g._next), (b && g instanceof c && g.target === g.vars.onComplete) || ((f = g._startTime - g._delay), 0 > f && (e = 1), i.add(g, f)), (g = h);
                        return j.add(i, 0), e && i.totalDuration(), i;
                    }),
                    (q.add = function (e, f, g, h) {
                        var j, k, l, m, n, o;
                        if (("number" != typeof f && (f = this._parseTimeOrLabel(f, 0, !0, e)), !(e instanceof a))) {
                            if (e instanceof Array || (e && e.push && i(e))) {
                                for (g = g || "normal", h = h || 0, j = f, k = e.length, l = 0; k > l; l++)
                                    i((m = e[l])) && (m = new d({ tweens: m })),
                                        this.add(m, j),
                                        "string" != typeof m && "function" != typeof m && ("sequence" === g ? (j = m._startTime + m.totalDuration() / m._timeScale) : "start" === g && (m._startTime -= m.delay())),
                                        (j += h);
                                return this._uncache(!0);
                            }
                            if ("string" == typeof e) return this.addLabel(e, f);
                            if ("function" != typeof e) throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
                            e = c.delayedCall(0, e);
                        }
                        if ((b.prototype.add.call(this, e, f), e._time && e.render((this.rawTime() - e._startTime) * e._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()))
                            for (n = this, o = n.rawTime() > e._startTime; n._timeline; ) o && n._timeline.smoothChildTiming ? n.totalTime(n._totalTime, !0) : n._gc && n._enabled(!0, !1), (n = n._timeline);
                        return this;
                    }),
                    (q.remove = function (b) {
                        if (b instanceof a) {
                            this._remove(b, !1);
                            var c = (b._timeline = b.vars.useFrames ? a._rootFramesTimeline : a._rootTimeline);
                            return (b._startTime = (b._paused ? b._pauseTime : c._time) - (b._reversed ? b.totalDuration() - b._totalTime : b._totalTime) / b._timeScale), this;
                        }
                        if (b instanceof Array || (b && b.push && i(b))) {
                            for (var d = b.length; --d > -1; ) this.remove(b[d]);
                            return this;
                        }
                        return "string" == typeof b ? this.removeLabel(b) : this.kill(null, b);
                    }),
                    (q._remove = function (a, c) {
                        b.prototype._remove.call(this, a, c);
                        var d = this._last;
                        return d ? this._time > this.duration() && ((this._time = this._duration), (this._totalTime = this._totalDuration)) : (this._time = this._totalTime = this._duration = this._totalDuration = 0), this;
                    }),
                    (q.append = function (a, b) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a));
                    }),
                    (q.insert = q.insertMultiple = function (a, b, c, d) {
                        return this.add(a, b || 0, c, d);
                    }),
                    (q.appendMultiple = function (a, b, c, d) {
                        return this.add(a, this._parseTimeOrLabel(null, b, !0, a), c, d);
                    }),
                    (q.addLabel = function (a, b) {
                        return (this._labels[a] = this._parseTimeOrLabel(b)), this;
                    }),
                    (q.addPause = function (a, b, d, e) {
                        var f = c.delayedCall(0, o, d, e || this);
                        return (f.vars.onComplete = f.vars.onReverseComplete = b), (f.data = "isPause"), (this._hasPause = !0), this.add(f, a);
                    }),
                    (q.removeLabel = function (a) {
                        return delete this._labels[a], this;
                    }),
                    (q.getLabelTime = function (a) {
                        return null != this._labels[a] ? this._labels[a] : -1;
                    }),
                    (q._parseTimeOrLabel = function (b, c, d, e) {
                        var f, g;
                        if (e instanceof a && e.timeline === this) this.remove(e);
                        else if (e && (e instanceof Array || (e.push && i(e)))) for (g = e.length; --g > -1; ) e[g] instanceof a && e[g].timeline === this && this.remove(e[g]);
                        if (((f = "number" != typeof b || c ? (this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration) : 0), "string" == typeof c))
                            return this._parseTimeOrLabel(c, d && "number" == typeof b && null == this._labels[c] ? b - f : 0, d);
                        if (((c = c || 0), "string" != typeof b || (!isNaN(b) && null == this._labels[b]))) null == b && (b = f);
                        else {
                            if (((g = b.indexOf("=")), -1 === g)) return null == this._labels[b] ? (d ? (this._labels[b] = f + c) : c) : this._labels[b] + c;
                            (c = parseInt(b.charAt(g - 1) + "1", 10) * Number(b.substr(g + 1))), (b = g > 1 ? this._parseTimeOrLabel(b.substr(0, g - 1), 0, d) : f);
                        }
                        return Number(b) + c;
                    }),
                    (q.seek = function (a, b) {
                        return this.totalTime("number" == typeof a ? a : this._parseTimeOrLabel(a), b !== !1);
                    }),
                    (q.stop = function () {
                        return this.paused(!0);
                    }),
                    (q.gotoAndPlay = function (a, b) {
                        return this.play(a, b);
                    }),
                    (q.gotoAndStop = function (a, b) {
                        return this.pause(a, b);
                    }),
                    (q.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d,
                            f,
                            g,
                            h,
                            i,
                            l,
                            m,
                            n = this._time,
                            o = this._dirty ? this.totalDuration() : this._totalDuration,
                            p = this._startTime,
                            q = this._timeScale,
                            r = this._paused;
                        if ((n !== this._time && (a += this._time - n), a >= o - 1e-7 && a >= 0))
                            (this._totalTime = this._time = o),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((f = !0),
                                    (h = "onComplete"),
                                    (i = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration &&
                                        ((0 >= a && a >= -1e-7) || this._rawPrevTime < 0 || this._rawPrevTime === e) &&
                                        this._rawPrevTime !== a &&
                                        this._first &&
                                        ((i = !0), this._rawPrevTime > e && (h = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                (a = o + 1e-4);
                        else if (1e-7 > a)
                            if (
                                ((this._totalTime = this._time = 0),
                                (0 !== n || (0 === this._duration && this._rawPrevTime !== e && (this._rawPrevTime > 0 || (0 > a && this._rawPrevTime >= 0)))) && ((h = "onReverseComplete"), (f = this._reversed)),
                                0 > a)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((i = f = !0), (h = "onReverseComplete")) : this._rawPrevTime >= 0 && this._first && (i = !0), (this._rawPrevTime = a);
                            else {
                                if (((this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
                                (a = 0), this._initted || (i = !0);
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !b) {
                                if (a >= n) for (d = this._first; d && d._startTime <= a && !l; ) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (l = d), (d = d._next);
                                else for (d = this._last; d && d._startTime >= a && !l; ) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (l = d)), (d = d._prev);
                                l && ((this._time = a = l._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
                            }
                            this._totalTime = this._time = this._rawPrevTime = a;
                        }
                        if ((this._time !== n && this._first) || c || i || l) {
                            if (
                                (this._initted || (this._initted = !0),
                                this._active || (!this._paused && this._time !== n && a > 0 && (this._active = !0)),
                                0 === n && this.vars.onStart && ((0 === this._time && this._duration) || b || this._callback("onStart")),
                                (m = this._time),
                                m >= n)
                            )
                                for (d = this._first; d && ((g = d._next), m === this._time && (!this._paused || r)); )
                                    (d._active || (d._startTime <= m && !d._paused && !d._gc)) &&
                                        (l === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                        (d = g);
                            else
                                for (d = this._last; d && ((g = d._prev), m === this._time && (!this._paused || r)); ) {
                                    if (d._active || (d._startTime <= n && !d._paused && !d._gc)) {
                                        if (l === d) {
                                            for (l = d._prev; l && l.endTime() > this._time; ) l.render(l._reversed ? l.totalDuration() - (a - l._startTime) * l._timeScale : (a - l._startTime) * l._timeScale, b, c), (l = l._prev);
                                            (l = null), this.pause();
                                        }
                                        d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                                    }
                                    d = g;
                                }
                            this._onUpdate && (b || (j.length && k(), this._callback("onUpdate"))),
                                h &&
                                    (this._gc ||
                                        ((p === this._startTime || q !== this._timeScale) &&
                                            (0 === this._time || o >= this.totalDuration()) &&
                                            (f && (j.length && k(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[h] && this._callback(h))));
                        }
                    }),
                    (q._hasPausedChild = function () {
                        for (var a = this._first; a; ) {
                            if (a._paused || (a instanceof d && a._hasPausedChild())) return !0;
                            a = a._next;
                        }
                        return !1;
                    }),
                    (q.getChildren = function (a, b, d, e) {
                        e = e || -9999999999;
                        for (var f = [], g = this._first, h = 0; g; )
                            g._startTime < e || (g instanceof c ? b !== !1 && (f[h++] = g) : (d !== !1 && (f[h++] = g), a !== !1 && ((f = f.concat(g.getChildren(!0, b, d))), (h = f.length)))), (g = g._next);
                        return f;
                    }),
                    (q.getTweensOf = function (a, b) {
                        var d,
                            e,
                            f = this._gc,
                            g = [],
                            h = 0;
                        for (f && this._enabled(!0, !0), d = c.getTweensOf(a), e = d.length; --e > -1; ) (d[e].timeline === this || (b && this._contains(d[e]))) && (g[h++] = d[e]);
                        return f && this._enabled(!1, !0), g;
                    }),
                    (q.recent = function () {
                        return this._recent;
                    }),
                    (q._contains = function (a) {
                        for (var b = a.timeline; b; ) {
                            if (b === this) return !0;
                            b = b.timeline;
                        }
                        return !1;
                    }),
                    (q.shiftChildren = function (a, b, c) {
                        c = c || 0;
                        for (var d, e = this._first, f = this._labels; e; ) e._startTime >= c && (e._startTime += a), (e = e._next);
                        if (b) for (d in f) f[d] >= c && (f[d] += a);
                        return this._uncache(!0);
                    }),
                    (q._kill = function (a, b) {
                        if (!a && !b) return this._enabled(!1, !1);
                        for (var c = b ? this.getTweensOf(b) : this.getChildren(!0, !0, !1), d = c.length, e = !1; --d > -1; ) c[d]._kill(a, b) && (e = !0);
                        return e;
                    }),
                    (q.clear = function (a) {
                        var b = this.getChildren(!1, !0, !0),
                            c = b.length;
                        for (this._time = this._totalTime = 0; --c > -1; ) b[c]._enabled(!1, !1);
                        return a !== !1 && (this._labels = {}), this._uncache(!0);
                    }),
                    (q.invalidate = function () {
                        for (var b = this._first; b; ) b.invalidate(), (b = b._next);
                        return a.prototype.invalidate.call(this);
                    }),
                    (q._enabled = function (a, c) {
                        if (a === this._gc) for (var d = this._first; d; ) d._enabled(a, !0), (d = d._next);
                        return b.prototype._enabled.call(this, a, c);
                    }),
                    (q.totalTime = function (b, c, d) {
                        this._forcingPlayhead = !0;
                        var e = a.prototype.totalTime.apply(this, arguments);
                        return (this._forcingPlayhead = !1), e;
                    }),
                    (q.duration = function (a) {
                        return arguments.length ? (0 !== this.duration() && 0 !== a && this.timeScale(this._duration / a), this) : (this._dirty && this.totalDuration(), this._duration);
                    }),
                    (q.totalDuration = function (a) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var b, c, d = 0, e = this._last, f = 999999999999; e; )
                                    (b = e._prev),
                                        e._dirty && e.totalDuration(),
                                        e._startTime > f && this._sortChildren && !e._paused && !this._calculatingDuration
                                            ? ((this._calculatingDuration = 1), this.add(e, e._startTime - e._delay), (this._calculatingDuration = 0))
                                            : (f = e._startTime),
                                        e._startTime < 0 &&
                                            !e._paused &&
                                            ((d -= e._startTime),
                                            this._timeline.smoothChildTiming && ((this._startTime += e._startTime / this._timeScale), (this._time -= e._startTime), (this._totalTime -= e._startTime), (this._rawPrevTime -= e._startTime)),
                                            this.shiftChildren(-e._startTime, !1, -9999999999),
                                            (f = 0)),
                                        (c = e._startTime + e._totalDuration / e._timeScale),
                                        c > d && (d = c),
                                        (e = b);
                                (this._duration = this._totalDuration = d), (this._dirty = !1);
                            }
                            return this._totalDuration;
                        }
                        return a && this.totalDuration() ? this.timeScale(this._totalDuration / a) : this;
                    }),
                    (q.paused = function (b) {
                        if (!b) for (var c = this._first, d = this._time; c; ) c._startTime === d && "isPause" === c.data && (c._rawPrevTime = 0), (c = c._next);
                        return a.prototype.paused.apply(this, arguments);
                    }),
                    (q.usesFrames = function () {
                        for (var b = this._timeline; b._timeline; ) b = b._timeline;
                        return b === a._rootFramesTimeline;
                    }),
                    (q.rawTime = function (a) {
                        return a && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))
                            ? this._totalTime % (this._duration + this._repeatDelay)
                            : this._paused
                            ? this._totalTime
                            : (this._timeline.rawTime(a) - this._startTime) * this._timeScale;
                    }),
                    d
                );
            },
            !0
        ),
        _gsScope._gsDefine(
            "TimelineMax",
            ["TimelineLite", "TweenLite", "easing.Ease"],
            function (a, b, c) {
                var d = function (b) {
                        a.call(this, b), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), (this._cycle = 0), (this._yoyo = this.vars.yoyo === !0), (this._dirty = !0);
                    },
                    e = 1e-10,
                    f = b._internals,
                    g = f.lazyTweens,
                    h = f.lazyRender,
                    i = _gsScope._gsDefine.globals,
                    j = new c(null, null, 1, 0),
                    k = (d.prototype = new a());
                return (
                    (k.constructor = d),
                    (k.kill()._gc = !1),
                    (d.version = "1.20.4"),
                    (k.invalidate = function () {
                        return (this._yoyo = this.vars.yoyo === !0), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), a.prototype.invalidate.call(this);
                    }),
                    (k.addCallback = function (a, c, d, e) {
                        return this.add(b.delayedCall(0, a, d, e), c);
                    }),
                    (k.removeCallback = function (a, b) {
                        if (a)
                            if (null == b) this._kill(null, a);
                            else for (var c = this.getTweensOf(a, !1), d = c.length, e = this._parseTimeOrLabel(b); --d > -1; ) c[d]._startTime === e && c[d]._enabled(!1, !1);
                        return this;
                    }),
                    (k.removePause = function (b) {
                        return this.removeCallback(a._internals.pauseCallback, b);
                    }),
                    (k.tweenTo = function (a, c) {
                        c = c || {};
                        var d,
                            e,
                            f,
                            g = { ease: j, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 },
                            h = (c.repeat && i.TweenMax) || b;
                        for (e in c) g[e] = c[e];
                        return (
                            (g.time = this._parseTimeOrLabel(a)),
                            (d = Math.abs(Number(g.time) - this._time) / this._timeScale || 0.001),
                            (f = new h(this, d, g)),
                            (g.onStart = function () {
                                f.target.paused(!0),
                                    f.vars.time === f.target.time() || d !== f.duration() || f.isFromTo || f.duration(Math.abs(f.vars.time - f.target.time()) / f.target._timeScale).render(f.time(), !0, !0),
                                    c.onStart && c.onStart.apply(c.onStartScope || c.callbackScope || f, c.onStartParams || []);
                            }),
                            f
                        );
                    }),
                    (k.tweenFromTo = function (a, b, c) {
                        (c = c || {}), (a = this._parseTimeOrLabel(a)), (c.startAt = { onComplete: this.seek, onCompleteParams: [a], callbackScope: this }), (c.immediateRender = c.immediateRender !== !1);
                        var d = this.tweenTo(b, c);
                        return (d.isFromTo = 1), d.duration(Math.abs(d.vars.time - a) / this._timeScale || 0.001);
                    }),
                    (k.render = function (a, b, c) {
                        this._gc && this._enabled(!0, !1);
                        var d,
                            f,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o = this._time,
                            p = this._dirty ? this.totalDuration() : this._totalDuration,
                            q = this._duration,
                            r = this._totalTime,
                            s = this._startTime,
                            t = this._timeScale,
                            u = this._rawPrevTime,
                            v = this._paused,
                            w = this._cycle;
                        if ((o !== this._time && (a += this._time - o), a >= p - 1e-7 && a >= 0))
                            this._locked || ((this._totalTime = p), (this._cycle = this._repeat)),
                                this._reversed ||
                                    this._hasPausedChild() ||
                                    ((f = !0),
                                    (j = "onComplete"),
                                    (k = !!this._timeline.autoRemoveChildren),
                                    0 === this._duration && ((0 >= a && a >= -1e-7) || 0 > u || u === e) && u !== a && this._first && ((k = !0), u > e && (j = "onReverseComplete"))),
                                (this._rawPrevTime = this._duration || !b || a || this._rawPrevTime === a ? a : e),
                                this._yoyo && 0 !== (1 & this._cycle) ? (this._time = a = 0) : ((this._time = q), (a = q + 1e-4));
                        else if (1e-7 > a)
                            if (
                                (this._locked || (this._totalTime = this._cycle = 0),
                                (this._time = 0),
                                (0 !== o || (0 === q && u !== e && (u > 0 || (0 > a && u >= 0)) && !this._locked)) && ((j = "onReverseComplete"), (f = this._reversed)),
                                0 > a)
                            )
                                (this._active = !1), this._timeline.autoRemoveChildren && this._reversed ? ((k = f = !0), (j = "onReverseComplete")) : u >= 0 && this._first && (k = !0), (this._rawPrevTime = a);
                            else {
                                if (((this._rawPrevTime = q || !b || a || this._rawPrevTime === a ? a : e), 0 === a && f)) for (d = this._first; d && 0 === d._startTime; ) d._duration || (f = !1), (d = d._next);
                                (a = 0), this._initted || (k = !0);
                            }
                        else if (
                            (0 === q && 0 > u && (k = !0),
                            (this._time = this._rawPrevTime = a),
                            this._locked ||
                                ((this._totalTime = a),
                                0 !== this._repeat &&
                                    ((l = q + this._repeatDelay),
                                    (this._cycle = (this._totalTime / l) >> 0),
                                    0 !== this._cycle && this._cycle === this._totalTime / l && a >= r && this._cycle--,
                                    (this._time = this._totalTime - this._cycle * l),
                                    this._yoyo && 0 !== (1 & this._cycle) && (this._time = q - this._time),
                                    this._time > q ? ((this._time = q), (a = q + 1e-4)) : this._time < 0 ? (this._time = a = 0) : (a = this._time))),
                            this._hasPause && !this._forcingPlayhead && !b)
                        ) {
                            if (((a = this._time), a >= o || (this._repeat && w !== this._cycle)))
                                for (d = this._first; d && d._startTime <= a && !m; ) d._duration || "isPause" !== d.data || d.ratio || (0 === d._startTime && 0 === this._rawPrevTime) || (m = d), (d = d._next);
                            else for (d = this._last; d && d._startTime >= a && !m; ) d._duration || ("isPause" === d.data && d._rawPrevTime > 0 && (m = d)), (d = d._prev);
                            m && m._startTime < q && ((this._time = a = m._startTime), (this._totalTime = a + this._cycle * (this._totalDuration + this._repeatDelay)));
                        }
                        if (this._cycle !== w && !this._locked) {
                            var x = this._yoyo && 0 !== (1 & w),
                                y = x === (this._yoyo && 0 !== (1 & this._cycle)),
                                z = this._totalTime,
                                A = this._cycle,
                                B = this._rawPrevTime,
                                C = this._time;
                            if (
                                ((this._totalTime = w * q),
                                this._cycle < w ? (x = !x) : (this._totalTime += q),
                                (this._time = o),
                                (this._rawPrevTime = 0 === q ? u - 1e-4 : u),
                                (this._cycle = w),
                                (this._locked = !0),
                                (o = x ? 0 : q),
                                this.render(o, b, 0 === q),
                                b || this._gc || (this.vars.onRepeat && ((this._cycle = A), (this._locked = !1), this._callback("onRepeat"))),
                                o !== this._time)
                            )
                                return;
                            if ((y && ((this._cycle = w), (this._locked = !0), (o = x ? q + 1e-4 : -1e-4), this.render(o, !0, !1)), (this._locked = !1), this._paused && !v)) return;
                            (this._time = C), (this._totalTime = z), (this._cycle = A), (this._rawPrevTime = B);
                        }
                        if (!((this._time !== o && this._first) || c || k || m)) return void (r !== this._totalTime && this._onUpdate && (b || this._callback("onUpdate")));
                        if (
                            (this._initted || (this._initted = !0),
                            this._active || (!this._paused && this._totalTime !== r && a > 0 && (this._active = !0)),
                            0 === r && this.vars.onStart && ((0 === this._totalTime && this._totalDuration) || b || this._callback("onStart")),
                            (n = this._time),
                            n >= o)
                        )
                            for (d = this._first; d && ((i = d._next), n === this._time && (!this._paused || v)); )
                                (d._active || (d._startTime <= this._time && !d._paused && !d._gc)) &&
                                    (m === d && this.pause(), d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c)),
                                    (d = i);
                        else
                            for (d = this._last; d && ((i = d._prev), n === this._time && (!this._paused || v)); ) {
                                if (d._active || (d._startTime <= o && !d._paused && !d._gc)) {
                                    if (m === d) {
                                        for (m = d._prev; m && m.endTime() > this._time; ) m.render(m._reversed ? m.totalDuration() - (a - m._startTime) * m._timeScale : (a - m._startTime) * m._timeScale, b, c), (m = m._prev);
                                        (m = null), this.pause();
                                    }
                                    d._reversed ? d.render((d._dirty ? d.totalDuration() : d._totalDuration) - (a - d._startTime) * d._timeScale, b, c) : d.render((a - d._startTime) * d._timeScale, b, c);
                                }
                                d = i;
                            }
                        this._onUpdate && (b || (g.length && h(), this._callback("onUpdate"))),
                            j &&
                                (this._locked ||
                                    this._gc ||
                                    ((s === this._startTime || t !== this._timeScale) &&
                                        (0 === this._time || p >= this.totalDuration()) &&
                                        (f && (g.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)), !b && this.vars[j] && this._callback(j))));
                    }),
                    (k.getActive = function (a, b, c) {
                        null == a && (a = !0), null == b && (b = !0), null == c && (c = !1);
                        var d,
                            e,
                            f = [],
                            g = this.getChildren(a, b, c),
                            h = 0,
                            i = g.length;
                        for (d = 0; i > d; d++) (e = g[d]), e.isActive() && (f[h++] = e);
                        return f;
                    }),
                    (k.getLabelAfter = function (a) {
                        a || (0 !== a && (a = this._time));
                        var b,
                            c = this.getLabelsArray(),
                            d = c.length;
                        for (b = 0; d > b; b++) if (c[b].time > a) return c[b].name;
                        return null;
                    }),
                    (k.getLabelBefore = function (a) {
                        null == a && (a = this._time);
                        for (var b = this.getLabelsArray(), c = b.length; --c > -1; ) if (b[c].time < a) return b[c].name;
                        return null;
                    }),
                    (k.getLabelsArray = function () {
                        var a,
                            b = [],
                            c = 0;
                        for (a in this._labels) b[c++] = { time: this._labels[a], name: a };
                        return (
                            b.sort(function (a, b) {
                                return a.time - b.time;
                            }),
                            b
                        );
                    }),
                    (k.invalidate = function () {
                        return (this._locked = !1), a.prototype.invalidate.call(this);
                    }),
                    (k.progress = function (a, b) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - a : a) + this._cycle * (this._duration + this._repeatDelay), b) : this._time / this.duration() || 0;
                    }),
                    (k.totalProgress = function (a, b) {
                        return arguments.length ? this.totalTime(this.totalDuration() * a, b) : this._totalTime / this.totalDuration() || 0;
                    }),
                    (k.totalDuration = function (b) {
                        return arguments.length
                            ? -1 !== this._repeat && b
                                ? this.timeScale(this.totalDuration() / b)
                                : this
                            : (this._dirty && (a.prototype.totalDuration.call(this), (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat)), this._totalDuration);
                    }),
                    (k.time = function (a, b) {
                        return arguments.length
                            ? (this._dirty && this.totalDuration(),
                              a > this._duration && (a = this._duration),
                              this._yoyo && 0 !== (1 & this._cycle) ? (a = this._duration - a + this._cycle * (this._duration + this._repeatDelay)) : 0 !== this._repeat && (a += this._cycle * (this._duration + this._repeatDelay)),
                              this.totalTime(a, b))
                            : this._time;
                    }),
                    (k.repeat = function (a) {
                        return arguments.length ? ((this._repeat = a), this._uncache(!0)) : this._repeat;
                    }),
                    (k.repeatDelay = function (a) {
                        return arguments.length ? ((this._repeatDelay = a), this._uncache(!0)) : this._repeatDelay;
                    }),
                    (k.yoyo = function (a) {
                        return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
                    }),
                    (k.currentLabel = function (a) {
                        return arguments.length ? this.seek(a, !0) : this.getLabelBefore(this._time + 1e-8);
                    }),
                    d
                );
            },
            !0
        ),
        (function () {
            var a = 180 / Math.PI,
                b = [],
                c = [],
                d = [],
                e = {},
                f = _gsScope._gsDefine.globals,
                g = function (a, b, c, d) {
                    c === d && (c = d - (d - b) / 1e6), a === b && (b = a + (c - a) / 1e6), (this.a = a), (this.b = b), (this.c = c), (this.d = d), (this.da = d - a), (this.ca = c - a), (this.ba = b - a);
                },
                h = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                i = function (a, b, c, d) {
                    var e = { a: a },
                        f = {},
                        g = {},
                        h = { c: d },
                        i = (a + b) / 2,
                        j = (b + c) / 2,
                        k = (c + d) / 2,
                        l = (i + j) / 2,
                        m = (j + k) / 2,
                        n = (m - l) / 8;
                    return (e.b = i + (a - i) / 4), (f.b = l + n), (e.c = f.a = (e.b + f.b) / 2), (f.c = g.a = (l + m) / 2), (g.b = m - n), (h.b = k + (d - k) / 4), (g.c = h.a = (g.b + h.b) / 2), [e, f, g, h];
                },
                j = function (a, e, f, g, h) {
                    var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v,
                        w = a.length - 1,
                        x = 0,
                        y = a[0].a;
                    for (j = 0; w > j; j++)
                        (n = a[x]),
                            (k = n.a),
                            (l = n.d),
                            (m = a[x + 1].d),
                            h
                                ? ((t = b[j]),
                                  (u = c[j]),
                                  (v = ((u + t) * e * 0.25) / (g ? 0.5 : d[j] || 0.5)),
                                  (o = l - (l - k) * (g ? 0.5 * e : 0 !== t ? v / t : 0)),
                                  (p = l + (m - l) * (g ? 0.5 * e : 0 !== u ? v / u : 0)),
                                  (q = l - (o + (((p - o) * ((3 * t) / (t + u) + 0.5)) / 4 || 0))))
                                : ((o = l - (l - k) * e * 0.5), (p = l + (m - l) * e * 0.5), (q = l - (o + p) / 2)),
                            (o += q),
                            (p += q),
                            (n.c = r = o),
                            0 !== j ? (n.b = y) : (n.b = y = n.a + 0.6 * (n.c - n.a)),
                            (n.da = l - k),
                            (n.ca = r - k),
                            (n.ba = y - k),
                            f ? ((s = i(k, y, r, l)), a.splice(x, 1, s[0], s[1], s[2], s[3]), (x += 4)) : x++,
                            (y = p);
                    (n = a[x]), (n.b = y), (n.c = y + 0.4 * (n.d - y)), (n.da = n.d - n.a), (n.ca = n.c - n.a), (n.ba = y - n.a), f && ((s = i(n.a, y, n.c, n.d)), a.splice(x, 1, s[0], s[1], s[2], s[3]));
                },
                k = function (a, d, e, f) {
                    var h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n = [];
                    if (f) for (a = [f].concat(a), i = a.length; --i > -1; ) "string" == typeof (m = a[i][d]) && "=" === m.charAt(1) && (a[i][d] = f[d] + Number(m.charAt(0) + m.substr(2)));
                    if (((h = a.length - 2), 0 > h)) return (n[0] = new g(a[0][d], 0, 0, a[0][d])), n;
                    for (i = 0; h > i; i++) (j = a[i][d]), (k = a[i + 1][d]), (n[i] = new g(j, 0, 0, k)), e && ((l = a[i + 2][d]), (b[i] = (b[i] || 0) + (k - j) * (k - j)), (c[i] = (c[i] || 0) + (l - k) * (l - k)));
                    return (n[i] = new g(a[i][d], 0, 0, a[i + 1][d])), n;
                },
                l = function (a, f, g, i, l, m) {
                    var n,
                        o,
                        p,
                        q,
                        r,
                        s,
                        t,
                        u,
                        v = {},
                        w = [],
                        x = m || a[0];
                    (l = "string" == typeof l ? "," + l + "," : h), null == f && (f = 1);
                    for (o in a[0]) w.push(o);
                    if (a.length > 1) {
                        for (u = a[a.length - 1], t = !0, n = w.length; --n > -1; )
                            if (((o = w[n]), Math.abs(x[o] - u[o]) > 0.05)) {
                                t = !1;
                                break;
                            }
                        t && ((a = a.concat()), m && a.unshift(m), a.push(a[1]), (m = a[a.length - 3]));
                    }
                    for (b.length = c.length = d.length = 0, n = w.length; --n > -1; ) (o = w[n]), (e[o] = -1 !== l.indexOf("," + o + ",")), (v[o] = k(a, o, e[o], m));
                    for (n = b.length; --n > -1; ) (b[n] = Math.sqrt(b[n])), (c[n] = Math.sqrt(c[n]));
                    if (!i) {
                        for (n = w.length; --n > -1; ) if (e[o]) for (p = v[w[n]], s = p.length - 1, q = 0; s > q; q++) (r = p[q + 1].da / c[q] + p[q].da / b[q] || 0), (d[q] = (d[q] || 0) + r * r);
                        for (n = d.length; --n > -1; ) d[n] = Math.sqrt(d[n]);
                    }
                    for (n = w.length, q = g ? 4 : 1; --n > -1; ) (o = w[n]), (p = v[o]), j(p, f, g, i, e[o]), t && (p.splice(0, q), p.splice(p.length - q, q));
                    return v;
                },
                m = function (a, b, c) {
                    b = b || "soft";
                    var d,
                        e,
                        f,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = {},
                        q = "cubic" === b ? 3 : 2,
                        r = "soft" === b,
                        s = [];
                    if ((r && c && (a = [c].concat(a)), null == a || a.length < q + 1)) throw "invalid Bezier data";
                    for (m in a[0]) s.push(m);
                    for (j = s.length; --j > -1; ) {
                        for (m = s[j], p[m] = i = [], n = 0, l = a.length, k = 0; l > k; k++)
                            (d = null == c ? a[k][m] : "string" == typeof (o = a[k][m]) && "=" === o.charAt(1) ? c[m] + Number(o.charAt(0) + o.substr(2)) : Number(o)), r && k > 1 && l - 1 > k && (i[n++] = (d + i[n - 2]) / 2), (i[n++] = d);
                        for (l = n - q + 1, n = 0, k = 0; l > k; k += q) (d = i[k]), (e = i[k + 1]), (f = i[k + 2]), (h = 2 === q ? 0 : i[k + 3]), (i[n++] = o = 3 === q ? new g(d, e, f, h) : new g(d, (2 * e + d) / 3, (2 * e + f) / 3, f));
                        i.length = n;
                    }
                    return p;
                },
                n = function (a, b, c) {
                    for (var d, e, f, g, h, i, j, k, l, m, n, o = 1 / c, p = a.length; --p > -1; )
                        for (m = a[p], f = m.a, g = m.d - f, h = m.c - f, i = m.b - f, d = e = 0, k = 1; c >= k; k++)
                            (j = o * k), (l = 1 - j), (d = e - (e = (j * j * g + 3 * l * (j * h + l * i)) * j)), (n = p * c + k - 1), (b[n] = (b[n] || 0) + d * d);
                },
                o = function (a, b) {
                    b = b >> 0 || 6;
                    var c,
                        d,
                        e,
                        f,
                        g = [],
                        h = [],
                        i = 0,
                        j = 0,
                        k = b - 1,
                        l = [],
                        m = [];
                    for (c in a) n(a[c], g, b);
                    for (e = g.length, d = 0; e > d; d++) (i += Math.sqrt(g[d])), (f = d % b), (m[f] = i), f === k && ((j += i), (f = (d / b) >> 0), (l[f] = m), (h[f] = j), (i = 0), (m = []));
                    return { length: j, lengths: h, segments: l };
                },
                p = _gsScope._gsDefine.plugin({
                    propName: "bezier",
                    priority: -1,
                    version: "1.3.8",
                    API: 2,
                    global: !0,
                    init: function (a, b, c) {
                        (this._target = a), b instanceof Array && (b = { values: b }), (this._func = {}), (this._mod = {}), (this._props = []), (this._timeRes = null == b.timeResolution ? 6 : parseInt(b.timeResolution, 10));
                        var d,
                            e,
                            f,
                            g,
                            h,
                            i = b.values || [],
                            j = {},
                            k = i[0],
                            n = b.autoRotate || c.vars.orientToBezier;
                        this._autoRotate = n ? (n instanceof Array ? n : [["x", "y", "rotation", n === !0 ? 0 : Number(n) || 0]]) : null;
                        for (d in k) this._props.push(d);
                        for (f = this._props.length; --f > -1; )
                            (d = this._props[f]),
                                this._overwriteProps.push(d),
                                (e = this._func[d] = "function" == typeof a[d]),
                                (j[d] = e ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)]() : parseFloat(a[d])),
                                h || (j[d] !== i[0][d] && (h = j));
                        if (
                            ((this._beziers = "cubic" !== b.type && "quadratic" !== b.type && "soft" !== b.type ? l(i, isNaN(b.curviness) ? 1 : b.curviness, !1, "thruBasic" === b.type, b.correlate, h) : m(i, b.type, j)),
                            (this._segCount = this._beziers[d].length),
                            this._timeRes)
                        ) {
                            var p = o(this._beziers, this._timeRes);
                            (this._length = p.length),
                                (this._lengths = p.lengths),
                                (this._segments = p.segments),
                                (this._l1 = this._li = this._s1 = this._si = 0),
                                (this._l2 = this._lengths[0]),
                                (this._curSeg = this._segments[0]),
                                (this._s2 = this._curSeg[0]),
                                (this._prec = 1 / this._curSeg.length);
                        }
                        if ((n = this._autoRotate))
                            for (this._initialRotations = [], n[0] instanceof Array || (this._autoRotate = n = [n]), f = n.length; --f > -1; ) {
                                for (g = 0; 3 > g; g++) (d = n[f][g]), (this._func[d] = "function" == typeof a[d] ? a[d.indexOf("set") || "function" != typeof a["get" + d.substr(3)] ? d : "get" + d.substr(3)] : !1);
                                (d = n[f][2]), (this._initialRotations[f] = (this._func[d] ? this._func[d].call(this._target) : this._target[d]) || 0), this._overwriteProps.push(d);
                            }
                        return (this._startRatio = c.vars.runBackwards ? 1 : 0), !0;
                    },
                    set: function (b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = this._segCount,
                            n = this._func,
                            o = this._target,
                            p = b !== this._startRatio;
                        if (this._timeRes) {
                            if (((k = this._lengths), (l = this._curSeg), (b *= this._length), (e = this._li), b > this._l2 && m - 1 > e)) {
                                for (j = m - 1; j > e && (this._l2 = k[++e]) <= b; );
                                (this._l1 = k[e - 1]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s2 = l[(this._s1 = this._si = 0)]);
                            } else if (b < this._l1 && e > 0) {
                                for (; e > 0 && (this._l1 = k[--e]) >= b; );
                                0 === e && b < this._l1 ? (this._l1 = 0) : e++, (this._l2 = k[e]), (this._li = e), (this._curSeg = l = this._segments[e]), (this._s1 = l[(this._si = l.length - 1) - 1] || 0), (this._s2 = l[this._si]);
                            }
                            if (((c = e), (b -= this._l1), (e = this._si), b > this._s2 && e < l.length - 1)) {
                                for (j = l.length - 1; j > e && (this._s2 = l[++e]) <= b; );
                                (this._s1 = l[e - 1]), (this._si = e);
                            } else if (b < this._s1 && e > 0) {
                                for (; e > 0 && (this._s1 = l[--e]) >= b; );
                                0 === e && b < this._s1 ? (this._s1 = 0) : e++, (this._s2 = l[e]), (this._si = e);
                            }
                            h = (e + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
                        } else (c = 0 > b ? 0 : b >= 1 ? m - 1 : (m * b) >> 0), (h = (b - c * (1 / m)) * m);
                        for (d = 1 - h, e = this._props.length; --e > -1; )
                            (f = this._props[e]), (g = this._beziers[f][c]), (i = (h * h * g.da + 3 * d * (h * g.ca + d * g.ba)) * h + g.a), this._mod[f] && (i = this._mod[f](i, o)), n[f] ? o[f](i) : (o[f] = i);
                        if (this._autoRotate) {
                            var q,
                                r,
                                s,
                                t,
                                u,
                                v,
                                w,
                                x = this._autoRotate;
                            for (e = x.length; --e > -1; )
                                (f = x[e][2]),
                                    (v = x[e][3] || 0),
                                    (w = x[e][4] === !0 ? 1 : a),
                                    (g = this._beziers[x[e][0]]),
                                    (q = this._beziers[x[e][1]]),
                                    g &&
                                        q &&
                                        ((g = g[c]),
                                        (q = q[c]),
                                        (r = g.a + (g.b - g.a) * h),
                                        (t = g.b + (g.c - g.b) * h),
                                        (r += (t - r) * h),
                                        (t += (g.c + (g.d - g.c) * h - t) * h),
                                        (s = q.a + (q.b - q.a) * h),
                                        (u = q.b + (q.c - q.b) * h),
                                        (s += (u - s) * h),
                                        (u += (q.c + (q.d - q.c) * h - u) * h),
                                        (i = p ? Math.atan2(u - s, t - r) * w + v : this._initialRotations[e]),
                                        this._mod[f] && (i = this._mod[f](i, o)),
                                        n[f] ? o[f](i) : (o[f] = i));
                        }
                    },
                }),
                q = p.prototype;
            (p.bezierThrough = l),
                (p.cubicToQuadratic = i),
                (p._autoCSS = !0),
                (p.quadraticToCubic = function (a, b, c) {
                    return new g(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                }),
                (p._cssRegister = function () {
                    var a = f.CSSPlugin;
                    if (a) {
                        var b = a._internals,
                            c = b._parseToProxy,
                            d = b._setPluginRatio,
                            e = b.CSSPropTween;
                        b._registerComplexSpecialProp("bezier", {
                            parser: function (a, b, f, g, h, i) {
                                b instanceof Array && (b = { values: b }), (i = new p());
                                var j,
                                    k,
                                    l,
                                    m = b.values,
                                    n = m.length - 1,
                                    o = [],
                                    q = {};
                                if (0 > n) return h;
                                for (j = 0; n >= j; j++) (l = c(a, m[j], g, h, i, n !== j)), (o[j] = l.end);
                                for (k in b) q[k] = b[k];
                                return (
                                    (q.values = o),
                                    (h = new e(a, "bezier", 0, 0, l.pt, 2)),
                                    (h.data = l),
                                    (h.plugin = i),
                                    (h.setRatio = d),
                                    0 === q.autoRotate && (q.autoRotate = !0),
                                    !q.autoRotate ||
                                        q.autoRotate instanceof Array ||
                                        ((j = q.autoRotate === !0 ? 0 : Number(q.autoRotate)), (q.autoRotate = null != l.end.left ? [["left", "top", "rotation", j, !1]] : null != l.end.x ? [["x", "y", "rotation", j, !1]] : !1)),
                                    q.autoRotate && (g._transform || g._enableTransforms(!1), (l.autoRotate = g._target._gsTransform), (l.proxy.rotation = l.autoRotate.rotation || 0), g._overwriteProps.push("rotation")),
                                    i._onInitTween(l.proxy, q, g._tween),
                                    h
                                );
                            },
                        });
                    }
                }),
                (q._mod = function (a) {
                    for (var b, c = this._overwriteProps, d = c.length; --d > -1; ) (b = a[c[d]]), b && "function" == typeof b && (this._mod[c[d]] = b);
                }),
                (q._kill = function (a) {
                    var b,
                        c,
                        d = this._props;
                    for (b in this._beziers) if (b in a) for (delete this._beziers[b], delete this._func[b], c = d.length; --c > -1; ) d[c] === b && d.splice(c, 1);
                    if ((d = this._autoRotate)) for (c = d.length; --c > -1; ) a[d[c][2]] && d.splice(c, 1);
                    return this._super._kill.call(this, a);
                });
        })(),
        _gsScope._gsDefine(
            "plugins.CSSPlugin",
            ["plugins.TweenPlugin", "TweenLite"],
            function (a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = function () {
                        a.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = g.prototype.setRatio);
                    },
                    h = _gsScope._gsDefine.globals,
                    i = {},
                    j = (g.prototype = new a("css"));
                (j.constructor = g),
                    (g.version = "1.20.4"),
                    (g.API = 2),
                    (g.defaultTransformPerspective = 0),
                    (g.defaultSkewType = "compensated"),
                    (g.defaultSmoothOrigin = !0),
                    (j = "px"),
                    (g.suffixMap = { top: j, right: j, bottom: j, left: j, width: j, height: j, fontSize: j, padding: j, margin: j, perspective: j, lineHeight: "" });
                var k,
                    l,
                    m,
                    n,
                    o,
                    p,
                    q,
                    r,
                    s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    x = /opacity *= *([^)]*)/i,
                    y = /opacity:([^;]*)/i,
                    z = /alpha\(opacity *=.+?\)/i,
                    A = /^(rgb|hsl)/,
                    B = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    E = function (a, b) {
                        return b.toUpperCase();
                    },
                    F = /(?:Left|Right|Width)/i,
                    G = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    H = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    I = /,(?=[^\)]*(?:\(|$))/gi,
                    J = /[\s,\(]/i,
                    K = Math.PI / 180,
                    L = 180 / Math.PI,
                    M = {},
                    N = { style: {} },
                    O = _gsScope.document || {
                        createElement: function () {
                            return N;
                        },
                    },
                    P = function (a, b) {
                        return O.createElementNS ? O.createElementNS(b || "http://www.w3.org/1999/xhtml", a) : O.createElement(a);
                    },
                    Q = P("div"),
                    R = P("img"),
                    S = (g._internals = { _specialProps: i }),
                    T = (_gsScope.navigator || {}).userAgent || "",
                    U = (function () {
                        var a = T.indexOf("Android"),
                            b = P("a");
                        return (
                            (m = -1 !== T.indexOf("Safari") && -1 === T.indexOf("Chrome") && (-1 === a || parseFloat(T.substr(a + 8, 2)) > 3)),
                            (o = m && parseFloat(T.substr(T.indexOf("Version/") + 8, 2)) < 6),
                            (n = -1 !== T.indexOf("Firefox")),
                            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T)) && (p = parseFloat(RegExp.$1)),
                            b ? ((b.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(b.style.opacity)) : !1
                        );
                    })(),
                    V = function (a) {
                        return x.test("string" == typeof a ? a : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
                    },
                    W = function (a) {
                        _gsScope.console && console.log(a);
                    },
                    X = "",
                    Y = "",
                    Z = function (a, b) {
                        b = b || Q;
                        var c,
                            d,
                            e = b.style;
                        if (void 0 !== e[a]) return a;
                        for (a = a.charAt(0).toUpperCase() + a.substr(1), c = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; --d > -1 && void 0 === e[c[d] + a]; );
                        return d >= 0 ? ((Y = 3 === d ? "ms" : c[d]), (X = "-" + Y.toLowerCase() + "-"), Y + a) : null;
                    },
                    $ = O.defaultView ? O.defaultView.getComputedStyle : function () {},
                    _ = (g.getStyle = function (a, b, c, d, e) {
                        var f;
                        return U || "opacity" !== b
                            ? (!d && a.style[b] ? (f = a.style[b]) : (c = c || $(a)) ? (f = c[b] || c.getPropertyValue(b) || c.getPropertyValue(b.replace(B, "-$1").toLowerCase())) : a.currentStyle && (f = a.currentStyle[b]),
                              null == e || (f && "none" !== f && "auto" !== f && "auto auto" !== f) ? f : e)
                            : V(a);
                    }),
                    aa = (S.convertToPixels = function (a, c, d, e, f) {
                        if ("px" === e || (!e && "lineHeight" !== c)) return d;
                        if ("auto" === e || !d) return 0;
                        var h,
                            i,
                            j,
                            k = F.test(c),
                            l = a,
                            m = Q.style,
                            n = 0 > d,
                            o = 1 === d;
                        if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
                            if ("%" === e && -1 !== c.indexOf("border")) h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
                            else {
                                if (((m.cssText = "border:0 solid red;position:" + _(a, "position") + ";line-height:0;"), "%" !== e && l.appendChild && "v" !== e.charAt(0) && "rem" !== e))
                                    m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
                                else {
                                    if (((l = a.parentNode || O.body), -1 !== _(l, "display").indexOf("flex") && (m.position = "absolute"), (i = l._gsCache), (j = b.ticker.frame), i && k && i.time === j)) return (i.width * d) / 100;
                                    m[k ? "width" : "height"] = d + e;
                                }
                                l.appendChild(Q),
                                    (h = parseFloat(Q[k ? "offsetWidth" : "offsetHeight"])),
                                    l.removeChild(Q),
                                    k && "%" === e && g.cacheWidths !== !1 && ((i = l._gsCache = l._gsCache || {}), (i.time = j), (i.width = (h / d) * 100)),
                                    0 !== h || f || (h = aa(a, c, d, e, !0));
                            }
                        else (i = $(a).lineHeight), (a.style.lineHeight = d), (h = parseFloat($(a).lineHeight)), (a.style.lineHeight = i);
                        return o && (h /= 100), n ? -h : h;
                    }),
                    ba = (S.calculateOffset = function (a, b, c) {
                        if ("absolute" !== _(a, "position", c)) return 0;
                        var d = "left" === b ? "Left" : "Top",
                            e = _(a, "margin" + d, c);
                        return a["offset" + d] - (aa(a, b, parseFloat(e), e.replace(w, "")) || 0);
                    }),
                    ca = function (a, b) {
                        var c,
                            d,
                            e,
                            f = {};
                        if ((b = b || $(a, null)))
                            if ((c = b.length)) for (; --c > -1; ) (e = b[c]), (-1 === e.indexOf("-transform") || Da === e) && (f[e.replace(C, E)] = b.getPropertyValue(e));
                            else for (c in b) (-1 === c.indexOf("Transform") || Ca === c) && (f[c] = b[c]);
                        else if ((b = a.currentStyle || a.style)) for (c in b) "string" == typeof c && void 0 === f[c] && (f[c.replace(C, E)] = b[c]);
                        return (
                            U || (f.opacity = V(a)),
                            (d = Ra(a, b, !1)),
                            (f.rotation = d.rotation),
                            (f.skewX = d.skewX),
                            (f.scaleX = d.scaleX),
                            (f.scaleY = d.scaleY),
                            (f.x = d.x),
                            (f.y = d.y),
                            Fa && ((f.z = d.z), (f.rotationX = d.rotationX), (f.rotationY = d.rotationY), (f.scaleZ = d.scaleZ)),
                            f.filters && delete f.filters,
                            f
                        );
                    },
                    da = function (a, b, c, d, e) {
                        var f,
                            g,
                            h,
                            i = {},
                            j = a.style;
                        for (g in c)
                            "cssText" !== g &&
                                "length" !== g &&
                                isNaN(g) &&
                                (b[g] !== (f = c[g]) || (e && e[g])) &&
                                -1 === g.indexOf("Origin") &&
                                ("number" == typeof f || "string" == typeof f) &&
                                ((i[g] = "auto" !== f || ("left" !== g && "top" !== g) ? (("" !== f && "auto" !== f && "none" !== f) || "string" != typeof b[g] || "" === b[g].replace(v, "") ? f : 0) : ba(a, g)),
                                void 0 !== j[g] && (h = new sa(j, g, j[g], h)));
                        if (d) for (g in d) "className" !== g && (i[g] = d[g]);
                        return { difs: i, firstMPT: h };
                    },
                    ea = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
                    fa = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ga = function (a, b, c) {
                        if ("svg" === (a.nodeName + "").toLowerCase()) return (c || $(a))[b] || 0;
                        if (a.getCTM && Oa(a)) return a.getBBox()[b] || 0;
                        var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
                            e = ea[b],
                            f = e.length;
                        for (c = c || $(a, null); --f > -1; ) (d -= parseFloat(_(a, "padding" + e[f], c, !0)) || 0), (d -= parseFloat(_(a, "border" + e[f] + "Width", c, !0)) || 0);
                        return d;
                    },
                    ha = function (a, b) {
                        if ("contain" === a || "auto" === a || "auto auto" === a) return a + " ";
                        (null == a || "" === a) && (a = "0 0");
                        var c,
                            d = a.split(" "),
                            e = -1 !== a.indexOf("left") ? "0%" : -1 !== a.indexOf("right") ? "100%" : d[0],
                            f = -1 !== a.indexOf("top") ? "0%" : -1 !== a.indexOf("bottom") ? "100%" : d[1];
                        if (d.length > 3 && !b) {
                            for (d = a.split(", ").join(",").split(","), a = [], c = 0; c < d.length; c++) a.push(ha(d[c]));
                            return a.join(",");
                        }
                        return (
                            null == f ? (f = "center" === e ? "50%" : "0") : "center" === f && (f = "50%"),
                            ("center" === e || (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) && (e = "50%"),
                            (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
                            b &&
                                ((b.oxp = -1 !== e.indexOf("%")),
                                (b.oyp = -1 !== f.indexOf("%")),
                                (b.oxr = "=" === e.charAt(1)),
                                (b.oyr = "=" === f.charAt(1)),
                                (b.ox = parseFloat(e.replace(v, ""))),
                                (b.oy = parseFloat(f.replace(v, ""))),
                                (b.v = a)),
                            b || a
                        );
                    },
                    ia = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) : parseFloat(a) - parseFloat(b) || 0;
                    },
                    ja = function (a, b) {
                        return "function" == typeof a && (a = a(r, q)), null == a ? b : "string" == typeof a && "=" === a.charAt(1) ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b : parseFloat(a) || 0;
                    },
                    ka = function (a, b, c, d) {
                        var e,
                            f,
                            g,
                            h,
                            i,
                            j = 1e-6;
                        return (
                            "function" == typeof a && (a = a(r, q)),
                            null == a
                                ? (h = b)
                                : "number" == typeof a
                                ? (h = a)
                                : ((e = 360),
                                  (f = a.split("_")),
                                  (i = "=" === a.charAt(1)),
                                  (g = (i ? parseInt(a.charAt(0) + "1", 10) * parseFloat(f[0].substr(2)) : parseFloat(f[0])) * (-1 === a.indexOf("rad") ? 1 : L) - (i ? 0 : b)),
                                  f.length &&
                                      (d && (d[c] = b + g),
                                      -1 !== a.indexOf("short") && ((g %= e), g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                                      -1 !== a.indexOf("_cw") && 0 > g ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e) : -1 !== a.indexOf("ccw") && g > 0 && (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                                  (h = b + g)),
                            j > h && h > -j && (h = 0),
                            h
                        );
                    },
                    la = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0],
                    },
                    ma = function (a, b, c) {
                        return (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a), (255 * (1 > 6 * a ? b + (c - b) * a * 6 : 0.5 > a ? c : 2 > 3 * a ? b + (c - b) * (2 / 3 - a) * 6 : b) + 0.5) | 0;
                    },
                    na = (g.parseColor = function (a, b) {
                        var c, d, e, f, g, h, i, j, k, l, m;
                        if (a)
                            if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
                            else {
                                if (("," === a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1)), la[a])) c = la[a];
                                else if ("#" === a.charAt(0))
                                    4 === a.length && ((d = a.charAt(1)), (e = a.charAt(2)), (f = a.charAt(3)), (a = "#" + d + d + e + e + f + f)), (a = parseInt(a.substr(1), 16)), (c = [a >> 16, (a >> 8) & 255, 255 & a]);
                                else if ("hsl" === a.substr(0, 3))
                                    if (((c = m = a.match(s)), b)) {
                                        if (-1 !== a.indexOf("=")) return a.match(t);
                                    } else
                                        (g = (Number(c[0]) % 360) / 360),
                                            (h = Number(c[1]) / 100),
                                            (i = Number(c[2]) / 100),
                                            (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                                            (d = 2 * i - e),
                                            c.length > 3 && (c[3] = Number(c[3])),
                                            (c[0] = ma(g + 1 / 3, d, e)),
                                            (c[1] = ma(g, d, e)),
                                            (c[2] = ma(g - 1 / 3, d, e));
                                else c = a.match(s) || la.transparent;
                                (c[0] = Number(c[0])), (c[1] = Number(c[1])), (c[2] = Number(c[2])), c.length > 3 && (c[3] = Number(c[3]));
                            }
                        else c = la.black;
                        return (
                            b &&
                                !m &&
                                ((d = c[0] / 255),
                                (e = c[1] / 255),
                                (f = c[2] / 255),
                                (j = Math.max(d, e, f)),
                                (k = Math.min(d, e, f)),
                                (i = (j + k) / 2),
                                j === k ? (g = h = 0) : ((l = j - k), (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)), (g = j === d ? (e - f) / l + (f > e ? 6 : 0) : j === e ? (f - d) / l + 2 : (d - e) / l + 4), (g *= 60)),
                                (c[0] = (g + 0.5) | 0),
                                (c[1] = (100 * h + 0.5) | 0),
                                (c[2] = (100 * i + 0.5) | 0)),
                            c
                        );
                    }),
                    oa = function (a, b) {
                        var c,
                            d,
                            e,
                            f = a.match(pa) || [],
                            g = 0,
                            h = "";
                        if (!f.length) return a;
                        for (c = 0; c < f.length; c++)
                            (d = f[c]),
                                (e = a.substr(g, a.indexOf(d, g) - g)),
                                (g += e.length + d.length),
                                (d = na(d, b)),
                                3 === d.length && d.push(1),
                                (h += e + (b ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : "rgba(" + d.join(",")) + ")");
                        return h + a.substr(g);
                    },
                    pa = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (j in la) pa += "|" + j + "\\b";
                (pa = new RegExp(pa + ")", "gi")),
                    (g.colorStringFilter = function (a) {
                        var b,
                            c = a[0] + " " + a[1];
                        pa.test(c) && ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")), (a[0] = oa(a[0], b)), (a[1] = oa(a[1], b))), (pa.lastIndex = 0);
                    }),
                    b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
                var qa = function (a, b, c, d) {
                        if (null == a)
                            return function (a) {
                                return a;
                            };
                        var e,
                            f = b ? (a.match(pa) || [""])[0] : "",
                            g = a.split(f).join("").match(u) || [],
                            h = a.substr(0, a.indexOf(g[0])),
                            i = ")" === a.charAt(a.length - 1) ? ")" : "",
                            j = -1 !== a.indexOf(" ") ? " " : ",",
                            k = g.length,
                            l = k > 0 ? g[0].replace(s, "") : "";
                        return k
                            ? (e = b
                                  ? function (a) {
                                        var b, m, n, o;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (o = a.replace(I, "|").split("|"), n = 0; n < o.length; n++) o[n] = e(o[n]);
                                            return o.join(",");
                                        }
                                        if (((b = (a.match(pa) || [f])[0]), (m = a.split(b).join("").match(u) || []), (n = m.length), k > n--)) for (; ++n < k; ) m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                                        return h + m.join(j) + j + b + i + (-1 !== a.indexOf("inset") ? " inset" : "");
                                    }
                                  : function (a) {
                                        var b, f, m;
                                        if ("number" == typeof a) a += l;
                                        else if (d && I.test(a)) {
                                            for (f = a.replace(I, "|").split("|"), m = 0; m < f.length; m++) f[m] = e(f[m]);
                                            return f.join(",");
                                        }
                                        if (((b = a.match(u) || []), (m = b.length), k > m--)) for (; ++m < k; ) b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                                        return h + b.join(j) + i;
                                    })
                            : function (a) {
                                  return a;
                              };
                    },
                    ra = function (a) {
                        return (
                            (a = a.split(",")),
                            function (b, c, d, e, f, g, h) {
                                var i,
                                    j = (c + "").split(" ");
                                for (h = {}, i = 0; 4 > i; i++) h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
                                return e.parse(b, h, f, g);
                            }
                        );
                    },
                    sa =
                        ((S._setPluginRatio = function (a) {
                            this.plugin.setRatio(a);
                            for (var b, c, d, e, f, g = this.data, h = g.proxy, i = g.firstMPT, j = 1e-6; i; ) (b = h[i.v]), i.r ? (b = Math.round(b)) : j > b && b > -j && (b = 0), (i.t[i.p] = b), (i = i._next);
                            if ((g.autoRotate && (g.autoRotate.rotation = g.mod ? g.mod(h.rotation, this.t) : h.rotation), 1 === a || 0 === a))
                                for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                                    if (((c = i.t), c.type)) {
                                        if (1 === c.type) {
                                            for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++) e += c["xn" + d] + c["xs" + (d + 1)];
                                            c[f] = e;
                                        }
                                    } else c[f] = c.s + c.xs0;
                                    i = i._next;
                                }
                        }),
                        function (a, b, c, d, e) {
                            (this.t = a), (this.p = b), (this.v = c), (this.r = e), d && ((d._prev = this), (this._next = d));
                        }),
                    ta =
                        ((S._parseToProxy = function (a, b, c, d, e, f) {
                            var g,
                                h,
                                i,
                                j,
                                k,
                                l = d,
                                m = {},
                                n = {},
                                o = c._transform,
                                p = M;
                            for (c._transform = null, M = b, d = k = c.parse(a, b, d, e), M = p, f && ((c._transform = o), l && ((l._prev = null), l._prev && (l._prev._next = null))); d && d !== l; ) {
                                if (d.type <= 1 && ((h = d.p), (n[h] = d.s + d.c), (m[h] = d.s), f || ((j = new sa(d, "s", h, j, d.r)), (d.c = 0)), 1 === d.type))
                                    for (g = d.l; --g > 0; ) (i = "xn" + g), (h = d.p + "_" + i), (n[h] = d.data[i]), (m[h] = d[i]), f || (j = new sa(d, i, h, j, d.rxp[i]));
                                d = d._next;
                            }
                            return { proxy: m, end: n, firstMPT: j, pt: k };
                        }),
                        (S.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
                            (this.t = a),
                                (this.p = b),
                                (this.s = d),
                                (this.c = e),
                                (this.n = i || b),
                                a instanceof ta || f.push(this.n),
                                (this.r = j),
                                (this.type = h || 0),
                                k && ((this.pr = k), (c = !0)),
                                (this.b = void 0 === l ? d : l),
                                (this.e = void 0 === m ? d + e : m),
                                g && ((this._next = g), (g._prev = this));
                        })),
                    ua = function (a, b, c, d, e, f) {
                        var g = new ta(a, b, c, d - c, e, -1, f);
                        return (g.b = c), (g.e = g.xs0 = d), g;
                    },
                    va = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
                        (c = c || f || ""),
                            "function" == typeof d && (d = d(r, q)),
                            (h = new ta(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
                            (d += ""),
                            e && pa.test(d + c) && ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
                        var m,
                            n,
                            o,
                            p,
                            u,
                            v,
                            w,
                            x,
                            y,
                            z,
                            A,
                            B,
                            C,
                            D = c.split(", ").join(",").split(" "),
                            E = d.split(", ").join(",").split(" "),
                            F = D.length,
                            G = k !== !1;
                        for (
                            (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
                                (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                                    ? ((D = D.join(" ").replace(I, ", ").split(" ")), (E = E.join(" ").replace(I, ", ").split(" ")))
                                    : ((D = D.join(" ").split(",").join(", ").split(" ")), (E = E.join(" ").split(",").join(", ").split(" "))),
                                (F = D.length)),
                                F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
                                h.plugin = j,
                                h.setRatio = l,
                                pa.lastIndex = 0,
                                m = 0;
                            F > m;
                            m++
                        )
                            if (((p = D[m]), (u = E[m]), (x = parseFloat(p)), x || 0 === x)) h.appendXtra("", x, ia(u, x), u.replace(t, ""), G && -1 !== u.indexOf("px"), !0);
                            else if (e && pa.test(p))
                                (B = u.indexOf(")") + 1),
                                    (B = ")" + (B ? u.substr(B) : "")),
                                    (C = -1 !== u.indexOf("hsl") && U),
                                    (z = u),
                                    (p = na(p, C)),
                                    (u = na(u, C)),
                                    (y = p.length + u.length > 6),
                                    y && !U && 0 === u[3]
                                        ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"), (h.e = h.e.split(E[m]).join("transparent")))
                                        : (U || (y = !1),
                                          C
                                              ? h
                                                    .appendXtra(z.substr(0, z.indexOf("hsl")) + (y ? "hsla(" : "hsl("), p[0], ia(u[0], p[0]), ",", !1, !0)
                                                    .appendXtra("", p[1], ia(u[1], p[1]), "%,", !1)
                                                    .appendXtra("", p[2], ia(u[2], p[2]), y ? "%," : "%" + B, !1)
                                              : h
                                                    .appendXtra(z.substr(0, z.indexOf("rgb")) + (y ? "rgba(" : "rgb("), p[0], u[0] - p[0], ",", !0, !0)
                                                    .appendXtra("", p[1], u[1] - p[1], ",", !0)
                                                    .appendXtra("", p[2], u[2] - p[2], y ? "," : B, !0),
                                          y && ((p = p.length < 4 ? 1 : p[3]), h.appendXtra("", p, (u.length < 4 ? 1 : u[3]) - p, B, !1))),
                                    (pa.lastIndex = 0);
                            else if ((v = p.match(s))) {
                                if (((w = u.match(t)), !w || w.length !== v.length)) return h;
                                for (o = 0, n = 0; n < v.length; n++) (A = v[n]), (z = p.indexOf(A, o)), h.appendXtra(p.substr(o, z - o), Number(A), ia(w[n], A), "", G && "px" === p.substr(z + A.length, 2), 0 === n), (o = z + A.length);
                                h["xs" + h.l] += p.substr(o);
                            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
                        if (-1 !== d.indexOf("=") && h.data) {
                            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++) B += h["xs" + m] + h.data["xn" + m];
                            h.e = B + h["xs" + m];
                        }
                        return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
                    }),
                    wa = 9;
                for (j = ta.prototype, j.l = j.pr = 0; --wa > 0; ) (j["xn" + wa] = 0), (j["xs" + wa] = "");
                (j.xs0 = ""),
                    (j._next = j._prev = j.xfirst = j.data = j.plugin = j.setRatio = j.rxp = null),
                    (j.appendXtra = function (a, b, c, d, e, f) {
                        var g = this,
                            h = g.l;
                        return (
                            (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
                            c || 0 === h || g.plugin
                                ? (g.l++,
                                  (g.type = g.setRatio ? 2 : 1),
                                  (g["xs" + g.l] = d || ""),
                                  h > 0
                                      ? ((g.data["xn" + h] = b + c), (g.rxp["xn" + h] = e), (g["xn" + h] = b), g.plugin || ((g.xfirst = new ta(g, "xn" + h, b, c, g.xfirst || g, 0, g.n, e, g.pr)), (g.xfirst.xs0 = 0)), g)
                                      : ((g.data = { s: b + c }), (g.rxp = {}), (g.s = b), (g.c = c), (g.r = e), g))
                                : ((g["xs" + h] += b + (d || "")), g)
                        );
                    });
                var xa = function (a, b) {
                        (b = b || {}),
                            (this.p = b.prefix ? Z(a) || a : a),
                            (i[a] = i[this.p] = this),
                            (this.format = b.formatter || qa(b.defaultValue, b.color, b.collapsible, b.multi)),
                            b.parser && (this.parse = b.parser),
                            (this.clrs = b.color),
                            (this.multi = b.multi),
                            (this.keyword = b.keyword),
                            (this.dflt = b.defaultValue),
                            (this.pr = b.priority || 0);
                    },
                    ya = (S._registerComplexSpecialProp = function (a, b, c) {
                        "object" != typeof b && (b = { parser: c });
                        var d,
                            e,
                            f = a.split(","),
                            g = b.defaultValue;
                        for (c = c || [g], d = 0; d < f.length; d++) (b.prefix = 0 === d && b.prefix), (b.defaultValue = c[d] || g), (e = new xa(f[d], b));
                    }),
                    za = (S._registerPluginProp = function (a) {
                        if (!i[a]) {
                            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
                            ya(a, {
                                parser: function (a, c, d, e, f, g, j) {
                                    var k = h.com.greensock.plugins[b];
                                    return k ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j)) : (W("Error: " + b + " js file not loaded."), f);
                                },
                            });
                        }
                    });
                (j = xa.prototype),
                    (j.parseComplex = function (a, b, c, d, e, f) {
                        var g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = this.keyword;
                        if ((this.multi && (I.test(c) || I.test(b) ? ((h = b.replace(I, "|").split("|")), (i = c.replace(I, "|").split("|"))) : m && ((h = [b]), (i = [c]))), i)) {
                            for (j = i.length > h.length ? i.length : h.length, g = 0; j > g; g++)
                                (b = h[g] = h[g] || this.dflt), (c = i[g] = i[g] || this.dflt), m && ((k = b.indexOf(m)), (l = c.indexOf(m)), k !== l && (-1 === l ? (h[g] = h[g].split(m).join("")) : -1 === k && (h[g] += " " + m)));
                            (b = h.join(", ")), (c = i.join(", "));
                        }
                        return va(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
                    }),
                    (j.parse = function (a, b, c, d, f, g, h) {
                        return this.parseComplex(a.style, this.format(_(a, this.p, e, !1, this.dflt)), this.format(b), f, g);
                    }),
                    (g.registerSpecialProp = function (a, b, c) {
                        ya(a, {
                            parser: function (a, d, e, f, g, h, i) {
                                var j = new ta(a, e, 0, 0, g, 2, e, !1, c);
                                return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
                            },
                            priority: c,
                        });
                    }),
                    (g.useSVGTransformAttr = !0);
                var Aa,
                    Ba = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Ca = Z("transform"),
                    Da = X + "transform",
                    Ea = Z("transformOrigin"),
                    Fa = null !== Z("perspective"),
                    Ga = (S.Transform = function () {
                        (this.perspective = parseFloat(g.defaultTransformPerspective) || 0), (this.force3D = g.defaultForce3D !== !1 && Fa ? g.defaultForce3D || "auto" : !1);
                    }),
                    Ha = _gsScope.SVGElement,
                    Ia = function (a, b, c) {
                        var d,
                            e = O.createElementNS("http://www.w3.org/2000/svg", a),
                            f = /([a-z])([A-Z])/g;
                        for (d in c) e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
                        return b.appendChild(e), e;
                    },
                    Ja = O.documentElement || {},
                    Ka = (function () {
                        var a,
                            b,
                            c,
                            d = p || (/Android/i.test(T) && !_gsScope.chrome);
                        return (
                            O.createElementNS &&
                                !d &&
                                ((a = Ia("svg", Ja)),
                                (b = Ia("rect", a, { width: 100, height: 50, x: 100 })),
                                (c = b.getBoundingClientRect().width),
                                (b.style[Ea] = "50% 50%"),
                                (b.style[Ca] = "scaleX(0.5)"),
                                (d = c === b.getBoundingClientRect().width && !(n && Fa)),
                                Ja.removeChild(a)),
                            d
                        );
                    })(),
                    La = function (a, b, c, d, e, f) {
                        var h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v = a._gsTransform,
                            w = Qa(a, !0);
                        v && ((t = v.xOrigin), (u = v.yOrigin)),
                            (!d || (h = d.split(" ")).length < 2) &&
                                ((n = a.getBBox()),
                                0 === n.x &&
                                    0 === n.y &&
                                    n.width + n.height === 0 &&
                                    (n = {
                                        x: parseFloat(a.hasAttribute("x") ? a.getAttribute("x") : a.hasAttribute("cx") ? a.getAttribute("cx") : 0) || 0,
                                        y: parseFloat(a.hasAttribute("y") ? a.getAttribute("y") : a.hasAttribute("cy") ? a.getAttribute("cy") : 0) || 0,
                                        width: 0,
                                        height: 0,
                                    }),
                                (b = ha(b).split(" ")),
                                (h = [(-1 !== b[0].indexOf("%") ? (parseFloat(b[0]) / 100) * n.width : parseFloat(b[0])) + n.x, (-1 !== b[1].indexOf("%") ? (parseFloat(b[1]) / 100) * n.height : parseFloat(b[1])) + n.y])),
                            (c.xOrigin = k = parseFloat(h[0])),
                            (c.yOrigin = l = parseFloat(h[1])),
                            d &&
                                w !== Pa &&
                                ((m = w[0]),
                                (n = w[1]),
                                (o = w[2]),
                                (p = w[3]),
                                (q = w[4]),
                                (r = w[5]),
                                (s = m * p - n * o),
                                s && ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s), (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s), (k = c.xOrigin = h[0] = i), (l = c.yOrigin = h[1] = j))),
                            v &&
                                (f && ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
                                e || (e !== !1 && g.defaultSmoothOrigin !== !1) ? ((i = k - t), (j = l - u), (v.xOffset += i * w[0] + j * w[2] - i), (v.yOffset += i * w[1] + j * w[3] - j)) : (v.xOffset = v.yOffset = 0)),
                            f || a.setAttribute("data-svg-origin", h.join(" "));
                    },
                    Ma = function (a) {
                        var b,
                            c = P("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                            d = this.parentNode,
                            e = this.nextSibling,
                            f = this.style.cssText;
                        if ((Ja.appendChild(c), c.appendChild(this), (this.style.display = "block"), a))
                            try {
                                (b = this.getBBox()), (this._originalGetBBox = this.getBBox), (this.getBBox = Ma);
                            } catch (g) {}
                        else this._originalGetBBox && (b = this._originalGetBBox());
                        return e ? d.insertBefore(this, e) : d.appendChild(this), Ja.removeChild(c), (this.style.cssText = f), b;
                    },
                    Na = function (a) {
                        try {
                            return a.getBBox();
                        } catch (b) {
                            return Ma.call(a, !0);
                        }
                    },
                    Oa = function (a) {
                        return !(!Ha || !a.getCTM || (a.parentNode && !a.ownerSVGElement) || !Na(a));
                    },
                    Pa = [1, 0, 0, 1, 0, 0],
                    Qa = function (a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i = a._gsTransform || new Ga(),
                            j = 1e5,
                            k = a.style;
                        if (
                            (Ca
                                ? (d = _(a, Da, null, !0))
                                : a.currentStyle && ((d = a.currentStyle.filter.match(G)), (d = d && 4 === d.length ? [d[0].substr(4), Number(d[2].substr(4)), Number(d[1].substr(4)), d[3].substr(4), i.x || 0, i.y || 0].join(",") : "")),
                            (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                            !Ca ||
                                (!(h = !$(a) || "none" === $(a).display) && a.parentNode) ||
                                (h && ((f = k.display), (k.display = "block")),
                                a.parentNode || ((g = 1), Ja.appendChild(a)),
                                (d = _(a, Da, null, !0)),
                                (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
                                f ? (k.display = f) : h && Va(k, "display"),
                                g && Ja.removeChild(a)),
                            (i.svg || (a.getCTM && Oa(a))) &&
                                (c && -1 !== (k[Ca] + "").indexOf("matrix") && ((d = k[Ca]), (c = 0)),
                                (e = a.getAttribute("transform")),
                                c && e && ((e = a.transform.baseVal.consolidate().matrix), (d = "matrix(" + e.a + "," + e.b + "," + e.c + "," + e.d + "," + e.e + "," + e.f + ")"), (c = 0))),
                            c)
                        )
                            return Pa;
                        for (e = (d || "").match(s) || [], wa = e.length; --wa > -1; ) (f = Number(e[wa])), (e[wa] = (g = f - (f |= 0)) ? ((g * j + (0 > g ? -0.5 : 0.5)) | 0) / j + f : f);
                        return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
                    },
                    Ra = (S.getTransform = function (a, c, d, e) {
                        if (a._gsTransform && d && !e) return a._gsTransform;
                        var f,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m = d ? a._gsTransform || new Ga() : new Ga(),
                            n = m.scaleX < 0,
                            o = 2e-5,
                            p = 1e5,
                            q = Fa ? parseFloat(_(a, Ea, c, !1, "0 0 0").split(" ")[2]) || m.zOrigin || 0 : 0,
                            r = parseFloat(g.defaultTransformPerspective) || 0;
                        if (((m.svg = !(!a.getCTM || !Oa(a))), m.svg && (La(a, _(a, Ea, c, !1, "50% 50%") + "", m, a.getAttribute("data-svg-origin")), (Aa = g.useSVGTransformAttr || Ka)), (f = Qa(a)), f !== Pa)) {
                            if (16 === f.length) {
                                var s,
                                    t,
                                    u,
                                    v,
                                    w,
                                    x = f[0],
                                    y = f[1],
                                    z = f[2],
                                    A = f[3],
                                    B = f[4],
                                    C = f[5],
                                    D = f[6],
                                    E = f[7],
                                    F = f[8],
                                    G = f[9],
                                    H = f[10],
                                    I = f[12],
                                    J = f[13],
                                    K = f[14],
                                    M = f[11],
                                    N = Math.atan2(D, H);
                                m.zOrigin && ((K = -m.zOrigin), (I = F * K - f[12]), (J = G * K - f[13]), (K = H * K + m.zOrigin - f[14])),
                                    (m.rotationX = N * L),
                                    N &&
                                        ((v = Math.cos(-N)),
                                        (w = Math.sin(-N)),
                                        (s = B * v + F * w),
                                        (t = C * v + G * w),
                                        (u = D * v + H * w),
                                        (F = B * -w + F * v),
                                        (G = C * -w + G * v),
                                        (H = D * -w + H * v),
                                        (M = E * -w + M * v),
                                        (B = s),
                                        (C = t),
                                        (D = u)),
                                    (N = Math.atan2(-z, H)),
                                    (m.rotationY = N * L),
                                    N && ((v = Math.cos(-N)), (w = Math.sin(-N)), (s = x * v - F * w), (t = y * v - G * w), (u = z * v - H * w), (G = y * w + G * v), (H = z * w + H * v), (M = A * w + M * v), (x = s), (y = t), (z = u)),
                                    (N = Math.atan2(y, x)),
                                    (m.rotation = N * L),
                                    N && ((v = Math.cos(N)), (w = Math.sin(N)), (s = x * v + y * w), (t = B * v + C * w), (u = F * v + G * w), (y = y * v - x * w), (C = C * v - B * w), (G = G * v - F * w), (x = s), (B = t), (F = u)),
                                    m.rotationX && Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 && ((m.rotationX = m.rotation = 0), (m.rotationY = 180 - m.rotationY)),
                                    (N = Math.atan2(B, C)),
                                    (m.scaleX = ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                                    (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                                    (m.scaleZ = ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                                    (x /= m.scaleX),
                                    (B /= m.scaleY),
                                    (y /= m.scaleX),
                                    (C /= m.scaleY),
                                    Math.abs(N) > o ? ((m.skewX = N * L), (B = 0), "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N))) : (m.skewX = 0),
                                    (m.perspective = M ? 1 / (0 > M ? -M : M) : 0),
                                    (m.x = I),
                                    (m.y = J),
                                    (m.z = K),
                                    m.svg && ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)), (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
                            } else if (!Fa || e || !f.length || m.x !== f[4] || m.y !== f[5] || (!m.rotationX && !m.rotationY)) {
                                var O = f.length >= 6,
                                    P = O ? f[0] : 1,
                                    Q = f[1] || 0,
                                    R = f[2] || 0,
                                    S = O ? f[3] : 1;
                                (m.x = f[4] || 0),
                                    (m.y = f[5] || 0),
                                    (i = Math.sqrt(P * P + Q * Q)),
                                    (j = Math.sqrt(S * S + R * R)),
                                    (k = P || Q ? Math.atan2(Q, P) * L : m.rotation || 0),
                                    (l = R || S ? Math.atan2(R, S) * L + k : m.skewX || 0),
                                    (m.scaleX = i),
                                    (m.scaleY = j),
                                    (m.rotation = k),
                                    (m.skewX = l),
                                    Fa && ((m.rotationX = m.rotationY = m.z = 0), (m.perspective = r), (m.scaleZ = 1)),
                                    m.svg && ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)), (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
                            }
                            Math.abs(m.skewX) > 90 &&
                                Math.abs(m.skewX) < 270 &&
                                (n ? ((m.scaleX *= -1), (m.skewX += m.rotation <= 0 ? 180 : -180), (m.rotation += m.rotation <= 0 ? 180 : -180)) : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
                                (m.zOrigin = q);
                            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
                        }
                        return (
                            d &&
                                ((a._gsTransform = m),
                                m.svg &&
                                    (Aa && a.style[Ca]
                                        ? b.delayedCall(0.001, function () {
                                              Va(a.style, Ca);
                                          })
                                        : !Aa &&
                                          a.getAttribute("transform") &&
                                          b.delayedCall(0.001, function () {
                                              a.removeAttribute("transform");
                                          }))),
                            m
                        );
                    }),
                    Sa = function (a) {
                        var b,
                            c,
                            d = this.data,
                            e = -d.rotation * K,
                            f = e + d.skewX * K,
                            g = 1e5,
                            h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
                            i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
                            j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
                            k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
                            l = this.t.style,
                            m = this.t.currentStyle;
                        if (m) {
                            (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
                            var n,
                                o,
                                q = this.t.offsetWidth,
                                r = this.t.offsetHeight,
                                s = "absolute" !== m.position,
                                t = "progid:DXImageTransform.Microsoft.Matrix(M11=" + h + ", M12=" + i + ", M21=" + j + ", M22=" + k,
                                u = d.x + (q * d.xPercent) / 100,
                                v = d.y + (r * d.yPercent) / 100;
                            if (
                                (null != d.ox && ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2), (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2), (u += n - (n * h + o * i)), (v += o - (n * j + o * k))),
                                s ? ((n = q / 2), (o = r / 2), (t += ", Dx=" + (n - (n * h + o * i) + u) + ", Dy=" + (o - (n * j + o * k) + v) + ")")) : (t += ", sizingMethod='auto expand')"),
                                -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(") ? (l.filter = b.replace(H, t)) : (l.filter = t + " " + b),
                                (0 === a || 1 === a) &&
                                    1 === h &&
                                    0 === i &&
                                    0 === j &&
                                    1 === k &&
                                    ((s && -1 === t.indexOf("Dx=0, Dy=0")) || (x.test(b) && 100 !== parseFloat(RegExp.$1)) || (-1 === b.indexOf(b.indexOf("Alpha")) && l.removeAttribute("filter"))),
                                !s)
                            ) {
                                var y,
                                    z,
                                    A,
                                    B = 8 > p ? 1 : -1;
                                for (
                                    n = d.ieOffsetX || 0,
                                        o = d.ieOffsetY || 0,
                                        d.ieOffsetX = Math.round((q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u),
                                        d.ieOffsetY = Math.round((r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v),
                                        wa = 0;
                                    4 > wa;
                                    wa++
                                )
                                    (z = fa[wa]),
                                        (y = m[z]),
                                        (c = -1 !== y.indexOf("px") ? parseFloat(y) : aa(this.t, z, parseFloat(y), y.replace(w, "")) || 0),
                                        (A = c !== d[z] ? (2 > wa ? -d.ieOffsetX : -d.ieOffsetY) : 2 > wa ? n - d.ieOffsetX : o - d.ieOffsetY),
                                        (l[z] = (d[z] = Math.round(c - A * (0 === wa || 2 === wa ? 1 : B))) + "px");
                            }
                        }
                    },
                    Ta = (S.set3DTransformRatio = S.setTransformRatio = function (a) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            o,
                            p,
                            q,
                            r,
                            s,
                            t,
                            u,
                            v,
                            w,
                            x,
                            y,
                            z = this.data,
                            A = this.t.style,
                            B = z.rotation,
                            C = z.rotationX,
                            D = z.rotationY,
                            E = z.scaleX,
                            F = z.scaleY,
                            G = z.scaleZ,
                            H = z.x,
                            I = z.y,
                            J = z.z,
                            L = z.svg,
                            M = z.perspective,
                            N = z.force3D,
                            O = z.skewY,
                            P = z.skewX;
                        if (
                            (O && ((P += O), (B += O)),
                            ((((1 === a || 0 === a) && "auto" === N && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !N) && !J && !M && !D && !C && 1 === G) || (Aa && L) || !Fa)
                        )
                            return void (B || P || L
                                ? ((B *= K),
                                  (x = P * K),
                                  (y = 1e5),
                                  (c = Math.cos(B) * E),
                                  (f = Math.sin(B) * E),
                                  (d = Math.sin(B - x) * -F),
                                  (g = Math.cos(B - x) * F),
                                  x && "simple" === z.skewType && ((b = Math.tan(x - O * K)), (b = Math.sqrt(1 + b * b)), (d *= b), (g *= b), O && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b))),
                                  L &&
                                      ((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset),
                                      (I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset),
                                      Aa && (z.xPercent || z.yPercent) && ((q = this.t.getBBox()), (H += 0.01 * z.xPercent * q.width), (I += 0.01 * z.yPercent * q.height)),
                                      (q = 1e-6),
                                      q > H && H > -q && (H = 0),
                                      q > I && I > -q && (I = 0)),
                                  (u = ((c * y) | 0) / y + "," + ((f * y) | 0) / y + "," + ((d * y) | 0) / y + "," + ((g * y) | 0) / y + "," + H + "," + I + ")"),
                                  L && Aa ? this.t.setAttribute("transform", "matrix(" + u) : (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + u))
                                : (A[Ca] = (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix(" : "matrix(") + E + ",0,0," + F + "," + H + "," + I + ")"));
                        if ((n && ((q = 1e-4), q > E && E > -q && (E = G = 2e-5), q > F && F > -q && (F = G = 2e-5), !M || z.z || z.rotationX || z.rotationY || (M = 0)), B || P))
                            (B *= K),
                                (r = c = Math.cos(B)),
                                (s = f = Math.sin(B)),
                                P &&
                                    ((B -= P * K),
                                    (r = Math.cos(B)),
                                    (s = Math.sin(B)),
                                    "simple" === z.skewType && ((b = Math.tan((P - O) * K)), (b = Math.sqrt(1 + b * b)), (r *= b), (s *= b), z.skewY && ((b = Math.tan(O * K)), (b = Math.sqrt(1 + b * b)), (c *= b), (f *= b)))),
                                (d = -s),
                                (g = r);
                        else {
                            if (!(D || C || 1 !== G || M || L))
                                return void (A[Ca] =
                                    (z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) translate3d(" : "translate3d(") +
                                    H +
                                    "px," +
                                    I +
                                    "px," +
                                    J +
                                    "px)" +
                                    (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                            (c = g = 1), (d = f = 0);
                        }
                        (k = 1),
                            (e = h = i = j = l = m = 0),
                            (o = M ? -1 / M : 0),
                            (p = z.zOrigin),
                            (q = 1e-6),
                            (v = ","),
                            (w = "0"),
                            (B = D * K),
                            B && ((r = Math.cos(B)), (s = Math.sin(B)), (i = -s), (l = o * -s), (e = c * s), (h = f * s), (k = r), (o *= r), (c *= r), (f *= r)),
                            (B = C * K),
                            B && ((r = Math.cos(B)), (s = Math.sin(B)), (b = d * r + e * s), (t = g * r + h * s), (j = k * s), (m = o * s), (e = d * -s + e * r), (h = g * -s + h * r), (k *= r), (o *= r), (d = b), (g = t)),
                            1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                            1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                            1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                            (p || L) &&
                                (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                                L && ((H += z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset), (I += z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset)),
                                q > H && H > -q && (H = w),
                                q > I && I > -q && (I = w),
                                q > J && J > -q && (J = 0)),
                            (u = z.xPercent || z.yPercent ? "translate(" + z.xPercent + "%," + z.yPercent + "%) matrix3d(" : "matrix3d("),
                            (u += (q > c && c > -q ? w : c) + v + (q > f && f > -q ? w : f) + v + (q > i && i > -q ? w : i)),
                            (u += v + (q > l && l > -q ? w : l) + v + (q > d && d > -q ? w : d) + v + (q > g && g > -q ? w : g)),
                            C || D || 1 !== G
                                ? ((u += v + (q > j && j > -q ? w : j) + v + (q > m && m > -q ? w : m) + v + (q > e && e > -q ? w : e)),
                                  (u += v + (q > h && h > -q ? w : h) + v + (q > k && k > -q ? w : k) + v + (q > o && o > -q ? w : o) + v))
                                : (u += ",0,0,0,0,1,0,"),
                            (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                            (A[Ca] = u);
                    });
                (j = Ga.prototype),
                    (j.x = j.y = j.z = j.skewX = j.skewY = j.rotation = j.rotationX = j.rotationY = j.zOrigin = j.xPercent = j.yPercent = j.xOffset = j.yOffset = 0),
                    (j.scaleX = j.scaleY = j.scaleZ = 1),
                    ya(
                        "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                        {
                            parser: function (a, b, c, d, f, h, i) {
                                if (d._lastParsedTransform === i) return f;
                                d._lastParsedTransform = i;
                                var j,
                                    k = i.scale && "function" == typeof i.scale ? i.scale : 0;
                                "function" == typeof i[c] && ((j = i[c]), (i[c] = b)), k && (i.scale = k(r, a));
                                var l,
                                    m,
                                    n,
                                    o,
                                    p,
                                    s,
                                    t,
                                    u,
                                    v,
                                    w = a._gsTransform,
                                    x = a.style,
                                    y = 1e-6,
                                    z = Ba.length,
                                    A = i,
                                    B = {},
                                    C = "transformOrigin",
                                    D = Ra(a, e, !0, A.parseTransform),
                                    E = A.transform && ("function" == typeof A.transform ? A.transform(r, q) : A.transform);
                                if (((D.skewType = A.skewType || D.skewType || g.defaultSkewType), (d._transform = D), E && "string" == typeof E && Ca))
                                    (m = Q.style),
                                        (m[Ca] = E),
                                        (m.display = "block"),
                                        (m.position = "absolute"),
                                        O.body.appendChild(Q),
                                        (l = Ra(Q, null, !1)),
                                        "simple" === D.skewType && (l.scaleY *= Math.cos(l.skewX * K)),
                                        D.svg &&
                                            ((s = D.xOrigin),
                                            (t = D.yOrigin),
                                            (l.x -= D.xOffset),
                                            (l.y -= D.yOffset),
                                            (A.transformOrigin || A.svgOrigin) &&
                                                ((E = {}), La(a, ha(A.transformOrigin), E, A.svgOrigin, A.smoothOrigin, !0), (s = E.xOrigin), (t = E.yOrigin), (l.x -= E.xOffset - D.xOffset), (l.y -= E.yOffset - D.yOffset)),
                                            (s || t) && ((u = Qa(Q, !0)), (l.x -= s - (s * u[0] + t * u[2])), (l.y -= t - (s * u[1] + t * u[3])))),
                                        O.body.removeChild(Q),
                                        l.perspective || (l.perspective = D.perspective),
                                        null != A.xPercent && (l.xPercent = ja(A.xPercent, D.xPercent)),
                                        null != A.yPercent && (l.yPercent = ja(A.yPercent, D.yPercent));
                                else if ("object" == typeof A) {
                                    if (
                                        ((l = {
                                            scaleX: ja(null != A.scaleX ? A.scaleX : A.scale, D.scaleX),
                                            scaleY: ja(null != A.scaleY ? A.scaleY : A.scale, D.scaleY),
                                            scaleZ: ja(A.scaleZ, D.scaleZ),
                                            x: ja(A.x, D.x),
                                            y: ja(A.y, D.y),
                                            z: ja(A.z, D.z),
                                            xPercent: ja(A.xPercent, D.xPercent),
                                            yPercent: ja(A.yPercent, D.yPercent),
                                            perspective: ja(A.transformPerspective, D.perspective),
                                        }),
                                        (p = A.directionalRotation),
                                        null != p)
                                    )
                                        if ("object" == typeof p) for (m in p) A[m] = p[m];
                                        else A.rotation = p;
                                    "string" == typeof A.x && -1 !== A.x.indexOf("%") && ((l.x = 0), (l.xPercent = ja(A.x, D.xPercent))),
                                        "string" == typeof A.y && -1 !== A.y.indexOf("%") && ((l.y = 0), (l.yPercent = ja(A.y, D.yPercent))),
                                        (l.rotation = ka("rotation" in A ? A.rotation : "shortRotation" in A ? A.shortRotation + "_short" : "rotationZ" in A ? A.rotationZ : D.rotation, D.rotation, "rotation", B)),
                                        Fa &&
                                            ((l.rotationX = ka("rotationX" in A ? A.rotationX : "shortRotationX" in A ? A.shortRotationX + "_short" : D.rotationX || 0, D.rotationX, "rotationX", B)),
                                            (l.rotationY = ka("rotationY" in A ? A.rotationY : "shortRotationY" in A ? A.shortRotationY + "_short" : D.rotationY || 0, D.rotationY, "rotationY", B))),
                                        (l.skewX = ka(A.skewX, D.skewX)),
                                        (l.skewY = ka(A.skewY, D.skewY));
                                }
                                for (
                                    Fa && null != A.force3D && ((D.force3D = A.force3D), (o = !0)),
                                        n = D.force3D || D.z || D.rotationX || D.rotationY || l.z || l.rotationX || l.rotationY || l.perspective,
                                        n || null == A.scale || (l.scaleZ = 1);
                                    --z > -1;

                                )
                                    (v = Ba[z]),
                                        (E = l[v] - D[v]),
                                        (E > y || -y > E || null != A[v] || null != M[v]) && ((o = !0), (f = new ta(D, v, D[v], E, f)), v in B && (f.e = B[v]), (f.xs0 = 0), (f.plugin = h), d._overwriteProps.push(f.n));
                                return (
                                    (E = A.transformOrigin),
                                    D.svg &&
                                        (E || A.svgOrigin) &&
                                        ((s = D.xOffset),
                                        (t = D.yOffset),
                                        La(a, ha(E), l, A.svgOrigin, A.smoothOrigin),
                                        (f = ua(D, "xOrigin", (w ? D : l).xOrigin, l.xOrigin, f, C)),
                                        (f = ua(D, "yOrigin", (w ? D : l).yOrigin, l.yOrigin, f, C)),
                                        (s !== D.xOffset || t !== D.yOffset) && ((f = ua(D, "xOffset", w ? s : D.xOffset, D.xOffset, f, C)), (f = ua(D, "yOffset", w ? t : D.yOffset, D.yOffset, f, C))),
                                        (E = "0px 0px")),
                                    (E || (Fa && n && D.zOrigin)) &&
                                        (Ca
                                            ? ((o = !0),
                                              (v = Ea),
                                              (E = (E || _(a, v, e, !1, "50% 50%")) + ""),
                                              (f = new ta(x, v, 0, 0, f, -1, C)),
                                              (f.b = x[v]),
                                              (f.plugin = h),
                                              Fa
                                                  ? ((m = D.zOrigin),
                                                    (E = E.split(" ")),
                                                    (D.zOrigin = (E.length > 2 && (0 === m || "0px" !== E[2]) ? parseFloat(E[2]) : m) || 0),
                                                    (f.xs0 = f.e = E[0] + " " + (E[1] || "50%") + " 0px"),
                                                    (f = new ta(D, "zOrigin", 0, 0, f, -1, f.n)),
                                                    (f.b = m),
                                                    (f.xs0 = f.e = D.zOrigin))
                                                  : (f.xs0 = f.e = E))
                                            : ha(E + "", D)),
                                    o && (d._transformType = (D.svg && Aa) || (!n && 3 !== this._transformType) ? 2 : 3),
                                    j && (i[c] = j),
                                    k && (i.scale = k),
                                    f
                                );
                            },
                            prefix: !0,
                        }
                    ),
                    ya("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
                    ya("borderRadius", {
                        defaultValue: "0px",
                        parser: function (a, b, c, f, g, h) {
                            b = this.format(b);
                            var i,
                                j,
                                k,
                                l,
                                m,
                                n,
                                o,
                                p,
                                q,
                                r,
                                s,
                                t,
                                u,
                                v,
                                w,
                                x,
                                y = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                z = a.style;
                            for (q = parseFloat(a.offsetWidth), r = parseFloat(a.offsetHeight), i = b.split(" "), j = 0; j < y.length; j++)
                                this.p.indexOf("border") && (y[j] = Z(y[j])),
                                    (m = l = _(a, y[j], e, !1, "0px")),
                                    -1 !== m.indexOf(" ") && ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                                    (n = k = i[j]),
                                    (o = parseFloat(m)),
                                    (t = m.substr((o + "").length)),
                                    (u = "=" === n.charAt(1)),
                                    u ? ((p = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (p *= parseFloat(n)), (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || "")) : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                                    "" === s && (s = d[c] || t),
                                    s !== t &&
                                        ((v = aa(a, "borderLeft", o, t)),
                                        (w = aa(a, "borderTop", o, t)),
                                        "%" === s ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%")) : "em" === s ? ((x = aa(a, "borderLeft", 1, "em")), (m = v / x + "em"), (l = w / x + "em")) : ((m = v + "px"), (l = w + "px")),
                                        u && ((n = parseFloat(m) + p + s), (k = parseFloat(l) + p + s))),
                                    (g = va(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
                            return g;
                        },
                        prefix: !0,
                        formatter: qa("0px 0px 0px 0px", !1, !0),
                    }),
                    ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function (a, b, c, d, f, g) {
                            return va(a.style, c, this.format(_(a, c, e, !1, "0px 0px")), this.format(b), !1, "0px", f);
                        },
                        prefix: !0,
                        formatter: qa("0px 0px", !1, !0),
                    }),
                    ya("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function (a, b, c, d, f, g) {
                            var h,
                                i,
                                j,
                                k,
                                l,
                                m,
                                n = "background-position",
                                o = e || $(a, null),
                                q = this.format((o ? (p ? o.getPropertyValue(n + "-x") + " " + o.getPropertyValue(n + "-y") : o.getPropertyValue(n)) : a.currentStyle.backgroundPositionX + " " + a.currentStyle.backgroundPositionY) || "0 0"),
                                r = this.format(b);
                            if ((-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) && r.split(",").length < 2 && ((m = _(a, "backgroundImage").replace(D, "")), m && "none" !== m)) {
                                for (h = q.split(" "), i = r.split(" "), R.setAttribute("src", m), j = 2; --j > -1; )
                                    (q = h[j]),
                                        (k = -1 !== q.indexOf("%")),
                                        k !== (-1 !== i[j].indexOf("%")) && ((l = 0 === j ? a.offsetWidth - R.width : a.offsetHeight - R.height), (h[j] = k ? (parseFloat(q) / 100) * l + "px" : (parseFloat(q) / l) * 100 + "%"));
                                q = h.join(" ");
                            }
                            return this.parseComplex(a.style, q, r, f, g);
                        },
                        formatter: ha,
                    }),
                    ya("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function (a) {
                            return (a += ""), ha(-1 === a.indexOf(" ") ? a + " " + a : a);
                        },
                    }),
                    ya("perspective", { defaultValue: "0px", prefix: !0 }),
                    ya("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
                    ya("transformStyle", { prefix: !0 }),
                    ya("backfaceVisibility", { prefix: !0 }),
                    ya("userSelect", { prefix: !0 }),
                    ya("margin", { parser: ra("marginTop,marginRight,marginBottom,marginLeft") }),
                    ya("padding", { parser: ra("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
                    ya("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function (a, b, c, d, f, g) {
                            var h, i, j;
                            return (
                                9 > p
                                    ? ((i = a.currentStyle), (j = 8 > p ? " " : ","), (h = "rect(" + i.clipTop + j + i.clipRight + j + i.clipBottom + j + i.clipLeft + ")"), (b = this.format(b).split(",").join(j)))
                                    : ((h = this.format(_(a, this.p, e, !1, this.dflt))), (b = this.format(b))),
                                this.parseComplex(a.style, h, b, f, g)
                            );
                        },
                    }),
                    ya("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
                    ya("autoRound,strictUnits", {
                        parser: function (a, b, c, d, e) {
                            return e;
                        },
                    }),
                    ya("border", {
                        defaultValue: "0px solid #000",
                        parser: function (a, b, c, d, f, g) {
                            var h = _(a, "borderTopWidth", e, !1, "0px"),
                                i = this.format(b).split(" "),
                                j = i[0].replace(w, "");
                            return (
                                "px" !== j && (h = parseFloat(h) / aa(a, "borderTopWidth", 1, j) + j),
                                this.parseComplex(a.style, this.format(h + " " + _(a, "borderTopStyle", e, !1, "solid") + " " + _(a, "borderTopColor", e, !1, "#000")), i.join(" "), f, g)
                            );
                        },
                        color: !0,
                        formatter: function (a) {
                            var b = a.split(" ");
                            return b[0] + " " + (b[1] || "solid") + " " + (a.match(pa) || ["#000"])[0];
                        },
                    }),
                    ya("borderWidth", { parser: ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
                    ya("float,cssFloat,styleFloat", {
                        parser: function (a, b, c, d, e, f) {
                            var g = a.style,
                                h = "cssFloat" in g ? "cssFloat" : "styleFloat";
                            return new ta(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
                        },
                    });
                var Ua = function (a) {
                    var b,
                        c = this.t,
                        d = c.filter || _(this.data, "filter") || "",
                        e = (this.s + this.c * a) | 0;
                    100 === e && (-1 === d.indexOf("atrix(") && -1 === d.indexOf("radient(") && -1 === d.indexOf("oader(") ? (c.removeAttribute("filter"), (b = !_(this.data, "filter"))) : ((c.filter = d.replace(z, "")), (b = !0))),
                        b || (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"), -1 === d.indexOf("pacity") ? (0 === e && this.xn1) || (c.filter = d + " alpha(opacity=" + e + ")") : (c.filter = d.replace(x, "opacity=" + e)));
                };
                ya("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function (a, b, c, d, f, g) {
                        var h = parseFloat(_(a, "opacity", e, !1, "1")),
                            i = a.style,
                            j = "autoAlpha" === c;
                        return (
                            "string" == typeof b && "=" === b.charAt(1) && (b = ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
                            j && 1 === h && "hidden" === _(a, "visibility", e) && 0 !== b && (h = 0),
                            U
                                ? (f = new ta(i, "opacity", h, b - h, f))
                                : ((f = new ta(i, "opacity", 100 * h, 100 * (b - h), f)),
                                  (f.xn1 = j ? 1 : 0),
                                  (i.zoom = 1),
                                  (f.type = 2),
                                  (f.b = "alpha(opacity=" + f.s + ")"),
                                  (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                                  (f.data = a),
                                  (f.plugin = g),
                                  (f.setRatio = Ua)),
                            j && ((f = new ta(i, "visibility", 0, 0, f, -1, null, !1, 0, 0 !== h ? "inherit" : "hidden", 0 === b ? "hidden" : "inherit")), (f.xs0 = "inherit"), d._overwriteProps.push(f.n), d._overwriteProps.push(c)),
                            f
                        );
                    },
                });
                var Va = function (a, b) {
                        b && (a.removeProperty ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) && (b = "-" + b), a.removeProperty(b.replace(B, "-$1").toLowerCase())) : a.removeAttribute(b));
                    },
                    Wa = function (a) {
                        if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
                            this.t.setAttribute("class", 0 === a ? this.b : this.e);
                            for (var b = this.data, c = this.t.style; b; ) b.v ? (c[b.p] = b.v) : Va(c, b.p), (b = b._next);
                            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
                    };
                ya("className", {
                    parser: function (a, b, d, f, g, h, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o = a.getAttribute("class") || "",
                            p = a.style.cssText;
                        if (((g = f._classNamePT = new ta(a, d, 0, 0, g, 2)), (g.setRatio = Wa), (g.pr = -11), (c = !0), (g.b = o), (k = ca(a, e)), (l = a._gsClassPT))) {
                            for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
                            l.setRatio(1);
                        }
                        return (
                            (a._gsClassPT = g),
                            (g.e = "=" !== b.charAt(1) ? b : o.replace(new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"), "") + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
                            a.setAttribute("class", g.e),
                            (j = da(a, k, ca(a), i, m)),
                            a.setAttribute("class", o),
                            (g.data = j.firstMPT),
                            (a.style.cssText = p),
                            (g = g.xfirst = f.parse(a, j.difs, g, h))
                        );
                    },
                });
                var Xa = function (a) {
                    if ((1 === a || 0 === a) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var b,
                            c,
                            d,
                            e,
                            f,
                            g = this.t.style,
                            h = i.transform.parse;
                        if ("all" === this.e) (g.cssText = ""), (e = !0);
                        else for (b = this.e.split(" ").join("").split(","), d = b.length; --d > -1; ) (c = b[d]), i[c] && (i[c].parse === h ? (e = !0) : (c = "transformOrigin" === c ? Ea : i[c].p)), Va(g, c);
                        e && (Va(g, Ca), (f = this.t._gsTransform), f && (f.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform));
                    }
                };
                for (
                    ya("clearProps", {
                        parser: function (a, b, d, e, f) {
                            return (f = new ta(a, d, 0, 0, f, 2)), (f.setRatio = Xa), (f.e = b), (f.pr = -10), (f.data = e._tween), (c = !0), f;
                        },
                    }),
                        j = "bezier,throwProps,physicsProps,physics2D".split(","),
                        wa = j.length;
                    wa--;

                )
                    za(j[wa]);
                (j = g.prototype),
                    (j._firstPT = j._lastParsedTransform = j._transform = null),
                    (j._onInitTween = function (a, b, h, j) {
                        if (!a.nodeType) return !1;
                        (this._target = q = a), (this._tween = h), (this._vars = b), (r = j), (k = b.autoRound), (c = !1), (d = b.suffixMap || g.suffixMap), (e = $(a, "")), (f = this._overwriteProps);
                        var n,
                            p,
                            s,
                            t,
                            u,
                            v,
                            w,
                            x,
                            z,
                            A = a.style;
                        if (
                            (l && "" === A.zIndex && ((n = _(a, "zIndex", e)), ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
                            "string" == typeof b && ((t = A.cssText), (n = ca(a, e)), (A.cssText = t + ";" + b), (n = da(a, n, ca(a)).difs), !U && y.test(b) && (n.opacity = parseFloat(RegExp.$1)), (b = n), (A.cssText = t)),
                            b.className ? (this._firstPT = p = i.className.parse(a, b.className, "className", this, null, null, b)) : (this._firstPT = p = this.parse(a, b, null)),
                            this._transformType)
                        ) {
                            for (
                                z = 3 === this._transformType,
                                    Ca
                                        ? m &&
                                          ((l = !0),
                                          "" === A.zIndex && ((w = _(a, "zIndex", e)), ("auto" === w || "" === w) && this._addLazySet(A, "zIndex", 0)),
                                          o && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (z ? "visible" : "hidden")))
                                        : (A.zoom = 1),
                                    s = p;
                                s && s._next;

                            )
                                s = s._next;
                            (x = new ta(a, "transform", 0, 0, null, 2)), this._linkCSSP(x, null, s), (x.setRatio = Ca ? Ta : Sa), (x.data = this._transform || Ra(a, e, !0)), (x.tween = h), (x.pr = -1), f.pop();
                        }
                        if (c) {
                            for (; p; ) {
                                for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
                                (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p), (p._next = s) ? (s._prev = p) : (u = p), (p = v);
                            }
                            this._firstPT = t;
                        }
                        return !0;
                    }),
                    (j.parse = function (a, b, c, f) {
                        var g,
                            h,
                            j,
                            l,
                            m,
                            n,
                            o,
                            p,
                            s,
                            t,
                            u = a.style;
                        for (g in b) {
                            if (((n = b[g]), "function" == typeof n && (n = n(r, q)), (h = i[g]))) c = h.parse(a, n, g, this, c, f, b);
                            else {
                                if ("--" === g.substr(0, 2)) {
                                    this._tween._propLookup[g] = this._addTween.call(this._tween, a.style, "setProperty", $(a).getPropertyValue(g) + "", n + "", g, !1, g);
                                    continue;
                                }
                                (m = _(a, g, e) + ""),
                                    (s = "string" == typeof n),
                                    "color" === g || "fill" === g || "stroke" === g || -1 !== g.indexOf("Color") || (s && A.test(n))
                                        ? (s || ((n = na(n)), (n = (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")")), (c = va(u, g, m, n, !0, "transparent", c, 0, f)))
                                        : s && J.test(n)
                                        ? (c = va(u, g, m, n, !0, null, c, 0, f))
                                        : ((j = parseFloat(m)),
                                          (o = j || 0 === j ? m.substr((j + "").length) : ""),
                                          ("" === m || "auto" === m) &&
                                              ("width" === g || "height" === g ? ((j = ga(a, g, e)), (o = "px")) : "left" === g || "top" === g ? ((j = ba(a, g, e)), (o = "px")) : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                                          (t = s && "=" === n.charAt(1)),
                                          t ? ((l = parseInt(n.charAt(0) + "1", 10)), (n = n.substr(2)), (l *= parseFloat(n)), (p = n.replace(w, ""))) : ((l = parseFloat(n)), (p = s ? n.replace(w, "") : "")),
                                          "" === p && (p = g in d ? d[g] : o),
                                          (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                                          o !== p &&
                                              ("" !== p || "lineHeight" === g) &&
                                              (l || 0 === l) &&
                                              j &&
                                              ((j = aa(a, g, j, o)),
                                              "%" === p
                                                  ? ((j /= aa(a, g, 100, "%") / 100), b.strictUnits !== !0 && (m = j + "%"))
                                                  : "em" === p || "rem" === p || "vw" === p || "vh" === p
                                                  ? (j /= aa(a, g, 1, p))
                                                  : "px" !== p && ((l = aa(a, g, l, p)), (p = "px")),
                                              t && (l || 0 === l) && (n = l + j + p)),
                                          t && (l += j),
                                          (!j && 0 !== j) || (!l && 0 !== l)
                                              ? void 0 !== u[g] && (n || (n + "" != "NaN" && null != n))
                                                  ? ((c = new ta(u, g, l || j || 0, 0, c, -1, g, !1, 0, m, n)), (c.xs0 = "none" !== n || ("display" !== g && -1 === g.indexOf("Style")) ? n : m))
                                                  : W("invalid " + g + " tween value: " + b[g])
                                              : ((c = new ta(u, g, j, l - j, c, 0, g, k !== !1 && ("px" === p || "zIndex" === g), 0, m, n)), (c.xs0 = p)));
                            }
                            f && c && !c.plugin && (c.plugin = f);
                        }
                        return c;
                    }),
                    (j.setRatio = function (a) {
                        var b,
                            c,
                            d,
                            e = this._firstPT,
                            f = 1e-6;
                        if (1 !== a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time))
                            if (a || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || this._tween._rawPrevTime === -1e-6)
                                for (; e; ) {
                                    if (((b = e.c * a + e.s), e.r ? (b = Math.round(b)) : f > b && b > -f && (b = 0), e.type))
                                        if (1 === e.type)
                                            if (((d = e.l), 2 === d)) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                                            else if (3 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                                            else if (4 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4;
                                            else if (5 === d) e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3 + e.xn3 + e.xs4 + e.xn4 + e.xs5;
                                            else {
                                                for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c;
                                            }
                                        else -1 === e.type ? (e.t[e.p] = e.xs0) : e.setRatio && e.setRatio(a);
                                    else e.t[e.p] = b + e.xs0;
                                    e = e._next;
                                }
                            else for (; e; ) 2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a), (e = e._next);
                        else
                            for (; e; ) {
                                if (2 !== e.type)
                                    if (e.r && -1 !== e.type)
                                        if (((b = Math.round(e.s + e.c)), e.type)) {
                                            if (1 === e.type) {
                                                for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++) c += e["xn" + d] + e["xs" + (d + 1)];
                                                e.t[e.p] = c;
                                            }
                                        } else e.t[e.p] = b + e.xs0;
                                    else e.t[e.p] = e.e;
                                else e.setRatio(a);
                                e = e._next;
                            }
                    }),
                    (j._enableTransforms = function (a) {
                        (this._transform = this._transform || Ra(this._target, e, !0)), (this._transformType = (this._transform.svg && Aa) || (!a && 3 !== this._transformType) ? 2 : 3);
                    });
                var Ya = function (a) {
                    (this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0);
                };
                (j._addLazySet = function (a, b, c) {
                    var d = (this._firstPT = new ta(a, b, 0, 0, this._firstPT, 2));
                    (d.e = c), (d.setRatio = Ya), (d.data = this);
                }),
                    (j._linkCSSP = function (a, b, c, d) {
                        return (
                            a &&
                                (b && (b._prev = a),
                                a._next && (a._next._prev = a._prev),
                                a._prev ? (a._prev._next = a._next) : this._firstPT === a && ((this._firstPT = a._next), (d = !0)),
                                c ? (c._next = a) : d || null !== this._firstPT || (this._firstPT = a),
                                (a._next = b),
                                (a._prev = c)),
                            a
                        );
                    }),
                    (j._mod = function (a) {
                        for (var b = this._firstPT; b; ) "function" == typeof a[b.p] && a[b.p] === Math.round && (b.r = 1), (b = b._next);
                    }),
                    (j._kill = function (b) {
                        var c,
                            d,
                            e,
                            f = b;
                        if (b.autoAlpha || b.alpha) {
                            f = {};
                            for (d in b) f[d] = b[d];
                            (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
                        }
                        for (
                            b.className &&
                                (c = this._classNamePT) &&
                                ((e = c.xfirst),
                                e && e._prev ? this._linkCSSP(e._prev, c._next, e._prev._prev) : e === this._firstPT && (this._firstPT = c._next),
                                c._next && this._linkCSSP(c._next, c._next._next, e._prev),
                                (this._classNamePT = null)),
                                c = this._firstPT;
                            c;

                        )
                            c.plugin && c.plugin !== d && c.plugin._kill && (c.plugin._kill(b), (d = c.plugin)), (c = c._next);
                        return a.prototype._kill.call(this, f);
                    });
                var Za = function (a, b, c) {
                    var d, e, f, g;
                    if (a.slice) for (e = a.length; --e > -1; ) Za(a[e], b, c);
                    else for (d = a.childNodes, e = d.length; --e > -1; ) (f = d[e]), (g = f.type), f.style && (b.push(ca(f)), c && c.push(f)), (1 !== g && 9 !== g && 11 !== g) || !f.childNodes.length || Za(f, b, c);
                };
                return (
                    (g.cascadeTo = function (a, c, d) {
                        var e,
                            f,
                            g,
                            h,
                            i = b.to(a, c, d),
                            j = [i],
                            k = [],
                            l = [],
                            m = [],
                            n = b._internals.reservedProps;
                        for (a = i._targets || i.target, Za(a, k, m), i.render(c, !0, !0), Za(a, l), i.render(0, !0, !0), i._enabled(!0), e = m.length; --e > -1; )
                            if (((f = da(m[e], k[e], l[e])), f.firstMPT)) {
                                f = f.difs;
                                for (g in d) n[g] && (f[g] = d[g]);
                                h = {};
                                for (g in f) h[g] = k[e][g];
                                j.push(b.fromTo(m[e], c, h, f));
                            }
                        return j;
                    }),
                    a.activate([g]),
                    g
                );
            },
            !0
        ),
        (function () {
            var a = _gsScope._gsDefine.plugin({
                    propName: "roundProps",
                    version: "1.6.0",
                    priority: -1,
                    API: 2,
                    init: function (a, b, c) {
                        return (this._tween = c), !0;
                    },
                }),
                b = function (a) {
                    for (; a; ) a.f || a.blob || (a.m = Math.round), (a = a._next);
                },
                c = a.prototype;
            (c._onInitAllProps = function () {
                for (var a, c, d, e = this._tween, f = e.vars.roundProps.join ? e.vars.roundProps : e.vars.roundProps.split(","), g = f.length, h = {}, i = e._propLookup.roundProps; --g > -1; ) h[f[g]] = Math.round;
                for (g = f.length; --g > -1; )
                    for (a = f[g], c = e._firstPT; c; )
                        (d = c._next),
                            c.pg
                                ? c.t._mod(h)
                                : c.n === a &&
                                  (2 === c.f && c.t
                                      ? b(c.t._firstPT)
                                      : (this._add(c.t, a, c.s, c.c), d && (d._prev = c._prev), c._prev ? (c._prev._next = d) : e._firstPT === c && (e._firstPT = d), (c._next = c._prev = null), (e._propLookup[a] = i))),
                            (c = d);
                return !1;
            }),
                (c._add = function (a, b, c, d) {
                    this._addTween(a, b, c, c + d, b, Math.round), this._overwriteProps.push(b);
                });
        })(),
        (function () {
            _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function (a, b, c, d) {
                    var e, f;
                    if ("function" != typeof a.setAttribute) return !1;
                    for (e in b) (f = b[e]), "function" == typeof f && (f = f(d, a)), this._addTween(a, "setAttribute", a.getAttribute(e) + "", f + "", e, !1, e), this._overwriteProps.push(e);
                    return !0;
                },
            });
        })(),
        (_gsScope._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (a, b, c, d) {
                "object" != typeof b && (b = { rotation: b }), (this.finals = {});
                var e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = b.useRadians === !0 ? 2 * Math.PI : 360,
                    l = 1e-6;
                for (e in b)
                    "useRadians" !== e &&
                        ((h = b[e]),
                        "function" == typeof h && (h = h(d, a)),
                        (j = (h + "").split("_")),
                        (f = j[0]),
                        (g = parseFloat("function" != typeof a[e] ? a[e] : a[e.indexOf("set") || "function" != typeof a["get" + e.substr(3)] ? e : "get" + e.substr(3)]())),
                        (h = this.finals[e] = "string" == typeof f && "=" === f.charAt(1) ? g + parseInt(f.charAt(0) + "1", 10) * Number(f.substr(2)) : Number(f) || 0),
                        (i = h - g),
                        j.length &&
                            ((f = j.join("_")),
                            -1 !== f.indexOf("short") && ((i %= k), i !== i % (k / 2) && (i = 0 > i ? i + k : i - k)),
                            -1 !== f.indexOf("_cw") && 0 > i ? (i = ((i + 9999999999 * k) % k) - ((i / k) | 0) * k) : -1 !== f.indexOf("ccw") && i > 0 && (i = ((i - 9999999999 * k) % k) - ((i / k) | 0) * k)),
                        (i > l || -l > i) && (this._addTween(a, e, g, g + i, e), this._overwriteProps.push(e)));
                return !0;
            },
            set: function (a) {
                var b;
                if (1 !== a) this._super.setRatio.call(this, a);
                else for (b = this._firstPT; b; ) b.f ? b.t[b.p](this.finals[b.p]) : (b.t[b.p] = this.finals[b.p]), (b = b._next);
            },
        })._autoCSS = !0),
        _gsScope._gsDefine(
            "easing.Back",
            ["easing.Ease"],
            function (a) {
                var b,
                    c,
                    d,
                    e,
                    f = _gsScope.GreenSockGlobals || _gsScope,
                    g = f.com.greensock,
                    h = 2 * Math.PI,
                    i = Math.PI / 2,
                    j = g._class,
                    k = function (b, c) {
                        var d = j("easing." + b, function () {}, !0),
                            e = (d.prototype = new a());
                        return (e.constructor = d), (e.getRatio = c), d;
                    },
                    l = a.register || function () {},
                    m = function (a, b, c, d, e) {
                        var f = j("easing." + a, { easeOut: new b(), easeIn: new c(), easeInOut: new d() }, !0);
                        return l(f, a), f;
                    },
                    n = function (a, b, c) {
                        (this.t = a), (this.v = b), c && ((this.next = c), (c.prev = this), (this.c = c.v - b), (this.gap = c.t - a));
                    },
                    o = function (b, c) {
                        var d = j(
                                "easing." + b,
                                function (a) {
                                    (this._p1 = a || 0 === a ? a : 1.70158), (this._p2 = 1.525 * this._p1);
                                },
                                !0
                            ),
                            e = (d.prototype = new a());
                        return (
                            (e.constructor = d),
                            (e.getRatio = c),
                            (e.config = function (a) {
                                return new d(a);
                            }),
                            d
                        );
                    },
                    p = m(
                        "Back",
                        o("BackOut", function (a) {
                            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
                        }),
                        o("BackIn", function (a) {
                            return a * a * ((this._p1 + 1) * a - this._p1);
                        }),
                        o("BackInOut", function (a) {
                            return (a *= 2) < 1 ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2) : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
                        })
                    ),
                    q = j(
                        "easing.SlowMo",
                        function (a, b, c) {
                            (b = b || 0 === b ? b : 0.7), null == a ? (a = 0.7) : a > 1 && (a = 1), (this._p = 1 !== a ? b : 0), (this._p1 = (1 - a) / 2), (this._p2 = a), (this._p3 = this._p1 + this._p2), (this._calcEnd = c === !0);
                        },
                        !0
                    ),
                    r = (q.prototype = new a());
                return (
                    (r.constructor = q),
                    (r.getRatio = function (a) {
                        var b = a + (0.5 - a) * this._p;
                        return a < this._p1
                            ? this._calcEnd
                                ? 1 - (a = 1 - a / this._p1) * a
                                : b - (a = 1 - a / this._p1) * a * a * a * b
                            : a > this._p3
                            ? this._calcEnd
                                ? 1 === a
                                    ? 0
                                    : 1 - (a = (a - this._p3) / this._p1) * a
                                : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
                            : this._calcEnd
                            ? 1
                            : b;
                    }),
                    (q.ease = new q(0.7, 0.7)),
                    (r.config = q.config = function (a, b, c) {
                        return new q(a, b, c);
                    }),
                    (b = j(
                        "easing.SteppedEase",
                        function (a, b) {
                            (a = a || 1), (this._p1 = 1 / a), (this._p2 = a + (b ? 0 : 1)), (this._p3 = b ? 1 : 0);
                        },
                        !0
                    )),
                    (r = b.prototype = new a()),
                    (r.constructor = b),
                    (r.getRatio = function (a) {
                        return 0 > a ? (a = 0) : a >= 1 && (a = 0.999999999), (((this._p2 * a) | 0) + this._p3) * this._p1;
                    }),
                    (r.config = b.config = function (a, c) {
                        return new b(a, c);
                    }),
                    (c = j(
                        "easing.ExpoScaleEase",
                        function (a, b, c) {
                            (this._p1 = Math.log(b / a)), (this._p2 = b - a), (this._p3 = a), (this._ease = c);
                        },
                        !0
                    )),
                    (r = c.prototype = new a()),
                    (r.constructor = c),
                    (r.getRatio = function (a) {
                        return this._ease && (a = this._ease.getRatio(a)), (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2;
                    }),
                    (r.config = c.config = function (a, b, d) {
                        return new c(a, b, d);
                    }),
                    (d = j(
                        "easing.RoughEase",
                        function (b) {
                            b = b || {};
                            for (
                                var c,
                                    d,
                                    e,
                                    f,
                                    g,
                                    h,
                                    i = b.taper || "none",
                                    j = [],
                                    k = 0,
                                    l = 0 | (b.points || 20),
                                    m = l,
                                    o = b.randomize !== !1,
                                    p = b.clamp === !0,
                                    q = b.template instanceof a ? b.template : null,
                                    r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
                                --m > -1;

                            )
                                (c = o ? Math.random() : (1 / l) * m),
                                    (d = q ? q.getRatio(c) : c),
                                    "none" === i ? (e = r) : "out" === i ? ((f = 1 - c), (e = f * f * r)) : "in" === i ? (e = c * c * r) : 0.5 > c ? ((f = 2 * c), (e = f * f * 0.5 * r)) : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                                    o ? (d += Math.random() * e - 0.5 * e) : m % 2 ? (d += 0.5 * e) : (d -= 0.5 * e),
                                    p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                                    (j[k++] = { x: c, y: d });
                            for (
                                j.sort(function (a, b) {
                                    return a.x - b.x;
                                }),
                                    h = new n(1, 1, null),
                                    m = l;
                                --m > -1;

                            )
                                (g = j[m]), (h = new n(g.x, g.y, h));
                            this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
                        },
                        !0
                    )),
                    (r = d.prototype = new a()),
                    (r.constructor = d),
                    (r.getRatio = function (a) {
                        var b = this._prev;
                        if (a > b.t) {
                            for (; b.next && a >= b.t; ) b = b.next;
                            b = b.prev;
                        } else for (; b.prev && a <= b.t; ) b = b.prev;
                        return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
                    }),
                    (r.config = function (a) {
                        return new d(a);
                    }),
                    (d.ease = new d()),
                    m(
                        "Bounce",
                        k("BounceOut", function (a) {
                            return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
                        }),
                        k("BounceIn", function (a) {
                            return (a = 1 - a) < 1 / 2.75
                                ? 1 - 7.5625 * a * a
                                : 2 / 2.75 > a
                                ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
                                : 2.5 / 2.75 > a
                                ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
                                : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
                        }),
                        k("BounceInOut", function (a) {
                            var b = 0.5 > a;
                            return (
                                (a = b ? 1 - 2 * a : 2 * a - 1),
                                (a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
                                b ? 0.5 * (1 - a) : 0.5 * a + 0.5
                            );
                        })
                    ),
                    m(
                        "Circ",
                        k("CircOut", function (a) {
                            return Math.sqrt(1 - (a -= 1) * a);
                        }),
                        k("CircIn", function (a) {
                            return -(Math.sqrt(1 - a * a) - 1);
                        }),
                        k("CircInOut", function (a) {
                            return (a *= 2) < 1 ? -0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
                        })
                    ),
                    (e = function (b, c, d) {
                        var e = j(
                                "easing." + b,
                                function (a, b) {
                                    (this._p1 = a >= 1 ? a : 1), (this._p2 = (b || d) / (1 > a ? a : 1)), (this._p3 = (this._p2 / h) * (Math.asin(1 / this._p1) || 0)), (this._p2 = h / this._p2);
                                },
                                !0
                            ),
                            f = (e.prototype = new a());
                        return (
                            (f.constructor = e),
                            (f.getRatio = c),
                            (f.config = function (a, b) {
                                return new e(a, b);
                            }),
                            e
                        );
                    }),
                    m(
                        "Elastic",
                        e(
                            "ElasticOut",
                            function (a) {
                                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * this._p2) + 1;
                            },
                            0.3
                        ),
                        e(
                            "ElasticIn",
                            function (a) {
                                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2));
                            },
                            0.3
                        ),
                        e(
                            "ElasticInOut",
                            function (a) {
                                return (a *= 2) < 1 ? -0.5 * (this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * this._p2) * 0.5 + 1;
                            },
                            0.45
                        )
                    ),
                    m(
                        "Expo",
                        k("ExpoOut", function (a) {
                            return 1 - Math.pow(2, -10 * a);
                        }),
                        k("ExpoIn", function (a) {
                            return Math.pow(2, 10 * (a - 1)) - 0.001;
                        }),
                        k("ExpoInOut", function (a) {
                            return (a *= 2) < 1 ? 0.5 * Math.pow(2, 10 * (a - 1)) : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
                        })
                    ),
                    m(
                        "Sine",
                        k("SineOut", function (a) {
                            return Math.sin(a * i);
                        }),
                        k("SineIn", function (a) {
                            return -Math.cos(a * i) + 1;
                        }),
                        k("SineInOut", function (a) {
                            return -0.5 * (Math.cos(Math.PI * a) - 1);
                        })
                    ),
                    j(
                        "easing.EaseLookup",
                        {
                            find: function (b) {
                                return a.map[b];
                            },
                        },
                        !0
                    ),
                    l(f.SlowMo, "SlowMo", "ease,"),
                    l(d, "RoughEase", "ease,"),
                    l(b, "SteppedEase", "ease,"),
                    p
                );
            },
            !0
        );
}),
    _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    (function (a, b) {
        "use strict";
        var c = {},
            d = a.document,
            e = (a.GreenSockGlobals = a.GreenSockGlobals || a);
        if (!e.TweenLite) {
            var f,
                g,
                h,
                i,
                j,
                k = function (a) {
                    var b,
                        c = a.split("."),
                        d = e;
                    for (b = 0; b < c.length; b++) d[c[b]] = d = d[c[b]] || {};
                    return d;
                },
                l = k("com.greensock"),
                m = 1e-10,
                n = function (a) {
                    var b,
                        c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c;
                },
                o = function () {},
                p = (function () {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function (c) {
                        return null != c && (c instanceof Array || ("object" == typeof c && !!c.push && a.call(c) === b));
                    };
                })(),
                q = {},
                r = function (d, f, g, h) {
                    (this.sc = q[d] ? q[d].sc : []), (q[d] = this), (this.gsClass = null), (this.func = g);
                    var i = [];
                    (this.check = function (j) {
                        for (var l, m, n, o, p = f.length, s = p; --p > -1; ) (l = q[f[p]] || new r(f[p], [])).gsClass ? ((i[p] = l.gsClass), s--) : j && l.sc.push(this);
                        if (0 === s && g) {
                            if (((m = ("com.greensock." + d).split(".")), (n = m.pop()), (o = k(m.join("."))[n] = this.gsClass = g.apply(g, i)), h))
                                if (((e[n] = c[n] = o), "undefined" != typeof module && module.exports))
                                    if (d === b) {
                                        module.exports = c[b] = o;
                                        for (p in c) o[p] = c[p];
                                    } else c[b] && (c[b][n] = o);
                                else
                                    "function" == typeof define &&
                                        define.amd &&
                                        define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function () {
                                            return o;
                                        });
                            for (p = 0; p < this.sc.length; p++) this.sc[p].check();
                        }
                    }),
                        this.check(!0);
                },
                s = (a._gsDefine = function (a, b, c, d) {
                    return new r(a, b, c, d);
                }),
                t = (l._class = function (a, b, c) {
                    return (
                        (b = b || function () {}),
                        s(
                            a,
                            [],
                            function () {
                                return b;
                            },
                            c
                        ),
                        b
                    );
                });
            s.globals = e;
            var u = [0, 0, 1, 1],
                v = t(
                    "easing.Ease",
                    function (a, b, c, d) {
                        (this._func = a), (this._type = c || 0), (this._power = d || 0), (this._params = b ? u.concat(b) : u);
                    },
                    !0
                ),
                w = (v.map = {}),
                x = (v.register = function (a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), j = i.length, k = (c || "easeIn,easeOut,easeInOut").split(","); --j > -1; )
                        for (f = i[j], e = d ? t("easing." + f, null, !0) : l.easing[f] || {}, g = k.length; --g > -1; ) (h = k[g]), (w[f + "." + h] = w[h + f] = e[h] = a.getRatio ? a : a[h] || new a());
                });
            for (
                h = v.prototype,
                    h._calcEnd = !1,
                    h.getRatio = function (a) {
                        if (this._func) return (this._params[0] = a), this._func.apply(null, this._params);
                        var b = this._type,
                            c = this._power,
                            d = 1 === b ? 1 - a : 2 === b ? a : 0.5 > a ? 2 * a : 2 * (1 - a);
                        return 1 === c ? (d *= d) : 2 === c ? (d *= d * d) : 3 === c ? (d *= d * d * d) : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : 0.5 > a ? d / 2 : 1 - d / 2;
                    },
                    f = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    g = f.length;
                --g > -1;

            )
                (h = f[g] + ",Power" + g), x(new v(null, null, 1, g), h, "easeOut", !0), x(new v(null, null, 2, g), h, "easeIn" + (0 === g ? ",easeNone" : "")), x(new v(null, null, 3, g), h, "easeInOut");
            (w.linear = l.easing.Linear.easeIn), (w.swing = l.easing.Quad.easeInOut);
            var y = t("events.EventDispatcher", function (a) {
                (this._listeners = {}), (this._eventTarget = a || this);
            });
            (h = y.prototype),
                (h.addEventListener = function (a, b, c, d, e) {
                    e = e || 0;
                    var f,
                        g,
                        h = this._listeners[a],
                        k = 0;
                    for (this !== i || j || i.wake(), null == h && (this._listeners[a] = h = []), g = h.length; --g > -1; ) (f = h[g]), f.c === b && f.s === c ? h.splice(g, 1) : 0 === k && f.pr < e && (k = g + 1);
                    h.splice(k, 0, { c: b, s: c, up: d, pr: e });
                }),
                (h.removeEventListener = function (a, b) {
                    var c,
                        d = this._listeners[a];
                    if (d) for (c = d.length; --c > -1; ) if (d[c].c === b) return void d.splice(c, 1);
                }),
                (h.dispatchEvent = function (a) {
                    var b,
                        c,
                        d,
                        e = this._listeners[a];
                    if (e) for (b = e.length, b > 1 && (e = e.slice(0)), c = this._eventTarget; --b > -1; ) (d = e[b]), d && (d.up ? d.c.call(d.s || c, { type: a, target: c }) : d.c.call(d.s || c));
                });
            var z = a.requestAnimationFrame,
                A = a.cancelAnimationFrame,
                B =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    },
                C = B();
            for (f = ["ms", "moz", "webkit", "o"], g = f.length; --g > -1 && !z; ) (z = a[f[g] + "RequestAnimationFrame"]), (A = a[f[g] + "CancelAnimationFrame"] || a[f[g] + "CancelRequestAnimationFrame"]);
            t("Ticker", function (a, b) {
                var c,
                    e,
                    f,
                    g,
                    h,
                    k = this,
                    l = B(),
                    n = b !== !1 && z ? "auto" : !1,
                    p = 500,
                    q = 33,
                    r = "tick",
                    s = function (a) {
                        var b,
                            d,
                            i = B() - C;
                        i > p && (l += i - q), (C += i), (k.time = (C - l) / 1e3), (b = k.time - h), (!c || b > 0 || a === !0) && (k.frame++, (h += b + (b >= g ? 0.004 : g - b)), (d = !0)), a !== !0 && (f = e(s)), d && k.dispatchEvent(r);
                    };
                y.call(k),
                    (k.time = k.frame = 0),
                    (k.tick = function () {
                        s(!0);
                    }),
                    (k.lagSmoothing = function (a, b) {
                        return arguments.length ? ((p = a || 1 / m), void (q = Math.min(b, p, 0))) : 1 / m > p;
                    }),
                    (k.sleep = function () {
                        null != f && (n && A ? A(f) : clearTimeout(f), (e = o), (f = null), k === i && (j = !1));
                    }),
                    (k.wake = function (a) {
                        null !== f ? k.sleep() : a ? (l += -C + (C = B())) : k.frame > 10 && (C = B() - p + 5),
                            (e =
                                0 === c
                                    ? o
                                    : n && z
                                    ? z
                                    : function (a) {
                                          return setTimeout(a, (1e3 * (h - k.time) + 1) | 0);
                                      }),
                            k === i && (j = !0),
                            s(2);
                    }),
                    (k.fps = function (a) {
                        return arguments.length ? ((c = a), (g = 1 / (c || 60)), (h = this.time + g), void k.wake()) : c;
                    }),
                    (k.useRAF = function (a) {
                        return arguments.length ? (k.sleep(), (n = a), void k.fps(c)) : n;
                    }),
                    k.fps(a),
                    setTimeout(function () {
                        "auto" === n && k.frame < 5 && "hidden" !== (d || {}).visibilityState && k.useRAF(!1);
                    }, 1500);
            }),
                (h = l.Ticker.prototype = new l.events.EventDispatcher()),
                (h.constructor = l.Ticker);
            var D = t("core.Animation", function (a, b) {
                if (
                    ((this.vars = b = b || {}),
                    (this._duration = this._totalDuration = a || 0),
                    (this._delay = Number(b.delay) || 0),
                    (this._timeScale = 1),
                    (this._active = b.immediateRender === !0),
                    (this.data = b.data),
                    (this._reversed = b.reversed === !0),
                    X)
                ) {
                    j || i.wake();
                    var c = this.vars.useFrames ? W : X;
                    c.add(this, c._time), this.vars.paused && this.paused(!0);
                }
            });
            (i = D.ticker = new l.Ticker()),
                (h = D.prototype),
                (h._dirty = h._gc = h._initted = h._paused = !1),
                (h._totalTime = h._time = 0),
                (h._rawPrevTime = -1),
                (h._next = h._last = h._onUpdate = h._timeline = h.timeline = null),
                (h._paused = !1);
            var E = function () {
                j && B() - C > 2e3 && ("hidden" !== (d || {}).visibilityState || !i.lagSmoothing()) && i.wake();
                var a = setTimeout(E, 2e3);
                a.unref && a.unref();
            };
            E(),
                (h.play = function (a, b) {
                    return null != a && this.seek(a, b), this.reversed(!1).paused(!1);
                }),
                (h.pause = function (a, b) {
                    return null != a && this.seek(a, b), this.paused(!0);
                }),
                (h.resume = function (a, b) {
                    return null != a && this.seek(a, b), this.paused(!1);
                }),
                (h.seek = function (a, b) {
                    return this.totalTime(Number(a), b !== !1);
                }),
                (h.restart = function (a, b) {
                    return this.reversed(!1)
                        .paused(!1)
                        .totalTime(a ? -this._delay : 0, b !== !1, !0);
                }),
                (h.reverse = function (a, b) {
                    return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1);
                }),
                (h.render = function (a, b, c) {}),
                (h.invalidate = function () {
                    return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (this._gc || !this.timeline) && this._enabled(!0), this;
                }),
                (h.isActive = function () {
                    var a,
                        b = this._timeline,
                        c = this._startTime;
                    return !b || (!this._gc && !this._paused && b.isActive() && (a = b.rawTime(!0)) >= c && a < c + this.totalDuration() / this._timeScale - 1e-7);
                }),
                (h._enabled = function (a, b) {
                    return (
                        j || i.wake(),
                        (this._gc = !a),
                        (this._active = this.isActive()),
                        b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    );
                }),
                (h._kill = function (a, b) {
                    return this._enabled(!1, !1);
                }),
                (h.kill = function (a, b) {
                    return this._kill(a, b), this;
                }),
                (h._uncache = function (a) {
                    for (var b = a ? this : this.timeline; b; ) (b._dirty = !0), (b = b.timeline);
                    return this;
                }),
                (h._swapSelfInParams = function (a) {
                    for (var b = a.length, c = a.concat(); --b > -1; ) "{self}" === a[b] && (c[b] = this);
                    return c;
                }),
                (h._callback = function (a) {
                    var b = this.vars,
                        c = b[a],
                        d = b[a + "Params"],
                        e = b[a + "Scope"] || b.callbackScope || this,
                        f = d ? d.length : 0;
                    switch (f) {
                        case 0:
                            c.call(e);
                            break;
                        case 1:
                            c.call(e, d[0]);
                            break;
                        case 2:
                            c.call(e, d[0], d[1]);
                            break;
                        default:
                            c.apply(e, d);
                    }
                }),
                (h.eventCallback = function (a, b, c, d) {
                    if ("on" === (a || "").substr(0, 2)) {
                        var e = this.vars;
                        if (1 === arguments.length) return e[a];
                        null == b ? delete e[a] : ((e[a] = b), (e[a + "Params"] = p(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c), (e[a + "Scope"] = d)), "onUpdate" === a && (this._onUpdate = b);
                    }
                    return this;
                }),
                (h.delay = function (a) {
                    return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), (this._delay = a), this) : this._delay;
                }),
                (h.duration = function (a) {
                    return arguments.length
                        ? ((this._duration = this._totalDuration = a),
                          this._uncache(!0),
                          this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0),
                          this)
                        : ((this._dirty = !1), this._duration);
                }),
                (h.totalDuration = function (a) {
                    return (this._dirty = !1), arguments.length ? this.duration(a) : this._totalDuration;
                }),
                (h.time = function (a, b) {
                    return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time;
                }),
                (h.totalTime = function (a, b, c) {
                    if ((j || i.wake(), !arguments.length)) return this._totalTime;
                    if (this._timeline) {
                        if ((0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming)) {
                            this._dirty && this.totalDuration();
                            var d = this._totalDuration,
                                e = this._timeline;
                            if ((a > d && !c && (a = d), (this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale), e._dirty || this._uncache(!1), e._timeline))
                                for (; e._timeline; ) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), (e = e._timeline);
                        }
                        this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (J.length && Z(), this.render(a, b, !1), J.length && Z());
                    }
                    return this;
                }),
                (h.progress = h.totalProgress = function (a, b) {
                    var c = this.duration();
                    return arguments.length ? this.totalTime(c * a, b) : c ? this._time / c : this.ratio;
                }),
                (h.startTime = function (a) {
                    return arguments.length ? (a !== this._startTime && ((this._startTime = a), this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime;
                }),
                (h.endTime = function (a) {
                    return this._startTime + (0 != a ? this.totalDuration() : this.duration()) / this._timeScale;
                }),
                (h.timeScale = function (a) {
                    if (!arguments.length) return this._timeScale;
                    var b, c;
                    for (
                        a = a || m,
                            this._timeline && this._timeline.smoothChildTiming && ((b = this._pauseTime), (c = b || 0 === b ? b : this._timeline.totalTime()), (this._startTime = c - ((c - this._startTime) * this._timeScale) / a)),
                            this._timeScale = a,
                            c = this.timeline;
                        c && c.timeline;

                    )
                        (c._dirty = !0), c.totalDuration(), (c = c.timeline);
                    return this;
                }),
                (h.reversed = function (a) {
                    return arguments.length
                        ? (a != this._reversed && ((this._reversed = a), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
                        : this._reversed;
                }),
                (h.paused = function (a) {
                    if (!arguments.length) return this._paused;
                    var b,
                        c,
                        d = this._timeline;
                    return (
                        a != this._paused &&
                            d &&
                            (j || a || i.wake(),
                            (b = d.rawTime()),
                            (c = b - this._pauseTime),
                            !a && d.smoothChildTiming && ((this._startTime += c), this._uncache(!1)),
                            (this._pauseTime = a ? b : null),
                            (this._paused = a),
                            (this._active = this.isActive()),
                            !a && 0 !== c && this._initted && this.duration() && ((b = d.smoothChildTiming ? this._totalTime : (b - this._startTime) / this._timeScale), this.render(b, b === this._totalTime, !0))),
                        this._gc && !a && this._enabled(!0, !1),
                        this
                    );
                });
            var F = t("core.SimpleTimeline", function (a) {
                D.call(this, 0, a), (this.autoRemoveChildren = this.smoothChildTiming = !0);
            });
            (h = F.prototype = new D()),
                (h.constructor = F),
                (h.kill()._gc = !1),
                (h._first = h._last = h._recent = null),
                (h._sortChildren = !1),
                (h.add = h.insert = function (a, b, c, d) {
                    var e, f;
                    if (
                        ((a._startTime = Number(b || 0) + a._delay),
                        a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale),
                        a.timeline && a.timeline._remove(a, !0),
                        (a.timeline = a._timeline = this),
                        a._gc && a._enabled(!0, !0),
                        (e = this._last),
                        this._sortChildren)
                    )
                        for (f = a._startTime; e && e._startTime > f; ) e = e._prev;
                    return (
                        e ? ((a._next = e._next), (e._next = a)) : ((a._next = this._first), (this._first = a)), a._next ? (a._next._prev = a) : (this._last = a), (a._prev = e), (this._recent = a), this._timeline && this._uncache(!0), this
                    );
                }),
                (h._remove = function (a, b) {
                    return (
                        a.timeline === this &&
                            (b || a._enabled(!1, !0),
                            a._prev ? (a._prev._next = a._next) : this._first === a && (this._first = a._next),
                            a._next ? (a._next._prev = a._prev) : this._last === a && (this._last = a._prev),
                            (a._next = a._prev = a.timeline = null),
                            a === this._recent && (this._recent = this._last),
                            this._timeline && this._uncache(!0)),
                        this
                    );
                }),
                (h.render = function (a, b, c) {
                    var d,
                        e = this._first;
                    for (this._totalTime = this._time = this._rawPrevTime = a; e; )
                        (d = e._next),
                            (e._active || (a >= e._startTime && !e._paused && !e._gc)) &&
                                (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)),
                            (e = d);
                }),
                (h.rawTime = function () {
                    return j || i.wake(), this._totalTime;
                });
            var G = t(
                    "TweenLite",
                    function (b, c, d) {
                        if ((D.call(this, c, d), (this.render = G.prototype.render), null == b)) throw "Cannot tween a null target.";
                        this.target = b = "string" != typeof b ? b : G.selector(b) || b;
                        var e,
                            f,
                            g,
                            h = b.jquery || (b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType))),
                            i = this.vars.overwrite;
                        if (((this._overwrite = i = null == i ? V[G.defaultOverwrite] : "number" == typeof i ? i >> 0 : V[i]), (h || b instanceof Array || (b.push && p(b))) && "number" != typeof b[0]))
                            for (this._targets = g = n(b), this._propLookup = [], this._siblings = [], e = 0; e < g.length; e++)
                                (f = g[e]),
                                    f
                                        ? "string" != typeof f
                                            ? f.length && f !== a && f[0] && (f[0] === a || (f[0].nodeType && f[0].style && !f.nodeType))
                                                ? (g.splice(e--, 1), (this._targets = g = g.concat(n(f))))
                                                : ((this._siblings[e] = $(f, this, !1)), 1 === i && this._siblings[e].length > 1 && aa(f, this, null, 1, this._siblings[e]))
                                            : ((f = g[e--] = G.selector(f)), "string" == typeof f && g.splice(e + 1, 1))
                                        : g.splice(e--, 1);
                        else (this._propLookup = {}), (this._siblings = $(b, this, !1)), 1 === i && this._siblings.length > 1 && aa(b, this, null, 1, this._siblings);
                        (this.vars.immediateRender || (0 === c && 0 === this._delay && this.vars.immediateRender !== !1)) && ((this._time = -m), this.render(Math.min(0, -this._delay)));
                    },
                    !0
                ),
                H = function (b) {
                    return b && b.length && b !== a && b[0] && (b[0] === a || (b[0].nodeType && b[0].style && !b.nodeType));
                },
                I = function (a, b) {
                    var c,
                        d = {};
                    for (c in a)
                        U[c] || (c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c) || !(!R[c] || (R[c] && R[c]._autoCSS)) || ((d[c] = a[c]), delete a[c]);
                    a.css = d;
                };
            (h = G.prototype = new D()),
                (h.constructor = G),
                (h.kill()._gc = !1),
                (h.ratio = 0),
                (h._firstPT = h._targets = h._overwrittenProps = h._startAt = null),
                (h._notifyPluginsOfEnabled = h._lazy = !1),
                (G.version = "1.20.4"),
                (G.defaultEase = h._ease = new v(null, null, 1, 1)),
                (G.defaultOverwrite = "auto"),
                (G.ticker = i),
                (G.autoSleep = 120),
                (G.lagSmoothing = function (a, b) {
                    i.lagSmoothing(a, b);
                }),
                (G.selector =
                    a.$ ||
                    a.jQuery ||
                    function (b) {
                        var c = a.$ || a.jQuery;
                        return c ? ((G.selector = c), c(b)) : "undefined" == typeof d ? b : d.querySelectorAll ? d.querySelectorAll(b) : d.getElementById("#" === b.charAt(0) ? b.substr(1) : b);
                    });
            var J = [],
                K = {},
                L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                M = /[\+-]=-?[\.\d]/,
                N = function (a) {
                    for (var b, c = this._firstPT, d = 1e-6; c; )
                        (b = c.blob ? (1 === a && null != this.end ? this.end : a ? this.join("") : this.start) : c.c * a + c.s),
                            c.m ? (b = c.m(b, this._target || c.t)) : d > b && b > -d && !c.blob && (b = 0),
                            c.f ? (c.fp ? c.t[c.p](c.fp, b) : c.t[c.p](b)) : (c.t[c.p] = b),
                            (c = c._next);
                },
                O = function (a, b, c, d) {
                    var e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l = [],
                        m = 0,
                        n = "",
                        o = 0;
                    for (
                        l.start = a,
                            l.end = b,
                            a = l[0] = a + "",
                            b = l[1] = b + "",
                            c && (c(l), (a = l[0]), (b = l[1])),
                            l.length = 0,
                            e = a.match(L) || [],
                            f = b.match(L) || [],
                            d && ((d._next = null), (d.blob = 1), (l._firstPT = l._applyPT = d)),
                            i = f.length,
                            h = 0;
                        i > h;
                        h++
                    )
                        (k = f[h]),
                            (j = b.substr(m, b.indexOf(k, m) - m)),
                            (n += j || !h ? j : ","),
                            (m += j.length),
                            o ? (o = (o + 1) % 5) : "rgba(" === j.substr(-5) && (o = 1),
                            k === e[h] || e.length <= h
                                ? (n += k)
                                : (n && (l.push(n), (n = "")),
                                  (g = parseFloat(e[h])),
                                  l.push(g),
                                  (l._firstPT = {
                                      _next: l._firstPT,
                                      t: l,
                                      p: l.length - 1,
                                      s: g,
                                      c: ("=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * parseFloat(k.substr(2)) : parseFloat(k) - g) || 0,
                                      f: 0,
                                      m: o && 4 > o ? Math.round : 0,
                                  })),
                            (m += k.length);
                    return (n += b.substr(m)), n && l.push(n), (l.setRatio = N), M.test(b) && (l.end = null), l;
                },
                P = function (a, b, c, d, e, f, g, h, i) {
                    "function" == typeof d && (d = d(i || 0, a));
                    var j,
                        k = typeof a[b],
                        l = "function" !== k ? "" : b.indexOf("set") || "function" != typeof a["get" + b.substr(3)] ? b : "get" + b.substr(3),
                        m = "get" !== c ? c : l ? (g ? a[l](g) : a[l]()) : a[b],
                        n = "string" == typeof d && "=" === d.charAt(1),
                        o = { t: a, p: b, s: m, f: "function" === k, pg: 0, n: e || b, m: f ? ("function" == typeof f ? f : Math.round) : 0, pr: 0, c: n ? parseInt(d.charAt(0) + "1", 10) * parseFloat(d.substr(2)) : parseFloat(d) - m || 0 };
                    return (
                        ("number" != typeof m || ("number" != typeof d && !n)) &&
                            (g || isNaN(m) || (!n && isNaN(d)) || "boolean" == typeof m || "boolean" == typeof d
                                ? ((o.fp = g), (j = O(m, n ? parseFloat(o.s) + o.c + (o.s + "").replace(/[0-9\-\.]/g, "") : d, h || G.defaultStringFilter, o)), (o = { t: j, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: e || b, pr: 0, m: 0 }))
                                : ((o.s = parseFloat(m)), n || (o.c = parseFloat(d) - o.s || 0))),
                        o.c ? ((o._next = this._firstPT) && (o._next._prev = o), (this._firstPT = o), o) : void 0
                    );
                },
                Q = (G._internals = { isArray: p, isSelector: H, lazyTweens: J, blobDif: O }),
                R = (G._plugins = {}),
                S = (Q.tweenLookup = {}),
                T = 0,
                U = (Q.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1,
                }),
                V = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
                W = (D._rootFramesTimeline = new F()),
                X = (D._rootTimeline = new F()),
                Y = 30,
                Z = (Q.lazyRender = function () {
                    var a,
                        b = J.length;
                    for (K = {}; --b > -1; ) (a = J[b]), a && a._lazy !== !1 && (a.render(a._lazy[0], a._lazy[1], !0), (a._lazy = !1));
                    J.length = 0;
                });
            (X._startTime = i.time),
                (W._startTime = i.frame),
                (X._active = W._active = !0),
                setTimeout(Z, 1),
                (D._updateRoot = G.render = function () {
                    var a, b, c;
                    if ((J.length && Z(), X.render((i.time - X._startTime) * X._timeScale, !1, !1), W.render((i.frame - W._startTime) * W._timeScale, !1, !1), J.length && Z(), i.frame >= Y)) {
                        Y = i.frame + (parseInt(G.autoSleep, 10) || 120);
                        for (c in S) {
                            for (b = S[c].tweens, a = b.length; --a > -1; ) b[a]._gc && b.splice(a, 1);
                            0 === b.length && delete S[c];
                        }
                        if (((c = X._first), (!c || c._paused) && G.autoSleep && !W._first && 1 === i._listeners.tick.length)) {
                            for (; c && c._paused; ) c = c._next;
                            c || i.sleep();
                        }
                    }
                }),
                i.addEventListener("tick", D._updateRoot);
            var $ = function (a, b, c) {
                    var d,
                        e,
                        f = a._gsTweenID;
                    if ((S[f || (a._gsTweenID = f = "t" + T++)] || (S[f] = { target: a, tweens: [] }), b && ((d = S[f].tweens), (d[(e = d.length)] = b), c))) for (; --e > -1; ) d[e] === b && d.splice(e, 1);
                    return S[f].tweens;
                },
                _ = function (a, b, c, d) {
                    var e,
                        f,
                        g = a.vars.onOverwrite;
                    return g && (e = g(a, b, c, d)), (g = G.onOverwrite), g && (f = g(a, b, c, d)), e !== !1 && f !== !1;
                },
                aa = function (a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || (h._kill(null, a, b) && (g = !0));
                            else if (5 === d) break;
                        return g;
                    }
                    var j,
                        k = b._startTime + m,
                        l = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1; )
                        (h = e[f]) === b ||
                            h._gc ||
                            h._paused ||
                            (h._timeline !== b._timeline
                                ? ((j = j || ba(b, 0, o)), 0 === ba(h, j, o) && (l[n++] = h))
                                : h._startTime <= k && h._startTime + h.totalDuration() / h._timeScale > k && (((o || !h._initted) && k - h._startTime <= 2e-10) || (l[n++] = h)));
                    for (f = n; --f > -1; )
                        if (((h = l[f]), 2 === d && h._kill(c, a, b) && (g = !0), 2 !== d || (!h._firstPT && h._initted))) {
                            if (2 !== d && !_(h, b)) continue;
                            h._enabled(!1, !1) && (g = !0);
                        }
                    return g;
                },
                ba = function (a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline; ) {
                        if (((f += d._startTime), (e *= d._timeScale), d._paused)) return -100;
                        d = d._timeline;
                    }
                    return (f /= e), f > b ? f - b : (c && f === b) || (!a._initted && 2 * m > f - b) ? m : (f += a.totalDuration() / a._timeScale / e) > b + m ? 0 : f - b - m;
                };
            (h._init = function () {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = this.vars,
                    h = this._overwrittenProps,
                    i = this._duration,
                    j = !!g.immediateRender,
                    k = g.ease;
                if (g.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (e = {});
                    for (d in g.startAt) e[d] = g.startAt[d];
                    if (
                        ((e.data = "isStart"),
                        (e.overwrite = !1),
                        (e.immediateRender = !0),
                        (e.lazy = j && g.lazy !== !1),
                        (e.startAt = e.delay = null),
                        (e.onUpdate = g.onUpdate),
                        (e.onUpdateParams = g.onUpdateParams),
                        (e.onUpdateScope = g.onUpdateScope || g.callbackScope || this),
                        (this._startAt = G.to(this.target, 0, e)),
                        j)
                    )
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== i) return;
                } else if (g.runBackwards && 0 !== i)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null);
                    else {
                        0 !== this._time && (j = !1), (c = {});
                        for (d in g) (U[d] && "autoCSS" !== d) || (c[d] = g[d]);
                        if (((c.overwrite = 0), (c.data = "isFromStart"), (c.lazy = j && g.lazy !== !1), (c.immediateRender = j), (this._startAt = G.to(this.target, 0, c)), j)) {
                            if (0 === this._time) return;
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
                    }
                if (
                    ((this._ease = k = k ? (k instanceof v ? k : "function" == typeof k ? new v(k, g.easeParams) : w[k] || G.defaultEase) : G.defaultEase),
                    g.easeParams instanceof Array && k.config && (this._ease = k.config.apply(k, g.easeParams)),
                    (this._easeType = this._ease._type),
                    (this._easePower = this._ease._power),
                    (this._firstPT = null),
                    this._targets)
                )
                    for (f = this._targets.length, a = 0; f > a; a++) this._initProps(this._targets[a], (this._propLookup[a] = {}), this._siblings[a], h ? h[a] : null, a) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, h, 0);
                if ((b && G._onPluginEvent("_onInitAllProps", this), h && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), g.runBackwards))
                    for (c = this._firstPT; c; ) (c.s += c.c), (c.c = -c.c), (c = c._next);
                (this._onUpdate = g.onUpdate), (this._initted = !0);
            }),
                (h._initProps = function (b, c, d, e, f) {
                    var g, h, i, j, k, l;
                    if (null == b) return !1;
                    K[b._gsTweenID] && Z(), this.vars.css || (b.style && b !== a && b.nodeType && R.css && this.vars.autoCSS !== !1 && I(this.vars, b));
                    for (g in this.vars)
                        if (((l = this.vars[g]), U[g])) l && (l instanceof Array || (l.push && p(l))) && -1 !== l.join("").indexOf("{self}") && (this.vars[g] = l = this._swapSelfInParams(l, this));
                        else if (R[g] && (j = new R[g]())._onInitTween(b, this.vars[g], this, f)) {
                            for (this._firstPT = k = { _next: this._firstPT, t: j, p: "setRatio", s: 0, c: 1, f: 1, n: g, pg: 1, pr: j._priority, m: 0 }, h = j._overwriteProps.length; --h > -1; ) c[j._overwriteProps[h]] = this._firstPT;
                            (j._priority || j._onInitAllProps) && (i = !0), (j._onDisable || j._onEnable) && (this._notifyPluginsOfEnabled = !0), k._next && (k._next._prev = k);
                        } else c[g] = P.call(this, b, g, "get", l, g, 0, null, this.vars.stringFilter, f);
                    return e && this._kill(e, b)
                        ? this._initProps(b, c, d, e, f)
                        : this._overwrite > 1 && this._firstPT && d.length > 1 && aa(b, this, c, this._overwrite, d)
                        ? (this._kill(c, b), this._initProps(b, c, d, e, f))
                        : (this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)) && (K[b._gsTweenID] = !0), i);
                }),
                (h.render = function (a, b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h = this._time,
                        i = this._duration,
                        j = this._rawPrevTime;
                    if (a >= i - 1e-7 && a >= 0)
                        (this._totalTime = this._time = i),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                            this._reversed || ((d = !0), (e = "onComplete"), (c = c || this._timeline.autoRemoveChildren)),
                            0 === i &&
                                (this._initted || !this.vars.lazy || c) &&
                                (this._startTime === this._timeline._duration && (a = 0),
                                (0 > j || (0 >= a && a >= -1e-7) || (j === m && "isPause" !== this.data)) && j !== a && ((c = !0), j > m && (e = "onReverseComplete")),
                                (this._rawPrevTime = g = !b || a || j === a ? a : m));
                    else if (1e-7 > a)
                        (this._totalTime = this._time = 0),
                            (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                            (0 !== h || (0 === i && j > 0)) && ((e = "onReverseComplete"), (d = this._reversed)),
                            0 > a && ((this._active = !1), 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (j !== m || "isPause" !== this.data) && (c = !0), (this._rawPrevTime = g = !b || a || j === a ? a : m))),
                            (!this._initted || (this._startAt && this._startAt.progress())) && (c = !0);
                    else if (((this._totalTime = this._time = a), this._easeType)) {
                        var k = a / i,
                            l = this._easeType,
                            n = this._easePower;
                        (1 === l || (3 === l && k >= 0.5)) && (k = 1 - k),
                            3 === l && (k *= 2),
                            1 === n ? (k *= k) : 2 === n ? (k *= k * k) : 3 === n ? (k *= k * k * k) : 4 === n && (k *= k * k * k * k),
                            1 === l ? (this.ratio = 1 - k) : 2 === l ? (this.ratio = k) : 0.5 > a / i ? (this.ratio = k / 2) : (this.ratio = 1 - k / 2);
                    } else this.ratio = this._ease.getRatio(a / i);
                    if (this._time !== h || c) {
                        if (!this._initted) {
                            if ((this._init(), !this._initted || this._gc)) return;
                            if (!c && this._firstPT && ((this.vars.lazy !== !1 && this._duration) || (this.vars.lazy && !this._duration)))
                                return (this._time = this._totalTime = h), (this._rawPrevTime = j), J.push(this), void (this._lazy = [a, b]);
                            this._time && !d ? (this.ratio = this._ease.getRatio(this._time / i)) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
                        }
                        for (
                            this._lazy !== !1 && (this._lazy = !1),
                                this._active || (!this._paused && this._time !== h && a >= 0 && (this._active = !0)),
                                0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, !0, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this._callback("onStart"))),
                                f = this._firstPT;
                            f;

                        )
                            f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next);
                        this._onUpdate && (0 > a && this._startAt && a !== -1e-4 && this._startAt.render(a, !0, c), b || ((this._time !== h || d || c) && this._callback("onUpdate"))),
                            e &&
                                (!this._gc || c) &&
                                (0 > a && this._startAt && !this._onUpdate && a !== -1e-4 && this._startAt.render(a, !0, c),
                                d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                                !b && this.vars[e] && this._callback(e),
                                0 === i && this._rawPrevTime === m && g !== m && (this._rawPrevTime = 0));
                    }
                }),
                (h._kill = function (a, b, c) {
                    if (("all" === a && (a = null), null == a && (null == b || b === this.target))) return (this._lazy = !1), this._enabled(!1, !1);
                    b = "string" != typeof b ? b || this._targets || this.target : G.selector(b) || b;
                    var d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k,
                        l,
                        m = c && this._time && c._startTime === this._startTime && this._timeline === c._timeline;
                    if ((p(b) || H(b)) && "number" != typeof b[0]) for (d = b.length; --d > -1; ) this._kill(a, b[d], c) && (i = !0);
                    else {
                        if (this._targets) {
                            for (d = this._targets.length; --d > -1; )
                                if (b === this._targets[d]) {
                                    (h = this._propLookup[d] || {}), (this._overwrittenProps = this._overwrittenProps || []), (e = this._overwrittenProps[d] = a ? this._overwrittenProps[d] || {} : "all");
                                    break;
                                }
                        } else {
                            if (b !== this.target) return !1;
                            (h = this._propLookup), (e = this._overwrittenProps = a ? this._overwrittenProps || {} : "all");
                        }
                        if (h) {
                            if (((j = a || h), (k = a !== e && "all" !== e && a !== h && ("object" != typeof a || !a._tempKill)), c && (G.onOverwrite || this.vars.onOverwrite))) {
                                for (f in j) h[f] && (l || (l = []), l.push(f));
                                if ((l || !a) && !_(this, c, b, l)) return !1;
                            }
                            for (f in j)
                                (g = h[f]) &&
                                    (m && (g.f ? g.t[g.p](g.s) : (g.t[g.p] = g.s), (i = !0)),
                                    g.pg && g.t._kill(j) && (i = !0),
                                    (g.pg && 0 !== g.t._overwriteProps.length) || (g._prev ? (g._prev._next = g._next) : g === this._firstPT && (this._firstPT = g._next), g._next && (g._next._prev = g._prev), (g._next = g._prev = null)),
                                    delete h[f]),
                                    k && (e[f] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1);
                        }
                    }
                    return i;
                }),
                (h.invalidate = function () {
                    return (
                        this._notifyPluginsOfEnabled && G._onPluginEvent("_onDisable", this),
                        (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
                        (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
                        (this._propLookup = this._targets ? {} : []),
                        D.prototype.invalidate.call(this),
                        this.vars.immediateRender && ((this._time = -m), this.render(Math.min(0, -this._delay))),
                        this
                    );
                }),
                (h._enabled = function (a, b) {
                    if ((j || i.wake(), a && this._gc)) {
                        var c,
                            d = this._targets;
                        if (d) for (c = d.length; --c > -1; ) this._siblings[c] = $(d[c], this, !0);
                        else this._siblings = $(this.target, this, !0);
                    }
                    return D.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? G._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1;
                }),
                (G.to = function (a, b, c) {
                    return new G(a, b, c);
                }),
                (G.from = function (a, b, c) {
                    return (c.runBackwards = !0), (c.immediateRender = 0 != c.immediateRender), new G(a, b, c);
                }),
                (G.fromTo = function (a, b, c, d) {
                    return (d.startAt = c), (d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender), new G(a, b, d);
                }),
                (G.delayedCall = function (a, b, c, d, e) {
                    return new G(b, 0, { delay: a, onComplete: b, onCompleteParams: c, callbackScope: d, onReverseComplete: b, onReverseCompleteParams: c, immediateRender: !1, lazy: !1, useFrames: e, overwrite: 0 });
                }),
                (G.set = function (a, b) {
                    return new G(a, 0, b);
                }),
                (G.getTweensOf = function (a, b) {
                    if (null == a) return [];
                    a = "string" != typeof a ? a : G.selector(a) || a;
                    var c, d, e, f;
                    if ((p(a) || H(a)) && "number" != typeof a[0]) {
                        for (c = a.length, d = []; --c > -1; ) d = d.concat(G.getTweensOf(a[c], b));
                        for (c = d.length; --c > -1; ) for (f = d[c], e = c; --e > -1; ) f === d[e] && d.splice(c, 1);
                    } else if (a._gsTweenID) for (d = $(a).concat(), c = d.length; --c > -1; ) (d[c]._gc || (b && !d[c].isActive())) && d.splice(c, 1);
                    return d || [];
                }),
                (G.killTweensOf = G.killDelayedCallsTo = function (a, b, c) {
                    "object" == typeof b && ((c = b), (b = !1));
                    for (var d = G.getTweensOf(a, b), e = d.length; --e > -1; ) d[e]._kill(c, a);
                });
            var ca = t(
                "plugins.TweenPlugin",
                function (a, b) {
                    (this._overwriteProps = (a || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = b || 0), (this._super = ca.prototype);
                },
                !0
            );
            if (
                ((h = ca.prototype),
                (ca.version = "1.19.0"),
                (ca.API = 2),
                (h._firstPT = null),
                (h._addTween = P),
                (h.setRatio = N),
                (h._kill = function (a) {
                    var b,
                        c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else for (b = c.length; --b > -1; ) null != a[c[b]] && c.splice(b, 1);
                    for (; d; ) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? ((d._prev._next = d._next), (d._prev = null)) : this._firstPT === d && (this._firstPT = d._next)), (d = d._next);
                    return !1;
                }),
                (h._mod = h._roundProps = function (a) {
                    for (var b, c = this._firstPT; c; ) (b = a[this._propName] || (null != c.n && a[c.n.split(this._propName + "_").join("")])), b && "function" == typeof b && (2 === c.f ? (c.t._applyPT.m = b) : (c.m = b)), (c = c._next);
                }),
                (G._onPluginEvent = function (a, b) {
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h; ) {
                            for (g = h._next, d = e; d && d.pr > h.pr; ) d = d._next;
                            (h._prev = d ? d._prev : f) ? (h._prev._next = h) : (e = h), (h._next = d) ? (d._prev = h) : (f = h), (h = g);
                        }
                        h = b._firstPT = e;
                    }
                    for (; h; ) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), (h = h._next);
                    return c;
                }),
                (ca.activate = function (a) {
                    for (var b = a.length; --b > -1; ) a[b].API === ca.API && (R[new a[b]()._propName] = a[b]);
                    return !0;
                }),
                (s.plugin = function (a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b,
                        c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
                        g = t(
                            "plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin",
                            function () {
                                ca.call(this, c, d), (this._overwriteProps = e || []);
                            },
                            a.global === !0
                        ),
                        h = (g.prototype = new ca(c));
                    (h.constructor = g), (g.API = a.API);
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return (g.version = a.version), ca.activate([g]), g;
                }),
                (f = a._gsQueue))
            ) {
                for (g = 0; g < f.length; g++) f[g]();
                for (h in q) q[h].func || a.console.log("GSAP encountered missing dependency: " + h);
            }
            j = !1;
        }
    })("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*! ScrollMagic v2.0.6 | (c) 2018 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */

!(function (e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? (module.exports = t()) : (e.ScrollMagic = t());
})(this, function () {
    "use strict";
    var e = function () {};
    (e.version = "2.0.6"), window.addEventListener("mousewheel", function () {});
    var t = "data-scrollmagic-pin-spacer";
    e.Controller = function (r) {
        var o,
            s,
            a = "ScrollMagic.Controller",
            l = "FORWARD",
            c = "REVERSE",
            f = "PAUSED",
            u = n.defaults,
            d = this,
            h = i.extend({}, u, r),
            g = [],
            p = !1,
            v = 0,
            m = f,
            w = !0,
            y = 0,
            S = !0,
            b = function () {
                for (var e in h) u.hasOwnProperty(e) || delete h[e];
                if (((h.container = i.get.elements(h.container)[0]), !h.container)) throw a + " init failed.";
                (w = h.container === window || h.container === document.body || !document.body.contains(h.container)),
                    w && (h.container = window),
                    (y = z()),
                    h.container.addEventListener("resize", T),
                    h.container.addEventListener("scroll", T);
                var t = parseInt(h.refreshInterval, 10);
                (h.refreshInterval = i.type.Number(t) ? t : u.refreshInterval), E();
            },
            E = function () {
                h.refreshInterval > 0 && (s = window.setTimeout(A, h.refreshInterval));
            },
            x = function () {
                return h.vertical ? i.get.scrollTop(h.container) : i.get.scrollLeft(h.container);
            },
            z = function () {
                return h.vertical ? i.get.height(h.container) : i.get.width(h.container);
            },
            C = (this._setScrollPos = function (e) {
                h.vertical ? (w ? window.scrollTo(i.get.scrollLeft(), e) : (h.container.scrollTop = e)) : w ? window.scrollTo(e, i.get.scrollTop()) : (h.container.scrollLeft = e);
            }),
            F = function () {
                if (S && p) {
                    var e = i.type.Array(p) ? p : g.slice(0);
                    p = !1;
                    var t = v;
                    v = d.scrollPos();
                    var n = v - t;
                    0 !== n && (m = n > 0 ? l : c),
                        m === c && e.reverse(),
                        e.forEach(function (e) {
                            e.update(!0);
                        });
                }
            },
            L = function () {
                o = i.rAF(F);
            },
            T = function (e) {
                "resize" == e.type && ((y = z()), (m = f)), p !== !0 && ((p = !0), L());
            },
            A = function () {
                if (!w && y != z()) {
                    var e;
                    try {
                        e = new Event("resize", { bubbles: !1, cancelable: !1 });
                    } catch (t) {
                        (e = document.createEvent("Event")), e.initEvent("resize", !1, !1);
                    }
                    h.container.dispatchEvent(e);
                }
                g.forEach(function (e) {
                    e.refresh();
                }),
                    E();
            };
        this._options = h;
        var N = function (e) {
            if (e.length <= 1) return e;
            var t = e.slice(0);
            return (
                t.sort(function (e, t) {
                    return e.scrollOffset() > t.scrollOffset() ? 1 : -1;
                }),
                t
            );
        };
        return (
            (this.addScene = function (t) {
                if (i.type.Array(t))
                    t.forEach(function (e) {
                        d.addScene(e);
                    });
                else if (t instanceof e.Scene)
                    if (t.controller() !== d) t.addTo(d);
                    else if (g.indexOf(t) < 0) {
                        g.push(t),
                            (g = N(g)),
                            t.on("shift.controller_sort", function () {
                                g = N(g);
                            });
                        for (var n in h.globalSceneOptions) t[n] && t[n].call(t, h.globalSceneOptions[n]);
                    }
                return d;
            }),
            (this.removeScene = function (e) {
                if (i.type.Array(e))
                    e.forEach(function (e) {
                        d.removeScene(e);
                    });
                else {
                    var t = g.indexOf(e);
                    t > -1 && (e.off("shift.controller_sort"), g.splice(t, 1), e.remove());
                }
                return d;
            }),
            (this.updateScene = function (t, n) {
                return (
                    i.type.Array(t)
                        ? t.forEach(function (e) {
                              d.updateScene(e, n);
                          })
                        : n
                        ? t.update(!0)
                        : p !== !0 && t instanceof e.Scene && ((p = p || []), -1 == p.indexOf(t) && p.push(t), (p = N(p)), L()),
                    d
                );
            }),
            (this.update = function (e) {
                return T({ type: "resize" }), e && F(), d;
            }),
            (this.scrollTo = function (n, r) {
                if (i.type.Number(n)) C.call(h.container, n, r);
                else if (n instanceof e.Scene) n.controller() === d && d.scrollTo(n.scrollOffset(), r);
                else if (i.type.Function(n)) C = n;
                else {
                    var o = i.get.elements(n)[0];
                    if (o) {
                        for (; o.parentNode.hasAttribute(t); ) o = o.parentNode;
                        var s = h.vertical ? "top" : "left",
                            a = i.get.offset(h.container),
                            l = i.get.offset(o);
                        w || (a[s] -= d.scrollPos()), d.scrollTo(l[s] - a[s], r);
                    }
                }
                return d;
            }),
            (this.scrollPos = function (e) {
                return arguments.length ? (i.type.Function(e) && (x = e), d) : x.call(d);
            }),
            (this.info = function (e) {
                var t = { size: y, vertical: h.vertical, scrollPos: v, scrollDirection: m, container: h.container, isDocument: w };
                return arguments.length ? (void 0 !== t[e] ? t[e] : void 0) : t;
            }),
            (this.loglevel = function () {
                return d;
            }),
            (this.enabled = function (e) {
                return arguments.length ? (S != e && ((S = !!e), d.updateScene(g, !0)), d) : S;
            }),
            (this.destroy = function (e) {
                window.clearTimeout(s);
                for (var t = g.length; t--; ) g[t].destroy(e);
                return h.container.removeEventListener("resize", T), h.container.removeEventListener("scroll", T), i.cAF(o), null;
            }),
            b(),
            d
        );
    };
    var n = { defaults: { container: window, vertical: !0, globalSceneOptions: {}, loglevel: 2, refreshInterval: 100 } };
    (e.Controller.addOption = function (e, t) {
        n.defaults[e] = t;
    }),
        (e.Controller.extend = function (t) {
            var n = this;
            (e.Controller = function () {
                return n.apply(this, arguments), (this.$super = i.extend({}, this)), t.apply(this, arguments) || this;
            }),
                i.extend(e.Controller, n),
                (e.Controller.prototype = n.prototype),
                (e.Controller.prototype.constructor = e.Controller);
        }),
        (e.Scene = function (n) {
            var o,
                s,
                a = "BEFORE",
                l = "DURING",
                c = "AFTER",
                f = r.defaults,
                u = this,
                d = i.extend({}, f, n),
                h = a,
                g = 0,
                p = { start: 0, end: 0 },
                v = 0,
                m = !0,
                w = function () {
                    for (var e in d) f.hasOwnProperty(e) || delete d[e];
                    for (var t in f) L(t);
                    C();
                },
                y = {};
            (this.on = function (e, t) {
                return (
                    i.type.Function(t) &&
                        ((e = e.trim().split(" ")),
                        e.forEach(function (e) {
                            var n = e.split("."),
                                r = n[0],
                                i = n[1];
                            "*" != r && (y[r] || (y[r] = []), y[r].push({ namespace: i || "", callback: t }));
                        })),
                    u
                );
            }),
                (this.off = function (e, t) {
                    return e
                        ? ((e = e.trim().split(" ")),
                          e.forEach(function (e) {
                              var n = e.split("."),
                                  r = n[0],
                                  i = n[1] || "",
                                  o = "*" === r ? Object.keys(y) : [r];
                              o.forEach(function (e) {
                                  for (var n = y[e] || [], r = n.length; r--; ) {
                                      var o = n[r];
                                      !o || (i !== o.namespace && "*" !== i) || (t && t != o.callback) || n.splice(r, 1);
                                  }
                                  n.length || delete y[e];
                              });
                          }),
                          u)
                        : u;
                }),
                (this.trigger = function (t, n) {
                    if (t) {
                        var r = t.trim().split("."),
                            i = r[0],
                            o = r[1],
                            s = y[i];
                        s &&
                            s.forEach(function (t) {
                                (o && o !== t.namespace) || t.callback.call(u, new e.Event(i, t.namespace, u, n));
                            });
                    }
                    return u;
                }),
                u
                    .on("change.internal", function (e) {
                        "loglevel" !== e.what && "tweenChanges" !== e.what && ("triggerElement" === e.what ? E() : "reverse" === e.what && u.update());
                    })
                    .on("shift.internal", function () {
                        S(), u.update();
                    }),
                (this.addTo = function (t) {
                    return (
                        t instanceof e.Controller && s != t && (s && s.removeScene(u), (s = t), C(), b(!0), E(!0), S(), s.info("container").addEventListener("resize", x), t.addScene(u), u.trigger("add", { controller: s }), u.update()), u
                    );
                }),
                (this.enabled = function (e) {
                    return arguments.length ? (m != e && ((m = !!e), u.update(!0)), u) : m;
                }),
                (this.remove = function () {
                    if (s) {
                        s.info("container").removeEventListener("resize", x);
                        var e = s;
                        (s = void 0), e.removeScene(u), u.trigger("remove");
                    }
                    return u;
                }),
                (this.destroy = function (e) {
                    return u.trigger("destroy", { reset: e }), u.remove(), u.off("*.*"), null;
                }),
                (this.update = function (e) {
                    if (s)
                        if (e)
                            if (s.enabled() && m) {
                                var t,
                                    n = s.info("scrollPos");
                                (t = d.duration > 0 ? (n - p.start) / (p.end - p.start) : n >= p.start ? 1 : 0), u.trigger("update", { startPos: p.start, endPos: p.end, scrollPos: n }), u.progress(t);
                            } else T && h === l && N(!0);
                        else s.updateScene(u, !1);
                    return u;
                }),
                (this.refresh = function () {
                    return b(), E(), u;
                }),
                (this.progress = function (e) {
                    if (arguments.length) {
                        var t = !1,
                            n = h,
                            r = s ? s.info("scrollDirection") : "PAUSED",
                            i = d.reverse || e >= g;
                        if (
                            (0 === d.duration
                                ? ((t = g != e), (g = 1 > e && i ? 0 : 1), (h = 0 === g ? a : l))
                                : 0 > e && h !== a && i
                                ? ((g = 0), (h = a), (t = !0))
                                : e >= 0 && 1 > e && i
                                ? ((g = e), (h = l), (t = !0))
                                : e >= 1 && h !== c
                                ? ((g = 1), (h = c), (t = !0))
                                : h !== l || i || N(),
                            t)
                        ) {
                            var o = { progress: g, state: h, scrollDirection: r },
                                f = h != n,
                                p = function (e) {
                                    u.trigger(e, o);
                                };
                            f && n !== l && (p("enter"), p(n === a ? "start" : "end")), p("progress"), f && h !== l && (p(h === a ? "start" : "end"), p("leave"));
                        }
                        return u;
                    }
                    return g;
                });
            var S = function () {
                    (p = { start: v + d.offset }), s && d.triggerElement && (p.start -= s.info("size") * d.triggerHook), (p.end = p.start + d.duration);
                },
                b = function (e) {
                    if (o) {
                        var t = "duration";
                        F(t, o.call(u)) && !e && (u.trigger("change", { what: t, newval: d[t] }), u.trigger("shift", { reason: t }));
                    }
                },
                E = function (e) {
                    var n = 0,
                        r = d.triggerElement;
                    if (s && (r || v > 0)) {
                        if (r)
                            if (r.parentNode) {
                                for (var o = s.info(), a = i.get.offset(o.container), l = o.vertical ? "top" : "left"; r.parentNode.hasAttribute(t); ) r = r.parentNode;
                                var c = i.get.offset(r);
                                o.isDocument || (a[l] -= s.scrollPos()), (n = c[l] - a[l]);
                            } else u.triggerElement(void 0);
                        var f = n != v;
                        (v = n), f && !e && u.trigger("shift", { reason: "triggerElementPosition" });
                    }
                },
                x = function () {
                    d.triggerHook > 0 && u.trigger("shift", { reason: "containerResize" });
                },
                z = i.extend(r.validate, {
                    duration: function (e) {
                        if (i.type.String(e) && e.match(/^(\.|\d)*\d+%$/)) {
                            var t = parseFloat(e) / 100;
                            e = function () {
                                return s ? s.info("size") * t : 0;
                            };
                        }
                        if (i.type.Function(e)) {
                            o = e;
                            try {
                                e = parseFloat(o());
                            } catch (n) {
                                e = -1;
                            }
                        }
                        if (((e = parseFloat(e)), !i.type.Number(e) || 0 > e)) throw o ? ((o = void 0), 0) : 0;
                        return e;
                    },
                }),
                C = function (e) {
                    (e = arguments.length ? [e] : Object.keys(z)),
                        e.forEach(function (e) {
                            var t;
                            if (z[e])
                                try {
                                    t = z[e](d[e]);
                                } catch (n) {
                                    t = f[e];
                                } finally {
                                    d[e] = t;
                                }
                        });
                },
                F = function (e, t) {
                    var n = !1,
                        r = d[e];
                    return d[e] != t && ((d[e] = t), C(e), (n = r != d[e])), n;
                },
                L = function (e) {
                    u[e] ||
                        (u[e] = function (t) {
                            return arguments.length ? ("duration" === e && (o = void 0), F(e, t) && (u.trigger("change", { what: e, newval: d[e] }), r.shifts.indexOf(e) > -1 && u.trigger("shift", { reason: e })), u) : d[e];
                        });
                };
            (this.controller = function () {
                return s;
            }),
                (this.state = function () {
                    return h;
                }),
                (this.scrollOffset = function () {
                    return p.start;
                }),
                (this.triggerPosition = function () {
                    var e = d.offset;
                    return s && (e += d.triggerElement ? v : s.info("size") * u.triggerHook()), e;
                });
            var T, A;
            u.on("shift.internal", function (e) {
                var t = "duration" === e.reason;
                ((h === c && t) || (h === l && 0 === d.duration)) && N(), t && O();
            })
                .on("progress.internal", function () {
                    N();
                })
                .on("add.internal", function () {
                    O();
                })
                .on("destroy.internal", function (e) {
                    u.removePin(e.reset);
                });
            var N = function (e) {
                    if (T && s) {
                        var t = s.info(),
                            n = A.spacer.firstChild;
                        if (e || h !== l) {
                            var r = { position: A.inFlow ? "relative" : "absolute", top: 0, left: 0 },
                                o = i.css(n, "position") != r.position;
                            A.pushFollowers
                                ? d.duration > 0 && (h === c && 0 === parseFloat(i.css(A.spacer, "padding-top")) ? (o = !0) : h === a && 0 === parseFloat(i.css(A.spacer, "padding-bottom")) && (o = !0))
                                : (r[t.vertical ? "top" : "left"] = d.duration * g),
                                i.css(n, r),
                                o && O();
                        } else {
                            "fixed" != i.css(n, "position") && (i.css(n, { position: "fixed" }), O());
                            var f = i.get.offset(A.spacer, !0),
                                u = d.reverse || 0 === d.duration ? t.scrollPos - p.start : Math.round(g * d.duration * 10) / 10;
                            (f[t.vertical ? "top" : "left"] += u), i.css(A.spacer.firstChild, { top: f.top, left: f.left });
                        }
                    }
                },
                O = function () {
                    if (T && s && A.inFlow) {
                        var e = h === l,
                            t = s.info("vertical"),
                            n = A.spacer.firstChild,
                            r = i.isMarginCollapseType(i.css(A.spacer, "display")),
                            o = {};
                        A.relSize.width || A.relSize.autoFullWidth
                            ? e
                                ? i.css(T, { width: i.get.width(A.spacer) })
                                : i.css(T, { width: "100%" })
                            : ((o["min-width"] = i.get.width(t ? T : n, !0, !0)), (o.width = e ? o["min-width"] : "auto")),
                            A.relSize.height
                                ? e
                                    ? i.css(T, { height: i.get.height(A.spacer) - (A.pushFollowers ? d.duration : 0) })
                                    : i.css(T, { height: "100%" })
                                : ((o["min-height"] = i.get.height(t ? n : T, !0, !r)), (o.height = e ? o["min-height"] : "auto")),
                            A.pushFollowers && ((o["padding" + (t ? "Top" : "Left")] = d.duration * g), (o["padding" + (t ? "Bottom" : "Right")] = d.duration * (1 - g))),
                            i.css(A.spacer, o);
                    }
                },
                _ = function () {
                    s && T && h === l && !s.info("isDocument") && N();
                },
                P = function () {
                    s && T && h === l && (((A.relSize.width || A.relSize.autoFullWidth) && i.get.width(window) != i.get.width(A.spacer.parentNode)) || (A.relSize.height && i.get.height(window) != i.get.height(A.spacer.parentNode))) && O();
                },
                D = function (e) {
                    s && T && h === l && !s.info("isDocument") && (e.preventDefault(), s._setScrollPos(s.info("scrollPos") - ((e.wheelDelta || e[s.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -e.detail)));
                };
            (this.setPin = function (e, n) {
                var r = { pushFollowers: !0, spacerClass: "scrollmagic-pin-spacer" };
                if (((n = i.extend({}, r, n)), (e = i.get.elements(e)[0]), !e)) return u;
                if ("fixed" === i.css(e, "position")) return u;
                if (T) {
                    if (T === e) return u;
                    u.removePin();
                }
                T = e;
                var o = T.parentNode.style.display,
                    s = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
                T.parentNode.style.display = "none";
                var a = "absolute" != i.css(T, "position"),
                    l = i.css(T, s.concat(["display"])),
                    c = i.css(T, ["width", "height"]);
                (T.parentNode.style.display = o), !a && n.pushFollowers && (n.pushFollowers = !1);
                var f = T.parentNode.insertBefore(document.createElement("div"), T),
                    d = i.extend(l, { position: a ? "relative" : "absolute", boxSizing: "content-box", mozBoxSizing: "content-box", webkitBoxSizing: "content-box" });
                if (
                    (a || i.extend(d, i.css(T, ["width", "height"])),
                    i.css(f, d),
                    f.setAttribute(t, ""),
                    i.addClass(f, n.spacerClass),
                    (A = {
                        spacer: f,
                        relSize: { width: "%" === c.width.slice(-1), height: "%" === c.height.slice(-1), autoFullWidth: "auto" === c.width && a && i.isMarginCollapseType(l.display) },
                        pushFollowers: n.pushFollowers,
                        inFlow: a,
                    }),
                    !T.___origStyle)
                ) {
                    T.___origStyle = {};
                    var h = T.style,
                        g = s.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
                    g.forEach(function (e) {
                        T.___origStyle[e] = h[e] || "";
                    });
                }
                return (
                    A.relSize.width && i.css(f, { width: c.width }),
                    A.relSize.height && i.css(f, { height: c.height }),
                    f.appendChild(T),
                    i.css(T, { position: a ? "relative" : "absolute", margin: "auto", top: "auto", left: "auto", bottom: "auto", right: "auto" }),
                    (A.relSize.width || A.relSize.autoFullWidth) && i.css(T, { boxSizing: "border-box", mozBoxSizing: "border-box", webkitBoxSizing: "border-box" }),
                    window.addEventListener("scroll", _),
                    window.addEventListener("resize", _),
                    window.addEventListener("resize", P),
                    T.addEventListener("mousewheel", D),
                    T.addEventListener("DOMMouseScroll", D),
                    N(),
                    u
                );
            }),
                (this.removePin = function (e) {
                    if (T) {
                        if ((h === l && N(!0), e || !s)) {
                            var n = A.spacer.firstChild;
                            if (n.hasAttribute(t)) {
                                var r = A.spacer.style,
                                    o = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
                                    a = {};
                                o.forEach(function (e) {
                                    a[e] = r[e] || "";
                                }),
                                    i.css(n, a);
                            }
                            A.spacer.parentNode.insertBefore(n, A.spacer), A.spacer.parentNode.removeChild(A.spacer), T.parentNode.hasAttribute(t) || (i.css(T, T.___origStyle), delete T.___origStyle);
                        }
                        window.removeEventListener("scroll", _),
                            window.removeEventListener("resize", _),
                            window.removeEventListener("resize", P),
                            T.removeEventListener("mousewheel", D),
                            T.removeEventListener("DOMMouseScroll", D),
                            (T = void 0);
                    }
                    return u;
                });
            var R,
                k = [];
            return (
                u.on("destroy.internal", function (e) {
                    u.removeClassToggle(e.reset);
                }),
                (this.setClassToggle = function (e, t) {
                    var n = i.get.elements(e);
                    return 0 !== n.length && i.type.String(t)
                        ? (k.length > 0 && u.removeClassToggle(),
                          (R = t),
                          (k = n),
                          u.on("enter.internal_class leave.internal_class", function (e) {
                              var t = "enter" === e.type ? i.addClass : i.removeClass;
                              k.forEach(function (e) {
                                  t(e, R);
                              });
                          }),
                          u)
                        : u;
                }),
                (this.removeClassToggle = function (e) {
                    return (
                        e &&
                            k.forEach(function (e) {
                                i.removeClass(e, R);
                            }),
                        u.off("start.internal_class end.internal_class"),
                        (R = void 0),
                        (k = []),
                        u
                    );
                }),
                w(),
                u
            );
        });
    var r = {
        defaults: { duration: 0, offset: 0, triggerElement: void 0, triggerHook: 0.5, reverse: !0, loglevel: 2 },
        validate: {
            offset: function (e) {
                if (((e = parseFloat(e)), !i.type.Number(e))) throw 0;
                return e;
            },
            triggerElement: function (e) {
                if ((e = e || void 0)) {
                    var t = i.get.elements(e)[0];
                    if (!t || !t.parentNode) throw 0;
                    e = t;
                }
                return e;
            },
            triggerHook: function (e) {
                var t = { onCenter: 0.5, onEnter: 1, onLeave: 0 };
                if (i.type.Number(e)) e = Math.max(0, Math.min(parseFloat(e), 1));
                else {
                    if (!(e in t)) throw 0;
                    e = t[e];
                }
                return e;
            },
            reverse: function (e) {
                return !!e;
            },
        },
        shifts: ["duration", "offset", "triggerHook"],
    };
    (e.Scene.addOption = function (e, t, n, i) {
        e in r.defaults || ((r.defaults[e] = t), (r.validate[e] = n), i && r.shifts.push(e));
    }),
        (e.Scene.extend = function (t) {
            var n = this;
            (e.Scene = function () {
                return n.apply(this, arguments), (this.$super = i.extend({}, this)), t.apply(this, arguments) || this;
            }),
                i.extend(e.Scene, n),
                (e.Scene.prototype = n.prototype),
                (e.Scene.prototype.constructor = e.Scene);
        }),
        (e.Event = function (e, t, n, r) {
            r = r || {};
            for (var i in r) this[i] = r[i];
            return (this.type = e), (this.target = this.currentTarget = n), (this.namespace = t || ""), (this.timeStamp = this.timestamp = Date.now()), this;
        });
    var i = (e._util = (function (e) {
        var t,
            n = {},
            r = function (e) {
                return parseFloat(e) || 0;
            },
            i = function (t) {
                return t.currentStyle ? t.currentStyle : e.getComputedStyle(t);
            },
            o = function (t, n, o, s) {
                if (((n = n === document ? e : n), n === e)) s = !1;
                else if (!u.DomElement(n)) return 0;
                t = t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
                var a = (o ? n["offset" + t] || n["outer" + t] : n["client" + t] || n["inner" + t]) || 0;
                if (o && s) {
                    var l = i(n);
                    a += "Height" === t ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight);
                }
                return a;
            },
            s = function (e) {
                return e.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, function (e) {
                    return e[1].toUpperCase();
                });
            };
        (n.extend = function (e) {
            for (e = e || {}, t = 1; t < arguments.length; t++) if (arguments[t]) for (var n in arguments[t]) arguments[t].hasOwnProperty(n) && (e[n] = arguments[t][n]);
            return e;
        }),
            (n.isMarginCollapseType = function (e) {
                return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(e) > -1;
            });
        var a = 0,
            l = ["ms", "moz", "webkit", "o"],
            c = e.requestAnimationFrame,
            f = e.cancelAnimationFrame;
        for (t = 0; !c && t < l.length; ++t) (c = e[l[t] + "RequestAnimationFrame"]), (f = e[l[t] + "CancelAnimationFrame"] || e[l[t] + "CancelRequestAnimationFrame"]);
        c ||
            (c = function (t) {
                var n = new Date().getTime(),
                    r = Math.max(0, 16 - (n - a)),
                    i = e.setTimeout(function () {
                        t(n + r);
                    }, r);
                return (a = n + r), i;
            }),
            f ||
                (f = function (t) {
                    e.clearTimeout(t);
                }),
            (n.rAF = c.bind(e)),
            (n.cAF = f.bind(e));
        var u = (n.type = function (e) {
            return Object.prototype.toString
                .call(e)
                .replace(/^\[object (.+)\]$/, "$1")
                .toLowerCase();
        });
        (u.String = function (e) {
            return "string" === u(e);
        }),
            (u.Function = function (e) {
                return "function" === u(e);
            }),
            (u.Array = function (e) {
                return Array.isArray(e);
            }),
            (u.Number = function (e) {
                return !u.Array(e) && e - parseFloat(e) + 1 >= 0;
            }),
            (u.DomElement = function (e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName;
            });
        var d = (n.get = {});
        return (
            (d.elements = function (t) {
                var n = [];
                if (u.String(t))
                    try {
                        t = document.querySelectorAll(t);
                    } catch (r) {
                        return n;
                    }
                if ("nodelist" === u(t) || u.Array(t))
                    for (var i = 0, o = (n.length = t.length); o > i; i++) {
                        var s = t[i];
                        n[i] = u.DomElement(s) ? s : d.elements(s);
                    }
                else (u.DomElement(t) || t === document || t === e) && (n = [t]);
                return n;
            }),
            (d.scrollTop = function (t) {
                return t && "number" == typeof t.scrollTop ? t.scrollTop : e.pageYOffset || 0;
            }),
            (d.scrollLeft = function (t) {
                return t && "number" == typeof t.scrollLeft ? t.scrollLeft : e.pageXOffset || 0;
            }),
            (d.width = function (e, t, n) {
                return o("width", e, t, n);
            }),
            (d.height = function (e, t, n) {
                return o("height", e, t, n);
            }),
            (d.offset = function (e, t) {
                var n = { top: 0, left: 0 };
                if (e && e.getBoundingClientRect) {
                    var r = e.getBoundingClientRect();
                    (n.top = r.top), (n.left = r.left), t || ((n.top += d.scrollTop()), (n.left += d.scrollLeft()));
                }
                return n;
            }),
            (n.addClass = function (e, t) {
                t && (e.classList ? e.classList.add(t) : (e.className += " " + t));
            }),
            (n.removeClass = function (e, t) {
                t && (e.classList ? e.classList.remove(t) : (e.className = e.className.replace(RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi"), " ")));
            }),
            (n.css = function (e, t) {
                if (u.String(t)) return i(e)[s(t)];
                if (u.Array(t)) {
                    var n = {},
                        r = i(e);
                    return (
                        t.forEach(function (e) {
                            n[e] = r[s(e)];
                        }),
                        n
                    );
                }
                for (var o in t) {
                    var a = t[o];
                    a == parseFloat(a) && (a += "px"), (e.style[s(o)] = a);
                }
            }),
            n
        );
    })(window || {}));
    return e;
});

/*!
 ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io
* //cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js
* */

!(function (e, r) {
    "function" == typeof define && define.amd ? define(["ScrollMagic"], r) : r("object" == typeof exports ? require("scrollmagic") : e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic));
})(this, function (e) {
    "use strict";
    var r = "0.85em",
        t = "9999",
        i = 15,
        o = e._util,
        n = 0;
    e.Scene.extend(function () {
        var e,
            r = this;
        (r.addIndicators = function (t) {
            if (!e) {
                var i = { name: "", indent: 0, parent: void 0, colorStart: "green", colorEnd: "red", colorTrigger: "blue" };
                (t = o.extend({}, i, t)), n++, (e = new s(r, t)), r.on("add.plugin_addIndicators", e.add), r.on("remove.plugin_addIndicators", e.remove), r.on("destroy.plugin_addIndicators", r.removeIndicators), r.controller() && e.add();
            }
            return r;
        }),
            (r.removeIndicators = function () {
                return e && (e.remove(), this.off("*.plugin_addIndicators"), (e = void 0)), r;
            });
    }),
        e.Controller.addOption("addIndicators", !1),
        e.Controller.extend(function () {
            var r = this,
                t = r.info(),
                n = t.container,
                s = t.isDocument,
                d = t.vertical,
                a = { groups: [] };
            this._indicators = a;
            var g = function () {
                    a.updateBoundsPositions();
                },
                p = function () {
                    a.updateTriggerGroupPositions();
                };
            return (
                n.addEventListener("resize", p),
                s || (window.addEventListener("resize", p), window.addEventListener("scroll", p)),
                n.addEventListener("resize", g),
                n.addEventListener("scroll", g),
                (this._indicators.updateBoundsPositions = function (e) {
                    for (
                        var r,
                            t,
                            s,
                            g = e ? [o.extend({}, e.triggerGroup, { members: [e] })] : a.groups,
                            p = g.length,
                            u = {},
                            c = d ? "left" : "top",
                            l = d ? "width" : "height",
                            f = d ? o.get.scrollLeft(n) + o.get.width(n) - i : o.get.scrollTop(n) + o.get.height(n) - i;
                        p--;

                    )
                        for (s = g[p], r = s.members.length, t = o.get[l](s.element.firstChild); r--; ) (u[c] = f - t), o.css(s.members[r].bounds, u);
                }),
                (this._indicators.updateTriggerGroupPositions = function (e) {
                    for (
                        var t,
                            g,
                            p,
                            u,
                            c,
                            l = e ? [e] : a.groups,
                            f = l.length,
                            m = s ? document.body : n,
                            h = s ? { top: 0, left: 0 } : o.get.offset(m, !0),
                            v = d ? o.get.width(n) - i : o.get.height(n) - i,
                            b = d ? "width" : "height",
                            G = d ? "Y" : "X";
                        f--;

                    )
                        (t = l[f]),
                            (g = t.element),
                            (p = t.triggerHook * r.info("size")),
                            (u = o.get[b](g.firstChild.firstChild)),
                            (c = p > u ? "translate" + G + "(-100%)" : ""),
                            o.css(g, { top: h.top + (d ? p : v - t.members[0].options.indent), left: h.left + (d ? v - t.members[0].options.indent : p) }),
                            o.css(g.firstChild.firstChild, { "-ms-transform": c, "-webkit-transform": c, transform: c });
                }),
                (this._indicators.updateTriggerGroupLabel = function (e) {
                    var r = "trigger" + (e.members.length > 1 ? "" : " " + e.members[0].options.name),
                        t = e.element.firstChild.firstChild,
                        i = t.textContent !== r;
                    i && ((t.textContent = r), d && a.updateBoundsPositions());
                }),
                (this.addScene = function (t) {
                    this._options.addIndicators && t instanceof e.Scene && t.controller() === r && t.addIndicators(), this.$super.addScene.apply(this, arguments);
                }),
                (this.destroy = function () {
                    n.removeEventListener("resize", p),
                        s || (window.removeEventListener("resize", p), window.removeEventListener("scroll", p)),
                        n.removeEventListener("resize", g),
                        n.removeEventListener("scroll", g),
                        this.$super.destroy.apply(this, arguments);
                }),
                r
            );
        });
    var s = function (e, r) {
            var t,
                i,
                s = this,
                a = d.bounds(),
                g = d.start(r.colorStart),
                p = d.end(r.colorEnd),
                u = r.parent && o.get.elements(r.parent)[0];
            (r.name = r.name || n),
                (g.firstChild.textContent += " " + r.name),
                (p.textContent += " " + r.name),
                a.appendChild(g),
                a.appendChild(p),
                (s.options = r),
                (s.bounds = a),
                (s.triggerGroup = void 0),
                (this.add = function () {
                    (i = e.controller()), (t = i.info("vertical"));
                    var r = i.info("isDocument");
                    u || (u = r ? document.body : i.info("container")),
                        r || "static" !== o.css(u, "position") || o.css(u, { position: "relative" }),
                        e.on("change.plugin_addIndicators", l),
                        e.on("shift.plugin_addIndicators", c),
                        G(),
                        h(),
                        setTimeout(function () {
                            i._indicators.updateBoundsPositions(s);
                        }, 0);
                }),
                (this.remove = function () {
                    if (s.triggerGroup) {
                        if ((e.off("change.plugin_addIndicators", l), e.off("shift.plugin_addIndicators", c), s.triggerGroup.members.length > 1)) {
                            var r = s.triggerGroup;
                            r.members.splice(r.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(r), i._indicators.updateTriggerGroupPositions(r), (s.triggerGroup = void 0);
                        } else b();
                        m();
                    }
                });
            var c = function () {
                    h();
                },
                l = function (e) {
                    "triggerHook" === e.what && G();
                },
                f = function () {
                    var e = i.info("vertical");
                    o.css(g.firstChild, { "border-bottom-width": e ? 1 : 0, "border-right-width": e ? 0 : 1, bottom: e ? -1 : r.indent, right: e ? r.indent : -1, padding: e ? "0 8px" : "2px 4px" }),
                        o.css(p, { "border-top-width": e ? 1 : 0, "border-left-width": e ? 0 : 1, top: e ? "100%" : "", right: e ? r.indent : "", bottom: e ? "" : r.indent, left: e ? "" : "100%", padding: e ? "0 8px" : "2px 4px" }),
                        u.appendChild(a);
                },
                m = function () {
                    a.parentNode.removeChild(a);
                },
                h = function () {
                    a.parentNode !== u && f();
                    var r = {};
                    (r[t ? "top" : "left"] = e.triggerPosition()), (r[t ? "height" : "width"] = e.duration()), o.css(a, r), o.css(p, { display: e.duration() > 0 ? "" : "none" });
                },
                v = function () {
                    var n = d.trigger(r.colorTrigger),
                        a = {};
                    (a[t ? "right" : "bottom"] = 0), (a[t ? "border-top-width" : "border-left-width"] = 1), o.css(n.firstChild, a), o.css(n.firstChild.firstChild, { padding: t ? "0 8px 3px 8px" : "3px 4px" }), document.body.appendChild(n);
                    var g = { triggerHook: e.triggerHook(), element: n, members: [s] };
                    i._indicators.groups.push(g), (s.triggerGroup = g), i._indicators.updateTriggerGroupLabel(g), i._indicators.updateTriggerGroupPositions(g);
                },
                b = function () {
                    i._indicators.groups.splice(i._indicators.groups.indexOf(s.triggerGroup), 1), s.triggerGroup.element.parentNode.removeChild(s.triggerGroup.element), (s.triggerGroup = void 0);
                },
                G = function () {
                    var r = e.triggerHook(),
                        t = 1e-4;
                    if (!(s.triggerGroup && Math.abs(s.triggerGroup.triggerHook - r) < t)) {
                        for (var o, n = i._indicators.groups, d = n.length; d--; )
                            if (((o = n[d]), Math.abs(o.triggerHook - r) < t))
                                return (
                                    s.triggerGroup &&
                                        (1 === s.triggerGroup.members.length
                                            ? b()
                                            : (s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup))),
                                    o.members.push(s),
                                    (s.triggerGroup = o),
                                    void i._indicators.updateTriggerGroupLabel(o)
                                );
                        if (s.triggerGroup) {
                            if (1 === s.triggerGroup.members.length) return (s.triggerGroup.triggerHook = r), void i._indicators.updateTriggerGroupPositions(s.triggerGroup);
                            s.triggerGroup.members.splice(s.triggerGroup.members.indexOf(s), 1), i._indicators.updateTriggerGroupLabel(s.triggerGroup), i._indicators.updateTriggerGroupPositions(s.triggerGroup), (s.triggerGroup = void 0);
                        }
                        v();
                    }
                };
        },
        d = {
            start: function (e) {
                var r = document.createElement("div");
                (r.textContent = "start"), o.css(r, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e });
                var t = document.createElement("div");
                return o.css(t, { position: "absolute", overflow: "visible", width: 0, height: 0 }), t.appendChild(r), t;
            },
            end: function (e) {
                var r = document.createElement("div");
                return (r.textContent = "end"), o.css(r, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e }), r;
            },
            bounds: function () {
                var e = document.createElement("div");
                return o.css(e, { position: "absolute", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": r }), (e.style.zIndex = t), e;
            },
            trigger: function (e) {
                var i = document.createElement("div");
                (i.textContent = "trigger"), o.css(i, { position: "relative" });
                var n = document.createElement("div");
                o.css(n, { position: "absolute", overflow: "visible", "border-width": 0, "border-style": "solid", color: e, "border-color": e }), n.appendChild(i);
                var s = document.createElement("div");
                return o.css(s, { position: "fixed", overflow: "visible", "white-space": "nowrap", "pointer-events": "none", "font-size": r }), (s.style.zIndex = t), s.appendChild(n), s;
            },
        };
});

/*!
 ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io
* //cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js
*  */

!(function (e, n) {
    "function" == typeof define && define.amd
        ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n)
        : "object" == typeof exports
        ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax))
        : n(e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic), e.TweenMax || e.TweenLite, e.TimelineMax || e.TimelineLite);
})(this, function (e, n, r) {
    "use strict";
    e.Scene.addOption("tweenChanges", !1, function (e) {
        return !!e;
    }),
        e.Scene.extend(function () {
            var e,
                t = this;
            t.on("progress.plugin_gsap", function () {
                i();
            }),
                t.on("destroy.plugin_gsap", function (e) {
                    t.removeTween(e.reset);
                });
            var i = function () {
                if (e) {
                    var n = t.progress(),
                        r = t.state();
                    e.repeat && -1 === e.repeat()
                        ? "DURING" === r && e.paused()
                            ? e.play()
                            : "DURING" === r || e.paused() || e.pause()
                        : n != e.progress() && (0 === t.duration() ? (n > 0 ? e.play() : e.reverse()) : t.tweenChanges() && e.tweenTo ? e.tweenTo(n * e.duration()) : e.progress(n).pause());
                }
            };
            (t.setTween = function (o, a, s) {
                var u;
                arguments.length > 1 && (arguments.length < 3 && ((s = a), (a = 1)), (o = n.to(o, a, s)));
                try {
                    (u = r ? new r({ smoothChildTiming: !0 }).add(o) : o), u.pause();
                } catch (e) {
                    return t;
                }
                return e && t.removeTween(), (e = u), o.repeat && -1 === o.repeat() && (e.repeat(-1), e.yoyo(o.yoyo())), i(), t;
            }),
                (t.removeTween = function (n) {
                    return e && (n && e.progress(0).pause(), e.kill(), (e = void 0)), t;
                });
        });
});


!(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
})(function (e) {
    "use strict";
    var E = !1,
        L = !1,
        M = 0,
        C = 2e3,
        N = 0,
        P = e,
        R = document,
        _ = window,
        I = P(_),
        O = [],
        Y = _.requestAnimationFrame || _.webkitRequestAnimationFrame || _.mozRequestAnimationFrame || !1,
        H = _.cancelAnimationFrame || _.webkitCancelAnimationFrame || _.mozCancelAnimationFrame || !1;
    if (Y) _.cancelAnimationFrame || (H = function (e) {});
    else {
        var s = 0;
        (Y = function (e, o) {
            var t = new Date().getTime(),
                r = Math.max(0, 16 - (t - s)),
                i = _.setTimeout(function () {
                    e(t + r);
                }, r);
            return (s = t + r), i;
        }),
            (H = function (e) {
                _.clearTimeout(e);
            });
    }
    var o,
        t,
        r,
        B = _.MutationObserver || _.WebKitMutationObserver || !1,
        X =
            Date.now ||
            function () {
                return new Date().getTime();
            },
        D = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "6px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 40,
            mousescrollstep: 27,
            touchbehavior: !1,
            emulatetouch: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: 0.3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: ((t = R.currentScript || (!!(o = R.getElementsByTagName("script")).length && o[o.length - 1])), (r = t ? t.src.split("?")[0] : ""), 0 < r.split("/").length ? r.split("/").slice(0, -1).join("/") + "/" : ""),
            preventmultitouchscrolling: !0,
            disablemutationobserver: !1,
            enableobserver: !0,
            scrollbarid: !1,
            scrollCLass: !1,
        },
        A = !1,
        l = function (e, o) {
            function t() {
                var e = b.doc.css(S.trstyle);
                return (
                    !(!e || "matrix" != e.substr(0, 6)) &&
                    e
                        .replace(/^.*\((.*)\)$/g, "$1")
                        .replace(/px/g, "")
                        .split(/, +/)
                );
            }
            function n(e, o, t) {
                var r = e.css(o),
                    i = parseFloat(r);
                if (isNaN(i)) {
                    var s = 3 == (i = h[r] || 0) ? (t ? b.win.outerHeight() - b.win.innerHeight() : b.win.outerWidth() - b.win.innerWidth()) : 1;
                    return b.isie8 && i && (i += 1), s ? i : 0;
                }
                return i;
            }
            function s(t, r, i, e) {
                b._bind(
                    t,
                    r,
                    function (e) {
                        var o = {
                            original: (e = e || _.event),
                            target: e.target || e.srcElement,
                            type: "wheel",
                            deltaMode: "MozMousePixelScroll" == e.type ? 0 : 1,
                            deltaX: 0,
                            deltaZ: 0,
                            preventDefault: function () {
                                return e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1;
                            },
                            stopImmediatePropagation: function () {
                                e.stopImmediatePropagation ? e.stopImmediatePropagation() : (e.cancelBubble = !0);
                            },
                        };
                        return (
                            "mousewheel" == r
                                ? (e.wheelDeltaX && (o.deltaX = -0.025 * e.wheelDeltaX), e.wheelDeltaY && (o.deltaY = -0.025 * e.wheelDeltaY), !o.deltaY && !o.deltaX && (o.deltaY = -0.025 * e.wheelDelta))
                                : (o.deltaY = e.detail),
                            i.call(t, o)
                        );
                    },
                    e
                );
            }
            function l(e, o, t, r) {
                b.scrollrunning || ((b.newscrolly = b.getScrollTop()), (b.newscrollx = b.getScrollLeft()), (w = X()));
                var i = X() - w;
                if (((w = X()), 350 < i ? (z = 1) : (z += (2 - z) / 10), (o = (o * z) | 0), (e = (e * z) | 0))) {
                    if (r)
                        if (e < 0) {
                            if (b.getScrollLeft() >= b.page.maxw) return !0;
                        } else if (b.getScrollLeft() <= 0) return !0;
                    var s = 0 < e ? 1 : -1;
                    v !== s && (b.scrollmom && b.scrollmom.stop(), (b.newscrollx = b.getScrollLeft()), (v = s)), (b.lastdeltax -= e);
                }
                if (o) {
                    if (
                        (function () {
                            var e = b.getScrollTop();
                            if (o < 0) {
                                if (e >= b.page.maxh) return !0;
                            } else if (e <= 0) return !0;
                        })()
                    ) {
                        if (x.nativeparentscrolling && t && !b.ispage && !b.zoomactive) return !0;
                        var n = b.view.h >> 1;
                        b.newscrolly < -n ? ((b.newscrolly = -n), (o = -1)) : b.newscrolly > b.page.maxh + n ? ((b.newscrolly = b.page.maxh + n), (o = 1)) : (o = 0);
                    }
                    var l = 0 < o ? 1 : -1;
                    g !== l && (b.scrollmom && b.scrollmom.stop(), (b.newscrolly = b.getScrollTop()), (g = l)), (b.lastdeltay -= o);
                }
                (o || e) &&
                    b.synched("relativexy", function () {
                        var e = b.lastdeltay + b.newscrolly;
                        b.lastdeltay = 0;
                        var o = b.lastdeltax + b.newscrollx;
                        (b.lastdeltax = 0), b.rail.drag || b.doScrollPos(o, e);
                    });
            }
            function i(e, o, t) {
                var r, i;
                if (!t && k) return !0;
                (0 === e.deltaMode
                    ? ((r = (-e.deltaX * (x.mousescrollstep / 54)) | 0), (i = (-e.deltaY * (x.mousescrollstep / 54)) | 0))
                    : 1 === e.deltaMode && ((r = ((-e.deltaX * x.mousescrollstep * 50) / 80) | 0), (i = ((-e.deltaY * x.mousescrollstep * 50) / 80) | 0)),
                o && x.oneaxismousemode && 0 === r && i) && ((r = i), (i = 0), t && (r < 0 ? b.getScrollLeft() >= b.page.maxw : b.getScrollLeft() <= 0) && ((i = r), (r = 0)));
                if ((b.isrtlmode && (r = -r), l(r, i, t, !0))) t && (k = !0);
                else if (((k = !1), e.stopImmediatePropagation(), e.preventDefault)) return e.preventDefault();
            }
            var b = this;
            (this.version = "3.7.6"), (this.name = "nicescroll"), (this.me = o);
            var y = P("body"),
                x = (this.opt = { doc: y, win: !1 });
            if ((P.extend(x, D), (x.snapbackspeed = 80), e)) for (var r in x) void 0 !== e[r] && (x[r] = e[r]);
            if (
                (x.disablemutationobserver && (B = !1),
                (this.doc = x.doc),
                (this.iddoc = (this.doc && this.doc[0] && this.doc[0].id) || ""),
                (this.ispage = /^BODY|HTML/.test(x.win ? x.win[0].nodeName : this.doc[0].nodeName)),
                (this.haswrapper = !1 !== x.win),
                (this.win = x.win || (this.ispage ? I : this.doc)),
                (this.docscroll = this.ispage && !this.haswrapper ? I : this.win),
                (this.body = y),
                (this.viewport = !1),
                (this.isfixed = !1),
                (this.iframe = !1),
                (this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName),
                (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
                (this.forcescreen = !1),
                (this.canshowonmouseevent = "scroll" != x.autohidemode),
                (this.onmousedown = !1),
                (this.onmouseup = !1),
                (this.onmousemove = !1),
                (this.onmousewheel = !1),
                (this.onkeypress = !1),
                (this.ongesturezoom = !1),
                (this.onclick = !1),
                (this.onscrollstart = !1),
                (this.onscrollend = !1),
                (this.onscrollcancel = !1),
                (this.onzoomin = !1),
                (this.onzoomout = !1),
                (this.view = !1),
                (this.page = !1),
                (this.scroll = { x: 0, y: 0 }),
                (this.scrollratio = { x: 0, y: 0 }),
                (this.cursorheight = 20),
                (this.scrollvaluemax = 0),
                "auto" == x.rtlmode)
            ) {
                var a = this.win[0] == _ ? this.body : this.win,
                    c = a.css("writing-mode") || a.css("-webkit-writing-mode") || a.css("-ms-writing-mode") || a.css("-moz-writing-mode");
                "horizontal-tb" == c || "lr-tb" == c || "" === c
                    ? ((this.isrtlmode = "rtl" == a.css("direction")), (this.isvertical = !1))
                    : ((this.isrtlmode = "vertical-rl" == c || "tb" == c || "tb-rl" == c || "rl-tb" == c), (this.isvertical = "vertical-rl" == c || "tb" == c || "tb-rl" == c));
            } else (this.isrtlmode = !0 === x.rtlmode), (this.isvertical = !1);
            if (((this.scrollrunning = !1), (this.scrollmom = !1), (this.observer = !1), (this.observerremover = !1), (this.observerbody = !1) !== x.scrollbarid)) this.id = x.scrollbarid;
            else for (; (this.id = "ascrail" + C++), R.getElementById(this.id); );
            (this.rail = !1),
                (this.cursor = !1),
                (this.cursorfreezed = !1),
                (this.selectiondrag = !1),
                (this.zoom = !1),
                (this.zoomactive = !1),
                (this.hasfocus = !1),
                (this.hasmousefocus = !1),
                (this.railslocked = !1),
                (this.locked = !1),
                (this.hidden = !1),
                (this.cursoractive = !0),
                (this.wheelprevented = !1),
                (this.overflowx = x.overflowx),
                (this.overflowy = x.overflowy),
                (this.nativescrollingarea = !1),
                (this.checkarea = 0),
                (this.events = []),
                (this.saved = {}),
                (this.delaylist = {}),
                (this.synclist = {}),
                (this.lastdeltax = 0),
                (this.lastdeltay = 0),
                (this.detected = (function () {
                    if (A) return A;
                    var e = R.createElement("DIV"),
                        s = e.style,
                        o = navigator.userAgent,
                        t = navigator.platform,
                        n = {};
                    return (
                        (n.haspointerlock = "pointerLockElement" in R || "webkitPointerLockElement" in R || "mozPointerLockElement" in R),
                        (n.isopera = "opera" in _),
                        (n.isopera12 = n.isopera && "getUserMedia" in navigator),
                        (n.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(_.operamini)),
                        (n.isie = "all" in R && "attachEvent" in e && !n.isopera),
                        (n.isieold = n.isie && !("msInterpolationMode" in s)),
                        (n.isie7 = n.isie && !n.isieold && (!("documentMode" in R) || 7 === R.documentMode)),
                        (n.isie8 = n.isie && "documentMode" in R && 8 === R.documentMode),
                        (n.isie9 = n.isie && "performance" in _ && 9 === R.documentMode),
                        (n.isie10 = n.isie && "performance" in _ && 10 === R.documentMode),
                        (n.isie11 = "msRequestFullscreen" in e && 11 <= R.documentMode),
                        (n.ismsedge = "msCredentials" in _),
                        (n.ismozilla = "MozAppearance" in s),
                        (n.iswebkit = !n.ismsedge && "WebkitAppearance" in s),
                        (n.ischrome = n.iswebkit && "chrome" in _),
                        (n.ischrome38 = n.ischrome && "touchAction" in s),
                        (n.ischrome22 = !n.ischrome38 && n.ischrome && n.haspointerlock),
                        (n.ischrome26 = !n.ischrome38 && n.ischrome && "transition" in s),
                        (n.cantouch = "ontouchstart" in R.documentElement || "ontouchstart" in _),
                        (n.hasw3ctouch = !!_.PointerEvent && (0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints)),
                        (n.hasmstouch = !n.hasw3ctouch && (_.MSPointerEvent || !1)),
                        (n.ismac = /^mac$/i.test(t)),
                        (n.isios = n.cantouch && /iphone|ipad|ipod/i.test(t)),
                        (n.isios4 = n.isios && !("seal" in Object)),
                        (n.isios7 = n.isios && "webkitHidden" in R),
                        (n.isios8 = n.isios && "hidden" in R),
                        (n.isios10 = n.isios && _.Proxy),
                        (n.isandroid = /android/i.test(o)),
                        (n.haseventlistener = "addEventListener" in e),
                        (n.trstyle = !1),
                        (n.hastransform = !1),
                        (n.hastranslate3d = !1),
                        (n.transitionstyle = !1),
                        (n.hastransition = !1),
                        (n.transitionend = !1),
                        (n.trstyle = "transform"),
                        (n.hastransform =
                            "transform" in s ||
                            (function () {
                                for (var e = ["msTransform", "webkitTransform", "MozTransform", "OTransform"], o = 0, t = e.length; o < t; o++)
                                    if (void 0 !== s[e[o]]) {
                                        n.trstyle = e[o];
                                        break;
                                    }
                                n.hastransform = !!n.trstyle;
                            })()),
                        n.hastransform && ((s[n.trstyle] = "translate3d(1px,2px,3px)"), (n.hastranslate3d = /translate3d/.test(s[n.trstyle]))),
                        (n.transitionstyle = "transition"),
                        (n.prefixstyle = ""),
                        (n.transitionend = "transitionend"),
                        (n.hastransition =
                            "transition" in s ||
                            (function () {
                                n.transitionend = !1;
                                for (
                                    var e = ["webkitTransition", "msTransition", "MozTransition", "OTransition", "OTransition", "KhtmlTransition"],
                                        o = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                                        t = ["webkitTransitionEnd", "msTransitionEnd", "transitionend", "otransitionend", "oTransitionEnd", "KhtmlTransitionEnd"],
                                        r = 0,
                                        i = e.length;
                                    r < i;
                                    r++
                                )
                                    if (e[r] in s) {
                                        (n.transitionstyle = e[r]), (n.prefixstyle = o[r]), (n.transitionend = t[r]);
                                        break;
                                    }
                                n.ischrome26 && (n.prefixstyle = o[1]), (n.hastransition = n.transitionstyle);
                            })()),
                        (n.cursorgrabvalue = (function () {
                            var e = ["grab", "-webkit-grab", "-moz-grab"];
                            ((n.ischrome && !n.ischrome38) || n.isie) && (e = []);
                            for (var o = 0, t = e.length; o < t; o++) {
                                var r = e[o];
                                if (((s.cursor = r), s.cursor == r)) return r;
                            }
                            return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
                        })()),
                        (n.hasmousecapture = "setCapture" in e),
                        (n.hasMutationObserver = !1 !== B),
                        (e = null),
                        (A = n)
                    );
                })());
            var S = P.extend({}, this.detected);
            (this.canhwscroll = S.hastransform && x.hwacceleration),
                (this.ishwscroll = this.canhwscroll && b.haswrapper),
                this.isrtlmode ? (this.isvertical ? (this.hasreversehr = !(S.iswebkit || S.isie || S.isie11)) : (this.hasreversehr = !(S.iswebkit || (S.isie && !S.isie10 && !S.isie11)))) : (this.hasreversehr = !1),
                (this.istouchcapable = !1),
                ((S.cantouch || (!S.hasw3ctouch && !S.hasmstouch)) && (!S.cantouch || S.isios || S.isandroid || (!S.iswebkit && !S.ismozilla))) || (this.istouchcapable = !0),
                x.enablemouselockapi || ((S.hasmousecapture = !1), (S.haspointerlock = !1)),
                (this.debounced = function (e, o, t) {
                    b &&
                        (b.delaylist[e] ||
                            !1 ||
                            ((b.delaylist[e] = {
                                h: Y(function () {
                                    b.delaylist[e].fn.call(b), (b.delaylist[e] = !1);
                                }, t),
                            }),
                            o.call(b)),
                        (b.delaylist[e].fn = o));
                }),
                (this.synched = function (e, o) {
                    b.synclist[e]
                        ? (b.synclist[e] = o)
                        : ((b.synclist[e] = o),
                          Y(function () {
                              b && (b.synclist[e] && b.synclist[e].call(b), (b.synclist[e] = null));
                          }));
                }),
                (this.unsynched = function (e) {
                    b.synclist[e] && (b.synclist[e] = !1);
                }),
                (this.css = function (e, o) {
                    for (var t in o) b.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
                }),
                (this.scrollTop = function (e) {
                    return void 0 === e ? b.getScrollTop() : b.setScrollTop(e);
                }),
                (this.scrollLeft = function (e) {
                    return void 0 === e ? b.getScrollLeft() : b.setScrollLeft(e);
                });
            var d = function (e, o, t, r, i, s, n) {
                (this.st = e), (this.ed = o), (this.spd = t), (this.p1 = r || 0), (this.p2 = i || 1), (this.p3 = s || 0), (this.p4 = n || 1), (this.ts = X()), (this.df = o - e);
            };
            if (
                ((d.prototype = {
                    B2: function (e) {
                        return 3 * (1 - e) * (1 - e) * e;
                    },
                    B3: function (e) {
                        return 3 * (1 - e) * e * e;
                    },
                    B4: function (e) {
                        return e * e * e;
                    },
                    getPos: function () {
                        return (X() - this.ts) / this.spd;
                    },
                    getNow: function () {
                        var e = (X() - this.ts) / this.spd,
                            o = this.B2(e) + this.B3(e) + this.B4(e);
                        return 1 <= e ? this.ed : (this.st + this.df * o) | 0;
                    },
                    update: function (e, o) {
                        return (this.st = this.getNow()), (this.ed = e), (this.spd = o), (this.ts = X()), (this.df = this.ed - this.st), this;
                    },
                }),
                this.ishwscroll)
            ) {
                (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
                    S.hastranslate3d && S.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
                    (this.getScrollTop = function (e) {
                        if (!e) {
                            var o = t();
                            if (o) return 16 == o.length ? -o[13] : -o[5];
                            if (b.timerscroll && b.timerscroll.bz) return b.timerscroll.bz.getNow();
                        }
                        return b.doc.translate.y;
                    }),
                    (this.getScrollLeft = function (e) {
                        if (!e) {
                            var o = t();
                            if (o) return 16 == o.length ? -o[12] : -o[4];
                            if (b.timerscroll && b.timerscroll.bh) return b.timerscroll.bh.getNow();
                        }
                        return b.doc.translate.x;
                    }),
                    (this.notifyScrollEvent = function (e) {
                        var o = R.createEvent("UIEvents");
                        o.initUIEvent("scroll", !1, !1, _, 1), (o.niceevent = !0), e.dispatchEvent(o);
                    });
                var u = this.isrtlmode ? 1 : -1;
                S.hastranslate3d && x.enabletranslate3d
                    ? ((this.setScrollTop = function (e, o) {
                          (b.doc.translate.y = e), (b.doc.translate.ty = -1 * e + "px"), b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0)"), o || b.notifyScrollEvent(b.win[0]);
                      }),
                      (this.setScrollLeft = function (e, o) {
                          (b.doc.translate.x = e), (b.doc.translate.tx = e * u + "px"), b.doc.css(S.trstyle, "translate3d(" + b.doc.translate.tx + "," + b.doc.translate.ty + ",0)"), o || b.notifyScrollEvent(b.win[0]);
                      }))
                    : ((this.setScrollTop = function (e, o) {
                          (b.doc.translate.y = e), (b.doc.translate.ty = -1 * e + "px"), b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0]);
                      }),
                      (this.setScrollLeft = function (e, o) {
                          (b.doc.translate.x = e), (b.doc.translate.tx = e * u + "px"), b.doc.css(S.trstyle, "translate(" + b.doc.translate.tx + "," + b.doc.translate.ty + ")"), o || b.notifyScrollEvent(b.win[0]);
                      }));
            } else
                (this.getScrollTop = function () {
                    return b.docscroll.scrollTop();
                }),
                    (this.setScrollTop = function (e) {
                        b.docscroll.scrollTop(e);
                    }),
                    (this.getScrollLeft = function () {
                        return b.hasreversehr ? (b.detected.ismozilla ? b.page.maxw - Math.abs(b.docscroll.scrollLeft()) : b.page.maxw - b.docscroll.scrollLeft()) : b.docscroll.scrollLeft();
                    }),
                    (this.setScrollLeft = function (e) {
                        return setTimeout(function () {
                            if (b) return b.hasreversehr && (e = b.detected.ismozilla ? -(b.page.maxw - e) : b.page.maxw - e), b.docscroll.scrollLeft(e);
                        }, 1);
                    });
            (this.getTarget = function (e) {
                return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement);
            }),
                (this.hasParent = function (e, o) {
                    if (!e) return !1;
                    for (var t = e.target || e.srcElement || e || !1; t && t.id != o; ) t = t.parentNode || !1;
                    return !1 !== t;
                });
            var h = { thin: 1, medium: 3, thick: 5 };
            (this.getDocumentScrollOffset = function () {
                return { top: _.pageYOffset || R.documentElement.scrollTop, left: _.pageXOffset || R.documentElement.scrollLeft };
            }),
                (this.getOffset = function () {
                    if (b.isfixed) {
                        var e = b.win.offset(),
                            o = b.getDocumentScrollOffset();
                        return (e.top -= o.top), (e.left -= o.left), e;
                    }
                    var t = b.win.offset();
                    if (!b.viewport) return t;
                    var r = b.viewport.offset();
                    return { top: t.top - r.top, left: t.left - r.left };
                }),
                (this.updateScrollBar = function (e) {
                    var o, t;
                    if (b.ishwscroll) b.rail.css({ height: b.win.innerHeight() - (x.railpadding.top + x.railpadding.bottom) }), b.railh && b.railh.css({ width: b.win.innerWidth() - (x.railpadding.left + x.railpadding.right) });
                    else {
                        var r = b.getOffset();
                        if (
                            (((o = { top: r.top, left: r.left - (x.railpadding.left + x.railpadding.right) }).top += n(b.win, "border-top-width", !0)),
                            (o.left += b.rail.align ? b.win.outerWidth() - n(b.win, "border-right-width") - b.rail.width : n(b.win, "border-left-width")),
                            (t = x.railoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left)),
                            b.railslocked || b.rail.css({ top: o.top, left: o.left, height: (e ? e.h : b.win.innerHeight()) - (x.railpadding.top + x.railpadding.bottom) }),
                            b.zoom && b.zoom.css({ top: o.top + 1, left: 1 == b.rail.align ? o.left - 20 : o.left + b.rail.width + 4 }),
                            b.railh && !b.railslocked)
                        ) {
                            (o = { top: r.top, left: r.left }), (t = x.railhoffset) && (t.top && (o.top += t.top), t.left && (o.left += t.left));
                            var i = b.railh.align ? o.top + n(b.win, "border-top-width", !0) + b.win.innerHeight() - b.railh.height : o.top + n(b.win, "border-top-width", !0),
                                s = o.left + n(b.win, "border-left-width");
                            b.railh.css({ top: i - (x.railpadding.top + x.railpadding.bottom), left: s, width: b.railh.width });
                        }
                    }
                }),
                (this.doRailClick = function (e, o, t) {
                    var r, i, s, n;
                    b.railslocked ||
                        (b.cancelEvent(e),
                        "pageY" in e || ((e.pageX = e.clientX + R.documentElement.scrollLeft), (e.pageY = e.clientY + R.documentElement.scrollTop)),
                        o
                            ? ((r = t ? b.doScrollLeft : b.doScrollTop),
                              (s = t ? (e.pageX - b.railh.offset().left - b.cursorwidth / 2) * b.scrollratio.x : (e.pageY - b.rail.offset().top - b.cursorheight / 2) * b.scrollratio.y),
                              b.unsynched("relativexy"),
                              r(0 | s))
                            : ((r = t ? b.doScrollLeftBy : b.doScrollBy), (s = t ? b.scroll.x : b.scroll.y), (n = t ? e.pageX - b.railh.offset().left : e.pageY - b.rail.offset().top), (i = t ? b.view.w : b.view.h), r(n <= s ? i : -i)));
                }),
                (b.newscrolly = b.newscrollx = 0),
                (b.hasanimationframe = "requestAnimationFrame" in _),
                (b.hascancelanimationframe = "cancelAnimationFrame" in _),
                (b.hasborderbox = !1),
                (this.init = function () {
                    if (((b.saved.css = []), S.isoperamini)) return !0;
                    if (S.isandroid && !("hidden" in R)) return !0;
                    (x.emulatetouch = x.emulatetouch || x.touchbehavior), (b.hasborderbox = _.getComputedStyle && "border-box" === _.getComputedStyle(R.body)["box-sizing"]);
                    var t = { "overflow-y": "hidden" };
                    if (
                        ((S.isie11 || S.isie10) && (t["-ms-overflow-style"] = "none"),
                        b.ishwscroll && (this.doc.css(S.transitionstyle, S.prefixstyle + "transform 0ms ease-out"), S.transitionend && b.bind(b.doc, S.transitionend, b.onScrollTransitionEnd, !1)),
                        (b.zindex = "auto"),
                        b.ispage || "auto" != x.zindex
                            ? (b.zindex = x.zindex)
                            : (b.zindex =
                                  (function () {
                                      var e = b.win;
                                      if ("zIndex" in e) return e.zIndex();
                                      for (; 0 < e.length; ) {
                                          if (9 == e[0].nodeType) return !1;
                                          var o = e.css("zIndex");
                                          if (!isNaN(o) && 0 !== o) return parseInt(o);
                                          e = e.parent();
                                      }
                                      return !1;
                                  })() || "auto"),
                        !b.ispage && "auto" != b.zindex && b.zindex > N && (N = b.zindex),
                        b.isie && 0 === b.zindex && "auto" == x.zindex && (b.zindex = "auto"),
                        !b.ispage || !S.isieold)
                    ) {
                        var e = b.docscroll;
                        b.ispage && (e = b.haswrapper ? b.win : b.doc), b.css(e, t), b.ispage && (S.isie11 || S.isie) && b.css(P("html"), t), !S.isios || b.ispage || b.haswrapper || b.css(y, { "-webkit-overflow-scrolling": "touch" });
                        var o = P(R.createElement("div"));
                        o.css({
                            position: "relative",
                            top: 0,
                            float: "right",
                            width: x.cursorwidth,
                            height: 0,
                            "background-color": x.cursorcolor,
                            border: x.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": x.cursorborderradius,
                            "-moz-border-radius": x.cursorborderradius,
                            "border-radius": x.cursorborderradius,
                        }),
                            o.addClass("nicescroll-cursors"),
                            (b.cursor = o);
                        var r = P(R.createElement("div"));
                        r.attr("id", b.id), r.addClass("nicescroll-rails nicescroll-rails-vr"), x.scrollCLass && r.addClass(x.scrollCLass);
                        var i,
                            s,
                            n = ["left", "right", "top", "bottom"];
                        for (var l in n) (s = n[l]), (i = x.railpadding[s] || 0) && r.css("padding-" + s, i + "px");
                        r.append(o),
                            (r.width = Math.max(parseFloat(x.cursorwidth), o.outerWidth())),
                            r.css({ width: r.width + "px", zIndex: b.zindex, background: x.background, cursor: "default" }),
                            (r.visibility = !0),
                            (r.scrollable = !0),
                            (r.align = "left" == x.railalign ? 0 : 1),
                            (b.rail = r);
                        var a,
                            c = (b.rail.drag = !1);
                        if (
                            (!x.boxzoom ||
                                b.ispage ||
                                S.isieold ||
                                ((c = R.createElement("div")),
                                b.bind(c, "click", b.doZoom),
                                b.bind(c, "mouseenter", function () {
                                    b.zoom.css("opacity", x.cursoropacitymax);
                                }),
                                b.bind(c, "mouseleave", function () {
                                    b.zoom.css("opacity", x.cursoropacitymin);
                                }),
                                (b.zoom = P(c)),
                                b.zoom.css({ cursor: "pointer", zIndex: b.zindex, backgroundImage: "url(" + x.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0 0" }),
                                x.dblclickzoom && b.bind(b.win, "dblclick", b.doZoom),
                                S.cantouch &&
                                    x.gesturezoom &&
                                    ((b.ongesturezoom = function (e) {
                                        return 1.5 < e.scale && b.doZoomIn(e), e.scale < 0.8 && b.doZoomOut(e), b.cancelEvent(e);
                                    }),
                                    b.bind(b.win, "gestureend", b.ongesturezoom))),
                            (b.railh = !1),
                            x.horizrailenabled &&
                                (b.css(e, { overflowX: "hidden" }),
                                (o = P(R.createElement("div"))).css({
                                    position: "absolute",
                                    top: 0,
                                    height: x.cursorwidth,
                                    width: 0,
                                    backgroundColor: x.cursorcolor,
                                    border: x.cursorborder,
                                    backgroundClip: "padding-box",
                                    "-webkit-border-radius": x.cursorborderradius,
                                    "-moz-border-radius": x.cursorborderradius,
                                    "border-radius": x.cursorborderradius,
                                }),
                                S.isieold && o.css("overflow", "hidden"),
                                o.addClass("nicescroll-cursors"),
                                (b.cursorh = o),
                                (a = P(R.createElement("div"))).attr("id", b.id + "-hr"),
                                a.addClass("nicescroll-rails nicescroll-rails-hr"),
                                x.scrollCLass && a.addClass(x.scrollCLass),
                                (a.height = Math.max(parseFloat(x.cursorwidth), o.outerHeight())),
                                a.css({ height: a.height + "px", zIndex: b.zindex, background: x.background }),
                                a.append(o),
                                (a.visibility = !0),
                                (a.scrollable = !0),
                                (a.align = "top" == x.railvalign ? 0 : 1),
                                (b.railh = a),
                                (b.railh.drag = !1)),
                            b.ispage)
                        )
                            r.css({ position: "fixed", top: 0, height: "100%" }),
                                r.css(r.align ? { right: 0 } : { left: 0 }),
                                b.body.append(r),
                                b.railh && (a.css({ position: "fixed", left: 0, width: "100%" }), a.css(a.align ? { bottom: 0 } : { top: 0 }), b.body.append(a));
                        else {
                            if (b.ishwscroll) {
                                "static" == b.win.css("position") && b.css(b.win, { position: "relative" });
                                var d = "HTML" == b.win[0].nodeName ? b.body : b.win;
                                P(d).scrollTop(0).scrollLeft(0),
                                    b.zoom && (b.zoom.css({ position: "absolute", top: 1, right: 0, "margin-right": r.width + 4 }), d.append(b.zoom)),
                                    r.css({ position: "absolute", top: 0 }),
                                    r.css(r.align ? { right: 0 } : { left: 0 }),
                                    d.append(r),
                                    a && (a.css({ position: "absolute", left: 0, bottom: 0 }), a.css(a.align ? { bottom: 0 } : { top: 0 }), d.append(a));
                            } else {
                                b.isfixed = "fixed" == b.win.css("position");
                                var u = b.isfixed ? "fixed" : "absolute";
                                b.isfixed || (b.viewport = b.getViewport(b.win[0])),
                                    b.viewport && ((b.body = b.viewport), /fixed|absolute/.test(b.viewport.css("position")) || b.css(b.viewport, { position: "relative" })),
                                    r.css({ position: u }),
                                    b.zoom && b.zoom.css({ position: u }),
                                    b.updateScrollBar(),
                                    b.body.append(r),
                                    b.zoom && b.body.append(b.zoom),
                                    b.railh && (a.css({ position: u }), b.body.append(a));
                            }
                            S.isios && b.css(b.win, { "-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none" }),
                                x.disableoutline && (S.isie && b.win.attr("hideFocus", "true"), S.iswebkit && b.win.css("outline", "none"));
                        }
                        if (
                            (!1 === x.autohidemode
                                ? ((b.autohidedom = !1), b.rail.css({ opacity: x.cursoropacitymax }), b.railh && b.railh.css({ opacity: x.cursoropacitymax }))
                                : !0 === x.autohidemode || "leave" === x.autohidemode
                                ? ((b.autohidedom = P().add(b.rail)),
                                  S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursor)),
                                  b.railh && (b.autohidedom = b.autohidedom.add(b.railh)),
                                  b.railh && S.isie8 && (b.autohidedom = b.autohidedom.add(b.cursorh)))
                                : "scroll" == x.autohidemode
                                ? ((b.autohidedom = P().add(b.rail)), b.railh && (b.autohidedom = b.autohidedom.add(b.railh)))
                                : "cursor" == x.autohidemode
                                ? ((b.autohidedom = P().add(b.cursor)), b.railh && (b.autohidedom = b.autohidedom.add(b.cursorh)))
                                : "hidden" == x.autohidemode && ((b.autohidedom = !1), b.hide(), (b.railslocked = !1)),
                            S.cantouch || b.istouchcapable || x.emulatetouch || S.hasmstouch)
                        ) {
                            b.scrollmom = new q(b);
                            (b.ontouchstart = function (e) {
                                if (b.locked) return !1;
                                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                                if (((b.hasmoving = !1), b.scrollmom.timer && (b.triggerScrollEnd(), b.scrollmom.stop()), !b.railslocked)) {
                                    var o = b.getTarget(e);
                                    if (o) if (/INPUT/i.test(o.nodeName) && /range/i.test(o.type)) return b.stopPropagation(e);
                                    var t = "mousedown" === e.type;
                                    if ((!("clientX" in e) && "changedTouches" in e && ((e.clientX = e.changedTouches[0].clientX), (e.clientY = e.changedTouches[0].clientY)), b.forcescreen)) {
                                        var r = e;
                                        ((e = { original: e.original ? e.original : e }).clientX = r.screenX), (e.clientY = r.screenY);
                                    }
                                    if (((b.rail.drag = { x: e.clientX, y: e.clientY, sx: b.scroll.x, sy: b.scroll.y, st: b.getScrollTop(), sl: b.getScrollLeft(), pt: 2, dl: !1, tg: o }), b.ispage || !x.directionlockdeadzone))
                                        b.rail.drag.dl = "f";
                                    else {
                                        var i = I.width(),
                                            s = I.height(),
                                            n = b.getContentSize(),
                                            l = n.h - s,
                                            a = n.w - i;
                                        b.rail.scrollable && !b.railh.scrollable ? (b.rail.drag.ck = 0 < l && "v") : !b.rail.scrollable && b.railh.scrollable ? (b.rail.drag.ck = 0 < a && "h") : (b.rail.drag.ck = !1);
                                    }
                                    if (x.emulatetouch && b.isiframe && S.isie) {
                                        var c = b.win.position();
                                        (b.rail.drag.x += c.left), (b.rail.drag.y += c.top);
                                    }
                                    if (((b.hasmoving = !1), (b.lastmouseup = !1), b.scrollmom.reset(e.clientX, e.clientY), o && t)) {
                                        if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName))
                                            return (
                                                S.hasmousecapture && o.setCapture(),
                                                x.emulatetouch
                                                    ? (o.onclick &&
                                                          !o._onclick &&
                                                          ((o._onclick = o.onclick),
                                                          (o.onclick = function (e) {
                                                              if (b.hasmoving) return !1;
                                                              o._onclick.call(this, e);
                                                          })),
                                                      b.cancelEvent(e))
                                                    : b.stopPropagation(e)
                                            );
                                        /SUBMIT|CANCEL|BUTTON/i.test(P(o).attr("type")) && (b.preventclick = { tg: o, click: !1 });
                                    }
                                }
                            }),
                                (b.ontouchend = function (e) {
                                    if (!b.rail.drag) return !0;
                                    if (2 == b.rail.drag.pt) {
                                        if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !1;
                                        b.rail.drag = !1;
                                        var o = "mouseup" === e.type;
                                        if (b.hasmoving && (b.scrollmom.doMomentum(), (b.lastmouseup = !0), b.hideCursor(), S.hasmousecapture && R.releaseCapture(), o)) return b.cancelEvent(e);
                                    } else if (1 == b.rail.drag.pt) return b.onmouseup(e);
                                });
                            var m = x.emulatetouch && b.isiframe && !S.hasmousecapture,
                                f = (0.3 * x.directionlockdeadzone) | 0;
                            (b.ontouchmove = function (e, o) {
                                if (!b.rail.drag) return !0;
                                if (e.targetTouches && x.preventmultitouchscrolling && 1 < e.targetTouches.length) return !0;
                                if (e.pointerType && ("mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return !0;
                                if (2 == b.rail.drag.pt) {
                                    var t, r;
                                    if (("changedTouches" in e && ((e.clientX = e.changedTouches[0].clientX), (e.clientY = e.changedTouches[0].clientY)), (r = t = 0), m && !o)) {
                                        var i = b.win.position();
                                        (r = -i.left), (t = -i.top);
                                    }
                                    var s = e.clientY + t,
                                        n = s - b.rail.drag.y,
                                        l = e.clientX + r,
                                        a = l - b.rail.drag.x,
                                        c = b.rail.drag.st - n;
                                    if (b.ishwscroll && x.bouncescroll) c < 0 ? (c = Math.round(c / 2)) : c > b.page.maxh && (c = b.page.maxh + Math.round((c - b.page.maxh) / 2));
                                    else if ((c < 0 ? (s = c = 0) : c > b.page.maxh && ((c = b.page.maxh), (s = 0)), 0 === s && !b.hasmoving)) return b.ispage || (b.rail.drag = !1), !0;
                                    var d = b.getScrollLeft();
                                    if (
                                        (b.railh &&
                                            b.railh.scrollable &&
                                            ((d = b.isrtlmode ? a - b.rail.drag.sl : b.rail.drag.sl - a),
                                            b.ishwscroll && x.bouncescroll
                                                ? d < 0
                                                    ? (d = Math.round(d / 2))
                                                    : d > b.page.maxw && (d = b.page.maxw + Math.round((d - b.page.maxw) / 2))
                                                : (d < 0 && (l = d = 0), d > b.page.maxw && ((d = b.page.maxw), (l = 0)))),
                                        !b.hasmoving)
                                    ) {
                                        if (b.rail.drag.y === e.clientY && b.rail.drag.x === e.clientX) return b.cancelEvent(e);
                                        var u = Math.abs(n),
                                            h = Math.abs(a),
                                            p = x.directionlockdeadzone;
                                        if (
                                            (b.rail.drag.ck
                                                ? "v" == b.rail.drag.ck
                                                    ? p < h && u <= f
                                                        ? (b.rail.drag = !1)
                                                        : p < u && (b.rail.drag.dl = "v")
                                                    : "h" == b.rail.drag.ck && (p < u && h <= f ? (b.rail.drag = !1) : p < h && (b.rail.drag.dl = "h"))
                                                : p < u && p < h
                                                ? (b.rail.drag.dl = "f")
                                                : p < u
                                                ? (b.rail.drag.dl = f < h ? "f" : "v")
                                                : p < h && (b.rail.drag.dl = f < u ? "f" : "h"),
                                            !b.rail.drag.dl)
                                        )
                                            return b.cancelEvent(e);
                                        b.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), (b.hasmoving = !0);
                                    }
                                    return (
                                        b.preventclick && !b.preventclick.click && ((b.preventclick.click = b.preventclick.tg.onclick || !1), (b.preventclick.tg.onclick = b.onpreventclick)),
                                        b.rail.drag.dl && ("v" == b.rail.drag.dl ? (d = b.rail.drag.sl) : "h" == b.rail.drag.dl && (c = b.rail.drag.st)),
                                        b.synched("touchmove", function () {
                                            b.rail.drag &&
                                                2 == b.rail.drag.pt &&
                                                (b.prepareTransition && b.resetTransition(),
                                                b.rail.scrollable && b.setScrollTop(c),
                                                b.scrollmom.update(l, s),
                                                b.railh && b.railh.scrollable ? (b.setScrollLeft(d), b.showCursor(c, d)) : b.showCursor(c),
                                                S.isie10 && R.selection.clear());
                                        }),
                                        b.cancelEvent(e)
                                    );
                                }
                                return 1 == b.rail.drag.pt ? b.onmousemove(e) : void 0;
                            }),
                                (b.ontouchstartCursor = function (e, o) {
                                    if (!b.rail.drag || 3 == b.rail.drag.pt) {
                                        if (b.locked) return b.cancelEvent(e);
                                        b.cancelScroll(), (b.rail.drag = { x: e.touches[0].clientX, y: e.touches[0].clientY, sx: b.scroll.x, sy: b.scroll.y, pt: 3, hr: !!o });
                                        var t = b.getTarget(e);
                                        return (
                                            !b.ispage && S.hasmousecapture && t.setCapture(),
                                            b.isiframe && !S.hasmousecapture && ((b.saved.csspointerevents = b.doc.css("pointer-events")), b.css(b.doc, { "pointer-events": "none" })),
                                            b.cancelEvent(e)
                                        );
                                    }
                                }),
                                (b.ontouchendCursor = function (e) {
                                    if (b.rail.drag) {
                                        if ((S.hasmousecapture && R.releaseCapture(), b.isiframe && !S.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents), 3 != b.rail.drag.pt)) return;
                                        return (b.rail.drag = !1), b.cancelEvent(e);
                                    }
                                }),
                                (b.ontouchmoveCursor = function (e) {
                                    if (b.rail.drag) {
                                        if (3 != b.rail.drag.pt) return;
                                        if (((b.cursorfreezed = !0), b.rail.drag.hr)) {
                                            (b.scroll.x = b.rail.drag.sx + (e.touches[0].clientX - b.rail.drag.x)), b.scroll.x < 0 && (b.scroll.x = 0);
                                            var o = b.scrollvaluemaxw;
                                            b.scroll.x > o && (b.scroll.x = o);
                                        } else {
                                            (b.scroll.y = b.rail.drag.sy + (e.touches[0].clientY - b.rail.drag.y)), b.scroll.y < 0 && (b.scroll.y = 0);
                                            var t = b.scrollvaluemax;
                                            b.scroll.y > t && (b.scroll.y = t);
                                        }
                                        return (
                                            b.synched("touchmove", function () {
                                                b.rail.drag &&
                                                    3 == b.rail.drag.pt &&
                                                    (b.showCursor(), b.rail.drag.hr ? b.doScrollLeft(Math.round(b.scroll.x * b.scrollratio.x), x.cursordragspeed) : b.doScrollTop(Math.round(b.scroll.y * b.scrollratio.y), x.cursordragspeed));
                                            }),
                                            b.cancelEvent(e)
                                        );
                                    }
                                });
                        }
                        if (
                            ((b.onmousedown = function (e, o) {
                                if (!b.rail.drag || 1 == b.rail.drag.pt) {
                                    if (b.railslocked) return b.cancelEvent(e);
                                    b.cancelScroll(), (b.rail.drag = { x: e.clientX, y: e.clientY, sx: b.scroll.x, sy: b.scroll.y, pt: 1, hr: o || !1 });
                                    var t = b.getTarget(e);
                                    return (
                                        S.hasmousecapture && t.setCapture(),
                                        b.isiframe && !S.hasmousecapture && ((b.saved.csspointerevents = b.doc.css("pointer-events")), b.css(b.doc, { "pointer-events": "none" })),
                                        (b.hasmoving = !1),
                                        b.cancelEvent(e)
                                    );
                                }
                            }),
                            (b.onmouseup = function (e) {
                                if (b.rail.drag)
                                    return (
                                        1 != b.rail.drag.pt ||
                                        (S.hasmousecapture && R.releaseCapture(),
                                        b.isiframe && !S.hasmousecapture && b.doc.css("pointer-events", b.saved.csspointerevents),
                                        (b.rail.drag = !1),
                                        (b.cursorfreezed = !1),
                                        b.hasmoving && b.triggerScrollEnd(),
                                        b.cancelEvent(e))
                                    );
                            }),
                            (b.onmousemove = function (e) {
                                if (b.rail.drag) {
                                    if (1 !== b.rail.drag.pt) return;
                                    if (S.ischrome && 0 === e.which) return b.onmouseup(e);
                                    if (((b.cursorfreezed = !0), b.hasmoving || b.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0), (b.hasmoving = !0), b.rail.drag.hr)) {
                                        (b.scroll.x = b.rail.drag.sx + (e.clientX - b.rail.drag.x)), b.scroll.x < 0 && (b.scroll.x = 0);
                                        var o = b.scrollvaluemaxw;
                                        b.scroll.x > o && (b.scroll.x = o);
                                    } else {
                                        (b.scroll.y = b.rail.drag.sy + (e.clientY - b.rail.drag.y)), b.scroll.y < 0 && (b.scroll.y = 0);
                                        var t = b.scrollvaluemax;
                                        b.scroll.y > t && (b.scroll.y = t);
                                    }
                                    return (
                                        b.synched("mousemove", function () {
                                            b.cursorfreezed && (b.showCursor(), b.rail.drag.hr ? b.scrollLeft(Math.round(b.scroll.x * b.scrollratio.x)) : b.scrollTop(Math.round(b.scroll.y * b.scrollratio.y)));
                                        }),
                                        b.cancelEvent(e)
                                    );
                                }
                                b.checkarea = 0;
                            }),
                            S.cantouch || x.emulatetouch)
                        )
                            (b.onpreventclick = function (e) {
                                if (b.preventclick) return (b.preventclick.tg.onclick = b.preventclick.click), (b.preventclick = !1), b.cancelEvent(e);
                            }),
                                (b.onclick =
                                    !S.isios &&
                                    function (e) {
                                        return !b.lastmouseup || ((b.lastmouseup = !1), b.cancelEvent(e));
                                    }),
                                x.grabcursorenabled && S.cursorgrabvalue && (b.css(b.ispage ? b.doc : b.win, { cursor: S.cursorgrabvalue }), b.css(b.rail, { cursor: S.cursorgrabvalue }));
                        else {
                            var h = function (e) {
                                if (b.selectiondrag) {
                                    if (e) {
                                        var o = b.win.outerHeight(),
                                            t = e.pageY - b.selectiondrag.top;
                                        0 < t && t < o && (t = 0), o <= t && (t -= o), (b.selectiondrag.df = t);
                                    }
                                    if (0 !== b.selectiondrag.df) {
                                        var r = ((-2 * b.selectiondrag.df) / 6) | 0;
                                        b.doScrollBy(r),
                                            b.debounced(
                                                "doselectionscroll",
                                                function () {
                                                    h();
                                                },
                                                50
                                            );
                                    }
                                }
                            };
                            (b.hasTextSelected =
                                "getSelection" in R
                                    ? function () {
                                          return 0 < R.getSelection().rangeCount;
                                      }
                                    : "selection" in R
                                    ? function () {
                                          return "None" != R.selection.type;
                                      }
                                    : function () {
                                          return !1;
                                      }),
                                (b.onselectionstart = function (e) {
                                    b.ispage || (b.selectiondrag = b.win.offset());
                                }),
                                (b.onselectionend = function (e) {
                                    b.selectiondrag = !1;
                                }),
                                (b.onselectiondrag = function (e) {
                                    b.selectiondrag &&
                                        b.hasTextSelected() &&
                                        b.debounced(
                                            "selectionscroll",
                                            function () {
                                                h(e);
                                            },
                                            250
                                        );
                                });
                        }
                        if (
                            (S.hasw3ctouch
                                ? (b.css(b.ispage ? P("html") : b.win, { "touch-action": "none" }),
                                  b.css(b.rail, { "touch-action": "none" }),
                                  b.css(b.cursor, { "touch-action": "none" }),
                                  b.bind(b.win, "pointerdown", b.ontouchstart),
                                  b.bind(R, "pointerup", b.ontouchend),
                                  b.delegate(R, "pointermove", b.ontouchmove))
                                : S.hasmstouch
                                ? (b.css(b.ispage ? P("html") : b.win, { "-ms-touch-action": "none" }),
                                  b.css(b.rail, { "-ms-touch-action": "none" }),
                                  b.css(b.cursor, { "-ms-touch-action": "none" }),
                                  b.bind(b.win, "MSPointerDown", b.ontouchstart),
                                  b.bind(R, "MSPointerUp", b.ontouchend),
                                  b.delegate(R, "MSPointerMove", b.ontouchmove),
                                  b.bind(b.cursor, "MSGestureHold", function (e) {
                                      e.preventDefault();
                                  }),
                                  b.bind(b.cursor, "contextmenu", function (e) {
                                      e.preventDefault();
                                  }))
                                : S.cantouch &&
                                  (b.bind(b.win, "touchstart", b.ontouchstart, !1, !0), b.bind(R, "touchend", b.ontouchend, !1, !0), b.bind(R, "touchcancel", b.ontouchend, !1, !0), b.delegate(R, "touchmove", b.ontouchmove, !1, !0)),
                            x.emulatetouch && (b.bind(b.win, "mousedown", b.ontouchstart, !1, !0), b.bind(R, "mouseup", b.ontouchend, !1, !0), b.bind(R, "mousemove", b.ontouchmove, !1, !0)),
                            (x.cursordragontouch || (!S.cantouch && !x.emulatetouch)) &&
                                (b.rail.css({ cursor: "default" }),
                                b.railh && b.railh.css({ cursor: "default" }),
                                b.jqbind(b.rail, "mouseenter", function () {
                                    if (!b.ispage && !b.win.is(":visible")) return !1;
                                    b.canshowonmouseevent && b.showCursor(), (b.rail.active = !0);
                                }),
                                b.jqbind(b.rail, "mouseleave", function () {
                                    (b.rail.active = !1), b.rail.drag || b.hideCursor();
                                }),
                                x.sensitiverail &&
                                    (b.bind(b.rail, "click", function (e) {
                                        b.doRailClick(e, !1, !1);
                                    }),
                                    b.bind(b.rail, "dblclick", function (e) {
                                        b.doRailClick(e, !0, !1);
                                    }),
                                    b.bind(b.cursor, "click", function (e) {
                                        b.cancelEvent(e);
                                    }),
                                    b.bind(b.cursor, "dblclick", function (e) {
                                        b.cancelEvent(e);
                                    })),
                                b.railh &&
                                    (b.jqbind(b.railh, "mouseenter", function () {
                                        if (!b.ispage && !b.win.is(":visible")) return !1;
                                        b.canshowonmouseevent && b.showCursor(), (b.rail.active = !0);
                                    }),
                                    b.jqbind(b.railh, "mouseleave", function () {
                                        (b.rail.active = !1), b.rail.drag || b.hideCursor();
                                    }),
                                    x.sensitiverail &&
                                        (b.bind(b.railh, "click", function (e) {
                                            b.doRailClick(e, !1, !0);
                                        }),
                                        b.bind(b.railh, "dblclick", function (e) {
                                            b.doRailClick(e, !0, !0);
                                        }),
                                        b.bind(b.cursorh, "click", function (e) {
                                            b.cancelEvent(e);
                                        }),
                                        b.bind(b.cursorh, "dblclick", function (e) {
                                            b.cancelEvent(e);
                                        })))),
                            x.cursordragontouch &&
                                (this.istouchcapable || S.cantouch) &&
                                (b.bind(b.cursor, "touchstart", b.ontouchstartCursor),
                                b.bind(b.cursor, "touchmove", b.ontouchmoveCursor),
                                b.bind(b.cursor, "touchend", b.ontouchendCursor),
                                b.cursorh &&
                                    b.bind(b.cursorh, "touchstart", function (e) {
                                        b.ontouchstartCursor(e, !0);
                                    }),
                                b.cursorh && b.bind(b.cursorh, "touchmove", b.ontouchmoveCursor),
                                b.cursorh && b.bind(b.cursorh, "touchend", b.ontouchendCursor)),
                            x.emulatetouch || S.isandroid || S.isios
                                ? (b.bind(S.hasmousecapture ? b.win : R, "mouseup", b.ontouchend),
                                  b.onclick && b.bind(R, "click", b.onclick),
                                  x.cursordragontouch
                                      ? (b.bind(b.cursor, "mousedown", b.onmousedown),
                                        b.bind(b.cursor, "mouseup", b.onmouseup),
                                        b.cursorh &&
                                            b.bind(b.cursorh, "mousedown", function (e) {
                                                b.onmousedown(e, !0);
                                            }),
                                        b.cursorh && b.bind(b.cursorh, "mouseup", b.onmouseup))
                                      : (b.bind(b.rail, "mousedown", function (e) {
                                            e.preventDefault();
                                        }),
                                        b.railh &&
                                            b.bind(b.railh, "mousedown", function (e) {
                                                e.preventDefault();
                                            })))
                                : (b.bind(S.hasmousecapture ? b.win : R, "mouseup", b.onmouseup),
                                  b.bind(R, "mousemove", b.onmousemove),
                                  b.onclick && b.bind(R, "click", b.onclick),
                                  b.bind(b.cursor, "mousedown", b.onmousedown),
                                  b.bind(b.cursor, "mouseup", b.onmouseup),
                                  b.railh &&
                                      (b.bind(b.cursorh, "mousedown", function (e) {
                                          b.onmousedown(e, !0);
                                      }),
                                      b.bind(b.cursorh, "mouseup", b.onmouseup)),
                                  !b.ispage &&
                                      x.enablescrollonselection &&
                                      (b.bind(b.win[0], "mousedown", b.onselectionstart),
                                      b.bind(R, "mouseup", b.onselectionend),
                                      b.bind(b.cursor, "mouseup", b.onselectionend),
                                      b.cursorh && b.bind(b.cursorh, "mouseup", b.onselectionend),
                                      b.bind(R, "mousemove", b.onselectiondrag)),
                                  b.zoom &&
                                      (b.jqbind(b.zoom, "mouseenter", function () {
                                          b.canshowonmouseevent && b.showCursor(), (b.rail.active = !0);
                                      }),
                                      b.jqbind(b.zoom, "mouseleave", function () {
                                          (b.rail.active = !1), b.rail.drag || b.hideCursor();
                                      }))),
                            x.enablemousewheel && (b.isiframe || b.mousewheel(S.isie && b.ispage ? R : b.win, b.onmousewheel), b.mousewheel(b.rail, b.onmousewheel), b.railh && b.mousewheel(b.railh, b.onmousewheelhr)),
                            b.ispage ||
                                S.cantouch ||
                                /HTML|^BODY/.test(b.win[0].nodeName) ||
                                (b.win.attr("tabindex") || b.win.attr({ tabindex: ++M }),
                                b.bind(b.win, "focus", function (e) {
                                    (E = b.getTarget(e).id || b.getTarget(e) || !1), (b.hasfocus = !0), b.canshowonmouseevent && b.noticeCursor();
                                }),
                                b.bind(b.win, "blur", function (e) {
                                    (E = !1), (b.hasfocus = !1);
                                }),
                                b.bind(b.win, "mouseenter", function (e) {
                                    (L = b.getTarget(e).id || b.getTarget(e) || !1), (b.hasmousefocus = !0), b.canshowonmouseevent && b.noticeCursor();
                                }),
                                b.bind(b.win, "mouseleave", function (e) {
                                    (L = !1), (b.hasmousefocus = !1), b.rail.drag || b.hideCursor();
                                })),
                            (b.onkeypress = function (e) {
                                if (b.railslocked && 0 === b.page.maxh) return !0;
                                e = e || _.event;
                                var o = b.getTarget(e);
                                if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName) && (!(o.getAttribute("type") || o.type || !1) || !/submit|button|cancel/i.tp)) return !0;
                                if (P(o).attr("contenteditable")) return !0;
                                if (b.hasfocus || (b.hasmousefocus && !E) || (b.ispage && !E && !L)) {
                                    var t = e.keyCode;
                                    if (b.railslocked && 27 != t) return b.cancelEvent(e);
                                    var r = e.ctrlKey || !1,
                                        i = e.shiftKey || !1,
                                        s = !1;
                                    switch (t) {
                                        case 38:
                                        case 63233:
                                            b.doScrollBy(72), (s = !0);
                                            break;
                                        case 40:
                                        case 63235:
                                            b.doScrollBy(-72), (s = !0);
                                            break;
                                        case 37:
                                        case 63232:
                                            b.railh && (r ? b.doScrollLeft(0) : b.doScrollLeftBy(72), (s = !0));
                                            break;
                                        case 39:
                                        case 63234:
                                            b.railh && (r ? b.doScrollLeft(b.page.maxw) : b.doScrollLeftBy(-72), (s = !0));
                                            break;
                                        case 33:
                                        case 63276:
                                            b.doScrollBy(b.view.h), (s = !0);
                                            break;
                                        case 34:
                                        case 63277:
                                            b.doScrollBy(-b.view.h), (s = !0);
                                            break;
                                        case 36:
                                        case 63273:
                                            b.railh && r ? b.doScrollPos(0, 0) : b.doScrollTo(0), (s = !0);
                                            break;
                                        case 35:
                                        case 63275:
                                            b.railh && r ? b.doScrollPos(b.page.maxw, b.page.maxh) : b.doScrollTo(b.page.maxh), (s = !0);
                                            break;
                                        case 32:
                                            x.spacebarenabled && (i ? b.doScrollBy(b.view.h) : b.doScrollBy(-b.view.h), (s = !0));
                                            break;
                                        case 27:
                                            b.zoomactive && (b.doZoom(), (s = !0));
                                    }
                                    if (s) return b.cancelEvent(e);
                                }
                            }),
                            x.enablekeyboard && b.bind(R, S.isopera && !S.isopera12 ? "keypress" : "keydown", b.onkeypress),
                            b.bind(R, "keydown", function (e) {
                                (e.ctrlKey || !1) && (b.wheelprevented = !0);
                            }),
                            b.bind(R, "keyup", function (e) {
                                e.ctrlKey || !1 || (b.wheelprevented = !1);
                            }),
                            b.bind(_, "blur", function (e) {
                                b.wheelprevented = !1;
                            }),
                            b.bind(_, "resize", b.onscreenresize),
                            b.bind(_, "orientationchange", b.onscreenresize),
                            b.bind(_, "load", b.lazyResize),
                            S.ischrome && !b.ispage && !b.haswrapper)
                        ) {
                            var p = b.win.attr("style"),
                                g = parseFloat(b.win.css("width")) + 1;
                            b.win.css("width", g),
                                b.synched("chromefix", function () {
                                    b.win.attr("style", p);
                                });
                        }
                        if (
                            ((b.onAttributeChange = function (e) {
                                b.lazyResize(b.isieold ? 250 : 30);
                            }),
                            x.enableobserver &&
                                (b.isie11 ||
                                    !1 === B ||
                                    ((b.observerbody = new B(function (e) {
                                        if (
                                            (e.forEach(function (e) {
                                                if ("attributes" == e.type) return y.hasClass("modal-open") && y.hasClass("modal-dialog") && !P.contains(P(".modal-dialog")[0], b.doc[0]) ? b.hide() : b.show();
                                            }),
                                            b.me.clientWidth != b.page.width || b.me.clientHeight != b.page.height)
                                        )
                                            return b.lazyResize(30);
                                    })),
                                    b.observerbody.observe(R.body, { childList: !0, subtree: !0, characterData: !1, attributes: !0, attributeFilter: ["class"] })),
                                !b.ispage && !b.haswrapper))
                        ) {
                            var v = b.win[0];
                            !1 !== B
                                ? ((b.observer = new B(function (e) {
                                      e.forEach(b.onAttributeChange);
                                  })),
                                  b.observer.observe(v, { childList: !0, characterData: !1, attributes: !0, subtree: !1 }),
                                  (b.observerremover = new B(function (e) {
                                      e.forEach(function (e) {
                                          if (0 < e.removedNodes.length) for (var o in e.removedNodes) if (b && e.removedNodes[o] === v) return b.remove();
                                      });
                                  })),
                                  b.observerremover.observe(v.parentNode, { childList: !0, characterData: !1, attributes: !1, subtree: !1 }))
                                : (b.bind(v, S.isie && !S.isie9 ? "propertychange" : "DOMAttrModified", b.onAttributeChange),
                                  S.isie9 && v.attachEvent("onpropertychange", b.onAttributeChange),
                                  b.bind(v, "DOMNodeRemoved", function (e) {
                                      e.target === v && b.remove();
                                  }));
                        }
                        !b.ispage && x.boxzoom && b.bind(_, "resize", b.resizeZoom), b.istextarea && (b.bind(b.win, "keydown", b.lazyResize), b.bind(b.win, "mouseup", b.lazyResize)), b.lazyResize(30);
                    }
                    if ("IFRAME" == this.doc[0].nodeName) {
                        var w = function () {
                            var o;
                            b.iframexd = !1;
                            try {
                                (o = "contentDocument" in this ? this.contentDocument : this.contentWindow._doc).domain;
                            } catch (e) {
                                o = !(b.iframexd = !0);
                            }
                            if (b.iframexd) return "console" in _ && console.log("NiceScroll error: policy restriced iframe"), !0;
                            if (
                                ((b.forcescreen = !0),
                                b.isiframe &&
                                    ((b.iframe = { doc: P(o), html: b.doc.contents().find("html")[0], body: b.doc.contents().find("body")[0] }),
                                    (b.getContentSize = function () {
                                        return { w: Math.max(b.iframe.html.scrollWidth, b.iframe.body.scrollWidth), h: Math.max(b.iframe.html.scrollHeight, b.iframe.body.scrollHeight) };
                                    }),
                                    (b.docscroll = P(b.iframe.body))),
                                !S.isios && x.iframeautoresize && !b.isiframe)
                            ) {
                                b.win.scrollTop(0), b.doc.height("");
                                var e = Math.max(o.getElementsByTagName("html")[0].scrollHeight, o.body.scrollHeight);
                                b.doc.height(e);
                            }
                            b.lazyResize(30),
                                b.css(P(b.iframe.body), t),
                                S.isios && b.haswrapper && b.css(P(o.body), { "-webkit-transform": "translate3d(0,0,0)" }),
                                "contentWindow" in this ? b.bind(this.contentWindow, "scroll", b.onscroll) : b.bind(o, "scroll", b.onscroll),
                                x.enablemousewheel && b.mousewheel(o, b.onmousewheel),
                                x.enablekeyboard && b.bind(o, S.isopera ? "keypress" : "keydown", b.onkeypress),
                                S.cantouch
                                    ? (b.bind(o, "touchstart", b.ontouchstart), b.bind(o, "touchmove", b.ontouchmove))
                                    : x.emulatetouch &&
                                      (b.bind(o, "mousedown", b.ontouchstart),
                                      b.bind(o, "mousemove", function (e) {
                                          return b.ontouchmove(e, !0);
                                      }),
                                      x.grabcursorenabled && S.cursorgrabvalue && b.css(P(o.body), { cursor: S.cursorgrabvalue })),
                                b.bind(o, "mouseup", b.ontouchend),
                                b.zoom && (x.dblclickzoom && b.bind(o, "dblclick", b.doZoom), b.ongesturezoom && b.bind(o, "gestureend", b.ongesturezoom));
                        };
                        this.doc[0].readyState &&
                            "complete" === this.doc[0].readyState &&
                            setTimeout(function () {
                                w.call(b.doc[0], !1);
                            }, 500),
                            b.bind(this.doc, "load", w);
                    }
                }),
                (this.showCursor = function (e, o) {
                    if ((b.cursortimeout && (clearTimeout(b.cursortimeout), (b.cursortimeout = 0)), b.rail)) {
                        if (
                            (b.autohidedom && (b.autohidedom.stop().css({ opacity: x.cursoropacitymax }), (b.cursoractive = !0)),
                            (b.rail.drag && 1 == b.rail.drag.pt) || (void 0 !== e && !1 !== e && (b.scroll.y = (e / b.scrollratio.y) | 0), void 0 !== o && (b.scroll.x = (o / b.scrollratio.x) | 0)),
                            b.cursor.css({ height: b.cursorheight, top: b.scroll.y }),
                            b.cursorh)
                        ) {
                            var t = b.hasreversehr ? b.scrollvaluemaxw - b.scroll.x : b.scroll.x;
                            b.cursorh.css({ width: b.cursorwidth, left: !b.rail.align && b.rail.visibility ? t + b.rail.width : t }), (b.cursoractive = !0);
                        }
                        b.zoom && b.zoom.stop().css({ opacity: x.cursoropacitymax });
                    }
                }),
                (this.hideCursor = function (e) {
                    b.cursortimeout ||
                        (b.rail &&
                            b.autohidedom &&
                            ((b.hasmousefocus && "leave" === x.autohidemode) ||
                                (b.cursortimeout = setTimeout(function () {
                                    (b.rail.active && b.showonmouseevent) || (b.autohidedom.stop().animate({ opacity: x.cursoropacitymin }), b.zoom && b.zoom.stop().animate({ opacity: x.cursoropacitymin }), (b.cursoractive = !1)),
                                        (b.cursortimeout = 0);
                                }, e || x.hidecursordelay))));
                }),
                (this.noticeCursor = function (e, o, t) {
                    b.showCursor(o, t), b.rail.active || b.hideCursor(e);
                }),
                (this.getContentSize = b.ispage
                    ? function () {
                          return { w: Math.max(R.body.scrollWidth, R.documentElement.scrollWidth), h: Math.max(R.body.scrollHeight, R.documentElement.scrollHeight) };
                      }
                    : b.haswrapper
                    ? function () {
                          return { w: b.doc[0].offsetWidth, h: b.doc[0].offsetHeight };
                      }
                    : function () {
                          return { w: b.docscroll[0].scrollWidth, h: b.docscroll[0].scrollHeight };
                      }),
                (this.onResize = function (e, o) {
                    if (!b || !b.win) return !1;
                    var t = b.page.maxh,
                        r = b.page.maxw,
                        i = b.view.h,
                        s = b.view.w;
                    if (
                        ((b.view = { w: b.ispage ? b.win.width() : b.win[0].clientWidth, h: b.ispage ? b.win.height() : b.win[0].clientHeight }),
                        (b.page = o || b.getContentSize()),
                        (b.page.maxh = Math.max(0, b.page.h - b.view.h)),
                        (b.page.maxw = Math.max(0, b.page.w - b.view.w)),
                        b.page.maxh == t && b.page.maxw == r && b.view.w == s && b.view.h == i)
                    ) {
                        if (b.ispage) return b;
                        var n = b.win.offset();
                        if (b.lastposition) {
                            var l = b.lastposition;
                            if (l.top == n.top && l.left == n.left) return b;
                        }
                        b.lastposition = n;
                    }
                    return (
                        0 === b.page.maxh
                            ? (b.hideRail(), (b.scrollvaluemax = 0), (b.scroll.y = 0), (b.scrollratio.y = 0), (b.cursorheight = 0), b.setScrollTop(0), b.rail && (b.rail.scrollable = !1))
                            : ((b.page.maxh -= x.railpadding.top + x.railpadding.bottom), (b.rail.scrollable = !0)),
                        0 === b.page.maxw
                            ? (b.hideRailHr(), (b.scrollvaluemaxw = 0), (b.scroll.x = 0), (b.scrollratio.x = 0), (b.cursorwidth = 0), b.setScrollLeft(0), b.railh && (b.railh.scrollable = !1))
                            : ((b.page.maxw -= x.railpadding.left + x.railpadding.right), b.railh && (b.railh.scrollable = x.horizrailenabled)),
                        (b.railslocked = b.locked || (0 === b.page.maxh && 0 === b.page.maxw)),
                        b.railslocked
                            ? (b.ispage || b.updateScrollBar(b.view), !1)
                            : (b.hidden || (b.rail.visibility || b.showRail(), b.railh && !b.railh.visibility && b.showRailHr()),
                              b.istextarea && b.win.css("resize") && "none" != b.win.css("resize") && (b.view.h -= 20),
                              (b.cursorheight = Math.min(b.view.h, Math.round(b.view.h * (b.view.h / b.page.h)))),
                              (b.cursorheight = x.cursorfixedheight ? x.cursorfixedheight : Math.max(x.cursorminheight, b.cursorheight)),
                              (b.cursorwidth = Math.min(b.view.w, Math.round(b.view.w * (b.view.w / b.page.w)))),
                              (b.cursorwidth = x.cursorfixedheight ? x.cursorfixedheight : Math.max(x.cursorminheight, b.cursorwidth)),
                              (b.scrollvaluemax = b.view.h - b.cursorheight - (x.railpadding.top + x.railpadding.bottom)),
                              b.hasborderbox || (b.scrollvaluemax -= b.cursor[0].offsetHeight - b.cursor[0].clientHeight),
                              b.railh && ((b.railh.width = 0 < b.page.maxh ? b.view.w - b.rail.width : b.view.w), (b.scrollvaluemaxw = b.railh.width - b.cursorwidth - (x.railpadding.left + x.railpadding.right))),
                              b.ispage || b.updateScrollBar(b.view),
                              (b.scrollratio = { x: b.page.maxw / b.scrollvaluemaxw, y: b.page.maxh / b.scrollvaluemax }),
                              b.getScrollTop() > b.page.maxh
                                  ? b.doScrollTop(b.page.maxh)
                                  : ((b.scroll.y = (b.getScrollTop() / b.scrollratio.y) | 0), (b.scroll.x = (b.getScrollLeft() / b.scrollratio.x) | 0), b.cursoractive && b.noticeCursor()),
                              b.scroll.y && 0 === b.getScrollTop() && b.doScrollTo((b.scroll.y * b.scrollratio.y) | 0),
                              b)
                    );
                }),
                (this.resize = b.onResize);
            var p = 0;
            (this.onscreenresize = function (e) {
                clearTimeout(p);
                var o = !b.ispage && !b.haswrapper;
                o && b.hideRails(),
                    (p = setTimeout(function () {
                        b && (o && b.showRails(), b.resize()), (p = 0);
                    }, 120));
            }),
                (this.lazyResize = function (e) {
                    return (
                        clearTimeout(p),
                        (e = isNaN(e) ? 240 : e),
                        (p = setTimeout(function () {
                            b && b.resize(), (p = 0);
                        }, e)),
                        b
                    );
                }),
                (this.jqbind = function (e, o, t) {
                    b.events.push({ e: e, n: o, f: t, q: !0 }), P(e).on(o, t);
                });
            var m = !(this.mousewheel = function (e, o, t) {
                var r = "jquery" in e ? e[0] : e;
                if ("onwheel" in R.createElement("div")) b._bind(r, "wheel", o, t || !1);
                else {
                    var i = void 0 !== R.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                    s(r, i, o, t || !1), "DOMMouseScroll" == i && s(r, "MozMousePixelScroll", o, t || !1);
                }
            });
            if (S.haseventlistener) {
                try {
                    var f = Object.defineProperty({}, "passive", {
                        get: function () {
                            m = !0;
                        },
                    });
                    _.addEventListener("test", null, f);
                } catch (e) {}
                (this.stopPropagation = function (e) {
                    return e && (e = e.original ? e.original : e).stopPropagation(), !1;
                }),
                    (this.cancelEvent = function (e) {
                        return e.cancelable && e.preventDefault(), e.stopImmediatePropagation(), e.preventManipulation && e.preventManipulation(), !1;
                    });
            } else
                (Event.prototype.preventDefault = function () {
                    this.returnValue = !1;
                }),
                    (Event.prototype.stopPropagation = function () {
                        this.cancelBubble = !0;
                    }),
                    (_.constructor.prototype.addEventListener = R.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (e, o, t) {
                        this.attachEvent("on" + e, o);
                    }),
                    (_.constructor.prototype.removeEventListener = R.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (e, o, t) {
                        this.detachEvent("on" + e, o);
                    }),
                    (this.cancelEvent = function (e) {
                        return (e = e || _.event) && ((e.cancelBubble = !0), (e.cancel = !0), (e.returnValue = !1)), !1;
                    }),
                    (this.stopPropagation = function (e) {
                        return (e = e || _.event) && (e.cancelBubble = !0), !1;
                    });
            (this.delegate = function (e, o, t, r, i) {
                var s = O[o] || !1;
                s ||
                    ((s = {
                        a: [],
                        l: [],
                        f: function (e) {
                            for (var o = s.l, t = !1, r = o.length - 1; 0 <= r; r--) if (!1 === (t = o[r].call(e.target, e))) return !1;
                            return t;
                        },
                    }),
                    b.bind(e, o, s.f, r, i),
                    (O[o] = s)),
                    b.ispage ? ((s.a = [b.id].concat(s.a)), (s.l = [t].concat(s.l))) : (s.a.push(b.id), s.l.push(t));
            }),
                (this.undelegate = function (e, o, t, r, i) {
                    var s = O[o] || !1;
                    if (s && s.l) for (var n = 0, l = s.l.length; n < l; n++) s.a[n] === b.id && (s.a.splice(n), s.l.splice(n), 0 === s.a.length && (b._unbind(e, o, s.l.f), (O[o] = null)));
                }),
                (this.bind = function (e, o, t, r, i) {
                    var s = "jquery" in e ? e[0] : e;
                    b._bind(s, o, t, r || !1, i || !1);
                }),
                (this._bind = function (e, o, t, r, i) {
                    b.events.push({ e: e, n: o, f: t, b: r, q: !1 }), m && (i || e == window.document || e == window.document.body || e == window) ? e.addEventListener(o, t, { passive: !1, capture: r }) : e.addEventListener(o, t, r || !1);
                }),
                (this._unbind = function (e, o, t, r) {
                    O[o] ? b.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
                }),
                (this.unbindAll = function () {
                    for (var e = 0; e < b.events.length; e++) {
                        var o = b.events[e];
                        o.q ? o.e.unbind(o.n, o.f) : b._unbind(o.e, o.n, o.f, o.b);
                    }
                }),
                (this.showRails = function () {
                    return b.showRail().showRailHr();
                }),
                (this.showRail = function () {
                    return 0 === b.page.maxh || (!b.ispage && "none" == b.win.css("display")) || ((b.rail.visibility = !0), b.rail.css("display", "block")), b;
                }),
                (this.showRailHr = function () {
                    return b.railh && (0 === b.page.maxw || (!b.ispage && "none" == b.win.css("display")) || ((b.railh.visibility = !0), b.railh.css("display", "block"))), b;
                }),
                (this.hideRails = function () {
                    return b.hideRail().hideRailHr();
                }),
                (this.hideRail = function () {
                    return (b.rail.visibility = !1), b.rail.css("display", "none"), b;
                }),
                (this.hideRailHr = function () {
                    return b.railh && ((b.railh.visibility = !1), b.railh.css("display", "none")), b;
                }),
                (this.show = function () {
                    return (b.hidden = !1), (b.railslocked = !1), b.showRails();
                }),
                (this.hide = function () {
                    return (b.hidden = !0), (b.railslocked = !0), b.hideRails();
                }),
                (this.toggle = function () {
                    return b.hidden ? b.show() : b.hide();
                }),
                (this.remove = function () {
                    for (var e in (b.stop(), b.cursortimeout && clearTimeout(b.cursortimeout), b.delaylist)) b.delaylist[e] && H(b.delaylist[e].h);
                    b.doZoomOut(),
                        b.unbindAll(),
                        S.isie9 && b.win[0].detachEvent("onpropertychange", b.onAttributeChange),
                        !1 !== b.observer && b.observer.disconnect(),
                        !1 !== b.observerremover && b.observerremover.disconnect(),
                        !1 !== b.observerbody && b.observerbody.disconnect(),
                        (b.events = null),
                        b.cursor && b.cursor.remove(),
                        b.cursorh && b.cursorh.remove(),
                        b.rail && b.rail.remove(),
                        b.railh && b.railh.remove(),
                        b.zoom && b.zoom.remove();
                    for (var o = 0; o < b.saved.css.length; o++) {
                        var t = b.saved.css[o];
                        t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
                    }
                    (b.saved = !1), b.me.data("__nicescroll", "");
                    var r = P.nicescroll;
                    for (var i in (r.each(function (e) {
                        if (this && this.id === b.id) {
                            delete r[e];
                            for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
                            r.length--, r.length && delete r[r.length];
                        }
                    }),
                    b))
                        (b[i] = null), delete b[i];
                    b = null;
                }),
                (this.scrollstart = function (e) {
                    return (this.onscrollstart = e), b;
                }),
                (this.scrollend = function (e) {
                    return (this.onscrollend = e), b;
                }),
                (this.scrollcancel = function (e) {
                    return (this.onscrollcancel = e), b;
                }),
                (this.zoomin = function (e) {
                    return (this.onzoomin = e), b;
                }),
                (this.zoomout = function (e) {
                    return (this.onzoomout = e), b;
                }),
                (this.isScrollable = function (e) {
                    var o = e.target ? e.target : e;
                    if ("OPTION" == o.nodeName) return !0;
                    for (; o && 1 == o.nodeType && o !== this.me[0] && !/^BODY|HTML/.test(o.nodeName); ) {
                        var t = P(o),
                            r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                        if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
                        o = !!o.parentNode && o.parentNode;
                    }
                    return !1;
                }),
                (this.getViewport = function (e) {
                    for (var o = !(!e || !e.parentNode) && e.parentNode; o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName); ) {
                        var t = P(o);
                        if (/fixed|absolute/.test(t.css("position"))) return t;
                        var r = t.css("overflowY") || t.css("overflowX") || t.css("overflow") || "";
                        if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight) return t;
                        if (0 < t.getNiceScroll().length) return t;
                        o = !!o.parentNode && o.parentNode;
                    }
                    return !1;
                }),
                (this.triggerScrollStart = function (e, o, t, r, i) {
                    if (b.onscrollstart) {
                        var s = { type: "scrollstart", current: { x: e, y: o }, request: { x: t, y: r }, end: { x: b.newscrollx, y: b.newscrolly }, speed: i };
                        b.onscrollstart.call(b, s);
                    }
                }),
                (this.triggerScrollEnd = function () {
                    if (b.onscrollend) {
                        var e = b.getScrollLeft(),
                            o = b.getScrollTop(),
                            t = { type: "scrollend", current: { x: e, y: o }, end: { x: e, y: o } };
                        b.onscrollend.call(b, t);
                    }
                });
            var g = 0,
                v = 0,
                w = 0,
                z = 1,
                k = !1;
            if (
                ((this.onmousewheel = function (e) {
                    if (b.wheelprevented || b.locked) return !1;
                    if (b.railslocked) return b.debounced("checkunlock", b.resize, 250), !1;
                    if (b.rail.drag) return b.cancelEvent(e);
                    if (("auto" === x.oneaxismousemode && 0 !== e.deltaX && (x.oneaxismousemode = !1), x.oneaxismousemode && 0 === e.deltaX && !b.rail.scrollable)) return !b.railh || !b.railh.scrollable || b.onmousewheelhr(e);
                    var o = X(),
                        t = !1;
                    if ((x.preservenativescrolling && b.checkarea + 600 < o && ((b.nativescrollingarea = b.isScrollable(e)), (t = !0)), (b.checkarea = o), b.nativescrollingarea)) return !0;
                    var r = i(e, !1, t);
                    return r && (b.checkarea = 0), r;
                }),
                (this.onmousewheelhr = function (e) {
                    if (!b.wheelprevented) {
                        if (b.railslocked || !b.railh.scrollable) return !0;
                        if (b.rail.drag) return b.cancelEvent(e);
                        var o = X(),
                            t = !1;
                        return x.preservenativescrolling && b.checkarea + 600 < o && ((b.nativescrollingarea = b.isScrollable(e)), (t = !0)), (b.checkarea = o), !!b.nativescrollingarea || (b.railslocked ? b.cancelEvent(e) : i(e, !0, t));
                    }
                }),
                (this.stop = function () {
                    return b.cancelScroll(), b.scrollmon && b.scrollmon.stop(), (b.cursorfreezed = !1), (b.scroll.y = Math.round(b.getScrollTop() * (1 / b.scrollratio.y))), b.noticeCursor(), b;
                }),
                (this.getTransitionSpeed = function (e) {
                    return (80 + (e / 72) * x.scrollspeed) | 0;
                }),
                x.smoothscroll)
            )
                if (b.ishwscroll && S.hastransition && x.usetransition && x.smoothscroll) {
                    var T = "";
                    (this.resetTransition = function () {
                        (T = ""), b.doc.css(S.prefixstyle + "transition-duration", "0ms");
                    }),
                        (this.prepareTransition = function (e, o) {
                            var t = o ? e : b.getTransitionSpeed(e),
                                r = t + "ms";
                            return T !== r && ((T = r), b.doc.css(S.prefixstyle + "transition-duration", r)), t;
                        }),
                        (this.doScrollLeft = function (e, o) {
                            var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                            b.doScrollPos(e, t, o);
                        }),
                        (this.doScrollTop = function (e, o) {
                            var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                            b.doScrollPos(t, e, o);
                        }),
                        (this.cursorupdate = {
                            running: !1,
                            start: function () {
                                var e = this;
                                if (!e.running) {
                                    e.running = !0;
                                    var o = function () {
                                        e.running && Y(o), b.showCursor(b.getScrollTop(), b.getScrollLeft()), b.notifyScrollEvent(b.win[0]);
                                    };
                                    Y(o);
                                }
                            },
                            stop: function () {
                                this.running = !1;
                            },
                        }),
                        (this.doScrollPos = function (e, o, t) {
                            var r = b.getScrollTop(),
                                i = b.getScrollLeft();
                            if (
                                (((b.newscrolly - r) * (o - r) < 0 || (b.newscrollx - i) * (e - i) < 0) && b.cancelScroll(),
                                x.bouncescroll
                                    ? (o < 0 ? (o = (o / 2) | 0) : o > b.page.maxh && (o = (b.page.maxh + (o - b.page.maxh) / 2) | 0), e < 0 ? (e = (e / 2) | 0) : e > b.page.maxw && (e = (b.page.maxw + (e - b.page.maxw) / 2) | 0))
                                    : (o < 0 ? (o = 0) : o > b.page.maxh && (o = b.page.maxh), e < 0 ? (e = 0) : e > b.page.maxw && (e = b.page.maxw)),
                                b.scrollrunning && e == b.newscrollx && o == b.newscrolly)
                            )
                                return !1;
                            (b.newscrolly = o), (b.newscrollx = e);
                            var s = b.getScrollTop(),
                                n = b.getScrollLeft(),
                                l = {};
                            (l.x = e - n), (l.y = o - s);
                            var a = 0 | Math.sqrt(l.x * l.x + l.y * l.y),
                                c = b.prepareTransition(a);
                            b.scrollrunning || ((b.scrollrunning = !0), b.triggerScrollStart(n, s, e, o, c), b.cursorupdate.start()),
                                (b.scrollendtrapped = !0),
                                S.transitionend || (b.scrollendtrapped && clearTimeout(b.scrollendtrapped), (b.scrollendtrapped = setTimeout(b.onScrollTransitionEnd, c))),
                                b.setScrollTop(b.newscrolly),
                                b.setScrollLeft(b.newscrollx);
                        }),
                        (this.cancelScroll = function () {
                            if (!b.scrollendtrapped) return !0;
                            var e = b.getScrollTop(),
                                o = b.getScrollLeft();
                            return (
                                (b.scrollrunning = !1),
                                S.transitionend || clearTimeout(S.transitionend),
                                (b.scrollendtrapped = !1),
                                b.resetTransition(),
                                b.setScrollTop(e),
                                b.railh && b.setScrollLeft(o),
                                b.timerscroll && b.timerscroll.tm && clearInterval(b.timerscroll.tm),
                                (b.timerscroll = !1),
                                (b.cursorfreezed = !1),
                                b.cursorupdate.stop(),
                                b.showCursor(e, o),
                                b
                            );
                        }),
                        (this.onScrollTransitionEnd = function () {
                            if (b.scrollendtrapped) {
                                var e = b.getScrollTop(),
                                    o = b.getScrollLeft();
                                if ((e < 0 ? (e = 0) : e > b.page.maxh && (e = b.page.maxh), o < 0 ? (o = 0) : o > b.page.maxw && (o = b.page.maxw), e != b.newscrolly || o != b.newscrollx)) return b.doScrollPos(o, e, x.snapbackspeed);
                                b.scrollrunning && b.triggerScrollEnd(),
                                    (b.scrollrunning = !1),
                                    (b.scrollendtrapped = !1),
                                    b.resetTransition(),
                                    (b.timerscroll = !1),
                                    b.setScrollTop(e),
                                    b.railh && b.setScrollLeft(o),
                                    b.cursorupdate.stop(),
                                    b.noticeCursor(!1, e, o),
                                    (b.cursorfreezed = !1);
                            }
                        });
                } else
                    (this.doScrollLeft = function (e, o) {
                        var t = b.scrollrunning ? b.newscrolly : b.getScrollTop();
                        b.doScrollPos(e, t, o);
                    }),
                        (this.doScrollTop = function (e, o) {
                            var t = b.scrollrunning ? b.newscrollx : b.getScrollLeft();
                            b.doScrollPos(t, e, o);
                        }),
                        (this.doScrollPos = function (e, o, t) {
                            var r = b.getScrollTop(),
                                i = b.getScrollLeft();
                            ((b.newscrolly - r) * (o - r) < 0 || (b.newscrollx - i) * (e - i) < 0) && b.cancelScroll();
                            var s = !1;
                            if (
                                ((b.bouncescroll && b.rail.visibility) || (o < 0 ? (s = !(o = 0)) : o > b.page.maxh && ((o = b.page.maxh), (s = !0))),
                                (b.bouncescroll && b.railh.visibility) || (e < 0 ? (s = !(e = 0)) : e > b.page.maxw && ((e = b.page.maxw), (s = !0))),
                                b.scrollrunning && b.newscrolly === o && b.newscrollx === e)
                            )
                                return !0;
                            (b.newscrolly = o), (b.newscrollx = e), (b.dst = {}), (b.dst.x = e - i), (b.dst.y = o - r), (b.dst.px = i), (b.dst.py = r);
                            var n = 0 | Math.sqrt(b.dst.x * b.dst.x + b.dst.y * b.dst.y),
                                l = b.getTransitionSpeed(n);
                            b.bzscroll = {};
                            var a = s ? 1 : 0.58;
                            (b.bzscroll.x = new d(i, b.newscrollx, l, 0, 0, a, 1)), (b.bzscroll.y = new d(r, b.newscrolly, l, 0, 0, a, 1));
                            X();
                            var c = function () {
                                if (b.scrollrunning) {
                                    var e = b.bzscroll.y.getPos();
                                    b.setScrollLeft(b.bzscroll.x.getNow()), b.setScrollTop(b.bzscroll.y.getNow()), e <= 1 ? (b.timer = Y(c)) : ((b.scrollrunning = !1), (b.timer = 0), b.triggerScrollEnd());
                                }
                            };
                            b.scrollrunning || (b.triggerScrollStart(i, r, e, o, l), (b.scrollrunning = !0), (b.timer = Y(c)));
                        }),
                        (this.cancelScroll = function () {
                            return b.timer && H(b.timer), (b.timer = 0), (b.bzscroll = !1), (b.scrollrunning = !1), b;
                        });
            else
                (this.doScrollLeft = function (e, o) {
                    var t = b.getScrollTop();
                    b.doScrollPos(e, t, o);
                }),
                    (this.doScrollTop = function (e, o) {
                        var t = b.getScrollLeft();
                        b.doScrollPos(t, e, o);
                    }),
                    (this.doScrollPos = function (e, o, t) {
                        var r = e > b.page.maxw ? b.page.maxw : e;
                        r < 0 && (r = 0);
                        var i = o > b.page.maxh ? b.page.maxh : o;
                        i < 0 && (i = 0),
                            b.synched("scroll", function () {
                                b.setScrollTop(i), b.setScrollLeft(r);
                            });
                    }),
                    (this.cancelScroll = function () {});
            (this.doScrollBy = function (e, o) {
                l(0, e);
            }),
                (this.doScrollLeftBy = function (e, o) {
                    l(e, 0);
                }),
                (this.doScrollTo = function (e, o) {
                    var t = o ? Math.round(e * b.scrollratio.y) : e;
                    t < 0 ? (t = 0) : t > b.page.maxh && (t = b.page.maxh), (b.cursorfreezed = !1), b.doScrollTop(e);
                }),
                (this.checkContentSize = function () {
                    var e = b.getContentSize();
                    (e.h == b.page.h && e.w == b.page.w) || b.resize(!1, e);
                }),
                (b.onscroll = function (e) {
                    b.rail.drag ||
                        b.cursorfreezed ||
                        b.synched("scroll", function () {
                            (b.scroll.y = Math.round(b.getScrollTop() / b.scrollratio.y)), b.railh && (b.scroll.x = Math.round(b.getScrollLeft() / b.scrollratio.x)), b.noticeCursor();
                        });
                }),
                b.bind(b.docscroll, "scroll", b.onscroll),
                (this.doZoomIn = function (e) {
                    if (!b.zoomactive) {
                        (b.zoomactive = !0), (b.zoomrestore = { style: {} });
                        var o = ["position", "top", "left", "zIndex", "backgroundColor", "marginTop", "marginBottom", "marginLeft", "marginRight"],
                            t = b.win[0].style;
                        for (var r in o) {
                            var i = o[r];
                            b.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
                        }
                        (b.zoomrestore.style.width = b.win.css("width")),
                            (b.zoomrestore.style.height = b.win.css("height")),
                            (b.zoomrestore.padding = { w: b.win.outerWidth() - b.win.width(), h: b.win.outerHeight() - b.win.height() }),
                            S.isios4 && ((b.zoomrestore.scrollTop = I.scrollTop()), I.scrollTop(0)),
                            b.win.css({ position: S.isios4 ? "absolute" : "fixed", top: 0, left: 0, zIndex: N + 100, margin: 0 });
                        var s = b.win.css("backgroundColor");
                        return (
                            ("" === s || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) && b.win.css("backgroundColor", "#fff"),
                            b.rail.css({ zIndex: N + 101 }),
                            b.zoom.css({ zIndex: N + 102 }),
                            b.zoom.css("backgroundPosition", "0 -18px"),
                            b.resizeZoom(),
                            b.onzoomin && b.onzoomin.call(b),
                            b.cancelEvent(e)
                        );
                    }
                }),
                (this.doZoomOut = function (e) {
                    if (b.zoomactive)
                        return (
                            (b.zoomactive = !1),
                            b.win.css("margin", ""),
                            b.win.css(b.zoomrestore.style),
                            S.isios4 && I.scrollTop(b.zoomrestore.scrollTop),
                            b.rail.css({ "z-index": b.zindex }),
                            b.zoom.css({ "z-index": b.zindex }),
                            (b.zoomrestore = !1),
                            b.zoom.css("backgroundPosition", "0 0"),
                            b.onResize(),
                            b.onzoomout && b.onzoomout.call(b),
                            b.cancelEvent(e)
                        );
                }),
                (this.doZoom = function (e) {
                    return b.zoomactive ? b.doZoomOut(e) : b.doZoomIn(e);
                }),
                (this.resizeZoom = function () {
                    if (b.zoomactive) {
                        var e = b.getScrollTop();
                        b.win.css({ width: I.width() - b.zoomrestore.padding.w + "px", height: I.height() - b.zoomrestore.padding.h + "px" }), b.onResize(), b.setScrollTop(Math.min(b.page.maxh, e));
                    }
                }),
                this.init(),
                P.nicescroll.push(this);
        },
        q = function (e) {
            var f = this;
            (this.nc = e),
                (this.lastx = 0),
                (this.lasty = 0),
                (this.speedx = 0),
                (this.speedy = 0),
                (this.lasttime = 0),
                (this.steptime = 0),
                (this.snapx = !1),
                (this.snapy = !1),
                (this.demulx = 0),
                (this.demuly = 0),
                (this.lastscrollx = -1),
                (this.lastscrolly = -1),
                (this.chkx = 0),
                (this.chky = 0),
                (this.timer = 0),
                (this.reset = function (e, o) {
                    f.stop(), (f.steptime = 0), (f.lasttime = X()), (f.speedx = 0), (f.speedy = 0), (f.lastx = e), (f.lasty = o), (f.lastscrollx = -1), (f.lastscrolly = -1);
                }),
                (this.update = function (e, o) {
                    var t = X();
                    (f.steptime = t - f.lasttime), (f.lasttime = t);
                    var r = o - f.lasty,
                        i = e - f.lastx,
                        s = f.nc.getScrollTop() + r,
                        n = f.nc.getScrollLeft() + i;
                    (f.snapx = n < 0 || n > f.nc.page.maxw), (f.snapy = s < 0 || s > f.nc.page.maxh), (f.speedx = i), (f.speedy = r), (f.lastx = e), (f.lasty = o);
                }),
                (this.stop = function () {
                    f.nc.unsynched("domomentum2d"), f.timer && clearTimeout(f.timer), (f.timer = 0), (f.lastscrollx = -1), (f.lastscrolly = -1);
                }),
                (this.doSnapy = function (e, o) {
                    var t = !1;
                    o < 0 ? (t = !(o = 0)) : o > f.nc.page.maxh && ((o = f.nc.page.maxh), (t = !0)),
                        e < 0 ? (t = !(e = 0)) : e > f.nc.page.maxw && ((e = f.nc.page.maxw), (t = !0)),
                        t ? f.nc.doScrollPos(e, o, f.nc.opt.snapbackspeed) : f.nc.triggerScrollEnd();
                }),
                (this.doMomentum = function (e) {
                    var o = X(),
                        t = e ? o + e : f.lasttime,
                        r = f.nc.getScrollLeft(),
                        i = f.nc.getScrollTop(),
                        s = f.nc.page.maxh,
                        n = f.nc.page.maxw;
                    (f.speedx = 0 < n ? Math.min(60, f.speedx) : 0), (f.speedy = 0 < s ? Math.min(60, f.speedy) : 0);
                    var l = t && o - t <= 60;
                    (i < 0 || s < i || r < 0 || n < r) && (l = !1);
                    var a = !(!f.speedy || !l) && f.speedy,
                        c = !(!f.speedx || !l) && f.speedx;
                    if (a || c) {
                        var d = Math.max(16, f.steptime);
                        if (50 < d) {
                            var u = d / 50;
                            (f.speedx *= u), (f.speedy *= u), (d = 50);
                        }
                        (f.demulxy = 0), (f.lastscrollx = f.nc.getScrollLeft()), (f.chkx = f.lastscrollx), (f.lastscrolly = f.nc.getScrollTop()), (f.chky = f.lastscrolly);
                        var h = f.lastscrollx,
                            p = f.lastscrolly,
                            m = function () {
                                var e = 600 < X() - o ? 0.04 : 0.02;
                                f.speedx && ((h = Math.floor(f.lastscrollx - f.speedx * (1 - f.demulxy))), ((f.lastscrollx = h) < 0 || n < h) && (e = 0.1)),
                                    f.speedy && ((p = Math.floor(f.lastscrolly - f.speedy * (1 - f.demulxy))), ((f.lastscrolly = p) < 0 || s < p) && (e = 0.1)),
                                    (f.demulxy = Math.min(1, f.demulxy + e)),
                                    f.nc.synched("domomentum2d", function () {
                                        if (f.speedx) {
                                            f.nc.getScrollLeft();
                                            (f.chkx = h), f.nc.setScrollLeft(h);
                                        }
                                        if (f.speedy) {
                                            f.nc.getScrollTop();
                                            (f.chky = p), f.nc.setScrollTop(p);
                                        }
                                        f.timer || (f.nc.hideCursor(), f.doSnapy(h, p));
                                    }),
                                    f.demulxy < 1 ? (f.timer = setTimeout(m, d)) : (f.stop(), f.nc.hideCursor(), f.doSnapy(h, p));
                            };
                        m();
                    } else f.doSnapy(f.nc.getScrollLeft(), f.nc.getScrollTop());
                });
        },
        i = e.fn.scrollTop;
    (e.cssHooks.pageYOffset = {
        get: function (e, o, t) {
            var r = P.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollTop() : i.call(e);
        },
        set: function (e, o) {
            var t = P.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : i.call(e, o), this;
        },
    }),
        (e.fn.scrollTop = function (o) {
            if (void 0 === o) {
                var e = (this[0] && P.data(this[0], "__nicescroll")) || !1;
                return e && e.ishwscroll ? e.getScrollTop() : i.call(this);
            }
            return this.each(function () {
                var e = P.data(this, "__nicescroll") || !1;
                e && e.ishwscroll ? e.setScrollTop(parseInt(o)) : i.call(P(this), o);
            });
        });
    var n = e.fn.scrollLeft;
    (P.cssHooks.pageXOffset = {
        get: function (e, o, t) {
            var r = P.data(e, "__nicescroll") || !1;
            return r && r.ishwscroll ? r.getScrollLeft() : n.call(e);
        },
        set: function (e, o) {
            var t = P.data(e, "__nicescroll") || !1;
            return t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : n.call(e, o), this;
        },
    }),
        (e.fn.scrollLeft = function (o) {
            if (void 0 === o) {
                var e = (this[0] && P.data(this[0], "__nicescroll")) || !1;
                return e && e.ishwscroll ? e.getScrollLeft() : n.call(this);
            }
            return this.each(function () {
                var e = P.data(this, "__nicescroll") || !1;
                e && e.ishwscroll ? e.setScrollLeft(parseInt(o)) : n.call(P(this), o);
            });
        });
    var a = function (e) {
        var o = this;
        if (
            ((this.length = 0),
            (this.name = "nicescrollarray"),
            (this.each = function (e) {
                return P.each(o, e), o;
            }),
            (this.push = function (e) {
                (o[o.length] = e), o.length++;
            }),
            (this.eq = function (e) {
                return o[e];
            }),
            e)
        )
            for (var t = 0; t < e.length; t++) {
                var r = P.data(e[t], "__nicescroll") || !1;
                r && ((this[this.length] = r), this.length++);
            }
        return this;
    };
    !(function (e, o, t) {
        for (var r = 0, i = o.length; r < i; r++) t(e, o[r]);
    })(a.prototype, ["show", "hide", "toggle", "onResize", "resize", "remove", "stop", "doScrollPos"], function (e, o) {
        e[o] = function () {
            var e = arguments;
            return this.each(function () {
                this[o].apply(this, e);
            });
        };
    }),
        (e.fn.getNiceScroll = function (e) {
            return void 0 === e ? new a(this) : (this[e] && P.data(this[e], "__nicescroll")) || !1;
        }),
        ((e.expr.pseudos || e.expr[":"]).nicescroll = function (e) {
            return void 0 !== P.data(e, "__nicescroll");
        }),
        (P.fn.niceScroll = function (i, s) {
            void 0 !== s || "object" != typeof i || "jquery" in i || ((s = i), (i = !1));
            var n = new a();
            return (
                this.each(function () {
                    var e = P(this),
                        o = P.extend({}, s);
                    if (i) {
                        var t = P(i);
                        (o.doc = 1 < t.length ? P(i, e) : t), (o.win = e);
                    }
                    !("doc" in o) || "win" in o || (o.win = e);
                    var r = e.data("__nicescroll") || !1;
                    r || ((o.doc = o.doc || e), (r = new l(o, e)), e.data("__nicescroll", r)), n.push(r);
                }),
                1 === n.length ? n[0] : n
            );
        }),
        (_.NiceScroll = {
            getjQuery: function () {
                return e;
            },
        }),
        P.nicescroll || ((P.nicescroll = new a()), (P.nicescroll.options = D));
});

!(function (t, n) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = n()) : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? (exports.Scrollbar = n()) : (t.Scrollbar = n());
})(window, function () {
    return (function (t) {
        var n = {};
        function e(r) {
            if (n[r]) return n[r].exports;
            var o = (n[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
        }
        return (
            (e.m = t),
            (e.c = n),
            (e.d = function (t, n, r) {
                e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
            }),
            (e.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (e.t = function (t, n) {
                if ((1 & n && (t = e(t)), 8 & n)) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t))
                    for (var o in t)
                        e.d(
                            r,
                            o,
                            function (n) {
                                return t[n];
                            }.bind(null, o)
                        );
                return r;
            }),
            (e.n = function (t) {
                var n =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return e.d(n, "a", n), n;
            }),
            (e.o = function (t, n) {
                return Object.prototype.hasOwnProperty.call(t, n);
            }),
            (e.p = ""),
            e((e.s = 58))
        );
    })([
        function (t, n, e) {
            var r = e(25)("wks"),
                o = e(16),
                i = e(2).Symbol,
                u = "function" == typeof i;
            (t.exports = function (t) {
                return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
            }).store = r;
        },
        function (t, n) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function (t, n) {
            var e = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
            "number" == typeof __g && (__g = e);
        },
        function (t, n) {
            var e = (t.exports = { version: "2.6.9" });
            "number" == typeof __e && (__e = e);
        },
        function (t, n, e) {
            t.exports = !e(13)(function () {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
        },
        function (t, n, e) {
            var r = e(2),
                o = e(3),
                i = e(11),
                u = e(6),
                c = e(10),
                s = function (t, n, e) {
                    var a,
                        f,
                        l,
                        p,
                        h = t & s.F,
                        d = t & s.G,
                        v = t & s.S,
                        y = t & s.P,
                        m = t & s.B,
                        g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
                        b = d ? o : o[n] || (o[n] = {}),
                        x = b.prototype || (b.prototype = {});
                    for (a in (d && (e = n), e))
                        (l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a]), (p = m && f ? c(l, r) : y && "function" == typeof l ? c(Function.call, l) : l), g && u(g, a, l, t & s.U), b[a] != l && i(b, a, p), y && x[a] != l && (x[a] = l);
                };
            (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (t.exports = s);
        },
        function (t, n, e) {
            var r = e(2),
                o = e(11),
                i = e(9),
                u = e(16)("src"),
                c = e(60),
                s = ("" + c).split("toString");
            (e(3).inspectSource = function (t) {
                return c.call(t);
            }),
                (t.exports = function (t, n, e, c) {
                    var a = "function" == typeof e;
                    a && (i(e, "name") || o(e, "name", n)), t[n] !== e && (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))), t === r ? (t[n] = e) : c ? (t[n] ? (t[n] = e) : o(t, n, e)) : (delete t[n], o(t, n, e)));
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && this[u]) || c.call(this);
                });
        },
        function (t, n, e) {
            var r = e(8),
                o = e(41),
                i = e(43),
                u = Object.defineProperty;
            n.f = e(4)
                ? Object.defineProperty
                : function (t, n, e) {
                      if ((r(t), (n = i(n, !0)), r(e), o))
                          try {
                              return u(t, n, e);
                          } catch (t) {}
                      if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
                      return "value" in e && (t[n] = e.value), t;
                  };
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function (t, n) {
            var e = {}.hasOwnProperty;
            t.exports = function (t, n) {
                return e.call(t, n);
            };
        },
        function (t, n, e) {
            var r = e(44);
            t.exports = function (t, n, e) {
                if ((r(t), void 0 === n)) return t;
                switch (e) {
                    case 1:
                        return function (e) {
                            return t.call(n, e);
                        };
                    case 2:
                        return function (e, r) {
                            return t.call(n, e, r);
                        };
                    case 3:
                        return function (e, r, o) {
                            return t.call(n, e, r, o);
                        };
                }
                return function () {
                    return t.apply(n, arguments);
                };
            };
        },
        function (t, n, e) {
            var r = e(7),
                o = e(17);
            t.exports = e(4)
                ? function (t, n, e) {
                      return r.f(t, n, o(1, e));
                  }
                : function (t, n, e) {
                      return (t[n] = e), t;
                  };
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t, n) {
                if (!r(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
                return t;
            };
        },
        function (t, n) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function (t, n) {
            t.exports = {};
        },
        function (t, n, e) {
            var r = e(10),
                o = e(49),
                i = e(50),
                u = e(8),
                c = e(19),
                s = e(51),
                a = {},
                f = {};
            ((n = t.exports = function (t, n, e, l, p) {
                var h,
                    d,
                    v,
                    y,
                    m = p
                        ? function () {
                              return t;
                          }
                        : s(t),
                    g = r(e, l, n ? 2 : 1),
                    b = 0;
                if ("function" != typeof m) throw TypeError(t + " is not iterable!");
                if (i(m)) {
                    for (h = c(t.length); h > b; b++) if ((y = n ? g(u((d = t[b]))[0], d[1]) : g(t[b])) === a || y === f) return y;
                } else for (v = m.call(t); !(d = v.next()).done; ) if ((y = o(v, g, d.value, n)) === a || y === f) return y;
            }).BREAK = a),
                (n.RETURN = f);
        },
        function (t, n) {
            var e = 0,
                r = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + r).toString(36));
            };
        },
        function (t, n) {
            t.exports = function (t, n) {
                return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n };
            };
        },
        function (t, n, e) {
            var r = e(31),
                o = e(28);
            t.exports = function (t) {
                return r(o(t));
            };
        },
        function (t, n, e) {
            var r = e(27),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        function (t, n, e) {
            var r = e(28);
            t.exports = function (t) {
                return Object(r(t));
            };
        },
        function (t, n, e) {
            var r = e(16)("meta"),
                o = e(1),
                i = e(9),
                u = e(7).f,
                c = 0,
                s =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                a = !e(13)(function () {
                    return s(Object.preventExtensions({}));
                }),
                f = function (t) {
                    u(t, r, { value: { i: "O" + ++c, w: {} } });
                },
                l = (t.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function (t, n) {
                        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, r)) {
                            if (!s(t)) return "F";
                            if (!n) return "E";
                            f(t);
                        }
                        return t[r].i;
                    },
                    getWeak: function (t, n) {
                        if (!i(t, r)) {
                            if (!s(t)) return !0;
                            if (!n) return !1;
                            f(t);
                        }
                        return t[r].w;
                    },
                    onFreeze: function (t) {
                        return a && l.NEED && s(t) && !i(t, r) && f(t), t;
                    },
                });
        },
        function (t, n, e) {
            "use strict";
            var r = e(23),
                o = {};
            (o[e(0)("toStringTag")] = "z"),
                o + "" != "[object z]" &&
                    e(6)(
                        Object.prototype,
                        "toString",
                        function () {
                            return "[object " + r(this) + "]";
                        },
                        !0
                    );
        },
        function (t, n, e) {
            var r = e(24),
                o = e(0)("toStringTag"),
                i =
                    "Arguments" ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    );
            t.exports = function (t) {
                var n, e, u;
                return void 0 === t
                    ? "Undefined"
                    : null === t
                    ? "Null"
                    : "string" ==
                      typeof (e = (function (t, n) {
                          try {
                              return t[n];
                          } catch (t) {}
                      })((n = Object(t)), o))
                    ? e
                    : i
                    ? r(n)
                    : "Object" == (u = r(n)) && "function" == typeof n.callee
                    ? "Arguments"
                    : u;
            };
        },
        function (t, n) {
            var e = {}.toString;
            t.exports = function (t) {
                return e.call(t).slice(8, -1);
            };
        },
        function (t, n, e) {
            var r = e(3),
                o = e(2),
                i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (t.exports = function (t, n) {
                return i[t] || (i[t] = void 0 !== n ? n : {});
            })("versions", []).push({ version: r.version, mode: e(40) ? "pure" : "global", copyright: "? 2019 Denis Pushkarev (zloirock.ru)" });
        },
        function (t, n, e) {
            "use strict";
            var r = e(61)(!0);
            e(29)(
                String,
                "String",
                function (t) {
                    (this._t = String(t)), (this._i = 0);
                },
                function () {
                    var t,
                        n = this._t,
                        e = this._i;
                    return e >= n.length ? { value: void 0, done: !0 } : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
                }
            );
        },
        function (t, n) {
            var e = Math.ceil,
                r = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
            };
        },
        function (t, n) {
            t.exports = function (t) {
                if (null == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(40),
                o = e(5),
                i = e(6),
                u = e(11),
                c = e(14),
                s = e(62),
                a = e(33),
                f = e(68),
                l = e(0)("iterator"),
                p = !([].keys && "next" in [].keys()),
                h = function () {
                    return this;
                };
            t.exports = function (t, n, e, d, v, y, m) {
                s(e, n, d);
                var g,
                    b,
                    x,
                    _ = function (t) {
                        if (!p && t in O) return O[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new e(this, t);
                                };
                        }
                        return function () {
                            return new e(this, t);
                        };
                    },
                    w = n + " Iterator",
                    S = "values" == v,
                    E = !1,
                    O = t.prototype,
                    T = O[l] || O["@@iterator"] || (v && O[v]),
                    A = T || _(v),
                    M = v ? (S ? _("entries") : A) : void 0,
                    P = ("Array" == n && O.entries) || T;
                if (
                    (P && (x = f(P.call(new t()))) !== Object.prototype && x.next && (a(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)),
                    S &&
                        T &&
                        "values" !== T.name &&
                        ((E = !0),
                        (A = function () {
                            return T.call(this);
                        })),
                    (r && !m) || (!p && !E && O[l]) || u(O, l, A),
                    (c[n] = A),
                    (c[w] = h),
                    v)
                )
                    if (((g = { values: S ? A : _("values"), keys: y ? A : _("keys"), entries: M }), m)) for (b in g) b in O || i(O, b, g[b]);
                    else o(o.P + o.F * (p || E), n, g);
                return g;
            };
        },
        function (t, n, e) {
            var r = e(64),
                o = e(46);
            t.exports =
                Object.keys ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, n, e) {
            var r = e(24);
            t.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (t) {
                      return "String" == r(t) ? t.split("") : Object(t);
                  };
        },
        function (t, n, e) {
            var r = e(25)("keys"),
                o = e(16);
            t.exports = function (t) {
                return r[t] || (r[t] = o(t));
            };
        },
        function (t, n, e) {
            var r = e(7).f,
                o = e(9),
                i = e(0)("toStringTag");
            t.exports = function (t, n, e) {
                t && !o((t = e ? t : t.prototype), i) && r(t, i, { configurable: !0, value: n });
            };
        },
        function (t, n, e) {
            for (
                var r = e(69),
                    o = e(30),
                    i = e(6),
                    u = e(2),
                    c = e(11),
                    s = e(14),
                    a = e(0),
                    f = a("iterator"),
                    l = a("toStringTag"),
                    p = s.Array,
                    h = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1,
                    },
                    d = o(h),
                    v = 0;
                v < d.length;
                v++
            ) {
                var y,
                    m = d[v],
                    g = h[m],
                    b = u[m],
                    x = b && b.prototype;
                if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), (s[m] = p), g)) for (y in r) x[y] || i(x, y, r[y], !0);
            }
        },
        function (t, n, e) {
            var r = e(6);
            t.exports = function (t, n, e) {
                for (var o in n) r(t, o, n[o], e);
                return t;
            };
        },
        function (t, n) {
            t.exports = function (t, n, e, r) {
                if (!(t instanceof n) || (void 0 !== r && r in t)) throw TypeError(e + ": incorrect invocation!");
                return t;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(2),
                o = e(5),
                i = e(6),
                u = e(35),
                c = e(21),
                s = e(15),
                a = e(36),
                f = e(1),
                l = e(13),
                p = e(52),
                h = e(33),
                d = e(73);
            t.exports = function (t, n, e, v, y, m) {
                var g = r[t],
                    b = g,
                    x = y ? "set" : "add",
                    _ = b && b.prototype,
                    w = {},
                    S = function (t) {
                        var n = _[t];
                        i(
                            _,
                            t,
                            "delete" == t
                                ? function (t) {
                                      return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                                  }
                                : "has" == t
                                ? function (t) {
                                      return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                                  }
                                : "get" == t
                                ? function (t) {
                                      return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                                  }
                                : "add" == t
                                ? function (t) {
                                      return n.call(this, 0 === t ? 0 : t), this;
                                  }
                                : function (t, e) {
                                      return n.call(this, 0 === t ? 0 : t, e), this;
                                  }
                        );
                    };
                if (
                    "function" == typeof b &&
                    (m ||
                        (_.forEach &&
                            !l(function () {
                                new b().entries().next();
                            })))
                ) {
                    var E = new b(),
                        O = E[x](m ? {} : -0, 1) != E,
                        T = l(function () {
                            E.has(1);
                        }),
                        A = p(function (t) {
                            new b(t);
                        }),
                        M =
                            !m &&
                            l(function () {
                                for (var t = new b(), n = 5; n--; ) t[x](n, n);
                                return !t.has(-0);
                            });
                    A ||
                        (((b = n(function (n, e) {
                            a(n, b, t);
                            var r = d(new g(), n, b);
                            return null != e && s(e, y, r[x], r), r;
                        })).prototype = _),
                        (_.constructor = b)),
                        (T || M) && (S("delete"), S("has"), y && S("get")),
                        (M || O) && S(x),
                        m && _.clear && delete _.clear;
                } else (b = v.getConstructor(n, t, y, x)), u(b.prototype, e), (c.NEED = !0);
                return h(b, t), (w[t] = b), o(o.G + o.W + o.F * (b != g), w), m || v.setStrong(b, t, y), b;
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(5);
            t.exports = function (t) {
                r(r.S, t, {
                    of: function () {
                        for (var t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
                        return new this(n);
                    },
                });
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(5),
                o = e(44),
                i = e(10),
                u = e(15);
            t.exports = function (t) {
                r(r.S, t, {
                    from: function (t) {
                        var n,
                            e,
                            r,
                            c,
                            s = arguments[1];
                        return (
                            o(this),
                            (n = void 0 !== s) && o(s),
                            null == t
                                ? new this()
                                : ((e = []),
                                  n
                                      ? ((r = 0),
                                        (c = i(s, arguments[2], 2)),
                                        u(t, !1, function (t) {
                                            e.push(c(t, r++));
                                        }))
                                      : u(t, !1, e.push, e),
                                  new this(e))
                        );
                    },
                });
            };
        },
        function (t, n) {
            t.exports = !1;
        },
        function (t, n, e) {
            t.exports =
                !e(4) &&
                !e(13)(function () {
                    return (
                        7 !=
                        Object.defineProperty(e(42)("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (t, n, e) {
            var r = e(1),
                o = e(2).document,
                i = r(o) && r(o.createElement);
            t.exports = function (t) {
                return i ? o.createElement(t) : {};
            };
        },
        function (t, n, e) {
            var r = e(1);
            t.exports = function (t, n) {
                if (!r(t)) return t;
                var e, o;
                if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
                if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o;
                if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (t, n) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function (t, n, e) {
            var r = e(8),
                o = e(63),
                i = e(46),
                u = e(32)("IE_PROTO"),
                c = function () {},
                s = function () {
                    var t,
                        n = e(42)("iframe"),
                        r = i.length;
                    for (n.style.display = "none", e(67).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), s = t.F; r--; ) delete s.prototype[i[r]];
                    return s();
                };
            t.exports =
                Object.create ||
                function (t, n) {
                    var e;
                    return null !== t ? ((c.prototype = r(t)), (e = new c()), (c.prototype = null), (e[u] = t)) : (e = s()), void 0 === n ? e : o(e, n);
                };
        },
        function (t, n) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function (t, n) {
            t.exports = function (t, n) {
                return { value: n, done: !!t };
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(7).f,
                o = e(45),
                i = e(35),
                u = e(10),
                c = e(36),
                s = e(15),
                a = e(29),
                f = e(47),
                l = e(72),
                p = e(4),
                h = e(21).fastKey,
                d = e(12),
                v = p ? "_s" : "size",
                y = function (t, n) {
                    var e,
                        r = h(n);
                    if ("F" !== r) return t._i[r];
                    for (e = t._f; e; e = e.n) if (e.k == n) return e;
                };
            t.exports = {
                getConstructor: function (t, n, e, a) {
                    var f = t(function (t, r) {
                        c(t, f, n, "_i"), (t._t = n), (t._i = o(null)), (t._f = void 0), (t._l = void 0), (t[v] = 0), null != r && s(r, e, t[a], t);
                    });
                    return (
                        i(f.prototype, {
                            clear: function () {
                                for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n) (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                                (t._f = t._l = void 0), (t[v] = 0);
                            },
                            delete: function (t) {
                                var e = d(this, n),
                                    r = y(e, t);
                                if (r) {
                                    var o = r.n,
                                        i = r.p;
                                    delete e._i[r.i], (r.r = !0), i && (i.n = o), o && (o.p = i), e._f == r && (e._f = o), e._l == r && (e._l = i), e[v]--;
                                }
                                return !!r;
                            },
                            forEach: function (t) {
                                d(this, n);
                                for (var e, r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3); (e = e ? e.n : this._f); ) for (r(e.v, e.k, this); e && e.r; ) e = e.p;
                            },
                            has: function (t) {
                                return !!y(d(this, n), t);
                            },
                        }),
                        p &&
                            r(f.prototype, "size", {
                                get: function () {
                                    return d(this, n)[v];
                                },
                            }),
                        f
                    );
                },
                def: function (t, n, e) {
                    var r,
                        o,
                        i = y(t, n);
                    return i ? (i.v = e) : ((t._l = i = { i: (o = h(n, !0)), k: n, v: e, p: (r = t._l), n: void 0, r: !1 }), t._f || (t._f = i), r && (r.n = i), t[v]++, "F" !== o && (t._i[o] = i)), t;
                },
                getEntry: y,
                setStrong: function (t, n, e) {
                    a(
                        t,
                        n,
                        function (t, e) {
                            (this._t = d(t, n)), (this._k = e), (this._l = void 0);
                        },
                        function () {
                            for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
                            return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : ((this._t = void 0), f(1));
                        },
                        e ? "entries" : "values",
                        !e,
                        !0
                    ),
                        l(n);
                },
            };
        },
        function (t, n, e) {
            var r = e(8);
            t.exports = function (t, n, e, o) {
                try {
                    return o ? n(r(e)[0], e[1]) : n(e);
                } catch (n) {
                    var i = t.return;
                    throw (void 0 !== i && r(i.call(t)), n);
                }
            };
        },
        function (t, n, e) {
            var r = e(14),
                o = e(0)("iterator"),
                i = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (r.Array === t || i[o] === t);
            };
        },
        function (t, n, e) {
            var r = e(23),
                o = e(0)("iterator"),
                i = e(14);
            t.exports = e(3).getIteratorMethod = function (t) {
                if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
            };
        },
        function (t, n, e) {
            var r = e(0)("iterator"),
                o = !1;
            try {
                var i = [7][r]();
                (i.return = function () {
                    o = !0;
                }),
                    Array.from(i, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, n) {
                if (!n && !o) return !1;
                var e = !1;
                try {
                    var i = [7],
                        u = i[r]();
                    (u.next = function () {
                        return { done: (e = !0) };
                    }),
                        (i[r] = function () {
                            return u;
                        }),
                        t(i);
                } catch (t) {}
                return e;
            };
        },
        function (t, n) {
            n.f = {}.propertyIsEnumerable;
        },
        function (t, n, e) {
            var r = e(23),
                o = e(77);
            t.exports = function (t) {
                return function () {
                    if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
                    return o(this);
                };
            };
        },
        function (t, n, e) {
            var r = e(10),
                o = e(31),
                i = e(20),
                u = e(19),
                c = e(87);
            t.exports = function (t, n) {
                var e = 1 == t,
                    s = 2 == t,
                    a = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l,
                    h = n || c;
                return function (n, c, d) {
                    for (var v, y, m = i(n), g = o(m), b = r(c, d, 3), x = u(g.length), _ = 0, w = e ? h(n, x) : s ? h(n, 0) : void 0; x > _; _++)
                        if ((p || _ in g) && ((y = b((v = g[_]), _, m)), t))
                            if (e) w[_] = y;
                            else if (y)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return v;
                                    case 6:
                                        return _;
                                    case 2:
                                        w.push(v);
                                }
                            else if (f) return !1;
                    return l ? -1 : a || f ? f : w;
                };
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(4),
                o = e(30),
                i = e(90),
                u = e(53),
                c = e(20),
                s = e(31),
                a = Object.assign;
            t.exports =
                !a ||
                e(13)(function () {
                    var t = {},
                        n = {},
                        e = Symbol(),
                        r = "abcdefghijklmnopqrst";
                    return (
                        (t[e] = 7),
                        r.split("").forEach(function (t) {
                            n[t] = t;
                        }),
                        7 != a({}, t)[e] || Object.keys(a({}, n)).join("") != r
                    );
                })
                    ? function (t, n) {
                          for (var e = c(t), a = arguments.length, f = 1, l = i.f, p = u.f; a > f; )
                              for (var h, d = s(arguments[f++]), v = l ? o(d).concat(l(d)) : o(d), y = v.length, m = 0; y > m; ) (h = v[m++]), (r && !p.call(d, h)) || (e[h] = d[h]);
                          return e;
                      }
                    : a;
        },
        function (t, n, e) {
            "use strict";
            (function (t) {
                var e = "object" == typeof t && t && t.Object === Object && t;
                n.a = e;
            }.call(this, e(99)));
        },
        function (t, n, e) {
            t.exports = e(100);
        },
        function (t, n, e) {
            e(22), e(26), e(34), e(71), e(76), e(78), e(79), (t.exports = e(3).Map);
        },
        function (t, n, e) {
            t.exports = e(25)("native-function-to-string", Function.toString);
        },
        function (t, n, e) {
            var r = e(27),
                o = e(28);
            t.exports = function (t) {
                return function (n, e) {
                    var i,
                        u,
                        c = String(o(n)),
                        s = r(e),
                        a = c.length;
                    return s < 0 || s >= a
                        ? t
                            ? ""
                            : void 0
                        : (i = c.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === a || (u = c.charCodeAt(s + 1)) < 56320 || u > 57343
                        ? t
                            ? c.charAt(s)
                            : i
                        : t
                        ? c.slice(s, s + 2)
                        : u - 56320 + ((i - 55296) << 10) + 65536;
                };
            };
        },
        function (t, n, e) {
            "use strict";
            var r = e(45),
                o = e(17),
                i = e(33),
                u = {};
            e(11)(u, e(0)("iterator"), function () {
                return this;
            }),
                (t.exports = function (t, n, e) {
                    (t.prototype = r(u, { next: o(1, e) })), i(t, n + " Iterator");
                });
        },
        function (t, n, e) {
            var r = e(7),
                o = e(8),
                i = e(30);
            t.exports = e(4)
                ? Object.defineProperties
                : function (t, n) {
                      o(t);
                      for (var e, u = i(n), c = u.length, s = 0; c > s; ) r.f(t, (e = u[s++]), n[e]);
                      return t;
                  };
        },
        function (t, n, e) {
            var r = e(9),
                o = e(18),
                i = e(65)(!1),
                u = e(32)("IE_PROTO");
            t.exports = function (t, n) {
                var e,
                    c = o(t),
                    s = 0,
                    a = [];
                for (e in c) e != u && r(c, e) && a.push(e);
                for (; n.length > s; ) r(c, (e = n[s++])) && (~i(a, e) || a.push(e));
                return a;
            };
        },
        function (t, n, e) {
            var r = e(18),
                o = e(19),
                i = e(66);
            t.exports = function (t) {
                return function (n, e, u) {
                    var c,
                        s = r(n),
                        a = o(s.length),
                        f = i(u, a);
                    if (t && e != e) {
                        for (; a > f; ) if ((c = s[f++]) != c) return !0;
                    } else for (; a > f; f++) if ((t || f in s) && s[f] === e) return t || f || 0;
                    return !t && -1;
                };
            };
        },
        function (t, n, e) {
            var r = e(27),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, n) {
                return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
            };
        },
        function (t, n, e) {
            var r = e(2).document;
            t.exports = r && r.documentElement;
        },
        function (t, n, e) {
            var r = e(9),
                o = e(20),
                i = e(32)("IE_PROTO"),
                u = Object.prototype;
            t.exports =
                Object.getPrototypeOf ||
                function (t) {
                    return (t = o(t)), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
                };
        },
        function (t, n, e) {
            "use strict";
            var r = e(70),
                o = e(47),
                i = e(14),
                u = e(18);
            (t.exports = e(29)(
                Array,
                "Array",
                function (t, n) {
                    (this._t = u(t)), (this._i = 0), (this._k = n);
                },
                function () {
                    var t = this._t,
                        n = this._k,
                        e = this._i++;
                    return !t || e >= t.length ? ((this._t = void 0), o(1)) : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
                },
                "values"
            )),
                (i.Arguments = i.Array),
                r("keys"),
                r("values"),
                r("entries");
        },
        function (t, n, e) {
            var r = e(0)("unscopables"),
                o = Array.prototype;
            null == o[r] && e(11)(o, r, {}),
                (t.exports = function (t) {
                    o[r][t] = !0;
                });
        },
        function (t, n, e) {
            "use strict";
            var r = e(48),
                o = e(12);
            t.exports = e(37)(
                "Map",
                function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    get: function (t) {
                        var n = r.getEntry(o(this, "Map"), t);
                        return n && n.v;
                    },
                    set: function (t, n) {
                        return r.def(o(this, "Map"), 0 === t ? 0 : t, n);
                    },
                },
                r,
                !0
            );
        },
        function (t, n, e) {
            "use strict";
            var r = e(2),
                o = e(7),
                i = e(4),
                u = e(0)("species");
            t.exports = function (t) {
                var n = r[t];
                i &&
                    n &&
                    !n[u] &&
                    o.f(n, u, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(74).set;
            t.exports = function (t, n, e) {
                var i,
                    u = n.constructor;
                return u !== e && "function" == typeof u && (i = u.prototype) !== e.prototype && r(i) && o && o(t, i), t;
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(8),
                i = function (t, n) {
                    if ((o(t), !r(n) && null !== n)) throw TypeError(n + ": can't set as prototype!");
                };
            t.exports = {
                set:
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function (t, n, r) {
                              try {
                                  (r = e(10)(Function.call, e(75).f(Object.prototype, "__proto__").set, 2))(t, []), (n = !(t instanceof Array));
                              } catch (t) {
                                  n = !0;
                              }
                              return function (t, e) {
                                  return i(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        function (t, n, e) {
            var r = e(53),
                o = e(17),
                i = e(18),
                u = e(43),
                c = e(9),
                s = e(41),
                a = Object.getOwnPropertyDescriptor;
            n.f = e(4)
                ? a
                : function (t, n) {
                      if (((t = i(t)), (n = u(n, !0)), s))
                          try {
                              return a(t, n);
                          } catch (t) {}
                      if (c(t, n)) return o(!r.f.call(t, n), t[n]);
                  };
        },
        function (t, n, e) {
            var r = e(5);
            r(r.P + r.R, "Map", { toJSON: e(54)("Map") });
        },
        function (t, n, e) {
            var r = e(15);
            t.exports = function (t, n) {
                var e = [];
                return r(t, !1, e.push, e, n), e;
            };
        },
        function (t, n, e) {
            e(38)("Map");
        },
        function (t, n, e) {
            e(39)("Map");
        },
        function (t, n, e) {
            e(22), e(26), e(34), e(81), e(82), e(83), e(84), (t.exports = e(3).Set);
        },
        function (t, n, e) {
            "use strict";
            var r = e(48),
                o = e(12);
            t.exports = e(37)(
                "Set",
                function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                {
                    add: function (t) {
                        return r.def(o(this, "Set"), (t = 0 === t ? 0 : t), t);
                    },
                },
                r
            );
        },
        function (t, n, e) {
            var r = e(5);
            r(r.P + r.R, "Set", { toJSON: e(54)("Set") });
        },
        function (t, n, e) {
            e(38)("Set");
        },
        function (t, n, e) {
            e(39)("Set");
        },
        function (t, n, e) {
            e(22), e(34), e(86), e(92), e(93), (t.exports = e(3).WeakMap);
        },
        function (t, n, e) {
            "use strict";
            var r,
                o = e(2),
                i = e(55)(0),
                u = e(6),
                c = e(21),
                s = e(56),
                a = e(91),
                f = e(1),
                l = e(12),
                p = e(12),
                h = !o.ActiveXObject && "ActiveXObject" in o,
                d = c.getWeak,
                v = Object.isExtensible,
                y = a.ufstore,
                m = function (t) {
                    return function () {
                        return t(this, arguments.length > 0 ? arguments[0] : void 0);
                    };
                },
                g = {
                    get: function (t) {
                        if (f(t)) {
                            var n = d(t);
                            return !0 === n ? y(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0;
                        }
                    },
                    set: function (t, n) {
                        return a.def(l(this, "WeakMap"), t, n);
                    },
                },
                b = (t.exports = e(37)("WeakMap", m, g, a, !0, !0));
            p &&
                h &&
                (s((r = a.getConstructor(m, "WeakMap")).prototype, g),
                (c.NEED = !0),
                i(["delete", "has", "get", "set"], function (t) {
                    var n = b.prototype,
                        e = n[t];
                    u(n, t, function (n, o) {
                        if (f(n) && !v(n)) {
                            this._f || (this._f = new r());
                            var i = this._f[t](n, o);
                            return "set" == t ? this : i;
                        }
                        return e.call(this, n, o);
                    });
                }));
        },
        function (t, n, e) {
            var r = e(88);
            t.exports = function (t, n) {
                return new (r(t))(n);
            };
        },
        function (t, n, e) {
            var r = e(1),
                o = e(89),
                i = e(0)("species");
            t.exports = function (t) {
                var n;
                return o(t) && ("function" != typeof (n = t.constructor) || (n !== Array && !o(n.prototype)) || (n = void 0), r(n) && null === (n = n[i]) && (n = void 0)), void 0 === n ? Array : n;
            };
        },
        function (t, n, e) {
            var r = e(24);
            t.exports =
                Array.isArray ||
                function (t) {
                    return "Array" == r(t);
                };
        },
        function (t, n) {
            n.f = Object.getOwnPropertySymbols;
        },
        function (t, n, e) {
            "use strict";
            var r = e(35),
                o = e(21).getWeak,
                i = e(8),
                u = e(1),
                c = e(36),
                s = e(15),
                a = e(55),
                f = e(9),
                l = e(12),
                p = a(5),
                h = a(6),
                d = 0,
                v = function (t) {
                    return t._l || (t._l = new y());
                },
                y = function () {
                    this.a = [];
                },
                m = function (t, n) {
                    return p(t.a, function (t) {
                        return t[0] === n;
                    });
                };
            (y.prototype = {
                get: function (t) {
                    var n = m(this, t);
                    if (n) return n[1];
                },
                has: function (t) {
                    return !!m(this, t);
                },
                set: function (t, n) {
                    var e = m(this, t);
                    e ? (e[1] = n) : this.a.push([t, n]);
                },
                delete: function (t) {
                    var n = h(this.a, function (n) {
                        return n[0] === t;
                    });
                    return ~n && this.a.splice(n, 1), !!~n;
                },
            }),
                (t.exports = {
                    getConstructor: function (t, n, e, i) {
                        var a = t(function (t, r) {
                            c(t, a, n, "_i"), (t._t = n), (t._i = d++), (t._l = void 0), null != r && s(r, e, t[i], t);
                        });
                        return (
                            r(a.prototype, {
                                delete: function (t) {
                                    if (!u(t)) return !1;
                                    var e = o(t);
                                    return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i];
                                },
                                has: function (t) {
                                    if (!u(t)) return !1;
                                    var e = o(t);
                                    return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i);
                                },
                            }),
                            a
                        );
                    },
                    def: function (t, n, e) {
                        var r = o(i(n), !0);
                        return !0 === r ? v(t).set(n, e) : (r[t._i] = e), t;
                    },
                    ufstore: v,
                });
        },
        function (t, n, e) {
            e(38)("WeakMap");
        },
        function (t, n, e) {
            e(39)("WeakMap");
        },
        function (t, n, e) {
            e(26), e(95), (t.exports = e(3).Array.from);
        },
        function (t, n, e) {
            "use strict";
            var r = e(10),
                o = e(5),
                i = e(20),
                u = e(49),
                c = e(50),
                s = e(19),
                a = e(96),
                f = e(51);
            o(
                o.S +
                    o.F *
                        !e(52)(function (t) {
                            Array.from(t);
                        }),
                "Array",
                {
                    from: function (t) {
                        var n,
                            e,
                            o,
                            l,
                            p = i(t),
                            h = "function" == typeof this ? this : Array,
                            d = arguments.length,
                            v = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== v,
                            m = 0,
                            g = f(p);
                        if ((y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)), null == g || (h == Array && c(g)))) for (e = new h((n = s(p.length))); n > m; m++) a(e, m, y ? v(p[m], m) : p[m]);
                        else for (l = g.call(p), e = new h(); !(o = l.next()).done; m++) a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
                        return (e.length = m), e;
                    },
                }
            );
        },
        function (t, n, e) {
            "use strict";
            var r = e(7),
                o = e(17);
            t.exports = function (t, n, e) {
                n in t ? r.f(t, n, o(0, e)) : (t[n] = e);
            };
        },
        function (t, n, e) {
            e(98), (t.exports = e(3).Object.assign);
        },
        function (t, n, e) {
            var r = e(5);
            r(r.S + r.F, "Object", { assign: e(56) });
        },
        function (t, n) {
            var e;
            e = (function () {
                return this;
            })();
            try {
                e = e || new Function("return this")();
            } catch (t) {
                "object" == typeof window && (e = window);
            }
            t.exports = e;
        },
        function (t, n, e) {
            "use strict";
            e.r(n);
            var r = {};
            e.r(r),
                e.d(r, "keyboardHandler", function () {
                    return et;
                }),
                e.d(r, "mouseHandler", function () {
                    return rt;
                }),
                e.d(r, "resizeHandler", function () {
                    return ot;
                }),
                e.d(r, "selectHandler", function () {
                    return it;
                }),
                e.d(r, "touchHandler", function () {
                    return ut;
                }),
                e.d(r, "wheelHandler", function () {
                    return ct;
                });

            /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
            var o = function (t, n) {
                    return (o =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (t, n) {
                                t.__proto__ = n;
                            }) ||
                        function (t, n) {
                            for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
                        })(t, n);
                },
                i = function () {
                    return (i =
                        Object.assign ||
                        function (t) {
                            for (var n, e = 1, r = arguments.length; e < r; e++) for (var o in (n = arguments[e])) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                            return t;
                        }).apply(this, arguments);
                };
            function u(t, n, e, r) {
                var o,
                    i = arguments.length,
                    u = i < 3 ? n : null === r ? (r = Object.getOwnPropertyDescriptor(n, e)) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, n, e, r);
                else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
                return i > 3 && u && Object.defineProperty(n, e, u), u;
            }
            e(59), e(80), e(85), e(94), e(97);
            var c = function (t) {
                    var n = typeof t;
                    return null != t && ("object" == n || "function" == n);
                },
                s = e(57),
                a = "object" == typeof self && self && self.Object === Object && self,
                f = s.a || a || Function("return this")(),
                l = f.Symbol,
                p = Object.prototype,
                h = p.hasOwnProperty,
                d = p.toString,
                v = l ? l.toStringTag : void 0,
                y = Object.prototype.toString,
                m = l ? l.toStringTag : void 0,
                g = function (t) {
                    return null == t
                        ? void 0 === t
                            ? "[object Undefined]"
                            : "[object Null]"
                        : m && m in Object(t)
                        ? (function (t) {
                              var n = h.call(t, v),
                                  e = t[v];
                              try {
                                  t[v] = void 0;
                                  var r = !0;
                              } catch (t) {}
                              var o = d.call(t);
                              return r && (n ? (t[v] = e) : delete t[v]), o;
                          })(t)
                        : (function (t) {
                              return y.call(t);
                          })(t);
                },
                b = /^\s+|\s+$/g,
                x = /^[-+]0x[0-9a-f]+$/i,
                _ = /^0b[01]+$/i,
                w = /^0o[0-7]+$/i,
                S = parseInt,
                E = function (t) {
                    if ("number" == typeof t) return t;
                    if (
                        (function (t) {
                            return (
                                "symbol" == typeof t ||
                                ((function (t) {
                                    return null != t && "object" == typeof t;
                                })(t) &&
                                    "[object Symbol]" == g(t))
                            );
                        })(t)
                    )
                        return NaN;
                    if (c(t)) {
                        var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                        t = c(n) ? n + "" : n;
                    }
                    if ("string" != typeof t) return 0 === t ? t : +t;
                    t = t.replace(b, "");
                    var e = _.test(t);
                    return e || w.test(t) ? S(t.slice(2), e ? 2 : 8) : x.test(t) ? NaN : +t;
                },
                O = function (t, n, e) {
                    return (
                        void 0 === e && ((e = n), (n = void 0)),
                        void 0 !== e && (e = (e = E(e)) == e ? e : 0),
                        void 0 !== n && (n = (n = E(n)) == n ? n : 0),
                        (function (t, n, e) {
                            return t == t && (void 0 !== e && (t = t <= e ? t : e), void 0 !== n && (t = t >= n ? t : n)), t;
                        })(E(t), n, e)
                    );
                };
            function T(t, n) {
                return (
                    void 0 === t && (t = -1 / 0),
                    void 0 === n && (n = 1 / 0),
                    function (e, r) {
                        var o = "_" + r;
                        Object.defineProperty(e, r, {
                            get: function () {
                                return this[o];
                            },
                            set: function (e) {
                                Object.defineProperty(this, o, { value: O(e, t, n), enumerable: !1, writable: !0, configurable: !0 });
                            },
                            enumerable: !0,
                            configurable: !0,
                        });
                    }
                );
            }
            function A(t, n) {
                var e = "_" + n;
                Object.defineProperty(t, n, {
                    get: function () {
                        return this[e];
                    },
                    set: function (t) {
                        Object.defineProperty(this, e, { value: !!t, enumerable: !1, writable: !0, configurable: !0 });
                    },
                    enumerable: !0,
                    configurable: !0,
                });
            }
            var M = function () {
                    return f.Date.now();
                },
                P = Math.max,
                j = Math.min,
                k = function (t, n, e) {
                    var r,
                        o,
                        i,
                        u,
                        s,
                        a,
                        f = 0,
                        l = !1,
                        p = !1,
                        h = !0;
                    if ("function" != typeof t) throw new TypeError("Expected a function");
                    function d(n) {
                        var e = r,
                            i = o;
                        return (r = o = void 0), (f = n), (u = t.apply(i, e));
                    }
                    function v(t) {
                        var e = t - a;
                        return void 0 === a || e >= n || e < 0 || (p && t - f >= i);
                    }
                    function y() {
                        var t = M();
                        if (v(t)) return m(t);
                        s = setTimeout(
                            y,
                            (function (t) {
                                var e = n - (t - a);
                                return p ? j(e, i - (t - f)) : e;
                            })(t)
                        );
                    }
                    function m(t) {
                        return (s = void 0), h && r ? d(t) : ((r = o = void 0), u);
                    }
                    function g() {
                        var t = M(),
                            e = v(t);
                        if (((r = arguments), (o = this), (a = t), e)) {
                            if (void 0 === s)
                                return (function (t) {
                                    return (f = t), (s = setTimeout(y, n)), l ? d(t) : u;
                                })(a);
                            if (p) return clearTimeout(s), (s = setTimeout(y, n)), d(a);
                        }
                        return void 0 === s && (s = setTimeout(y, n)), u;
                    }
                    return (
                        (n = E(n) || 0),
                        c(e) && ((l = !!e.leading), (i = (p = "maxWait" in e) ? P(E(e.maxWait) || 0, n) : i), (h = "trailing" in e ? !!e.trailing : h)),
                        (g.cancel = function () {
                            void 0 !== s && clearTimeout(s), (f = 0), (r = a = o = s = void 0);
                        }),
                        (g.flush = function () {
                            return void 0 === s ? u : m(M());
                        }),
                        g
                    );
                };
            function D() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                return function (n, e, r) {
                    var o = r.value;
                    return {
                        get: function () {
                            return (
                                this.hasOwnProperty(e) ||
                                    Object.defineProperty(this, e, {
                                        value: k.apply(
                                            void 0,
                                            (function () {
                                                for (var t = 0, n = 0, e = arguments.length; n < e; n++) t += arguments[n].length;
                                                var r = Array(t),
                                                    o = 0;
                                                for (n = 0; n < e; n++) for (var i = arguments[n], u = 0, c = i.length; u < c; u++, o++) r[o] = i[u];
                                                return r;
                                            })([o], t)
                                        ),
                                    }),
                                this[e]
                            );
                        },
                    };
                };
            }
            var L,
                N = (function () {
                    function t(t) {
                        var n = this;
                        void 0 === t && (t = {}),
                            (this.damping = 0.1),
                            (this.thumbMinSize = 20),
                            (this.renderByPixels = !0),
                            (this.alwaysShowTracks = !1),
                            (this.continuousScrolling = !0),
                            (this.delegateTo = null),
                            (this.plugins = {}),
                            Object.keys(t).forEach(function (e) {
                                n[e] = t[e];
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "wheelEventTarget", {
                            get: function () {
                                return this.delegateTo;
                            },
                            set: function (t) {
                                console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), (this.delegateTo = t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        u([T(0, 1)], t.prototype, "damping", void 0),
                        u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
                        u([A], t.prototype, "renderByPixels", void 0),
                        u([A], t.prototype, "alwaysShowTracks", void 0),
                        u([A], t.prototype, "continuousScrolling", void 0),
                        t
                    );
                })(),
                z = new WeakMap();
            function C() {
                if (void 0 !== L) return L;
                var t = !1;
                try {
                    var n = function () {},
                        e = Object.defineProperty({}, "passive", {
                            get: function () {
                                t = !0;
                            },
                        });
                    window.addEventListener("testPassive", n, e), window.removeEventListener("testPassive", n, e);
                } catch (t) {}
                return (L = !!t && { passive: !1 });
            }
            function R(t) {
                var n = z.get(t) || [];
                return (
                    z.set(t, n),
                    function (t, e, r) {
                        function o(t) {
                            t.defaultPrevented || r(t);
                        }
                        e.split(/\s+/g).forEach(function (e) {
                            n.push({ elem: t, eventName: e, handler: o }), t.addEventListener(e, o, C());
                        });
                    }
                );
            }
            function F(t) {
                var n = (function (t) {
                    return t.touches ? t.touches[t.touches.length - 1] : t;
                })(t);
                return { x: n.clientX, y: n.clientY };
            }
            function I(t, n) {
                return (
                    void 0 === n && (n = []),
                    n.some(function (n) {
                        return t === n;
                    })
                );
            }
            var W = ["webkit", "moz", "ms", "o"],
                H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");
            function B(t, n) {
                (n = (function (t) {
                    var n = {};
                    return (
                        Object.keys(t).forEach(function (e) {
                            if (H.test(e)) {
                                var r = t[e];
                                (e = e.replace(/^-/, "")),
                                    (n[e] = r),
                                    W.forEach(function (t) {
                                        n["-" + t + "-" + e] = r;
                                    });
                            } else n[e] = t[e];
                        }),
                        n
                    );
                })(n)),
                    Object.keys(n).forEach(function (e) {
                        var r = e.replace(/^-/, "").replace(/-([a-z])/g, function (t, n) {
                            return n.toUpperCase();
                        });
                        t.style[r] = n[e];
                    });
            }
            var G,
                X = (function () {
                    function t(t) {
                        (this.updateTime = Date.now()), (this.delta = { x: 0, y: 0 }), (this.velocity = { x: 0, y: 0 }), (this.lastPosition = { x: 0, y: 0 }), (this.lastPosition = F(t));
                    }
                    return (
                        (t.prototype.update = function (t) {
                            var n = this.velocity,
                                e = this.updateTime,
                                r = this.lastPosition,
                                o = Date.now(),
                                i = F(t),
                                u = { x: -(i.x - r.x), y: -(i.y - r.y) },
                                c = o - e || 16,
                                s = (u.x / c) * 16,
                                a = (u.y / c) * 16;
                            (n.x = 0.9 * s + 0.1 * n.x), (n.y = 0.9 * a + 0.1 * n.y), (this.delta = u), (this.updateTime = o), (this.lastPosition = i);
                        }),
                        t
                    );
                })(),
                V = (function () {
                    function t() {
                        this._touchList = {};
                    }
                    return (
                        Object.defineProperty(t.prototype, "_primitiveValue", {
                            get: function () {
                                return { x: 0, y: 0 };
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.isActive = function () {
                            return void 0 !== this._activeTouchID;
                        }),
                        (t.prototype.getDelta = function () {
                            var t = this._getActiveTracker();
                            return t ? i({}, t.delta) : this._primitiveValue;
                        }),
                        (t.prototype.getVelocity = function () {
                            var t = this._getActiveTracker();
                            return t ? i({}, t.velocity) : this._primitiveValue;
                        }),
                        (t.prototype.track = function (t) {
                            var n = this,
                                e = t.targetTouches;
                            return (
                                Array.from(e).forEach(function (t) {
                                    n._add(t);
                                }),
                                this._touchList
                            );
                        }),
                        (t.prototype.update = function (t) {
                            var n = this,
                                e = t.touches,
                                r = t.changedTouches;
                            return (
                                Array.from(e).forEach(function (t) {
                                    n._renew(t);
                                }),
                                this._setActiveID(r),
                                this._touchList
                            );
                        }),
                        (t.prototype.release = function (t) {
                            var n = this;
                            delete this._activeTouchID,
                                Array.from(t.changedTouches).forEach(function (t) {
                                    n._delete(t);
                                });
                        }),
                        (t.prototype._add = function (t) {
                            if (!this._has(t)) {
                                var n = new X(t);
                                this._touchList[t.identifier] = n;
                            }
                        }),
                        (t.prototype._renew = function (t) {
                            this._has(t) && this._touchList[t.identifier].update(t);
                        }),
                        (t.prototype._delete = function (t) {
                            delete this._touchList[t.identifier];
                        }),
                        (t.prototype._has = function (t) {
                            return this._touchList.hasOwnProperty(t.identifier);
                        }),
                        (t.prototype._setActiveID = function (t) {
                            this._activeTouchID = t[t.length - 1].identifier;
                        }),
                        (t.prototype._getActiveTracker = function () {
                            return this._touchList[this._activeTouchID];
                        }),
                        t
                    );
                })();
            !(function (t) {
                (t.X = "x"), (t.Y = "y");
            })(G || (G = {}));
            var U = (function () {
                    function t(t, n) {
                        void 0 === n && (n = 0),
                            (this._direction = t),
                            (this._minSize = n),
                            (this.element = document.createElement("div")),
                            (this.displaySize = 0),
                            (this.realSize = 0),
                            (this.offset = 0),
                            (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.update = function (t, n, e) {
                            (this.realSize = Math.min(n / e, 1) * n), (this.displaySize = Math.max(this.realSize, this._minSize)), (this.offset = (t / e) * (n + (this.realSize - this.displaySize))), B(this.element, this._getStyle());
                        }),
                        (t.prototype._getStyle = function () {
                            switch (this._direction) {
                                case G.X:
                                    return { width: this.displaySize + "px", "-transform": "translate3d(" + this.offset + "px, 0, 0)" };
                                case G.Y:
                                    return { height: this.displaySize + "px", "-transform": "translate3d(0, " + this.offset + "px, 0)" };
                                default:
                                    return null;
                            }
                        }),
                        t
                    );
                })(),
                Y = (function () {
                    function t(t, n) {
                        void 0 === n && (n = 0),
                            (this.element = document.createElement("div")),
                            (this._isShown = !1),
                            (this.element.className = "scrollbar-track scrollbar-track-" + t),
                            (this.thumb = new U(t, n)),
                            this.thumb.attachTo(this.element);
                    }
                    return (
                        (t.prototype.attachTo = function (t) {
                            t.appendChild(this.element);
                        }),
                        (t.prototype.show = function () {
                            this._isShown || ((this._isShown = !0), this.element.classList.add("show"));
                        }),
                        (t.prototype.hide = function () {
                            this._isShown && ((this._isShown = !1), this.element.classList.remove("show"));
                        }),
                        (t.prototype.update = function (t, n, e) {
                            B(this.element, { display: e <= n ? "none" : "block" }), this.thumb.update(t, n, e);
                        }),
                        t
                    );
                })(),
                q = (function () {
                    function t(t) {
                        this._scrollbar = t;
                        var n = t.options.thumbMinSize;
                        (this.xAxis = new Y(G.X, n)), (this.yAxis = new Y(G.Y, n)), this.xAxis.attachTo(t.containerEl), this.yAxis.attachTo(t.containerEl), t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show());
                    }
                    return (
                        (t.prototype.update = function () {
                            var t = this._scrollbar,
                                n = t.size,
                                e = t.offset;
                            this.xAxis.update(e.x, n.container.width, n.content.width), this.yAxis.update(e.y, n.container.height, n.content.height);
                        }),
                        (t.prototype.autoHideOnIdle = function () {
                            this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide());
                        }),
                        u([D(300)], t.prototype, "autoHideOnIdle", null),
                        t
                    );
                })(),
                K = new WeakMap();
            function $(t) {
                return Math.pow(t - 1, 3) + 1;
            }
            var J,
                Q,
                Z,
                tt = (function () {
                    function t(t, n) {
                        var e = this.constructor;
                        (this.scrollbar = t), (this.name = e.pluginName), (this.options = i(i({}, e.defaultOptions), n));
                    }
                    return (
                        (t.prototype.onInit = function () {}),
                        (t.prototype.onDestory = function () {}),
                        (t.prototype.onUpdate = function () {}),
                        (t.prototype.onRender = function (t) {}),
                        (t.prototype.transformDelta = function (t, n) {
                            return i({}, t);
                        }),
                        (t.pluginName = ""),
                        (t.defaultOptions = {}),
                        t
                    );
                })(),
                nt = { order: new Set(), constructors: {} };
            function et(t) {
                var n = R(t),
                    e = t.containerEl;
                n(e, "keydown", function (n) {
                    var r = document.activeElement;
                    if (
                        (r === e || e.contains(r)) &&
                        !(function (t) {
                            return !("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName && !t.isContentEditable) && !t.disabled;
                        })(r)
                    ) {
                        var o = (function (t, n) {
                            var e = t.size,
                                r = t.limit,
                                o = t.offset;
                            switch (n) {
                                case J.TAB:
                                    return (function (t) {
                                        requestAnimationFrame(function () {
                                            t.scrollIntoView(document.activeElement, { offsetTop: t.size.container.height / 2, onlyScrollIfNeeded: !0 });
                                        });
                                    })(t);
                                case J.SPACE:
                                    return [0, 200];
                                case J.PAGE_UP:
                                    return [0, 40 - e.container.height];
                                case J.PAGE_DOWN:
                                    return [0, e.container.height - 40];
                                case J.END:
                                    return [0, r.y - o.y];
                                case J.HOME:
                                    return [0, -o.y];
                                case J.LEFT:
                                    return [-40, 0];
                                case J.UP:
                                    return [0, -40];
                                case J.RIGHT:
                                    return [40, 0];
                                case J.DOWN:
                                    return [0, 40];
                                default:
                                    return null;
                            }
                        })(t, n.keyCode || n.which);
                        if (o) {
                            var i = o[0],
                                u = o[1];
                            t.addTransformableMomentum(i, u, n, function (e) {
                                e ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus());
                            });
                        }
                    }
                });
            }
            function rt(t) {
                var n,
                    e,
                    r,
                    o,
                    i,
                    u = R(t),
                    c = t.containerEl,
                    s = t.track,
                    a = s.xAxis,
                    f = s.yAxis;
                function l(n, e) {
                    var r = t.size;
                    return n === Q.X ? (e / (r.container.width + (a.thumb.realSize - a.thumb.displaySize))) * r.content.width : n === Q.Y ? (e / (r.container.height + (f.thumb.realSize - f.thumb.displaySize))) * r.content.height : 0;
                }
                function p(t) {
                    return I(t, [a.element, a.thumb.element]) ? Q.X : I(t, [f.element, f.thumb.element]) ? Q.Y : void 0;
                }
                u(c, "click", function (n) {
                    if (!e && I(n.target, [a.element, f.element])) {
                        var r = n.target,
                            o = p(r),
                            i = r.getBoundingClientRect(),
                            u = F(n),
                            c = t.offset,
                            s = t.limit;
                        if (o === Q.X) {
                            var h = u.x - i.left - a.thumb.displaySize / 2;
                            t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0);
                        }
                        o === Q.Y && ((h = u.y - i.top - f.thumb.displaySize / 2), t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)));
                    }
                }),
                    u(c, "mousedown", function (e) {
                        if (I(e.target, [a.thumb.element, f.thumb.element])) {
                            n = !0;
                            var u = e.target,
                                s = F(e),
                                l = u.getBoundingClientRect();
                            (o = p(u)), (r = { x: s.x - l.left, y: s.y - l.top }), (i = c.getBoundingClientRect()), B(t.containerEl, { "-user-select": "none" });
                        }
                    }),
                    u(window, "mousemove", function (u) {
                        if (n) {
                            e = !0;
                            var c = t.offset,
                                s = F(u);
                            if (o === Q.X) {
                                var a = s.x - r.x - i.left;
                                t.setPosition(l(o, a), c.y);
                            }
                            o === Q.Y && ((a = s.y - r.y - i.top), t.setPosition(c.x, l(o, a)));
                        }
                    }),
                    u(window, "mouseup blur", function () {
                        (n = e = !1), B(t.containerEl, { "-user-select": "" });
                    });
            }
            function ot(t) {
                R(t)(window, "resize", k(t.update.bind(t), 300));
            }
            function it(t) {
                var n,
                    e = R(t),
                    r = t.containerEl,
                    o = t.contentEl,
                    i = t.offset,
                    u = t.limit,
                    c = !1;
                e(window, "mousemove", function (e) {
                    c &&
                        (cancelAnimationFrame(n),
                        (function e(r) {
                            var o = r.x,
                                c = r.y;
                            (o || c) &&
                                (t.setMomentum(O(i.x + o, 0, u.x) - i.x, O(i.y + c, 0, u.y) - i.y),
                                (n = requestAnimationFrame(function () {
                                    e({ x: o, y: c });
                                })));
                        })(
                            (function (t, n) {
                                var e = t.bounding,
                                    r = e.top,
                                    o = e.right,
                                    i = e.bottom,
                                    u = e.left,
                                    c = F(n),
                                    s = c.x,
                                    a = c.y,
                                    f = { x: 0, y: 0 };
                                return 0 === s && 0 === a ? f : (s > o - 20 ? (f.x = s - o + 20) : s < u + 20 && (f.x = s - u - 20), a > i - 20 ? (f.y = a - i + 20) : a < r + 20 && (f.y = a - r - 20), (f.x *= 2), (f.y *= 2), f);
                            })(t, e)
                        ));
                }),
                    e(o, "selectstart", function (t) {
                        t.stopPropagation(), cancelAnimationFrame(n), (c = !0);
                    }),
                    e(window, "mouseup blur", function () {
                        cancelAnimationFrame(n), (c = !1);
                    }),
                    e(r, "scroll", function (t) {
                        t.preventDefault(), (r.scrollTop = r.scrollLeft = 0);
                    });
            }
            function ut(t) {
                var n,
                    e = /Android/.test(navigator.userAgent) ? 3 : 2,
                    r = t.options.delegateTo || t.containerEl,
                    o = new V(),
                    i = R(t),
                    u = 0;
                i(r, "touchstart", function (e) {
                    o.track(e), t.setMomentum(0, 0), 0 === u && ((n = t.options.damping), (t.options.damping = Math.max(n, 0.5))), u++;
                }),
                    i(r, "touchmove", function (n) {
                        if (!Z || Z === t) {
                            o.update(n);
                            var e = o.getDelta(),
                                r = e.x,
                                i = e.y;
                            t.addTransformableMomentum(r, i, n, function (e) {
                                e && (n.preventDefault(), (Z = t));
                            });
                        }
                    }),
                    i(r, "touchcancel touchend", function (r) {
                        var i = o.getVelocity(),
                            c = { x: 0, y: 0 };
                        Object.keys(i).forEach(function (t) {
                            var r = i[t] / n;
                            c[t] = Math.abs(r) < 50 ? 0 : r * e;
                        }),
                            t.addTransformableMomentum(c.x, c.y, r),
                            0 == --u && (t.options.damping = n),
                            o.release(r),
                            (Z = null);
                    });
            }
            function ct(t) {
                R(t)(t.options.delegateTo || t.containerEl, "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel", function (n) {
                    var e = (function (t) {
                            if ("deltaX" in t) {
                                var n = ft(t.deltaMode);
                                return { x: (t.deltaX / st.STANDARD) * n, y: (t.deltaY / st.STANDARD) * n };
                            }
                            return "wheelDeltaX" in t ? { x: t.wheelDeltaX / st.OTHERS, y: t.wheelDeltaY / st.OTHERS } : { x: 0, y: t.wheelDelta / st.OTHERS };
                        })(n),
                        r = e.x,
                        o = e.y;
                    t.addTransformableMomentum(r, o, n, function (t) {
                        t && n.preventDefault();
                    });
                });
            }
            !(function (t) {
                (t[(t.TAB = 9)] = "TAB"),
                    (t[(t.SPACE = 32)] = "SPACE"),
                    (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
                    (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
                    (t[(t.END = 35)] = "END"),
                    (t[(t.HOME = 36)] = "HOME"),
                    (t[(t.LEFT = 37)] = "LEFT"),
                    (t[(t.UP = 38)] = "UP"),
                    (t[(t.RIGHT = 39)] = "RIGHT"),
                    (t[(t.DOWN = 40)] = "DOWN");
            })(J || (J = {})),
                (function (t) {
                    (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
                })(Q || (Q = {}));
            var st = { STANDARD: 1, OTHERS: -3 },
                at = [1, 28, 500],
                ft = function (t) {
                    return at[t] || at[0];
                },
                lt = new Map(),
                pt = (function () {
                    function t(t, n) {
                        var e = this;
                        (this.offset = { x: 0, y: 0 }),
                            (this.limit = { x: 1 / 0, y: 1 / 0 }),
                            (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
                            (this._plugins = []),
                            (this._momentum = { x: 0, y: 0 }),
                            (this._listeners = new Set()),
                            (this.containerEl = t);
                        var r = (this.contentEl = document.createElement("div"));
                        (this.options = new N(n)),
                            t.setAttribute("data-scrollbar", "true"),
                            t.setAttribute("tabindex", "-1"),
                            B(t, { overflow: "hidden", outline: "none" }),
                            window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"),
                            (r.className = "scroll-content"),
                            Array.from(t.childNodes).forEach(function (t) {
                                r.appendChild(t);
                            }),
                            t.appendChild(r),
                            (this.track = new q(this)),
                            (this.size = this.getSize()),
                            (this._plugins = (function (t, n) {
                                return Array.from(nt.order)
                                    .filter(function (t) {
                                        return !1 !== n[t];
                                    })
                                    .map(function (e) {
                                        var r = new (0, nt.constructors[e])(t, n[e]);
                                        return (n[e] = r.options), r;
                                    });
                            })(this, this.options.plugins));
                        var o = t.scrollLeft,
                            i = t.scrollTop;
                        (t.scrollLeft = t.scrollTop = 0), this.setPosition(o, i, { withoutCallbacks: !0 });
                        var u = window,
                            c = u.MutationObserver || u.WebKitMutationObserver || u.MozMutationObserver;
                        "function" == typeof c &&
                            ((this._observer = new c(function () {
                                e.update();
                            })),
                            this._observer.observe(r, { subtree: !0, childList: !0 })),
                            lt.set(t, this),
                            requestAnimationFrame(function () {
                                e._init();
                            });
                    }
                    return (
                        Object.defineProperty(t.prototype, "parent", {
                            get: function () {
                                for (var t = this.containerEl.parentElement; t; ) {
                                    var n = lt.get(t);
                                    if (n) return n;
                                    t = t.parentElement;
                                }
                                return null;
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollTop", {
                            get: function () {
                                return this.offset.y;
                            },
                            set: function (t) {
                                this.setPosition(this.scrollLeft, t);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        Object.defineProperty(t.prototype, "scrollLeft", {
                            get: function () {
                                return this.offset.x;
                            },
                            set: function (t) {
                                this.setPosition(t, this.scrollTop);
                            },
                            enumerable: !0,
                            configurable: !0,
                        }),
                        (t.prototype.getSize = function () {
                            return (function (t) {
                                var n = t.containerEl,
                                    e = t.contentEl;
                                return { container: { width: n.clientWidth, height: n.clientHeight }, content: { width: e.offsetWidth - e.clientWidth + e.scrollWidth, height: e.offsetHeight - e.clientHeight + e.scrollHeight } };
                            })(this);
                        }),
                        (t.prototype.update = function () {
                            !(function (t) {
                                var n = t.getSize(),
                                    e = { x: Math.max(n.content.width - n.container.width, 0), y: Math.max(n.content.height - n.container.height, 0) },
                                    r = t.containerEl.getBoundingClientRect(),
                                    o = { top: Math.max(r.top, 0), right: Math.min(r.right, window.innerWidth), bottom: Math.min(r.bottom, window.innerHeight), left: Math.max(r.left, 0) };
                                (t.size = n), (t.limit = e), (t.bounding = o), t.track.update(), t.setPosition();
                            })(this),
                                this._plugins.forEach(function (t) {
                                    t.onUpdate();
                                });
                        }),
                        (t.prototype.isVisible = function (t) {
                            return (function (t, n) {
                                var e = t.bounding,
                                    r = n.getBoundingClientRect(),
                                    o = Math.max(e.top, r.top),
                                    i = Math.max(e.left, r.left),
                                    u = Math.min(e.right, r.right);
                                return o < Math.min(e.bottom, r.bottom) && i < u;
                            })(this, t);
                        }),
                        (t.prototype.setPosition = function (t, n, e) {
                            var r = this;
                            void 0 === t && (t = this.offset.x), void 0 === n && (n = this.offset.y), void 0 === e && (e = {});
                            var o = (function (t, n, e) {
                                var r = t.options,
                                    o = t.offset,
                                    u = t.limit,
                                    c = t.track,
                                    s = t.contentEl;
                                return (
                                    r.renderByPixels && ((n = Math.round(n)), (e = Math.round(e))),
                                    (n = O(n, 0, u.x)),
                                    (e = O(e, 0, u.y)),
                                    n !== o.x && c.xAxis.show(),
                                    e !== o.y && c.yAxis.show(),
                                    r.alwaysShowTracks || c.autoHideOnIdle(),
                                    n === o.x && e === o.y ? null : ((o.x = n), (o.y = e), B(s, { "-transform": "translate3d(" + -n + "px, " + -e + "px, 0)" }), c.update(), { offset: i({}, o), limit: i({}, u) })
                                );
                            })(this, t, n);
                            o &&
                                !e.withoutCallbacks &&
                                this._listeners.forEach(function (t) {
                                    t.call(r, o);
                                });
                        }),
                        (t.prototype.scrollTo = function (t, n, e, r) {
                            void 0 === t && (t = this.offset.x),
                                void 0 === n && (n = this.offset.y),
                                void 0 === e && (e = 0),
                                void 0 === r && (r = {}),
                                (function (t, n, e, r, o) {
                                    void 0 === r && (r = 0);
                                    var i = void 0 === o ? {} : o,
                                        u = i.easing,
                                        c = void 0 === u ? $ : u,
                                        s = i.callback,
                                        a = t.options,
                                        f = t.offset,
                                        l = t.limit;
                                    a.renderByPixels && ((n = Math.round(n)), (e = Math.round(e)));
                                    var p = f.x,
                                        h = f.y,
                                        d = O(n, 0, l.x) - p,
                                        v = O(e, 0, l.y) - h,
                                        y = Date.now();
                                    cancelAnimationFrame(K.get(t)),
                                        (function n() {
                                            var e = Date.now() - y,
                                                o = r ? c(Math.min(e / r, 1)) : 1;
                                            if ((t.setPosition(p + d * o, h + v * o), e >= r)) "function" == typeof s && s.call(t);
                                            else {
                                                var i = requestAnimationFrame(n);
                                                K.set(t, i);
                                            }
                                        })();
                                })(this, t, n, e, r);
                        }),
                        (t.prototype.scrollIntoView = function (t, n) {
                            void 0 === n && (n = {}),
                                (function (t, n, e) {
                                    var r = void 0 === e ? {} : e,
                                        o = r.alignToTop,
                                        i = void 0 === o || o,
                                        u = r.onlyScrollIfNeeded,
                                        c = void 0 !== u && u,
                                        s = r.offsetTop,
                                        a = void 0 === s ? 0 : s,
                                        f = r.offsetLeft,
                                        l = void 0 === f ? 0 : f,
                                        p = r.offsetBottom,
                                        h = void 0 === p ? 0 : p,
                                        d = t.containerEl,
                                        v = t.bounding,
                                        y = t.offset,
                                        m = t.limit;
                                    if (n && d.contains(n)) {
                                        var g = n.getBoundingClientRect();
                                        if (!c || !t.isVisible(n)) {
                                            var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                                            t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y));
                                        }
                                    }
                                })(this, t, n);
                        }),
                        (t.prototype.addListener = function (t) {
                            if ("function" != typeof t) throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
                            this._listeners.add(t);
                        }),
                        (t.prototype.removeListener = function (t) {
                            this._listeners.delete(t);
                        }),
                        (t.prototype.addTransformableMomentum = function (t, n, e, r) {
                            this._updateDebounced();
                            var o = this._plugins.reduce(
                                    function (t, n) {
                                        return n.transformDelta(t, e) || t;
                                    },
                                    { x: t, y: n }
                                ),
                                i = !this._shouldPropagateMomentum(o.x, o.y);
                            i && this.addMomentum(o.x, o.y), r && r.call(this, i);
                        }),
                        (t.prototype.addMomentum = function (t, n) {
                            this.setMomentum(this._momentum.x + t, this._momentum.y + n);
                        }),
                        (t.prototype.setMomentum = function (t, n) {
                            0 === this.limit.x && (t = 0), 0 === this.limit.y && (n = 0), this.options.renderByPixels && ((t = Math.round(t)), (n = Math.round(n))), (this._momentum.x = t), (this._momentum.y = n);
                        }),
                        (t.prototype.updatePluginOptions = function (t, n) {
                            this._plugins.forEach(function (e) {
                                e.name === t && Object.assign(e.options, n);
                            });
                        }),
                        (t.prototype.destroy = function () {
                            var t = this.containerEl,
                                n = this.contentEl;
                            !(function (t) {
                                var n = z.get(t);
                                n &&
                                    (n.forEach(function (t) {
                                        var n = t.elem,
                                            e = t.eventName,
                                            r = t.handler;
                                        n.removeEventListener(e, r, C());
                                    }),
                                    z.delete(t));
                            })(this),
                                this._listeners.clear(),
                                this.setMomentum(0, 0),
                                cancelAnimationFrame(this._renderID),
                                this._observer && this._observer.disconnect(),
                                lt.delete(this.containerEl);
                            for (var e = Array.from(n.childNodes); t.firstChild; ) t.removeChild(t.firstChild);
                            e.forEach(function (n) {
                                t.appendChild(n);
                            }),
                                B(t, { overflow: "" }),
                                (t.scrollTop = this.scrollTop),
                                (t.scrollLeft = this.scrollLeft),
                                this._plugins.forEach(function (t) {
                                    t.onDestory();
                                }),
                                (this._plugins.length = 0);
                        }),
                        (t.prototype._init = function () {
                            var t = this;
                            this.update(),
                                Object.keys(r).forEach(function (n) {
                                    r[n](t);
                                }),
                                this._plugins.forEach(function (t) {
                                    t.onInit();
                                }),
                                this._render();
                        }),
                        (t.prototype._updateDebounced = function () {
                            this.update();
                        }),
                        (t.prototype._shouldPropagateMomentum = function (t, n) {
                            void 0 === t && (t = 0), void 0 === n && (n = 0);
                            var e = this.options,
                                r = this.offset,
                                o = this.limit;
                            if (!e.continuousScrolling) return !1;
                            0 === o.x && 0 === o.y && this._updateDebounced();
                            var i = O(t + r.x, 0, o.x),
                                u = O(n + r.y, 0, o.y),
                                c = !0;
                            return (c = (c = c && i === r.x) && u === r.y) && (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y);
                        }),
                        (t.prototype._render = function () {
                            var t = this._momentum;
                            if (t.x || t.y) {
                                var n = this._nextTick("x"),
                                    e = this._nextTick("y");
                                (t.x = n.momentum), (t.y = e.momentum), this.setPosition(n.position, e.position);
                            }
                            var r = i({}, this._momentum);
                            this._plugins.forEach(function (t) {
                                t.onRender(r);
                            }),
                                (this._renderID = requestAnimationFrame(this._render.bind(this)));
                        }),
                        (t.prototype._nextTick = function (t) {
                            var n = this.options,
                                e = this.offset,
                                r = this._momentum,
                                o = e[t],
                                i = r[t];
                            if (Math.abs(i) <= 0.1) return { momentum: 0, position: o + i };
                            var u = i * (1 - n.damping);
                            return n.renderByPixels && (u |= 0), { momentum: u, position: o + i - u };
                        }),
                        u([D(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
                        t
                    );
                })(),
                ht =
                    "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
                dt = "smooth-scrollbar-style",
                vt = !1;
            function yt() {
                if (!vt && "undefined" != typeof window) {
                    var t = document.createElement("style");
                    (t.id = dt), (t.textContent = ht), document.head && document.head.appendChild(t), (vt = !0);
                }
            }
            e.d(n, "ScrollbarPlugin", function () {
                return tt;
            });
            /*!
             * cast `I.Scrollbar` to `Scrollbar` to avoid error
             *
             * `I.Scrollbar` is not assignable to `Scrollbar`:
             *     "privateProp" is missing in `I.Scrollbar`
             *
             * @see https://github.com/Microsoft/TypeScript/issues/2672
             */
            var mt = (function (t) {
                function n() {
                    return (null !== t && t.apply(this, arguments)) || this;
                }
                return (
                    (function (t, n) {
                        function e() {
                            this.constructor = t;
                        }
                        o(t, n), (t.prototype = null === n ? Object.create(n) : ((e.prototype = n.prototype), new e()));
                    })(n, t),
                    (n.init = function (t, n) {
                        if (!t || 1 !== t.nodeType) throw new TypeError("expect element to be DOM Element, but got " + t);
                        return yt(), lt.has(t) ? lt.get(t) : new pt(t, n);
                    }),
                    (n.initAll = function (t) {
                        return Array.from(document.querySelectorAll("[data-scrollbar]"), function (e) {
                            return n.init(e, t);
                        });
                    }),
                    (n.has = function (t) {
                        return lt.has(t);
                    }),
                    (n.get = function (t) {
                        return lt.get(t);
                    }),
                    (n.getAll = function () {
                        return Array.from(lt.values());
                    }),
                    (n.destroy = function (t) {
                        var n = lt.get(t);
                        n && n.destroy();
                    }),
                    (n.destroyAll = function () {
                        lt.forEach(function (t) {
                            t.destroy();
                        });
                    }),
                    (n.use = function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            t.forEach(function (t) {
                                var n = t.pluginName;
                                if (!n) throw new TypeError("plugin name is required");
                                nt.order.add(n), (nt.constructors[n] = t);
                            });
                        }.apply(void 0, t);
                    }),
                    (n.attachStyle = function () {
                        return yt();
                    }),
                    (n.detachStyle = function () {
                        return (function () {
                            if (vt && "undefined" != typeof window) {
                                var t = document.getElementById(dt);
                                t && t.parentNode && (t.parentNode.removeChild(t), (vt = !1));
                            }
                        })();
                    }),
                    (n.version = "8.4.1"),
                    (n.ScrollbarPlugin = tt),
                    n
                );
            })(pt);
            n.default = mt;
        },
    ]).default;
});


$.fn.YouTubePopUp = function (options) {
    
};