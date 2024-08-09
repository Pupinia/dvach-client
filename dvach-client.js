/**
* @vue/shared v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Gt(e, t) {
  const o = new Set(e.split(","));
  return t ? (r) => o.has(r.toLowerCase()) : (r) => o.has(r);
}
const ve = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, zo = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], Re = () => {
}, Bd = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wn = (e) => e.startsWith("onUpdate:"), Be = Object.assign, fs = (e, t) => {
  const o = e.indexOf(t);
  o > -1 && e.splice(o, 1);
}, Dd = Object.prototype.hasOwnProperty, ae = (e, t) => Dd.call(e, t), W = Array.isArray, Co = (e) => Mn(e) === "[object Map]", Gc = (e) => Mn(e) === "[object Set]", K = (e) => typeof e == "function", ke = (e) => typeof e == "string", bo = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", ps = (e) => (he(e) || K(e)) && K(e.then) && K(e.catch), Jc = Object.prototype.toString, Mn = (e) => Jc.call(e), hs = (e) => Mn(e).slice(8, -1), Yc = (e) => Mn(e) === "[object Object]", ms = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fr = /* @__PURE__ */ Gt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ad = /* @__PURE__ */ Gt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Fn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (o) => t[o] || (t[o] = e(o));
}, Vd = /-(\w)/g, rt = Fn((e) => e.replace(Vd, (t, o) => o ? o.toUpperCase() : "")), Ld = /\B([A-Z])/g, Kt = Fn(
  (e) => e.replace(Ld, "-$1").toLowerCase()
), To = Fn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _o = Fn((e) => e ? `on${To(e)}` : ""), ho = (e, t) => !Object.is(e, t), er = (e, ...t) => {
  for (let o = 0; o < e.length; o++)
    e[o](...t);
}, kn = (e, t, o, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: o
  });
}, jd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ta;
const gs = () => ta || (ta = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ar(e) {
  if (W(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++) {
      const r = e[o], n = ke(r) ? Hd(r) : Ar(r);
      if (n)
        for (const i in n)
          t[i] = n[i];
    }
    return t;
  } else if (ke(e) || he(e))
    return e;
}
const Md = /;(?![^(]*\))/g, Fd = /:([^]+)/, Ud = /\/\*[^]*?\*\//g;
function Hd(e) {
  const t = {};
  return e.replace(Ud, "").split(Md).forEach((o) => {
    if (o) {
      const r = o.split(Fd);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function dt(e) {
  let t = "";
  if (ke(e))
    t = e;
  else if (W(e))
    for (let o = 0; o < e.length; o++) {
      const r = dt(e[o]);
      r && (t += r + " ");
    }
  else if (he(e))
    for (const o in e)
      e[o] && (t += o + " ");
  return t.trim();
}
function zd(e) {
  if (!e) return null;
  let { class: t, style: o } = e;
  return t && !ke(t) && (e.class = dt(t)), o && (e.style = Ar(o)), e;
}
const Wd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Kd = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", qd = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Gd = /* @__PURE__ */ Gt(Wd), Jd = /* @__PURE__ */ Gt(Kd), Yd = /* @__PURE__ */ Gt(qd), Xd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qd = /* @__PURE__ */ Gt(Xd);
function Xc(e) {
  return !!e || e === "";
}
const Qc = (e) => !!(e && e.__v_isRef === !0), ct = (e) => ke(e) ? e : e == null ? "" : W(e) || he(e) && (e.toString === Jc || !K(e.toString)) ? Qc(e) ? ct(e.value) : JSON.stringify(e, Zc, 2) : String(e), Zc = (e, t) => Qc(t) ? Zc(e, t.value) : Co(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (o, [r, n], i) => (o[li(r, i) + " =>"] = n, o),
    {}
  )
} : Gc(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((o) => li(o))
} : bo(t) ? li(t) : he(t) && !W(t) && !Yc(t) ? String(t) : t, li = (e, t = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bo(e) ? `Symbol(${(o = e.description) != null ? o : t})` : e
  );
};
/**
* @vue/reactivity v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Tt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let et;
class el {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = et, !t && et && (this.index = (et.scopes || (et.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const o = et;
      try {
        return et = this, t();
      } finally {
        et = o;
      }
    } else process.env.NODE_ENV !== "production" && Tt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    et = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    et = this.parent;
  }
  stop(t) {
    if (this._active) {
      let o, r;
      for (o = 0, r = this.effects.length; o < r; o++)
        this.effects[o].stop();
      for (o = 0, r = this.cleanups.length; o < r; o++)
        this.cleanups[o]();
      if (this.scopes)
        for (o = 0, r = this.scopes.length; o < r; o++)
          this.scopes[o].stop(!0);
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function tl(e) {
  return new el(e);
}
function Zd(e, t = et) {
  t && t.active && t.effects.push(e);
}
function ol() {
  return et;
}
function ef(e) {
  et ? et.cleanups.push(e) : process.env.NODE_ENV !== "production" && Tt(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let So;
class bs {
  constructor(t, o, r, n) {
    this.fn = t, this.trigger = o, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Zd(this, n);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Jt();
      for (let t = 0; t < this._depsLength; t++) {
        const o = this.deps[t];
        if (o.computed && (tf(o.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Yt();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = fo, o = So;
    try {
      return fo = !0, So = this, this._runnings++, oa(this), this.fn();
    } finally {
      ra(this), this._runnings--, So = o, fo = t;
    }
  }
  stop() {
    this.active && (oa(this), ra(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function tf(e) {
  return e.value;
}
function oa(e) {
  e._trackId++, e._depsLength = 0;
}
function ra(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      rl(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function rl(e, t) {
  const o = e.get(t);
  o !== void 0 && t._trackId !== o && (e.delete(t), e.size === 0 && e.cleanup());
}
let fo = !0, Pi = 0;
const nl = [];
function Jt() {
  nl.push(fo), fo = !1;
}
function Yt() {
  const e = nl.pop();
  fo = e === void 0 ? !0 : e;
}
function vs() {
  Pi++;
}
function ys() {
  for (Pi--; !Pi && Ti.length; )
    Ti.shift()();
}
function il(e, t, o) {
  var r;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const n = e.deps[e._depsLength];
    n !== t ? (n && rl(n, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((r = e.onTrack) == null || r.call(e, Be({ effect: e }, o)));
  }
}
const Ti = [];
function sl(e, t, o) {
  var r;
  vs();
  for (const n of e.keys()) {
    let i;
    n._dirtyLevel < t && (i ?? (i = e.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = t), n._shouldSchedule && (i ?? (i = e.get(n) === n._trackId)) && (process.env.NODE_ENV !== "production" && ((r = n.onTrigger) == null || r.call(n, Be({ effect: n }, o))), n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && Ti.push(n.scheduler)));
  }
  ys();
}
const al = (e, t) => {
  const o = /* @__PURE__ */ new Map();
  return o.cleanup = e, o.computed = t, o;
}, xn = /* @__PURE__ */ new WeakMap(), Oo = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Bi = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function Ve(e, t, o) {
  if (fo && So) {
    let r = xn.get(e);
    r || xn.set(e, r = /* @__PURE__ */ new Map());
    let n = r.get(o);
    n || r.set(o, n = al(() => r.delete(o))), il(
      So,
      n,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: o
      } : void 0
    );
  }
}
function It(e, t, o, r, n, i) {
  const s = xn.get(e);
  if (!s)
    return;
  let a = [];
  if (t === "clear")
    a = [...s.values()];
  else if (o === "length" && W(e)) {
    const c = Number(r);
    s.forEach((l, u) => {
      (u === "length" || !bo(u) && u >= c) && a.push(l);
    });
  } else
    switch (o !== void 0 && a.push(s.get(o)), t) {
      case "add":
        W(e) ? ms(o) && a.push(s.get("length")) : (a.push(s.get(Oo)), Co(e) && a.push(s.get(Bi)));
        break;
      case "delete":
        W(e) || (a.push(s.get(Oo)), Co(e) && a.push(s.get(Bi)));
        break;
      case "set":
        Co(e) && a.push(s.get(Oo));
        break;
    }
  vs();
  for (const c of a)
    c && sl(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: o,
        newValue: r,
        oldValue: n,
        oldTarget: i
      } : void 0
    );
  ys();
}
function of(e, t) {
  const o = xn.get(e);
  return o && o.get(t);
}
const rf = /* @__PURE__ */ Gt("__proto__,__v_isRef,__isVue"), cl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bo)
), na = /* @__PURE__ */ nf();
function nf() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...o) {
      const r = G(this);
      for (let i = 0, s = this.length; i < s; i++)
        Ve(r, "get", i + "");
      const n = r[t](...o);
      return n === -1 || n === !1 ? r[t](...o.map(G)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...o) {
      Jt(), vs();
      const r = G(this)[t].apply(this, o);
      return ys(), Yt(), r;
    };
  }), e;
}
function sf(e) {
  bo(e) || (e = String(e));
  const t = G(this);
  return Ve(t, "has", e), t.hasOwnProperty(e);
}
class ll {
  constructor(t = !1, o = !1) {
    this._isReadonly = t, this._isShallow = o;
  }
  get(t, o, r) {
    const n = this._isReadonly, i = this._isShallow;
    if (o === "__v_isReactive")
      return !n;
    if (o === "__v_isReadonly")
      return n;
    if (o === "__v_isShallow")
      return i;
    if (o === "__v_raw")
      return r === (n ? i ? gl : ml : i ? hl : pl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const s = W(t);
    if (!n) {
      if (s && ae(na, o))
        return Reflect.get(na, o, r);
      if (o === "hasOwnProperty")
        return sf;
    }
    const a = Reflect.get(t, o, r);
    return (bo(o) ? cl.has(o) : rf(o)) || (n || Ve(t, "get", o), i) ? a : _e(a) ? s && ms(o) ? a : a.value : he(a) ? n ? ws(a) : Yo(a) : a;
  }
}
class ul extends ll {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, o, r, n) {
    let i = t[o];
    if (!this._isShallow) {
      const c = qt(i);
      if (!Ht(r) && !qt(r) && (i = G(i), r = G(r)), !W(t) && _e(i) && !_e(r))
        return c ? !1 : (i.value = r, !0);
    }
    const s = W(t) && ms(o) ? Number(o) < t.length : ae(t, o), a = Reflect.set(t, o, r, n);
    return t === G(n) && (s ? ho(r, i) && It(t, "set", o, r, i) : It(t, "add", o, r)), a;
  }
  deleteProperty(t, o) {
    const r = ae(t, o), n = t[o], i = Reflect.deleteProperty(t, o);
    return i && r && It(t, "delete", o, void 0, n), i;
  }
  has(t, o) {
    const r = Reflect.has(t, o);
    return (!bo(o) || !cl.has(o)) && Ve(t, "has", o), r;
  }
  ownKeys(t) {
    return Ve(
      t,
      "iterate",
      W(t) ? "length" : Oo
    ), Reflect.ownKeys(t);
  }
}
class dl extends ll {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, o) {
    return process.env.NODE_ENV !== "production" && Tt(
      `Set operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, o) {
    return process.env.NODE_ENV !== "production" && Tt(
      `Delete operation on key "${String(o)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const af = /* @__PURE__ */ new ul(), cf = /* @__PURE__ */ new dl(), lf = /* @__PURE__ */ new ul(
  !0
), uf = /* @__PURE__ */ new dl(!0), _s = (e) => e, Un = (e) => Reflect.getPrototypeOf(e);
function Wr(e, t, o = !1, r = !1) {
  e = e.__v_raw;
  const n = G(e), i = G(t);
  o || (ho(t, i) && Ve(n, "get", t), Ve(n, "get", i));
  const { has: s } = Un(n), a = r ? _s : o ? ks : yr;
  if (s.call(n, t))
    return a(e.get(t));
  if (s.call(n, i))
    return a(e.get(i));
  e !== n && e.get(t);
}
function Kr(e, t = !1) {
  const o = this.__v_raw, r = G(o), n = G(e);
  return t || (ho(e, n) && Ve(r, "has", e), Ve(r, "has", n)), e === n ? o.has(e) : o.has(e) || o.has(n);
}
function qr(e, t = !1) {
  return e = e.__v_raw, !t && Ve(G(e), "iterate", Oo), Reflect.get(e, "size", e);
}
function ia(e, t = !1) {
  !t && !Ht(e) && !qt(e) && (e = G(e));
  const o = G(this);
  return Un(o).has.call(o, e) || (o.add(e), It(o, "add", e, e)), this;
}
function sa(e, t, o = !1) {
  !o && !Ht(t) && !qt(t) && (t = G(t));
  const r = G(this), { has: n, get: i } = Un(r);
  let s = n.call(r, e);
  s ? process.env.NODE_ENV !== "production" && fl(r, n, e) : (e = G(e), s = n.call(r, e));
  const a = i.call(r, e);
  return r.set(e, t), s ? ho(t, a) && It(r, "set", e, t, a) : It(r, "add", e, t), this;
}
function aa(e) {
  const t = G(this), { has: o, get: r } = Un(t);
  let n = o.call(t, e);
  n ? process.env.NODE_ENV !== "production" && fl(t, o, e) : (e = G(e), n = o.call(t, e));
  const i = r ? r.call(t, e) : void 0, s = t.delete(e);
  return n && It(t, "delete", e, void 0, i), s;
}
function ca() {
  const e = G(this), t = e.size !== 0, o = process.env.NODE_ENV !== "production" ? Co(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && It(e, "clear", void 0, void 0, o), r;
}
function Gr(e, t) {
  return function(r, n) {
    const i = this, s = i.__v_raw, a = G(s), c = t ? _s : e ? ks : yr;
    return !e && Ve(a, "iterate", Oo), s.forEach((l, u) => r.call(n, c(l), c(u), i));
  };
}
function Jr(e, t, o) {
  return function(...r) {
    const n = this.__v_raw, i = G(n), s = Co(i), a = e === "entries" || e === Symbol.iterator && s, c = e === "keys" && s, l = n[e](...r), u = o ? _s : t ? ks : yr;
    return !t && Ve(
      i,
      "iterate",
      c ? Bi : Oo
    ), {
      // iterator protocol
      next() {
        const { value: d, done: f } = l.next();
        return f ? { value: d, done: f } : {
          value: a ? [u(d[0]), u(d[1])] : u(d),
          done: f
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Zt(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const o = t[0] ? `on key "${t[0]}" ` : "";
      Tt(
        `${To(e)} operation ${o}failed: target is readonly.`,
        G(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function df() {
  const e = {
    get(i) {
      return Wr(this, i);
    },
    get size() {
      return qr(this);
    },
    has: Kr,
    add: ia,
    set: sa,
    delete: aa,
    clear: ca,
    forEach: Gr(!1, !1)
  }, t = {
    get(i) {
      return Wr(this, i, !1, !0);
    },
    get size() {
      return qr(this);
    },
    has: Kr,
    add(i) {
      return ia.call(this, i, !0);
    },
    set(i, s) {
      return sa.call(this, i, s, !0);
    },
    delete: aa,
    clear: ca,
    forEach: Gr(!1, !0)
  }, o = {
    get(i) {
      return Wr(this, i, !0);
    },
    get size() {
      return qr(this, !0);
    },
    has(i) {
      return Kr.call(this, i, !0);
    },
    add: Zt("add"),
    set: Zt("set"),
    delete: Zt("delete"),
    clear: Zt("clear"),
    forEach: Gr(!0, !1)
  }, r = {
    get(i) {
      return Wr(this, i, !0, !0);
    },
    get size() {
      return qr(this, !0);
    },
    has(i) {
      return Kr.call(this, i, !0);
    },
    add: Zt("add"),
    set: Zt("set"),
    delete: Zt("delete"),
    clear: Zt("clear"),
    forEach: Gr(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    e[i] = Jr(i, !1, !1), o[i] = Jr(i, !0, !1), t[i] = Jr(i, !1, !0), r[i] = Jr(
      i,
      !0,
      !0
    );
  }), [
    e,
    o,
    t,
    r
  ];
}
const [
  ff,
  pf,
  hf,
  mf
] = /* @__PURE__ */ df();
function Hn(e, t) {
  const o = t ? e ? mf : hf : e ? pf : ff;
  return (r, n, i) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? r : Reflect.get(
    ae(o, n) && n in r ? o : r,
    n,
    i
  );
}
const gf = {
  get: /* @__PURE__ */ Hn(!1, !1)
}, bf = {
  get: /* @__PURE__ */ Hn(!1, !0)
}, vf = {
  get: /* @__PURE__ */ Hn(!0, !1)
}, yf = {
  get: /* @__PURE__ */ Hn(!0, !0)
};
function fl(e, t, o) {
  const r = G(o);
  if (r !== o && t.call(e, r)) {
    const n = hs(e);
    Tt(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const pl = /* @__PURE__ */ new WeakMap(), hl = /* @__PURE__ */ new WeakMap(), ml = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new WeakMap();
function _f(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wf(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _f(hs(e));
}
function Yo(e) {
  return qt(e) ? e : zn(
    e,
    !1,
    af,
    gf,
    pl
  );
}
function bl(e) {
  return zn(
    e,
    !1,
    lf,
    bf,
    hl
  );
}
function ws(e) {
  return zn(
    e,
    !0,
    cf,
    vf,
    ml
  );
}
function Ot(e) {
  return zn(
    e,
    !0,
    uf,
    yf,
    gl
  );
}
function zn(e, t, o, r, n) {
  if (!he(e))
    return process.env.NODE_ENV !== "production" && Tt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = n.get(e);
  if (i)
    return i;
  const s = wf(e);
  if (s === 0)
    return e;
  const a = new Proxy(
    e,
    s === 2 ? r : o
  );
  return n.set(e, a), a;
}
function Rt(e) {
  return qt(e) ? Rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function qt(e) {
  return !!(e && e.__v_isReadonly);
}
function Ht(e) {
  return !!(e && e.__v_isShallow);
}
function En(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function co(e) {
  return Object.isExtensible(e) && kn(e, "__v_skip", !0), e;
}
const yr = (e) => he(e) ? Yo(e) : e, ks = (e) => he(e) ? ws(e) : e, kf = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class vl {
  constructor(t, o, r, n) {
    this.getter = t, this._setter = o, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new bs(
      () => t(this._value),
      () => on(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !n, this.__v_isReadonly = r;
  }
  get value() {
    const t = G(this);
    return (!t._cacheable || t.effect.dirty) && ho(t._value, t._value = t.effect.run()) && on(t, 4), yl(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Tt(kf, `

getter: `, this.getter), on(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function xf(e, t, o = !1) {
  let r, n;
  const i = K(e);
  i ? (r = e, n = process.env.NODE_ENV !== "production" ? () => {
    Tt("Write operation failed: computed value is readonly");
  } : Re) : (r = e.get, n = e.set);
  const s = new vl(r, n, i || !n, o);
  return process.env.NODE_ENV !== "production" && t && !o && (s.effect.onTrack = t.onTrack, s.effect.onTrigger = t.onTrigger), s;
}
function yl(e) {
  var t;
  fo && So && (e = G(e), il(
    So,
    (t = e.dep) != null ? t : e.dep = al(
      () => e.dep = void 0,
      e instanceof vl ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function on(e, t = 4, o, r) {
  e = G(e);
  const n = e.dep;
  n && sl(
    n,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: o,
      oldValue: r
    } : void 0
  );
}
function _e(e) {
  return !!(e && e.__v_isRef === !0);
}
function $t(e) {
  return _l(e, !1);
}
function Ef(e) {
  return _l(e, !0);
}
function _l(e, t) {
  return _e(e) ? e : new Cf(e, t);
}
class Cf {
  constructor(t, o) {
    this.__v_isShallow = o, this.dep = void 0, this.__v_isRef = !0, this._rawValue = o ? t : G(t), this._value = o ? t : yr(t);
  }
  get value() {
    return yl(this), this._value;
  }
  set value(t) {
    const o = this.__v_isShallow || Ht(t) || qt(t);
    if (t = o ? t : G(t), ho(t, this._rawValue)) {
      const r = this._rawValue;
      this._rawValue = t, this._value = o ? t : yr(t), on(this, 4, t, r);
    }
  }
}
function lt(e) {
  return _e(e) ? e.value : e;
}
const Sf = {
  get: (e, t, o) => lt(Reflect.get(e, t, o)),
  set: (e, t, o, r) => {
    const n = e[t];
    return _e(n) && !_e(o) ? (n.value = o, !0) : Reflect.set(e, t, o, r);
  }
};
function wl(e) {
  return Rt(e) ? e : new Proxy(e, Sf);
}
function la(e) {
  process.env.NODE_ENV !== "production" && !En(e) && Tt("toRefs() expects a reactive object but received a plain one.");
  const t = W(e) ? new Array(e.length) : {};
  for (const o in e)
    t[o] = kl(e, o);
  return t;
}
class Of {
  constructor(t, o, r) {
    this._object = t, this._key = o, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return of(G(this._object), this._key);
  }
}
class Nf {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function rn(e, t, o) {
  return _e(e) ? e : K(e) ? new Nf(e) : he(e) && arguments.length > 1 ? kl(e, t, o) : $t(e);
}
function kl(e, t, o) {
  const r = e[t];
  return _e(r) ? r : new Of(e, t, o);
}
/**
* @vue/runtime-core v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const No = [];
function nn(e) {
  No.push(e);
}
function sn() {
  No.pop();
}
let ui = !1;
function $(e, ...t) {
  if (ui) return;
  ui = !0, Jt();
  const o = No.length ? No[No.length - 1].component : null, r = o && o.appContext.config.warnHandler, n = If();
  if (r)
    zt(
      r,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, a;
          return (a = (s = i.toString) == null ? void 0 : s.call(i)) != null ? a : JSON.stringify(i);
        }).join(""),
        o && o.proxy,
        n.map(
          ({ vnode: i }) => `at <${Qn(o, i.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    n.length && i.push(`
`, ...Rf(n)), console.warn(...i);
  }
  Yt(), ui = !1;
}
function If() {
  let e = No[No.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const o = t[0];
    o && o.vnode === e ? o.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Rf(e) {
  const t = [];
  return e.forEach((o, r) => {
    t.push(...r === 0 ? [] : [`
`], ...$f(o));
  }), t;
}
function $f({ vnode: e, recurseCount: t }) {
  const o = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, n = ` at <${Qn(
    e.component,
    e.type,
    r
  )}`, i = ">" + o;
  return e.props ? [n, ...Pf(e.props), i] : [n + i];
}
function Pf(e) {
  const t = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((r) => {
    t.push(...xl(r, e[r]));
  }), o.length > 3 && t.push(" ..."), t;
}
function xl(e, t, o) {
  return ke(t) ? (t = JSON.stringify(t), o ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? o ? t : [`${e}=${t}`] : _e(t) ? (t = xl(e, G(t.value), !0), o ? t : [`${e}=Ref<`, t, ">"]) : K(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), o ? t : [`${e}=`, t]);
}
const xs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update"
};
function zt(e, t, o, r) {
  try {
    return r ? e(...r) : e();
  } catch (n) {
    Vr(n, t, o);
  }
}
function wt(e, t, o, r) {
  if (K(e)) {
    const n = zt(e, t, o, r);
    return n && ps(n) && n.catch((i) => {
      Vr(i, t, o);
    }), n;
  }
  if (W(e)) {
    const n = [];
    for (let i = 0; i < e.length; i++)
      n.push(wt(e[i], t, o, r));
    return n;
  } else process.env.NODE_ENV !== "production" && $(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Vr(e, t, o, r = !0) {
  const n = t ? t.vnode : null;
  if (t) {
    let i = t.parent;
    const s = t.proxy, a = process.env.NODE_ENV !== "production" ? xs[o] : `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; i; ) {
      const l = i.ec;
      if (l) {
        for (let u = 0; u < l.length; u++)
          if (l[u](e, s, a) === !1)
            return;
      }
      i = i.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Jt(), zt(
        c,
        null,
        10,
        [e, s, a]
      ), Yt();
      return;
    }
  }
  Tf(e, o, n, r);
}
function Tf(e, t, o, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const n = xs[t];
    if (o && nn(o), $(`Unhandled error${n ? ` during execution of ${n}` : ""}`), o && sn(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let _r = !1, Di = !1;
const Me = [];
let St = 0;
const Wo = [];
let oo = null, ko = 0;
const El = /* @__PURE__ */ Promise.resolve();
let Es = null;
const Bf = 100;
function wr(e) {
  const t = Es || El;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Df(e) {
  let t = St + 1, o = Me.length;
  for (; t < o; ) {
    const r = t + o >>> 1, n = Me[r], i = kr(n);
    i < e || i === e && n.pre ? t = r + 1 : o = r;
  }
  return t;
}
function Wn(e) {
  (!Me.length || !Me.includes(
    e,
    _r && e.allowRecurse ? St + 1 : St
  )) && (e.id == null ? Me.push(e) : Me.splice(Df(e.id), 0, e), Cl());
}
function Cl() {
  !_r && !Di && (Di = !0, Es = El.then(Nl));
}
function Af(e) {
  const t = Me.indexOf(e);
  t > St && Me.splice(t, 1);
}
function Sl(e) {
  W(e) ? Wo.push(...e) : (!oo || !oo.includes(
    e,
    e.allowRecurse ? ko + 1 : ko
  )) && Wo.push(e), Cl();
}
function ua(e, t, o = _r ? St + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); o < Me.length; o++) {
    const r = Me[o];
    if (r && r.pre) {
      if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Cs(t, r))
        continue;
      Me.splice(o, 1), o--, r();
    }
  }
}
function Ol(e) {
  if (Wo.length) {
    const t = [...new Set(Wo)].sort(
      (o, r) => kr(o) - kr(r)
    );
    if (Wo.length = 0, oo) {
      oo.push(...t);
      return;
    }
    for (oo = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), ko = 0; ko < oo.length; ko++) {
      const o = oo[ko];
      process.env.NODE_ENV !== "production" && Cs(e, o) || o.active !== !1 && o();
    }
    oo = null, ko = 0;
  }
}
const kr = (e) => e.id == null ? 1 / 0 : e.id, Vf = (e, t) => {
  const o = kr(e) - kr(t);
  if (o === 0) {
    if (e.pre && !t.pre) return -1;
    if (t.pre && !e.pre) return 1;
  }
  return o;
};
function Nl(e) {
  Di = !1, _r = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Me.sort(Vf);
  const t = process.env.NODE_ENV !== "production" ? (o) => Cs(e, o) : Re;
  try {
    for (St = 0; St < Me.length; St++) {
      const o = Me[St];
      if (o && o.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(o))
          continue;
        zt(
          o,
          o.i,
          o.i ? 15 : 14
        );
      }
    }
  } finally {
    St = 0, Me.length = 0, Ol(e), _r = !1, Es = null, (Me.length || Wo.length) && Nl(e);
  }
}
function Cs(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const o = e.get(t);
    if (o > Bf) {
      const r = t.i, n = r && As(r.type);
      return Vr(
        `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, o + 1);
  }
}
let Io = !1;
const an = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (gs().__VUE_HMR_RUNTIME__ = {
  createRecord: di(Il),
  rerender: di(Mf),
  reload: di(Ff)
});
const Bo = /* @__PURE__ */ new Map();
function Lf(e) {
  const t = e.type.__hmrId;
  let o = Bo.get(t);
  o || (Il(t, e.type), o = Bo.get(t)), o.instances.add(e);
}
function jf(e) {
  Bo.get(e.type.__hmrId).instances.delete(e);
}
function Il(e, t) {
  return Bo.has(e) ? !1 : (Bo.set(e, {
    initialDef: Cn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Cn(e) {
  return lu(e) ? e.__vccOpts : e;
}
function Mf(e, t) {
  const o = Bo.get(e);
  o && (o.initialDef.render = t, [...o.instances].forEach((r) => {
    t && (r.render = t, Cn(r.type).render = t), r.renderCache = [], Io = !0, r.effect.dirty = !0, r.update(), Io = !1;
  }));
}
function Ff(e, t) {
  const o = Bo.get(e);
  if (!o) return;
  t = Cn(t), da(o.initialDef, t);
  const r = [...o.instances];
  for (let n = 0; n < r.length; n++) {
    const i = r[n], s = Cn(i.type);
    let a = an.get(s);
    a || (s !== o.initialDef && da(s, t), an.set(s, a = /* @__PURE__ */ new Set())), a.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (a.add(i), i.ceReload(t.styles), a.delete(i)) : i.parent ? (i.parent.effect.dirty = !0, Wn(() => {
      i.parent.update(), a.delete(i);
    })) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Sl(() => {
    an.clear();
  });
}
function da(e, t) {
  Be(e, t);
  for (const o in e)
    o !== "__file" && !(o in t) && delete e[o];
}
function di(e) {
  return (t, o) => {
    try {
      return e(t, o);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let _t, cr = [], Ai = !1;
function Lr(e, ...t) {
  _t ? _t.emit(e, ...t) : Ai || cr.push({ event: e, args: t });
}
function Ss(e, t) {
  var o, r;
  _t = e, _t ? (_t.enabled = !0, cr.forEach(({ event: n, args: i }) => _t.emit(n, ...i)), cr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((r = (o = window.navigator) == null ? void 0 : o.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ss(i, t);
  }), setTimeout(() => {
    _t || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ai = !0, cr = []);
  }, 3e3)) : (Ai = !0, cr = []);
}
function Uf(e, t) {
  Lr("app:init", e, t, {
    Fragment: we,
    Text: jr,
    Comment: Ye,
    Static: hr
  });
}
function Hf(e) {
  Lr("app:unmount", e);
}
const zf = /* @__PURE__ */ Os(
  "component:added"
  /* COMPONENT_ADDED */
), Rl = /* @__PURE__ */ Os(
  "component:updated"
  /* COMPONENT_UPDATED */
), Wf = /* @__PURE__ */ Os(
  "component:removed"
  /* COMPONENT_REMOVED */
), Kf = (e) => {
  _t && typeof _t.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !_t.cleanupBuffer(e) && Wf(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Os(e) {
  return (t) => {
    Lr(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const qf = /* @__PURE__ */ $l(
  "perf:start"
  /* PERFORMANCE_START */
), Gf = /* @__PURE__ */ $l(
  "perf:end"
  /* PERFORMANCE_END */
);
function $l(e) {
  return (t, o, r) => {
    Lr(e, t.appContext.app, t.uid, t, o, r);
  };
}
function Jf(e, t, o) {
  Lr(
    "component:emit",
    e.appContext.app,
    e,
    t,
    o
  );
}
let $e = null, Kn = null;
function Sn(e) {
  const t = $e;
  return $e = e, Kn = e && e.type.__scopeId || null, t;
}
function Yf(e) {
  Kn = e;
}
function Xf() {
  Kn = null;
}
function Nt(e, t = $e, o) {
  if (!t || e._n)
    return e;
  const r = (...n) => {
    r._d && xa(-1);
    const i = Sn(t);
    let s;
    try {
      s = e(...n);
    } finally {
      Sn(i), r._d && xa(1);
    }
    return process.env.NODE_ENV !== "production" && Rl(t), s;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Pl(e) {
  Ad(e) && $("Do not use built-in directive ids as custom directive id: " + e);
}
function cn(e, t) {
  if ($e === null)
    return process.env.NODE_ENV !== "production" && $("withDirectives can only be used inside render functions."), e;
  const o = Xn($e), r = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [i, s, a, c = ve] = t[n];
    i && (K(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && so(s), r.push({
      dir: i,
      instance: o,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: c
    }));
  }
  return e;
}
function vo(e, t, o, r) {
  const n = e.dirs, i = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const a = n[s];
    i && (a.oldValue = i[s].value);
    let c = a.dir[r];
    c && (Jt(), wt(c, o, 8, [
      e.el,
      a,
      e,
      t
    ]), Yt());
  }
}
function Tl(e, t) {
  e.shapeFlag & 6 && e.component ? Tl(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Bl(e, t) {
  return K(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Be({ name: e.name }, t, { setup: e })
  ) : e;
}
const pr = (e) => !!e.type.__asyncLoader, Ns = (e) => e.type.__isKeepAlive;
function Qf(e, t) {
  Dl(e, "a", t);
}
function Zf(e, t) {
  Dl(e, "da", t);
}
function Dl(e, t, o = Te) {
  const r = e.__wdc || (e.__wdc = () => {
    let n = o;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (qn(t, r, o), o) {
    let n = o.parent;
    for (; n && n.parent; )
      Ns(n.parent.vnode) && ep(r, t, o, n), n = n.parent;
  }
}
function ep(e, t, o, r) {
  const n = qn(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Vl(() => {
    fs(r[t], n);
  }, o);
}
function qn(e, t, o = Te, r = !1) {
  if (o) {
    const n = o[e] || (o[e] = []), i = t.__weh || (t.__weh = (...s) => {
      Jt();
      const a = Fr(o), c = wt(t, o, e, s);
      return a(), Yt(), c;
    });
    return r ? n.unshift(i) : n.push(i), i;
  } else if (process.env.NODE_ENV !== "production") {
    const n = _o(xs[e].replace(/ hook$/, ""));
    $(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Xt = (e) => (t, o = Te) => {
  (!Yn || e === "sp") && qn(e, (...r) => t(...r), o);
}, Al = Xt("bm"), Gn = Xt("m"), tp = Xt("bu"), op = Xt("u"), rp = Xt("bum"), Vl = Xt("um"), np = Xt("sp"), ip = Xt(
  "rtg"
), sp = Xt(
  "rtc"
);
function ap(e, t = Te) {
  qn("ec", e, t);
}
const On = "components", cp = "directives";
function Ko(e, t) {
  return Is(On, e, !0, t) || e;
}
const Ll = Symbol.for("v-ndc");
function Yr(e) {
  return ke(e) ? Is(On, e, !1) || e : e || Ll;
}
function lp(e) {
  return Is(cp, e);
}
function Is(e, t, o = !0, r = !1) {
  const n = $e || Te;
  if (n) {
    const i = n.type;
    if (e === On) {
      const a = As(
        i,
        !1
      );
      if (a && (a === t || a === rt(t) || a === To(rt(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      fa(n[e] || i[e], t) || // global registration
      fa(n.appContext[e], t)
    );
    if (!s && r)
      return i;
    if (process.env.NODE_ENV !== "production" && o && !s) {
      const a = e === On ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      $(`Failed to resolve ${e.slice(0, -1)}: ${t}${a}`);
    }
    return s;
  } else process.env.NODE_ENV !== "production" && $(
    `resolve${To(e.slice(0, -1))} can only be used in render() or setup().`
  );
}
function fa(e, t) {
  return e && (e[t] || e[rt(t)] || e[To(rt(t))]);
}
function Wt(e, t, o, r) {
  let n;
  const i = o;
  if (W(e) || ke(e)) {
    n = new Array(e.length);
    for (let s = 0, a = e.length; s < a; s++)
      n[s] = t(e[s], s, void 0, i);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && $(`The v-for range expect an integer value but got ${e}.`), n = new Array(e);
    for (let s = 0; s < e; s++)
      n[s] = t(s + 1, s, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (s, a) => t(s, a, void 0, i)
      );
    else {
      const s = Object.keys(e);
      n = new Array(s.length);
      for (let a = 0, c = s.length; a < c; a++) {
        const l = s[a];
        n[a] = t(e[l], l, a, i);
      }
    }
  else
    n = [];
  return n;
}
function Ft(e, t, o = {}, r, n) {
  if ($e.isCE || $e.parent && pr($e.parent) && $e.parent.isCE)
    return t !== "default" && (o.name = t), Pe("slot", o, r && r());
  let i = e[t];
  process.env.NODE_ENV !== "production" && i && i.length > 1 && ($(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), i = () => []), i && i._c && (i._d = !1), U();
  const s = i && jl(i(o)), a = Je(
    we,
    {
      key: (o.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      s && s.key || `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!s && r ? "_fb" : "")
    },
    s || (r ? r() : []),
    s && e._ === 1 ? 64 : -2
  );
  return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), i && i._c && (i._d = !0), a;
}
function jl(e) {
  return e.some((t) => qo(t) ? !(t.type === Ye || t.type === we && !jl(t.children)) : !0) ? e : null;
}
const Vi = (e) => e ? au(e) ? Xn(e) : Vi(e.parent) : null, Ro = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ot(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ot(e.refs) : e.refs,
    $parent: (e) => Vi(e.parent),
    $root: (e) => Vi(e.root),
    $emit: (e) => e.emit,
    $options: (e) => $s(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Wn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wr.bind(e.proxy)),
    $watch: (e) => Wp.bind(e)
  })
), Rs = (e) => e === "_" || e === "$", fi = (e, t) => e !== ve && !e.__isScriptSetup && ae(e, t), Ml = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: o, setupState: r, data: n, props: i, accessCache: s, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let l;
    if (t[0] !== "$") {
      const h = s[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[t];
          case 2:
            return n[t];
          case 4:
            return o[t];
          case 3:
            return i[t];
        }
      else {
        if (fi(r, t))
          return s[t] = 1, r[t];
        if (n !== ve && ae(n, t))
          return s[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (l = e.propsOptions[0]) && ae(l, t)
        )
          return s[t] = 3, i[t];
        if (o !== ve && ae(o, t))
          return s[t] = 4, o[t];
        Li && (s[t] = 0);
      }
    }
    const u = Ro[t];
    let d, f;
    if (u)
      return t === "$attrs" ? (Ve(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Rn()) : process.env.NODE_ENV !== "production" && t === "$slots" && Ve(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (o !== ve && ae(o, t))
      return s[t] = 4, o[t];
    if (
      // global properties
      f = c.config.globalProperties, ae(f, t)
    )
      return f[t];
    process.env.NODE_ENV !== "production" && $e && (!ke(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (n !== ve && Rs(t[0]) && ae(n, t) ? $(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === $e && $(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, o) {
    const { data: r, setupState: n, ctx: i } = e;
    return fi(n, t) ? (n[t] = o, !0) : process.env.NODE_ENV !== "production" && n.__isScriptSetup && ae(n, t) ? ($(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== ve && ae(r, t) ? (r[t] = o, !0) : ae(e.props, t) ? (process.env.NODE_ENV !== "production" && $(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && $(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: o
    }) : i[t] = o, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: o, ctx: r, appContext: n, propsOptions: i }
  }, s) {
    let a;
    return !!o[s] || e !== ve && ae(e, s) || fi(t, s) || (a = i[0]) && ae(a, s) || ae(r, s) || ae(Ro, s) || ae(n.config.globalProperties, s);
  },
  defineProperty(e, t, o) {
    return o.get != null ? e._.accessCache[t] = 0 : ae(o, "value") && this.set(e, t, o.value, null), Reflect.defineProperty(e, t, o);
  }
};
process.env.NODE_ENV !== "production" && (Ml.ownKeys = (e) => ($(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function up(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ro).forEach((o) => {
    Object.defineProperty(t, o, {
      configurable: !0,
      enumerable: !1,
      get: () => Ro[o](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: Re
    });
  }), t;
}
function dp(e) {
  const {
    ctx: t,
    propsOptions: [o]
  } = e;
  o && Object.keys(o).forEach((r) => {
    Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[r],
      set: Re
    });
  });
}
function fp(e) {
  const { ctx: t, setupState: o } = e;
  Object.keys(G(o)).forEach((r) => {
    if (!o.__isScriptSetup) {
      if (Rs(r[0])) {
        $(
          `setup() return property ${JSON.stringify(
            r
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => o[r],
        set: Re
      });
    }
  });
}
function pa(e) {
  return W(e) ? e.reduce(
    (t, o) => (t[o] = null, t),
    {}
  ) : e;
}
function pp() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, o) => {
    e[o] ? $(`${t} property "${o}" is already defined in ${e[o]}.`) : e[o] = t;
  };
}
let Li = !0;
function hp(e) {
  const t = $s(e), o = e.proxy, r = e.ctx;
  Li = !1, t.beforeCreate && ha(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: i,
    methods: s,
    watch: a,
    provide: c,
    inject: l,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: f,
    beforeUpdate: h,
    updated: g,
    activated: b,
    deactivated: y,
    beforeDestroy: O,
    beforeUnmount: v,
    destroyed: w,
    unmounted: L,
    render: H,
    renderTracked: Z,
    renderTriggered: C,
    errorCaptured: fe,
    serverPrefetch: ee,
    // public API
    expose: D,
    inheritAttrs: T,
    // assets
    components: J,
    directives: be,
    filters: Fe
  } = t, Ne = process.env.NODE_ENV !== "production" ? pp() : null;
  if (process.env.NODE_ENV !== "production") {
    const [Y] = e.propsOptions;
    if (Y)
      for (const q in Y)
        Ne("Props", q);
  }
  if (l && mp(l, r, Ne), s)
    for (const Y in s) {
      const q = s[Y];
      K(q) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(r, Y, {
        value: q.bind(o),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[Y] = q.bind(o), process.env.NODE_ENV !== "production" && Ne("Methods", Y)) : process.env.NODE_ENV !== "production" && $(
        `Method "${Y}" has type "${typeof q}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    process.env.NODE_ENV !== "production" && !K(n) && $(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const Y = n.call(o, o);
    if (process.env.NODE_ENV !== "production" && ps(Y) && $(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !he(Y))
      process.env.NODE_ENV !== "production" && $("data() should return an object.");
    else if (e.data = Yo(Y), process.env.NODE_ENV !== "production")
      for (const q in Y)
        Ne("Data", q), Rs(q[0]) || Object.defineProperty(r, q, {
          configurable: !0,
          enumerable: !0,
          get: () => Y[q],
          set: Re
        });
  }
  if (Li = !0, i)
    for (const Y in i) {
      const q = i[Y], me = K(q) ? q.bind(o, o) : K(q.get) ? q.get.bind(o, o) : Re;
      process.env.NODE_ENV !== "production" && me === Re && $(`Computed property "${Y}" has no getter.`);
      const We = !K(q) && K(q.set) ? q.set.bind(o) : process.env.NODE_ENV !== "production" ? () => {
        $(
          `Write operation failed: computed property "${Y}" is readonly.`
        );
      } : Re, Ke = tt({
        get: me,
        set: We
      });
      Object.defineProperty(r, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (Ze) => Ke.value = Ze
      }), process.env.NODE_ENV !== "production" && Ne("Computed", Y);
    }
  if (a)
    for (const Y in a)
      Fl(a[Y], r, o, Y);
  if (c) {
    const Y = K(c) ? c.call(o) : c;
    Reflect.ownKeys(Y).forEach((q) => {
      ln(q, Y[q]);
    });
  }
  u && ha(u, e, "c");
  function xe(Y, q) {
    W(q) ? q.forEach((me) => Y(me.bind(o))) : q && Y(q.bind(o));
  }
  if (xe(Al, d), xe(Gn, f), xe(tp, h), xe(op, g), xe(Qf, b), xe(Zf, y), xe(ap, fe), xe(sp, Z), xe(ip, C), xe(rp, v), xe(Vl, L), xe(np, ee), W(D))
    if (D.length) {
      const Y = e.exposed || (e.exposed = {});
      D.forEach((q) => {
        Object.defineProperty(Y, q, {
          get: () => o[q],
          set: (me) => o[q] = me
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Re && (e.render = H), T != null && (e.inheritAttrs = T), J && (e.components = J), be && (e.directives = be);
}
function mp(e, t, o = Re) {
  W(e) && (e = ji(e));
  for (const r in e) {
    const n = e[r];
    let i;
    he(n) ? "default" in n ? i = ft(
      n.from || r,
      n.default,
      !0
    ) : i = ft(n.from || r) : i = ft(n), _e(i) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[r] = i, process.env.NODE_ENV !== "production" && o("Inject", r);
  }
}
function ha(e, t, o) {
  wt(
    W(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    o
  );
}
function Fl(e, t, o, r) {
  const n = r.includes(".") ? Zl(o, r) : () => o[r];
  if (ke(e)) {
    const i = t[e];
    K(i) ? ut(n, i) : process.env.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e}"`, i);
  } else if (K(e))
    ut(n, e.bind(o));
  else if (he(e))
    if (W(e))
      e.forEach((i) => Fl(i, t, o, r));
    else {
      const i = K(e.handler) ? e.handler.bind(o) : t[e.handler];
      K(i) ? ut(n, i, e) : process.env.NODE_ENV !== "production" && $(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else process.env.NODE_ENV !== "production" && $(`Invalid watch option: "${r}"`, e);
}
function $s(e) {
  const t = e.type, { mixins: o, extends: r } = t, {
    mixins: n,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = i.get(t);
  let c;
  return a ? c = a : !n.length && !o && !r ? c = t : (c = {}, n.length && n.forEach(
    (l) => Nn(c, l, s, !0)
  ), Nn(c, t, s)), he(t) && i.set(t, c), c;
}
function Nn(e, t, o, r = !1) {
  const { mixins: n, extends: i } = t;
  i && Nn(e, i, o, !0), n && n.forEach(
    (s) => Nn(e, s, o, !0)
  );
  for (const s in t)
    if (r && s === "expose")
      process.env.NODE_ENV !== "production" && $(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = gp[s] || o && o[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const gp = {
  data: ma,
  props: ga,
  emits: ga,
  // objects
  methods: lr,
  computed: lr,
  // lifecycle
  beforeCreate: He,
  created: He,
  beforeMount: He,
  mounted: He,
  beforeUpdate: He,
  updated: He,
  beforeDestroy: He,
  beforeUnmount: He,
  destroyed: He,
  unmounted: He,
  activated: He,
  deactivated: He,
  errorCaptured: He,
  serverPrefetch: He,
  // assets
  components: lr,
  directives: lr,
  // watch
  watch: vp,
  // provide / inject
  provide: ma,
  inject: bp
};
function ma(e, t) {
  return t ? e ? function() {
    return Be(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bp(e, t) {
  return lr(ji(e), ji(t));
}
function ji(e) {
  if (W(e)) {
    const t = {};
    for (let o = 0; o < e.length; o++)
      t[e[o]] = e[o];
    return t;
  }
  return e;
}
function He(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function lr(e, t) {
  return e ? Be(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ga(e, t) {
  return e ? W(e) && W(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Be(
    /* @__PURE__ */ Object.create(null),
    pa(e),
    pa(t ?? {})
  ) : t;
}
function vp(e, t) {
  if (!e) return t;
  if (!t) return e;
  const o = Be(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    o[r] = He(e[r], t[r]);
  return o;
}
function Ul() {
  return {
    app: null,
    config: {
      isNativeTag: Bd,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let yp = 0;
function _p(e, t) {
  return function(r, n = null) {
    K(r) || (r = Be({}, r)), n != null && !he(n) && (process.env.NODE_ENV !== "production" && $("root props passed to app.mount() must be an object."), n = null);
    const i = Ul(), s = /* @__PURE__ */ new WeakSet();
    let a = !1;
    const c = i.app = {
      _uid: yp++,
      _component: r,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: Oa,
      get config() {
        return i.config;
      },
      set config(l) {
        process.env.NODE_ENV !== "production" && $(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(l, ...u) {
        return s.has(l) ? process.env.NODE_ENV !== "production" && $("Plugin has already been applied to target app.") : l && K(l.install) ? (s.add(l), l.install(c, ...u)) : K(l) ? (s.add(l), l(c, ...u)) : process.env.NODE_ENV !== "production" && $(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(l) {
        return i.mixins.includes(l) ? process.env.NODE_ENV !== "production" && $(
          "Mixin has already been applied to target app" + (l.name ? `: ${l.name}` : "")
        ) : i.mixins.push(l), c;
      },
      component(l, u) {
        return process.env.NODE_ENV !== "production" && Wi(l, i.config), u ? (process.env.NODE_ENV !== "production" && i.components[l] && $(`Component "${l}" has already been registered in target app.`), i.components[l] = u, c) : i.components[l];
      },
      directive(l, u) {
        return process.env.NODE_ENV !== "production" && Pl(l), u ? (process.env.NODE_ENV !== "production" && i.directives[l] && $(`Directive "${l}" has already been registered in target app.`), i.directives[l] = u, c) : i.directives[l];
      },
      mount(l, u, d) {
        if (a)
          process.env.NODE_ENV !== "production" && $(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && l.__vue_app__ && $(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const f = Pe(r, n);
          return f.appContext = i, d === !0 ? d = "svg" : d === !1 && (d = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
            e(
              mo(f),
              l,
              d
            );
          }), u && t ? t(f, l) : e(f, l, d), a = !0, c._container = l, l.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = f.component, Uf(c, Oa)), Xn(f.component);
        }
      },
      unmount() {
        a ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Hf(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && $("Cannot unmount an app that is not mounted.");
      },
      provide(l, u) {
        return process.env.NODE_ENV !== "production" && l in i.provides && $(
          `App already provides property with key "${String(l)}". It will be overwritten with the new value.`
        ), i.provides[l] = u, c;
      },
      runWithContext(l) {
        const u = $o;
        $o = c;
        try {
          return l();
        } finally {
          $o = u;
        }
      }
    };
    return c;
  };
}
let $o = null;
function ln(e, t) {
  if (!Te)
    process.env.NODE_ENV !== "production" && $("provide() can only be used inside setup().");
  else {
    let o = Te.provides;
    const r = Te.parent && Te.parent.provides;
    r === o && (o = Te.provides = Object.create(r)), o[e] = t;
  }
}
function ft(e, t, o = !1) {
  const r = Te || $e;
  if (r || $o) {
    const n = $o ? $o._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return o && K(t) ? t.call(r && r.proxy) : t;
    process.env.NODE_ENV !== "production" && $(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && $("inject() can only be used inside setup() or functional components.");
}
function wp() {
  return !!(Te || $e || $o);
}
const Hl = {}, zl = () => Object.create(Hl), Wl = (e) => Object.getPrototypeOf(e) === Hl;
function kp(e, t, o, r = !1) {
  const n = {}, i = zl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Kl(e, t, n, i);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  process.env.NODE_ENV !== "production" && Gl(t || {}, n, e), o ? e.props = r ? n : bl(n) : e.type.props ? e.props = n : e.props = i, e.attrs = i;
}
function xp(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Ep(e, t, o, r) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, a = G(n), [c] = e.propsOptions;
  let l = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && xp(e)) && (r || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let f = u[d];
        if (Jn(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (c)
          if (ae(i, f))
            h !== i[f] && (i[f] = h, l = !0);
          else {
            const g = rt(f);
            n[g] = Mi(
              c,
              a,
              g,
              h,
              e,
              !1
            );
          }
        else
          h !== i[f] && (i[f] = h, l = !0);
      }
    }
  } else {
    Kl(e, t, n, i) && (l = !0);
    let u;
    for (const d in a)
      (!t || // for camelCase
      !ae(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Kt(d)) === d || !ae(t, u))) && (c ? o && // for camelCase
      (o[d] !== void 0 || // for kebab-case
      o[u] !== void 0) && (n[d] = Mi(
        c,
        a,
        d,
        void 0,
        e,
        !0
      )) : delete n[d]);
    if (i !== a)
      for (const d in i)
        (!t || !ae(t, d)) && (delete i[d], l = !0);
  }
  l && It(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Gl(t || {}, n, e);
}
function Kl(e, t, o, r) {
  const [n, i] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let c in t) {
      if (fr(c))
        continue;
      const l = t[c];
      let u;
      n && ae(n, u = rt(c)) ? !i || !i.includes(u) ? o[u] = l : (a || (a = {}))[u] = l : Jn(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, s = !0);
    }
  if (i) {
    const c = G(o), l = a || ve;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      o[d] = Mi(
        n,
        c,
        d,
        l[d],
        e,
        !ae(l, d)
      );
    }
  }
  return s;
}
function Mi(e, t, o, r, n, i) {
  const s = e[o];
  if (s != null) {
    const a = ae(s, "default");
    if (a && r === void 0) {
      const c = s.default;
      if (s.type !== Function && !s.skipFactory && K(c)) {
        const { propsDefaults: l } = n;
        if (o in l)
          r = l[o];
        else {
          const u = Fr(n);
          r = l[o] = c.call(
            null,
            t
          ), u();
        }
      } else
        r = c;
    }
    s[
      0
      /* shouldCast */
    ] && (i && !a ? r = !1 : s[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Kt(o)) && (r = !0));
  }
  return r;
}
const Cp = /* @__PURE__ */ new WeakMap();
function ql(e, t, o = !1) {
  const r = o ? Cp : t.propsCache, n = r.get(e);
  if (n)
    return n;
  const i = e.props, s = {}, a = [];
  let c = !1;
  if (!K(e)) {
    const u = (d) => {
      c = !0;
      const [f, h] = ql(d, t, !0);
      Be(s, f), h && a.push(...h);
    };
    !o && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return he(e) && r.set(e, zo), zo;
  if (W(i))
    for (let u = 0; u < i.length; u++) {
      process.env.NODE_ENV !== "production" && !ke(i[u]) && $("props must be strings when using array syntax.", i[u]);
      const d = rt(i[u]);
      ba(d) && (s[d] = ve);
    }
  else if (i) {
    process.env.NODE_ENV !== "production" && !he(i) && $("invalid props options", i);
    for (const u in i) {
      const d = rt(u);
      if (ba(d)) {
        const f = i[u], h = s[d] = W(f) || K(f) ? { type: f } : Be({}, f), g = h.type;
        let b = !1, y = !0;
        if (W(g))
          for (let O = 0; O < g.length; ++O) {
            const v = g[O], w = K(v) && v.name;
            if (w === "Boolean") {
              b = !0;
              break;
            } else w === "String" && (y = !1);
          }
        else
          b = K(g) && g.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = b, h[
          1
          /* shouldCastTrue */
        ] = y, (b || ae(h, "default")) && a.push(d);
      }
    }
  }
  const l = [s, a];
  return he(e) && r.set(e, l), l;
}
function ba(e) {
  return e[0] !== "$" && !fr(e) ? !0 : (process.env.NODE_ENV !== "production" && $(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Sp(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Gl(e, t, o) {
  const r = G(t), n = o.propsOptions[0];
  for (const i in n) {
    let s = n[i];
    s != null && Op(
      i,
      r[i],
      s,
      process.env.NODE_ENV !== "production" ? Ot(r) : r,
      !ae(e, i) && !ae(e, Kt(i))
    );
  }
}
function Op(e, t, o, r, n) {
  const { type: i, required: s, validator: a, skipCheck: c } = o;
  if (s && n) {
    $('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !c) {
      let l = !1;
      const u = W(i) ? i : [i], d = [];
      for (let f = 0; f < u.length && !l; f++) {
        const { valid: h, expectedType: g } = Ip(t, u[f]);
        d.push(g || ""), l = h;
      }
      if (!l) {
        $(Rp(e, t, d));
        return;
      }
    }
    a && !a(t, r) && $('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Np = /* @__PURE__ */ Gt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ip(e, t) {
  let o;
  const r = Sp(t);
  if (Np(r)) {
    const n = typeof e;
    o = n === r.toLowerCase(), !o && n === "object" && (o = e instanceof t);
  } else r === "Object" ? o = he(e) : r === "Array" ? o = W(e) : r === "null" ? o = e === null : o = e instanceof t;
  return {
    valid: o,
    expectedType: r
  };
}
function Rp(e, t, o) {
  if (o.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let r = `Invalid prop: type check failed for prop "${e}". Expected ${o.map(To).join(" | ")}`;
  const n = o[0], i = hs(t), s = va(t, n), a = va(t, i);
  return o.length === 1 && ya(n) && !$p(n, i) && (r += ` with value ${s}`), r += `, got ${i} `, ya(i) && (r += `with value ${a}.`), r;
}
function va(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ya(e) {
  return ["string", "number", "boolean"].some((o) => e.toLowerCase() === o);
}
function $p(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Jl = (e) => e[0] === "_" || e === "$stable", Ps = (e) => W(e) ? e.map(vt) : [vt(e)], Pp = (e, t, o) => {
  if (t._n)
    return t;
  const r = Nt((...n) => (process.env.NODE_ENV !== "production" && Te && (!o || o.root === Te.root) && $(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ps(t(...n))), o);
  return r._c = !1, r;
}, Yl = (e, t, o) => {
  const r = e._ctx;
  for (const n in e) {
    if (Jl(n)) continue;
    const i = e[n];
    if (K(i))
      t[n] = Pp(n, i, r);
    else if (i != null) {
      process.env.NODE_ENV !== "production" && $(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const s = Ps(i);
      t[n] = () => s;
    }
  }
}, Xl = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ns(e.vnode) && $(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const o = Ps(t);
  e.slots.default = () => o;
}, Fi = (e, t, o) => {
  for (const r in t)
    (o || r !== "_") && (e[r] = t[r]);
}, Tp = (e, t, o) => {
  const r = e.slots = zl();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? (Fi(r, t, o), o && kn(r, "_", n, !0)) : Yl(t, r);
  } else t && Xl(e, t);
}, Bp = (e, t, o) => {
  const { vnode: r, slots: n } = e;
  let i = !0, s = ve;
  if (r.shapeFlag & 32) {
    const a = t._;
    a ? process.env.NODE_ENV !== "production" && Io ? (Fi(n, t, o), It(e, "set", "$slots")) : o && a === 1 ? i = !1 : Fi(n, t, o) : (i = !t.$stable, Yl(t, n)), s = t;
  } else t && (Xl(e, t), s = { default: 1 });
  if (i)
    for (const a in n)
      !Jl(a) && s[a] == null && delete n[a];
};
function Ui(e, t, o, r, n = !1) {
  if (W(e)) {
    e.forEach(
      (f, h) => Ui(
        f,
        t && (W(t) ? t[h] : t),
        o,
        r,
        n
      )
    );
    return;
  }
  if (pr(r) && !n)
    return;
  const i = r.shapeFlag & 4 ? Xn(r.component) : r.el, s = n ? null : i, { i: a, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !a) {
    $(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const l = t && t.r, u = a.refs === ve ? a.refs = {} : a.refs, d = a.setupState;
  if (l != null && l !== c && (ke(l) ? (u[l] = null, ae(d, l) && (d[l] = null)) : _e(l) && (l.value = null)), K(c))
    zt(c, a, 12, [s, u]);
  else {
    const f = ke(c), h = _e(c);
    if (f || h) {
      const g = () => {
        if (e.f) {
          const b = f ? ae(d, c) ? d[c] : u[c] : c.value;
          n ? W(b) && fs(b, i) : W(b) ? b.includes(i) || b.push(i) : f ? (u[c] = [i], ae(d, c) && (d[c] = u[c])) : (c.value = [i], e.k && (u[e.k] = c.value));
        } else f ? (u[c] = s, ae(d, c) && (d[c] = s)) : h ? (c.value = s, e.k && (u[e.k] = s)) : process.env.NODE_ENV !== "production" && $("Invalid template ref type:", c, `(${typeof c})`);
      };
      s ? (g.id = -1, Ge(g, o)) : g();
    } else process.env.NODE_ENV !== "production" && $("Invalid template ref type:", c, `(${typeof c})`);
  }
}
const Dp = Symbol("_vte"), Ap = (e) => e.__isTeleport;
let tr, io;
function Vt(e, t) {
  e.appContext.config.performance && In() && io.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && qf(e, t, In() ? io.now() : Date.now());
}
function Lt(e, t) {
  if (e.appContext.config.performance && In()) {
    const o = `vue-${t}-${e.uid}`, r = o + ":end";
    io.mark(r), io.measure(
      `<${Qn(e, e.type)}> ${t}`,
      o,
      r
    ), io.clearMarks(o), io.clearMarks(r);
  }
  process.env.NODE_ENV !== "production" && Gf(e, t, In() ? io.now() : Date.now());
}
function In() {
  return tr !== void 0 || (typeof window < "u" && window.performance ? (tr = !0, io = window.performance) : tr = !1), tr;
}
function Vp() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ge = Zp;
function Lp(e) {
  return jp(e);
}
function jp(e, t) {
  Vp();
  const o = gs();
  o.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ss(o.__VUE_DEVTOOLS_GLOBAL_HOOK__, o);
  const {
    insert: r,
    remove: n,
    patchProp: i,
    createElement: s,
    createText: a,
    createComment: c,
    setText: l,
    setElementText: u,
    parentNode: d,
    nextSibling: f,
    setScopeId: h = Re,
    insertStaticContent: g
  } = e, b = (p, m, _, E = null, S = null, I = null, B = void 0, R = null, P = process.env.NODE_ENV !== "production" && Io ? !1 : !!m.dynamicChildren) => {
    if (p === m)
      return;
    p && !or(p, m) && (E = V(p), qe(p, S, I, !0), p = null), m.patchFlag === -2 && (P = !1, m.dynamicChildren = null);
    const { type: N, ref: j, shapeFlag: z } = m;
    switch (N) {
      case jr:
        y(p, m, _, E);
        break;
      case Ye:
        O(p, m, _, E);
        break;
      case hr:
        p == null ? v(m, _, E, B) : process.env.NODE_ENV !== "production" && w(p, m, _, B);
        break;
      case we:
        be(
          p,
          m,
          _,
          E,
          S,
          I,
          B,
          R,
          P
        );
        break;
      default:
        z & 1 ? Z(
          p,
          m,
          _,
          E,
          S,
          I,
          B,
          R,
          P
        ) : z & 6 ? Fe(
          p,
          m,
          _,
          E,
          S,
          I,
          B,
          R,
          P
        ) : z & 64 || z & 128 ? N.process(
          p,
          m,
          _,
          E,
          S,
          I,
          B,
          R,
          P,
          ie
        ) : process.env.NODE_ENV !== "production" && $("Invalid VNode type:", N, `(${typeof N})`);
    }
    j != null && S && Ui(j, p && p.ref, I, m || p, !m);
  }, y = (p, m, _, E) => {
    if (p == null)
      r(
        m.el = a(m.children),
        _,
        E
      );
    else {
      const S = m.el = p.el;
      m.children !== p.children && l(S, m.children);
    }
  }, O = (p, m, _, E) => {
    p == null ? r(
      m.el = c(m.children || ""),
      _,
      E
    ) : m.el = p.el;
  }, v = (p, m, _, E) => {
    [p.el, p.anchor] = g(
      p.children,
      m,
      _,
      E,
      p.el,
      p.anchor
    );
  }, w = (p, m, _, E) => {
    if (m.children !== p.children) {
      const S = f(p.anchor);
      H(p), [m.el, m.anchor] = g(
        m.children,
        _,
        S,
        E
      );
    } else
      m.el = p.el, m.anchor = p.anchor;
  }, L = ({ el: p, anchor: m }, _, E) => {
    let S;
    for (; p && p !== m; )
      S = f(p), r(p, _, E), p = S;
    r(m, _, E);
  }, H = ({ el: p, anchor: m }) => {
    let _;
    for (; p && p !== m; )
      _ = f(p), n(p), p = _;
    n(m);
  }, Z = (p, m, _, E, S, I, B, R, P) => {
    m.type === "svg" ? B = "svg" : m.type === "math" && (B = "mathml"), p == null ? C(
      m,
      _,
      E,
      S,
      I,
      B,
      R,
      P
    ) : D(
      p,
      m,
      S,
      I,
      B,
      R,
      P
    );
  }, C = (p, m, _, E, S, I, B, R) => {
    let P, N;
    const { props: j, shapeFlag: z, transition: F, dirs: X } = p;
    if (P = p.el = s(
      p.type,
      I,
      j && j.is,
      j
    ), z & 8 ? u(P, p.children) : z & 16 && ee(
      p.children,
      P,
      null,
      E,
      S,
      pi(p, I),
      B,
      R
    ), X && vo(p, null, E, "created"), fe(P, p, p.scopeId, B, E), j) {
      for (const ye in j)
        ye !== "value" && !fr(ye) && i(P, ye, null, j[ye], I, E);
      "value" in j && i(P, "value", null, j.value, I), (N = j.onVnodeBeforeMount) && Ct(N, E, p);
    }
    process.env.NODE_ENV !== "production" && (kn(P, "__vnode", p, !0), kn(P, "__vueParentComponent", E, !0)), X && vo(p, null, E, "beforeMount");
    const se = Mp(S, F);
    se && F.beforeEnter(P), r(P, m, _), ((N = j && j.onVnodeMounted) || se || X) && Ge(() => {
      N && Ct(N, E, p), se && F.enter(P), X && vo(p, null, E, "mounted");
    }, S);
  }, fe = (p, m, _, E, S) => {
    if (_ && h(p, _), E)
      for (let I = 0; I < E.length; I++)
        h(p, E[I]);
    if (S) {
      let I = S.subTree;
      if (process.env.NODE_ENV !== "production" && I.patchFlag > 0 && I.patchFlag & 2048 && (I = Bs(I.children) || I), m === I) {
        const B = S.vnode;
        fe(
          p,
          B,
          B.scopeId,
          B.slotScopeIds,
          S.parent
        );
      }
    }
  }, ee = (p, m, _, E, S, I, B, R, P = 0) => {
    for (let N = P; N < p.length; N++) {
      const j = p[N] = R ? ro(p[N]) : vt(p[N]);
      b(
        null,
        j,
        m,
        _,
        E,
        S,
        I,
        B,
        R
      );
    }
  }, D = (p, m, _, E, S, I, B) => {
    const R = m.el = p.el;
    process.env.NODE_ENV !== "production" && (R.__vnode = m);
    let { patchFlag: P, dynamicChildren: N, dirs: j } = m;
    P |= p.patchFlag & 16;
    const z = p.props || ve, F = m.props || ve;
    let X;
    if (_ && yo(_, !1), (X = F.onVnodeBeforeUpdate) && Ct(X, _, m, p), j && vo(m, p, _, "beforeUpdate"), _ && yo(_, !0), process.env.NODE_ENV !== "production" && Io && (P = 0, B = !1, N = null), (z.innerHTML && F.innerHTML == null || z.textContent && F.textContent == null) && u(R, ""), N ? (T(
      p.dynamicChildren,
      N,
      R,
      _,
      E,
      pi(m, S),
      I
    ), process.env.NODE_ENV !== "production" && un(p, m)) : B || me(
      p,
      m,
      R,
      null,
      _,
      E,
      pi(m, S),
      I,
      !1
    ), P > 0) {
      if (P & 16)
        J(R, z, F, _, S);
      else if (P & 2 && z.class !== F.class && i(R, "class", null, F.class, S), P & 4 && i(R, "style", z.style, F.style, S), P & 8) {
        const se = m.dynamicProps;
        for (let ye = 0; ye < se.length; ye++) {
          const pe = se[ye], De = z[pe], ht = F[pe];
          (ht !== De || pe === "value") && i(R, pe, De, ht, S, _);
        }
      }
      P & 1 && p.children !== m.children && u(R, m.children);
    } else !B && N == null && J(R, z, F, _, S);
    ((X = F.onVnodeUpdated) || j) && Ge(() => {
      X && Ct(X, _, m, p), j && vo(m, p, _, "updated");
    }, E);
  }, T = (p, m, _, E, S, I, B) => {
    for (let R = 0; R < m.length; R++) {
      const P = p[R], N = m[R], j = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === we || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !or(P, N) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 70) ? d(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      b(
        P,
        N,
        j,
        null,
        E,
        S,
        I,
        B,
        !0
      );
    }
  }, J = (p, m, _, E, S) => {
    if (m !== _) {
      if (m !== ve)
        for (const I in m)
          !fr(I) && !(I in _) && i(
            p,
            I,
            m[I],
            null,
            S,
            E
          );
      for (const I in _) {
        if (fr(I)) continue;
        const B = _[I], R = m[I];
        B !== R && I !== "value" && i(p, I, R, B, S, E);
      }
      "value" in _ && i(p, "value", m.value, _.value, S);
    }
  }, be = (p, m, _, E, S, I, B, R, P) => {
    const N = m.el = p ? p.el : a(""), j = m.anchor = p ? p.anchor : a("");
    let { patchFlag: z, dynamicChildren: F, slotScopeIds: X } = m;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Io || z & 2048) && (z = 0, P = !1, F = null), X && (R = R ? R.concat(X) : X), p == null ? (r(N, _, E), r(j, _, E), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      m.children || [],
      _,
      j,
      S,
      I,
      B,
      R,
      P
    )) : z > 0 && z & 64 && F && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren ? (T(
      p.dynamicChildren,
      F,
      _,
      S,
      I,
      B,
      R
    ), process.env.NODE_ENV !== "production" ? un(p, m) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (m.key != null || S && m === S.subTree) && un(
        p,
        m,
        !0
        /* shallow */
      )
    )) : me(
      p,
      m,
      _,
      j,
      S,
      I,
      B,
      R,
      P
    );
  }, Fe = (p, m, _, E, S, I, B, R, P) => {
    m.slotScopeIds = R, p == null ? m.shapeFlag & 512 ? S.ctx.activate(
      m,
      _,
      E,
      B,
      P
    ) : Ne(
      m,
      _,
      E,
      S,
      I,
      B,
      P
    ) : xe(p, m, P);
  }, Ne = (p, m, _, E, S, I, B) => {
    const R = p.component = ih(
      p,
      E,
      S
    );
    if (process.env.NODE_ENV !== "production" && R.type.__hmrId && Lf(R), process.env.NODE_ENV !== "production" && (nn(p), Vt(R, "mount")), Ns(p) && (R.ctx.renderer = ie), process.env.NODE_ENV !== "production" && Vt(R, "init"), ah(R, !1, B), process.env.NODE_ENV !== "production" && Lt(R, "init"), R.asyncDep) {
      if (S && S.registerDep(R, Y, B), !p.el) {
        const P = R.subTree = Pe(Ye);
        O(null, P, m, _);
      }
    } else
      Y(
        R,
        p,
        m,
        _,
        S,
        I,
        B
      );
    process.env.NODE_ENV !== "production" && (sn(), Lt(R, "mount"));
  }, xe = (p, m, _) => {
    const E = m.component = p.component;
    if (Yp(p, m, _))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && nn(m), q(E, m, _), process.env.NODE_ENV !== "production" && sn();
        return;
      } else
        E.next = m, Af(E.update), E.effect.dirty = !0, E.update();
    else
      m.el = p.el, E.vnode = m;
  }, Y = (p, m, _, E, S, I, B) => {
    const R = () => {
      if (p.isMounted) {
        let { next: j, bu: z, u: F, parent: X, vnode: se } = p;
        {
          const Vo = Ql(p);
          if (Vo) {
            j && (j.el = se.el, q(p, j, B)), Vo.asyncDep.then(() => {
              p.isUnmounted || R();
            });
            return;
          }
        }
        let ye = j, pe;
        process.env.NODE_ENV !== "production" && nn(j || p.vnode), yo(p, !1), j ? (j.el = se.el, q(p, j, B)) : j = se, z && er(z), (pe = j.props && j.props.onVnodeBeforeUpdate) && Ct(pe, X, j, se), yo(p, !0), process.env.NODE_ENV !== "production" && Vt(p, "render");
        const De = hi(p);
        process.env.NODE_ENV !== "production" && Lt(p, "render");
        const ht = p.subTree;
        p.subTree = De, process.env.NODE_ENV !== "production" && Vt(p, "patch"), b(
          ht,
          De,
          // parent may have changed if it's in a teleport
          d(ht.el),
          // anchor may have changed if it's in a fragment
          V(ht),
          p,
          S,
          I
        ), process.env.NODE_ENV !== "production" && Lt(p, "patch"), j.el = De.el, ye === null && Xp(p, De.el), F && Ge(F, S), (pe = j.props && j.props.onVnodeUpdated) && Ge(
          () => Ct(pe, X, j, se),
          S
        ), process.env.NODE_ENV !== "production" && Rl(p), process.env.NODE_ENV !== "production" && sn();
      } else {
        let j;
        const { el: z, props: F } = m, { bm: X, m: se, parent: ye } = p, pe = pr(m);
        if (yo(p, !1), X && er(X), !pe && (j = F && F.onVnodeBeforeMount) && Ct(j, ye, m), yo(p, !0), z && oe) {
          const De = () => {
            process.env.NODE_ENV !== "production" && Vt(p, "render"), p.subTree = hi(p), process.env.NODE_ENV !== "production" && Lt(p, "render"), process.env.NODE_ENV !== "production" && Vt(p, "hydrate"), oe(
              z,
              p.subTree,
              p,
              S,
              null
            ), process.env.NODE_ENV !== "production" && Lt(p, "hydrate");
          };
          pe ? m.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !p.isUnmounted && De()
          ) : De();
        } else {
          process.env.NODE_ENV !== "production" && Vt(p, "render");
          const De = p.subTree = hi(p);
          process.env.NODE_ENV !== "production" && Lt(p, "render"), process.env.NODE_ENV !== "production" && Vt(p, "patch"), b(
            null,
            De,
            _,
            E,
            p,
            S,
            I
          ), process.env.NODE_ENV !== "production" && Lt(p, "patch"), m.el = De.el;
        }
        if (se && Ge(se, S), !pe && (j = F && F.onVnodeMounted)) {
          const De = m;
          Ge(
            () => Ct(j, ye, De),
            S
          );
        }
        (m.shapeFlag & 256 || ye && pr(ye.vnode) && ye.vnode.shapeFlag & 256) && p.a && Ge(p.a, S), p.isMounted = !0, process.env.NODE_ENV !== "production" && zf(p), m = _ = E = null;
      }
    }, P = p.effect = new bs(
      R,
      Re,
      () => Wn(N),
      p.scope
      // track it in component's effect scope
    ), N = p.update = () => {
      P.dirty && P.run();
    };
    N.i = p, N.id = p.uid, yo(p, !0), process.env.NODE_ENV !== "production" && (P.onTrack = p.rtc ? (j) => er(p.rtc, j) : void 0, P.onTrigger = p.rtg ? (j) => er(p.rtg, j) : void 0), N();
  }, q = (p, m, _) => {
    m.component = p;
    const E = p.vnode.props;
    p.vnode = m, p.next = null, Ep(p, m.props, E, _), Bp(p, m.children, _), Jt(), ua(p), Yt();
  }, me = (p, m, _, E, S, I, B, R, P = !1) => {
    const N = p && p.children, j = p ? p.shapeFlag : 0, z = m.children, { patchFlag: F, shapeFlag: X } = m;
    if (F > 0) {
      if (F & 128) {
        Ke(
          N,
          z,
          _,
          E,
          S,
          I,
          B,
          R,
          P
        );
        return;
      } else if (F & 256) {
        We(
          N,
          z,
          _,
          E,
          S,
          I,
          B,
          R,
          P
        );
        return;
      }
    }
    X & 8 ? (j & 16 && x(N, S, I), z !== N && u(_, z)) : j & 16 ? X & 16 ? Ke(
      N,
      z,
      _,
      E,
      S,
      I,
      B,
      R,
      P
    ) : x(N, S, I, !0) : (j & 8 && u(_, ""), X & 16 && ee(
      z,
      _,
      E,
      S,
      I,
      B,
      R,
      P
    ));
  }, We = (p, m, _, E, S, I, B, R, P) => {
    p = p || zo, m = m || zo;
    const N = p.length, j = m.length, z = Math.min(N, j);
    let F;
    for (F = 0; F < z; F++) {
      const X = m[F] = P ? ro(m[F]) : vt(m[F]);
      b(
        p[F],
        X,
        _,
        null,
        S,
        I,
        B,
        R,
        P
      );
    }
    N > j ? x(
      p,
      S,
      I,
      !0,
      !1,
      z
    ) : ee(
      m,
      _,
      E,
      S,
      I,
      B,
      R,
      P,
      z
    );
  }, Ke = (p, m, _, E, S, I, B, R, P) => {
    let N = 0;
    const j = m.length;
    let z = p.length - 1, F = j - 1;
    for (; N <= z && N <= F; ) {
      const X = p[N], se = m[N] = P ? ro(m[N]) : vt(m[N]);
      if (or(X, se))
        b(
          X,
          se,
          _,
          null,
          S,
          I,
          B,
          R,
          P
        );
      else
        break;
      N++;
    }
    for (; N <= z && N <= F; ) {
      const X = p[z], se = m[F] = P ? ro(m[F]) : vt(m[F]);
      if (or(X, se))
        b(
          X,
          se,
          _,
          null,
          S,
          I,
          B,
          R,
          P
        );
      else
        break;
      z--, F--;
    }
    if (N > z) {
      if (N <= F) {
        const X = F + 1, se = X < j ? m[X].el : E;
        for (; N <= F; )
          b(
            null,
            m[N] = P ? ro(m[N]) : vt(m[N]),
            _,
            se,
            S,
            I,
            B,
            R,
            P
          ), N++;
      }
    } else if (N > F)
      for (; N <= z; )
        qe(p[N], S, I, !0), N++;
    else {
      const X = N, se = N, ye = /* @__PURE__ */ new Map();
      for (N = se; N <= F; N++) {
        const Ue = m[N] = P ? ro(m[N]) : vt(m[N]);
        Ue.key != null && (process.env.NODE_ENV !== "production" && ye.has(Ue.key) && $(
          "Duplicate keys found during update:",
          JSON.stringify(Ue.key),
          "Make sure keys are unique."
        ), ye.set(Ue.key, N));
      }
      let pe, De = 0;
      const ht = F - se + 1;
      let Vo = !1, Qs = 0;
      const Zo = new Array(ht);
      for (N = 0; N < ht; N++) Zo[N] = 0;
      for (N = X; N <= z; N++) {
        const Ue = p[N];
        if (De >= ht) {
          qe(Ue, S, I, !0);
          continue;
        }
        let Et;
        if (Ue.key != null)
          Et = ye.get(Ue.key);
        else
          for (pe = se; pe <= F; pe++)
            if (Zo[pe - se] === 0 && or(Ue, m[pe])) {
              Et = pe;
              break;
            }
        Et === void 0 ? qe(Ue, S, I, !0) : (Zo[Et - se] = N + 1, Et >= Qs ? Qs = Et : Vo = !0, b(
          Ue,
          m[Et],
          _,
          null,
          S,
          I,
          B,
          R,
          P
        ), De++);
      }
      const Zs = Vo ? Fp(Zo) : zo;
      for (pe = Zs.length - 1, N = ht - 1; N >= 0; N--) {
        const Ue = se + N, Et = m[Ue], ea = Ue + 1 < j ? m[Ue + 1].el : E;
        Zo[N] === 0 ? b(
          null,
          Et,
          _,
          ea,
          S,
          I,
          B,
          R,
          P
        ) : Vo && (pe < 0 || N !== Zs[pe] ? Ze(Et, _, ea, 2) : pe--);
      }
    }
  }, Ze = (p, m, _, E, S = null) => {
    const { el: I, type: B, transition: R, children: P, shapeFlag: N } = p;
    if (N & 6) {
      Ze(p.component.subTree, m, _, E);
      return;
    }
    if (N & 128) {
      p.suspense.move(m, _, E);
      return;
    }
    if (N & 64) {
      B.move(p, m, _, ie);
      return;
    }
    if (B === we) {
      r(I, m, _);
      for (let z = 0; z < P.length; z++)
        Ze(P[z], m, _, E);
      r(p.anchor, m, _);
      return;
    }
    if (B === hr) {
      L(p, m, _);
      return;
    }
    if (E !== 2 && N & 1 && R)
      if (E === 0)
        R.beforeEnter(I), r(I, m, _), Ge(() => R.enter(I), S);
      else {
        const { leave: z, delayLeave: F, afterLeave: X } = R, se = () => r(I, m, _), ye = () => {
          z(I, () => {
            se(), X && X();
          });
        };
        F ? F(I, se, ye) : ye();
      }
    else
      r(I, m, _);
  }, qe = (p, m, _, E = !1, S = !1) => {
    const {
      type: I,
      props: B,
      ref: R,
      children: P,
      dynamicChildren: N,
      shapeFlag: j,
      patchFlag: z,
      dirs: F,
      cacheIndex: X
    } = p;
    if (z === -2 && (S = !1), R != null && Ui(R, null, _, p, !0), X != null && (m.renderCache[X] = void 0), j & 256) {
      m.ctx.deactivate(p);
      return;
    }
    const se = j & 1 && F, ye = !pr(p);
    let pe;
    if (ye && (pe = B && B.onVnodeBeforeUnmount) && Ct(pe, m, p), j & 6)
      Qt(p.component, _, E);
    else {
      if (j & 128) {
        p.suspense.unmount(_, E);
        return;
      }
      se && vo(p, null, m, "beforeUnmount"), j & 64 ? p.type.remove(
        p,
        m,
        _,
        ie,
        E
      ) : N && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !N.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== we || z > 0 && z & 64) ? x(
        N,
        m,
        _,
        !1,
        !0
      ) : (I === we && z & 384 || !S && j & 16) && x(P, m, _), E && st(p);
    }
    (ye && (pe = B && B.onVnodeUnmounted) || se) && Ge(() => {
      pe && Ct(pe, m, p), se && vo(p, null, m, "unmounted");
    }, _);
  }, st = (p) => {
    const { type: m, el: _, anchor: E, transition: S } = p;
    if (m === we) {
      process.env.NODE_ENV !== "production" && p.patchFlag > 0 && p.patchFlag & 2048 && S && !S.persisted ? p.children.forEach((B) => {
        B.type === Ye ? n(B.el) : st(B);
      }) : zr(_, E);
      return;
    }
    if (m === hr) {
      H(p);
      return;
    }
    const I = () => {
      n(_), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (p.shapeFlag & 1 && S && !S.persisted) {
      const { leave: B, delayLeave: R } = S, P = () => B(_, I);
      R ? R(p.el, I, P) : P();
    } else
      I();
  }, zr = (p, m) => {
    let _;
    for (; p !== m; )
      _ = f(p), n(p), p = _;
    n(m);
  }, Qt = (p, m, _) => {
    process.env.NODE_ENV !== "production" && p.type.__hmrId && jf(p);
    const { bum: E, scope: S, update: I, subTree: B, um: R, m: P, a: N } = p;
    _a(P), _a(N), E && er(E), S.stop(), I && (I.active = !1, qe(B, p, m, _)), R && Ge(R, m), Ge(() => {
      p.isUnmounted = !0;
    }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve()), process.env.NODE_ENV !== "production" && Kf(p);
  }, x = (p, m, _, E = !1, S = !1, I = 0) => {
    for (let B = I; B < p.length; B++)
      qe(p[B], m, _, E, S);
  }, V = (p) => {
    if (p.shapeFlag & 6)
      return V(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const m = f(p.anchor || p.el), _ = m && m[Dp];
    return _ ? f(_) : m;
  };
  let A = !1;
  const M = (p, m, _) => {
    p == null ? m._vnode && qe(m._vnode, null, null, !0) : b(
      m._vnode || null,
      p,
      m,
      null,
      null,
      null,
      _
    ), m._vnode = p, A || (A = !0, ua(), Ol(), A = !1);
  }, ie = {
    p: b,
    um: qe,
    m: Ze,
    r: st,
    mt: Ne,
    mc: ee,
    pc: me,
    pbc: T,
    n: V,
    o: e
  };
  let Ee, oe;
  return {
    render: M,
    hydrate: Ee,
    createApp: _p(M, Ee)
  };
}
function pi({ type: e, props: t }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : o;
}
function yo({ effect: e, update: t }, o) {
  e.allowRecurse = t.allowRecurse = o;
}
function Mp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function un(e, t, o = !1) {
  const r = e.children, n = t.children;
  if (W(r) && W(n))
    for (let i = 0; i < r.length; i++) {
      const s = r[i];
      let a = n[i];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = n[i] = ro(n[i]), a.el = s.el), !o && a.patchFlag !== -2 && un(s, a)), a.type === jr && (a.el = s.el), process.env.NODE_ENV !== "production" && a.type === Ye && !a.el && (a.el = s.el);
    }
}
function Fp(e) {
  const t = e.slice(), o = [0];
  let r, n, i, s, a;
  const c = e.length;
  for (r = 0; r < c; r++) {
    const l = e[r];
    if (l !== 0) {
      if (n = o[o.length - 1], e[n] < l) {
        t[r] = n, o.push(r);
        continue;
      }
      for (i = 0, s = o.length - 1; i < s; )
        a = i + s >> 1, e[o[a]] < l ? i = a + 1 : s = a;
      l < e[o[i]] && (i > 0 && (t[r] = o[i - 1]), o[i] = r);
    }
  }
  for (i = o.length, s = o[i - 1]; i-- > 0; )
    o[i] = s, s = t[s];
  return o;
}
function Ql(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ql(t);
}
function _a(e) {
  if (e)
    for (let t = 0; t < e.length; t++) e[t].active = !1;
}
const Up = Symbol.for("v-scx"), Hp = () => {
  {
    const e = ft(Up);
    return e || process.env.NODE_ENV !== "production" && $(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function zp(e, t) {
  return Ts(e, null, t);
}
const Xr = {};
function ut(e, t, o) {
  return process.env.NODE_ENV !== "production" && !K(t) && $(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ts(e, t, o);
}
function Ts(e, t, {
  immediate: o,
  deep: r,
  flush: n,
  once: i,
  onTrack: s,
  onTrigger: a
} = ve) {
  if (t && i) {
    const C = t;
    t = (...fe) => {
      C(...fe), Z();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && $(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (o !== void 0 && $(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && $(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && $(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (C) => {
    $(
      "Invalid watch source: ",
      C,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, l = Te, u = (C) => r === !0 ? C : (
    // for deep: false, only traverse root-level properties
    so(C, r === !1 ? 1 : void 0)
  );
  let d, f = !1, h = !1;
  if (_e(e) ? (d = () => e.value, f = Ht(e)) : Rt(e) ? (d = () => u(e), f = !0) : W(e) ? (h = !0, f = e.some((C) => Rt(C) || Ht(C)), d = () => e.map((C) => {
    if (_e(C))
      return C.value;
    if (Rt(C))
      return u(C);
    if (K(C))
      return zt(C, l, 2);
    process.env.NODE_ENV !== "production" && c(C);
  })) : K(e) ? t ? d = () => zt(e, l, 2) : d = () => (g && g(), wt(
    e,
    l,
    3,
    [b]
  )) : (d = Re, process.env.NODE_ENV !== "production" && c(e)), t && r) {
    const C = d;
    d = () => so(C());
  }
  let g, b = (C) => {
    g = L.onStop = () => {
      zt(C, l, 4), g = L.onStop = void 0;
    };
  }, y;
  if (Yn)
    if (b = Re, t ? o && wt(t, l, 3, [
      d(),
      h ? [] : void 0,
      b
    ]) : d(), n === "sync") {
      const C = Hp();
      y = C.__watcherHandles || (C.__watcherHandles = []);
    } else
      return Re;
  let O = h ? new Array(e.length).fill(Xr) : Xr;
  const v = () => {
    if (!(!L.active || !L.dirty))
      if (t) {
        const C = L.run();
        (r || f || (h ? C.some((fe, ee) => ho(fe, O[ee])) : ho(C, O))) && (g && g(), wt(t, l, 3, [
          C,
          // pass undefined as the old value when it's changed for the first time
          O === Xr ? void 0 : h && O[0] === Xr ? [] : O,
          b
        ]), O = C);
      } else
        L.run();
  };
  v.allowRecurse = !!t;
  let w;
  n === "sync" ? w = v : n === "post" ? w = () => Ge(v, l && l.suspense) : (v.pre = !0, l && (v.id = l.uid), w = () => Wn(v));
  const L = new bs(d, Re, w), H = ol(), Z = () => {
    L.stop(), H && fs(H.effects, L);
  };
  return process.env.NODE_ENV !== "production" && (L.onTrack = s, L.onTrigger = a), t ? o ? v() : O = L.run() : n === "post" ? Ge(
    L.run.bind(L),
    l && l.suspense
  ) : L.run(), y && y.push(Z), Z;
}
function Wp(e, t, o) {
  const r = this.proxy, n = ke(e) ? e.includes(".") ? Zl(r, e) : () => r[e] : e.bind(r, r);
  let i;
  K(t) ? i = t : (i = t.handler, o = t);
  const s = Fr(this), a = Ts(n, i.bind(r), o);
  return s(), a;
}
function Zl(e, t) {
  const o = t.split(".");
  return () => {
    let r = e;
    for (let n = 0; n < o.length && r; n++)
      r = r[o[n]];
    return r;
  };
}
function so(e, t = 1 / 0, o) {
  if (t <= 0 || !he(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), t--, _e(e))
    so(e.value, t, o);
  else if (W(e))
    for (let r = 0; r < e.length; r++)
      so(e[r], t, o);
  else if (Gc(e) || Co(e))
    e.forEach((r) => {
      so(r, t, o);
    });
  else if (Yc(e)) {
    for (const r in e)
      so(e[r], t, o);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && so(e[r], t, o);
  }
  return e;
}
const Kp = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rt(t)}Modifiers`] || e[`${Kt(t)}Modifiers`];
function qp(e, t, ...o) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || ve;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [d]
    } = e;
    if (u)
      if (!(t in u))
        (!d || !(_o(rt(t)) in d)) && $(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${_o(rt(t))}" prop.`
        );
      else {
        const f = u[t];
        K(f) && (f(...o) || $(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let n = o;
  const i = t.startsWith("update:"), s = i && Kp(r, t.slice(7));
  if (s && (s.trim && (n = o.map((u) => ke(u) ? u.trim() : u)), s.number && (n = o.map(jd))), process.env.NODE_ENV !== "production" && Jf(e, t, n), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && r[_o(u)] && $(
      `Event "${u}" is emitted in component ${Qn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Kt(
        t
      )}" instead of "${t}".`
    );
  }
  let a, c = r[a = _o(t)] || // also try camelCase event handler (#2249)
  r[a = _o(rt(t))];
  !c && i && (c = r[a = _o(Kt(t))]), c && wt(
    c,
    e,
    6,
    n
  );
  const l = r[a + "Once"];
  if (l) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, wt(
      l,
      e,
      6,
      n
    );
  }
}
function eu(e, t, o = !1) {
  const r = t.emitsCache, n = r.get(e);
  if (n !== void 0)
    return n;
  const i = e.emits;
  let s = {}, a = !1;
  if (!K(e)) {
    const c = (l) => {
      const u = eu(l, t, !0);
      u && (a = !0, Be(s, u));
    };
    !o && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !a ? (he(e) && r.set(e, null), null) : (W(i) ? i.forEach((c) => s[c] = null) : Be(s, i), he(e) && r.set(e, s), s);
}
function Jn(e, t) {
  return !e || !Dr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, Kt(t)) || ae(e, t));
}
let Hi = !1;
function Rn() {
  Hi = !0;
}
function hi(e) {
  const {
    type: t,
    vnode: o,
    proxy: r,
    withProxy: n,
    propsOptions: [i],
    slots: s,
    attrs: a,
    emit: c,
    render: l,
    renderCache: u,
    props: d,
    data: f,
    setupState: h,
    ctx: g,
    inheritAttrs: b
  } = e, y = Sn(e);
  let O, v;
  process.env.NODE_ENV !== "production" && (Hi = !1);
  try {
    if (o.shapeFlag & 4) {
      const H = n || r, Z = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(H, {
        get(C, fe, ee) {
          return $(
            `Property '${String(
              fe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(C, fe, ee);
        }
      }) : H;
      O = vt(
        l.call(
          Z,
          H,
          u,
          process.env.NODE_ENV !== "production" ? Ot(d) : d,
          h,
          f,
          g
        )
      ), v = a;
    } else {
      const H = t;
      process.env.NODE_ENV !== "production" && a === d && Rn(), O = vt(
        H.length > 1 ? H(
          process.env.NODE_ENV !== "production" ? Ot(d) : d,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Rn(), Ot(a);
            },
            slots: s,
            emit: c
          } : { attrs: a, slots: s, emit: c }
        ) : H(
          process.env.NODE_ENV !== "production" ? Ot(d) : d,
          null
        )
      ), v = t.props ? a : Gp(a);
    }
  } catch (H) {
    mr.length = 0, Vr(H, e, 1), O = Pe(Ye);
  }
  let w = O, L;
  if (process.env.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && ([w, L] = tu(O)), v && b !== !1) {
    const H = Object.keys(v), { shapeFlag: Z } = w;
    if (H.length) {
      if (Z & 7)
        i && H.some(wn) && (v = Jp(
          v,
          i
        )), w = mo(w, v, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Hi && w.type !== Ye) {
        const C = Object.keys(a), fe = [], ee = [];
        for (let D = 0, T = C.length; D < T; D++) {
          const J = C[D];
          Dr(J) ? wn(J) || fe.push(J[2].toLowerCase() + J.slice(3)) : ee.push(J);
        }
        ee.length && $(
          `Extraneous non-props attributes (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), fe.length && $(
          `Extraneous non-emits event listeners (${fe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return o.dirs && (process.env.NODE_ENV !== "production" && !wa(w) && $(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), w = mo(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(o.dirs) : o.dirs), o.transition && (process.env.NODE_ENV !== "production" && !wa(w) && $(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), w.transition = o.transition), process.env.NODE_ENV !== "production" && L ? L(w) : O = w, Sn(y), O;
}
const tu = (e) => {
  const t = e.children, o = e.dynamicChildren, r = Bs(t, !1);
  if (r) {
    if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048)
      return tu(r);
  } else return [e, void 0];
  const n = t.indexOf(r), i = o ? o.indexOf(r) : -1, s = (a) => {
    t[n] = a, o && (i > -1 ? o[i] = a : a.patchFlag > 0 && (e.dynamicChildren = [...o, a]));
  };
  return [vt(r), s];
};
function Bs(e, t = !0) {
  let o;
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    if (qo(n)) {
      if (n.type !== Ye || n.children === "v-if") {
        if (o)
          return;
        if (o = n, process.env.NODE_ENV !== "production" && t && o.patchFlag > 0 && o.patchFlag & 2048)
          return Bs(o.children);
      }
    } else
      return;
  }
  return o;
}
const Gp = (e) => {
  let t;
  for (const o in e)
    (o === "class" || o === "style" || Dr(o)) && ((t || (t = {}))[o] = e[o]);
  return t;
}, Jp = (e, t) => {
  const o = {};
  for (const r in e)
    (!wn(r) || !(r.slice(9) in t)) && (o[r] = e[r]);
  return o;
}, wa = (e) => e.shapeFlag & 7 || e.type === Ye;
function Yp(e, t, o) {
  const { props: r, children: n, component: i } = e, { props: s, children: a, patchFlag: c } = t, l = i.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (n || a) && Io || t.dirs || t.transition)
    return !0;
  if (o && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return r ? ka(r, s, l) : !!s;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        if (s[f] !== r[f] && !Jn(l, f))
          return !0;
      }
    }
  } else
    return (n || a) && (!a || !a.$stable) ? !0 : r === s ? !1 : r ? s ? ka(r, s, l) : !0 : !!s;
  return !1;
}
function ka(e, t, o) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < r.length; n++) {
    const i = r[n];
    if (t[i] !== e[i] && !Jn(o, i))
      return !0;
  }
  return !1;
}
function Xp({ vnode: e, parent: t }, o) {
  for (; t; ) {
    const r = t.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
}
const Qp = (e) => e.__isSuspense;
function Zp(e, t) {
  t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : Sl(e);
}
const we = Symbol.for("v-fgt"), jr = Symbol.for("v-txt"), Ye = Symbol.for("v-cmt"), hr = Symbol.for("v-stc"), mr = [];
let ot = null;
function U(e = !1) {
  mr.push(ot = e ? null : []);
}
function eh() {
  mr.pop(), ot = mr[mr.length - 1] || null;
}
let xr = 1;
function xa(e) {
  xr += e, e < 0 && ot && (ot.hasOnce = !0);
}
function ou(e) {
  return e.dynamicChildren = xr > 0 ? ot || zo : null, eh(), xr > 0 && ot && ot.push(e), e;
}
function Q(e, t, o, r, n, i) {
  return ou(
    Se(
      e,
      t,
      o,
      r,
      n,
      i,
      !0
    )
  );
}
function Je(e, t, o, r, n) {
  return ou(
    Pe(
      e,
      t,
      o,
      r,
      n,
      !0
    )
  );
}
function qo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function or(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const o = an.get(t.type);
    if (o && o.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const th = (...e) => nu(
  ...e
), ru = ({ key: e }) => e ?? null, dn = ({
  ref: e,
  ref_key: t,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || _e(e) || K(e) ? { i: $e, r: e, k: t, f: !!o } : e : null);
function Se(e, t = null, o = null, r = 0, n = null, i = e === we ? 0 : 1, s = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ru(t),
    ref: t && dn(t),
    scopeId: Kn,
    slotScopeIds: null,
    children: o,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: r,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: $e
  };
  return a ? (Ds(c, o), i & 128 && e.normalize(c)) : o && (c.shapeFlag |= ke(o) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && $("VNode created with invalid key (NaN). VNode type:", c.type), xr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ot.push(c), c;
}
const Pe = process.env.NODE_ENV !== "production" ? th : nu;
function nu(e, t = null, o = null, r = 0, n = null, i = !1) {
  if ((!e || e === Ll) && (process.env.NODE_ENV !== "production" && !e && $(`Invalid vnode type when creating vnode: ${e}.`), e = Ye), qo(e)) {
    const a = mo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return o && Ds(a, o), xr > 0 && !i && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(e)] = a : ot.push(a)), a.patchFlag = -2, a;
  }
  if (lu(e) && (e = e.__vccOpts), t) {
    t = iu(t);
    let { class: a, style: c } = t;
    a && !ke(a) && (t.class = dt(a)), he(c) && (En(c) && !W(c) && (c = Be({}, c)), t.style = Ar(c));
  }
  const s = ke(e) ? 1 : Qp(e) ? 128 : Ap(e) ? 64 : he(e) ? 4 : K(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && s & 4 && En(e) && (e = G(e), $(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Se(
    e,
    t,
    o,
    r,
    n,
    s,
    i,
    !0
  );
}
function iu(e) {
  return e ? En(e) || Wl(e) ? Be({}, e) : e : null;
}
function mo(e, t, o = !1, r = !1) {
  const { props: n, ref: i, patchFlag: s, children: a, transition: c } = e, l = t ? ce(n || {}, t) : n, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && ru(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && i ? W(i) ? i.concat(dn(t)) : [i, dn(t)] : dn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && W(a) ? a.map(su) : a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== we ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && mo(e.ssContent),
    ssFallback: e.ssFallback && mo(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && r && Tl(
    u,
    c.clone(u)
  ), u;
}
function su(e) {
  const t = mo(e);
  return W(e.children) && (t.children = e.children.map(su)), t;
}
function $n(e = " ", t = 0) {
  return Pe(jr, null, e, t);
}
function oh(e, t) {
  const o = Pe(hr, null, e);
  return o.staticCount = t, o;
}
function ze(e = "", t = !1) {
  return t ? (U(), Je(Ye, null, e)) : Pe(Ye, null, e);
}
function vt(e) {
  return e == null || typeof e == "boolean" ? Pe(Ye) : W(e) ? Pe(
    we,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? ro(e) : Pe(jr, null, String(e));
}
function ro(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mo(e);
}
function Ds(e, t) {
  let o = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (W(t))
    o = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), Ds(e, n()), n._c && (n._d = !0));
      return;
    } else {
      o = 32;
      const n = t._;
      !n && !Wl(t) ? t._ctx = $e : n === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: $e }, o = 32) : (t = String(t), r & 64 ? (o = 16, t = [$n(t)]) : o = 8);
  e.children = t, e.shapeFlag |= o;
}
function ce(...e) {
  const t = {};
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    for (const n in r)
      if (n === "class")
        t.class !== r.class && (t.class = dt([t.class, r.class]));
      else if (n === "style")
        t.style = Ar([t.style, r.style]);
      else if (Dr(n)) {
        const i = t[n], s = r[n];
        s && i !== s && !(W(i) && i.includes(s)) && (t[n] = i ? [].concat(i, s) : s);
      } else n !== "" && (t[n] = r[n]);
  }
  return t;
}
function Ct(e, t, o, r = null) {
  wt(e, t, 7, [
    o,
    r
  ]);
}
const rh = Ul();
let nh = 0;
function ih(e, t, o) {
  const r = e.type, n = (t ? t.appContext : e.appContext) || rh, i = {
    uid: nh++,
    vnode: e,
    type: r,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new el(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ql(r, n),
    emitsOptions: eu(r, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ve,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ve,
    data: ve,
    props: ve,
    attrs: ve,
    slots: ve,
    refs: ve,
    setupState: ve,
    setupContext: null,
    // suspense related
    suspense: o,
    suspenseId: o ? o.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? i.ctx = up(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = qp.bind(null, i), e.ce && e.ce(i), i;
}
let Te = null;
const Mr = () => Te || $e;
let Pn, zi;
{
  const e = gs(), t = (o, r) => {
    let n;
    return (n = e[o]) || (n = e[o] = []), n.push(r), (i) => {
      n.length > 1 ? n.forEach((s) => s(i)) : n[0](i);
    };
  };
  Pn = t(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Te = o
  ), zi = t(
    "__VUE_SSR_SETTERS__",
    (o) => Yn = o
  );
}
const Fr = (e) => {
  const t = Te;
  return Pn(e), e.scope.on(), () => {
    e.scope.off(), Pn(t);
  };
}, Ea = () => {
  Te && Te.scope.off(), Pn(null);
}, sh = /* @__PURE__ */ Gt("slot,component");
function Wi(e, { isNativeTag: t }) {
  (sh(e) || t(e)) && $(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function au(e) {
  return e.vnode.shapeFlag & 4;
}
let Yn = !1;
function ah(e, t = !1, o = !1) {
  t && zi(t);
  const { props: r, children: n } = e.vnode, i = au(e);
  kp(e, r, i, t), Tp(e, n, o);
  const s = i ? ch(e, t) : void 0;
  return t && zi(!1), s;
}
function ch(e, t) {
  var o;
  const r = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (r.name && Wi(r.name, e.appContext.config), r.components) {
      const i = Object.keys(r.components);
      for (let s = 0; s < i.length; s++)
        Wi(i[s], e.appContext.config);
    }
    if (r.directives) {
      const i = Object.keys(r.directives);
      for (let s = 0; s < i.length; s++)
        Pl(i[s]);
    }
    r.compilerOptions && lh() && $(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ml), process.env.NODE_ENV !== "production" && dp(e);
  const { setup: n } = r;
  if (n) {
    const i = e.setupContext = n.length > 1 ? dh(e) : null, s = Fr(e);
    Jt();
    const a = zt(
      n,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ot(e.props) : e.props,
        i
      ]
    );
    if (Yt(), s(), ps(a)) {
      if (a.then(Ea, Ea), t)
        return a.then((c) => {
          Ca(e, c, t);
        }).catch((c) => {
          Vr(c, e, 0);
        });
      if (e.asyncDep = a, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (o = r.name) != null ? o : "Anonymous";
        $(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Ca(e, a, t);
  } else
    cu(e, t);
}
function Ca(e, t, o) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) ? (process.env.NODE_ENV !== "production" && qo(t) && $(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = wl(t), process.env.NODE_ENV !== "production" && fp(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && $(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), cu(e, o);
}
let Ki;
const lh = () => !Ki;
function cu(e, t, o) {
  const r = e.type;
  if (!e.render) {
    if (!t && Ki && !r.render) {
      const n = r.template || $s(e).template;
      if (n) {
        process.env.NODE_ENV !== "production" && Vt(e, "compile");
        const { isCustomElement: i, compilerOptions: s } = e.appContext.config, { delimiters: a, compilerOptions: c } = r, l = Be(
          Be(
            {
              isCustomElement: i,
              delimiters: a
            },
            s
          ),
          c
        );
        r.render = Ki(n, l), process.env.NODE_ENV !== "production" && Lt(e, "compile");
      }
    }
    e.render = r.render || Re;
  }
  {
    const n = Fr(e);
    Jt();
    try {
      hp(e);
    } finally {
      Yt(), n();
    }
  }
  process.env.NODE_ENV !== "production" && !r.render && e.render === Re && !t && (r.template ? $(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : $("Component is missing template or render function: ", r));
}
const Sa = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Rn(), Ve(e, "get", ""), e[t];
  },
  set() {
    return $("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return $("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Ve(e, "get", ""), e[t];
  }
};
function uh(e) {
  return new Proxy(e.slots, {
    get(t, o) {
      return Ve(e, "get", "$slots"), t[o];
    }
  });
}
function dh(e) {
  const t = (o) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && $("expose() should be called only once per setup()."), o != null)) {
      let r = typeof o;
      r === "object" && (W(o) ? r = "array" : _e(o) && (r = "ref")), r !== "object" && $(
        `expose() should be passed a plain object, received ${r}.`
      );
    }
    e.exposed = o || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let o, r;
    return Object.freeze({
      get attrs() {
        return o || (o = new Proxy(e.attrs, Sa));
      },
      get slots() {
        return r || (r = uh(e));
      },
      get emit() {
        return (n, ...i) => e.emit(n, ...i);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, Sa),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Xn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(wl(co(e.exposed)), {
    get(t, o) {
      if (o in t)
        return t[o];
      if (o in Ro)
        return Ro[o](e);
    },
    has(t, o) {
      return o in t || o in Ro;
    }
  })) : e.proxy;
}
const fh = /(?:^|[-_])(\w)/g, ph = (e) => e.replace(fh, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function As(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Qn(e, t, o = !1) {
  let r = As(t);
  if (!r && t.__file) {
    const n = t.__file.match(/([^/\\]+)\.\w+$/);
    n && (r = n[1]);
  }
  if (!r && e && e.parent) {
    const n = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    r = n(
      e.components || e.parent.type.components
    ) || n(e.appContext.components);
  }
  return r ? ph(r) : o ? "App" : "Anonymous";
}
function lu(e) {
  return K(e) && "__vccOpts" in e;
}
const tt = (e, t) => {
  const o = xf(e, t, Yn);
  if (process.env.NODE_ENV !== "production") {
    const r = Mr();
    r && r.appContext.config.warnRecursiveComputed && (o._warnRecursive = !0);
  }
  return o;
};
function uu(e, t, o) {
  const r = arguments.length;
  return r === 2 ? he(t) && !W(t) ? qo(t) ? Pe(e, null, [t]) : Pe(e, t) : Pe(e, null, t) : (r > 3 ? o = Array.prototype.slice.call(arguments, 2) : r === 3 && qo(o) && (o = [o]), Pe(e, t, o));
}
function hh() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, o = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(d) {
      return he(d) ? d.__isVue ? ["div", e, "VueInstance"] : _e(d) ? [
        "div",
        {},
        ["span", e, u(d)],
        "<",
        a(d.value),
        ">"
      ] : Rt(d) ? [
        "div",
        {},
        ["span", e, Ht(d) ? "ShallowReactive" : "Reactive"],
        "<",
        a(d),
        `>${qt(d) ? " (readonly)" : ""}`
      ] : qt(d) ? [
        "div",
        {},
        ["span", e, Ht(d) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(d),
        ">"
      ] : null : null;
    },
    hasBody(d) {
      return d && d.__isVue;
    },
    body(d) {
      if (d && d.__isVue)
        return [
          "div",
          {},
          ...i(d.$)
        ];
    }
  };
  function i(d) {
    const f = [];
    d.type.props && d.props && f.push(s("props", G(d.props))), d.setupState !== ve && f.push(s("setup", d.setupState)), d.data !== ve && f.push(s("data", G(d.data)));
    const h = c(d, "computed");
    h && f.push(s("computed", h));
    const g = c(d, "inject");
    return g && f.push(s("injected", g)), f.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: d }]
    ]), f;
  }
  function s(d, f) {
    return f = Be({}, f), Object.keys(f).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        d
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(f).map((h) => [
          "div",
          {},
          ["span", r, h + ": "],
          a(f[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(d, f = !0) {
    return typeof d == "number" ? ["span", t, d] : typeof d == "string" ? ["span", o, JSON.stringify(d)] : typeof d == "boolean" ? ["span", r, d] : he(d) ? ["object", { object: f ? G(d) : d }] : ["span", o, String(d)];
  }
  function c(d, f) {
    const h = d.type;
    if (K(h))
      return;
    const g = {};
    for (const b in d.ctx)
      l(h, b, f) && (g[b] = d.ctx[b]);
    return g;
  }
  function l(d, f, h) {
    const g = d[h];
    if (W(g) && g.includes(f) || he(g) && f in g || d.extends && l(d.extends, f, h) || d.mixins && d.mixins.some((b) => l(b, f, h)))
      return !0;
  }
  function u(d) {
    return Ht(d) ? "ShallowRef" : d.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const Oa = "3.4.37", po = process.env.NODE_ENV !== "production" ? $ : Re;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const mh = "http://www.w3.org/2000/svg", gh = "http://www.w3.org/1998/Math/MathML", jt = typeof document < "u" ? document : null, Na = jt && /* @__PURE__ */ jt.createElement("template"), bh = {
  insert: (e, t, o) => {
    t.insertBefore(e, o || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, o, r) => {
    const n = t === "svg" ? jt.createElementNS(mh, e) : t === "mathml" ? jt.createElementNS(gh, e) : o ? jt.createElement(e, { is: o }) : jt.createElement(e);
    return e === "select" && r && r.multiple != null && n.setAttribute("multiple", r.multiple), n;
  },
  createText: (e) => jt.createTextNode(e),
  createComment: (e) => jt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => jt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, o, r, n, i) {
    const s = o ? o.previousSibling : t.lastChild;
    if (n && (n === i || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), o), !(n === i || !(n = n.nextSibling)); )
        ;
    else {
      Na.innerHTML = r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e;
      const a = Na.content;
      if (r === "svg" || r === "mathml") {
        const c = a.firstChild;
        for (; c.firstChild; )
          a.appendChild(c.firstChild);
        a.removeChild(c);
      }
      t.insertBefore(a, o);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      o ? o.previousSibling : t.lastChild
    ];
  }
}, vh = Symbol("_vtc");
function yh(e, t, o) {
  const r = e[vh];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : o ? e.setAttribute("class", t) : e.className = t;
}
const Ia = Symbol("_vod"), _h = Symbol("_vsh");
process.env.NODE_ENV;
const wh = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), kh = /(^|;)\s*display\s*:/;
function xh(e, t, o) {
  const r = e.style, n = ke(o);
  let i = !1;
  if (o && !n) {
    if (t)
      if (ke(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          o[a] == null && fn(r, a, "");
        }
      else
        for (const s in t)
          o[s] == null && fn(r, s, "");
    for (const s in o)
      s === "display" && (i = !0), fn(r, s, o[s]);
  } else if (n) {
    if (t !== o) {
      const s = r[wh];
      s && (o += ";" + s), r.cssText = o, i = kh.test(o);
    }
  } else t && e.removeAttribute("style");
  Ia in e && (e[Ia] = i ? r.display : "", e[_h] && (r.display = "none"));
}
const Eh = /[^\\];\s*$/, Ra = /\s*!important$/;
function fn(e, t, o) {
  if (W(o))
    o.forEach((r) => fn(e, t, r));
  else if (o == null && (o = ""), process.env.NODE_ENV !== "production" && Eh.test(o) && po(
    `Unexpected semicolon at the end of '${t}' style value: '${o}'`
  ), t.startsWith("--"))
    e.setProperty(t, o);
  else {
    const r = Ch(e, t);
    Ra.test(o) ? e.setProperty(
      Kt(r),
      o.replace(Ra, ""),
      "important"
    ) : e[r] = o;
  }
}
const $a = ["Webkit", "Moz", "ms"], mi = {};
function Ch(e, t) {
  const o = mi[t];
  if (o)
    return o;
  let r = rt(t);
  if (r !== "filter" && r in e)
    return mi[t] = r;
  r = To(r);
  for (let n = 0; n < $a.length; n++) {
    const i = $a[n] + r;
    if (i in e)
      return mi[t] = i;
  }
  return t;
}
const Pa = "http://www.w3.org/1999/xlink";
function Ta(e, t, o, r, n, i = Qd(t)) {
  r && t.startsWith("xlink:") ? o == null ? e.removeAttributeNS(Pa, t.slice(6, t.length)) : e.setAttributeNS(Pa, t, o) : o == null || i && !Xc(o) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : bo(o) ? String(o) : o
  );
}
function Sh(e, t, o, r) {
  if (t === "innerHTML" || t === "textContent") {
    if (o == null) return;
    e[t] = o;
    return;
  }
  const n = e.tagName;
  if (t === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const s = n === "OPTION" ? e.getAttribute("value") || "" : e.value, a = o == null ? "" : String(o);
    (s !== a || !("_value" in e)) && (e.value = a), o == null && e.removeAttribute(t), e._value = o;
    return;
  }
  let i = !1;
  if (o === "" || o == null) {
    const s = typeof e[t];
    s === "boolean" ? o = Xc(o) : o == null && s === "string" ? (o = "", i = !0) : s === "number" && (o = 0, i = !0);
  }
  try {
    e[t] = o;
  } catch (s) {
    process.env.NODE_ENV !== "production" && !i && po(
      `Failed setting prop "${t}" on <${n.toLowerCase()}>: value ${o} is invalid.`,
      s
    );
  }
  i && e.removeAttribute(t);
}
function Oh(e, t, o, r) {
  e.addEventListener(t, o, r);
}
function Nh(e, t, o, r) {
  e.removeEventListener(t, o, r);
}
const Ba = Symbol("_vei");
function Ih(e, t, o, r, n = null) {
  const i = e[Ba] || (e[Ba] = {}), s = i[t];
  if (r && s)
    s.value = process.env.NODE_ENV !== "production" ? Aa(r, t) : r;
  else {
    const [a, c] = Rh(t);
    if (r) {
      const l = i[t] = Th(
        process.env.NODE_ENV !== "production" ? Aa(r, t) : r,
        n
      );
      Oh(e, a, l, c);
    } else s && (Nh(e, a, s, c), i[t] = void 0);
  }
}
const Da = /(?:Once|Passive|Capture)$/;
function Rh(e) {
  let t;
  if (Da.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Da); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Kt(e.slice(2)), t];
}
let gi = 0;
const $h = /* @__PURE__ */ Promise.resolve(), Ph = () => gi || ($h.then(() => gi = 0), gi = Date.now());
function Th(e, t) {
  const o = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= o.attached)
      return;
    wt(
      Bh(r, o.value),
      t,
      5,
      [r]
    );
  };
  return o.value = e, o.attached = Ph(), o;
}
function Aa(e, t) {
  return K(e) || W(e) ? e : (po(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), Re);
}
function Bh(e, t) {
  if (W(t)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, t.map(
      (r) => (n) => !n._stopped && r && r(n)
    );
  } else
    return t;
}
const Va = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dh = (e, t, o, r, n, i) => {
  const s = n === "svg";
  t === "class" ? yh(e, r, s) : t === "style" ? xh(e, o, r) : Dr(t) ? wn(t) || Ih(e, t, o, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ah(e, t, r, s)) ? (Sh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ta(e, t, r, s, i, t !== "value")) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ta(e, t, r, s));
};
function Ah(e, t, o, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Va(t) && K(o));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Va(t) && ke(o) ? !1 : t in e;
}
const Vh = ["ctrl", "shift", "alt", "meta"], Lh = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Vh.some((o) => e[`${o}Key`] && !t.includes(o))
}, jh = (e, t) => {
  const o = e._withMods || (e._withMods = {}), r = t.join(".");
  return o[r] || (o[r] = (n, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const a = Lh[t[s]];
      if (a && a(n, t)) return;
    }
    return e(n, ...i);
  });
}, Mh = /* @__PURE__ */ Be({ patchProp: Dh }, bh);
let La;
function Fh() {
  return La || (La = Lp(Mh));
}
const Uh = (...e) => {
  const t = Fh().createApp(...e);
  process.env.NODE_ENV !== "production" && (zh(t), Wh(t));
  const { mount: o } = t;
  return t.mount = (r) => {
    const n = Kh(r);
    if (!n) return;
    const i = t._component;
    !K(i) && !i.render && !i.template && (i.template = n.innerHTML), n.innerHTML = "";
    const s = o(n, !1, Hh(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
};
function Hh(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function zh(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Gd(t) || Jd(t) || Yd(t),
    writable: !1
  });
}
function Wh(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        po(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const o = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return po(r), o;
      },
      set() {
        po(r);
      }
    });
  }
}
function Kh(e) {
  if (ke(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && po(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && po(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.37
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qh() {
  hh();
}
process.env.NODE_ENV !== "production" && qh();
var du = !1;
function Qr(e, t, o) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, o), o) : (e[t] = o, o);
}
function bi(e, t) {
  if (Array.isArray(e)) {
    e.splice(t, 1);
    return;
  }
  delete e[t];
}
function Gh() {
  return fu().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function fu() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Jh = typeof Proxy == "function", Yh = "devtools-plugin:setup", Xh = "plugin:settings:set";
let Lo, qi;
function Qh() {
  var e;
  return Lo !== void 0 || (typeof window < "u" && window.performance ? (Lo = !0, qi = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (Lo = !0, qi = globalThis.perf_hooks.performance) : Lo = !1), Lo;
}
function Zh() {
  return Qh() ? qi.now() : Date.now();
}
class em {
  constructor(t, o) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = o;
    const r = {};
    if (t.settings)
      for (const s in t.settings) {
        const a = t.settings[s];
        r[s] = a.defaultValue;
      }
    const n = `__vue-devtools-plugin-settings__${t.id}`;
    let i = Object.assign({}, r);
    try {
      const s = localStorage.getItem(n), a = JSON.parse(s);
      Object.assign(i, a);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return i;
      },
      setSettings(s) {
        try {
          localStorage.setItem(n, JSON.stringify(s));
        } catch {
        }
        i = s;
      },
      now() {
        return Zh();
      }
    }, o && o.on(Xh, (s, a) => {
      s === this.plugin.id && this.fallbacks.setSettings(a);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, a) => this.target ? this.target.on[a] : (...c) => {
        this.onQueue.push({
          method: a,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, a) => this.target ? this.target[a] : a === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(a) ? (...c) => (this.targetQueue.push({
        method: a,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[a](...c)) : (...c) => new Promise((l) => {
        this.targetQueue.push({
          method: a,
          args: c,
          resolve: l
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const o of this.onQueue)
      this.target.on[o.method](...o.args);
    for (const o of this.targetQueue)
      o.resolve(await this.target[o.method](...o.args));
  }
}
function Vs(e, t) {
  const o = e, r = fu(), n = Gh(), i = Jh && o.enableEarlyProxy;
  if (n && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
    n.emit(Yh, e, t);
  else {
    const s = i ? new em(o, n) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: o,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
 * pinia v2.2.1
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
let ur;
const Er = (e) => ur = e, pu = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function Do(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Pt;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Pt || (Pt = {}));
const xo = typeof window < "u", ja = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function tm(e, { autoBom: t = !1 } = {}) {
  return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\uFEFF", e], { type: e.type }) : e;
}
function Ls(e, t, o) {
  const r = new XMLHttpRequest();
  r.open("GET", e), r.responseType = "blob", r.onload = function() {
    gu(r.response, t, o);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function hu(e) {
  const t = new XMLHttpRequest();
  t.open("HEAD", e, !1);
  try {
    t.send();
  } catch {
  }
  return t.status >= 200 && t.status <= 299;
}
function pn(e) {
  try {
    e.dispatchEvent(new MouseEvent("click"));
  } catch {
    const o = document.createEvent("MouseEvents");
    o.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(o);
  }
}
const hn = typeof navigator == "object" ? navigator : { userAgent: "" }, mu = /Macintosh/.test(hn.userAgent) && /AppleWebKit/.test(hn.userAgent) && !/Safari/.test(hn.userAgent), gu = xo ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !mu ? om : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in hn ? rm : (
      // Fallback to using FileReader and a popup
      nm
    )
  )
) : () => {
};
function om(e, t = "download", o) {
  const r = document.createElement("a");
  r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? hu(r.href) ? Ls(e, t, o) : (r.target = "_blank", pn(r)) : pn(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    pn(r);
  }, 0));
}
function rm(e, t = "download", o) {
  if (typeof e == "string")
    if (hu(e))
      Ls(e, t, o);
    else {
      const r = document.createElement("a");
      r.href = e, r.target = "_blank", setTimeout(function() {
        pn(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(tm(e, o), t);
}
function nm(e, t, o, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
    return Ls(e, t, o);
  const n = e.type === "application/octet-stream", i = /constructor/i.test(String(ja.HTMLElement)) || "safari" in ja, s = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((s || n && i || mu) && typeof FileReader < "u") {
    const a = new FileReader();
    a.onloadend = function() {
      let c = a.result;
      if (typeof c != "string")
        throw r = null, new Error("Wrong reader.result type");
      c = s ? c : c.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = c : location.assign(c), r = null;
    }, a.readAsDataURL(e);
  } else {
    const a = URL.createObjectURL(e);
    r ? r.location.assign(a) : location.href = a, r = null, setTimeout(function() {
      URL.revokeObjectURL(a);
    }, 4e4);
  }
}
function Ae(e, t) {
  const o = "🍍 " + e;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(o, t) : t === "error" ? console.error(o) : t === "warn" ? console.warn(o) : console.log(o);
}
function js(e) {
  return "_a" in e && "install" in e;
}
function bu() {
  if (!("clipboard" in navigator))
    return Ae("Your browser doesn't support the Clipboard API", "error"), !0;
}
function vu(e) {
  return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ae('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function im(e) {
  if (!bu())
    try {
      await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ae("Global state copied to clipboard.");
    } catch (t) {
      if (vu(t))
        return;
      Ae("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
    }
}
async function sm(e) {
  if (!bu())
    try {
      yu(e, JSON.parse(await navigator.clipboard.readText())), Ae("Global state pasted from clipboard.");
    } catch (t) {
      if (vu(t))
        return;
      Ae("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
    }
}
async function am(e) {
  try {
    gu(new Blob([JSON.stringify(e.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (t) {
    Ae("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
  }
}
let Dt;
function cm() {
  Dt || (Dt = document.createElement("input"), Dt.type = "file", Dt.accept = ".json");
  function e() {
    return new Promise((t, o) => {
      Dt.onchange = async () => {
        const r = Dt.files;
        if (!r)
          return t(null);
        const n = r.item(0);
        return t(n ? { text: await n.text(), file: n } : null);
      }, Dt.oncancel = () => t(null), Dt.onerror = o, Dt.click();
    });
  }
  return e;
}
async function lm(e) {
  try {
    const o = await cm()();
    if (!o)
      return;
    const { text: r, file: n } = o;
    yu(e, JSON.parse(r)), Ae(`Global state imported from "${n.name}".`);
  } catch (t) {
    Ae("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(t);
  }
}
function yu(e, t) {
  for (const o in t) {
    const r = e.state.value[o];
    r ? Object.assign(r, t[o]) : e.state.value[o] = t[o];
  }
}
function gt(e) {
  return {
    _custom: {
      display: e
    }
  };
}
const _u = "🍍 Pinia (root)", mn = "_root";
function um(e) {
  return js(e) ? {
    id: mn,
    label: _u
  } : {
    id: e.$id,
    label: e.$id
  };
}
function dm(e) {
  if (js(e)) {
    const o = Array.from(e._s.keys()), r = e._s;
    return {
      state: o.map((i) => ({
        editable: !0,
        key: i,
        value: e.state.value[i]
      })),
      getters: o.filter((i) => r.get(i)._getters).map((i) => {
        const s = r.get(i);
        return {
          editable: !1,
          key: i,
          value: s._getters.reduce((a, c) => (a[c] = s[c], a), {})
        };
      })
    };
  }
  const t = {
    state: Object.keys(e.$state).map((o) => ({
      editable: !0,
      key: o,
      value: e.$state[o]
    }))
  };
  return e._getters && e._getters.length && (t.getters = e._getters.map((o) => ({
    editable: !1,
    key: o,
    value: e[o]
  }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((o) => ({
    editable: !0,
    key: o,
    value: e[o]
  }))), t;
}
function fm(e) {
  return e ? Array.isArray(e) ? e.reduce((t, o) => (t.keys.push(o.key), t.operations.push(o.type), t.oldValue[o.key] = o.oldValue, t.newValue[o.key] = o.newValue, t), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: gt(e.type),
    key: gt(e.key),
    oldValue: e.oldValue,
    newValue: e.newValue
  } : {};
}
function pm(e) {
  switch (e) {
    case Pt.direct:
      return "mutation";
    case Pt.patchFunction:
      return "$patch";
    case Pt.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Fo = !0;
const gn = [], wo = "pinia:mutations", je = "pinia", { assign: hm } = Object, Tn = (e) => "🍍 " + e;
function mm(e, t) {
  Vs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: gn,
    app: e
  }, (o) => {
    typeof o.now != "function" && Ae("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), o.addTimelineLayer({
      id: wo,
      label: "Pinia 🍍",
      color: 15064968
    }), o.addInspector({
      id: je,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            im(t);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await sm(t), o.sendInspectorTree(je), o.sendInspectorState(je);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            am(t);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await lm(t), o.sendInspectorTree(je), o.sendInspectorState(je);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (r) => {
            const n = t._s.get(r);
            n ? typeof n.$reset != "function" ? Ae(`Cannot reset "${r}" store because it doesn't have a "$reset" method implemented.`, "warn") : (n.$reset(), Ae(`Store "${r}" reset.`)) : Ae(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), o.on.inspectComponent((r, n) => {
      const i = r.componentInstance && r.componentInstance.proxy;
      if (i && i._pStores) {
        const s = r.componentInstance.proxy._pStores;
        Object.values(s).forEach((a) => {
          r.instanceData.state.push({
            type: Tn(a.$id),
            key: "state",
            editable: !0,
            value: a._isOptionsAPI ? {
              _custom: {
                value: G(a.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => a.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(a.$state).reduce((c, l) => (c[l] = a.$state[l], c), {})
            )
          }), a._getters && a._getters.length && r.instanceData.state.push({
            type: Tn(a.$id),
            key: "getters",
            editable: !1,
            value: a._getters.reduce((c, l) => {
              try {
                c[l] = a[l];
              } catch (u) {
                c[l] = u;
              }
              return c;
            }, {})
          });
        });
      }
    }), o.on.getInspectorTree((r) => {
      if (r.app === e && r.inspectorId === je) {
        let n = [t];
        n = n.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? n.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(r.filter.toLowerCase()) : _u.toLowerCase().includes(r.filter.toLowerCase())) : n).map(um);
      }
    }), globalThis.$pinia = t, o.on.getInspectorState((r) => {
      if (r.app === e && r.inspectorId === je) {
        const n = r.nodeId === mn ? t : t._s.get(r.nodeId);
        if (!n)
          return;
        n && (r.nodeId !== mn && (globalThis.$store = G(n)), r.state = dm(n));
      }
    }), o.on.editInspectorState((r, n) => {
      if (r.app === e && r.inspectorId === je) {
        const i = r.nodeId === mn ? t : t._s.get(r.nodeId);
        if (!i)
          return Ae(`store "${r.nodeId}" not found`, "error");
        const { path: s } = r;
        js(i) ? s.unshift("state") : (s.length !== 1 || !i._customProperties.has(s[0]) || s[0] in i.$state) && s.unshift("$state"), Fo = !1, r.set(i, s, r.state.value), Fo = !0;
      }
    }), o.on.editComponentState((r) => {
      if (r.type.startsWith("🍍")) {
        const n = r.type.replace(/^🍍\s*/, ""), i = t._s.get(n);
        if (!i)
          return Ae(`store "${n}" not found`, "error");
        const { path: s } = r;
        if (s[0] !== "state")
          return Ae(`Invalid path for store "${n}":
${s}
Only state can be modified.`);
        s[0] = "$state", Fo = !1, r.set(i, s, r.state.value), Fo = !0;
      }
    });
  });
}
function gm(e, t) {
  gn.includes(Tn(t.$id)) || gn.push(Tn(t.$id)), Vs({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: gn,
    app: e,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (o) => {
    const r = typeof o.now == "function" ? o.now.bind(o) : Date.now;
    t.$onAction(({ after: s, onError: a, name: c, args: l }) => {
      const u = wu++;
      o.addTimelineEvent({
        layerId: wo,
        event: {
          time: r(),
          title: "🛫 " + c,
          subtitle: "start",
          data: {
            store: gt(t.$id),
            action: gt(c),
            args: l
          },
          groupId: u
        }
      }), s((d) => {
        lo = void 0, o.addTimelineEvent({
          layerId: wo,
          event: {
            time: r(),
            title: "🛬 " + c,
            subtitle: "end",
            data: {
              store: gt(t.$id),
              action: gt(c),
              args: l,
              result: d
            },
            groupId: u
          }
        });
      }), a((d) => {
        lo = void 0, o.addTimelineEvent({
          layerId: wo,
          event: {
            time: r(),
            logType: "error",
            title: "💥 " + c,
            subtitle: "end",
            data: {
              store: gt(t.$id),
              action: gt(c),
              args: l,
              error: d
            },
            groupId: u
          }
        });
      });
    }, !0), t._customProperties.forEach((s) => {
      ut(() => lt(t[s]), (a, c) => {
        o.notifyComponentUpdate(), o.sendInspectorState(je), Fo && o.addTimelineEvent({
          layerId: wo,
          event: {
            time: r(),
            title: "Change",
            subtitle: s,
            data: {
              newValue: a,
              oldValue: c
            },
            groupId: lo
          }
        });
      }, { deep: !0 });
    }), t.$subscribe(({ events: s, type: a }, c) => {
      if (o.notifyComponentUpdate(), o.sendInspectorState(je), !Fo)
        return;
      const l = {
        time: r(),
        title: pm(a),
        data: hm({ store: gt(t.$id) }, fm(s)),
        groupId: lo
      };
      a === Pt.patchFunction ? l.subtitle = "⤵️" : a === Pt.patchObject ? l.subtitle = "🧩" : s && !Array.isArray(s) && (l.subtitle = s.type), s && (l.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: s
        }
      }), o.addTimelineEvent({
        layerId: wo,
        event: l
      });
    }, { detached: !0, flush: "sync" });
    const n = t._hotUpdate;
    t._hotUpdate = co((s) => {
      n(s), o.addTimelineEvent({
        layerId: wo,
        event: {
          time: r(),
          title: "🔥 " + t.$id,
          subtitle: "HMR update",
          data: {
            store: gt(t.$id),
            info: gt("HMR update")
          }
        }
      }), o.notifyComponentUpdate(), o.sendInspectorTree(je), o.sendInspectorState(je);
    });
    const { $dispose: i } = t;
    t.$dispose = () => {
      i(), o.notifyComponentUpdate(), o.sendInspectorTree(je), o.sendInspectorState(je), o.getSettings().logStoreChanges && Ae(`Disposed "${t.$id}" store 🗑`);
    }, o.notifyComponentUpdate(), o.sendInspectorTree(je), o.sendInspectorState(je), o.getSettings().logStoreChanges && Ae(`"${t.$id}" store installed 🆕`);
  });
}
let wu = 0, lo;
function Ma(e, t, o) {
  const r = t.reduce((n, i) => (n[i] = G(e)[i], n), {});
  for (const n in r)
    e[n] = function() {
      const i = wu, s = o ? new Proxy(e, {
        get(...c) {
          return lo = i, Reflect.get(...c);
        },
        set(...c) {
          return lo = i, Reflect.set(...c);
        }
      }) : e;
      lo = i;
      const a = r[n].apply(s, arguments);
      return lo = void 0, a;
    };
}
function bm({ app: e, store: t, options: o }) {
  if (!t.$id.startsWith("__hot:")) {
    if (t._isOptionsAPI = !!o.state, !t._p._testing) {
      Ma(t, Object.keys(o.actions), t._isOptionsAPI);
      const r = t._hotUpdate;
      G(t)._hotUpdate = function(n) {
        r.apply(this, arguments), Ma(t, Object.keys(n._hmrPayload.actions), !!t._isOptionsAPI);
      };
    }
    gm(
      e,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      t
    );
  }
}
function vm() {
  const e = tl(!0), t = e.run(() => $t({}));
  let o = [], r = [];
  const n = co({
    install(i) {
      Er(n), n._a = i, i.provide(pu, n), i.config.globalProperties.$pinia = n, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && xo && mm(i, n), r.forEach((s) => o.push(s)), r = [];
    },
    use(i) {
      return !this._a && !du ? r.push(i) : o.push(i), this;
    },
    _p: o,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof Proxy < "u" && n.use(bm), n;
}
function ku(e, t) {
  for (const o in t) {
    const r = t[o];
    if (!(o in e))
      continue;
    const n = e[o];
    Do(n) && Do(r) && !_e(r) && !Rt(r) ? e[o] = ku(n, r) : e[o] = r;
  }
  return e;
}
const xu = () => {
};
function Fa(e, t, o, r = xu) {
  e.push(t);
  const n = () => {
    const i = e.indexOf(t);
    i > -1 && (e.splice(i, 1), r());
  };
  return !o && ol() && ef(n), n;
}
function jo(e, ...t) {
  e.slice().forEach((o) => {
    o(...t);
  });
}
const ym = (e) => e(), Ua = Symbol(), vi = Symbol();
function Gi(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((o, r) => e.set(r, o)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const o in t) {
    if (!t.hasOwnProperty(o))
      continue;
    const r = t[o], n = e[o];
    Do(n) && Do(r) && e.hasOwnProperty(o) && !_e(r) && !Rt(r) ? e[o] = Gi(n, r) : e[o] = r;
  }
  return e;
}
const _m = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function wm(e) {
  return !Do(e) || !e.hasOwnProperty(_m);
}
const { assign: at } = Object;
function Ha(e) {
  return !!(_e(e) && e.effect);
}
function za(e, t, o, r) {
  const { state: n, actions: i, getters: s } = t, a = o.state.value[e];
  let c;
  function l() {
    !a && (process.env.NODE_ENV === "production" || !r) && (o.state.value[e] = n ? n() : {});
    const u = process.env.NODE_ENV !== "production" && r ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      la($t(n ? n() : {}).value)
    ) : la(o.state.value[e]);
    return at(u, i, Object.keys(s || {}).reduce((d, f) => (process.env.NODE_ENV !== "production" && f in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), d[f] = co(tt(() => {
      Er(o);
      const h = o._s.get(e);
      return s[f].call(h, h);
    })), d), {}));
  }
  return c = Ji(e, l, t, o, r, !0), c;
}
function Ji(e, t, o = {}, r, n, i) {
  let s;
  const a = at({ actions: {} }, o);
  if (process.env.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const c = { deep: !0 };
  process.env.NODE_ENV !== "production" && !du && (c.onTrigger = (D) => {
    l ? h = D : l == !1 && !C._hotUpdating && (Array.isArray(h) ? h.push(D) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let l, u, d = [], f = [], h;
  const g = r.state.value[e];
  !i && !g && (process.env.NODE_ENV === "production" || !n) && (r.state.value[e] = {});
  const b = $t({});
  let y;
  function O(D) {
    let T;
    l = u = !1, process.env.NODE_ENV !== "production" && (h = []), typeof D == "function" ? (D(r.state.value[e]), T = {
      type: Pt.patchFunction,
      storeId: e,
      events: h
    }) : (Gi(r.state.value[e], D), T = {
      type: Pt.patchObject,
      payload: D,
      storeId: e,
      events: h
    });
    const J = y = Symbol();
    wr().then(() => {
      y === J && (l = !0);
    }), u = !0, jo(d, T, r.state.value[e]);
  }
  const v = i ? function() {
    const { state: T } = o, J = T ? T() : {};
    this.$patch((be) => {
      at(be, J);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
    } : xu
  );
  function w() {
    s.stop(), d = [], f = [], r._s.delete(e);
  }
  const L = (D, T = "") => {
    if (Ua in D)
      return D[vi] = T, D;
    const J = function() {
      Er(r);
      const be = Array.from(arguments), Fe = [], Ne = [];
      function xe(me) {
        Fe.push(me);
      }
      function Y(me) {
        Ne.push(me);
      }
      jo(f, {
        args: be,
        name: J[vi],
        store: C,
        after: xe,
        onError: Y
      });
      let q;
      try {
        q = D.apply(this && this.$id === e ? this : C, be);
      } catch (me) {
        throw jo(Ne, me), me;
      }
      return q instanceof Promise ? q.then((me) => (jo(Fe, me), me)).catch((me) => (jo(Ne, me), Promise.reject(me))) : (jo(Fe, q), q);
    };
    return J[Ua] = !0, J[vi] = T, J;
  }, H = /* @__PURE__ */ co({
    actions: {},
    getters: {},
    state: [],
    hotState: b
  }), Z = {
    _p: r,
    // _s: scope,
    $id: e,
    $onAction: Fa.bind(null, f),
    $patch: O,
    $reset: v,
    $subscribe(D, T = {}) {
      const J = Fa(d, D, T.detached, () => be()), be = s.run(() => ut(() => r.state.value[e], (Fe) => {
        (T.flush === "sync" ? u : l) && D({
          storeId: e,
          type: Pt.direct,
          events: h
        }, Fe);
      }, at({}, c, T)));
      return J;
    },
    $dispose: w
  }, C = Yo(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && xo ? at(
    {
      _hmrPayload: H,
      _customProperties: co(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    Z
    // must be added later
    // setupStore
  ) : Z);
  r._s.set(e, C);
  const ee = (r._a && r._a.runWithContext || ym)(() => r._e.run(() => (s = tl()).run(() => t({ action: L }))));
  for (const D in ee) {
    const T = ee[D];
    if (_e(T) && !Ha(T) || Rt(T))
      process.env.NODE_ENV !== "production" && n ? Qr(b.value, D, rn(ee, D)) : i || (g && wm(T) && (_e(T) ? T.value = g[D] : Gi(T, g[D])), r.state.value[e][D] = T), process.env.NODE_ENV !== "production" && H.state.push(D);
    else if (typeof T == "function") {
      const J = process.env.NODE_ENV !== "production" && n ? T : L(T, D);
      ee[D] = J, process.env.NODE_ENV !== "production" && (H.actions[D] = T), a.actions[D] = T;
    } else process.env.NODE_ENV !== "production" && Ha(T) && (H.getters[D] = i ? (
      // @ts-expect-error
      o.getters[D]
    ) : T, xo && (ee._getters || // @ts-expect-error: same
    (ee._getters = co([]))).push(D));
  }
  if (at(C, ee), at(G(C), ee), Object.defineProperty(C, "$state", {
    get: () => process.env.NODE_ENV !== "production" && n ? b.value : r.state.value[e],
    set: (D) => {
      if (process.env.NODE_ENV !== "production" && n)
        throw new Error("cannot set hotState");
      O((T) => {
        at(T, D);
      });
    }
  }), process.env.NODE_ENV !== "production" && (C._hotUpdate = co((D) => {
    C._hotUpdating = !0, D._hmrPayload.state.forEach((T) => {
      if (T in C.$state) {
        const J = D.$state[T], be = C.$state[T];
        typeof J == "object" && Do(J) && Do(be) ? ku(J, be) : D.$state[T] = be;
      }
      Qr(C, T, rn(D.$state, T));
    }), Object.keys(C.$state).forEach((T) => {
      T in D.$state || bi(C, T);
    }), l = !1, u = !1, r.state.value[e] = rn(D._hmrPayload, "hotState"), u = !0, wr().then(() => {
      l = !0;
    });
    for (const T in D._hmrPayload.actions) {
      const J = D[T];
      Qr(C, T, L(J, T));
    }
    for (const T in D._hmrPayload.getters) {
      const J = D._hmrPayload.getters[T], be = i ? (
        // special handling of options api
        tt(() => (Er(r), J.call(C, C)))
      ) : J;
      Qr(C, T, be);
    }
    Object.keys(C._hmrPayload.getters).forEach((T) => {
      T in D._hmrPayload.getters || bi(C, T);
    }), Object.keys(C._hmrPayload.actions).forEach((T) => {
      T in D._hmrPayload.actions || bi(C, T);
    }), C._hmrPayload = D._hmrPayload, C._getters = D._getters, C._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && xo) {
    const D = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((T) => {
      Object.defineProperty(C, T, at({ value: C[T] }, D));
    });
  }
  return r._p.forEach((D) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && xo) {
      const T = s.run(() => D({
        store: C,
        app: r._a,
        pinia: r,
        options: a
      }));
      Object.keys(T || {}).forEach((J) => C._customProperties.add(J)), at(C, T);
    } else
      at(C, s.run(() => D({
        store: C,
        app: r._a,
        pinia: r,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && C.$state && typeof C.$state == "object" && typeof C.$state.constructor == "function" && !C.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${C.$id}".`), g && i && o.hydrate && o.hydrate(C.$state, g), l = !0, u = !0, C;
}
function Eu(e, t, o) {
  let r, n;
  const i = typeof t == "function";
  if (typeof e == "string")
    r = e, n = i ? o : t;
  else if (n = e, r = e.id, process.env.NODE_ENV !== "production" && typeof r != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function s(a, c) {
    const l = wp();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && ur && ur._testing ? null : a) || (l ? ft(pu, null) : null), a && Er(a), process.env.NODE_ENV !== "production" && !ur)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = ur, a._s.has(r) || (i ? Ji(r, t, n, a) : za(r, n, a), process.env.NODE_ENV !== "production" && (s._pinia = a));
    const u = a._s.get(r);
    if (process.env.NODE_ENV !== "production" && c) {
      const d = "__hot:" + r, f = i ? Ji(d, t, n, a, !0) : za(d, at({}, n), a, !0);
      c._hotUpdate(f), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && xo) {
      const d = Mr();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !c) {
        const f = d.proxy, h = "_pStores" in f ? f._pStores : f._pStores = {};
        h[r] = u;
      }
    }
    return u;
  }
  return s.$id = r, s;
}
function Ms(e) {
  {
    e = G(e);
    const t = {};
    for (const o in e) {
      const r = e[o];
      (_e(r) || Rt(r)) && (t[o] = // ---
      rn(e, o));
    }
    return t;
  }
}
var km = Object.defineProperty, Wa = Object.getOwnPropertySymbols, xm = Object.prototype.hasOwnProperty, Em = Object.prototype.propertyIsEnumerable, Ka = (e, t, o) => t in e ? km(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Cm = (e, t) => {
  for (var o in t || (t = {}))
    xm.call(t, o) && Ka(e, o, t[o]);
  if (Wa)
    for (var o of Wa(t))
      Em.call(t, o) && Ka(e, o, t[o]);
  return e;
};
function uo(e) {
  return e == null || e === "" || Array.isArray(e) && e.length === 0 || !(e instanceof Date) && typeof e == "object" && Object.keys(e).length === 0;
}
function Fs(e) {
  return !!(e && e.constructor && e.call && e.apply);
}
function Ce(e) {
  return !uo(e);
}
function qa(e, t) {
  let o = -1;
  if (Ce(e))
    try {
      o = e.findLastIndex(t);
    } catch {
      o = e.lastIndexOf([...e].reverse().find(t));
    }
  return o;
}
function Bt(e, t = !0) {
  return e instanceof Object && e.constructor === Object && (t || Object.keys(e).length !== 0);
}
function pt(e, ...t) {
  return Fs(e) ? e(...t) : e;
}
function Xe(e, t = !0) {
  return typeof e == "string" && (t || e !== "");
}
function yt(e) {
  return Xe(e) ? e.replace(/(-|_)/g, "").toLowerCase() : e;
}
function Us(e, t = "", o = {}) {
  const r = yt(t).split("."), n = r.shift();
  return n ? Bt(e) ? Us(pt(e[Object.keys(e).find((i) => yt(i) === n) || ""], o), r.join("."), o) : void 0 : pt(e, o);
}
function Hs(e, t = !0) {
  return Array.isArray(e) && (t || e.length !== 0);
}
function Cu(e) {
  return Ce(e) && !isNaN(e);
}
function Sm(e = "") {
  return Ce(e) && e.length === 1 && !!e.match(/\S| /);
}
function Ut(e, t) {
  if (t) {
    const o = t.test(e);
    return t.lastIndex = 0, o;
  }
  return !1;
}
function Om(...e) {
  const t = (o = {}, r = {}) => {
    const n = Cm({}, o);
    return Object.keys(r).forEach((i) => {
      Bt(r[i]) && i in o && Bt(o[i]) ? n[i] = t(o[i], r[i]) : n[i] = r[i];
    }), n;
  };
  return e.reduce((o, r, n) => n === 0 ? r : t(o, r), {});
}
function gr(e) {
  return e && e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":");
}
function Nm(e) {
  return Xe(e, !1) ? e[0].toUpperCase() + e.slice(1) : e;
}
function Su(e) {
  return Xe(e) ? e.replace(/(_)/g, "-").replace(/[A-Z]/g, (t, o) => o === 0 ? t : "-" + t.toLowerCase()).toLowerCase() : e;
}
function Ga(e) {
  return Xe(e) ? e.replace(/[A-Z]/g, (t, o) => o === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Ou() {
  const e = /* @__PURE__ */ new Map();
  return {
    on(t, o) {
      let r = e.get(t);
      return r ? r.push(o) : r = [o], e.set(t, r), this;
    },
    off(t, o) {
      let r = e.get(t);
      return r && r.splice(r.indexOf(o) >>> 0, 1), this;
    },
    emit(t, o) {
      let r = e.get(t);
      r && r.slice().map((n) => {
        n(o);
      });
    },
    clear() {
      e.clear();
    }
  };
}
var Im = Object.defineProperty, Rm = Object.defineProperties, $m = Object.getOwnPropertyDescriptors, Bn = Object.getOwnPropertySymbols, Nu = Object.prototype.hasOwnProperty, Iu = Object.prototype.propertyIsEnumerable, Ja = (e, t, o) => t in e ? Im(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, rr = (e, t) => {
  for (var o in t || (t = {}))
    Nu.call(t, o) && Ja(e, o, t[o]);
  if (Bn)
    for (var o of Bn(t))
      Iu.call(t, o) && Ja(e, o, t[o]);
  return e;
}, yi = (e, t) => Rm(e, $m(t)), nr = (e, t) => {
  var o = {};
  for (var r in e)
    Nu.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
  if (e != null && Bn)
    for (var r of Bn(e))
      t.indexOf(r) < 0 && Iu.call(e, r) && (o[r] = e[r]);
  return o;
}, Pm = Ou(), bt = Pm;
function Ya(e, t) {
  Hs(e) ? e.push(...t || []) : Bt(e) && Object.assign(e, t);
}
function Tm(e) {
  return Bt(e) && e.hasOwnProperty("value") && e.hasOwnProperty("type") ? e.value : e;
}
function Xa(e, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((r) => t.endsWith(r)) ? e : `${e}`.trim().split(" ").map((i) => Cu(i) ? `${i}px` : i).join(" ");
}
function Bm(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Yi(e = "", t = "") {
  return Bm(`${Xe(e, !1) && Xe(t, !1) ? `${e}-` : e}${t}`);
}
function Ru(e = "", t = "") {
  return `--${Yi(e, t)}`;
}
function $u(e, t = "", o = "", r = [], n) {
  if (Xe(e)) {
    const i = /{([^}]*)}/g, s = e.trim();
    if (Ut(s, i)) {
      const a = s.replaceAll(i, (u) => {
        const f = u.replace(/{|}/g, "").split(".").filter((h) => !r.some((g) => Ut(h, g)));
        return `var(${Ru(o, Su(f.join("-")))}${Ce(n) ? `, ${n}` : ""})`;
      }), c = /(\d+\s+[\+\-\*\/]\s+\d+)/g, l = /var\([^)]+\)/g;
      return Ut(a.replace(l, "0"), c) ? `calc(${a})` : a;
    }
    return Xa(s, t);
  } else if (Cu(e))
    return Xa(e, t);
}
function Dm(e, t, o) {
  Xe(t, !1) && e.push(`${t}:${o};`);
}
function dr(e, t) {
  return e ? `${e}{${t}}` : "";
}
var _i = (...e) => Am(ge.getTheme(), ...e), Am = (e = {}, t, o, r = "variable") => {
  if (t) {
    const { variable: n, options: i } = ge.defaults || {}, { prefix: s, transform: a } = (e == null ? void 0 : e.options) || i || {}, l = Ut(t, /{([^}]*)}/g) ? t : `{${t}}`;
    return r === "value" || a === "strict" ? ge.getTokenValue(t) : $u(l, void 0, s, [n.excludedKeyRegex], o);
  }
  return "";
};
function Vm(e, t = {}) {
  const o = ge.defaults.variable, { prefix: r = o.prefix, selector: n = o.selector, excludedKeyRegex: i = o.excludedKeyRegex } = t, s = (l, u = "") => Object.entries(l).reduce(
    (d, [f, h]) => {
      const g = Ut(f, i) ? Yi(u) : Yi(u, Su(f)), b = Tm(h);
      if (Bt(b)) {
        const { variables: y, tokens: O } = s(b, g);
        Ya(d.tokens, O), Ya(d.variables, y);
      } else
        d.tokens.push((r ? g.replace(`${r}-`, "") : g).replaceAll("-", ".")), Dm(d.variables, Ru(g), $u(b, g, r, [i]));
      return d;
    },
    { variables: [], tokens: [] }
  ), { variables: a, tokens: c } = s(e, r);
  return {
    value: a,
    tokens: c,
    declarations: a.join(""),
    css: dr(n, a.join(""))
  };
}
var mt = {
  regex: {
    rules: {
      class: {
        pattern: /^\.([a-zA-Z][\w-]*)$/,
        resolve(e) {
          return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
        }
      },
      attr: {
        pattern: /^\[(.*)\]$/,
        resolve(e) {
          return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
        }
      },
      media: {
        pattern: /^@media (.*)$/,
        resolve(e) {
          return { type: "media", selector: `${e}{:root{[CSS]}}`, matched: this.pattern.test(e.trim()) };
        }
      },
      system: {
        pattern: /^system$/,
        resolve(e) {
          return { type: "system", selector: "@media (prefers-color-scheme: dark){:root{[CSS]}}", matched: this.pattern.test(e.trim()) };
        }
      },
      custom: {
        resolve(e) {
          return { type: "custom", selector: e, matched: !0 };
        }
      }
    },
    resolve(e) {
      const t = Object.keys(this.rules).filter((o) => o !== "custom").map((o) => this.rules[o]);
      return [e].flat().map((o) => {
        var r;
        return (r = t.map((n) => n.resolve(o)).find((n) => n.matched)) != null ? r : this.rules.custom.resolve(o);
      });
    }
  },
  _toVariables(e, t) {
    return Vm(e, { prefix: t == null ? void 0 : t.prefix });
  },
  getCommon({ name: e = "", theme: t = {}, params: o, set: r, defaults: n }) {
    var i, s, a, c;
    const { preset: l, options: u } = t;
    let d, f, h, g;
    if (Ce(l)) {
      const { primitive: b, semantic: y } = l, O = y || {}, { colorScheme: v } = O, w = nr(O, ["colorScheme"]), L = v || {}, { dark: H } = L, Z = nr(L, ["dark"]), C = Ce(b) ? this._toVariables({ primitive: b }, u) : {}, fe = Ce(w) ? this._toVariables({ semantic: w }, u) : {}, ee = Ce(Z) ? this._toVariables({ light: Z }, u) : {}, D = Ce(H) ? this._toVariables({ dark: H }, u) : {}, [T, J] = [(i = C.declarations) != null ? i : "", C.tokens], [be, Fe] = [(s = fe.declarations) != null ? s : "", fe.tokens || []], [Ne, xe] = [(a = ee.declarations) != null ? a : "", ee.tokens || []], [Y, q] = [(c = D.declarations) != null ? c : "", D.tokens || []];
      d = this.transformCSS(e, T, "light", "variable", u, r, n), f = J;
      const me = this.transformCSS(e, `${be}${Ne}color-scheme:light`, "light", "variable", u, r, n), We = this.transformCSS(e, `${Y}color-scheme:dark`, "dark", "variable", u, r, n);
      h = `${me}${We}`, g = [.../* @__PURE__ */ new Set([...Fe, ...xe, ...q])];
    }
    return {
      primitive: {
        css: d,
        tokens: f
      },
      semantic: {
        css: h,
        tokens: g
      }
    };
  },
  getPreset({ name: e = "", preset: t = {}, options: o, params: r, set: n, defaults: i, selector: s }) {
    var a, c, l;
    const u = e.replace("-directive", ""), d = t, { colorScheme: f } = d, h = nr(d, ["colorScheme"]), g = f || {}, { dark: b } = g, y = nr(g, ["dark"]), O = Ce(h) ? this._toVariables({ [u]: h }, o) : {}, v = Ce(y) ? this._toVariables({ [u]: y }, o) : {}, w = Ce(b) ? this._toVariables({ [u]: b }, o) : {}, [L, H] = [(a = O.declarations) != null ? a : "", O.tokens || []], [Z, C] = [(c = v.declarations) != null ? c : "", v.tokens || []], [fe, ee] = [(l = w.declarations) != null ? l : "", w.tokens || []], D = [.../* @__PURE__ */ new Set([...H, ...C, ...ee])], T = this.transformCSS(u, `${L}${Z}`, "light", "variable", o, n, i, s), J = this.transformCSS(u, fe, "dark", "variable", o, n, i, s);
    return {
      css: `${T}${J}`,
      tokens: D
    };
  },
  getPresetC({ name: e = "", theme: t = {}, params: o, set: r, defaults: n }) {
    var i;
    const { preset: s, options: a } = t, c = (i = s == null ? void 0 : s.components) == null ? void 0 : i[e];
    return this.getPreset({ name: e, preset: c, options: a, params: o, set: r, defaults: n });
  },
  getPresetD({ name: e = "", theme: t = {}, params: o, set: r, defaults: n }) {
    var i;
    const s = e.replace("-directive", ""), { preset: a, options: c } = t, l = (i = a == null ? void 0 : a.directives) == null ? void 0 : i[s];
    return this.getPreset({ name: s, preset: l, options: c, params: o, set: r, defaults: n });
  },
  getColorSchemeOption(e, t) {
    var o;
    return this.regex.resolve((o = e.darkModeSelector) != null ? o : t.options.darkModeSelector);
  },
  getLayerOrder(e, t = {}, o, r) {
    const { cssLayer: n } = t;
    return n ? `@layer ${pt(n.order || "primeui", o)}` : "";
  },
  getCommonStyleSheet({ name: e = "", theme: t = {}, params: o, props: r = {}, set: n, defaults: i }) {
    const s = this.getCommon({ name: e, theme: t, params: o, set: n, defaults: i }), a = Object.entries(r).reduce((c, [l, u]) => c.push(`${l}="${u}"`) && c, []).join(" ");
    return Object.entries(s || {}).reduce((c, [l, u]) => {
      if (u != null && u.css) {
        const d = gr(u == null ? void 0 : u.css), f = `${l}-variables`;
        c.push(`<style type="text/css" data-primevue-style-id="${f}" ${a}>${d}</style>`);
      }
      return c;
    }, []).join("");
  },
  getStyleSheet({ name: e = "", theme: t = {}, params: o, props: r = {}, set: n, defaults: i }) {
    var s;
    const a = { name: e, theme: t, params: o, set: n, defaults: i }, c = (s = e.includes("-directive") ? this.getPresetD(a) : this.getPresetC(a)) == null ? void 0 : s.css, l = Object.entries(r).reduce((u, [d, f]) => u.push(`${d}="${f}"`) && u, []).join(" ");
    return c ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${l}>${gr(c)}</style>` : "";
  },
  createTokens(e = {}, t, o = "", r = "", n = {}) {
    return Object.entries(e).forEach(([i, s]) => {
      const a = Ut(i, t.variable.excludedKeyRegex) ? o : o ? `${o}.${Ga(i)}` : Ga(i), c = r ? `${r}.${i}` : i;
      Bt(s) ? this.createTokens(s, t, a, c, n) : (n[a] || (n[a] = {
        paths: [],
        computed(l, u = {}) {
          if (l) {
            const d = this.paths.find((f) => f.scheme === l) || this.paths.find((f) => f.scheme === "none");
            return d == null ? void 0 : d.computed(l, u.binding);
          }
          return this.paths.map((d) => d.computed(d.scheme, u[d.scheme]));
        }
      }), n[a].paths.push({
        path: c,
        value: s,
        scheme: c.includes("colorScheme.light") ? "light" : c.includes("colorScheme.dark") ? "dark" : "none",
        computed(l, u = {}) {
          const d = /{([^}]*)}/g;
          let f = s;
          if (u.name = this.path, u.binding || (u.binding = {}), Ut(s, d)) {
            const g = s.trim().replaceAll(d, (O) => {
              var v, w;
              const L = O.replace(/{|}/g, "");
              return (w = (v = n[L]) == null ? void 0 : v.computed(l, u)) == null ? void 0 : w.value;
            }), b = /(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g, y = /var\([^)]+\)/g;
            f = Ut(g.replace(y, "0"), b) ? `calc(${g})` : g;
          }
          return uo(u.binding) && delete u.binding, {
            colorScheme: l,
            path: this.path,
            paths: u,
            value: f.includes("undefined") ? void 0 : f
          };
        }
      }));
    }), n;
  },
  getTokenValue(e, t, o) {
    var r;
    const i = ((c) => c.split(".").filter((u) => !Ut(u.toLowerCase(), o.variable.excludedKeyRegex)).join("."))(t), s = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, a = [(r = e[i]) == null ? void 0 : r.computed(s)].flat().filter((c) => c);
    return a.length === 1 ? a[0].value : a.reduce((c = {}, l) => {
      const u = l, { colorScheme: d } = u, f = nr(u, ["colorScheme"]);
      return c[d] = f, c;
    }, void 0);
  },
  transformCSS(e, t, o, r, n = {}, i, s, a) {
    if (Ce(t)) {
      const { cssLayer: c } = n;
      if (r !== "style") {
        const l = this.getColorSchemeOption(n, s), u = a ? dr(a, t) : t;
        t = o === "dark" ? l.reduce((d, { selector: f }) => (Ce(f) && (d += f.includes("[CSS]") ? f.replace("[CSS]", u) : dr(f, u)), d), "") : dr(a ?? ":root", t);
      }
      if (c) {
        const l = {
          name: "primeui",
          order: "primeui"
        };
        Bt(c) && (l.name = pt(c.name, { name: e, type: r })), Ce(l.name) && (t = dr(`@layer ${l.name}`, t), i == null || i.layerNames(l.name));
      }
      return t;
    }
    return "";
  }
}, ge = {
  defaults: {
    variable: {
      prefix: "p",
      selector: ":root",
      excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi
    },
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: !1
    }
  },
  _theme: void 0,
  _layerNames: /* @__PURE__ */ new Set(),
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  _loadingStyles: /* @__PURE__ */ new Set(),
  _tokens: {},
  update(e = {}) {
    const { theme: t } = e;
    t && (this._theme = yi(rr({}, t), {
      options: rr(rr({}, this.defaults.options), t.options)
    }), this._tokens = mt.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
  },
  get theme() {
    return this._theme;
  },
  get preset() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.preset) || {};
  },
  get options() {
    var e;
    return ((e = this.theme) == null ? void 0 : e.options) || {};
  },
  get tokens() {
    return this._tokens;
  },
  getTheme() {
    return this.theme;
  },
  setTheme(e) {
    this.update({ theme: e }), bt.emit("theme:change", e);
  },
  getPreset() {
    return this.preset;
  },
  setPreset(e) {
    this._theme = yi(rr({}, this.theme), { preset: e }), this._tokens = mt.createTokens(e, this.defaults), this.clearLoadedStyleNames(), bt.emit("preset:change", e), bt.emit("theme:change", this.theme);
  },
  getOptions() {
    return this.options;
  },
  setOptions(e) {
    this._theme = yi(rr({}, this.theme), { options: e }), this.clearLoadedStyleNames(), bt.emit("options:change", e), bt.emit("theme:change", this.theme);
  },
  getLayerNames() {
    return [...this._layerNames];
  },
  setLayerNames(e) {
    this._layerNames.add(e);
  },
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(e) {
    return this._loadedStyleNames.has(e);
  },
  setLoadedStyleName(e) {
    this._loadedStyleNames.add(e);
  },
  deleteLoadedStyleName(e) {
    this._loadedStyleNames.delete(e);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  },
  getTokenValue(e) {
    return mt.getTokenValue(this.tokens, e, this.defaults);
  },
  getCommon(e = "", t) {
    return mt.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getComponent(e = "", t) {
    const o = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return mt.getPresetC(o);
  },
  getDirective(e = "", t) {
    const o = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return mt.getPresetD(o);
  },
  getCustomPreset(e = "", t, o, r) {
    const n = { name: e, preset: t, options: this.options, selector: o, params: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
    return mt.getPreset(n);
  },
  getLayerOrderCSS(e = "") {
    return mt.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
  },
  transformCSS(e = "", t, o = "style", r) {
    return mt.transformCSS(e, t, r, o, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
  },
  getCommonStyleSheet(e = "", t, o = {}) {
    return mt.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  getStyleSheet(e, t, o = {}) {
    return mt.getStyleSheet({ name: e, theme: this.theme, params: t, props: o, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
  },
  onStyleMounted(e) {
    this._loadingStyles.add(e);
  },
  onStyleUpdated(e) {
    this._loadingStyles.add(e);
  },
  onStyleLoaded(e, { name: t }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t), bt.emit(`theme:${t}:load`, e), !this._loadingStyles.size && bt.emit("theme:load"));
  }
}, Le = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
function Lm(e, t) {
  return e ? e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)", "gi").test(e.className) : !1;
}
function jm(e, t) {
  if (e && t) {
    const o = (r) => {
      Lm(e, r) || (e.classList ? e.classList.add(r) : e.className += " " + r);
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(o));
  }
}
function wi(e, t) {
  if (e && t) {
    const o = (r) => {
      e.classList ? e.classList.remove(r) : e.className = e.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [t].flat().filter(Boolean).forEach((r) => r.split(" ").forEach(o));
  }
}
function Mm(e, t) {
  return e instanceof HTMLElement ? e.offsetWidth : 0;
}
function Zn(e) {
  return typeof HTMLElement == "object" ? e instanceof HTMLElement : e && typeof e == "object" && e !== null && e.nodeType === 1 && typeof e.nodeName == "string";
}
function Dn(e, t = {}) {
  if (Zn(e)) {
    const o = (r, n) => {
      var i, s;
      const a = (i = e == null ? void 0 : e.$attrs) != null && i[r] ? [(s = e == null ? void 0 : e.$attrs) == null ? void 0 : s[r]] : [];
      return [n].flat().reduce((c, l) => {
        if (l != null) {
          const u = typeof l;
          if (u === "string" || u === "number")
            c.push(l);
          else if (u === "object") {
            const d = Array.isArray(l) ? o(r, l) : Object.entries(l).map(([f, h]) => r === "style" && (h || h === 0) ? `${f.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${h}` : h ? f : void 0);
            c = d.length ? c.concat(d.filter((f) => !!f)) : c;
          }
        }
        return c;
      }, a);
    };
    Object.entries(t).forEach(([r, n]) => {
      if (n != null) {
        const i = r.match(/^on(.+)/);
        i ? e.addEventListener(i[1].toLowerCase(), n) : r === "p-bind" ? Dn(e, n) : (n = r === "class" ? [...new Set(o("class", n))].join(" ").trim() : r === "style" ? o("style", n).join(";").trim() : n, (e.$attrs = e.$attrs || {}) && (e.$attrs[r] = n), e.setAttribute(r, n));
      }
    });
  }
}
function Fm(e, t = {}, ...o) {
  {
    const r = document.createElement(e);
    return Dn(r, t), r.append(...o), r;
  }
}
function bn(e, t) {
  return Zn(e) ? e.matches(t) ? e : e.querySelector(t) : null;
}
function Mo(e, t) {
  e && document.activeElement !== e && e.focus(t);
}
function Um(e, t) {
  if (Zn(e)) {
    const o = e.getAttribute(t);
    return isNaN(o) ? o === "true" || o === "false" ? o === "true" : o : +o;
  }
}
function Qa(e) {
  if (e) {
    let t = e.offsetHeight, o = getComputedStyle(e);
    return t -= parseFloat(o.paddingTop) + parseFloat(o.paddingBottom) + parseFloat(o.borderTopWidth) + parseFloat(o.borderBottomWidth), t;
  }
  return 0;
}
function Hm(e) {
  if (e) {
    let t = e.parentNode;
    return t && t instanceof ShadowRoot && t.host && (t = t.host), t;
  }
  return null;
}
function zm(e) {
  if (e) {
    let t = e.getBoundingClientRect();
    return {
      top: t.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: t.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  return {
    top: "auto",
    left: "auto"
  };
}
function Wm(e, t) {
  return e ? e.offsetHeight : 0;
}
function Km(e) {
  return !!(e !== null && typeof e < "u" && e.nodeName && Hm(e));
}
function Za(e) {
  if (e) {
    let t = e.offsetWidth, o = getComputedStyle(e);
    return t -= parseFloat(o.paddingLeft) + parseFloat(o.paddingRight) + parseFloat(o.borderLeftWidth) + parseFloat(o.borderRightWidth), t;
  }
  return 0;
}
function qm() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Gm() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
function Jm(e, t = "", o) {
  Zn(e) && o !== null && o !== void 0 && e.setAttribute(t, o);
}
function Cr(e) {
  "@babel/helpers - typeof";
  return Cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Cr(e);
}
function ec(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function tc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ec(Object(o), !0).forEach(function(r) {
      Ym(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ec(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function Ym(e, t, o) {
  return (t = Xm(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function Xm(e) {
  var t = Qm(e, "string");
  return Cr(t) == "symbol" ? t : t + "";
}
function Qm(e, t) {
  if (Cr(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  Mr() ? Gn(e) : t ? e() : wr(e);
}
var eg = 0;
function tg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = $t(!1), r = $t(e), n = $t(null), i = qm() ? window.document : void 0, s = t.document, a = s === void 0 ? i : s, c = t.immediate, l = c === void 0 ? !0 : c, u = t.manual, d = u === void 0 ? !1 : u, f = t.name, h = f === void 0 ? "style_".concat(++eg) : f, g = t.id, b = g === void 0 ? void 0 : g, y = t.media, O = y === void 0 ? void 0 : y, v = t.nonce, w = v === void 0 ? void 0 : v, L = t.first, H = L === void 0 ? !1 : L, Z = t.onMounted, C = Z === void 0 ? void 0 : Z, fe = t.onUpdated, ee = fe === void 0 ? void 0 : fe, D = t.onLoad, T = D === void 0 ? void 0 : D, J = t.props, be = J === void 0 ? {} : J, Fe = function() {
  }, Ne = function(q) {
    var me = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (a) {
      var We = tc(tc({}, be), me), Ke = We.name || h, Ze = We.id || b, qe = We.nonce || w;
      n.value = a.querySelector('style[data-primevue-style-id="'.concat(Ke, '"]')) || a.getElementById(Ze) || a.createElement("style"), n.value.isConnected || (r.value = q || e, Dn(n.value, {
        type: "text/css",
        id: Ze,
        media: O,
        nonce: qe
      }), H ? a.head.prepend(n.value) : a.head.appendChild(n.value), Jm(n.value, "data-primevue-style-id", Ke), Dn(n.value, We), n.value.onload = function(st) {
        return T == null ? void 0 : T(st, {
          name: Ke
        });
      }, C == null || C(Ke)), !o.value && (Fe = ut(r, function(st) {
        n.value.textContent = st, ee == null || ee(Ke);
      }, {
        immediate: !0
      }), o.value = !0);
    }
  }, xe = function() {
    !a || !o.value || (Fe(), Km(n.value) && a.head.removeChild(n.value), o.value = !1);
  };
  return l && !d && Zm(Ne), {
    id: b,
    name: h,
    el: n,
    css: r,
    unload: xe,
    load: Ne,
    isLoaded: ws(o)
  };
}
function Sr(e) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Sr(e);
}
function oc(e, t) {
  return ig(e) || ng(e, t) || rg(e, t) || og();
}
function og() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rg(e, t) {
  if (e) {
    if (typeof e == "string") return rc(e, t);
    var o = {}.toString.call(e).slice(8, -1);
    return o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set" ? Array.from(e) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? rc(e, t) : void 0;
  }
}
function rc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
  return r;
}
function ng(e, t) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var r, n, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (o = o.call(e)).next, t !== 0) for (; !(c = (r = i.call(o)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, n = u;
    } finally {
      try {
        if (!c && o.return != null && (s = o.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw n;
      }
    }
    return a;
  }
}
function ig(e) {
  if (Array.isArray(e)) return e;
}
function nc(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nc(Object(o), !0).forEach(function(r) {
      sg(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : nc(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function sg(e, t, o) {
  return (t = ag(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function ag(e) {
  var t = cg(e, "string");
  return Sr(t) == "symbol" ? t : t + "";
}
function cg(e, t) {
  if (Sr(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Sr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lg = function(t) {
  var o = t.dt;
  return `
* {
    box-sizing: border-box;
}

/* Non vue overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* Vue based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: `.concat(o("disabled.opacity"), `;
}

.pi {
    font-size: `).concat(o("icon.size"), `;
}

.p-icon {
    width: `).concat(o("icon.size"), `;
    height: `).concat(o("icon.size"), `;
}

.p-overlay-mask {
    background: `).concat(o("mask.background"), `;
    color: `).concat(o("mask.color"), `;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation `).concat(o("mask.transition.duration"), ` forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation `).concat(o("mask.transition.duration"), ` forwards;
}

@keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: `).concat(o("mask.background"), `;
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: `).concat(o("mask.background"), `;
    }
    to {
        background: transparent;
    }
}
`);
}, ug = function(t) {
  var o = t.dt;
  return `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: `.concat(o("scrollbar.width"), `;
}
`);
}, dg = {}, fg = {}, Ie = {
  name: "base",
  css: ug,
  theme: lg,
  classes: dg,
  inlineStyles: fg,
  load: function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(i) {
      return i;
    }, n = r(pt(t, {
      dt: _i
    }));
    return n ? tg(gr(n), ki({
      name: this.name
    }, o)) : {};
  },
  loadCSS: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, t);
  },
  loadTheme: function() {
    var t = this, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.theme, o, function(r) {
      return ge.transformCSS(o.name || t.name, r);
    });
  },
  getCommonTheme: function(t) {
    return ge.getCommon(this.name, t);
  },
  getComponentTheme: function(t) {
    return ge.getComponent(this.name, t);
  },
  getDirectiveTheme: function(t) {
    return ge.getDirective(this.name, t);
  },
  getPresetTheme: function(t, o, r) {
    return ge.getCustomPreset(this.name, t, o, r);
  },
  getLayerOrderThemeCSS: function() {
    return ge.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var r = pt(this.css, {
        dt: _i
      }), n = gr("".concat(r).concat(t)), i = Object.entries(o).reduce(function(s, a) {
        var c = oc(a, 2), l = c[0], u = c[1];
        return s.push("".concat(l, '="').concat(u, '"')) && s;
      }, []).join(" ");
      return '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(i, ">").concat(n, "</style>");
    }
    return "";
  },
  getCommonThemeStyleSheet: function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return ge.getCommonStyleSheet(this.name, t, o);
  },
  getThemeStyleSheet: function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [ge.getStyleSheet(this.name, t, o)];
    if (this.theme) {
      var n = this.name === "base" ? "global-style" : "".concat(this.name, "-style"), i = pt(this.theme, {
        dt: _i
      }), s = gr(ge.transformCSS(n, i)), a = Object.entries(o).reduce(function(c, l) {
        var u = oc(l, 2), d = u[0], f = u[1];
        return c.push("".concat(d, '="').concat(f, '"')) && c;
      }, []).join(" ");
      r.push('<style type="text/css" data-primevue-style-id="'.concat(n, '" ').concat(a, ">").concat(s, "</style>"));
    }
    return r.join("");
  },
  extend: function(t) {
    return ki(ki({}, this), {}, {
      css: void 0,
      theme: void 0
    }, t);
  }
}, Uo = Ou(), Zr = {};
function pg(e = "pui_id_") {
  return Zr.hasOwnProperty(e) || (Zr[e] = 0), Zr[e]++, `${e}${Zr[e]}`;
}
function hg() {
  let e = [];
  const t = (s, a, c = 999) => {
    const l = n(s, a, c), u = l.value + (l.key === s ? 0 : c) + 1;
    return e.push({ key: s, value: u }), u;
  }, o = (s) => {
    e = e.filter((a) => a.value !== s);
  }, r = (s, a) => n(s).value, n = (s, a, c = 0) => [...e].reverse().find((l) => !0) || { key: s, value: c }, i = (s) => s && parseInt(s.style.zIndex, 10) || 0;
  return {
    get: i,
    set: (s, a, c) => {
      a && (a.style.zIndex = String(t(s, !0, c)));
    },
    clear: (s) => {
      s && (o(i(s)), s.style.zIndex = "");
    },
    getCurrent: (s) => r(s)
  };
}
var xi = hg();
function Or(e) {
  "@babel/helpers - typeof";
  return Or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Or(e);
}
function ic(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function Ei(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ic(Object(o), !0).forEach(function(r) {
      mg(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : ic(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function mg(e, t, o) {
  return (t = gg(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function gg(e) {
  var t = bg(e, "string");
  return Or(t) == "symbol" ? t : t + "";
}
function bg(e, t) {
  if (Or(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Or(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var vg = {
  ripple: !1,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: !1,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [Le.STARTS_WITH, Le.CONTAINS, Le.NOT_CONTAINS, Le.ENDS_WITH, Le.EQUALS, Le.NOT_EQUALS],
    numeric: [Le.EQUALS, Le.NOT_EQUALS, Le.LESS_THAN, Le.LESS_THAN_OR_EQUAL_TO, Le.GREATER_THAN, Le.GREATER_THAN_OR_EQUAL_TO],
    date: [Le.DATE_IS, Le.DATE_IS_NOT, Le.DATE_BEFORE, Le.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: !1,
  pt: void 0,
  ptOptions: {
    mergeSections: !0,
    mergeProps: !1
  },
  csp: {
    nonce: void 0
  }
}, yg = Symbol();
function _g(e, t) {
  var o = {
    config: Yo(t)
  };
  return e.config.globalProperties.$primevue = o, e.provide(yg, o), wg(), kg(e, o), o;
}
var Ho = [];
function wg() {
  bt.clear(), Ho.forEach(function(e) {
    return e == null ? void 0 : e();
  }), Ho = [];
}
function kg(e, t) {
  var o = $t(!1), r = function() {
    if (!ge.isStyleNameLoaded("common")) {
      var l, u, d = ((l = Ie.getCommonTheme) === null || l === void 0 ? void 0 : l.call(Ie)) || {}, f = d.primitive, h = d.semantic, g = {
        nonce: (u = t.config) === null || u === void 0 || (u = u.csp) === null || u === void 0 ? void 0 : u.nonce
      };
      Ie.load(f == null ? void 0 : f.css, Ei({
        name: "primitive-variables"
      }, g)), Ie.load(h == null ? void 0 : h.css, Ei({
        name: "semantic-variables"
      }, g)), Ie.loadTheme(Ei({
        name: "global-style"
      }, g)), ge.setLoadedStyleName("common");
    }
  };
  bt.on("theme:change", function(c) {
    o.value || (e.config.globalProperties.$primevue.config.theme = c, o.value = !0);
  });
  var n = ut(t.config, function(c, l) {
    Uo.emit("config:change", {
      newValue: c,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), i = ut(function() {
    return t.config.ripple;
  }, function(c, l) {
    Uo.emit("config:ripple:change", {
      newValue: c,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), s = ut(function() {
    return t.config.theme;
  }, function(c, l) {
    o.value || ge.setTheme(c), t.config.unstyled || r(), o.value = !1, Uo.emit("config:theme:change", {
      newValue: c,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  }), a = ut(function() {
    return t.config.unstyled;
  }, function(c, l) {
    !c && t.config.theme && r(), Uo.emit("config:unstyled:change", {
      newValue: c,
      oldValue: l
    });
  }, {
    immediate: !0,
    deep: !0
  });
  Ho.push(n), Ho.push(i), Ho.push(s), Ho.push(a);
}
var xg = {
  install: function(t, o) {
    var r = Om(vg, o);
    _g(t, r);
  }
}, Eg = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}"
  },
  header: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{text.color}",
    padding: "1.125rem",
    fontWeight: "600",
    borderRadius: "0",
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    hoverBackground: "{content.background}",
    activeBackground: "{content.background}",
    activeHoverBackground: "{content.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    toggleIcon: {
      color: "{text.muted.color}",
      hoverColor: "{text.color}",
      activeColor: "{text.color}",
      activeHoverColor: "{text.color}"
    },
    first: {
      topBorderRadius: "{content.border.radius}",
      borderWidth: "0"
    },
    last: {
      bottomBorderRadius: "{content.border.radius}",
      activeBottomBorderRadius: "0"
    }
  },
  content: {
    borderWidth: "0",
    borderColor: "{content.border.color}",
    background: "{content.background}",
    color: "{text.color}",
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
}, Cg = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  dropdown: {
    width: "2.5rem",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      }
    },
    dark: {
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      }
    }
  }
}, Sg = {
  root: {
    width: "2rem",
    height: "2rem",
    fontSize: "1rem",
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}"
  },
  group: {
    borderColor: "{content.background}",
    offset: "-1rem"
  },
  lg: {
    width: "3rem",
    height: "3rem",
    fontSize: "1.5rem"
  },
  xl: {
    width: "4rem",
    height: "4rem",
    fontSize: "2rem"
  }
}, Og = {
  root: {
    borderRadius: "{border.radius.md}",
    padding: "0 0.5rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    minWidth: "1.5rem",
    height: "1.5rem"
  },
  dot: {
    size: "0.5rem"
  },
  sm: {
    fontSize: "0.625rem",
    minWidth: "1.25rem",
    height: "1.25rem"
  },
  lg: {
    fontSize: "0.875rem",
    minWidth: "1.75rem",
    height: "1.75rem"
  },
  xl: {
    fontSize: "1rem",
    minWidth: "2rem",
    height: "2rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.500}",
        color: "{surface.0}"
      },
      info: {
        background: "{sky.500}",
        color: "{surface.0}"
      },
      warn: {
        background: "{orange.500}",
        color: "{surface.0}"
      },
      danger: {
        background: "{red.500}",
        color: "{surface.0}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "{primary.color}",
        color: "{primary.contrast.color}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "{green.400}",
        color: "{green.950}"
      },
      info: {
        background: "{sky.400}",
        color: "{sky.950}"
      },
      warn: {
        background: "{orange.400}",
        color: "{orange.950}"
      },
      danger: {
        background: "{red.400}",
        color: "{red.950}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
}, Ng = {
  root: {
    borderRadius: "{content.border.radius}"
  }
}, Ig = {
  root: {
    padding: "1rem",
    background: "{content.background}",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  item: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    borderRadius: "{content.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      hoverColor: "{navigation.item.icon.focus.color}"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  separator: {
    color: "{navigation.item.icon.color}"
  }
}, Rg = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    gap: "0.5rem",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    iconOnlyWidth: "2.5rem",
    sm: {
      fontSize: "0.875rem",
      paddingX: "0.625rem",
      paddingY: "0.375rem"
    },
    lg: {
      fontSize: "1.125rem",
      paddingX: "0.875rem",
      paddingY: "0.625rem"
    },
    label: {
      fontWeight: "500"
    },
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    },
    badgeSize: "1rem",
    transitionDuration: "{form.field.transition.duration}"
  },
  colorScheme: {
    light: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.100}",
          hoverBackground: "{surface.200}",
          activeBackground: "{surface.300}",
          borderColor: "{surface.100}",
          hoverBorderColor: "{surface.200}",
          activeBorderColor: "{surface.300}",
          color: "{surface.600}",
          hoverColor: "{surface.700}",
          activeColor: "{surface.800}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.500}",
          hoverBackground: "{sky.600}",
          activeBackground: "{sky.700}",
          borderColor: "{sky.500}",
          hoverBorderColor: "{sky.600}",
          activeBorderColor: "{sky.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{sky.500}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.500}",
          hoverBackground: "{green.600}",
          activeBackground: "{green.700}",
          borderColor: "{green.500}",
          hoverBorderColor: "{green.600}",
          activeBorderColor: "{green.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.500}",
          hoverBackground: "{orange.600}",
          activeBackground: "{orange.700}",
          borderColor: "{orange.500}",
          hoverBorderColor: "{orange.600}",
          activeBorderColor: "{orange.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{orange.500}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.500}",
          hoverBackground: "{purple.600}",
          activeBackground: "{purple.700}",
          borderColor: "{purple.500}",
          hoverBorderColor: "{purple.600}",
          activeBorderColor: "{purple.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{purple.500}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.500}",
          hoverBackground: "{red.600}",
          activeBackground: "{red.700}",
          borderColor: "{red.500}",
          hoverBorderColor: "{red.600}",
          activeBorderColor: "{red.700}",
          color: "#ffffff",
          hoverColor: "#ffffff",
          activeColor: "#ffffff",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.950}",
          hoverBackground: "{surface.900}",
          activeBackground: "{surface.800}",
          borderColor: "{surface.950}",
          hoverBorderColor: "{surface.900}",
          activeBorderColor: "{surface.800}",
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          activeColor: "{surface.0}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          borderColor: "{primary.200}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          borderColor: "{green.200}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          borderColor: "{sky.200}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          borderColor: "{orange.200}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          borderColor: "{purple.200}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          borderColor: "{red.200}",
          color: "{red.500}"
        },
        contrast: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.700}",
          color: "{surface.950}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{surface.700}"
        }
      },
      text: {
        primary: {
          hoverBackground: "{primary.50}",
          activeBackground: "{primary.100}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.500}"
        },
        success: {
          hoverBackground: "{green.50}",
          activeBackground: "{green.100}",
          color: "{green.500}"
        },
        info: {
          hoverBackground: "{sky.50}",
          activeBackground: "{sky.100}",
          color: "{sky.500}"
        },
        warn: {
          hoverBackground: "{orange.50}",
          activeBackground: "{orange.100}",
          color: "{orange.500}"
        },
        help: {
          hoverBackground: "{purple.50}",
          activeBackground: "{purple.100}",
          color: "{purple.500}"
        },
        danger: {
          hoverBackground: "{red.50}",
          activeBackground: "{red.100}",
          color: "{red.500}"
        },
        plain: {
          hoverBackground: "{surface.50}",
          activeBackground: "{surface.100}",
          color: "{surface.700}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    },
    dark: {
      root: {
        primary: {
          background: "{primary.color}",
          hoverBackground: "{primary.hover.color}",
          activeBackground: "{primary.active.color}",
          borderColor: "{primary.color}",
          hoverBorderColor: "{primary.hover.color}",
          activeBorderColor: "{primary.active.color}",
          color: "{primary.contrast.color}",
          hoverColor: "{primary.contrast.color}",
          activeColor: "{primary.contrast.color}",
          focusRing: {
            color: "{primary.color}",
            shadow: "none"
          }
        },
        secondary: {
          background: "{surface.800}",
          hoverBackground: "{surface.700}",
          activeBackground: "{surface.600}",
          borderColor: "{surface.800}",
          hoverBorderColor: "{surface.700}",
          activeBorderColor: "{surface.600}",
          color: "{surface.300}",
          hoverColor: "{surface.200}",
          activeColor: "{surface.100}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        },
        info: {
          background: "{sky.400}",
          hoverBackground: "{sky.300}",
          activeBackground: "{sky.200}",
          borderColor: "{sky.400}",
          hoverBorderColor: "{sky.300}",
          activeBorderColor: "{sky.200}",
          color: "{sky.950}",
          hoverColor: "{sky.950}",
          activeColor: "{sky.950}",
          focusRing: {
            color: "{sky.400}",
            shadow: "none"
          }
        },
        success: {
          background: "{green.400}",
          hoverBackground: "{green.300}",
          activeBackground: "{green.200}",
          borderColor: "{green.400}",
          hoverBorderColor: "{green.300}",
          activeBorderColor: "{green.200}",
          color: "{green.950}",
          hoverColor: "{green.950}",
          activeColor: "{green.950}",
          focusRing: {
            color: "{green.400}",
            shadow: "none"
          }
        },
        warn: {
          background: "{orange.400}",
          hoverBackground: "{orange.300}",
          activeBackground: "{orange.200}",
          borderColor: "{orange.400}",
          hoverBorderColor: "{orange.300}",
          activeBorderColor: "{orange.200}",
          color: "{orange.950}",
          hoverColor: "{orange.950}",
          activeColor: "{orange.950}",
          focusRing: {
            color: "{orange.400}",
            shadow: "none"
          }
        },
        help: {
          background: "{purple.400}",
          hoverBackground: "{purple.300}",
          activeBackground: "{purple.200}",
          borderColor: "{purple.400}",
          hoverBorderColor: "{purple.300}",
          activeBorderColor: "{purple.200}",
          color: "{purple.950}",
          hoverColor: "{purple.950}",
          activeColor: "{purple.950}",
          focusRing: {
            color: "{purple.400}",
            shadow: "none"
          }
        },
        danger: {
          background: "{red.400}",
          hoverBackground: "{red.300}",
          activeBackground: "{red.200}",
          borderColor: "{red.400}",
          hoverBorderColor: "{red.300}",
          activeBorderColor: "{red.200}",
          color: "{red.950}",
          hoverColor: "{red.950}",
          activeColor: "{red.950}",
          focusRing: {
            color: "{red.400}",
            shadow: "none"
          }
        },
        contrast: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          activeBackground: "{surface.200}",
          borderColor: "{surface.0}",
          hoverBorderColor: "{surface.100}",
          activeBorderColor: "{surface.200}",
          color: "{surface.950}",
          hoverColor: "{surface.950}",
          activeColor: "{surface.950}",
          focusRing: {
            color: "{surface.0}",
            shadow: "none"
          }
        }
      },
      outlined: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          borderColor: "{primary.700}",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "rgba(255,255,255,0.04)",
          activeBackground: "rgba(255,255,255,0.16)",
          borderColor: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          borderColor: "{green.700}",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          borderColor: "{sky.700}",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          borderColor: "{orange.700}",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          borderColor: "{purple.700}",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          borderColor: "{red.700}",
          color: "{red.400}"
        },
        contrast: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.500}",
          color: "{surface.0}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          borderColor: "{surface.600}",
          color: "{surface.0}"
        }
      },
      text: {
        primary: {
          hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
          color: "{primary.color}"
        },
        secondary: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.400}"
        },
        success: {
          hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
          color: "{green.400}"
        },
        info: {
          hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
          color: "{sky.400}"
        },
        warn: {
          hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
          color: "{orange.400}"
        },
        help: {
          hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
          color: "{purple.400}"
        },
        danger: {
          hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
          activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
          color: "{red.400}"
        },
        plain: {
          hoverBackground: "{surface.800}",
          activeBackground: "{surface.700}",
          color: "{surface.0}"
        }
      },
      link: {
        color: "{primary.color}",
        hoverColor: "{primary.color}",
        activeColor: "{primary.color}"
      }
    }
  }
}, $g = {
  root: {
    background: "{content.background}",
    borderRadius: "{border.radius.xl}",
    color: "{content.color}",
    shadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
  },
  body: {
    padding: "1.25rem",
    gap: "0.5rem"
  },
  caption: {
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500"
  },
  subtitle: {
    color: "{text.muted.color}"
  }
}, Pg = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  content: {
    gap: "0.25rem"
  },
  indicatorList: {
    padding: "1rem",
    gap: "0.5rem"
  },
  indicator: {
    width: "2rem",
    height: "0.5rem",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      indicator: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}",
        activeBackground: "{primary.color}"
      }
    },
    dark: {
      indicator: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}",
        activeBackground: "{primary.color}"
      }
    }
  }
}, Tg = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}"
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    icon: {
      color: "{list.option.icon.color}",
      focusColor: "{list.option.icon.focus.color}",
      size: "0.875rem"
    }
  }
}, Bg = {
  root: {
    borderRadius: "{border.radius.sm}",
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  icon: {
    size: "0.875rem",
    color: "{form.field.color}",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}"
  }
}, Dg = {
  root: {
    borderRadius: "16px",
    paddingX: "0.75rem",
    paddingY: "0.5rem",
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  image: {
    width: "2rem",
    height: "2rem"
  },
  icon: {
    size: "1rem"
  },
  removeIcon: {
    size: "1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        color: "{surface.800}"
      },
      icon: {
        color: "{surface.800}"
      },
      removeIcon: {
        color: "{surface.800}"
      }
    },
    dark: {
      root: {
        background: "{surface.800}",
        color: "{surface.0}"
      },
      icon: {
        color: "{surface.0}"
      },
      removeIcon: {
        color: "{surface.0}"
      }
    }
  }
}, Ag = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    width: "1.5rem",
    height: "1.5rem",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  panel: {
    shadow: "{overlay.popover.shadow}",
    borderRadius: "{overlay.popover.borderRadius}"
  },
  colorScheme: {
    light: {
      panel: {
        background: "{surface.800}",
        borderColor: "{surface.900}"
      },
      handle: {
        color: "{surface.0}"
      }
    },
    dark: {
      panel: {
        background: "{surface.900}",
        borderColor: "{surface.700}"
      },
      handle: {
        color: "{surface.0}"
      }
    }
  }
}, Vg = {
  icon: {
    size: "2rem",
    color: "{overlay.modal.color}"
  },
  content: {
    gap: "1rem"
  }
}, Lg = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "1rem"
  },
  icon: {
    size: "1.5rem",
    color: "{overlay.popover.color}"
  },
  footer: {
    gap: "0.5rem",
    padding: "0 {overlay.popover.padding} {overlay.popover.padding} {overlay.popover.padding}"
  }
}, jg = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, Mg = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{datatable.border.color}",
    padding: "0.75rem 1rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{datatable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  dropPointColor: "{primary.color}",
  columnResizerWidth: "0.5rem",
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  loadingIcon: {
    size: "2rem"
  },
  rowToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  filter: {
    inlineGap: "0.5rem",
    overlaySelect: {
      background: "{overlay.select.background}",
      borderColor: "{overlay.select.border.color}",
      borderRadius: "{overlay.select.border.radius}",
      color: "{overlay.select.color}",
      shadow: "{overlay.select.shadow}"
    },
    overlayPopover: {
      background: "{overlay.popover.background}",
      borderColor: "{overlay.popover.border.color}",
      borderRadius: "{overlay.popover.border.radius}",
      color: "{overlay.popover.color}",
      shadow: "{overlay.popover.shadow}",
      padding: "{overlay.popover.padding}",
      gap: "0.5rem"
    },
    rule: {
      borderColor: "{content.border.color}"
    },
    constraintList: {
      padding: "{list.padding}",
      gap: "{list.gap}"
    },
    constraint: {
      focusBackground: "{list.option.focus.background}",
      selectedBackground: "{list.option.selected.background}",
      selectedFocusBackground: "{list.option.selected.focus.background}",
      color: "{list.option.color}",
      focusColor: "{list.option.focus.color}",
      selectedColor: "{list.option.selected.color}",
      selectedFocusColor: "{list.option.selected.focus.color}",
      separator: {
        borderColor: "{content.border.color}"
      },
      padding: "{list.option.padding}",
      borderRadius: "{list.option.border.radius}"
    }
  },
  paginatorTop: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{datatable.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      row: {
        stripedBackground: "{surface.50}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      row: {
        stripedBackground: "{surface.950}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
}, Fg = {
  root: {
    borderColor: "transparent",
    borderWidth: "0",
    borderRadius: "0",
    padding: "0"
  },
  header: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  content: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "transparent",
    borderWidth: "0",
    padding: "0",
    borderRadius: "0"
  },
  footer: {
    background: "{content.background}",
    color: "{content.color}",
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0",
    padding: "0.75rem 1rem",
    borderRadius: "0"
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "1px 0 0 0"
  }
}, Ug = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.popover.shadow}",
    padding: "{overlay.popover.padding}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    padding: "0 0 0.5rem 0",
    fontWeight: "500",
    gap: "0.5rem"
  },
  title: {
    gap: "0.5rem",
    fontWeight: "500"
  },
  dropdown: {
    width: "2.5rem",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.border.color}",
    activeBorderColor: "{form.field.border.color}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  inputIcon: {
    color: "{form.field.icon.color}"
  },
  selectMonth: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  selectYear: {
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}"
  },
  group: {
    borderColor: "{content.border.color}",
    gap: "{overlay.popover.padding}"
  },
  dayView: {
    margin: "0.5rem 0 0 0"
  },
  weekDay: {
    padding: "0.25rem",
    fontWeight: "500",
    color: "{content.color}"
  },
  date: {
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{primary.color}",
    rangeSelectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{primary.contrast.color}",
    rangeSelectedColor: "{highlight.color}",
    width: "2rem",
    height: "2rem",
    borderRadius: "50%",
    padding: "0.25rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  monthView: {
    margin: "0.5rem 0 0 0"
  },
  month: {
    borderRadius: "{content.border.radius}"
  },
  yearView: {
    margin: "0.5rem 0 0 0"
  },
  year: {
    borderRadius: "{content.border.radius}"
  },
  buttonbar: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}"
  },
  timePicker: {
    padding: "0.5rem 0 0 0",
    borderColor: "{content.border.color}",
    gap: "0.5rem",
    buttonGap: "0.25rem"
  },
  colorScheme: {
    light: {
      dropdown: {
        background: "{surface.100}",
        hoverBackground: "{surface.200}",
        activeBackground: "{surface.300}",
        color: "{surface.600}",
        hoverColor: "{surface.700}",
        activeColor: "{surface.800}"
      },
      today: {
        background: "{surface.200}",
        color: "{surface.900}"
      }
    },
    dark: {
      dropdown: {
        background: "{surface.800}",
        hoverBackground: "{surface.700}",
        activeBackground: "{surface.600}",
        color: "{surface.300}",
        hoverColor: "{surface.200}",
        activeColor: "{surface.100}"
      },
      today: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, Hg = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    borderRadius: "{overlay.modal.border.radius}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}",
    gap: "0.5rem"
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  },
  footer: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}",
    gap: "0.5rem"
  }
}, zg = {
  root: {
    borderColor: "{content.border.color}"
  },
  content: {
    background: "{content.background}",
    color: "{text.color}"
  },
  horizontal: {
    margin: "1rem 0",
    padding: "0 1rem",
    content: {
      padding: "0 0.5rem"
    }
  },
  vertical: {
    margin: "0 1rem",
    padding: "0.5rem 0",
    content: {
      padding: "0.5rem 0"
    }
  }
}, Wg = {
  root: {
    background: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    padding: "0.5rem",
    borderRadius: "{border.radius.xl}"
  },
  item: {
    borderRadius: "{content.border.radius}",
    padding: "0.5rem",
    size: "3rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, Kg = {
  root: {
    background: "{overlay.modal.background}",
    borderColor: "{overlay.modal.border.color}",
    color: "{overlay.modal.color}",
    borderRadius: "{overlay.modal.border.radius}",
    shadow: "{overlay.modal.shadow}"
  },
  header: {
    padding: "{overlay.modal.padding}"
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "600"
  },
  content: {
    padding: "0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}"
  }
}, qg = {
  toolbar: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}"
  },
  toolbarItem: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}",
    padding: "{list.padding}"
  },
  overlayOption: {
    focusBackground: "{list.option.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  content: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  }
}, Gg = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    padding: "0 1.125rem 1.125rem 1.125rem",
    transitionDuration: "{transition.duration}"
  },
  legend: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    borderColor: "transparent",
    padding: "0.5rem 0.75rem",
    gap: "0.5rem",
    fontWeight: "600",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  toggleIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  content: {
    padding: "0"
  }
}, Jg = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderWidth: "0",
    borderRadius: "0",
    gap: "0.5rem"
  },
  content: {
    highlightBorderColor: "{primary.color}",
    padding: "0 1.125rem 1.125rem 1.125rem"
  },
  file: {
    padding: "1rem",
    gap: "1rem",
    borderColor: "{content.border.color}",
    info: {
      gap: "0.5rem"
    }
  },
  progressbar: {
    height: "0.25rem"
  },
  basic: {
    gap: "0.5rem"
  }
}, Yg = {
  root: {
    color: "{form.field.float.label.color}",
    focusColor: "{form.field.float.label.focus.color}",
    invalidColor: "{form.field.float.label.invalid.color}",
    transitionDuration: "0.2s"
  }
}, Xg = {
  root: {
    borderWidth: "1px",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.100}",
    hoverColor: "{surface.0}",
    size: "3rem",
    gutter: "0.5rem",
    prev: {
      borderRadius: "50%"
    },
    next: {
      borderRadius: "50%"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  navIcon: {
    size: "1.5rem"
  },
  thumbnailsContent: {
    background: "{content.background}",
    padding: "1rem 0.25rem"
  },
  thumbnailNavButton: {
    size: "2rem",
    borderRadius: "{content.border.radius}",
    gutter: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  thumbnailNavButtonIcon: {
    size: "1rem"
  },
  caption: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "{surface.100}",
    padding: "1rem"
  },
  indicatorList: {
    gap: "0.5rem",
    padding: "1rem"
  },
  indicatorButton: {
    width: "1rem",
    height: "1rem",
    activeBackground: "{primary.color}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  insetIndicatorList: {
    background: "rgba(0, 0, 0, 0.5)"
  },
  insetIndicatorButton: {
    background: "rgba(255, 255, 255, 0.4)",
    hoverBackground: "rgba(255, 255, 255, 0.6)",
    activeBackground: "rgba(255, 255, 255, 0.9)"
  },
  mask: {
    background: "{mask.background}",
    color: "{mask.color}"
  },
  closeButton: {
    size: "3rem",
    gutter: "0.5rem",
    background: "rgba(255, 255, 255, 0.1)",
    hoverBackground: "rgba(255, 255, 255, 0.2)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  closeButtonIcon: {
    size: "1.5rem"
  },
  colorScheme: {
    light: {
      thumbnailNavButton: {
        hoverBackground: "{surface.100}",
        color: "{surface.600}",
        hoverColor: "{surface.700}"
      },
      indicatorButton: {
        background: "{surface.200}",
        hoverBackground: "{surface.300}"
      }
    },
    dark: {
      thumbnailNavButton: {
        hoverBackground: "{surface.700}",
        color: "{surface.400}",
        hoverColor: "{surface.0}"
      },
      indicatorButton: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}"
      }
    }
  }
}, Qg = {
  icon: {
    color: "{form.field.icon.color}"
  }
}, Zg = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  preview: {
    icon: {
      size: "1.5rem"
    },
    mask: {
      background: "{mask.background}",
      color: "{mask.color}"
    }
  },
  toolbar: {
    position: {
      left: "auto",
      right: "1rem",
      top: "1rem",
      bottom: "auto"
    },
    blur: "8px",
    background: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.2)",
    borderWidth: "1px",
    borderRadius: "30px",
    padding: ".5rem",
    gap: "0.5rem"
  },
  action: {
    hoverBackground: "rgba(255,255,255,0.1)",
    color: "{surface.50}",
    hoverColor: "{surface.0}",
    size: "3rem",
    iconSize: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, e0 = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem"
  },
  text: {
    fontWeight: "500"
  },
  icon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)"
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)"
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)"
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)"
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)"
      }
    }
  }
}, t0 = {
  root: {
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{transition.duration}"
  },
  display: {
    hoverBackground: "{content.hover.background}",
    hoverColor: "{content.hover.color}"
  }
}, o0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: "{surface.200}",
        color: "{surface.800}"
      }
    },
    dark: {
      chip: {
        focusBackground: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, r0 = {
  addon: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.icon.color}",
    borderRadius: "{form.field.border.radius}"
  }
}, n0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  button: {
    width: "2.5rem",
    borderRadius: "{form.field.border.radius}",
    verticalPadding: "{form.field.padding.y}"
  },
  colorScheme: {
    light: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.100}",
        activeBackground: "{surface.200}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.500}",
        activeColor: "{surface.600}"
      }
    },
    dark: {
      button: {
        background: "transparent",
        hoverBackground: "{surface.800}",
        activeBackground: "{surface.700}",
        borderColor: "{form.field.border.color}",
        hoverBorderColor: "{form.field.border.color}",
        activeBorderColor: "{form.field.border.color}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        activeColor: "{surface.200}"
      }
    }
  }
}, i0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}",
    sm: {
      fontSize: "0.875rem",
      paddingX: "0.625rem",
      paddingY: "0.375rem"
    },
    lg: {
      fontSize: "1.125rem",
      paddingX: "0.875rem",
      paddingY: "0.625rem"
    }
  }
}, s0 = {
  root: {
    transitionDuration: "{transition.duration}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  value: {
    background: "{primary.color}"
  },
  range: {
    background: "{content.border.color}"
  },
  text: {
    color: "{text.muted.color}"
  }
}, a0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    shadow: "{form.field.shadow}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  colorScheme: {
    light: {
      option: {
        stripedBackground: "{surface.50}"
      }
    },
    dark: {
      option: {
        stripedBackground: "{surface.900}"
      }
    }
  }
}, c0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    verticalOrientation: {
      padding: "{navigation.list.padding}",
      gap: "0"
    },
    horizontalOrientation: {
      padding: "0.5rem 0.75rem"
    },
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  overlay: {
    padding: "0",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    shadow: "{overlay.navigation.shadow}",
    gap: "0.5rem"
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background.}",
    color: "{navigation.submenu.label.color}"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.muted.hover.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, l0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background}",
    color: "{navigation.submenu.label.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, u0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    transitionDuration: "{transition.duration}"
  },
  baseItem: {
    borderRadius: "{content.border.radius}",
    padding: "{navigation.item.padding}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenu: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    mobileIndent: "1rem"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  },
  mobileButton: {
    borderRadius: "50%",
    size: "1.75rem",
    color: "{text.muted.color}",
    hoverColor: "{text.muted.hover.color}",
    hoverBackground: "{content.hover.background}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, d0 = {
  root: {
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  content: {
    padding: "0.5rem 0.75rem",
    gap: "0.5rem"
  },
  text: {
    fontSize: "1rem",
    fontWeight: "500"
  },
  icon: {
    size: "1.125rem"
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        }
      }
    },
    dark: {
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      }
    }
  }
}, f0 = {
  root: {
    borderRadius: "{content.border.radius}",
    gap: "1rem"
  },
  meters: {
    background: "{content.border.color}",
    size: "0.5rem"
  },
  label: {
    gap: "0.5rem"
  },
  labelMarker: {
    size: "0.5rem"
  },
  labelIcon: {
    size: "1rem"
  },
  labelList: {
    verticalGap: "0.5rem",
    horizontalGap: "1rem"
  }
}, p0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}",
    gap: "0.5rem"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
}, h0 = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, m0 = {
  root: {
    gutter: "0.75rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    selectedColor: "{highlight.color}",
    hoverColor: "{content.hover.color}",
    padding: "0.75rem 1rem",
    toggleablePadding: "0.75rem 1rem 1.25rem 1rem",
    borderRadius: "{content.border.radius}"
  },
  nodeToggleButton: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    borderColor: "{content.border.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    size: "1.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  connector: {
    color: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "24px"
  }
}, g0 = {
  root: {
    outline: {
      width: "2px",
      color: "{content.background}"
    }
  }
}, b0 = {
  root: {
    padding: "0.5rem 1rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    background: "{content.background}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  navButton: {
    background: "transparent",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  currentPageReport: {
    color: "{text.muted.color}"
  },
  jumpToPageInput: {
    maxWidth: "2.5rem"
  }
}, v0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}"
  },
  header: {
    background: "transparent",
    color: "{text.color}",
    padding: "1.125rem",
    borderColor: "{content.border.color}",
    borderWidth: "0",
    borderRadius: "0"
  },
  toggleableHeader: {
    padding: "0.375rem 1.125rem"
  },
  title: {
    fontWeight: "600"
  },
  content: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  },
  footer: {
    padding: "0 1.125rem 1.125rem 1.125rem"
  }
}, y0 = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  },
  panel: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderWidth: "1px",
    color: "{content.color}",
    padding: "0.25rem 0.25rem",
    borderRadius: "{content.border.radius}",
    first: {
      borderWidth: "1px",
      topBorderRadius: "{content.border.radius}"
    },
    last: {
      borderWidth: "1px",
      bottomBorderRadius: "{content.border.radius}"
    }
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    gap: "0.5rem",
    padding: "{navigation.item.padding}",
    borderRadius: "{content.border.radius}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}"
    }
  },
  submenu: {
    indent: "1rem"
  },
  submenuIcon: {
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}"
  }
}, _0 = {
  meter: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: ".75rem"
  },
  icon: {
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    borderRadius: "{overlay.popover.border.radius}",
    color: "{overlay.popover.color}",
    padding: "{overlay.popover.padding}",
    shadow: "{overlay.popover.shadow}"
  },
  content: {
    gap: "0.5rem"
  },
  colorScheme: {
    light: {
      strength: {
        weakBackground: "{red.500}",
        mediumBackground: "{amber.500}",
        strongBackground: "{green.500}"
      }
    },
    dark: {
      strength: {
        weakBackground: "{red.400}",
        mediumBackground: "{amber.400}",
        strongBackground: "{green.400}"
      }
    }
  }
}, w0 = {
  root: {
    gap: "1.125rem"
  },
  controls: {
    gap: "0.5rem"
  }
}, k0 = {
  root: {
    background: "{overlay.popover.background}",
    borderColor: "{overlay.popover.border.color}",
    color: "{overlay.popover.color}",
    borderRadius: "{overlay.popover.border.radius}",
    shadow: "{overlay.popover.shadow}",
    gutter: "10px",
    arrowOffset: "1.25rem"
  },
  content: {
    padding: "{overlay.popover.padding}"
  }
}, x0 = {
  root: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    height: "1.25rem"
  },
  value: {
    background: "{primary.color}"
  },
  label: {
    color: "{primary.contrast.color}",
    fontSize: "0.75rem",
    fontWeight: "600"
  }
}, E0 = {
  colorScheme: {
    light: {
      root: {
        "color.1": "{red.500}",
        "color.2": "{blue.500}",
        "color.3": "{green.500}",
        "color.4": "{yellow.500}"
      }
    },
    dark: {
      root: {
        "color.1": "{red.400}",
        "color.2": "{blue.400}",
        "color.3": "{green.400}",
        "color.4": "{yellow.400}"
      }
    }
  }
}, C0 = {
  root: {
    width: "1.25rem",
    height: "1.25rem",
    background: "{form.field.background}",
    checkedBackground: "{primary.color}",
    checkedHoverBackground: "{primary.hover.color}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.border.color}",
    checkedBorderColor: "{primary.color}",
    checkedHoverBorderColor: "{primary.hover.color}",
    checkedFocusBorderColor: "{primary.color}",
    checkedDisabledBorderColor: "{form.field.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  icon: {
    size: "0.75rem",
    checkedColor: "{primary.contrast.color}",
    checkedHoverColor: "{primary.contrast.color}",
    disabledColor: "{form.field.disabled.color}"
  }
}, S0 = {
  root: {
    gap: "0.25rem",
    transitionDuration: "{transition.duration}"
  },
  icon: {
    size: "1rem",
    color: "{text.muted.color}",
    hoverColor: "{primary.color}",
    activeColor: "{primary.color}"
  }
}, O0 = {
  colorScheme: {
    light: {
      root: {
        background: "rgba(0,0,0,0.1)"
      }
    },
    dark: {
      root: {
        background: "rgba(255,255,255,0.3)"
      }
    }
  }
}, N0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  bar: {
    size: "9px",
    borderRadius: "{border.radius.sm}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      bar: {
        background: "{surface.100}"
      }
    },
    dark: {
      bar: {
        background: "{surface.800}"
      }
    }
  }
}, I0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  list: {
    padding: "{list.padding}",
    gap: "{list.gap}",
    header: {
      padding: "{list.header.padding}"
    }
  },
  option: {
    focusBackground: "{list.option.focus.background}",
    selectedBackground: "{list.option.selected.background}",
    selectedFocusBackground: "{list.option.selected.focus.background}",
    color: "{list.option.color}",
    focusColor: "{list.option.focus.color}",
    selectedColor: "{list.option.selected.color}",
    selectedFocusColor: "{list.option.selected.focus.color}",
    padding: "{list.option.padding}",
    borderRadius: "{list.option.border.radius}"
  },
  optionGroup: {
    background: "{list.option.group.background}",
    color: "{list.option.group.color}",
    fontWeight: "{list.option.group.font.weight}",
    padding: "{list.option.group.padding}"
  },
  clearIcon: {
    color: "{form.field.icon.color}"
  },
  checkmark: {
    color: "{list.option.color}",
    gutterStart: "-0.375rem",
    gutterEnd: "0.375rem"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  }
}, R0 = {
  root: {
    borderRadius: "{form.field.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    },
    dark: {
      root: {
        invalidBorderColor: "{form.field.invalid.border.color}"
      }
    }
  }
}, $0 = {
  root: {
    borderRadius: "{content.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.200}",
        animationBackground: "rgba(255,255,255,0.4)"
      }
    },
    dark: {
      root: {
        background: "rgba(255, 255, 255, 0.06)",
        animationBackground: "rgba(255, 255, 255, 0.04)"
      }
    }
  }
}, P0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  track: {
    background: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    size: "3px"
  },
  range: {
    background: "{primary.color}"
  },
  handle: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "{content.border.color}",
    hoverBackground: "{content.border.color}",
    content: {
      borderRadius: "50%",
      hoverBackground: "{content.background}",
      width: "16px",
      height: "16px",
      shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px 0px rgba(0, 0, 0, 0.14)"
    },
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  colorScheme: {
    light: {
      handle: {
        contentBackground: "{surface.0}"
      }
    },
    dark: {
      handle: {
        contentBackground: "{surface.950}"
      }
    }
  }
}, T0 = {
  root: {
    gap: "0.5rem",
    transitionDuration: "{transition.duration}"
  }
}, B0 = {
  root: {
    borderRadius: "{form.field.border.radius}",
    roundedBorderRadius: "2rem",
    raisedShadow: "0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)"
  }
}, D0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    transitionDuration: "{transition.duration}"
  },
  gutter: {
    background: "{content.border.color}"
  },
  handle: {
    size: "24px",
    background: "transparent",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  }
}, A0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}",
    activeBackground: "{primary.color}",
    margin: "0 0 0 1.625rem",
    size: "2px"
  },
  step: {
    padding: "0.5rem",
    gap: "1rem"
  },
  stepHeader: {
    padding: "0",
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  stepTitle: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  stepNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  },
  steppanels: {
    padding: "0.875rem 0.5rem 1.125rem 0.5rem"
  },
  steppanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0 0 0 1rem"
  }
}, V0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  separator: {
    background: "{content.border.color}"
  },
  itemLink: {
    borderRadius: "{content.border.radius}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.5rem"
  },
  itemLabel: {
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    fontWeight: "500"
  },
  itemNumber: {
    background: "{content.background}",
    activeBackground: "{content.background}",
    borderColor: "{content.border.color}",
    activeBorderColor: "{content.border.color}",
    color: "{text.muted.color}",
    activeColor: "{primary.color}",
    size: "2rem",
    fontSize: "1.143rem",
    fontWeight: "500",
    borderRadius: "50%",
    shadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
  }
}, L0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  item: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  itemIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  }
}, j0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tablist: {
    borderWidth: "0 0 1px 0",
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    background: "transparent",
    hoverBackground: "transparent",
    activeBackground: "transparent",
    borderWidth: "0 0 1px 0",
    borderColor: "{content.border.color}",
    hoverBorderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}",
    padding: "1rem 1.125rem",
    fontWeight: "600",
    margin: "0 0 -1px 0",
    gap: "0.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  tabpanel: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "0.875rem 1.125rem 1.125rem 1.125rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "inset {focus.ring.shadow}"
    }
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    width: "2.5rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  activeBar: {
    height: "1px",
    bottom: "-1px",
    background: "{primary.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
}, M0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  tabList: {
    background: "{content.background}",
    borderColor: "{content.border.color}"
  },
  tab: {
    borderColor: "{content.border.color}",
    activeBorderColor: "{primary.color}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    activeColor: "{primary.color}"
  },
  tabPanel: {
    background: "{content.background}",
    color: "{content.color}"
  },
  navButton: {
    background: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}"
  },
  colorScheme: {
    light: {
      navButton: {
        shadow: "0px 0px 10px 50px rgba(255, 255, 255, 0.6)"
      }
    },
    dark: {
      navButton: {
        shadow: "0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)"
      }
    }
  }
}, F0 = {
  root: {
    fontSize: "0.875rem",
    fontWeight: "700",
    padding: "0.25rem 0.5rem",
    gap: "0.25rem",
    borderRadius: "{content.border.radius}",
    roundedBorderRadius: "{border.radius.xl}"
  },
  icon: {
    size: "0.75rem"
  },
  colorScheme: {
    light: {
      primary: {
        background: "{primary.100}",
        color: "{primary.700}"
      },
      secondary: {
        background: "{surface.100}",
        color: "{surface.600}"
      },
      success: {
        background: "{green.100}",
        color: "{green.700}"
      },
      info: {
        background: "{sky.100}",
        color: "{sky.700}"
      },
      warn: {
        background: "{orange.100}",
        color: "{orange.700}"
      },
      danger: {
        background: "{red.100}",
        color: "{red.700}"
      },
      contrast: {
        background: "{surface.950}",
        color: "{surface.0}"
      }
    },
    dark: {
      primary: {
        background: "color-mix(in srgb, {primary.500}, transparent 84%)",
        color: "{primary.300}"
      },
      secondary: {
        background: "{surface.800}",
        color: "{surface.300}"
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        color: "{green.300}"
      },
      info: {
        background: "color-mix(in srgb, {sky.500}, transparent 84%)",
        color: "{sky.300}"
      },
      warn: {
        background: "color-mix(in srgb, {orange.500}, transparent 84%)",
        color: "{orange.300}"
      },
      danger: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        color: "{red.300}"
      },
      contrast: {
        background: "{surface.0}",
        color: "{surface.950}"
      }
    }
  }
}, U0 = {
  root: {
    background: "{form.field.background}",
    borderColor: "{form.field.border.color}",
    color: "{form.field.color}",
    height: "18rem",
    padding: "{form.field.padding.y} {form.field.padding.x}",
    borderRadius: "{form.field.border.radius}"
  },
  prompt: {
    gap: "0.25rem"
  },
  commandResponse: {
    margin: "2px 0"
  }
}, H0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  }
}, z0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    color: "{content.color}",
    borderRadius: "{content.border.radius}",
    shadow: "{overlay.navigation.shadow}",
    transitionDuration: "{transition.duration}"
  },
  list: {
    padding: "{navigation.list.padding}",
    gap: "{navigation.list.gap}"
  },
  item: {
    focusBackground: "{navigation.item.focus.background}",
    activeBackground: "{navigation.item.active.background}",
    color: "{navigation.item.color}",
    focusColor: "{navigation.item.focus.color}",
    activeColor: "{navigation.item.active.color}",
    padding: "{navigation.item.padding}",
    borderRadius: "{navigation.item.border.radius}",
    gap: "{navigation.item.gap}",
    icon: {
      color: "{navigation.item.icon.color}",
      focusColor: "{navigation.item.icon.focus.color}",
      activeColor: "{navigation.item.icon.active.color}"
    }
  },
  submenuLabel: {
    padding: "{navigation.submenu.label.padding}",
    fontWeight: "{navigation.submenu.label.font.weight}",
    background: "{navigation.submenu.label.background.}",
    color: "{navigation.submenu.label.color}"
  },
  submenuIcon: {
    size: "{navigation.submenu.icon.size}",
    color: "{navigation.submenu.icon.color}",
    focusColor: "{navigation.submenu.icon.focus.color}",
    activeColor: "{navigation.submenu.icon.active.color}"
  },
  separator: {
    borderColor: "{content.border.color}"
  }
}, W0 = {
  event: {
    minHeight: "5rem"
  },
  horizontal: {
    eventContent: {
      padding: "1rem 0"
    }
  },
  vertical: {
    eventContent: {
      padding: "0 1rem"
    }
  },
  eventMarker: {
    size: "1.125rem",
    borderRadius: "50%",
    borderWidth: "2px",
    background: "{content.background}",
    borderColor: "{content.border.color}",
    content: {
      borderRadius: "50%",
      size: "0.375rem",
      background: "{primary.color}",
      insetShadow: "0px 0.5px 0px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12)"
    }
  },
  eventConnector: {
    color: "{content.border.color}",
    size: "2px"
  }
}, K0 = {
  root: {
    width: "25rem",
    borderRadius: "{content.border.radius}",
    borderWidth: "1px",
    transitionDuration: "{transition.duration}"
  },
  icon: {
    size: "1.125rem"
  },
  content: {
    padding: "{overlay.popover.padding}",
    gap: "0.5rem"
  },
  text: {
    gap: "0.5rem"
  },
  summary: {
    fontWeight: "500",
    fontSize: "1rem"
  },
  detail: {
    fontWeight: "500",
    fontSize: "0.875rem"
  },
  closeButton: {
    width: "1.75rem",
    height: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      offset: "{focus.ring.offset}"
    }
  },
  closeIcon: {
    size: "1rem"
  },
  colorScheme: {
    light: {
      blur: "1.5px",
      info: {
        background: "color-mix(in srgb, {blue.50}, transparent 5%)",
        borderColor: "{blue.200}",
        color: "{blue.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{blue.100}",
          focusRing: {
            color: "{blue.600}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.50}, transparent 5%)",
        borderColor: "{green.200}",
        color: "{green.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{green.100}",
          focusRing: {
            color: "{green.600}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb,{yellow.50}, transparent 5%)",
        borderColor: "{yellow.200}",
        color: "{yellow.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{yellow.100}",
          focusRing: {
            color: "{yellow.600}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.50}, transparent 5%)",
        borderColor: "{red.200}",
        color: "{red.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{red.100}",
          focusRing: {
            color: "{red.600}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.100}",
        borderColor: "{surface.200}",
        color: "{surface.600}",
        detailColor: "{surface.700}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.200}",
          focusRing: {
            color: "{surface.600}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.900}",
        borderColor: "{surface.950}",
        color: "{surface.50}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.800}",
          focusRing: {
            color: "{surface.50}",
            shadow: "none"
          }
        }
      }
    },
    dark: {
      blur: "10px",
      info: {
        background: "color-mix(in srgb, {blue.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {blue.700}, transparent 64%)",
        color: "{blue.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {blue.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{blue.500}",
            shadow: "none"
          }
        }
      },
      success: {
        background: "color-mix(in srgb, {green.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {green.700}, transparent 64%)",
        color: "{green.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {green.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{green.500}",
            shadow: "none"
          }
        }
      },
      warn: {
        background: "color-mix(in srgb, {yellow.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {yellow.700}, transparent 64%)",
        color: "{yellow.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {yellow.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{yellow.500}",
            shadow: "none"
          }
        }
      },
      error: {
        background: "color-mix(in srgb, {red.500}, transparent 84%)",
        borderColor: "color-mix(in srgb, {red.700}, transparent 64%)",
        color: "{red.500}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {red.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "rgba(255, 255, 255, 0.05)",
          focusRing: {
            color: "{red.500}",
            shadow: "none"
          }
        }
      },
      secondary: {
        background: "{surface.800}",
        borderColor: "{surface.700}",
        color: "{surface.300}",
        detailColor: "{surface.0}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.500}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.700}",
          focusRing: {
            color: "{surface.300}",
            shadow: "none"
          }
        }
      },
      contrast: {
        background: "{surface.0}",
        borderColor: "{surface.100}",
        color: "{surface.950}",
        detailColor: "{surface.950}",
        shadow: "0px 4px 8px 0px color-mix(in srgb, {surface.950}, transparent 96%)",
        closeButton: {
          hoverBackground: "{surface.100}",
          focusRing: {
            color: "{surface.950}",
            shadow: "none"
          }
        }
      }
    }
  }
}, q0 = {
  root: {
    padding: "0.5rem 1rem",
    borderRadius: "{content.border.radius}",
    gap: "0.5rem",
    fontWeight: "500",
    disabledBackground: "{form.field.disabled.background}",
    disabledBorderColor: "{form.field.disabled.background}",
    disabledColor: "{form.field.disabled.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  icon: {
    disabledColor: "{form.field.disabled.color}"
  },
  content: {
    left: "0.25rem",
    top: "0.25rem",
    checkedShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.02), 0px 1px 2px 0px rgba(0, 0, 0, 0.04)"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.100}",
        checkedBackground: "{surface.100}",
        hoverBackground: "{surface.100}",
        borderColor: "{surface.100}",
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}",
        checkedBorderColor: "{surface.100}"
      },
      content: {
        checkedBackground: "{surface.0}"
      },
      icon: {
        color: "{surface.500}",
        hoverColor: "{surface.700}",
        checkedColor: "{surface.900}"
      }
    },
    dark: {
      root: {
        background: "{surface.950}",
        checkedBackground: "{surface.950}",
        hoverBackground: "{surface.950}",
        borderColor: "{surface.950}",
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}",
        checkedBorderColor: "{surface.950}"
      },
      content: {
        checkedBackground: "{surface.800}"
      },
      icon: {
        color: "{surface.400}",
        hoverColor: "{surface.300}",
        checkedColor: "{surface.0}"
      }
    }
  }
}, G0 = {
  root: {
    width: "2.5rem",
    height: "1.5rem",
    borderRadius: "30px",
    gap: "0.25rem",
    shadow: "{form.field.shadow}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    },
    borderWidth: "1px",
    borderColor: "transparent",
    hoverBorderColor: "transparent",
    checkedBorderColor: "transparent",
    checkedHoverBorderColor: "transparent",
    invalidBorderColor: "{form.field.invalid.border.color}",
    transitionDuration: "{form.field.transition.duration}",
    slideDuration: "0.2s",
    disabledBackground: "{form.field.disabled.background}"
  },
  handle: {
    borderRadius: "50%",
    size: "1rem",
    disabledBackground: "{form.field.disabled.color}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.300}",
        hoverBackground: "{surface.400}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.0}",
        hoverBackground: "{surface.0}",
        checkedBackground: "{surface.0}",
        checkedHoverBackground: "{surface.0}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        hoverBackground: "{surface.600}",
        checkedBackground: "{primary.color}",
        checkedHoverBackground: "{primary.hover.color}"
      },
      handle: {
        background: "{surface.400}",
        hoverBackground: "{surface.300}",
        checkedBackground: "{surface.900}",
        checkedHoverBackground: "{surface.900}"
      }
    }
  }
}, J0 = {
  root: {
    background: "{content.background}",
    borderColor: "{content.border.color}",
    borderRadius: "{content.border.radius}",
    color: "{content.color}",
    gap: "0.5rem",
    padding: "0.75rem"
  }
}, Y0 = {
  root: {
    maxWidth: "12.5rem",
    gutter: "0.25rem",
    shadow: "{overlay.popover.shadow}",
    padding: "0.5rem 0.75rem",
    borderRadius: "{overlay.popover.border.radius}"
  },
  colorScheme: {
    light: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    },
    dark: {
      root: {
        background: "{surface.700}",
        color: "{surface.0}"
      }
    }
  }
}, X0 = {
  root: {
    background: "{content.background}",
    color: "{content.color}",
    padding: "1rem",
    gap: "2px",
    indent: "1rem",
    transitionDuration: "{transition.duration}"
  },
  node: {
    padding: "0.25rem 0.5rem",
    borderRadius: "{content.border.radius}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{text.color}",
    hoverColor: "{text.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    },
    gap: "0.25rem"
  },
  nodeIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedColor: "{highlight.color}"
  },
  nodeToggleButton: {
    borderRadius: "50%",
    size: "1.75rem",
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}",
    selectedHoverColor: "{primary.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  loadingIcon: {
    size: "2rem"
  }
}, Q0 = {
  root: {
    background: "{form.field.background}",
    disabledBackground: "{form.field.disabled.background}",
    filledBackground: "{form.field.filled.background}",
    filledFocusBackground: "{form.field.filled.focus.background}",
    borderColor: "{form.field.border.color}",
    hoverBorderColor: "{form.field.hover.border.color}",
    focusBorderColor: "{form.field.focus.border.color}",
    invalidBorderColor: "{form.field.invalid.border.color}",
    color: "{form.field.color}",
    disabledColor: "{form.field.disabled.color}",
    placeholderColor: "{form.field.placeholder.color}",
    shadow: "{form.field.shadow}",
    paddingX: "{form.field.padding.x}",
    paddingY: "{form.field.padding.y}",
    borderRadius: "{form.field.border.radius}",
    focusRing: {
      width: "{form.field.focus.ring.width}",
      style: "{form.field.focus.ring.style}",
      color: "{form.field.focus.ring.color}",
      offset: "{form.field.focus.ring.offset}",
      shadow: "{form.field.focus.ring.shadow}"
    },
    transitionDuration: "{form.field.transition.duration}"
  },
  dropdown: {
    width: "2.5rem",
    color: "{form.field.icon.color}"
  },
  overlay: {
    background: "{overlay.select.background}",
    borderColor: "{overlay.select.border.color}",
    borderRadius: "{overlay.select.border.radius}",
    color: "{overlay.select.color}",
    shadow: "{overlay.select.shadow}"
  },
  tree: {
    padding: "{list.padding}"
  },
  emptyMessage: {
    padding: "{list.option.padding}"
  },
  chip: {
    borderRadius: "{border.radius.sm}"
  }
}, Z0 = {
  root: {
    transitionDuration: "{transition.duration}"
  },
  header: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  headerCell: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    gap: "0.5rem",
    padding: "0.75rem 1rem",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  columnTitle: {
    fontWeight: "600"
  },
  row: {
    background: "{content.background}",
    hoverBackground: "{content.hover.background}",
    selectedBackground: "{highlight.background}",
    color: "{content.color}",
    hoverColor: "{content.hover.color}",
    selectedColor: "{highlight.color}",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "-1px",
      shadow: "{focus.ring.shadow}"
    }
  },
  bodyCell: {
    borderColor: "{treetable.border.color}",
    padding: "0.75rem 1rem",
    gap: "0.5rem"
  },
  footerCell: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    padding: "0.75rem 1rem"
  },
  columnFooter: {
    fontWeight: "600"
  },
  footer: {
    background: "{content.background}",
    borderColor: "{treetable.border.color}",
    color: "{content.color}",
    borderWidth: "0 0 1px 0",
    padding: "0.75rem 1rem"
  },
  columnResizerWidth: "0.5rem",
  resizeIndicator: {
    width: "1px",
    color: "{primary.color}"
  },
  sortIcon: {
    color: "{text.muted.color}",
    hoverColor: "{text.hover.muted.color}"
  },
  loadingIcon: {
    size: "2rem"
  },
  nodeToggleButton: {
    hoverBackground: "{content.hover.background}",
    selectedHoverBackground: "{content.background}",
    color: "{text.muted.color}",
    hoverColor: "{text.color}",
    selectedHoverColor: "{primary.color}",
    size: "1.75rem",
    borderRadius: "50%",
    focusRing: {
      width: "{focus.ring.width}",
      style: "{focus.ring.style}",
      color: "{focus.ring.color}",
      offset: "{focus.ring.offset}",
      shadow: "{focus.ring.shadow}"
    }
  },
  paginatorTop: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  paginatorBottom: {
    borderColor: "{content.border.color}",
    borderWidth: "0 0 1px 0"
  },
  colorScheme: {
    light: {
      root: {
        borderColor: "{content.border.color}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.100}"
      }
    },
    dark: {
      root: {
        borderColor: "{surface.800}"
      },
      bodyCell: {
        selectedBorderColor: "{primary.900}"
      }
    }
  }
}, eb = {
  loader: {
    mask: {
      background: "{content.background}",
      color: "{text.muted.color}"
    },
    icon: {
      size: "2rem"
    }
  }
}, tb = {
  primitive: {
    borderRadius: {
      none: "0",
      xs: "2px",
      sm: "4px",
      md: "6px",
      lg: "8px",
      xl: "12px"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    }
  },
  semantic: {
    transitionDuration: "0.2s",
    focusRing: {
      width: "1px",
      style: "solid",
      color: "{primary.color}",
      offset: "2px",
      shadow: "none"
    },
    disabledOpacity: "0.6",
    iconSize: "1rem",
    anchorGutter: "2px",
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    },
    formField: {
      paddingX: "0.75rem",
      paddingY: "0.5rem",
      borderRadius: "{border.radius.md}",
      focusRing: {
        width: "0",
        style: "none",
        color: "transparent",
        offset: "0",
        shadow: "none"
      },
      transitionDuration: "{transition.duration}"
    },
    list: {
      padding: "0.25rem 0.25rem",
      gap: "2px",
      header: {
        padding: "0.5rem 1rem 0.25rem 1rem"
      },
      option: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}"
      },
      optionGroup: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      }
    },
    content: {
      borderRadius: "{border.radius.md}"
    },
    mask: {
      transitionDuration: "0.15s"
    },
    navigation: {
      list: {
        padding: "0.25rem 0.25rem",
        gap: "2px"
      },
      item: {
        padding: "0.5rem 0.75rem",
        borderRadius: "{border.radius.sm}",
        gap: "0.5rem"
      },
      submenuLabel: {
        padding: "0.5rem 0.75rem",
        fontWeight: "600"
      },
      submenuIcon: {
        size: "0.875rem"
      }
    },
    overlay: {
      select: {
        borderRadius: "{border.radius.md}",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      popover: {
        borderRadius: "{border.radius.md}",
        padding: "0.75rem",
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      },
      modal: {
        borderRadius: "{border.radius.xl}",
        padding: "1.25rem",
        shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      },
      navigation: {
        shadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
      }
    },
    colorScheme: {
      light: {
        surface: {
          0: "#ffffff",
          50: "{slate.50}",
          100: "{slate.100}",
          200: "{slate.200}",
          300: "{slate.300}",
          400: "{slate.400}",
          500: "{slate.500}",
          600: "{slate.600}",
          700: "{slate.700}",
          800: "{slate.800}",
          900: "{slate.900}",
          950: "{slate.950}"
        },
        primary: {
          color: "{primary.500}",
          contrastColor: "#ffffff",
          hoverColor: "{primary.600}",
          activeColor: "{primary.700}"
        },
        highlight: {
          background: "{primary.50}",
          focusBackground: "{primary.100}",
          color: "{primary.700}",
          focusColor: "{primary.800}"
        },
        mask: {
          background: "rgba(0,0,0,0.4)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.0}",
          disabledBackground: "{surface.200}",
          filledBackground: "{surface.50}",
          filledFocusBackground: "{surface.50}",
          borderColor: "{surface.300}",
          hoverBorderColor: "{surface.400}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.400}",
          color: "{surface.700}",
          disabledColor: "{surface.500}",
          placeholderColor: "{surface.500}",
          floatLabelColor: "{surface.500}",
          floatLabelFocusColor: "{surface.500}",
          floatLabelInvalidColor: "{red.400}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.700}",
          hoverColor: "{surface.800}",
          mutedColor: "{surface.500}",
          hoverMutedColor: "{surface.600}"
        },
        content: {
          background: "{surface.0}",
          hoverBackground: "{surface.100}",
          borderColor: "{surface.200}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.0}",
            borderColor: "{surface.200}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.100}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.100}",
            activeBackground: "{surface.100}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.400}",
              focusColor: "{surface.500}",
              activeColor: "{surface.500}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.400}",
            focusColor: "{surface.500}",
            activeColor: "{surface.500}"
          }
        }
      },
      dark: {
        surface: {
          0: "#ffffff",
          50: "{zinc.50}",
          100: "{zinc.100}",
          200: "{zinc.200}",
          300: "{zinc.300}",
          400: "{zinc.400}",
          500: "{zinc.500}",
          600: "{zinc.600}",
          700: "{zinc.700}",
          800: "{zinc.800}",
          900: "{zinc.900}",
          950: "{zinc.950}"
        },
        primary: {
          color: "{primary.400}",
          contrastColor: "{surface.900}",
          hoverColor: "{primary.300}",
          activeColor: "{primary.200}"
        },
        highlight: {
          background: "color-mix(in srgb, {primary.400}, transparent 84%)",
          focusBackground: "color-mix(in srgb, {primary.400}, transparent 76%)",
          color: "rgba(255,255,255,.87)",
          focusColor: "rgba(255,255,255,.87)"
        },
        mask: {
          background: "rgba(0,0,0,0.6)",
          color: "{surface.200}"
        },
        formField: {
          background: "{surface.950}",
          disabledBackground: "{surface.700}",
          filledBackground: "{surface.800}",
          filledFocusBackground: "{surface.800}",
          borderColor: "{surface.700}",
          hoverBorderColor: "{surface.600}",
          focusBorderColor: "{primary.color}",
          invalidBorderColor: "{red.300}",
          color: "{surface.0}",
          disabledColor: "{surface.400}",
          placeholderColor: "{surface.400}",
          floatLabelColor: "{surface.400}",
          floatLabelFocusColor: "{surface.400}",
          floatLabelInvalidColor: "{red.300}",
          iconColor: "{surface.400}",
          shadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgba(18, 18, 23, 0.05)"
        },
        text: {
          color: "{surface.0}",
          hoverColor: "{surface.0}",
          mutedColor: "{surface.400}",
          hoverMutedColor: "{surface.300}"
        },
        content: {
          background: "{surface.900}",
          hoverBackground: "{surface.800}",
          borderColor: "{surface.700}",
          color: "{text.color}",
          hoverColor: "{text.hover.color}"
        },
        overlay: {
          select: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          popover: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          },
          modal: {
            background: "{surface.900}",
            borderColor: "{surface.700}",
            color: "{text.color}"
          }
        },
        list: {
          option: {
            focusBackground: "{surface.800}",
            selectedBackground: "{highlight.background}",
            selectedFocusBackground: "{highlight.focus.background}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            selectedColor: "{highlight.color}",
            selectedFocusColor: "{highlight.focus.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}"
            }
          },
          optionGroup: {
            background: "transparent",
            color: "{text.muted.color}"
          }
        },
        navigation: {
          item: {
            focusBackground: "{surface.800}",
            activeBackground: "{surface.800}",
            color: "{text.color}",
            focusColor: "{text.hover.color}",
            activeColor: "{text.hover.color}",
            icon: {
              color: "{surface.500}",
              focusColor: "{surface.400}",
              activeColor: "{surface.400}"
            }
          },
          submenuLabel: {
            background: "transparent",
            color: "{text.muted.color}"
          },
          submenuIcon: {
            color: "{surface.500}",
            focusColor: "{surface.400}",
            activeColor: "{surface.400}"
          }
        }
      }
    }
  },
  components: {
    accordion: Eg,
    autocomplete: Cg,
    avatar: Sg,
    badge: Og,
    blockui: Ng,
    breadcrumb: Ig,
    button: Rg,
    datepicker: Ug,
    card: $g,
    carousel: Pg,
    cascadeselect: Tg,
    checkbox: Bg,
    chip: Dg,
    colorpicker: Ag,
    confirmdialog: Vg,
    confirmpopup: Lg,
    contextmenu: jg,
    dataview: Fg,
    datatable: Mg,
    dialog: Hg,
    divider: zg,
    dock: Wg,
    drawer: Kg,
    editor: qg,
    fieldset: Gg,
    fileupload: Jg,
    floatlabel: Yg,
    galleria: Xg,
    iconfield: Qg,
    image: Zg,
    inlinemessage: e0,
    inplace: t0,
    inputchips: o0,
    inputgroup: r0,
    inputnumber: n0,
    inputtext: i0,
    knob: s0,
    listbox: a0,
    megamenu: c0,
    menu: l0,
    menubar: u0,
    message: d0,
    metergroup: f0,
    multiselect: p0,
    orderlist: h0,
    organizationchart: m0,
    overlaybadge: g0,
    popover: k0,
    paginator: b0,
    password: _0,
    panel: v0,
    panelmenu: y0,
    picklist: w0,
    progressbar: x0,
    progressspinner: E0,
    radiobutton: C0,
    rating: S0,
    scrollpanel: N0,
    select: I0,
    selectbutton: R0,
    skeleton: $0,
    slider: P0,
    speeddial: T0,
    splitter: D0,
    splitbutton: B0,
    stepper: A0,
    steps: V0,
    tabmenu: L0,
    tabs: j0,
    tabview: M0,
    textarea: H0,
    tieredmenu: z0,
    tag: F0,
    terminal: U0,
    timeline: W0,
    togglebutton: q0,
    toggleswitch: G0,
    tree: X0,
    treeselect: Q0,
    treetable: Z0,
    toast: K0,
    toolbar: J0,
    virtualscroller: eb
  },
  directives: {
    tooltip: Y0,
    ripple: O0
  }
}, ao = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames: function() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded: function(t) {
    return this._loadedStyleNames.has(t);
  },
  setLoadedStyleName: function(t) {
    this._loadedStyleNames.add(t);
  },
  deleteLoadedStyleName: function(t) {
    this._loadedStyleNames.delete(t);
  },
  clearLoadedStyleNames: function() {
    this._loadedStyleNames.clear();
  }
};
function An() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "pv_id_";
  return pg(e);
}
function Nr(e) {
  "@babel/helpers - typeof";
  return Nr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Nr(e);
}
function sc(e, t) {
  return ib(e) || nb(e, t) || rb(e, t) || ob();
}
function ob() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function rb(e, t) {
  if (e) {
    if (typeof e == "string") return ac(e, t);
    var o = {}.toString.call(e).slice(8, -1);
    return o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set" ? Array.from(e) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? ac(e, t) : void 0;
  }
}
function ac(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
  return r;
}
function nb(e, t) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var r, n, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (o = o.call(e)).next, t !== 0) for (; !(c = (r = i.call(o)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, n = u;
    } finally {
      try {
        if (!c && o.return != null && (s = o.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw n;
      }
    }
    return a;
  }
}
function ib(e) {
  if (Array.isArray(e)) return e;
}
function cc(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function ue(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? cc(Object(o), !0).forEach(function(r) {
      Xi(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : cc(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function Xi(e, t, o) {
  return (t = sb(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function sb(e) {
  var t = ab(e, "string");
  return Nr(t) == "symbol" ? t : t + "";
}
function ab(e, t) {
  if (Nr(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Nr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ne = {
  _getMeta: function() {
    return [Bt(arguments.length <= 0 ? void 0 : arguments[0]) || arguments.length <= 0 ? void 0 : arguments[0], pt(Bt(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1])];
  },
  _getConfig: function(t, o) {
    var r, n, i;
    return (r = (t == null || (n = t.instance) === null || n === void 0 ? void 0 : n.$primevue) || (o == null || (i = o.ctx) === null || i === void 0 || (i = i.appContext) === null || i === void 0 || (i = i.config) === null || i === void 0 || (i = i.globalProperties) === null || i === void 0 ? void 0 : i.$primevue)) === null || r === void 0 ? void 0 : r.config;
  },
  _getOptionValue: Us,
  _getPTValue: function() {
    var t, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "", s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = function() {
      var v = ne._getOptionValue.apply(ne, arguments);
      return Xe(v) || Hs(v) ? {
        class: v
      } : v;
    }, l = ((t = r.binding) === null || t === void 0 || (t = t.value) === null || t === void 0 ? void 0 : t.ptOptions) || ((o = r.$primevueConfig) === null || o === void 0 ? void 0 : o.ptOptions) || {}, u = l.mergeSections, d = u === void 0 ? !0 : u, f = l.mergeProps, h = f === void 0 ? !1 : f, g = a ? ne._useDefaultPT(r, r.defaultPT(), c, i, s) : void 0, b = ne._usePT(r, ne._getPT(n, r.$name), c, i, ue(ue({}, s), {}, {
      global: g || {}
    })), y = ne._getPTDatasets(r, i);
    return d || !d && b ? h ? ne._mergeProps(r, h, g, b, y) : ue(ue(ue({}, g), b), y) : ue(ue({}, b), y);
  },
  _getPTDatasets: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = "data-pc-";
    return ue(ue({}, o === "root" && Xi({}, "".concat(r, "name"), yt(t.$name))), {}, Xi({}, "".concat(r, "section"), yt(o)));
  },
  _getPT: function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 ? arguments[2] : void 0, n = function(s) {
      var a, c = r ? r(s) : s, l = yt(o);
      return (a = c == null ? void 0 : c[l]) !== null && a !== void 0 ? a : c;
    };
    return t != null && t.hasOwnProperty("_usept") ? {
      _usept: t._usept,
      originalValue: n(t.originalValue),
      value: n(t.value)
    } : n(t);
  },
  _usePT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0, s = function(y) {
      return r(y, n, i);
    };
    if (o != null && o.hasOwnProperty("_usept")) {
      var a, c = o._usept || ((a = t.$primevueConfig) === null || a === void 0 ? void 0 : a.ptOptions) || {}, l = c.mergeSections, u = l === void 0 ? !0 : l, d = c.mergeProps, f = d === void 0 ? !1 : d, h = s(o.originalValue), g = s(o.value);
      return h === void 0 && g === void 0 ? void 0 : Xe(g) ? g : Xe(h) ? h : u || !u && g ? f ? ne._mergeProps(t, f, h, g) : ue(ue({}, h), g) : g;
    }
    return s(o);
  },
  _useDefaultPT: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = arguments.length > 3 ? arguments[3] : void 0, i = arguments.length > 4 ? arguments[4] : void 0;
    return ne._usePT(t, o, r, n, i);
  },
  _loadStyles: function(t, o, r) {
    var n, i = ne._getConfig(o, r), s = {
      nonce: i == null || (n = i.csp) === null || n === void 0 ? void 0 : n.nonce
    };
    ne._loadCoreStyles(t.$instance, s), ne._loadThemeStyles(t.$instance, s), ne._loadScopedThemeStyles(t.$instance, s), ne._themeChangeListener(function() {
      return ne._loadThemeStyles(t.$instance, s);
    });
  },
  _loadCoreStyles: function() {
    var t, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!ao.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
      var i;
      Ie.loadCSS(n), r.isUnstyled() && ((i = r.$style) === null || i === void 0 || i.loadCSS(n)), ao.setLoadedStyleName(r.$style.name);
    }
  },
  _loadThemeStyles: function() {
    var t, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0;
    if (!(r != null && r.isUnstyled())) {
      if (!ge.isStyleNameLoaded("common")) {
        var i, s, a = ((i = r.$style) === null || i === void 0 || (s = i.getCommonTheme) === null || s === void 0 ? void 0 : s.call(i)) || {}, c = a.primitive, l = a.semantic;
        Ie.load(c == null ? void 0 : c.css, ue({
          name: "primitive-variables"
        }, n)), Ie.load(l == null ? void 0 : l.css, ue({
          name: "semantic-variables"
        }, n)), Ie.loadTheme(ue({
          name: "global-style"
        }, n)), ge.setLoadedStyleName("common");
      }
      if (!ge.isStyleNameLoaded((t = r.$style) === null || t === void 0 ? void 0 : t.name) && (o = r.$style) !== null && o !== void 0 && o.name) {
        var u, d, f, h, g = ((u = r.$style) === null || u === void 0 || (d = u.getDirectiveTheme) === null || d === void 0 ? void 0 : d.call(u)) || {}, b = g.css;
        (f = r.$style) === null || f === void 0 || f.load(b, ue({
          name: "".concat(r.$style.name, "-variables")
        }, n)), (h = r.$style) === null || h === void 0 || h.loadTheme(ue({
          name: "".concat(r.$style.name, "-style")
        }, n)), ge.setLoadedStyleName(r.$style.name);
      }
      if (!ge.isStyleNameLoaded("layer-order")) {
        var y, O, v = (y = r.$style) === null || y === void 0 || (O = y.getLayerOrderThemeCSS) === null || O === void 0 ? void 0 : O.call(y);
        Ie.load(v, ue({
          name: "layer-order",
          first: !0
        }, n)), ge.setLoadedStyleName("layer-order");
      }
    }
  },
  _loadScopedThemeStyles: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0, r = t.preset();
    if (r && t.$attrSelector) {
      var n, i, s, a = ((n = t.$style) === null || n === void 0 || (i = n.getPresetTheme) === null || i === void 0 ? void 0 : i.call(n, r, "[".concat(t.$attrSelector, "]"))) || {}, c = a.css, l = (s = t.$style) === null || s === void 0 ? void 0 : s.load(c, ue({
        name: "".concat(t.$attrSelector, "-").concat(t.$style.name)
      }, o));
      t.scopedStyleEl = l.el;
    }
  },
  _themeChangeListener: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
    };
    ao.clearLoadedStyleNames(), bt.on("theme:change", t);
  },
  _hook: function(t, o, r, n, i, s) {
    var a, c, l = "on".concat(Nm(o)), u = ne._getConfig(n, i), d = r == null ? void 0 : r.$instance, f = ne._usePT(d, ne._getPT(n == null || (a = n.value) === null || a === void 0 ? void 0 : a.pt, t), ne._getOptionValue, "hooks.".concat(l)), h = ne._useDefaultPT(d, u == null || (c = u.pt) === null || c === void 0 || (c = c.directives) === null || c === void 0 ? void 0 : c[t], ne._getOptionValue, "hooks.".concat(l)), g = {
      el: r,
      binding: n,
      vnode: i,
      prevVnode: s
    };
    f == null || f(d, g), h == null || h(d, g);
  },
  _mergeProps: function() {
    for (var t = arguments.length > 1 ? arguments[1] : void 0, o = arguments.length, r = new Array(o > 2 ? o - 2 : 0), n = 2; n < o; n++)
      r[n - 2] = arguments[n];
    return Fs(t) ? t.apply(void 0, r) : ce.apply(void 0, r);
  },
  _extend: function(t) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = function(s, a, c, l, u) {
      var d, f, h;
      a._$instances = a._$instances || {};
      var g = ne._getConfig(c, l), b = a._$instances[t] || {}, y = uo(b) ? ue(ue({}, o), o == null ? void 0 : o.methods) : {};
      a._$instances[t] = ue(ue({}, b), {}, {
        /* new instance variables to pass in directive methods */
        $name: t,
        $host: a,
        $binding: c,
        $modifiers: c == null ? void 0 : c.modifiers,
        $value: c == null ? void 0 : c.value,
        $el: b.$el || a || void 0,
        $style: ue({
          classes: void 0,
          inlineStyles: void 0,
          load: function() {
          },
          loadCSS: function() {
          },
          loadTheme: function() {
          }
        }, o == null ? void 0 : o.style),
        $primevueConfig: g,
        $attrSelector: a.$attrSelector,
        /* computed instance variables */
        defaultPT: function() {
          return ne._getPT(g == null ? void 0 : g.pt, void 0, function(v) {
            var w;
            return v == null || (w = v.directives) === null || w === void 0 ? void 0 : w[t];
          });
        },
        isUnstyled: function() {
          var v, w;
          return ((v = a.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.unstyled) !== void 0 ? (w = a.$instance) === null || w === void 0 || (w = w.$binding) === null || w === void 0 || (w = w.value) === null || w === void 0 ? void 0 : w.unstyled : g == null ? void 0 : g.unstyled;
        },
        theme: function() {
          var v;
          return (v = a.$instance) === null || v === void 0 || (v = v.$primevueConfig) === null || v === void 0 ? void 0 : v.theme;
        },
        preset: function() {
          var v;
          return (v = a.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.dt;
        },
        /* instance's methods */
        ptm: function() {
          var v, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return ne._getPTValue(a.$instance, (v = a.$instance) === null || v === void 0 || (v = v.$binding) === null || v === void 0 || (v = v.value) === null || v === void 0 ? void 0 : v.pt, w, ue({}, L));
        },
        ptmo: function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", L = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return ne._getPTValue(a.$instance, v, w, L, !1);
        },
        cx: function() {
          var v, w, L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return (v = a.$instance) !== null && v !== void 0 && v.isUnstyled() ? void 0 : ne._getOptionValue((w = a.$instance) === null || w === void 0 || (w = w.$style) === null || w === void 0 ? void 0 : w.classes, L, ue({}, H));
        },
        sx: function() {
          var v, w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, H = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return L ? ne._getOptionValue((v = a.$instance) === null || v === void 0 || (v = v.$style) === null || v === void 0 ? void 0 : v.inlineStyles, w, ue({}, H)) : void 0;
        }
      }, y), a.$instance = a._$instances[t], (d = (f = a.$instance)[s]) === null || d === void 0 || d.call(f, a, c, l, u), a["$".concat(t)] = a.$instance, ne._hook(t, s, a, c, l, u), a.$pd || (a.$pd = {}), a.$pd[t] = ue(ue({}, (h = a.$pd) === null || h === void 0 ? void 0 : h[t]), {}, {
        name: t,
        instance: a.$instance
      });
    }, n = function(s) {
      var a, c, l, u, d, f = (a = s.$instance) === null || a === void 0 ? void 0 : a.watch;
      f == null || (c = f.config) === null || c === void 0 || c.call(s.$instance, (l = s.$instance) === null || l === void 0 ? void 0 : l.$primevueConfig), Uo.on("config:change", function(h) {
        var g, b = h.newValue, y = h.oldValue;
        return f == null || (g = f.config) === null || g === void 0 ? void 0 : g.call(s.$instance, b, y);
      }), f == null || (u = f["config.ripple"]) === null || u === void 0 || u.call(s.$instance, (d = s.$instance) === null || d === void 0 || (d = d.$primevueConfig) === null || d === void 0 ? void 0 : d.ripple), Uo.on("config:ripple:change", function(h) {
        var g, b = h.newValue, y = h.oldValue;
        return f == null || (g = f["config.ripple"]) === null || g === void 0 ? void 0 : g.call(s.$instance, b, y);
      });
    };
    return {
      created: function(s, a, c, l) {
        r("created", s, a, c, l);
      },
      beforeMount: function(s, a, c, l) {
        s.$attrSelector = An("pd"), ne._loadStyles(s, a, c), r("beforeMount", s, a, c, l), n(s);
      },
      mounted: function(s, a, c, l) {
        ne._loadStyles(s, a, c), r("mounted", s, a, c, l);
      },
      beforeUpdate: function(s, a, c, l) {
        r("beforeUpdate", s, a, c, l);
      },
      updated: function(s, a, c, l) {
        ne._loadStyles(s, a, c), r("updated", s, a, c, l);
      },
      beforeUnmount: function(s, a, c, l) {
        r("beforeUnmount", s, a, c, l);
      },
      unmounted: function(s, a, c, l) {
        var u;
        (u = s.$instance) === null || u === void 0 || (u = u.scopedStyleEl) === null || u === void 0 || (u = u.value) === null || u === void 0 || u.remove(), r("unmounted", s, a, c, l);
      }
    };
  },
  extend: function() {
    var t = ne._getMeta.apply(ne, arguments), o = sc(t, 2), r = o[0], n = o[1];
    return ue({
      extend: function() {
        var s = ne._getMeta.apply(ne, arguments), a = sc(s, 2), c = a[0], l = a[1];
        return ne.extend(c, ue(ue(ue({}, n), n == null ? void 0 : n.methods), l));
      }
    }, ne._extend(r, n));
  }
}, cb = function(t) {
  var o = t.dt;
  return `
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(o("ripple.background"), `;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`);
}, lb = {
  root: "p-ink"
}, ub = Ie.extend({
  name: "ripple-directive",
  theme: cb,
  classes: lb
}), db = ne.extend({
  style: ub
});
function Ir(e) {
  "@babel/helpers - typeof";
  return Ir = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ir(e);
}
function fb(e) {
  return gb(e) || mb(e) || hb(e) || pb();
}
function pb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hb(e, t) {
  if (e) {
    if (typeof e == "string") return Qi(e, t);
    var o = {}.toString.call(e).slice(8, -1);
    return o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set" ? Array.from(e) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? Qi(e, t) : void 0;
  }
}
function mb(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function gb(e) {
  if (Array.isArray(e)) return Qi(e);
}
function Qi(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
  return r;
}
function lc(e, t, o) {
  return (t = bb(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function bb(e) {
  var t = vb(e, "string");
  return Ir(t) == "symbol" ? t : t + "";
}
function vb(e, t) {
  if (Ir(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Ir(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Pu = db.extend("ripple", {
  watch: {
    "config.ripple": function(t) {
      t ? (this.createRipple(this.$host), this.bindEvents(this.$host), this.$host.setAttribute("data-pd-ripple", !0), this.$host.style.overflow = "hidden", this.$host.style.position = "relative") : (this.remove(this.$host), this.$host.removeAttribute("data-pd-ripple"));
    }
  },
  unmounted: function(t) {
    this.remove(t);
  },
  timeout: void 0,
  methods: {
    bindEvents: function(t) {
      t.addEventListener("mousedown", this.onMouseDown.bind(this));
    },
    unbindEvents: function(t) {
      t.removeEventListener("mousedown", this.onMouseDown.bind(this));
    },
    createRipple: function(t) {
      var o = Fm("span", lc(lc({
        role: "presentation",
        "aria-hidden": !0,
        "data-p-ink": !0,
        "data-p-ink-active": !1,
        class: !this.isUnstyled() && this.cx("root"),
        onAnimationEnd: this.onAnimationEnd.bind(this)
      }, this.$attrSelector, ""), "p-bind", this.ptm("root")));
      t.appendChild(o), this.$el = o;
    },
    remove: function(t) {
      var o = this.getInk(t);
      o && (this.$host.style.overflow = "", this.$host.style.position = "", this.unbindEvents(t), o.removeEventListener("animationend", this.onAnimationEnd), o.remove());
    },
    onMouseDown: function(t) {
      var o = this, r = t.currentTarget, n = this.getInk(r);
      if (!(!n || getComputedStyle(n, null).display === "none")) {
        if (!this.isUnstyled() && wi(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"), !Qa(n) && !Za(n)) {
          var i = Math.max(Mm(r), Wm(r));
          n.style.height = i + "px", n.style.width = i + "px";
        }
        var s = zm(r), a = t.pageX - s.left + document.body.scrollTop - Za(n) / 2, c = t.pageY - s.top + document.body.scrollLeft - Qa(n) / 2;
        n.style.top = c + "px", n.style.left = a + "px", !this.isUnstyled() && jm(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "true"), this.timeout = setTimeout(function() {
          n && (!o.isUnstyled() && wi(n, "p-ink-active"), n.setAttribute("data-p-ink-active", "false"));
        }, 401);
      }
    },
    onAnimationEnd: function(t) {
      this.timeout && clearTimeout(this.timeout), !this.isUnstyled() && wi(t.currentTarget, "p-ink-active"), t.currentTarget.setAttribute("data-p-ink-active", "false");
    },
    getInk: function(t) {
      return t && t.children ? fb(t.children).find(function(o) {
        return Um(o, "data-pc-name") === "ripple";
      }) : void 0;
    }
  }
}), uc = Ie.extend({
  name: "common"
});
function Rr(e) {
  "@babel/helpers - typeof";
  return Rr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rr(e);
}
function yb(e) {
  return Du(e) || _b(e) || Bu(e) || Tu();
}
function _b(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function en(e, t) {
  return Du(e) || wb(e, t) || Bu(e, t) || Tu();
}
function Tu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bu(e, t) {
  if (e) {
    if (typeof e == "string") return dc(e, t);
    var o = {}.toString.call(e).slice(8, -1);
    return o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set" ? Array.from(e) : o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? dc(e, t) : void 0;
  }
}
function dc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, r = Array(t); o < t; o++) r[o] = e[o];
  return r;
}
function wb(e, t) {
  var o = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (o != null) {
    var r, n, i, s, a = [], c = !0, l = !1;
    try {
      if (i = (o = o.call(e)).next, t === 0) {
        if (Object(o) !== o) return;
        c = !1;
      } else for (; !(c = (r = i.call(o)).done) && (a.push(r.value), a.length !== t); c = !0) ;
    } catch (u) {
      l = !0, n = u;
    } finally {
      try {
        if (!c && o.return != null && (s = o.return(), Object(s) !== s)) return;
      } finally {
        if (l) throw n;
      }
    }
    return a;
  }
}
function Du(e) {
  if (Array.isArray(e)) return e;
}
function fc(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function le(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fc(Object(o), !0).forEach(function(r) {
      vn(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : fc(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function vn(e, t, o) {
  return (t = kb(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function kb(e) {
  var t = xb(e, "string");
  return Rr(t) == "symbol" ? t : t + "";
}
function xb(e, t) {
  if (Rr(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Rr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ei = {
  name: "BaseComponent",
  props: {
    pt: {
      type: Object,
      default: void 0
    },
    ptOptions: {
      type: Object,
      default: void 0
    },
    unstyled: {
      type: Boolean,
      default: void 0
    },
    dt: {
      type: Object,
      default: void 0
    }
  },
  inject: {
    $parentInstance: {
      default: void 0
    }
  },
  watch: {
    isUnstyled: {
      immediate: !0,
      handler: function(t) {
        t || (this._loadCoreStyles(), this._themeChangeListener(this._loadCoreStyles));
      }
    },
    dt: {
      immediate: !0,
      handler: function(t) {
        var o = this;
        t ? (this._loadScopedThemeStyles(t), this._themeChangeListener(function() {
          return o._loadScopedThemeStyles(t);
        })) : this._unloadScopedThemeStyles();
      }
    }
  },
  scopedStyleEl: void 0,
  rootEl: void 0,
  beforeCreate: function() {
    var t, o, r, n, i, s, a, c, l, u, d, f = (t = this.pt) === null || t === void 0 ? void 0 : t._usept, h = f ? (o = this.pt) === null || o === void 0 || (o = o.originalValue) === null || o === void 0 ? void 0 : o[this.$.type.name] : void 0, g = f ? (r = this.pt) === null || r === void 0 || (r = r.value) === null || r === void 0 ? void 0 : r[this.$.type.name] : this.pt;
    (n = g || h) === null || n === void 0 || (n = n.hooks) === null || n === void 0 || (i = n.onBeforeCreate) === null || i === void 0 || i.call(n);
    var b = (s = this.$primevueConfig) === null || s === void 0 || (s = s.pt) === null || s === void 0 ? void 0 : s._usept, y = b ? (a = this.$primevue) === null || a === void 0 || (a = a.config) === null || a === void 0 || (a = a.pt) === null || a === void 0 ? void 0 : a.originalValue : void 0, O = b ? (c = this.$primevue) === null || c === void 0 || (c = c.config) === null || c === void 0 || (c = c.pt) === null || c === void 0 ? void 0 : c.value : (l = this.$primevue) === null || l === void 0 || (l = l.config) === null || l === void 0 ? void 0 : l.pt;
    (u = O || y) === null || u === void 0 || (u = u[this.$.type.name]) === null || u === void 0 || (u = u.hooks) === null || u === void 0 || (d = u.onBeforeCreate) === null || d === void 0 || d.call(u);
  },
  created: function() {
    this._hook("onCreated");
  },
  beforeMount: function() {
    this._loadStyles(), this._hook("onBeforeMount");
  },
  mounted: function() {
    this.rootEl = bn(this.$el, '[data-pc-name="'.concat(yt(this.$.type.name), '"]')), this.rootEl && (this.rootEl.setAttribute(this.$attrSelector, ""), this.rootEl.$pc = le({
      name: this.$.type.name
    }, this.$params)), this._hook("onMounted");
  },
  beforeUpdate: function() {
    this._hook("onBeforeUpdate");
  },
  updated: function() {
    this._hook("onUpdated");
  },
  beforeUnmount: function() {
    this._hook("onBeforeUnmount");
  },
  unmounted: function() {
    this._unloadScopedThemeStyles(), this._hook("onUnmounted");
  },
  methods: {
    _hook: function(t) {
      if (!this.$options.hostName) {
        var o = this._usePT(this._getPT(this.pt, this.$.type.name), this._getOptionValue, "hooks.".concat(t)), r = this._useDefaultPT(this._getOptionValue, "hooks.".concat(t));
        o == null || o(), r == null || r();
      }
    },
    _mergeProps: function(t) {
      for (var o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
        r[n - 1] = arguments[n];
      return Fs(t) ? t.apply(void 0, r) : ce.apply(void 0, r);
    },
    _loadStyles: function() {
      var t = this, o = function() {
        ao.isStyleNameLoaded("base") || (Ie.loadCSS(t.$styleOptions), t._loadGlobalStyles(), ao.setLoadedStyleName("base")), t._loadThemeStyles();
      };
      o(), this._themeChangeListener(o);
    },
    _loadCoreStyles: function() {
      var t, o;
      !ao.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (o = this.$style) !== null && o !== void 0 && o.name && (uc.loadCSS(this.$styleOptions), this.$options.style && this.$style.loadCSS(this.$styleOptions), ao.setLoadedStyleName(this.$style.name));
    },
    _loadGlobalStyles: function() {
      var t = this._useGlobalPT(this._getOptionValue, "global.css", this.$params);
      Ce(t) && Ie.load(t, le({
        name: "global"
      }, this.$styleOptions));
    },
    _loadThemeStyles: function() {
      var t, o;
      if (!this.isUnstyled) {
        if (!ge.isStyleNameLoaded("common")) {
          var r, n, i = ((r = this.$style) === null || r === void 0 || (n = r.getCommonTheme) === null || n === void 0 ? void 0 : n.call(r)) || {}, s = i.primitive, a = i.semantic;
          Ie.load(s == null ? void 0 : s.css, le({
            name: "primitive-variables"
          }, this.$styleOptions)), Ie.load(a == null ? void 0 : a.css, le({
            name: "semantic-variables"
          }, this.$styleOptions)), Ie.loadTheme(le({
            name: "global-style"
          }, this.$styleOptions)), ge.setLoadedStyleName("common");
        }
        if (!ge.isStyleNameLoaded((t = this.$style) === null || t === void 0 ? void 0 : t.name) && (o = this.$style) !== null && o !== void 0 && o.name) {
          var c, l, u, d, f = ((c = this.$style) === null || c === void 0 || (l = c.getComponentTheme) === null || l === void 0 ? void 0 : l.call(c)) || {}, h = f.css;
          (u = this.$style) === null || u === void 0 || u.load(h, le({
            name: "".concat(this.$style.name, "-variables")
          }, this.$styleOptions)), (d = this.$style) === null || d === void 0 || d.loadTheme(le({
            name: "".concat(this.$style.name, "-style")
          }, this.$styleOptions)), ge.setLoadedStyleName(this.$style.name);
        }
        if (!ge.isStyleNameLoaded("layer-order")) {
          var g, b, y = (g = this.$style) === null || g === void 0 || (b = g.getLayerOrderThemeCSS) === null || b === void 0 ? void 0 : b.call(g);
          Ie.load(y, le({
            name: "layer-order",
            first: !0
          }, this.$styleOptions)), ge.setLoadedStyleName("layer-order");
        }
      }
    },
    _loadScopedThemeStyles: function(t) {
      var o, r, n, i = ((o = this.$style) === null || o === void 0 || (r = o.getPresetTheme) === null || r === void 0 ? void 0 : r.call(o, t, "[".concat(this.$attrSelector, "]"))) || {}, s = i.css, a = (n = this.$style) === null || n === void 0 ? void 0 : n.load(s, le({
        name: "".concat(this.$attrSelector, "-").concat(this.$style.name)
      }, this.$styleOptions));
      this.scopedStyleEl = a.el;
    },
    _unloadScopedThemeStyles: function() {
      var t;
      (t = this.scopedStyleEl) === null || t === void 0 || (t = t.value) === null || t === void 0 || t.remove();
    },
    _themeChangeListener: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      };
      ao.clearLoadedStyleNames(), bt.on("theme:change", t);
    },
    _getHostInstance: function(t) {
      return t ? this.$options.hostName ? t.$.type.name === this.$options.hostName ? t : this._getHostInstance(t.$parentInstance) : t.$parentInstance : void 0;
    },
    _getPropValue: function(t) {
      var o;
      return this[t] || ((o = this._getHostInstance(this)) === null || o === void 0 ? void 0 : o[t]);
    },
    _getOptionValue: function(t) {
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return Us(t, o, r);
    },
    _getPTValue: function() {
      var t, o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, s = /./g.test(r) && !!n[r.split(".")[0]], a = this._getPropValue("ptOptions") || ((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.ptOptions) || {}, c = a.mergeSections, l = c === void 0 ? !0 : c, u = a.mergeProps, d = u === void 0 ? !1 : u, f = i ? s ? this._useGlobalPT(this._getPTClassValue, r, n) : this._useDefaultPT(this._getPTClassValue, r, n) : void 0, h = s ? void 0 : this._getPTSelf(o, this._getPTClassValue, r, le(le({}, n), {}, {
        global: f || {}
      })), g = this._getPTDatasets(r);
      return l || !l && h ? d ? this._mergeProps(d, f, h, g) : le(le(le({}, f), h), g) : le(le({}, h), g);
    },
    _getPTSelf: function() {
      for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length, r = new Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++)
        r[n - 1] = arguments[n];
      return ce(
        this._usePT.apply(this, [this._getPT(t, this.$name)].concat(r)),
        // Exp; <component :pt="{}"
        this._usePT.apply(this, [this.$_attrsPT].concat(r))
        // Exp; <component :pt:[passthrough_key]:[attribute]="{value}" or <component :pt:[passthrough_key]="() =>{value}"
      );
    },
    _getPTDatasets: function() {
      var t, o, r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", n = "data-pc-", i = r === "root" && Ce((t = this.pt) === null || t === void 0 ? void 0 : t["data-pc-section"]);
      return r !== "transition" && le(le({}, r === "root" && le(vn({}, "".concat(n, "name"), yt(i ? (o = this.pt) === null || o === void 0 ? void 0 : o["data-pc-section"] : this.$.type.name)), i && vn({}, "".concat(n, "extend"), yt(this.$.type.name)))), {}, vn({}, "".concat(n, "section"), yt(r)));
    },
    _getPTClassValue: function() {
      var t = this._getOptionValue.apply(this, arguments);
      return Xe(t) || Hs(t) ? {
        class: t
      } : t;
    },
    _getPT: function(t) {
      var o = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, i = function(a) {
        var c, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = n ? n(a) : a, d = yt(r), f = yt(o.$name);
        return (c = l ? d !== f ? u == null ? void 0 : u[d] : void 0 : u == null ? void 0 : u[d]) !== null && c !== void 0 ? c : u;
      };
      return t != null && t.hasOwnProperty("_usept") ? {
        _usept: t._usept,
        originalValue: i(t.originalValue),
        value: i(t.value)
      } : i(t, !0);
    },
    _usePT: function(t, o, r, n) {
      var i = function(b) {
        return o(b, r, n);
      };
      if (t != null && t.hasOwnProperty("_usept")) {
        var s, a = t._usept || ((s = this.$primevueConfig) === null || s === void 0 ? void 0 : s.ptOptions) || {}, c = a.mergeSections, l = c === void 0 ? !0 : c, u = a.mergeProps, d = u === void 0 ? !1 : u, f = i(t.originalValue), h = i(t.value);
        return f === void 0 && h === void 0 ? void 0 : Xe(h) ? h : Xe(f) ? f : l || !l && h ? d ? this._mergeProps(d, f, h) : le(le({}, f), h) : h;
      }
      return i(t);
    },
    _useGlobalPT: function(t, o, r) {
      return this._usePT(this.globalPT, t, o, r);
    },
    _useDefaultPT: function(t, o, r) {
      return this._usePT(this.defaultPT, t, o, r);
    },
    ptm: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this._getPTValue(this.pt, t, le(le({}, this.$params), o));
    },
    ptmi: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return ce(this.$_attrsWithoutPT, this.ptm(t, o));
    },
    ptmo: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      return this._getPTValue(t, o, le({
        instance: this
      }, r), !1);
    },
    cx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return this.isUnstyled ? void 0 : this._getOptionValue(this.$style.classes, t, le(le({}, this.$params), o));
    },
    sx: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (o) {
        var n = this._getOptionValue(this.$style.inlineStyles, t, le(le({}, this.$params), r)), i = this._getOptionValue(uc.inlineStyles, t, le(le({}, this.$params), r));
        return [i, n];
      }
    }
  },
  computed: {
    globalPT: function() {
      var t, o = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return pt(r, {
          instance: o
        });
      });
    },
    defaultPT: function() {
      var t, o = this;
      return this._getPT((t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.pt, void 0, function(r) {
        return o._getOptionValue(r, o.$name, le({}, o.$params)) || pt(r, le({}, o.$params));
      });
    },
    isUnstyled: function() {
      var t;
      return this.unstyled !== void 0 ? this.unstyled : (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.unstyled;
    },
    $theme: function() {
      var t;
      return (t = this.$primevueConfig) === null || t === void 0 ? void 0 : t.theme;
    },
    $style: function() {
      return le(le({
        classes: void 0,
        inlineStyles: void 0,
        load: function() {
        },
        loadCSS: function() {
        },
        loadTheme: function() {
        }
      }, (this._getHostInstance(this) || {}).$style), this.$options.style);
    },
    $styleOptions: function() {
      var t;
      return {
        nonce: (t = this.$primevueConfig) === null || t === void 0 || (t = t.csp) === null || t === void 0 ? void 0 : t.nonce
      };
    },
    $primevueConfig: function() {
      var t;
      return (t = this.$primevue) === null || t === void 0 ? void 0 : t.config;
    },
    $name: function() {
      return this.$options.hostName || this.$.type.name;
    },
    $params: function() {
      var t = this._getHostInstance(this) || this.$parent;
      return {
        instance: this,
        props: this.$props,
        state: this.$data,
        attrs: this.$attrs,
        parent: {
          instance: t,
          props: t == null ? void 0 : t.$props,
          state: t == null ? void 0 : t.$data,
          attrs: t == null ? void 0 : t.$attrs
        }
      };
    },
    $_attrsPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var o = en(t, 1), r = o[0];
        return r == null ? void 0 : r.startsWith("pt:");
      }).reduce(function(t, o) {
        var r = en(o, 2), n = r[0], i = r[1], s = n.split(":"), a = yb(s), c = a.slice(1);
        return c == null || c.reduce(function(l, u, d, f) {
          return !l[u] && (l[u] = d === f.length - 1 ? i : {}), l[u];
        }, t), t;
      }, {});
    },
    $_attrsWithoutPT: function() {
      return Object.entries(this.$attrs || {}).filter(function(t) {
        var o = en(t, 1), r = o[0];
        return !(r != null && r.startsWith("pt:"));
      }).reduce(function(t, o) {
        var r = en(o, 2), n = r[0], i = r[1];
        return t[n] = i, t;
      }, {});
    },
    $attrSelector: function() {
      return An("pc");
    }
  }
}, Eb = `
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`, Cb = Ie.extend({
  name: "baseicon",
  css: Eb
});
function $r(e) {
  "@babel/helpers - typeof";
  return $r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $r(e);
}
function pc(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function hc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pc(Object(o), !0).forEach(function(r) {
      Sb(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : pc(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function Sb(e, t, o) {
  return (t = Ob(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function Ob(e) {
  var t = Nb(e, "string");
  return $r(t) == "symbol" ? t : t + "";
}
function Nb(e, t) {
  if ($r(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if ($r(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var zs = {
  name: "BaseIcon",
  extends: ei,
  props: {
    label: {
      type: String,
      default: void 0
    },
    spin: {
      type: Boolean,
      default: !1
    }
  },
  style: Cb,
  provide: function() {
    return {
      $pcIcon: this,
      $parentInstance: this
    };
  },
  methods: {
    pti: function() {
      var t = uo(this.label);
      return hc(hc({}, !this.isUnstyled && {
        class: ["p-icon", {
          "p-icon-spin": this.spin
        }]
      }), {}, {
        role: t ? void 0 : "img",
        "aria-label": t ? void 0 : this.label,
        "aria-hidden": t
      });
    }
  }
}, Au = {
  name: "BarsIcon",
  extends: zs
}, Ib = /* @__PURE__ */ Se("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z",
  fill: "currentColor"
}, null, -1), Rb = [Ib];
function $b(e, t, o, r, n, i) {
  return U(), Q("svg", ce({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Rb, 16);
}
Au.render = $b;
var Pb = function(t) {
  var o = t.dt;
  return `
.p-menubar {
    display: flex;
    align-items: center;
    background: `.concat(o("menubar.background"), `;
    border: 1px solid `).concat(o("menubar.border.color"), `;
    border-radius: `).concat(o("menubar.border.radius"), `;
    color: `).concat(o("menubar.color"), `;
    padding: `).concat(o("menubar.padding"), `;
    gap: `).concat(o("menubar.gap"), `;
}

.p-menubar-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-menubar-root-list,
.p-menubar-submenu {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
}

.p-menubar-root-list {
    align-items: center;
    flex-wrap: wrap;
    gap: `).concat(o("menubar.gap"), `;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(o("menubar.base.item.border.radius"), `;
}

.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(o("menubar.base.item.padding"), `;
}

.p-menubar-item-content {
    transition: background `).concat(o("menubar.transition.duration"), ", color ").concat(o("menubar.transition.duration"), `;
    border-radius: `).concat(o("menubar.item.border.radius"), `;
    color: `).concat(o("menubar.item.color"), `;
}

.p-menubar-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: `).concat(o("menubar.item.padding"), `;
    gap: `).concat(o("menubar.item.gap"), `;
    user-select: none;
    outline: 0 none;
}

.p-menubar-item-label {
    line-height: 1;
}

.p-menubar-item-icon {
    color: `).concat(o("menubar.item.icon.color"), `;
}

.p-menubar-submenu-icon {
    color: `).concat(o("menubar.submenu.icon.color"), `;
    margin-left: auto;
    font-size: `).concat(o("menubar.submenu.icon.size"), `;
    width: `).concat(o("menubar.submenu.icon.size"), `;
    height: `).concat(o("menubar.submenu.icon.size"), `;
}

.p-menubar-item.p-focus > .p-menubar-item-content {
    color: `).concat(o("menubar.item.focus.color"), `;
    background: `).concat(o("menubar.item.focus.background"), `;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(o("menubar.item.icon.focus.color"), `;
}

.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(o("menubar.submenu.icon.focus.color"), `;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
    color: `).concat(o("menubar.item.focus.color"), `;
    background: `).concat(o("menubar.item.focus.background"), `;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
    color: `).concat(o("menubar.item.icon.focus.color"), `;
}

.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
    color: `).concat(o("menubar.submenu.icon.focus.color"), `;
}

.p-menubar-item-active > .p-menubar-item-content {
    color: `).concat(o("menubar.item.active.color"), `;
    background: `).concat(o("menubar.item.active.background"), `;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
    color: `).concat(o("menubar.item.icon.active.color"), `;
}

.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    color: `).concat(o("menubar.submenu.icon.active.color"), `;
}

.p-menubar-submenu {
    display: none;
    position: absolute;
    min-width: 12.5rem;
    z-index: 1;
    background: `).concat(o("menubar.submenu.background"), `;
    border: 1px solid `).concat(o("menubar.submenu.border.color"), `;
    border-radius: `).concat(o("menubar.border.radius"), `;
    box-shadow: `).concat(o("menubar.submenu.shadow"), `;
    color: `).concat(o("menubar.submenu.color"), `;
    flex-direction: column;
    padding: `).concat(o("menubar.submenu.padding"), `;
    gap: `).concat(o("menubar.submenu.gap"), `;
}

.p-menubar-submenu .p-menubar-separator {
    border-top: 1px solid `).concat(o("menubar.separator.border.color"), `;
}

.p-menubar-submenu .p-menubar-item {
    position: relative;
}

 .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
    display: block;
    left: 100%;
    top: 0;
}

.p-menubar-end {
    margin-left: auto;
    align-self: center;
}

.p-menubar-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: `).concat(o("menubar.mobile.button.size"), `;
    height: `).concat(o("menubar.mobile.button.size"), `;
    position: relative;
    color: `).concat(o("menubar.mobile.button.color"), `;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(o("menubar.mobile.button.border.radius"), `;
    transition: background `).concat(o("menubar.transition.duration"), ", color ").concat(o("menubar.transition.duration"), ", outline-color ").concat(o("menubar.transition.duration"), `;
    outline-color: transparent;
}

.p-menubar-button:hover {
    color: `).concat(o("menubar.mobile.button.hover.color"), `;
    background: `).concat(o("menubar.mobile.button.hover.background"), `;
}

.p-menubar-button:focus-visible {
    box-shadow: `).concat(o("menubar.mobile.button.focus.ring.shadow"), `;
    outline: `).concat(o("menubar.mobile.button.focus.ring.width"), " ").concat(o("menubar.mobile.button.focus.ring.style"), " ").concat(o("menubar.mobile.button.focus.ring.color"), `;
    outline-offset: `).concat(o("menubar.mobile.button.focus.ring.offset"), `;
}

.p-menubar-mobile {
    position: relative;
}

.p-menubar-mobile .p-menubar-button {
    display: flex;
}

.p-menubar-mobile .p-menubar-root-list {
    position: absolute;
    display: none;
    width: 100%;
    padding: `).concat(o("menubar.submenu.padding"), `;
    background: `).concat(o("menubar.submenu.background"), `;
    border: 1px solid `).concat(o("menubar.submenu.border.color"), `;
    box-shadow: `).concat(o("menubar.submenu.shadow"), `;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
    border-radius: `).concat(o("menubar.item.border.radius"), `;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
    padding: `).concat(o("menubar.item.padding"), `;
}

.p-menubar-mobile-active .p-menubar-root-list {
    display: flex;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-item {
    width: 100%;
    position: static;
}

.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
    border-top: 1px solid `).concat(o("menubar.separator.border.color"), `;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-180deg);
}

.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-menubar-mobile  .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
    transform: rotate(-90deg);
}

.p-menubar-mobile .p-menubar-submenu {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-left: `).concat(o("menubar.submenu.mobile.indent"), `;
}
`);
}, Tb = {
  submenu: function(t) {
    var o = t.instance, r = t.processedItem;
    return {
      display: o.isItemActive(r) ? "flex" : "none"
    };
  }
}, Bb = {
  root: function(t) {
    var o = t.instance;
    return ["p-menubar p-component", {
      "p-menubar-mobile": o.queryMatches,
      "p-menubar-mobile-active": o.mobileActive
    }];
  },
  start: "p-menubar-start",
  button: "p-menubar-button",
  rootList: "p-menubar-root-list",
  item: function(t) {
    var o = t.instance, r = t.processedItem;
    return ["p-menubar-item", {
      "p-menubar-item-active": o.isItemActive(r),
      "p-focus": o.isItemFocused(r),
      "p-disabled": o.isItemDisabled(r)
    }];
  },
  itemContent: "p-menubar-item-content",
  itemLink: "p-menubar-item-link",
  itemIcon: "p-menubar-item-icon",
  itemLabel: "p-menubar-item-label",
  submenuIcon: "p-menubar-submenu-icon",
  submenu: "p-menubar-submenu",
  separator: "p-menubar-separator",
  end: "p-menubar-end"
}, Db = Ie.extend({
  name: "menubar",
  theme: Pb,
  classes: Bb,
  inlineStyles: Tb
}), Vu = {
  name: "AngleDownIcon",
  extends: zs
}, Ab = /* @__PURE__ */ Se("path", {
  d: "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z",
  fill: "currentColor"
}, null, -1), Vb = [Ab];
function Lb(e, t, o, r, n, i) {
  return U(), Q("svg", ce({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Vb, 16);
}
Vu.render = Lb;
var Lu = {
  name: "AngleRightIcon",
  extends: zs
}, jb = /* @__PURE__ */ Se("path", {
  d: "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z",
  fill: "currentColor"
}, null, -1), Mb = [jb];
function Fb(e, t, o, r, n, i) {
  return U(), Q("svg", ce({
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, e.pti()), Mb, 16);
}
Lu.render = Fb;
var Ub = {
  name: "BaseMenubar",
  extends: ei,
  props: {
    model: {
      type: Array,
      default: null
    },
    buttonProps: {
      type: null,
      default: null
    },
    breakpoint: {
      type: String,
      default: "960px"
    },
    ariaLabelledby: {
      type: String,
      default: null
    },
    ariaLabel: {
      type: String,
      default: null
    }
  },
  style: Db,
  provide: function() {
    return {
      $pcMenubar: this,
      $parentInstance: this
    };
  }
}, ju = {
  name: "MenubarSub",
  hostName: "Menubar",
  extends: ei,
  emits: ["item-mouseenter", "item-click", "item-mousemove"],
  props: {
    items: {
      type: Array,
      default: null
    },
    root: {
      type: Boolean,
      default: !1
    },
    popup: {
      type: Boolean,
      default: !1
    },
    mobileActive: {
      type: Boolean,
      default: !1
    },
    templates: {
      type: Object,
      default: null
    },
    level: {
      type: Number,
      default: 0
    },
    menuId: {
      type: String,
      default: null
    },
    focusedItemId: {
      type: String,
      default: null
    },
    activeItemPath: {
      type: Object,
      default: null
    }
  },
  list: null,
  methods: {
    getItemId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key);
    },
    getItemKey: function(t) {
      return this.getItemId(t);
    },
    getItemProp: function(t, o, r) {
      return t && t.item ? pt(t.item[o], r) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    getItemLabelId: function(t) {
      return "".concat(this.menuId, "_").concat(t.key, "_label");
    },
    getPTOptions: function(t, o, r) {
      return this.ptm(r, {
        context: {
          item: t,
          index: o,
          active: this.isItemActive(t),
          focused: this.isItemFocused(t),
          disabled: this.isItemDisabled(t),
          level: this.level
        }
      });
    },
    isItemActive: function(t) {
      return this.activeItemPath.some(function(o) {
        return o.key === t.key;
      });
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemFocused: function(t) {
      return this.focusedItemId === this.getItemId(t);
    },
    isItemGroup: function(t) {
      return Ce(t.items);
    },
    onItemClick: function(t, o) {
      this.getItemProp(o, "command", {
        originalEvent: t,
        item: o.item
      }), this.$emit("item-click", {
        originalEvent: t,
        processedItem: o,
        isFocus: !0
      });
    },
    onItemMouseEnter: function(t, o) {
      this.$emit("item-mouseenter", {
        originalEvent: t,
        processedItem: o
      });
    },
    onItemMouseMove: function(t, o) {
      this.$emit("item-mousemove", {
        originalEvent: t,
        processedItem: o
      });
    },
    getAriaSetSize: function() {
      var t = this;
      return this.items.filter(function(o) {
        return t.isItemVisible(o) && !t.getItemProp(o, "separator");
      }).length;
    },
    getAriaPosInset: function(t) {
      var o = this;
      return t - this.items.slice(0, t).filter(function(r) {
        return o.isItemVisible(r) && o.getItemProp(r, "separator");
      }).length + 1;
    },
    getMenuItemProps: function(t, o) {
      return {
        action: ce({
          class: this.cx("itemLink"),
          tabindex: -1,
          "aria-hidden": !0
        }, this.getPTOptions(t, o, "itemLink")),
        icon: ce({
          class: [this.cx("itemIcon"), this.getItemProp(t, "icon")]
        }, this.getPTOptions(t, o, "itemIcon")),
        label: ce({
          class: this.cx("itemLabel")
        }, this.getPTOptions(t, o, "itemLabel")),
        submenuicon: ce({
          class: this.cx("submenuIcon")
        }, this.getPTOptions(t, o, "submenuIcon"))
      };
    }
  },
  components: {
    AngleRightIcon: Lu,
    AngleDownIcon: Vu
  },
  directives: {
    ripple: Pu
  }
}, Hb = ["id", "aria-label", "aria-disabled", "aria-expanded", "aria-haspopup", "aria-level", "aria-setsize", "aria-posinset", "data-p-active", "data-p-focused", "data-p-disabled"], zb = ["onClick", "onMouseenter", "onMousemove"], Wb = ["href", "target"], Kb = ["id"], qb = ["id"];
function Gb(e, t, o, r, n, i) {
  var s = Ko("MenubarSub", !0), a = lp("ripple");
  return U(), Q("ul", ce({
    class: o.level === 0 ? e.cx("rootList") : e.cx("submenu")
  }, o.level === 0 ? e.ptm("rootList") : e.ptm("submenu")), [(U(!0), Q(we, null, Wt(o.items, function(c, l) {
    return U(), Q(we, {
      key: i.getItemKey(c)
    }, [i.isItemVisible(c) && !i.getItemProp(c, "separator") ? (U(), Q("li", ce({
      key: 0,
      id: i.getItemId(c),
      style: i.getItemProp(c, "style"),
      class: [e.cx("item", {
        processedItem: c
      }), i.getItemProp(c, "class")],
      role: "menuitem",
      "aria-label": i.getItemLabel(c),
      "aria-disabled": i.isItemDisabled(c) || void 0,
      "aria-expanded": i.isItemGroup(c) ? i.isItemActive(c) : void 0,
      "aria-haspopup": i.isItemGroup(c) && !i.getItemProp(c, "to") ? "menu" : void 0,
      "aria-level": o.level + 1,
      "aria-setsize": i.getAriaSetSize(),
      "aria-posinset": i.getAriaPosInset(l),
      ref_for: !0
    }, i.getPTOptions(c, l, "item"), {
      "data-p-active": i.isItemActive(c),
      "data-p-focused": i.isItemFocused(c),
      "data-p-disabled": i.isItemDisabled(c)
    }), [Se("div", ce({
      class: e.cx("itemContent"),
      onClick: function(d) {
        return i.onItemClick(d, c);
      },
      onMouseenter: function(d) {
        return i.onItemMouseEnter(d, c);
      },
      onMousemove: function(d) {
        return i.onItemMouseMove(d, c);
      },
      ref_for: !0
    }, i.getPTOptions(c, l, "itemContent")), [o.templates.item ? (U(), Je(Yr(o.templates.item), {
      key: 1,
      item: c.item,
      root: o.root,
      hasSubmenu: i.getItemProp(c, "items"),
      label: i.getItemLabel(c),
      props: i.getMenuItemProps(c, l)
    }, null, 8, ["item", "root", "hasSubmenu", "label", "props"])) : cn((U(), Q("a", ce({
      key: 0,
      href: i.getItemProp(c, "url"),
      class: e.cx("itemLink"),
      target: i.getItemProp(c, "target"),
      tabindex: "-1",
      "aria-hidden": "true",
      ref_for: !0
    }, i.getPTOptions(c, l, "itemLink")), [o.templates.itemicon ? (U(), Je(Yr(o.templates.itemicon), {
      key: 0,
      item: c.item,
      class: dt(e.cx("itemIcon"))
    }, null, 8, ["item", "class"])) : i.getItemProp(c, "icon") ? (U(), Q("span", ce({
      key: 1,
      class: [e.cx("itemIcon"), i.getItemProp(c, "icon")],
      ref_for: !0
    }, i.getPTOptions(c, l, "itemIcon")), null, 16)) : ze("", !0), Se("span", ce({
      id: i.getItemLabelId(c),
      class: e.cx("itemLabel"),
      ref_for: !0
    }, i.getPTOptions(c, l, "itemLabel")), ct(i.getItemLabel(c)), 17, Kb), i.getItemProp(c, "items") ? (U(), Q(we, {
      key: 2
    }, [o.templates.submenuicon ? (U(), Je(Yr(o.templates.submenuicon), {
      key: 0,
      root: o.root,
      active: i.isItemActive(c),
      class: dt(e.cx("submenuIcon"))
    }, null, 8, ["root", "active", "class"])) : (U(), Je(Yr(o.root ? "AngleDownIcon" : "AngleRightIcon"), ce({
      key: 1,
      class: e.cx("submenuIcon"),
      ref_for: !0
    }, i.getPTOptions(c, l, "submenuIcon")), null, 16, ["class"]))], 64)) : ze("", !0)], 16, Wb)), [[a]])], 16, zb), i.isItemVisible(c) && i.isItemGroup(c) ? (U(), Je(s, {
      key: 0,
      id: i.getItemId(c) + "_list",
      menuId: o.menuId,
      role: "menu",
      style: Ar(e.sx("submenu", !0, {
        processedItem: c
      })),
      focusedItemId: o.focusedItemId,
      items: c.items,
      mobileActive: o.mobileActive,
      activeItemPath: o.activeItemPath,
      templates: o.templates,
      level: o.level + 1,
      "aria-labelledby": i.getItemLabelId(c),
      pt: e.pt,
      unstyled: e.unstyled,
      onItemClick: t[0] || (t[0] = function(u) {
        return e.$emit("item-click", u);
      }),
      onItemMouseenter: t[1] || (t[1] = function(u) {
        return e.$emit("item-mouseenter", u);
      }),
      onItemMousemove: t[2] || (t[2] = function(u) {
        return e.$emit("item-mousemove", u);
      })
    }, null, 8, ["id", "menuId", "style", "focusedItemId", "items", "mobileActive", "activeItemPath", "templates", "level", "aria-labelledby", "pt", "unstyled"])) : ze("", !0)], 16, Hb)) : ze("", !0), i.isItemVisible(c) && i.getItemProp(c, "separator") ? (U(), Q("li", ce({
      key: 1,
      id: i.getItemId(c),
      class: [e.cx("separator"), i.getItemProp(c, "class")],
      style: i.getItemProp(c, "style"),
      role: "separator",
      ref_for: !0
    }, e.ptm("separator")), null, 16, qb)) : ze("", !0)], 64);
  }), 128))], 16);
}
ju.render = Gb;
var Mu = {
  name: "Menubar",
  extends: Ub,
  inheritAttrs: !1,
  emits: ["focus", "blur"],
  matchMediaListener: null,
  data: function() {
    return {
      id: this.$attrs.id,
      mobileActive: !1,
      focused: !1,
      focusedItemInfo: {
        index: -1,
        level: 0,
        parentKey: ""
      },
      activeItemPath: [],
      dirty: !1,
      query: null,
      queryMatches: !1
    };
  },
  watch: {
    "$attrs.id": function(t) {
      this.id = t || An();
    },
    activeItemPath: function(t) {
      Ce(t) ? (this.bindOutsideClickListener(), this.bindResizeListener()) : (this.unbindOutsideClickListener(), this.unbindResizeListener());
    }
  },
  outsideClickListener: null,
  container: null,
  menubar: null,
  mounted: function() {
    this.id = this.id || An(), this.bindMatchMediaListener();
  },
  beforeUnmount: function() {
    this.mobileActive = !1, this.unbindOutsideClickListener(), this.unbindResizeListener(), this.unbindMatchMediaListener(), this.container && xi.clear(this.container), this.container = null;
  },
  methods: {
    getItemProp: function(t, o) {
      return t ? pt(t[o]) : void 0;
    },
    getItemLabel: function(t) {
      return this.getItemProp(t, "label");
    },
    isItemDisabled: function(t) {
      return this.getItemProp(t, "disabled");
    },
    isItemVisible: function(t) {
      return this.getItemProp(t, "visible") !== !1;
    },
    isItemGroup: function(t) {
      return Ce(this.getItemProp(t, "items"));
    },
    isItemSeparator: function(t) {
      return this.getItemProp(t, "separator");
    },
    getProccessedItemLabel: function(t) {
      return t ? this.getItemLabel(t.item) : void 0;
    },
    isProccessedItemGroup: function(t) {
      return t && Ce(t.items);
    },
    toggle: function(t) {
      var o = this;
      this.mobileActive ? (this.mobileActive = !1, xi.clear(this.menubar), this.hide()) : (this.mobileActive = !0, xi.set("menu", this.menubar, this.$primevue.config.zIndex.menu), setTimeout(function() {
        o.show();
      }, 1)), this.bindOutsideClickListener(), t.preventDefault();
    },
    show: function() {
      Mo(this.menubar);
    },
    hide: function(t, o) {
      var r = this;
      this.mobileActive && (this.mobileActive = !1, setTimeout(function() {
        Mo(r.$refs.menubutton);
      }, 0)), this.activeItemPath = [], this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, o && Mo(this.menubar), this.dirty = !1;
    },
    onFocus: function(t) {
      this.focused = !0, this.focusedItemInfo = this.focusedItemInfo.index !== -1 ? this.focusedItemInfo : {
        index: this.findFirstFocusedItemIndex(),
        level: 0,
        parentKey: ""
      }, this.$emit("focus", t);
    },
    onBlur: function(t) {
      this.focused = !1, this.focusedItemInfo = {
        index: -1,
        level: 0,
        parentKey: ""
      }, this.searchValue = "", this.dirty = !1, this.$emit("blur", t);
    },
    onKeyDown: function(t) {
      var o = t.metaKey || t.ctrlKey;
      switch (t.code) {
        case "ArrowDown":
          this.onArrowDownKey(t);
          break;
        case "ArrowUp":
          this.onArrowUpKey(t);
          break;
        case "ArrowLeft":
          this.onArrowLeftKey(t);
          break;
        case "ArrowRight":
          this.onArrowRightKey(t);
          break;
        case "Home":
          this.onHomeKey(t);
          break;
        case "End":
          this.onEndKey(t);
          break;
        case "Space":
          this.onSpaceKey(t);
          break;
        case "Enter":
        case "NumpadEnter":
          this.onEnterKey(t);
          break;
        case "Escape":
          this.onEscapeKey(t);
          break;
        case "Tab":
          this.onTabKey(t);
          break;
        case "PageDown":
        case "PageUp":
        case "Backspace":
        case "ShiftLeft":
        case "ShiftRight":
          break;
        default:
          !o && Sm(t.key) && this.searchItems(t, t.key);
          break;
      }
    },
    onItemChange: function(t) {
      var o = t.processedItem, r = t.isFocus;
      if (!uo(o)) {
        var n = o.index, i = o.key, s = o.level, a = o.parentKey, c = o.items, l = Ce(c), u = this.activeItemPath.filter(function(d) {
          return d.parentKey !== a && d.parentKey !== i;
        });
        l && u.push(o), this.focusedItemInfo = {
          index: n,
          level: s,
          parentKey: a
        }, this.activeItemPath = u, l && (this.dirty = !0), r && Mo(this.menubar);
      }
    },
    onItemClick: function(t) {
      var o = t.originalEvent, r = t.processedItem, n = this.isProccessedItemGroup(r), i = uo(r.parent), s = this.isSelected(r);
      if (s) {
        var a = r.index, c = r.key, l = r.level, u = r.parentKey;
        this.activeItemPath = this.activeItemPath.filter(function(f) {
          return c !== f.key && c.startsWith(f.key);
        }), this.focusedItemInfo = {
          index: a,
          level: l,
          parentKey: u
        }, this.dirty = !i, Mo(this.menubar);
      } else if (n)
        this.onItemChange(t);
      else {
        var d = i ? r : this.activeItemPath.find(function(f) {
          return f.parentKey === "";
        });
        this.hide(o), this.changeFocusedItemIndex(o, d ? d.index : -1), this.mobileActive = !1, Mo(this.menubar);
      }
    },
    onItemMouseEnter: function(t) {
      this.dirty && this.onItemChange(t);
    },
    onItemMouseMove: function(t) {
      this.focused && this.changeFocusedItemIndex(t, t.processedItem.index);
    },
    menuButtonClick: function(t) {
      this.toggle(t);
    },
    menuButtonKeydown: function(t) {
      (t.code === "Enter" || t.code === "NumpadEnter" || t.code === "Space") && this.menuButtonClick(t);
    },
    onArrowDownKey: function(t) {
      var o = this.visibleItems[this.focusedItemInfo.index], r = o ? uo(o.parent) : null;
      if (r) {
        var n = this.isProccessedItemGroup(o);
        n && (this.onItemChange({
          originalEvent: t,
          processedItem: o
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: o.key
        }, this.onArrowRightKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i);
      }
      t.preventDefault();
    },
    onArrowUpKey: function(t) {
      var o = this, r = this.visibleItems[this.focusedItemInfo.index], n = uo(r.parent);
      if (n) {
        var i = this.isProccessedItemGroup(r);
        if (i) {
          this.onItemChange({
            originalEvent: t,
            processedItem: r
          }), this.focusedItemInfo = {
            index: -1,
            parentKey: r.key
          };
          var s = this.findLastItemIndex();
          this.changeFocusedItemIndex(t, s);
        }
      } else {
        var a = this.activeItemPath.find(function(l) {
          return l.key === r.parentKey;
        });
        if (this.focusedItemInfo.index === 0)
          this.focusedItemInfo = {
            index: -1,
            parentKey: a ? a.parentKey : ""
          }, this.searchValue = "", this.onArrowLeftKey(t), this.activeItemPath = this.activeItemPath.filter(function(l) {
            return l.parentKey !== o.focusedItemInfo.parentKey;
          });
        else {
          var c = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
          this.changeFocusedItemIndex(t, c);
        }
      }
      t.preventDefault();
    },
    onArrowLeftKey: function(t) {
      var o = this, r = this.visibleItems[this.focusedItemInfo.index], n = r ? this.activeItemPath.find(function(s) {
        return s.key === r.parentKey;
      }) : null;
      if (n)
        this.onItemChange({
          originalEvent: t,
          processedItem: n
        }), this.activeItemPath = this.activeItemPath.filter(function(s) {
          return s.parentKey !== o.focusedItemInfo.parentKey;
        }), t.preventDefault();
      else {
        var i = this.focusedItemInfo.index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo.index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onArrowRightKey: function(t) {
      var o = this.visibleItems[this.focusedItemInfo.index], r = o ? this.activeItemPath.find(function(s) {
        return s.key === o.parentKey;
      }) : null;
      if (r) {
        var n = this.isProccessedItemGroup(o);
        n && (this.onItemChange({
          originalEvent: t,
          processedItem: o
        }), this.focusedItemInfo = {
          index: -1,
          parentKey: o.key
        }, this.onArrowDownKey(t));
      } else {
        var i = this.focusedItemInfo.index !== -1 ? this.findNextItemIndex(this.focusedItemInfo.index) : this.findFirstFocusedItemIndex();
        this.changeFocusedItemIndex(t, i), t.preventDefault();
      }
    },
    onHomeKey: function(t) {
      this.changeFocusedItemIndex(t, this.findFirstItemIndex()), t.preventDefault();
    },
    onEndKey: function(t) {
      this.changeFocusedItemIndex(t, this.findLastItemIndex()), t.preventDefault();
    },
    onEnterKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var o = bn(this.menubar, 'li[id="'.concat("".concat(this.focusedItemId), '"]')), r = o && bn(o, 'a[data-pc-section="itemlink"]');
        r ? r.click() : o && o.click();
        var n = this.visibleItems[this.focusedItemInfo.index], i = this.isProccessedItemGroup(n);
        !i && (this.focusedItemInfo.index = this.findFirstFocusedItemIndex());
      }
      t.preventDefault();
    },
    onSpaceKey: function(t) {
      this.onEnterKey(t);
    },
    onEscapeKey: function(t) {
      if (this.focusedItemInfo.level !== 0) {
        var o = this.focusedItemInfo;
        this.hide(t, !1), this.focusedItemInfo = {
          index: Number(o.parentKey.split("_")[0]),
          level: 0,
          parentKey: ""
        };
      }
      t.preventDefault();
    },
    onTabKey: function(t) {
      if (this.focusedItemInfo.index !== -1) {
        var o = this.visibleItems[this.focusedItemInfo.index], r = this.isProccessedItemGroup(o);
        !r && this.onItemChange({
          originalEvent: t,
          processedItem: o
        });
      }
      this.hide();
    },
    bindOutsideClickListener: function() {
      var t = this;
      this.outsideClickListener || (this.outsideClickListener = function(o) {
        var r = t.container && !t.container.contains(o.target), n = !(t.target && (t.target === o.target || t.target.contains(o.target)));
        r && n && t.hide();
      }, document.addEventListener("click", this.outsideClickListener));
    },
    unbindOutsideClickListener: function() {
      this.outsideClickListener && (document.removeEventListener("click", this.outsideClickListener), this.outsideClickListener = null);
    },
    bindResizeListener: function() {
      var t = this;
      this.resizeListener || (this.resizeListener = function(o) {
        Gm() || t.hide(o, !0), t.mobileActive = !1;
      }, window.addEventListener("resize", this.resizeListener));
    },
    unbindResizeListener: function() {
      this.resizeListener && (window.removeEventListener("resize", this.resizeListener), this.resizeListener = null);
    },
    bindMatchMediaListener: function() {
      var t = this;
      if (!this.matchMediaListener) {
        var o = matchMedia("(max-width: ".concat(this.breakpoint, ")"));
        this.query = o, this.queryMatches = o.matches, this.matchMediaListener = function() {
          t.queryMatches = o.matches, t.mobileActive = !1;
        }, this.query.addEventListener("change", this.matchMediaListener);
      }
    },
    unbindMatchMediaListener: function() {
      this.matchMediaListener && (this.query.removeEventListener("change", this.matchMediaListener), this.matchMediaListener = null);
    },
    isItemMatched: function(t) {
      var o;
      return this.isValidItem(t) && ((o = this.getProccessedItemLabel(t)) === null || o === void 0 ? void 0 : o.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()));
    },
    isValidItem: function(t) {
      return !!t && !this.isItemDisabled(t.item) && !this.isItemSeparator(t.item) && this.isItemVisible(t.item);
    },
    isValidSelectedItem: function(t) {
      return this.isValidItem(t) && this.isSelected(t);
    },
    isSelected: function(t) {
      return this.activeItemPath.some(function(o) {
        return o.key === t.key;
      });
    },
    findFirstItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(o) {
        return t.isValidItem(o);
      });
    },
    findLastItemIndex: function() {
      var t = this;
      return qa(this.visibleItems, function(o) {
        return t.isValidItem(o);
      });
    },
    findNextItemIndex: function(t) {
      var o = this, r = t < this.visibleItems.length - 1 ? this.visibleItems.slice(t + 1).findIndex(function(n) {
        return o.isValidItem(n);
      }) : -1;
      return r > -1 ? r + t + 1 : t;
    },
    findPrevItemIndex: function(t) {
      var o = this, r = t > 0 ? qa(this.visibleItems.slice(0, t), function(n) {
        return o.isValidItem(n);
      }) : -1;
      return r > -1 ? r : t;
    },
    findSelectedItemIndex: function() {
      var t = this;
      return this.visibleItems.findIndex(function(o) {
        return t.isValidSelectedItem(o);
      });
    },
    findFirstFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findFirstItemIndex() : t;
    },
    findLastFocusedItemIndex: function() {
      var t = this.findSelectedItemIndex();
      return t < 0 ? this.findLastItemIndex() : t;
    },
    searchItems: function(t, o) {
      var r = this;
      this.searchValue = (this.searchValue || "") + o;
      var n = -1, i = !1;
      return this.focusedItemInfo.index !== -1 ? (n = this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(s) {
        return r.isItemMatched(s);
      }), n = n === -1 ? this.visibleItems.slice(0, this.focusedItemInfo.index).findIndex(function(s) {
        return r.isItemMatched(s);
      }) : n + this.focusedItemInfo.index) : n = this.visibleItems.findIndex(function(s) {
        return r.isItemMatched(s);
      }), n !== -1 && (i = !0), n === -1 && this.focusedItemInfo.index === -1 && (n = this.findFirstFocusedItemIndex()), n !== -1 && this.changeFocusedItemIndex(t, n), this.searchTimeout && clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout(function() {
        r.searchValue = "", r.searchTimeout = null;
      }, 500), i;
    },
    changeFocusedItemIndex: function(t, o) {
      this.focusedItemInfo.index !== o && (this.focusedItemInfo.index = o, this.scrollInView());
    },
    scrollInView: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : -1, o = t !== -1 ? "".concat(this.id, "_").concat(t) : this.focusedItemId, r = bn(this.menubar, 'li[id="'.concat(o, '"]'));
      r && r.scrollIntoView && r.scrollIntoView({
        block: "nearest",
        inline: "start"
      });
    },
    createProcessedItems: function(t) {
      var o = this, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "", s = [];
      return t && t.forEach(function(a, c) {
        var l = (i !== "" ? i + "_" : "") + c, u = {
          item: a,
          index: c,
          level: r,
          key: l,
          parent: n,
          parentKey: i
        };
        u.items = o.createProcessedItems(a.items, r + 1, u, l), s.push(u);
      }), s;
    },
    containerRef: function(t) {
      this.container = t;
    },
    menubarRef: function(t) {
      this.menubar = t ? t.$el : void 0;
    }
  },
  computed: {
    processedItems: function() {
      return this.createProcessedItems(this.model || []);
    },
    visibleItems: function() {
      var t = this, o = this.activeItemPath.find(function(r) {
        return r.key === t.focusedItemInfo.parentKey;
      });
      return o ? o.items : this.processedItems;
    },
    focusedItemId: function() {
      return this.focusedItemInfo.index !== -1 ? "".concat(this.id).concat(Ce(this.focusedItemInfo.parentKey) ? "_" + this.focusedItemInfo.parentKey : "", "_").concat(this.focusedItemInfo.index) : null;
    }
  },
  components: {
    MenubarSub: ju,
    BarsIcon: Au
  }
};
function Pr(e) {
  "@babel/helpers - typeof";
  return Pr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pr(e);
}
function mc(e, t) {
  var o = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable;
    })), o.push.apply(o, r);
  }
  return o;
}
function gc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mc(Object(o), !0).forEach(function(r) {
      Jb(e, r, o[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : mc(Object(o)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(o, r));
    });
  }
  return e;
}
function Jb(e, t, o) {
  return (t = Yb(t)) in e ? Object.defineProperty(e, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = o, e;
}
function Yb(e) {
  var t = Xb(e, "string");
  return Pr(t) == "symbol" ? t : t + "";
}
function Xb(e, t) {
  if (Pr(e) != "object" || !e) return e;
  var o = e[Symbol.toPrimitive];
  if (o !== void 0) {
    var r = o.call(e, t || "default");
    if (Pr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Qb = ["aria-haspopup", "aria-expanded", "aria-controls", "aria-label"];
function Zb(e, t, o, r, n, i) {
  var s = Ko("BarsIcon"), a = Ko("MenubarSub");
  return U(), Q("div", ce({
    ref: i.containerRef,
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.start ? (U(), Q("div", ce({
    key: 0,
    class: e.cx("start")
  }, e.ptm("start")), [Ft(e.$slots, "start")], 16)) : ze("", !0), Ft(e.$slots, e.$slots.button ? "button" : "menubutton", {
    id: n.id,
    class: dt(e.cx("button")),
    toggleCallback: function(l) {
      return i.menuButtonClick(l);
    }
  }, function() {
    var c;
    return [e.model && e.model.length > 0 ? (U(), Q("a", ce({
      key: 0,
      ref: "menubutton",
      role: "button",
      tabindex: "0",
      class: e.cx("button"),
      "aria-haspopup": !!(e.model.length && e.model.length > 0),
      "aria-expanded": n.mobileActive,
      "aria-controls": n.id,
      "aria-label": (c = e.$primevue.config.locale.aria) === null || c === void 0 ? void 0 : c.navigation,
      onClick: t[0] || (t[0] = function(l) {
        return i.menuButtonClick(l);
      }),
      onKeydown: t[1] || (t[1] = function(l) {
        return i.menuButtonKeydown(l);
      })
    }, gc(gc({}, e.buttonProps), e.ptm("button"))), [Ft(e.$slots, e.$slots.buttonicon ? "buttonicon" : "menubuttonicon", {}, function() {
      return [Pe(s, zd(iu(e.ptm("buttonicon"))), null, 16)];
    })], 16, Qb)) : ze("", !0)];
  }), Pe(a, {
    ref: i.menubarRef,
    id: n.id + "_list",
    role: "menubar",
    items: i.processedItems,
    templates: e.$slots,
    root: !0,
    mobileActive: n.mobileActive,
    tabindex: "0",
    "aria-activedescendant": n.focused ? i.focusedItemId : void 0,
    menuId: n.id,
    focusedItemId: n.focused ? i.focusedItemId : void 0,
    activeItemPath: n.activeItemPath,
    level: 0,
    "aria-labelledby": e.ariaLabelledby,
    "aria-label": e.ariaLabel,
    pt: e.pt,
    unstyled: e.unstyled,
    onFocus: i.onFocus,
    onBlur: i.onBlur,
    onKeydown: i.onKeyDown,
    onItemClick: i.onItemClick,
    onItemMouseenter: i.onItemMouseEnter,
    onItemMousemove: i.onItemMouseMove
  }, null, 8, ["id", "items", "templates", "mobileActive", "aria-activedescendant", "menuId", "focusedItemId", "activeItemPath", "aria-labelledby", "aria-label", "pt", "unstyled", "onFocus", "onBlur", "onKeydown", "onItemClick", "onItemMouseenter", "onItemMousemove"]), e.$slots.end ? (U(), Q("div", ce({
    key: 1,
    class: e.cx("end")
  }, e.ptm("end")), [Ft(e.$slots, "end")], 16)) : ze("", !0)], 16);
}
Mu.render = Zb;
const Fu = "data:image/svg+xml,%3csvg%20class='header__item%20header__main'%20version='1.1'%20id='Слой_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20509.9%20188.5'%20style='enable-background:new%200%200%20509.9%20188.5;width:%20300px;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e.st0{fill:var(--theme_logo_text);}.st1{fill:url(%23SVGID_1_);}%3c/style%3e%3cg%20id='Слой_1_1_'%3e%3cpath%20class='st0'%20d='M148.4,115.5h10c7.9-18.4,11.7-36.5,11.7-72.8V30.3h77.3v85.2h10.2l-5.6,43.3h-20.1v-22.2h-59.3l-4.1,22.2h-20.1L148.4,115.5L148.4,115.5z%20M192.5,51.4v10.8c0,22.5-3.5,38.6-9.6,53.3h41V51.4H192.5z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M350.9,113c0-17.8,13.5-26,32.8-26c8.2,0,14.1,1.4,19.9,3.3v-1.4c0-9.6-5.9-14.9-17.5-14.9c-8.8,0-15,1.7-22.5,4.4l-5.8-17.6c9-3.9,17.8-6.5,31.6-6.5c12.6,0,21.7,3.3,27.5,9.1c6.1,6.1,8.8,15,8.8,26v47.2h-22.3v-8.8c-5.6,6.2-13.4,10.3-24.6,10.3C363.5,138.2,350.9,129.4,350.9,113z%20M403.9,107.9v-4.1c-3.9-1.8-9.1-3-14.7-3c-9.9,0-15.9,3.9-15.9,11.5c0,6.2,5.2,9.9,12.6,9.9C396.6,122.2,403.9,116.3,403.9,107.9z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M459.6,80.8c0,8.5,3.6,13.4,11.2,13.4c6.2,0,11.2-1.7,15.8-3.9V55.2h23.2v81.4h-23.2v-28.4c-5.6,2.7-13.8,5.3-22,5.3c-16.3,0-28.4-9.3-28.4-26.3v-32h23.4V80.8z'%3e%3c/path%3e%3cpath%20class='st0'%20d='M334.5,98c-2.1-1.8-4.5-3.2-7.1-4.1c1.9-1,3.7-2.3,5.2-3.9c3.6-3.7,5.9-8.7,5.9-14.3c0-9.3-6.9-17.8-15.9-20c-3.4-0.8-7.1-0.5-10.6-0.5h-42.1v81.4h50.3c10.3,0,19.5-7.5,21.6-17.6c0.3-1.5,0.5-3,0.4-4.5C342.1,108.2,339.3,102.2,334.5,98z%20M292.6,72h15.6c4.4,0,8.1,3.6,8.1,8.1c0,4.4-3.6,8.1-8.1,8.1h-15.6V72z%20M311.6,121.1h-18.9c0,0,0,0-0.1,0V105c0,0,0,0,0.1,0h18.9c4.4,0,8.1,3.6,8.1,8.1C319.7,117.5,316,121.1,311.6,121.1z'%3e%3c/path%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='48.9124'%20y1='235.6292'%20x2='72.3371'%20y2='23.9901'%20gradientTransform='matrix(1%200%200%20-1%200%20196.6667)'%3e%3cstop%20offset='0'%20style='stop-color:%23FFA90A'%3e%3c/stop%3e%3cstop%20offset='0.2518'%20style='stop-color:%23FFA00D'%3e%3c/stop%3e%3cstop%20offset='0.6689'%20style='stop-color:%23FE8616'%3e%3c/stop%3e%3cstop%20offset='0.9944'%20style='stop-color:%23FE6E1F'%3e%3c/stop%3e%3c/linearGradient%3e%3cpolygon%20class='st1'%20points='123.8,61.8%2075.7,61.8%20107.3,0.6%2045.3,0.6%200.2,97.3%2049.8,97.3%2025.9,188.5%20'%3e%3c/polygon%3e%3c/g%3e%3c/svg%3e";
/*!
  * vue-router v4.4.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const Mt = typeof document < "u";
function ev(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function Ci(e, t) {
  const o = {};
  for (const r in t) {
    const n = t[r];
    o[r] = it(n) ? n.map(e) : e(n);
  }
  return o;
}
const br = () => {
}, it = Array.isArray;
function re(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const Uu = /#/g, tv = /&/g, ov = /\//g, rv = /=/g, nv = /\?/g, Hu = /\+/g, iv = /%5B/g, sv = /%5D/g, zu = /%5E/g, av = /%60/g, Wu = /%7B/g, cv = /%7C/g, Ku = /%7D/g, lv = /%20/g;
function Ws(e) {
  return encodeURI("" + e).replace(cv, "|").replace(iv, "[").replace(sv, "]");
}
function uv(e) {
  return Ws(e).replace(Wu, "{").replace(Ku, "}").replace(zu, "^");
}
function Zi(e) {
  return Ws(e).replace(Hu, "%2B").replace(lv, "+").replace(Uu, "%23").replace(tv, "%26").replace(av, "`").replace(Wu, "{").replace(Ku, "}").replace(zu, "^");
}
function dv(e) {
  return Zi(e).replace(rv, "%3D");
}
function fv(e) {
  return Ws(e).replace(Uu, "%23").replace(nv, "%3F");
}
function pv(e) {
  return e == null ? "" : fv(e).replace(ov, "%2F");
}
function Go(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && re(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const hv = /\/$/, mv = (e) => e.replace(hv, "");
function Si(e, t, o = "/") {
  let r, n = {}, i = "", s = "";
  const a = t.indexOf("#");
  let c = t.indexOf("?");
  return a < c && a >= 0 && (c = -1), c > -1 && (r = t.slice(0, c), i = t.slice(c + 1, a > -1 ? a : t.length), n = e(i)), a > -1 && (r = r || t.slice(0, a), s = t.slice(a, t.length)), r = vv(r ?? t, o), {
    fullPath: r + (i && "?") + i + s,
    path: r,
    query: n,
    hash: Go(s)
  };
}
function gv(e, t) {
  const o = t.query ? e(t.query) : "";
  return t.path + (o && "?") + o + (t.hash || "");
}
function bc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function vc(e, t, o) {
  const r = t.matched.length - 1, n = o.matched.length - 1;
  return r > -1 && r === n && go(t.matched[r], o.matched[n]) && qu(t.params, o.params) && e(t.query) === e(o.query) && t.hash === o.hash;
}
function go(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function qu(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const o in e)
    if (!bv(e[o], t[o]))
      return !1;
  return !0;
}
function bv(e, t) {
  return it(e) ? yc(e, t) : it(t) ? yc(t, e) : e === t;
}
function yc(e, t) {
  return it(t) ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function vv(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return re(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const o = t.split("/"), r = e.split("/"), n = r[r.length - 1];
  (n === ".." || n === ".") && r.push("");
  let i = o.length - 1, s, a;
  for (s = 0; s < r.length; s++)
    if (a = r[s], a !== ".")
      if (a === "..")
        i > 1 && i--;
      else
        break;
  return o.slice(0, i).join("/") + "/" + r.slice(s).join("/");
}
const eo = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var Tr;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Tr || (Tr = {}));
var vr;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(vr || (vr = {}));
function yv(e) {
  if (!e)
    if (Mt) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), mv(e);
}
const _v = /^[^#]+#/;
function wv(e, t) {
  return e.replace(_v, "#") + t;
}
function kv(e, t) {
  const o = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: r.left - o.left - (t.left || 0),
    top: r.top - o.top - (t.top || 0)
  };
}
const ti = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function xv(e) {
  let t;
  if ("el" in e) {
    const o = e.el, r = typeof o == "string" && o.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1))))
      try {
        const i = document.querySelector(e.el);
        if (r && i) {
          re(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        re(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const n = typeof o == "string" ? r ? document.getElementById(o.slice(1)) : document.querySelector(o) : o;
    if (!n) {
      process.env.NODE_ENV !== "production" && re(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = kv(n, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function _c(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const es = /* @__PURE__ */ new Map();
function Ev(e, t) {
  es.set(e, t);
}
function Cv(e) {
  const t = es.get(e);
  return es.delete(e), t;
}
let Sv = () => location.protocol + "//" + location.host;
function Gu(e, t) {
  const { pathname: o, search: r, hash: n } = t, i = e.indexOf("#");
  if (i > -1) {
    let a = n.includes(e.slice(i)) ? e.slice(i).length : 1, c = n.slice(a);
    return c[0] !== "/" && (c = "/" + c), bc(c, "");
  }
  return bc(o, e) + r + n;
}
function Ov(e, t, o, r) {
  let n = [], i = [], s = null;
  const a = ({ state: f }) => {
    const h = Gu(e, location), g = o.value, b = t.value;
    let y = 0;
    if (f) {
      if (o.value = h, t.value = f, s && s === g) {
        s = null;
        return;
      }
      y = b ? f.position - b.position : 0;
    } else
      r(h);
    n.forEach((O) => {
      O(o.value, g, {
        delta: y,
        type: Tr.pop,
        direction: y ? y > 0 ? vr.forward : vr.back : vr.unknown
      });
    });
  };
  function c() {
    s = o.value;
  }
  function l(f) {
    n.push(f);
    const h = () => {
      const g = n.indexOf(f);
      g > -1 && n.splice(g, 1);
    };
    return i.push(h), h;
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState(de({}, f.state, { scroll: ti() }), "");
  }
  function d() {
    for (const f of i)
      f();
    i = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: l,
    destroy: d
  };
}
function wc(e, t, o, r = !1, n = !1) {
  return {
    back: e,
    current: t,
    forward: o,
    replaced: r,
    position: window.history.length,
    scroll: n ? ti() : null
  };
}
function Nv(e) {
  const { history: t, location: o } = window, r = {
    value: Gu(e, o)
  }, n = { value: t.state };
  n.value || i(r.value, {
    back: null,
    current: r.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function i(c, l, u) {
    const d = e.indexOf("#"), f = d > -1 ? (o.host && document.querySelector("base") ? e : e.slice(d)) + c : Sv() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](l, "", f), n.value = l;
    } catch (h) {
      process.env.NODE_ENV !== "production" ? re("Error with push/replace State", h) : console.error(h), o[u ? "replace" : "assign"](f);
    }
  }
  function s(c, l) {
    const u = de({}, t.state, wc(
      n.value.back,
      // keep back and forward entries but override current position
      c,
      n.value.forward,
      !0
    ), l, { position: n.value.position });
    i(c, u, !0), r.value = c;
  }
  function a(c, l) {
    const u = de(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      n.value,
      t.state,
      {
        forward: c,
        scroll: ti()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && re(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), i(u.current, u, !0);
    const d = de({}, wc(r.value, c, null), { position: u.position + 1 }, l);
    i(c, d, !1), r.value = c;
  }
  return {
    location: r,
    state: n,
    push: a,
    replace: s
  };
}
function Iv(e) {
  e = yv(e);
  const t = Nv(e), o = Ov(e, t.state, t.location, t.replace);
  function r(i, s = !0) {
    s || o.pauseListeners(), history.go(i);
  }
  const n = de({
    // it's overridden right after
    location: "",
    base: e,
    go: r,
    createHref: wv.bind(null, e)
  }, t, o);
  return Object.defineProperty(n, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(n, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), n;
}
function Vn(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function Ju(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const ts = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var kc;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(kc || (kc = {}));
const Rv = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Pv(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function Jo(e, t) {
  return process.env.NODE_ENV !== "production" ? de(new Error(Rv[e](t)), {
    type: e,
    [ts]: !0
  }, t) : de(new Error(), {
    type: e,
    [ts]: !0
  }, t);
}
function At(e, t) {
  return e instanceof Error && ts in e && (t == null || !!(e.type & t));
}
const $v = ["params", "query", "hash"];
function Pv(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const o of $v)
    o in e && (t[o] = e[o]);
  return JSON.stringify(t, null, 2);
}
const xc = "[^/]+?", Tv = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Bv = /[.+*?^${}()[\]/\\]/g;
function Dv(e, t) {
  const o = de({}, Tv, t), r = [];
  let n = o.start ? "^" : "";
  const i = [];
  for (const l of e) {
    const u = l.length ? [] : [
      90
      /* PathScore.Root */
    ];
    o.strict && !l.length && (n += "/");
    for (let d = 0; d < l.length; d++) {
      const f = l[d];
      let h = 40 + (o.sensitive ? 0.25 : 0);
      if (f.type === 0)
        d || (n += "/"), n += f.value.replace(Bv, "\\$&"), h += 40;
      else if (f.type === 1) {
        const { value: g, repeatable: b, optional: y, regexp: O } = f;
        i.push({
          name: g,
          repeatable: b,
          optional: y
        });
        const v = O || xc;
        if (v !== xc) {
          h += 10;
          try {
            new RegExp(`(${v})`);
          } catch (L) {
            throw new Error(`Invalid custom RegExp for param "${g}" (${v}): ` + L.message);
          }
        }
        let w = b ? `((?:${v})(?:/(?:${v}))*)` : `(${v})`;
        d || (w = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        y && l.length < 2 ? `(?:/${w})` : "/" + w), y && (w += "?"), n += w, h += 20, y && (h += -8), b && (h += -20), v === ".*" && (h += -50);
      }
      u.push(h);
    }
    r.push(u);
  }
  if (o.strict && o.end) {
    const l = r.length - 1;
    r[l][r[l].length - 1] += 0.7000000000000001;
  }
  o.strict || (n += "/?"), o.end ? n += "$" : o.strict && (n += "(?:/|$)");
  const s = new RegExp(n, o.sensitive ? "" : "i");
  function a(l) {
    const u = l.match(s), d = {};
    if (!u)
      return null;
    for (let f = 1; f < u.length; f++) {
      const h = u[f] || "", g = i[f - 1];
      d[g.name] = h && g.repeatable ? h.split("/") : h;
    }
    return d;
  }
  function c(l) {
    let u = "", d = !1;
    for (const f of e) {
      (!d || !u.endsWith("/")) && (u += "/"), d = !1;
      for (const h of f)
        if (h.type === 0)
          u += h.value;
        else if (h.type === 1) {
          const { value: g, repeatable: b, optional: y } = h, O = g in l ? l[g] : "";
          if (it(O) && !b)
            throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
          const v = it(O) ? O.join("/") : O;
          if (!v)
            if (y)
              f.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : d = !0);
            else
              throw new Error(`Missing required param "${g}"`);
          u += v;
        }
    }
    return u || "/";
  }
  return {
    re: s,
    score: r,
    keys: i,
    parse: a,
    stringify: c
  };
}
function Av(e, t) {
  let o = 0;
  for (; o < e.length && o < t.length; ) {
    const r = t[o] - e[o];
    if (r)
      return r;
    o++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Yu(e, t) {
  let o = 0;
  const r = e.score, n = t.score;
  for (; o < r.length && o < n.length; ) {
    const i = Av(r[o], n[o]);
    if (i)
      return i;
    o++;
  }
  if (Math.abs(n.length - r.length) === 1) {
    if (Ec(r))
      return 1;
    if (Ec(n))
      return -1;
  }
  return n.length - r.length;
}
function Ec(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Vv = {
  type: 0,
  value: ""
}, Lv = /[a-zA-Z0-9_]/;
function jv(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Vv]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(h) {
    throw new Error(`ERR (${o})/"${l}": ${h}`);
  }
  let o = 0, r = o;
  const n = [];
  let i;
  function s() {
    i && n.push(i), i = [];
  }
  let a = 0, c, l = "", u = "";
  function d() {
    l && (o === 0 ? i.push({
      type: 0,
      value: l
    }) : o === 1 || o === 2 || o === 3 ? (i.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), i.push({
      type: 1,
      value: l,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), l = "");
  }
  function f() {
    l += c;
  }
  for (; a < e.length; ) {
    if (c = e[a++], c === "\\" && o !== 2) {
      r = o, o = 4;
      continue;
    }
    switch (o) {
      case 0:
        c === "/" ? (l && d(), s()) : c === ":" ? (d(), o = 1) : f();
        break;
      case 4:
        f(), o = r;
        break;
      case 1:
        c === "(" ? o = 2 : Lv.test(c) ? f() : (d(), o = 0, c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : o = 3 : u += c;
        break;
      case 3:
        d(), o = 0, c !== "*" && c !== "?" && c !== "+" && a--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return o === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), s(), n;
}
function Mv(e, t, o) {
  const r = Dv(jv(e.path), o);
  if (process.env.NODE_ENV !== "production") {
    const i = /* @__PURE__ */ new Set();
    for (const s of r.keys)
      i.has(s.name) && re(`Found duplicated params with name "${s.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), i.add(s.name);
  }
  const n = de(r, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !n.record.aliasOf == !t.record.aliasOf && t.children.push(n), n;
}
function Fv(e, t) {
  const o = [], r = /* @__PURE__ */ new Map();
  t = Oc({ strict: !1, end: !0, sensitive: !1 }, t);
  function n(d) {
    return r.get(d);
  }
  function i(d, f, h) {
    const g = !h, b = Uv(d);
    process.env.NODE_ENV !== "production" && Kv(b, f), b.aliasOf = h && h.record;
    const y = Oc(t, d), O = [
      b
    ];
    if ("alias" in d) {
      const L = typeof d.alias == "string" ? [d.alias] : d.alias;
      for (const H of L)
        O.push(de({}, b, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: h ? h.record.components : b.components,
          path: H,
          // we might be the child of an alias
          aliasOf: h ? h.record : b
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let v, w;
    for (const L of O) {
      const { path: H } = L;
      if (f && H[0] !== "/") {
        const Z = f.record.path, C = Z[Z.length - 1] === "/" ? "" : "/";
        L.path = f.record.path + (H && C + H);
      }
      if (process.env.NODE_ENV !== "production" && L.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (v = Mv(L, f, y), process.env.NODE_ENV !== "production" && f && H[0] === "/" && qv(v, f), h ? (h.alias.push(v), process.env.NODE_ENV !== "production" && Wv(h, v)) : (w = w || v, w !== v && w.alias.push(v), g && d.name && !Sc(v) && s(d.name)), Xu(v) && c(v), b.children) {
        const Z = b.children;
        for (let C = 0; C < Z.length; C++)
          i(Z[C], v, h && h.children[C]);
      }
      h = h || v;
    }
    return w ? () => {
      s(w);
    } : br;
  }
  function s(d) {
    if (Ju(d)) {
      const f = r.get(d);
      f && (r.delete(d), o.splice(o.indexOf(f), 1), f.children.forEach(s), f.alias.forEach(s));
    } else {
      const f = o.indexOf(d);
      f > -1 && (o.splice(f, 1), d.record.name && r.delete(d.record.name), d.children.forEach(s), d.alias.forEach(s));
    }
  }
  function a() {
    return o;
  }
  function c(d) {
    const f = Gv(d, o);
    o.splice(f, 0, d), d.record.name && !Sc(d) && r.set(d.record.name, d);
  }
  function l(d, f) {
    let h, g = {}, b, y;
    if ("name" in d && d.name) {
      if (h = r.get(d.name), !h)
        throw Jo(1, {
          location: d
        });
      if (process.env.NODE_ENV !== "production") {
        const w = Object.keys(d.params || {}).filter((L) => !h.keys.find((H) => H.name === L));
        w.length && re(`Discarded invalid param(s) "${w.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      y = h.record.name, g = de(
        // paramsFromLocation is a new object
        Cc(
          f.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          h.keys.filter((w) => !w.optional).concat(h.parent ? h.parent.keys.filter((w) => w.optional) : []).map((w) => w.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        d.params && Cc(d.params, h.keys.map((w) => w.name))
      ), b = h.stringify(g);
    } else if (d.path != null)
      b = d.path, process.env.NODE_ENV !== "production" && !b.startsWith("/") && re(`The Matcher cannot resolve relative paths but received "${b}". Unless you directly called \`matcher.resolve("${b}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), h = o.find((w) => w.re.test(b)), h && (g = h.parse(b), y = h.record.name);
    else {
      if (h = f.name ? r.get(f.name) : o.find((w) => w.re.test(f.path)), !h)
        throw Jo(1, {
          location: d,
          currentLocation: f
        });
      y = h.record.name, g = de({}, f.params, d.params), b = h.stringify(g);
    }
    const O = [];
    let v = h;
    for (; v; )
      O.unshift(v.record), v = v.parent;
    return {
      name: y,
      path: b,
      params: g,
      matched: O,
      meta: zv(O)
    };
  }
  e.forEach((d) => i(d));
  function u() {
    o.length = 0, r.clear();
  }
  return {
    addRoute: i,
    resolve: l,
    removeRoute: s,
    clearRoutes: u,
    getRoutes: a,
    getRecordMatcher: n
  };
}
function Cc(e, t) {
  const o = {};
  for (const r of t)
    r in e && (o[r] = e[r]);
  return o;
}
function Uv(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Hv(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
}
function Hv(e) {
  const t = {}, o = e.props || !1;
  if ("component" in e)
    t.default = o;
  else
    for (const r in e.components)
      t[r] = typeof o == "object" ? o[r] : o;
  return t;
}
function Sc(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function zv(e) {
  return e.reduce((t, o) => de(t, o.meta), {});
}
function Oc(e, t) {
  const o = {};
  for (const r in e)
    o[r] = r in t ? t[r] : e[r];
  return o;
}
function os(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Wv(e, t) {
  for (const o of e.keys)
    if (!o.optional && !t.keys.find(os.bind(null, o)))
      return re(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`);
  for (const o of t.keys)
    if (!o.optional && !e.keys.find(os.bind(null, o)))
      return re(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${o.name}"`);
}
function Kv(e, t) {
  t && t.record.name && !e.name && !e.path && re(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function qv(e, t) {
  for (const o of t.keys)
    if (!e.keys.find(os.bind(null, o)))
      return re(`Absolute path "${e.record.path}" must have the exact same param named "${o.name}" as its parent "${t.record.path}".`);
}
function Gv(e, t) {
  let o = 0, r = t.length;
  for (; o !== r; ) {
    const i = o + r >> 1;
    Yu(e, t[i]) < 0 ? r = i : o = i + 1;
  }
  const n = Jv(e);
  return n && (r = t.lastIndexOf(n, r - 1), process.env.NODE_ENV !== "production" && r < 0 && re(`Finding ancestor route "${n.record.path}" failed for "${e.record.path}"`)), r;
}
function Jv(e) {
  let t = e;
  for (; t = t.parent; )
    if (Xu(t) && Yu(e, t) === 0)
      return t;
}
function Xu({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Yv(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const r = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let n = 0; n < r.length; ++n) {
    const i = r[n].replace(Hu, " "), s = i.indexOf("="), a = Go(s < 0 ? i : i.slice(0, s)), c = s < 0 ? null : Go(i.slice(s + 1));
    if (a in t) {
      let l = t[a];
      it(l) || (l = t[a] = [l]), l.push(c);
    } else
      t[a] = c;
  }
  return t;
}
function Nc(e) {
  let t = "";
  for (let o in e) {
    const r = e[o];
    if (o = dv(o), r == null) {
      r !== void 0 && (t += (t.length ? "&" : "") + o);
      continue;
    }
    (it(r) ? r.map((i) => i && Zi(i)) : [r && Zi(r)]).forEach((i) => {
      i !== void 0 && (t += (t.length ? "&" : "") + o, i != null && (t += "=" + i));
    });
  }
  return t;
}
function Xv(e) {
  const t = {};
  for (const o in e) {
    const r = e[o];
    r !== void 0 && (t[o] = it(r) ? r.map((n) => n == null ? null : "" + n) : r == null ? r : "" + r);
  }
  return t;
}
const Qv = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Ic = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), oi = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ks = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), rs = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function ir() {
  let e = [];
  function t(r) {
    return e.push(r), () => {
      const n = e.indexOf(r);
      n > -1 && e.splice(n, 1);
    };
  }
  function o() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: o
  };
}
function no(e, t, o, r, n, i = (s) => s()) {
  const s = r && // name is defined if record is because of the function overload
  (r.enterCallbacks[n] = r.enterCallbacks[n] || []);
  return () => new Promise((a, c) => {
    const l = (f) => {
      f === !1 ? c(Jo(4, {
        from: o,
        to: t
      })) : f instanceof Error ? c(f) : Vn(f) ? c(Jo(2, {
        from: t,
        to: f
      })) : (s && // since enterCallbackArray is truthy, both record and name also are
      r.enterCallbacks[n] === s && typeof f == "function" && s.push(f), a());
    }, u = i(() => e.call(r && r.instances[n], t, o, process.env.NODE_ENV !== "production" ? Zv(l, t, o) : l));
    let d = Promise.resolve(u);
    if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const f = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        d = d.then((h) => l._called ? h : (re(f), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !l._called) {
        re(f), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    d.catch((f) => c(f));
  });
}
function Zv(e, t, o) {
  let r = 0;
  return function() {
    r++ === 1 && re(`The "next" callback was called more than once in one navigation guard when going from "${o.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, r === 1 && e.apply(null, arguments);
  };
}
function Oi(e, t, o, r, n = (i) => i()) {
  const i = [];
  for (const s of e) {
    process.env.NODE_ENV !== "production" && !s.components && !s.children.length && re(`Record with path "${s.path}" is either missing a "component(s)" or "children" property.`);
    for (const a in s.components) {
      let c = s.components[a];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw re(`Component "${a}" in record with path "${s.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          re(`Component "${a}" in record with path "${s.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const l = c;
          c = () => l;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, re(`Component "${a}" in record with path "${s.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !s.instances[a]))
        if (ey(c)) {
          const u = (c.__vccOpts || c)[t];
          u && i.push(no(u, o, r, s, a, n));
        } else {
          let l = c();
          process.env.NODE_ENV !== "production" && !("catch" in l) && (re(`Component "${a}" in record with path "${s.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), l = Promise.resolve(l)), i.push(() => l.then((u) => {
            if (!u)
              return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));
            const d = ev(u) ? u.default : u;
            s.components[a] = d;
            const h = (d.__vccOpts || d)[t];
            return h && no(h, o, r, s, a, n)();
          }));
        }
    }
  }
  return i;
}
function ey(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Rc(e) {
  const t = ft(oi), o = ft(Ks);
  let r = !1, n = null;
  const i = tt(() => {
    const u = lt(e.to);
    return process.env.NODE_ENV !== "production" && (!r || u !== n) && (Vn(u) || (r ? re(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, n, `
- props:`, e) : re(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), n = u, r = !0), t.resolve(u);
  }), s = tt(() => {
    const { matched: u } = i.value, { length: d } = u, f = u[d - 1], h = o.matched;
    if (!f || !h.length)
      return -1;
    const g = h.findIndex(go.bind(null, f));
    if (g > -1)
      return g;
    const b = $c(u[d - 2]);
    return (
      // we are dealing with nested routes
      d > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      $c(f) === b && // avoid comparing the child with its parent
      h[h.length - 1].path !== b ? h.findIndex(go.bind(null, u[d - 2])) : g
    );
  }), a = tt(() => s.value > -1 && ry(o.params, i.value.params)), c = tt(() => s.value > -1 && s.value === o.matched.length - 1 && qu(o.params, i.value.params));
  function l(u = {}) {
    return oy(u) ? t[lt(e.replace) ? "replace" : "push"](
      lt(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(br) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Mt) {
    const u = Mr();
    if (u) {
      const d = {
        route: i.value,
        isActive: a.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(d), zp(() => {
        d.route = i.value, d.isActive = a.value, d.isExactActive = c.value, d.error = Vn(lt(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: i,
    href: tt(() => i.value.href),
    isActive: a,
    isExactActive: c,
    navigate: l
  };
}
const ty = /* @__PURE__ */ Bl({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Rc,
  setup(e, { slots: t }) {
    const o = Yo(Rc(e)), { options: r } = ft(oi), n = tt(() => ({
      [Pc(e.activeClass, r.linkActiveClass, "router-link-active")]: o.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Pc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: o.isExactActive
    }));
    return () => {
      const i = t.default && t.default(o);
      return e.custom ? i : uu("a", {
        "aria-current": o.isExactActive ? e.ariaCurrentValue : null,
        href: o.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: o.navigate,
        class: n.value
      }, i);
    };
  }
}), Qu = ty;
function oy(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ry(e, t) {
  for (const o in t) {
    const r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n)
        return !1;
    } else if (!it(n) || n.length !== r.length || r.some((i, s) => i !== n[s]))
      return !1;
  }
  return !0;
}
function $c(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Pc = (e, t, o) => e ?? t ?? o, ny = /* @__PURE__ */ Bl({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: o }) {
    process.env.NODE_ENV !== "production" && sy();
    const r = ft(rs), n = tt(() => e.route || r.value), i = ft(Ic, 0), s = tt(() => {
      let l = lt(i);
      const { matched: u } = n.value;
      let d;
      for (; (d = u[l]) && !d.components; )
        l++;
      return l;
    }), a = tt(() => n.value.matched[s.value]);
    ln(Ic, tt(() => s.value + 1)), ln(Qv, a), ln(rs, n);
    const c = $t();
    return ut(() => [c.value, a.value, e.name], ([l, u, d], [f, h, g]) => {
      u && (u.instances[d] = l, h && h !== u && l && l === f && (u.leaveGuards.size || (u.leaveGuards = h.leaveGuards), u.updateGuards.size || (u.updateGuards = h.updateGuards))), l && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!h || !go(u, h) || !f) && (u.enterCallbacks[d] || []).forEach((b) => b(l));
    }, { flush: "post" }), () => {
      const l = n.value, u = e.name, d = a.value, f = d && d.components[u];
      if (!f)
        return Tc(o.default, { Component: f, route: l });
      const h = d.props[u], g = h ? h === !0 ? l.params : typeof h == "function" ? h(l) : h : null, y = uu(f, de({}, g, t, {
        onVnodeUnmounted: (O) => {
          O.component.isUnmounted && (d.instances[u] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && Mt && y.ref) {
        const O = {
          depth: s.value,
          name: d.name,
          path: d.path,
          meta: d.meta
        };
        (it(y.ref) ? y.ref.map((w) => w.i) : [y.ref.i]).forEach((w) => {
          w.__vrv_devtools = O;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Tc(o.default, { Component: y, route: l }) || y
      );
    };
  }
});
function Tc(e, t) {
  if (!e)
    return null;
  const o = e(t);
  return o.length === 1 ? o[0] : o;
}
const iy = ny;
function sy() {
  const e = Mr(), t = e.parent && e.parent.type.name, o = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof o == "object" && o.name === "RouterView") {
    const r = t === "KeepAlive" ? "keep-alive" : "transition";
    re(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${r}>
    <component :is="Component" />
  </${r}>
</router-view>`);
  }
}
function sr(e, t) {
  const o = de({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((r) => by(r, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: o
    }
  };
}
function tn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let ay = 0;
function cy(e, t, o) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const r = ay++;
  Vs({
    id: "org.vuejs.router" + (r ? "." + r : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (n) => {
    typeof n.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.on.inspectComponent((u, d) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: sr(t.currentRoute.value, "Current Route")
      });
    }), n.on.visitComponentTree(({ treeNode: u, componentInstance: d }) => {
      if (d.__vrv_devtools) {
        const f = d.__vrv_devtools;
        u.tags.push({
          label: (f.name ? `${f.name.toString()}: ` : "") + f.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Zu
        });
      }
      it(d.__vrl_devtools) && (d.__devtoolsApi = n, d.__vrl_devtools.forEach((f) => {
        let h = f.route.path, g = od, b = "", y = 0;
        f.error ? (h = f.error, g = py, y = hy) : f.isExactActive ? (g = td, b = "This is exactly active") : f.isActive && (g = ed, b = "This link is active"), u.tags.push({
          label: h,
          textColor: y,
          tooltip: b,
          backgroundColor: g
        });
      }));
    }), ut(t.currentRoute, () => {
      c(), n.notifyComponentUpdate(), n.sendInspectorTree(a), n.sendInspectorState(a);
    });
    const i = "router:navigations:" + r;
    n.addTimelineLayer({
      id: i,
      label: `Router${r ? " " + r : ""} Navigations`,
      color: 4237508
    }), t.onError((u, d) => {
      n.addTimelineEvent({
        layerId: i,
        event: {
          title: "Error during Navigation",
          subtitle: d.fullPath,
          logType: "error",
          time: n.now(),
          data: { error: u },
          groupId: d.meta.__navigationId
        }
      });
    });
    let s = 0;
    t.beforeEach((u, d) => {
      const f = {
        guard: tn("beforeEach"),
        from: sr(d, "Current Location during this navigation"),
        to: sr(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: s++
      }), n.addTimelineEvent({
        layerId: i,
        event: {
          time: n.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: f,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, d, f) => {
      const h = {
        guard: tn("afterEach")
      };
      f ? (h.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: f ? f.message : "",
          tooltip: "Navigation Failure",
          value: f
        }
      }, h.status = tn("❌")) : h.status = tn("✅"), h.from = sr(d, "Current Location during this navigation"), h.to = sr(u, "Target location"), n.addTimelineEvent({
        layerId: i,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: n.now(),
          data: h,
          logType: f ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const a = "router-inspector:" + r;
    n.addInspector({
      id: a,
      label: "Routes" + (r ? " " + r : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!l)
        return;
      const u = l;
      let d = o.getRoutes().filter((f) => !f.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !f.parent.record.components);
      d.forEach(id), u.filter && (d = d.filter((f) => (
        // save matches state based on the payload
        ns(f, u.filter.toLowerCase())
      ))), d.forEach((f) => nd(f, t.currentRoute.value)), u.rootNodes = d.map(rd);
    }
    let l;
    n.on.getInspectorTree((u) => {
      l = u, u.app === e && u.inspectorId === a && c();
    }), n.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === a) {
        const f = o.getRoutes().find((h) => h.record.__vd_id === u.nodeId);
        f && (u.state = {
          options: uy(f)
        });
      }
    }), n.sendInspectorTree(a), n.sendInspectorState(a);
  });
}
function ly(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function uy(e) {
  const { record: t } = e, o = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && o.push({
    editable: !1,
    key: "name",
    value: t.name
  }), o.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && o.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((r) => `${r.name}${ly(r)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && o.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && o.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((r) => r.record.path)
  }), Object.keys(e.record.meta).length && o.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), o.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((r) => r.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), o;
}
const Zu = 15485081, ed = 2450411, td = 8702998, dy = 2282478, od = 16486972, fy = 6710886, py = 16704226, hy = 12131356;
function rd(e) {
  const t = [], { record: o } = e;
  o.name != null && t.push({
    label: String(o.name),
    textColor: 0,
    backgroundColor: dy
  }), o.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: od
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Zu
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: td
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: ed
  }), o.redirect && t.push({
    label: typeof o.redirect == "string" ? `redirect: ${o.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: fy
  });
  let r = o.__vd_id;
  return r == null && (r = String(my++), o.__vd_id = r), {
    id: r,
    label: o.path,
    tags: t,
    children: e.children.map(rd)
  };
}
let my = 0;
const gy = /^\/(.*)\/([a-z]*)$/;
function nd(e, t) {
  const o = t.matched.length && go(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = o, o || (e.__vd_active = t.matched.some((r) => go(r, e.record))), e.children.forEach((r) => nd(r, t));
}
function id(e) {
  e.__vd_match = !1, e.children.forEach(id);
}
function ns(e, t) {
  const o = String(e.re).match(gy);
  if (e.__vd_match = !1, !o || o.length < 3)
    return !1;
  if (new RegExp(o[1].replace(/\$$/, ""), o[2]).test(t))
    return e.children.forEach((s) => ns(s, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const n = e.record.path.toLowerCase(), i = Go(n);
  return !t.startsWith("/") && (i.includes(t) || n.includes(t)) || i.startsWith(t) || n.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((s) => ns(s, t));
}
function by(e, t) {
  const o = {};
  for (const r in e)
    t.includes(r) || (o[r] = e[r]);
  return o;
}
function vy(e) {
  const t = Fv(e.routes, e), o = e.parseQuery || Yv, r = e.stringifyQuery || Nc, n = e.history;
  if (process.env.NODE_ENV !== "production" && !n)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const i = ir(), s = ir(), a = ir(), c = Ef(eo);
  let l = eo;
  Mt && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Ci.bind(null, (x) => "" + x), d = Ci.bind(null, pv), f = (
    // @ts-expect-error: intentionally avoid the type check
    Ci.bind(null, Go)
  );
  function h(x, V) {
    let A, M;
    return Ju(x) ? (A = t.getRecordMatcher(x), process.env.NODE_ENV !== "production" && !A && re(`Parent route "${String(x)}" not found when adding child route`, V), M = V) : M = x, t.addRoute(M, A);
  }
  function g(x) {
    const V = t.getRecordMatcher(x);
    V ? t.removeRoute(V) : process.env.NODE_ENV !== "production" && re(`Cannot remove non-existent route "${String(x)}"`);
  }
  function b() {
    return t.getRoutes().map((x) => x.record);
  }
  function y(x) {
    return !!t.getRecordMatcher(x);
  }
  function O(x, V) {
    if (V = de({}, V || c.value), typeof x == "string") {
      const p = Si(o, x, V.path), m = t.resolve({ path: p.path }, V), _ = n.createHref(p.fullPath);
      return process.env.NODE_ENV !== "production" && (_.startsWith("//") ? re(`Location "${x}" resolved to "${_}". A resolved location cannot start with multiple slashes.`) : m.matched.length || re(`No match found for location with path "${x}"`)), de(p, m, {
        params: f(m.params),
        hash: Go(p.hash),
        redirectedFrom: void 0,
        href: _
      });
    }
    if (process.env.NODE_ENV !== "production" && !Vn(x))
      return re(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, x), O({});
    let A;
    if (x.path != null)
      process.env.NODE_ENV !== "production" && "params" in x && !("name" in x) && // @ts-expect-error: the type is never
      Object.keys(x.params).length && re(`Path "${x.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), A = de({}, x, {
        path: Si(o, x.path, V.path).path
      });
    else {
      const p = de({}, x.params);
      for (const m in p)
        p[m] == null && delete p[m];
      A = de({}, x, {
        params: d(p)
      }), V.params = d(V.params);
    }
    const M = t.resolve(A, V), ie = x.hash || "";
    process.env.NODE_ENV !== "production" && ie && !ie.startsWith("#") && re(`A \`hash\` should always start with the character "#". Replace "${ie}" with "#${ie}".`), M.params = u(f(M.params));
    const Ee = gv(r, de({}, x, {
      hash: uv(ie),
      path: M.path
    })), oe = n.createHref(Ee);
    return process.env.NODE_ENV !== "production" && (oe.startsWith("//") ? re(`Location "${x}" resolved to "${oe}". A resolved location cannot start with multiple slashes.`) : M.matched.length || re(`No match found for location with path "${x.path != null ? x.path : x}"`)), de({
      fullPath: Ee,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: ie,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        r === Nc ? Xv(x.query) : x.query || {}
      )
    }, M, {
      redirectedFrom: void 0,
      href: oe
    });
  }
  function v(x) {
    return typeof x == "string" ? Si(o, x, c.value.path) : de({}, x);
  }
  function w(x, V) {
    if (l !== x)
      return Jo(8, {
        from: V,
        to: x
      });
  }
  function L(x) {
    return C(x);
  }
  function H(x) {
    return L(de(v(x), { replace: !0 }));
  }
  function Z(x) {
    const V = x.matched[x.matched.length - 1];
    if (V && V.redirect) {
      const { redirect: A } = V;
      let M = typeof A == "function" ? A(x) : A;
      if (typeof M == "string" && (M = M.includes("?") || M.includes("#") ? M = v(M) : (
        // force empty params
        { path: M }
      ), M.params = {}), process.env.NODE_ENV !== "production" && M.path == null && !("name" in M))
        throw re(`Invalid redirect found:
${JSON.stringify(M, null, 2)}
 when navigating to "${x.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return de({
        query: x.query,
        hash: x.hash,
        // avoid transferring params if the redirect has a path
        params: M.path != null ? {} : x.params
      }, M);
    }
  }
  function C(x, V) {
    const A = l = O(x), M = c.value, ie = x.state, Ee = x.force, oe = x.replace === !0, p = Z(A);
    if (p)
      return C(
        de(v(p), {
          state: typeof p == "object" ? de({}, ie, p.state) : ie,
          force: Ee,
          replace: oe
        }),
        // keep original redirectedFrom if it exists
        V || A
      );
    const m = A;
    m.redirectedFrom = V;
    let _;
    return !Ee && vc(r, M, A) && (_ = Jo(16, { to: m, from: M }), Ke(
      M,
      M,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (_ ? Promise.resolve(_) : D(m, M)).catch((E) => At(E) ? (
      // navigation redirects still mark the router as ready
      At(
        E,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? E : We(E)
    ) : (
      // reject any unknown error
      q(E, m, M)
    )).then((E) => {
      if (E) {
        if (At(
          E,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          vc(r, O(E.to), m) && // and we have done it a couple of times
          V && // @ts-expect-error: added only in dev
          (V._count = V._count ? (
            // @ts-expect-error
            V._count + 1
          ) : 1) > 30 ? (re(`Detected a possibly infinite redirection in a navigation guard when going from "${M.fullPath}" to "${m.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : C(
            // keep options
            de({
              // preserve an existing replacement but allow the redirect to override it
              replace: oe
            }, v(E.to), {
              state: typeof E.to == "object" ? de({}, ie, E.to.state) : ie,
              force: Ee
            }),
            // preserve the original redirectedFrom if any
            V || m
          );
      } else
        E = J(m, M, !0, oe, ie);
      return T(m, M, E), E;
    });
  }
  function fe(x, V) {
    const A = w(x, V);
    return A ? Promise.reject(A) : Promise.resolve();
  }
  function ee(x) {
    const V = st.values().next().value;
    return V && typeof V.runWithContext == "function" ? V.runWithContext(x) : x();
  }
  function D(x, V) {
    let A;
    const [M, ie, Ee] = yy(x, V);
    A = Oi(M.reverse(), "beforeRouteLeave", x, V);
    for (const p of M)
      p.leaveGuards.forEach((m) => {
        A.push(no(m, x, V));
      });
    const oe = fe.bind(null, x, V);
    return A.push(oe), Qt(A).then(() => {
      A = [];
      for (const p of i.list())
        A.push(no(p, x, V));
      return A.push(oe), Qt(A);
    }).then(() => {
      A = Oi(ie, "beforeRouteUpdate", x, V);
      for (const p of ie)
        p.updateGuards.forEach((m) => {
          A.push(no(m, x, V));
        });
      return A.push(oe), Qt(A);
    }).then(() => {
      A = [];
      for (const p of Ee)
        if (p.beforeEnter)
          if (it(p.beforeEnter))
            for (const m of p.beforeEnter)
              A.push(no(m, x, V));
          else
            A.push(no(p.beforeEnter, x, V));
      return A.push(oe), Qt(A);
    }).then(() => (x.matched.forEach((p) => p.enterCallbacks = {}), A = Oi(Ee, "beforeRouteEnter", x, V, ee), A.push(oe), Qt(A))).then(() => {
      A = [];
      for (const p of s.list())
        A.push(no(p, x, V));
      return A.push(oe), Qt(A);
    }).catch((p) => At(
      p,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? p : Promise.reject(p));
  }
  function T(x, V, A) {
    a.list().forEach((M) => ee(() => M(x, V, A)));
  }
  function J(x, V, A, M, ie) {
    const Ee = w(x, V);
    if (Ee)
      return Ee;
    const oe = V === eo, p = Mt ? history.state : {};
    A && (M || oe ? n.replace(x.fullPath, de({
      scroll: oe && p && p.scroll
    }, ie)) : n.push(x.fullPath, ie)), c.value = x, Ke(x, V, A, oe), We();
  }
  let be;
  function Fe() {
    be || (be = n.listen((x, V, A) => {
      if (!zr.listening)
        return;
      const M = O(x), ie = Z(M);
      if (ie) {
        C(de(ie, { replace: !0 }), M).catch(br);
        return;
      }
      l = M;
      const Ee = c.value;
      Mt && Ev(_c(Ee.fullPath, A.delta), ti()), D(M, Ee).catch((oe) => At(
        oe,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? oe : At(
        oe,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (C(
        oe.to,
        M
        // avoid an uncaught rejection, let push call triggerError
      ).then((p) => {
        At(
          p,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !A.delta && A.type === Tr.pop && n.go(-1, !1);
      }).catch(br), Promise.reject()) : (A.delta && n.go(-A.delta, !1), q(oe, M, Ee))).then((oe) => {
        oe = oe || J(
          // after navigation, all matched components are resolved
          M,
          Ee,
          !1
        ), oe && (A.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !At(
          oe,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? n.go(-A.delta, !1) : A.type === Tr.pop && At(
          oe,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && n.go(-1, !1)), T(M, Ee, oe);
      }).catch(br);
    }));
  }
  let Ne = ir(), xe = ir(), Y;
  function q(x, V, A) {
    We(x);
    const M = xe.list();
    return M.length ? M.forEach((ie) => ie(x, V, A)) : (process.env.NODE_ENV !== "production" && re("uncaught error during route navigation:"), console.error(x)), Promise.reject(x);
  }
  function me() {
    return Y && c.value !== eo ? Promise.resolve() : new Promise((x, V) => {
      Ne.add([x, V]);
    });
  }
  function We(x) {
    return Y || (Y = !x, Fe(), Ne.list().forEach(([V, A]) => x ? A(x) : V()), Ne.reset()), x;
  }
  function Ke(x, V, A, M) {
    const { scrollBehavior: ie } = e;
    if (!Mt || !ie)
      return Promise.resolve();
    const Ee = !A && Cv(_c(x.fullPath, 0)) || (M || !A) && history.state && history.state.scroll || null;
    return wr().then(() => ie(x, V, Ee)).then((oe) => oe && xv(oe)).catch((oe) => q(oe, x, V));
  }
  const Ze = (x) => n.go(x);
  let qe;
  const st = /* @__PURE__ */ new Set(), zr = {
    currentRoute: c,
    listening: !0,
    addRoute: h,
    removeRoute: g,
    clearRoutes: t.clearRoutes,
    hasRoute: y,
    getRoutes: b,
    resolve: O,
    options: e,
    push: L,
    replace: H,
    go: Ze,
    back: () => Ze(-1),
    forward: () => Ze(1),
    beforeEach: i.add,
    beforeResolve: s.add,
    afterEach: a.add,
    onError: xe.add,
    isReady: me,
    install(x) {
      const V = this;
      x.component("RouterLink", Qu), x.component("RouterView", iy), x.config.globalProperties.$router = V, Object.defineProperty(x.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => lt(c)
      }), Mt && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !qe && c.value === eo && (qe = !0, L(n.location).catch((ie) => {
        process.env.NODE_ENV !== "production" && re("Unexpected error when starting the router:", ie);
      }));
      const A = {};
      for (const ie in eo)
        Object.defineProperty(A, ie, {
          get: () => c.value[ie],
          enumerable: !0
        });
      x.provide(oi, V), x.provide(Ks, bl(A)), x.provide(rs, c);
      const M = x.unmount;
      st.add(x), x.unmount = function() {
        st.delete(x), st.size < 1 && (l = eo, be && be(), be = null, c.value = eo, qe = !1, Y = !1), M();
      }, process.env.NODE_ENV !== "production" && Mt && cy(x, V, t);
    }
  };
  function Qt(x) {
    return x.reduce((V, A) => V.then(() => ee(A)), Promise.resolve());
  }
  return zr;
}
function yy(e, t) {
  const o = [], r = [], n = [], i = Math.max(t.matched.length, e.matched.length);
  for (let s = 0; s < i; s++) {
    const a = t.matched[s];
    a && (e.matched.find((l) => go(l, a)) ? r.push(a) : o.push(a));
    const c = e.matched[s];
    c && (t.matched.find((l) => go(l, c)) || n.push(c));
  }
  return [o, r, n];
}
function _y() {
  return ft(oi);
}
function sd(e) {
  return ft(Ks);
}
const ri = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [r, n] of t)
    o[r] = n;
  return o;
}, wy = (e) => (Yf("data-v-75a18a6f"), e = e(), Xf(), e), ky = /* @__PURE__ */ wy(() => /* @__PURE__ */ Se("img", {
  class: "menu-bar__logo",
  src: Fu,
  alt: "Двач"
}, null, -1)), xy = ["href", "onClick"], Ey = { class: "ml-2" }, Cy = { class: "ml-2" }, Sy = ["href", "target"], Oy = { class: "ml-2" }, Ny = {
  key: 0,
  class: "pi pi-fw pi-angle-down ml-2"
}, Iy = {
  __name: "MenuBar",
  props: ["items"],
  setup(e) {
    const t = _y(), o = () => {
      t.go(-1);
    };
    return (r, n) => {
      const i = Ko("router-link"), s = Mu, a = Pu;
      return U(), Je(s, { model: e.items }, {
        start: Nt(() => [
          ky
        ]),
        item: Nt(({ item: c, props: l, hasSubmenu: u }) => [
          c.route ? (U(), Je(i, {
            key: 0,
            to: c.route,
            custom: ""
          }, {
            default: Nt(({ href: d, navigate: f }) => [
              cn((U(), Q("a", ce({ href: d }, l.action, { onClick: f }), [
                Se("span", {
                  class: dt(c.icon)
                }, null, 2),
                Se("span", Ey, ct(c.label), 1)
              ], 16, xy)), [
                [a]
              ])
            ]),
            _: 2
          }, 1032, ["to"])) : c.back ? (U(), Je(i, {
            key: 1,
            custom: ""
          }, {
            default: Nt(() => [
              cn((U(), Q("a", ce(l.action, {
                onClick: jh(o, ["prevent"])
              }), [
                Se("span", {
                  class: dt(c.icon)
                }, null, 2),
                Se("span", Cy, ct(c.label), 1)
              ], 16)), [
                [a]
              ])
            ]),
            _: 2
          }, 1024)) : cn((U(), Q("a", ce({
            key: 2,
            href: c.url,
            target: c.target
          }, l.action), [
            Se("span", {
              class: dt(c.icon)
            }, null, 2),
            Se("span", Oy, ct(c.label), 1),
            u ? (U(), Q("span", Ny)) : ze("", !0)
          ], 16, Sy)), [
            [a]
          ])
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
}, Ry = /* @__PURE__ */ ri(Iy, [["__scopeId", "data-v-75a18a6f"]]), $y = { class: "container" }, Py = {
  __name: "App",
  setup(e) {
    const t = $t([
      {
        label: "Главная",
        icon: "pi pi-home",
        route: "/"
      },
      {
        label: "Назад",
        icon: "pi pi-arrow-left",
        back: !0
      }
    ]);
    return (o, r) => {
      const n = Ko("RouterView");
      return U(), Q(we, null, [
        Pe(Ry, { items: t.value }, null, 8, ["items"]),
        Se("main", $y, [
          Pe(n)
        ])
      ], 64);
    };
  }
};
function ad(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ty } = Object.prototype, { getPrototypeOf: qs } = Object, ni = /* @__PURE__ */ ((e) => (t) => {
  const o = Ty.call(t);
  return e[o] || (e[o] = o.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), xt = (e) => (e = e.toLowerCase(), (t) => ni(t) === e), ii = (e) => (t) => typeof t === e, { isArray: Xo } = Array, Br = ii("undefined");
function By(e) {
  return e !== null && !Br(e) && e.constructor !== null && !Br(e.constructor) && nt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const cd = xt("ArrayBuffer");
function Dy(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && cd(e.buffer), t;
}
const Ay = ii("string"), nt = ii("function"), ld = ii("number"), si = (e) => e !== null && typeof e == "object", Vy = (e) => e === !0 || e === !1, yn = (e) => {
  if (ni(e) !== "object")
    return !1;
  const t = qs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ly = xt("Date"), jy = xt("File"), My = xt("Blob"), Fy = xt("FileList"), Uy = (e) => si(e) && nt(e.pipe), Hy = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || nt(e.append) && ((t = ni(e)) === "formdata" || // detect form-data instance
  t === "object" && nt(e.toString) && e.toString() === "[object FormData]"));
}, zy = xt("URLSearchParams"), [Wy, Ky, qy, Gy] = ["ReadableStream", "Request", "Response", "Headers"].map(xt), Jy = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ur(e, t, { allOwnKeys: o = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, n;
  if (typeof e != "object" && (e = [e]), Xo(e))
    for (r = 0, n = e.length; r < n; r++)
      t.call(null, e[r], r, e);
  else {
    const i = o ? Object.getOwnPropertyNames(e) : Object.keys(e), s = i.length;
    let a;
    for (r = 0; r < s; r++)
      a = i[r], t.call(null, e[a], a, e);
  }
}
function ud(e, t) {
  t = t.toLowerCase();
  const o = Object.keys(e);
  let r = o.length, n;
  for (; r-- > 0; )
    if (n = o[r], t === n.toLowerCase())
      return n;
  return null;
}
const Eo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, dd = (e) => !Br(e) && e !== Eo;
function is() {
  const { caseless: e } = dd(this) && this || {}, t = {}, o = (r, n) => {
    const i = e && ud(t, n) || n;
    yn(t[i]) && yn(r) ? t[i] = is(t[i], r) : yn(r) ? t[i] = is({}, r) : Xo(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, n = arguments.length; r < n; r++)
    arguments[r] && Ur(arguments[r], o);
  return t;
}
const Yy = (e, t, o, { allOwnKeys: r } = {}) => (Ur(t, (n, i) => {
  o && nt(n) ? e[i] = ad(n, o) : e[i] = n;
}, { allOwnKeys: r }), e), Xy = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Qy = (e, t, o, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), o && Object.assign(e.prototype, o);
}, Zy = (e, t, o, r) => {
  let n, i, s;
  const a = {};
  if (t = t || {}, e == null) return t;
  do {
    for (n = Object.getOwnPropertyNames(e), i = n.length; i-- > 0; )
      s = n[i], (!r || r(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
    e = o !== !1 && qs(e);
  } while (e && (!o || o(e, t)) && e !== Object.prototype);
  return t;
}, e_ = (e, t, o) => {
  e = String(e), (o === void 0 || o > e.length) && (o = e.length), o -= t.length;
  const r = e.indexOf(t, o);
  return r !== -1 && r === o;
}, t_ = (e) => {
  if (!e) return null;
  if (Xo(e)) return e;
  let t = e.length;
  if (!ld(t)) return null;
  const o = new Array(t);
  for (; t-- > 0; )
    o[t] = e[t];
  return o;
}, o_ = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qs(Uint8Array)), r_ = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let n;
  for (; (n = r.next()) && !n.done; ) {
    const i = n.value;
    t.call(e, i[0], i[1]);
  }
}, n_ = (e, t) => {
  let o;
  const r = [];
  for (; (o = e.exec(t)) !== null; )
    r.push(o);
  return r;
}, i_ = xt("HTMLFormElement"), s_ = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(o, r, n) {
    return r.toUpperCase() + n;
  }
), Bc = (({ hasOwnProperty: e }) => (t, o) => e.call(t, o))(Object.prototype), a_ = xt("RegExp"), fd = (e, t) => {
  const o = Object.getOwnPropertyDescriptors(e), r = {};
  Ur(o, (n, i) => {
    let s;
    (s = t(n, i, e)) !== !1 && (r[i] = s || n);
  }), Object.defineProperties(e, r);
}, c_ = (e) => {
  fd(e, (t, o) => {
    if (nt(e) && ["arguments", "caller", "callee"].indexOf(o) !== -1)
      return !1;
    const r = e[o];
    if (nt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + o + "'");
      });
    }
  });
}, l_ = (e, t) => {
  const o = {}, r = (n) => {
    n.forEach((i) => {
      o[i] = !0;
    });
  };
  return Xo(e) ? r(e) : r(String(e).split(t)), o;
}, u_ = () => {
}, d_ = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Ni = "abcdefghijklmnopqrstuvwxyz", Dc = "0123456789", pd = {
  DIGIT: Dc,
  ALPHA: Ni,
  ALPHA_DIGIT: Ni + Ni.toUpperCase() + Dc
}, f_ = (e = 16, t = pd.ALPHA_DIGIT) => {
  let o = "";
  const { length: r } = t;
  for (; e--; )
    o += t[Math.random() * r | 0];
  return o;
};
function p_(e) {
  return !!(e && nt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const h_ = (e) => {
  const t = new Array(10), o = (r, n) => {
    if (si(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[n] = r;
        const i = Xo(r) ? [] : {};
        return Ur(r, (s, a) => {
          const c = o(s, n + 1);
          !Br(c) && (i[a] = c);
        }), t[n] = void 0, i;
      }
    }
    return r;
  };
  return o(e, 0);
}, m_ = xt("AsyncFunction"), g_ = (e) => e && (si(e) || nt(e)) && nt(e.then) && nt(e.catch), hd = ((e, t) => e ? setImmediate : t ? ((o, r) => (Eo.addEventListener("message", ({ source: n, data: i }) => {
  n === Eo && i === o && r.length && r.shift()();
}, !1), (n) => {
  r.push(n), Eo.postMessage(o, "*");
}))(`axios@${Math.random()}`, []) : (o) => setTimeout(o))(
  typeof setImmediate == "function",
  nt(Eo.postMessage)
), b_ = typeof queueMicrotask < "u" ? queueMicrotask.bind(Eo) : typeof process < "u" && process.nextTick || hd, k = {
  isArray: Xo,
  isArrayBuffer: cd,
  isBuffer: By,
  isFormData: Hy,
  isArrayBufferView: Dy,
  isString: Ay,
  isNumber: ld,
  isBoolean: Vy,
  isObject: si,
  isPlainObject: yn,
  isReadableStream: Wy,
  isRequest: Ky,
  isResponse: qy,
  isHeaders: Gy,
  isUndefined: Br,
  isDate: Ly,
  isFile: jy,
  isBlob: My,
  isRegExp: a_,
  isFunction: nt,
  isStream: Uy,
  isURLSearchParams: zy,
  isTypedArray: o_,
  isFileList: Fy,
  forEach: Ur,
  merge: is,
  extend: Yy,
  trim: Jy,
  stripBOM: Xy,
  inherits: Qy,
  toFlatObject: Zy,
  kindOf: ni,
  kindOfTest: xt,
  endsWith: e_,
  toArray: t_,
  forEachEntry: r_,
  matchAll: n_,
  isHTMLForm: i_,
  hasOwnProperty: Bc,
  hasOwnProp: Bc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: fd,
  freezeMethods: c_,
  toObjectSet: l_,
  toCamelCase: s_,
  noop: u_,
  toFiniteNumber: d_,
  findKey: ud,
  global: Eo,
  isContextDefined: dd,
  ALPHABET: pd,
  generateString: f_,
  isSpecCompliantForm: p_,
  toJSONObject: h_,
  isAsyncFn: m_,
  isThenable: g_,
  setImmediate: hd,
  asap: b_
};
function te(e, t, o, r, n) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), o && (this.config = o), r && (this.request = r), n && (this.response = n);
}
k.inherits(te, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: k.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const md = te.prototype, gd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  gd[e] = { value: e };
});
Object.defineProperties(te, gd);
Object.defineProperty(md, "isAxiosError", { value: !0 });
te.from = (e, t, o, r, n, i) => {
  const s = Object.create(md);
  return k.toFlatObject(e, s, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), te.call(s, e.message, t, o, r, n), s.cause = e, s.name = e.name, i && Object.assign(s, i), s;
};
const v_ = null;
function ss(e) {
  return k.isPlainObject(e) || k.isArray(e);
}
function bd(e) {
  return k.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ac(e, t, o) {
  return e ? e.concat(t).map(function(n, i) {
    return n = bd(n), !o && i ? "[" + n + "]" : n;
  }).join(o ? "." : "") : t;
}
function y_(e) {
  return k.isArray(e) && !e.some(ss);
}
const __ = k.toFlatObject(k, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ai(e, t, o) {
  if (!k.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), o = k.toFlatObject(o, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(b, y) {
    return !k.isUndefined(y[b]);
  });
  const r = o.metaTokens, n = o.visitor || u, i = o.dots, s = o.indexes, c = (o.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
  if (!k.isFunction(n))
    throw new TypeError("visitor must be a function");
  function l(g) {
    if (g === null) return "";
    if (k.isDate(g))
      return g.toISOString();
    if (!c && k.isBlob(g))
      throw new te("Blob is not supported. Use a Buffer instead.");
    return k.isArrayBuffer(g) || k.isTypedArray(g) ? c && typeof Blob == "function" ? new Blob([g]) : Buffer.from(g) : g;
  }
  function u(g, b, y) {
    let O = g;
    if (g && !y && typeof g == "object") {
      if (k.endsWith(b, "{}"))
        b = r ? b : b.slice(0, -2), g = JSON.stringify(g);
      else if (k.isArray(g) && y_(g) || (k.isFileList(g) || k.endsWith(b, "[]")) && (O = k.toArray(g)))
        return b = bd(b), O.forEach(function(w, L) {
          !(k.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Ac([b], L, i) : s === null ? b : b + "[]",
            l(w)
          );
        }), !1;
    }
    return ss(g) ? !0 : (t.append(Ac(y, b, i), l(g)), !1);
  }
  const d = [], f = Object.assign(__, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ss
  });
  function h(g, b) {
    if (!k.isUndefined(g)) {
      if (d.indexOf(g) !== -1)
        throw Error("Circular reference detected in " + b.join("."));
      d.push(g), k.forEach(g, function(O, v) {
        (!(k.isUndefined(O) || O === null) && n.call(
          t,
          O,
          k.isString(v) ? v.trim() : v,
          b,
          f
        )) === !0 && h(O, b ? b.concat(v) : [v]);
      }), d.pop();
    }
  }
  if (!k.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Vc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Gs(e, t) {
  this._pairs = [], e && ai(e, this, t);
}
const vd = Gs.prototype;
vd.append = function(t, o) {
  this._pairs.push([t, o]);
};
vd.toString = function(t) {
  const o = t ? function(r) {
    return t.call(this, r, Vc);
  } : Vc;
  return this._pairs.map(function(n) {
    return o(n[0]) + "=" + o(n[1]);
  }, "").join("&");
};
function w_(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function yd(e, t, o) {
  if (!t)
    return e;
  const r = o && o.encode || w_, n = o && o.serialize;
  let i;
  if (n ? i = n(t, o) : i = k.isURLSearchParams(t) ? t.toString() : new Gs(t, o).toString(r), i) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Lc {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, o, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: o,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    k.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const _d = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, k_ = typeof URLSearchParams < "u" ? URLSearchParams : Gs, x_ = typeof FormData < "u" ? FormData : null, E_ = typeof Blob < "u" ? Blob : null, C_ = {
  isBrowser: !0,
  classes: {
    URLSearchParams: k_,
    FormData: x_,
    Blob: E_
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Js = typeof window < "u" && typeof document < "u", S_ = ((e) => Js && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), O_ = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", N_ = Js && window.location.href || "http://localhost", I_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Js,
  hasStandardBrowserEnv: S_,
  hasStandardBrowserWebWorkerEnv: O_,
  origin: N_
}, Symbol.toStringTag, { value: "Module" })), kt = {
  ...I_,
  ...C_
};
function R_(e, t) {
  return ai(e, new kt.classes.URLSearchParams(), Object.assign({
    visitor: function(o, r, n, i) {
      return kt.isNode && k.isBuffer(o) ? (this.append(r, o.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function $_(e) {
  return k.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function P_(e) {
  const t = {}, o = Object.keys(e);
  let r;
  const n = o.length;
  let i;
  for (r = 0; r < n; r++)
    i = o[r], t[i] = e[i];
  return t;
}
function wd(e) {
  function t(o, r, n, i) {
    let s = o[i++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s), c = i >= o.length;
    return s = !s && k.isArray(n) ? n.length : s, c ? (k.hasOwnProp(n, s) ? n[s] = [n[s], r] : n[s] = r, !a) : ((!n[s] || !k.isObject(n[s])) && (n[s] = []), t(o, r, n[s], i) && k.isArray(n[s]) && (n[s] = P_(n[s])), !a);
  }
  if (k.isFormData(e) && k.isFunction(e.entries)) {
    const o = {};
    return k.forEachEntry(e, (r, n) => {
      t($_(r), n, o, 0);
    }), o;
  }
  return null;
}
function T_(e, t, o) {
  if (k.isString(e))
    try {
      return (t || JSON.parse)(e), k.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (o || JSON.stringify)(e);
}
const Hr = {
  transitional: _d,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, o) {
    const r = o.getContentType() || "", n = r.indexOf("application/json") > -1, i = k.isObject(t);
    if (i && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t))
      return n ? JSON.stringify(wd(t)) : t;
    if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t) || k.isReadableStream(t))
      return t;
    if (k.isArrayBufferView(t))
      return t.buffer;
    if (k.isURLSearchParams(t))
      return o.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return R_(t, this.formSerializer).toString();
      if ((a = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return ai(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || n ? (o.setContentType("application/json", !1), T_(t)) : t;
  }],
  transformResponse: [function(t) {
    const o = this.transitional || Hr.transitional, r = o && o.forcedJSONParsing, n = this.responseType === "json";
    if (k.isResponse(t) || k.isReadableStream(t))
      return t;
    if (t && k.isString(t) && (r && !this.responseType || n)) {
      const s = !(o && o.silentJSONParsing) && n;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (s)
          throw a.name === "SyntaxError" ? te.from(a, te.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: kt.classes.FormData,
    Blob: kt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Hr.headers[e] = {};
});
const B_ = k.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), D_ = (e) => {
  const t = {};
  let o, r, n;
  return e && e.split(`
`).forEach(function(s) {
    n = s.indexOf(":"), o = s.substring(0, n).trim().toLowerCase(), r = s.substring(n + 1).trim(), !(!o || t[o] && B_[o]) && (o === "set-cookie" ? t[o] ? t[o].push(r) : t[o] = [r] : t[o] = t[o] ? t[o] + ", " + r : r);
  }), t;
}, jc = Symbol("internals");
function ar(e) {
  return e && String(e).trim().toLowerCase();
}
function _n(e) {
  return e === !1 || e == null ? e : k.isArray(e) ? e.map(_n) : String(e);
}
function A_(e) {
  const t = /* @__PURE__ */ Object.create(null), o = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = o.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const V_ = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ii(e, t, o, r, n) {
  if (k.isFunction(r))
    return r.call(this, t, o);
  if (n && (t = o), !!k.isString(t)) {
    if (k.isString(r))
      return t.indexOf(r) !== -1;
    if (k.isRegExp(r))
      return r.test(t);
  }
}
function L_(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, o, r) => o.toUpperCase() + r);
}
function j_(e, t) {
  const o = k.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + o, {
      value: function(n, i, s) {
        return this[r].call(this, t, n, i, s);
      },
      configurable: !0
    });
  });
}
class Qe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, o, r) {
    const n = this;
    function i(a, c, l) {
      const u = ar(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = k.findKey(n, u);
      (!d || n[d] === void 0 || l === !0 || l === void 0 && n[d] !== !1) && (n[d || c] = _n(a));
    }
    const s = (a, c) => k.forEach(a, (l, u) => i(l, u, c));
    if (k.isPlainObject(t) || t instanceof this.constructor)
      s(t, o);
    else if (k.isString(t) && (t = t.trim()) && !V_(t))
      s(D_(t), o);
    else if (k.isHeaders(t))
      for (const [a, c] of t.entries())
        i(c, a, r);
    else
      t != null && i(o, t, r);
    return this;
  }
  get(t, o) {
    if (t = ar(t), t) {
      const r = k.findKey(this, t);
      if (r) {
        const n = this[r];
        if (!o)
          return n;
        if (o === !0)
          return A_(n);
        if (k.isFunction(o))
          return o.call(this, n, r);
        if (k.isRegExp(o))
          return o.exec(n);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, o) {
    if (t = ar(t), t) {
      const r = k.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!o || Ii(this, this[r], r, o)));
    }
    return !1;
  }
  delete(t, o) {
    const r = this;
    let n = !1;
    function i(s) {
      if (s = ar(s), s) {
        const a = k.findKey(r, s);
        a && (!o || Ii(r, r[a], a, o)) && (delete r[a], n = !0);
      }
    }
    return k.isArray(t) ? t.forEach(i) : i(t), n;
  }
  clear(t) {
    const o = Object.keys(this);
    let r = o.length, n = !1;
    for (; r--; ) {
      const i = o[r];
      (!t || Ii(this, this[i], i, t, !0)) && (delete this[i], n = !0);
    }
    return n;
  }
  normalize(t) {
    const o = this, r = {};
    return k.forEach(this, (n, i) => {
      const s = k.findKey(r, i);
      if (s) {
        o[s] = _n(n), delete o[i];
        return;
      }
      const a = t ? L_(i) : String(i).trim();
      a !== i && delete o[i], o[a] = _n(n), r[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const o = /* @__PURE__ */ Object.create(null);
    return k.forEach(this, (r, n) => {
      r != null && r !== !1 && (o[n] = t && k.isArray(r) ? r.join(", ") : r);
    }), o;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, o]) => t + ": " + o).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...o) {
    const r = new this(t);
    return o.forEach((n) => r.set(n)), r;
  }
  static accessor(t) {
    const r = (this[jc] = this[jc] = {
      accessors: {}
    }).accessors, n = this.prototype;
    function i(s) {
      const a = ar(s);
      r[a] || (j_(n, s), r[a] = !0);
    }
    return k.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let o = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[o] = r;
    }
  };
});
k.freezeMethods(Qe);
function Ri(e, t) {
  const o = this || Hr, r = t || o, n = Qe.from(r.headers);
  let i = r.data;
  return k.forEach(e, function(a) {
    i = a.call(o, i, n.normalize(), t ? t.status : void 0);
  }), n.normalize(), i;
}
function kd(e) {
  return !!(e && e.__CANCEL__);
}
function Qo(e, t, o) {
  te.call(this, e ?? "canceled", te.ERR_CANCELED, t, o), this.name = "CanceledError";
}
k.inherits(Qo, te, {
  __CANCEL__: !0
});
function xd(e, t, o) {
  const r = o.config.validateStatus;
  !o.status || !r || r(o.status) ? e(o) : t(new te(
    "Request failed with status code " + o.status,
    [te.ERR_BAD_REQUEST, te.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4],
    o.config,
    o.request,
    o
  ));
}
function M_(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function F_(e, t) {
  e = e || 10;
  const o = new Array(e), r = new Array(e);
  let n = 0, i = 0, s;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    s || (s = l), o[n] = c, r[n] = l;
    let d = i, f = 0;
    for (; d !== n; )
      f += o[d++], d = d % e;
    if (n = (n + 1) % e, n === i && (i = (i + 1) % e), l - s < t)
      return;
    const h = u && l - u;
    return h ? Math.round(f * 1e3 / h) : void 0;
  };
}
function U_(e, t) {
  let o = 0, r = 1e3 / t, n, i;
  const s = (l, u = Date.now()) => {
    o = u, n = null, i && (clearTimeout(i), i = null), e.apply(null, l);
  };
  return [(...l) => {
    const u = Date.now(), d = u - o;
    d >= r ? s(l, u) : (n = l, i || (i = setTimeout(() => {
      i = null, s(n);
    }, r - d)));
  }, () => n && s(n)];
}
const Ln = (e, t, o = 3) => {
  let r = 0;
  const n = F_(50, 250);
  return U_((i) => {
    const s = i.loaded, a = i.lengthComputable ? i.total : void 0, c = s - r, l = n(c), u = s <= a;
    r = s;
    const d = {
      loaded: s,
      total: a,
      progress: a ? s / a : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && a && u ? (a - s) / l : void 0,
      event: i,
      lengthComputable: a != null,
      [t ? "download" : "upload"]: !0
    };
    e(d);
  }, o);
}, Mc = (e, t) => {
  const o = e != null;
  return [(r) => t[0]({
    lengthComputable: o,
    total: e,
    loaded: r
  }), t[1]];
}, Fc = (e) => (...t) => k.asap(() => e(...t)), H_ = kt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), o = document.createElement("a");
    let r;
    function n(i) {
      let s = i;
      return t && (o.setAttribute("href", s), s = o.href), o.setAttribute("href", s), {
        href: o.href,
        protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
        host: o.host,
        search: o.search ? o.search.replace(/^\?/, "") : "",
        hash: o.hash ? o.hash.replace(/^#/, "") : "",
        hostname: o.hostname,
        port: o.port,
        pathname: o.pathname.charAt(0) === "/" ? o.pathname : "/" + o.pathname
      };
    }
    return r = n(window.location.href), function(s) {
      const a = k.isString(s) ? n(s) : s;
      return a.protocol === r.protocol && a.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), z_ = kt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, o, r, n, i) {
      const s = [e + "=" + encodeURIComponent(t)];
      k.isNumber(o) && s.push("expires=" + new Date(o).toGMTString()), k.isString(r) && s.push("path=" + r), k.isString(n) && s.push("domain=" + n), i === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function W_(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function K_(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ed(e, t) {
  return e && !W_(t) ? K_(e, t) : t;
}
const Uc = (e) => e instanceof Qe ? { ...e } : e;
function Ao(e, t) {
  t = t || {};
  const o = {};
  function r(l, u, d) {
    return k.isPlainObject(l) && k.isPlainObject(u) ? k.merge.call({ caseless: d }, l, u) : k.isPlainObject(u) ? k.merge({}, u) : k.isArray(u) ? u.slice() : u;
  }
  function n(l, u, d) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l))
        return r(void 0, l, d);
    } else return r(l, u, d);
  }
  function i(l, u) {
    if (!k.isUndefined(u))
      return r(void 0, u);
  }
  function s(l, u) {
    if (k.isUndefined(u)) {
      if (!k.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function a(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (l, u) => n(Uc(l), Uc(u), !0)
  };
  return k.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || n, f = d(e[u], t[u], u);
    k.isUndefined(f) && d !== a || (o[u] = f);
  }), o;
}
const Cd = (e) => {
  const t = Ao({}, e);
  let { data: o, withXSRFToken: r, xsrfHeaderName: n, xsrfCookieName: i, headers: s, auth: a } = t;
  t.headers = s = Qe.from(s), t.url = yd(Ed(t.baseURL, t.url), e.params, e.paramsSerializer), a && s.set(
    "Authorization",
    "Basic " + btoa((a.username || "") + ":" + (a.password ? unescape(encodeURIComponent(a.password)) : ""))
  );
  let c;
  if (k.isFormData(o)) {
    if (kt.hasStandardBrowserEnv || kt.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((c = s.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      s.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (kt.hasStandardBrowserEnv && (r && k.isFunction(r) && (r = r(t)), r || r !== !1 && H_(t.url))) {
    const l = n && i && z_.read(i);
    l && s.set(n, l);
  }
  return t;
}, q_ = typeof XMLHttpRequest < "u", G_ = q_ && function(e) {
  return new Promise(function(o, r) {
    const n = Cd(e);
    let i = n.data;
    const s = Qe.from(n.headers).normalize();
    let { responseType: a, onUploadProgress: c, onDownloadProgress: l } = n, u, d, f, h, g;
    function b() {
      h && h(), g && g(), n.cancelToken && n.cancelToken.unsubscribe(u), n.signal && n.signal.removeEventListener("abort", u);
    }
    let y = new XMLHttpRequest();
    y.open(n.method.toUpperCase(), n.url, !0), y.timeout = n.timeout;
    function O() {
      if (!y)
        return;
      const w = Qe.from(
        "getAllResponseHeaders" in y && y.getAllResponseHeaders()
      ), H = {
        data: !a || a === "text" || a === "json" ? y.responseText : y.response,
        status: y.status,
        statusText: y.statusText,
        headers: w,
        config: e,
        request: y
      };
      xd(function(C) {
        o(C), b();
      }, function(C) {
        r(C), b();
      }, H), y = null;
    }
    "onloadend" in y ? y.onloadend = O : y.onreadystatechange = function() {
      !y || y.readyState !== 4 || y.status === 0 && !(y.responseURL && y.responseURL.indexOf("file:") === 0) || setTimeout(O);
    }, y.onabort = function() {
      y && (r(new te("Request aborted", te.ECONNABORTED, e, y)), y = null);
    }, y.onerror = function() {
      r(new te("Network Error", te.ERR_NETWORK, e, y)), y = null;
    }, y.ontimeout = function() {
      let L = n.timeout ? "timeout of " + n.timeout + "ms exceeded" : "timeout exceeded";
      const H = n.transitional || _d;
      n.timeoutErrorMessage && (L = n.timeoutErrorMessage), r(new te(
        L,
        H.clarifyTimeoutError ? te.ETIMEDOUT : te.ECONNABORTED,
        e,
        y
      )), y = null;
    }, i === void 0 && s.setContentType(null), "setRequestHeader" in y && k.forEach(s.toJSON(), function(L, H) {
      y.setRequestHeader(H, L);
    }), k.isUndefined(n.withCredentials) || (y.withCredentials = !!n.withCredentials), a && a !== "json" && (y.responseType = n.responseType), l && ([f, g] = Ln(l, !0), y.addEventListener("progress", f)), c && y.upload && ([d, h] = Ln(c), y.upload.addEventListener("progress", d), y.upload.addEventListener("loadend", h)), (n.cancelToken || n.signal) && (u = (w) => {
      y && (r(!w || w.type ? new Qo(null, e, y) : w), y.abort(), y = null);
    }, n.cancelToken && n.cancelToken.subscribe(u), n.signal && (n.signal.aborted ? u() : n.signal.addEventListener("abort", u)));
    const v = M_(n.url);
    if (v && kt.protocols.indexOf(v) === -1) {
      r(new te("Unsupported protocol " + v + ":", te.ERR_BAD_REQUEST, e));
      return;
    }
    y.send(i || null);
  });
}, J_ = (e, t) => {
  let o = new AbortController(), r;
  const n = function(c) {
    if (!r) {
      r = !0, s();
      const l = c instanceof Error ? c : this.reason;
      o.abort(l instanceof te ? l : new Qo(l instanceof Error ? l.message : l));
    }
  };
  let i = t && setTimeout(() => {
    n(new te(`timeout ${t} of ms exceeded`, te.ETIMEDOUT));
  }, t);
  const s = () => {
    e && (i && clearTimeout(i), i = null, e.forEach((c) => {
      c && (c.removeEventListener ? c.removeEventListener("abort", n) : c.unsubscribe(n));
    }), e = null);
  };
  e.forEach((c) => c && c.addEventListener && c.addEventListener("abort", n));
  const { signal: a } = o;
  return a.unsubscribe = s, [a, () => {
    i && clearTimeout(i), i = null;
  }];
}, Y_ = function* (e, t) {
  let o = e.byteLength;
  if (!t || o < t) {
    yield e;
    return;
  }
  let r = 0, n;
  for (; r < o; )
    n = r + t, yield e.slice(r, n), r = n;
}, X_ = async function* (e, t, o) {
  for await (const r of e)
    yield* Y_(ArrayBuffer.isView(r) ? r : await o(String(r)), t);
}, Hc = (e, t, o, r, n) => {
  const i = X_(e, t, n);
  let s = 0, a, c = (l) => {
    a || (a = !0, r && r(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: d } = await i.next();
        if (u) {
          c(), l.close();
          return;
        }
        let f = d.byteLength;
        if (o) {
          let h = s += f;
          o(h);
        }
        l.enqueue(new Uint8Array(d));
      } catch (u) {
        throw c(u), u;
      }
    },
    cancel(l) {
      return c(l), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, ci = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Sd = ci && typeof ReadableStream == "function", as = ci && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), Od = (e, ...t) => {
  try {
    return !!e(...t);
  } catch {
    return !1;
  }
}, Q_ = Sd && Od(() => {
  let e = !1;
  const t = new Request(kt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), zc = 64 * 1024, cs = Sd && Od(() => k.isReadableStream(new Response("").body)), jn = {
  stream: cs && ((e) => e.body)
};
ci && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !jn[t] && (jn[t] = k.isFunction(e[t]) ? (o) => o[t]() : (o, r) => {
      throw new te(`Response type '${t}' is not supported`, te.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Z_ = async (e) => {
  if (e == null)
    return 0;
  if (k.isBlob(e))
    return e.size;
  if (k.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (k.isArrayBufferView(e) || k.isArrayBuffer(e))
    return e.byteLength;
  if (k.isURLSearchParams(e) && (e = e + ""), k.isString(e))
    return (await as(e)).byteLength;
}, ew = async (e, t) => {
  const o = k.toFiniteNumber(e.getContentLength());
  return o ?? Z_(t);
}, tw = ci && (async (e) => {
  let {
    url: t,
    method: o,
    data: r,
    signal: n,
    cancelToken: i,
    timeout: s,
    onDownloadProgress: a,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: f
  } = Cd(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [h, g] = n || i || s ? J_([n, i], s) : [], b, y;
  const O = () => {
    !b && setTimeout(() => {
      h && h.unsubscribe();
    }), b = !0;
  };
  let v;
  try {
    if (c && Q_ && o !== "get" && o !== "head" && (v = await ew(u, r)) !== 0) {
      let Z = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), C;
      if (k.isFormData(r) && (C = Z.headers.get("content-type")) && u.setContentType(C), Z.body) {
        const [fe, ee] = Mc(
          v,
          Ln(Fc(c))
        );
        r = Hc(Z.body, zc, fe, ee, as);
      }
    }
    k.isString(d) || (d = d ? "include" : "omit"), y = new Request(t, {
      ...f,
      signal: h,
      method: o.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      credentials: d
    });
    let w = await fetch(y);
    const L = cs && (l === "stream" || l === "response");
    if (cs && (a || L)) {
      const Z = {};
      ["status", "statusText", "headers"].forEach((D) => {
        Z[D] = w[D];
      });
      const C = k.toFiniteNumber(w.headers.get("content-length")), [fe, ee] = a && Mc(
        C,
        Ln(Fc(a), !0)
      ) || [];
      w = new Response(
        Hc(w.body, zc, fe, () => {
          ee && ee(), L && O();
        }, as),
        Z
      );
    }
    l = l || "text";
    let H = await jn[k.findKey(jn, l) || "text"](w, e);
    return !L && O(), g && g(), await new Promise((Z, C) => {
      xd(Z, C, {
        data: H,
        headers: Qe.from(w.headers),
        status: w.status,
        statusText: w.statusText,
        config: e,
        request: y
      });
    });
  } catch (w) {
    throw O(), w && w.name === "TypeError" && /fetch/i.test(w.message) ? Object.assign(
      new te("Network Error", te.ERR_NETWORK, e, y),
      {
        cause: w.cause || w
      }
    ) : te.from(w, w && w.code, e, y);
  }
}), ls = {
  http: v_,
  xhr: G_,
  fetch: tw
};
k.forEach(ls, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Wc = (e) => `- ${e}`, ow = (e) => k.isFunction(e) || e === null || e === !1, Nd = {
  getAdapter: (e) => {
    e = k.isArray(e) ? e : [e];
    const { length: t } = e;
    let o, r;
    const n = {};
    for (let i = 0; i < t; i++) {
      o = e[i];
      let s;
      if (r = o, !ow(o) && (r = ls[(s = String(o)).toLowerCase()], r === void 0))
        throw new te(`Unknown adapter '${s}'`);
      if (r)
        break;
      n[s || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(n).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = t ? i.length > 1 ? `since :
` + i.map(Wc).join(`
`) : " " + Wc(i[0]) : "as no adapter specified";
      throw new te(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ls
};
function $i(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Qo(null, e);
}
function Kc(e) {
  return $i(e), e.headers = Qe.from(e.headers), e.data = Ri.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Nd.getAdapter(e.adapter || Hr.adapter)(e).then(function(r) {
    return $i(e), r.data = Ri.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qe.from(r.headers), r;
  }, function(r) {
    return kd(r) || ($i(e), r && r.response && (r.response.data = Ri.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qe.from(r.response.headers))), Promise.reject(r);
  });
}
const Id = "1.7.3", Ys = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ys[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qc = {};
Ys.transitional = function(t, o, r) {
  function n(i, s) {
    return "[Axios v" + Id + "] Transitional option '" + i + "'" + s + (r ? ". " + r : "");
  }
  return (i, s, a) => {
    if (t === !1)
      throw new te(
        n(s, " has been removed" + (o ? " in " + o : "")),
        te.ERR_DEPRECATED
      );
    return o && !qc[s] && (qc[s] = !0, console.warn(
      n(
        s,
        " has been deprecated since v" + o + " and will be removed in the near future"
      )
    )), t ? t(i, s, a) : !0;
  };
};
function rw(e, t, o) {
  if (typeof e != "object")
    throw new te("options must be an object", te.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let n = r.length;
  for (; n-- > 0; ) {
    const i = r[n], s = t[i];
    if (s) {
      const a = e[i], c = a === void 0 || s(a, i, e);
      if (c !== !0)
        throw new te("option " + i + " must be " + c, te.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (o !== !0)
      throw new te("Unknown option " + i, te.ERR_BAD_OPTION);
  }
}
const us = {
  assertOptions: rw,
  validators: Ys
}, to = us.validators;
class Po {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Lc(),
      response: new Lc()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, o) {
    try {
      return await this._request(t, o);
    } catch (r) {
      if (r instanceof Error) {
        let n;
        Error.captureStackTrace ? Error.captureStackTrace(n = {}) : n = new Error();
        const i = n.stack ? n.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, o) {
    typeof t == "string" ? (o = o || {}, o.url = t) : o = t || {}, o = Ao(this.defaults, o);
    const { transitional: r, paramsSerializer: n, headers: i } = o;
    r !== void 0 && us.assertOptions(r, {
      silentJSONParsing: to.transitional(to.boolean),
      forcedJSONParsing: to.transitional(to.boolean),
      clarifyTimeoutError: to.transitional(to.boolean)
    }, !1), n != null && (k.isFunction(n) ? o.paramsSerializer = {
      serialize: n
    } : us.assertOptions(n, {
      encode: to.function,
      serialize: to.function
    }, !0)), o.method = (o.method || this.defaults.method || "get").toLowerCase();
    let s = i && k.merge(
      i.common,
      i[o.method]
    );
    i && k.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (g) => {
        delete i[g];
      }
    ), o.headers = Qe.concat(s, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(b) {
      typeof b.runWhen == "function" && b.runWhen(o) === !1 || (c = c && b.synchronous, a.unshift(b.fulfilled, b.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(b) {
      l.push(b.fulfilled, b.rejected);
    });
    let u, d = 0, f;
    if (!c) {
      const g = [Kc.bind(this), void 0];
      for (g.unshift.apply(g, a), g.push.apply(g, l), f = g.length, u = Promise.resolve(o); d < f; )
        u = u.then(g[d++], g[d++]);
      return u;
    }
    f = a.length;
    let h = o;
    for (d = 0; d < f; ) {
      const g = a[d++], b = a[d++];
      try {
        h = g(h);
      } catch (y) {
        b.call(this, y);
        break;
      }
    }
    try {
      u = Kc.call(this, h);
    } catch (g) {
      return Promise.reject(g);
    }
    for (d = 0, f = l.length; d < f; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = Ao(this.defaults, t);
    const o = Ed(t.baseURL, t.url);
    return yd(o, t.params, t.paramsSerializer);
  }
}
k.forEach(["delete", "get", "head", "options"], function(t) {
  Po.prototype[t] = function(o, r) {
    return this.request(Ao(r || {}, {
      method: t,
      url: o,
      data: (r || {}).data
    }));
  };
});
k.forEach(["post", "put", "patch"], function(t) {
  function o(r) {
    return function(i, s, a) {
      return this.request(Ao(a || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: s
      }));
    };
  }
  Po.prototype[t] = o(), Po.prototype[t + "Form"] = o(!0);
});
class Xs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let o;
    this.promise = new Promise(function(i) {
      o = i;
    });
    const r = this;
    this.promise.then((n) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](n);
      r._listeners = null;
    }), this.promise.then = (n) => {
      let i;
      const s = new Promise((a) => {
        r.subscribe(a), i = a;
      }).then(n);
      return s.cancel = function() {
        r.unsubscribe(i);
      }, s;
    }, t(function(i, s, a) {
      r.reason || (r.reason = new Qo(i, s, a), o(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const o = this._listeners.indexOf(t);
    o !== -1 && this._listeners.splice(o, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Xs(function(n) {
        t = n;
      }),
      cancel: t
    };
  }
}
function nw(e) {
  return function(o) {
    return e.apply(null, o);
  };
}
function iw(e) {
  return k.isObject(e) && e.isAxiosError === !0;
}
const ds = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ds).forEach(([e, t]) => {
  ds[t] = e;
});
function Rd(e) {
  const t = new Po(e), o = ad(Po.prototype.request, t);
  return k.extend(o, Po.prototype, t, { allOwnKeys: !0 }), k.extend(o, t, null, { allOwnKeys: !0 }), o.create = function(n) {
    return Rd(Ao(e, n));
  }, o;
}
const Oe = Rd(Hr);
Oe.Axios = Po;
Oe.CanceledError = Qo;
Oe.CancelToken = Xs;
Oe.isCancel = kd;
Oe.VERSION = Id;
Oe.toFormData = ai;
Oe.AxiosError = te;
Oe.Cancel = Oe.CanceledError;
Oe.all = function(t) {
  return Promise.all(t);
};
Oe.spread = nw;
Oe.isAxiosError = iw;
Oe.mergeConfig = Ao;
Oe.AxiosHeaders = Qe;
Oe.formToJSON = (e) => wd(k.isHTMLForm(e) ? new FormData(e) : e);
Oe.getAdapter = Nd.getAdapter;
Oe.HttpStatusCode = ds;
Oe.default = Oe;
const $d = Eu("boardsStore", {
  state: () => ({
    boards: [],
    threads: {}
  }),
  actions: {
    getBoards: async function() {
      const t = await Oe.get(
        "https://anychan-proxy.vercel.app/?url=https://2ch.hk/api/mobile/v2/boards"
      );
      this.boards = t.data;
    },
    getBoard: async function(e) {
      const t = `https://2ch.hk/${e}/index.json`, o = await Oe.get(
        `https://anychan-proxy.vercel.app/?url=${t}`
      );
      this.threads = o.data.threads;
    }
  },
  getters: {
    filteredBoards: ({ boards: e }) => {
      const t = e.map((i) => i.category), r = [...new Set(t)], n = {};
      return r.forEach((i) => {
        n[i] = e.filter(
          (s) => s.category === i
        );
      }), n;
    }
  }
}), sw = { class: "home-view" }, aw = /* @__PURE__ */ oh('<div class="home-view__logo"><img class="home-view__logo-img" src="' + Fu + '" alt="Двач"></div><h2 class="home-view__description">Оставайся дома. Снова.</h2><p class="home-view__text"> Два.ч - это система форумов, где можно общаться быстро и свободно, где любая точка зрения имеет право на жизнь. Здесь нет регистрации и подписываться не нужно, хотя это не избавляет вас от необходимости соблюдать правила. Все форумы (кроме /Б/реда), а их список находится снизу, имеют собственную чётко ограниченную тематику. Словом, всё, что не запрещено правилами отдельно взятого форума и относится к его тематике, на этом форуме разрешено. </p><p class="home-view__text"> На данный момент открыто 164 досок. Общая скорость постинга на имиджборде 2102, за все время существования было оставлено 652346101 постов. </p>', 4), cw = {
  __name: "HomeView",
  setup(e) {
    const t = $d(), { getBoards: o } = t, { filteredBoards: r } = Ms(t);
    return Al(() => {
      o();
    }), (n, i) => (U(), Q("div", sw, [
      aw,
      (U(!0), Q(we, null, Wt(lt(r), (s, a) => (U(), Q("div", null, [
        Se("h3", null, ct(a), 1),
        (U(!0), Q(we, null, Wt(s, (c) => (U(), Q("div", null, [
          Pe(lt(Qu), {
            to: {
              name: "board",
              params: {
                board: c.id
              }
            }
          }, {
            default: Nt(() => [
              $n(ct(c.name), 1)
            ]),
            _: 2
          }, 1032, ["to"])
        ]))), 256))
      ]))), 256))
    ]));
  }
}, lw = {};
function uw(e, t) {
  return "about";
}
const dw = /* @__PURE__ */ ri(lw, [["render", uw]]);
var fw = function(t) {
  var o = t.dt;
  return `
.p-card {
    background: `.concat(o("card.background"), `;
    color: `).concat(o("card.color"), `;
    box-shadow: `).concat(o("card.shadow"), `;
    border-radius: `).concat(o("card.border.radius"), `;
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: `).concat(o("card.caption.gap"), `;
}

.p-card-body {
    padding: `).concat(o("card.body.padding"), `;
    display: flex;
    flex-direction: column;
    gap: `).concat(o("card.body.gap"), `;
}

.p-card-title {
    font-size: `).concat(o("card.title.font.size"), `;
    font-weight: `).concat(o("card.title.font.weight"), `;
}

.p-card-subtitle {
    color: `).concat(o("card.subtitle.color"), `;
}
`);
}, pw = {
  root: "p-card p-component",
  header: "p-card-header",
  body: "p-card-body",
  caption: "p-card-caption",
  title: "p-card-title",
  subtitle: "p-card-subtitle",
  content: "p-card-content",
  footer: "p-card-footer"
}, hw = Ie.extend({
  name: "card",
  theme: fw,
  classes: pw
}), mw = {
  name: "BaseCard",
  extends: ei,
  style: hw,
  provide: function() {
    return {
      $pcCard: this,
      $parentInstance: this
    };
  }
}, Pd = {
  name: "Card",
  extends: mw,
  inheritAttrs: !1
};
function gw(e, t, o, r, n, i) {
  return U(), Q("div", ce({
    class: e.cx("root")
  }, e.ptmi("root")), [e.$slots.header ? (U(), Q("div", ce({
    key: 0,
    class: e.cx("header")
  }, e.ptm("header")), [Ft(e.$slots, "header")], 16)) : ze("", !0), Se("div", ce({
    class: e.cx("body")
  }, e.ptm("body")), [e.$slots.title || e.$slots.subtitle ? (U(), Q("div", ce({
    key: 0,
    class: e.cx("caption")
  }, e.ptm("caption")), [e.$slots.title ? (U(), Q("div", ce({
    key: 0,
    class: e.cx("title")
  }, e.ptm("title")), [Ft(e.$slots, "title")], 16)) : ze("", !0), e.$slots.subtitle ? (U(), Q("div", ce({
    key: 1,
    class: e.cx("subtitle")
  }, e.ptm("subtitle")), [Ft(e.$slots, "subtitle")], 16)) : ze("", !0)], 16)) : ze("", !0), Se("div", ce({
    class: e.cx("content")
  }, e.ptm("content")), [Ft(e.$slots, "content")], 16), e.$slots.footer ? (U(), Q("div", ce({
    key: 1,
    class: e.cx("footer")
  }, e.ptm("footer")), [Ft(e.$slots, "footer")], 16)) : ze("", !0)], 16)], 16);
}
Pd.render = gw;
const bw = ["src"], vw = ["innerHTML"], yw = ["innerHTML"], _w = {
  __name: "Post",
  props: ["post"],
  setup(e) {
    return (t, o) => {
      var i, s, a, c;
      const r = Ko("router-link"), n = Pd;
      return U(), Q("div", {
        class: dt(["post", { "post--one-line": ((s = (i = e.post) == null ? void 0 : i.files) == null ? void 0 : s.length) > 1 }])
      }, [
        Se("div", {
          class: dt(["post__image-wrapper", {
            "post__image-wrapper--one-line": ((c = (a = e.post) == null ? void 0 : a.files) == null ? void 0 : c.length) > 1
          }])
        }, [
          (U(!0), Q(we, null, Wt(e.post.files, (l) => (U(), Q("div", null, [
            Se("img", {
              class: "post__image",
              src: "https://2ch.hk/" + l.path,
              alt: ""
            }, null, 8, bw)
          ]))), 256))
        ], 2),
        e.post.posts_count ? (U(), Je(n, {
          key: 0,
          class: "post__item post__item--first"
        }, {
          title: Nt(() => [
            Se("div", null, [
              e.post.posts_count ? (U(), Je(r, {
                key: 0,
                to: {
                  name: "post",
                  params: {
                    postNum: e.post.num
                  }
                }
              }, {
                default: Nt(() => [
                  $n("Открыть")
                ]),
                _: 1
              }, 8, ["to"])) : ze("", !0)
            ]),
            $n(" Пост " + ct(e.post.name) + " " + ct(e.post.date) + " " + ct(e.post.email) + " №" + ct(e.post.num) + " 👀 " + ct(e.post.views), 1)
          ]),
          content: Nt(() => [
            Se("p", {
              innerHTML: e.post.comment
            }, null, 8, vw)
          ]),
          _: 1
        })) : (U(), Je(n, {
          key: 1,
          class: "post__item"
        }, {
          content: Nt(() => [
            Se("p", {
              innerHTML: e.post.comment
            }, null, 8, yw)
          ]),
          _: 1
        }))
      ], 2);
    };
  }
}, Td = /* @__PURE__ */ ri(_w, [["__scopeId", "data-v-ef3c0fda"]]), ww = { class: "thread-preview" }, kw = {
  __name: "BoardView",
  setup(e) {
    const t = sd(), o = $d(), { getBoard: r } = o, { threads: n } = Ms(o);
    return Gn(() => {
      r(t.params.board);
    }), (i, s) => (U(!0), Q(we, null, Wt(lt(n), (a) => (U(), Q("div", ww, [
      (U(!0), Q(we, null, Wt(a.posts, (c) => (U(), Q("div", null, [
        Pe(Td, { post: c }, null, 8, ["post"])
      ]))), 256))
    ]))), 256));
  }
}, xw = /* @__PURE__ */ ri(kw, [["__scopeId", "data-v-196579a8"]]), Ew = Eu("ThreadStore", {
  state: () => ({
    thread: []
  }),
  actions: {
    getThread: async function(e, t) {
      const o = `https://2ch.hk/${e}/res/${t}.json`, r = await Oe.get(
        `https://anychan-proxy.vercel.app/?url=${o}`
      );
      this.thread = r.data;
    }
  }
}), Cw = {
  __name: "ThreadView",
  setup(e) {
    const t = sd(), o = Ew(), { getThread: r } = o, { thread: n } = Ms(o);
    return Gn(() => {
      r(t.params.board, t.params.postNum);
    }), (i, s) => {
      var a;
      return U(!0), Q(we, null, Wt((a = lt(n)) == null ? void 0 : a.threads, (c) => (U(), Q("div", null, [
        (U(!0), Q(we, null, Wt(c, (l) => (U(), Q("div", null, [
          (U(!0), Q(we, null, Wt(l, (u) => (U(), Je(Td, { post: u }, null, 8, ["post"]))), 256))
        ]))), 256))
      ]))), 256);
    };
  }
}, Sw = [
  { path: "/", component: cw },
  { path: "/about", component: dw },
  { path: "/:board", component: xw, name: "board" },
  { path: "/:board/:postNum", component: Cw, name: "post" }
], Ow = vy({
  history: Iv(),
  routes: Sw
}), Nw = vm(), Iw = Uh(Py);
Iw.use(Ow).use(Nw).use(xg, {
  theme: {
    preset: tb
  }
}).mount("#app");
