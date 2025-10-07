/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
})(this, (function() {
  "use strict";
  const t = "transitionend", e = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? i2.trim() : null;
    }
    return e2;
  }, i = (t2) => {
    const i2 = e(t2);
    return i2 && document.querySelector(i2) ? i2 : null;
  }, n = (t2) => {
    const i2 = e(t2);
    return i2 ? document.querySelector(i2) : null;
  }, s = (e2) => {
    e2.dispatchEvent(new Event(t));
  }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(t2) : null, a = (t2, e2, i2) => {
    Object.keys(i2).forEach(((n2) => {
      const s2 = i2[n2], r2 = e2[n2], a2 = r2 && o(r2) ? "element" : null == (l2 = r2) ? `${l2}` : {}.toString.call(l2).match(/\s([a-z]+)/i)[1].toLowerCase();
      var l2;
      if (!new RegExp(s2).test(a2)) throw new TypeError(`${t2.toUpperCase()}: Option "${n2}" provided type "${a2}" but expected type "${s2}".`);
    }));
  }, l = (t2) => !(!o(t2) || 0 === t2.getClientRects().length) && "visible" === getComputedStyle(t2).getPropertyValue("visibility"), c = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), h = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? h(t2.parentNode) : null;
  }, d = () => {
  }, u = (t2) => {
    t2.offsetHeight;
  }, f = () => {
    const { jQuery: t2 } = window;
    return t2 && !document.body.hasAttribute("data-bs-no-jquery") ? t2 : null;
  }, p = [], m = () => "rtl" === document.documentElement.dir, g = (t2) => {
    var e2;
    e2 = () => {
      const e3 = f();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", (() => {
      p.forEach(((t3) => t3()));
    })), p.push(e2)) : e2();
  }, _ = (t2) => {
    "function" == typeof t2 && t2();
  }, b = (e2, i2, n2 = true) => {
    if (!n2) return void _(e2);
    const o2 = ((t2) => {
      if (!t2) return 0;
      let { transitionDuration: e3, transitionDelay: i3 } = window.getComputedStyle(t2);
      const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i3);
      return n3 || s2 ? (e3 = e3.split(",")[0], i3 = i3.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i3))) : 0;
    })(i2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === i2 && (r2 = true, i2.removeEventListener(t, a2), _(e2));
    };
    i2.addEventListener(t, a2), setTimeout((() => {
      r2 || s(i2);
    }), o2);
  }, v = (t2, e2, i2, n2) => {
    let s2 = t2.indexOf(e2);
    if (-1 === s2) return t2[!i2 && n2 ? t2.length - 1 : 0];
    const o2 = t2.length;
    return s2 += i2 ? 1 : -1, n2 && (s2 = (s2 + o2) % o2), t2[Math.max(0, Math.min(s2, o2 - 1))];
  }, y = /[^.]*(?=\..*)\.|.*/, w = /\..*/, E = /::\d+$/, A = {};
  let T = 1;
  const O = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /^(mouseenter|mouseleave)/i, k = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function L(t2, e2) {
    return e2 && `${e2}::${T++}` || t2.uidEvent || T++;
  }
  function x(t2) {
    const e2 = L(t2);
    return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
  }
  function D(t2, e2, i2 = null) {
    const n2 = Object.keys(t2);
    for (let s2 = 0, o2 = n2.length; s2 < o2; s2++) {
      const o3 = t2[n2[s2]];
      if (o3.originalHandler === e2 && o3.delegationSelector === i2) return o3;
    }
    return null;
  }
  function S(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2;
    let o2 = P(t2);
    return k.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function N(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    if (i2 || (i2 = n2, n2 = null), C.test(e2)) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      n2 ? n2 = t3(n2) : i2 = t3(i2);
    }
    const [o2, r2, a2] = S(e2, i2, n2), l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = D(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = L(r2, e2.replace(y, "")), u2 = o2 ? /* @__PURE__ */ (function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (let a3 = o3.length; a3--; ) if (o3[a3] === r3) return s3.delegateTarget = r3, n3.oneOff && j.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
        return null;
      };
    })(t2, i2, n2) : /* @__PURE__ */ (function(t3, e3) {
      return function i3(n3) {
        return n3.delegateTarget = t3, i3.oneOff && j.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    })(t2, i2);
    u2.delegationSelector = o2 ? i2 : null, u2.originalHandler = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function I(t2, e2, i2, n2, s2) {
    const o2 = D(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function P(t2) {
    return t2 = t2.replace(w, ""), O[t2] || t2;
  }
  const j = { on(t2, e2, i2, n2) {
    N(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    N(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = S(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = e2.startsWith(".");
    if (void 0 !== o2) {
      if (!l2 || !l2[r2]) return;
      return void I(t2, l2, r2, o2, s2 ? i2 : null);
    }
    c2 && Object.keys(l2).forEach(((i3) => {
      !(function(t3, e3, i4, n3) {
        const s3 = e3[i4] || {};
        Object.keys(s3).forEach(((o3) => {
          if (o3.includes(n3)) {
            const n4 = s3[o3];
            I(t3, e3, i4, n4.originalHandler, n4.delegationSelector);
          }
        }));
      })(t2, l2, i3, e2.slice(1));
    }));
    const h2 = l2[r2] || {};
    Object.keys(h2).forEach(((i3) => {
      const n3 = i3.replace(E, "");
      if (!a2 || e2.includes(n3)) {
        const e3 = h2[i3];
        I(t2, l2, r2, e3.originalHandler, e3.delegationSelector);
      }
    }));
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = f(), s2 = P(e2), o2 = e2 !== s2, r2 = k.has(s2);
    let a2, l2 = true, c2 = true, h2 = false, d2 = null;
    return o2 && n2 && (a2 = n2.Event(e2, i2), n2(t2).trigger(a2), l2 = !a2.isPropagationStopped(), c2 = !a2.isImmediatePropagationStopped(), h2 = a2.isDefaultPrevented()), r2 ? (d2 = document.createEvent("HTMLEvents"), d2.initEvent(s2, l2, true)) : d2 = new CustomEvent(e2, { bubbles: l2, cancelable: true }), void 0 !== i2 && Object.keys(i2).forEach(((t3) => {
      Object.defineProperty(d2, t3, { get: () => i2[t3] });
    })), h2 && d2.preventDefault(), c2 && t2.dispatchEvent(d2), d2.defaultPrevented && void 0 !== a2 && a2.preventDefault(), d2;
  } }, M = /* @__PURE__ */ new Map(), H = { set(t2, e2, i2) {
    M.has(t2) || M.set(t2, /* @__PURE__ */ new Map());
    const n2 = M.get(t2);
    n2.has(e2) || 0 === n2.size ? n2.set(e2, i2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n2.keys())[0]}.`);
  }, get: (t2, e2) => M.has(t2) && M.get(t2).get(e2) || null, remove(t2, e2) {
    if (!M.has(t2)) return;
    const i2 = M.get(t2);
    i2.delete(e2), 0 === i2.size && M.delete(t2);
  } };
  class B {
    constructor(t2) {
      (t2 = r(t2)) && (this._element = t2, H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(((t2) => {
        this[t2] = null;
      }));
    }
    _queueCallback(t2, e2, i2 = true) {
      b(t2, e2, i2);
    }
    static getInstance(t2) {
      return H.get(r(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.1.3";
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const R = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, s2 = t2.NAME;
    j.on(document, i2, `[data-bs-dismiss="${s2}"]`, (function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), c(this)) return;
      const o2 = n(this) || this.closest(`.${s2}`);
      t2.getOrCreateInstance(o2)[e2]();
    }));
  };
  class W extends B {
    static get NAME() {
      return "alert";
    }
    close() {
      if (j.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback((() => this._destroyElement()), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), j.trigger(this._element, "closed.bs.alert"), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = W.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      }));
    }
  }
  R(W, "close"), g(W);
  const $ = '[data-bs-toggle="button"]';
  class z extends B {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = z.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      }));
    }
  }
  function q(t2) {
    return "true" === t2 || "false" !== t2 && (t2 === Number(t2).toString() ? Number(t2) : "" === t2 || "null" === t2 ? null : t2);
  }
  function F(t2) {
    return t2.replace(/[A-Z]/g, ((t3) => `-${t3.toLowerCase()}`));
  }
  j.on(document, "click.bs.button.data-api", $, ((t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest($);
    z.getOrCreateInstance(e2).toggle();
  })), g(z);
  const U = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${F(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${F(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {};
    return Object.keys(t2.dataset).filter(((t3) => t3.startsWith("bs"))).forEach(((i2) => {
      let n2 = i2.replace(/^bs/, "");
      n2 = n2.charAt(0).toLowerCase() + n2.slice(1, n2.length), e2[n2] = q(t2.dataset[i2]);
    })), e2;
  }, getDataAttribute: (t2, e2) => q(t2.getAttribute(`data-bs-${F(e2)}`)), offset(t2) {
    const e2 = t2.getBoundingClientRect();
    return { top: e2.top + window.pageYOffset, left: e2.left + window.pageXOffset };
  }, position: (t2) => ({ top: t2.offsetTop, left: t2.offsetLeft }) }, V = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter(((t3) => t3.matches(e2))), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode;
    for (; n2 && n2.nodeType === Node.ELEMENT_NODE && 3 !== n2.nodeType; ) n2.matches(e2) && i2.push(n2), n2 = n2.parentNode;
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(((t3) => `${t3}:not([tabindex^="-"])`)).join(", ");
    return this.find(e2, t2).filter(((t3) => !c(t3) && l(t3)));
  } }, K = "carousel", X = { interval: 5e3, keyboard: true, slide: false, pause: "hover", wrap: true, touch: true }, Y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" }, Q = "next", G = "prev", Z = "left", J = "right", tt = { ArrowLeft: J, ArrowRight: Z }, et = "slid.bs.carousel", it = "active", nt = ".active.carousel-item";
  class st extends B {
    constructor(t2, e2) {
      super(t2), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = false, this._isSliding = false, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e2), this._indicatorsElement = V.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners();
    }
    static get Default() {
      return X;
    }
    static get NAME() {
      return K;
    }
    next() {
      this._slide(Q);
    }
    nextWhenVisible() {
      !document.hidden && l(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause(t2) {
      t2 || (this._isPaused = true), V.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (s(this._element), this.cycle(true)), clearInterval(this._interval), this._interval = null;
    }
    cycle(t2) {
      t2 || (this._isPaused = false), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
    to(t2) {
      this._activeElement = V.findOne(nt, this._element);
      const e2 = this._getItemIndex(this._activeElement);
      if (t2 > this._items.length - 1 || t2 < 0) return;
      if (this._isSliding) return void j.one(this._element, et, (() => this.to(t2)));
      if (e2 === t2) return this.pause(), void this.cycle();
      const i2 = t2 > e2 ? Q : G;
      this._slide(i2, this._items[t2]);
    }
    _getConfig(t2) {
      return t2 = { ...X, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(K, t2, Y), t2;
    }
    _handleSwipe() {
      const t2 = Math.abs(this.touchDeltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this.touchDeltaX;
      this.touchDeltaX = 0, e2 && this._slide(e2 > 0 ? J : Z);
    }
    _addEventListeners() {
      this._config.keyboard && j.on(this._element, "keydown.bs.carousel", ((t2) => this._keydown(t2))), "hover" === this._config.pause && (j.on(this._element, "mouseenter.bs.carousel", ((t2) => this.pause(t2))), j.on(this._element, "mouseleave.bs.carousel", ((t2) => this.cycle(t2)))), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      const t2 = (t3) => this._pointerEvent && ("pen" === t3.pointerType || "touch" === t3.pointerType), e2 = (e3) => {
        t2(e3) ? this.touchStartX = e3.clientX : this._pointerEvent || (this.touchStartX = e3.touches[0].clientX);
      }, i2 = (t3) => {
        this.touchDeltaX = t3.touches && t3.touches.length > 1 ? 0 : t3.touches[0].clientX - this.touchStartX;
      }, n2 = (e3) => {
        t2(e3) && (this.touchDeltaX = e3.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(((t3) => this.cycle(t3)), 500 + this._config.interval));
      };
      V.find(".carousel-item img", this._element).forEach(((t3) => {
        j.on(t3, "dragstart.bs.carousel", ((t4) => t4.preventDefault()));
      })), this._pointerEvent ? (j.on(this._element, "pointerdown.bs.carousel", ((t3) => e2(t3))), j.on(this._element, "pointerup.bs.carousel", ((t3) => n2(t3))), this._element.classList.add("pointer-event")) : (j.on(this._element, "touchstart.bs.carousel", ((t3) => e2(t3))), j.on(this._element, "touchmove.bs.carousel", ((t3) => i2(t3))), j.on(this._element, "touchend.bs.carousel", ((t3) => n2(t3))));
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = tt[t2.key];
      e2 && (t2.preventDefault(), this._slide(e2));
    }
    _getItemIndex(t2) {
      return this._items = t2 && t2.parentNode ? V.find(".carousel-item", t2.parentNode) : [], this._items.indexOf(t2);
    }
    _getItemByOrder(t2, e2) {
      const i2 = t2 === Q;
      return v(this._items, e2, i2, this._config.wrap);
    }
    _triggerSlideEvent(t2, e2) {
      const i2 = this._getItemIndex(t2), n2 = this._getItemIndex(V.findOne(nt, this._element));
      return j.trigger(this._element, "slide.bs.carousel", { relatedTarget: t2, direction: e2, from: n2, to: i2 });
    }
    _setActiveIndicatorElement(t2) {
      if (this._indicatorsElement) {
        const e2 = V.findOne(".active", this._indicatorsElement);
        e2.classList.remove(it), e2.removeAttribute("aria-current");
        const i2 = V.find("[data-bs-target]", this._indicatorsElement);
        for (let e3 = 0; e3 < i2.length; e3++) if (Number.parseInt(i2[e3].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t2)) {
          i2[e3].classList.add(it), i2[e3].setAttribute("aria-current", "true");
          break;
        }
      }
    }
    _updateInterval() {
      const t2 = this._activeElement || V.findOne(nt, this._element);
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      e2 ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e2) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(t2, e2) {
      const i2 = this._directionToOrder(t2), n2 = V.findOne(nt, this._element), s2 = this._getItemIndex(n2), o2 = e2 || this._getItemByOrder(i2, n2), r2 = this._getItemIndex(o2), a2 = Boolean(this._interval), l2 = i2 === Q, c2 = l2 ? "carousel-item-start" : "carousel-item-end", h2 = l2 ? "carousel-item-next" : "carousel-item-prev", d2 = this._orderToDirection(i2);
      if (o2 && o2.classList.contains(it)) return void (this._isSliding = false);
      if (this._isSliding) return;
      if (this._triggerSlideEvent(o2, d2).defaultPrevented) return;
      if (!n2 || !o2) return;
      this._isSliding = true, a2 && this.pause(), this._setActiveIndicatorElement(o2), this._activeElement = o2;
      const f2 = () => {
        j.trigger(this._element, et, { relatedTarget: o2, direction: d2, from: s2, to: r2 });
      };
      if (this._element.classList.contains("slide")) {
        o2.classList.add(h2), u(o2), n2.classList.add(c2), o2.classList.add(c2);
        const t3 = () => {
          o2.classList.remove(c2, h2), o2.classList.add(it), n2.classList.remove(it, h2, c2), this._isSliding = false, setTimeout(f2, 0);
        };
        this._queueCallback(t3, n2, true);
      } else n2.classList.remove(it), o2.classList.add(it), this._isSliding = false, f2();
      a2 && this.cycle();
    }
    _directionToOrder(t2) {
      return [J, Z].includes(t2) ? m() ? t2 === Z ? G : Q : t2 === Z ? Q : G : t2;
    }
    _orderToDirection(t2) {
      return [Q, G].includes(t2) ? m() ? t2 === G ? Z : J : t2 === G ? J : Z : t2;
    }
    static carouselInterface(t2, e2) {
      const i2 = st.getOrCreateInstance(t2, e2);
      let { _config: n2 } = i2;
      "object" == typeof e2 && (n2 = { ...n2, ...e2 });
      const s2 = "string" == typeof e2 ? e2 : n2.slide;
      if ("number" == typeof e2) i2.to(e2);
      else if ("string" == typeof s2) {
        if (void 0 === i2[s2]) throw new TypeError(`No method named "${s2}"`);
        i2[s2]();
      } else n2.interval && n2.ride && (i2.pause(), i2.cycle());
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        st.carouselInterface(this, t2);
      }));
    }
    static dataApiClickHandler(t2) {
      const e2 = n(this);
      if (!e2 || !e2.classList.contains("carousel")) return;
      const i2 = { ...U.getDataAttributes(e2), ...U.getDataAttributes(this) }, s2 = this.getAttribute("data-bs-slide-to");
      s2 && (i2.interval = false), st.carouselInterface(e2, i2), s2 && st.getInstance(e2).to(s2), t2.preventDefault();
    }
  }
  j.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", st.dataApiClickHandler), j.on(window, "load.bs.carousel.data-api", (() => {
    const t2 = V.find('[data-bs-ride="carousel"]');
    for (let e2 = 0, i2 = t2.length; e2 < i2; e2++) st.carouselInterface(t2[e2], st.getInstance(t2[e2]));
  })), g(st);
  const ot = "collapse", rt = { toggle: true, parent: null }, at = { toggle: "boolean", parent: "(null|element)" }, lt = "show", ct = "collapse", ht = "collapsing", dt = "collapsed", ut = ":scope .collapse .collapse", ft = '[data-bs-toggle="collapse"]';
  class pt extends B {
    constructor(t2, e2) {
      super(t2), this._isTransitioning = false, this._config = this._getConfig(e2), this._triggerArray = [];
      const n2 = V.find(ft);
      for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) {
        const e4 = n2[t3], s2 = i(e4), o2 = V.find(s2).filter(((t4) => t4 === this._element));
        null !== s2 && o2.length && (this._selector = s2, this._triggerArray.push(e4));
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return rt;
    }
    static get NAME() {
      return ot;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2, e2 = [];
      if (this._config.parent) {
        const t3 = V.find(ut, this._config.parent);
        e2 = V.find(".collapse.show, .collapse.collapsing", this._config.parent).filter(((e3) => !t3.includes(e3)));
      }
      const i2 = V.findOne(this._selector);
      if (e2.length) {
        const n3 = e2.find(((t3) => i2 !== t3));
        if (t2 = n3 ? pt.getInstance(n3) : null, t2 && t2._isTransitioning) return;
      }
      if (j.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      e2.forEach(((e3) => {
        i2 !== e3 && pt.getOrCreateInstance(e3, { toggle: false }).hide(), t2 || H.set(e3, "bs.collapse", null);
      }));
      const n2 = this._getDimension();
      this._element.classList.remove(ct), this._element.classList.add(ht), this._element.style[n2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const s2 = `scroll${n2[0].toUpperCase() + n2.slice(1)}`;
      this._queueCallback((() => {
        this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct, lt), this._element.style[n2] = "", j.trigger(this._element, "shown.bs.collapse");
      }), this._element, true), this._element.style[n2] = `${this._element[s2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, u(this._element), this._element.classList.add(ht), this._element.classList.remove(ct, lt);
      const e2 = this._triggerArray.length;
      for (let t3 = 0; t3 < e2; t3++) {
        const e3 = this._triggerArray[t3], i2 = n(e3);
        i2 && !this._isShown(i2) && this._addAriaAndCollapsedClass([e3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback((() => {
        this._isTransitioning = false, this._element.classList.remove(ht), this._element.classList.add(ct), j.trigger(this._element, "hidden.bs.collapse");
      }), this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(lt);
    }
    _getConfig(t2) {
      return (t2 = { ...rt, ...U.getDataAttributes(this._element), ...t2 }).toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), a(ot, t2, at), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = V.find(ut, this._config.parent);
      V.find(ft, this._config.parent).filter(((e2) => !t2.includes(e2))).forEach(((t3) => {
        const e2 = n(t3);
        e2 && this._addAriaAndCollapsedClass([t3], this._isShown(e2));
      }));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      t2.length && t2.forEach(((t3) => {
        e2 ? t3.classList.remove(dt) : t3.classList.add(dt), t3.setAttribute("aria-expanded", e2);
      }));
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = {};
        "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false);
        const i2 = pt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      }));
    }
  }
  j.on(document, "click.bs.collapse.data-api", ft, (function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    const e2 = i(this);
    V.find(e2).forEach(((t3) => {
      pt.getOrCreateInstance(t3, { toggle: false }).toggle();
    }));
  })), g(pt);
  var mt = "top", gt = "bottom", _t = "right", bt = "left", vt = "auto", yt = [mt, gt, _t, bt], wt = "start", Et = "end", At = "clippingParents", Tt = "viewport", Ot = "popper", Ct = "reference", kt = yt.reduce((function(t2, e2) {
    return t2.concat([e2 + "-" + wt, e2 + "-" + Et]);
  }), []), Lt = [].concat(yt, [vt]).reduce((function(t2, e2) {
    return t2.concat([e2, e2 + "-" + wt, e2 + "-" + Et]);
  }), []), xt = "beforeRead", Dt = "read", St = "afterRead", Nt = "beforeMain", It = "main", Pt = "afterMain", jt = "beforeWrite", Mt = "write", Ht = "afterWrite", Bt = [xt, Dt, St, Nt, It, Pt, jt, Mt, Ht];
  function Rt(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function Wt(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function $t(t2) {
    return t2 instanceof Wt(t2).Element || t2 instanceof Element;
  }
  function zt(t2) {
    return t2 instanceof Wt(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function qt(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof Wt(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const Ft = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach((function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      zt(s2) && Rt(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach((function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      })));
    }));
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach((function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce((function(t4, e3) {
          return t4[e3] = "", t4;
        }), {});
        zt(n2) && Rt(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach((function(t4) {
          n2.removeAttribute(t4);
        })));
      }));
    };
  }, requires: ["computeStyles"] };
  function Ut(t2) {
    return t2.split("-")[0];
  }
  function Vt(t2, e2) {
    var i2 = t2.getBoundingClientRect();
    return { width: i2.width / 1, height: i2.height / 1, top: i2.top / 1, right: i2.right / 1, bottom: i2.bottom / 1, left: i2.left / 1, x: i2.left / 1, y: i2.top / 1 };
  }
  function Kt(t2) {
    var e2 = Vt(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function Xt(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && qt(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function Yt(t2) {
    return Wt(t2).getComputedStyle(t2);
  }
  function Qt(t2) {
    return ["table", "td", "th"].indexOf(Rt(t2)) >= 0;
  }
  function Gt(t2) {
    return (($t(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function Zt(t2) {
    return "html" === Rt(t2) ? t2 : t2.assignedSlot || t2.parentNode || (qt(t2) ? t2.host : null) || Gt(t2);
  }
  function Jt(t2) {
    return zt(t2) && "fixed" !== Yt(t2).position ? t2.offsetParent : null;
  }
  function te(t2) {
    for (var e2 = Wt(t2), i2 = Jt(t2); i2 && Qt(i2) && "static" === Yt(i2).position; ) i2 = Jt(i2);
    return i2 && ("html" === Rt(i2) || "body" === Rt(i2) && "static" === Yt(i2).position) ? e2 : i2 || (function(t3) {
      var e3 = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
      if (-1 !== navigator.userAgent.indexOf("Trident") && zt(t3) && "fixed" === Yt(t3).position) return null;
      for (var i3 = Zt(t3); zt(i3) && ["html", "body"].indexOf(Rt(i3)) < 0; ) {
        var n2 = Yt(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    })(t2) || e2;
  }
  function ee(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  var ie = Math.max, ne = Math.min, se = Math.round;
  function oe(t2, e2, i2) {
    return ie(t2, ne(e2, i2));
  }
  function re(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function ae(t2, e2) {
    return e2.reduce((function(e3, i2) {
      return e3[i2] = t2, e3;
    }), {});
  }
  const le = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = Ut(i2.placement), l2 = ee(a2), c2 = [bt, _t].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = (function(t3, e3) {
        return re("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : ae(t3, yt));
      })(s2.padding, i2), d2 = Kt(o2), u2 = "y" === l2 ? mt : bt, f2 = "y" === l2 ? gt : _t, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = te(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, E2 = oe(v2, w2, y2), A2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[A2] = E2, e2.centerOffset = E2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Xt(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function ce(t2) {
    return t2.split("-")[1];
  }
  var he = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function de(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = true === h2 ? (function(t3) {
      var e3 = t3.x, i3 = t3.y, n3 = window.devicePixelRatio || 1;
      return { x: se(se(e3 * n3) / n3) || 0, y: se(se(i3 * n3) / n3) || 0 };
    })(r2) : "function" == typeof h2 ? h2(r2) : r2, u2 = d2.x, f2 = void 0 === u2 ? 0 : u2, p2 = d2.y, m2 = void 0 === p2 ? 0 : p2, g2 = r2.hasOwnProperty("x"), _2 = r2.hasOwnProperty("y"), b2 = bt, v2 = mt, y2 = window;
    if (c2) {
      var w2 = te(i2), E2 = "clientHeight", A2 = "clientWidth";
      w2 === Wt(i2) && "static" !== Yt(w2 = Gt(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", A2 = "scrollWidth"), w2 = w2, s2 !== mt && (s2 !== bt && s2 !== _t || o2 !== Et) || (v2 = gt, m2 -= w2[E2] - n2.height, m2 *= l2 ? 1 : -1), s2 !== bt && (s2 !== mt && s2 !== gt || o2 !== Et) || (b2 = _t, f2 -= w2[A2] - n2.width, f2 *= l2 ? 1 : -1);
    }
    var T2, O2 = Object.assign({ position: a2 }, c2 && he);
    return l2 ? Object.assign({}, O2, ((T2 = {})[v2] = _2 ? "0" : "", T2[b2] = g2 ? "0" : "", T2.transform = (y2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", T2)) : Object.assign({}, O2, ((e2 = {})[v2] = _2 ? m2 + "px" : "", e2[b2] = g2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const ue = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: Ut(e2.placement), variation: ce(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2 };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, de(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, de(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var fe = { passive: true };
  const pe = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = Wt(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach((function(t3) {
      t3.addEventListener("scroll", i2.update, fe);
    })), a2 && l2.addEventListener("resize", i2.update, fe), function() {
      o2 && c2.forEach((function(t3) {
        t3.removeEventListener("scroll", i2.update, fe);
      })), a2 && l2.removeEventListener("resize", i2.update, fe);
    };
  }, data: {} };
  var me = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function ge(t2) {
    return t2.replace(/left|right|bottom|top/g, (function(t3) {
      return me[t3];
    }));
  }
  var _e = { start: "end", end: "start" };
  function be(t2) {
    return t2.replace(/start|end/g, (function(t3) {
      return _e[t3];
    }));
  }
  function ve(t2) {
    var e2 = Wt(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function ye(t2) {
    return Vt(Gt(t2)).left + ve(t2).scrollLeft;
  }
  function we(t2) {
    var e2 = Yt(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function Ee(t2) {
    return ["html", "body", "#document"].indexOf(Rt(t2)) >= 0 ? t2.ownerDocument.body : zt(t2) && we(t2) ? t2 : Ee(Zt(t2));
  }
  function Ae(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = Ee(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = Wt(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], we(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(Ae(Zt(r2)));
  }
  function Te(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function Oe(t2, e2) {
    return e2 === Tt ? Te((function(t3) {
      var e3 = Wt(t3), i2 = Gt(t3), n2 = e3.visualViewport, s2 = i2.clientWidth, o2 = i2.clientHeight, r2 = 0, a2 = 0;
      return n2 && (s2 = n2.width, o2 = n2.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (r2 = n2.offsetLeft, a2 = n2.offsetTop)), { width: s2, height: o2, x: r2 + ye(t3), y: a2 };
    })(t2)) : zt(e2) ? (function(t3) {
      var e3 = Vt(t3);
      return e3.top = e3.top + t3.clientTop, e3.left = e3.left + t3.clientLeft, e3.bottom = e3.top + t3.clientHeight, e3.right = e3.left + t3.clientWidth, e3.width = t3.clientWidth, e3.height = t3.clientHeight, e3.x = e3.left, e3.y = e3.top, e3;
    })(e2) : Te((function(t3) {
      var e3, i2 = Gt(t3), n2 = ve(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ie(i2.scrollWidth, i2.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = ie(i2.scrollHeight, i2.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + ye(t3), l2 = -n2.scrollTop;
      return "rtl" === Yt(s2 || i2).direction && (a2 += ie(i2.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    })(Gt(t2)));
  }
  function Ce(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? Ut(s2) : null, r2 = s2 ? ce(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case mt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case gt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case _t:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case bt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? ee(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case wt:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Et:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function ke(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.boundary, r2 = void 0 === o2 ? At : o2, a2 = i2.rootBoundary, l2 = void 0 === a2 ? Tt : a2, c2 = i2.elementContext, h2 = void 0 === c2 ? Ot : c2, d2 = i2.altBoundary, u2 = void 0 !== d2 && d2, f2 = i2.padding, p2 = void 0 === f2 ? 0 : f2, m2 = re("number" != typeof p2 ? p2 : ae(p2, yt)), g2 = h2 === Ot ? Ct : Ot, _2 = t2.rects.popper, b2 = t2.elements[u2 ? g2 : h2], v2 = (function(t3, e3, i3) {
      var n3 = "clippingParents" === e3 ? (function(t4) {
        var e4 = Ae(Zt(t4)), i4 = ["absolute", "fixed"].indexOf(Yt(t4).position) >= 0 && zt(t4) ? te(t4) : t4;
        return $t(i4) ? e4.filter((function(t5) {
          return $t(t5) && Xt(t5, i4) && "body" !== Rt(t5);
        })) : [];
      })(t3) : [].concat(e3), s3 = [].concat(n3, [i3]), o3 = s3[0], r3 = s3.reduce((function(e4, i4) {
        var n4 = Oe(t3, i4);
        return e4.top = ie(n4.top, e4.top), e4.right = ne(n4.right, e4.right), e4.bottom = ne(n4.bottom, e4.bottom), e4.left = ie(n4.left, e4.left), e4;
      }), Oe(t3, o3));
      return r3.width = r3.right - r3.left, r3.height = r3.bottom - r3.top, r3.x = r3.left, r3.y = r3.top, r3;
    })($t(b2) ? b2 : b2.contextElement || Gt(t2.elements.popper), r2, l2), y2 = Vt(t2.elements.reference), w2 = Ce({ reference: y2, element: _2, strategy: "absolute", placement: s2 }), E2 = Te(Object.assign({}, _2, w2)), A2 = h2 === Ot ? E2 : y2, T2 = { top: v2.top - A2.top + m2.top, bottom: A2.bottom - v2.bottom + m2.bottom, left: v2.left - A2.left + m2.left, right: A2.right - v2.right + m2.right }, O2 = t2.modifiersData.offset;
    if (h2 === Ot && O2) {
      var C2 = O2[s2];
      Object.keys(T2).forEach((function(t3) {
        var e3 = [_t, gt].indexOf(t3) >= 0 ? 1 : -1, i3 = [mt, gt].indexOf(t3) >= 0 ? "y" : "x";
        T2[t3] += C2[i3] * e3;
      }));
    }
    return T2;
  }
  function Le(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? Lt : l2, h2 = ce(n2), d2 = h2 ? a2 ? kt : kt.filter((function(t3) {
      return ce(t3) === h2;
    })) : yt, u2 = d2.filter((function(t3) {
      return c2.indexOf(t3) >= 0;
    }));
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce((function(e3, i3) {
      return e3[i3] = ke(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[Ut(i3)], e3;
    }), {});
    return Object.keys(f2).sort((function(t3, e3) {
      return f2[t3] - f2[e3];
    }));
  }
  const xe = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = Ut(g2), b2 = l2 || (_2 !== g2 && p2 ? (function(t3) {
        if (Ut(t3) === vt) return [];
        var e3 = ge(t3);
        return [be(t3), e3, be(e3)];
      })(g2) : [ge(g2)]), v2 = [g2].concat(b2).reduce((function(t3, i3) {
        return t3.concat(Ut(i3) === vt ? Le(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }), []), y2 = e2.rects.reference, w2 = e2.rects.popper, E2 = /* @__PURE__ */ new Map(), A2 = true, T2 = v2[0], O2 = 0; O2 < v2.length; O2++) {
        var C2 = v2[O2], k2 = Ut(C2), L2 = ce(C2) === wt, x2 = [mt, gt].indexOf(k2) >= 0, D2 = x2 ? "width" : "height", S2 = ke(e2, { placement: C2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), N2 = x2 ? L2 ? _t : bt : L2 ? gt : mt;
        y2[D2] > w2[D2] && (N2 = ge(N2));
        var I2 = ge(N2), P2 = [];
        if (o2 && P2.push(S2[k2] <= 0), a2 && P2.push(S2[N2] <= 0, S2[I2] <= 0), P2.every((function(t3) {
          return t3;
        }))) {
          T2 = C2, A2 = false;
          break;
        }
        E2.set(C2, P2);
      }
      if (A2) for (var j2 = function(t3) {
        var e3 = v2.find((function(e4) {
          var i3 = E2.get(e4);
          if (i3) return i3.slice(0, t3).every((function(t4) {
            return t4;
          }));
        }));
        if (e3) return T2 = e3, "break";
      }, M2 = p2 ? 3 : 1; M2 > 0 && "break" !== j2(M2); M2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function De(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function Se(t2) {
    return [mt, _t, gt, bt].some((function(e2) {
      return t2[e2] >= 0;
    }));
  }
  const Ne = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ke(e2, { elementContext: "reference" }), a2 = ke(e2, { altBoundary: true }), l2 = De(r2, n2), c2 = De(a2, s2, o2), h2 = Se(l2), d2 = Se(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, Ie = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = Lt.reduce((function(t3, i3) {
      return t3[i3] = (function(t4, e3, i4) {
        var n3 = Ut(t4), s3 = [bt, mt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [bt, _t].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      })(i3, e2.rects, o2), t3;
    }), {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, Pe = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = Ce({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
  }, data: {} }, je = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ke(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = Ut(e2.placement), b2 = ce(e2.placement), v2 = !b2, y2 = ee(_2), w2 = "x" === y2 ? "y" : "x", E2 = e2.modifiersData.popperOffsets, A2 = e2.rects.reference, T2 = e2.rects.popper, O2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, C2 = { x: 0, y: 0 };
    if (E2) {
      if (o2 || a2) {
        var k2 = "y" === y2 ? mt : bt, L2 = "y" === y2 ? gt : _t, x2 = "y" === y2 ? "height" : "width", D2 = E2[y2], S2 = E2[y2] + g2[k2], N2 = E2[y2] - g2[L2], I2 = f2 ? -T2[x2] / 2 : 0, P2 = b2 === wt ? A2[x2] : T2[x2], j2 = b2 === wt ? -T2[x2] : -A2[x2], M2 = e2.elements.arrow, H2 = f2 && M2 ? Kt(M2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, R2 = B2[k2], W2 = B2[L2], $2 = oe(0, A2[x2], H2[x2]), z2 = v2 ? A2[x2] / 2 - I2 - $2 - R2 - O2 : P2 - $2 - R2 - O2, q2 = v2 ? -A2[x2] / 2 + I2 + $2 + W2 + O2 : j2 + $2 + W2 + O2, F2 = e2.elements.arrow && te(e2.elements.arrow), U2 = F2 ? "y" === y2 ? F2.clientTop || 0 : F2.clientLeft || 0 : 0, V2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement][y2] : 0, K2 = E2[y2] + z2 - V2 - U2, X2 = E2[y2] + q2 - V2;
        if (o2) {
          var Y2 = oe(f2 ? ne(S2, K2) : S2, D2, f2 ? ie(N2, X2) : N2);
          E2[y2] = Y2, C2[y2] = Y2 - D2;
        }
        if (a2) {
          var Q2 = "x" === y2 ? mt : bt, G2 = "x" === y2 ? gt : _t, Z2 = E2[w2], J2 = Z2 + g2[Q2], tt2 = Z2 - g2[G2], et2 = oe(f2 ? ne(J2, K2) : J2, Z2, f2 ? ie(tt2, X2) : tt2);
          E2[w2] = et2, C2[w2] = et2 - Z2;
        }
      }
      e2.modifiersData[n2] = C2;
    }
  }, requiresIfExists: ["offset"] };
  function Me(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2 = zt(e2);
    zt(e2) && (function(t3) {
      var e3 = t3.getBoundingClientRect();
      e3.width, t3.offsetWidth, e3.height, t3.offsetHeight;
    })(e2);
    var s2, o2, r2 = Gt(e2), a2 = Vt(t2), l2 = { scrollLeft: 0, scrollTop: 0 }, c2 = { x: 0, y: 0 };
    return (n2 || !n2 && !i2) && (("body" !== Rt(e2) || we(r2)) && (l2 = (s2 = e2) !== Wt(s2) && zt(s2) ? { scrollLeft: (o2 = s2).scrollLeft, scrollTop: o2.scrollTop } : ve(s2)), zt(e2) ? ((c2 = Vt(e2)).x += e2.clientLeft, c2.y += e2.clientTop) : r2 && (c2.x = ye(r2))), { x: a2.left + l2.scrollLeft - c2.x, y: a2.top + l2.scrollTop - c2.y, width: a2.width, height: a2.height };
  }
  function He(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach((function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      })), n2.push(t3);
    }
    return t2.forEach((function(t3) {
      e2.set(t3.name, t3);
    })), t2.forEach((function(t3) {
      i2.has(t3.name) || s2(t3);
    })), n2;
  }
  var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Re() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some((function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    }));
  }
  function We(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? Be : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Be, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: $t(t3) ? Ae(t3) : t3.contextElement ? Ae(t3.contextElement) : [], popper: Ae(e3) };
        var r3, c3, u2 = (function(t4) {
          var e4 = He(t4);
          return Bt.reduce((function(t5, i5) {
            return t5.concat(e4.filter((function(t6) {
              return t6.phase === i5;
            })));
          }), []);
        })((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce((function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }), {}), Object.keys(c3).map((function(t4) {
          return c3[t4];
        }))));
        return a2.orderedModifiers = u2.filter((function(t4) {
          return t4.enabled;
        })), a2.orderedModifiers.forEach((function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        })), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (Re(e4, i4)) {
            a2.rects = { reference: Me(e4, te(i4), "fixed" === a2.options.strategy), popper: Kt(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach((function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            }));
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise((function(t4) {
          h2.forceUpdate(), t4(a2);
        }));
      }, function() {
        return r2 || (r2 = new Promise((function(t4) {
          Promise.resolve().then((function() {
            r2 = void 0, t4(s3());
          }));
        }))), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!Re(t3, e3)) return h2;
      function d2() {
        l2.forEach((function(t4) {
          return t4();
        })), l2 = [];
      }
      return h2.setOptions(i3).then((function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      })), h2;
    };
  }
  var $e = We(), ze = We({ defaultModifiers: [pe, Pe, ue, Ft] }), qe = We({ defaultModifiers: [pe, Pe, ue, Ft, Ie, xe, je, le, Ne] });
  const Fe = Object.freeze({ __proto__: null, popperGenerator: We, detectOverflow: ke, createPopperBase: $e, createPopper: qe, createPopperLite: ze, top: mt, bottom: gt, right: _t, left: bt, auto: vt, basePlacements: yt, start: wt, end: Et, clippingParents: At, viewport: Tt, popper: Ot, reference: Ct, variationPlacements: kt, placements: Lt, beforeRead: xt, read: Dt, afterRead: St, beforeMain: Nt, main: It, afterMain: Pt, beforeWrite: jt, write: Mt, afterWrite: Ht, modifierPhases: Bt, applyStyles: Ft, arrow: le, computeStyles: ue, eventListeners: pe, flip: xe, hide: Ne, offset: Ie, popperOffsets: Pe, preventOverflow: je }), Ue = "dropdown", Ve = "Escape", Ke = "Space", Xe = "ArrowUp", Ye = "ArrowDown", Qe = new RegExp("ArrowUp|ArrowDown|Escape"), Ge = "click.bs.dropdown.data-api", Ze = "keydown.bs.dropdown.data-api", Je = "show", ti = '[data-bs-toggle="dropdown"]', ei = ".dropdown-menu", ii = m() ? "top-end" : "top-start", ni = m() ? "top-start" : "top-end", si = m() ? "bottom-end" : "bottom-start", oi = m() ? "bottom-start" : "bottom-end", ri = m() ? "left-start" : "right-start", ai = m() ? "right-start" : "left-start", li = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: true }, ci = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
  class hi extends B {
    constructor(t2, e2) {
      super(t2), this._popper = null, this._config = this._getConfig(e2), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Ue;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (c(this._element) || this._isShown(this._menu)) return;
      const t2 = { relatedTarget: this._element };
      if (j.trigger(this._element, "show.bs.dropdown", t2).defaultPrevented) return;
      const e2 = hi.getParentFromElement(this._element);
      this._inNavbar ? U.setDataAttribute(this._menu, "popper", "none") : this._createPopper(e2), "ontouchstart" in document.documentElement && !e2.closest(".navbar-nav") && [].concat(...document.body.children).forEach(((t3) => j.on(t3, "mouseover", d))), this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add(Je), this._element.classList.add(Je), j.trigger(this._element, "shown.bs.dropdown", t2);
    }
    hide() {
      if (c(this._element) || !this._isShown(this._menu)) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      j.trigger(this._element, "hide.bs.dropdown", t2).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(((t3) => j.off(t3, "mouseover", d))), this._popper && this._popper.destroy(), this._menu.classList.remove(Je), this._element.classList.remove(Je), this._element.setAttribute("aria-expanded", "false"), U.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, "hidden.bs.dropdown", t2));
    }
    _getConfig(t2) {
      if (t2 = { ...this.constructor.Default, ...U.getDataAttributes(this._element), ...t2 }, a(Ue, t2, this.constructor.DefaultType), "object" == typeof t2.reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${Ue.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper(t2) {
      if (void 0 === Fe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let e2 = this._element;
      "parent" === this._config.reference ? e2 = t2 : o(this._config.reference) ? e2 = r(this._config.reference) : "object" == typeof this._config.reference && (e2 = this._config.reference);
      const i2 = this._getPopperConfig(), n2 = i2.modifiers.find(((t3) => "applyStyles" === t3.name && false === t3.enabled));
      this._popper = qe(e2, this._menu, i2), n2 && U.setDataAttribute(this._menu, "popper", "static");
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(Je);
    }
    _getMenuElement() {
      return V.next(this._element, ei)[0];
    }
    _getPlacement() {
      const t2 = this._element.parentNode;
      if (t2.classList.contains("dropend")) return ri;
      if (t2.classList.contains("dropstart")) return ai;
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? ni : ii : e2 ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map(((t3) => Number.parseInt(t3, 10))) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return "static" === this._config.display && (t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t2) : this._config.popperConfig };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = V.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(l);
      i2.length && v(i2, e2, t2 === Ye, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = hi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      }));
    }
    static clearMenus(t2) {
      if (t2 && (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key)) return;
      const e2 = V.find(ti);
      for (let i2 = 0, n2 = e2.length; i2 < n2; i2++) {
        const n3 = hi.getInstance(e2[i2]);
        if (!n3 || false === n3._config.autoClose) continue;
        if (!n3._isShown()) continue;
        const s2 = { relatedTarget: n3._element };
        if (t2) {
          const e3 = t2.composedPath(), i3 = e3.includes(n3._menu);
          if (e3.includes(n3._element) || "inside" === n3._config.autoClose && !i3 || "outside" === n3._config.autoClose && i3) continue;
          if (n3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
          "click" === t2.type && (s2.clickEvent = t2);
        }
        n3._completeHide(s2);
      }
    }
    static getParentFromElement(t2) {
      return n(t2) || t2.parentNode;
    }
    static dataApiKeydownHandler(t2) {
      if (/input|textarea/i.test(t2.target.tagName) ? t2.key === Ke || t2.key !== Ve && (t2.key !== Ye && t2.key !== Xe || t2.target.closest(ei)) : !Qe.test(t2.key)) return;
      const e2 = this.classList.contains(Je);
      if (!e2 && t2.key === Ve) return;
      if (t2.preventDefault(), t2.stopPropagation(), c(this)) return;
      const i2 = this.matches(ti) ? this : V.prev(this, ti)[0], n2 = hi.getOrCreateInstance(i2);
      if (t2.key !== Ve) return t2.key === Xe || t2.key === Ye ? (e2 || n2.show(), void n2._selectMenuItem(t2)) : void (e2 && t2.key !== Ke || hi.clearMenus());
      n2.hide();
    }
  }
  j.on(document, Ze, ti, hi.dataApiKeydownHandler), j.on(document, Ze, ei, hi.dataApiKeydownHandler), j.on(document, Ge, hi.clearMenus), j.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus), j.on(document, Ge, ti, (function(t2) {
    t2.preventDefault(), hi.getOrCreateInstance(this).toggle();
  })), g(hi);
  const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", ui = ".sticky-top";
  class fi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", ((e2) => e2 + t2)), this._setElementAttributes(di, "paddingRight", ((e2) => e2 + t2)), this._setElementAttributes(ui, "marginRight", ((e2) => e2 - t2));
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, ((t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3)[e2];
        t3.style[e2] = `${i2(Number.parseFloat(s2))}px`;
      }));
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(di, "paddingRight"), this._resetElementAttributes(ui, "marginRight");
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style[e2];
      i2 && U.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, ((t3) => {
        const i2 = U.getDataAttribute(t3, e2);
        void 0 === i2 ? t3.style.removeProperty(e2) : (U.removeDataAttribute(t3, e2), t3.style[e2] = i2);
      }));
    }
    _applyManipulationCallback(t2, e2) {
      o(t2) ? e2(t2) : V.find(t2, this._element).forEach(e2);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
  }
  const pi = { className: "modal-backdrop", isVisible: true, isAnimated: false, rootElement: "body", clickCallback: null }, mi = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" }, gi = "show", _i = "mousedown.bs.backdrop";
  class bi {
    constructor(t2) {
      this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    show(t2) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && u(this._getElement()), this._getElement().classList.add(gi), this._emulateAnimation((() => {
        _(t2);
      }))) : _(t2);
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(gi), this._emulateAnimation((() => {
        this.dispose(), _(t2);
      }))) : _(t2);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _getConfig(t2) {
      return (t2 = { ...pi, ..."object" == typeof t2 ? t2 : {} }).rootElement = r(t2.rootElement), a("backdrop", t2, mi), t2;
    }
    _append() {
      this._isAppended || (this._config.rootElement.append(this._getElement()), j.on(this._getElement(), _i, (() => {
        _(this._config.clickCallback);
      })), this._isAppended = true);
    }
    dispose() {
      this._isAppended && (j.off(this._element, _i), this._element.remove(), this._isAppended = false);
    }
    _emulateAnimation(t2) {
      b(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const vi = { trapElement: null, autofocus: true }, yi = { trapElement: "element", autofocus: "boolean" }, wi = ".bs.focustrap", Ei = "backward";
  class Ai {
    constructor(t2) {
      this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    activate() {
      const { trapElement: t2, autofocus: e2 } = this._config;
      this._isActive || (e2 && t2.focus(), j.off(document, wi), j.on(document, "focusin.bs.focustrap", ((t3) => this._handleFocusin(t3))), j.on(document, "keydown.tab.bs.focustrap", ((t3) => this._handleKeydown(t3))), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, j.off(document, wi));
    }
    _handleFocusin(t2) {
      const { target: e2 } = t2, { trapElement: i2 } = this._config;
      if (e2 === document || e2 === i2 || i2.contains(e2)) return;
      const n2 = V.focusableChildren(i2);
      0 === n2.length ? i2.focus() : this._lastTabNavDirection === Ei ? n2[n2.length - 1].focus() : n2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? Ei : "forward");
    }
    _getConfig(t2) {
      return t2 = { ...vi, ..."object" == typeof t2 ? t2 : {} }, a("focustrap", t2, yi), t2;
    }
  }
  const Ti = "modal", Oi = "Escape", Ci = { backdrop: true, keyboard: true, focus: true }, ki = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" }, Li = "hidden.bs.modal", xi = "show.bs.modal", Di = "resize.bs.modal", Si = "click.dismiss.bs.modal", Ni = "keydown.dismiss.bs.modal", Ii = "mousedown.dismiss.bs.modal", Pi = "modal-open", ji = "show", Mi = "modal-static";
  class Hi extends B {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._dialog = V.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._ignoreBackdropClick = false, this._isTransitioning = false, this._scrollBar = new fi();
    }
    static get Default() {
      return Ci;
    }
    static get NAME() {
      return Ti;
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || j.trigger(this._element, xi, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isAnimated() && (this._isTransitioning = true), this._scrollBar.hide(), document.body.classList.add(Pi), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._dialog, Ii, (() => {
        j.one(this._element, "mouseup.dismiss.bs.modal", ((t3) => {
          t3.target === this._element && (this._ignoreBackdropClick = true);
        }));
      })), this._showBackdrop((() => this._showElement(t2))));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) return;
      if (j.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
      this._isShown = false;
      const t2 = this._isAnimated();
      t2 && (this._isTransitioning = true), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(ji), j.off(this._element, Si), j.off(this._dialog, Ii), this._queueCallback((() => this._hideModal()), this._element, t2);
    }
    dispose() {
      [window, this._dialog].forEach(((t2) => j.off(t2, ".bs.modal"))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new bi({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _getConfig(t2) {
      return t2 = { ...Ci, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(Ti, t2, ki), t2;
    }
    _showElement(t2) {
      const e2 = this._isAnimated(), i2 = V.findOne(".modal-body", this._dialog);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, i2 && (i2.scrollTop = 0), e2 && u(this._element), this._element.classList.add(ji), this._queueCallback((() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, j.trigger(this._element, "shown.bs.modal", { relatedTarget: t2 });
      }), this._dialog, e2);
    }
    _setEscapeEvent() {
      this._isShown ? j.on(this._element, Ni, ((t2) => {
        this._config.keyboard && t2.key === Oi ? (t2.preventDefault(), this.hide()) : this._config.keyboard || t2.key !== Oi || this._triggerBackdropTransition();
      })) : j.off(this._element, Ni);
    }
    _setResizeEvent() {
      this._isShown ? j.on(window, Di, (() => this._adjustDialog())) : j.off(window, Di);
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide((() => {
        document.body.classList.remove(Pi), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, Li);
      }));
    }
    _showBackdrop(t2) {
      j.on(this._element, Si, ((t3) => {
        this._ignoreBackdropClick ? this._ignoreBackdropClick = false : t3.target === t3.currentTarget && (true === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
      })), this._backdrop.show(t2);
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (j.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
      const { classList: t2, scrollHeight: e2, style: i2 } = this._element, n2 = e2 > document.documentElement.clientHeight;
      !n2 && "hidden" === i2.overflowY || t2.contains(Mi) || (n2 || (i2.overflowY = "hidden"), t2.add(Mi), this._queueCallback((() => {
        t2.remove(Mi), n2 || this._queueCallback((() => {
          i2.overflowY = "";
        }), this._dialog);
      }), this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      (!i2 && t2 && !m() || i2 && !t2 && m()) && (this._element.style.paddingLeft = `${e2}px`), (i2 && !t2 && !m() || !i2 && t2 && m()) && (this._element.style.paddingRight = `${e2}px`);
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each((function() {
        const i2 = Hi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      }));
    }
  }
  j.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t2) {
    const e2 = n(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), j.one(e2, xi, ((t3) => {
      t3.defaultPrevented || j.one(e2, Li, (() => {
        l(this) && this.focus();
      }));
    }));
    const i2 = V.findOne(".modal.show");
    i2 && Hi.getInstance(i2).hide(), Hi.getOrCreateInstance(e2).toggle(this);
  })), R(Hi), g(Hi);
  const Bi = "offcanvas", Ri = { backdrop: true, keyboard: true, scroll: false }, Wi = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" }, $i = "show", zi = ".offcanvas.show", qi = "hidden.bs.offcanvas";
  class Fi extends B {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get NAME() {
      return Bi;
    }
    static get Default() {
      return Ri;
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || j.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || new fi().hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add($i), this._queueCallback((() => {
        this._config.scroll || this._focustrap.activate(), j.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: t2 });
      }), this._element, true));
    }
    hide() {
      this._isShown && (j.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.remove($i), this._backdrop.hide(), this._queueCallback((() => {
        this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || new fi().reset(), j.trigger(this._element, qi);
      }), this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _getConfig(t2) {
      return t2 = { ...Ri, ...U.getDataAttributes(this._element), ..."object" == typeof t2 ? t2 : {} }, a(Bi, t2, Wi), t2;
    }
    _initializeBackDrop() {
      return new bi({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: true, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _addEventListeners() {
      j.on(this._element, "keydown.dismiss.bs.offcanvas", ((t2) => {
        this._config.keyboard && "Escape" === t2.key && this.hide();
      }));
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = Fi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      }));
    }
  }
  j.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t2) {
    const e2 = n(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this)) return;
    j.one(e2, qi, (() => {
      l(this) && this.focus();
    }));
    const i2 = V.findOne(zi);
    i2 && i2 !== e2 && Fi.getInstance(i2).hide(), Fi.getOrCreateInstance(e2).toggle(this);
  })), j.on(window, "load.bs.offcanvas.data-api", (() => V.find(zi).forEach(((t2) => Fi.getOrCreateInstance(t2).show())))), R(Fi), g(Fi);
  const Ui = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Vi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i, Ki = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i, Xi = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    if (e2.includes(i2)) return !Ui.has(i2) || Boolean(Vi.test(t2.nodeValue) || Ki.test(t2.nodeValue));
    const n2 = e2.filter(((t3) => t3 instanceof RegExp));
    for (let t3 = 0, e3 = n2.length; t3 < e3; t3++) if (n2[t3].test(i2)) return true;
    return false;
  };
  function Yi(t2, e2, i2) {
    if (!t2.length) return t2;
    if (i2 && "function" == typeof i2) return i2(t2);
    const n2 = new window.DOMParser().parseFromString(t2, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
    for (let t3 = 0, i3 = s2.length; t3 < i3; t3++) {
      const i4 = s2[t3], n3 = i4.nodeName.toLowerCase();
      if (!Object.keys(e2).includes(n3)) {
        i4.remove();
        continue;
      }
      const o2 = [].concat(...i4.attributes), r2 = [].concat(e2["*"] || [], e2[n3] || []);
      o2.forEach(((t4) => {
        Xi(t4, r2) || i4.removeAttribute(t4.nodeName);
      }));
    }
    return n2.body.innerHTML;
  }
  const Qi = "tooltip", Gi = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Zi = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(array|string|function)", container: "(string|element|boolean)", fallbackPlacements: "array", boundary: "(string|element)", customClass: "(string|function)", sanitize: "boolean", sanitizeFn: "(null|function)", allowList: "object", popperConfig: "(null|object|function)" }, Ji = { AUTO: "auto", TOP: "top", RIGHT: m() ? "left" : "right", BOTTOM: "bottom", LEFT: m() ? "right" : "left" }, tn = { animation: true, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: false, selector: false, placement: "top", offset: [0, 0], container: false, fallbackPlacements: ["top", "right", "bottom", "left"], boundary: "clippingParents", customClass: "", sanitize: true, sanitizeFn: null, allowList: { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, popperConfig: null }, en = { HIDE: "hide.bs.tooltip", HIDDEN: "hidden.bs.tooltip", SHOW: "show.bs.tooltip", SHOWN: "shown.bs.tooltip", INSERTED: "inserted.bs.tooltip", CLICK: "click.bs.tooltip", FOCUSIN: "focusin.bs.tooltip", FOCUSOUT: "focusout.bs.tooltip", MOUSEENTER: "mouseenter.bs.tooltip", MOUSELEAVE: "mouseleave.bs.tooltip" }, nn = "fade", sn = "show", on = "show", rn = "out", an = ".tooltip-inner", ln = ".modal", cn = "hide.bs.modal", hn = "hover", dn = "focus";
  class un extends B {
    constructor(t2, e2) {
      if (void 0 === Fe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t2), this._isEnabled = true, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e2), this.tip = null, this._setListeners();
    }
    static get Default() {
      return tn;
    }
    static get NAME() {
      return Qi;
    }
    static get Event() {
      return en;
    }
    static get DefaultType() {
      return Zi;
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t2) {
      if (this._isEnabled) if (t2) {
        const e2 = this._initializeOnDelegatedTarget(t2);
        e2._activeTrigger.click = !e2._activeTrigger.click, e2._isWithActiveTrigger() ? e2._enter(null, e2) : e2._leave(null, e2);
      } else {
        if (this.getTipElement().classList.contains(sn)) return void this._leave(null, this);
        this._enter(null, this);
      }
    }
    dispose() {
      clearTimeout(this._timeout), j.off(this._element.closest(ln), cn, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      const t2 = j.trigger(this._element, this.constructor.Event.SHOW), e2 = h(this._element), i2 = null === e2 ? this._element.ownerDocument.documentElement.contains(this._element) : e2.contains(this._element);
      if (t2.defaultPrevented || !i2) return;
      "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(an).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
      const n2 = this.getTipElement(), s2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME);
      n2.setAttribute("id", s2), this._element.setAttribute("aria-describedby", s2), this._config.animation && n2.classList.add(nn);
      const o2 = "function" == typeof this._config.placement ? this._config.placement.call(this, n2, this._element) : this._config.placement, r2 = this._getAttachment(o2);
      this._addAttachmentClass(r2);
      const { container: a2 } = this._config;
      H.set(n2, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a2.append(n2), j.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = qe(this._element, n2, this._getPopperConfig(r2)), n2.classList.add(sn);
      const l2 = this._resolvePossibleFunction(this._config.customClass);
      l2 && n2.classList.add(...l2.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(((t3) => {
        j.on(t3, "mouseover", d);
      }));
      const c2 = this.tip.classList.contains(nn);
      this._queueCallback((() => {
        const t3 = this._hoverState;
        this._hoverState = null, j.trigger(this._element, this.constructor.Event.SHOWN), t3 === rn && this._leave(null, this);
      }), this.tip, c2);
    }
    hide() {
      if (!this._popper) return;
      const t2 = this.getTipElement();
      if (j.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      t2.classList.remove(sn), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach(((t3) => j.off(t3, "mouseover", d))), this._activeTrigger.click = false, this._activeTrigger.focus = false, this._activeTrigger.hover = false;
      const e2 = this.tip.classList.contains(nn);
      this._queueCallback((() => {
        this._isWithActiveTrigger() || (this._hoverState !== on && t2.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
      }), this.tip, e2), this._hoverState = "";
    }
    update() {
      null !== this._popper && this._popper.update();
    }
    isWithContent() {
      return Boolean(this.getTitle());
    }
    getTipElement() {
      if (this.tip) return this.tip;
      const t2 = document.createElement("div");
      t2.innerHTML = this._config.template;
      const e2 = t2.children[0];
      return this.setContent(e2), e2.classList.remove(nn, sn), this.tip = e2, this.tip;
    }
    setContent(t2) {
      this._sanitizeAndSetContent(t2, this.getTitle(), an);
    }
    _sanitizeAndSetContent(t2, e2, i2) {
      const n2 = V.findOne(i2, t2);
      e2 || !n2 ? this.setElementContent(n2, e2) : n2.remove();
    }
    setElementContent(t2, e2) {
      if (null !== t2) return o(e2) ? (e2 = r(e2), void (this._config.html ? e2.parentNode !== t2 && (t2.innerHTML = "", t2.append(e2)) : t2.textContent = e2.textContent)) : void (this._config.html ? (this._config.sanitize && (e2 = Yi(e2, this._config.allowList, this._config.sanitizeFn)), t2.innerHTML = e2) : t2.textContent = e2);
    }
    getTitle() {
      const t2 = this._element.getAttribute("data-bs-original-title") || this._config.title;
      return this._resolvePossibleFunction(t2);
    }
    updateAttachment(t2) {
      return "right" === t2 ? "end" : "left" === t2 ? "start" : t2;
    }
    _initializeOnDelegatedTarget(t2, e2) {
      return e2 || this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map(((t3) => Number.parseInt(t3, 10))) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return "function" == typeof t2 ? t2.call(this._element) : t2;
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "onChange", enabled: true, phase: "afterWrite", fn: (t3) => this._handlePopperPlacementChange(t3) }], onFirstUpdate: (t3) => {
        t3.options.placement !== t3.placement && this._handlePopperPlacementChange(t3);
      } };
      return { ...e2, ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e2) : this._config.popperConfig };
    }
    _addAttachmentClass(t2) {
      this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(t2)}`);
    }
    _getAttachment(t2) {
      return Ji[t2.toUpperCase()];
    }
    _setListeners() {
      this._config.trigger.split(" ").forEach(((t2) => {
        if ("click" === t2) j.on(this._element, this.constructor.Event.CLICK, this._config.selector, ((t3) => this.toggle(t3)));
        else if ("manual" !== t2) {
          const e2 = t2 === hn ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN, i2 = t2 === hn ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
          j.on(this._element, e2, this._config.selector, ((t3) => this._enter(t3))), j.on(this._element, i2, this._config.selector, ((t3) => this._leave(t3)));
        }
      })), this._hideModalHandler = () => {
        this._element && this.hide();
      }, j.on(this._element.closest(ln), cn, this._hideModalHandler), this._config.selector ? this._config = { ...this._config, trigger: "manual", selector: "" } : this._fixTitle();
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title"), e2 = typeof this._element.getAttribute("data-bs-original-title");
      (t2 || "string" !== e2) && (this._element.setAttribute("data-bs-original-title", t2 || ""), !t2 || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t2), this._element.setAttribute("title", ""));
    }
    _enter(t2, e2) {
      e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusin" === t2.type ? dn : hn] = true), e2.getTipElement().classList.contains(sn) || e2._hoverState === on ? e2._hoverState = on : (clearTimeout(e2._timeout), e2._hoverState = on, e2._config.delay && e2._config.delay.show ? e2._timeout = setTimeout((() => {
        e2._hoverState === on && e2.show();
      }), e2._config.delay.show) : e2.show());
    }
    _leave(t2, e2) {
      e2 = this._initializeOnDelegatedTarget(t2, e2), t2 && (e2._activeTrigger["focusout" === t2.type ? dn : hn] = e2._element.contains(t2.relatedTarget)), e2._isWithActiveTrigger() || (clearTimeout(e2._timeout), e2._hoverState = rn, e2._config.delay && e2._config.delay.hide ? e2._timeout = setTimeout((() => {
        e2._hoverState === rn && e2.hide();
      }), e2._config.delay.hide) : e2.hide());
    }
    _isWithActiveTrigger() {
      for (const t2 in this._activeTrigger) if (this._activeTrigger[t2]) return true;
      return false;
    }
    _getConfig(t2) {
      const e2 = U.getDataAttributes(this._element);
      return Object.keys(e2).forEach(((t3) => {
        Gi.has(t3) && delete e2[t3];
      })), (t2 = { ...this.constructor.Default, ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }).container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), a(Qi, t2, this.constructor.DefaultType), t2.sanitize && (t2.template = Yi(t2.template, t2.allowList, t2.sanitizeFn)), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const e2 in this._config) this.constructor.Default[e2] !== this._config[e2] && (t2[e2] = this._config[e2]);
      return t2;
    }
    _cleanTipClass() {
      const t2 = this.getTipElement(), e2 = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"), i2 = t2.getAttribute("class").match(e2);
      null !== i2 && i2.length > 0 && i2.map(((t3) => t3.trim())).forEach(((e3) => t2.classList.remove(e3)));
    }
    _getBasicClassPrefix() {
      return "bs-tooltip";
    }
    _handlePopperPlacementChange(t2) {
      const { state: e2 } = t2;
      e2 && (this.tip = e2.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e2.placement)));
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null);
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = un.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      }));
    }
  }
  g(un);
  const fn = { ...un.Default, placement: "right", offset: [0, 8], trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }, pn = { ...un.DefaultType, content: "(string|element|function)" }, mn = { HIDE: "hide.bs.popover", HIDDEN: "hidden.bs.popover", SHOW: "show.bs.popover", SHOWN: "shown.bs.popover", INSERTED: "inserted.bs.popover", CLICK: "click.bs.popover", FOCUSIN: "focusin.bs.popover", FOCUSOUT: "focusout.bs.popover", MOUSEENTER: "mouseenter.bs.popover", MOUSELEAVE: "mouseleave.bs.popover" };
  class gn extends un {
    static get Default() {
      return fn;
    }
    static get NAME() {
      return "popover";
    }
    static get Event() {
      return mn;
    }
    static get DefaultType() {
      return pn;
    }
    isWithContent() {
      return this.getTitle() || this._getContent();
    }
    setContent(t2) {
      this._sanitizeAndSetContent(t2, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(t2, this._getContent(), ".popover-body");
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    _getBasicClassPrefix() {
      return "bs-popover";
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = gn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      }));
    }
  }
  g(gn);
  const _n = "scrollspy", bn = { offset: 10, method: "auto", target: "" }, vn = { offset: "number", method: "string", target: "(string|element)" }, yn = "active", wn = ".nav-link, .list-group-item, .dropdown-item", En = "position";
  class An extends B {
    constructor(t2, e2) {
      super(t2), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(e2), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, "scroll.bs.scrollspy", (() => this._process())), this.refresh(), this._process();
    }
    static get Default() {
      return bn;
    }
    static get NAME() {
      return _n;
    }
    refresh() {
      const t2 = this._scrollElement === this._scrollElement.window ? "offset" : En, e2 = "auto" === this._config.method ? t2 : this._config.method, n2 = e2 === En ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), V.find(wn, this._config.target).map(((t3) => {
        const s2 = i(t3), o2 = s2 ? V.findOne(s2) : null;
        if (o2) {
          const t4 = o2.getBoundingClientRect();
          if (t4.width || t4.height) return [U[e2](o2).top + n2, s2];
        }
        return null;
      })).filter(((t3) => t3)).sort(((t3, e3) => t3[0] - e3[0])).forEach(((t3) => {
        this._offsets.push(t3[0]), this._targets.push(t3[1]);
      }));
    }
    dispose() {
      j.off(this._scrollElement, ".bs.scrollspy"), super.dispose();
    }
    _getConfig(t2) {
      return (t2 = { ...bn, ...U.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }).target = r(t2.target) || document.documentElement, a(_n, t2, vn), t2;
    }
    _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
    _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
    _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
    _process() {
      const t2 = this._getScrollTop() + this._config.offset, e2 = this._getScrollHeight(), i2 = this._config.offset + e2 - this._getOffsetHeight();
      if (this._scrollHeight !== e2 && this.refresh(), t2 >= i2) {
        const t3 = this._targets[this._targets.length - 1];
        this._activeTarget !== t3 && this._activate(t3);
      } else {
        if (this._activeTarget && t2 < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
        for (let e3 = this._offsets.length; e3--; ) this._activeTarget !== this._targets[e3] && t2 >= this._offsets[e3] && (void 0 === this._offsets[e3 + 1] || t2 < this._offsets[e3 + 1]) && this._activate(this._targets[e3]);
      }
    }
    _activate(t2) {
      this._activeTarget = t2, this._clear();
      const e2 = wn.split(",").map(((e3) => `${e3}[data-bs-target="${t2}"],${e3}[href="${t2}"]`)), i2 = V.findOne(e2.join(","), this._config.target);
      i2.classList.add(yn), i2.classList.contains("dropdown-item") ? V.findOne(".dropdown-toggle", i2.closest(".dropdown")).classList.add(yn) : V.parents(i2, ".nav, .list-group").forEach(((t3) => {
        V.prev(t3, ".nav-link, .list-group-item").forEach(((t4) => t4.classList.add(yn))), V.prev(t3, ".nav-item").forEach(((t4) => {
          V.children(t4, ".nav-link").forEach(((t5) => t5.classList.add(yn)));
        }));
      })), j.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: t2 });
    }
    _clear() {
      V.find(wn, this._config.target).filter(((t2) => t2.classList.contains(yn))).forEach(((t2) => t2.classList.remove(yn)));
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = An.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      }));
    }
  }
  j.on(window, "load.bs.scrollspy.data-api", (() => {
    V.find('[data-bs-spy="scroll"]').forEach(((t2) => new An(t2)));
  })), g(An);
  const Tn = "active", On = "fade", Cn = "show", kn = ".active", Ln = ":scope > li > .active";
  class xn extends B {
    static get NAME() {
      return "tab";
    }
    show() {
      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Tn)) return;
      let t2;
      const e2 = n(this._element), i2 = this._element.closest(".nav, .list-group");
      if (i2) {
        const e3 = "UL" === i2.nodeName || "OL" === i2.nodeName ? Ln : kn;
        t2 = V.find(e3, i2), t2 = t2[t2.length - 1];
      }
      const s2 = t2 ? j.trigger(t2, "hide.bs.tab", { relatedTarget: this._element }) : null;
      if (j.trigger(this._element, "show.bs.tab", { relatedTarget: t2 }).defaultPrevented || null !== s2 && s2.defaultPrevented) return;
      this._activate(this._element, i2);
      const o2 = () => {
        j.trigger(t2, "hidden.bs.tab", { relatedTarget: this._element }), j.trigger(this._element, "shown.bs.tab", { relatedTarget: t2 });
      };
      e2 ? this._activate(e2, e2.parentNode, o2) : o2();
    }
    _activate(t2, e2, i2) {
      const n2 = (!e2 || "UL" !== e2.nodeName && "OL" !== e2.nodeName ? V.children(e2, kn) : V.find(Ln, e2))[0], s2 = i2 && n2 && n2.classList.contains(On), o2 = () => this._transitionComplete(t2, n2, i2);
      n2 && s2 ? (n2.classList.remove(Cn), this._queueCallback(o2, t2, true)) : o2();
    }
    _transitionComplete(t2, e2, i2) {
      if (e2) {
        e2.classList.remove(Tn);
        const t3 = V.findOne(":scope > .dropdown-menu .active", e2.parentNode);
        t3 && t3.classList.remove(Tn), "tab" === e2.getAttribute("role") && e2.setAttribute("aria-selected", false);
      }
      t2.classList.add(Tn), "tab" === t2.getAttribute("role") && t2.setAttribute("aria-selected", true), u(t2), t2.classList.contains(On) && t2.classList.add(Cn);
      let n2 = t2.parentNode;
      if (n2 && "LI" === n2.nodeName && (n2 = n2.parentNode), n2 && n2.classList.contains("dropdown-menu")) {
        const e3 = t2.closest(".dropdown");
        e3 && V.find(".dropdown-toggle", e3).forEach(((t3) => t3.classList.add(Tn))), t2.setAttribute("aria-expanded", true);
      }
      i2 && i2();
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = xn.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      }));
    }
  }
  j.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), c(this) || xn.getOrCreateInstance(this).show();
  })), g(xn);
  const Dn = "toast", Sn = "hide", Nn = "show", In = "showing", Pn = { animation: "boolean", autohide: "boolean", delay: "number" }, jn = { animation: true, autohide: true, delay: 5e3 };
  class Mn extends B {
    constructor(t2, e2) {
      super(t2), this._config = this._getConfig(e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get DefaultType() {
      return Pn;
    }
    static get Default() {
      return jn;
    }
    static get NAME() {
      return Dn;
    }
    show() {
      j.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Sn), u(this._element), this._element.classList.add(Nn), this._element.classList.add(In), this._queueCallback((() => {
        this._element.classList.remove(In), j.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
      }), this._element, this._config.animation));
    }
    hide() {
      this._element.classList.contains(Nn) && (j.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(In), this._queueCallback((() => {
        this._element.classList.add(Sn), this._element.classList.remove(In), this._element.classList.remove(Nn), j.trigger(this._element, "hidden.bs.toast");
      }), this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this._element.classList.contains(Nn) && this._element.classList.remove(Nn), super.dispose();
    }
    _getConfig(t2) {
      return t2 = { ...jn, ...U.getDataAttributes(this._element), ..."object" == typeof t2 && t2 ? t2 : {} }, a(Dn, t2, this.constructor.DefaultType), t2;
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
        this.hide();
      }), this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      j.on(this._element, "mouseover.bs.toast", ((t2) => this._onInteraction(t2, true))), j.on(this._element, "mouseout.bs.toast", ((t2) => this._onInteraction(t2, false))), j.on(this._element, "focusin.bs.toast", ((t2) => this._onInteraction(t2, true))), j.on(this._element, "focusout.bs.toast", ((t2) => this._onInteraction(t2, false)));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each((function() {
        const e2 = Mn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      }));
    }
  }
  return R(Mn), g(Mn), { Alert: W, Button: z, Carousel: st, Collapse: pt, Dropdown: hi, Modal: Hi, Offcanvas: Fi, Popover: gn, ScrollSpy: An, Tab: xn, Toast: Mn, Tooltip: un };
}));
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).SimpleBar = e();
})(this, (function() {
  "use strict";
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function e(t2, e2) {
    return t2(e2 = { exports: {} }, e2.exports), e2.exports;
  }
  var r, i, n, o = "object", s = function(t2) {
    return t2 && t2.Math == Math && t2;
  }, a = s(typeof globalThis == o && globalThis) || s(typeof window == o && window) || s(typeof self == o && self) || s(typeof t == o && t) || Function("return this")(), c = function(t2) {
    try {
      return !!t2();
    } catch (t3) {
      return true;
    }
  }, l = !c((function() {
    return 7 != Object.defineProperty({}, "a", { get: function() {
      return 7;
    } }).a;
  })), u = {}.propertyIsEnumerable, f = Object.getOwnPropertyDescriptor, h = { f: f && !u.call({ 1: 2 }, 1) ? function(t2) {
    var e2 = f(this, t2);
    return !!e2 && e2.enumerable;
  } : u }, d = function(t2, e2) {
    return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
  }, p = {}.toString, v = function(t2) {
    return p.call(t2).slice(8, -1);
  }, g = "".split, b = c((function() {
    return !Object("z").propertyIsEnumerable(0);
  })) ? function(t2) {
    return "String" == v(t2) ? g.call(t2, "") : Object(t2);
  } : Object, y = function(t2) {
    if (null == t2) throw TypeError("Can't call method on " + t2);
    return t2;
  }, m = function(t2) {
    return b(y(t2));
  }, x = function(t2) {
    return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
  }, E = function(t2, e2) {
    if (!x(t2)) return t2;
    var r2, i2;
    if (e2 && "function" == typeof (r2 = t2.toString) && !x(i2 = r2.call(t2))) return i2;
    if ("function" == typeof (r2 = t2.valueOf) && !x(i2 = r2.call(t2))) return i2;
    if (!e2 && "function" == typeof (r2 = t2.toString) && !x(i2 = r2.call(t2))) return i2;
    throw TypeError("Can't convert object to primitive value");
  }, w = {}.hasOwnProperty, S = function(t2, e2) {
    return w.call(t2, e2);
  }, O = a.document, k = x(O) && x(O.createElement), A = function(t2) {
    return k ? O.createElement(t2) : {};
  }, T = !l && !c((function() {
    return 7 != Object.defineProperty(A("div"), "a", { get: function() {
      return 7;
    } }).a;
  })), L = Object.getOwnPropertyDescriptor, z = { f: l ? L : function(t2, e2) {
    if (t2 = m(t2), e2 = E(e2, true), T) try {
      return L(t2, e2);
    } catch (t3) {
    }
    if (S(t2, e2)) return d(!h.f.call(t2, e2), t2[e2]);
  } }, R = function(t2) {
    if (!x(t2)) throw TypeError(String(t2) + " is not an object");
    return t2;
  }, _ = Object.defineProperty, M = { f: l ? _ : function(t2, e2, r2) {
    if (R(t2), e2 = E(e2, true), R(r2), T) try {
      return _(t2, e2, r2);
    } catch (t3) {
    }
    if ("get" in r2 || "set" in r2) throw TypeError("Accessors not supported");
    return "value" in r2 && (t2[e2] = r2.value), t2;
  } }, C = l ? function(t2, e2, r2) {
    return M.f(t2, e2, d(1, r2));
  } : function(t2, e2, r2) {
    return t2[e2] = r2, t2;
  }, W = function(t2, e2) {
    try {
      C(a, t2, e2);
    } catch (r2) {
      a[t2] = e2;
    }
    return e2;
  }, j = e((function(t2) {
    var e2 = a["__core-js_shared__"] || W("__core-js_shared__", {});
    (t2.exports = function(t3, r2) {
      return e2[t3] || (e2[t3] = void 0 !== r2 ? r2 : {});
    })("versions", []).push({ version: "3.2.1", mode: "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
  })), N = j("native-function-to-string", Function.toString), I = a.WeakMap, B = "function" == typeof I && /native code/.test(N.call(I)), D = 0, P = Math.random(), F = function(t2) {
    return "Symbol(" + String(void 0 === t2 ? "" : t2) + ")_" + (++D + P).toString(36);
  }, V = j("keys"), X = function(t2) {
    return V[t2] || (V[t2] = F(t2));
  }, H = {}, q = a.WeakMap;
  if (B) {
    var $ = new q(), Y = $.get, G = $.has, U = $.set;
    r = function(t2, e2) {
      return U.call($, t2, e2), e2;
    }, i = function(t2) {
      return Y.call($, t2) || {};
    }, n = function(t2) {
      return G.call($, t2);
    };
  } else {
    var Q = X("state");
    H[Q] = true, r = function(t2, e2) {
      return C(t2, Q, e2), e2;
    }, i = function(t2) {
      return S(t2, Q) ? t2[Q] : {};
    }, n = function(t2) {
      return S(t2, Q);
    };
  }
  var K = { set: r, get: i, has: n, enforce: function(t2) {
    return n(t2) ? i(t2) : r(t2, {});
  }, getterFor: function(t2) {
    return function(e2) {
      var r2;
      if (!x(e2) || (r2 = i(e2)).type !== t2) throw TypeError("Incompatible receiver, " + t2 + " required");
      return r2;
    };
  } }, J = e((function(t2) {
    var e2 = K.get, r2 = K.enforce, i2 = String(N).split("toString");
    j("inspectSource", (function(t3) {
      return N.call(t3);
    })), (t2.exports = function(t3, e3, n2, o2) {
      var s2 = !!o2 && !!o2.unsafe, c2 = !!o2 && !!o2.enumerable, l2 = !!o2 && !!o2.noTargetGet;
      "function" == typeof n2 && ("string" != typeof e3 || S(n2, "name") || C(n2, "name", e3), r2(n2).source = i2.join("string" == typeof e3 ? e3 : "")), t3 !== a ? (s2 ? !l2 && t3[e3] && (c2 = true) : delete t3[e3], c2 ? t3[e3] = n2 : C(t3, e3, n2)) : c2 ? t3[e3] = n2 : W(e3, n2);
    })(Function.prototype, "toString", (function() {
      return "function" == typeof this && e2(this).source || N.call(this);
    }));
  })), Z = a, tt = function(t2) {
    return "function" == typeof t2 ? t2 : void 0;
  }, et = function(t2, e2) {
    return arguments.length < 2 ? tt(Z[t2]) || tt(a[t2]) : Z[t2] && Z[t2][e2] || a[t2] && a[t2][e2];
  }, rt = Math.ceil, it = Math.floor, nt = function(t2) {
    return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? it : rt)(t2);
  }, ot = Math.min, st = function(t2) {
    return t2 > 0 ? ot(nt(t2), 9007199254740991) : 0;
  }, at = Math.max, ct = Math.min, lt = function(t2) {
    return function(e2, r2, i2) {
      var n2, o2 = m(e2), s2 = st(o2.length), a2 = (function(t3, e3) {
        var r3 = nt(t3);
        return r3 < 0 ? at(r3 + e3, 0) : ct(r3, e3);
      })(i2, s2);
      if (t2 && r2 != r2) {
        for (; s2 > a2; ) if ((n2 = o2[a2++]) != n2) return true;
      } else for (; s2 > a2; a2++) if ((t2 || a2 in o2) && o2[a2] === r2) return t2 || a2 || 0;
      return !t2 && -1;
    };
  }, ut = { includes: lt(true), indexOf: lt(false) }.indexOf, ft = function(t2, e2) {
    var r2, i2 = m(t2), n2 = 0, o2 = [];
    for (r2 in i2) !S(H, r2) && S(i2, r2) && o2.push(r2);
    for (; e2.length > n2; ) S(i2, r2 = e2[n2++]) && (~ut(o2, r2) || o2.push(r2));
    return o2;
  }, ht = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], dt = ht.concat("length", "prototype"), pt = { f: Object.getOwnPropertyNames || function(t2) {
    return ft(t2, dt);
  } }, vt = { f: Object.getOwnPropertySymbols }, gt = et("Reflect", "ownKeys") || function(t2) {
    var e2 = pt.f(R(t2)), r2 = vt.f;
    return r2 ? e2.concat(r2(t2)) : e2;
  }, bt = function(t2, e2) {
    for (var r2 = gt(e2), i2 = M.f, n2 = z.f, o2 = 0; o2 < r2.length; o2++) {
      var s2 = r2[o2];
      S(t2, s2) || i2(t2, s2, n2(e2, s2));
    }
  }, yt = /#|\.prototype\./, mt = function(t2, e2) {
    var r2 = Et[xt(t2)];
    return r2 == St || r2 != wt && ("function" == typeof e2 ? c(e2) : !!e2);
  }, xt = mt.normalize = function(t2) {
    return String(t2).replace(yt, ".").toLowerCase();
  }, Et = mt.data = {}, wt = mt.NATIVE = "N", St = mt.POLYFILL = "P", Ot = mt, kt = z.f, At = function(t2, e2) {
    var r2, i2, n2, o2, s2, c2 = t2.target, l2 = t2.global, u2 = t2.stat;
    if (r2 = l2 ? a : u2 ? a[c2] || W(c2, {}) : (a[c2] || {}).prototype) for (i2 in e2) {
      if (o2 = e2[i2], n2 = t2.noTargetGet ? (s2 = kt(r2, i2)) && s2.value : r2[i2], !Ot(l2 ? i2 : c2 + (u2 ? "." : "#") + i2, t2.forced) && void 0 !== n2) {
        if (typeof o2 == typeof n2) continue;
        bt(o2, n2);
      }
      (t2.sham || n2 && n2.sham) && C(o2, "sham", true), J(r2, i2, o2, t2);
    }
  }, Tt = function(t2) {
    if ("function" != typeof t2) throw TypeError(String(t2) + " is not a function");
    return t2;
  }, Lt = function(t2, e2, r2) {
    if (Tt(t2), void 0 === e2) return t2;
    switch (r2) {
      case 0:
        return function() {
          return t2.call(e2);
        };
      case 1:
        return function(r3) {
          return t2.call(e2, r3);
        };
      case 2:
        return function(r3, i2) {
          return t2.call(e2, r3, i2);
        };
      case 3:
        return function(r3, i2, n2) {
          return t2.call(e2, r3, i2, n2);
        };
    }
    return function() {
      return t2.apply(e2, arguments);
    };
  }, zt = function(t2) {
    return Object(y(t2));
  }, Rt = Array.isArray || function(t2) {
    return "Array" == v(t2);
  }, _t = !!Object.getOwnPropertySymbols && !c((function() {
    return !String(Symbol());
  })), Mt = a.Symbol, Ct = j("wks"), Wt = function(t2) {
    return Ct[t2] || (Ct[t2] = _t && Mt[t2] || (_t ? Mt : F)("Symbol." + t2));
  }, jt = Wt("species"), Nt = function(t2, e2) {
    var r2;
    return Rt(t2) && ("function" != typeof (r2 = t2.constructor) || r2 !== Array && !Rt(r2.prototype) ? x(r2) && null === (r2 = r2[jt]) && (r2 = void 0) : r2 = void 0), new (void 0 === r2 ? Array : r2)(0 === e2 ? 0 : e2);
  }, It = [].push, Bt = function(t2) {
    var e2 = 1 == t2, r2 = 2 == t2, i2 = 3 == t2, n2 = 4 == t2, o2 = 6 == t2, s2 = 5 == t2 || o2;
    return function(a2, c2, l2, u2) {
      for (var f2, h2, d2 = zt(a2), p2 = b(d2), v2 = Lt(c2, l2, 3), g2 = st(p2.length), y2 = 0, m2 = u2 || Nt, x2 = e2 ? m2(a2, g2) : r2 ? m2(a2, 0) : void 0; g2 > y2; y2++) if ((s2 || y2 in p2) && (h2 = v2(f2 = p2[y2], y2, d2), t2)) {
        if (e2) x2[y2] = h2;
        else if (h2) switch (t2) {
          case 3:
            return true;
          case 5:
            return f2;
          case 6:
            return y2;
          case 2:
            It.call(x2, f2);
        }
        else if (n2) return false;
      }
      return o2 ? -1 : i2 || n2 ? n2 : x2;
    };
  }, Dt = { forEach: Bt(0), map: Bt(1), filter: Bt(2), some: Bt(3), every: Bt(4), find: Bt(5), findIndex: Bt(6) }, Pt = function(t2, e2) {
    var r2 = [][t2];
    return !r2 || !c((function() {
      r2.call(null, e2 || function() {
        throw 1;
      }, 1);
    }));
  }, Ft = Dt.forEach, Vt = Pt("forEach") ? function(t2) {
    return Ft(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } : [].forEach;
  At({ target: "Array", proto: true, forced: [].forEach != Vt }, { forEach: Vt });
  var Xt = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
  for (var Ht in Xt) {
    var qt = a[Ht], $t = qt && qt.prototype;
    if ($t && $t.forEach !== Vt) try {
      C($t, "forEach", Vt);
    } catch (t2) {
      $t.forEach = Vt;
    }
  }
  var Yt = !("undefined" == typeof window || !window.document || !window.document.createElement), Gt = Wt("species"), Ut = Dt.filter;
  At({ target: "Array", proto: true, forced: !(function(t2) {
    return !c((function() {
      var e2 = [];
      return (e2.constructor = {})[Gt] = function() {
        return { foo: 1 };
      }, 1 !== e2[t2](Boolean).foo;
    }));
  })("filter") }, { filter: function(t2) {
    return Ut(this, t2, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var Qt = Object.keys || function(t2) {
    return ft(t2, ht);
  }, Kt = l ? Object.defineProperties : function(t2, e2) {
    R(t2);
    for (var r2, i2 = Qt(e2), n2 = i2.length, o2 = 0; n2 > o2; ) M.f(t2, r2 = i2[o2++], e2[r2]);
    return t2;
  }, Jt = et("document", "documentElement"), Zt = X("IE_PROTO"), te = function() {
  }, ee = function() {
    var t2, e2 = A("iframe"), r2 = ht.length;
    for (e2.style.display = "none", Jt.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write("<script>document.F=Object</script>"), t2.close(), ee = t2.F; r2--; ) delete ee.prototype[ht[r2]];
    return ee();
  }, re = Object.create || function(t2, e2) {
    var r2;
    return null !== t2 ? (te.prototype = R(t2), r2 = new te(), te.prototype = null, r2[Zt] = t2) : r2 = ee(), void 0 === e2 ? r2 : Kt(r2, e2);
  };
  H[Zt] = true;
  var ie = Wt("unscopables"), ne = Array.prototype;
  null == ne[ie] && C(ne, ie, re(null));
  var oe, se, ae, ce = function(t2) {
    ne[ie][t2] = true;
  }, le = {}, ue = !c((function() {
    function t2() {
    }
    return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
  })), fe = X("IE_PROTO"), he = Object.prototype, de = ue ? Object.getPrototypeOf : function(t2) {
    return t2 = zt(t2), S(t2, fe) ? t2[fe] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? he : null;
  }, pe = Wt("iterator"), ve = false;
  [].keys && ("next" in (ae = [].keys()) ? (se = de(de(ae))) !== Object.prototype && (oe = se) : ve = true), null == oe && (oe = {}), S(oe, pe) || C(oe, pe, (function() {
    return this;
  }));
  var ge = { IteratorPrototype: oe, BUGGY_SAFARI_ITERATORS: ve }, be = M.f, ye = Wt("toStringTag"), me = function(t2, e2, r2) {
    t2 && !S(t2 = r2 ? t2 : t2.prototype, ye) && be(t2, ye, { configurable: true, value: e2 });
  }, xe = ge.IteratorPrototype, Ee = function() {
    return this;
  }, we = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
    var t2, e2 = false, r2 = {};
    try {
      (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r2, []), e2 = r2 instanceof Array;
    } catch (t3) {
    }
    return function(r3, i2) {
      return R(r3), (function(t3) {
        if (!x(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
      })(i2), e2 ? t2.call(r3, i2) : r3.__proto__ = i2, r3;
    };
  })() : void 0), Se = ge.IteratorPrototype, Oe = ge.BUGGY_SAFARI_ITERATORS, ke = Wt("iterator"), Ae = function() {
    return this;
  }, Te = function(t2, e2, r2, i2, n2, o2, s2) {
    !(function(t3, e3, r3) {
      var i3 = e3 + " Iterator";
      t3.prototype = re(xe, { next: d(1, r3) }), me(t3, i3, false), le[i3] = Ee;
    })(r2, e2, i2);
    var a2, c2, l2, u2 = function(t3) {
      if (t3 === n2 && g2) return g2;
      if (!Oe && t3 in p2) return p2[t3];
      switch (t3) {
        case "keys":
        case "values":
        case "entries":
          return function() {
            return new r2(this, t3);
          };
      }
      return function() {
        return new r2(this);
      };
    }, f2 = e2 + " Iterator", h2 = false, p2 = t2.prototype, v2 = p2[ke] || p2["@@iterator"] || n2 && p2[n2], g2 = !Oe && v2 || u2(n2), b2 = "Array" == e2 && p2.entries || v2;
    if (b2 && (a2 = de(b2.call(new t2())), Se !== Object.prototype && a2.next && (de(a2) !== Se && (we ? we(a2, Se) : "function" != typeof a2[ke] && C(a2, ke, Ae)), me(a2, f2, true))), "values" == n2 && v2 && "values" !== v2.name && (h2 = true, g2 = function() {
      return v2.call(this);
    }), p2[ke] !== g2 && C(p2, ke, g2), le[e2] = g2, n2) if (c2 = { values: u2("values"), keys: o2 ? g2 : u2("keys"), entries: u2("entries") }, s2) for (l2 in c2) !Oe && !h2 && l2 in p2 || J(p2, l2, c2[l2]);
    else At({ target: e2, proto: true, forced: Oe || h2 }, c2);
    return c2;
  }, Le = K.set, ze = K.getterFor("Array Iterator"), Re = Te(Array, "Array", (function(t2, e2) {
    Le(this, { type: "Array Iterator", target: m(t2), index: 0, kind: e2 });
  }), (function() {
    var t2 = ze(this), e2 = t2.target, r2 = t2.kind, i2 = t2.index++;
    return !e2 || i2 >= e2.length ? (t2.target = void 0, { value: void 0, done: true }) : "keys" == r2 ? { value: i2, done: false } : "values" == r2 ? { value: e2[i2], done: false } : { value: [i2, e2[i2]], done: false };
  }), "values");
  le.Arguments = le.Array, ce("keys"), ce("values"), ce("entries");
  var _e = Object.assign, Me = !_e || c((function() {
    var t2 = {}, e2 = {}, r2 = Symbol();
    return t2[r2] = 7, "abcdefghijklmnopqrst".split("").forEach((function(t3) {
      e2[t3] = t3;
    })), 7 != _e({}, t2)[r2] || "abcdefghijklmnopqrst" != Qt(_e({}, e2)).join("");
  })) ? function(t2, e2) {
    for (var r2 = zt(t2), i2 = arguments.length, n2 = 1, o2 = vt.f, s2 = h.f; i2 > n2; ) for (var a2, c2 = b(arguments[n2++]), u2 = o2 ? Qt(c2).concat(o2(c2)) : Qt(c2), f2 = u2.length, d2 = 0; f2 > d2; ) a2 = u2[d2++], l && !s2.call(c2, a2) || (r2[a2] = c2[a2]);
    return r2;
  } : _e;
  At({ target: "Object", stat: true, forced: Object.assign !== Me }, { assign: Me });
  var Ce = Wt("toStringTag"), We = "Arguments" == v(/* @__PURE__ */ (function() {
    return arguments;
  })()), je = function(t2) {
    var e2, r2, i2;
    return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (r2 = (function(t3, e3) {
      try {
        return t3[e3];
      } catch (t4) {
      }
    })(e2 = Object(t2), Ce)) ? r2 : We ? v(e2) : "Object" == (i2 = v(e2)) && "function" == typeof e2.callee ? "Arguments" : i2;
  }, Ne = {};
  Ne[Wt("toStringTag")] = "z";
  var Ie = "[object z]" !== String(Ne) ? function() {
    return "[object " + je(this) + "]";
  } : Ne.toString, Be = Object.prototype;
  Ie !== Be.toString && J(Be, "toString", Ie, { unsafe: true });
  var De = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF", Pe = "[" + De + "]", Fe = RegExp("^" + Pe + Pe + "*"), Ve = RegExp(Pe + Pe + "*$"), Xe = function(t2) {
    return function(e2) {
      var r2 = String(y(e2));
      return 1 & t2 && (r2 = r2.replace(Fe, "")), 2 & t2 && (r2 = r2.replace(Ve, "")), r2;
    };
  }, He = { start: Xe(1), end: Xe(2), trim: Xe(3) }.trim, qe = a.parseInt, $e = /^[+-]?0[Xx]/, Ye = 8 !== qe(De + "08") || 22 !== qe(De + "0x16") ? function(t2, e2) {
    var r2 = He(String(t2));
    return qe(r2, e2 >>> 0 || ($e.test(r2) ? 16 : 10));
  } : qe;
  At({ global: true, forced: parseInt != Ye }, { parseInt: Ye });
  var Ge = function(t2) {
    return function(e2, r2) {
      var i2, n2, o2 = String(y(e2)), s2 = nt(r2), a2 = o2.length;
      return s2 < 0 || s2 >= a2 ? t2 ? "" : void 0 : (i2 = o2.charCodeAt(s2)) < 55296 || i2 > 56319 || s2 + 1 === a2 || (n2 = o2.charCodeAt(s2 + 1)) < 56320 || n2 > 57343 ? t2 ? o2.charAt(s2) : i2 : t2 ? o2.slice(s2, s2 + 2) : n2 - 56320 + (i2 - 55296 << 10) + 65536;
    };
  }, Ue = { codeAt: Ge(false), charAt: Ge(true) }, Qe = Ue.charAt, Ke = K.set, Je = K.getterFor("String Iterator");
  Te(String, "String", (function(t2) {
    Ke(this, { type: "String Iterator", string: String(t2), index: 0 });
  }), (function() {
    var t2, e2 = Je(this), r2 = e2.string, i2 = e2.index;
    return i2 >= r2.length ? { value: void 0, done: true } : (t2 = Qe(r2, i2), e2.index += t2.length, { value: t2, done: false });
  }));
  var Ze = function(t2, e2, r2) {
    for (var i2 in e2) J(t2, i2, e2[i2], r2);
    return t2;
  }, tr = !c((function() {
    return Object.isExtensible(Object.preventExtensions({}));
  })), er = e((function(t2) {
    var e2 = M.f, r2 = F("meta"), i2 = 0, n2 = Object.isExtensible || function() {
      return true;
    }, o2 = function(t3) {
      e2(t3, r2, { value: { objectID: "O" + ++i2, weakData: {} } });
    }, s2 = t2.exports = { REQUIRED: false, fastKey: function(t3, e3) {
      if (!x(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
      if (!S(t3, r2)) {
        if (!n2(t3)) return "F";
        if (!e3) return "E";
        o2(t3);
      }
      return t3[r2].objectID;
    }, getWeakData: function(t3, e3) {
      if (!S(t3, r2)) {
        if (!n2(t3)) return true;
        if (!e3) return false;
        o2(t3);
      }
      return t3[r2].weakData;
    }, onFreeze: function(t3) {
      return tr && s2.REQUIRED && n2(t3) && !S(t3, r2) && o2(t3), t3;
    } };
    H[r2] = true;
  })), rr = (er.REQUIRED, er.fastKey, er.getWeakData, er.onFreeze, Wt("iterator")), ir = Array.prototype, nr = Wt("iterator"), or = function(t2, e2, r2, i2) {
    try {
      return i2 ? e2(R(r2)[0], r2[1]) : e2(r2);
    } catch (e3) {
      var n2 = t2.return;
      throw void 0 !== n2 && R(n2.call(t2)), e3;
    }
  }, sr = e((function(t2) {
    var e2 = function(t3, e3) {
      this.stopped = t3, this.result = e3;
    };
    (t2.exports = function(t3, r2, i2, n2, o2) {
      var s2, a2, c2, l2, u2, f2, h2, d2 = Lt(r2, i2, n2 ? 2 : 1);
      if (o2) s2 = t3;
      else {
        if ("function" != typeof (a2 = (function(t4) {
          if (null != t4) return t4[nr] || t4["@@iterator"] || le[je(t4)];
        })(t3))) throw TypeError("Target is not iterable");
        if (void 0 !== (h2 = a2) && (le.Array === h2 || ir[rr] === h2)) {
          for (c2 = 0, l2 = st(t3.length); l2 > c2; c2++) if ((u2 = n2 ? d2(R(f2 = t3[c2])[0], f2[1]) : d2(t3[c2])) && u2 instanceof e2) return u2;
          return new e2(false);
        }
        s2 = a2.call(t3);
      }
      for (; !(f2 = s2.next()).done; ) if ((u2 = or(s2, d2, f2.value, n2)) && u2 instanceof e2) return u2;
      return new e2(false);
    }).stop = function(t3) {
      return new e2(true, t3);
    };
  })), ar = function(t2, e2, r2) {
    if (!(t2 instanceof e2)) throw TypeError("Incorrect " + (r2 ? r2 + " " : "") + "invocation");
    return t2;
  }, cr = Wt("iterator"), lr = false;
  try {
    var ur = 0, fr = { next: function() {
      return { done: !!ur++ };
    }, return: function() {
      lr = true;
    } };
    fr[cr] = function() {
      return this;
    }, Array.from(fr, (function() {
      throw 2;
    }));
  } catch (t2) {
  }
  var hr = function(t2, e2, r2, i2, n2) {
    var o2 = a[t2], s2 = o2 && o2.prototype, l2 = o2, u2 = i2 ? "set" : "add", f2 = {}, h2 = function(t3) {
      var e3 = s2[t3];
      J(s2, t3, "add" == t3 ? function(t4) {
        return e3.call(this, 0 === t4 ? 0 : t4), this;
      } : "delete" == t3 ? function(t4) {
        return !(n2 && !x(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : "get" == t3 ? function(t4) {
        return n2 && !x(t4) ? void 0 : e3.call(this, 0 === t4 ? 0 : t4);
      } : "has" == t3 ? function(t4) {
        return !(n2 && !x(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
      } : function(t4, r3) {
        return e3.call(this, 0 === t4 ? 0 : t4, r3), this;
      });
    };
    if (Ot(t2, "function" != typeof o2 || !(n2 || s2.forEach && !c((function() {
      new o2().entries().next();
    }))))) l2 = r2.getConstructor(e2, t2, i2, u2), er.REQUIRED = true;
    else if (Ot(t2, true)) {
      var d2 = new l2(), p2 = d2[u2](n2 ? {} : -0, 1) != d2, v2 = c((function() {
        d2.has(1);
      })), g2 = (function(t3, e3) {
        if (!e3 && !lr) return false;
        var r3 = false;
        try {
          var i3 = {};
          i3[cr] = function() {
            return { next: function() {
              return { done: r3 = true };
            } };
          }, t3(i3);
        } catch (t4) {
        }
        return r3;
      })((function(t3) {
        new o2(t3);
      })), b2 = !n2 && c((function() {
        for (var t3 = new o2(), e3 = 5; e3--; ) t3[u2](e3, e3);
        return !t3.has(-0);
      }));
      g2 || ((l2 = e2((function(e3, r3) {
        ar(e3, l2, t2);
        var n3 = (function(t3, e4, r4) {
          var i3, n4;
          return we && "function" == typeof (i3 = e4.constructor) && i3 !== r4 && x(n4 = i3.prototype) && n4 !== r4.prototype && we(t3, n4), t3;
        })(new o2(), e3, l2);
        return null != r3 && sr(r3, n3[u2], n3, i2), n3;
      }))).prototype = s2, s2.constructor = l2), (v2 || b2) && (h2("delete"), h2("has"), i2 && h2("get")), (b2 || p2) && h2(u2), n2 && s2.clear && delete s2.clear;
    }
    return f2[t2] = l2, At({ global: true, forced: l2 != o2 }, f2), me(l2, t2), n2 || r2.setStrong(l2, t2, i2), l2;
  }, dr = er.getWeakData, pr = K.set, vr = K.getterFor, gr = Dt.find, br = Dt.findIndex, yr = 0, mr = function(t2) {
    return t2.frozen || (t2.frozen = new xr());
  }, xr = function() {
    this.entries = [];
  }, Er = function(t2, e2) {
    return gr(t2.entries, (function(t3) {
      return t3[0] === e2;
    }));
  };
  xr.prototype = { get: function(t2) {
    var e2 = Er(this, t2);
    if (e2) return e2[1];
  }, has: function(t2) {
    return !!Er(this, t2);
  }, set: function(t2, e2) {
    var r2 = Er(this, t2);
    r2 ? r2[1] = e2 : this.entries.push([t2, e2]);
  }, delete: function(t2) {
    var e2 = br(this.entries, (function(e3) {
      return e3[0] === t2;
    }));
    return ~e2 && this.entries.splice(e2, 1), !!~e2;
  } };
  var wr = { getConstructor: function(t2, e2, r2, i2) {
    var n2 = t2((function(t3, o3) {
      ar(t3, n2, e2), pr(t3, { type: e2, id: yr++, frozen: void 0 }), null != o3 && sr(o3, t3[i2], t3, r2);
    })), o2 = vr(e2), s2 = function(t3, e3, r3) {
      var i3 = o2(t3), n3 = dr(R(e3), true);
      return true === n3 ? mr(i3).set(e3, r3) : n3[i3.id] = r3, t3;
    };
    return Ze(n2.prototype, { delete: function(t3) {
      var e3 = o2(this);
      if (!x(t3)) return false;
      var r3 = dr(t3);
      return true === r3 ? mr(e3).delete(t3) : r3 && S(r3, e3.id) && delete r3[e3.id];
    }, has: function(t3) {
      var e3 = o2(this);
      if (!x(t3)) return false;
      var r3 = dr(t3);
      return true === r3 ? mr(e3).has(t3) : r3 && S(r3, e3.id);
    } }), Ze(n2.prototype, r2 ? { get: function(t3) {
      var e3 = o2(this);
      if (x(t3)) {
        var r3 = dr(t3);
        return true === r3 ? mr(e3).get(t3) : r3 ? r3[e3.id] : void 0;
      }
    }, set: function(t3, e3) {
      return s2(this, t3, e3);
    } } : { add: function(t3) {
      return s2(this, t3, true);
    } }), n2;
  } }, Sr = (e((function(t2) {
    var e2, r2 = K.enforce, i2 = !a.ActiveXObject && "ActiveXObject" in a, n2 = Object.isExtensible, o2 = function(t3) {
      return function() {
        return t3(this, arguments.length ? arguments[0] : void 0);
      };
    }, s2 = t2.exports = hr("WeakMap", o2, wr, true, true);
    if (B && i2) {
      e2 = wr.getConstructor(o2, "WeakMap", true), er.REQUIRED = true;
      var c2 = s2.prototype, l2 = c2.delete, u2 = c2.has, f2 = c2.get, h2 = c2.set;
      Ze(c2, { delete: function(t3) {
        if (x(t3) && !n2(t3)) {
          var i3 = r2(this);
          return i3.frozen || (i3.frozen = new e2()), l2.call(this, t3) || i3.frozen.delete(t3);
        }
        return l2.call(this, t3);
      }, has: function(t3) {
        if (x(t3) && !n2(t3)) {
          var i3 = r2(this);
          return i3.frozen || (i3.frozen = new e2()), u2.call(this, t3) || i3.frozen.has(t3);
        }
        return u2.call(this, t3);
      }, get: function(t3) {
        if (x(t3) && !n2(t3)) {
          var i3 = r2(this);
          return i3.frozen || (i3.frozen = new e2()), u2.call(this, t3) ? f2.call(this, t3) : i3.frozen.get(t3);
        }
        return f2.call(this, t3);
      }, set: function(t3, i3) {
        if (x(t3) && !n2(t3)) {
          var o3 = r2(this);
          o3.frozen || (o3.frozen = new e2()), u2.call(this, t3) ? h2.call(this, t3, i3) : o3.frozen.set(t3, i3);
        } else h2.call(this, t3, i3);
        return this;
      } });
    }
  })), Wt("iterator")), Or = Wt("toStringTag"), kr = Re.values;
  for (var Ar in Xt) {
    var Tr = a[Ar], Lr = Tr && Tr.prototype;
    if (Lr) {
      if (Lr[Sr] !== kr) try {
        C(Lr, Sr, kr);
      } catch (t2) {
        Lr[Sr] = kr;
      }
      if (Lr[Or] || C(Lr, Or, Ar), Xt[Ar]) {
        for (var zr in Re) if (Lr[zr] !== Re[zr]) try {
          C(Lr, zr, Re[zr]);
        } catch (t2) {
          Lr[zr] = Re[zr];
        }
      }
    }
  }
  var Rr = "Expected a function", _r = NaN, Mr = "[object Symbol]", Cr = /^\s+|\s+$/g, Wr = /^[-+]0x[0-9a-f]+$/i, jr = /^0b[01]+$/i, Nr = /^0o[0-7]+$/i, Ir = parseInt, Br = "object" == typeof t && t && t.Object === Object && t, Dr = "object" == typeof self && self && self.Object === Object && self, Pr = Br || Dr || Function("return this")(), Fr = Object.prototype.toString, Vr = Math.max, Xr = Math.min, Hr = function() {
    return Pr.Date.now();
  };
  function qr(t2, e2, r2) {
    var i2, n2, o2, s2, a2, c2, l2 = 0, u2 = false, f2 = false, h2 = true;
    if ("function" != typeof t2) throw new TypeError(Rr);
    function d2(e3) {
      var r3 = i2, o3 = n2;
      return i2 = n2 = void 0, l2 = e3, s2 = t2.apply(o3, r3);
    }
    function p2(t3) {
      var r3 = t3 - c2;
      return void 0 === c2 || r3 >= e2 || r3 < 0 || f2 && t3 - l2 >= o2;
    }
    function v2() {
      var t3 = Hr();
      if (p2(t3)) return g2(t3);
      a2 = setTimeout(v2, (function(t4) {
        var r3 = e2 - (t4 - c2);
        return f2 ? Xr(r3, o2 - (t4 - l2)) : r3;
      })(t3));
    }
    function g2(t3) {
      return a2 = void 0, h2 && i2 ? d2(t3) : (i2 = n2 = void 0, s2);
    }
    function b2() {
      var t3 = Hr(), r3 = p2(t3);
      if (i2 = arguments, n2 = this, c2 = t3, r3) {
        if (void 0 === a2) return (function(t4) {
          return l2 = t4, a2 = setTimeout(v2, e2), u2 ? d2(t4) : s2;
        })(c2);
        if (f2) return a2 = setTimeout(v2, e2), d2(c2);
      }
      return void 0 === a2 && (a2 = setTimeout(v2, e2)), s2;
    }
    return e2 = Yr(e2) || 0, $r(r2) && (u2 = !!r2.leading, o2 = (f2 = "maxWait" in r2) ? Vr(Yr(r2.maxWait) || 0, e2) : o2, h2 = "trailing" in r2 ? !!r2.trailing : h2), b2.cancel = function() {
      void 0 !== a2 && clearTimeout(a2), l2 = 0, i2 = c2 = n2 = a2 = void 0;
    }, b2.flush = function() {
      return void 0 === a2 ? s2 : g2(Hr());
    }, b2;
  }
  function $r(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  function Yr(t2) {
    if ("number" == typeof t2) return t2;
    if ((function(t3) {
      return "symbol" == typeof t3 || /* @__PURE__ */ (function(t4) {
        return !!t4 && "object" == typeof t4;
      })(t3) && Fr.call(t3) == Mr;
    })(t2)) return _r;
    if ($r(t2)) {
      var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
      t2 = $r(e2) ? e2 + "" : e2;
    }
    if ("string" != typeof t2) return 0 === t2 ? t2 : +t2;
    t2 = t2.replace(Cr, "");
    var r2 = jr.test(t2);
    return r2 || Nr.test(t2) ? Ir(t2.slice(2), r2 ? 2 : 8) : Wr.test(t2) ? _r : +t2;
  }
  var Gr = function(t2, e2, r2) {
    var i2 = true, n2 = true;
    if ("function" != typeof t2) throw new TypeError(Rr);
    return $r(r2) && (i2 = "leading" in r2 ? !!r2.leading : i2, n2 = "trailing" in r2 ? !!r2.trailing : n2), qr(t2, e2, { leading: i2, maxWait: e2, trailing: n2 });
  }, Ur = "Expected a function", Qr = NaN, Kr = "[object Symbol]", Jr = /^\s+|\s+$/g, Zr = /^[-+]0x[0-9a-f]+$/i, ti = /^0b[01]+$/i, ei = /^0o[0-7]+$/i, ri = parseInt, ii = "object" == typeof t && t && t.Object === Object && t, ni = "object" == typeof self && self && self.Object === Object && self, oi = ii || ni || Function("return this")(), si = Object.prototype.toString, ai = Math.max, ci = Math.min, li = function() {
    return oi.Date.now();
  };
  function ui(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  function fi(t2) {
    if ("number" == typeof t2) return t2;
    if ((function(t3) {
      return "symbol" == typeof t3 || /* @__PURE__ */ (function(t4) {
        return !!t4 && "object" == typeof t4;
      })(t3) && si.call(t3) == Kr;
    })(t2)) return Qr;
    if (ui(t2)) {
      var e2 = "function" == typeof t2.valueOf ? t2.valueOf() : t2;
      t2 = ui(e2) ? e2 + "" : e2;
    }
    if ("string" != typeof t2) return 0 === t2 ? t2 : +t2;
    t2 = t2.replace(Jr, "");
    var r2 = ti.test(t2);
    return r2 || ei.test(t2) ? ri(t2.slice(2), r2 ? 2 : 8) : Zr.test(t2) ? Qr : +t2;
  }
  var hi = function(t2, e2, r2) {
    var i2, n2, o2, s2, a2, c2, l2 = 0, u2 = false, f2 = false, h2 = true;
    if ("function" != typeof t2) throw new TypeError(Ur);
    function d2(e3) {
      var r3 = i2, o3 = n2;
      return i2 = n2 = void 0, l2 = e3, s2 = t2.apply(o3, r3);
    }
    function p2(t3) {
      var r3 = t3 - c2;
      return void 0 === c2 || r3 >= e2 || r3 < 0 || f2 && t3 - l2 >= o2;
    }
    function v2() {
      var t3 = li();
      if (p2(t3)) return g2(t3);
      a2 = setTimeout(v2, (function(t4) {
        var r3 = e2 - (t4 - c2);
        return f2 ? ci(r3, o2 - (t4 - l2)) : r3;
      })(t3));
    }
    function g2(t3) {
      return a2 = void 0, h2 && i2 ? d2(t3) : (i2 = n2 = void 0, s2);
    }
    function b2() {
      var t3 = li(), r3 = p2(t3);
      if (i2 = arguments, n2 = this, c2 = t3, r3) {
        if (void 0 === a2) return (function(t4) {
          return l2 = t4, a2 = setTimeout(v2, e2), u2 ? d2(t4) : s2;
        })(c2);
        if (f2) return a2 = setTimeout(v2, e2), d2(c2);
      }
      return void 0 === a2 && (a2 = setTimeout(v2, e2)), s2;
    }
    return e2 = fi(e2) || 0, ui(r2) && (u2 = !!r2.leading, o2 = (f2 = "maxWait" in r2) ? ai(fi(r2.maxWait) || 0, e2) : o2, h2 = "trailing" in r2 ? !!r2.trailing : h2), b2.cancel = function() {
      void 0 !== a2 && clearTimeout(a2), l2 = 0, i2 = c2 = n2 = a2 = void 0;
    }, b2.flush = function() {
      return void 0 === a2 ? s2 : g2(li());
    }, b2;
  }, di = "Expected a function", pi = "__lodash_hash_undefined__", vi = "[object Function]", gi = "[object GeneratorFunction]", bi = /^\[object .+?Constructor\]$/, yi = "object" == typeof t && t && t.Object === Object && t, mi = "object" == typeof self && self && self.Object === Object && self, xi = yi || mi || Function("return this")();
  var Ei = Array.prototype, wi = Function.prototype, Si = Object.prototype, Oi = xi["__core-js_shared__"], ki = (function() {
    var t2 = /[^.]+$/.exec(Oi && Oi.keys && Oi.keys.IE_PROTO || "");
    return t2 ? "Symbol(src)_1." + t2 : "";
  })(), Ai = wi.toString, Ti = Si.hasOwnProperty, Li = Si.toString, zi = RegExp("^" + Ai.call(Ti).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), Ri = Ei.splice, _i = Di(xi, "Map"), Mi = Di(Object, "create");
  function Ci(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var i2 = t2[e2];
      this.set(i2[0], i2[1]);
    }
  }
  function Wi(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var i2 = t2[e2];
      this.set(i2[0], i2[1]);
    }
  }
  function ji(t2) {
    var e2 = -1, r2 = t2 ? t2.length : 0;
    for (this.clear(); ++e2 < r2; ) {
      var i2 = t2[e2];
      this.set(i2[0], i2[1]);
    }
  }
  function Ni(t2, e2) {
    for (var r2, i2, n2 = t2.length; n2--; ) if ((r2 = t2[n2][0]) === (i2 = e2) || r2 != r2 && i2 != i2) return n2;
    return -1;
  }
  function Ii(t2) {
    return !(!Fi(t2) || (e2 = t2, ki && ki in e2)) && ((function(t3) {
      var e3 = Fi(t3) ? Li.call(t3) : "";
      return e3 == vi || e3 == gi;
    })(t2) || (function(t3) {
      var e3 = false;
      if (null != t3 && "function" != typeof t3.toString) try {
        e3 = !!(t3 + "");
      } catch (t4) {
      }
      return e3;
    })(t2) ? zi : bi).test((function(t3) {
      if (null != t3) {
        try {
          return Ai.call(t3);
        } catch (t4) {
        }
        try {
          return t3 + "";
        } catch (t4) {
        }
      }
      return "";
    })(t2));
    var e2;
  }
  function Bi(t2, e2) {
    var r2, i2, n2 = t2.__data__;
    return ("string" == (i2 = typeof (r2 = e2)) || "number" == i2 || "symbol" == i2 || "boolean" == i2 ? "__proto__" !== r2 : null === r2) ? n2["string" == typeof e2 ? "string" : "hash"] : n2.map;
  }
  function Di(t2, e2) {
    var r2 = (function(t3, e3) {
      return null == t3 ? void 0 : t3[e3];
    })(t2, e2);
    return Ii(r2) ? r2 : void 0;
  }
  function Pi(t2, e2) {
    if ("function" != typeof t2 || e2 && "function" != typeof e2) throw new TypeError(di);
    var r2 = function() {
      var i2 = arguments, n2 = e2 ? e2.apply(this, i2) : i2[0], o2 = r2.cache;
      if (o2.has(n2)) return o2.get(n2);
      var s2 = t2.apply(this, i2);
      return r2.cache = o2.set(n2, s2), s2;
    };
    return r2.cache = new (Pi.Cache || ji)(), r2;
  }
  function Fi(t2) {
    var e2 = typeof t2;
    return !!t2 && ("object" == e2 || "function" == e2);
  }
  Ci.prototype.clear = function() {
    this.__data__ = Mi ? Mi(null) : {};
  }, Ci.prototype.delete = function(t2) {
    return this.has(t2) && delete this.__data__[t2];
  }, Ci.prototype.get = function(t2) {
    var e2 = this.__data__;
    if (Mi) {
      var r2 = e2[t2];
      return r2 === pi ? void 0 : r2;
    }
    return Ti.call(e2, t2) ? e2[t2] : void 0;
  }, Ci.prototype.has = function(t2) {
    var e2 = this.__data__;
    return Mi ? void 0 !== e2[t2] : Ti.call(e2, t2);
  }, Ci.prototype.set = function(t2, e2) {
    return this.__data__[t2] = Mi && void 0 === e2 ? pi : e2, this;
  }, Wi.prototype.clear = function() {
    this.__data__ = [];
  }, Wi.prototype.delete = function(t2) {
    var e2 = this.__data__, r2 = Ni(e2, t2);
    return !(r2 < 0) && (r2 == e2.length - 1 ? e2.pop() : Ri.call(e2, r2, 1), true);
  }, Wi.prototype.get = function(t2) {
    var e2 = this.__data__, r2 = Ni(e2, t2);
    return r2 < 0 ? void 0 : e2[r2][1];
  }, Wi.prototype.has = function(t2) {
    return Ni(this.__data__, t2) > -1;
  }, Wi.prototype.set = function(t2, e2) {
    var r2 = this.__data__, i2 = Ni(r2, t2);
    return i2 < 0 ? r2.push([t2, e2]) : r2[i2][1] = e2, this;
  }, ji.prototype.clear = function() {
    this.__data__ = { hash: new Ci(), map: new (_i || Wi)(), string: new Ci() };
  }, ji.prototype.delete = function(t2) {
    return Bi(this, t2).delete(t2);
  }, ji.prototype.get = function(t2) {
    return Bi(this, t2).get(t2);
  }, ji.prototype.has = function(t2) {
    return Bi(this, t2).has(t2);
  }, ji.prototype.set = function(t2, e2) {
    return Bi(this, t2).set(t2, e2), this;
  }, Pi.Cache = ji;
  var Vi, Xi = Pi, Hi = [], qi = "ResizeObserver loop completed with undelivered notifications.";
  !(function(t2) {
    t2.BORDER_BOX = "border-box", t2.CONTENT_BOX = "content-box", t2.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
  })(Vi || (Vi = {}));
  var $i, Yi = function(t2) {
    return Object.freeze(t2);
  }, Gi = function(t2, e2) {
    this.inlineSize = t2, this.blockSize = e2, Yi(this);
  }, Ui = (function() {
    function t2(t3, e2, r2, i2) {
      return this.x = t3, this.y = e2, this.width = r2, this.height = i2, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Yi(this);
    }
    return t2.prototype.toJSON = function() {
      var t3 = this;
      return { x: t3.x, y: t3.y, top: t3.top, right: t3.right, bottom: t3.bottom, left: t3.left, width: t3.width, height: t3.height };
    }, t2.fromRect = function(e2) {
      return new t2(e2.x, e2.y, e2.width, e2.height);
    }, t2;
  })(), Qi = function(t2) {
    return t2 instanceof SVGElement && "getBBox" in t2;
  }, Ki = function(t2) {
    if (Qi(t2)) {
      var e2 = t2.getBBox(), r2 = e2.width, i2 = e2.height;
      return !r2 && !i2;
    }
    var n2 = t2, o2 = n2.offsetWidth, s2 = n2.offsetHeight;
    return !(o2 || s2 || t2.getClientRects().length);
  }, Ji = function(t2) {
    var e2, r2;
    if (t2 instanceof Element) return true;
    var i2 = null === (r2 = null === (e2 = t2) || void 0 === e2 ? void 0 : e2.ownerDocument) || void 0 === r2 ? void 0 : r2.defaultView;
    return !!(i2 && t2 instanceof i2.Element);
  }, Zi = "undefined" != typeof window ? window : {}, tn = /* @__PURE__ */ new WeakMap(), en = /auto|scroll/, rn = /^tb|vertical/, nn = /msie|trident/i.test(Zi.navigator && Zi.navigator.userAgent), on = function(t2) {
    return parseFloat(t2 || "0");
  }, sn = function(t2, e2, r2) {
    return void 0 === t2 && (t2 = 0), void 0 === e2 && (e2 = 0), void 0 === r2 && (r2 = false), new Gi((r2 ? e2 : t2) || 0, (r2 ? t2 : e2) || 0);
  }, an = Yi({ devicePixelContentBoxSize: sn(), borderBoxSize: sn(), contentBoxSize: sn(), contentRect: new Ui(0, 0, 0, 0) }), cn = function(t2, e2) {
    if (void 0 === e2 && (e2 = false), tn.has(t2) && !e2) return tn.get(t2);
    if (Ki(t2)) return tn.set(t2, an), an;
    var r2 = getComputedStyle(t2), i2 = Qi(t2) && t2.ownerSVGElement && t2.getBBox(), n2 = !nn && "border-box" === r2.boxSizing, o2 = rn.test(r2.writingMode || ""), s2 = !i2 && en.test(r2.overflowY || ""), a2 = !i2 && en.test(r2.overflowX || ""), c2 = i2 ? 0 : on(r2.paddingTop), l2 = i2 ? 0 : on(r2.paddingRight), u2 = i2 ? 0 : on(r2.paddingBottom), f2 = i2 ? 0 : on(r2.paddingLeft), h2 = i2 ? 0 : on(r2.borderTopWidth), d2 = i2 ? 0 : on(r2.borderRightWidth), p2 = i2 ? 0 : on(r2.borderBottomWidth), v2 = f2 + l2, g2 = c2 + u2, b2 = (i2 ? 0 : on(r2.borderLeftWidth)) + d2, y2 = h2 + p2, m2 = a2 ? t2.offsetHeight - y2 - t2.clientHeight : 0, x2 = s2 ? t2.offsetWidth - b2 - t2.clientWidth : 0, E2 = n2 ? v2 + b2 : 0, w2 = n2 ? g2 + y2 : 0, S2 = i2 ? i2.width : on(r2.width) - E2 - x2, O2 = i2 ? i2.height : on(r2.height) - w2 - m2, k2 = S2 + v2 + x2 + b2, A2 = O2 + g2 + m2 + y2, T2 = Yi({ devicePixelContentBoxSize: sn(Math.round(S2 * devicePixelRatio), Math.round(O2 * devicePixelRatio), o2), borderBoxSize: sn(k2, A2, o2), contentBoxSize: sn(S2, O2, o2), contentRect: new Ui(f2, c2, S2, O2) });
    return tn.set(t2, T2), T2;
  }, ln = function(t2, e2, r2) {
    var i2 = cn(t2, r2), n2 = i2.borderBoxSize, o2 = i2.contentBoxSize, s2 = i2.devicePixelContentBoxSize;
    switch (e2) {
      case Vi.DEVICE_PIXEL_CONTENT_BOX:
        return s2;
      case Vi.BORDER_BOX:
        return n2;
      default:
        return o2;
    }
  }, un = function(t2) {
    var e2 = cn(t2);
    this.target = t2, this.contentRect = e2.contentRect, this.borderBoxSize = Yi([e2.borderBoxSize]), this.contentBoxSize = Yi([e2.contentBoxSize]), this.devicePixelContentBoxSize = Yi([e2.devicePixelContentBoxSize]);
  }, fn = function(t2) {
    if (Ki(t2)) return 1 / 0;
    for (var e2 = 0, r2 = t2.parentNode; r2; ) e2 += 1, r2 = r2.parentNode;
    return e2;
  }, hn = function() {
    var t2 = 1 / 0, e2 = [];
    Hi.forEach((function(r3) {
      if (0 !== r3.activeTargets.length) {
        var i3 = [];
        r3.activeTargets.forEach((function(e3) {
          var r4 = new un(e3.target), n2 = fn(e3.target);
          i3.push(r4), e3.lastReportedSize = ln(e3.target, e3.observedBox), n2 < t2 && (t2 = n2);
        })), e2.push((function() {
          r3.callback.call(r3.observer, i3, r3.observer);
        })), r3.activeTargets.splice(0, r3.activeTargets.length);
      }
    }));
    for (var r2 = 0, i2 = e2; r2 < i2.length; r2++) {
      (0, i2[r2])();
    }
    return t2;
  }, dn = function(t2) {
    Hi.forEach((function(e2) {
      e2.activeTargets.splice(0, e2.activeTargets.length), e2.skippedTargets.splice(0, e2.skippedTargets.length), e2.observationTargets.forEach((function(r2) {
        r2.isActive() && (fn(r2.target) > t2 ? e2.activeTargets.push(r2) : e2.skippedTargets.push(r2));
      }));
    }));
  }, pn = function() {
    var t2, e2 = 0;
    for (dn(e2); Hi.some((function(t3) {
      return t3.activeTargets.length > 0;
    })); ) e2 = hn(), dn(e2);
    return Hi.some((function(t3) {
      return t3.skippedTargets.length > 0;
    })) && ("function" == typeof ErrorEvent ? t2 = new ErrorEvent("error", { message: qi }) : ((t2 = document.createEvent("Event")).initEvent("error", false, false), t2.message = qi), window.dispatchEvent(t2)), e2 > 0;
  }, vn = [], gn = function(t2) {
    if (!$i) {
      var e2 = 0, r2 = document.createTextNode("");
      new MutationObserver((function() {
        return vn.splice(0).forEach((function(t3) {
          return t3();
        }));
      })).observe(r2, { characterData: true }), $i = function() {
        r2.textContent = "" + (e2 ? e2-- : e2++);
      };
    }
    vn.push(t2), $i();
  }, bn = 0, yn = { attributes: true, characterData: true, childList: true, subtree: true }, mn = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], xn = function(t2) {
    return void 0 === t2 && (t2 = 0), Date.now() + t2;
  }, En = false, wn = new ((function() {
    function t2() {
      var t3 = this;
      this.stopped = true, this.listener = function() {
        return t3.schedule();
      };
    }
    return t2.prototype.run = function(t3) {
      var e2 = this;
      if (void 0 === t3 && (t3 = 250), !En) {
        En = true;
        var r2, i2 = xn(t3);
        r2 = function() {
          var r3 = false;
          try {
            r3 = pn();
          } finally {
            if (En = false, t3 = i2 - xn(), !bn) return;
            r3 ? e2.run(1e3) : t3 > 0 ? e2.run(t3) : e2.start();
          }
        }, gn((function() {
          requestAnimationFrame(r2);
        }));
      }
    }, t2.prototype.schedule = function() {
      this.stop(), this.run();
    }, t2.prototype.observe = function() {
      var t3 = this, e2 = function() {
        return t3.observer && t3.observer.observe(document.body, yn);
      };
      document.body ? e2() : Zi.addEventListener("DOMContentLoaded", e2);
    }, t2.prototype.start = function() {
      var t3 = this;
      this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), mn.forEach((function(e2) {
        return Zi.addEventListener(e2, t3.listener, true);
      })));
    }, t2.prototype.stop = function() {
      var t3 = this;
      this.stopped || (this.observer && this.observer.disconnect(), mn.forEach((function(e2) {
        return Zi.removeEventListener(e2, t3.listener, true);
      })), this.stopped = true);
    }, t2;
  })())(), Sn = function(t2) {
    !bn && t2 > 0 && wn.start(), !(bn += t2) && wn.stop();
  }, On = (function() {
    function t2(t3, e2) {
      this.target = t3, this.observedBox = e2 || Vi.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
    }
    return t2.prototype.isActive = function() {
      var t3, e2 = ln(this.target, this.observedBox, true);
      return t3 = this.target, Qi(t3) || (function(t4) {
        switch (t4.tagName) {
          case "INPUT":
            if ("image" !== t4.type) break;
          case "VIDEO":
          case "AUDIO":
          case "EMBED":
          case "OBJECT":
          case "CANVAS":
          case "IFRAME":
          case "IMG":
            return true;
        }
        return false;
      })(t3) || "inline" !== getComputedStyle(t3).display || (this.lastReportedSize = e2), this.lastReportedSize.inlineSize !== e2.inlineSize || this.lastReportedSize.blockSize !== e2.blockSize;
    }, t2;
  })(), kn = function(t2, e2) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t2, this.callback = e2;
  }, An = /* @__PURE__ */ new WeakMap(), Tn = function(t2, e2) {
    for (var r2 = 0; r2 < t2.length; r2 += 1) if (t2[r2].target === e2) return r2;
    return -1;
  }, Ln = (function() {
    function t2() {
    }
    return t2.connect = function(t3, e2) {
      var r2 = new kn(t3, e2);
      An.set(t3, r2);
    }, t2.observe = function(t3, e2, r2) {
      var i2 = An.get(t3), n2 = 0 === i2.observationTargets.length;
      Tn(i2.observationTargets, e2) < 0 && (n2 && Hi.push(i2), i2.observationTargets.push(new On(e2, r2 && r2.box)), Sn(1), wn.schedule());
    }, t2.unobserve = function(t3, e2) {
      var r2 = An.get(t3), i2 = Tn(r2.observationTargets, e2), n2 = 1 === r2.observationTargets.length;
      i2 >= 0 && (n2 && Hi.splice(Hi.indexOf(r2), 1), r2.observationTargets.splice(i2, 1), Sn(-1));
    }, t2.disconnect = function(t3) {
      var e2 = this, r2 = An.get(t3);
      r2.observationTargets.slice().forEach((function(r3) {
        return e2.unobserve(t3, r3.target);
      })), r2.activeTargets.splice(0, r2.activeTargets.length);
    }, t2;
  })(), zn = (function() {
    function t2(t3) {
      if (0 === arguments.length) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
      if ("function" != typeof t3) throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
      Ln.connect(this, t3);
    }
    return t2.prototype.observe = function(t3, e2) {
      if (0 === arguments.length) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
      if (!Ji(t3)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
      Ln.observe(this, t3, e2);
    }, t2.prototype.unobserve = function(t3) {
      if (0 === arguments.length) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
      if (!Ji(t3)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
      Ln.unobserve(this, t3);
    }, t2.prototype.disconnect = function() {
      Ln.disconnect(this);
    }, t2.toString = function() {
      return "function ResizeObserver () { [polyfill code] }";
    }, t2;
  })(), Rn = function(t2) {
    return function(e2, r2, i2, n2) {
      Tt(r2);
      var o2 = zt(e2), s2 = b(o2), a2 = st(o2.length), c2 = t2 ? a2 - 1 : 0, l2 = t2 ? -1 : 1;
      if (i2 < 2) for (; ; ) {
        if (c2 in s2) {
          n2 = s2[c2], c2 += l2;
          break;
        }
        if (c2 += l2, t2 ? c2 < 0 : a2 <= c2) throw TypeError("Reduce of empty array with no initial value");
      }
      for (; t2 ? c2 >= 0 : a2 > c2; c2 += l2) c2 in s2 && (n2 = r2(n2, s2[c2], c2, o2));
      return n2;
    };
  }, _n = { left: Rn(false), right: Rn(true) }.left;
  At({ target: "Array", proto: true, forced: Pt("reduce") }, { reduce: function(t2) {
    return _n(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
  } });
  var Mn = M.f, Cn = Function.prototype, Wn = Cn.toString, jn = /^\s*function ([^ (]*)/;
  !l || "name" in Cn || Mn(Cn, "name", { configurable: true, get: function() {
    try {
      return Wn.call(this).match(jn)[1];
    } catch (t2) {
      return "";
    }
  } });
  var Nn, In, Bn = function() {
    var t2 = R(this), e2 = "";
    return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.dotAll && (e2 += "s"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
  }, Dn = RegExp.prototype.exec, Pn = String.prototype.replace, Fn = Dn, Vn = (Nn = /a/, In = /b*/g, Dn.call(Nn, "a"), Dn.call(In, "a"), 0 !== Nn.lastIndex || 0 !== In.lastIndex), Xn = void 0 !== /()??/.exec("")[1];
  (Vn || Xn) && (Fn = function(t2) {
    var e2, r2, i2, n2, o2 = this;
    return Xn && (r2 = new RegExp("^" + o2.source + "$(?!\\s)", Bn.call(o2))), Vn && (e2 = o2.lastIndex), i2 = Dn.call(o2, t2), Vn && i2 && (o2.lastIndex = o2.global ? i2.index + i2[0].length : e2), Xn && i2 && i2.length > 1 && Pn.call(i2[0], r2, (function() {
      for (n2 = 1; n2 < arguments.length - 2; n2++) void 0 === arguments[n2] && (i2[n2] = void 0);
    })), i2;
  });
  var Hn = Fn;
  At({ target: "RegExp", proto: true, forced: /./.exec !== Hn }, { exec: Hn });
  var qn = Wt("species"), $n = !c((function() {
    var t2 = /./;
    return t2.exec = function() {
      var t3 = [];
      return t3.groups = { a: "7" }, t3;
    }, "7" !== "".replace(t2, "$<a>");
  })), Yn = !c((function() {
    var t2 = /(?:)/, e2 = t2.exec;
    t2.exec = function() {
      return e2.apply(this, arguments);
    };
    var r2 = "ab".split(t2);
    return 2 !== r2.length || "a" !== r2[0] || "b" !== r2[1];
  })), Gn = function(t2, e2, r2, i2) {
    var n2 = Wt(t2), o2 = !c((function() {
      var e3 = {};
      return e3[n2] = function() {
        return 7;
      }, 7 != ""[t2](e3);
    })), s2 = o2 && !c((function() {
      var e3 = false, r3 = /a/;
      return r3.exec = function() {
        return e3 = true, null;
      }, "split" === t2 && (r3.constructor = {}, r3.constructor[qn] = function() {
        return r3;
      }), r3[n2](""), !e3;
    }));
    if (!o2 || !s2 || "replace" === t2 && !$n || "split" === t2 && !Yn) {
      var a2 = /./[n2], l2 = r2(n2, ""[t2], (function(t3, e3, r3, i3, n3) {
        return e3.exec === Hn ? o2 && !n3 ? { done: true, value: a2.call(e3, r3, i3) } : { done: true, value: t3.call(r3, e3, i3) } : { done: false };
      })), u2 = l2[0], f2 = l2[1];
      J(String.prototype, t2, u2), J(RegExp.prototype, n2, 2 == e2 ? function(t3, e3) {
        return f2.call(t3, this, e3);
      } : function(t3) {
        return f2.call(t3, this);
      }), i2 && C(RegExp.prototype[n2], "sham", true);
    }
  }, Un = Ue.charAt, Qn = function(t2, e2, r2) {
    return e2 + (r2 ? Un(t2, e2).length : 1);
  }, Kn = function(t2, e2) {
    var r2 = t2.exec;
    if ("function" == typeof r2) {
      var i2 = r2.call(t2, e2);
      if ("object" != typeof i2) throw TypeError("RegExp exec method returned something other than an Object or null");
      return i2;
    }
    if ("RegExp" !== v(t2)) throw TypeError("RegExp#exec called on incompatible receiver");
    return Hn.call(t2, e2);
  };
  Gn("match", 1, (function(t2, e2, r2) {
    return [function(e3) {
      var r3 = y(this), i2 = null == e3 ? void 0 : e3[t2];
      return void 0 !== i2 ? i2.call(e3, r3) : new RegExp(e3)[t2](String(r3));
    }, function(t3) {
      var i2 = r2(e2, t3, this);
      if (i2.done) return i2.value;
      var n2 = R(t3), o2 = String(this);
      if (!n2.global) return Kn(n2, o2);
      var s2 = n2.unicode;
      n2.lastIndex = 0;
      for (var a2, c2 = [], l2 = 0; null !== (a2 = Kn(n2, o2)); ) {
        var u2 = String(a2[0]);
        c2[l2] = u2, "" === u2 && (n2.lastIndex = Qn(o2, st(n2.lastIndex), s2)), l2++;
      }
      return 0 === l2 ? null : c2;
    }];
  }));
  var Jn = Math.max, Zn = Math.min, to = Math.floor, eo = /\$([$&'`]|\d\d?|<[^>]*>)/g, ro = /\$([$&'`]|\d\d?)/g;
  Gn("replace", 2, (function(t2, e2, r2) {
    return [function(r3, i3) {
      var n2 = y(this), o2 = null == r3 ? void 0 : r3[t2];
      return void 0 !== o2 ? o2.call(r3, n2, i3) : e2.call(String(n2), r3, i3);
    }, function(t3, n2) {
      var o2 = r2(e2, t3, this, n2);
      if (o2.done) return o2.value;
      var s2 = R(t3), a2 = String(this), c2 = "function" == typeof n2;
      c2 || (n2 = String(n2));
      var l2 = s2.global;
      if (l2) {
        var u2 = s2.unicode;
        s2.lastIndex = 0;
      }
      for (var f2 = []; ; ) {
        var h2 = Kn(s2, a2);
        if (null === h2) break;
        if (f2.push(h2), !l2) break;
        "" === String(h2[0]) && (s2.lastIndex = Qn(a2, st(s2.lastIndex), u2));
      }
      for (var d2, p2 = "", v2 = 0, g2 = 0; g2 < f2.length; g2++) {
        h2 = f2[g2];
        for (var b2 = String(h2[0]), y2 = Jn(Zn(nt(h2.index), a2.length), 0), m2 = [], x2 = 1; x2 < h2.length; x2++) m2.push(void 0 === (d2 = h2[x2]) ? d2 : String(d2));
        var E2 = h2.groups;
        if (c2) {
          var w2 = [b2].concat(m2, y2, a2);
          void 0 !== E2 && w2.push(E2);
          var S2 = String(n2.apply(void 0, w2));
        } else S2 = i2(b2, a2, y2, m2, E2, n2);
        y2 >= v2 && (p2 += a2.slice(v2, y2) + S2, v2 = y2 + b2.length);
      }
      return p2 + a2.slice(v2);
    }];
    function i2(t3, r3, i3, n2, o2, s2) {
      var a2 = i3 + t3.length, c2 = n2.length, l2 = ro;
      return void 0 !== o2 && (o2 = zt(o2), l2 = eo), e2.call(s2, l2, (function(e3, s3) {
        var l3;
        switch (s3.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t3;
          case "`":
            return r3.slice(0, i3);
          case "'":
            return r3.slice(a2);
          case "<":
            l3 = o2[s3.slice(1, -1)];
            break;
          default:
            var u2 = +s3;
            if (0 === u2) return e3;
            if (u2 > c2) {
              var f2 = to(u2 / 10);
              return 0 === f2 ? e3 : f2 <= c2 ? void 0 === n2[f2 - 1] ? s3.charAt(1) : n2[f2 - 1] + s3.charAt(1) : e3;
            }
            l3 = n2[u2 - 1];
        }
        return void 0 === l3 ? "" : l3;
      }));
    }
  }));
  var io = function(t2) {
    return Array.prototype.reduce.call(t2, (function(t3, e2) {
      var r2 = e2.name.match(/data-simplebar-(.+)/);
      if (r2) {
        var i2 = r2[1].replace(/\W+(.)/g, (function(t4, e3) {
          return e3.toUpperCase();
        }));
        switch (e2.value) {
          case "true":
            t3[i2] = true;
            break;
          case "false":
            t3[i2] = false;
            break;
          case void 0:
            t3[i2] = true;
            break;
          default:
            t3[i2] = e2.value;
        }
      }
      return t3;
    }), {});
  };
  function no(t2) {
    return t2 && t2.ownerDocument && t2.ownerDocument.defaultView ? t2.ownerDocument.defaultView : window;
  }
  function oo(t2) {
    return t2 && t2.ownerDocument ? t2.ownerDocument : document;
  }
  var so = null, ao = null;
  function co(t2) {
    if (null === so) {
      var e2 = oo(t2);
      if (void 0 === e2) return so = 0;
      var r2 = e2.body, i2 = e2.createElement("div");
      i2.classList.add("simplebar-hide-scrollbar"), r2.appendChild(i2);
      var n2 = i2.getBoundingClientRect().right;
      r2.removeChild(i2), so = n2;
    }
    return so;
  }
  Yt && window.addEventListener("resize", (function() {
    ao !== window.devicePixelRatio && (ao = window.devicePixelRatio, so = null);
  }));
  var lo = (function() {
    function t2(e3, r2) {
      var i2 = this;
      this.onScroll = function() {
        var t3 = no(i2.el);
        i2.scrollXTicking || (t3.requestAnimationFrame(i2.scrollX), i2.scrollXTicking = true), i2.scrollYTicking || (t3.requestAnimationFrame(i2.scrollY), i2.scrollYTicking = true);
      }, this.scrollX = function() {
        i2.axis.x.isOverflowing && (i2.showScrollbar("x"), i2.positionScrollbar("x")), i2.scrollXTicking = false;
      }, this.scrollY = function() {
        i2.axis.y.isOverflowing && (i2.showScrollbar("y"), i2.positionScrollbar("y")), i2.scrollYTicking = false;
      }, this.onMouseEnter = function() {
        i2.showScrollbar("x"), i2.showScrollbar("y");
      }, this.onMouseMove = function(t3) {
        i2.mouseX = t3.clientX, i2.mouseY = t3.clientY, (i2.axis.x.isOverflowing || i2.axis.x.forceVisible) && i2.onMouseMoveForAxis("x"), (i2.axis.y.isOverflowing || i2.axis.y.forceVisible) && i2.onMouseMoveForAxis("y");
      }, this.onMouseLeave = function() {
        i2.onMouseMove.cancel(), (i2.axis.x.isOverflowing || i2.axis.x.forceVisible) && i2.onMouseLeaveForAxis("x"), (i2.axis.y.isOverflowing || i2.axis.y.forceVisible) && i2.onMouseLeaveForAxis("y"), i2.mouseX = -1, i2.mouseY = -1;
      }, this.onWindowResize = function() {
        i2.scrollbarWidth = i2.getScrollbarWidth(), i2.hideNativeScrollbar();
      }, this.hideScrollbars = function() {
        i2.axis.x.track.rect = i2.axis.x.track.el.getBoundingClientRect(), i2.axis.y.track.rect = i2.axis.y.track.el.getBoundingClientRect(), i2.isWithinBounds(i2.axis.y.track.rect) || (i2.axis.y.scrollbar.el.classList.remove(i2.classNames.visible), i2.axis.y.isVisible = false), i2.isWithinBounds(i2.axis.x.track.rect) || (i2.axis.x.scrollbar.el.classList.remove(i2.classNames.visible), i2.axis.x.isVisible = false);
      }, this.onPointerEvent = function(t3) {
        var e4, r3;
        i2.axis.x.track.rect = i2.axis.x.track.el.getBoundingClientRect(), i2.axis.y.track.rect = i2.axis.y.track.el.getBoundingClientRect(), (i2.axis.x.isOverflowing || i2.axis.x.forceVisible) && (e4 = i2.isWithinBounds(i2.axis.x.track.rect)), (i2.axis.y.isOverflowing || i2.axis.y.forceVisible) && (r3 = i2.isWithinBounds(i2.axis.y.track.rect)), (e4 || r3) && (t3.preventDefault(), t3.stopPropagation(), "mousedown" === t3.type && (e4 && (i2.axis.x.scrollbar.rect = i2.axis.x.scrollbar.el.getBoundingClientRect(), i2.isWithinBounds(i2.axis.x.scrollbar.rect) ? i2.onDragStart(t3, "x") : i2.onTrackClick(t3, "x")), r3 && (i2.axis.y.scrollbar.rect = i2.axis.y.scrollbar.el.getBoundingClientRect(), i2.isWithinBounds(i2.axis.y.scrollbar.rect) ? i2.onDragStart(t3, "y") : i2.onTrackClick(t3, "y"))));
      }, this.drag = function(e4) {
        var r3 = i2.axis[i2.draggedAxis].track, n2 = r3.rect[i2.axis[i2.draggedAxis].sizeAttr], o2 = i2.axis[i2.draggedAxis].scrollbar, s2 = i2.contentWrapperEl[i2.axis[i2.draggedAxis].scrollSizeAttr], a2 = parseInt(i2.elStyles[i2.axis[i2.draggedAxis].sizeAttr], 10);
        e4.preventDefault(), e4.stopPropagation();
        var c2 = (("y" === i2.draggedAxis ? e4.pageY : e4.pageX) - r3.rect[i2.axis[i2.draggedAxis].offsetAttr] - i2.axis[i2.draggedAxis].dragOffset) / (n2 - o2.size) * (s2 - a2);
        "x" === i2.draggedAxis && (c2 = i2.isRtl && t2.getRtlHelpers().isRtlScrollbarInverted ? c2 - (n2 + o2.size) : c2, c2 = i2.isRtl && t2.getRtlHelpers().isRtlScrollingInverted ? -c2 : c2), i2.contentWrapperEl[i2.axis[i2.draggedAxis].scrollOffsetAttr] = c2;
      }, this.onEndDrag = function(t3) {
        var e4 = oo(i2.el), r3 = no(i2.el);
        t3.preventDefault(), t3.stopPropagation(), i2.el.classList.remove(i2.classNames.dragging), e4.removeEventListener("mousemove", i2.drag, true), e4.removeEventListener("mouseup", i2.onEndDrag, true), i2.removePreventClickId = r3.setTimeout((function() {
          e4.removeEventListener("click", i2.preventClick, true), e4.removeEventListener("dblclick", i2.preventClick, true), i2.removePreventClickId = null;
        }));
      }, this.preventClick = function(t3) {
        t3.preventDefault(), t3.stopPropagation();
      }, this.el = e3, this.minScrollbarWidth = 20, this.options = Object.assign({}, t2.defaultOptions, {}, r2), this.classNames = Object.assign({}, t2.defaultOptions.classNames, {}, this.options.classNames), this.axis = { x: { scrollOffsetAttr: "scrollLeft", sizeAttr: "width", scrollSizeAttr: "scrollWidth", offsetSizeAttr: "offsetWidth", offsetAttr: "left", overflowAttr: "overflowX", dragOffset: 0, isOverflowing: true, isVisible: false, forceVisible: false, track: {}, scrollbar: {} }, y: { scrollOffsetAttr: "scrollTop", sizeAttr: "height", scrollSizeAttr: "scrollHeight", offsetSizeAttr: "offsetHeight", offsetAttr: "top", overflowAttr: "overflowY", dragOffset: 0, isOverflowing: true, isVisible: false, forceVisible: false, track: {}, scrollbar: {} } }, this.removePreventClickId = null, t2.instances.has(this.el) || (this.recalculate = Gr(this.recalculate.bind(this), 64), this.onMouseMove = Gr(this.onMouseMove.bind(this), 64), this.hideScrollbars = hi(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = hi(this.onWindowResize.bind(this), 64, { leading: true }), t2.getRtlHelpers = Xi(t2.getRtlHelpers), this.init());
    }
    t2.getRtlHelpers = function() {
      var e3 = document.createElement("div");
      e3.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
      var r2 = e3.firstElementChild;
      document.body.appendChild(r2);
      var i2 = r2.firstElementChild;
      r2.scrollLeft = 0;
      var n2 = t2.getOffset(r2), o2 = t2.getOffset(i2);
      r2.scrollLeft = 999;
      var s2 = t2.getOffset(i2);
      return { isRtlScrollingInverted: n2.left !== o2.left && o2.left - s2.left != 0, isRtlScrollbarInverted: n2.left !== o2.left };
    }, t2.getOffset = function(t3) {
      var e3 = t3.getBoundingClientRect(), r2 = oo(t3), i2 = no(t3);
      return { top: e3.top + (i2.pageYOffset || r2.documentElement.scrollTop), left: e3.left + (i2.pageXOffset || r2.documentElement.scrollLeft) };
    };
    var e2 = t2.prototype;
    return e2.init = function() {
      t2.instances.set(this.el, this), Yt && (this.initDOM(), this.setAccessibilityAttributes(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners());
    }, e2.initDOM = function() {
      var t3 = this;
      if (Array.prototype.filter.call(this.el.children, (function(e4) {
        return e4.classList.contains(t3.classNames.wrapper);
      })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
      else {
        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild; ) this.contentEl.appendChild(this.el.firstChild);
        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl);
      }
      if (!this.axis.x.track.el || !this.axis.y.track.el) {
        var e3 = document.createElement("div"), r2 = document.createElement("div");
        e3.classList.add(this.classNames.track), r2.classList.add(this.classNames.scrollbar), e3.appendChild(r2), this.axis.x.track.el = e3.cloneNode(true), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = e3.cloneNode(true), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el);
      }
      this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init");
    }, e2.setAccessibilityAttributes = function() {
      var t3 = this.options.ariaLabel || "scrollable content";
      this.contentWrapperEl.setAttribute("tabindex", "0"), this.contentWrapperEl.setAttribute("role", "region"), this.contentWrapperEl.setAttribute("aria-label", t3);
    }, e2.initListeners = function() {
      var t3 = this, e3 = no(this.el);
      this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e4) {
        t3.el.addEventListener(e4, t3.onPointerEvent, true);
      })), ["touchstart", "touchend", "touchmove"].forEach((function(e4) {
        t3.el.addEventListener(e4, t3.onPointerEvent, { capture: true, passive: true });
      })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), e3.addEventListener("resize", this.onWindowResize);
      var r2 = false, i2 = e3.ResizeObserver || zn;
      this.resizeObserver = new i2((function() {
        r2 && t3.recalculate();
      })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), e3.requestAnimationFrame((function() {
        r2 = true;
      })), this.mutationObserver = new e3.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, { childList: true, subtree: true, characterData: true });
    }, e2.recalculate = function() {
      var t3 = no(this.el);
      this.elStyles = t3.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
      var e3 = this.heightAutoObserverEl.offsetHeight <= 1, r2 = this.heightAutoObserverEl.offsetWidth <= 1, i2 = this.contentEl.offsetWidth, n2 = this.contentWrapperEl.offsetWidth, o2 = this.elStyles.overflowX, s2 = this.elStyles.overflowY;
      this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
      var a2 = this.contentEl.scrollHeight, c2 = this.contentEl.scrollWidth;
      this.contentWrapperEl.style.height = e3 ? "auto" : "100%", this.placeholderEl.style.width = r2 ? i2 + "px" : "auto", this.placeholderEl.style.height = a2 + "px";
      var l2 = this.contentWrapperEl.offsetHeight;
      this.axis.x.isOverflowing = c2 > i2, this.axis.y.isOverflowing = a2 > l2, this.axis.x.isOverflowing = "hidden" !== o2 && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== s2 && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || true === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || true === this.options.forceVisible, this.hideNativeScrollbar();
      var u2 = this.axis.x.isOverflowing ? this.scrollbarWidth : 0, f2 = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
      this.axis.x.isOverflowing = this.axis.x.isOverflowing && c2 > n2 - f2, this.axis.y.isOverflowing = this.axis.y.isOverflowing && a2 > l2 - u2, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y");
    }, e2.getScrollbarSize = function(t3) {
      if (void 0 === t3 && (t3 = "y"), !this.axis[t3].isOverflowing) return 0;
      var e3, r2 = this.contentEl[this.axis[t3].scrollSizeAttr], i2 = this.axis[t3].track.el[this.axis[t3].offsetSizeAttr], n2 = i2 / r2;
      return e3 = Math.max(~~(n2 * i2), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (e3 = Math.min(e3, this.options.scrollbarMaxSize)), e3;
    }, e2.positionScrollbar = function(e3) {
      if (void 0 === e3 && (e3 = "y"), this.axis[e3].isOverflowing) {
        var r2 = this.contentWrapperEl[this.axis[e3].scrollSizeAttr], i2 = this.axis[e3].track.el[this.axis[e3].offsetSizeAttr], n2 = parseInt(this.elStyles[this.axis[e3].sizeAttr], 10), o2 = this.axis[e3].scrollbar, s2 = this.contentWrapperEl[this.axis[e3].scrollOffsetAttr], a2 = (s2 = "x" === e3 && this.isRtl && t2.getRtlHelpers().isRtlScrollingInverted ? -s2 : s2) / (r2 - n2), c2 = ~~((i2 - o2.size) * a2);
        c2 = "x" === e3 && this.isRtl && t2.getRtlHelpers().isRtlScrollbarInverted ? c2 + (i2 - o2.size) : c2, o2.el.style.transform = "x" === e3 ? "translate3d(" + c2 + "px, 0, 0)" : "translate3d(0, " + c2 + "px, 0)";
      }
    }, e2.toggleTrackVisibility = function(t3) {
      void 0 === t3 && (t3 = "y");
      var e3 = this.axis[t3].track.el, r2 = this.axis[t3].scrollbar.el;
      this.axis[t3].isOverflowing || this.axis[t3].forceVisible ? (e3.style.visibility = "visible", this.contentWrapperEl.style[this.axis[t3].overflowAttr] = "scroll") : (e3.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[t3].overflowAttr] = "hidden"), this.axis[t3].isOverflowing ? r2.style.display = "block" : r2.style.display = "none";
    }, e2.hideNativeScrollbar = function() {
      this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0;
    }, e2.onMouseMoveForAxis = function(t3) {
      void 0 === t3 && (t3 = "y"), this.axis[t3].track.rect = this.axis[t3].track.el.getBoundingClientRect(), this.axis[t3].scrollbar.rect = this.axis[t3].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[t3].scrollbar.rect) ? this.axis[t3].scrollbar.el.classList.add(this.classNames.hover) : this.axis[t3].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[t3].track.rect) ? (this.showScrollbar(t3), this.axis[t3].track.el.classList.add(this.classNames.hover)) : this.axis[t3].track.el.classList.remove(this.classNames.hover);
    }, e2.onMouseLeaveForAxis = function(t3) {
      void 0 === t3 && (t3 = "y"), this.axis[t3].track.el.classList.remove(this.classNames.hover), this.axis[t3].scrollbar.el.classList.remove(this.classNames.hover);
    }, e2.showScrollbar = function(t3) {
      void 0 === t3 && (t3 = "y");
      var e3 = this.axis[t3].scrollbar.el;
      this.axis[t3].isVisible || (e3.classList.add(this.classNames.visible), this.axis[t3].isVisible = true), this.options.autoHide && this.hideScrollbars();
    }, e2.onDragStart = function(t3, e3) {
      void 0 === e3 && (e3 = "y");
      var r2 = oo(this.el), i2 = no(this.el), n2 = this.axis[e3].scrollbar, o2 = "y" === e3 ? t3.pageY : t3.pageX;
      this.axis[e3].dragOffset = o2 - n2.rect[this.axis[e3].offsetAttr], this.draggedAxis = e3, this.el.classList.add(this.classNames.dragging), r2.addEventListener("mousemove", this.drag, true), r2.addEventListener("mouseup", this.onEndDrag, true), null === this.removePreventClickId ? (r2.addEventListener("click", this.preventClick, true), r2.addEventListener("dblclick", this.preventClick, true)) : (i2.clearTimeout(this.removePreventClickId), this.removePreventClickId = null);
    }, e2.onTrackClick = function(t3, e3) {
      var r2 = this;
      if (void 0 === e3 && (e3 = "y"), this.options.clickOnTrack) {
        var i2 = no(this.el);
        this.axis[e3].scrollbar.rect = this.axis[e3].scrollbar.el.getBoundingClientRect();
        var n2 = this.axis[e3].scrollbar.rect[this.axis[e3].offsetAttr], o2 = parseInt(this.elStyles[this.axis[e3].sizeAttr], 10), s2 = this.contentWrapperEl[this.axis[e3].scrollOffsetAttr], a2 = ("y" === e3 ? this.mouseY - n2 : this.mouseX - n2) < 0 ? -1 : 1, c2 = -1 === a2 ? s2 - o2 : s2 + o2;
        !(function t4() {
          var n3, o3;
          -1 === a2 ? s2 > c2 && (s2 -= r2.options.clickOnTrackSpeed, r2.contentWrapperEl.scrollTo(((n3 = {})[r2.axis[e3].offsetAttr] = s2, n3)), i2.requestAnimationFrame(t4)) : s2 < c2 && (s2 += r2.options.clickOnTrackSpeed, r2.contentWrapperEl.scrollTo(((o3 = {})[r2.axis[e3].offsetAttr] = s2, o3)), i2.requestAnimationFrame(t4));
        })();
      }
    }, e2.getContentElement = function() {
      return this.contentEl;
    }, e2.getScrollElement = function() {
      return this.contentWrapperEl;
    }, e2.getScrollbarWidth = function() {
      try {
        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : co(this.el);
      } catch (t3) {
        return co(this.el);
      }
    }, e2.removeListeners = function() {
      var t3 = this, e3 = no(this.el);
      this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(e4) {
        t3.el.removeEventListener(e4, t3.onPointerEvent, true);
      })), ["touchstart", "touchend", "touchmove"].forEach((function(e4) {
        t3.el.removeEventListener(e4, t3.onPointerEvent, { capture: true, passive: true });
      })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), e3.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel();
    }, e2.unMount = function() {
      this.removeListeners(), t2.instances.delete(this.el);
    }, e2.isWithinBounds = function(t3) {
      return this.mouseX >= t3.left && this.mouseX <= t3.left + t3.width && this.mouseY >= t3.top && this.mouseY <= t3.top + t3.height;
    }, e2.findChild = function(t3, e3) {
      var r2 = t3.matches || t3.webkitMatchesSelector || t3.mozMatchesSelector || t3.msMatchesSelector;
      return Array.prototype.filter.call(t3.children, (function(t4) {
        return r2.call(t4, e3);
      }))[0];
    }, t2;
  })();
  return lo.defaultOptions = { autoHide: true, forceVisible: false, clickOnTrack: true, clickOnTrackSpeed: 40, classNames: { contentEl: "simplebar-content", contentWrapper: "simplebar-content-wrapper", offset: "simplebar-offset", mask: "simplebar-mask", wrapper: "simplebar-wrapper", placeholder: "simplebar-placeholder", scrollbar: "simplebar-scrollbar", track: "simplebar-track", heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper", heightAutoObserverEl: "simplebar-height-auto-observer", visible: "simplebar-visible", horizontal: "simplebar-horizontal", vertical: "simplebar-vertical", hover: "simplebar-hover", dragging: "simplebar-dragging" }, scrollbarMinSize: 25, scrollbarMaxSize: 0, timeout: 1e3 }, lo.instances = /* @__PURE__ */ new WeakMap(), lo.initDOMLoadedElements = function() {
    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"), (function(t2) {
      "init" === t2.getAttribute("data-simplebar") || lo.instances.has(t2) || new lo(t2, io(t2.attributes));
    }));
  }, lo.removeObserver = function() {
    this.globalObserver.disconnect();
  }, lo.initHtmlApi = function() {
    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(lo.handleMutations), this.globalObserver.observe(document, { childList: true, subtree: true })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements));
  }, lo.handleMutations = function(t2) {
    t2.forEach((function(t3) {
      Array.prototype.forEach.call(t3.addedNodes, (function(t4) {
        1 === t4.nodeType && (t4.hasAttribute("data-simplebar") ? !lo.instances.has(t4) && document.documentElement.contains(t4) && new lo(t4, io(t4.attributes)) : Array.prototype.forEach.call(t4.querySelectorAll("[data-simplebar]"), (function(t5) {
          "init" !== t5.getAttribute("data-simplebar") && !lo.instances.has(t5) && document.documentElement.contains(t5) && new lo(t5, io(t5.attributes));
        })));
      })), Array.prototype.forEach.call(t3.removedNodes, (function(t4) {
        1 === t4.nodeType && ("init" === t4.getAttribute("data-simplebar") ? lo.instances.has(t4) && !document.documentElement.contains(t4) && lo.instances.get(t4).unMount() : Array.prototype.forEach.call(t4.querySelectorAll('[data-simplebar="init"]'), (function(t5) {
          lo.instances.has(t5) && !document.documentElement.contains(t5) && lo.instances.get(t5).unMount();
        })));
      }));
    }));
  }, lo.getOptions = io, Yt && lo.initHtmlApi(), lo;
}));
!(function(t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define([], function() {
    return t.Waves = e.call(t), t.Waves;
  }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t);
})("object" == typeof global ? global : this, function() {
  "use strict";
  function t(t2) {
    return null !== t2 && t2 === t2.window;
  }
  function e(e2) {
    return t(e2) ? e2 : 9 === e2.nodeType && e2.defaultView;
  }
  function n(t2) {
    var e2 = typeof t2;
    return "function" === e2 || "object" === e2 && !!t2;
  }
  function o(t2) {
    return n(t2) && t2.nodeType > 0;
  }
  function a(t2) {
    var e2 = f.call(t2);
    return "[object String]" === e2 ? d(t2) : n(t2) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e2) && t2.hasOwnProperty("length") ? t2 : o(t2) ? [t2] : [];
  }
  function i(t2) {
    var n2, o2, a2 = { top: 0, left: 0 }, i2 = t2 && t2.ownerDocument;
    return n2 = i2.documentElement, void 0 !== t2.getBoundingClientRect && (a2 = t2.getBoundingClientRect()), o2 = e(i2), { top: a2.top + o2.pageYOffset - n2.clientTop, left: a2.left + o2.pageXOffset - n2.clientLeft };
  }
  function r(t2) {
    var e2 = "";
    for (var n2 in t2) t2.hasOwnProperty(n2) && (e2 += n2 + ":" + t2[n2] + ";");
    return e2;
  }
  function s(t2, e2, n2) {
    if (n2) {
      n2.classList.remove("waves-rippling");
      var o2 = n2.getAttribute("data-x"), a2 = n2.getAttribute("data-y"), i2 = n2.getAttribute("data-scale"), s2 = n2.getAttribute("data-translate"), u2 = 350 - (Date.now() - Number(n2.getAttribute("data-hold")));
      u2 < 0 && (u2 = 0), "mousemove" === t2.type && (u2 = 150);
      var c2 = "mousemove" === t2.type ? 2500 : v.duration;
      setTimeout(function() {
        var t3 = { top: a2 + "px", left: o2 + "px", opacity: "0", "-webkit-transition-duration": c2 + "ms", "-moz-transition-duration": c2 + "ms", "-o-transition-duration": c2 + "ms", "transition-duration": c2 + "ms", "-webkit-transform": i2 + " " + s2, "-moz-transform": i2 + " " + s2, "-ms-transform": i2 + " " + s2, "-o-transform": i2 + " " + s2, transform: i2 + " " + s2 };
        n2.setAttribute("style", r(t3)), setTimeout(function() {
          try {
            e2.removeChild(n2);
          } catch (t4) {
            return false;
          }
        }, c2);
      }, u2);
    }
  }
  function u(t2) {
    if (false === h.allowEvent(t2)) return null;
    for (var e2 = null, n2 = t2.target || t2.srcElement; n2.parentElement; ) {
      if (!(n2 instanceof SVGElement) && n2.classList.contains("waves-effect")) {
        e2 = n2;
        break;
      }
      n2 = n2.parentElement;
    }
    return e2;
  }
  function c(t2) {
    var e2 = u(t2);
    if (null !== e2) {
      if (e2.disabled || e2.getAttribute("disabled") || e2.classList.contains("disabled")) return;
      if (h.registerEvent(t2), "touchstart" === t2.type && v.delay) {
        var n2 = false, o2 = setTimeout(function() {
          o2 = null, v.show(t2, e2);
        }, v.delay), a2 = function(a3) {
          o2 && (clearTimeout(o2), o2 = null, v.show(t2, e2)), n2 || (n2 = true, v.hide(a3, e2)), r2();
        }, i2 = function(t3) {
          o2 && (clearTimeout(o2), o2 = null), a2(t3), r2();
        };
        e2.addEventListener("touchmove", i2, false), e2.addEventListener("touchend", a2, false), e2.addEventListener("touchcancel", a2, false);
        var r2 = function() {
          e2.removeEventListener("touchmove", i2), e2.removeEventListener("touchend", a2), e2.removeEventListener("touchcancel", a2);
        };
      } else v.show(t2, e2), m && (e2.addEventListener("touchend", v.hide, false), e2.addEventListener("touchcancel", v.hide, false)), e2.addEventListener("mouseup", v.hide, false), e2.addEventListener("mouseleave", v.hide, false);
    }
  }
  var l = l || {}, d = document.querySelectorAll.bind(document), f = Object.prototype.toString, m = "ontouchstart" in window, v = { duration: 750, delay: 200, show: function(t2, e2, n2) {
    if (2 === t2.button) return false;
    e2 = e2 || this;
    var o2 = document.createElement("div");
    o2.className = "waves-ripple waves-rippling", e2.appendChild(o2);
    var a2 = i(e2), s2 = 0, u2 = 0;
    "touches" in t2 && t2.touches.length ? (s2 = t2.touches[0].pageY - a2.top, u2 = t2.touches[0].pageX - a2.left) : (s2 = t2.pageY - a2.top, u2 = t2.pageX - a2.left), u2 = u2 >= 0 ? u2 : 0, s2 = s2 >= 0 ? s2 : 0;
    var c2 = "scale(" + e2.clientWidth / 100 * 3 + ")", l2 = "translate(0,0)";
    n2 && (l2 = "translate(" + n2.x + "px, " + n2.y + "px)"), o2.setAttribute("data-hold", Date.now()), o2.setAttribute("data-x", u2), o2.setAttribute("data-y", s2), o2.setAttribute("data-scale", c2), o2.setAttribute("data-translate", l2);
    var d2 = { top: s2 + "px", left: u2 + "px" };
    o2.classList.add("waves-notransition"), o2.setAttribute("style", r(d2)), o2.classList.remove("waves-notransition"), d2["-webkit-transform"] = c2 + " " + l2, d2["-moz-transform"] = c2 + " " + l2, d2["-ms-transform"] = c2 + " " + l2, d2["-o-transform"] = c2 + " " + l2, d2.transform = c2 + " " + l2, d2.opacity = "1";
    var f2 = "mousemove" === t2.type ? 2500 : v.duration;
    d2["-webkit-transition-duration"] = f2 + "ms", d2["-moz-transition-duration"] = f2 + "ms", d2["-o-transition-duration"] = f2 + "ms", d2["transition-duration"] = f2 + "ms", o2.setAttribute("style", r(d2));
  }, hide: function(t2, e2) {
    for (var n2 = (e2 = e2 || this).getElementsByClassName("waves-rippling"), o2 = 0, a2 = n2.length; o2 < a2; o2++) s(t2, e2, n2[o2]);
    m && (e2.removeEventListener("touchend", v.hide), e2.removeEventListener("touchcancel", v.hide)), e2.removeEventListener("mouseup", v.hide), e2.removeEventListener("mouseleave", v.hide);
  } }, p = { input: function(t2) {
    var e2 = t2.parentNode;
    if ("i" !== e2.tagName.toLowerCase() || !e2.classList.contains("waves-effect")) {
      var n2 = document.createElement("i");
      n2.className = t2.className + " waves-input-wrapper", t2.className = "waves-button-input", e2.replaceChild(n2, t2), n2.appendChild(t2);
      var o2 = window.getComputedStyle(t2, null), a2 = o2.color, i2 = o2.backgroundColor;
      n2.setAttribute("style", "color:" + a2 + ";background:" + i2), t2.setAttribute("style", "background-color:rgba(0,0,0,0);");
    }
  }, img: function(t2) {
    var e2 = t2.parentNode;
    if ("i" !== e2.tagName.toLowerCase() || !e2.classList.contains("waves-effect")) {
      var n2 = document.createElement("i");
      e2.replaceChild(n2, t2), n2.appendChild(t2);
    }
  } }, h = { touches: 0, allowEvent: function(t2) {
    var e2 = true;
    return /^(mousedown|mousemove)$/.test(t2.type) && h.touches && (e2 = false), e2;
  }, registerEvent: function(t2) {
    var e2 = t2.type;
    "touchstart" === e2 ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e2) && setTimeout(function() {
      h.touches && (h.touches -= 1);
    }, 500);
  } };
  return l.init = function(t2) {
    var e2 = document.body;
    "duration" in (t2 = t2 || {}) && (v.duration = t2.duration), "delay" in t2 && (v.delay = t2.delay), m && (e2.addEventListener("touchstart", c, false), e2.addEventListener("touchcancel", h.registerEvent, false), e2.addEventListener("touchend", h.registerEvent, false)), e2.addEventListener("mousedown", c, false);
  }, l.attach = function(t2, e2) {
    t2 = a(t2), "[object Array]" === f.call(e2) && (e2 = e2.join(" ")), e2 = e2 ? " " + e2 : "";
    for (var n2, o2, i2 = 0, r2 = t2.length; i2 < r2; i2++) o2 = (n2 = t2[i2]).tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(o2) && (p[o2](n2), n2 = n2.parentElement), -1 === n2.className.indexOf("waves-effect") && (n2.className += " waves-effect" + e2);
  }, l.ripple = function(t2, e2) {
    var n2 = (t2 = a(t2)).length;
    if (e2 = e2 || {}, e2.wait = e2.wait || 0, e2.position = e2.position || null, n2) {
      for (var o2, r2, s2, u2 = {}, c2 = 0, l2 = { type: "mousedown", button: 1 }; c2 < n2; c2++) if (o2 = t2[c2], r2 = e2.position || { x: o2.clientWidth / 2, y: o2.clientHeight / 2 }, s2 = i(o2), u2.x = s2.left + r2.x, u2.y = s2.top + r2.y, l2.pageX = u2.x, l2.pageY = u2.y, v.show(l2, o2), e2.wait >= 0 && null !== e2.wait) {
        var d2 = { type: "mouseup", button: 1 };
        setTimeout(/* @__PURE__ */ (function(t3, e3) {
          return function() {
            v.hide(t3, e3);
          };
        })(d2, o2), e2.wait);
      }
    }
  }, l.calm = function(t2) {
    for (var e2 = { type: "mouseup", button: 1 }, n2 = 0, o2 = (t2 = a(t2)).length; n2 < o2; n2++) v.hide(e2, t2[n2]);
  }, l.displayEffect = function(t2) {
    l.init(t2);
  }, l;
});
!(function(e, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.feather = n() : e.feather = n();
})("undefined" != typeof self ? self : this, function() {
  return (function(e) {
    var n = {};
    function i(t) {
      if (n[t]) return n[t].exports;
      var l = n[t] = { i: t, l: false, exports: {} };
      return e[t].call(l.exports, l, l.exports, i), l.l = true, l.exports;
    }
    return i.m = e, i.c = n, i.d = function(e2, n2, t) {
      i.o(e2, n2) || Object.defineProperty(e2, n2, { configurable: false, enumerable: true, get: t });
    }, i.r = function(e2) {
      Object.defineProperty(e2, "__esModule", { value: true });
    }, i.n = function(e2) {
      var n2 = e2 && e2.__esModule ? function() {
        return e2.default;
      } : function() {
        return e2;
      };
      return i.d(n2, "a", n2), n2;
    }, i.o = function(e2, n2) {
      return Object.prototype.hasOwnProperty.call(e2, n2);
    }, i.p = "", i(i.s = 80);
  })([function(e, n, i) {
    (function(n2) {
      var i2 = "object", t = function(e2) {
        return e2 && e2.Math == Math && e2;
      };
      e.exports = t(typeof globalThis == i2 && globalThis) || t(typeof window == i2 && window) || t(typeof self == i2 && self) || t(typeof n2 == i2 && n2) || Function("return this")();
    }).call(this, i(75));
  }, function(e, n) {
    var i = {}.hasOwnProperty;
    e.exports = function(e2, n2) {
      return i.call(e2, n2);
    };
  }, function(e, n, i) {
    var t = i(0), l = i(11), r = i(33), o = i(62), a = t.Symbol, c = l("wks");
    e.exports = function(e2) {
      return c[e2] || (c[e2] = o && a[e2] || (o ? a : r)("Symbol." + e2));
    };
  }, function(e, n, i) {
    var t = i(6);
    e.exports = function(e2) {
      if (!t(e2)) throw TypeError(String(e2) + " is not an object");
      return e2;
    };
  }, function(e, n) {
    e.exports = function(e2) {
      try {
        return !!e2();
      } catch (e3) {
        return true;
      }
    };
  }, function(e, n, i) {
    var t = i(8), l = i(7), r = i(10);
    e.exports = t ? function(e2, n2, i2) {
      return l.f(e2, n2, r(1, i2));
    } : function(e2, n2, i2) {
      return e2[n2] = i2, e2;
    };
  }, function(e, n) {
    e.exports = function(e2) {
      return "object" == typeof e2 ? null !== e2 : "function" == typeof e2;
    };
  }, function(e, n, i) {
    var t = i(8), l = i(35), r = i(3), o = i(18), a = Object.defineProperty;
    n.f = t ? a : function(e2, n2, i2) {
      if (r(e2), n2 = o(n2, true), r(i2), l) try {
        return a(e2, n2, i2);
      } catch (e3) {
      }
      if ("get" in i2 || "set" in i2) throw TypeError("Accessors not supported");
      return "value" in i2 && (e2[n2] = i2.value), e2;
    };
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !t(function() {
      return 7 != Object.defineProperty({}, "a", { get: function() {
        return 7;
      } }).a;
    });
  }, function(e, n) {
    e.exports = {};
  }, function(e, n) {
    e.exports = function(e2, n2) {
      return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: n2 };
    };
  }, function(e, n, i) {
    var t = i(0), l = i(19), r = i(17), o = t["__core-js_shared__"] || l("__core-js_shared__", {});
    (e.exports = function(e2, n2) {
      return o[e2] || (o[e2] = void 0 !== n2 ? n2 : {});
    })("versions", []).push({ version: "3.1.3", mode: r ? "pure" : "global", copyright: "\xA9 2019 Denis Pushkarev (zloirock.ru)" });
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: true });
    var t = o(i(43)), l = o(i(41)), r = o(i(40));
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    n.default = Object.keys(l.default).map(function(e2) {
      return new t.default(e2, l.default[e2], r.default[e2]);
    }).reduce(function(e2, n2) {
      return e2[n2.name] = n2, e2;
    }, {});
  }, function(e, n) {
    e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }, function(e, n, i) {
    var t = i(72), l = i(20);
    e.exports = function(e2) {
      return t(l(e2));
    };
  }, function(e, n) {
    e.exports = {};
  }, function(e, n, i) {
    var t = i(11), l = i(33), r = t("keys");
    e.exports = function(e2) {
      return r[e2] || (r[e2] = l(e2));
    };
  }, function(e, n) {
    e.exports = false;
  }, function(e, n, i) {
    var t = i(6);
    e.exports = function(e2, n2) {
      if (!t(e2)) return e2;
      var i2, l;
      if (n2 && "function" == typeof (i2 = e2.toString) && !t(l = i2.call(e2))) return l;
      if ("function" == typeof (i2 = e2.valueOf) && !t(l = i2.call(e2))) return l;
      if (!n2 && "function" == typeof (i2 = e2.toString) && !t(l = i2.call(e2))) return l;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(e, n, i) {
    var t = i(0), l = i(5);
    e.exports = function(e2, n2) {
      try {
        l(t, e2, n2);
      } catch (i2) {
        t[e2] = n2;
      }
      return n2;
    };
  }, function(e, n) {
    e.exports = function(e2) {
      if (void 0 == e2) throw TypeError("Can't call method on " + e2);
      return e2;
    };
  }, function(e, n) {
    var i = Math.ceil, t = Math.floor;
    e.exports = function(e2) {
      return isNaN(e2 = +e2) ? 0 : (e2 > 0 ? t : i)(e2);
    };
  }, function(e, n, i) {
    var t;
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /*!
      Copyright (c) 2016 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    !(function() {
      "use strict";
      var i2 = (function() {
        function e2() {
        }
        function n2(e3, n3) {
          for (var i4 = n3.length, t3 = 0; t3 < i4; ++t3) l(e3, n3[t3]);
        }
        e2.prototype = /* @__PURE__ */ Object.create(null);
        var i3 = {}.hasOwnProperty;
        var t2 = /\s+/;
        function l(e3, l2) {
          if (l2) {
            var r = typeof l2;
            "string" === r ? (function(e4, n3) {
              for (var i4 = n3.split(t2), l3 = i4.length, r2 = 0; r2 < l3; ++r2) e4[i4[r2]] = true;
            })(e3, l2) : Array.isArray(l2) ? n2(e3, l2) : "object" === r ? (function(e4, n3) {
              for (var t3 in n3) i3.call(n3, t3) && (e4[t3] = !!n3[t3]);
            })(e3, l2) : "number" === r && (function(e4, n3) {
              e4[n3] = true;
            })(e3, l2);
          }
        }
        return function() {
          for (var i4 = arguments.length, t3 = Array(i4), l2 = 0; l2 < i4; l2++) t3[l2] = arguments[l2];
          var r = new e2();
          n2(r, t3);
          var o = [];
          for (var a in r) r[a] && o.push(a);
          return o.join(" ");
        };
      })();
      void 0 !== e && e.exports ? e.exports = i2 : void 0 === (t = (function() {
        return i2;
      }).apply(n, [])) || (e.exports = t);
    })();
  }, function(e, n, i) {
    var t = i(7).f, l = i(1), r = i(2)("toStringTag");
    e.exports = function(e2, n2, i2) {
      e2 && !l(e2 = i2 ? e2 : e2.prototype, r) && t(e2, r, { configurable: true, value: n2 });
    };
  }, function(e, n, i) {
    var t = i(20);
    e.exports = function(e2) {
      return Object(t(e2));
    };
  }, function(e, n, i) {
    var t = i(1), l = i(24), r = i(16), o = i(63), a = r("IE_PROTO"), c = Object.prototype;
    e.exports = o ? Object.getPrototypeOf : function(e2) {
      return e2 = l(e2), t(e2, a) ? e2[a] : "function" == typeof e2.constructor && e2 instanceof e2.constructor ? e2.constructor.prototype : e2 instanceof Object ? c : null;
    };
  }, function(e, n, i) {
    "use strict";
    var t, l, r, o = i(25), a = i(5), c = i(1), p = i(2), y = i(17), h = p("iterator"), x = false;
    [].keys && ("next" in (r = [].keys()) ? (l = o(o(r))) !== Object.prototype && (t = l) : x = true), void 0 == t && (t = {}), y || c(t, h) || a(t, h, function() {
      return this;
    }), e.exports = { IteratorPrototype: t, BUGGY_SAFARI_ITERATORS: x };
  }, function(e, n, i) {
    var t = i(21), l = Math.min;
    e.exports = function(e2) {
      return e2 > 0 ? l(t(e2), 9007199254740991) : 0;
    };
  }, function(e, n, i) {
    var t = i(1), l = i(14), r = i(68), o = i(15), a = r(false);
    e.exports = function(e2, n2) {
      var i2, r2 = l(e2), c = 0, p = [];
      for (i2 in r2) !t(o, i2) && t(r2, i2) && p.push(i2);
      for (; n2.length > c; ) t(r2, i2 = n2[c++]) && (~a(p, i2) || p.push(i2));
      return p;
    };
  }, function(e, n, i) {
    var t = i(0), l = i(11), r = i(5), o = i(1), a = i(19), c = i(36), p = i(37), y = p.get, h = p.enforce, x = String(c).split("toString");
    l("inspectSource", function(e2) {
      return c.call(e2);
    }), (e.exports = function(e2, n2, i2, l2) {
      var c2 = !!l2 && !!l2.unsafe, p2 = !!l2 && !!l2.enumerable, y2 = !!l2 && !!l2.noTargetGet;
      "function" == typeof i2 && ("string" != typeof n2 || o(i2, "name") || r(i2, "name", n2), h(i2).source = x.join("string" == typeof n2 ? n2 : "")), e2 !== t ? (c2 ? !y2 && e2[n2] && (p2 = true) : delete e2[n2], p2 ? e2[n2] = i2 : r(e2, n2, i2)) : p2 ? e2[n2] = i2 : a(n2, i2);
    })(Function.prototype, "toString", function() {
      return "function" == typeof this && y(this).source || c.call(this);
    });
  }, function(e, n) {
    var i = {}.toString;
    e.exports = function(e2) {
      return i.call(e2).slice(8, -1);
    };
  }, function(e, n, i) {
    var t = i(8), l = i(73), r = i(10), o = i(14), a = i(18), c = i(1), p = i(35), y = Object.getOwnPropertyDescriptor;
    n.f = t ? y : function(e2, n2) {
      if (e2 = o(e2), n2 = a(n2, true), p) try {
        return y(e2, n2);
      } catch (e3) {
      }
      if (c(e2, n2)) return r(!l.f.call(e2, n2), e2[n2]);
    };
  }, function(e, n, i) {
    var t = i(0), l = i(31).f, r = i(5), o = i(29), a = i(19), c = i(71), p = i(65);
    e.exports = function(e2, n2) {
      var i2, y, h, x, s, u = e2.target, d = e2.global, f = e2.stat;
      if (i2 = d ? t : f ? t[u] || a(u, {}) : (t[u] || {}).prototype) for (y in n2) {
        if (x = n2[y], h = e2.noTargetGet ? (s = l(i2, y)) && s.value : i2[y], !p(d ? y : u + (f ? "." : "#") + y, e2.forced) && void 0 !== h) {
          if (typeof x == typeof h) continue;
          c(x, h);
        }
        (e2.sham || h && h.sham) && r(x, "sham", true), o(i2, y, x, e2);
      }
    };
  }, function(e, n) {
    var i = 0, t = Math.random();
    e.exports = function(e2) {
      return "Symbol(".concat(void 0 === e2 ? "" : e2, ")_", (++i + t).toString(36));
    };
  }, function(e, n, i) {
    var t = i(0), l = i(6), r = t.document, o = l(r) && l(r.createElement);
    e.exports = function(e2) {
      return o ? r.createElement(e2) : {};
    };
  }, function(e, n, i) {
    var t = i(8), l = i(4), r = i(34);
    e.exports = !t && !l(function() {
      return 7 != Object.defineProperty(r("div"), "a", { get: function() {
        return 7;
      } }).a;
    });
  }, function(e, n, i) {
    var t = i(11);
    e.exports = t("native-function-to-string", Function.toString);
  }, function(e, n, i) {
    var t, l, r, o = i(76), a = i(0), c = i(6), p = i(5), y = i(1), h = i(16), x = i(15), s = a.WeakMap;
    if (o) {
      var u = new s(), d = u.get, f = u.has, g = u.set;
      t = function(e2, n2) {
        return g.call(u, e2, n2), n2;
      }, l = function(e2) {
        return d.call(u, e2) || {};
      }, r = function(e2) {
        return f.call(u, e2);
      };
    } else {
      var v = h("state");
      x[v] = true, t = function(e2, n2) {
        return p(e2, v, n2), n2;
      }, l = function(e2) {
        return y(e2, v) ? e2[v] : {};
      }, r = function(e2) {
        return y(e2, v);
      };
    }
    e.exports = { set: t, get: l, has: r, enforce: function(e2) {
      return r(e2) ? l(e2) : t(e2, {});
    }, getterFor: function(e2) {
      return function(n2) {
        var i2;
        if (!c(n2) || (i2 = l(n2)).type !== e2) throw TypeError("Incompatible receiver, " + e2 + " required");
        return i2;
      };
    } };
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: true });
    var t = Object.assign || function(e2) {
      for (var n2 = 1; n2 < arguments.length; n2++) {
        var i2 = arguments[n2];
        for (var t2 in i2) Object.prototype.hasOwnProperty.call(i2, t2) && (e2[t2] = i2[t2]);
      }
      return e2;
    }, l = o(i(22)), r = o(i(12));
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    n.default = function() {
      var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      if ("undefined" == typeof document) throw new Error("`feather.replace()` only works in a browser environment.");
      var n2 = document.querySelectorAll("[data-feather]");
      Array.from(n2).forEach(function(n3) {
        return (function(e3) {
          var n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = (function(e4) {
            return Array.from(e4.attributes).reduce(function(e5, n5) {
              return e5[n5.name] = n5.value, e5;
            }, {});
          })(e3), o2 = i2["data-feather"];
          delete i2["data-feather"];
          var a = r.default[o2].toSvg(t({}, n4, i2, { class: (0, l.default)(n4.class, i2.class) })), c = new DOMParser().parseFromString(a, "image/svg+xml").querySelector("svg");
          e3.parentNode.replaceChild(c, e3);
        })(n3, e2);
      });
    };
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: true });
    var t, l = i(12), r = (t = l) && t.__esModule ? t : { default: t };
    n.default = function(e2) {
      var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."), !e2) throw new Error("The required `key` (icon name) parameter is missing.");
      if (!r.default[e2]) throw new Error("No icon matching '" + e2 + "'. See the complete list of icons at https://feathericons.com");
      return r.default[e2].toSvg(n2);
    };
  }, function(e) {
    e.exports = { activity: ["pulse", "health", "action", "motion"], airplay: ["stream", "cast", "mirroring"], "alert-circle": ["warning", "alert", "danger"], "alert-octagon": ["warning", "alert", "danger"], "alert-triangle": ["warning", "alert", "danger"], "align-center": ["text alignment", "center"], "align-justify": ["text alignment", "justified"], "align-left": ["text alignment", "left"], "align-right": ["text alignment", "right"], anchor: [], archive: ["index", "box"], "at-sign": ["mention", "at", "email", "message"], award: ["achievement", "badge"], aperture: ["camera", "photo"], "bar-chart": ["statistics", "diagram", "graph"], "bar-chart-2": ["statistics", "diagram", "graph"], battery: ["power", "electricity"], "battery-charging": ["power", "electricity"], bell: ["alarm", "notification", "sound"], "bell-off": ["alarm", "notification", "silent"], bluetooth: ["wireless"], "book-open": ["read", "library"], book: ["read", "dictionary", "booklet", "magazine", "library"], bookmark: ["read", "clip", "marker", "tag"], box: ["cube"], briefcase: ["work", "bag", "baggage", "folder"], calendar: ["date"], camera: ["photo"], cast: ["chromecast", "airplay"], circle: ["off", "zero", "record"], clipboard: ["copy"], clock: ["time", "watch", "alarm"], "cloud-drizzle": ["weather", "shower"], "cloud-lightning": ["weather", "bolt"], "cloud-rain": ["weather"], "cloud-snow": ["weather", "blizzard"], cloud: ["weather"], codepen: ["logo"], codesandbox: ["logo"], code: ["source", "programming"], coffee: ["drink", "cup", "mug", "tea", "cafe", "hot", "beverage"], columns: ["layout"], command: ["keyboard", "cmd", "terminal", "prompt"], compass: ["navigation", "safari", "travel", "direction"], copy: ["clone", "duplicate"], "corner-down-left": ["arrow", "return"], "corner-down-right": ["arrow"], "corner-left-down": ["arrow"], "corner-left-up": ["arrow"], "corner-right-down": ["arrow"], "corner-right-up": ["arrow"], "corner-up-left": ["arrow"], "corner-up-right": ["arrow"], cpu: ["processor", "technology"], "credit-card": ["purchase", "payment", "cc"], crop: ["photo", "image"], crosshair: ["aim", "target"], database: ["storage", "memory"], delete: ["remove"], disc: ["album", "cd", "dvd", "music"], "dollar-sign": ["currency", "money", "payment"], droplet: ["water"], edit: ["pencil", "change"], "edit-2": ["pencil", "change"], "edit-3": ["pencil", "change"], eye: ["view", "watch"], "eye-off": ["view", "watch", "hide", "hidden"], "external-link": ["outbound"], facebook: ["logo", "social"], "fast-forward": ["music"], figma: ["logo", "design", "tool"], "file-minus": ["delete", "remove", "erase"], "file-plus": ["add", "create", "new"], "file-text": ["data", "txt", "pdf"], film: ["movie", "video"], filter: ["funnel", "hopper"], flag: ["report"], "folder-minus": ["directory"], "folder-plus": ["directory"], folder: ["directory"], framer: ["logo", "design", "tool"], frown: ["emoji", "face", "bad", "sad", "emotion"], gift: ["present", "box", "birthday", "party"], "git-branch": ["code", "version control"], "git-commit": ["code", "version control"], "git-merge": ["code", "version control"], "git-pull-request": ["code", "version control"], github: ["logo", "version control"], gitlab: ["logo", "version control"], globe: ["world", "browser", "language", "translate"], "hard-drive": ["computer", "server", "memory", "data"], hash: ["hashtag", "number", "pound"], headphones: ["music", "audio", "sound"], heart: ["like", "love", "emotion"], "help-circle": ["question mark"], hexagon: ["shape", "node.js", "logo"], home: ["house", "living"], image: ["picture"], inbox: ["email"], instagram: ["logo", "camera"], key: ["password", "login", "authentication", "secure"], layers: ["stack"], layout: ["window", "webpage"], "life-bouy": ["help", "life ring", "support"], link: ["chain", "url"], "link-2": ["chain", "url"], linkedin: ["logo", "social media"], list: ["options"], lock: ["security", "password", "secure"], "log-in": ["sign in", "arrow", "enter"], "log-out": ["sign out", "arrow", "exit"], mail: ["email", "message"], "map-pin": ["location", "navigation", "travel", "marker"], map: ["location", "navigation", "travel"], maximize: ["fullscreen"], "maximize-2": ["fullscreen", "arrows", "expand"], meh: ["emoji", "face", "neutral", "emotion"], menu: ["bars", "navigation", "hamburger"], "message-circle": ["comment", "chat"], "message-square": ["comment", "chat"], "mic-off": ["record", "sound", "mute"], mic: ["record", "sound", "listen"], minimize: ["exit fullscreen", "close"], "minimize-2": ["exit fullscreen", "arrows", "close"], minus: ["subtract"], monitor: ["tv", "screen", "display"], moon: ["dark", "night"], "more-horizontal": ["ellipsis"], "more-vertical": ["ellipsis"], "mouse-pointer": ["arrow", "cursor"], move: ["arrows"], music: ["note"], navigation: ["location", "travel"], "navigation-2": ["location", "travel"], octagon: ["stop"], package: ["box", "container"], paperclip: ["attachment"], pause: ["music", "stop"], "pause-circle": ["music", "audio", "stop"], "pen-tool": ["vector", "drawing"], percent: ["discount"], "phone-call": ["ring"], "phone-forwarded": ["call"], "phone-incoming": ["call"], "phone-missed": ["call"], "phone-off": ["call", "mute"], "phone-outgoing": ["call"], phone: ["call"], play: ["music", "start"], "pie-chart": ["statistics", "diagram"], "play-circle": ["music", "start"], plus: ["add", "new"], "plus-circle": ["add", "new"], "plus-square": ["add", "new"], pocket: ["logo", "save"], power: ["on", "off"], printer: ["fax", "office", "device"], radio: ["signal"], "refresh-cw": ["synchronise", "arrows"], "refresh-ccw": ["arrows"], repeat: ["loop", "arrows"], rewind: ["music"], "rotate-ccw": ["arrow"], "rotate-cw": ["arrow"], rss: ["feed", "subscribe"], save: ["floppy disk"], scissors: ["cut"], search: ["find", "magnifier", "magnifying glass"], send: ["message", "mail", "email", "paper airplane", "paper aeroplane"], settings: ["cog", "edit", "gear", "preferences"], "share-2": ["network", "connections"], shield: ["security", "secure"], "shield-off": ["security", "insecure"], "shopping-bag": ["ecommerce", "cart", "purchase", "store"], "shopping-cart": ["ecommerce", "cart", "purchase", "store"], shuffle: ["music"], "skip-back": ["music"], "skip-forward": ["music"], slack: ["logo"], slash: ["ban", "no"], sliders: ["settings", "controls"], smartphone: ["cellphone", "device"], smile: ["emoji", "face", "happy", "good", "emotion"], speaker: ["audio", "music"], star: ["bookmark", "favorite", "like"], "stop-circle": ["media", "music"], sun: ["brightness", "weather", "light"], sunrise: ["weather", "time", "morning", "day"], sunset: ["weather", "time", "evening", "night"], tablet: ["device"], tag: ["label"], target: ["logo", "bullseye"], terminal: ["code", "command line", "prompt"], thermometer: ["temperature", "celsius", "fahrenheit", "weather"], "thumbs-down": ["dislike", "bad", "emotion"], "thumbs-up": ["like", "good", "emotion"], "toggle-left": ["on", "off", "switch"], "toggle-right": ["on", "off", "switch"], tool: ["settings", "spanner"], trash: ["garbage", "delete", "remove", "bin"], "trash-2": ["garbage", "delete", "remove", "bin"], triangle: ["delta"], truck: ["delivery", "van", "shipping", "transport", "lorry"], tv: ["television", "stream"], twitch: ["logo"], twitter: ["logo", "social"], type: ["text"], umbrella: ["rain", "weather"], unlock: ["security"], "user-check": ["followed", "subscribed"], "user-minus": ["delete", "remove", "unfollow", "unsubscribe"], "user-plus": ["new", "add", "create", "follow", "subscribe"], "user-x": ["delete", "remove", "unfollow", "unsubscribe", "unavailable"], user: ["person", "account"], users: ["group"], "video-off": ["camera", "movie", "film"], video: ["camera", "movie", "film"], voicemail: ["phone"], volume: ["music", "sound", "mute"], "volume-1": ["music", "sound"], "volume-2": ["music", "sound"], "volume-x": ["music", "sound", "mute"], watch: ["clock", "time"], "wifi-off": ["disabled"], wifi: ["connection", "signal", "wireless"], wind: ["weather", "air"], "x-circle": ["cancel", "close", "delete", "remove", "times", "clear"], "x-octagon": ["delete", "stop", "alert", "warning", "times", "clear"], "x-square": ["cancel", "close", "delete", "remove", "times", "clear"], x: ["cancel", "close", "delete", "remove", "times", "clear"], youtube: ["logo", "video", "play"], "zap-off": ["flash", "camera", "lightning"], zap: ["flash", "camera", "lightning"], "zoom-in": ["magnifying glass"], "zoom-out": ["magnifying glass"] };
  }, function(e) {
    e.exports = { activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>', airplay: '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>', "alert-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>', "alert-triangle": '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>', "align-center": '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>', "align-justify": '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>', "align-left": '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>', "align-right": '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>', anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>', aperture: '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>', archive: '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>', "arrow-down-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>', "arrow-down-left": '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>', "arrow-down-right": '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>', "arrow-down": '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>', "arrow-left-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>', "arrow-left": '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>', "arrow-right-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>', "arrow-right": '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>', "arrow-up-circle": '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>', "arrow-up-left": '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>', "arrow-up-right": '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>', "arrow-up": '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>', "at-sign": '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>', award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>', "bar-chart-2": '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>', "bar-chart": '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>', "battery-charging": '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>', battery: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>', "bell-off": '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>', bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>', bluetooth: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>', bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>', "book-open": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>', book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>', bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>', box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>', calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>', "camera-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>', camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>', cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>', "check-circle": '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>', "check-square": '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>', check: '<polyline points="20 6 9 17 4 12"></polyline>', "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>', "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>', "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>', "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>', "chevrons-down": '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>', "chevrons-left": '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>', "chevrons-right": '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>', "chevrons-up": '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>', chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>', circle: '<circle cx="12" cy="12" r="10"></circle>', clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>', clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>', "cloud-drizzle": '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-lightning": '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>', "cloud-off": '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>', "cloud-rain": '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>', "cloud-snow": '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>', cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>', code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>', codepen: '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>', codesandbox: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>', columns: '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>', command: '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>', compass: '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>', copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>', "corner-down-left": '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>', "corner-down-right": '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>', "corner-left-down": '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>', "corner-left-up": '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>', "corner-right-down": '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>', "corner-right-up": '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>', "corner-up-left": '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>', "corner-up-right": '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>', cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>', "credit-card": '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>', crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>', crosshair: '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>', database: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>', delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>', disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>', "divide-circle": '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>', "divide-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>', divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>', "dollar-sign": '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>', "download-cloud": '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>', download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>', dribbble: '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>', droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>', "edit-2": '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>', "edit-3": '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>', edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>', "external-link": '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>', "eye-off": '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>', eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>', facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>', "fast-forward": '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>', feather: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>', figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>', "file-minus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>', "file-plus": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>', "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>', file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>', film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>', filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>', flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>', "folder-minus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>', "folder-plus": '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>', folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>', framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>', frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>', "git-branch": '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>', "git-commit": '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>', "git-merge": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>', "git-pull-request": '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>', github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>', gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>', globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>', grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>', "hard-drive": '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>', hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>', headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>', heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>', "help-circle": '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>', hexagon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>', home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>', image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>', inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>', info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>', instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>', italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>', key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>', layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>', layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>', "life-buoy": '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>', "link-2": '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>', link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>', linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>', list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>', loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>', lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>', "log-in": '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>', "log-out": '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>', mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>', "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>', map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>', "maximize-2": '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>', maximize: '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>', meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>', "message-circle": '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>', "message-square": '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>', "mic-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>', "minimize-2": '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>', minimize: '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>', "minus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>', "minus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>', minus: '<line x1="5" y1="12" x2="19" y2="12"></line>', monitor: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>', moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>', "more-horizontal": '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>', "more-vertical": '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>', "mouse-pointer": '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>', move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>', music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>', "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>', navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>', octagon: '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>', package: '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>', paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>', "pause-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>', pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>', "pen-tool": '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>', percent: '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>', "phone-call": '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-forwarded": '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-incoming": '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-missed": '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "phone-off": '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>', "phone-outgoing": '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>', "pie-chart": '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>', "play-circle": '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>', play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>', "plus-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', "plus-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>', plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>', pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>', power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>', printer: '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>', radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>', "refresh-ccw": '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>', "refresh-cw": '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>', repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>', rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>', "rotate-ccw": '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>', "rotate-cw": '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>', rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>', save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>', scissors: '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>', search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>', send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>', server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>', settings: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>', "share-2": '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>', share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>', "shield-off": '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>', shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>', "shopping-bag": '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>', "shopping-cart": '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>', shuffle: '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>', sidebar: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>', "skip-back": '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>', "skip-forward": '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>', slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>', slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>', sliders: '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>', smartphone: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>', speaker: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>', square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>', star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>', "stop-circle": '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>', sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', sunrise: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>', sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>', tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>', tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>', target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>', terminal: '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>', thermometer: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>', "thumbs-down": '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>', "thumbs-up": '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>', "toggle-left": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>', "toggle-right": '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>', tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>', "trash-2": '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>', trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>', trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>', "trending-down": '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>', "trending-up": '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>', triangle: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>', truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>', tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>', twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>', twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>', type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>', umbrella: '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>', underline: '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>', unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>', "upload-cloud": '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>', upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>', "user-check": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>', "user-minus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>', "user-plus": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>', "user-x": '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>', user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>', users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>', "video-off": '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>', video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>', voicemail: '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>', "volume-1": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-2": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>', "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>', volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>', watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>', "wifi-off": '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>', wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>', "x-circle": '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-octagon": '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>', "x-square": '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>', x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>', youtube: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>', "zap-off": '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>', zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>', "zoom-in": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>', "zoom-out": '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>' };
  }, function(e) {
    e.exports = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round" };
  }, function(e, n, i) {
    "use strict";
    Object.defineProperty(n, "__esModule", { value: true });
    var t = Object.assign || function(e2) {
      for (var n2 = 1; n2 < arguments.length; n2++) {
        var i2 = arguments[n2];
        for (var t2 in i2) Object.prototype.hasOwnProperty.call(i2, t2) && (e2[t2] = i2[t2]);
      }
      return e2;
    }, l = /* @__PURE__ */ (function() {
      function e2(e3, n2) {
        for (var i2 = 0; i2 < n2.length; i2++) {
          var t2 = n2[i2];
          t2.enumerable = t2.enumerable || false, t2.configurable = true, "value" in t2 && (t2.writable = true), Object.defineProperty(e3, t2.key, t2);
        }
      }
      return function(n2, i2, t2) {
        return i2 && e2(n2.prototype, i2), t2 && e2(n2, t2), n2;
      };
    })(), r = a(i(22)), o = a(i(42));
    function a(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    var c = (function() {
      function e2(n2, i2) {
        var l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        !(function(e3, n3) {
          if (!(e3 instanceof n3)) throw new TypeError("Cannot call a class as a function");
        })(this, e2), this.name = n2, this.contents = i2, this.tags = l2, this.attrs = t({}, o.default, { class: "feather feather-" + n2 });
      }
      return l(e2, [{ key: "toSvg", value: function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return "<svg " + (function(e4) {
          return Object.keys(e4).map(function(n2) {
            return n2 + '="' + e4[n2] + '"';
          }).join(" ");
        })(t({}, this.attrs, e3, { class: (0, r.default)(this.attrs.class, e3.class) })) + ">" + this.contents + "</svg>";
      } }, { key: "toString", value: function() {
        return this.contents;
      } }]), e2;
    })();
    n.default = c;
  }, function(e, n, i) {
    "use strict";
    var t = o(i(12)), l = o(i(39)), r = o(i(38));
    function o(e2) {
      return e2 && e2.__esModule ? e2 : { default: e2 };
    }
    e.exports = { icons: t.default, toSvg: l.default, replace: r.default };
  }, function(e, n, i) {
    e.exports = i(0);
  }, function(e, n, i) {
    var t = i(2)("iterator"), l = false;
    try {
      var r = 0, o = { next: function() {
        return { done: !!r++ };
      }, return: function() {
        l = true;
      } };
      o[t] = function() {
        return this;
      }, Array.from(o, function() {
        throw 2;
      });
    } catch (e2) {
    }
    e.exports = function(e2, n2) {
      if (!n2 && !l) return false;
      var i2 = false;
      try {
        var r2 = {};
        r2[t] = function() {
          return { next: function() {
            return { done: i2 = true };
          } };
        }, e2(r2);
      } catch (e3) {
      }
      return i2;
    };
  }, function(e, n, i) {
    var t = i(30), l = i(2)("toStringTag"), r = "Arguments" == t(/* @__PURE__ */ (function() {
      return arguments;
    })());
    e.exports = function(e2) {
      var n2, i2, o;
      return void 0 === e2 ? "Undefined" : null === e2 ? "Null" : "string" == typeof (i2 = (function(e3, n3) {
        try {
          return e3[n3];
        } catch (e4) {
        }
      })(n2 = Object(e2), l)) ? i2 : r ? t(n2) : "Object" == (o = t(n2)) && "function" == typeof n2.callee ? "Arguments" : o;
    };
  }, function(e, n, i) {
    var t = i(47), l = i(9), r = i(2)("iterator");
    e.exports = function(e2) {
      if (void 0 != e2) return e2[r] || e2["@@iterator"] || l[t(e2)];
    };
  }, function(e, n, i) {
    "use strict";
    var t = i(18), l = i(7), r = i(10);
    e.exports = function(e2, n2, i2) {
      var o = t(n2);
      o in e2 ? l.f(e2, o, r(0, i2)) : e2[o] = i2;
    };
  }, function(e, n, i) {
    var t = i(2), l = i(9), r = t("iterator"), o = Array.prototype;
    e.exports = function(e2) {
      return void 0 !== e2 && (l.Array === e2 || o[r] === e2);
    };
  }, function(e, n, i) {
    var t = i(3);
    e.exports = function(e2, n2, i2, l) {
      try {
        return l ? n2(t(i2)[0], i2[1]) : n2(i2);
      } catch (n3) {
        var r = e2.return;
        throw void 0 !== r && t(r.call(e2)), n3;
      }
    };
  }, function(e, n) {
    e.exports = function(e2) {
      if ("function" != typeof e2) throw TypeError(String(e2) + " is not a function");
      return e2;
    };
  }, function(e, n, i) {
    var t = i(52);
    e.exports = function(e2, n2, i2) {
      if (t(e2), void 0 === n2) return e2;
      switch (i2) {
        case 0:
          return function() {
            return e2.call(n2);
          };
        case 1:
          return function(i3) {
            return e2.call(n2, i3);
          };
        case 2:
          return function(i3, t2) {
            return e2.call(n2, i3, t2);
          };
        case 3:
          return function(i3, t2, l) {
            return e2.call(n2, i3, t2, l);
          };
      }
      return function() {
        return e2.apply(n2, arguments);
      };
    };
  }, function(e, n, i) {
    "use strict";
    var t = i(53), l = i(24), r = i(51), o = i(50), a = i(27), c = i(49), p = i(48);
    e.exports = function(e2) {
      var n2, i2, y, h, x = l(e2), s = "function" == typeof this ? this : Array, u = arguments.length, d = u > 1 ? arguments[1] : void 0, f = void 0 !== d, g = 0, v = p(x);
      if (f && (d = t(d, u > 2 ? arguments[2] : void 0, 2)), void 0 == v || s == Array && o(v)) for (i2 = new s(n2 = a(x.length)); n2 > g; g++) c(i2, g, f ? d(x[g], g) : x[g]);
      else for (h = v.call(x), i2 = new s(); !(y = h.next()).done; g++) c(i2, g, f ? r(h, d, [y.value, g], true) : y.value);
      return i2.length = g, i2;
    };
  }, function(e, n, i) {
    var t = i(32), l = i(54);
    t({ target: "Array", stat: true, forced: !i(46)(function(e2) {
      Array.from(e2);
    }) }, { from: l });
  }, function(e, n, i) {
    var t = i(6), l = i(3);
    e.exports = function(e2, n2) {
      if (l(e2), !t(n2) && null !== n2) throw TypeError("Can't set " + String(n2) + " as a prototype");
    };
  }, function(e, n, i) {
    var t = i(56);
    e.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
      var e2, n2 = false, i2 = {};
      try {
        (e2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(i2, []), n2 = i2 instanceof Array;
      } catch (e3) {
      }
      return function(i3, l) {
        return t(i3, l), n2 ? e2.call(i3, l) : i3.__proto__ = l, i3;
      };
    })() : void 0);
  }, function(e, n, i) {
    var t = i(0).document;
    e.exports = t && t.documentElement;
  }, function(e, n, i) {
    var t = i(28), l = i(13);
    e.exports = Object.keys || function(e2) {
      return t(e2, l);
    };
  }, function(e, n, i) {
    var t = i(8), l = i(7), r = i(3), o = i(59);
    e.exports = t ? Object.defineProperties : function(e2, n2) {
      r(e2);
      for (var i2, t2 = o(n2), a = t2.length, c = 0; a > c; ) l.f(e2, i2 = t2[c++], n2[i2]);
      return e2;
    };
  }, function(e, n, i) {
    var t = i(3), l = i(60), r = i(13), o = i(15), a = i(58), c = i(34), p = i(16)("IE_PROTO"), y = function() {
    }, h = function() {
      var e2, n2 = c("iframe"), i2 = r.length;
      for (n2.style.display = "none", a.appendChild(n2), n2.src = String("javascript:"), (e2 = n2.contentWindow.document).open(), e2.write("<script>document.F=Object</script>"), e2.close(), h = e2.F; i2--; ) delete h.prototype[r[i2]];
      return h();
    };
    e.exports = Object.create || function(e2, n2) {
      var i2;
      return null !== e2 ? (y.prototype = t(e2), i2 = new y(), y.prototype = null, i2[p] = e2) : i2 = h(), void 0 === n2 ? i2 : l(i2, n2);
    }, o[p] = true;
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !!Object.getOwnPropertySymbols && !t(function() {
      return !String(Symbol());
    });
  }, function(e, n, i) {
    var t = i(4);
    e.exports = !t(function() {
      function e2() {
      }
      return e2.prototype.constructor = null, Object.getPrototypeOf(new e2()) !== e2.prototype;
    });
  }, function(e, n, i) {
    "use strict";
    var t = i(26).IteratorPrototype, l = i(61), r = i(10), o = i(23), a = i(9), c = function() {
      return this;
    };
    e.exports = function(e2, n2, i2) {
      var p = n2 + " Iterator";
      return e2.prototype = l(t, { next: r(1, i2) }), o(e2, p, false, true), a[p] = c, e2;
    };
  }, function(e, n, i) {
    var t = i(4), l = /#|\.prototype\./, r = function(e2, n2) {
      var i2 = a[o(e2)];
      return i2 == p || i2 != c && ("function" == typeof n2 ? t(n2) : !!n2);
    }, o = r.normalize = function(e2) {
      return String(e2).replace(l, ".").toLowerCase();
    }, a = r.data = {}, c = r.NATIVE = "N", p = r.POLYFILL = "P";
    e.exports = r;
  }, function(e, n) {
    n.f = Object.getOwnPropertySymbols;
  }, function(e, n, i) {
    var t = i(21), l = Math.max, r = Math.min;
    e.exports = function(e2, n2) {
      var i2 = t(e2);
      return i2 < 0 ? l(i2 + n2, 0) : r(i2, n2);
    };
  }, function(e, n, i) {
    var t = i(14), l = i(27), r = i(67);
    e.exports = function(e2) {
      return function(n2, i2, o) {
        var a, c = t(n2), p = l(c.length), y = r(o, p);
        if (e2 && i2 != i2) {
          for (; p > y; ) if ((a = c[y++]) != a) return true;
        } else for (; p > y; y++) if ((e2 || y in c) && c[y] === i2) return e2 || y || 0;
        return !e2 && -1;
      };
    };
  }, function(e, n, i) {
    var t = i(28), l = i(13).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function(e2) {
      return t(e2, l);
    };
  }, function(e, n, i) {
    var t = i(0), l = i(69), r = i(66), o = i(3), a = t.Reflect;
    e.exports = a && a.ownKeys || function(e2) {
      var n2 = l.f(o(e2)), i2 = r.f;
      return i2 ? n2.concat(i2(e2)) : n2;
    };
  }, function(e, n, i) {
    var t = i(1), l = i(70), r = i(31), o = i(7);
    e.exports = function(e2, n2) {
      for (var i2 = l(n2), a = o.f, c = r.f, p = 0; p < i2.length; p++) {
        var y = i2[p];
        t(e2, y) || a(e2, y, c(n2, y));
      }
    };
  }, function(e, n, i) {
    var t = i(4), l = i(30), r = "".split;
    e.exports = t(function() {
      return !Object("z").propertyIsEnumerable(0);
    }) ? function(e2) {
      return "String" == l(e2) ? r.call(e2, "") : Object(e2);
    } : Object;
  }, function(e, n, i) {
    "use strict";
    var t = {}.propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, r = l && !t.call({ 1: 2 }, 1);
    n.f = r ? function(e2) {
      var n2 = l(this, e2);
      return !!n2 && n2.enumerable;
    } : t;
  }, function(e, n, i) {
    "use strict";
    var t = i(32), l = i(64), r = i(25), o = i(57), a = i(23), c = i(5), p = i(29), y = i(2), h = i(17), x = i(9), s = i(26), u = s.IteratorPrototype, d = s.BUGGY_SAFARI_ITERATORS, f = y("iterator"), g = function() {
      return this;
    };
    e.exports = function(e2, n2, i2, y2, s2, v, m) {
      l(i2, n2, y2);
      var w, M, b, z = function(e3) {
        if (e3 === s2 && O) return O;
        if (!d && e3 in H) return H[e3];
        switch (e3) {
          case "keys":
          case "values":
          case "entries":
            return function() {
              return new i2(this, e3);
            };
        }
        return function() {
          return new i2(this);
        };
      }, A = n2 + " Iterator", k = false, H = e2.prototype, V = H[f] || H["@@iterator"] || s2 && H[s2], O = !d && V || z(s2), j = "Array" == n2 && H.entries || V;
      if (j && (w = r(j.call(new e2())), u !== Object.prototype && w.next && (h || r(w) === u || (o ? o(w, u) : "function" != typeof w[f] && c(w, f, g)), a(w, A, true, true), h && (x[A] = g))), "values" == s2 && V && "values" !== V.name && (k = true, O = function() {
        return V.call(this);
      }), h && !m || H[f] === O || c(H, f, O), x[n2] = O, s2) if (M = { values: z("values"), keys: v ? O : z("keys"), entries: z("entries") }, m) for (b in M) !d && !k && b in H || p(H, b, M[b]);
      else t({ target: n2, proto: true, forced: d || k }, M);
      return M;
    };
  }, function(e, n) {
    var i;
    i = /* @__PURE__ */ (function() {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e2) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  }, function(e, n, i) {
    var t = i(0), l = i(36), r = t.WeakMap;
    e.exports = "function" == typeof r && /native code/.test(l.call(r));
  }, function(e, n, i) {
    var t = i(21), l = i(20);
    e.exports = function(e2, n2, i2) {
      var r, o, a = String(l(e2)), c = t(n2), p = a.length;
      return c < 0 || c >= p ? i2 ? "" : void 0 : (r = a.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === p || (o = a.charCodeAt(c + 1)) < 56320 || o > 57343 ? i2 ? a.charAt(c) : r : i2 ? a.slice(c, c + 2) : o - 56320 + (r - 55296 << 10) + 65536;
    };
  }, function(e, n, i) {
    "use strict";
    var t = i(77), l = i(37), r = i(74), o = l.set, a = l.getterFor("String Iterator");
    r(String, "String", function(e2) {
      o(this, { type: "String Iterator", string: String(e2), index: 0 });
    }, function() {
      var e2, n2 = a(this), i2 = n2.string, l2 = n2.index;
      return l2 >= i2.length ? { value: void 0, done: true } : (e2 = t(i2, l2, true), n2.index += e2.length, { value: e2, done: false });
    });
  }, function(e, n, i) {
    i(78), i(55);
    var t = i(45);
    e.exports = t.Array.from;
  }, function(e, n, i) {
    i(79), e.exports = i(44);
  }]);
});
!(function(t) {
  var e = {};
  function i(r) {
    if (e[r]) return e[r].exports;
    var s = e[r] = { i: r, l: false, exports: {} };
    return t[r].call(s.exports, s, s.exports, i), s.l = true, s.exports;
  }
  i.m = t, i.c = e, i.d = function(t2, e2, r) {
    i.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
  }, i.r = function(t2) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, i.t = function(t2, e2) {
    if (1 & e2 && (t2 = i(t2)), 8 & e2) return t2;
    if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
    var r = /* @__PURE__ */ Object.create(null);
    if (i.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var s in t2) i.d(r, s, (function(e3) {
      return t2[e3];
    }).bind(null, s));
    return r;
  }, i.n = function(t2) {
    var e2 = t2 && t2.__esModule ? function() {
      return t2.default;
    } : function() {
      return t2;
    };
    return i.d(e2, "a", e2), e2;
  }, i.o = function(t2, e2) {
    return Object.prototype.hasOwnProperty.call(t2, e2);
  }, i.p = "", i(i.s = 1);
})([function(module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_RESULT__;
  "undefined" != typeof navigator && (function(t, e) {
    void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return e(t);
    }).call(exports, __webpack_require__, exports, module)) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
  })(window || {}, (function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = true, idPrefix = "", expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bmRnd, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    function ProjectInterface() {
      return {};
    }
    !(function() {
      var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
      for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
    })(), BMMath.random = Math.random, BMMath.abs = function(t) {
      if ("object" === typeof t && t.length) {
        var e, i = createSizedArray(t.length), r = t.length;
        for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
        return i;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function roundValues(t) {
      bmRnd = t ? Math.round : function(t2) {
        return t2;
      };
    }
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, i, r) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, i, r) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    function BMAnimationConfigErrorEvent(t, e) {
      this.type = t, this.nativeError = e;
    }
    roundValues(false);
    var createElementID = (_count = 0, function() {
      return idPrefix + "__lottie_element_" + (_count += 1);
    }), _count;
    function HSVtoRGB(t, e, i) {
      var r, s, a, n, o, h, l, p;
      switch (h = i * (1 - e), l = i * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = i * (1 - (1 - o) * e), n % 6) {
        case 0:
          r = i, s = p, a = h;
          break;
        case 1:
          r = l, s = i, a = h;
          break;
        case 2:
          r = h, s = i, a = p;
          break;
        case 3:
          r = h, s = l, a = i;
          break;
        case 4:
          r = p, s = h, a = i;
          break;
        case 5:
          r = i, s = h, a = l;
      }
      return [r, s, a];
    }
    function RGBtoHSV(t, e, i) {
      var r, s = Math.max(t, e, i), a = Math.min(t, e, i), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
      switch (s) {
        case a:
          r = 0;
          break;
        case t:
          r = e - i + n * (e < i ? 6 : 0), r /= 6 * n;
          break;
        case e:
          r = i - t + 2 * n, r /= 6 * n;
          break;
        case i:
          r = t - e + 4 * n, r /= 6 * n;
      }
      return [r, o, h];
    }
    function addSaturationToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);
    }
    function addBrightnessToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);
    }
    function addHueToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);
    }
    var rgbToHex = (function() {
      var t, e, i = [];
      for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 === e.length ? "0" + e : e;
      return function(t2, e2, r) {
        return t2 < 0 && (t2 = 0), e2 < 0 && (e2 = 0), r < 0 && (r = 0), "#" + i[t2] + i[e2] + i[r];
      };
    })();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(t, e) {
      if (this._cbs[t]) for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e);
    }, addEventListener: function(t, e) {
      return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
        this.removeEventListener(t, e);
      }).bind(this);
    }, removeEventListener: function(t, e) {
      if (e) {
        if (this._cbs[t]) {
          for (var i = 0, r = this._cbs[t].length; i < r; ) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
          this._cbs[t].length || (this._cbs[t] = null);
        }
      } else this._cbs[t] = null;
    } };
    var createTypedArray = /* @__PURE__ */ (function() {
      function t(t2, e) {
        var i, r = 0, s = [];
        switch (t2) {
          case "int16":
          case "uint8c":
            i = 1;
            break;
          default:
            i = 1.1;
        }
        for (r = 0; r < e; r += 1) s.push(i);
        return s;
      }
      return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, i) {
        return "float32" === e ? new Float32Array(i) : "int16" === e ? new Int16Array(i) : "uint8c" === e ? new Uint8ClampedArray(i) : t(e, i);
      } : t;
    })();
    function createSizedArray(t) {
      return Array.apply(null, { length: t });
    }
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function createTag(t) {
      return document.createElement(t);
    }
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {
      -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = true);
    }, iterateDynamicProperties: function() {
      var t;
      this._mdf = false;
      var e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = true);
    }, initDynamicPropertyContainer: function(t) {
      this.container = t, this.dynamicProperties = [], this._mdf = false, this._isAnimated = false;
    } };
    var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) {
      return blendModeEnums[t] || "";
    }), blendModeEnums, lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" }, Matrix = /* @__PURE__ */ (function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function a(i2) {
        if (0 === i2) return this;
        var r2 = t(i2), s2 = e(i2);
        return this._t(r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function n(i2) {
        if (0 === i2) return this;
        var r2 = t(i2), s2 = e(i2);
        return this._t(1, 0, 0, 0, 0, r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1);
      }
      function o(i2) {
        if (0 === i2) return this;
        var r2 = t(i2), s2 = e(i2);
        return this._t(r2, 0, s2, 0, 0, 1, 0, 0, -s2, 0, r2, 0, 0, 0, 0, 1);
      }
      function h(i2) {
        if (0 === i2) return this;
        var r2 = t(i2), s2 = e(i2);
        return this._t(r2, -s2, 0, 0, s2, r2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function l(t2, e2) {
        return this._t(1, e2, t2, 1, 0, 0);
      }
      function p(t2, e2) {
        return this.shear(i(t2), i(e2));
      }
      function m(r2, s2) {
        var a2 = t(s2), n2 = e(s2);
        return this._t(a2, n2, 0, 0, -n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(r2), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a2, -n2, 0, 0, n2, a2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function f(t2, e2, i2) {
        return i2 || 0 === i2 || (i2 = 1), 1 === t2 && 1 === e2 && 1 === i2 ? this : this._t(t2, 0, 0, 0, 0, e2, 0, 0, 0, 0, i2, 0, 0, 0, 0, 1);
      }
      function c(t2, e2, i2, r2, s2, a2, n2, o2, h2, l2, p2, m2, f2, c2, d2, u2) {
        return this.props[0] = t2, this.props[1] = e2, this.props[2] = i2, this.props[3] = r2, this.props[4] = s2, this.props[5] = a2, this.props[6] = n2, this.props[7] = o2, this.props[8] = h2, this.props[9] = l2, this.props[10] = p2, this.props[11] = m2, this.props[12] = f2, this.props[13] = c2, this.props[14] = d2, this.props[15] = u2, this;
      }
      function d(t2, e2, i2) {
        return i2 = i2 || 0, 0 !== t2 || 0 !== e2 || 0 !== i2 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t2, e2, i2, 1) : this;
      }
      function u(t2, e2, i2, r2, s2, a2, n2, o2, h2, l2, p2, m2, f2, c2, d2, u2) {
        var y2 = this.props;
        if (1 === t2 && 0 === e2 && 0 === i2 && 0 === r2 && 0 === s2 && 1 === a2 && 0 === n2 && 0 === o2 && 0 === h2 && 0 === l2 && 1 === p2 && 0 === m2) return y2[12] = y2[12] * t2 + y2[15] * f2, y2[13] = y2[13] * a2 + y2[15] * c2, y2[14] = y2[14] * p2 + y2[15] * d2, y2[15] *= u2, this._identityCalculated = false, this;
        var g2 = y2[0], v2 = y2[1], b2 = y2[2], P2 = y2[3], E2 = y2[4], x2 = y2[5], S2 = y2[6], C2 = y2[7], A2 = y2[8], T2 = y2[9], _2 = y2[10], k2 = y2[11], D2 = y2[12], M2 = y2[13], F2 = y2[14], w2 = y2[15];
        return y2[0] = g2 * t2 + v2 * s2 + b2 * h2 + P2 * f2, y2[1] = g2 * e2 + v2 * a2 + b2 * l2 + P2 * c2, y2[2] = g2 * i2 + v2 * n2 + b2 * p2 + P2 * d2, y2[3] = g2 * r2 + v2 * o2 + b2 * m2 + P2 * u2, y2[4] = E2 * t2 + x2 * s2 + S2 * h2 + C2 * f2, y2[5] = E2 * e2 + x2 * a2 + S2 * l2 + C2 * c2, y2[6] = E2 * i2 + x2 * n2 + S2 * p2 + C2 * d2, y2[7] = E2 * r2 + x2 * o2 + S2 * m2 + C2 * u2, y2[8] = A2 * t2 + T2 * s2 + _2 * h2 + k2 * f2, y2[9] = A2 * e2 + T2 * a2 + _2 * l2 + k2 * c2, y2[10] = A2 * i2 + T2 * n2 + _2 * p2 + k2 * d2, y2[11] = A2 * r2 + T2 * o2 + _2 * m2 + k2 * u2, y2[12] = D2 * t2 + M2 * s2 + F2 * h2 + w2 * f2, y2[13] = D2 * e2 + M2 * a2 + F2 * l2 + w2 * c2, y2[14] = D2 * i2 + M2 * n2 + F2 * p2 + w2 * d2, y2[15] = D2 * r2 + M2 * o2 + F2 * m2 + w2 * u2, this._identityCalculated = false, this;
      }
      function y() {
        return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = true), this._identity;
      }
      function g(t2) {
        for (var e2 = 0; e2 < 16; ) {
          if (t2.props[e2] !== this.props[e2]) return false;
          e2 += 1;
        }
        return true;
      }
      function v(t2) {
        var e2;
        for (e2 = 0; e2 < 16; e2 += 1) t2.props[e2] = this.props[e2];
        return t2;
      }
      function b(t2) {
        var e2;
        for (e2 = 0; e2 < 16; e2 += 1) this.props[e2] = t2[e2];
      }
      function P(t2, e2, i2) {
        return { x: t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12], y: t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13], z: t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14] };
      }
      function E(t2, e2, i2) {
        return t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12];
      }
      function x(t2, e2, i2) {
        return t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13];
      }
      function S(t2, e2, i2) {
        return t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14];
      }
      function C() {
        var t2 = this.props[0] * this.props[5] - this.props[1] * this.props[4], e2 = this.props[5] / t2, i2 = -this.props[1] / t2, r2 = -this.props[4] / t2, s2 = this.props[0] / t2, a2 = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t2, n2 = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t2, o2 = new Matrix();
        return o2.props[0] = e2, o2.props[1] = i2, o2.props[4] = r2, o2.props[5] = s2, o2.props[12] = a2, o2.props[13] = n2, o2;
      }
      function A(t2) {
        return this.getInverseMatrix().applyToPointArray(t2[0], t2[1], t2[2] || 0);
      }
      function T(t2) {
        var e2, i2 = t2.length, r2 = [];
        for (e2 = 0; e2 < i2; e2 += 1) r2[e2] = A(t2[e2]);
        return r2;
      }
      function _(t2, e2, i2) {
        var r2 = createTypedArray("float32", 6);
        if (this.isIdentity()) r2[0] = t2[0], r2[1] = t2[1], r2[2] = e2[0], r2[3] = e2[1], r2[4] = i2[0], r2[5] = i2[1];
        else {
          var s2 = this.props[0], a2 = this.props[1], n2 = this.props[4], o2 = this.props[5], h2 = this.props[12], l2 = this.props[13];
          r2[0] = t2[0] * s2 + t2[1] * n2 + h2, r2[1] = t2[0] * a2 + t2[1] * o2 + l2, r2[2] = e2[0] * s2 + e2[1] * n2 + h2, r2[3] = e2[0] * a2 + e2[1] * o2 + l2, r2[4] = i2[0] * s2 + i2[1] * n2 + h2, r2[5] = i2[0] * a2 + i2[1] * o2 + l2;
        }
        return r2;
      }
      function k(t2, e2, i2) {
        return this.isIdentity() ? [t2, e2, i2] : [t2 * this.props[0] + e2 * this.props[4] + i2 * this.props[8] + this.props[12], t2 * this.props[1] + e2 * this.props[5] + i2 * this.props[9] + this.props[13], t2 * this.props[2] + e2 * this.props[6] + i2 * this.props[10] + this.props[14]];
      }
      function D(t2, e2) {
        if (this.isIdentity()) return t2 + "," + e2;
        var i2 = this.props;
        return Math.round(100 * (t2 * i2[0] + e2 * i2[4] + i2[12])) / 100 + "," + Math.round(100 * (t2 * i2[1] + e2 * i2[5] + i2[13])) / 100;
      }
      function M() {
        for (var t2 = 0, e2 = this.props, i2 = "matrix3d("; t2 < 16; ) i2 += r(1e4 * e2[t2]) / 1e4, i2 += 15 === t2 ? ")" : ",", t2 += 1;
        return i2;
      }
      function F(t2) {
        return t2 < 1e-6 && t2 > 0 || t2 > -1e-6 && t2 < 0 ? r(1e4 * t2) / 1e4 : t2;
      }
      function w() {
        var t2 = this.props;
        return "matrix(" + F(t2[0]) + "," + F(t2[1]) + "," + F(t2[4]) + "," + F(t2[5]) + "," + F(t2[12]) + "," + F(t2[13]) + ")";
      }
      return function() {
        this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = P, this.applyToX = E, this.applyToY = x, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = _, this.applyToPointStringified = D, this.toCSS = M, this.to2dCSS = w, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = T, this.inversePoint = A, this.getInverseMatrix = C, this._t = this.transform, this.isIdentity = y, this._identity = true, this._identityCalculated = false, this.props = createTypedArray("float32", 16), this.reset();
      };
    })();
    !(function(t, e) {
      var i = this, r = e.pow(256, 6), s = e.pow(2, 52), a = 2 * s;
      function n(t2) {
        var e2, i2 = t2.length, r2 = this, s2 = 0, a2 = r2.i = r2.j = 0, n2 = r2.S = [];
        for (i2 || (t2 = [i2++]); s2 < 256; ) n2[s2] = s2++;
        for (s2 = 0; s2 < 256; s2++) n2[s2] = n2[a2 = 255 & a2 + t2[s2 % i2] + (e2 = n2[s2])], n2[a2] = e2;
        r2.g = function(t3) {
          for (var e3, i3 = 0, s3 = r2.i, a3 = r2.j, n3 = r2.S; t3--; ) e3 = n3[s3 = 255 & s3 + 1], i3 = 256 * i3 + n3[255 & (n3[s3] = n3[a3 = 255 & a3 + e3]) + (n3[a3] = e3)];
          return r2.i = s3, r2.j = a3, i3;
        };
      }
      function o(t2, e2) {
        return e2.i = t2.i, e2.j = t2.j, e2.S = t2.S.slice(), e2;
      }
      function h(t2, e2) {
        for (var i2, r2 = t2 + "", s2 = 0; s2 < r2.length; ) e2[255 & s2] = 255 & (i2 ^= 19 * e2[255 & s2]) + r2.charCodeAt(s2++);
        return l(e2);
      }
      function l(t2) {
        return String.fromCharCode.apply(0, t2);
      }
      e.seedrandom = function(p, m, f) {
        var c = [], d = h((function t2(e2, i2) {
          var r2, s2 = [], a2 = typeof e2;
          if (i2 && "object" == a2) for (r2 in e2) try {
            s2.push(t2(e2[r2], i2 - 1));
          } catch (t3) {
          }
          return s2.length ? s2 : "string" == a2 ? e2 : e2 + "\0";
        })((m = true === m ? { entropy: true } : m || {}).entropy ? [p, l(t)] : null === p ? (function() {
          try {
            var e2 = new Uint8Array(256);
            return (i.crypto || i.msCrypto).getRandomValues(e2), l(e2);
          } catch (e3) {
            var r2 = i.navigator, s2 = r2 && r2.plugins;
            return [+/* @__PURE__ */ new Date(), i, s2, i.screen, l(t)];
          }
        })() : p, 3), c), u = new n(c), y = function() {
          for (var t2 = u.g(6), e2 = r, i2 = 0; t2 < s; ) t2 = 256 * (t2 + i2), e2 *= 256, i2 = u.g(1);
          for (; t2 >= a; ) t2 /= 2, e2 /= 2, i2 >>>= 1;
          return (t2 + i2) / e2;
        };
        return y.int32 = function() {
          return 0 | u.g(4);
        }, y.quick = function() {
          return u.g(4) / 4294967296;
        }, y.double = y, h(l(u.S), t), (m.pass || f || function(t2, i2, r2, s2) {
          return s2 && (s2.S && o(s2, u), t2.state = function() {
            return o(u, {});
          }), r2 ? (e.random = t2, i2) : t2;
        })(y, d, "global" in m ? m.global : this == e, m.state);
      }, h(e.random(), t);
    })([], BMMath);
    var BezierFactory = (function() {
      var t = { getBezierEasing: function(t2, i2, r2, s2, a2) {
        var n2 = a2 || ("bez_" + t2 + "_" + i2 + "_" + r2 + "_" + s2).replace(/\./g, "p");
        if (e[n2]) return e[n2];
        var o2 = new h([t2, i2, r2, s2]);
        return e[n2] = o2, o2;
      } }, e = {};
      var i = "function" == typeof Float32Array;
      function r(t2, e2) {
        return 1 - 3 * e2 + 3 * t2;
      }
      function s(t2, e2) {
        return 3 * e2 - 6 * t2;
      }
      function a(t2) {
        return 3 * t2;
      }
      function n(t2, e2, i2) {
        return ((r(e2, i2) * t2 + s(e2, i2)) * t2 + a(e2)) * t2;
      }
      function o(t2, e2, i2) {
        return 3 * r(e2, i2) * t2 * t2 + 2 * s(e2, i2) * t2 + a(e2);
      }
      function h(t2) {
        this._p = t2, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = false, this.get = this.get.bind(this);
      }
      return h.prototype = { get: function(t2) {
        var e2 = this._p[0], i2 = this._p[1], r2 = this._p[2], s2 = this._p[3];
        return this._precomputed || this._precompute(), e2 === i2 && r2 === s2 ? t2 : 0 === t2 ? 0 : 1 === t2 ? 1 : n(this._getTForX(t2), i2, s2);
      }, _precompute: function() {
        var t2 = this._p[0], e2 = this._p[1], i2 = this._p[2], r2 = this._p[3];
        this._precomputed = true, t2 === e2 && i2 === r2 || this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var t2 = this._p[0], e2 = this._p[2], i2 = 0; i2 < 11; ++i2) this._mSampleValues[i2] = n(0.1 * i2, t2, e2);
      }, _getTForX: function(t2) {
        for (var e2 = this._p[0], i2 = this._p[2], r2 = this._mSampleValues, s2 = 0, a2 = 1; 10 !== a2 && r2[a2] <= t2; ++a2) s2 += 0.1;
        var h2 = s2 + 0.1 * ((t2 - r2[--a2]) / (r2[a2 + 1] - r2[a2])), l = o(h2, e2, i2);
        return l >= 1e-3 ? (function(t3, e3, i3, r3) {
          for (var s3 = 0; s3 < 4; ++s3) {
            var a3 = o(e3, i3, r3);
            if (0 === a3) return e3;
            e3 -= (n(e3, i3, r3) - t3) / a3;
          }
          return e3;
        })(t2, h2, e2, i2) : 0 === l ? h2 : (function(t3, e3, i3, r3, s3) {
          var a3, o2, h3 = 0;
          do {
            (a3 = n(o2 = e3 + (i3 - e3) / 2, r3, s3) - t3) > 0 ? i3 = o2 : e3 = o2;
          } while (Math.abs(a3) > 1e-7 && ++h3 < 10);
          return o2;
        })(t2, s2, s2 + 0.1, e2, i2);
      } }, t;
    })();
    function extendPrototype(t, e) {
      var i, r, s = t.length;
      for (i = 0; i < s; i += 1) for (var a in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, a) && (e.prototype[a] = r[a]);
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    function bezFunction() {
      var t = Math;
      function e(t2, e2, i2, r2, s2, a2) {
        var n2 = t2 * r2 + e2 * s2 + i2 * a2 - s2 * r2 - a2 * t2 - i2 * e2;
        return n2 > -1e-3 && n2 < 1e-3;
      }
      var i = function(t2, e2, i2, r2) {
        var s2, a2, n2, o2, h2, l, p = defaultCurveSegments, m = 0, f = [], c = [], d = bezierLengthPool.newElement();
        for (n2 = i2.length, s2 = 0; s2 < p; s2 += 1) {
          for (h2 = s2 / (p - 1), l = 0, a2 = 0; a2 < n2; a2 += 1) o2 = bmPow(1 - h2, 3) * t2[a2] + 3 * bmPow(1 - h2, 2) * h2 * i2[a2] + 3 * (1 - h2) * bmPow(h2, 2) * r2[a2] + bmPow(h2, 3) * e2[a2], f[a2] = o2, null !== c[a2] && (l += bmPow(f[a2] - c[a2], 2)), c[a2] = f[a2];
          l && (m += l = bmSqrt(l)), d.percents[s2] = h2, d.lengths[s2] = m;
        }
        return d.addedLength = m, d;
      };
      function r(t2) {
        this.segmentLength = 0, this.points = new Array(t2);
      }
      function s(t2, e2) {
        this.partialLength = t2, this.point = e2;
      }
      var a, n = (a = {}, function(t2, i2, n2, o2) {
        var h2 = (t2[0] + "_" + t2[1] + "_" + i2[0] + "_" + i2[1] + "_" + n2[0] + "_" + n2[1] + "_" + o2[0] + "_" + o2[1]).replace(/\./g, "p");
        if (!a[h2]) {
          var l, p, m, f, c, d, u, y = defaultCurveSegments, g = 0, v = null;
          2 === t2.length && (t2[0] !== i2[0] || t2[1] !== i2[1]) && e(t2[0], t2[1], i2[0], i2[1], t2[0] + n2[0], t2[1] + n2[1]) && e(t2[0], t2[1], i2[0], i2[1], i2[0] + o2[0], i2[1] + o2[1]) && (y = 2);
          var b = new r(y);
          for (m = n2.length, l = 0; l < y; l += 1) {
            for (u = createSizedArray(m), c = l / (y - 1), d = 0, p = 0; p < m; p += 1) f = bmPow(1 - c, 3) * t2[p] + 3 * bmPow(1 - c, 2) * c * (t2[p] + n2[p]) + 3 * (1 - c) * bmPow(c, 2) * (i2[p] + o2[p]) + bmPow(c, 3) * i2[p], u[p] = f, null !== v && (d += bmPow(u[p] - v[p], 2));
            g += d = bmSqrt(d), b.points[l] = new s(d, u), v = u;
          }
          b.segmentLength = g, a[h2] = b;
        }
        return a[h2];
      });
      function o(t2, e2) {
        var i2 = e2.percents, r2 = e2.lengths, s2 = i2.length, a2 = bmFloor((s2 - 1) * t2), n2 = t2 * e2.addedLength, o2 = 0;
        if (a2 === s2 - 1 || 0 === a2 || n2 === r2[a2]) return i2[a2];
        for (var h2 = r2[a2] > n2 ? -1 : 1, l = true; l; ) if (r2[a2] <= n2 && r2[a2 + 1] > n2 ? (o2 = (n2 - r2[a2]) / (r2[a2 + 1] - r2[a2]), l = false) : a2 += h2, a2 < 0 || a2 >= s2 - 1) {
          if (a2 === s2 - 1) return i2[a2];
          l = false;
        }
        return i2[a2] + (i2[a2 + 1] - i2[a2]) * o2;
      }
      var h = createTypedArray("float32", 8);
      return { getSegmentsLength: function(t2) {
        var e2, r2 = segmentsLengthPool.newElement(), s2 = t2.c, a2 = t2.v, n2 = t2.o, o2 = t2.i, h2 = t2._length, l = r2.lengths, p = 0;
        for (e2 = 0; e2 < h2 - 1; e2 += 1) l[e2] = i(a2[e2], a2[e2 + 1], n2[e2], o2[e2 + 1]), p += l[e2].addedLength;
        return s2 && h2 && (l[e2] = i(a2[e2], a2[0], n2[e2], o2[0]), p += l[e2].addedLength), r2.totalLength = p, r2;
      }, getNewSegment: function(e2, i2, r2, s2, a2, n2, l) {
        a2 < 0 ? a2 = 0 : a2 > 1 && (a2 = 1);
        var p, m = o(a2, l), f = o(n2 = n2 > 1 ? 1 : n2, l), c = e2.length, d = 1 - m, u = 1 - f, y = d * d * d, g = m * d * d * 3, v = m * m * d * 3, b = m * m * m, P = d * d * u, E = m * d * u + d * m * u + d * d * f, x = m * m * u + d * m * f + m * d * f, S = m * m * f, C = d * u * u, A = m * u * u + d * f * u + d * u * f, T = m * f * u + d * f * f + m * u * f, _ = m * f * f, k = u * u * u, D = f * u * u + u * f * u + u * u * f, M = f * f * u + u * f * f + f * u * f, F = f * f * f;
        for (p = 0; p < c; p += 1) h[4 * p] = t.round(1e3 * (y * e2[p] + g * r2[p] + v * s2[p] + b * i2[p])) / 1e3, h[4 * p + 1] = t.round(1e3 * (P * e2[p] + E * r2[p] + x * s2[p] + S * i2[p])) / 1e3, h[4 * p + 2] = t.round(1e3 * (C * e2[p] + A * r2[p] + T * s2[p] + _ * i2[p])) / 1e3, h[4 * p + 3] = t.round(1e3 * (k * e2[p] + D * r2[p] + M * s2[p] + F * i2[p])) / 1e3;
        return h;
      }, getPointInSegment: function(e2, i2, r2, s2, a2, n2) {
        var h2 = o(a2, n2), l = 1 - h2;
        return [t.round(1e3 * (l * l * l * e2[0] + (h2 * l * l + l * h2 * l + l * l * h2) * r2[0] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[0] + h2 * h2 * h2 * i2[0])) / 1e3, t.round(1e3 * (l * l * l * e2[1] + (h2 * l * l + l * h2 * l + l * l * h2) * r2[1] + (h2 * h2 * l + l * h2 * h2 + h2 * l * h2) * s2[1] + h2 * h2 * h2 * i2[1])) / 1e3];
      }, buildBezierData: n, pointOnLine2D: e, pointOnLine3D: function(i2, r2, s2, a2, n2, o2, h2, l, p) {
        if (0 === s2 && 0 === o2 && 0 === p) return e(i2, r2, a2, n2, h2, l);
        var m, f = t.sqrt(t.pow(a2 - i2, 2) + t.pow(n2 - r2, 2) + t.pow(o2 - s2, 2)), c = t.sqrt(t.pow(h2 - i2, 2) + t.pow(l - r2, 2) + t.pow(p - s2, 2)), d = t.sqrt(t.pow(h2 - a2, 2) + t.pow(l - n2, 2) + t.pow(p - o2, 2));
        return (m = f > c ? f > d ? f - c - d : d - c - f : d > c ? d - c - f : c - f - d) > -1e-4 && m < 1e-4;
      } };
    }
    !(function() {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function(e2) {
        var i2 = (/* @__PURE__ */ new Date()).getTime(), r = Math.max(0, 16 - (i2 - t)), s = setTimeout((function() {
          e2(i2 + r);
        }), r);
        return t = i2 + r, s;
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t2) {
        clearTimeout(t2);
      });
    })();
    var bez = bezFunction();
    function dataFunctionManager() {
      function t(s2, a2, n2) {
        var o2, h2, l2, m2, f, c, d = s2.length;
        for (h2 = 0; h2 < d; h2 += 1) if ("ks" in (o2 = s2[h2]) && !o2.completed) {
          if (o2.completed = true, o2.tt && (s2[h2 - 1].td = o2.tt), o2.hasMask) {
            var u = o2.masksProperties;
            for (m2 = u.length, l2 = 0; l2 < m2; l2 += 1) if (u[l2].pt.k.i) r(u[l2].pt.k);
            else for (c = u[l2].pt.k.length, f = 0; f < c; f += 1) u[l2].pt.k[f].s && r(u[l2].pt.k[f].s[0]), u[l2].pt.k[f].e && r(u[l2].pt.k[f].e[0]);
          }
          0 === o2.ty ? (o2.layers = e(o2.refId, a2), t(o2.layers, a2, n2)) : 4 === o2.ty ? i(o2.shapes) : 5 === o2.ty && p(o2);
        }
      }
      function e(t2, e2) {
        for (var i2 = 0, r2 = e2.length; i2 < r2; ) {
          if (e2[i2].id === t2) return e2[i2].layers.__used ? JSON.parse(JSON.stringify(e2[i2].layers)) : (e2[i2].layers.__used = true, e2[i2].layers);
          i2 += 1;
        }
        return null;
      }
      function i(t2) {
        var e2, s2, a2;
        for (e2 = t2.length - 1; e2 >= 0; e2 -= 1) if ("sh" === t2[e2].ty) if (t2[e2].ks.k.i) r(t2[e2].ks.k);
        else for (a2 = t2[e2].ks.k.length, s2 = 0; s2 < a2; s2 += 1) t2[e2].ks.k[s2].s && r(t2[e2].ks.k[s2].s[0]), t2[e2].ks.k[s2].e && r(t2[e2].ks.k[s2].e[0]);
        else "gr" === t2[e2].ty && i(t2[e2].it);
      }
      function r(t2) {
        var e2, i2 = t2.i.length;
        for (e2 = 0; e2 < i2; e2 += 1) t2.i[e2][0] += t2.v[e2][0], t2.i[e2][1] += t2.v[e2][1], t2.o[e2][0] += t2.v[e2][0], t2.o[e2][1] += t2.v[e2][1];
      }
      function s(t2, e2) {
        var i2 = e2 ? e2.split(".") : [100, 100, 100];
        return t2[0] > i2[0] || !(i2[0] > t2[0]) && (t2[1] > i2[1] || !(i2[1] > t2[1]) && (t2[2] > i2[2] || !(i2[2] > t2[2]) && null));
      }
      var a, n = /* @__PURE__ */ (function() {
        var t2 = [4, 4, 14];
        function e2(t3) {
          var e3, i2, r2, s2 = t3.length;
          for (e3 = 0; e3 < s2; e3 += 1) 5 === t3[e3].ty && (i2 = t3[e3], r2 = void 0, r2 = i2.t.d, i2.t.d = { k: [{ s: r2, t: 0 }] });
        }
        return function(i2) {
          if (s(t2, i2.v) && (e2(i2.layers), i2.assets)) {
            var r2, a2 = i2.assets.length;
            for (r2 = 0; r2 < a2; r2 += 1) i2.assets[r2].layers && e2(i2.assets[r2].layers);
          }
        };
      })(), o = (a = [4, 7, 99], function(t2) {
        if (t2.chars && !s(a, t2.v)) {
          var e2, i2, n2, o2, h2, l2 = t2.chars.length;
          for (e2 = 0; e2 < l2; e2 += 1) if (t2.chars[e2].data && t2.chars[e2].data.shapes) for (n2 = (h2 = t2.chars[e2].data.shapes[0].it).length, i2 = 0; i2 < n2; i2 += 1) (o2 = h2[i2].ks.k).__converted || (r(h2[i2].ks.k), o2.__converted = true);
        }
      }), h = /* @__PURE__ */ (function() {
        var t2 = [4, 1, 9];
        function e2(t3) {
          var i3, r2, s2, a2 = t3.length;
          for (i3 = 0; i3 < a2; i3 += 1) if ("gr" === t3[i3].ty) e2(t3[i3].it);
          else if ("fl" === t3[i3].ty || "st" === t3[i3].ty) if (t3[i3].c.k && t3[i3].c.k[0].i) for (s2 = t3[i3].c.k.length, r2 = 0; r2 < s2; r2 += 1) t3[i3].c.k[r2].s && (t3[i3].c.k[r2].s[0] /= 255, t3[i3].c.k[r2].s[1] /= 255, t3[i3].c.k[r2].s[2] /= 255, t3[i3].c.k[r2].s[3] /= 255), t3[i3].c.k[r2].e && (t3[i3].c.k[r2].e[0] /= 255, t3[i3].c.k[r2].e[1] /= 255, t3[i3].c.k[r2].e[2] /= 255, t3[i3].c.k[r2].e[3] /= 255);
          else t3[i3].c.k[0] /= 255, t3[i3].c.k[1] /= 255, t3[i3].c.k[2] /= 255, t3[i3].c.k[3] /= 255;
        }
        function i2(t3) {
          var i3, r2 = t3.length;
          for (i3 = 0; i3 < r2; i3 += 1) 4 === t3[i3].ty && e2(t3[i3].shapes);
        }
        return function(e3) {
          if (s(t2, e3.v) && (i2(e3.layers), e3.assets)) {
            var r2, a2 = e3.assets.length;
            for (r2 = 0; r2 < a2; r2 += 1) e3.assets[r2].layers && i2(e3.assets[r2].layers);
          }
        };
      })(), l = /* @__PURE__ */ (function() {
        var t2 = [4, 4, 18];
        function e2(t3) {
          var i3, r2, s2;
          for (i3 = t3.length - 1; i3 >= 0; i3 -= 1) if ("sh" === t3[i3].ty) if (t3[i3].ks.k.i) t3[i3].ks.k.c = t3[i3].closed;
          else for (s2 = t3[i3].ks.k.length, r2 = 0; r2 < s2; r2 += 1) t3[i3].ks.k[r2].s && (t3[i3].ks.k[r2].s[0].c = t3[i3].closed), t3[i3].ks.k[r2].e && (t3[i3].ks.k[r2].e[0].c = t3[i3].closed);
          else "gr" === t3[i3].ty && e2(t3[i3].it);
        }
        function i2(t3) {
          var i3, r2, s2, a2, n2, o2, h2 = t3.length;
          for (r2 = 0; r2 < h2; r2 += 1) {
            if ((i3 = t3[r2]).hasMask) {
              var l2 = i3.masksProperties;
              for (a2 = l2.length, s2 = 0; s2 < a2; s2 += 1) if (l2[s2].pt.k.i) l2[s2].pt.k.c = l2[s2].cl;
              else for (o2 = l2[s2].pt.k.length, n2 = 0; n2 < o2; n2 += 1) l2[s2].pt.k[n2].s && (l2[s2].pt.k[n2].s[0].c = l2[s2].cl), l2[s2].pt.k[n2].e && (l2[s2].pt.k[n2].e[0].c = l2[s2].cl);
            }
            4 === i3.ty && e2(i3.shapes);
          }
        }
        return function(e3) {
          if (s(t2, e3.v) && (i2(e3.layers), e3.assets)) {
            var r2, a2 = e3.assets.length;
            for (r2 = 0; r2 < a2; r2 += 1) e3.assets[r2].layers && i2(e3.assets[r2].layers);
          }
        };
      })();
      function p(t2) {
        0 !== t2.t.a.length || "m" in t2.t.p || (t2.singleShape = true);
      }
      var m = { completeData: function(e2, i2) {
        e2.__complete || (h(e2), n(e2), o(e2), l(e2), t(e2.layers, e2.assets, i2), e2.__complete = true);
      } };
      return m.checkColors = h, m.checkChars = o, m.checkShapes = l, m.completeLayers = t, m;
    }
    var dataManager = dataFunctionManager();
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", s = e.length, a = 0; a < s; a += 1) switch (e[a].toLowerCase()) {
        case "italic":
          r = "italic";
          break;
        case "bold":
          i = "700";
          break;
        case "black":
          i = "900";
          break;
        case "medium":
          i = "500";
          break;
        case "regular":
        case "normal":
          i = "400";
          break;
        case "light":
        case "thin":
          i = "200";
      }
      return { style: r, weight: t.fWeight || i };
    }
    var FontManager = (function() {
      var t = { w: 0, size: 0, shapes: [] }, e = [];
      e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"], r = [65039, 8205];
      function s(t2, e2) {
        var i2 = createTag("span");
        i2.setAttribute("aria-hidden", true), i2.style.fontFamily = e2;
        var r2 = createTag("span");
        r2.innerText = "giItT1WQy@!-/#", i2.style.position = "absolute", i2.style.left = "-10000px", i2.style.top = "-10000px", i2.style.fontSize = "300px", i2.style.fontVariant = "normal", i2.style.fontStyle = "normal", i2.style.fontWeight = "normal", i2.style.letterSpacing = "0", i2.appendChild(r2), document.body.appendChild(i2);
        var s2 = r2.offsetWidth;
        return r2.style.fontFamily = (function(t3) {
          var e3, i3 = t3.split(","), r3 = i3.length, s3 = [];
          for (e3 = 0; e3 < r3; e3 += 1) "sans-serif" !== i3[e3] && "monospace" !== i3[e3] && s3.push(i3[e3]);
          return s3.join(",");
        })(t2) + ", " + e2, { node: r2, w: s2, parent: i2 };
      }
      function a(t2, e2) {
        var i2 = createNS("text");
        i2.style.fontSize = "100px";
        var r2 = getFontProperties(e2);
        return i2.setAttribute("font-family", e2.fFamily), i2.setAttribute("font-style", r2.style), i2.setAttribute("font-weight", r2.weight), i2.textContent = "1", e2.fClass ? (i2.style.fontFamily = "inherit", i2.setAttribute("class", e2.fClass)) : i2.style.fontFamily = e2.fFamily, t2.appendChild(i2), createTag("canvas").getContext("2d").font = e2.fWeight + " " + e2.fStyle + " 100px " + e2.fFamily, i2;
      }
      var n = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = false, this._warned = false, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      return n.isModifier = function(t2, e2) {
        var r2 = t2.toString(16) + e2.toString(16);
        return -1 !== i.indexOf(r2);
      }, n.isZeroWidthJoiner = function(t2, e2) {
        return e2 ? t2 === r[0] && e2 === r[1] : t2 === r[1];
      }, n.isCombinedCharacter = function(t2) {
        return -1 !== e.indexOf(t2);
      }, n.prototype = { addChars: function(t2) {
        if (t2) {
          var e2;
          this.chars || (this.chars = []);
          var i2, r2, s2 = t2.length, a2 = this.chars.length;
          for (e2 = 0; e2 < s2; e2 += 1) {
            for (i2 = 0, r2 = false; i2 < a2; ) this.chars[i2].style === t2[e2].style && this.chars[i2].fFamily === t2[e2].fFamily && this.chars[i2].ch === t2[e2].ch && (r2 = true), i2 += 1;
            r2 || (this.chars.push(t2[e2]), a2 += 1);
          }
        }
      }, addFonts: function(t2, e2) {
        if (t2) {
          if (this.chars) return this.isLoaded = true, void (this.fonts = t2.list);
          var i2, r2 = t2.list, n2 = r2.length, o = n2;
          for (i2 = 0; i2 < n2; i2 += 1) {
            var h, l, p = true;
            if (r2[i2].loaded = false, r2[i2].monoCase = s(r2[i2].fFamily, "monospace"), r2[i2].sansCase = s(r2[i2].fFamily, "sans-serif"), r2[i2].fPath) {
              if ("p" === r2[i2].fOrigin || 3 === r2[i2].origin) {
                if ((h = document.querySelectorAll('style[f-forigin="p"][f-family="' + r2[i2].fFamily + '"], style[f-origin="3"][f-family="' + r2[i2].fFamily + '"]')).length > 0 && (p = false), p) {
                  var m = createTag("style");
                  m.setAttribute("f-forigin", r2[i2].fOrigin), m.setAttribute("f-origin", r2[i2].origin), m.setAttribute("f-family", r2[i2].fFamily), m.type = "text/css", m.innerText = "@font-face {font-family: " + r2[i2].fFamily + "; font-style: normal; src: url('" + r2[i2].fPath + "');}", e2.appendChild(m);
                }
              } else if ("g" === r2[i2].fOrigin || 1 === r2[i2].origin) {
                for (h = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), l = 0; l < h.length; l += 1) -1 !== h[l].href.indexOf(r2[i2].fPath) && (p = false);
                if (p) {
                  var f = createTag("link");
                  f.setAttribute("f-forigin", r2[i2].fOrigin), f.setAttribute("f-origin", r2[i2].origin), f.type = "text/css", f.rel = "stylesheet", f.href = r2[i2].fPath, document.body.appendChild(f);
                }
              } else if ("t" === r2[i2].fOrigin || 2 === r2[i2].origin) {
                for (h = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), l = 0; l < h.length; l += 1) r2[i2].fPath === h[l].src && (p = false);
                if (p) {
                  var c = createTag("link");
                  c.setAttribute("f-forigin", r2[i2].fOrigin), c.setAttribute("f-origin", r2[i2].origin), c.setAttribute("rel", "stylesheet"), c.setAttribute("href", r2[i2].fPath), e2.appendChild(c);
                }
              }
            } else r2[i2].loaded = true, o -= 1;
            r2[i2].helper = a(e2, r2[i2]), r2[i2].cache = {}, this.fonts.push(r2[i2]);
          }
          0 === o ? this.isLoaded = true : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else this.isLoaded = true;
      }, getCharData: function(e2, i2, r2) {
        for (var s2 = 0, a2 = this.chars.length; s2 < a2; ) {
          if (this.chars[s2].ch === e2 && this.chars[s2].style === i2 && this.chars[s2].fFamily === r2) return this.chars[s2];
          s2 += 1;
        }
        return ("string" == typeof e2 && 13 !== e2.charCodeAt(0) || !e2) && console && console.warn && !this._warned && (this._warned = true, console.warn("Missing character from exported characters list: ", e2, i2, r2)), t;
      }, getFontByName: function(t2) {
        for (var e2 = 0, i2 = this.fonts.length; e2 < i2; ) {
          if (this.fonts[e2].fName === t2) return this.fonts[e2];
          e2 += 1;
        }
        return this.fonts[0];
      }, measureText: function(t2, e2, i2) {
        var r2 = this.getFontByName(e2), s2 = t2.charCodeAt(0);
        if (!r2.cache[s2 + 1]) {
          var a2 = r2.helper;
          if (" " === t2) {
            a2.textContent = "|" + t2 + "|";
            var n2 = a2.getComputedTextLength();
            a2.textContent = "||";
            var o = a2.getComputedTextLength();
            r2.cache[s2 + 1] = (n2 - o) / 100;
          } else a2.textContent = t2, r2.cache[s2 + 1] = a2.getComputedTextLength() / 100;
        }
        return r2.cache[s2 + 1] * i2;
      }, checkLoadedFonts: function() {
        var t2, e2, i2, r2 = this.fonts.length, s2 = r2;
        for (t2 = 0; t2 < r2; t2 += 1) this.fonts[t2].loaded ? s2 -= 1 : "n" === this.fonts[t2].fOrigin || 0 === this.fonts[t2].origin ? this.fonts[t2].loaded = true : (e2 = this.fonts[t2].monoCase.node, i2 = this.fonts[t2].monoCase.w, e2.offsetWidth !== i2 ? (s2 -= 1, this.fonts[t2].loaded = true) : (e2 = this.fonts[t2].sansCase.node, i2 = this.fonts[t2].sansCase.w, e2.offsetWidth !== i2 && (s2 -= 1, this.fonts[t2].loaded = true)), this.fonts[t2].loaded && (this.fonts[t2].sansCase.parent.parentNode.removeChild(this.fonts[t2].sansCase.parent), this.fonts[t2].monoCase.parent.parentNode.removeChild(this.fonts[t2].monoCase.parent)));
        0 !== s2 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }, setIsLoaded: function() {
        this.isLoaded = true;
      } }, n;
    })(), PropertyFactory = /* @__PURE__ */ (function() {
      var t = initialDefaultFrame, e = Math.abs;
      function i(t2, e2) {
        var i2, s2 = this.offsetTime;
        "multidimensional" === this.propType && (i2 = createTypedArray("float32", this.pv.length));
        for (var a2, n2, o2, h2, l2, p2, m2, f, c = e2.lastIndex, d = c, u = this.keyframes.length - 1, y = true; y; ) {
          if (a2 = this.keyframes[d], n2 = this.keyframes[d + 1], d === u - 1 && t2 >= n2.t - s2) {
            a2.h && (a2 = n2), c = 0;
            break;
          }
          if (n2.t - s2 > t2) {
            c = d;
            break;
          }
          d < u - 1 ? d += 1 : (c = 0, y = false);
        }
        var g, v = n2.t - s2, b = a2.t - s2;
        if (a2.to) {
          a2.bezierData || (a2.bezierData = bez.buildBezierData(a2.s, n2.s || a2.e, a2.to, a2.ti));
          var P = a2.bezierData;
          if (t2 >= v || t2 < b) {
            var E = t2 >= v ? P.points.length - 1 : 0;
            for (h2 = P.points[E].point.length, o2 = 0; o2 < h2; o2 += 1) i2[o2] = P.points[E].point[o2];
          } else {
            a2.__fnct ? f = a2.__fnct : (f = BezierFactory.getBezierEasing(a2.o.x, a2.o.y, a2.i.x, a2.i.y, a2.n).get, a2.__fnct = f), l2 = f((t2 - b) / (v - b));
            var x, S = P.segmentLength * l2, C = e2.lastFrame < t2 && e2._lastKeyframeIndex === d ? e2._lastAddedLength : 0;
            for (m2 = e2.lastFrame < t2 && e2._lastKeyframeIndex === d ? e2._lastPoint : 0, y = true, p2 = P.points.length; y; ) {
              if (C += P.points[m2].partialLength, 0 === S || 0 === l2 || m2 === P.points.length - 1) {
                for (h2 = P.points[m2].point.length, o2 = 0; o2 < h2; o2 += 1) i2[o2] = P.points[m2].point[o2];
                break;
              }
              if (S >= C && S < C + P.points[m2 + 1].partialLength) {
                for (x = (S - C) / P.points[m2 + 1].partialLength, h2 = P.points[m2].point.length, o2 = 0; o2 < h2; o2 += 1) i2[o2] = P.points[m2].point[o2] + (P.points[m2 + 1].point[o2] - P.points[m2].point[o2]) * x;
                break;
              }
              m2 < p2 - 1 ? m2 += 1 : y = false;
            }
            e2._lastPoint = m2, e2._lastAddedLength = C - P.points[m2].partialLength, e2._lastKeyframeIndex = d;
          }
        } else {
          var A, T, _, k, D;
          if (u = a2.s.length, g = n2.s || a2.e, this.sh && 1 !== a2.h) if (t2 >= v) i2[0] = g[0], i2[1] = g[1], i2[2] = g[2];
          else if (t2 <= b) i2[0] = a2.s[0], i2[1] = a2.s[1], i2[2] = a2.s[2];
          else {
            !(function(t3, e3) {
              var i3 = e3[0], r2 = e3[1], s3 = e3[2], a3 = e3[3], n3 = Math.atan2(2 * r2 * a3 - 2 * i3 * s3, 1 - 2 * r2 * r2 - 2 * s3 * s3), o3 = Math.asin(2 * i3 * r2 + 2 * s3 * a3), h3 = Math.atan2(2 * i3 * a3 - 2 * r2 * s3, 1 - 2 * i3 * i3 - 2 * s3 * s3);
              t3[0] = n3 / degToRads, t3[1] = o3 / degToRads, t3[2] = h3 / degToRads;
            })(i2, (function(t3, e3, i3) {
              var r2, s3, a3, n3, o3, h3 = [], l3 = t3[0], p3 = t3[1], m3 = t3[2], f2 = t3[3], c2 = e3[0], d2 = e3[1], u2 = e3[2], y2 = e3[3];
              (s3 = l3 * c2 + p3 * d2 + m3 * u2 + f2 * y2) < 0 && (s3 = -s3, c2 = -c2, d2 = -d2, u2 = -u2, y2 = -y2);
              1 - s3 > 1e-6 ? (r2 = Math.acos(s3), a3 = Math.sin(r2), n3 = Math.sin((1 - i3) * r2) / a3, o3 = Math.sin(i3 * r2) / a3) : (n3 = 1 - i3, o3 = i3);
              return h3[0] = n3 * l3 + o3 * c2, h3[1] = n3 * p3 + o3 * d2, h3[2] = n3 * m3 + o3 * u2, h3[3] = n3 * f2 + o3 * y2, h3;
            })(r(a2.s), r(g), (t2 - b) / (v - b)));
          }
          else for (d = 0; d < u; d += 1) 1 !== a2.h && (t2 >= v ? l2 = 1 : t2 < b ? l2 = 0 : (a2.o.x.constructor === Array ? (a2.__fnct || (a2.__fnct = []), a2.__fnct[d] ? f = a2.__fnct[d] : (A = void 0 === a2.o.x[d] ? a2.o.x[0] : a2.o.x[d], T = void 0 === a2.o.y[d] ? a2.o.y[0] : a2.o.y[d], _ = void 0 === a2.i.x[d] ? a2.i.x[0] : a2.i.x[d], k = void 0 === a2.i.y[d] ? a2.i.y[0] : a2.i.y[d], f = BezierFactory.getBezierEasing(A, T, _, k).get, a2.__fnct[d] = f)) : a2.__fnct ? f = a2.__fnct : (A = a2.o.x, T = a2.o.y, _ = a2.i.x, k = a2.i.y, f = BezierFactory.getBezierEasing(A, T, _, k).get, a2.__fnct = f), l2 = f((t2 - b) / (v - b)))), g = n2.s || a2.e, D = 1 === a2.h ? a2.s[d] : a2.s[d] + (g[d] - a2.s[d]) * l2, "multidimensional" === this.propType ? i2[d] = D : i2 = D;
        }
        return e2.lastIndex = c, i2;
      }
      function r(t2) {
        var e2 = t2[0] * degToRads, i2 = t2[1] * degToRads, r2 = t2[2] * degToRads, s2 = Math.cos(e2 / 2), a2 = Math.cos(i2 / 2), n2 = Math.cos(r2 / 2), o2 = Math.sin(e2 / 2), h2 = Math.sin(i2 / 2), l2 = Math.sin(r2 / 2);
        return [o2 * h2 * n2 + s2 * a2 * l2, o2 * a2 * n2 + s2 * h2 * l2, s2 * h2 * n2 - o2 * a2 * l2, s2 * a2 * n2 - o2 * h2 * l2];
      }
      function s() {
        var e2 = this.comp.renderedFrame - this.offsetTime, i2 = this.keyframes[0].t - this.offsetTime, r2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        if (!(e2 === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= r2 && e2 >= r2 || this._caching.lastFrame < i2 && e2 < i2))) {
          this._caching.lastFrame >= e2 && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
          var s2 = this.interpolateValue(e2, this._caching);
          this.pv = s2;
        }
        return this._caching.lastFrame = e2, this.pv;
      }
      function a(t2) {
        var i2;
        if ("unidimensional" === this.propType) i2 = t2 * this.mult, e(this.v - i2) > 1e-5 && (this.v = i2, this._mdf = true);
        else for (var r2 = 0, s2 = this.v.length; r2 < s2; ) i2 = t2[r2] * this.mult, e(this.v[r2] - i2) > 1e-5 && (this.v[r2] = i2, this._mdf = true), r2 += 1;
      }
      function n() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);
        else {
          var t2;
          this.lock = true, this._mdf = this._isFirstFrame;
          var e2 = this.effectsSequence.length, i2 = this.kf ? this.pv : this.data.k;
          for (t2 = 0; t2 < e2; t2 += 1) i2 = this.effectsSequence[t2](i2);
          this.setVValue(i2), this._isFirstFrame = false, this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
      function o(t2) {
        this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
      }
      function h(t2, e2, i2, r2) {
        this.propType = "unidimensional", this.mult = i2 || 1, this.data = e2, this.v = i2 ? e2.k * i2 : e2.k, this.pv = e2.k, this._mdf = false, this.elem = t2, this.container = r2, this.comp = t2.comp, this.k = false, this.kf = false, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = true, this.getValue = n, this.setVValue = a, this.addEffect = o;
      }
      function l(t2, e2, i2, r2) {
        var s2;
        this.propType = "multidimensional", this.mult = i2 || 1, this.data = e2, this._mdf = false, this.elem = t2, this.container = r2, this.comp = t2.comp, this.k = false, this.kf = false, this.frameId = -1;
        var h2 = e2.k.length;
        for (this.v = createTypedArray("float32", h2), this.pv = createTypedArray("float32", h2), this.vel = createTypedArray("float32", h2), s2 = 0; s2 < h2; s2 += 1) this.v[s2] = e2.k[s2] * this.mult, this.pv[s2] = e2.k[s2];
        this._isFirstFrame = true, this.effectsSequence = [], this.getValue = n, this.setVValue = a, this.addEffect = o;
      }
      function p(e2, r2, h2, l2) {
        this.propType = "unidimensional", this.keyframes = r2.k, this.offsetTime = e2.data.st, this.frameId = -1, this._caching = { lastFrame: t, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = true, this.kf = true, this.data = r2, this.mult = h2 || 1, this.elem = e2, this.container = l2, this.comp = e2.comp, this.v = t, this.pv = t, this._isFirstFrame = true, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.effectsSequence = [s.bind(this)], this.addEffect = o;
      }
      function m(e2, r2, h2, l2) {
        var p2;
        this.propType = "multidimensional";
        var m2, f, c, d, u = r2.k.length;
        for (p2 = 0; p2 < u - 1; p2 += 1) r2.k[p2].to && r2.k[p2].s && r2.k[p2 + 1] && r2.k[p2 + 1].s && (m2 = r2.k[p2].s, f = r2.k[p2 + 1].s, c = r2.k[p2].to, d = r2.k[p2].ti, (2 === m2.length && (m2[0] !== f[0] || m2[1] !== f[1]) && bez.pointOnLine2D(m2[0], m2[1], f[0], f[1], m2[0] + c[0], m2[1] + c[1]) && bez.pointOnLine2D(m2[0], m2[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || 3 === m2.length && (m2[0] !== f[0] || m2[1] !== f[1] || m2[2] !== f[2]) && bez.pointOnLine3D(m2[0], m2[1], m2[2], f[0], f[1], f[2], m2[0] + c[0], m2[1] + c[1], m2[2] + c[2]) && bez.pointOnLine3D(m2[0], m2[1], m2[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (r2.k[p2].to = null, r2.k[p2].ti = null), m2[0] === f[0] && m2[1] === f[1] && 0 === c[0] && 0 === c[1] && 0 === d[0] && 0 === d[1] && (2 === m2.length || m2[2] === f[2] && 0 === c[2] && 0 === d[2]) && (r2.k[p2].to = null, r2.k[p2].ti = null));
        this.effectsSequence = [s.bind(this)], this.data = r2, this.keyframes = r2.k, this.offsetTime = e2.data.st, this.k = true, this.kf = true, this._isFirstFrame = true, this.mult = h2 || 1, this.elem = e2, this.container = l2, this.comp = e2.comp, this.getValue = n, this.setVValue = a, this.interpolateValue = i, this.frameId = -1;
        var y = r2.k[0].s.length;
        for (this.v = createTypedArray("float32", y), this.pv = createTypedArray("float32", y), p2 = 0; p2 < y; p2 += 1) this.v[p2] = t, this.pv[p2] = t;
        this._caching = { lastFrame: t, lastIndex: 0, value: createTypedArray("float32", y) }, this.addEffect = o;
      }
      return { getProp: function(t2, e2, i2, r2, s2) {
        var a2;
        if (e2.k.length) if ("number" == typeof e2.k[0]) a2 = new l(t2, e2, r2, s2);
        else switch (i2) {
          case 0:
            a2 = new p(t2, e2, r2, s2);
            break;
          case 1:
            a2 = new m(t2, e2, r2, s2);
        }
        else a2 = new h(t2, e2, r2, s2);
        return a2.effectsSequence.length && s2.addDynamicProperty(a2), a2;
      } };
    })(), TransformPropertyFactory = (function() {
      var t = [0, 0];
      function e(t2, e2, i) {
        if (this.elem = t2, this.frameId = -1, this.propType = "transform", this.data = e2, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(i || t2), e2.p && e2.p.s ? (this.px = PropertyFactory.getProp(t2, e2.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t2, e2.p.y, 0, 0, this), e2.p.z && (this.pz = PropertyFactory.getProp(t2, e2.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t2, e2.p || { k: [0, 0, 0] }, 1, 0, this), e2.rx) {
          if (this.rx = PropertyFactory.getProp(t2, e2.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t2, e2.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t2, e2.rz, 0, degToRads, this), e2.or.k[0].ti) {
            var r, s = e2.or.k.length;
            for (r = 0; r < s; r += 1) e2.or.k[r].to = null, e2.or.k[r].ti = null;
          }
          this.or = PropertyFactory.getProp(t2, e2.or, 1, degToRads, this), this.or.sh = true;
        } else this.r = PropertyFactory.getProp(t2, e2.r || { k: 0 }, 0, degToRads, this);
        e2.sk && (this.sk = PropertyFactory.getProp(t2, e2.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t2, e2.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t2, e2.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(t2, e2.s || { k: [100, 100, 100] }, 1, 0.01, this), e2.o ? this.o = PropertyFactory.getProp(t2, e2.o, 0, 0.01, t2) : this.o = { _mdf: false, v: 1 }, this._isDirty = true, this.dynamicProperties.length || this.getValue(true);
      }
      return e.prototype = { applyToMatrix: function(t2) {
        var e2 = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || e2, this.a && t2.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t2.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t2.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t2.rotate(-this.r.v) : t2.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t2.translate(this.px.v, this.py.v, -this.pz.v) : t2.translate(this.px.v, this.py.v, 0) : t2.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }, getValue: function(e2) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = false), this.iterateDynamicProperties(), this._mdf || e2) {
            var i;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var r, s;
              if (i = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (r = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / i, 0), s = this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (r = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / i, 0)) : (r = this.p.pv, s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / i, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                r = [], s = [];
                var a = this.px, n = this.py;
                a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (r[0] = a.getValueAtTime((a.keyframes[0].t + 0.01) / i, 0), r[1] = n.getValueAtTime((n.keyframes[0].t + 0.01) / i, 0), s[0] = a.getValueAtTime(a.keyframes[0].t / i, 0), s[1] = n.getValueAtTime(n.keyframes[0].t / i, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (r[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / i, 0), s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - 0.01) / i, 0), s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - 0.01) / i, 0)) : (r = [a.pv, n.pv], s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - 0.01) / i, a.offsetTime), s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - 0.01) / i, n.offsetTime));
              } else r = s = t;
              this.v.rotate(-Math.atan2(r[1] - s[1], r[0] - s[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }, precalculateMatrix: function() {
        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      }, autoOrient: function() {
      } }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(t2) {
        this._addDynamicProperty(t2), this.elem.addDynamicProperty(t2), this._isDirty = true;
      }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(t2, i, r) {
        return new e(t2, i, r);
      } };
    })();
    function ShapePath() {
      this.c = false, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; ) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, i, r, s) {
      var a;
      switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          a = this.v;
          break;
        case "i":
          a = this.i;
          break;
        case "o":
          a = this.o;
          break;
        default:
          a = [];
      }
      (!a[r] || a[r] && !s) && (a[r] = pointPool.newElement()), a[r][0] = t, a[r][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, i, r, s, a, n, o) {
      this.setXYAt(t, e, "v", n, o), this.setXYAt(i, r, "o", n, o), this.setXYAt(s, a, "i", n, o);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, r = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, false), s = 1);
      var a, n = this._length - 1, o = this._length;
      for (a = s; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], r[n][0], r[n][1], i[n][0], i[n][1], a, false), n -= 1;
      return t;
    };
    var ShapePropertyFactory = (function() {
      function t(t2, e2, i2) {
        var r2, s2, a2, n2, o2, h2, l2, p2, m2, f = i2.lastIndex, c = this.keyframes;
        if (t2 < c[0].t - this.offsetTime) r2 = c[0].s[0], a2 = true, f = 0;
        else if (t2 >= c[c.length - 1].t - this.offsetTime) r2 = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a2 = true;
        else {
          for (var d, u, y = f, g = c.length - 1, v = true; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t2)); ) y < g - 1 ? y += 1 : v = false;
          if (f = y, !(a2 = 1 === d.h)) {
            if (t2 >= u.t - this.offsetTime) p2 = 1;
            else if (t2 < d.t - this.offsetTime) p2 = 0;
            else {
              var b;
              d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p2 = b((t2 - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)));
            }
            s2 = u.s ? u.s[0] : d.e[0];
          }
          r2 = d.s[0];
        }
        for (h2 = e2._length, l2 = r2.i[0].length, i2.lastIndex = f, n2 = 0; n2 < h2; n2 += 1) for (o2 = 0; o2 < l2; o2 += 1) m2 = a2 ? r2.i[n2][o2] : r2.i[n2][o2] + (s2.i[n2][o2] - r2.i[n2][o2]) * p2, e2.i[n2][o2] = m2, m2 = a2 ? r2.o[n2][o2] : r2.o[n2][o2] + (s2.o[n2][o2] - r2.o[n2][o2]) * p2, e2.o[n2][o2] = m2, m2 = a2 ? r2.v[n2][o2] : r2.v[n2][o2] + (s2.v[n2][o2] - r2.v[n2][o2]) * p2, e2.v[n2][o2] = m2;
      }
      function e() {
        var t2 = this.comp.renderedFrame - this.offsetTime, e2 = this.keyframes[0].t - this.offsetTime, i2 = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, r2 = this._caching.lastFrame;
        return -999999 !== r2 && (r2 < e2 && t2 < e2 || r2 > i2 && t2 > i2) || (this._caching.lastIndex = r2 < t2 ? this._caching.lastIndex : 0, this.interpolateShape(t2, this.pv, this._caching)), this._caching.lastFrame = t2, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function r(t2) {
        (function(t3, e2) {
          if (t3._length !== e2._length || t3.c !== e2.c) return false;
          var i2, r2 = t3._length;
          for (i2 = 0; i2 < r2; i2 += 1) if (t3.v[i2][0] !== e2.v[i2][0] || t3.v[i2][1] !== e2.v[i2][1] || t3.o[i2][0] !== e2.o[i2][0] || t3.o[i2][1] !== e2.o[i2][1] || t3.i[i2][0] !== e2.i[i2][0] || t3.i[i2][1] !== e2.i[i2][1]) return false;
          return true;
        })(this.v, t2) || (this.v = shapePool.clone(t2), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = true, this.paths = this.localShapeCollection);
      }
      function s() {
        if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);
        else {
          var t2, e2;
          this.lock = true, this._mdf = false, t2 = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
          var i2 = this.effectsSequence.length;
          for (e2 = 0; e2 < i2; e2 += 1) t2 = this.effectsSequence[e2](t2);
          this.setVValue(t2), this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
        else this._mdf = false;
      }
      function a(t2, e2, r2) {
        this.propType = "shape", this.comp = t2.comp, this.container = t2, this.elem = t2, this.data = e2, this.k = false, this.kf = false, this._mdf = false;
        var s2 = 3 === r2 ? e2.pt.k : e2.ks.k;
        this.v = shapePool.clone(s2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function n(t2) {
        this.effectsSequence.push(t2), this.container.addDynamicProperty(this);
      }
      function o(t2, r2, s2) {
        this.propType = "shape", this.comp = t2.comp, this.elem = t2, this.container = t2, this.offsetTime = t2.data.st, this.keyframes = 3 === s2 ? r2.pt.k : r2.ks.k, this.k = true, this.kf = true;
        var a2 = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, a2), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = { lastFrame: -999999, lastIndex: 0 }, this.effectsSequence = [e.bind(this)];
      }
      a.prototype.interpolateShape = t, a.prototype.getValue = s, a.prototype.setVValue = r, a.prototype.addEffect = n, o.prototype.getValue = s, o.prototype.interpolateShape = t, o.prototype.setVValue = r, o.prototype.addEffect = n;
      var h = (function() {
        var t2 = roundCorner;
        function e2(t3, e3) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e3.d, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e3.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e3.s, 1, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertEllToPath());
        }
        return e2.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var e3 = this.p.v[0], i2 = this.p.v[1], r2 = this.s.v[0] / 2, s2 = this.s.v[1] / 2, a2 = 3 !== this.d, n2 = this.v;
          n2.v[0][0] = e3, n2.v[0][1] = i2 - s2, n2.v[1][0] = a2 ? e3 + r2 : e3 - r2, n2.v[1][1] = i2, n2.v[2][0] = e3, n2.v[2][1] = i2 + s2, n2.v[3][0] = a2 ? e3 - r2 : e3 + r2, n2.v[3][1] = i2, n2.i[0][0] = a2 ? e3 - r2 * t2 : e3 + r2 * t2, n2.i[0][1] = i2 - s2, n2.i[1][0] = a2 ? e3 + r2 : e3 - r2, n2.i[1][1] = i2 - s2 * t2, n2.i[2][0] = a2 ? e3 + r2 * t2 : e3 - r2 * t2, n2.i[2][1] = i2 + s2, n2.i[3][0] = a2 ? e3 - r2 : e3 + r2, n2.i[3][1] = i2 + s2 * t2, n2.o[0][0] = a2 ? e3 + r2 * t2 : e3 - r2 * t2, n2.o[0][1] = i2 - s2, n2.o[1][0] = a2 ? e3 + r2 : e3 - r2, n2.o[1][1] = i2 + s2 * t2, n2.o[2][0] = a2 ? e3 - r2 * t2 : e3 + r2 * t2, n2.o[2][1] = i2 + s2, n2.o[3][0] = a2 ? e3 - r2 : e3 + r2, n2.o[3][1] = i2 - s2 * t2;
        } }, extendPrototype([DynamicPropertyContainer], e2), e2;
      })(), l = (function() {
        function t2(t3, e2) {
          this.v = shapePool.newElement(), this.v.setPathData(true, 0), this.elem = t3, this.comp = t3.comp, this.data = e2, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), 1 === e2.sy ? (this.ir = PropertyFactory.getProp(t3, e2.ir, 0, 0, this), this.is = PropertyFactory.getProp(t3, e2.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t3, e2.pt, 0, 0, this), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t3, e2.or, 0, 0, this), this.os = PropertyFactory.getProp(t3, e2.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertToPath());
        }
        return t2.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var t3, e2, i2, r2, s2 = 2 * Math.floor(this.pt.v), a2 = 2 * Math.PI / s2, n2 = true, o2 = this.or.v, h2 = this.ir.v, l2 = this.os.v, p2 = this.is.v, m2 = 2 * Math.PI * o2 / (2 * s2), f = 2 * Math.PI * h2 / (2 * s2), c = -Math.PI / 2;
          c += this.r.v;
          var d = 3 === this.data.d ? -1 : 1;
          for (this.v._length = 0, t3 = 0; t3 < s2; t3 += 1) {
            i2 = n2 ? l2 : p2, r2 = n2 ? m2 : f;
            var u = (e2 = n2 ? o2 : h2) * Math.cos(c), y = e2 * Math.sin(c), g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y), v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
            u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * r2 * i2 * d, y - v * r2 * i2 * d, u + g * r2 * i2 * d, y + v * r2 * i2 * d, t3, true), n2 = !n2, c += a2 * d;
          }
        }, convertPolygonToPath: function() {
          var t3, e2 = Math.floor(this.pt.v), i2 = 2 * Math.PI / e2, r2 = this.or.v, s2 = this.os.v, a2 = 2 * Math.PI * r2 / (4 * e2), n2 = 0.5 * -Math.PI, o2 = 3 === this.data.d ? -1 : 1;
          for (n2 += this.r.v, this.v._length = 0, t3 = 0; t3 < e2; t3 += 1) {
            var h2 = r2 * Math.cos(n2), l2 = r2 * Math.sin(n2), p2 = 0 === h2 && 0 === l2 ? 0 : l2 / Math.sqrt(h2 * h2 + l2 * l2), m2 = 0 === h2 && 0 === l2 ? 0 : -h2 / Math.sqrt(h2 * h2 + l2 * l2);
            h2 += +this.p.v[0], l2 += +this.p.v[1], this.v.setTripleAt(h2, l2, h2 - p2 * a2 * s2 * o2, l2 - m2 * a2 * s2 * o2, h2 + p2 * a2 * s2 * o2, l2 + m2 * a2 * s2 * o2, t3, true), n2 += i2 * o2;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], t2), t2;
      })(), p = (function() {
        function t2(t3, e2) {
          this.v = shapePool.newElement(), this.v.c = true, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t3, this.comp = t3.comp, this.frameId = -1, this.d = e2.d, this.initDynamicPropertyContainer(t3), this.p = PropertyFactory.getProp(t3, e2.p, 1, 0, this), this.s = PropertyFactory.getProp(t3, e2.s, 1, 0, this), this.r = PropertyFactory.getProp(t3, e2.r, 0, 0, this), this.dynamicProperties.length ? this.k = true : (this.k = false, this.convertRectToPath());
        }
        return t2.prototype = { convertRectToPath: function() {
          var t3 = this.p.v[0], e2 = this.p.v[1], i2 = this.s.v[0] / 2, r2 = this.s.v[1] / 2, s2 = bmMin(i2, r2, this.r.v), a2 = s2 * (1 - roundCorner);
          this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + a2, 0, true), this.v.setTripleAt(t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - a2, t3 + i2, e2 + r2 - s2, 1, true), 0 !== s2 ? (this.v.setTripleAt(t3 + i2 - s2, e2 + r2, t3 + i2 - s2, e2 + r2, t3 + i2 - a2, e2 + r2, 2, true), this.v.setTripleAt(t3 - i2 + s2, e2 + r2, t3 - i2 + a2, e2 + r2, t3 - i2 + s2, e2 + r2, 3, true), this.v.setTripleAt(t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - a2, 4, true), this.v.setTripleAt(t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + a2, t3 - i2, e2 - r2 + s2, 5, true), this.v.setTripleAt(t3 - i2 + s2, e2 - r2, t3 - i2 + s2, e2 - r2, t3 - i2 + a2, e2 - r2, 6, true), this.v.setTripleAt(t3 + i2 - s2, e2 - r2, t3 + i2 - a2, e2 - r2, t3 + i2 - s2, e2 - r2, 7, true)) : (this.v.setTripleAt(t3 - i2, e2 + r2, t3 - i2 + a2, e2 + r2, t3 - i2, e2 + r2, 2), this.v.setTripleAt(t3 - i2, e2 - r2, t3 - i2, e2 - r2 + a2, t3 - i2, e2 - r2, 3))) : (this.v.setTripleAt(t3 + i2, e2 - r2 + s2, t3 + i2, e2 - r2 + a2, t3 + i2, e2 - r2 + s2, 0, true), 0 !== s2 ? (this.v.setTripleAt(t3 + i2 - s2, e2 - r2, t3 + i2 - s2, e2 - r2, t3 + i2 - a2, e2 - r2, 1, true), this.v.setTripleAt(t3 - i2 + s2, e2 - r2, t3 - i2 + a2, e2 - r2, t3 - i2 + s2, e2 - r2, 2, true), this.v.setTripleAt(t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + s2, t3 - i2, e2 - r2 + a2, 3, true), this.v.setTripleAt(t3 - i2, e2 + r2 - s2, t3 - i2, e2 + r2 - a2, t3 - i2, e2 + r2 - s2, 4, true), this.v.setTripleAt(t3 - i2 + s2, e2 + r2, t3 - i2 + s2, e2 + r2, t3 - i2 + a2, e2 + r2, 5, true), this.v.setTripleAt(t3 + i2 - s2, e2 + r2, t3 + i2 - a2, e2 + r2, t3 + i2 - s2, e2 + r2, 6, true), this.v.setTripleAt(t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - s2, t3 + i2, e2 + r2 - a2, 7, true)) : (this.v.setTripleAt(t3 - i2, e2 - r2, t3 - i2 + a2, e2 - r2, t3 - i2, e2 - r2, 1, true), this.v.setTripleAt(t3 - i2, e2 + r2, t3 - i2, e2 + r2 - a2, t3 - i2, e2 + r2, 2, true), this.v.setTripleAt(t3 + i2, e2 + r2, t3 + i2 - a2, e2 + r2, t3 + i2, e2 + r2, 3, true)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: i }, extendPrototype([DynamicPropertyContainer], t2), t2;
      })();
      var m = { getShapeProp: function(t2, e2, i2) {
        var r2;
        return 3 === i2 || 4 === i2 ? r2 = (3 === i2 ? e2.pt : e2.ks).k.length ? new o(t2, e2, i2) : new a(t2, e2, i2) : 5 === i2 ? r2 = new p(t2, e2) : 6 === i2 ? r2 = new h(t2, e2) : 7 === i2 && (r2 = new l(t2, e2)), r2.k && t2.addDynamicProperty(r2), r2;
      }, getConstructorFunction: function() {
        return a;
      }, getKeyframedConstructorFunction: function() {
        return o;
      } };
      return m;
    })(), ShapeModifiers = (ob = {}, modifiers = {}, ob.registerModifier = function(t, e) {
      modifiers[t] || (modifiers[t] = e);
    }, ob.getModifier = function(t, e, i) {
      return new modifiers[t](e, i);
    }, ob), ob, modifiers;
    function ShapeModifier() {
    }
    function TrimModifier() {
    }
    function RoundCornersModifier() {
    }
    function PuckerAndBloatModifier() {
    }
    function RepeaterModifier() {
    }
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    function DashProperty(t, e, i, r) {
      var s;
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = false, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
      var a, n = e.length || 0;
      for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = { n: e[s].n, p: a };
      this.k || this.getValue(true), this._isAnimated = this.k;
    }
    function GradientProperty(t, e, i) {
      this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
      var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
      this.o = createTypedArray("float32", r), this._cmdf = false, this._omdf = false, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(true);
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = false, this.k = false, this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, s) {
      var a = [];
      e <= 1 ? a.push({ s: t, e }) : t >= 1 ? a.push({ s: t - 1, e: e - 1 }) : (a.push({ s: t, e: 1 }), a.push({ s: 0, e: e - 1 }));
      var n, o, h = [], l = a.length;
      for (n = 0; n < l; n += 1) {
        var p, m;
        if (!((o = a[n]).e * s < r || o.s * s > r + i)) p = o.s * s <= r ? 0 : (o.s * s - r) / i, m = o.e * s >= r + i ? 1 : (o.e * s - r) / i, h.push([p, m]);
      }
      return h.length || h.push([0, 0]), h;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, i, r, s;
      if (this._mdf || t) {
        var a = this.o.v % 360 / 360;
        if (a < 0 && (a += 1), (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (i = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
          var n = e;
          e = i, i = n;
        }
        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i;
      } else e = this.sValue, i = this.eValue;
      var o, h, l, p, m, f = this.shapes.length, c = 0;
      if (i === e) for (s = 0; s < f; s += 1) this.shapes[s].localShapeCollection.releaseShapes(), this.shapes[s].shape._mdf = true, this.shapes[s].shape.paths = this.shapes[s].localShapeCollection, this._mdf && (this.shapes[s].pathsData.length = 0);
      else if (1 === i && 0 === e || 0 === i && 1 === e) {
        if (this._mdf) for (s = 0; s < f; s += 1) this.shapes[s].pathsData.length = 0, this.shapes[s].shape._mdf = true;
      } else {
        var d, u, y = [];
        for (s = 0; s < f; s += 1) if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
          if (h = (r = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength;
          else {
            for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(r.shapes[o]), l.push(p), m += p.totalLength;
            d.totalShapeLength = m, d.pathsData = l;
          }
          c += m, d.shape._mdf = true;
        } else d.shape.paths = d.localShapeCollection;
        var g, v = e, b = i, P = 0;
        for (s = f - 1; s >= 0; s -= 1) if ((d = this.shapes[s]).shape._mdf) {
          for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, i, d.totalShapeLength, P, c), P += d.totalShapeLength) : g = [[v, b]], h = g.length, o = 0; o < h; o += 1) {
            v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength * b }) : v >= 1 ? y.push({ s: d.totalShapeLength * (v - 1), e: d.totalShapeLength * (b - 1) }) : (y.push({ s: d.totalShapeLength * v, e: d.totalShapeLength }), y.push({ s: 0, e: d.totalShapeLength * (b - 1) }));
            var E = this.addShapes(d, y[0]);
            if (y[0].s !== y[0].e) {
              if (y.length > 1) if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                var x = E.pop();
                this.addPaths(E, u), E = this.addShapes(d, y[1], x);
              } else this.addPaths(E, u), E = this.addShapes(d, y[1]);
              this.addPaths(E, u);
            }
          }
          d.shape.paths = u;
        }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) e.addShape(t[i]);
    }, TrimModifier.prototype.addSegment = function(t, e, i, r, s, a, n) {
      s.setXYAt(e[0], e[1], "o", a), s.setXYAt(i[0], i[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(r[0], r[1], "v", a + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, i) {
      var r, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = true;
      for (i ? (o = i._length, p = i._length) : (i = shapePool.newElement(), o = 0, p = 0), u.push(i), r = 0; r < c; r += 1) {
        for (h = m[r].lengths, i.c = f[r].c, a = f[r].c ? h.length : h.length + 1, s = 1; s < a; s += 1) if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, i.c = false;
        else {
          if (d > e.e) {
            i.c = false;
            break;
          }
          e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[s], f[r].v[s], i, o, y), y = false) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[s], f[r].o[s - 1], f[r].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = false, i.c = false), d += n.addedLength, o += 1;
        }
        if (f[r].c && h.length) {
          if (n = h[s - 1], d <= e.e) {
            var g = h[s - 1].addedLength;
            e.s <= d && e.e >= d + g ? (this.addSegment(f[r].v[s - 1], f[r].o[s - 1], f[r].i[0], f[r].v[0], i, o, y), y = false) : (l = bez.getNewSegment(f[r].v[s - 1], f[r].v[0], f[r].o[s - 1], f[r].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, i, o, y), y = false, i.c = false);
          } else i.c = false;
          d += n.addedLength, o += 1;
        }
        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), d > e.e) break;
        r < c - 1 && (i = shapePool.newElement(), y = true, u.push(i), o = 0);
      }
      return u;
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var i, r = shapePool.newElement();
      r.c = t.c;
      var s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0;
      for (i = 0; i < y; i += 1) s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1) : (r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g), g += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, i, r, s, a, n, o = this.shapes.length, h = this.rd.v;
      if (0 !== h) for (i = 0; i < o; i += 1) {
        if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) n.addShape(this.processPath(e[r], h));
        a.shape.paths = a.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = false);
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var i = e / 100, r = [0, 0], s = t._length, a = 0;
      for (a = 0; a < s; a += 1) r[0] += t.v[a][0], r[1] += t.v[a][1];
      r[0] /= s, r[1] /= s;
      var n, o, h, l, p, m, f = shapePool.newElement();
      for (f.c = t.c, a = 0; a < s; a += 1) n = t.v[a][0] + (r[0] - t.v[a][0]) * i, o = t.v[a][1] + (r[1] - t.v[a][1]) * i, h = t.o[a][0] + (r[0] - t.o[a][0]) * -i, l = t.o[a][1] + (r[1] - t.o[a][1]) * -i, p = t.i[a][0] + (r[0] - t.i[a][0]) * -i, m = t.i[a][1] + (r[1] - t.i[a][1]) * -i, f.setTripleAt(n, o, h, l, p, m, a);
      return f;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, i, r, s, a, n, o = this.shapes.length, h = this.amount.v;
      if (0 !== h) for (i = 0; i < o; i += 1) {
        if (n = (a = this.shapes[i]).localShapeCollection, a.shape._mdf || this._mdf || t) for (n.releaseShapes(), a.shape._mdf = true, e = a.shape.paths.shapes, s = a.shape.paths._length, r = 0; r < s; r += 1) n.addShape(this.processPath(e[r], h));
        a.shape.paths = a.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = false);
    }, ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(true), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, s, a) {
      var n = a ? -1 : 1, o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s), h = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
      t.translate(r.p.v[0] * n * s, r.p.v[1] * n * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * n * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(a ? 1 / o : o, a ? 1 / h : h), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, i, r) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; ) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = true : this.getValue(true);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = false, "gr" === t[e].ty && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, i, r, s, a, n = false;
      if (this._mdf || t) {
        var o, h = Math.ceil(this.c.v);
        if (this._groups.length < h) {
          for (; this._groups.length < h; ) {
            var l = { it: this.cloneElements(this._elements), ty: "gr" };
            l.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, l), this._groups.splice(0, 0, l), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), n = true;
        }
        for (a = 0, r = 0; r <= this._groups.length - 1; r += 1) {
          if (o = a < h, this._groups[r]._render = o, this.changeGroupRender(this._groups[r].it, o), !o) {
            var p = this.elemsData[r].it, m = p[p.length - 1];
            0 !== m.transform.op.v ? (m.transform.op._mdf = true, m.transform.op.v = 0) : m.transform.op._mdf = false;
          }
          a += 1;
        }
        this._currentCopies = h;
        var f = this.o.v, c = f % 1, d = f > 0 ? Math.floor(f) : Math.ceil(f), u = this.pMatrix.props, y = this.rMatrix.props, g = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var v, b, P = 0;
        if (f > 0) {
          for (; P < d; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), P += 1;
          c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, false), P += c);
        } else if (f < 0) {
          for (; P > d; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, true), P -= 1;
          c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, true), P -= c);
        }
        for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a; ) {
          if (b = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = true, e[e.length - 1].transform.op._mdf = true, e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), 0 !== P) {
            for ((0 !== r && 1 === s || r !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, false), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
            this.matrix.reset();
          } else for (this.matrix.reset(), v = 0; v < b; v += 1) i[v] = this.matrix.props[v];
          P += 1, a -= 1, r += s;
        }
      } else for (a = this._currentCopies, r = 0, s = 1; a; ) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = false, e[e.length - 1].transform.op._mdf = false, a -= 1, r += s;
      return n;
    }, RepeaterModifier.prototype.addShape = function() {
    }, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
      this._length = 0;
    }, DashProperty.prototype.getValue = function(t) {
      if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1) "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
      for (var i = 0, r = this.o.length / 2; i < r; ) {
        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return false;
        i += 1;
      }
      return true;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4) return false;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return false;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return false;
      return true;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = false, this._cmdf = false, this._omdf = false, this.prop._mdf || t) {
        var e, i, r, s = 4 * this.data.p;
        for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
        if (this.o.length) for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function(t, e, i, r) {
      if (0 === e) return "";
      var s, a = t.o, n = t.i, o = t.v, h = " M" + r.applyToPointStringified(o[0][0], o[0][1]);
      for (s = 1; s < e; s += 1) h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[s][0], n[s][1]) + " " + r.applyToPointStringified(o[s][0], o[s][1]);
      return i && e && (h += " C" + r.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + r.applyToPointStringified(n[0][0], n[0][1]) + " " + r.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h;
    }, audioControllerFactory = (function() {
      function t(t2) {
        this.audios = [], this.audioFactory = t2, this._volume = 1, this._isMuted = false;
      }
      return t.prototype = { addAudio: function(t2) {
        this.audios.push(t2);
      }, pause: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1) this.audios[t2].pause();
      }, resume: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1) this.audios[t2].resume();
      }, setRate: function(t2) {
        var e, i = this.audios.length;
        for (e = 0; e < i; e += 1) this.audios[e].setRate(t2);
      }, createAudio: function(t2) {
        return this.audioFactory ? this.audioFactory(t2) : Howl ? new Howl({ src: [t2] }) : { isPlaying: false, play: function() {
          this.isPlaying = true;
        }, seek: function() {
          this.isPlaying = false;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(t2) {
        this.audioFactory = t2;
      }, setVolume: function(t2) {
        this._volume = t2, this._updateVolume();
      }, mute: function() {
        this._isMuted = true, this._updateVolume();
      }, unmute: function() {
        this._isMuted = false, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var t2, e = this.audios.length;
        for (t2 = 0; t2 < e; t2 += 1) this.audios[t2].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    })(), ImagePreloader = (function() {
      var t = (function() {
        var t2 = createTag("canvas");
        t2.width = 1, t2.height = 1;
        var e2 = t2.getContext("2d");
        return e2.fillStyle = "rgba(0,0,0,0)", e2.fillRect(0, 0, 1, 1), t2;
      })();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r(t2, e2, i2) {
        var r2 = "";
        if (t2.e) r2 = t2.p;
        else if (e2) {
          var s2 = t2.p;
          -1 !== s2.indexOf("images/") && (s2 = s2.split("/")[1]), r2 = e2 + s2;
        } else r2 = i2, r2 += t2.u ? t2.u : "", r2 += t2.p;
        return r2;
      }
      function s(t2) {
        var e2 = 0, i2 = setInterval((function() {
          (t2.getBBox().width || e2 > 500) && (this._imageLoaded(), clearInterval(i2)), e2 += 1;
        }).bind(this), 50);
      }
      function a(t2) {
        var e2 = { assetData: t2 }, i2 = r(t2, this.assetsPath, this.path);
        return assetLoader.load(i2, (function(t3) {
          e2.img = t3, this._footageLoaded();
        }).bind(this), (function() {
          e2.img = {}, this._footageLoaded();
        }).bind(this)), e2;
      }
      function n() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return n.prototype = { loadAssets: function(t2, e2) {
        var i2;
        this.imagesLoadedCb = e2;
        var r2 = t2.length;
        for (i2 = 0; i2 < r2; i2 += 1) t2[i2].layers || (t2[i2].t && "seq" !== t2[i2].t ? 3 === t2[i2].t && (this.totalFootages += 1, this.images.push(this.createFootageData(t2[i2]))) : (this.totalImages += 1, this.images.push(this._createImageData(t2[i2]))));
      }, setAssetsPath: function(t2) {
        this.assetsPath = t2 || "";
      }, setPath: function(t2) {
        this.path = t2 || "";
      }, loadedImages: function() {
        return this.totalImages === this.loadedAssets;
      }, loadedFootages: function() {
        return this.totalFootages === this.loadedFootagesCount;
      }, destroy: function() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }, getAsset: function(t2) {
        for (var e2 = 0, i2 = this.images.length; e2 < i2; ) {
          if (this.images[e2].assetData === t2) return this.images[e2].img;
          e2 += 1;
        }
        return null;
      }, createImgData: function(e2) {
        var i2 = r(e2, this.assetsPath, this.path), s2 = createTag("img");
        s2.crossOrigin = "anonymous", s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener("error", (function() {
          a2.img = t, this._imageLoaded();
        }).bind(this), false), s2.src = i2;
        var a2 = { img: s2, assetData: e2 };
        return a2;
      }, createImageData: function(e2) {
        var i2 = r(e2, this.assetsPath, this.path), s2 = createNS("image");
        isSafari ? this.testImageLoaded(s2) : s2.addEventListener("load", this._imageLoaded, false), s2.addEventListener("error", (function() {
          a2.img = t, this._imageLoaded();
        }).bind(this), false), s2.setAttributeNS("http://www.w3.org/1999/xlink", "href", i2), this._elementHelper.append ? this._elementHelper.append(s2) : this._elementHelper.appendChild(s2);
        var a2 = { img: s2, assetData: e2 };
        return a2;
      }, imageLoaded: e, footageLoaded: i, setCacheType: function(t2, e2) {
        "svg" === t2 ? (this._elementHelper = e2, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      } }, n;
    })(), featureSupport = (function() {
      var t = { maskType: true };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = false), t;
    })(), filtersFactory = (function() {
      var t = {};
      return t.createFilter = function(t2, e) {
        var i = createNS("filter");
        i.setAttribute("id", t2), true !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"));
        return i;
      }, t.createAlphaToLuminanceFilter = function() {
        var t2 = createNS("feColorMatrix");
        return t2.setAttribute("type", "matrix"), t2.setAttribute("color-interpolation-filters", "sRGB"), t2.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t2;
      }, t;
    })(), assetLoader = /* @__PURE__ */ (function() {
      function t(t2) {
        return t2.response && "object" == typeof t2.response ? t2.response : t2.response && "string" == typeof t2.response ? JSON.parse(t2.response) : t2.responseText ? JSON.parse(t2.responseText) : null;
      }
      return { load: function(e, i, r) {
        var s, a = new XMLHttpRequest();
        try {
          a.responseType = "json";
        } catch (t2) {
        }
        a.onreadystatechange = function() {
          if (4 === a.readyState) if (200 === a.status) s = t(a), i(s);
          else try {
            s = t(a), i(s);
          } catch (t2) {
            r && r(t2);
          }
        }, a.open("GET", e, true), a.send();
      } };
    })();
    function TextAnimatorProperty(t, e, i) {
      this._isFirstFrame = true, this._hasMaskedPath = false, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = false, this.initDynamicPropertyContainer(i);
    }
    function TextAnimatorDataProperty(t, e, i) {
      var r = { propType: false }, s = PropertyFactory.getProp, a = e.a;
      this.a = { r: a.r ? s(t, a.r, 0, degToRads, i) : r, rx: a.rx ? s(t, a.rx, 0, degToRads, i) : r, ry: a.ry ? s(t, a.ry, 0, degToRads, i) : r, sk: a.sk ? s(t, a.sk, 0, degToRads, i) : r, sa: a.sa ? s(t, a.sa, 0, degToRads, i) : r, s: a.s ? s(t, a.s, 1, 0.01, i) : r, a: a.a ? s(t, a.a, 1, 0, i) : r, o: a.o ? s(t, a.o, 0, 0.01, i) : r, p: a.p ? s(t, a.p, 1, 0, i) : r, sw: a.sw ? s(t, a.sw, 0, 0, i) : r, sc: a.sc ? s(t, a.sc, 1, 0, i) : r, fc: a.fc ? s(t, a.fc, 1, 0, i) : r, fh: a.fh ? s(t, a.fh, 0, 0, i) : r, fs: a.fs ? s(t, a.fs, 0, 0.01, i) : r, fb: a.fb ? s(t, a.fb, 0, 0.01, i) : r, t: a.t ? s(t, a.t, 0, 0, i) : r }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function LetterProps(t, e, i, r, s, a) {
      this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = a, this._mdf = { o: true, sw: !!e, sc: !!i, fc: !!r, m: true, p: true };
    }
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = false, this._isFirstFrame = true, this._mdf = false, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = false, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: false, strokeColorAnim: false, strokeWidthAnim: false, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: false }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e, i = this._textData.a.length, r = PropertyFactory.getProp;
      for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { f: r(this._elem, this._textData.p.f, 0, 0, this), l: r(this._elem, this._textData.p.l, 0, 0, this), r: this._textData.p.r, m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = true) : this._hasMaskedPath = false, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = false;
        var i, r, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, P, E = this._moreOptions.alignment.v, x = this._animatorsData, S = this._textData, C = this.mHelper, A = this._renderType, T = this.renderedLetters.length, _ = t.l;
        if (this._hasMaskedPath) {
          if (P = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var k, D = P.v;
            for (this._pathData.r && (D = D.reverse()), n = { tLength: 0, segments: [] }, a = D._length - 1, g = 0, s = 0; s < a; s += 1) k = bez.buildBezierData(D.v[s], D.v[s + 1], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[s + 1][0] - D.v[s + 1][0], D.i[s + 1][1] - D.v[s + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
            s = a, P.v.c && (k = bez.buildBezierData(D.v[s], D.v[0], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n;
          }
          if (n = this._pathData.pi, o = this._pathData.f.v, f = 0, m = 1, l = 0, p = true, u = n.segments, o < 0 && P.v.c) for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].points).length - 1; o < 0; ) o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
          c = (d = u[f].points)[m - 1], y = (h = d[m]).partialLength;
        }
        a = _.length, i = 0, r = 0;
        var M, F, w, I, V, B = 1.2 * t.finalSize * 0.714, R = true;
        w = x.length;
        var L, G, z, N, O, H, j, q, W, Y, X, K, $ = -1, J = o, Z = f, U = m, Q = -1, tt = "", et = this.defaultPropsArray;
        if (2 === t.j || 1 === t.j) {
          var it = 0, rt = 0, st = 2 === t.j ? -0.5 : -1, at = 0, nt = true;
          for (s = 0; s < a; s += 1) if (_[s].n) {
            for (it && (it += rt); at < s; ) _[at].animatorJustifyOffset = it, at += 1;
            it = 0, nt = true;
          } else {
            for (F = 0; F < w; F += 1) (M = x[F].a).t.propType && (nt && 2 === t.j && (rt += M.t.v * st), (V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars)).length ? it += M.t.v * V[0] * st : it += M.t.v * V * st);
            nt = false;
          }
          for (it && (it += rt); at < s; ) _[at].animatorJustifyOffset = it, at += 1;
        }
        for (s = 0; s < a; s += 1) {
          if (C.reset(), N = 1, _[s].n) i = 0, r += t.yOffset, r += R ? 1 : 0, o = J, R = false, this._hasMaskedPath && (m = U, c = (d = u[f = Z].points)[m - 1], y = (h = d[m]).partialLength, l = 0), tt = "", X = "", W = "", K = "", et = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (Q !== _[s].line) {
                switch (t.j) {
                  case 1:
                    o += g - t.lineWidths[_[s].line];
                    break;
                  case 2:
                    o += (g - t.lineWidths[_[s].line]) / 2;
                }
                Q = _[s].line;
              }
              $ !== _[s].ind && (_[$] && (o += _[$].extra), o += _[s].an / 2, $ = _[s].ind), o += E[0] * _[s].an * 5e-3;
              var ot = 0;
              for (F = 0; F < w; F += 1) (M = x[F].a).p.propType && ((V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V), M.a.propType && ((V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
              for (p = true; p; ) l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, C.translate(-E[0] * _[s].an * 5e-3, -E[1] * B * 0.01), p = false) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, u[f += 1] ? d = u[f].points : P.v.c ? (m = 0, d = u[f = 0].points) : (l -= h.partialLength, d = null)), d && (c = h, y = (h = d[m]).partialLength));
              L = _[s].an / 2 - _[s].add, C.translate(-L, 0, 0);
            } else L = _[s].an / 2 - _[s].add, C.translate(-L, 0, 0), C.translate(-E[0] * _[s].an * 5e-3, -E[1] * B * 0.01, 0);
            for (F = 0; F < w; F += 1) (M = x[F].a).t.propType && (V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars), 0 === i && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? i += M.t.v * V[0] : i += M.t.v * V));
            for (t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), F = 0; F < w; F += 1) (M = x[F].a).a.propType && ((V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : C.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
            for (F = 0; F < w; F += 1) (M = x[F].a).s.propType && ((V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars)).length ? C.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : C.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
            for (F = 0; F < w; F += 1) {
              if (M = x[F].a, V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars), M.sk.propType && (V.length ? C.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : C.skewFromAxis(-M.sk.v * V, M.sa.v * V)), M.r.propType && (V.length ? C.rotateZ(-M.r.v * V[2]) : C.rotateZ(-M.r.v * V)), M.ry.propType && (V.length ? C.rotateY(M.ry.v * V[1]) : C.rotateY(M.ry.v * V)), M.rx.propType && (V.length ? C.rotateX(M.rx.v * V[0]) : C.rotateX(M.rx.v * V)), M.o.propType && (V.length ? N += (M.o.v * V[0] - N) * V[0] : N += (M.o.v * V - N) * V), t.strokeWidthAnim && M.sw.propType && (V.length ? H += M.sw.v * V[0] : H += M.sw.v * V), t.strokeColorAnim && M.sc.propType) for (q = 0; q < 3; q += 1) V.length ? O[q] += (M.sc.v[q] - O[q]) * V[0] : O[q] += (M.sc.v[q] - O[q]) * V;
              if (t.fillColorAnim && t.fc) {
                if (M.fc.propType) for (q = 0; q < 3; q += 1) V.length ? j[q] += (M.fc.v[q] - j[q]) * V[0] : j[q] += (M.fc.v[q] - j[q]) * V;
                M.fh.propType && (j = V.length ? addHueToRGB(j, M.fh.v * V[0]) : addHueToRGB(j, M.fh.v * V)), M.fs.propType && (j = V.length ? addSaturationToRGB(j, M.fs.v * V[0]) : addSaturationToRGB(j, M.fs.v * V)), M.fb.propType && (j = V.length ? addBrightnessToRGB(j, M.fb.v * V[0]) : addBrightnessToRGB(j, M.fb.v * V));
              }
            }
            for (F = 0; F < w; F += 1) (M = x[F].a).p.propType && (V = x[F].s.getMult(_[s].anIndexes[F], S.a[F].s.totalChars), this._hasMaskedPath ? V.length ? C.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : C.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? C.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : C.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
            if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
              if (C.translate(0, -t.ls), C.translate(0, E[1] * B * 0.01 + r, 0), S.p.p) {
                b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                var ht = 180 * Math.atan(b) / Math.PI;
                h.point[0] < c.point[0] && (ht += 180), C.rotate(-ht * Math.PI / 180);
              }
              C.translate(G, z, 0), o -= E[0] * _[s].an * 5e-3, _[s + 1] && $ !== _[s + 1].ind && (o += _[s].an / 2, o += 1e-3 * t.tr * t.finalSize);
            } else {
              switch (C.translate(i, r, 0), t.ps && C.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  C.translate(_[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[s].line]), 0, 0);
                  break;
                case 2:
                  C.translate(_[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[_[s].line]) / 2, 0, 0);
              }
              C.translate(0, -t.ls), C.translate(L, 0, 0), C.translate(E[0] * _[s].an * 5e-3, E[1] * B * 0.01, 0), i += _[s].l + 1e-3 * t.tr * t.finalSize;
            }
            "html" === A ? tt = C.toCSS() : "svg" === A ? tt = C.to2dCSS() : et = [C.props[0], C.props[1], C.props[2], C.props[3], C.props[4], C.props[5], C.props[6], C.props[7], C.props[8], C.props[9], C.props[10], C.props[11], C.props[12], C.props[13], C.props[14], C.props[15]], K = N;
          }
          T <= s ? (I = new LetterProps(K, W, Y, X, tt, et), this.renderedLetters.push(I), T += 1, this.lettersChangedFlag = true) : (I = this.renderedLetters[s], this.lettersChangedFlag = I.update(K, W, Y, X, tt, et) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, i, r, s, a) {
      this._mdf.o = false, this._mdf.sw = false, this._mdf.sc = false, this._mdf.fc = false, this._mdf.m = false, this._mdf.p = false;
      var n = false;
      return this.o !== t && (this.o = t, this._mdf.o = true, n = true), this.sw !== e && (this.sw = e, this._mdf.sw = true, n = true), this.sc !== i && (this.sc = i, this._mdf.sc = true, n = true), this.fc !== r && (this.fc = r, this._mdf.fc = true, n = true), this.m !== s && (this.m = s, this._mdf.m = true, n = true), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = true, n = true), n;
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = true;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) this.setCurrentData(this.currentData);
        else {
          var r;
          this.lock = true, this._mdf = false;
          var s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
          for (r = 0; r < s; r += 1) a = i !== this.keysIndex ? this.effectsSequence[r](a, a.t) : this.effectsSequence[r](this.currentData, a.t);
          e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = false, this.frameId = this.elem.globalData.frameId;
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e); ) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e, i, r = [], s = 0, a = t.length, n = false; s < a; ) e = t.charCodeAt(s), FontManager.isCombinedCharacter(e) ? r[r.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 ? (i = t.charCodeAt(s + 1)) >= 56320 && i <= 57343 ? (n || FontManager.isModifier(e, i) ? (r[r.length - 1] += t.substr(s, 2), n = false) : r.push(t.substr(s, 2)), s += 1) : r.push(t.charAt(s)) : e > 56319 ? (i = t.charCodeAt(s + 1), FontManager.isZeroWidthJoiner(e, i) ? (n = true, r[r.length - 1] += t.substr(s, 2), s += 1) : r.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (r[r.length - 1] += t.charAt(s), n = true) : r.push(t.charAt(s)), s += 1;
      return r;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = true;
      var e, i, r, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], m = 0, f = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), P = 0, E = getFontProperties(b);
      t.fWeight = E.weight, t.fStyle = E.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
      var x, S = t.tr / 1e3 * t.finalSize;
      if (t.sz) for (var C, A, T = true, _ = t.sz[0], k = t.sz[1]; T; ) {
        C = 0, g = 0, i = (A = this.buildFinalText(t.t)).length, S = t.tr / 1e3 * t.finalSize;
        var D = -1;
        for (e = 0; e < i; e += 1) x = A[e].charCodeAt(0), r = false, " " === A[e] ? D = e : 13 !== x && 3 !== x || (g = 0, r = true, C += t.finalLineHeight || 1.2 * t.finalSize), h.chars ? (o = h.getCharData(A[e], b.fStyle, b.fFamily), P = r ? 0 : o.w * t.finalSize / 100) : P = h.measureText(A[e], t.f, t.finalSize), g + P > _ && " " !== A[e] ? (-1 === D ? i += 1 : e = D, C += t.finalLineHeight || 1.2 * t.finalSize, A.splice(e, D === e ? 1 : 0, "\r"), D = -1, g = 0) : (g += P, g += S);
        C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && k < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = A, i = t.finalText.length, T = false);
      }
      g = -S, P = 0;
      var M, F = 0;
      for (e = 0; e < i; e += 1) if (r = false, 13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x ? (F = 0, y.push(g), v = g > v ? g : v, g = -2 * S, s = "", r = true, u += 1) : s = M, h.chars ? (o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily), P = r ? 0 : o.w * t.finalSize / 100) : P = h.measureText(s, t.f, t.finalSize), " " === M ? F += P + S : (g += P + S + F, F = 0), p.push({ l: P, an: P, add: c, n: r, anIndexes: [], val: s, line: u, animatorJustifyOffset: 0 }), 2 == f) {
        if (c += P, "" === s || " " === s || e === i - 1) {
          for ("" !== s && " " !== s || (c -= P); d <= e; ) p[d].an = c, p[d].ind = m, p[d].extra = P, d += 1;
          m += 1, c = 0;
        }
      } else if (3 == f) {
        if (c += P, "" === s || e === i - 1) {
          for ("" === s && (c -= P); d <= e; ) p[d].an = c, p[d].ind = m, p[d].extra = P, d += 1;
          c = 0, m += 1;
        }
      } else p[m].ind = m, p[m].extra = 0, m += 1;
      if (t.l = p, v = g > v ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = v, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = y;
      var w, I, V, B, R = l.a;
      n = R.length;
      var L = [];
      for (a = 0; a < n; a += 1) {
        for ((w = R[a]).a.sc && (t.strokeColorAnim = true), w.a.sw && (t.strokeWidthAnim = true), (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = true), B = 0, V = w.s.b, e = 0; e < i; e += 1) (I = p[e]).anIndexes[a] = B, (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == i - 1) || 4 == V && (I.n || e == i - 1)) && (1 === w.s.rn && L.push(B), B += 1);
        l.a[a].s.totalChars = B;
        var G, z = -1;
        if (1 === w.s.rn) for (e = 0; e < i; e += 1) z != (I = p[e]).anIndexes[a] && (z = I.anIndexes[a], G = L.splice(Math.floor(Math.random() * L.length), 1)[0]), I.anIndexes[a] = G;
      }
      t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = void 0 === e ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = false, this.keysIndex = 0, this._isFirstFrame = true, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = (function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function r(t2, e2) {
        this._currentTextLength = -1, this.k = false, this.data = e2, this.elem = t2, this.comp = t2.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t2), this.s = PropertyFactory.getProp(t2, e2.s || { k: 0 }, 0, 0, this), this.e = "e" in e2 ? PropertyFactory.getProp(t2, e2.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(t2, e2.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(t2, e2.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(t2, e2.ne || { k: 0 }, 0, 0, this), this.a = PropertyFactory.getProp(t2, e2.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      return r.prototype = { getMult: function(r2) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var s = 0, a = 0, n = 1, o = 1;
        this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
        var h = BezierFactory.getBezierEasing(s, a, n, o).get, l = 0, p = this.finalS, m = this.finalE, f = this.data.sh;
        if (2 === f) l = h(l = m === p ? r2 >= m ? 1 : 0 : t(0, e(0.5 / (m - p) + (r2 - p) / (m - p), 1)));
        else if (3 === f) l = h(l = m === p ? r2 >= m ? 0 : 1 : 1 - t(0, e(0.5 / (m - p) + (r2 - p) / (m - p), 1)));
        else if (4 === f) m === p ? l = 0 : (l = t(0, e(0.5 / (m - p) + (r2 - p) / (m - p), 1))) < 0.5 ? l *= 2 : l = 1 - 2 * (l - 0.5), l = h(l);
        else if (5 === f) {
          if (m === p) l = 0;
          else {
            var c = m - p, d = -c / 2 + (r2 = e(t(0, r2 + 0.5 - p), m - p)), u = c / 2;
            l = Math.sqrt(1 - d * d / (u * u));
          }
          l = h(l);
        } else 6 === f ? (m === p ? l = 0 : (r2 = e(t(0, r2 + 0.5 - p), m - p), l = (1 + Math.cos(Math.PI + 2 * Math.PI * r2 / (m - p))) / 2), l = h(l)) : (r2 >= i(p) && (l = t(0, e(r2 - p < 0 ? e(m, 1) - (p - r2) : m - r2, 1))), l = h(l));
        return l * this.a.v;
      }, getValue: function(t2) {
        this.iterateDynamicProperties(), this._mdf = t2 || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t2 && 2 === this.data.r && (this.e.v = this._currentTextLength);
        var e2 = 2 === this.data.r ? 1 : 100 / this.data.totalChars, i2 = this.o.v / e2, r2 = this.s.v / e2 + i2, s = this.e.v / e2 + i2;
        if (r2 > s) {
          var a = r2;
          r2 = s, s = a;
        }
        this.finalS = r2, this.finalE = s;
      } }, extendPrototype([DynamicPropertyContainer], r), { getTextSelectorProp: function(t2, e2, i2) {
        return new r(t2, e2, i2);
      } };
    })(), poolFactory = function(t, e, i) {
      var r = 0, s = t, a = createSizedArray(s);
      return { newElement: function() {
        return r ? a[r -= 1] : e();
      }, release: function(t2) {
        r === s && (a = pooling.double(a), s *= 2), i && i(t2), a[r] = t2, r += 1;
      } };
    }, pooling = { double: function(t) {
      return t.concat(createSizedArray(t.length));
    } }, pointPool = poolFactory(8, (function() {
      return createTypedArray("float32", 2);
    })), shapePool = (factory = poolFactory(4, (function() {
      return new ShapePath();
    }), (function(t) {
      var e, i = t._length;
      for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
      t._length = 0, t.c = false;
    })), factory.clone = function(t) {
      var e, i = factory.newElement(), r = void 0 === t._length ? t.v.length : t._length;
      for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
      return i;
    }, factory), factory, shapeCollectionPool = (function() {
      var t = { newShapeCollection: function() {
        var t2;
        t2 = e ? r[e -= 1] : new ShapeCollection();
        return t2;
      }, release: function(t2) {
        var s, a = t2._length;
        for (s = 0; s < a; s += 1) shapePool.release(t2.shapes[s]);
        t2._length = 0, e === i && (r = pooling.double(r), i *= 2);
        r[e] = t2, e += 1;
      } }, e = 0, i = 4, r = createSizedArray(i);
      return t;
    })(), segmentsLengthPool = poolFactory(8, (function() {
      return { lengths: [], totalLength: 0 };
    }), (function(t) {
      var e, i = t.lengths.length;
      for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
      t.lengths.length = 0;
    })), bezierLengthPool = poolFactory(8, (function() {
      return { addedLength: 0, percents: createTypedArray("float32", defaultCurveSegments), lengths: createTypedArray("float32", defaultCurveSegments) };
    })), markerParser = /* @__PURE__ */ (function() {
      function t(t2) {
        for (var e, i = t2.split("\r\n"), r = {}, s = 0, a = 0; a < i.length; a += 1) 2 === (e = i[a].split(":")).length && (r[e[0]] = e[1].trim(), s += 1);
        if (0 === s) throw new Error();
        return r;
      }
      return function(e) {
        for (var i = [], r = 0; r < e.length; r += 1) {
          var s = e[r], a = { time: s.tm, duration: s.dr };
          try {
            a.payload = JSON.parse(e[r].cm);
          } catch (i2) {
            try {
              a.payload = t(e[r].cm);
            } catch (t2) {
              a.payload = { name: e[r] };
            }
          }
          i.push(a);
        }
        return i;
      };
    })();
    function BaseRenderer() {
    }
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var i = "";
      if (e && e.title) {
        var r = createNS("title"), s = createElementID();
        r.setAttribute("id", s), r.textContent = e.title, this.svgElement.appendChild(r), i += s;
      }
      if (e && e.description) {
        var a = createNS("desc"), n = createElementID();
        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), i += " " + n;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var o = createNS("defs");
      this.svgElement.appendChild(o);
      var h = createNS("g");
      this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", progressiveLoad: e && e.progressiveLoad || false, hideOnTransparent: !(e && false === e.hideOnTransparent), viewBoxOnly: e && e.viewBoxOnly || false, viewBoxSize: e && e.viewBoxSize || false, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" } }, this.globalData = { _mdf: false, frameNum: -1, defs: o, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = false, this.rendererType = "svg";
    }
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = { clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || false, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", className: e && e.className || "", id: e && e.id || "" }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: false, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = false, this.rendererType = "canvas";
    }
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && false === e.hideOnTransparent), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: false, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = false, this.camera = null, this.supports3d = true, this.rendererType = "html";
    }
    function MaskElement(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var r, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(n), this.solidPath = "";
      var o, h, l, p, m, f, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
      for (r = 0; r < n; r += 1) if (("a" !== c[r].mode && "n" !== c[r].mode || c[r].inv || 100 !== c[r].o.k || c[r].o.x) && (g = "mask", v = "mask"), "s" !== c[r].mode && "i" !== c[r].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), s = createNS("path"), "n" === c[r].mode) this.viewData[r] = { op: PropertyFactory.getProp(this.element, c[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3), elem: s, lastPath: "" }, a.appendChild(s);
      else {
        var b;
        if (d += 1, s.setAttribute("fill", "s" === c[r].mode ? "#000000" : "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== c[r].x.k ? (g = "mask", v = "mask", f = PropertyFactory.getProp(this.element, c[r].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), a.appendChild(p), s.setAttribute("stroke", "s" === c[r].mode ? "#000000" : "#ffffff")) : (m = null, f = null), this.storedData[r] = { elem: s, x: f, expan: m, lastPath: "", lastOperator: "", filterId: b, lastRadius: 0 }, "i" === c[r].mode) {
          h = u.length;
          var P = createNS("g");
          for (o = 0; o < h; o += 1) P.appendChild(u[o]);
          var E = createNS("mask");
          E.setAttribute("mask-type", "alpha"), E.setAttribute("id", y + "_" + d), E.appendChild(s), a.appendChild(E), P.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(P);
        } else u.push(s);
        c[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: s, lastPath: "", op: PropertyFactory.getProp(this.element, c[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, c[r], 3), invRect: l }, this.viewData[r].prop.k || this.drawPath(c[r], this.viewData[r].prop.v, this.viewData[r]);
      }
      for (this.maskElement = createNS(g), n = u.length, r = 0; r < n; r += 1) this.maskElement.appendChild(u[r]);
      d > 0 && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    function HierarchyElement() {
    }
    function FrameElement() {
    }
    function TransformElement() {
    }
    function RenderableElement() {
    }
    function RenderableDOMElement() {
    }
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = false, this.closed = true === t.hd, this.pElem = createNS("path"), this.msElem = null;
    }
    function SVGShapeData(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var r = 0, s = t.length; r < s; ) {
        if (t[r].mProps.dynamicProperties.length) {
          this._isAnimated = true;
          break;
        }
        r += 1;
      }
    }
    function SVGTransformData(t, e, i) {
      this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    function SVGStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    function SVGGradientFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    function SVGGradientStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, i, r = this.layers.length;
      for (this.completeLayers = true, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      var e;
      this.completeLayers = false;
      var i, r = t.length, s = this.layers.length;
      for (e = 0; e < r; e += 1) for (i = 0; i < s; ) {
        if (this.layers[i].id === t[e].id) {
          this.layers[i] = t[e];
          break;
        }
        i += 1;
      }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
      for (var r = this.elements, s = this.layers, a = 0, n = s.length; a < n; ) s[a].ind == e && (r[a] && true !== r[a] ? (i.push(r[a]), r[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, i) : t.setHierarchy(i)) : (this.buildItem(a), this.addPendingElement(t))), a += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var r = this.createComp(t[e]);
        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
      }
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRenderer.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRenderer.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRenderer.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, SVGRenderer.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRenderer.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = createNS("clipPath"), r = createNS("rect");
      r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
      var s = createElementID();
      i.setAttribute("id", s), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRenderer.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, SVGRenderer.prototype.updateContainerSize = function() {
    }, SVGRenderer.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        e[t] = true;
        var i = this.createItem(this.layers[t]);
        e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && true !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)));
      }
    }, SVGRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i; ) {
          if (this.elements[e] === t) {
            t.setMatte(this.elements[e - 1].layerId);
            break;
          }
          e += 1;
        }
      }
    }, SVGRenderer.prototype.renderFrame = function(t) {
      if (this.renderedFrame !== t && !this.destroyed) {
        var e;
        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = false;
        var i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var r, s = 0; s < e; ) this.elements[s] && true !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
      }
    }, SVGRenderer.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRenderer.prototype.show = function() {
      this.layerElement.style.display = "block";
    }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRenderer.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRenderer.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, CanvasRenderer.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
      if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) if (this.renderConfig.clearCanvas) {
        this.transformMat.cloneFromProps(t);
        var e = this.contextData.cTr.props;
        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
        var i = this.contextData.cTr.props;
        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
      } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
      if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void (this.globalData.currentGlobalAlpha = this.contextData.cO);
      this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO);
    }, CanvasRenderer.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRenderer.prototype.save = function(t) {
      if (this.renderConfig.clearCanvas) {
        t && this.canvasContext.save();
        var e, i = this.contextData.cTr.props;
        this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
        var r = this.contextData.saved[this.contextData.cArrPos];
        for (e = 0; e < 16; e += 1) r[e] = i[e];
        this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1;
      } else this.canvasContext.save();
    }, CanvasRenderer.prototype.restore = function(t) {
      if (this.renderConfig.clearCanvas) {
        t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
        var e, i = this.contextData.saved[this.contextData.cArrPos], r = this.contextData.cTr.props;
        for (e = 0; e < 16; e += 1) r[e] = i[e];
        this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.globalData.currentGlobalAlpha !== i && (this.canvasContext.globalAlpha = i, this.globalData.currentGlobalAlpha = i);
      } else this.canvasContext.restore();
    }, CanvasRenderer.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var i = "0px 0px 0px";
        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = false, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRenderer.prototype.updateContainerSize = function() {
      var t, e, i, r;
      if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var s = this.renderConfig.preserveAspectRatio.split(" "), a = s[1] || "meet", n = s[0] || "xMidYMid", o = n.substr(0, 4), h = n.substr(4);
        i = t / e, (r = this.transformCanvas.w / this.transformCanvas.h) > i && "meet" === a || r < i && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === a || r > i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r > i && "meet" === a || r < i && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
      } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, true);
    }, CanvasRenderer.prototype.destroy = function() {
      var t;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = true;
    }, CanvasRenderer.prototype.renderFrame = function(t, e) {
      if ((this.renderedFrame !== t || true !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
        var i;
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
        if (this.globalData._mdf) {
          for (true === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
          true !== this.renderConfig.clearCanvas && this.restore();
        }
      }
    }, CanvasRenderer.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && 99 !== this.layers[t].ty) {
        var i = this.createItem(this.layers[t], this, this.globalData);
        e[t] = i, i.initExpressions();
      }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        this.pendingElements.pop().checkParenting();
      }
    }, CanvasRenderer.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRenderer.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        this.pendingElements.pop().checkParenting();
      }
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        var r = this.layers[e];
        if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
        else if (this.threeDElements) this.addTo3dContainer(i, e);
        else {
          for (var s, a, n = 0; n < e; ) this.elements[n] && true !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
          s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i);
        }
      }
    }, HybridRenderer.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRenderer.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRenderer.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRenderer.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    }, HybridRenderer.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, i = this.threeDElements.length; e < i; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
      var i, r, s = createTag("div");
      styleDiv(s);
      var a = createTag("div");
      if (styleDiv(a), "3d" === e) {
        (i = s.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
        var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (r = a.style).transform = n, r.webkitTransform = n;
      }
      s.appendChild(a);
      var o = { container: a, perspectiveElem: s, startPos: t, endPos: t, type: e };
      return this.threeDElements.push(o), o;
    }, HybridRenderer.prototype.build3dContainers = function() {
      var t, e, i = this.layers.length, r = "";
      for (t = 0; t < i; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== r && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : ("2d" !== r && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
      for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
      for (var i = 0, r = this.threeDElements.length; i < r; ) {
        if (e <= this.threeDElements[i].endPos) {
          for (var s, a = this.threeDElements[i].startPos; a < e; ) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
          s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
          break;
        }
        i += 1;
      }
    }, HybridRenderer.prototype.configAnimation = function(t) {
      var e = createTag("div"), i = this.animationItem.wrapper, r = e.style;
      r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
      var s = createNS("svg");
      s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
      var a = createNS("defs");
      s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRenderer.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = true, this.animationItem = null;
    }, HybridRenderer.prototype.updateContainerSize = function() {
      var t, e, i, r, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = s / a;
      this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, r = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRenderer.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRenderer.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, r = this.threeDElements.length;
        for (t = 0; t < r; t += 1) {
          var s = this.threeDElements[t].perspectiveElem.style;
          s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", s.perspective = s.webkitPerspective;
        }
      }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length, r = createTag("div");
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var s = this.createComp(t[e], r, this.globalData.comp, null);
        s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
      }
    }, MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e, i = this.element.finalTransform.mat, r = this.masksProperties.length;
      for (e = 0; e < r; e += 1) if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
        var s = this.storedData[e].expan;
        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
      }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(t, e, i) {
      var r, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
      for (s = e._length, r = 1; r < s; r += 1) a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
      if (e.c && s > 1 && (a += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== a) {
        var n = "";
        i.elem && (e.c && (n = t.inv ? this.solidPath + a : a), i.elem.setAttribute("d", n)), i.lastPath = a;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    }, HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = false, this.checkParenting();
    }, setHierarchy: function(t) {
      this.hierarchy = t;
    }, setAsParent: function() {
      this._isParent = true;
    }, checkParenting: function() {
      void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
    } }, FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = false, this.dynamicProperties = [], this._mdf = false;
    }, prepareProperties: function(t, e) {
      var i, r = this.dynamicProperties.length;
      for (i = 0; i < r; i += 1) (e || this._isParent && "transform" === this.dynamicProperties[i].propType) && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = true, this._mdf = true));
    }, addDynamicProperty: function(t) {
      -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
    } }, TransformElement.prototype = { initTransform: function() {
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: false, _opMdf: false, mat: new Matrix() }, this.data.ao && (this.finalTransform.mProp.autoOriented = true), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; i < r; ) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = true;
            break;
          }
          i += 1;
        }
        if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) t = this.hierarchy[i].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
      }
    }, globalToLocal: function(t) {
      var e = [];
      e.push(this.finalTransform);
      for (var i, r = true, s = this.comp; r; ) s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform), s = s.comp) : r = false;
      var a, n = e.length;
      for (i = 0; i < n; i += 1) a = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
      return t;
    }, mHelper: new Matrix() }, RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = false, this.hidden = false, this.isTransparent = false, this.renderableComponents = [];
    }, addRenderableComponent: function(t) {
      -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
    }, removeRenderableComponent: function(t) {
      -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
    }, prepareRenderableFrame: function(t) {
      this.checkLayerLimits(t);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = true, this.hide()) : this.isTransparent && (this.isTransparent = false, this.show());
    }, checkLayerLimits: function(t) {
      this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? true !== this.isInRange && (this.globalData._mdf = true, this._mdf = true, this.isInRange = true, this.show()) : false !== this.isInRange && (this.globalData._mdf = true, this.isInRange = false, this.hide());
    }, renderRenderable: function() {
      var t, e = this.renderableComponents.length;
      for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return 5 === this.data.ty ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    }, hide: function() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = true);
    }, show: function() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = false, this._isFirstFrame = true);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, renderInnerContent: function() {
    }, prepareFrame: function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
    }, destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    } })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = false;
    }, SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = true;
    }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var i = createElementID(), r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
      r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
      var s, a, n, o = [];
      for (n = 4 * e.g.p, a = 0; a < n; a += 4) s = createNS("stop"), r.appendChild(s), o.push(s);
      t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + i + ")"), this.gf = r, this.cst = o;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, r, s, a = createNS("mask"), n = createNS("path");
        a.appendChild(n);
        var o = createElementID(), h = createElementID();
        a.setAttribute("id", h);
        var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
        l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var p = this.stops;
        for (r = 4 * t.g.p; r < s; r += 2) (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(i), p.push(i);
        n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = (function() {
      var t = new Matrix(), e = new Matrix();
      function i(t2, e2, i2) {
        (i2 || e2.transform.op._mdf) && e2.transform.container.setAttribute("opacity", e2.transform.op.v), (i2 || e2.transform.mProps._mdf) && e2.transform.container.setAttribute("transform", e2.transform.mProps.v.to2dCSS());
      }
      function r(i2, r2, s2) {
        var a2, n2, o2, h, l, p, m, f, c, d, u, y = r2.styles.length, g = r2.lvl;
        for (p = 0; p < y; p += 1) {
          if (h = r2.sh._mdf || s2, r2.styles[p].lvl < g) {
            for (f = e.reset(), d = g - r2.styles[p].lvl, u = r2.transformers.length - 1; !h && d > 0; ) h = r2.transformers[u].mProps._mdf || h, d -= 1, u -= 1;
            if (h) for (d = g - r2.styles[p].lvl, u = r2.transformers.length - 1; d > 0; ) c = r2.transformers[u].mProps.v.props, f.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), d -= 1, u -= 1;
          } else f = t;
          if (n2 = (m = r2.sh.paths)._length, h) {
            for (o2 = "", a2 = 0; a2 < n2; a2 += 1) (l = m.shapes[a2]) && l._length && (o2 += buildShapeString(l, l._length, l.c, f));
            r2.caches[p] = o2;
          } else o2 = r2.caches[p];
          r2.styles[p].d += true === i2.hd ? "" : o2, r2.styles[p]._mdf = h || r2.styles[p]._mdf;
        }
      }
      function s(t2, e2, i2) {
        var r2 = e2.style;
        (e2.c._mdf || i2) && r2.pElem.setAttribute("fill", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || i2) && r2.pElem.setAttribute("fill-opacity", e2.o.v);
      }
      function a(t2, e2, i2) {
        n(t2, e2, i2), o(t2, e2, i2);
      }
      function n(t2, e2, i2) {
        var r2, s2, a2, n2, o2, h = e2.gf, l = e2.g._hasOpacity, p = e2.s.v, m = e2.e.v;
        if (e2.o._mdf || i2) {
          var f = "gf" === t2.ty ? "fill-opacity" : "stroke-opacity";
          e2.style.pElem.setAttribute(f, e2.o.v);
        }
        if (e2.s._mdf || i2) {
          var c = 1 === t2.t ? "x1" : "cx", d = "x1" === c ? "y1" : "cy";
          h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e2.g._collapsable && (e2.of.setAttribute(c, p[0]), e2.of.setAttribute(d, p[1]));
        }
        if (e2.g._cmdf || i2) {
          r2 = e2.cst;
          var u = e2.g.c;
          for (a2 = r2.length, s2 = 0; s2 < a2; s2 += 1) (n2 = r2[s2]).setAttribute("offset", u[4 * s2] + "%"), n2.setAttribute("stop-color", "rgb(" + u[4 * s2 + 1] + "," + u[4 * s2 + 2] + "," + u[4 * s2 + 3] + ")");
        }
        if (l && (e2.g._omdf || i2)) {
          var y = e2.g.o;
          for (a2 = (r2 = e2.g._collapsable ? e2.cst : e2.ost).length, s2 = 0; s2 < a2; s2 += 1) n2 = r2[s2], e2.g._collapsable || n2.setAttribute("offset", y[2 * s2] + "%"), n2.setAttribute("stop-opacity", y[2 * s2 + 1]);
        }
        if (1 === t2.t) (e2.e._mdf || i2) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e2.g._collapsable && (e2.of.setAttribute("x2", m[0]), e2.of.setAttribute("y2", m[1])));
        else if ((e2.s._mdf || e2.e._mdf || i2) && (o2 = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o2), l && !e2.g._collapsable && e2.of.setAttribute("r", o2)), e2.e._mdf || e2.h._mdf || e2.a._mdf || i2) {
          o2 || (o2 = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
          var g = Math.atan2(m[1] - p[1], m[0] - p[0]), v = e2.h.v;
          v >= 1 ? v = 0.99 : v <= -1 && (v = -0.99);
          var b = o2 * v, P = Math.cos(g + e2.a.v) * b + p[0], E = Math.sin(g + e2.a.v) * b + p[1];
          h.setAttribute("fx", P), h.setAttribute("fy", E), l && !e2.g._collapsable && (e2.of.setAttribute("fx", P), e2.of.setAttribute("fy", E));
        }
      }
      function o(t2, e2, i2) {
        var r2 = e2.style, s2 = e2.d;
        s2 && (s2._mdf || i2) && s2.dashStr && (r2.pElem.setAttribute("stroke-dasharray", s2.dashStr), r2.pElem.setAttribute("stroke-dashoffset", s2.dashoffset[0])), e2.c && (e2.c._mdf || i2) && r2.pElem.setAttribute("stroke", "rgb(" + bmFloor(e2.c.v[0]) + "," + bmFloor(e2.c.v[1]) + "," + bmFloor(e2.c.v[2]) + ")"), (e2.o._mdf || i2) && r2.pElem.setAttribute("stroke-opacity", e2.o.v), (e2.w._mdf || i2) && (r2.pElem.setAttribute("stroke-width", e2.w.v), r2.msElem && r2.msElem.setAttribute("stroke-width", e2.w.v));
      }
      return { createRenderFunction: function(t2) {
        switch (t2.ty) {
          case "fl":
            return s;
          case "gf":
            return n;
          case "gs":
            return a;
          case "st":
            return o;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return r;
          case "tr":
            return i;
          default:
            return null;
        }
      } };
    })();
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    function CVShapeData(t, e, i, r) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var s, a = 4;
      "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
      var n, o = i.length;
      for (s = 0; s < o; s += 1) i[s].closed || (n = { transforms: r.addTransformSequence(i[s].transforms), trNodes: [] }, this.styledShapes.push(n), i[s].elements.push(n));
    }
    function BaseElement() {
    }
    function NullElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    function SVGBaseElement() {
    }
    function IShapeElement() {
    }
    function ITextElement() {
    }
    function ICompElement() {
    }
    function IImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    function ISolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function AudioElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = false, this._canPlay = false;
      var r = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function FootageElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    function SVGCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = true, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function SVGTextLottieElement(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    function SVGShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    function SVGTintFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), (i = createNS("feColorMatrix")).setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
        var r, s = createNS("feMerge");
        t.appendChild(s), (r = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(r), (r = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(r);
      }
    }
    function SVGFillFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i;
    }
    function SVGGaussianBlurEffect(t, e) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var i = createNS("feGaussianBlur");
      t.appendChild(i), this.feGaussianBlur = i;
    }
    function SVGStrokeEffect(t, e) {
      this.initialized = false, this.filterManager = e, this.elem = t, this.paths = [];
    }
    function SVGTritoneFilter(t, e) {
      this.filterManager = e;
      var i = createNS("feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
      var r = createNS("feComponentTransfer");
      r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
      var s = createNS("feFuncR");
      s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
      var a = createNS("feFuncG");
      a.setAttribute("type", "table"), r.appendChild(a), this.feFuncG = a;
      var n = createNS("feFuncB");
      n.setAttribute("type", "table"), r.appendChild(n), this.feFuncB = n;
    }
    function SVGProLevelsFilter(t, e) {
      this.filterManager = e;
      var i = this.filterManager.effectElements, r = createNS("feComponentTransfer");
      (i[10].p.k || 0 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 1 !== i[12].p.v || i[13].p.k || 0 !== i[13].p.v || i[14].p.k || 1 !== i[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[17].p.k || 0 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 1 !== i[19].p.v || i[20].p.k || 0 !== i[20].p.v || i[21].p.k || 1 !== i[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[24].p.k || 0 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 1 !== i[26].p.v || i[27].p.k || 0 !== i[27].p.v || i[28].p.k || 1 !== i[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[31].p.k || 0 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 1 !== i[33].p.v || i[34].p.k || 0 !== i[34].p.v || i[35].p.k || 1 !== i[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = createNS("feComponentTransfer")), (i[3].p.k || 0 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 1 !== i[5].p.v || i[6].p.k || 0 !== i[6].p.v || i[7].p.k || 1 !== i[7].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r));
    }
    function SVGDropShadowEffect(t, e) {
      var i = e.container.globalData.renderConfig.filterSize;
      t.setAttribute("x", i.x), t.setAttribute("y", i.y), t.setAttribute("width", i.width), t.setAttribute("height", i.height), this.filterManager = e;
      var r = createNS("feGaussianBlur");
      r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
      var s = createNS("feOffset");
      s.setAttribute("dx", "25"), s.setAttribute("dy", "0"), s.setAttribute("in", "drop_shadow_1"), s.setAttribute("result", "drop_shadow_2"), this.feOffset = s, t.appendChild(s);
      var a = createNS("feFlood");
      a.setAttribute("flood-color", "#00ff00"), a.setAttribute("flood-opacity", "1"), a.setAttribute("result", "drop_shadow_3"), this.feFlood = a, t.appendChild(a);
      var n = createNS("feComposite");
      n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
      var o, h = createNS("feMerge");
      t.appendChild(h), o = createNS("feMergeNode"), h.appendChild(o), (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = h, this.originalNodeAdded = false, h.appendChild(o);
    }
    ShapeTransformManager.prototype = { addTransformSequence: function(t) {
      var e, i = t.length, r = "_";
      for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
      var s = this.sequences[r];
      return s || (s = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: false }, this.sequences[r] = s, this.sequenceList.push(s)), s;
    }, processSequence: function(t, e) {
      for (var i, r = 0, s = t.transforms.length, a = e; r < s && !e; ) {
        if (t.transforms[r].transform.mProps._mdf) {
          a = true;
          break;
        }
        r += 1;
      }
      if (a) for (t.finalTransform.reset(), r = s - 1; r >= 0; r -= 1) i = t.transforms[r].transform.mProps.v.props, t.finalTransform.transform(i[0], i[1], i[2], i[3], i[4], i[5], i[6], i[7], i[8], i[9], i[10], i[11], i[12], i[13], i[14], i[15]);
      t._mdf = a;
    }, processSequences: function(t) {
      var e, i = this.sequenceList.length;
      for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return false;
      for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
        if ("n" !== this.data.masksProperties[t].mode && false !== this.data.masksProperties[t].cl) return true;
        t += 1;
      }
      return false;
    }, initExpressions: function() {
      this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
      var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
      this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface);
    }, setBlendMode: function() {
      var t = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
    }, initBaseData: function(t, e, i) {
      this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } }, NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = false;
      var t, e, i, r = null;
      if (this.data.td) {
        if (3 == this.data.td || 1 == this.data.td) {
          var s = createNS("mask");
          s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), r = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")).appendChild(this.layerElement), r = i, s.appendChild(i), i.setAttribute("filter", "url(" + locationHref + "#" + t + ")"));
        } else if (2 == this.data.td) {
          var a = createNS("mask");
          a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
          var n = createNS("g");
          a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
          var o = createNS("feComponentTransfer");
          o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
          var h = createNS("feFuncA");
          h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
          var l = createNS("rect");
          l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), r = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), i = createNS("g"), n.appendChild(l), i.appendChild(this.layerElement), r = i, n.appendChild(i)), this.globalData.defs.appendChild(a);
        }
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), r = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
        var p = createNS("clipPath"), m = createNS("path");
        m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var f = createElementID();
        if (p.setAttribute("id", f), p.appendChild(m), this.globalData.defs.appendChild(p), this.checkMasks()) {
          var c = createNS("g");
          c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, r ? r.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")");
      }
      0 !== this.data.bm && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this);
    }, setMatte: function(t) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")");
    } }, IShapeElement.prototype = { addShapeToModifiers: function(t) {
      var e, i = this.shapeModifiers.length;
      for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
    }, isShapeInAnimatedModifiers: function(t) {
      for (var e = this.shapeModifiers.length; 0 < e; ) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return true;
      return false;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var t, e = this.shapes.length;
        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1) ;
      }
    }, searchProcessedElement: function(t) {
      for (var e = this.processedElements, i = 0, r = e.length; i < r; ) {
        if (e[i].elem === t) return e[i].pos;
        i += 1;
      }
      return 0;
    }, addProcessedElement: function(t, e) {
      for (var i = this.processedElements, r = i.length; r; ) if (i[r -= 1].elem === t) return void (i[r].pos = e);
      i.push(new ProcessedElement(t, e));
    }, prepareFrame: function(t) {
      this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    } }, ITextElement.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = true, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = false, this.textProperty._mdf = false);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var i, r, s = e.length, a = "";
      for (i = 0; i < s; i += 1) r = e[i].ks.k, a += buildShapeString(r, r.i.length, true, t);
      return a;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
      }
      e.translate(r, s, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = false, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, r = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = true));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    }, AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, true), this.prepareProperties(t, true), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = true));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = false;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = false, this._canPlay = false;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = true;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this.audio.volume(t);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    }, FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      this.layerInterface = FootageInterface(this);
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, r = [], s = ""; e < i; ) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(s), s = "") : s += t[e], e += 1;
      return r.push(s), r;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var r = this.globalData.fontManager.getFontByName(i.f);
      if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
      else {
        this.layerElement.setAttribute("font-family", r.fFamily);
        var s = i.fWeight, a = i.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var n, o = i.l || [], h = !!this.globalData.fontManager.chars;
      e = o.length;
      var l, p = this.mHelper, m = "", f = this.data.singleShape, c = 0, d = 0, u = true, y = 1e-3 * i.tr * i.finalSize;
      if (!f || h || i.sz) {
        var g, v, b = this.textSpans.length;
        for (t = 0; t < e; t += 1) h && f && 0 !== t || (n = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(i.finalSize / 100, i.finalSize / 100), f && (o[t].n && (c = -y, d += i.yOffset, d += u ? 1 : 0, u = false), this.applyTextPropertiesToMatrix(i, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
        f && n && n.setAttribute("d", m);
      } else {
        var P = this.textContainer, E = "start";
        switch (i.j) {
          case 1:
            E = "end";
            break;
          case 2:
            E = "middle";
            break;
          default:
            E = "start";
        }
        P.setAttribute("text-anchor", E), P.setAttribute("letter-spacing", y);
        var x = this.buildTextContents(i.finalText);
        for (e = x.length, d = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) (n = this.textSpans[t] || createNS("tspan")).textContent = x[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", P.appendChild(n), this.textSpans[t] = n, d += i.finalLineHeight;
        this.layerElement.appendChild(P);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].style.display = "none", t += 1;
      this._sizeChanged = true;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = false;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var t, e;
        this._sizeChanged = true;
        var i, r, s = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
        for (e = a.length, t = 0; t < e; t += 1) a[t].n || (i = s[t], r = this.textSpans[t], i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc));
      }
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e, i, r, s = this.shapes.length, a = this.stylesList.length, n = [], o = false;
      for (i = 0; i < a; i += 1) {
        for (r = this.stylesList[i], o = false, n.length = 0, t = 0; t < s; t += 1) -1 !== (e = this.shapes[t]).styles.indexOf(r) && (n.push(e), o = e._isAnimated || o);
        n.length > 1 && o && this.setShapesAsAnimated(n);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var i, r = new SVGStyleData(t, e), s = r.pElem;
      if ("st" === t.ty) i = new SVGStrokeStyleData(this, t, r);
      else if ("fl" === t.ty) i = new SVGFillStyleData(this, t, r);
      else if ("gf" === t.ty || "gs" === t.ty) {
        i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), s.setAttribute("mask", "url(" + locationHref + "#" + i.maskId + ")"));
      }
      return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var i = TransformPropertyFactory.getTransformProperty(this, t, this), r = new SVGTransformData(i, i.o, e);
      return this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
      var r = 4;
      "rc" === t.ty ? r = 5 : "el" === t.ty ? r = 6 : "sr" === t.ty && (r = 7);
      var s = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
      return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, r = this.animatedContents.length; i < r; ) {
        if (this.animatedContents[i].element === e) return;
        i += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e, i = t.styles, r = this.stylesList.length;
      for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = true;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], true), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, s, a, n) {
      var o, h, l, p, m, f, c = [].concat(a), d = t.length - 1, u = [], y = [];
      for (o = d; o >= 0; o -= 1) {
        if ((f = this.searchProcessedElement(t[o])) ? e[o] = i[f - 1] : t[o]._render = n, "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty) f ? e[o].style.closed = false : e[o] = this.createStyleElement(t[o], s), t[o]._render && r.appendChild(e[o].style.pElem), u.push(e[o].style);
        else if ("gr" === t[o].ty) {
          if (f) for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
          else e[o] = this.createGroupElement(t[o]);
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && r.appendChild(e[o].gr);
        } else "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], r)), p = e[o].transform, c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (m = e[o]).closed = false : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" === t[o].ty && (f ? (m = e[o]).closed = true : (m = ShapeModifiers.getModifier(t[o].ty), e[o] = m, m.init(this, t, o, e), this.shapeModifiers.push(m), n = false), y.push(m));
        this.addProcessedElement(t[o], o + 1);
      }
      for (d = u.length, o = 0; o < d; o += 1) u[o].closed = true;
      for (d = y.length, o = 0; o < d; o += 1) y[o].closed = true;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      var t;
      this.renderModifiers();
      var e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e, i = this.animatedContents.length;
      for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && true !== e.data && e.fn(e.data, e.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v / 100;
        this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
      }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, i = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
      }
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3 * this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = 3 == i ? 0 : e, s = 2 == i ? 0 : e;
        this.feGaussianBlur.setAttribute("stdDeviation", r + " " + s);
        var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", a);
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: i });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var a = createNS("mask"), n = createElementID();
        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
        var o = createNS("g");
        for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0]; ) o.appendChild(s[0]);
        this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff");
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v) for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; ) this.elem.layerElement.removeChild(s[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
      }
      this.initialized = true, this.pathMasker = e;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      var e;
      this.initialized || this.initialize();
      var i, r, s = this.paths.length;
      for (e = 0; e < s; e += 1) if (-1 !== this.paths[e].m && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
        var a;
        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
          var n = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), o = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), h = r.getTotalLength();
          a = "0 0 0 " + h * n + " ";
          var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, f = Math.floor(p / m);
          for (l = 0; l < f; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
          a += "0 " + 10 * h + " 0 0";
        } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
        r.setAttribute("stroke-dasharray", a);
      }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var c = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")");
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v, s = r[0] + " " + i[0] + " " + e[0], a = r[1] + " " + i[1] + " " + e[1], n = r[2] + " " + i[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var i = createNS(t);
      return i.setAttribute("type", "table"), e.appendChild(i), i;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, s) {
      for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, { length: 256 }), m = 0, f = s - r, c = e - t; o <= 256; ) n = (a = o / 256) <= h ? c < 0 ? s : r : a >= l ? c < 0 ? r : s : r + f * Math.pow((a - t) / c, 1 / i), p[m] = n, m += 1, o += 256 / 255;
      return p.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, i = this.filterManager.effectElements;
        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var i = this.filterManager.effectElements[3].p.v, r = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = i * Math.cos(r), a = i * Math.sin(r);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, i) {
      this.initialized = false, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement;
    }
    function SVGEffects(t) {
      var e, i, r = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, true), n = 0;
      for (this.filters = [], e = 0; e < r; e += 1) i = null, 20 === t.data.ef[e].ty ? (n += 1, i = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, i = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? i = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, i = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, i = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, i = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? i = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, i = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), i && this.filters.push(i);
      n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    function CVContextData() {
      var t;
      this.saved = [], this.cArrPos = 0, this.cTr = new Matrix(), this.cO = 1;
      for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
      this._length = 15;
    }
    function CVBaseElement() {
    }
    function CVImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i);
    }
    function CVCompElement(t, e, i) {
      this.completeLayers = false, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function CVMaskElement(t, e) {
      var i;
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r = this.masksProperties.length, s = false;
      for (i = 0; i < r; i += 1) "n" !== this.masksProperties[i].mode && (s = true), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
      this.hasMasks = s, s && this.element.addRenderableComponent(this);
    }
    function CVShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, i);
    }
    function CVSolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function CVTextElement(t, e, i) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = false, this.strokeColorAnim = false, this.strokeWidthAnim = false, this.stroke = false, this.fill = false, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i);
    }
    function CVEffects() {
    }
    function HBaseElement() {
    }
    function HSolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function HCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = false, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: true };
    }
    function HShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    function HTextElement(t, e, i) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = false, this.initElement(t, e, i);
    }
    function HImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
    }
    function HCameraElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
      var r = PropertyFactory.getProp;
      if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var s, a = t.ks.or.k.length;
        for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
      }
      this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = true, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = true, this.finalTransform = { mProp: this };
    }
    function HEffects() {
    }
    SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var i = t.layerElement.parentNode;
      if (i) {
        for (var r, s = i.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement; ) a += 1;
        a <= n - 2 && (r = s[a + 1]);
        var o = createNS("use");
        o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var i = createElementID(), r = createNS("mask");
        r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var s = t.globalData.defs;
        s.appendChild(r);
        var a = createNS("symbol");
        a.setAttribute("id", i), this.replaceInParent(e, i), a.appendChild(e.layerElement), s.appendChild(a);
        var n = createNS("use");
        n.setAttribute("href", "#" + i), r.appendChild(n), e.data.hd = false, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r; ) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
      this.initialized = true;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    }, SVGEffects.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, CVContextData.prototype.duplicate = function() {
      var t = 2 * this._length, e = this.savedOp;
      this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
      var i = 0;
      for (i = this._length; i < t; i += 1) this.saved[i] = createTypedArray("float32", 16);
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.cO = 1;
    }, CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this);
    }, createContent: function() {
    }, setBlendMode: function() {
      var t = this.globalData;
      if (t.blendMode !== this.data.bm) {
        t.blendMode = this.data.bm;
        var e = getBlendMode(this.data.bm);
        t.canvasContext.globalCompositeOperation = e;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this);
    }, hideElement: function() {
      this.hidden || this.isInRange && !this.isTransparent || (this.hidden = true);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = false, this._isFirstFrame = true, this.maskManager._isFirstFrame = true);
    }, renderFrame: function() {
      if (!this.hidden && !this.data.hd) {
        this.renderTransform(), this.renderRenderable(), this.setBlendMode();
        var t = 0 === this.data.ty;
        this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(true), this._isFirstFrame && (this._isFirstFrame = false);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e, i, r = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (i = a) * o : i = (e = s) / o, r.drawImage(this.img, (s - e) / 2, (a - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t, e = this.canvasContext;
      for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t;
      for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t, e, i, r, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
        for (a.beginPath(), t = 0; t < n; t += 1) if ("n" !== this.masksProperties[t].mode) {
          var o;
          this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), r = this.viewData[t].v, e = s.applyToPointArray(r.v[0][0], r.v[0][1], 0), a.moveTo(e[0], e[1]);
          var h = r._length;
          for (o = 1; o < h; o += 1) i = s.applyToTriplePoints(r.o[o - 1], r.i[o], r.v[o]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
          i = s.applyToTriplePoints(r.o[o - 1], r.i[0], r.v[0]), a.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
        }
        this.element.globalData.renderer.save(true), a.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: false }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: true === t.hd }, r = {};
      if ("fl" === t.ty || "st" === t.ty ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), r.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), "st" === t.ty || "gs" === t.ty) {
        if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
          var s = new DashProperty(this, t.d, "canvas", this);
          r.d = s, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0]);
        }
      } else i.r = 2 === t.r ? "evenodd" : "nonzero";
      return this.stylesList.push(i), r.style = i, r;
    }, CVShapeElement.prototype.createGroupElement = function() {
      return { it: [], prevViewData: [] };
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      return { transform: { opacity: 1, _opMdf: false, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = true;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, true, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, i = this.stylesList.length;
      for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].closed = true;
    }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, s) {
      var a, n, o, h, l, p, m = t.length - 1, f = [], c = [], d = [].concat(s);
      for (a = m; a >= 0; a -= 1) {
        if ((h = this.searchProcessedElement(t[a])) ? e[a] = i[h - 1] : t[a]._shouldRender = r, "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty) h ? e[a].style.closed = false : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
        else if ("gr" === t[a].ty) {
          if (h) for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
          else e[a] = this.createGroupElement(t[a]);
          this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, r, d);
        } else "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (h ? (l = e[a]).closed = false : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = true : (l = ShapeModifiers.getModifier(t[a].ty), e[a] = l, l.init(this, t, a, e), this.shapeModifiers.push(l), r = false), c.push(l));
        this.addProcessedElement(t[a], a + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1) c[a].closed = true;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = false, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, true);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = true);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e, i, r, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, m = this.globalData.canvasContext;
      for (t = 0; t < l; t += 1) if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
        for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), i = a.length, e = 0; e < i; e += 1) {
          for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, r = 0; r < s; r += 1) "m" === n[r].t ? m.moveTo(n[r].p[0], n[r].p[1]) : "c" === n[r].t ? m.bezierCurveTo(n[r].pts[0], n[r].pts[1], n[r].pts[2], n[r].pts[3], n[r].pts[4], n[r].pts[5]) : m.closePath();
          "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter));
        }
        "st" !== o && "gs" !== o && m.fill(h.r), p.restore();
      }
    }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
      var s, a;
      for (a = t, s = e.length - 1; s >= 0; s -= 1) "tr" === e[s].ty ? (a = i[s].transform, this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], i[s]) : "fl" === e[s].ty ? this.renderFill(e[s], i[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], i[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], i[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
      r && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var i, r, s, a = t.trNodes, n = e.paths, o = n._length;
        a.length = 0;
        var h = t.transforms.finalTransform;
        for (s = 0; s < o; s += 1) {
          var l = n.shapes[s];
          if (l && l.v) {
            for (r = l._length, i = 1; i < r; i += 1) 1 === i && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), a.push({ t: "c", pts: h.applyToTriplePoints(l.o[i - 1], l.i[i], l.v[i]) });
            1 === r && a.push({ t: "m", p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0) }), l.c && r && (a.push({ t: "c", pts: h.applyToTriplePoints(l.o[i - 1], l.i[0], l.v[0]) }), a.push({ t: "z" }));
          }
        }
        t.trNodes = a;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (true !== t.hd && t._shouldRender) {
        var i, r = e.styledShapes.length;
        for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, i) {
      var r = e.style;
      (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
      var r, s = e.style;
      if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
        var a, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
        if (1 === t.t) r = n.createLinearGradient(o[0], o[1], h[0], h[1]);
        else {
          var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2)), p = Math.atan2(h[1] - o[1], h[0] - o[0]), m = e.h.v;
          m >= 1 ? m = 0.99 : m <= -1 && (m = -0.99);
          var f = l * m, c = Math.cos(p + e.a.v) * f + o[0], d = Math.sin(p + e.a.v) * f + o[1];
          r = n.createRadialGradient(c, d, 0, o[0], o[1], l);
        }
        var u = t.g.p, y = e.g.c, g = 1;
        for (a = 0; a < u; a += 1) e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]), r.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
        s.grd = r;
      }
      s.coOp = e.o.v * i.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
      var r = e.style, s = e.d;
      s && (s._mdf || this._isFirstFrame) && (r.da = s.dashArray, r.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = false;
      t.fc ? (e = true, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var i = false;
      t.sc && (i = true, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var r, s, a, n, o, h, l, p, m, f, c, d, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
      this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
      var v = this.data.singleShape, b = 1e-3 * t.tr * t.finalSize, P = 0, E = 0, x = true, S = 0;
      for (r = 0; r < s; r += 1) {
        for (n = (a = this.globalData.fontManager.getCharData(t.finalText[r], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {}, g.reset(), v && y[r].n && (P = -b, E += t.yOffset, E += x ? 1 : 0, x = false), m = (l = n.shapes ? n.shapes[0].it : []).length, g.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, g, y[r].line, P, E), c = createSizedArray(m), p = 0; p < m; p += 1) {
          for (h = l[p].ks.k.i.length, f = l[p].ks.k, d = [], o = 1; o < h; o += 1) 1 === o && d.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
          d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)), c[p] = d;
        }
        v && (P += y[r].l, P += b), this.textSpans[S] ? this.textSpans[S].elem = c : this.textSpans[S] = { elem: c }, S += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      var t, e, i, r, s, a, n = this.canvasContext;
      n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
      e = l.length;
      var p, m, f = null, c = null, d = null;
      for (t = 0; t < e; t += 1) if (!l[t].n) {
        if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
          for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) for (a = (m = p[i]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
          this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill();
        }
        if (this.stroke) {
          for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), r = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) for (a = (m = p[i]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
          this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke();
        }
        o && this.globalData.renderer.restore();
      }
    }, CVEffects.prototype.renderFrame = function() {
    }, HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode();
    }, renderElement: function() {
      var t = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var e = this.finalTransform.mat.toCSS();
        t.transform = e, t.webkitTransform = e;
      }
      this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = false));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var i, r = 0; r < e; ) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], true), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var i, r, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
      if (!(l <= 1)) {
        for (i = 0; i < l - 1; i += 1) r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[i + 1]), n = this.getTransformedPoint(h, o.v[i + 1]), this.checkBounds(r, s, a, n, e);
        o.c && (r = this.getTransformedPoint(h, o.v[i]), s = this.getTransformedPoint(h, o.o[i]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(r, s, a, n, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, i, r, s) {
      this.getBoundsOfCurve(t, e, i, r);
      var a = this.shapeBoundingBox;
      s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
      for (var s, a, n, o, h, l, p, m = [[t[0], r[0]], [t[1], r[1]]], f = 0; f < 2; ++f) a = 6 * t[f] - 12 * e[f] + 6 * i[f], s = -3 * t[f] + 9 * e[f] - 9 * i[f] + 3 * r[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 === (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && m[f].push(this.calculateF(o, t, e, i, r, f)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && m[f].push(this.calculateF(l, t, e, i, r, f)), (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && m[f].push(this.calculateF(p, t, e, i, r, f))));
      this.shapeBoundingBox.left = bmMin.apply(null, m[0]), this.shapeBoundingBox.top = bmMin.apply(null, m[1]), this.shapeBoundingBox.right = bmMax.apply(null, m[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, m[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, i, r, s, a) {
      return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * i[a] + 3 * (1 - t) * bmPow(t, 2) * r[a] + bmPow(t, 3) * s[a];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it && this.calculateBoundingBox(t[i].it, e);
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var i = false;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = true), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = true), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var r = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          r.transform = s, r.webkitTransform = s;
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var r, s, a = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
      else {
        e.fontFamily = a.fFamily;
        var n = t.fWeight, o = t.fStyle;
        e.fontStyle = o, e.fontWeight = n;
      }
      var h, l, p, m = t.l;
      s = m.length;
      var f, c = this.mHelper, d = "", u = 0;
      for (r = 0; r < s; r += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), h.setAttribute("stroke-linejoin", lineJoinEnum[2]), h.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0, (p = createNS("svg")).appendChild(h), styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u], h = this.textPaths[u]) : (styleDiv(l = createTag("span")), styleDiv(h = createTag("span")), l.appendChild(h)), this.globalData.fontManager.chars) {
          var y, g = this.globalData.fontManager.getCharData(t.finalText[r], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (y = g ? g.data : null, c.reset(), y && y.shapes && (f = y.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), d = this.createPathShape(c, f), h.setAttribute("d", d)), this.isMasked) this.innerElem.appendChild(h);
          else {
            if (this.innerElem.appendChild(l), y && y.shapes) {
              document.body.appendChild(p);
              var v = p.getBBox();
              p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
              var b = p.style, P = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
              b.transform = P, b.webkitTransform = P, m[r].yOffset = v.y - 1;
            } else p.setAttribute("width", 1), p.setAttribute("height", 1);
            l.appendChild(p);
          }
        } else if (h.textContent = m[r].val, h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(h);
        else {
          this.innerElem.appendChild(l);
          var E = h.style, x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          E.transform = x, E.webkitTransform = x;
        }
        this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l, this.textSpans[u].style.display = "block", this.textPaths[u] = h, u += 1;
      }
      for (; u < this.textSpans.length; ) this.textSpans[u].style.display = "none", u += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var i, r, s, a, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
        for (r = l.length, i = 0; i < r; i += 1) l[i].n ? o += 1 : (a = this.textSpans[i], n = this.textPaths[i], s = h[o], o += 1, s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m, a.style.transform = s.m)), a.style.opacity = s.o, s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw), s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc), s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc), n.style.color = s.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var p = this.innerElem.getBBox();
          this.currentBBox.w !== p.width && (this.currentBBox.w = p.width, this.svgElement.setAttribute("width", p.width)), this.currentBBox.h !== p.height && (this.currentBBox.h = p.height, this.svgElement.setAttribute("height", p.height));
          if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
            this.currentBBox.w = p.width + 2, this.currentBBox.h = p.height + 2, this.currentBBox.x = p.x - 1, this.currentBBox.y = p.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = m, t.webkitTransform = m;
          }
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e, i, r, s = this.comp.threeDElements.length;
      for (t = 0; t < s; t += 1) if ("3d" === (e = this.comp.threeDElements[t]).type) {
        i = e.perspectiveElem.style, r = e.container.style;
        var a = this.pe.v + "px", n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        i.perspective = a, i.webkitPerspective = a, r.transformOrigin = "0px 0px 0px", r.mozTransformOrigin = "0px 0px 0px", r.webkitTransformOrigin = "0px 0px 0px", i.transform = n, i.webkitTransform = n;
      }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t, e, i = this._isFirstFrame;
      if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
      if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
          var r = this.hierarchy[t].finalTransform.mProp;
          this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var s;
          s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], o = Math.sqrt(n[2] * n[2] + n[0] * n[0]), h = Math.atan2(n[1], o), l = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(l).rotateX(-h);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var p = !this._prevMat.equals(this.mat);
        if ((p || this.pe._mdf) && this.comp.threeDElements) {
          var m, f, c;
          for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) if ("3d" === (m = this.comp.threeDElements[t]).type) {
            if (p) {
              var d = this.mat.toCSS();
              (c = m.container.style).transform = d, c.webkitTransform = d;
            }
            this.pe._mdf && ((f = m.perspectiveElem.style).perspective = this.pe.v + "px", f.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = false;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, true);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    }, HEffects.prototype.renderFrame = function() {
    };
    var animationManager = (function() {
      var t = {}, e = [], i = 0, r = 0, s = 0, a = true, n = false;
      function o(t2) {
        for (var i2 = 0, s2 = t2.target; i2 < r; ) e[i2].animation === s2 && (e.splice(i2, 1), i2 -= 1, r -= 1, s2.isPaused || p()), i2 += 1;
      }
      function h(t2, i2) {
        if (!t2) return null;
        for (var s2 = 0; s2 < r; ) {
          if (e[s2].elem === t2 && null !== e[s2].elem) return e[s2].animation;
          s2 += 1;
        }
        var a2 = new AnimationItem();
        return m(a2, t2), a2.setData(t2, i2), a2;
      }
      function l() {
        s += 1, d();
      }
      function p() {
        s -= 1;
      }
      function m(t2, i2) {
        t2.addEventListener("destroy", o), t2.addEventListener("_active", l), t2.addEventListener("_idle", p), e.push({ elem: i2, animation: t2 }), r += 1;
      }
      function f(t2) {
        var o2, h2 = t2 - i;
        for (o2 = 0; o2 < r; o2 += 1) e[o2].animation.advanceTime(h2);
        i = t2, s && !n ? window.requestAnimationFrame(f) : a = true;
      }
      function c(t2) {
        i = t2, window.requestAnimationFrame(f);
      }
      function d() {
        !n && s && a && (window.requestAnimationFrame(c), a = false);
      }
      return t.registerAnimation = h, t.loadAnimation = function(t2) {
        var e2 = new AnimationItem();
        return m(e2, null), e2.setParams(t2), e2;
      }, t.setSpeed = function(t2, i2) {
        var s2;
        for (s2 = 0; s2 < r; s2 += 1) e[s2].animation.setSpeed(t2, i2);
      }, t.setDirection = function(t2, i2) {
        var s2;
        for (s2 = 0; s2 < r; s2 += 1) e[s2].animation.setDirection(t2, i2);
      }, t.play = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.play(t2);
      }, t.pause = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.pause(t2);
      }, t.stop = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.stop(t2);
      }, t.togglePause = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.togglePause(t2);
      }, t.searchAnimations = function(t2, e2, i2) {
        var r2, s2 = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a2 = s2.length;
        for (r2 = 0; r2 < a2; r2 += 1) i2 && s2[r2].setAttribute("data-bm-type", i2), h(s2[r2], t2);
        if (e2 && 0 === a2) {
          i2 || (i2 = "svg");
          var n2 = document.getElementsByTagName("body")[0];
          n2.innerText = "";
          var o2 = createTag("div");
          o2.style.width = "100%", o2.style.height = "100%", o2.setAttribute("data-bm-type", i2), n2.appendChild(o2), h(o2, t2);
        }
      }, t.resize = function() {
        var t2;
        for (t2 = 0; t2 < r; t2 += 1) e[t2].animation.resize();
      }, t.goToAndStop = function(t2, i2, s2) {
        var a2;
        for (a2 = 0; a2 < r; a2 += 1) e[a2].animation.goToAndStop(t2, i2, s2);
      }, t.destroy = function(t2) {
        var i2;
        for (i2 = r - 1; i2 >= 0; i2 -= 1) e[i2].animation.destroy(t2);
      }, t.freeze = function() {
        n = true;
      }, t.unfreeze = function() {
        n = false, d();
      }, t.setVolume = function(t2, i2) {
        var s2;
        for (s2 = 0; s2 < r; s2 += 1) e[s2].animation.setVolume(t2, i2);
      }, t.mute = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.mute(t2);
      }, t.unmute = function(t2) {
        var i2;
        for (i2 = 0; i2 < r; i2 += 1) e[i2].animation.unmute(t2);
      }, t.getRegisteredAnimations = function() {
        var t2, i2 = e.length, r2 = [];
        for (t2 = 0; t2 < i2; t2 += 1) r2.push(e[t2].animation);
        return r2;
      }, t;
    })(), AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = false, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = true, this.autoplay = false, this.loop = true, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = subframeEnabled, this.segments = [], this._idle = true, this._completedLoop = false, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [];
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer), e) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, t.rendererSettings);
          break;
        case "svg":
          this.renderer = new SVGRenderer(this, t.rendererSettings);
          break;
        default:
          this.renderer = new HybridRenderer(this, t.rendererSettings);
      }
      this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || void 0 === t.loop || true === t.loop ? this.loop = true : false === t.loop ? this.loop = false : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this)));
    }, AnimationItem.prototype.setData = function(t, e) {
      e && "object" != typeof e && (e = JSON.parse(e));
      var i = { wrapper: t, animationData: e }, r = t.attributes;
      i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
      var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
      "false" === s ? i.loop = false : "true" === s ? i.loop = true : "" !== s && (i.loop = parseInt(s, 10));
      var a = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
      i.autoplay = "false" !== a, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = false), this.setParams(i);
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e, i, r = this.animationData.layers, s = r.length, a = t.layers, n = a.length;
      for (i = 0; i < n; i += 1) for (e = 0; e < s; ) {
        if (r[e].id === a[i].id) {
          r[e] = a[i];
          break;
        }
        e += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = false, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, assetLoader.load(i, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (t2) {
        this.triggerConfigError(t2);
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = true, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
        this.trigger("DOMLoaded");
      }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play());
    }, AnimationItem.prototype.resize = function() {
      this.renderer.updateContainerSize();
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame();
    }, AnimationItem.prototype.renderFrame = function() {
      if (false !== this.isLoaded && this.renderer) try {
        this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || true === this.isPaused && (this.isPaused = false, this.audioController.resume(), this._idle && (this._idle = false, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || false === this.isPaused && (this.isPaused = true, this._idle = true, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (true === this.isPaused ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = false, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1) if ((e = this.markers[i]).payload && e.payload.name === t) return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
      if (!i || this.name === i) {
        var r = Number(t);
        if (isNaN(r)) {
          var s = this.getMarkerData(t);
          s && this.goToAndStop(s.time, true);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
      if (!i || this.name === i) {
        var r = Number(t);
        if (isNaN(r)) {
          var s = this.getMarkerData(t);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], true) : this.goToAndStop(s.time, true));
        } else this.goToAndStop(r, e, i);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (true !== this.isPaused && false !== this.isLoaded) {
        var e = this.currentRawFrame + t * this.frameModifier, i = false;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = true, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = true, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && true !== this.loop ? (i = true, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = true)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, -1 !== i && this.goToAndStop(i, true);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), "object" == typeof t[0]) {
        var i, r = t.length;
        for (i = 0; i < r; i += 1) this.segments.push(t[i]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), true);
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.renderer = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        -1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var Expressions = (function() {
      var t = {};
      return t.initExpressions = function(t2) {
        var e = 0, i = [];
        t2.renderer.compInterface = CompExpressionInterface(t2.renderer), t2.renderer.globalData.projectInterface.registerComposition(t2.renderer), t2.renderer.globalData.pushExpression = function() {
          e += 1;
        }, t2.renderer.globalData.popExpression = function() {
          0 === (e -= 1) && (function() {
            var t3, e2 = i.length;
            for (t3 = 0; t3 < e2; t3 += 1) i[t3].release();
            i.length = 0;
          })();
        }, t2.renderer.globalData.registerExpressionProperty = function(t3) {
          -1 === i.indexOf(t3) && i.push(t3);
        };
      }, t;
    })();
    expressionsPlugin = Expressions;
    var ExpressionManager = (function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null;
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return "number" === t || "boolean" === t || "string" === t || e instanceof Number;
      }
      function $bm_neg(t) {
        var e = typeof t;
        if ("number" === e || "boolean" === e || t instanceof Number) return -t;
        if ($bm_isInstanceOfArray(t)) {
          var i, r = t.length, s = [];
          for (i = 0; i < r; i += 1) s[i] = -t[i];
          return s;
        }
        return t.propType ? t.v : -t;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var i = typeof t, r = typeof e;
        if ("string" === i || "string" === r) return t + e;
        if (isNumerable(i, t) && isNumerable(r, e)) return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; ) ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
          return o;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var i = typeof t, r = typeof e;
        if (isNumerable(i, t) && isNumerable(r, e)) return "string" === i && (t = parseInt(t, 10)), "string" === r && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; ) ("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
          return o;
        }
        return 0;
      }
      function mul(t, e) {
        var i, r, s, a = typeof t, n = typeof e;
        if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
          for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] * e;
          return i;
        }
        if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
          for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t * e[r];
          return i;
        }
        return 0;
      }
      function div(t, e) {
        var i, r, s, a = typeof t, n = typeof e;
        if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
        if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
          for (s = t.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t[r] / e;
          return i;
        }
        if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
          for (s = e.length, i = createTypedArray("float32", s), r = 0; r < s; r += 1) i[r] = t / e[r];
          return i;
        }
        return 0;
      }
      function mod(t, e) {
        return "string" == typeof t && (t = parseInt(t, 10)), "string" == typeof e && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, i) {
        if (e > i) {
          var r = i;
          i = e, e = r;
        }
        return Math.min(Math.max(t, e), i);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
        var i;
        e || (e = helperLengthArray);
        var r = Math.min(t.length, e.length), s = 0;
        for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
        return Math.sqrt(s);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e, i, r = t[0], s = t[1], a = t[2], n = Math.max(r, s, a), o = Math.min(r, s, a), h = (n + o) / 2;
        if (n === o) e = 0, i = 0;
        else {
          var l = n - o;
          switch (i = h > 0.5 ? l / (2 - n - o) : l / (n + o), n) {
            case r:
              e = (s - a) / l + (s < a ? 6 : 0);
              break;
            case s:
              e = (a - r) / l + 2;
              break;
            case a:
              e = (r - s) / l + 4;
          }
          e /= 6;
        }
        return [e, i, h, t[3]];
      }
      function hue2rgb(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
      }
      function hslToRgb(t) {
        var e, i, r, s = t[0], a = t[1], n = t[2];
        if (0 === a) e = n, r = n, i = n;
        else {
          var o = n < 0.5 ? n * (1 + a) : n + a - n * a, h = 2 * n - o;
          e = hue2rgb(h, o, s + 1 / 3), i = hue2rgb(h, o, s), r = hue2rgb(h, o, s - 1 / 3);
        }
        return [e, i, r, t[3]];
      }
      function linear(t, e, i, r, s) {
        if (void 0 !== r && void 0 !== s || (r = e, s = i, e = 0, i = 1), i < e) {
          var a = i;
          i = e, e = a;
        }
        if (t <= e) return r;
        if (t >= i) return s;
        var n, o = i === e ? 0 : (t - e) / (i - e);
        if (!r.length) return r + (s - r) * o;
        var h = r.length, l = createTypedArray("float32", h);
        for (n = 0; n < h; n += 1) l[n] = r[n] + (s[n] - r[n]) * o;
        return l;
      }
      function random(t, e) {
        if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var i, r = e.length;
          t || (t = createTypedArray("float32", r));
          var s = createTypedArray("float32", r), a = BMMath.random();
          for (i = 0; i < r; i += 1) s[i] = t[i] + a * (e[i] - t[i]);
          return s;
        }
        return void 0 === t && (t = 0), t + BMMath.random() * (e - t);
      }
      function createPath(t, e, i, r) {
        var s, a = t.length, n = shapePool.newElement();
        n.setPathData(!!r, a);
        var o, h, l = [0, 0];
        for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = i && i[s] ? i[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, true);
        return n;
      }
      function initiateExpression(elem, data, property) {
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || true !== this.data.hd, wiggle = (function(t, e) {
          var i, r, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s);
          var n = Math.floor(5 * time);
          for (i = 0, r = 0; i < n; ) {
            for (r = 0; r < s; r += 1) a[r] += -e + 2 * e * BMMath.random();
            i += 1;
          }
          var o = 5 * time, h = o - Math.floor(o), l = createTypedArray("float32", s);
          if (s > 1) {
            for (r = 0; r < s; r += 1) l[r] = this.pv[r] + a[r] + (-e + 2 * e * BMMath.random()) * h;
            return l;
          }
          return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h;
        }).bind(this);
        function loopInDuration(t, e) {
          return loopIn(t, e, true);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, true);
        }
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
        function lookAt(t, e) {
          var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
          return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
        }
        function easeOut(t, e, i, r, s) {
          return applyEase(easeOutBez, t, e, i, r, s);
        }
        function easeIn(t, e, i, r, s) {
          return applyEase(easeInBez, t, e, i, r, s);
        }
        function ease(t, e, i, r, s) {
          return applyEase(easeInOutBez, t, e, i, r, s);
        }
        function applyEase(t, e, i, r, s, a) {
          void 0 === s ? (s = i, a = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
          var n = t(e);
          if ($bm_isInstanceOfArray(s)) {
            var o, h = s.length, l = createTypedArray("float32", h);
            for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
            return l;
          }
          return (a - s) * n + s;
        }
        function nearestKey(t) {
          var e, i, r, s = data.k.length;
          if (data.k.length && "number" != typeof data.k[0]) if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
          else {
            for (e = 0; e < s - 1; e += 1) {
              if (t === data.k[e].t) {
                i = e + 1, r = data.k[e].t;
                break;
              }
              if (t > data.k[e].t && t < data.k[e + 1].t) {
                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                break;
              }
            }
            -1 === i && (i = e + 1, r = data.k[e].t);
          }
          else i = 0, r = 0;
          var a = {};
          return a.index = i, a.time = r / elem.comp.globalData.frameRate, a;
        }
        function key(t) {
          var e, i, r;
          if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
          var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (r = s.length, i = 0; i < r; i += 1) e[i] = s[i], e.value[i] = s[i];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt);
        }
        return executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob;
    })(), expressionHelpers = { searchExpressions: function(t, e, i) {
      e.x && (i.k = true, i.x = true, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));
    }, getSpeedAtTime: function(t) {
      var e = this.getValueAtTime(t), i = this.getValueAtTime(t + -0.01), r = 0;
      if (e.length) {
        var s;
        for (s = 0; s < e.length; s += 1) r += Math.pow(i[s] - e[s], 2);
        r = 100 * Math.sqrt(r);
      } else r = 0;
      return r;
    }, getVelocityAtTime: function(t) {
      if (void 0 !== this.vel) return this.vel;
      var e, i, r = this.getValueAtTime(t), s = this.getValueAtTime(t + -1e-3);
      if (r.length) for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (s[i] - r[i]) / -1e-3;
      else e = (s - r) / -1e-3;
      return e;
    }, getValueAtTime: function(t) {
      return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
    }, getStaticValueAtTime: function() {
      return this.pv;
    }, setGroupProperty: function(t) {
      this.propertyGroup = t;
    } };
    !(function() {
      function t(t2, e2, i2) {
        if (!this.k || !this.keyframes) return this.pv;
        t2 = t2 ? t2.toLowerCase() : "";
        var r2, s2, a2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[l2.length - 1].t;
        if (h2 <= p2) return this.pv;
        if (i2 ? s2 = p2 - (r2 = e2 ? Math.abs(p2 - this.elem.comp.globalData.frameRate * e2) : Math.max(0, p2 - this.elem.data.ip)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), r2 = p2 - (s2 = l2[l2.length - 1 - e2].t)), "pingpong" === t2) {
          if (Math.floor((h2 - s2) / r2) % 2 != 0) return this.getValueAtTime((r2 - (h2 - s2) % r2 + s2) / this.comp.globalData.frameRate, 0);
        } else {
          if ("offset" === t2) {
            var m = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime(((h2 - s2) % r2 + s2) / this.comp.globalData.frameRate, 0), d = Math.floor((h2 - s2) / r2);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(m.length)).length, a2 = 0; a2 < n2; a2 += 1) o2[a2] = (f[a2] - m[a2]) * d + c[a2];
              return o2;
            }
            return (f - m) * d + c;
          }
          if ("continue" === t2) {
            var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(u.length)).length, a2 = 0; a2 < n2; a2 += 1) o2[a2] = u[a2] + (u[a2] - y[a2]) * ((h2 - p2) / this.comp.globalData.frameRate) / 5e-4;
              return o2;
            }
            return u + (h2 - p2) / 1e-3 * (u - y);
          }
        }
        return this.getValueAtTime(((h2 - s2) % r2 + s2) / this.comp.globalData.frameRate, 0);
      }
      function e(t2, e2, i2) {
        if (!this.k) return this.pv;
        t2 = t2 ? t2.toLowerCase() : "";
        var r2, s2, a2, n2, o2, h2 = this.comp.renderedFrame, l2 = this.keyframes, p2 = l2[0].t;
        if (h2 >= p2) return this.pv;
        if (i2 ? s2 = p2 + (r2 = e2 ? Math.abs(this.elem.comp.globalData.frameRate * e2) : Math.max(0, this.elem.data.op - p2)) : ((!e2 || e2 > l2.length - 1) && (e2 = l2.length - 1), r2 = (s2 = l2[e2].t) - p2), "pingpong" === t2) {
          if (Math.floor((p2 - h2) / r2) % 2 == 0) return this.getValueAtTime(((p2 - h2) % r2 + p2) / this.comp.globalData.frameRate, 0);
        } else {
          if ("offset" === t2) {
            var m = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), f = this.getValueAtTime(s2 / this.comp.globalData.frameRate, 0), c = this.getValueAtTime((r2 - (p2 - h2) % r2 + p2) / this.comp.globalData.frameRate, 0), d = Math.floor((p2 - h2) / r2) + 1;
            if (this.pv.length) {
              for (n2 = (o2 = new Array(m.length)).length, a2 = 0; a2 < n2; a2 += 1) o2[a2] = c[a2] - (f[a2] - m[a2]) * d;
              return o2;
            }
            return c - (f - m) * d;
          }
          if ("continue" === t2) {
            var u = this.getValueAtTime(p2 / this.comp.globalData.frameRate, 0), y = this.getValueAtTime((p2 + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (n2 = (o2 = new Array(u.length)).length, a2 = 0; a2 < n2; a2 += 1) o2[a2] = u[a2] + (u[a2] - y[a2]) * (p2 - h2) / 1e-3;
              return o2;
            }
            return u + (u - y) * (p2 - h2) / 1e-3;
          }
        }
        return this.getValueAtTime((r2 - ((p2 - h2) % r2 + p2)) / this.comp.globalData.frameRate, 0);
      }
      function i(t2, e2) {
        if (!this.k) return this.pv;
        if (t2 = 0.5 * (t2 || 0.4), (e2 = Math.floor(e2 || 5)) <= 1) return this.pv;
        var i2, r2, s2 = this.comp.renderedFrame / this.comp.globalData.frameRate, a2 = s2 - t2, n2 = e2 > 1 ? (s2 + t2 - a2) / (e2 - 1) : 1, o2 = 0, h2 = 0;
        for (i2 = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o2 < e2; ) {
          if (r2 = this.getValueAtTime(a2 + o2 * n2), this.pv.length) for (h2 = 0; h2 < this.pv.length; h2 += 1) i2[h2] += r2[h2];
          else i2 += r2;
          o2 += 1;
        }
        if (this.pv.length) for (h2 = 0; h2 < this.pv.length; h2 += 1) i2[h2] /= e2;
        else i2 /= e2;
        return i2;
      }
      function r(t2) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var e2 = this._transformCachingAtTime.v;
        if (e2.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var i2 = this.a.getValueAtTime(t2);
          e2.translate(-i2[0] * this.a.mult, -i2[1] * this.a.mult, i2[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var r2 = this.s.getValueAtTime(t2);
          e2.scale(r2[0] * this.s.mult, r2[1] * this.s.mult, r2[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var s2 = this.sk.getValueAtTime(t2), a2 = this.sa.getValueAtTime(t2);
          e2.skewFromAxis(-s2 * this.sk.mult, a2 * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var n2 = this.r.getValueAtTime(t2);
          e2.rotate(-n2 * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var o2 = this.rz.getValueAtTime(t2), h2 = this.ry.getValueAtTime(t2), l2 = this.rx.getValueAtTime(t2), p2 = this.or.getValueAtTime(t2);
          e2.rotateZ(-o2 * this.rz.mult).rotateY(h2 * this.ry.mult).rotateX(l2 * this.rx.mult).rotateZ(-p2[2] * this.or.mult).rotateY(p2[1] * this.or.mult).rotateX(p2[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var m = this.px.getValueAtTime(t2), f = this.py.getValueAtTime(t2);
          if (this.data.p.z) {
            var c = this.pz.getValueAtTime(t2);
            e2.translate(m * this.px.mult, f * this.py.mult, -c * this.pz.mult);
          } else e2.translate(m * this.px.mult, f * this.py.mult, 0);
        } else {
          var d = this.p.getValueAtTime(t2);
          e2.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult);
        }
        return e2;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var a = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(t2, e2, i2) {
        var n2 = a(t2, e2, i2);
        return n2.dynamicProperties.length ? n2.getValueAtTime = r.bind(n2) : n2.getValueAtTime = s.bind(n2), n2.setGroupProperty = expressionHelpers.setGroupProperty, n2;
      };
      var n = PropertyFactory.getProp;
      PropertyFactory.getProp = function(r2, s2, a2, o2, h2) {
        var l2 = n(r2, s2, a2, o2, h2);
        l2.kf ? l2.getValueAtTime = expressionHelpers.getValueAtTime.bind(l2) : l2.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l2), l2.setGroupProperty = expressionHelpers.setGroupProperty, l2.loopOut = t, l2.loopIn = e, l2.smooth = i, l2.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l2), l2.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l2), l2.numKeys = 1 === s2.a ? s2.k.length : 0, l2.propertyIndex = s2.ix;
        var p2 = 0;
        return 0 !== a2 && (p2 = createTypedArray("float32", 1 === s2.a ? s2.k[0].s.length : s2.k.length)), l2._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: p2 }, expressionHelpers.searchExpressions(r2, s2, l2), l2.k && h2.addDynamicProperty(l2), l2;
      };
      var o = ShapePropertyFactory.getConstructorFunction(), h = ShapePropertyFactory.getKeyframedConstructorFunction();
      function l() {
      }
      l.prototype = { vertices: function(t2, e2) {
        this.k && this.getValue();
        var i2, r2 = this.v;
        void 0 !== e2 && (r2 = this.getValueAtTime(e2, 0));
        var s2 = r2._length, a2 = r2[t2], n2 = r2.v, o2 = createSizedArray(s2);
        for (i2 = 0; i2 < s2; i2 += 1) o2[i2] = "i" === t2 || "o" === t2 ? [a2[i2][0] - n2[i2][0], a2[i2][1] - n2[i2][1]] : [a2[i2][0], a2[i2][1]];
        return o2;
      }, points: function(t2) {
        return this.vertices("v", t2);
      }, inTangents: function(t2) {
        return this.vertices("i", t2);
      }, outTangents: function(t2) {
        return this.vertices("o", t2);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(t2, e2) {
        var i2 = this.v;
        void 0 !== e2 && (i2 = this.getValueAtTime(e2, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i2));
        for (var r2, s2 = this._segmentsLength, a2 = s2.lengths, n2 = s2.totalLength * t2, o2 = 0, h2 = a2.length, l2 = 0; o2 < h2; ) {
          if (l2 + a2[o2].addedLength > n2) {
            var p2 = o2, m = i2.c && o2 === h2 - 1 ? 0 : o2 + 1, f = (n2 - l2) / a2[o2].addedLength;
            r2 = bez.getPointInSegment(i2.v[p2], i2.v[m], i2.o[p2], i2.i[m], f, a2[o2]);
            break;
          }
          l2 += a2[o2].addedLength, o2 += 1;
        }
        return r2 || (r2 = i2.c ? [i2.v[0][0], i2.v[0][1]] : [i2.v[i2._length - 1][0], i2.v[i2._length - 1][1]]), r2;
      }, vectorOnPath: function(t2, e2, i2) {
        1 == t2 ? t2 = this.v.c : 0 == t2 && (t2 = 0.999);
        var r2 = this.pointOnPath(t2, e2), s2 = this.pointOnPath(t2 + 1e-3, e2), a2 = s2[0] - r2[0], n2 = s2[1] - r2[1], o2 = Math.sqrt(Math.pow(a2, 2) + Math.pow(n2, 2));
        return 0 === o2 ? [0, 0] : "tangent" === i2 ? [a2 / o2, n2 / o2] : [-n2 / o2, a2 / o2];
      }, tangentOnPath: function(t2, e2) {
        return this.vectorOnPath(t2, e2, "tangent");
      }, normalOnPath: function(t2, e2) {
        return this.vectorOnPath(t2, e2, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([l], o), extendPrototype([l], h), h.prototype.getValueAtTime = function(t2) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), t2 *= this.elem.globalData.frameRate, (t2 -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t2 ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t2, this.interpolateShape(t2, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }, h.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var p = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(t2, e2, i2, r2, s2) {
        var a2 = p(t2, e2, i2, r2, s2);
        return a2.propertyIndex = e2.ix, a2.lock = false, 3 === i2 ? expressionHelpers.searchExpressions(t2, e2.pt, a2) : 4 === i2 && expressionHelpers.searchExpressions(t2, e2.ks, a2), a2.k && t2.addDynamicProperty(a2), a2;
      };
    })(), TextProperty.prototype.getExpressionValue = function(t, e) {
      var i = this.calculateExpression(e);
      if (t.t !== i) {
        var r = {};
        return this.copyData(r, t), r.t = i.toString(), r.__complete = false, r;
      }
      return t;
    }, TextProperty.prototype.searchProperty = function() {
      var t = this.searchKeyframes(), e = this.searchExpressions();
      return this.kf = t || e, this.kf;
    }, TextProperty.prototype.searchExpressions = function() {
      return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), true) : null;
    };
    var ShapePathInterface = function(t, e, i) {
      var r = e.sh;
      function s(t2) {
        return "Shape" === t2 || "shape" === t2 || "Path" === t2 || "path" === t2 || "ADBE Vector Shape" === t2 || 2 === t2 ? s.path : null;
      }
      var a = propertyGroupFactory(s, i);
      return r.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(s, { path: { get: function() {
        return r.k && r.getValue(), r;
      } }, shape: { get: function() {
        return r.k && r.getValue(), r;
      } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: i } }), s;
    }, propertyGroupFactory = function(t, e) {
      return function(i) {
        return (i = void 0 === i ? 1 : i) <= 0 ? t : e(i - 1);
      };
    }, PropertyInterface = function(t, e) {
      var i = { _name: t };
      return function(t2) {
        return (t2 = void 0 === t2 ? 1 : t2) <= 0 ? i : e(t2 - 1);
      };
    }, ShapeExpressionInterface = /* @__PURE__ */ (function() {
      function t(t2, o2, c) {
        var d, u = [], y = t2 ? t2.length : 0;
        for (d = 0; d < y; d += 1) "gr" === t2[d].ty ? u.push(e(t2[d], o2[d], c)) : "fl" === t2[d].ty ? u.push(i(t2[d], o2[d], c)) : "st" === t2[d].ty ? u.push(a(t2[d], o2[d], c)) : "tm" === t2[d].ty ? u.push(n(t2[d], o2[d], c)) : "tr" === t2[d].ty || ("el" === t2[d].ty ? u.push(h(t2[d], o2[d], c)) : "sr" === t2[d].ty ? u.push(l(t2[d], o2[d], c)) : "sh" === t2[d].ty ? u.push(ShapePathInterface(t2[d], o2[d], c)) : "rc" === t2[d].ty ? u.push(p(t2[d], o2[d], c)) : "rd" === t2[d].ty ? u.push(m(t2[d], o2[d], c)) : "rp" === t2[d].ty ? u.push(f(t2[d], o2[d], c)) : "gf" === t2[d].ty ? u.push(r(t2[d], o2[d], c)) : u.push(s(t2[d], o2[d])));
        return u;
      }
      function e(e2, i2, r2) {
        var s2 = function(t2) {
          switch (t2) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return s2.content;
            default:
              return s2.transform;
          }
        };
        s2.propertyGroup = propertyGroupFactory(s2, r2);
        var a2 = (function(e3, i3, r3) {
          var s3, a3 = function(t2) {
            for (var e4 = 0, i4 = s3.length; e4 < i4; ) {
              if (s3[e4]._name === t2 || s3[e4].mn === t2 || s3[e4].propertyIndex === t2 || s3[e4].ix === t2 || s3[e4].ind === t2) return s3[e4];
              e4 += 1;
            }
            return "number" == typeof t2 ? s3[t2 - 1] : null;
          };
          a3.propertyGroup = propertyGroupFactory(a3, r3), s3 = t(e3.it, i3.it, a3.propertyGroup), a3.numProperties = s3.length;
          var n3 = o(e3.it[e3.it.length - 1], i3.it[i3.it.length - 1], a3.propertyGroup);
          return a3.transform = n3, a3.propertyIndex = e3.cix, a3._name = e3.nm, a3;
        })(e2, i2, s2.propertyGroup), n2 = o(e2.it[e2.it.length - 1], i2.it[i2.it.length - 1], s2.propertyGroup);
        return s2.content = a2, s2.transform = n2, Object.defineProperty(s2, "_name", { get: function() {
          return e2.nm;
        } }), s2.numProperties = e2.np, s2.propertyIndex = e2.ix, s2.nm = e2.nm, s2.mn = e2.mn, s2;
      }
      function i(t2, e2, i2) {
        function r2(t3) {
          return "Color" === t3 || "color" === t3 ? r2.color : "Opacity" === t3 || "opacity" === t3 ? r2.opacity : null;
        }
        return Object.defineProperties(r2, { color: { get: ExpressionPropertyInterface(e2.c) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.c.setGroupProperty(PropertyInterface("Color", i2)), e2.o.setGroupProperty(PropertyInterface("Opacity", i2)), r2;
      }
      function r(t2, e2, i2) {
        function r2(t3) {
          return "Start Point" === t3 || "start point" === t3 ? r2.startPoint : "End Point" === t3 || "end point" === t3 ? r2.endPoint : "Opacity" === t3 || "opacity" === t3 ? r2.opacity : null;
        }
        return Object.defineProperties(r2, { startPoint: { get: ExpressionPropertyInterface(e2.s) }, endPoint: { get: ExpressionPropertyInterface(e2.e) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.s.setGroupProperty(PropertyInterface("Start Point", i2)), e2.e.setGroupProperty(PropertyInterface("End Point", i2)), e2.o.setGroupProperty(PropertyInterface("Opacity", i2)), r2;
      }
      function s() {
        return function() {
          return null;
        };
      }
      function a(t2, e2, i2) {
        var r2, s2 = propertyGroupFactory(l2, i2), a2 = propertyGroupFactory(h2, s2);
        function n2(i3) {
          Object.defineProperty(h2, t2.d[i3].nm, { get: ExpressionPropertyInterface(e2.d.dataProps[i3].p) });
        }
        var o2 = t2.d ? t2.d.length : 0, h2 = {};
        for (r2 = 0; r2 < o2; r2 += 1) n2(r2), e2.d.dataProps[r2].p.setGroupProperty(a2);
        function l2(t3) {
          return "Color" === t3 || "color" === t3 ? l2.color : "Opacity" === t3 || "opacity" === t3 ? l2.opacity : "Stroke Width" === t3 || "stroke width" === t3 ? l2.strokeWidth : null;
        }
        return Object.defineProperties(l2, { color: { get: ExpressionPropertyInterface(e2.c) }, opacity: { get: ExpressionPropertyInterface(e2.o) }, strokeWidth: { get: ExpressionPropertyInterface(e2.w) }, dash: { get: function() {
          return h2;
        } }, _name: { value: t2.nm }, mn: { value: t2.mn } }), e2.c.setGroupProperty(PropertyInterface("Color", s2)), e2.o.setGroupProperty(PropertyInterface("Opacity", s2)), e2.w.setGroupProperty(PropertyInterface("Stroke Width", s2)), l2;
      }
      function n(t2, e2, i2) {
        function r2(e3) {
          return e3 === t2.e.ix || "End" === e3 || "end" === e3 ? r2.end : e3 === t2.s.ix ? r2.start : e3 === t2.o.ix ? r2.offset : null;
        }
        var s2 = propertyGroupFactory(r2, i2);
        return r2.propertyIndex = t2.ix, e2.s.setGroupProperty(PropertyInterface("Start", s2)), e2.e.setGroupProperty(PropertyInterface("End", s2)), e2.o.setGroupProperty(PropertyInterface("Offset", s2)), r2.propertyIndex = t2.ix, r2.propertyGroup = i2, Object.defineProperties(r2, { start: { get: ExpressionPropertyInterface(e2.s) }, end: { get: ExpressionPropertyInterface(e2.e) }, offset: { get: ExpressionPropertyInterface(e2.o) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      function o(t2, e2, i2) {
        function r2(e3) {
          return t2.a.ix === e3 || "Anchor Point" === e3 ? r2.anchorPoint : t2.o.ix === e3 || "Opacity" === e3 ? r2.opacity : t2.p.ix === e3 || "Position" === e3 ? r2.position : t2.r.ix === e3 || "Rotation" === e3 || "ADBE Vector Rotation" === e3 ? r2.rotation : t2.s.ix === e3 || "Scale" === e3 ? r2.scale : t2.sk && t2.sk.ix === e3 || "Skew" === e3 ? r2.skew : t2.sa && t2.sa.ix === e3 || "Skew Axis" === e3 ? r2.skewAxis : null;
        }
        var s2 = propertyGroupFactory(r2, i2);
        return e2.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s2)), e2.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s2)), e2.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s2)), e2.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s2)), e2.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s2)), e2.transform.mProps.sk && (e2.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s2)), e2.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s2))), e2.transform.op.setGroupProperty(PropertyInterface("Opacity", s2)), Object.defineProperties(r2, { opacity: { get: ExpressionPropertyInterface(e2.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(e2.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(e2.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(e2.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(e2.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(e2.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(e2.transform.mProps.sa) }, _name: { value: t2.nm } }), r2.ty = "tr", r2.mn = t2.mn, r2.propertyGroup = i2, r2;
      }
      function h(t2, e2, i2) {
        function r2(e3) {
          return t2.p.ix === e3 ? r2.position : t2.s.ix === e3 ? r2.size : null;
        }
        var s2 = propertyGroupFactory(r2, i2);
        r2.propertyIndex = t2.ix;
        var a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return a2.s.setGroupProperty(PropertyInterface("Size", s2)), a2.p.setGroupProperty(PropertyInterface("Position", s2)), Object.defineProperties(r2, { size: { get: ExpressionPropertyInterface(a2.s) }, position: { get: ExpressionPropertyInterface(a2.p) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      function l(t2, e2, i2) {
        function r2(e3) {
          return t2.p.ix === e3 ? r2.position : t2.r.ix === e3 ? r2.rotation : t2.pt.ix === e3 ? r2.points : t2.or.ix === e3 || "ADBE Vector Star Outer Radius" === e3 ? r2.outerRadius : t2.os.ix === e3 ? r2.outerRoundness : !t2.ir || t2.ir.ix !== e3 && "ADBE Vector Star Inner Radius" !== e3 ? t2.is && t2.is.ix === e3 ? r2.innerRoundness : null : r2.innerRadius;
        }
        var s2 = propertyGroupFactory(r2, i2), a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return r2.propertyIndex = t2.ix, a2.or.setGroupProperty(PropertyInterface("Outer Radius", s2)), a2.os.setGroupProperty(PropertyInterface("Outer Roundness", s2)), a2.pt.setGroupProperty(PropertyInterface("Points", s2)), a2.p.setGroupProperty(PropertyInterface("Position", s2)), a2.r.setGroupProperty(PropertyInterface("Rotation", s2)), t2.ir && (a2.ir.setGroupProperty(PropertyInterface("Inner Radius", s2)), a2.is.setGroupProperty(PropertyInterface("Inner Roundness", s2))), Object.defineProperties(r2, { position: { get: ExpressionPropertyInterface(a2.p) }, rotation: { get: ExpressionPropertyInterface(a2.r) }, points: { get: ExpressionPropertyInterface(a2.pt) }, outerRadius: { get: ExpressionPropertyInterface(a2.or) }, outerRoundness: { get: ExpressionPropertyInterface(a2.os) }, innerRadius: { get: ExpressionPropertyInterface(a2.ir) }, innerRoundness: { get: ExpressionPropertyInterface(a2.is) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      function p(t2, e2, i2) {
        function r2(e3) {
          return t2.p.ix === e3 ? r2.position : t2.r.ix === e3 ? r2.roundness : t2.s.ix === e3 || "Size" === e3 || "ADBE Vector Rect Size" === e3 ? r2.size : null;
        }
        var s2 = propertyGroupFactory(r2, i2), a2 = "tm" === e2.sh.ty ? e2.sh.prop : e2.sh;
        return r2.propertyIndex = t2.ix, a2.p.setGroupProperty(PropertyInterface("Position", s2)), a2.s.setGroupProperty(PropertyInterface("Size", s2)), a2.r.setGroupProperty(PropertyInterface("Rotation", s2)), Object.defineProperties(r2, { position: { get: ExpressionPropertyInterface(a2.p) }, roundness: { get: ExpressionPropertyInterface(a2.r) }, size: { get: ExpressionPropertyInterface(a2.s) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      function m(t2, e2, i2) {
        function r2(e3) {
          return t2.r.ix === e3 || "Round Corners 1" === e3 ? r2.radius : null;
        }
        var s2 = propertyGroupFactory(r2, i2), a2 = e2;
        return r2.propertyIndex = t2.ix, a2.rd.setGroupProperty(PropertyInterface("Radius", s2)), Object.defineProperties(r2, { radius: { get: ExpressionPropertyInterface(a2.rd) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      function f(t2, e2, i2) {
        function r2(e3) {
          return t2.c.ix === e3 || "Copies" === e3 ? r2.copies : t2.o.ix === e3 || "Offset" === e3 ? r2.offset : null;
        }
        var s2 = propertyGroupFactory(r2, i2), a2 = e2;
        return r2.propertyIndex = t2.ix, a2.c.setGroupProperty(PropertyInterface("Copies", s2)), a2.o.setGroupProperty(PropertyInterface("Offset", s2)), Object.defineProperties(r2, { copies: { get: ExpressionPropertyInterface(a2.c) }, offset: { get: ExpressionPropertyInterface(a2.o) }, _name: { value: t2.nm } }), r2.mn = t2.mn, r2;
      }
      return function(e2, i2, r2) {
        var s2;
        function a2(t2) {
          if ("number" == typeof t2) return 0 === (t2 = void 0 === t2 ? 1 : t2) ? r2 : s2[t2 - 1];
          for (var e3 = 0, i3 = s2.length; e3 < i3; ) {
            if (s2[e3]._name === t2) return s2[e3];
            e3 += 1;
          }
          return null;
        }
        return a2.propertyGroup = propertyGroupFactory(a2, (function() {
          return r2;
        })), s2 = t(e2, i2, a2.propertyGroup), a2.numProperties = s2.length, a2._name = "Contents", a2;
      };
    })(), TextExpressionInterface = function(t) {
      var e;
      function i(t2) {
        switch (t2) {
          case "ADBE Text Document":
            return i.sourceText;
          default:
            return null;
        }
      }
      return Object.defineProperty(i, "sourceText", { get: function() {
        t.textProperty.getValue();
        var i2 = t.textProperty.currentData.t;
        return void 0 !== i2 && (t.textProperty.currentData.t = void 0, (e = new String(i2)).value = i2 || new String(i2)), e;
      } }), i;
    }, LayerExpressionInterface = /* @__PURE__ */ (function() {
      function t(t2) {
        var e2 = new Matrix();
        void 0 !== t2 ? this._elem.finalTransform.mProp.getValueAtTime(t2).clone(e2) : this._elem.finalTransform.mProp.applyToMatrix(e2);
        return e2;
      }
      function e(t2, e2) {
        var i2 = this.getMatrix(e2);
        return i2.props[12] = 0, i2.props[13] = 0, i2.props[14] = 0, this.applyPoint(i2, t2);
      }
      function i(t2, e2) {
        var i2 = this.getMatrix(e2);
        return this.applyPoint(i2, t2);
      }
      function r(t2, e2) {
        var i2 = this.getMatrix(e2);
        return i2.props[12] = 0, i2.props[13] = 0, i2.props[14] = 0, this.invertPoint(i2, t2);
      }
      function s(t2, e2) {
        var i2 = this.getMatrix(e2);
        return this.invertPoint(i2, t2);
      }
      function a(t2, e2) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var i2, r2 = this._elem.hierarchy.length;
          for (i2 = 0; i2 < r2; i2 += 1) this._elem.hierarchy[i2].finalTransform.mProp.applyToMatrix(t2);
        }
        return t2.applyToPointArray(e2[0], e2[1], e2[2] || 0);
      }
      function n(t2, e2) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var i2, r2 = this._elem.hierarchy.length;
          for (i2 = 0; i2 < r2; i2 += 1) this._elem.hierarchy[i2].finalTransform.mProp.applyToMatrix(t2);
        }
        return t2.inversePoint(e2);
      }
      function o(t2) {
        var e2 = new Matrix();
        if (e2.reset(), this._elem.finalTransform.mProp.applyToMatrix(e2), this._elem.hierarchy && this._elem.hierarchy.length) {
          var i2, r2 = this._elem.hierarchy.length;
          for (i2 = 0; i2 < r2; i2 += 1) this._elem.hierarchy[i2].finalTransform.mProp.applyToMatrix(e2);
          return e2.inversePoint(t2);
        }
        return e2.inversePoint(t2);
      }
      function h() {
        return [1, 1, 1, 1];
      }
      return function(l) {
        var p;
        function m(t2) {
          switch (t2) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return m.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return p;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return m.effect;
            case "ADBE Text Properties":
              return m.textInterface;
            default:
              return null;
          }
        }
        m.getMatrix = t, m.invertPoint = n, m.applyPoint = a, m.toWorld = i, m.toWorldVec = e, m.fromWorld = s, m.fromWorldVec = r, m.toComp = i, m.fromComp = o, m.sampleImage = h, m.sourceRectAtTime = l.sourceRectAtTime.bind(l), m._elem = l;
        var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
        return Object.defineProperties(m, { hasParent: { get: function() {
          return l.hierarchy.length;
        } }, parent: { get: function() {
          return l.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(p, "rotation"), scale: getDescriptor(p, "scale"), position: getDescriptor(p, "position"), opacity: getDescriptor(p, "opacity"), anchorPoint: f, anchor_point: f, transform: { get: function() {
          return p;
        } }, active: { get: function() {
          return l.isInRange;
        } } }), m.startTime = l.data.st, m.index = l.data.ind, m.source = l.data.refId, m.height = 0 === l.data.ty ? l.data.h : 100, m.width = 0 === l.data.ty ? l.data.w : 100, m.inPoint = l.data.ip / l.comp.globalData.frameRate, m.outPoint = l.data.op / l.comp.globalData.frameRate, m._name = l.data.nm, m.registerMaskInterface = function(t2) {
          m.mask = new MaskManagerInterface(t2, l);
        }, m.registerEffectsInterface = function(t2) {
          m.effect = t2;
        }, m;
      };
    })(), FootageInterface = (dataInterfaceFactory = function(t) {
      function e(t2) {
        return "Outline" === t2 ? e.outlineInterface() : null;
      }
      return e._name = "Outline", e.outlineInterface = (function(t2) {
        var e2 = "", i = t2.getFootageData();
        function r(t3) {
          if (i[t3]) return e2 = t3, "object" == typeof (i = i[t3]) ? r : i;
          var s = t3.indexOf(e2);
          if (-1 !== s) {
            var a = parseInt(t3.substr(s + e2.length), 10);
            return "object" == typeof (i = i[a]) ? r : i;
          }
          return "";
        }
        return function() {
          return e2 = "", i = t2.getFootageData(), r;
        };
      })(t), e;
    }, function(t) {
      function e(t2) {
        return "Data" === t2 ? e.dataInterface : null;
      }
      return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e;
    }), dataInterfaceFactory, CompExpressionInterface = function(t) {
      function e(e2) {
        for (var i = 0, r = t.layers.length; i < r; ) {
          if (t.layers[i].nm === e2 || t.layers[i].ind === e2) return t.elements[i].layerInterface;
          i += 1;
        }
        return null;
      }
      return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
    }, TransformExpressionInterface = function(t) {
      function e(t2) {
        switch (t2) {
          case "scale":
          case "Scale":
          case "ADBE Scale":
          case 6:
            return e.scale;
          case "rotation":
          case "Rotation":
          case "ADBE Rotation":
          case "ADBE Rotate Z":
          case 10:
            return e.rotation;
          case "ADBE Rotate X":
            return e.xRotation;
          case "ADBE Rotate Y":
            return e.yRotation;
          case "position":
          case "Position":
          case "ADBE Position":
          case 2:
            return e.position;
          case "ADBE Position_0":
            return e.xPosition;
          case "ADBE Position_1":
            return e.yPosition;
          case "ADBE Position_2":
            return e.zPosition;
          case "anchorPoint":
          case "AnchorPoint":
          case "Anchor Point":
          case "ADBE AnchorPoint":
          case 1:
            return e.anchorPoint;
          case "opacity":
          case "Opacity":
          case 11:
            return e.opacity;
          default:
            return null;
        }
      }
      var i, r, s, a;
      return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? a = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
        return t.p ? a() : [i(), r(), s ? s() : 0];
      } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
    }, ProjectInterface = /* @__PURE__ */ (function() {
      function t(t2) {
        this.compositions.push(t2);
      }
      return function() {
        function e(t2) {
          for (var e2 = 0, i = this.compositions.length; e2 < i; ) {
            if (this.compositions[e2].data && this.compositions[e2].data.nm === t2) return this.compositions[e2].prepareFrame && this.compositions[e2].data.xt && this.compositions[e2].prepareFrame(this.currentFrame), this.compositions[e2].compInterface;
            e2 += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    })(), EffectsExpressionInterface = /* @__PURE__ */ (function() {
      function t(i, r, s, a) {
        function n(t2) {
          for (var e2 = i.ef, r2 = 0, s2 = e2.length; r2 < s2; ) {
            if (t2 === e2[r2].nm || t2 === e2[r2].mn || t2 === e2[r2].ix) return 5 === e2[r2].ty ? l[r2] : l[r2]();
            r2 += 1;
          }
          throw new Error();
        }
        var o, h = propertyGroupFactory(n, s), l = [], p = i.ef.length;
        for (o = 0; o < p; o += 1) 5 === i.ef[o].ty ? l.push(t(i.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, a)) : l.push(e(r.effectElements[o], i.ef[o].ty, a, h));
        return "ADBE Color Control" === i.mn && Object.defineProperty(n, "color", { get: function() {
          return l[0]();
        } }), Object.defineProperties(n, { numProperties: { get: function() {
          return i.np;
        } }, _name: { value: i.nm }, propertyGroup: { value: h } }), n.enabled = 0 !== i.en, n.active = n.enabled, n;
      }
      function e(t2, e2, i, r) {
        var s = ExpressionPropertyInterface(t2.p);
        return t2.p.setGroupProperty && t2.p.setGroupProperty(PropertyInterface("", r)), function() {
          return 10 === e2 ? i.comp.compInterface(t2.p.v) : s();
        };
      }
      return { createEffectsInterface: function(e2, i) {
        if (e2.effectsManager) {
          var r, s = [], a = e2.data.ef, n = e2.effectsManager.effectElements.length;
          for (r = 0; r < n; r += 1) s.push(t(a[r], e2.effectsManager.effectElements[r], i, e2));
          var o = e2.data.ef || [], h = function(t2) {
            for (r = 0, n = o.length; r < n; ) {
              if (t2 === o[r].nm || t2 === o[r].mn || t2 === o[r].ix) return s[r];
              r += 1;
            }
            return null;
          };
          return Object.defineProperty(h, "numProperties", { get: function() {
            return o.length;
          } }), h;
        }
        return null;
      } };
    })(), MaskManagerInterface = (function() {
      function t(t2, e) {
        this._mask = t2, this._data = e;
      }
      Object.defineProperty(t.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      } });
      return function(e) {
        var i, r = createSizedArray(e.viewData.length), s = e.viewData.length;
        for (i = 0; i < s; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
        return function(t2) {
          for (i = 0; i < s; ) {
            if (e.masksProperties[i].nm === t2) return r[i];
            i += 1;
          }
          return null;
        };
      };
    })(), ExpressionPropertyInterface = /* @__PURE__ */ (function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function i(t2, e2, i2) {
        Object.defineProperty(t2, "velocity", { get: function() {
          return e2.getVelocityAtTime(e2.comp.currentFrame);
        } }), t2.numKeys = e2.keyframes ? e2.keyframes.length : 0, t2.key = function(r2) {
          if (!t2.numKeys) return 0;
          var s = "";
          s = "s" in e2.keyframes[r2 - 1] ? e2.keyframes[r2 - 1].s : "e" in e2.keyframes[r2 - 2] ? e2.keyframes[r2 - 2].e : e2.keyframes[r2 - 2].s;
          var a = "unidimensional" === i2 ? new Number(s) : Object.assign({}, s);
          return a.time = e2.keyframes[r2 - 1].t / e2.elem.comp.globalData.frameRate, a.value = "unidimensional" === i2 ? s[0] : s, a;
        }, t2.valueAtTime = e2.getValueAtTime, t2.speedAtTime = e2.getSpeedAtTime, t2.velocityAtTime = e2.getVelocityAtTime, t2.propertyGroup = e2.propertyGroup;
      }
      function r() {
        return t;
      }
      return function(s) {
        return s ? "unidimensional" === s.propType ? (function(e2) {
          e2 && "pv" in e2 || (e2 = t);
          var r2 = 1 / e2.mult, s2 = e2.pv * r2, a = new Number(s2);
          return a.value = s2, i(a, e2, "unidimensional"), function() {
            return e2.k && e2.getValue(), s2 = e2.v * r2, a.value !== s2 && ((a = new Number(s2)).value = s2, i(a, e2, "unidimensional")), a;
          };
        })(s) : (function(t2) {
          t2 && "pv" in t2 || (t2 = e);
          var r2 = 1 / t2.mult, s2 = t2.data && t2.data.l || t2.pv.length, a = createTypedArray("float32", s2), n = createTypedArray("float32", s2);
          return a.value = n, i(a, t2, "multidimensional"), function() {
            t2.k && t2.getValue();
            for (var e2 = 0; e2 < s2; e2 += 1) n[e2] = t2.v[e2] * r2, a[e2] = n[e2];
            return a;
          };
        })(s) : r;
      };
    })(), TextExpressionSelectorPropFactory = /* @__PURE__ */ (function() {
      function t(t2, e) {
        return this.textIndex = t2 + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v;
      }
      return function(e, i) {
        this.pv = 1, this.comp = e.comp, this.elem = e, this.mult = 0.01, this.propType = "textSelector", this.textTotal = i.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = true, this.x = true, this.getValue = ExpressionManager.initiateExpression.bind(this)(e, i, this), this.getMult = t, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty;
      };
    })(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
    function SliderEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function AngleEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function ColorEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }
    function PointEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }
    function LayerIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function MaskIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function CheckboxEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var i, r = t.ef || [];
      this.effectElements = [];
      var s, a = r.length;
      for (i = 0; i < a; i += 1) s = new GroupEffect(r[i], e), this.effectElements.push(s);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    TextSelectorProp.getTextSelectorProp = function(t, e, i) {
      return 1 === e.t ? new TextExpressionSelectorPropFactory(t, e, i) : propertyGetTextProp(t, e, i);
    }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      var i;
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, s = this.data.ef.length, a = this.data.ef;
      for (i = 0; i < s; i += 1) {
        switch (r = null, a[i].ty) {
          case 0:
            r = new SliderEffect(a[i], e, this);
            break;
          case 1:
            r = new AngleEffect(a[i], e, this);
            break;
          case 2:
            r = new ColorEffect(a[i], e, this);
            break;
          case 3:
            r = new PointEffect(a[i], e, this);
            break;
          case 4:
          case 7:
            r = new CheckboxEffect(a[i], e, this);
            break;
          case 10:
            r = new LayerIndexEffect(a[i], e, this);
            break;
          case 11:
            r = new MaskIndexEffect(a[i], e, this);
            break;
          case 5:
            r = new EffectsManager(a[i], e, this);
            break;
          default:
            r = new NoValueEffect(a[i], e, this);
        }
        r && this.effectElements.push(r);
      }
    };
    var lottie = {};
    function setLocationHref(t) {
      locationHref = t;
    }
    function searchAnimations() {
      true === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      subframeEnabled = t;
    }
    function setIDPrefix(t) {
      idPrefix = t;
    }
    function loadAnimation(t) {
      return true === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if ("string" == typeof t) switch (t) {
        case "high":
          defaultCurveSegments = 200;
          break;
        default:
        case "medium":
          defaultCurveSegments = 50;
          break;
        case "low":
          defaultCurveSegments = 10;
      }
      else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
      roundValues(!(defaultCurveSegments >= 50));
    }
    function inBrowser() {
      return "undefined" != typeof navigator;
    }
    function installPlugin(t, e) {
      "expressions" === t && (expressionsPlugin = e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    function checkReady() {
      "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
        var r = e[i].split("=");
        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
      }
      return null;
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocationHref, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.setIDPrefix = setIDPrefix, lottie.__getFactory = getFactory, lottie.version = "5.7.13";
    var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "", queryString;
    if (standalone) {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src.replace(/^[^\?]+\??/, ""), renderer = getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottie;
  }));
}, function(t, e, i) {
  "use strict";
  i.r(e);
  var r = i(0);
  function s(t2) {
    return null !== t2 && "object" == typeof t2;
  }
  function a(t2, e2) {
    const i2 = Array.isArray(e2) ? e2 : e2.split(".");
    let r2 = t2;
    for (const t3 of i2) {
      if (!s(r2)) return false;
      if (!(t3 in r2)) return false;
      r2 = r2[t3];
    }
    return true;
  }
  function n(t2, e2, i2) {
    const r2 = Array.isArray(e2) ? e2 : e2.split(".");
    let a2 = t2;
    for (const t3 of r2) {
      if (!s(a2)) return i2;
      if (!(t3 in a2)) return i2;
      a2 = a2[t3];
    }
    return void 0 === a2 ? i2 : a2;
  }
  function o(t2, e2, i2) {
    let r2 = t2;
    const s2 = Array.isArray(e2) ? e2 : e2.split(".");
    for (let t3 = 0; t3 < s2.length; ++t3) t3 === s2.length - 1 ? r2[s2[t3]] = i2 : r2 = r2[s2[t3]];
  }
  function h(t2) {
    return Math.round(t2 / 255 * 1e3) / 1e3;
  }
  function l(t2) {
    const { r: e2, g: i2, b: r2 } = (function(t3) {
      let e3 = parseInt("#" != t3[0] ? t3 : t3.substring(1), 16);
      return { r: e3 >> 16 & 255, g: e3 >> 8 & 255, b: 255 & e3 };
    })(t2);
    return [h(e2), h(i2), h(r2)];
  }
  function p(t2, e2, i2, r2, s2) {
    for (const a2 of e2) {
      if (a2.name.toLowerCase() !== i2.toLowerCase()) continue;
      const e3 = a2.path + (s2 ? "." + s2 : "");
      let n2 = 1;
      "slider" === a2.type ? n2 = a2.value / 50 : "point" === a2.type && (n2 = (a2.value[0] + a2.value[1]) / 2 / 50), o(t2, e3, r2 * n2);
    }
  }
  let m;
  const f = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map();
  async function y(t2) {
    if (d.has(t2)) return;
    const e2 = u.get(t2);
    if (e2) await e2;
    else if (void 0 === e2) {
      const e3 = (async function(t3) {
        const e4 = await fetch(t3);
        return await e4.json();
      })(t2);
      u.set(t2, e3);
      const i2 = await e3;
      u.delete(t2), d.set(t2, i2);
    }
  }
  const g = ["colors", "src", "icon", "trigger", "speed", "target", "stroke", "scale", "axis-x", "axis-y"];
  class v extends HTMLElement {
    constructor() {
      super(), this.isReady = false, this.root = this.attachShadow({ mode: "open" });
    }
    static registerLoader(t2) {
      !(function(t3) {
        m = t3;
      })(t2);
    }
    static registerIcon(t2, e2) {
      !(function(t3, e3) {
        d.set(t3, e3);
        for (const e4 of f) e4.notify(t3, "icon");
      })(t2, e2);
    }
    static registerTrigger(t2, e2) {
      !(function(t3, e3) {
        c.set(t3, e3);
        for (const e4 of f) e4.notify(t3, "trigger");
      })(t2, e2);
    }
    connectedCallback() {
      var t2;
      t2 = this, f.add(t2), this.isReady || this.init();
    }
    disconnectedCallback() {
      var t2;
      this.unregisterLottie(), t2 = this, f.delete(t2);
    }
    attributeChangedCallback(t2, e2, i2) {
      if (this[t2] = i2, "axis-x" === t2) this.axisXChanged();
      else if ("axis-y" === t2) this.axisYChanged();
      else {
        const e3 = this[t2 + "Changed"];
        e3 && e3.call(this);
      }
    }
    init() {
      if (this.isReady) return;
      this.isReady = true;
      const t2 = document.createElement("style");
      t2.innerHTML = "\n    :host {\n      display: inline-flex;\n      width: 32px;\n      height: 32px;\n      align-items: center;\n      justify-content: center;\n      position: relative;\n      vertical-align: middle;\n      fill: currentcolor;\n      stroke: none;\n      overflow: hidden;\n    }\n\n    :host(.inherit-color) svg path[fill] {\n      fill: currentColor;\n    }\n\n    :host(.inherit-color) svg path[stroke] {\n      stroke: currentColor;\n    }\n\n    svg {\n        pointer-events: none;\n        display: block;\n    }\n\n    div {    \n        width: 100%;\n        height: 100%;\n    }\n\n    div.slot {\n        position: absolute;\n        left: 0;\n        top: 0;\n        z-index: 2;\n    }\n", this.root.appendChild(t2);
      const e2 = document.createElement("div");
      e2.innerHTML = "<slot></slot>", e2.classList.add("slot"), this.root.appendChild(e2);
      const i2 = document.createElement("div");
      this.root.appendChild(i2), this.registerLottie();
    }
    registerLottie() {
      let t2 = this.iconData;
      if (t2) {
        if (this.colors || this.stroke || this.scale || this["axis-x"] || this["axis-y"]) {
          const i2 = (function(t3) {
            const e3 = [];
            if (!t3 || !t3.layers) return e3;
            for (const [i3, r2] of Object.entries(t3.layers)) if (r2.nm && r2.nm.toLowerCase().includes("change") && r2.ef) for (const [t4, s2] of Object.entries(r2.ef)) {
              const r3 = "ef.0.v.k", o2 = `layers.${i3}.ef.${t4}.${r3}`;
              if (!a(s2, r3)) continue;
              let h2 = "unkown";
              if ("ADBE Color Control" === s2.mn ? h2 = "color" : "ADBE Slider Control" === s2.mn ? h2 = "slider" : "ADBE Point Control" === s2.mn ? h2 = "point" : "ADBE Checkbox Control" === s2.mn && (h2 = "checkbox"), "unkown" === h2) continue;
              const l2 = s2.nm, p2 = n(s2, r3);
              e3.push({ name: l2, path: o2, value: p2, type: h2 });
            }
            return e3;
          })(t2);
          e2 = t2, t2 = JSON.parse(JSON.stringify(e2)), this.colors && (function(t3, e3, i3) {
            const r2 = i3.split(",");
            if (r2.length) for (const i4 of r2) {
              const r3 = i4.split(":");
              if (2 === r3.length) for (const i5 of e3) "color" === i5.type && i5.name.toLowerCase() === r3[0].toLowerCase() && o(t3, i5.path, l(r3[1]));
            }
          })(t2, i2, this.colors), this.stroke && p(t2, i2, "stroke", this.stroke), this.scale && p(t2, i2, "scale", this.scale), this["axis-x"] && p(t2, i2, "axis", this["axis-x"], "0"), this["axis-y"] && p(t2, i2, "axis", this["axis-y"], "1");
        }
        var e2;
        this.lottie = (function(t3) {
          if (!m) throw new Error("Unregistered Lottie.");
          return m(t3);
        })({ container: this.container, renderer: "svg", loop: false, autoplay: false, animationData: t2, rendererSettings: { preserveAspectRatio: "xMidYMid meet", progressiveLoad: true, hideOnTransparent: false } }), this.lottie.setSpeed(this.animationSpeed), this.lottie.addEventListener("complete", () => {
          this.dispatchEvent(new CustomEvent("animation-complete"));
        }), this.triggerChanged();
      }
    }
    unregisterLottie() {
      this.myConnectedTrigger && (this.myConnectedTrigger.disconnectedCallback(), this.myConnectedTrigger = void 0), this.lottie && (this.lottie.destroy(), this.lottie = void 0, this.container.innerHTML = "");
    }
    notify(t2, e2) {
      this[e2] === t2 && ("icon" === e2 ? (this.lottie && this.unregisterLottie(), this.registerLottie()) : "trigger" !== e2 || this.myConnectedTrigger || this.triggerChanged());
    }
    triggerChanged() {
      if (this.myConnectedTrigger && (this.myConnectedTrigger.disconnectedCallback(), this.myConnectedTrigger = void 0), this.trigger && this.lottie) {
        const e2 = (t2 = this.trigger, c.get(t2));
        if (e2) {
          const t3 = this.target ? this.closest(this.target) : null;
          this.myConnectedTrigger = new e2(this, t3 || this, this.lottie), this.myConnectedTrigger.connectedCallback();
        }
      }
      var t2;
    }
    colorsChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    strokeChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    scaleChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    axisXChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    axisYChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    speedChanged() {
      this.lottie && this.lottie.setSpeed(this.animationSpeed);
    }
    iconChanged() {
      this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    async srcChanged() {
      this.src && await y(this.src), this.isReady && (this.unregisterLottie(), this.registerLottie());
    }
    get iconData() {
      return this.icon && "object" == typeof this.icon ? this.icon : (t2 = this.icon || this.src, d.get(t2));
      var t2;
    }
    get connectedTrigger() {
      return this.myConnectedTrigger;
    }
    get container() {
      return this.root.lastElementChild;
    }
    get animationSpeed() {
      return this.speed && parseFloat(this.speed) || 1;
    }
    static get observedAttributes() {
      return g;
    }
  }
  class b {
    constructor(t2, e2, i2) {
      this.element = t2, this.target = e2, this.lottie = i2, this.myInAnimation = false, this.myIsReady = false, this.myConnected = false, this.myEnterBound = this.enter.bind(this), this.myLeaveBound = this.leave.bind(this);
      const r2 = () => {
        this.myIsReady || (this.myIsReady = true, this.ready());
      };
      i2.addEventListener("complete", () => {
        this.myInAnimation = false, this.complete();
      }), i2.addEventListener("config_ready", r2), this.lottie.isLoaded && r2();
    }
    connectedCallback() {
      this.myConnected = true;
    }
    disconnectedCallback() {
      this.myConnected = false;
    }
    ready() {
    }
    complete() {
    }
    enter() {
    }
    leave() {
    }
    play() {
      this.myInAnimation = true, this.lottie.play();
    }
    playFromBegining() {
      this.myInAnimation = true, this.lottie.goToAndPlay(0);
    }
    stop() {
      this.lottie.stop();
    }
    goToFrame(t2) {
      this.lottie.goToAndStop(t2, true);
    }
    goToFirstFrame() {
      this.goToFrame(0);
    }
    goToLastFrame() {
      this.goToFrame(Math.max(0, this.lottie.getDuration(true) - 1));
    }
    setDirection(t2) {
      this.lottie.setDirection(t2);
    }
    setLoop(t2) {
      this.lottie.loop = t2;
    }
    setSpeed(t2) {
      this.lottie.setSpeed(t2);
    }
    get inAnimation() {
      return this.myInAnimation;
    }
    get isReady() {
      return this.myIsReady;
    }
    get enterBound() {
      return this.myEnterBound;
    }
    get leaveBound() {
      return this.myLeaveBound;
    }
    get connected() {
      return this.myConnected;
    }
  }
  const P = ["mousedown", "touchstart"];
  class E extends b {
    connectedCallback() {
      super.connectedCallback();
      for (const t2 of P) {
        const e2 = "touchstart" === t2 ? { passive: true } : void 0;
        this.target.addEventListener(t2, this.enterBound, e2);
      }
    }
    disconnectedCallback() {
      for (const t2 of P) this.target.removeEventListener(t2, this.enterBound);
      super.disconnectedCallback();
    }
    enter() {
      this.inAnimation || this.playFromBegining();
    }
  }
  class x extends b {
    connectedCallback() {
      super.connectedCallback(), this.target.addEventListener("mouseenter", this.enterBound);
    }
    disconnectedCallback() {
      this.target.removeEventListener("mouseenter", this.enterBound), super.disconnectedCallback();
    }
    enter() {
      this.inAnimation || this.playFromBegining();
    }
  }
  class S extends b {
    connectedCallback() {
      super.connectedCallback(), this.target.addEventListener("mouseenter", this.enterBound), this.target.addEventListener("mouseleave", this.leaveBound);
    }
    disconnectedCallback() {
      this.target.removeEventListener("mouseenter", this.enterBound), this.target.removeEventListener("mouseleave", this.leaveBound), this.setDirection(1), super.disconnectedCallback();
    }
    enter() {
      this.setDirection(1), this.play();
    }
    leave() {
      this.setDirection(-1), this.play();
    }
  }
  class C extends b {
    connectedCallback() {
      super.connectedCallback(), this.target.addEventListener("mouseenter", this.enterBound);
    }
    disconnectedCallback() {
      this.target.removeEventListener("mouseenter", this.enterBound), this.setDirection(1), super.disconnectedCallback();
    }
    enter() {
      this.setDirection(1), this.play();
    }
    complete() {
      this.setDirection(-1), this.play();
    }
  }
  class A extends b {
    constructor() {
      super(...arguments), this.playDelay = null, this.active = false;
    }
    connectedCallback() {
      super.connectedCallback(), this.target.addEventListener("mouseenter", this.enterBound), this.target.addEventListener("mouseleave", this.leaveBound);
    }
    disconnectedCallback() {
      this.resetPlayDelayTimer(), this.target.removeEventListener("mouseenter", this.enterBound), this.target.removeEventListener("mouseleave", this.leaveBound), this.setDirection(1), super.disconnectedCallback();
    }
    enter() {
      this.active = true, this.inAnimation || this.playFromBegining();
    }
    leave() {
      this.active = false;
    }
    complete() {
      this.resetPlayDelayTimer(), this.active && this.connected && (this.delay > 0 ? this.playDelay = setTimeout(() => {
        this.playFromBegining();
      }, this.delay) : this.playFromBegining());
    }
    resetPlayDelayTimer() {
      this.playDelay && (clearTimeout(this.playDelay), this.playDelay = null);
    }
    get delay() {
      return this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    }
  }
  class T extends b {
    constructor() {
      super(...arguments), this.playDelay = null;
    }
    ready() {
      this.play();
    }
    disconnectedCallback() {
      this.resetPlayDelayTimer(), super.disconnectedCallback();
    }
    complete() {
      this.resetPlayDelayTimer(), this.connected && (this.delay > 0 ? this.playDelay = setTimeout(() => {
        this.playFromBegining();
      }, this.delay) : this.playFromBegining());
    }
    resetPlayDelayTimer() {
      this.playDelay && (clearTimeout(this.playDelay), this.playDelay = null);
    }
    get delay() {
      return this.element.hasAttribute("delay") ? +(this.element.getAttribute("delay") || 0) : 0;
    }
  }
  var _;
  _ = r.loadAnimation, v.registerLoader(_), v.registerTrigger("click", E), v.registerTrigger("hover", x), v.registerTrigger("loop", T), v.registerTrigger("loop-on-hover", A), v.registerTrigger("morph", S), v.registerTrigger("morph-two-way", C), customElements.get && customElements.get("lord-icon") || customElements.define("lord-icon", v);
}]);
(document.querySelectorAll("[toast-list]") || document.querySelectorAll("[data-choices]") || document.querySelectorAll("[data-provider]")) && (document.writeln("<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/toastify-js'></script>"), document.writeln("<script type='text/javascript' src='assets/libs/choices.js/public/assets/scripts/choices.min.js'></script>"), document.writeln("<script type='text/javascript' src='assets/libs/flatpickr/flatpickr.min.js'></script>"));
!(function() {
  "use strict";
  var t, a, e;
  sessionStorage.getItem("defaultAttribute") && (t = document.documentElement.attributes, a = {}, Object.entries(t).forEach(function(t2) {
    var e2;
    t2[1] && t2[1].nodeName && "undefined" != t2[1].nodeName && (e2 = t2[1].nodeName, a[e2] = t2[1].nodeValue);
  }), sessionStorage.getItem("defaultAttribute") !== JSON.stringify(a) ? (sessionStorage.clear(), window.location.reload()) : ((e = {})["data-layout"] = sessionStorage.getItem("data-layout"), e["data-sidebar-size"] = sessionStorage.getItem("data-sidebar-size"), e["data-layout-mode"] = sessionStorage.getItem("data-layout-mode"), e["data-layout-width"] = sessionStorage.getItem("data-layout-width"), e["data-sidebar"] = sessionStorage.getItem("data-sidebar"), e["data-sidebar-image"] = sessionStorage.getItem("data-sidebar-image"), e["data-layout-direction"] = sessionStorage.getItem("data-layout-direction"), e["data-layout-position"] = sessionStorage.getItem("data-layout-position"), e["data-layout-style"] = sessionStorage.getItem("data-layout-style"), e["data-topbar"] = sessionStorage.getItem("data-topbar"), Object.keys(e).forEach(function(t2) {
    e[t2] && e[t2] && document.documentElement.setAttribute(t2, e[t2]);
  })));
})();
!(function() {
  var a, n, o, s, t, d, e, l, r, i, m, c = document.querySelector(".navbar-menu").innerHTML, u = 7, g = "en", b = localStorage.getItem("language");
  function y(e2) {
    document.getElementById("header-lang-img") && ("en" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/us.svg" : "sp" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/spain.svg" : "gr" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/germany.svg" : "it" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/italy.svg" : "ru" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/russia.svg" : "ch" == e2 ? document.getElementById("header-lang-img").src = "assets/images/flags/china.svg" : "fr" == e2 && (document.getElementById("header-lang-img").src = "assets/images/flags/french.svg"), localStorage.setItem("language", e2), b = localStorage.getItem("language"), (function() {
      null == b && y(g);
      var e3 = new XMLHttpRequest();
      e3.open("GET", "assets/lang/" + b + ".json"), e3.onreadystatechange = function() {
        var a2;
        4 === this.readyState && 200 === this.status && (a2 = JSON.parse(this.responseText), Object.keys(a2).forEach(function(t2) {
          var e4 = document.querySelectorAll("[data-key='" + t2 + "']");
          Array.from(e4).forEach(function(e5) {
            e5.textContent = a2[t2];
          });
        }));
      }, e3.send();
    })());
  }
  function p() {
    var e2;
    document.querySelectorAll(".navbar-nav .collapse") && (e2 = document.querySelectorAll(".navbar-nav .collapse"), Array.from(e2).forEach(function(a2) {
      var n2 = new bootstrap.Collapse(a2, { toggle: false });
      a2.addEventListener("show.bs.collapse", function(e3) {
        e3.stopPropagation();
        var t2, e3 = a2.parentElement.closest(".collapse");
        e3 ? (t2 = e3.querySelectorAll(".collapse"), Array.from(t2).forEach(function(e4) {
          e4 = bootstrap.Collapse.getInstance(e4);
          e4 !== n2 && e4.hide();
        })) : (t2 = (function(e4) {
          for (var t3 = [], a3 = e4.parentNode.firstChild; a3; ) 1 === a3.nodeType && a3 !== e4 && t3.push(a3), a3 = a3.nextSibling;
          return t3;
        })(a2.parentElement), Array.from(t2).forEach(function(e4) {
          2 < e4.childNodes.length && e4.firstElementChild.setAttribute("aria-expanded", "false");
          e4 = e4.querySelectorAll("*[id]");
          Array.from(e4).forEach(function(e5) {
            e5.classList.remove("show"), 2 < e5.childNodes.length && (e5 = e5.querySelectorAll("ul li a"), Array.from(e5).forEach(function(e6) {
              e6.hasAttribute("aria-expanded") && e6.setAttribute("aria-expanded", "false");
            }));
          });
        }));
      }), a2.addEventListener("hide.bs.collapse", function(e3) {
        e3.stopPropagation();
        e3 = a2.querySelectorAll(".collapse");
        Array.from(e3).forEach(function(e4) {
          childCollapseInstance = bootstrap.Collapse.getInstance(e4), childCollapseInstance.hide();
        });
      });
    }));
  }
  function E() {
    var n2, e2, t2 = document.documentElement.getAttribute("data-layout"), a2 = sessionStorage.getItem("defaultAttribute"), a2 = JSON.parse(a2);
    !a2 || "twocolumn" != t2 && "twocolumn" != a2["data-layout"] || (document.querySelector(".navbar-menu").innerHTML = c, (n2 = document.createElement("ul")).innerHTML = '<a href="#" class="logo"><img src="assets/images/logo-sm.png" alt="" height="22"></a>', Array.from(document.getElementById("navbar-nav").querySelectorAll(".menu-link")).forEach(function(e3) {
      n2.className = "twocolumn-iconview";
      var t3 = document.createElement("li"), a3 = e3;
      Array.from(a3.querySelectorAll("span")).forEach(function(e4) {
        e4.classList.add("d-none");
      }), e3.parentElement.classList.contains("twocolumn-item-show") && e3.classList.add("active"), t3.appendChild(a3), n2.appendChild(t3), a3.classList.contains("nav-link") && a3.classList.replace("nav-link", "nav-icon"), a3.classList.remove("collapsed", "menu-link");
    }), (a2 = (a2 = "/" == location.pathname ? "index.html" : location.pathname.substring(1)).substring(a2.lastIndexOf("/") + 1)) && (!(a2 = document.getElementById("navbar-nav").querySelector('[href="' + a2 + '"]')) || (e2 = a2.closest(".collapse.menu-dropdown")) && (e2.classList.add("show"), e2.parentElement.children[0].classList.add("active"), e2.parentElement.children[0].setAttribute("aria-expanded", "true"), e2.parentElement.closest(".collapse.menu-dropdown") && (e2.parentElement.closest(".collapse").classList.add("show"), e2.parentElement.closest(".collapse").previousElementSibling && e2.parentElement.closest(".collapse").previousElementSibling.classList.add("active"), e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown") && (e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").classList.add("show"), e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling && e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active"))))), document.getElementById("two-column-menu").innerHTML = n2.outerHTML, Array.from(document.querySelector("#two-column-menu ul").querySelectorAll("li a")).forEach(function(a3) {
      var n3 = (n3 = "/" == location.pathname ? "index.html" : location.pathname.substring(1)).substring(n3.lastIndexOf("/") + 1);
      a3.addEventListener("click", function(e3) {
        var t3;
        (n3 != "/" + a3.getAttribute("href") || a3.getAttribute("data-bs-toggle")) && document.body.classList.contains("twocolumn-panel") && document.body.classList.remove("twocolumn-panel"), document.getElementById("navbar-nav").classList.remove("twocolumn-nav-hide"), document.querySelector(".hamburger-icon").classList.remove("open"), (e3.target && e3.target.matches("a.nav-icon") || e3.target && e3.target.matches("i")) && (null !== document.querySelector("#two-column-menu ul .nav-icon.active") && document.querySelector("#two-column-menu ul .nav-icon.active").classList.remove("active"), (e3.target.matches("i") ? e3.target.closest("a") : e3.target).classList.add("active"), 0 < (t3 = document.getElementsByClassName("twocolumn-item-show")).length && t3[0].classList.remove("twocolumn-item-show"), e3 = (e3.target.matches("i") ? e3.target.closest("a") : e3.target).getAttribute("href").slice(1), document.getElementById(e3) && document.getElementById(e3).parentElement.classList.add("twocolumn-item-show"));
      }), n3 != "/" + a3.getAttribute("href") || a3.getAttribute("data-bs-toggle") || (a3.classList.add("active"), document.getElementById("navbar-nav").classList.add("twocolumn-nav-hide"), document.querySelector(".hamburger-icon") && document.querySelector(".hamburger-icon").classList.add("open"));
    }), "horizontal" !== document.documentElement.getAttribute("data-layout") && ((e2 = new SimpleBar(document.getElementById("navbar-nav"))) && e2.getContentElement(), (e2 = new SimpleBar(document.getElementsByClassName("twocolumn-iconview")[0])) && e2.getContentElement()));
  }
  function f(e2) {
    if (e2) {
      var t2 = e2.offsetTop, a2 = e2.offsetLeft, n2 = e2.offsetWidth, o2 = e2.offsetHeight;
      if (e2.offsetParent) for (; e2.offsetParent; ) t2 += (e2 = e2.offsetParent).offsetTop, a2 += e2.offsetLeft;
      return t2 >= window.pageYOffset && a2 >= window.pageXOffset && t2 + o2 <= window.pageYOffset + window.innerHeight && a2 + n2 <= window.pageXOffset + window.innerWidth;
    }
  }
  function h() {
    "vertical" == document.documentElement.getAttribute("data-layout") && (document.getElementById("two-column-menu").innerHTML = "", document.querySelector(".navbar-menu").innerHTML = c, document.getElementById("scrollbar").setAttribute("data-simplebar", ""), document.getElementById("navbar-nav").setAttribute("data-simplebar", ""), document.getElementById("scrollbar").classList.add("h-100")), "twocolumn" == document.documentElement.getAttribute("data-layout") && (document.getElementById("scrollbar").removeAttribute("data-simplebar"), document.getElementById("scrollbar").classList.remove("h-100")), "horizontal" == document.documentElement.getAttribute("data-layout") && B();
  }
  function v() {
    feather.replace();
    var e2 = document.documentElement.clientWidth;
    e2 < 1025 && 767 < e2 ? (document.body.classList.remove("twocolumn-panel"), "twocolumn" == sessionStorage.getItem("data-layout") && (document.documentElement.setAttribute("data-layout", "twocolumn"), document.getElementById("customizer-layout03") && document.getElementById("customizer-layout03").click(), E(), A(), p()), "vertical" == sessionStorage.getItem("data-layout") && document.documentElement.setAttribute("data-sidebar-size", "sm"), document.querySelector(".hamburger-icon") && document.querySelector(".hamburger-icon").classList.add("open")) : 1025 <= e2 ? (document.body.classList.remove("twocolumn-panel"), "twocolumn" == sessionStorage.getItem("data-layout") && (document.documentElement.setAttribute("data-layout", "twocolumn"), document.getElementById("customizer-layout03") && document.getElementById("customizer-layout03").click(), E(), A(), p()), "vertical" == sessionStorage.getItem("data-layout") && document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size")), document.querySelector(".hamburger-icon") && document.querySelector(".hamburger-icon").classList.remove("open")) : e2 <= 767 && (document.body.classList.remove("vertical-sidebar-enable"), document.body.classList.add("twocolumn-panel"), "twocolumn" == sessionStorage.getItem("data-layout") && (document.documentElement.setAttribute("data-layout", "vertical"), z("vertical"), p()), "horizontal" != sessionStorage.getItem("data-layout") && document.documentElement.setAttribute("data-sidebar-size", "lg"), document.querySelector(".hamburger-icon") && document.querySelector(".hamburger-icon").classList.add("open"));
    e2 = document.querySelectorAll("#navbar-nav > li.nav-item");
    Array.from(e2).forEach(function(e3) {
      e3.addEventListener("click", S.bind(this), false), e3.addEventListener("mouseover", S.bind(this), false);
    });
  }
  function S(e2) {
    if (e2.target && e2.target.matches("a.nav-link span")) {
      if (0 == f(e2.target.parentElement.nextElementSibling)) {
        e2.target.parentElement.nextElementSibling.classList.add("dropdown-custom-right"), e2.target.parentElement.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right");
        var t2 = e2.target.parentElement.nextElementSibling;
        Array.from(t2.querySelectorAll(".menu-dropdown")).forEach(function(e3) {
          e3.classList.add("dropdown-custom-right");
        });
      } else if (1 == f(e2.target.parentElement.nextElementSibling) && 1848 <= window.innerWidth) for (var a2 = document.getElementsByClassName("dropdown-custom-right"); 0 < a2.length; ) a2[0].classList.remove("dropdown-custom-right");
    }
    if (e2.target && e2.target.matches("a.nav-link")) {
      if (0 == f(e2.target.nextElementSibling)) {
        e2.target.nextElementSibling.classList.add("dropdown-custom-right"), e2.target.parentElement.parentElement.parentElement.classList.add("dropdown-custom-right");
        t2 = e2.target.nextElementSibling;
        Array.from(t2.querySelectorAll(".menu-dropdown")).forEach(function(e3) {
          e3.classList.add("dropdown-custom-right");
        });
      } else if (1 == f(e2.target.nextElementSibling) && 1848 <= window.innerWidth) for (a2 = document.getElementsByClassName("dropdown-custom-right"); 0 < a2.length; ) a2[0].classList.remove("dropdown-custom-right");
    }
  }
  function w() {
    var e2 = document.documentElement.clientWidth;
    767 < e2 && document.querySelector(".hamburger-icon").classList.toggle("open"), "horizontal" === document.documentElement.getAttribute("data-layout") && (document.body.classList.contains("menu") ? document.body.classList.remove("menu") : document.body.classList.add("menu")), "vertical" === document.documentElement.getAttribute("data-layout") && (e2 < 1025 && 767 < e2 ? (document.body.classList.remove("vertical-sidebar-enable"), "sm" == document.documentElement.getAttribute("data-sidebar-size") ? document.documentElement.setAttribute("data-sidebar-size", "") : document.documentElement.setAttribute("data-sidebar-size", "sm")) : 1025 < e2 ? (document.body.classList.remove("vertical-sidebar-enable"), "lg" == document.documentElement.getAttribute("data-sidebar-size") ? document.documentElement.setAttribute("data-sidebar-size", "sm") : document.documentElement.setAttribute("data-sidebar-size", "lg")) : e2 <= 767 && (document.body.classList.add("vertical-sidebar-enable"), document.documentElement.setAttribute("data-sidebar-size", "lg"))), "twocolumn" == document.documentElement.getAttribute("data-layout") && (document.body.classList.contains("twocolumn-panel") ? document.body.classList.remove("twocolumn-panel") : document.body.classList.add("twocolumn-panel"));
  }
  function I() {
    document.addEventListener("DOMContentLoaded", function() {
      var e3 = document.getElementsByClassName("code-switcher");
      Array.from(e3).forEach(function(a2) {
        a2.addEventListener("change", function() {
          var e4 = a2.closest(".card"), t3 = e4.querySelector(".live-preview"), e4 = e4.querySelector(".code-view");
          a2.checked ? (t3.classList.add("d-none"), e4.classList.remove("d-none")) : (t3.classList.remove("d-none"), e4.classList.add("d-none"));
        });
      }), feather.replace();
    }), window.addEventListener("resize", v), v(), Waves.init(), document.addEventListener("scroll", function() {
      var e3;
      (e3 = document.getElementById("page-topbar")) && (50 <= document.body.scrollTop || 50 <= document.documentElement.scrollTop ? e3.classList.add("topbar-shadow") : e3.classList.remove("topbar-shadow"));
    }), window.addEventListener("load", function() {
      var e3;
      ("twocolumn" == document.documentElement.getAttribute("data-layout") ? A : L)(), (e3 = document.getElementsByClassName("vertical-overlay")) && Array.from(e3).forEach(function(e4) {
        e4.addEventListener("click", function() {
          document.body.classList.remove("vertical-sidebar-enable"), "twocolumn" == sessionStorage.getItem("data-layout") ? document.body.classList.add("twocolumn-panel") : document.documentElement.setAttribute("data-sidebar-size", sessionStorage.getItem("data-sidebar-size"));
        });
      }), q();
    }), document.getElementById("topnav-hamburger-icon") && document.getElementById("topnav-hamburger-icon").addEventListener("click", w);
    var e2 = sessionStorage.getItem("defaultAttribute"), t2 = JSON.parse(e2), e2 = document.documentElement.clientWidth;
    "twocolumn" == t2["data-layout"] && e2 < 767 && Array.from(document.getElementById("two-column-menu").querySelectorAll("li")).forEach(function(e3) {
      e3.addEventListener("click", function(e4) {
        document.body.classList.remove("twocolumn-panel");
      });
    });
  }
  function A() {
    feather.replace();
    var e2, t2, a2 = "/" == location.pathname ? "index.html" : location.pathname.substring(1);
    (a2 = a2.substring(a2.lastIndexOf("/") + 1)) && ("twocolumn-panel" == document.body.className && document.getElementById("two-column-menu").querySelector('[href="' + a2 + '"]').classList.add("active"), (e2 = document.getElementById("navbar-nav").querySelector('[href="' + a2 + '"]')) ? (e2.classList.add("active"), t2 = (t2 = e2.closest(".collapse.menu-dropdown")) && t2.parentElement.closest(".collapse.menu-dropdown") ? (t2.classList.add("show"), t2.parentElement.children[0].classList.add("active"), t2.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"), t2.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown") && (a2 = t2.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").getAttribute("id"), t2.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"), t2.parentElement.closest(".collapse.menu-dropdown").parentElement.classList.remove("twocolumn-item-show"), document.getElementById("two-column-menu").querySelector('[href="#' + a2 + '"]') && document.getElementById("two-column-menu").querySelector('[href="#' + a2 + '"]').classList.add("active")), t2.parentElement.closest(".collapse.menu-dropdown").getAttribute("id")) : (e2.closest(".collapse.menu-dropdown").parentElement.classList.add("twocolumn-item-show"), t2.getAttribute("id")), document.getElementById("two-column-menu").querySelector('[href="#' + t2 + '"]') && document.getElementById("two-column-menu").querySelector('[href="#' + t2 + '"]').classList.add("active")) : document.body.classList.add("twocolumn-panel"));
  }
  function L() {
    var e2 = "/" == location.pathname ? "index.html" : location.pathname.substring(1);
    !(e2 = e2.substring(e2.lastIndexOf("/") + 1)) || (e2 = document.getElementById("navbar-nav").querySelector('[href="' + e2 + '"]')) && (e2.classList.add("active"), (e2 = e2.closest(".collapse.menu-dropdown")) && (e2.classList.add("show"), e2.parentElement.children[0].classList.add("active"), e2.parentElement.children[0].setAttribute("aria-expanded", "true"), e2.parentElement.closest(".collapse.menu-dropdown") && (e2.parentElement.closest(".collapse").classList.add("show"), e2.parentElement.closest(".collapse").previousElementSibling && e2.parentElement.closest(".collapse").previousElementSibling.classList.add("active"), e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse.menu-dropdown") && (e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").classList.add("show"), e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling && (console.log("parentCollapseDiv", e2), e2.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active"), "horizontal" == document.documentElement.getAttribute("data-layout") && e2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse") && e2.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.closest(".collapse").previousElementSibling.classList.add("active"))))));
  }
  function f(e2) {
    if (e2) {
      var t2 = e2.offsetTop, a2 = e2.offsetLeft, n2 = e2.offsetWidth, o2 = e2.offsetHeight;
      if (e2.offsetParent) for (; e2.offsetParent; ) t2 += (e2 = e2.offsetParent).offsetTop, a2 += e2.offsetLeft;
      return t2 >= window.pageYOffset && a2 >= window.pageXOffset && t2 + o2 <= window.pageYOffset + window.innerHeight && a2 + n2 <= window.pageXOffset + window.innerWidth;
    }
  }
  function k() {
    var e2 = document.querySelectorAll(".counter-value");
    function s2(e3) {
      return e3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    e2 && Array.from(e2).forEach(function(o2) {
      !(function e3() {
        var t2 = +o2.getAttribute("data-target"), a2 = +o2.innerText, n2 = t2 / 250;
        n2 < 1 && (n2 = 1), a2 < t2 ? (o2.innerText = (a2 + n2).toFixed(0), setTimeout(e3, 1)) : o2.innerText = s2(t2), s2(o2.innerText);
      })();
    });
  }
  function B() {
    document.getElementById("two-column-menu").innerHTML = "", document.querySelector(".navbar-menu").innerHTML = c, document.getElementById("scrollbar").removeAttribute("data-simplebar"), document.getElementById("navbar-nav").removeAttribute("data-simplebar"), document.getElementById("scrollbar").classList.remove("h-100");
    var a2 = u, n2 = document.querySelectorAll("ul.navbar-nav > li.nav-item"), o2 = "", s2 = "";
    Array.from(n2).forEach(function(e2, t2) {
      t2 + 1 === a2 && (s2 = e2), a2 < t2 + 1 && (o2 += e2.outerHTML, e2.remove()), t2 + 1 === n2.length && s2.insertAdjacentHTML && s2.insertAdjacentHTML("afterend", '<li class="nav-item">						<a class="nav-link" href="#sidebarMore" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="sidebarMore">							<i class="ri-briefcase-2-line"></i> More						</a>						<div class="collapse menu-dropdown" id="sidebarMore"><ul class="nav nav-sm flex-column">' + o2 + "</ul></div>					</li>");
    });
  }
  function z(e2) {
    "vertical" == e2 ? (document.getElementById("two-column-menu").innerHTML = "", document.querySelector(".navbar-menu").innerHTML = c, document.getElementById("theme-settings-offcanvas") && (document.getElementById("sidebar-size").style.display = "block", document.getElementById("sidebar-view").style.display = "block", document.getElementById("sidebar-color").style.display = "block", document.getElementById("sidebar-img").style.display = "block", document.getElementById("layout-position").style.display = "block", document.getElementById("layout-width").style.display = "block"), h(), L(), q(), T()) : "horizontal" == e2 ? (B(), document.getElementById("theme-settings-offcanvas") && (document.getElementById("sidebar-size").style.display = "none", document.getElementById("sidebar-view").style.display = "none", document.getElementById("sidebar-color").style.display = "none", document.getElementById("sidebar-img").style.display = "none", document.getElementById("layout-position").style.display = "block", document.getElementById("layout-width").style.display = "block"), L()) : "twocolumn" == e2 && (document.getElementById("scrollbar").removeAttribute("data-simplebar"), document.getElementById("scrollbar").classList.remove("h-100"), document.getElementById("theme-settings-offcanvas") && (document.getElementById("sidebar-size").style.display = "none", document.getElementById("sidebar-view").style.display = "none", document.getElementById("sidebar-color").style.display = "block", document.getElementById("sidebar-img").style.display = "block", document.getElementById("layout-position").style.display = "none", document.getElementById("layout-width").style.display = "none"));
  }
  function q() {
    document.getElementById("vertical-hover").addEventListener("click", function() {
      "sm-hover" === document.documentElement.getAttribute("data-sidebar-size") ? document.documentElement.setAttribute("data-sidebar-size", "sm-hover-active") : (document.documentElement.getAttribute("data-sidebar-size"), document.documentElement.setAttribute("data-sidebar-size", "sm-hover"));
    });
  }
  function x(e2) {
    if (e2 == e2) {
      switch (e2["data-layout"]) {
        case "vertical":
          C("data-layout", "vertical"), sessionStorage.setItem("data-layout", "vertical"), document.documentElement.setAttribute("data-layout", "vertical"), z("vertical"), p();
          break;
        case "horizontal":
          C("data-layout", "horizontal"), sessionStorage.setItem("data-layout", "horizontal"), document.documentElement.setAttribute("data-layout", "horizontal"), z("horizontal");
          break;
        case "twocolumn":
          C("data-layout", "twocolumn"), sessionStorage.setItem("data-layout", "twocolumn"), document.documentElement.setAttribute("data-layout", "twocolumn"), z("twocolumn");
          break;
        default:
          "vertical" == sessionStorage.getItem("data-layout") && sessionStorage.getItem("data-layout") ? (C("data-layout", "vertical"), sessionStorage.setItem("data-layout", "vertical"), document.documentElement.setAttribute("data-layout", "vertical"), z("vertical"), p()) : "horizontal" == sessionStorage.getItem("data-layout") ? (C("data-layout", "horizontal"), sessionStorage.setItem("data-layout", "horizontal"), document.documentElement.setAttribute("data-layout", "horizontal"), z("horizontal")) : "twocolumn" == sessionStorage.getItem("data-layout") && (C("data-layout", "twocolumn"), sessionStorage.setItem("data-layout", "twocolumn"), document.documentElement.setAttribute("data-layout", "twocolumn"), z("twocolumn"));
      }
      switch (e2["data-topbar"]) {
        case "light":
          C("data-topbar", "light"), sessionStorage.setItem("data-topbar", "light"), document.documentElement.setAttribute("data-topbar", "light");
          break;
        case "dark":
          C("data-topbar", "dark"), sessionStorage.setItem("data-topbar", "dark"), document.documentElement.setAttribute("data-topbar", "dark");
          break;
        default:
          "dark" == sessionStorage.getItem("data-topbar") ? (C("data-topbar", "dark"), sessionStorage.setItem("data-topbar", "dark"), document.documentElement.setAttribute("data-topbar", "dark")) : (C("data-topbar", "light"), sessionStorage.setItem("data-topbar", "light"), document.documentElement.setAttribute("data-topbar", "light"));
      }
      switch (e2["data-layout-style"]) {
        case "default":
          C("data-layout-style", "default"), sessionStorage.setItem("data-layout-style", "default"), document.documentElement.setAttribute("data-layout-style", "default");
          break;
        case "detached":
          C("data-layout-style", "detached"), sessionStorage.setItem("data-layout-style", "detached"), document.documentElement.setAttribute("data-layout-style", "detached");
          break;
        default:
          "detached" == sessionStorage.getItem("data-layout-style") ? (C("data-layout-style", "detached"), sessionStorage.setItem("data-layout-style", "detached"), document.documentElement.setAttribute("data-layout-style", "detached")) : (C("data-layout-style", "default"), sessionStorage.setItem("data-layout-style", "default"), document.documentElement.setAttribute("data-layout-style", "default"));
      }
      switch (e2["data-sidebar-size"]) {
        case "lg":
          C("data-sidebar-size", "lg"), document.documentElement.setAttribute("data-sidebar-size", "lg"), sessionStorage.setItem("data-sidebar-size", "lg");
          break;
        case "sm":
          C("data-sidebar-size", "sm"), document.documentElement.setAttribute("data-sidebar-size", "sm"), sessionStorage.setItem("data-sidebar-size", "sm");
          break;
        case "md":
          C("data-sidebar-size", "md"), document.documentElement.setAttribute("data-sidebar-size", "md"), sessionStorage.setItem("data-sidebar-size", "md");
          break;
        case "sm-hover":
          C("data-sidebar-size", "sm-hover"), document.documentElement.setAttribute("data-sidebar-size", "sm-hover"), sessionStorage.setItem("data-sidebar-size", "sm-hover");
          break;
        default:
          "sm" == sessionStorage.getItem("data-sidebar-size") ? (document.documentElement.setAttribute("data-sidebar-size", "sm"), C("data-sidebar-size", "sm"), sessionStorage.setItem("data-sidebar-size", "sm")) : "md" == sessionStorage.getItem("data-sidebar-size") ? (document.documentElement.setAttribute("data-sidebar-size", "md"), C("data-sidebar-size", "md"), sessionStorage.setItem("data-sidebar-size", "md")) : "sm-hover" == sessionStorage.getItem("data-sidebar-size") ? (document.documentElement.setAttribute("data-sidebar-size", "sm-hover"), C("data-sidebar-size", "sm-hover"), sessionStorage.setItem("data-sidebar-size", "sm-hover")) : (document.documentElement.setAttribute("data-sidebar-size", "lg"), C("data-sidebar-size", "lg"), sessionStorage.setItem("data-sidebar-size", "lg"));
      }
      switch (e2["data-layout-mode"]) {
        case "light":
          C("data-layout-mode", "light"), document.documentElement.setAttribute("data-layout-mode", "light"), sessionStorage.setItem("data-layout-mode", "light");
          break;
        case "dark":
          C("data-layout-mode", "dark"), document.documentElement.setAttribute("data-layout-mode", "dark"), sessionStorage.setItem("data-layout-mode", "dark");
          break;
        default:
          sessionStorage.getItem("data-layout-mode") && "dark" == sessionStorage.getItem("data-layout-mode") ? (sessionStorage.setItem("data-layout-mode", "dark"), document.documentElement.setAttribute("data-layout-mode", "dark"), C("data-layout-mode", "dark")) : (sessionStorage.setItem("data-layout-mode", "light"), document.documentElement.setAttribute("data-layout-mode", "light"), C("data-layout-mode", "light"));
      }
      switch (e2["data-layout-width"]) {
        case "fluid":
          C("data-layout-width", "fluid"), document.documentElement.setAttribute("data-layout-width", "fluid"), sessionStorage.setItem("data-layout-width", "fluid");
          break;
        case "boxed":
          C("data-layout-width", "boxed"), document.documentElement.setAttribute("data-layout-width", "boxed"), sessionStorage.setItem("data-layout-width", "boxed");
          break;
        default:
          "boxed" == sessionStorage.getItem("data-layout-width") ? (sessionStorage.setItem("data-layout-width", "boxed"), document.documentElement.setAttribute("data-layout-width", "boxed"), C("data-layout-width", "boxed")) : (sessionStorage.setItem("data-layout-width", "fluid"), document.documentElement.setAttribute("data-layout-width", "fluid"), C("data-layout-width", "fluid"));
      }
      switch (e2["data-sidebar"]) {
        case "light":
          C("data-sidebar", "light"), sessionStorage.setItem("data-sidebar", "light"), document.documentElement.setAttribute("data-sidebar", "light");
          break;
        case "dark":
          C("data-sidebar", "dark"), sessionStorage.setItem("data-sidebar", "dark"), document.documentElement.setAttribute("data-sidebar", "dark");
          break;
        case "gradient":
          C("data-sidebar", "gradient"), sessionStorage.setItem("data-sidebar", "gradient"), document.documentElement.setAttribute("data-sidebar", "gradient");
          break;
        case "gradient-2":
          C("data-sidebar", "gradient-2"), sessionStorage.setItem("data-sidebar", "gradient-2"), document.documentElement.setAttribute("data-sidebar", "gradient-2");
          break;
        case "gradient-3":
          C("data-sidebar", "gradient-3"), sessionStorage.setItem("data-sidebar", "gradient-3"), document.documentElement.setAttribute("data-sidebar", "gradient-3");
          break;
        case "gradient-4":
          C("data-sidebar", "gradient-4"), sessionStorage.setItem("data-sidebar", "gradient-4"), document.documentElement.setAttribute("data-sidebar", "gradient-4");
          break;
        default:
          sessionStorage.getItem("data-sidebar") && "light" == sessionStorage.getItem("data-sidebar") ? (sessionStorage.setItem("data-sidebar", "light"), C("data-sidebar", "light"), document.documentElement.setAttribute("data-sidebar", "light")) : "dark" == sessionStorage.getItem("data-sidebar") ? (sessionStorage.setItem("data-sidebar", "dark"), C("data-sidebar", "dark"), document.documentElement.setAttribute("data-sidebar", "dark")) : "gradient" == sessionStorage.getItem("data-sidebar") ? (sessionStorage.setItem("data-sidebar", "gradient"), C("data-sidebar", "gradient"), document.documentElement.setAttribute("data-sidebar", "gradient")) : "gradient-2" == sessionStorage.getItem("data-sidebar") ? (sessionStorage.setItem("data-sidebar", "gradient-2"), C("data-sidebar", "gradient-2"), document.documentElement.setAttribute("data-sidebar", "gradient-2")) : "gradient-3" == sessionStorage.getItem("data-sidebar") ? (sessionStorage.setItem("data-sidebar", "gradient-3"), C("data-sidebar", "gradient-3"), document.documentElement.setAttribute("data-sidebar", "gradient-3")) : "gradient-4" == sessionStorage.getItem("data-sidebar") && (sessionStorage.setItem("data-sidebar", "gradient-4"), C("data-sidebar", "gradient-4"), document.documentElement.setAttribute("data-sidebar", "gradient-4"));
      }
      switch (e2["data-sidebar-image"]) {
        case "none":
          C("data-sidebar-image", "none"), sessionStorage.setItem("data-sidebar-image", "none"), document.documentElement.setAttribute("data-sidebar-image", "none");
          break;
        case "img-1":
          C("data-sidebar-image", "img-1"), sessionStorage.setItem("data-sidebar-image", "img-1"), document.documentElement.setAttribute("data-sidebar-image", "img-1");
          break;
        case "img-2":
          C("data-sidebar-image", "img-2"), sessionStorage.setItem("data-sidebar-image", "img-2"), document.documentElement.setAttribute("data-sidebar-image", "img-2");
          break;
        case "img-3":
          C("data-sidebar-image", "img-3"), sessionStorage.setItem("data-sidebar-image", "img-3"), document.documentElement.setAttribute("data-sidebar-image", "img-3");
          break;
        case "img-4":
          C("data-sidebar-image", "img-4"), sessionStorage.setItem("data-sidebar-image", "img-4"), document.documentElement.setAttribute("data-sidebar-image", "img-4");
          break;
        default:
          sessionStorage.getItem("data-sidebar-image") && "none" == sessionStorage.getItem("data-sidebar-image") ? (sessionStorage.setItem("data-sidebar-image", "none"), C("data-sidebar-image", "none"), document.documentElement.setAttribute("data-sidebar-image", "none")) : "img-1" == sessionStorage.getItem("data-sidebar-image") ? (sessionStorage.setItem("data-sidebar-image", "img-1"), C("data-sidebar-image", "img-1"), document.documentElement.setAttribute("data-sidebar-image", "img-2")) : "img-2" == sessionStorage.getItem("data-sidebar-image") ? (sessionStorage.setItem("data-sidebar-image", "img-2"), C("data-sidebar-image", "img-2"), document.documentElement.setAttribute("data-sidebar-image", "img-2")) : "img-3" == sessionStorage.getItem("data-sidebar-image") ? (sessionStorage.setItem("data-sidebar-image", "img-3"), C("data-sidebar-image", "img-3"), document.documentElement.setAttribute("data-sidebar-image", "img-3")) : "img-4" == sessionStorage.getItem("data-sidebar-image") && (sessionStorage.setItem("data-sidebar-image", "img-4"), C("data-sidebar-image", "img-4"), document.documentElement.setAttribute("data-sidebar-image", "img-4"));
      }
      switch (e2["data-layout-position"]) {
        case "fixed":
          C("data-layout-position", "fixed"), sessionStorage.setItem("data-layout-position", "fixed"), document.documentElement.setAttribute("data-layout-position", "fixed");
          break;
        case "scrollable":
          C("data-layout-position", "scrollable"), sessionStorage.setItem("data-layout-position", "scrollable"), document.documentElement.setAttribute("data-layout-position", "scrollable");
          break;
        default:
          sessionStorage.getItem("data-layout-position") && "scrollable" == sessionStorage.getItem("data-layout-position") ? (C("data-layout-position", "scrollable"), sessionStorage.setItem("data-layout-position", "scrollable"), document.documentElement.setAttribute("data-layout-position", "scrollable")) : (C("data-layout-position", "fixed"), sessionStorage.setItem("data-layout-position", "fixed"), document.documentElement.setAttribute("data-layout-position", "fixed"));
      }
    }
  }
  function T() {
    setTimeout(function() {
      var e2, t2, a2 = document.getElementById("navbar-nav");
      a2 && (a2 = a2.querySelector(".nav-item .active"), 300 < (e2 = a2 ? a2.offsetTop : 0) && ((t2 = document.getElementsByClassName("app-menu") ? document.getElementsByClassName("app-menu")[0] : "") && t2.querySelector(".simplebar-content-wrapper") && setTimeout(function() {
        t2.querySelector(".simplebar-content-wrapper").scrollTop = 330 == e2 ? e2 + 85 : e2;
      }, 0)));
    }, 250);
  }
  function C(t2, a2) {
    Array.from(document.querySelectorAll("input[name=" + t2 + "]")).forEach(function(e2) {
      a2 == e2.value ? e2.checked = true : e2.checked = false, e2.addEventListener("change", function() {
        document.documentElement.setAttribute(t2, e2.value), sessionStorage.setItem(t2, e2.value), "data-layout-width" == t2 && "boxed" == e2.value ? (document.documentElement.setAttribute("data-sidebar-size", "sm-hover"), sessionStorage.setItem("data-sidebar-size", "sm-hover"), document.getElementById("sidebar-size-small-hover").checked = true) : "data-layout-width" == t2 && "fluid" == e2.value && (document.documentElement.setAttribute("data-sidebar-size", "lg"), sessionStorage.setItem("data-sidebar-size", "lg"), document.getElementById("sidebar-size-default").checked = true), "data-layout" == t2 && ("vertical" == e2.value ? (z("vertical"), p(), feather.replace()) : "horizontal" == e2.value ? (document.getElementById("sidebarimg-none").click(), z("horizontal"), feather.replace()) : "twocolumn" == e2.value && (z("twocolumn"), document.documentElement.setAttribute("data-layout-width", "fluid"), document.getElementById("layout-width-fluid").click(), E(), A(), p(), feather.replace()));
      });
    }), Array.from(document.querySelectorAll("#collapseBgGradient .form-check input")).forEach(function(e2) {
      var t3 = document.getElementById("collapseBgGradient");
      1 == e2.checked && new bootstrap.Collapse(t3, { toggle: false }).show(), document.querySelector("[data-bs-target='#collapseBgGradient']").addEventListener("click", function(e3) {
        document.getElementById("sidebar-color-gradient").click();
      });
    }), Array.from(document.querySelectorAll("[name='data-sidebar']")).forEach(function(e2) {
      document.querySelector("#collapseBgGradient .form-check input:checked") ? document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active") : document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active"), e2.addEventListener("change", function() {
        document.querySelector("#collapseBgGradient .form-check input:checked") ? document.querySelector("[data-bs-target='#collapseBgGradient']").classList.add("active") : document.querySelector("[data-bs-target='#collapseBgGradient']").classList.remove("active");
      });
    });
  }
  function F(e2, t2, a2, n2) {
    var o2 = document.getElementById(a2);
    n2.setAttribute(e2, t2), o2 && document.getElementById(a2).click();
  }
  function N() {
    document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.body.classList.remove("fullscreen-enable");
  }
  function H() {
    var t2 = 0;
    Array.from(document.getElementsByClassName("cart-item-price")).forEach(function(e2) {
      t2 += parseFloat(e2.innerHTML);
    }), document.getElementById("cart-item-total") && (document.getElementById("cart-item-total").innerHTML = "$" + t2.toFixed(2));
  }
  function M() {
    var e2;
    "horizontal" !== document.documentElement.getAttribute("data-layout") && (!document.getElementById("navbar-nav") || (e2 = new SimpleBar(document.getElementById("navbar-nav"))) && e2.getContentElement(), !document.getElementsByClassName("twocolumn-iconview")[0] || (e2 = new SimpleBar(document.getElementsByClassName("twocolumn-iconview")[0])) && e2.getContentElement(), clearTimeout(m));
  }
  sessionStorage.getItem("defaultAttribute") ? ((a = {})["data-layout"] = sessionStorage.getItem("data-layout"), a["data-sidebar-size"] = sessionStorage.getItem("data-sidebar-size"), a["data-layout-mode"] = sessionStorage.getItem("data-layout-mode"), a["data-layout-width"] = sessionStorage.getItem("data-layout-width"), a["data-sidebar"] = sessionStorage.getItem("data-sidebar"), a["data-layout-position"] = sessionStorage.getItem("data-layout-position"), a["data-layout-style"] = sessionStorage.getItem("data-layout-style"), a["data-topbar"] = sessionStorage.getItem("data-topbar"), x(a)) : (i = document.documentElement.attributes, a = {}, Array.from(i).forEach(function(e2) {
    var t2;
    e2 && e2.nodeName && "undefined" != e2.nodeName && (t2 = e2.nodeName, a[t2] = e2.nodeValue, sessionStorage.setItem(t2, e2.nodeValue));
  }), sessionStorage.setItem("defaultAttribute", JSON.stringify(a)), x(a), (i = document.querySelector('.btn[data-bs-target="#theme-settings-offcanvas"]')) && i.click()), E(), n = document.getElementById("search-close-options"), o = document.getElementById("search-dropdown"), (s = document.getElementById("search-options")) && (s.addEventListener("focus", function() {
    0 < s.value.length ? (o.classList.add("show"), n.classList.remove("d-none")) : (o.classList.remove("show"), n.classList.add("d-none"));
  }), s.addEventListener("keyup", function(e2) {
    var a2, t2;
    0 < s.value.length ? (o.classList.add("show"), n.classList.remove("d-none"), a2 = s.value.toLowerCase(), t2 = document.getElementsByClassName("notify-item"), Array.from(t2).forEach(function(e3) {
      var t3 = e3.getElementsByTagName("span") ? e3.getElementsByTagName("span")[0].innerText.toLowerCase() : "";
      t3 && (e3.style.display = t3.includes(a2) ? "block" : "none");
    })) : (o.classList.remove("show"), n.classList.add("d-none"));
  }), n.addEventListener("click", function() {
    s.value = "", o.classList.remove("show"), n.classList.add("d-none");
  }), document.body.addEventListener("click", function(e2) {
    "search-options" !== e2.target.getAttribute("id") && (o.classList.remove("show"), n.classList.add("d-none"));
  })), t = document.getElementById("search-close-options"), d = document.getElementById("search-dropdown-reponsive"), e = document.getElementById("search-options-reponsive"), t && d && e && (e.addEventListener("focus", function() {
    0 < e.value.length ? (d.classList.add("show"), t.classList.remove("d-none")) : (d.classList.remove("show"), t.classList.add("d-none"));
  }), e.addEventListener("keyup", function() {
    0 < e.value.length ? (d.classList.add("show"), t.classList.remove("d-none")) : (d.classList.remove("show"), t.classList.add("d-none"));
  }), t.addEventListener("click", function() {
    e.value = "", d.classList.remove("show"), t.classList.add("d-none");
  }), document.body.addEventListener("click", function(e2) {
    "search-options" !== e2.target.getAttribute("id") && (d.classList.remove("show"), t.classList.add("d-none"));
  })), (i = document.querySelector('[data-toggle="fullscreen"]')) && i.addEventListener("click", function(e2) {
    e2.preventDefault(), document.body.classList.toggle("fullscreen-enable"), document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.mozRequestFullScreen ? document.documentElement.mozRequestFullScreen() : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
  }), document.addEventListener("fullscreenchange", N), document.addEventListener("webkitfullscreenchange", N), document.addEventListener("mozfullscreenchange", N), l = document.getElementsByTagName("HTML")[0], (i = document.querySelectorAll(".light-dark-mode")) && i.length && i[0].addEventListener("click", function(e2) {
    l.hasAttribute("data-layout-mode") && "dark" == l.getAttribute("data-layout-mode") ? F("data-layout-mode", "light", "layout-mode-light", l) : F("data-layout-mode", "dark", "layout-mode-dark", l);
  }), I(), k(), h(), document.getElementsByClassName("dropdown-item-cart") && (r = document.querySelectorAll(".dropdown-item-cart").length, Array.from(document.querySelectorAll("#page-topbar .dropdown-menu-cart .remove-item-btn")).forEach(function(e2) {
    e2.addEventListener("click", function(e3) {
      r--, this.closest(".dropdown-item-cart").remove(), Array.from(document.getElementsByClassName("cartitem-badge")).forEach(function(e4) {
        e4.innerHTML = r;
      }), H(), document.getElementById("empty-cart") && (document.getElementById("empty-cart").style.display = 0 == r ? "block" : "none"), document.getElementById("checkout-elem") && (document.getElementById("checkout-elem").style.display = 0 == r ? "none" : "block");
    });
  }), Array.from(document.getElementsByClassName("cartitem-badge")).forEach(function(e2) {
    e2.innerHTML = r;
  }), document.getElementById("empty-cart") && (document.getElementById("empty-cart").style.display = "none"), document.getElementById("checkout-elem") && (document.getElementById("checkout-elem").style.display = "block"), H()), document.getElementsByClassName("notification-check") && Array.from(document.querySelectorAll(".notification-check input")).forEach(function(e2) {
    e2.addEventListener("click", function(e3) {
      e3.target.closest(".notification-item").classList.toggle("active");
    });
  }), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e2) {
    return new bootstrap.Tooltip(e2);
  }), [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e2) {
    return new bootstrap.Popover(e2);
  }), document.getElementById("reset-layout") && document.getElementById("reset-layout").addEventListener("click", function() {
    sessionStorage.clear(), window.location.reload();
  }), i = document.querySelectorAll("[data-toast]"), Array.from(i).forEach(function(a2) {
    a2.addEventListener("click", function() {
      var e2 = {}, t2 = a2.attributes;
      t2["data-toast-text"] && (e2.text = t2["data-toast-text"].value.toString()), t2["data-toast-gravity"] && (e2.gravity = t2["data-toast-gravity"].value.toString()), t2["data-toast-position"] && (e2.position = t2["data-toast-position"].value.toString()), t2["data-toast-className"] && (e2.className = t2["data-toast-className"].value.toString()), t2["data-toast-duration"] && (e2.duration = t2["data-toast-duration"].value.toString()), t2["data-toast-close"] && (e2.close = t2["data-toast-close"].value.toString()), t2["data-toast-style"] && (e2.style = t2["data-toast-style"].value.toString()), t2["data-toast-offset"] && (e2.offset = t2["data-toast-offset"]), Toastify({ newWindow: true, text: e2.text, gravity: e2.gravity, position: e2.position, className: "bg-" + e2.className, stopOnFocus: true, offset: { x: e2.offset ? 50 : 0, y: e2.offset ? 10 : 0 }, duration: e2.duration, close: "close" == e2.close, style: "style" == e2.style ? { background: "linear-gradient(to right, #0AB39C, #405189)" } : "" }).showToast();
    });
  }), i = document.querySelectorAll("[data-choices]"), Array.from(i).forEach(function(e2) {
    var t2 = {}, a2 = e2.attributes;
    a2["data-choices-groups"] && (t2.placeholderValue = "This is a placeholder set in the config"), a2["data-choices-search-false"] && (t2.searchEnabled = false), a2["data-choices-search-true"] && (t2.searchEnabled = true), a2["data-choices-removeItem"] && (t2.removeItemButton = true), a2["data-choices-sorting-false"] && (t2.shouldSort = false), a2["data-choices-sorting-true"] && (t2.shouldSort = true), a2["data-choices-multiple-remove"] && (t2.removeItemButton = true), a2["data-choices-limit"] && (t2.maxItemCount = a2["data-choices-limit"].value.toString()), a2["data-choices-limit"] && (t2.maxItemCount = a2["data-choices-limit"].value.toString()), a2["data-choices-editItem-true"] && (t2.maxItemCount = true), a2["data-choices-editItem-false"] && (t2.maxItemCount = false), a2["data-choices-text-unique-true"] && (t2.duplicateItemsAllowed = false), a2["data-choices-text-disabled-true"] && (t2.addItems = false), a2["data-choices-text-disabled-true"] ? new Choices(e2, t2).disable() : new Choices(e2, t2);
  }), i = document.querySelectorAll("[data-provider]"), Array.from(i).forEach(function(e2) {
    var t2, a2, n2;
    "flatpickr" == e2.getAttribute("data-provider") ? (n2 = {}, (t2 = e2.attributes)["data-date-format"] && (n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-enable-time"] && (n2.enableTime = true, n2.dateFormat = t2["data-date-format"].value.toString() + " H:i"), t2["data-altFormat"] && (n2.altInput = true, n2.altFormat = t2["data-altFormat"].value.toString()), t2["data-minDate"] && (n2.minDate = t2["data-minDate"].value.toString(), n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-maxDate"] && (n2.maxDate = t2["data-maxDate"].value.toString(), n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-deafult-date"] && (n2.defaultDate = t2["data-deafult-date"].value.toString(), n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-multiple-date"] && (n2.mode = "multiple", n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-range-date"] && (n2.mode = "range", n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-inline-date"] && (n2.inline = true, n2.defaultDate = t2["data-deafult-date"].value.toString(), n2.dateFormat = t2["data-date-format"].value.toString()), t2["data-disable-date"] && ((a2 = []).push(t2["data-disable-date"].value), n2.disable = a2.toString().split(",")), flatpickr(e2, n2)) : "timepickr" == e2.getAttribute("data-provider") && (a2 = {}, (n2 = e2.attributes)["data-time-basic"] && (a2.enableTime = true, a2.noCalendar = true, a2.dateFormat = "H:i"), n2["data-time-hrs"] && (a2.enableTime = true, a2.noCalendar = true, a2.dateFormat = "H:i", a2.time_24hr = true), n2["data-min-time"] && (a2.enableTime = true, a2.noCalendar = true, a2.dateFormat = "H:i", a2.minTime = n2["data-min-time"].value.toString()), n2["data-max-time"] && (a2.enableTime = true, a2.noCalendar = true, a2.dateFormat = "H:i", a2.minTime = n2["data-max-time"].value.toString()), n2["data-default-time"] && (a2.enableTime = true, a2.noCalendar = true, a2.dateFormat = "H:i", a2.defaultDate = n2["data-default-time"].value.toString()), n2["data-time-inline"] && (a2.enableTime = true, a2.noCalendar = true, a2.defaultDate = n2["data-time-inline"].value.toString(), a2.inline = true), flatpickr(e2, a2));
  }), Array.from(document.querySelectorAll('.dropdown-menu a[data-bs-toggle="tab"]')).forEach(function(e2) {
    e2.addEventListener("click", function(e3) {
      e3.stopPropagation(), bootstrap.Tab.getInstance(e3.target).show();
    });
  }), (function() {
    y(null === b ? g : b);
    var e2 = document.getElementsByClassName("language");
    e2 && Array.from(e2).forEach(function(t2) {
      t2.addEventListener("click", function(e3) {
        y(t2.getAttribute("data-lang"));
      });
    });
  })(), p(), T(), window.addEventListener("resize", function() {
    m && clearTimeout(m), m = setTimeout(M, 2e3);
  });
})();
var mybutton = document.getElementById("back-to-top");
function scrollFunction() {
  100 < document.body.scrollTop || 100 < document.documentElement.scrollTop ? mybutton.style.display = "block" : mybutton.style.display = "none";
}
function topFunction() {
  document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
  scrollFunction();
};
var pJS = function(tag_id, params) {
  var canvas_el = document.querySelector("#" + tag_id + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var pJS2 = this.pJS;
  if (params) {
    Object.deepExtend(pJS2, params);
  }
  pJS2.tmp.obj = {
    size_value: pJS2.particles.size.value,
    size_anim_speed: pJS2.particles.size.anim.speed,
    move_speed: pJS2.particles.move.speed,
    line_linked_distance: pJS2.particles.line_linked.distance,
    line_linked_width: pJS2.particles.line_linked.width,
    mode_grab_distance: pJS2.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS2.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS2.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS2.interactivity.modes.repulse.distance
  };
  pJS2.fn.retinaInit = function() {
    if (pJS2.retina_detect && window.devicePixelRatio > 1) {
      pJS2.canvas.pxratio = window.devicePixelRatio;
      pJS2.tmp.retina = true;
    } else {
      pJS2.canvas.pxratio = 1;
      pJS2.tmp.retina = false;
    }
    pJS2.canvas.w = pJS2.canvas.el.offsetWidth * pJS2.canvas.pxratio;
    pJS2.canvas.h = pJS2.canvas.el.offsetHeight * pJS2.canvas.pxratio;
    pJS2.particles.size.value = pJS2.tmp.obj.size_value * pJS2.canvas.pxratio;
    pJS2.particles.size.anim.speed = pJS2.tmp.obj.size_anim_speed * pJS2.canvas.pxratio;
    pJS2.particles.move.speed = pJS2.tmp.obj.move_speed * pJS2.canvas.pxratio;
    pJS2.particles.line_linked.distance = pJS2.tmp.obj.line_linked_distance * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.grab.distance = pJS2.tmp.obj.mode_grab_distance * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.bubble.distance = pJS2.tmp.obj.mode_bubble_distance * pJS2.canvas.pxratio;
    pJS2.particles.line_linked.width = pJS2.tmp.obj.line_linked_width * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.bubble.size = pJS2.tmp.obj.mode_bubble_size * pJS2.canvas.pxratio;
    pJS2.interactivity.modes.repulse.distance = pJS2.tmp.obj.mode_repulse_distance * pJS2.canvas.pxratio;
  };
  pJS2.fn.canvasInit = function() {
    pJS2.canvas.ctx = pJS2.canvas.el.getContext("2d");
  };
  pJS2.fn.canvasSize = function() {
    pJS2.canvas.el.width = pJS2.canvas.w;
    pJS2.canvas.el.height = pJS2.canvas.h;
    if (pJS2 && pJS2.interactivity.events.resize) {
      window.addEventListener("resize", function() {
        pJS2.canvas.w = pJS2.canvas.el.offsetWidth;
        pJS2.canvas.h = pJS2.canvas.el.offsetHeight;
        if (pJS2.tmp.retina) {
          pJS2.canvas.w *= pJS2.canvas.pxratio;
          pJS2.canvas.h *= pJS2.canvas.pxratio;
        }
        pJS2.canvas.el.width = pJS2.canvas.w;
        pJS2.canvas.el.height = pJS2.canvas.h;
        if (!pJS2.particles.move.enable) {
          pJS2.fn.particlesEmpty();
          pJS2.fn.particlesCreate();
          pJS2.fn.particlesDraw();
          pJS2.fn.vendors.densityAutoParticles();
        }
        pJS2.fn.vendors.densityAutoParticles();
      });
    }
  };
  pJS2.fn.canvasPaint = function() {
    pJS2.canvas.ctx.fillRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
  };
  pJS2.fn.canvasClear = function() {
    pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
  };
  pJS2.fn.particle = function(color, opacity, position2) {
    this.radius = (pJS2.particles.size.random ? Math.random() : 1) * pJS2.particles.size.value;
    if (pJS2.particles.size.anim.enable) {
      this.size_status = false;
      this.vs = pJS2.particles.size.anim.speed / 100;
      if (!pJS2.particles.size.anim.sync) {
        this.vs = this.vs * Math.random();
      }
    }
    this.x = position2 ? position2.x : Math.random() * pJS2.canvas.w;
    this.y = position2 ? position2.y : Math.random() * pJS2.canvas.h;
    if (this.x > pJS2.canvas.w - this.radius * 2) this.x = this.x - this.radius;
    else if (this.x < this.radius * 2) this.x = this.x + this.radius;
    if (this.y > pJS2.canvas.h - this.radius * 2) this.y = this.y - this.radius;
    else if (this.y < this.radius * 2) this.y = this.y + this.radius;
    if (pJS2.particles.move.bounce) {
      pJS2.fn.vendors.checkOverlap(this, position2);
    }
    this.color = {};
    if (typeof color.value == "object") {
      if (color.value instanceof Array) {
        var color_selected = color.value[Math.floor(Math.random() * pJS2.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      } else {
        if (color.value.r != void 0 && color.value.g != void 0 && color.value.b != void 0) {
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          };
        }
        if (color.value.h != void 0 && color.value.s != void 0 && color.value.l != void 0) {
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          };
        }
      }
    } else if (color.value == "random") {
      this.color.rgb = {
        r: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        g: Math.floor(Math.random() * (255 - 0 + 1)) + 0,
        b: Math.floor(Math.random() * (255 - 0 + 1)) + 0
      };
    } else if (typeof color.value == "string") {
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }
    this.opacity = (pJS2.particles.opacity.random ? Math.random() : 1) * pJS2.particles.opacity.value;
    if (pJS2.particles.opacity.anim.enable) {
      this.opacity_status = false;
      this.vo = pJS2.particles.opacity.anim.speed / 100;
      if (!pJS2.particles.opacity.anim.sync) {
        this.vo = this.vo * Math.random();
      }
    }
    var velbase = {};
    switch (pJS2.particles.move.direction) {
      case "top":
        velbase = { x: 0, y: -1 };
        break;
      case "top-right":
        velbase = { x: 0.5, y: -0.5 };
        break;
      case "right":
        velbase = { x: 1, y: -0 };
        break;
      case "bottom-right":
        velbase = { x: 0.5, y: 0.5 };
        break;
      case "bottom":
        velbase = { x: 0, y: 1 };
        break;
      case "bottom-left":
        velbase = { x: -0.5, y: 1 };
        break;
      case "left":
        velbase = { x: -1, y: 0 };
        break;
      case "top-left":
        velbase = { x: -0.5, y: -0.5 };
        break;
      default:
        velbase = { x: 0, y: 0 };
        break;
    }
    if (pJS2.particles.move.straight) {
      this.vx = velbase.x;
      this.vy = velbase.y;
      if (pJS2.particles.move.random) {
        this.vx = this.vx * Math.random();
        this.vy = this.vy * Math.random();
      }
    } else {
      this.vx = velbase.x + Math.random() - 0.5;
      this.vy = velbase.y + Math.random() - 0.5;
    }
    this.vx_i = this.vx;
    this.vy_i = this.vy;
    var shape_type = pJS2.particles.shape.type;
    if (typeof shape_type == "object") {
      if (shape_type instanceof Array) {
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    } else {
      this.shape = shape_type;
    }
    if (this.shape == "image") {
      var sh = pJS2.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      };
      if (!this.img.ratio) this.img.ratio = 1;
      if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg != void 0) {
        pJS2.fn.vendors.createSvgImg(this);
        if (pJS2.tmp.pushing) {
          this.img.loaded = false;
        }
      }
    }
  };
  pJS2.fn.particle.prototype.draw = function() {
    var p = this;
    if (p.radius_bubble != void 0) {
      var radius = p.radius_bubble;
    } else {
      var radius = p.radius;
    }
    if (p.opacity_bubble != void 0) {
      var opacity = p.opacity_bubble;
    } else {
      var opacity = p.opacity;
    }
    if (p.color.rgb) {
      var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + opacity + ")";
    } else {
      var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + opacity + ")";
    }
    pJS2.canvas.ctx.fillStyle = color_value;
    pJS2.canvas.ctx.beginPath();
    switch (p.shape) {
      case "circle":
        pJS2.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
        break;
      case "edge":
        pJS2.canvas.ctx.rect(p.x - radius, p.y - radius, radius * 2, radius * 2);
        break;
      case "triangle":
        pJS2.fn.vendors.drawShape(pJS2.canvas.ctx, p.x - radius, p.y + radius / 1.66, radius * 2, 3, 2);
        break;
      case "polygon":
        pJS2.fn.vendors.drawShape(
          pJS2.canvas.ctx,
          p.x - radius / (pJS2.particles.shape.polygon.nb_sides / 3.5),
          // startX
          p.y - radius / (2.66 / 3.5),
          // startY
          radius * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
          // sideLength
          pJS2.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          1
          // sideCountDenominator
        );
        break;
      case "star":
        pJS2.fn.vendors.drawShape(
          pJS2.canvas.ctx,
          p.x - radius * 2 / (pJS2.particles.shape.polygon.nb_sides / 4),
          // startX
          p.y - radius / (2 * 2.66 / 3.5),
          // startY
          radius * 2 * 2.66 / (pJS2.particles.shape.polygon.nb_sides / 3),
          // sideLength
          pJS2.particles.shape.polygon.nb_sides,
          // sideCountNumerator
          2
          // sideCountDenominator
        );
        break;
      case "image":
        let draw2 = function() {
          pJS2.canvas.ctx.drawImage(
            img_obj,
            p.x - radius,
            p.y - radius,
            radius * 2,
            radius * 2 / p.img.ratio
          );
        };
        var draw = draw2;
        if (pJS2.tmp.img_type == "svg") {
          var img_obj = p.img.obj;
        } else {
          var img_obj = pJS2.tmp.img_obj;
        }
        if (img_obj) {
          draw2();
        }
        break;
    }
    pJS2.canvas.ctx.closePath();
    if (pJS2.particles.shape.stroke.width > 0) {
      pJS2.canvas.ctx.strokeStyle = pJS2.particles.shape.stroke.color;
      pJS2.canvas.ctx.lineWidth = pJS2.particles.shape.stroke.width;
      pJS2.canvas.ctx.stroke();
    }
    pJS2.canvas.ctx.fill();
  };
  pJS2.fn.particlesCreate = function() {
    for (var i = 0; i < pJS2.particles.number.value; i++) {
      pJS2.particles.array.push(new pJS2.fn.particle(pJS2.particles.color, pJS2.particles.opacity.value));
    }
  };
  pJS2.fn.particlesUpdate = function() {
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p = pJS2.particles.array[i];
      if (pJS2.particles.move.enable) {
        var ms = pJS2.particles.move.speed / 2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }
      if (pJS2.particles.opacity.anim.enable) {
        if (p.opacity_status == true) {
          if (p.opacity >= pJS2.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        } else {
          if (p.opacity <= pJS2.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if (p.opacity < 0) p.opacity = 0;
      }
      if (pJS2.particles.size.anim.enable) {
        if (p.size_status == true) {
          if (p.radius >= pJS2.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        } else {
          if (p.radius <= pJS2.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if (p.radius < 0) p.radius = 0;
      }
      if (pJS2.particles.move.out_mode == "bounce") {
        var new_pos = {
          x_left: p.radius,
          x_right: pJS2.canvas.w,
          y_top: p.radius,
          y_bottom: pJS2.canvas.h
        };
      } else {
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS2.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS2.canvas.h + p.radius
        };
      }
      if (p.x - p.radius > pJS2.canvas.w) {
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS2.canvas.h;
      } else if (p.x + p.radius < 0) {
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS2.canvas.h;
      }
      if (p.y - p.radius > pJS2.canvas.h) {
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS2.canvas.w;
      } else if (p.y + p.radius < 0) {
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS2.canvas.w;
      }
      switch (pJS2.particles.move.out_mode) {
        case "bounce":
          if (p.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
          break;
      }
      if (isInArray("grab", pJS2.interactivity.events.onhover.mode)) {
        pJS2.fn.modes.grabParticle(p);
      }
      if (isInArray("bubble", pJS2.interactivity.events.onhover.mode) || isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
        pJS2.fn.modes.bubbleParticle(p);
      }
      if (isInArray("repulse", pJS2.interactivity.events.onhover.mode) || isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
        pJS2.fn.modes.repulseParticle(p);
      }
      if (pJS2.particles.line_linked.enable || pJS2.particles.move.attract.enable) {
        for (var j = i + 1; j < pJS2.particles.array.length; j++) {
          var p2 = pJS2.particles.array[j];
          if (pJS2.particles.line_linked.enable) {
            pJS2.fn.interact.linkParticles(p, p2);
          }
          if (pJS2.particles.move.attract.enable) {
            pJS2.fn.interact.attractParticles(p, p2);
          }
          if (pJS2.particles.move.bounce) {
            pJS2.fn.interact.bounceParticles(p, p2);
          }
        }
      }
    }
  };
  pJS2.fn.particlesDraw = function() {
    pJS2.canvas.ctx.clearRect(0, 0, pJS2.canvas.w, pJS2.canvas.h);
    pJS2.fn.particlesUpdate();
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p = pJS2.particles.array[i];
      p.draw();
    }
  };
  pJS2.fn.particlesEmpty = function() {
    pJS2.particles.array = [];
  };
  pJS2.fn.particlesRefresh = function() {
    cancelRequestAnimFrame(pJS2.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
    pJS2.tmp.source_svg = void 0;
    pJS2.tmp.img_obj = void 0;
    pJS2.tmp.count_svg = 0;
    pJS2.fn.particlesEmpty();
    pJS2.fn.canvasClear();
    pJS2.fn.vendors.start();
  };
  pJS2.fn.interact.linkParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= pJS2.particles.line_linked.distance) {
      var opacity_line = pJS2.particles.line_linked.opacity - dist / (1 / pJS2.particles.line_linked.opacity) / pJS2.particles.line_linked.distance;
      if (opacity_line > 0) {
        var color_line = pJS2.particles.line_linked.color_rgb_line;
        pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
        pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
        pJS2.canvas.ctx.beginPath();
        pJS2.canvas.ctx.moveTo(p1.x, p1.y);
        pJS2.canvas.ctx.lineTo(p2.x, p2.y);
        pJS2.canvas.ctx.stroke();
        pJS2.canvas.ctx.closePath();
      }
    }
  };
  pJS2.fn.interact.attractParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
    if (dist <= pJS2.particles.line_linked.distance) {
      var ax = dx / (pJS2.particles.move.attract.rotateX * 1e3), ay = dy / (pJS2.particles.move.attract.rotateY * 1e3);
      p1.vx -= ax;
      p1.vy -= ay;
      p2.vx += ax;
      p2.vy += ay;
    }
  };
  pJS2.fn.interact.bounceParticles = function(p1, p2) {
    var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy), dist_p = p1.radius + p2.radius;
    if (dist <= dist_p) {
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;
      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }
  };
  pJS2.fn.modes.pushParticles = function(nb, pos) {
    pJS2.tmp.pushing = true;
    for (var i = 0; i < nb; i++) {
      pJS2.particles.array.push(
        new pJS2.fn.particle(
          pJS2.particles.color,
          pJS2.particles.opacity.value,
          {
            "x": pos ? pos.pos_x : Math.random() * pJS2.canvas.w,
            "y": pos ? pos.pos_y : Math.random() * pJS2.canvas.h
          }
        )
      );
      if (i == nb - 1) {
        if (!pJS2.particles.move.enable) {
          pJS2.fn.particlesDraw();
        }
        pJS2.tmp.pushing = false;
      }
    }
  };
  pJS2.fn.modes.removeParticles = function(nb) {
    pJS2.particles.array.splice(0, nb);
    if (!pJS2.particles.move.enable) {
      pJS2.fn.particlesDraw();
    }
  };
  pJS2.fn.modes.bubbleParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && isInArray("bubble", pJS2.interactivity.events.onhover.mode)) {
      let init2 = function() {
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      };
      var init = init2;
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), ratio = 1 - dist_mouse / pJS2.interactivity.modes.bubble.distance;
      if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
        if (ratio >= 0 && pJS2.interactivity.status == "mousemove") {
          if (pJS2.interactivity.modes.bubble.size != pJS2.particles.size.value) {
            if (pJS2.interactivity.modes.bubble.size > pJS2.particles.size.value) {
              var size = p.radius + pJS2.interactivity.modes.bubble.size * ratio;
              if (size >= 0) {
                p.radius_bubble = size;
              }
            } else {
              var dif = p.radius - pJS2.interactivity.modes.bubble.size, size = p.radius - dif * ratio;
              if (size > 0) {
                p.radius_bubble = size;
              } else {
                p.radius_bubble = 0;
              }
            }
          }
          if (pJS2.interactivity.modes.bubble.opacity != pJS2.particles.opacity.value) {
            if (pJS2.interactivity.modes.bubble.opacity > pJS2.particles.opacity.value) {
              var opacity = pJS2.interactivity.modes.bubble.opacity * ratio;
              if (opacity > p.opacity && opacity <= pJS2.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            } else {
              var opacity = p.opacity - (pJS2.particles.opacity.value - pJS2.interactivity.modes.bubble.opacity) * ratio;
              if (opacity < p.opacity && opacity >= pJS2.interactivity.modes.bubble.opacity) {
                p.opacity_bubble = opacity;
              }
            }
          }
        }
      } else {
        init2();
      }
      if (pJS2.interactivity.status == "mouseleave") {
        init2();
      }
    } else if (pJS2.interactivity.events.onclick.enable && isInArray("bubble", pJS2.interactivity.events.onclick.mode)) {
      let process2 = function(bubble_param, particles_param, p_obj_bubble, p_obj, id) {
        if (bubble_param != particles_param) {
          if (!pJS2.tmp.bubble_duration_end) {
            if (dist_mouse <= pJS2.interactivity.modes.bubble.distance) {
              if (p_obj_bubble != void 0) var obj = p_obj_bubble;
              else var obj = p_obj;
              if (obj != bubble_param) {
                var value2 = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration;
                if (id == "size") p.radius_bubble = value2;
                if (id == "opacity") p.opacity_bubble = value2;
              }
            } else {
              if (id == "size") p.radius_bubble = void 0;
              if (id == "opacity") p.opacity_bubble = void 0;
            }
          } else {
            if (p_obj_bubble != void 0) {
              var value_tmp = p_obj - time_spent * (p_obj - bubble_param) / pJS2.interactivity.modes.bubble.duration, dif2 = bubble_param - value_tmp;
              value2 = bubble_param + dif2;
              if (id == "size") p.radius_bubble = value2;
              if (id == "opacity") p.opacity_bubble = value2;
            }
          }
        }
      };
      var process = process2;
      if (pJS2.tmp.bubble_clicking) {
        var dx_mouse = p.x - pJS2.interactivity.mouse.click_pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.click_pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse), time_spent = ((/* @__PURE__ */ new Date()).getTime() - pJS2.interactivity.mouse.click_time) / 1e3;
        if (time_spent > pJS2.interactivity.modes.bubble.duration) {
          pJS2.tmp.bubble_duration_end = true;
        }
        if (time_spent > pJS2.interactivity.modes.bubble.duration * 2) {
          pJS2.tmp.bubble_clicking = false;
          pJS2.tmp.bubble_duration_end = false;
        }
      }
      if (pJS2.tmp.bubble_clicking) {
        process2(pJS2.interactivity.modes.bubble.size, pJS2.particles.size.value, p.radius_bubble, p.radius, "size");
        process2(pJS2.interactivity.modes.bubble.opacity, pJS2.particles.opacity.value, p.opacity_bubble, p.opacity, "opacity");
      }
    }
  };
  pJS2.fn.modes.repulseParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && isInArray("repulse", pJS2.interactivity.events.onhover.mode) && pJS2.interactivity.status == "mousemove") {
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      var normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse }, repulseRadius = pJS2.interactivity.modes.repulse.distance, velocity2 = 100, repulseFactor = clamp(1 / repulseRadius * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity2, 0, 50);
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      };
      if (pJS2.particles.move.out_mode == "bounce") {
        if (pos.x - p.radius > 0 && pos.x + p.radius < pJS2.canvas.w) p.x = pos.x;
        if (pos.y - p.radius > 0 && pos.y + p.radius < pJS2.canvas.h) p.y = pos.y;
      } else {
        p.x = pos.x;
        p.y = pos.y;
      }
    } else if (pJS2.interactivity.events.onclick.enable && isInArray("repulse", pJS2.interactivity.events.onclick.mode)) {
      if (!pJS2.tmp.repulse_finish) {
        pJS2.tmp.repulse_count++;
        if (pJS2.tmp.repulse_count == pJS2.particles.array.length) {
          pJS2.tmp.repulse_finish = true;
        }
      }
      if (pJS2.tmp.repulse_clicking) {
        let process2 = function() {
          var f = Math.atan2(dy, dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);
          if (pJS2.particles.move.out_mode == "bounce") {
            var pos2 = {
              x: p.x + p.vx,
              y: p.y + p.vy
            };
            if (pos2.x + p.radius > pJS2.canvas.w) p.vx = -p.vx;
            else if (pos2.x - p.radius < 0) p.vx = -p.vx;
            if (pos2.y + p.radius > pJS2.canvas.h) p.vy = -p.vy;
            else if (pos2.y - p.radius < 0) p.vy = -p.vy;
          }
        };
        var process = process2;
        var repulseRadius = Math.pow(pJS2.interactivity.modes.repulse.distance / 6, 3);
        var dx = pJS2.interactivity.mouse.click_pos_x - p.x, dy = pJS2.interactivity.mouse.click_pos_y - p.y, d = dx * dx + dy * dy;
        var force = -repulseRadius / d * 1;
        if (d <= repulseRadius) {
          process2();
        }
      } else {
        if (pJS2.tmp.repulse_clicking == false) {
          p.vx = p.vx_i;
          p.vy = p.vy_i;
        }
      }
    }
  };
  pJS2.fn.modes.grabParticle = function(p) {
    if (pJS2.interactivity.events.onhover.enable && pJS2.interactivity.status == "mousemove") {
      var dx_mouse = p.x - pJS2.interactivity.mouse.pos_x, dy_mouse = p.y - pJS2.interactivity.mouse.pos_y, dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
      if (dist_mouse <= pJS2.interactivity.modes.grab.distance) {
        var opacity_line = pJS2.interactivity.modes.grab.line_linked.opacity - dist_mouse / (1 / pJS2.interactivity.modes.grab.line_linked.opacity) / pJS2.interactivity.modes.grab.distance;
        if (opacity_line > 0) {
          var color_line = pJS2.particles.line_linked.color_rgb_line;
          pJS2.canvas.ctx.strokeStyle = "rgba(" + color_line.r + "," + color_line.g + "," + color_line.b + "," + opacity_line + ")";
          pJS2.canvas.ctx.lineWidth = pJS2.particles.line_linked.width;
          pJS2.canvas.ctx.beginPath();
          pJS2.canvas.ctx.moveTo(p.x, p.y);
          pJS2.canvas.ctx.lineTo(pJS2.interactivity.mouse.pos_x, pJS2.interactivity.mouse.pos_y);
          pJS2.canvas.ctx.stroke();
          pJS2.canvas.ctx.closePath();
        }
      }
    }
  };
  pJS2.fn.vendors.eventsListeners = function() {
    if (pJS2.interactivity.detect_on == "window") {
      pJS2.interactivity.el = window;
    } else {
      pJS2.interactivity.el = pJS2.canvas.el;
    }
    if (pJS2.interactivity.events.onhover.enable || pJS2.interactivity.events.onclick.enable) {
      pJS2.interactivity.el.addEventListener("mousemove", function(e) {
        if (pJS2.interactivity.el == window) {
          var pos_x = e.clientX, pos_y = e.clientY;
        } else {
          var pos_x = e.offsetX || e.clientX, pos_y = e.offsetY || e.clientY;
        }
        pJS2.interactivity.mouse.pos_x = pos_x;
        pJS2.interactivity.mouse.pos_y = pos_y;
        if (pJS2.tmp.retina) {
          pJS2.interactivity.mouse.pos_x *= pJS2.canvas.pxratio;
          pJS2.interactivity.mouse.pos_y *= pJS2.canvas.pxratio;
        }
        pJS2.interactivity.status = "mousemove";
      });
      pJS2.interactivity.el.addEventListener("mouseleave", function(e) {
        pJS2.interactivity.mouse.pos_x = null;
        pJS2.interactivity.mouse.pos_y = null;
        pJS2.interactivity.status = "mouseleave";
      });
    }
    if (pJS2.interactivity.events.onclick.enable) {
      pJS2.interactivity.el.addEventListener("click", function() {
        pJS2.interactivity.mouse.click_pos_x = pJS2.interactivity.mouse.pos_x;
        pJS2.interactivity.mouse.click_pos_y = pJS2.interactivity.mouse.pos_y;
        pJS2.interactivity.mouse.click_time = (/* @__PURE__ */ new Date()).getTime();
        if (pJS2.interactivity.events.onclick.enable) {
          switch (pJS2.interactivity.events.onclick.mode) {
            case "push":
              if (pJS2.particles.move.enable) {
                pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
              } else {
                if (pJS2.interactivity.modes.push.particles_nb == 1) {
                  pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb, pJS2.interactivity.mouse);
                } else if (pJS2.interactivity.modes.push.particles_nb > 1) {
                  pJS2.fn.modes.pushParticles(pJS2.interactivity.modes.push.particles_nb);
                }
              }
              break;
            case "remove":
              pJS2.fn.modes.removeParticles(pJS2.interactivity.modes.remove.particles_nb);
              break;
            case "bubble":
              pJS2.tmp.bubble_clicking = true;
              break;
            case "repulse":
              pJS2.tmp.repulse_clicking = true;
              pJS2.tmp.repulse_count = 0;
              pJS2.tmp.repulse_finish = false;
              setTimeout(function() {
                pJS2.tmp.repulse_clicking = false;
              }, pJS2.interactivity.modes.repulse.duration * 1e3);
              break;
          }
        }
      });
    }
  };
  pJS2.fn.vendors.densityAutoParticles = function() {
    if (pJS2.particles.number.density.enable) {
      var area = pJS2.canvas.el.width * pJS2.canvas.el.height / 1e3;
      if (pJS2.tmp.retina) {
        area = area / (pJS2.canvas.pxratio * 2);
      }
      var nb_particles = area * pJS2.particles.number.value / pJS2.particles.number.density.value_area;
      var missing_particles = pJS2.particles.array.length - nb_particles;
      if (missing_particles < 0) pJS2.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS2.fn.modes.removeParticles(missing_particles);
    }
  };
  pJS2.fn.vendors.checkOverlap = function(p1, position2) {
    for (var i = 0; i < pJS2.particles.array.length; i++) {
      var p2 = pJS2.particles.array[i];
      var dx = p1.x - p2.x, dy = p1.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy);
      if (dist <= p1.radius + p2.radius) {
        p1.x = position2 ? position2.x : Math.random() * pJS2.canvas.w;
        p1.y = position2 ? position2.y : Math.random() * pJS2.canvas.h;
        pJS2.fn.vendors.checkOverlap(p1);
      }
    }
  };
  pJS2.fn.vendors.createSvgImg = function(p) {
    var svgXml = pJS2.tmp.source_svg, rgbHex = /#([0-9A-F]{3,6})/gi, coloredSvgXml = svgXml.replace(rgbHex, function(m, r, g, b) {
      if (p.color.rgb) {
        var color_value = "rgba(" + p.color.rgb.r + "," + p.color.rgb.g + "," + p.color.rgb.b + "," + p.opacity + ")";
      } else {
        var color_value = "hsla(" + p.color.hsl.h + "," + p.color.hsl.s + "%," + p.color.hsl.l + "%," + p.opacity + ")";
      }
      return color_value;
    });
    var svg = new Blob([coloredSvgXml], { type: "image/svg+xml;charset=utf-8" }), DOMURL = window.URL || window.webkitURL || window, url = DOMURL.createObjectURL(svg);
    var img = new Image();
    img.addEventListener("load", function() {
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS2.tmp.count_svg++;
    });
    img.src = url;
  };
  pJS2.fn.vendors.destroypJS = function() {
    cancelAnimationFrame(pJS2.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };
  pJS2.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = 180 * (decimalSides - 2) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0, 0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength, 0);
      c.translate(sideLength, 0);
      c.rotate(interiorAngle);
    }
    c.fill();
    c.restore();
  };
  pJS2.fn.vendors.exportImg = function() {
    window.open(pJS2.canvas.el.toDataURL("image/png"), "_blank");
  };
  pJS2.fn.vendors.loadImg = function(type) {
    pJS2.tmp.img_error = void 0;
    if (pJS2.particles.shape.image.src != "") {
      if (type == "svg") {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", pJS2.particles.shape.image.src);
        xhr.onreadystatechange = function(data2) {
          if (xhr.readyState == 4) {
            if (xhr.status == 200) {
              pJS2.tmp.source_svg = data2.currentTarget.response;
              pJS2.fn.vendors.checkBeforeDraw();
            } else {
              console.log("Error pJS - Image not found");
              pJS2.tmp.img_error = true;
            }
          }
        };
        xhr.send();
      } else {
        var img = new Image();
        img.addEventListener("load", function() {
          pJS2.tmp.img_obj = img;
          pJS2.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS2.particles.shape.image.src;
      }
    } else {
      console.log("Error pJS - No image.src");
      pJS2.tmp.img_error = true;
    }
  };
  pJS2.fn.vendors.draw = function() {
    if (pJS2.particles.shape.type == "image") {
      if (pJS2.tmp.img_type == "svg") {
        if (pJS2.tmp.count_svg >= pJS2.particles.number.value) {
          pJS2.fn.particlesDraw();
          if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
          else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        } else {
          if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        }
      } else {
        if (pJS2.tmp.img_obj != void 0) {
          pJS2.fn.particlesDraw();
          if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
          else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        } else {
          if (!pJS2.tmp.img_error) pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
        }
      }
    } else {
      pJS2.fn.particlesDraw();
      if (!pJS2.particles.move.enable) cancelRequestAnimFrame(pJS2.fn.drawAnimFrame);
      else pJS2.fn.drawAnimFrame = requestAnimFrame(pJS2.fn.vendors.draw);
    }
  };
  pJS2.fn.vendors.checkBeforeDraw = function() {
    if (pJS2.particles.shape.type == "image") {
      if (pJS2.tmp.img_type == "svg" && pJS2.tmp.source_svg == void 0) {
        pJS2.tmp.checkAnimFrame = requestAnimFrame(check);
      } else {
        cancelRequestAnimFrame(pJS2.tmp.checkAnimFrame);
        if (!pJS2.tmp.img_error) {
          pJS2.fn.vendors.init();
          pJS2.fn.vendors.draw();
        }
      }
    } else {
      pJS2.fn.vendors.init();
      pJS2.fn.vendors.draw();
    }
  };
  pJS2.fn.vendors.init = function() {
    pJS2.fn.retinaInit();
    pJS2.fn.canvasInit();
    pJS2.fn.canvasSize();
    pJS2.fn.canvasPaint();
    pJS2.fn.particlesCreate();
    pJS2.fn.vendors.densityAutoParticles();
    pJS2.particles.line_linked.color_rgb_line = hexToRgb(pJS2.particles.line_linked.color);
  };
  pJS2.fn.vendors.start = function() {
    if (isInArray("image", pJS2.particles.shape.type)) {
      pJS2.tmp.img_type = pJS2.particles.shape.image.src.substr(pJS2.particles.shape.image.src.length - 3);
      pJS2.fn.vendors.loadImg(pJS2.tmp.img_type);
    } else {
      pJS2.fn.vendors.checkBeforeDraw();
    }
  };
  pJS2.fn.vendors.eventsListeners();
  pJS2.fn.vendors.start();
};
Object.deepExtend = function(destination, source) {
  for (var property2 in source) {
    if (source[property2] && source[property2].constructor && source[property2].constructor === Object) {
      destination[property2] = destination[property2] || {};
      arguments.callee(destination[property2], source[property2]);
    } else {
      destination[property2] = source[property2];
    }
  }
  return destination;
};
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1e3 / 60);
  };
})();
window.cancelRequestAnimFrame = (function() {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
})();
function hexToRgb(hex) {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
;
function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
}
;
function isInArray(value2, array) {
  return array.indexOf(value2) > -1;
}
window.pJSDom = [];
window.particlesJS = function(tag_id, params) {
  if (typeof tag_id != "string") {
    params = tag_id;
    tag_id = "particles-js";
  }
  if (!tag_id) {
    tag_id = "particles-js";
  }
  var pJS_tag = document.getElementById(tag_id), pJS_canvas_class = "particles-js-canvas-el", exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);
  if (exist_canvas.length) {
    while (exist_canvas.length > 0) {
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }
  var canvas_el = document.createElement("canvas");
  canvas_el.className = pJS_canvas_class;
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);
  if (canvas != null) {
    pJSDom.push(new pJS(tag_id, params));
  }
};
window.particlesJS.load = function(tag_id, path_config_json, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", path_config_json);
  xhr.onreadystatechange = function(data2) {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        var params = JSON.parse(data2.currentTarget.response);
        window.particlesJS(tag_id, params);
        if (callback) callback();
      } else {
        console.log("Error pJS - XMLHttpRequest status: " + xhr.status);
        console.log("Error pJS - File config not found");
      }
    }
  };
  xhr.send();
};
particlesJS("auth-particles", { particles: { number: { value: 90, density: { enable: true, value_area: 800 } }, color: { value: "#ffffff" }, shape: { type: "circle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: 0.8, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } }, size: { value: 4, random: true, anim: { enable: false, speed: 4, size_min: 0.2, sync: false } }, line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 }, move: { enable: true, speed: 2, direction: "none", random: false, straight: false, out_mode: "out", attract: { enable: false, rotateX: 600, rotateY: 1200 } } }, interactivity: { detect_on: "canvas", events: { onhover: { enable: true, mode: "bubble" }, onclick: { enable: true, mode: "repulse" }, resize: true }, modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 4, duration: 2, opacity: 0.8, speed: 3 }, repulse: { distance: 200 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: true, config_demo: { hide_card: false, background_color: "#b61924", background_image: "", background_position: "50% 50%", background_repeat: "no-repeat", background_size: "cover" } });
//# sourceMappingURL=scripts.js.map
