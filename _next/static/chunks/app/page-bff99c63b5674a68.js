(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        5286: function(e, i, t) {
            Promise.resolve().then(t.bind(t, 1400))
        },
        1400: function(e, i, t) {
            "use strict";
            t.r(i), t.d(i, {
                default: function() {
                    return ev
                }
            });
            var a = t(7437),
                n = t(6480),
                s = t.n(n),
                r = t(4220),
                m = t.n(r),
                l = t(2265),
                x = t(6696),
                o = t(4923),
                c = t(1615);
            t(7976);
            var y = e => {
                    let {
                        cursor: i,
                        isHovered: t,
                        isNav: n
                    } = e, [s, r] = (0, l.useState)({
                        x: 0,
                        y: 0
                    }), m = (0, x.c)(-100), y = (0, x.c)(-100), k = {
                        damping: 50,
                        stiffness: 400
                    }, f = (0, o.q)(m, k), d = (0, o.q)(y, k);
                    (0, l.useEffect)(() => {
                        let e = e => {
                            r({
                                x: e.clientX,
                                y: e.clientY
                            }), m.set(e.clientX), y.set(e.clientY)
                        };
                        return document.addEventListener("mousemove", e), () => {
                            document.removeEventListener("mousemove", e)
                        }
                    }, [m, y]);
                    let b = {
                            nav: {
                                borderColor: "#ffffff"
                            },
                            regular: {
                                borderColor: "#151519"
                            },
                            hovered: {
                                backgroundColor: "#ffffff",
                                mixBlendMode: "difference",
                                scale: 1.5,
                                transition: {
                                    duration: .3
                                }
                            }
                        },
                        u = (0, o.q)(m, {
                            damping: 50,
                            stiffness: 500,
                            mass: .1
                        }),
                        p = (0, o.q)(y, {
                            damping: 50,
                            stiffness: 500,
                            mass: .1
                        });
                    return i.length > 1 ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.E.div, {
                            className: "cursor__gradient",
                            style: {
                                position: "fixed",
                                left: f,
                                top: d
                            }
                        }), (0, a.jsx)(c.E.div, {
                            className: "hover-image ".concat(i),
                            style: {
                                position: "fixed",
                                translate: "-50% -50%",
                                left: u,
                                top: p
                            },
                            variants: b
                        })]
                    }) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(c.E.div, {
                            className: "cursor__gradient",
                            style: {
                                position: "fixed",
                                left: f,
                                top: d
                            }
                        }), (0, a.jsx)(c.E.div, {
                            className: "cursor__circle ".concat(t ? "cursor__circle__hovered" : ""),
                            style: {
                                position: "fixed",
                                left: u,
                                top: p
                            },
                            variants: b,
                            animate: t ? "hovered" : n ? "nav" : "regular"
                        }), (0, a.jsx)(c.E.div, {
                            className: "cursor__circle__inner",
                            animate: {
                                backgroundColor: t ? "unset" : "#151519"
                            },
                            style: {
                                position: "fixed",
                                left: s.x,
                                top: s.y
                            }
                        })]
                    })
                },
                k = t(717),
                f = t(4098);
            let d = ["All", "About", "Seek"],
                b = {
                    all: {
                        lg: [{
                            i: "bio",
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 9,
                            y: 1,
                            w: 4,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 5,
                            y: 1,
                            w: 3,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 5,
                            y: 0,
                            w: 7,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 4,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 0,
                            y: 6,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 8,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 8,
                            w: 4,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 2,
                            y: 4,
                            w: 4,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 6,
                            y: 4,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 10,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 6,
                            y: 11,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 16,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 6,
                            y: 18,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 0,
                            y: 23,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 6,
                            y: 25,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }],
                        md: [{
                            i: "bio",
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 7,
                            y: 1,
                            w: 5,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 8,
                            y: 6,
                            w: 2,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 5,
                            y: 0,
                            w: 5,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 4,
                            y: 6,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 6,
                            y: 6,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 4,
                            y: 8,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 6,
                            y: 8,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 6,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 1,
                            y: 12,
                            w: 8,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 22,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 6,
                            y: 22,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 30,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 5,
                            y: 30,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 0,
                            y: 38,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 5,
                            y: 38,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }],
                        sm: [{
                            i: "bio",
                            x: 0,
                            y: 1,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 0,
                            y: 7,
                            w: 4,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 0,
                            y: 12,
                            w: 4,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 16,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 2,
                            y: 16,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 19,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 19,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 22,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 0,
                            y: 28,
                            w: 4,
                            h: 16,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 44,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 0,
                            y: 54,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 64,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 74,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 0,
                            y: 84,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 94,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }]
                    },
                    about: {
                        lg: [{
                            i: "bio",
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 7,
                            y: 5,
                            w: 5,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 9,
                            y: 0,
                            w: 3,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 7,
                            y: 4,
                            w: 5,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 5,
                            y: 0,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 7,
                            y: 0,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 5,
                            y: 2,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 7,
                            y: 2,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 4,
                            w: 7,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 6,
                            y: 8,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 8,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 0,
                            y: 14,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 6,
                            y: 15,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 20,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 6,
                            y: 21,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 26,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }],
                        md: [{
                            i: "bio",
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 6,
                            y: 6,
                            w: 4,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 9,
                            y: 0,
                            w: 3,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 6,
                            y: 11,
                            w: 4,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 5,
                            y: 0,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 5,
                            y: 2,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 5,
                            y: 4,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 7,
                            y: 0,
                            w: 3,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 6,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 1,
                            y: 12,
                            w: 8,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 22,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 5,
                            y: 22,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 30,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 5,
                            y: 30,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 0,
                            y: 38,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 5,
                            y: 38,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }],
                        sm: [{
                            i: "bio",
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 0,
                            y: 23,
                            w: 4,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 0,
                            y: 6,
                            w: 4,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 0,
                            y: 22,
                            w: 4,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 10,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 2,
                            y: 10,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 13,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 13,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 16,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 0,
                            y: 28,
                            w: 6,
                            h: 16,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 44,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 0,
                            y: 54,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 64,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 74,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 0,
                            y: 84,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 94,
                            w: 6,
                            h: 10,
                            isResizable: !1
                        }]
                    },
                    seek: {
                        lg: [{
                            i: "bio",
                            x: 6,
                            y: 21,
                            w: 6,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 8,
                            y: 0,
                            w: 6,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 9,
                            y: 25,
                            w: 3,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 0,
                            y: 29,
                            w: 12,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 25,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 2,
                            y: 25,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 27,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 25,
                            w: 2,
                            h: 2,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 4,
                            y: 25,
                            w: 5,
                            h: 4,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 0,
                            y: 0,
                            w: 6,
                            h: 7,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 6,
                            y: 3,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 0,
                            y: 7,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 6,
                            y: 9,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 13,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 6,
                            y: 15,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 19,
                            w: 6,
                            h: 6,
                            isResizable: !1
                        }],
                        md: [{
                            i: "bio",
                            x: 5,
                            y: 29,
                            w: 5,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 5,
                            y: 0,
                            w: 5,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 8,
                            y: 36,
                            w: 2,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 5,
                            y: 35,
                            w: 5,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 36,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 2,
                            y: 36,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 39,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 39,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 4,
                            y: 36,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 0,
                            y: 0,
                            w: 5,
                            h: 12,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 12,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 5,
                            y: 5,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 5,
                            y: 13,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 20,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 5,
                            y: 21,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 28,
                            w: 5,
                            h: 8,
                            isResizable: !1
                        }],
                        sm: [{
                            i: "bio",
                            x: 0,
                            y: 82,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "theme-toggle",
                            x: 0,
                            y: 0,
                            w: 4,
                            h: 5,
                            isResizable: !1
                        }, {
                            i: "map",
                            x: 0,
                            y: 100,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "text-marquee",
                            x: 0,
                            y: 81,
                            w: 4,
                            h: 1,
                            isResizable: !1
                        }, {
                            i: "linkedin",
                            x: 0,
                            y: 94,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "github",
                            x: 2,
                            y: 94,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "codepen",
                            x: 0,
                            y: 97,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "email",
                            x: 2,
                            y: 97,
                            w: 2,
                            h: 3,
                            isResizable: !1
                        }, {
                            i: "my-stack",
                            x: 0,
                            y: 88,
                            w: 4,
                            h: 6,
                            isResizable: !1
                        }, {
                            i: "jobs",
                            x: 0,
                            y: 5,
                            w: 4,
                            h: 16,
                            isResizable: !1
                        }, {
                            i: "station-ui",
                            x: 0,
                            y: 21,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-landing",
                            x: 0,
                            y: 31,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-dao",
                            x: 0,
                            y: 41,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "station-setup",
                            x: 0,
                            y: 51,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "alliance-landing",
                            x: 5,
                            y: 61,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }, {
                            i: "developer-landing",
                            x: 0,
                            y: 71,
                            w: 4,
                            h: 10,
                            isResizable: !1
                        }]
                    }
                },
                u = {
                    lg: 58,
                    md: 33,
                    sm: 29
                };
            var p = t(2138),
                _ = t.n(p),
                h = t(4848);
            let v = "\n  radial-gradient(\n    circle at 50% 150%,\n    white,\n    transparent\n  )";

            function $(e) {
                let {
                    numParticles: i = 100,
                    children: t,
                    outerClassName: n = "",
                    innerClassName: r = "",
                    special: m
                } = e, [x, o] = (0, l.useState)(!1), {
                    setTheme: c,
                    resolvedTheme: y
                } = (0, h.useTheme)();
                (0, l.useEffect)(() => o(!0), []);
                let k = (0, l.useRef)(null),
                    f = (0, l.useRef)([]),
                    d = (0, l.useCallback)(e => {
                        let {
                            context: i,
                            width: t,
                            height: a,
                            time: n,
                            delta: s
                        } = e;
                        i.clearRect(0, 0, t, a), f.current.forEach(e => {
                            e.y -= .02 * s, e.y < 0 && (e.y = a + e.radius), e.x += .01 * s * Math.sin(1e-4 * n + 2 * e.random * Math.PI), e.x - e.radius > t && (e.x = -e.radius), e.x + e.radius < 0 && (e.x = t + e.radius);
                            let r = e.y / a * .3;
                            i.fillStyle = "rgba(111, 56, 252, ".concat(r, ")"), i.beginPath(), i.arc(e.x, e.y, e.radius, 0, 2 * Math.PI, !1), i.fill()
                        })
                    }, []);
                return ((0, l.useEffect)(() => {
                    let e = k.current,
                        t = e.getContext("2d"),
                        a = e.width = e.parentElement.clientWidth * window.devicePixelRatio,
                        n = e.height = e.parentElement.clientHeight * window.devicePixelRatio;
                    f.current = [];
                    for (let e = 0; e < i; ++e) f.current.push({
                        x: Math.random() * a,
                        y: Math.random() * n,
                        radius: 1.5 * Math.random() * window.devicePixelRatio,
                        random: Math.random()
                    });
                    let s = null,
                        r = null,
                        m = e => {
                            let i = e - (null != r ? r : e);
                            i < 500 && d({
                                context: t,
                                width: a,
                                height: n,
                                time: e,
                                delta: i
                            }), r = e, s = window.requestAnimationFrame(m)
                        };
                    return m(), () => {
                        window.cancelAnimationFrame(s)
                    }
                }, [i, d, x]), x) ? (0, a.jsxs)("div", {
                    className: s()("group w-full h-full relative overflow-hidden rounded-[24px] p-[1px] dark:bg-white/10 bg-white/60", n),
                    children: ["dark" === y && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: s()("absolute inset-0", {
                                "z-[2]": "map" === m
                            }),
                            style: {
                                backgroundImage: "\n                radial-gradient(\n                    circle at 50% 150%,\n                    #208de52b,\n                    transparent\n                )"
                            }
                        }), (0, a.jsx)("div", {
                            className: "shine absolute -inset-[8px] opacity-40 blur-[8px] z-10",
                            style: {
                                maskImage: v,
                                WebkitMaskImage: v,
                                backgroundImage: "\n                conic-gradient(\n                  from -45deg at 50% 150%,\n                  transparent 0deg,\n                  #10071e 15deg,\n                  transparent 30deg,\n                  #10071e 45deg,\n                  transparent 60deg,\n                  #10071e 75deg,\n                  transparent 90deg\n                )"
                            }
                        }), (0, a.jsx)("div", {
                            className: s()("absolute inset-[1px] rounded-[23px] bg-zinc-950/15 z-[2] transition-colors duration-300", {
                                "bg-zinc-950/70 z-[unset] group-hover:bg-black/75": "map" !== m
                            })
                        })]
                    }), "light" === y && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: s()("absolute inset-[1px] rounded-[23px] bg-zinc-50/30 z-[2] transition-colors duration-300", {
                                "bg-white/5 z-[unset] group-hover:bg-white/70": "map" !== m
                            })
                        }), (0, a.jsx)("div", {
                            className: s()("absolute inset-0", {
                                "z-[2]": "map" === m
                            }),
                            style: {
                                backgroundImage: "\n                radial-gradient(\n                    80% 6% at 50% 103%,\n                    #6f38fc44,\n                    transparent\n                )\n              "
                            }
                        })]
                    }), (0, a.jsx)("canvas", {
                        ref: k,
                        className: "absolute inset-0 h-full w-full z-[2]"
                    }), (0, a.jsx)("div", {
                        className: "relative h-full",
                        children: t
                    })]
                }) : (0, a.jsx)("canvas", {
                    ref: k,
                    className: "absolute inset-0 h-full w-full"
                })
            }
            let g = e => {
                let {
                    setFilter: i
                } = e, [t, n] = (0, l.useState)(7), [s, r] = (0, l.useState)(80);
                return (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "flex relative rounded-3xl p-[6px] z-10 gap-1",
                        children: [(0, a.jsx)(c.E.div, {
                            className: _().highlight,
                            animate: {
                                left: t,
                                width: s
                            },
                            transition: {
                                duration: .4,
                                ease: [.85, 0, .3, 1]
                            }
                        }), d.map(e => (0, a.jsx)("div", {
                            className: _().option,
                            onClick: t => {
                                n(t.currentTarget.offsetLeft), r(t.currentTarget.offsetWidth), i(e.toLowerCase())
                            },
                            children: e
                        }, e))]
                    })
                })
            };
            var j = t(9492),
                w = t(1348);

            function N(e) {
                let {
                    children: i,
                    className: t,
                    variant: n,
                    duration: s = .4,
                    delay: r = 0,
                    yOffset: m = 80,
                    inView: x = !1,
                    inViewMargin: o = "40px",
                    blur: y = "16px"
                } = e, k = (0, l.useRef)(null), f = (0, j.Y)(k, {
                    once: !0,
                    margin: o
                });
                return (0, a.jsx)(w.M, {
                    children: (0, a.jsx)(c.E.div, {
                        ref: k,
                        initial: "hidden",
                        animate: !x || f ? "visible" : "hidden",
                        exit: "hidden",
                        variants: n || {
                            hidden: {
                                y: m,
                                opacity: 0,
                                filter: "blur(".concat(y, ")"),
                                height: "100%"
                            },
                            visible: {
                                y: 0,
                                opacity: 1,
                                filter: "blur(0px)",
                                height: "100%"
                            }
                        },
                        transition: {
                            delay: .04 + r,
                            duration: s,
                            ease: "easeOut",
                            opacity: {
                                duration: 1,
                                ease: "easeOut",
                                delay: .14 + r
                            }
                        },
                        className: t,
                        children: i
                    })
                })
            }
            let R = e => {
                let {
                    setFilter: i
                } = e;
                return (0, a.jsx)(c.E.nav, {
                    className: "grid px-[3.5vw] py-12 sm:py-16 md:pb-20 justify-center w-[100vw]",
                    animate: {
                        opacity: 1
                    },
                    initial: {
                        opacity: 1
                    },
                    children: (0, a.jsx)(N, {
                        delay: 1,
                        children: (0, a.jsx)(g, {
                            setFilter: i
                        })
                    })
                })
            };
            var T = t(4055),
                z = t.n(T),
                M = t(6132),
                S = t(703),
                P = () => (0, a.jsx)($, {
                    numParticles: 20,
                    children: (0, a.jsxs)("div", {
                        className: "static flex flex-col items-center sm:items-start px-6 py-5 sm:px-8 sm:py-6 gap-6",
                        children: [(0, a.jsxs)("div", {
                            className: "flex gap-2 sm:gap-6 flex-col items-center sm:justify-start sm:flex-row",
                            children: [(0, a.jsx)("div", {
                                className: "relative w-16 h-16 min-w-16 sm:w-24 sm:min-w-24 sm:h-24 p-[2px] z-0 overflow-hidden rounded-full shadow-memoji",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Memoji_Big_Smile.jpg",
                                    alt: "我的头像",
                                    fill: !0,
                                    priority: !0
                                })
                            }), (0, a.jsx)("h1", {
                                    className: "font-silka text-2xl sm:text-4xl leading-tight font-medium text-slate-900 dark:text-white",
                                    children: "🔱赖永钊",
                                })
                            ]
                        }), (0, a.jsxs)("p", {
                            className: "dark:text-white text-slate-900 tracking-wide leading-6 text-xs sm:text-sm",
                            children: ["佛日：人生有八苦：生、老、病、死、爱别离、怨长久、求不得、放不下。", (0, a.jsx)("br", {}), "微信号：ebyte-tech",(0, a.jsx)("br", {}), "SEEK官方网站：https://laiyongzhao.com/SEEK"]
                        })]
                    })
                });
            let E = () => {
                let {
                    setTheme: e,
                    resolvedTheme: i
                } = (0, h.useTheme)();
                return (0, a.jsx)($, {
                    numParticles: 10,
                    special: "map",
                    children: (0, a.jsx)("div", {
                        className: "h-full w-full bg-center rounded-3xl",
                        style: {
                            backgroundImage: 'url("/_next/'.concat("dark" === i ? "navigation-night-v1" : "navigation-day-v1", '/300x300.png")')
                        }
                    })
                })
            };
            var C = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"13 Sun 2","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.004,256.013,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-47.467,0],[0,-47.446],[47.464,0],[0,47.464]],"o":[[47.464,0],[0,47.464],[-47.467,0],[0,-47.446]],"v":[[0,-85.933],[85.924,-0.009],[0,85.933],[-85.924,-0.009]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":3,"s":[100,100]},{"i":{"x":[0.17,0.17],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":18,"s":[49,49]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.83,0.83],"y":[0,0]},"t":33,"s":[49,49]},{"t":42,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.69],"y":[0]},"t":0,"s":[0]},{"t":40,"s":[180]}],"ix":10,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,-110.462],[-130.329,-130.329]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-92.684,-92.684],[-191.39,-191.391]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,-110.462],[-130.329,-130.329]],"c":false}]}],"ix":2},"nm":"Path 1"},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,130.333],[110.465,110.465]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[191.397,191.396],[92.687,92.687]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,130.333],[110.465,110.465]],"c":false}]}],"ix":2},"nm":"Path 2"},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,110.465],[-130.329,130.333]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-92.684,92.687],[-191.39,191.396]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,110.465],[-130.329,130.333]],"c":false}]}],"ix":2},"nm":"Path 3"},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,-130.338],[110.465,-110.471]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[191.397,-191.406],[92.687,-92.692]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,-130.338],[110.465,-110.471]],"c":false}]}],"ix":2},"nm":"Path 4"},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-156.223,0.002],[-184.32,0.002]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-131.081,0.002],[-360.895,0.004]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-156.223,0.002],[-184.32,0.002]],"c":false}]}],"ix":2},"nm":"Path 5"},{"ind":5,"ty":"sh","ix":6,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[184.32,0.002],[156.223,0.002]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[360.895,0.004],[131.081,0.002]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[184.32,0.002],[156.223,0.002]],"c":false}]}],"ix":2},"nm":"Path 6"},{"ind":6,"ty":"sh","ix":7,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,156.223],[0.002,184.32]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,131.081],[0.004,360.895]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,156.223],[0.002,184.32]],"c":false}]}],"ix":2},"nm":"Path 7"},{"ind":7,"ty":"sh","ix":8,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,-184.32],[0.002,-156.223]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.004,-360.895],[0.002,-131.081]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,-184.32],[0.002,-156.223]],"c":false}]}],"ix":2},"nm":"Path 8"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[89,89]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":17,"s":[62,62]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":37,"s":[62,62]},{"t":44,"s":[89,89]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                q = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"13 Sun 2","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2","sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.004,256.013,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-47.467,0],[0,-47.446],[47.464,0],[0,47.464]],"o":[[47.464,0],[0,47.464],[-47.467,0],[0,-47.446]],"v":[[0,-85.933],[85.924,-0.009],[0,85.933],[-85.924,-0.009]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":3,"s":[100,100]},{"i":{"x":[0.17,0.17],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":18,"s":[49,49]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.83,0.83],"y":[0,0]},"t":33,"s":[49,49]},{"t":42,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.69],"y":[0]},"t":0,"s":[0]},{"t":40,"s":[180]}],"ix":10,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[256,256,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,-110.462],[-130.329,-130.329]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-92.684,-92.684],[-191.39,-191.391]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,-110.462],[-130.329,-130.329]],"c":false}]}],"ix":2},"nm":"Path 1"},{"ind":1,"ty":"sh","ix":2,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,130.333],[110.465,110.465]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[191.397,191.396],[92.687,92.687]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,130.333],[110.465,110.465]],"c":false}]}],"ix":2},"nm":"Path 2"},{"ind":2,"ty":"sh","ix":3,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,110.465],[-130.329,130.333]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-92.684,92.687],[-191.39,191.396]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-110.462,110.465],[-130.329,130.333]],"c":false}]}],"ix":2},"nm":"Path 3"},{"ind":3,"ty":"sh","ix":4,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,-130.338],[110.465,-110.471]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[191.397,-191.406],[92.687,-92.692]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[130.333,-130.338],[110.465,-110.471]],"c":false}]}],"ix":2},"nm":"Path 4"},{"ind":4,"ty":"sh","ix":5,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-156.223,0.002],[-184.32,0.002]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-131.081,0.002],[-360.895,0.004]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-156.223,0.002],[-184.32,0.002]],"c":false}]}],"ix":2},"nm":"Path 5"},{"ind":5,"ty":"sh","ix":6,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[184.32,0.002],[156.223,0.002]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[360.895,0.004],[131.081,0.002]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[184.32,0.002],[156.223,0.002]],"c":false}]}],"ix":2},"nm":"Path 6"},{"ind":6,"ty":"sh","ix":7,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,156.223],[0.002,184.32]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,131.081],[0.004,360.895]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,156.223],[0.002,184.32]],"c":false}]}],"ix":2},"nm":"Path 7"},{"ind":7,"ty":"sh","ix":8,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":9,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,-184.32],[0.002,-156.223]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":29,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.004,-360.895],[0.002,-131.081]],"c":false}]},{"t":42,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0.002,-184.32],[0.002,-156.223]],"c":false}]}],"ix":2},"nm":"Path 8"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[89,89]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":17,"s":[62,62]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":37,"s":[62,62]},{"t":44,"s":[89,89]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                F = () => {
                    let {
                        resolvedTheme: e
                    } = (0, h.useTheme)(), i = "light" === e, n = (0, l.useRef)(null);
                    async function s() {
                        let e = await t.e(705).then(t.t.bind(t, 4698, 23));
                        n.current && e.default.loadAnimation({
                            name: "SunIcon",
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i ? C : q,
                            container: n.current,
                            rendererSettings: {
                                preserveAspectRatio: "xMinYMin slice"
                            }
                        })
                    }
                    async function r() {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.destroy("SunIcon")
                    }(0, l.useEffect)(() => (s(), () => {
                        r()
                    }), [i, e]);
                    let m = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.play("SunIcon")
                    }, x = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.stop("SunIcon")
                    };
                    return (0, a.jsx)("div", {
                        onMouseEnter: m,
                        onMouseLeave: x,
                        className: "group/sun h-full w-full flex items-center justify-center",
                        children: (0, a.jsx)("div", {
                            ref: n,
                            className: "h-10 w-10 ".concat(i ? "" : "opacity-50", " group-hover/sun:opacity-100 transition-opacity")
                        })
                    })
                },
                D = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"09 Moon 4","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[95.196,-96.484,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-101.443]],"o":[[101.444,0],[0,0]],"v":[[-91.839,-91.839],[91.839,91.839]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[-94.875,96.469],"ix":2},"a":{"a":0,"k":[-94.875,96.469],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.23],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.77],"y":[0]},"t":20,"s":[-198]},{"t":35,"s":[-360]}],"ix":10,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[252.644,260.003,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-62.536,33.432],[0.293,-1.014],[83.786,0],[0,101.425],[-77.021,21.989],[0.487,-0.916],[-52.712,-52.73]],"o":[[0.917,-0.487],[-22.01,77.001],[-101.622,0],[0,-83.98],[0.993,-0.292],[-33.238,62.536],[52.73,52.711]],"v":[[178.559,45.602],[180.275,46.965],[3.543,180.323],[-180.324,-3.542],[-47.141,-180.275],[-45.796,-178.559],[-16.399,16.399]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0.312,0],"ix":2},"a":{"a":0,"k":[0.312,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.23,0.23],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":4,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.77,0.77],"y":[0,0]},"t":24,"s":[60.2,60.2]},{"t":39,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                A = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"09 Moon 4","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[95.196,-96.484,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,-101.443]],"o":[[101.444,0],[0,0]],"v":[[-91.839,-91.839],[91.839,91.839]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[-94.875,96.469],"ix":2},"a":{"a":0,"k":[-94.875,96.469],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.23],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.77],"y":[0]},"t":20,"s":[-198]},{"t":35,"s":[-360]}],"ix":10,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[252.644,260.003,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-62.536,33.432],[0.293,-1.014],[83.786,0],[0,101.425],[-77.021,21.989],[0.487,-0.916],[-52.712,-52.73]],"o":[[0.917,-0.487],[-22.01,77.001],[-101.622,0],[0,-83.98],[0.993,-0.292],[-33.238,62.536],[52.73,52.711]],"v":[[178.559,45.602],[180.275,46.965],[3.543,180.323],[-180.324,-3.542],[-47.141,-180.275],[-45.796,-178.559],[-16.399,16.399]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0.312,0],"ix":2},"a":{"a":0,"k":[0.312,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.23,0.23],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":4,"s":[100,100]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.77,0.77],"y":[0,0]},"t":24,"s":[60.2,60.2]},{"t":39,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                I = () => {
                    let {
                        resolvedTheme: e
                    } = (0, h.useTheme)(), i = "light" === e, n = (0, l.useRef)(null);
                    async function s() {
                        let e = await t.e(705).then(t.t.bind(t, 4698, 23));
                        n.current && e.default.loadAnimation({
                            name: "MoonIcon",
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i ? D : A,
                            container: n.current,
                            rendererSettings: {
                                preserveAspectRatio: "xMinYMin slice"
                            }
                        })
                    }
                    async function r() {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.destroy("MoonIcon")
                    }(0, l.useEffect)(() => (s(), () => {
                        r()
                    }), [i, e]);
                    let m = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.play("MoonIcon")
                    }, x = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.stop("MoonIcon")
                    };
                    return (0, a.jsx)("div", {
                        onMouseEnter: m,
                        onMouseLeave: x,
                        className: "group/moon h-full w-full flex items-center justify-center",
                        children: (0, a.jsx)("div", {
                            ref: n,
                            className: "h-10 w-10 ".concat(i ? "opacity-50" : "", " group-hover/moon:opacity-100 transition-opacity")
                        })
                    })
                },
                G = e => {
                    let {
                        className: i
                    } = e, {
                        resolvedTheme: t,
                        setTheme: n
                    } = (0, h.useTheme)(), r = "light" === t, m = () => {
                        n(r ? "dark" : "light")
                    };
                    return (0, a.jsx)($, {
                        numParticles: 10,
                        outerClassName: i,
                        children: (0, a.jsx)("div", {
                            className: s()("relative h-full flex flex-col justify-center p-1"),
                            children: (0, a.jsxs)("div", {
                                className: "flex items-center justify-around h-full",
                                children: [(0, a.jsx)("button", {
                                    className: "relative flex items-center justify-center rounded-[24px] h-full w-2/4 z-10\n              ".concat(r ? "shadow-verylight bg-white z-10 before:bg-gradient-to-br before:from-from before:from-0% before:to-100% before:to-to before:-z-10 before:opacity-40 before:h-full before:w-full before:absolute before:rounded-[20px] before:transition-all before:duration-300 before:ease-in-out" : ""),
                                    onClick: m,
                                    children: (0, a.jsx)(F, {})
                                }), (0, a.jsx)("button", {
                                    className: "relative flex items-center justify-center rounded-[24px] h-full w-2/4 z-10\n              ".concat(r ? "" : "shadow-darkmode bg-[#04040d29] z-10 before:bg-gradient-to-br before:from-from before:from-0% before:to-100% before:to-to before:-z-10 before:opacity-40 before:h-full before:w-full before:absolute before:rounded-[20px] before:transition-all before:duration-300 before:ease-in-out"),
                                    onClick: m,
                                    children: (0, a.jsx)(I, {})
                                })]
                            })
                        })
                    })
                },
                L = JSON.parse('{"v":"5.8.0","fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"34 Inbox down","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Vector 10 :M 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":16,"s":[259.808,-100.508,0],"to":[0,41.333,0],"ti":[0,-41.333,0]},{"t":23,"s":[259.808,147.492,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[259.808,147.492,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":50,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-3.619],[0,3.619]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.799,147.462],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 110","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-2.747,-1.329],[0,1.329],[2.747,-1.329]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,1.34],"ix":2},"a":{"a":0,"k":[0,1.34],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":25,"s":[0.8,100]},{"t":29,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.808,193.437],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 9","cix":2,"ix":2}],"ip":16,"op":97,"st":16},{"ind":2,"ty":4,"nm":"Mask","parent":5,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1,0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[99.716,99.716,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-10.558,-21.372],[-16.532,0],[-7.365,14.889],[-23.794,0],[0,0],[0,0],[0,0]],"o":[[0,0],[23.794,0],[7.363,14.88],[16.534,0],[10.556,-21.364],[0,0],[0,0],[0,0],[0,0]],"v":[[-184.36,9.4],[-98.548,9.4],[-42.856,44.049],[-4.114,68.178],[34.631,44.041],[90.321,9.4],[176.21,9.4],[176.21,252.944],[-184.36,252.944]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"fl","c":{"a":0,"k":[0.894,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[-1,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1}],"ip":0,"op":90,"st":0},{"ind":3,"ty":4,"nm":"Vector 10 :M","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[259.808,147.492,0],"to":[0,58.833,0],"ti":[0,-58.833,0]},{"t":13,"s":[259.808,500.492,0]}],"ix":2,"l":2},"a":{"a":0,"k":[259.808,147.492,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[310,306],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[267,154],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-3.619],[0,3.619]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.799,147.462],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 110","cix":2,"ix":2},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-2.747,-1.329],[0,1.329],[2.747,-1.329]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,1.34],"ix":2},"a":{"a":0,"k":[0,1.34],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"t":7,"s":[42.4,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.808,193.437],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 9","cix":2,"ix":3}],"ip":0,"op":14,"st":0},{"ind":4,"ty":4,"nm":"Mask","parent":6,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.939,0],[0,0],[0,-2.955],[0,0],[2.949,0],[0,0],[0,2.955],[0,0]],"o":[[0,0],[2.948,0],[0,0],[0,2.955],[0,0],[-2.948,0],[0,0],[0,-2.955]],"v":[[-4.217,-9.03],[4.218,-9.03],[9,-3.987],[9,3.987],[4.217,9.03],[-4.217,9.03],[-9,3.987],[-9,-3.987]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[-6.2,-6.2],"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_sum(content(\'Vector\').content(\'Group 1\').transform.scale, thisComp.layer(\'Vector 3\').content(\'Vector\').content(\'Group 1\').transform.scale);"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1}],"ip":0,"op":90,"st":0},{"ind":5,"ty":4,"nm":"Layer 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.25,"y":1},"o":{"x":0.167,"y":0.167},"t":5,"s":[260,257,0],"to":[0,6.017,0],"ti":[0,-6.017,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.75,"y":0},"t":15,"s":[260,293.1,0],"to":[0,6.017,0],"ti":[0,6.017,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[260,293.1,0],"to":[0,-6.017,0],"ti":[0,6.017,0]},{"t":38,"s":[260,257,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Position\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Position\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Position\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic: Position","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[533,262],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[9.5,61],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[7.901,-15.993],[23.02,0],[9.579,19.358],[17.791,0],[0,0]],"o":[[0,0],[-17.791,0],[-9.576,19.358],[-23.017,0],[-7.9,-15.993],[0,0],[0,0]],"v":[[176.21,24.76],[90.321,24.76],[48.398,50.852],[-4.114,83.538],[-56.627,50.852],[-98.548,24.76],[-184.36,24.76]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[-4.075,54.149],"ix":2},"a":{"a":0,"k":[-4.075,54.149],"ix":1},"s":{"a":0,"k":[99.3,99.3],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":2}],"ip":0,"op":90,"st":0},{"ind":6,"ty":4,"nm":"Vector 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Rotation 2\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Rotation 2\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Rotation 2\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[256.023,259.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[92,92,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":29,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Scale - Transform","np":5,"ix":2,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.939,0],[0,0],[0,-2.955],[0,0],[2.949,0],[0,0],[0,2.955],[0,0]],"o":[[0,0],[2.948,0],[0,0],[0,2.955],[0,0],[-2.948,0],[0,0],[0,-2.955]],"v":[[-4.217,-9.03],[4.218,-9.03],[9,-3.987],[9,3.987],[4.217,9.03],[-4.217,9.03],[-9,3.987],[-9,-3.987]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":4,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":15,"s":[86.2,86.2]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24,"s":[86.2,86.2]},{"t":28,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[86.9]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":16,"s":[100]},{"t":26,"s":[86.9]}],"ix":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[47.3]},{"i":{"x":[0.65],"y":[1.179]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[25.174]},{"i":{"x":[0.819],"y":[0.853]},"o":{"x":[0.381],"y":[0.174]},"t":16,"s":[23]},{"t":26,"s":[47.3]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"m":1,"ix":2,"nm":"Trim Paths 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                K = JSON.parse('{"v":"5.8.0","fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"34 Inbox down","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Vector 10 :M 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":16,"s":[259.808,-100.508,0],"to":[0,41.333,0],"ti":[0,-41.333,0]},{"t":23,"s":[259.808,147.492,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[259.808,147.492,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":50,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-3.619],[0,3.619]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.799,147.462],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 110","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-2.747,-1.329],[0,1.329],[2.747,-1.329]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,1.34],"ix":2},"a":{"a":0,"k":[0,1.34],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":25,"s":[0.8,100]},{"t":29,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.808,193.437],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 9","cix":2,"ix":2}],"ip":16,"op":97,"st":16},{"ind":2,"ty":4,"nm":"Mask","parent":5,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[1,0.5,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[99.716,99.716,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-10.558,-21.372],[-16.532,0],[-7.365,14.889],[-23.794,0],[0,0],[0,0],[0,0]],"o":[[0,0],[23.794,0],[7.363,14.88],[16.534,0],[10.556,-21.364],[0,0],[0,0],[0,0],[0,0]],"v":[[-184.36,9.4],[-98.548,9.4],[-42.856,44.049],[-4.114,68.178],[34.631,44.041],[90.321,9.4],[176.21,9.4],[176.21,252.944],[-184.36,252.944]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"fl","c":{"a":0,"k":[0.894,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[-1,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1}],"ip":0,"op":90,"st":0},{"ind":3,"ty":4,"nm":"Vector 10 :M","tt":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[259.808,147.492,0],"to":[0,58.833,0],"ti":[0,-58.833,0]},{"t":13,"s":[259.808,500.492,0]}],"ix":2,"l":2},"a":{"a":0,"k":[259.808,147.492,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[310,306],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[267,154],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[0,-3.619],[0,3.619]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.799,147.462],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 110","cix":2,"ix":2},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0]],"v":[[-2.747,-1.329],[0,1.329],[2.747,-1.329]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,1.34],"ix":2},"a":{"a":0,"k":[0,1.34],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"t":7,"s":[42.4,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[259.808,193.437],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[94,94],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector 9","cix":2,"ix":3}],"ip":0,"op":14,"st":0},{"ind":4,"ty":4,"nm":"Mask","parent":6,"td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.939,0],[0,0],[0,-2.955],[0,0],[2.949,0],[0,0],[0,2.955],[0,0]],"o":[[0,0],[2.948,0],[0,0],[0,2.955],[0,0],[-2.948,0],[0,0],[0,-2.955]],"v":[[-4.217,-9.03],[4.218,-9.03],[9,-3.987],[9,3.987],[4.217,9.03],[-4.217,9.03],[-9,3.987],[-9,-3.987]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[-6.2,-6.2],"ix":3,"x":"var $bm_rt;\\n$bm_rt = $bm_sum(content(\'Vector\').content(\'Group 1\').transform.scale, thisComp.layer(\'Vector 3\').content(\'Vector\').content(\'Group 1\').transform.scale);"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1}],"ip":0,"op":90,"st":0},{"ind":5,"ty":4,"nm":"Layer 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":40,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.25,"y":1},"o":{"x":0.167,"y":0.167},"t":5,"s":[260,257,0],"to":[0,6.017,0],"ti":[0,-6.017,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.75,"y":0},"t":15,"s":[260,293.1,0],"to":[0,6.017,0],"ti":[0,6.017,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":32,"s":[260,293.1,0],"to":[0,-6.017,0],"ti":[0,6.017,0]},{"t":38,"s":[260,257,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Position\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Position\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Position\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic: Position","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"rc","d":1,"s":{"a":0,"k":[533,262],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"Rectangle Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":1,"lj":1,"ml":4,"nm":"Stroke 1"},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[9.5,61],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Rectangle 1","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[7.901,-15.993],[23.02,0],[9.579,19.358],[17.791,0],[0,0]],"o":[[0,0],[-17.791,0],[-9.576,19.358],[-23.017,0],[-7.9,-15.993],[0,0],[0,0]],"v":[[176.21,24.76],[90.321,24.76],[48.398,50.852],[-4.114,83.538],[-56.627,50.852],[-98.548,24.76],[-184.36,24.76]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[-4.075,54.149],"ix":2},"a":{"a":0,"k":[-4.075,54.149],"ix":1},"s":{"a":0,"k":[99.3,99.3],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":2}],"ip":0,"op":90,"st":0},{"ind":6,"ty":4,"nm":"Vector 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Rotation 2\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Rotation 2\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Rotation 2\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"p":{"a":0,"k":[256.023,259.889,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[92,92,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":29,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic Controller: Scale - Transform","np":5,"ix":2,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-2.939,0],[0,0],[0,-2.955],[0,0],[2.949,0],[0,0],[0,2.955],[0,0]],"o":[[0,0],[2.948,0],[0,0],[0,2.955],[0,0],[-2.948,0],[0,0],[0,-2.955]],"v":[[-4.217,-9.03],[4.218,-9.03],[9,-3.987],[9,3.987],[4.217,9.03],[-4.217,9.03],[-9,3.987],[-9,-3.987]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":4,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":15,"s":[86.2,86.2]},{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24,"s":[86.2,86.2]},{"t":28,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller: Scale - Transform\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":1.5,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[2133.523,2133.523],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","cix":2,"ix":1},{"ty":"tm","s":{"a":0,"k":0,"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[86.9]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":15,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":16,"s":[100]},{"t":26,"s":[86.9]}],"ix":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[47.3]},{"i":{"x":[0.65],"y":[1.179]},"o":{"x":[0.167],"y":[0.167]},"t":15,"s":[25.174]},{"i":{"x":[0.819],"y":[0.853]},"o":{"x":[0.381],"y":[0.174]},"t":16,"s":[23]},{"t":26,"s":[47.3]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic Controller\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic Controller\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic Controller\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"m":1,"ix":2,"nm":"Trim Paths 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                V = () => {
                    let {
                        resolvedTheme: e
                    } = (0, h.useTheme)(), i = "light" === e, n = (0, l.useRef)(null);
                    async function s() {
                        let e = await t.e(705).then(t.t.bind(t, 4698, 23));
                        n.current && e.default.loadAnimation({
                            name: "DownloadIcon",
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i ? L : K,
                            container: n.current,
                            rendererSettings: {
                                preserveAspectRatio: "xMinYMin slice"
                            }
                        })
                    }
                    async function r() {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.destroy("DownloadIcon")
                    }(0, l.useEffect)(() => (s(), () => {
                        r()
                    }), [i]);
                    let m = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.play("DownloadIcon")
                    }, x = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.stop("DownloadIcon")
                    };
                    return (0, a.jsx)("a", {
                        href: "http://studio.laiyongzhao.com/",
                        download: !0,
                        className: "relative z-10",
                        children: (0, a.jsx)("div", {
                            ref: n,
                            onMouseEnter: m,
                            onMouseLeave: x,
                            className: "h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
                        })
                    })
                },
                O = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"15 Eye 1","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.05,265.6,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-39.1,90.9],[75.8,0],[39.1,-90.9],[-75.8,0]],"o":[[75.9,0],[-39.2,-90.9],[-75.8,0],[39.1,90.9],[0,0]],"v":[[-0.05,145.5],[184.35,0],[-0.05,-145.5],[-184.35,0],[-0.05,145.5]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":2,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7.814,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":13.633,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24.367,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":30.186,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":36,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":42,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":48,"s":[100,0]},{"t":54,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[85,100]},{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":45,"s":[85,100]},{"t":49,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[100,85]},{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":49,"s":[100,85]},{"t":53,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.333,"y":0},"t":5,"s":[256.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.66,"y":0.66},"t":15,"s":[195.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.32,"y":1},"o":{"x":0.333,"y":0},"t":31,"s":[195.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.68,"y":0.68},"t":43,"s":[317.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":48,"s":[317.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"t":58,"s":[256.1,265.7,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-34.8],[34.8,0],[0,34.8],[-34.8,0]],"o":[[0,34.8],[-34.8,0],[0,-34.8],[34.7,0]],"v":[[63,0],[0,63],[-63,0],[0,-63]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[289,289],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1"},{"ty":"fl","c":{"a":0,"k":[0.784,0.052,0.414,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[-2.6,-5.2],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","cix":2,"ix":3}],"ip":0,"op":90,"st":0},{"ind":3,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.05,265.6,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-39.1,90.9],[75.8,0],[39.1,-90.9],[-75.8,0]],"o":[[75.9,0],[-39.2,-90.9],[-75.8,0],[39.1,90.9],[0,0]],"v":[[-0.05,145.5],[184.35,0],[-0.05,-145.5],[-184.35,0],[-0.05,145.5]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":2,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7.814,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":13.633,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24.367,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":30.186,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":36,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":42,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":48,"s":[100,0]},{"t":54,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[85,100]},{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":45,"s":[85,100]},{"t":49,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[100,85]},{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":49,"s":[100,85]},{"t":53,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                J = JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.5.3","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":90,"w":512,"h":512,"nm":"15 Eye 1","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 3","td":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.05,265.6,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-39.1,90.9],[75.8,0],[39.1,-90.9],[-75.8,0]],"o":[[75.9,0],[-39.2,-90.9],[-75.8,0],[39.1,90.9],[0,0]],"v":[[-0.05,145.5],[184.35,0],[-0.05,-145.5],[-184.35,0],[-0.05,145.5]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":2,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7.814,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":13.633,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24.367,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":30.186,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":36,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":42,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":48,"s":[100,0]},{"t":54,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[85,100]},{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":45,"s":[85,100]},{"t":49,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[100,85]},{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":49,"s":[100,85]},{"t":53,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"}],"ip":0,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 2","tt":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.34,"y":1},"o":{"x":0.333,"y":0},"t":5,"s":[256.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.66,"y":0.66},"t":15,"s":[195.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.32,"y":1},"o":{"x":0.333,"y":0},"t":31,"s":[195.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":0.667},"o":{"x":0.68,"y":0.68},"t":43,"s":[317.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":48,"s":[317.1,265.7,0],"to":[0,0,0],"ti":[0,0,0]},{"t":58,"s":[256.1,265.7,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-34.8],[34.8,0],[0,34.8],[-34.8,0]],"o":[[0,34.8],[-34.8,0],[0,-34.8],[34.7,0]],"v":[[63,0],[0,63],[-63,0],[0,-63]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Layer 1\').content(\'Group 1\').transform.scale;"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[289,289],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1"},{"ty":"fl","c":{"a":0,"k":[0.784,0.052,0.414,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1"},{"ty":"tr","p":{"a":0,"k":[-2.6,-5.2],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":0,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","cix":2,"ix":3}],"ip":0,"op":90,"st":0},{"ind":3,"ty":4,"nm":"Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[256.05,265.6,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Elastic Controller","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":60,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":90,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-39.1,90.9],[75.8,0],[39.1,-90.9],[-75.8,0]],"o":[[75.9,0],[-39.2,-90.9],[-75.8,0],[39.1,90.9],[0,0]],"v":[[-0.05,145.5],[184.35,0],[-0.05,-145.5],[-184.35,0],[-0.05,145.5]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":2,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":7.814,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":13.633,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":24.367,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":30.186,"s":[100,0]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.167,0.167],"y":[0,0]},"t":36,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":42,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":48,"s":[100,0]},{"t":54,"s":[100,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[85,100]},{"i":{"x":[0.833,0.833],"y":[0.833,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":45,"s":[85,100]},{"t":49,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":0,"s":[100,100]},{"i":{"x":[0.667,0.667],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":10,"s":[100,85]},{"i":{"x":[0.833,0.833],"y":[1,0.833]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":49,"s":[100,85]},{"t":53,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar eff, amp, freq, decay, n, n, t, t, v;\\ntry {\\n    eff = effect(\'Elastic Controller\');\\n    amp = $bm_div(eff(1), 200);\\n    freq = $bm_div(eff(2), 30);\\n    decay = $bm_div(eff(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"}],"ip":0,"op":90,"st":0}],"markers":[]}'),
                B = () => {
                    let {
                        resolvedTheme: e
                    } = (0, h.useTheme)(), i = "light" === e, n = (0, l.useRef)(null);
                    async function s() {
                        let e = await t.e(705).then(t.t.bind(t, 4698, 23));
                        n.current && e.default.loadAnimation({
                            name: "SendIcon",
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: i ? J : O,
                            container: n.current,
                            rendererSettings: {
                                preserveAspectRatio: "xMinYMin slice"
                            }
                        })
                    }
                    async function r() {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.destroy("SendIcon")
                    }(0, l.useEffect)(() => (s(), () => {
                        r()
                    }), [i, e]);
                    let m = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.play("SendIcon")
                    }, x = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.stop("SendIcon")
                    };
                    return (0, a.jsx)("a", {
                        href: "/SEEK/index.html",
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "relative z-10",
                        children: (0, a.jsx)("div", {
                            ref: n,
                            onMouseEnter: m,
                            onMouseLeave: x,
                            className: "h-10 w-10 opacity-50 hover:opacity-100 transition-opacity"
                        })
                    })
                },
                U = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsx)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 px-8 py-6",
                        children: (0, a.jsxs)("div", {
                            className: "flex justify-between w-full items-center",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col items-start gap-1",
                                children: [(0, a.jsx)("h4", {
                                    className: "text-xs font-medium opacity-50 uppercase",
                                    children: "👑皇家俱乐部👑"
                                }), (0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "Seek"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 lg:gap-6 items-center",
                                children: [(0, a.jsx)(V, {}), (0, a.jsx)(B, {})]
                            })]
                        })
                    })
                }),
                Y = t(7141),
                H = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsx)("div", {
                        className: "flex h-full items-center px-3 py-3",
                        children: (0, a.jsx)("div", {
                            className: "relative w-full max-w-full h-[20px] overflow-hidden",
                            children: (0, a.jsx)("span", {
                                className: "flex gap-1 text-sm mt-[1px]",
                                children: (0, a.jsxs)(Y.Z, {
                                    speed: 30,
                                    style: {
                                        maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                                        margin: "auto"
                                    },
                                    children: ["欢迎来到，我的个人", (0, a.jsx)("b", {
                                        className: "ml-1.5",
                                        children: "网站"
                                    }), " ", [, , , , ].fill(0).map((e, i) => (0, a.jsxs)(l.Fragment, {
                                        children: [(0, a.jsx)("img", {
                                            src: "star1.svg",
                                            alt: "Star",
                                            className: "h-4 w-4 mx-2"
                                        }), " ", "🙏一忧一喜皆心火，一荣一枯皆眼尘，静心看透炎凉事，千古不做梦里人。 ", (0, a.jsx)("b", {
                                            className: "ml-1.5",
                                            children: "😜欢迎来到，我的个人网站"
                                        }), " "]
                                    }, i)), (0, a.jsx)("img", {
                                        src: "star1.svg",
                                        alt: "Star",
                                        className: "h-4 w-4 mx-2"
                                    })]
                                })
                            })
                        })
                    })
                }),
                W = () => (0, a.jsx)($, {
                    numParticles: 20,
                    children: (0, a.jsxs)("div", {
                        className: "static h-full flex flex-col gap-8 p-8 justify-between",
                        children: [(0, a.jsx)(Y.Z, {
                            speed: 30,
                            style: {
                                maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)",
                                margin: "auto"
                            },
                            children: [{
                                name: "React",
                                icon: "tech-icons/reactjs.svg"
                            }, {
                                name: "Next.js",
                                icon: "tech-icons/nextjs.svg"
                            }, {
                                name: "TypeScript",
                                icon: "tech-icons/typescript.svg"
                            }, {
                                name: "JavaScript",
                                icon: "tech-icons/javascript.svg"
                            }, {
                                name: "Tailwind CSS",
                                icon: "tech-icons/tailwindcss.svg"
                            }, {
                                name: "HTML5",
                                icon: "tech-icons/html5.svg"
                            }, {
                                name: "CSS3",
                                icon: "tech-icons/css3.svg"
                            }, {
                                name: "SASS",
                                icon: "tech-icons/sass.svg"
                            }, {
                                name: "Storybook",
                                icon: "tech-icons/storybook.svg"
                            }, {
                                name: "Framer",
                                icon: "tech-icons/framer.svg"
                            }, {
                                name: "VS Code",
                                icon: "tech-icons/vscode.svg"
                            }, {
                                name: "Figma",
                                icon: "tech-icons/figma.svg"
                            }, {
                                name: "Arc",
                                icon: "tech-icons/arc.svg"
                            }, {
                                name: "Github",
                                icon: "tech-icons/github.svg"
                            }, {
                                name: "Jira",
                                icon: "tech-icons/jira.svg"
                            }, {
                                name: "Vercel",
                                icon: "tech-icons/vercel.svg"
                            }].map((e, i) => (0, a.jsx)("div", {
                                className: "flex items-center justify-center gap-2 aspect-square w-[72px] bg-neutral-200 dark:bg-neutral-800 rounded-2xl mx-2 my-0",
                                children: (0, a.jsx)(S.default, {
                                    src: e.icon,
                                    alt: e.name,
                                    width: 36,
                                    height: 36
                                })
                            }, i))
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsx)("h4", {
                                className: "text-xs font-medium opacity-60 uppercase",
                                children: "额，说点啥"
                            }), (0, a.jsxs)("h1", {
                                className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center",
                                children: ["LYZ @ ", (0, a.jsx)("span", {
                                    className: "text-xl",
                                    children: "👑❤️👑"
                                })]
                            })]
                        })]
                    })
                }),
                Q = e => {
                    var i, t;
                    let {
                        title: n,
                        link: s
                    } = e, {
                        resolvedTheme: r
                    } = (0, h.useTheme)(), m = {
                        Linkedin: {
                            src: "dark" === r ? "social-icons/weibo.svg" : "/social-icons/weibo-dark.svg",
                            classNames: "aspect-square"
                        },
                        Github: {
                            src: "dark" === r ? "social-icons/github.svg" : "social-icons/github-dark.svg",
                            classNames: "aspect-[49/48]"
                        },
                        Codepen: {
                            src: "dark" === r ? "social-icons/codepen.svg" : "/social-icons/codepen-dark.svg",
                            classNames: "aspect-square"
                        },
                        Email: {
                            src: "dark" === r ? "social-icons/email.svg" : "social-icons/email-dark.svg",
                            classNames: "aspect-[25/24]"
                        }
                    };
                    return (0, a.jsx)($, {
                        numParticles: 10,
                        outerClassName: "h-auto w-auto aspect-square",
                        children: (0, a.jsx)("div", {
                            className: "flex items-center justify-center w-full h-full opacity-80 hover:opacity-100 transition-opacity relative z-10",
                            children: (0, a.jsx)("a", {
                                className: "w-[55%] h-[55%] flex items-center justify-center rounded-3xl",
                                href: s,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, a.jsx)("div", {
                                    className: "relative h-full w-auto ".concat(null === (i = m[n]) || void 0 === i ? void 0 : i.classNames),
                                    children: (0, a.jsx)(S.default, {
                                        src: null === (t = m[n]) || void 0 === t ? void 0 : t.src,
                                        alt: n,
                                        fill: !0
                                    })
                                })
                            })
                        })
                    })
                };
            let Z = [{
                    role: "MVP🏅",
                    company: "芝加哥公牛队",
                    date: "2022 - Present",
                    image: "/companies/bs.png",
                    foreground: "#FFFFFF",
                    background: "#2F61EA"
                }, {
                    role: "总冠军🏆",
                    company: "洛杉矶湖人队",
                    date: "2019 - 2022",
                    image: "/companies/bs.png",
                    foreground: "#FFFFFF",
                    background: "#911E54"
                }, {
                    role: "得分王💯",
                    company: "圣安东尼奥马刺队",
                    date: "2019 - 2019",
                    image: "/companies/bs.png",
                    foreground: "#FFFFFF",
                    background: "#0CADD6"
                }, {
                    role: "奥运会金牌🥇",
                    company: "公牛队",
                    date: "2018 - 2019",
                    image: "/companies/bs.png",
                    foreground: "#FFFFFF",
                    background: "#656666"
                }],
                X = e => {
                    let {
                        job: i,
                        changeCursor: t,
                        active: n
                    } = e, {
                        role: r,
                        company: m,
                        date: l,
                        image: x,
                        foreground: o,
                        background: c
                    } = i;
                    return (0, a.jsxs)("div", {
                        className: "flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2",
                        onMouseEnter: () => t("enter", m, o, c, x),
                        onMouseLeave: () => t("leave", m, o, c, x),
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [(0, a.jsx)("h5", {
                                className: s()("block text-xs md:text-md md:hidden font-medium dark:text-white text-black", {
                                    "opacity-35": !n,
                                    "opacity-65": n
                                }),
                                children: l
                            }), (0, a.jsx)("h1", {
                                className: s()("text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit", {
                                    //这是赖永钊加的注释，删除线，半透明"line-through opacity-55": !n,
                                    "opacity-100": n
                                }),
                                children: r
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col md:items-end md:text-right",
                            children: [(0, a.jsx)("h3", {
                                className: s()("text-sm lg:text-lg font-medium dark:text-white text-black", {
                                    "opacity-65": !n,
                                    "opacity-80": n
                                }),
                                children: m
                            }), (0, a.jsx)("h5", {
                                className: s()("hidden md:block text-xs lg:text-md font-medium dark:text-white text-black", {
                                    "opacity-35": !n,
                                    "opacity-65": n
                                }),
                                children: l
                            })]
                        })]
                    })
                };
            var ee = e => {
                    let {
                        setCursor: i
                    } = e, t = (e, t, a, n, s) => {
                        i("enter" === e ? t : ""), "undefined" != typeof document && ("enter" === e ? (document.body.classList.add("theme--hover"), document.body.setAttribute("data-hover", "true"), document.body.setAttribute("style", "--hover-image: url('".concat(s, "') "))) : (document.body.classList.remove("theme--hover"), document.body.setAttribute("data-hover", "false"), document.body.setAttribute("style", "")))
                    };
                    return (0, a.jsx)($, {
                        numParticles: 20,
                        children: (0, a.jsxs)("div", {
                            className: "static h-full flex flex-col gap-6 p-8 justify-start ",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col items-start gap-1",
                                children: [(0, a.jsx)("h4", {
                                    className: "text-xs font-medium opacity-60 uppercase",
                                    children: "7年"
                                }), (0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center",
                                    children: "时间轴🕒"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col relative z-10 lg:justify-around",
                                children: [(0, a.jsx)(X, {
                                    job: Z[0],
                                    changeCursor: t,
                                    active: !0
                                }), Z.slice(1).map((e, i) => (0, a.jsx)(X, {
                                    job: e,
                                    changeCursor: t
                                }, i))]
                            })]
                        })
                    })
                },
                ei = t(7742),
                et = t(4734),
                ea = t(1367);
            let en = (0, ei.j)("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-zinc-500/15 dark:bg-zinc-700/95 text-primary-foreground dark:hover:bg-zinc-950/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function es(e) {
                let {
                    className: i,
                    variant: t,
                    ...n
                } = e;
                return (0, a.jsx)("div", {
                    className: function() {
                        for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                        return (0, ea.m6)((0, et.clsx)(i))
                    }(en({
                        variant: t
                    }), i),
                    ...n
                })
            }
            var er = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsxs)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: [(0, a.jsx)("div", {
                                className: "absolute h-[35%] sm:h-[40%] w-fit aspect-[169/83] xs:left-[2%] shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/weijie.png",
                                    alt: "伟杰",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "8px"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute h-[8%] max-h-10 w-fit aspect-[115/32] right-0 xs:right-[5%] top-[15%] xs:top-[45%] shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/alai.png",
                                    alt: "阿赖",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "8px"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute h-[18%] max-h-20 w-fit aspect-[115/32] rounded-xl overflow-hidden bottom-[2%] xs:bottom-[12%] right-[2%] opacity-80 shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/jige.png",
                                    alt: "基哥",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "8px"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute h-[10%] xs:h-[16%] max-h-20 w-fit aspect-[343/60] overflow-hidden left-0 xs:left-[10%] top-[40%] xs:top-[45%] shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/zhiqing.png",
                                    alt: "治清",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "8px"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute sm:h-[30%] h-[20%] max-h-20 w-fit aspect-[332/105] overflow-hidden left-1 bottom-[25%] xs:bottom-[5%] shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/maojia.png",
                                    alt: "懋钾",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "8px"
                                    }
                                })
                            }), (0, a.jsx)("div", {
                                className: "absolute sm:h-[30%] xs:h-[20%] h-[15%] max-h-20 w-fit aspect-[339/119] overflow-hidden right-0 top-[40%] xs:top-[8%] shadow-xl",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/jiazhen.png",
                                    alt: "家桢",
                                    fill: !0,
                                    style: {
                                        objectFit: "contain",
                                        borderRadius: "6px"
                                    }
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "XXX🎨"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "XXX🖼 Labs"]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: (0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "👑皇家SEEK🏀俱乐部"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️伟杰9️⃣"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️‍♂️基哥3️⃣"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️‍♀️家桢8️⃣"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️懋钾6️⃣"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️‍♂️治清1️⃣"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "⛹️‍♀️阿赖🔟"
                                })]
                            })]
                        })]
                    })
                }),
                em = JSON.parse('{"v":"5.8.0","fr":60,"ip":0,"op":90,"w":512,"h":514,"nm":"65 Send message ","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2 :M 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.95,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-6.102,525.847,0],"to":[52.562,-52.562,0],"ti":[-52.562,52.562,0]},{"t":25,"s":[309.268,210.477,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Position\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Position\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Position\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[251.92,263.684,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic: Position","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic: Scale - Transform","np":5,"ix":2,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.449,-85.624],[0.449,85.624]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.929,314.144],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 2","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.534,-22.993],[0,0],[27.818,6.619],[0,0],[0,0],[-13.709,25.172],[0,0]],"o":[[0,0],[13.709,25.172],[0,0],[0,0],[-27.817,6.619],[0,0],[12.534,-22.993]],"v":[[28.983,-154.759],[180.187,122.938],[143.581,171.062],[0.01,136.893],[-143.6,171.062],[-180.185,122.938],[-28.983,-154.759]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.89,0.89],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":18,"s":[-100,100]},{"t":27,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Scale - Transform\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Scale - Transform\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Scale - Transform\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.92,263.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 1","cix":2,"ix":2}],"ip":15,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 2 :M","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[309.268,210.477,0],"to":[55.979,-55.979,0],"ti":[-55.979,55.979,0]},{"t":15,"s":[645.143,-125.398,0]}],"ix":2,"l":2},"a":{"a":0,"k":[251.92,263.684,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.449,-85.624],[0.449,85.624]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.929,314.144],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 2","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.534,-22.993],[0,0],[27.818,6.619],[0,0],[0,0],[-13.709,25.172],[0,0]],"o":[[0,0],[13.709,25.172],[0,0],[0,0],[-27.817,6.619],[0,0],[12.534,-22.993]],"v":[[28.983,-154.759],[180.187,122.938],[143.581,171.062],[0.01,136.893],[-143.6,171.062],[-180.185,122.938],[-28.983,-154.759]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[100,100]},{"t":8,"s":[67,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.92,263.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 1","cix":2,"ix":2}],"ip":0,"op":15,"st":0}],"markers":[]}'),
                el = JSON.parse('{"v":"5.8.0","fr":60,"ip":0,"op":90,"w":512,"h":514,"nm":"65 Send message ","assets":[],"layers":[{"ind":1,"ty":4,"nm":"Layer 2 :M 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.95,"y":1},"o":{"x":0.05,"y":0},"t":15,"s":[-6.102,525.847,0],"to":[52.562,-52.562,0],"ti":[-52.562,52.562,0]},{"t":25,"s":[309.268,210.477,0]}],"ix":2,"l":2,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Position\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Position\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Position\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"a":{"a":0,"k":[251.92,263.684,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":5,"nm":"Elastic: Position","np":5,"ix":1,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]},{"ty":5,"nm":"Elastic: Scale - Transform","np":5,"ix":2,"en":1,"ef":[{"ty":0,"nm":"Amplitude","ix":1,"v":{"a":0,"k":20,"ix":1}},{"ty":0,"nm":"Frequency","ix":2,"v":{"a":0,"k":40,"ix":2}},{"ty":0,"nm":"Decay","ix":3,"v":{"a":0,"k":60,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.449,-85.624],[0.449,85.624]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.929,314.144],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 2","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.534,-22.993],[0,0],[27.818,6.619],[0,0],[0,0],[-13.709,25.172],[0,0]],"o":[[0,0],[13.709,25.172],[0,0],[0,0],[-27.817,6.619],[0,0],[12.534,-22.993]],"v":[[28.983,-154.759],[180.187,122.938],[143.581,171.062],[0.01,136.893],[-143.6,171.062],[-180.185,122.938],[-28.983,-154.759]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.89,0.89],"y":[1,1]},"o":{"x":[0.333,0.333],"y":[0,0]},"t":18,"s":[-100,100]},{"t":27,"s":[100,100]}],"ix":3,"x":"var $bm_rt;\\nvar amp, freq, decay, n, n, t, t, v;\\ntry {\\n    amp = $bm_div(effect(\'Elastic: Scale - Transform\')(1), 200);\\n    freq = $bm_div(effect(\'Elastic: Scale - Transform\')(2), 30);\\n    decay = $bm_div(effect(\'Elastic: Scale - Transform\')(3), 10);\\n    $bm_rt = n = 0;\\n    if (numKeys > 0) {\\n        $bm_rt = n = nearestKey(time).index;\\n        if (key(n).time > time) {\\n            n--;\\n        }\\n    }\\n    if (n == 0) {\\n        $bm_rt = t = 0;\\n    } else {\\n        $bm_rt = t = $bm_sub(time, key(n).time);\\n    }\\n    if (n > 0) {\\n        v = velocityAtTime($bm_sub(key(n).time, $bm_div(thisComp.frameDuration, 10)));\\n        $bm_rt = $bm_sum(value, $bm_div($bm_mul($bm_mul(v, amp), Math.sin($bm_mul($bm_mul($bm_mul(freq, t), 2), Math.PI))), Math.exp($bm_mul(decay, t))));\\n    } else {\\n        $bm_rt = value;\\n    }\\n} catch (e$$4) {\\n    $bm_rt = value = value;\\n}"},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.92,263.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 1","cix":2,"ix":2}],"ip":15,"op":90,"st":0},{"ind":2,"ty":4,"nm":"Layer 2 :M","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[309.268,210.477,0],"to":[55.979,-55.979,0],"ti":[-55.979,55.979,0]},{"t":15,"s":[645.143,-125.398,0]}],"ix":2,"l":2},"a":{"a":0,"k":[251.92,263.684,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-0.449,-85.624],[0.449,85.624]],"c":false},"ix":2},"nm":"Path 1"},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.929,314.144],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":40,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 2","cix":2,"ix":1},{"ty":"gr","it":[{"ty":"gr","it":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[-12.534,-22.993],[0,0],[27.818,6.619],[0,0],[0,0],[-13.709,25.172],[0,0]],"o":[[0,0],[13.709,25.172],[0,0],[0,0],[-27.817,6.619],[0,0],[12.534,-22.993]],"v":[[28.983,-154.759],[180.187,122.938],[143.581,171.062],[0.01,136.893],[-143.6,171.062],[-180.185,122.938],[-28.983,-154.759]],"c":true},"ix":2},"nm":"Path 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[100,100]},{"t":8,"s":[67,100]}],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":30.72,"ix":5},"lc":2,"lj":2,"nm":"Stroke 1"},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","cix":2,"ix":1},{"ty":"tr","p":{"a":0,"k":[251.92,263.684],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Layer 1","cix":2,"ix":2}],"ip":0,"op":15,"st":0}],"markers":[]}'),
                ex = e => {
                    let {
                        link: i,
                        lottieName: n
                    } = e, {
                        resolvedTheme: s
                    } = (0, h.useTheme)(), r = "light" === s, m = (0, l.useRef)(null);
                    async function x(e) {
                        let i = await t.e(705).then(t.t.bind(t, 4698, 23));
                        m.current && i.default.loadAnimation({
                            name: e,
                            renderer: "svg",
                            loop: !1,
                            autoplay: !1,
                            animationData: r ? em : el,
                            container: m.current,
                            rendererSettings: {
                                preserveAspectRatio: "xMinYMin slice"
                            }
                        })
                    }
                    async function o(e) {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.destroy(e)
                    }(0, l.useEffect)(() => (x(n), () => {
                        o(n)
                    }), [r, s, n]);
                    let c = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.play(n)
                    }, y = async () => {
                        (await t.e(705).then(t.t.bind(t, 4698, 23))).default.stop(n)
                    };
                    return (0, a.jsx)("a", {
                        href: i,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        className: "relative h-12 w-12 z-10 hover:bg-white dark:hover:bg-zinc-700/25 hover:border border-white/10 flex items-center justify-center rounded-full transition-all",
                        children: (0, a.jsx)("div", {
                            ref: m,
                            onMouseEnter: c,
                            onMouseLeave: y,
                            className: "h-8 w-8 opacity-50 ".concat(r ? "opacity-50" : "", " hover:opacity-100 transition-opacity")
                        })
                    })
                },
                eo = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: (0, a.jsx)("div", {
                                className: "absolute h-full w-full aspect-[578/433] shadow-2xl",
                                //children: (0, a.jsx)(S.default, {
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Station-money.jpg",
                                    alt: "填充的文字",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        borderRadius: "8px"
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "什么时候"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "在哪里"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "🧭SEEk官方网站"
                                }), (0, a.jsx)(ex, {
                                    link: "/SEEK",
                                    lottieName: "StationLandingIcon"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "赖永钊"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "有心"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "海峰"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                })]
                            })]
                        })]
                    })
                }),
                ec = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: (0, a.jsx)("div", {
                                className: "absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Station-Setup.jpg",
                                    alt: "HAHAHA",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        borderRadius: "8px"
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "什么时候"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "在哪里"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "✨公众号：纵有疾风驰"
                                }), (0, a.jsx)(ex, {
                                    link: "https://laiyongzhao.com/",
                                    lottieName: "StationSetupIcon"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                })]
                            })]
                        })]
                    })
                }),
                ey = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: (0, a.jsx)("div", {
                                className: "absolute h-full w-full aspect-[578/451] shadow-2xl rounded-lg",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Alliance-dao.jpg",
                                    alt: "HAHAHA",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        borderRadius: "8px"
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "什么时候"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "在哪里"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "💻阿赖的个人网站，瞎折腾下"
                                }), (0, a.jsx)(ex, {
                                    link: "http://bolg.laiyongzhao.com/",
                                    lottieName: "AllianceDaoIcon"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                })]
                            })]
                        })]
                    })
                }),
                ek = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: (0, a.jsx)("div", {
                                className: "absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Alliance-money.png",
                                    alt: "样本",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        borderRadius: "8px"
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "什么时候"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "在哪里"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "📝我的个人博客"
                                }), (0, a.jsx)(ex, {
                                    link: "https://studio.laiyongzhao.com/",
                                    lottieName: "AllianceLandingIcon"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                })]
                            })]
                        })]
                    })
                }),
                ef = () => (0, a.jsx)($, {
                    numParticles: 10,
                    children: (0, a.jsxs)("div", {
                        className: "relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden",
                        children: [(0, a.jsx)("div", {
                            className: "relative flex justify-between w-full h-full items-stretch flex-col",
                            children: (0, a.jsx)("div", {
                                className: "absolute h-full w-full aspect-[578/433] shadow-2xl rounded-lg",
                                children: (0, a.jsx)("img", {
                                    src: "/_next/static/images/Developer-landing.png",
                                    alt: "单细胞生物",
                                    fill: !0,
                                    style: {
                                        objectFit: "cover",
                                        objectPosition: "top",
                                        borderRadius: "8px"
                                    }
                                })
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col items-start gap-1",
                            children: [(0, a.jsxs)("h4", {
                                className: "text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center",
                                children: [(0, a.jsx)("span", {
                                    children: "什么时候"
                                }), (0, a.jsxs)("span", {
                                    className: "flex gap-1",
                                    children: [(0, a.jsx)("img", {
                                        src: "/_next/static/images/bs.png",
                                        alt: "TFL logo",
                                        height: 12,
                                        width: 16
                                    }), "在哪里"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "w-full flex gap-2 items-center",
                                children: [(0, a.jsx)("h1", {
                                    className: "text-2xl font-medium dark:text-white text-black uppercase opacity-90",
                                    children: "🤔写个啥？还没想好。"
                                }), (0, a.jsx)(ex, {
                                    link: "https://laiyongzhao.com/",
                                    lottieName: "DeveloperLandingIcon"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex gap-2 flex-wrap mt-1",
                                children: [(0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "有心"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "海峰"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                }), (0, a.jsx)(es, {
                                    variant: "default",
                                    className: "text-xs",
                                    children: "SEEK"
                                })]
                            })]
                        })]
                    })
                });
            let ed = (0, M.iF)(M.ub),
                eb = e => {
                    let {
                        themeToggler: i,
                        filter: t,
                        setCursor: n
                    } = e, [r, m] = (0, l.useState)(280), [x, o] = (0, l.useState)(!0), [c, y] = (0, l.useState)(!1);
                    (0, l.useEffect)(() => {
                        ("ontouchstart" in window || navigator.maxTouchPoints > 0) && o(!1), setTimeout(() => {
                            y(!0)
                        }, 500)
                    }, []);
                    let k = e => "all" === t || e === t ? 1 : .35;
                    return (0, a.jsx)("div", {
                        className: z().container,
                        children: (0, a.jsxs)(ed, {
                            useCSSTransforms: !0,
                            className: z().layout,
                            layouts: b[t],
                            breakpoints: {
                                lg: 1199,
                                md: 799,
                                sm: 374
                            },
                            cols: {
                                lg: 12,
                                md: 10,
                                sm: 4
                            },
                            rowHeight: r,
                            isBounded: !0,
                            isDraggable: x,
                            onBreakpointChange: e => {
                                m(u[e])
                            },
                            margin: [16, 16],
                            children: [(0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about"),
                                    height: "100%"
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .01,
                                    children: (0, a.jsx)(P, {})
                                })
                            }, "bio"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: "seek" === t ? 1 : k("all")
                                },
                                children: (0, a.jsx)("div", {
                                    className: "flex flex-col-reverse sm:flex-col gap-3 h-full",
                                    children: "seek" === t ? (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(N, {
                                            delay: .1,
                                            children: (0, a.jsx)(U, {})
                                        }), (0, a.jsx)(N, {
                                            delay: .12,
                                            children: (0, a.jsx)(G, {
                                                className: "opacity-35"
                                            })
                                        })]
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(N, {
                                            delay: .1,
                                            children: (0, a.jsx)(U, {})
                                        }), (0, a.jsx)(N, {
                                            delay: .12,
                                            children: (0, a.jsx)(G, {})
                                        })]
                                    })
                                })
                            }, "theme-toggle"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .08,
                                    children: (0, a.jsx)(E, {})
                                })
                            }, "map"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("all")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .04,
                                    children: (0, a.jsx)(H, {})
                                })
                            }, "text-marquee"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .24,
                                    children: (0, a.jsx)(Q, {
                                        title: "Linkedin",
                                        link: "https://weibo.com/u/2104049011"
                                    })
                                })
                            }, "linkedin"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .26,
                                    children: (0, a.jsx)(Q, {
                                        title: "Github",
                                        link: "https://github.com/laixiaolai"
                                    })
                                })
                            }, "github"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .28,
                                    children: (0, a.jsx)(Q, {
                                        title: "Codepen",
                                        link: "https://codepen.io/laixiaolai/pens/showcase"
                                    })
                                })
                            }, "codepen"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .3,
                                    children: (0, a.jsx)(Q, {
                                        title: "Email",
                                        link: "mailto:254744004@qq.com"
                                    })
                                })
                            }, "email"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "500ms" : "0ms",
                                    opacity: k("about")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .35,
                                    children: (0, a.jsx)(W, {})
                                })
                            }, "my-stack"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .4,
                                    children: (0, a.jsx)(ee, {
                                        setCursor: n
                                    })
                                })
                            }, "jobs"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .5,
                                    children: (0, a.jsx)(er, {})
                                })
                            }, "station-ui"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .55,
                                    children: (0, a.jsx)(eo, {})
                                })
                            }, "station-landing"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .6,
                                    children: (0, a.jsx)(ec, {})
                                })
                            }, "station-setup"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .65,
                                    children: (0, a.jsx)(ey, {})
                                })
                            }, "alliance-dao"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .7,
                                    children: (0, a.jsx)(ek, {})
                                })
                            }, "alliance-landing"), (0, a.jsx)("div", {
                                className: s()(z().itemGrab, z().item),
                                style: {
                                    transitionDuration: c ? "700ms" : "0ms",
                                    opacity: k("seek")
                                },
                                children: (0, a.jsx)(N, {
                                    delay: .75,
                                    children: (0, a.jsx)(ef, {})
                                })
                            }, "developer-landing")]
                        })
                    })
                },
                eu = function() {
                    for (var e = arguments.length, i = Array(e), t = 0; t < e; t++) i[t] = arguments[t];
                    return i.filter(Boolean).join(" ")
                },
                ep = (e, i, t) => Math.floor((null != t ? t : Math.random()) * (i - e + 1) + e),
                e_ = (e, i) => e.length ? e[ep(0, e.length - 1, i)] : null;

            function eh(e) {
                let {
                    cellSize: i = 70,
                    shineFrequency: t = 300,
                    animationDuration: n = 3e3,
                    className: s
                } = e, r = (0, l.useRef)(null), [m, x] = (0, l.useState)({
                    shines: [],
                    lastShineId: 0
                });
                return ! function(e, i) {
                    let t = (0, l.useRef)(null),
                        a = (0, l.useRef)(e);
                    (0, l.useEffect)(() => {
                        a.current = e
                    }, [e]), (0, l.useEffect)(() => (t.current = window.setInterval(() => a.current(), i), () => window.clearInterval(t.current)), [i])
                }(() => {
                    if (!r.current) return;
                    let e = new Date().getTime(),
                        t = r.current.getBoundingClientRect().width,
                        a = r.current.getBoundingClientRect().height,
                        s = Math.floor(t / i),
                        m = Math.floor(a / i),
                        l = ["up", "down", "left", "right"][ep(0, 3)],
                        o = ["left", "right"].includes(l),
                        c = !o,
                        y = r.current.getCurrentTime() + "s",
                        k = Math.random(),
                        f = Math.random();
                    x(i => {
                        let {
                            shines: t,
                            lastShineId: a
                        } = i, r = t.filter(i => {
                            let {
                                time: t
                            } = i;
                            return t + n > e
                        }), x = c ? e_([...Array(s).keys()].filter(e => !r.find(i => ["up", "down"].includes(i.direction) && i.x === e)), k) : ep(0, s, k), d = o ? e_([...Array(m).keys()].filter(e => !r.find(i => ["left", "right"].includes(i.direction) && i.y === e)), f) : ep(0, m, f), b = a + 1;
                        return null === x && null === d ? {
                            ...i,
                            shines: r
                        } : {
                            shines: [...r, ...null !== x && null !== d ? [{
                                id: b,
                                time: e,
                                x: x,
                                y: d,
                                direction: l,
                                begin: y
                            }] : []],
                            lastShineId: b
                        }
                    })
                }, t), (0, a.jsx)("div", {
                    className: eu("absolute inset-0 overflow-hidden", s),
                    children: (0, a.jsxs)("svg", {
                        ref: r,
                        className: "absolute inset-0",
                        width: "100%",
                        height: "100%",
                        children: [(0, a.jsxs)("defs", {
                            children: [(0, a.jsx)("pattern", {
                                id: "grid",
                                x: "0",
                                y: "0",
                                width: i,
                                height: i,
                                patternUnits: "userSpaceOnUse",
                                fill: "var(--background)",
                                opacity: .1,
                                children: (0, a.jsx)("path", {
                                    d: "M ".concat(i, " 0 L 0 0 0 ").concat(i),
                                    stroke: "var(--grid-line-color)",
                                    strokeWidth: 3
                                })
                            }), (0, a.jsxs)("radialGradient", {
                                id: "lightGradient",
                                children: [(0, a.jsx)("stop", {
                                    offset: "0%",
                                    stopColor: "#fff"
                                }), (0, a.jsx)("stop", {
                                    offset: "100%",
                                    stopColor: "transparent"
                                })]
                            })]
                        }), (0, a.jsx)("rect", {
                            fill: "url(#grid)",
                            width: "100%",
                            height: "100%",
                            opacity: .15
                        }), m.shines.map(e => {
                            let t = ["up", "down"].includes(e.direction),
                                s = {
                                    up: [0, -1],
                                    down: [0, 1],
                                    left: [-1, 0],
                                    right: [1, 0]
                                } [e.direction];
                            return (0, a.jsxs)("rect", {
                                fill: "url(#lightGradient)",
                                x: e.x * i - (t ? 1 : 0),
                                y: e.y * i - (t ? 0 : 1),
                                width: t ? 2 : 2 * i,
                                height: t ? 2 * i : 2,
                                children: [(0, a.jsx)("animateTransform", {
                                    attributeName: "transform",
                                    type: "translate",
                                    from: "0 0",
                                    to: s.map(e => e * i * 6).join(" "),
                                    dur: "".concat(n, "ms"),
                                    begin: e.begin,
                                    fill: "freeze",
                                    additive: "sum"
                                }), (0, a.jsx)("animate", {
                                    attributeName: "opacity",
                                    values: "0;1;1;0",
                                    dur: "".concat(n, "ms"),
                                    begin: e.begin,
                                    fill: "freeze"
                                })]
                            }, e.id)
                        })]
                    })
                })
            }

            function ev() {
                let [e, i] = (0, k.n)(!1, !0), [t, n] = (0, k.n)(!1, !0), [r, x] = (0, l.useState)(""), o = (0, f._)(), {
                    theme: d,
                    setTheme: b
                } = (0, h.useTheme)(), [u, p] = (0, l.useState)("all");
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(c.E.div, {
                        className: m().container,
                        children: [(0, a.jsx)(R, {
                            setFilter: p
                        }), (0, a.jsx)(c.E.div, {
                            className: s()(m().GridContainer, m().list),
                            animate: o,
                            children: (0, a.jsx)(eb, {
                                themeToggler: () => {
                                    "light" == d ? b("dark") : b("light")
                                },
                                filter: u,
                                setCursor: x
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-0 overflow-hidden -z-20 ",
                        children: (0, a.jsx)("div", {
                            className: "absolute -inset-[25%]",
                            children: (0, a.jsx)(eh, {})
                        })
                    }), (0, a.jsx)(y, {
                        cursor: r,
                        isHovered: e,
                        isNav: t
                    })]
                })
            }
        },
        7976: function() {},
        4220: function(e) {
            e.exports = {
                about__area: "page_about__area__6j5Pb",
                container: "page_container__LLik5",
                row: "page_row__DcGBw",
                mt__24: "page_mt__24__2FulU",
                shadow__box: "page_shadow__box__GMmvh",
                overlay__link: "page_overlay__link__cAfEm",
                bg__img: "page_bg__img__I3YbM",
                about__me__box: "page_about__me__box__kUxnO",
                infos: "page_infos__ty63o",
                about__btn: "page_about__btn__m2zwz",
                about__credentials__wrap: "page_about__credentials__wrap__t5pM_",
                banner: "page_banner__4wZcS",
                marquee: "page_marquee__exBHz",
                sub__rows: "page_sub__rows__zNK8p",
                info__box: "page_info__box__2mnO8",
                content: "page_content__szHtB",
                gx__row: "page_gx__row__u0TNp",
                blog__service__profile__wrap: "page_blog__service__profile__wrap__kxC5J",
                flex__1: "page_flex__1__BYDCo",
                inner__profile__icons: "page_inner__profile__icons__haCmT",
                icon__boxes: "page_icon__boxes__OxFzu",
                about__blog__box: "page_about__blog__box__lFPM6",
                about__profile__box: "page_about__profile__box__XN9jJ",
                about__client__box: "page_about__client__box__xgqhk",
                clients: "page_clients__E052Q",
                client__item: "page_client__item__MZvsz",
                about__contact__box: "page_about__contact__box__uj2SP",
                star__icon: "page_star__icon__nMDfY",
                col__md__6: "page_col__md__6__E2nw8",
                col__md__12: "page_col__md__12__2yLQv",
                about__services__box: "page_about__services__box___k_Qx",
                img__box: "page_img__box__9L9Q2",
                profile__contact__credentials__wrap: "page_profile__contact__credentials__wrap__melne",
                project__details__wrap: "page_project__details__wrap__IY_oY",
                project__about__2: "page_project__about__2__hza_7",
                project__infos__wrap: "page_project__infos__wrap__w4S8i"
            }
        },
        2138: function(e) {
            e.exports = {
                container: "styles_container__ufS8H",
                highlight: "styles_highlight__rmG8A",
                option: "styles_option__mlVkw"
            }
        },
        4055: function(e) {
            e.exports = {
                container: "grid_container__DF_RC",
                itemGrab: "grid_itemGrab__bzV7a",
                item: "grid_item__U7rPn"
            }
        }
    },
    function(e) {
        e.O(0, [524, 971, 69, 744], function() {
            return e(e.s = 5286)
        }), _N_E = e.O()
    }
]);
