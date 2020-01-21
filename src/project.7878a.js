window.__require = function e(t, o, n) {
    function c(i, l) {
        if (!o[i]) {
            if (!t[i]) {
                var r = i.split("/");
                if (r = r[r.length - 1],
                !t[r]) {
                    var a = "function" == typeof __require && __require;
                    if (!l && a)
                        return a(r, !0);
                    if (s)
                        return s(r, !0);
                    throw new Error("Cannot find module '" + i + "'")
                }
            }
            var u = o[i] = {
                exports: {}
            };
            t[i][0].call(u.exports, function(e) {
                return c(t[i][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[i].exports
    }
    for (var s = "function" == typeof __require && __require, i = 0; i < n.length; i++)
        c(n[i]);
    return c
}({
    BackgroundAdapter: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "edac5XYkBFG14umrjvg4KqV", "BackgroundAdapter"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , c = n.ccclass
          , s = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
              /*  var e = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height)
                  , t = this.node.width * e
                  , o = this.node.height * e;
                this.node.scale = Math.max(cc.view.getCanvasSize().width / t, cc.view.getCanvasSize().height / o)*/
            }
            ,
            t = __decorate([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    BlockCollider: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "33d92JqC4pMDJDgpOXPn16Z", "BlockCollider"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    var t = cc.director.getScene();
                    this.node.parent = t;
                    var o = e.getLocation();
                    this.node.setPosition(o)
                }, this)
            },
            onLoad: function() {
				this.autoAdapteScreen();
                cc.director.getCollisionManager().enabled = !0
            },
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            onCollisionEnter: function() {
                1 == musicPlay && cc.audioEngine.play(this.audio, !1, 1),
                this.node.destroy(),
                0 == shakeControl && cc.sys.platform === cc.sys.WECHAT_GAME && wx.vibrateShort()
            }
        }),
        cc._RF.pop()
    }
    , {}],
    CloseToBorderComponent: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "011c81bsy1Fd53fr3Mz/LlX", "CloseToBorderComponent"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , c = n.ccclass
          , s = n.property
          , i = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.closeToBottom = !1,
                t.marginBottomInPx = 0,
                t
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
                this.closeToBottom && (this.node.position = cc.v2(this.node.position.x, -this.node.parent.height / 2 + this.node.anchorY * this.node.height + this.marginBottomInPx))
            }
            ,
            __decorate([s({
                tooltip: "\u662f\u5426\u7d27\u8d34\u4e0b\u65b9\uff0c\u4e0d\u80fd\u548c\u7d27\u8d34\u4e0a\u65b9\u540c\u65f6\u4f7f\u7528"
            })], t.prototype, "closeToBottom", void 0),
            __decorate([s({
                tooltip: "\u8ddd\u79bb\u4e0b\u65b9\u7684\u8ddd\u79bb\uff08px\uff09\uff0c\u5f00\u542f\u7d27\u8d34\u4e0b\u65b9\u65f6\u4f7f\u7528"
            })], t.prototype, "marginBottomInPx", void 0),
            t = __decorate([c], t)
        }(cc.Component);
        o.default = i,
        cc._RF.pop()
    }
    , {}],
    ContentAdapter: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ae66adngQdPN4rab7P2kn7N", "ContentAdapter"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , c = n.ccclass
          , s = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e),
            t.prototype.onLoad = function() {
				this.autoAdapteScreen();
               /* var e = Math.min(cc.view.getCanvasSize().width / this.node.width, cc.view.getCanvasSize().height / this.node.height)
                  , t = this.node.width * e
                  , o = this.node.height * e;
                this.node.width = this.node.width * (cc.view.getCanvasSize().width / t),
                this.node.height = this.node.height * (cc.view.getCanvasSize().height / o)*/
            }
            ,
			t.prototype.autoAdapteScreen = function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            t = __decorate([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    CourseControl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6d2d2gDjxJDDJ3WFy4KKa0P", "CourseControl"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                1 == levelControl1 && (this.node.active = !1)
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 001": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "91e642Dq6lC4Yc8C+tmiAfw", "InteractiveContral - 001"),
        cc.Class({
            extends: cc.Component,
            properties: {},
			onLoad:function(){
				this.autoAdapteScreen();
				
				console.log(this.node);
			},
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            start: function() {
                var e = !1;
                e = 1 == levelControl1,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 002": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "88bddlTB+JC/63UA63b3aqF", "InteractiveContral - 002"),
        cc.Class({
            extends: cc.Component,
            properties: {},
			onLoad:function(){
				console.log(this.node);
			},
            start: function() {
                var e = !1;
                e = 1 == levelControl2,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 003": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "429934ootJHl6XXvZC1x1zu", "InteractiveContral - 003"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl3,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 004": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7bd59/9HTZAP5boZePnHh96", "InteractiveContral - 004"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl4,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 005": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0a14fm7e9hOOauqE82IcA5V", "InteractiveContral - 005"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl5,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 006": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "eaa68wWx1NBubOsOpm9DUXe", "InteractiveContral - 006"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl6,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 007": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8d6d9I7gxZDEaw9lHPCPXfq", "InteractiveContral - 007"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl7,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 008": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7da05u7+JxM747zlq9G7QJg", "InteractiveContral - 008"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl8,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 009": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "20885CuYHJEbKnqDBfZopws", "InteractiveContral - 009"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl9,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 010": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "20164VyQlRIab8XlSAPFxOa", "InteractiveContral - 010"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl10,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 011": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "caa80xyHnJCtbLxY9q9766B", "InteractiveContral - 011"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl11,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 012": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3b922pIdINBTKZQlldcM0o3", "InteractiveContral - 012"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl12,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 013": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "41dafR/f45JBrx+ciaX5AHj", "InteractiveContral - 013"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl13,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 014": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "12420XlhzNEN6ttUMkEtLgP", "InteractiveContral - 014"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl14,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "InteractiveContral - 015": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a2c3e1JWWhJ15pkzWjfwqdt", "InteractiveContral - 015"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = !1;
                e = 1 == levelControl15,
                this.node.getComponent(cc.Button).interactable = e
            }
        }),
        cc._RF.pop()
    }
    , {}],
    LanguageData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "61de062n4dJ7ZM9/Xdumozn", "LanguageData");
        var n = e("polyglot.min")
          , c = null;
        function s(e) {
            return window.i18n.languages[e]
        }
        function i(e) {
            e && (c ? c.replace(e) : c = new n({
                phrases: e,
                allowMissing: !0
            }))
        }
        window.i18n || (window.i18n = {
            languages: {},
            curLang: ""
        }),
        t.exports = {
            init: function(e) {
                if (e !== window.i18n.curLang) {
                    var t = s(e) || {};
                    window.i18n.curLang = e,
                    i(t),
                    this.inst = c
                }
            },
            t: function(e, t) {
                if (c)
                    return c.t(e, t)
            },
            inst: c,
            updateSceneRenderers: function() {
                for (var e = cc.director.getScene().children, t = [], o = 0; o < e.length; ++o) {
                    var n = e[o].getComponentsInChildren("LocalizedLabel");
                    Array.prototype.push.apply(t, n)
                }
                for (var c = 0; c < t.length; ++c) {
                    var s = t[c];
                    s.node.active && s.updateLabel()
                }
                for (var i = [], l = 0; l < e.length; ++l) {
                    var r = e[l].getComponentsInChildren("LocalizedSprite");
                    Array.prototype.push.apply(i, r)
                }
                for (var a = 0; a < i.length; ++a) {
                    var u = i[a];
                    u.node.active && u.updateSprite(window.i18n.curLang)
                }
            }
        },
        cc._RF.pop()
    }
    , {
        "polyglot.min": "polyglot.min"
    }],
    LocalizedLabel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "744dcs4DCdNprNhG0xwq6FK", "LocalizedLabel");
        var n = e("LanguageData");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                menu: "i18n/LocalizedLabel"
            },
            properties: {
                dataID: {
                    get: function() {
                        return this._dataID
                    },
                    set: function(e) {
                        this._dataID !== e && (this._dataID = e,
                        this.updateLabel())
                    }
                },
                _dataID: ""
            },
            onLoad: function() {
                n.inst || n.init(),
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Label);
                if (e)
                    return this.label = e,
                    void this.updateLabel()
            },
            updateLabel: function() {
                this.label ? n.t(this.dataID) && (this.label.string = n.t(this.dataID)) : cc.error("Failed to update localized label, label component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        LanguageData: "LanguageData"
    }],
    LocalizedSprite: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f34ac2GGiVOBbG6XlfvgYP4", "LocalizedSprite");
        var n = e("SpriteFrameSet");
        cc.Class({
            extends: cc.Component,
            editor: {
                executeInEditMode: !0,
                inspector: "packages://i18n/inspector/localized-sprite.js",
                menu: "i18n/LocalizedSprite"
            },
            properties: {
                spriteFrameSet: {
                    default: [],
                    type: n
                }
            },
            onLoad: function() {
                this.fetchRender()
            },
            fetchRender: function() {
                var e = this.getComponent(cc.Sprite);
                if (e)
                    return this.sprite = e,
                    void this.updateSprite(window.i18n.curLang)
            },
            getSpriteFrameByLang: function(e) {
                for (var t = 0; t < this.spriteFrameSet.length; ++t)
                    if (this.spriteFrameSet[t].language === e)
                        return this.spriteFrameSet[t].spriteFrame
            },
            updateSprite: function(e) {
                if (this.sprite) {
                    var t = this.getSpriteFrameByLang(e);
                    !t && this.spriteFrameSet[0] && (t = this.spriteFrameSet[0].spriteFrame),
                    this.sprite.spriteFrame = t
                } else
                    cc.error("Failed to update localized sprite, sprite component is invalid!")
            }
        }),
        cc._RF.pop()
    }
    , {
        SpriteFrameSet: "SpriteFrameSet"
    }],
    MultiResoultionCompat: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1e428fFva9MIJr++rPL8I/h", "MultiResoultionCompat"),
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = cc._decorator
          , c = n.ccclass
          , s = (n.property,
        function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            var o;
            return __extends(t, e),
            o = t,
            t.prototype.onLoad = function() {
				//this.autoAdapteScreen();
                cc.view.setDesignResolutionSize(o.DEFAULT_RESOLUTION_WIDTH, o.DEFAULT_RESOLUTION_HEIGHT, cc.ResolutionPolicy.SHOW_ALL)
            }
            ,
			t.prototype.autoAdapteScreen = function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            t.getShowAllModeScale = function() {
				
                return Math.min(cc.view.getCanvasSize().width / this.DEFAULT_RESOLUTION_WIDTH, cc.view.getCanvasSize().height / this.DEFAULT_RESOLUTION_HEIGHT)
            }
            ,
            t.getShowAllModeRealHeight = function() {
                return this.DEFAULT_RESOLUTION_HEIGHT * this.getShowAllModeScale()
            }
            ,
            t.getShowAllModeRealWidth = function() {
                return this.DEFAULT_RESOLUTION_WIDTH * this.getShowAllModeScale()
            }
            ,
            t.getShowAllModeVerticalBorderHeight = function() {
                return cc.view.getCanvasSize().height - this.getShowAllModeRealHeight()
            }
            ,
            t.getShowAllModeHorizontalBorderWidth = function() {
                return cc.view.getCanvasSize().width - this.getShowAllModeRealWidth()
            }
            ,
            t.getShowAllModeNodePositionCloseToBottom = function(e) {
                var t = o.getShowAllModeScale()
                  , n = o.getShowAllModeVerticalBorderHeight() / 2
                  , c = (e.y * t - n) / t;
                return cc.v2(e.x, c)
            }
            ,
            t.convertNodePosInDesignToNodePosInCanvas = function(e) {
                return e.sub(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()))
            }
            ,
            t.convertNodePosInCanvasToNodePosInDesign = function(e) {
                return e.div(cc.v2(this.getShowAllModeScale(), this.getShowAllModeScale()))
            }
            ,
            t.convertWidthInDesignToWidthInCanvas = function(e) {
                return e * this.getShowAllModeScale()
            }
            ,
            t.convertWidthInCanvasToWidthInDesign = function(e) {
                return e / this.getShowAllModeScale()
            }
            ,
            t.convertHeightInDesignToHeightInCanvas = function(e) {
                return e * this.getShowAllModeScale()
            }
            ,
            t.convertHeightInCanvasToHeightInDesign = function(e) {
                return e / this.getShowAllModeScale()
            }
            ,
            t.DEFAULT_RESOLUTION_WIDTH = 720,
            t.DEFAULT_RESOLUTION_HEIGHT = 1280,
            t = o = __decorate([c], t)
        }(cc.Component));
        o.default = s,
        cc._RF.pop()
    }
    , {}],
    NodeCollider: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7e6d7Gkv/BCY4LPwFc/iqdq", "NodeCollider"),
        cc.Class({
            extends: cc.Component,
            properties: {
                blockPrefab: cc.Prefab,
                xPosition: 0,
                yPosition: 0
            },
            onLoad: function() {
                cc.director.getCollisionManager().enabled = !0
            },
            onCollisionEnter: function() {
                CollisionCounter += 1,
                cc.log(CollisionCounter),
                this.spawnBlock()
            },
            onCollisionExit: function() {
                this.node.scale = 1;
                var e = cc.scaleTo(0, 0)
                  , t = cc.callFunc(function() {
                    this.node.destroy()
                }
                .bind(this))
                  , o = cc.sequence([e, t]);
                this.node.runAction(o)
            },
            spawnBlock: function() {
                var e = cc.director.getScene()
                  , t = cc.instantiate(this.blockPrefab);
                t.parent = e,
                t.setPosition(this.xPosition, this.yPosition)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    PreviewOriginalPic: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4a3a4owsG9Ik6wPpOFrr1r0", "PreviewOriginalPic"),
        cc.Class({
            extends: cc.Component,
            properties: {
                previewPrefab: cc.Prefab,
                x: 540,
                y: 960
            },
            start: function() {
                this.spawnPreviewPrefab()
            },
            spawnPreviewPrefab: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    var e = cc.director.getScene()
                      , t = cc.instantiate(this.previewPrefab);
                    t.parent = e,
                    t.setPosition(this.x, this.y)
                }, this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    RICHTEXT: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "95bfbnLSv5Oj68ziQEMebTz", "RICHTEXT"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {
                var e = [levelControl1, levelControl2, levelControl3, levelControl4, levelControl5, levelControl6, levelControl7, levelControl8, levelControl9, levelControl10, levelControl11, levelControl12, levelControl13, levelControl14, levelControl15];
                for (var t in e)
                    1 == e[t] && (i += 1);
                this.node.getComponent(cc.RichText).string = "<color=BLACK>" + i + "/15</c>",
                i = 0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Scene1: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "21b45KzveZCGo4i86iI5HZd", "Scene1"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: ""
            },
            onLoad: function() {
				this.autoAdapteScreen();
                cc.director.preloadScene(this.SceneName, function() {});
            },
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            play: function() {
                this.getComponent(cc.Animation).play("Main1")
            },
            onFinish: function() {
                cc.director.loadScene(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SceneMain1: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "64de0/bySZA16y8moQRP1WZ", "SceneMain1"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {
				this.autoAdapteScreen();
			},
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            onFinish: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SceneMain2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "998edYHx0RO7aIW+6Ko/SRT", "SceneMain2"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {
				this.autoAdapteScreen();
                cc.director.preloadScene(this.SceneName, function() {});
            },
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            onFinish2: function() {
                cc.director.loadScene(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    Share_btn: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b33b2evTq5OeYghRf40H1s3", "Share_btn"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onLoad: function() {},
            share: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && wx.shareAppMessage({
                    title: "\u5feb\u6765\u5e72\u6211\u4e00\u8d77\u6e38\u73a9\u526a\u7eb8\u6e38\u620f\u7684\u8239\u65b0\u7248\u672c\uff01",
                    imageUrl: "https://papercuts-1259306033.cos.ap-chengdu.myqcloud.com/share.png",
                    success: function(e) {
                        console.log("\u5206\u4eab\u6210\u529f!!!")
                    },
                    fail: function(e) {
                        console.log("\u5206\u4eab\u5931\u8d25!!!")
                    }
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SpriteFrameSet: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "97019Q80jpE2Yfz4zbuCZBq", "SpriteFrameSet");
        var n = cc.Class({
            name: "SpriteFrameSet",
            properties: {
                language: "",
                spriteFrame: cc.SpriteFrame
            }
        });
        t.exports = n,
        cc._RF.pop()
    }
    , {}],
    StopRotation: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b5c456T33tO/5KGYVop1DoG", "StopRotation"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                if (1 == difficultControl) {
                    var e = 6 * Math.random();
                    if (e < 1) {
                        var t = cc.repeatForever(cc.rotateBy(3, 360));
                        this.node.runAction(t)
                    }
                    if (e >= 1 && e < 2) {
                        t = cc.repeatForever(cc.rotateBy(3, -360));
                        this.node.runAction(t)
                    }
                    if (e >= 2 && e < 3) {
                        t = cc.repeatForever(cc.rotateBy(2, -360));
                        this.node.runAction(t)
                    }
                    if (e >= 3 && e < 4) {
                        t = cc.repeatForever(cc.rotateBy(4, -360));
                        this.node.runAction(t)
                    }
                    if (e >= 4 && e < 5) {
                        t = cc.repeatForever(cc.rotateBy(2, 360));
                        this.node.runAction(t)
                    }
                    if (e >= 5 && e < 6) {
                        t = cc.repeatForever(cc.rotateBy(4, 360));
                        this.node.runAction(t)
                    }
                }
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    1 == difficultControl && this.node.stopAction()
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    if (1 == difficultControl) {
                        var t = 6 * Math.random();
                        if (t < 1) {
                            var o = cc.repeatForever(cc.rotateBy(3, 360));
                            this.node.runAction(o)
                        }
                        if (t >= 1 && t < 2) {
                            o = cc.repeatForever(cc.rotateBy(3, -360));
                            this.node.runAction(o)
                        }
                        if (t >= 2 && t < 3) {
                            o = cc.repeatForever(cc.rotateBy(2, -360));
                            this.node.runAction(o)
                        }
                        if (t >= 3 && t < 4) {
                            o = cc.repeatForever(cc.rotateBy(4, -360));
                            this.node.runAction(o)
                        }
                        if (t >= 4 && t < 5) {
                            o = cc.repeatForever(cc.rotateBy(2, 360));
                            this.node.runAction(o)
                        }
                        if (t >= 5 && t < 6) {
                            o = cc.repeatForever(cc.rotateBy(4, 360));
                            this.node.runAction(o)
                        }
                    }
                }, this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SuccessDetection: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "adce0TPXgJOU5A9suEm0lYP", "SuccessDetection"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SuccessPrefab: cc.Prefab,
                ColliderTime: 0
            },
            update: function() {
                CollisionCounter,
                this.success()
            },
            success: function() {
                if (CollisionCounter == this.ColliderTime) {
                    var e = cc.director.getScene()
                      , t = cc.instantiate(this.SuccessPrefab);
                    t.parent = e,
                    t.setPosition(540, 960),
                    cc.log("x"),
                    CollisionCounter += 1
                }
            }
        }),
        cc._RF.pop()
    }
    , {}],
    SwitchScene: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a9d28YwzGVCAq4ZnC5pNNDb", "SwitchScene"),
        cc.Class({
            extends: cc.Component,
            properties: {
                loadlabel: cc.Label
            },
			onLoad:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            start: function() {
                window.switchload = this
            },
            onProgress: function(e, t, o) {
                console.log("jindu ----:" + e + " : " + t),
                this.loadlabel && (this.loadlabel.string = +Math.floor(e / t * 100) + "%")
            },
            loadsce: function(e) {
                cc.director.preloadScene(e, this.onProgress.bind(this), function() {
                    console.log("load ok :" + e),
                    cc.director.loadScene(e)
                })
            },
            backHome: function() {
                this.loadsce("mainScene")
            },
            SwitchTeachMode: function() {
                this.loadsce("teachMode")
            },
            SwitchStageMode: function() {
                this.loadsce("stageMode")
            },
            SwitchStageZero: function() {
                this.loadsce("stageZero")
            },
            SwitchStageOne: function() {
                this.loadsce("stageOne")
            },
            SwitchStageTwo: function() {
                this.loadsce("stageTwo")
            },
            SwitchStageThree: function() {
                this.loadsce("stageThree")
            },
            SwitchStageFour: function() {
                this.loadsce("stageFour")
            },
            SwitchStageFive: function() {
                this.loadsce("stageFive")
            },
            SwitchStageSix: function() {
                this.loadsce("stageSix")
            },
            SwitchStageSeven: function() {
                this.loadsce("stageSeven")
            },
            SwitchStageEight: function() {
                this.loadsce("stageEight")
            },
            SwitchStageNine: function() {
                this.loadsce("stageNine")
            },
            SwitchStageTen: function() {
                this.loadsce("stageTen")
            },
            SwitchStageEleven: function() {
                this.loadsce("stageEleven")
            },
            SwitchStageTwelve: function() {
                this.loadsce("stageTwelve")
            },
            SwitchStageThirteen: function() {
                this.loadsce("stageThirteen")
            },
            SwitchStageFourteen: function() {
                this.loadsce("stageFourteen")
            },
            SwitchLiHuiMode: function() {
                this.loadsce("LiHui")
            },
            changeCommon: function() {
                CollisionCounter = 0
            },
            level1: function() {
                levelControl1 = 1,
                cc.sys.localStorage.setItem("Control1", levelControl1),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "1"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level2: function() {
                levelControl2 = 1,
                cc.sys.localStorage.setItem("Control2", levelControl2),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "2"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level3: function() {
                levelControl3 = 1,
                cc.sys.localStorage.setItem("Control3", levelControl3),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "3"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level4: function() {
                levelControl4 = 1,
                cc.sys.localStorage.setItem("Control4", levelControl4),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "4"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level5: function() {
                levelControl5 = 1,
                cc.sys.localStorage.setItem("Control5", levelControl5),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "5"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level6: function() {
                levelControl6 = 1,
                cc.sys.localStorage.setItem("Control6", levelControl6),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "6"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level7: function() {
                levelControl7 = 1,
                cc.sys.localStorage.setItem("Control7", levelControl7),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "7"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level8: function() {
                levelControl8 = 1,
                cc.sys.localStorage.setItem("Control8", levelControl8),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "8"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level9: function() {
                levelControl9 = 1,
                cc.sys.localStorage.setItem("Control9", levelControl9),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "9"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level10: function() {
                levelControl10 = 1,
                cc.sys.localStorage.setItem("Control10", levelControl10),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "10"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level11: function() {
                levelControl11 = 1,
                cc.sys.localStorage.setItem("Control11", levelControl11),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "11"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level12: function() {
                levelControl12 = 1,
                cc.sys.localStorage.setItem("Control12", levelControl12),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "12"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level13: function() {
                levelControl13 = 1,
                cc.sys.localStorage.setItem("Control13", levelControl13),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "13"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level14: function() {
                levelControl14 = 1,
                cc.sys.localStorage.setItem("Control14", levelControl14),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "14"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            level15: function() {
                levelControl15 = 1,
                cc.sys.localStorage.setItem("Control15", levelControl15),
                cc.sys.platform === cc.sys.WECHAT_GAME && window.wx.setUserCloudStorage({
                    KVDataList: [{
                        key: "level",
                        value: "15"
                    }],
                    success: function(e) {
                        console.log("setUserCloudStorage", "success", e)
                    },
                    fail: function(e) {
                        console.log("setUserCloudStorage", "fail")
                    },
                    complete: function(e) {
                        console.log("setUserCloudStorage", "ok")
                    }
                })
            },
            close: function() {
                this.node.destroy()
            },
            shakeControl: function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function() {
                0 == shakeControl ? shakeControl = 1 : 1 == shakeControl && (shakeControl = 0)
            })
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-001": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "0a1cfNleUdAkL1s5COiSnEw", "XG-001"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {
				this.autoAdapteScreen();
				
				//console.log(this.node);
			},
			autoAdapteScreen:function(){
				var _canvas = cc.Canvas.instance;
				_canvas.fitHeight = true;
				_canvas.fitWidth = false;
			},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_001: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-002": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "08ee5a1Es5CM4deoXg6CYmR", "XG-002"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_002: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-003": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "86658YMT8dFaaYQI4N+trL9", "XG-003"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_003: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-004": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "73d0eWeBIFJi6V/V5pJyrjS", "XG-004"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_004: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-005": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ba72c18v61Jq57egLeUETeK", "XG-005"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_005: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-006": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7656fRpn9pEkYkaTa1ZQS/2", "XG-006"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_006: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-007": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8e65agkRmBIN7Zk+XcHmSQj", "XG-007"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_007: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-008": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b3260Fq7yBNgK6gGDeavglS", "XG-008"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_008: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-009": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bb2d4qKYJtJqaFVx3dvrauX", "XG-009"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_009: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-010": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "880b5f6gKJL6obOd8cBMHsC", "XG-010"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_010: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-011": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "60e3e1hMW9GwayNP6PDyeMe", "XG-011"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_011: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-012": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8fa23qWiYFMEoUze9HtEDFx", "XG-012"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_012: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-013": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b9208a6KchOILVrZsg7CSzm", "XG-013"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_013: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-014": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a0348BXKYVA8KWI2RFoL3I3", "XG-014"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_014: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-015": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "192e3N8VRlHSaqfCODJNdsA", "XG-015"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_015: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "XG-016": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "139dd4FawFA07TqBwX+4rv8", "XG-016"),
        cc.Class({
            extends: cc.Component,
            properties: {
                SceneName: "",
                clipName: ""
            },
            onLoad: function() {},
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            },
            XG_016: function() {
                window.switchload.loadsce(this.SceneName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    anim: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "58b58Vy+69JlZhgOlVtw1i6", "anim"),
        cc.Class({
            extends: cc.Component,
            properties: {
                anim: cc.Animation,
                upBtn: cc.Button,
                bottomBtn: cc.Button
            },
            play: function() {
                this.anim.play("sub_up")
            },
            playback: function() {
                this.anim.play("sub_down")
            },
            onFinishAnim: function(e) {
                this.upBtn.node.active = e,
                this.bottomBtn.node.active = !e
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    audioScenePic: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e815bgmpoREJojy/Vo6FSbQ", "audioScenePic"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ima1: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima2: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima3: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima4: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima5: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima6: {
                    type: cc.SpriteFrame,
                    default: null
                }
            },
            start: function() {
                1 == volumeControl ? this.changeFrame1() : this.changeFrame2(),
                0 == shakeControl ? this.changeFrame3() : this.changeFrame4(),
                0 == difficultControl ? this.changeFrame5() : this.changeFrame6()
            },
            update: function() {
                volumeControl,
                difficultControl,
                shakeControl
            },
            changeFrame1: function() {
                this.node.getChildByName("settingPanel").getChildByName("audioControl").getChildByName("music111").getComponent(cc.Sprite).spriteFrame = this.ima1
            },
            changeFrame2: function() {
                this.node.getChildByName("settingPanel").getChildByName("audioControl").getChildByName("music111").getComponent(cc.Sprite).spriteFrame = this.ima2
            },
            changeFrame3: function() {
                this.node.getChildByName("settingPanel").getChildByName("shake").getChildByName("shake1").getComponent(cc.Sprite).spriteFrame = this.ima3
            },
            changeFrame4: function() {
                this.node.getChildByName("settingPanel").getChildByName("shake").getChildByName("shake1").getComponent(cc.Sprite).spriteFrame = this.ima4
            },
            changeFrame5: function() {
                this.node.getChildByName("settingPanel").getChildByName("difficult").getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ima5
            },
            changeFrame6: function() {
                this.node.getChildByName("settingPanel").getChildByName("difficult").getChildByName("Background").getComponent(cc.Sprite).spriteFrame = this.ima6
            }
        }),
        cc._RF.pop()
    }
    , {}],
    audioSourceScript: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3ac13eASGRBJZ6++f2uUw9z", "audioSourceScript"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    type: cc.AudioSource,
                    default: null
                }
            },
            start: function() {
                this.audio2 = this.node.getComponent(cc.AudioSource),
                1 == volumeControl ? this.audio2.mute = !1 : this.audio2.mute = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    audiobuttonPic: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "dff544UIsRDU6tJEDuG514g", "audiobuttonPic"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ima1: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima2: {
                    type: cc.SpriteFrame,
                    default: null
                }
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    1 == volumeControl ? this.node.getChildByName("music111").getComponent("cc.Sprite").spriteFrame = this.ima1 : this.node.getChildByName("music111").getComponent("cc.Sprite").spriteFrame = this.ima2
                }, this)
            },
            update: function() {
                volumeControl
            }
        }),
        cc._RF.pop()
    }
    , {}],
    audio: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b1480PGiKBOeahTkvWLpc9J", "audio"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            start: function() {
                0 == musicPlay && (id = cc.audioEngine.play(this.audio, !0, 1),
                musicPlay = 1)
            },
            onLoad: function() {},
            set_volume: function() {
                console.log("volumeControl" + volumeControl),
                1 == volumeControl ? (cc.audioEngine.setVolume(id, 0),
                volumeControl = 0,
                console.log("volumeControl" + volumeControl)) : (cc.audioEngine.setVolume(id, 1),
                volumeControl = 1,
                console.log("volumeControl" + volumeControl))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    blockMove: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8d010KXVRlB5LtJUgZUJ/+S", "blockMove"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_MOVE, function(e) {
                    cc.director.getCollisionManager().enabled = !1,
                    this.opacity = 100;
                    var t = e.touch.getDelta();
                    this.x += t.x,
                    this.y += t.y
                }, this.node),
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    this.opacity = 255,
                    cc.director.getCollisionManager().enabled = !0
                }, this.node)
            },
            update: function(e) {}
        }),
        cc._RF.pop()
    }
    , {}],
    buttonsaler2: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e8f4c83z79Bj6z6BKHsTazg", "buttonsaler2"),
        cc.Class({
            extends: cc.Component,
            properties: {
                pressedScale: 1,
                transDuration: .1
            },
            onLoad: function() {
                var e = this.node.scale
                  , t = cc.scaleTo(this.transDuration, this.pressedScale);
                cc.scaleTo(this.transDuration, e);
                this.node.on("touchstart", function(e) {
                    this.stopAllActions(),
                    this.runAction(t)
                }, this.node)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    buttonsaler: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a37aaM42qhG3a7G1l8fJ+tD", "buttonsaler"),
        cc.Class({
            extends: cc.Component,
            properties: {
                pressedScale: 1,
                transDuration: .1
            },
            onLoad: function() {
                var e = this.node.scale
                  , t = cc.scaleTo(this.transDuration, this.pressedScale)
                  , o = cc.scaleTo(this.transDuration, e);
                function n(e) {
                    this.stopAllActions(),
                    this.runAction(o)
                }
                this.node.on("touchstart", function(e) {
                    this.stopAllActions(),
                    this.runAction(t)
                }, this.node),
                this.node.on("touchend", n, this.node),
                this.node.on("touchcancel", n, this.node)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    cheat: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "7acfdhs8L1Ne6J6rYK2hkiW", "cheat");
        var n = 0;
        cc.Class({
            extends: cc.Component,
            properties: {
                touchTime: 0
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    n += 1,
                    cc.log(n)
                }, this)
            },
            update: function() {
                this.eggSpawn()
            },
            eggSpawn: function() {
                n == this.touchTime && (levelControl1 = 1,
                levelControl2 = 1,
                levelControl3 = 1,
                levelControl4 = 1,
                levelControl5 = 1,
                levelControl6 = 1,
                levelControl7 = 1,
                levelControl8 = 1,
                levelControl9 = 1,
                levelControl10 = 1,
                levelControl11 = 1,
                levelControl12 = 1,
                levelControl13 = 1,
                levelControl14 = 1,
                levelControl15 = 1,
                cc.sys.localStorage.setItem("Control1", levelControl1),
                cc.sys.localStorage.setItem("Control2", levelControl2),
                cc.sys.localStorage.setItem("Control3", levelControl3),
                cc.sys.localStorage.setItem("Control4", levelControl4),
                cc.sys.localStorage.setItem("Control5", levelControl5),
                cc.sys.localStorage.setItem("Control6", levelControl6),
                cc.sys.localStorage.setItem("Control7", levelControl7),
                cc.sys.localStorage.setItem("Control8", levelControl8),
                cc.sys.localStorage.setItem("Control9", levelControl9),
                cc.sys.localStorage.setItem("Control10", levelControl10),
                cc.sys.localStorage.setItem("Control11", levelControl11),
                cc.sys.localStorage.setItem("Control12", levelControl12),
                cc.sys.localStorage.setItem("Control13", levelControl13),
                cc.sys.localStorage.setItem("Control14", levelControl14),
                cc.sys.localStorage.setItem("Control15", levelControl15),
                n = 0,
                cc.log("success"))
            }
        }),
        cc._RF.pop()
    }
    , {}],
    closePrefab: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "9dcb47gwTtNIrw33OcHFn/l", "closePrefab"),
        cc.Class({
            extends: cc.Component,
            properties: {
                closeSpeed: .3
            },
            start: function() {
                this.closePrefab()
            },
            closePrefab: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function(e, t) {
                    this.node.scale = 1;
                    var o = cc.scaleTo(this.closeSpeed, 0)
                      , n = cc.callFunc(function() {
                        this.node.destroy()
                    }
                    .bind(this))
                      , c = cc.sequence([o, n]);
                    this.node.runAction(c)
                }, this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "delayPrefab ": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bb5bfNGKNhCtKt2jxN5QFd+", "delayPrefab "),
        cc.Class({
            extends: cc.Component,
            properties: {
                delayScale: 0,
                delayStop: 1
            },
            onLoad: function() {
                var e = cc.delayTime(1);
                this.node.scale = 0;
                var t = cc.scaleTo(this.delayScale, 1)
                  , o = cc.sequence([t, e]);
                this.scheduleOnce(function() {
                    this.node.runAction(o)
                }, this.delayStop)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    difficultControl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3e54cEPo81JYK7UTFS0Z5bR", "difficultControl"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ima1: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima2: {
                    type: cc.SpriteFrame,
                    default: null
                }
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    0 == difficultControl ? this.node.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.ima1 : this.node.getChildByName("Background").getComponent("cc.Sprite").spriteFrame = this.ima2
                }, this)
            },
            update: function() {
                difficultControl
            },
            difficultControl: function(e) {
                function t() {
                    return e.apply(this, arguments)
                }
                return t.toString = function() {
                    return e.toString()
                }
                ,
                t
            }(function() {
                0 == difficultControl ? difficultControl = 1 : 1 == difficultControl && (difficultControl = 0)
            })
        }),
        cc._RF.pop()
    }
    , {}],
    eggcontrol: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d3e72Nd9QRLE7k9BkmWq9vZ", "eggcontrol"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onLoad: function() {
                0 == levelControl15 && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    index: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cb730DYbvdCqIo3jL/FVG2r", "index"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    load: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a8c78Eykz1GAJ6KP39CScDq", "load"),
        cc.Class({
            extends: cc.Component,
            properties: {
                label: cc.Label
            },
            onProgress: function(e, t, o) {
                console.log("jindu ----:" + e + " : " + t),
                this.label.string = "\u52a0\u8f7d\u4e2d...." + +Math.floor(e / t * 100) + "%"
            },
			onLoad:function(){
				
			},
            start: function() {
                cc.director.preloadScene("mainScene", this.onProgress.bind(this), function() {
                    console.log("load ok :mainScene"),
                    cc.director.loadScene("mainScene")
                })
            }
        }),
        cc._RF.pop()
    }
    , {}],
    one: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "321b3nEjpVEBpluCgSk7GZx", "one"),
        cc.Class({
            extends: cc.Component,
            properties: {
                audio: {
                    default: null,
                    type: cc.AudioClip
                }
            },
            start: function() {},
            onLoad: function() {
                this.current = cc.audioEngine.play(this.audio, !1, 1)
            },
            onDestroy: function() {
                cc.audioEngine.stop(this.current)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    openAndClose: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "63612t0IbFPa4qBTej7BPPs", "openAndClose"),
        cc.Class({
            extends: cc.Component,
            properties: {
                dealay_time: 5
            },
            onLoad: function() {
                this.node.scale = 0;
                var e = cc.scaleTo(.3, 1)
                  , t = cc.delayTime(this.dealay_time)
                  , o = cc.scaleTo(.3, 0)
                  , n = cc.callFunc(function() {
                    this.node.removeFromParent()
                }
                .bind(this))
                  , c = cc.sequence([e, t, o, n]);
                this.node.runAction(c)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "polyglot.min": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e26fd9yy65A4q3/JkpVnFYg", "polyglot.min");
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        (function(e, c) {
            "function" == typeof define && define.amd ? define([], function() {
                return c(e)
            }) : "object" == (void 0 === o ? "undefined" : n(o)) ? t.exports = c(e) : e.Polyglot = c(e)
        }
        )(void 0, function(e) {
            function t(e) {
                e = e || {},
                this.phrases = {},
                this.extend(e.phrases || {}),
                this.currentLocale = e.locale || "en",
                this.allowMissing = !!e.allowMissing,
                this.warn = e.warn || a
            }
            function o(e) {
                var t, o, n, c = {};
                for (t in e)
                    if (e.hasOwnProperty(t))
                        for (n in o = e[t])
                            c[o[n]] = t;
                return c
            }
            function c(e) {
                return e.replace(/^\s+|\s+$/g, "")
            }
            function s(e, t, o) {
                var n, s;
                return null != o && e ? n = c((s = e.split(p))[l(t, o)] || s[0]) : n = e,
                n
            }
            function i(e) {
                var t = o(d);
                return t[e] || t.en
            }
            function l(e, t) {
                return C[i(e)](t)
            }
            function r(e, t) {
                for (var o in t)
                    "_" !== o && t.hasOwnProperty(o) && (e = e.replace(new RegExp("%\\{" + o + "\\}","g"), t[o]));
                return e
            }
            function a(t) {
                e.console && e.console.warn && e.console.warn("WARNING: " + t)
            }
            function u(e) {
                var t = {};
                for (var o in e)
                    t[o] = e[o];
                return t
            }
            t.VERSION = "0.4.3",
            t.prototype.locale = function(e) {
                return e && (this.currentLocale = e),
                this.currentLocale
            }
            ,
            t.prototype.extend = function(e, t) {
                var o;
                for (var c in e)
                    e.hasOwnProperty(c) && (o = e[c],
                    t && (c = t + "." + c),
                    "object" == (void 0 === o ? "undefined" : n(o)) ? this.extend(o, c) : this.phrases[c] = o)
            }
            ,
            t.prototype.clear = function() {
                this.phrases = {}
            }
            ,
            t.prototype.replace = function(e) {
                this.clear(),
                this.extend(e)
            }
            ,
            t.prototype.t = function(e, t) {
                var o, n;
                return "number" == typeof (t = null == t ? {} : t) && (t = {
                    smart_count: t
                }),
                "string" == typeof this.phrases[e] ? o = this.phrases[e] : "string" == typeof t._ ? o = t._ : this.allowMissing ? o = e : (this.warn('Missing translation for key: "' + e + '"'),
                n = e),
                "string" == typeof o && (t = u(t),
                n = r(n = s(o, this.currentLocale, t.smart_count), t)),
                n
            }
            ,
            t.prototype.has = function(e) {
                return e in this.phrases
            }
            ;
            var p = "||||"
              , C = {
                chinese: function(e) {
                    return 0
                },
                german: function(e) {
                    return 1 !== e ? 1 : 0
                },
                french: function(e) {
                    return e > 1 ? 1 : 0
                },
                russian: function(e) {
                    return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                czech: function(e) {
                    return 1 === e ? 0 : e >= 2 && e <= 4 ? 1 : 2
                },
                polish: function(e) {
                    return 1 === e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
                },
                icelandic: function(e) {
                    return e % 10 != 1 || e % 100 == 11 ? 1 : 0
                }
            }
              , d = {
                chinese: ["fa", "id", "ja", "ko", "lo", "ms", "th", "tr", "zh"],
                german: ["da", "de", "en", "es", "fi", "el", "he", "hu", "it", "nl", "no", "pt", "sv"],
                french: ["fr", "tl", "pt-br"],
                russian: ["hr", "ru"],
                czech: ["cs"],
                polish: ["pl"],
                icelandic: ["is"]
            };
            return t
        }),
        cc._RF.pop()
    }
    , {}],
    reloading: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "45350hV7RdHvLxkHIPbIBf7", "reloading"),
        cc.Class({
            extends: cc.Component,
            properties: {
                blockPrefab: cc.Prefab
            },
            onLoad: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    var t = e.getLocation();
                    cc.log(t),
                    this.node.destroy();
                    var o = cc.director.getScene()
                      , n = cc.instantiate(this.blockPrefab);
                    n.parent = o,
                    n.setPosition(t),
                    ScrollviewControl = 0
                }, this),
                this.node.on(cc.Node.EventType.TOUCH_START, function(e) {
                    ScrollviewControl = 1
                }, this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    savedata: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "6b6bcjB645OrYyB8qvEvXLn", "savedata"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            start: function() {},
            onLoad: function() {
                null != cc.sys.localStorage.getItem("Control1") ? (levelControl1 = cc.sys.localStorage.getItem("Control1"),
                cc.sys.localStorage.setItem("Control1", levelControl1)) : cc.sys.localStorage.setItem("Control1", levelControl1),
                null != cc.sys.localStorage.getItem("Control2") ? (levelControl2 = cc.sys.localStorage.getItem("Control2"),
                cc.sys.localStorage.setItem("Control2", levelControl2)) : cc.sys.localStorage.setItem("Control2", levelControl2),
                null != cc.sys.localStorage.getItem("Control3") ? (levelControl3 = cc.sys.localStorage.getItem("Control3"),
                cc.sys.localStorage.setItem("Control3", levelControl3)) : cc.sys.localStorage.setItem("Control3", levelControl3),
                null != cc.sys.localStorage.getItem("Control4") ? (levelControl4 = cc.sys.localStorage.getItem("Control4"),
                cc.sys.localStorage.setItem("Control4", levelControl4)) : cc.sys.localStorage.setItem("Control4", levelControl4),
                null != cc.sys.localStorage.getItem("Control5") ? (levelControl5 = cc.sys.localStorage.getItem("Control5"),
                cc.sys.localStorage.setItem("Control5", levelControl5)) : cc.sys.localStorage.setItem("Control5", levelControl5),
                null != cc.sys.localStorage.getItem("Control6") ? (levelControl6 = cc.sys.localStorage.getItem("Control6"),
                cc.sys.localStorage.setItem("Control6", levelControl6)) : cc.sys.localStorage.setItem("Control6", levelControl6),
                null != cc.sys.localStorage.getItem("Control7") ? (levelControl7 = cc.sys.localStorage.getItem("Control7"),
                cc.sys.localStorage.setItem("Control7", levelControl7)) : cc.sys.localStorage.setItem("Control7", levelControl7),
                null != cc.sys.localStorage.getItem("Control8") ? (levelControl8 = cc.sys.localStorage.getItem("Control8"),
                cc.sys.localStorage.setItem("Control8", levelControl8)) : cc.sys.localStorage.setItem("Control8", levelControl8),
                null != cc.sys.localStorage.getItem("Control9") ? (levelControl9 = cc.sys.localStorage.getItem("Control9"),
                cc.sys.localStorage.setItem("Control9", levelControl9)) : cc.sys.localStorage.setItem("Control9", levelControl9),
                null != cc.sys.localStorage.getItem("Control10") ? (levelControl10 = cc.sys.localStorage.getItem("Control10"),
                cc.sys.localStorage.setItem("Control10", levelControl10)) : cc.sys.localStorage.setItem("Control10", levelControl10),
                null != cc.sys.localStorage.getItem("Control11") ? (levelControl11 = cc.sys.localStorage.getItem("Control11"),
                cc.sys.localStorage.setItem("Control11", levelControl11)) : cc.sys.localStorage.setItem("Control11", levelControl11),
                null != cc.sys.localStorage.getItem("Control12") ? (levelControl12 = cc.sys.localStorage.getItem("Control12"),
                cc.sys.localStorage.setItem("Control12", levelControl12)) : cc.sys.localStorage.setItem("Control12", levelControl12),
                null != cc.sys.localStorage.getItem("Control13") ? (levelControl13 = cc.sys.localStorage.getItem("Control13"),
                cc.sys.localStorage.setItem("Control13", levelControl13)) : cc.sys.localStorage.setItem("Control13", levelControl13),
                null != cc.sys.localStorage.getItem("Control14") ? (levelControl14 = cc.sys.localStorage.getItem("Control14"),
                cc.sys.localStorage.setItem("Control14", levelControl14)) : cc.sys.localStorage.setItem("Control14", levelControl14),
                null != cc.sys.localStorage.getItem("Control15") ? (levelControl15 = cc.sys.localStorage.getItem("Control15"),
                cc.sys.localStorage.setItem("Control15", levelControl15)) : cc.sys.localStorage.setItem("Control15", levelControl15)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    scrollviewControl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e2c492dcqVLe7ogmdnyVQL6", "scrollviewControl"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            update: function() {
                ScrollviewControl,
                1 == ScrollviewControl ? this.node.getComponent(cc.ScrollView).horizontal = !1 : this.node.getComponent(cc.ScrollView).horizontal = !0
            }
        }),
        cc._RF.pop()
    }
    , {}],
    settingLayer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "550afVEO9tKjYT2YdlzJbS6", "settingLayer"),
        cc.Class({
            extends: cc.Component,
            properties: {
                layer: 0
            },
            onLoad: function() {
                this.node.zIndex = this.layer
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    settingPanel: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c9504XdvKRMFJz3nhtYLHRP", "settingPanel"),
        cc.Class({
            extends: cc.Component,
            properties: {
                _isShow: !1,
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                speed: .2
            },
            showSearchBlock: function() {
                this._isShow = !this._isShow;
                var e = null;
                e = this._isShow ? cc.moveBy(this.speed, cc.v2(this.x1, this.y1)) : cc.moveBy(this.speed, cc.v2(this.x2, this.y2)),
                this.node.runAction(e)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "shakebuttonPic ": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a6d71ifFyZIsovfUSXpJzfn", "shakebuttonPic "),
        cc.Class({
            extends: cc.Component,
            properties: {
                ima1: {
                    type: cc.SpriteFrame,
                    default: null
                },
                ima2: {
                    type: cc.SpriteFrame,
                    default: null
                }
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function() {
                    0 == shakeControl ? this.node.getChildByName("shake1").getComponent("cc.Sprite").spriteFrame = this.ima1 : this.node.getChildByName("shake1").getComponent("cc.Sprite").spriteFrame = this.ima2
                }, this)
            },
            update: function() {
                shakeControl
            }
        }),
        cc._RF.pop()
    }
    , {}],
    share: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2c4151nYQtLwIjn/SsI70FJ", "share"),
        cc.Class({
            extends: cc.Component,
            properties: {},
            onLoad: function() {
                cc.sys.platform === cc.sys.WECHAT_GAME && (wx.showShareMenu(),
                wx.onShareAppMessage(function(e) {
                    return {
                        title: "\u5feb\u6765\u5e72\u6211\u4e00\u8d77\u4f53\u9a8c\u526a\u7eb8\u6e38\u620f\u7684\u8239\u65b0\u7248\u672c\u5427\uff01",
                        imageUrl: "https://papercuts-1259306033.cos.ap-chengdu.myqcloud.com/share.png",
                        success: function(e) {
                            console.log("\u8f6c\u53d1\u6210\u529f!!!")
                        },
                        fail: function(e) {
                            console.log("\u8f6c\u53d1\u5931\u8d25!!!")
                        }
                    }
                }))
            },
            start: function() {}
        }),
        cc._RF.pop()
    }
    , {}],
    showLiHui: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "66a5e3uuidAAr/VBl9BNgBe", "showLiHui"),
        cc.Class({
            extends: cc.Component,
            properties: {
                x: 0,
                y: 0,
                speed: .2
            },
            showBlock: function() {
                var e;
                e = cc.moveTo(this.speed, cc.v2(this.x, this.y)),
                this.node.runAction(e)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    showZheZhao: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "8d748LNurBMuJNOvw2hwduX", "showZheZhao"),
        cc.Class({
            extends: cc.Component,
            properties: {
                x: 0,
                y: 0,
                speed: .2
            },
            showBlock: function() {
                var e;
                e = cc.moveTo(this.speed, cc.v2(this.x, this.y)),
                this.node.runAction(e)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    show: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b02d0lU1RNFG5+gs7v4xqXw", "show"),
        cc.Class({
            extends: cc.Component,
            properties: {
                clipName: ""
            },
            onLoad: function() {
                var e = [levelControl1, levelControl2, levelControl3, levelControl4, levelControl5, levelControl6, levelControl7, levelControl8, levelControl9, levelControl10, levelControl11, levelControl12, levelControl13, levelControl14, levelControl15]
                  , t = 0;
                for (var o in e)
                    1 == e[o] && (t += 1);
                this.node.active = 15 == t,
                t = 0
            },
            play: function() {
                this.getComponent(cc.Animation).play(this.clipName)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    spawn: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f417232b5RP5Kl+LdFIXVG2", "spawn"),
        cc.Class({
            extends: cc.Component,
            properties: {
                blockPrefab: cc.Prefab,
                xPosition: 0,
                yPosition: 0
            },
            spawnBlock: function() {
                var e = cc.director.getScene()
                  , t = cc.instantiate(this.blockPrefab);
                t.parent = e,
                t.setPosition(this.xPosition, this.yPosition)
            },
            start: function() {
                this.node.on(cc.Node.EventType.TOUCH_END, function(e) {
                    this.spawnBlock()
                }, this)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 000": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e03c4IAsslK67tkkdw2MUdC", "suipianControl - 000"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl1 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 001": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a7a90KROAtGtLG1F9olum5I", "suipianControl - 001"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl2 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 002": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2abc9jYRdRHf6hU7GrbFw44", "suipianControl - 002"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl3 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 003": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "eb43ashVzlFz7X1hm51UE5h", "suipianControl - 003"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl4 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 004": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "72dc2aMYjNI7aelGZl9ZWp8", "suipianControl - 004"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl5 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 005": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "23ec8DEKWZD77HiDllZCHfC", "suipianControl - 005"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl6 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 006": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ae79efLXTNLRboqI6sA+aoX", "suipianControl - 006"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl7 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 007": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f2a28bvRsdDHrKJEwWnRala", "suipianControl - 007"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl8 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 008": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3b045pxDI9ArYzxFFKCwj/Y", "suipianControl - 008"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl9 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 009": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bc45dp6lZFD0aCc3vZBl2Uf", "suipianControl - 009"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl10 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 010": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "aec5ckzERRAmqkd4+fhDv9K", "suipianControl - 010"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl11 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 011": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "a9d64YZoDFPv5U2Kh8UhqNF", "suipianControl - 011"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl12 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 012": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "ed47eHstmJEiLS1CUN+g2WX", "suipianControl - 012"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl13 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 013": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "257f1fzL65E26AWN27YHnGY", "suipianControl - 013"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl14 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}],
    "suipianControl - 014": [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cc69erA2qBBzpJ+O5bHNde4", "suipianControl - 014"),
        cc.Class({
            extends: cc.Component,
            properties: {
                ControlNumber: 0
            },
            start: function() {
                levelControl15 == this.ControlNumber && (this.node.active = !1)
            }
        }),
        cc._RF.pop()
    }
    , {}]
}, {}, ["LanguageData", "LocalizedLabel", "LocalizedSprite", "SpriteFrameSet", "polyglot.min", "BackgroundAdapter", "CloseToBorderComponent", "ContentAdapter", "MultiResoultionCompat", "BlockCollider", "CourseControl", "InteractiveContral - 001", "InteractiveContral - 002", "InteractiveContral - 003", "InteractiveContral - 004", "InteractiveContral - 005", "InteractiveContral - 006", "InteractiveContral - 007", "InteractiveContral - 008", "InteractiveContral - 009", "InteractiveContral - 010", "InteractiveContral - 011", "InteractiveContral - 012", "InteractiveContral - 013", "InteractiveContral - 014", "InteractiveContral - 015", "NodeCollider", "PreviewOriginalPic", "RICHTEXT", "Scene1", "SceneMain1", "SceneMain2", "Share_btn", "StopRotation", "SuccessDetection", "SwitchScene", "XG-001", "XG-002", "XG-003", "XG-004", "XG-005", "XG-006", "XG-007", "XG-008", "XG-009", "XG-010", "XG-011", "XG-012", "XG-013", "XG-014", "XG-015", "XG-016", "anim", "audio", "audioScenePic", "audioSourceScript", "audiobuttonPic", "blockMove", "buttonsaler", "buttonsaler2", "cheat", "closePrefab", "delayPrefab ", "difficultControl", "eggcontrol", "index", "load", "one", "openAndClose", "reloading", "savedata", "scrollviewControl", "settingLayer", "settingPanel", "shakebuttonPic ", "share", "show", "showLiHui", "showZheZhao", "spawn", "suipianControl - 000", "suipianControl - 001", "suipianControl - 002", "suipianControl - 003", "suipianControl - 004", "suipianControl - 005", "suipianControl - 006", "suipianControl - 007", "suipianControl - 008", "suipianControl - 009", "suipianControl - 010", "suipianControl - 011", "suipianControl - 012", "suipianControl - 013", "suipianControl - 014"]);
