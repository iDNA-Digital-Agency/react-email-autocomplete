"use client";
import { useState as S, useEffect as F, forwardRef as pe, useRef as k, useId as ge, useCallback as be } from "react";
import { jsxs as K, jsx as T } from "react/jsx-runtime";
import { flushSync as z } from "react-dom";
const De = [
  "aol.com",
  "att.net",
  "comcast.net",
  "facebook.com",
  "gmail.com",
  "gmx.com",
  "googlemail.com",
  "google.com",
  "hotmail.com",
  "hotmail.co.uk",
  "mac.com",
  "me.com",
  "mail.com",
  "msn.com",
  "live.com",
  "sbcglobal.net",
  "verizon.net",
  "yahoo.com",
  "yahoo.co.uk",
  "email.com",
  "fastmail.fm",
  "games.com",
  "gmx.net",
  "hush.com",
  "hushmail.com",
  "icloud.com",
  "iname.com",
  "inbox.com",
  "lavabit.com",
  "love.com",
  "outlook.com",
  "pobox.com",
  "protonmail.ch",
  "protonmail.com",
  "tutanota.de",
  "tutanota.com",
  "tutamail.com",
  "tuta.io",
  "keemail.me",
  "rocketmail.com",
  "safe-mail.net",
  "wow.com",
  "ygm.com",
  "ymail.com",
  "zoho.com",
  "bellsouth.net",
  "charter.net",
  "cox.net",
  "earthlink.net",
  "juno.com",
  "btinternet.com",
  "virginmedia.com",
  "blueyonder.co.uk",
  "live.co.uk",
  "ntlworld.com",
  "orange.net",
  "sky.com",
  "talktalk.co.uk",
  "tiscali.co.uk",
  "virgin.net",
  "bt.com",
  "sina.com",
  "sina.cn",
  "qq.com",
  "naver.com",
  "hanmail.net",
  "daum.net",
  "nate.com",
  "yahoo.co.jp",
  "yahoo.co.kr",
  "yahoo.co.id",
  "yahoo.co.in",
  "yahoo.com.sg",
  "yahoo.com.ph",
  "163.com",
  "yeah.net",
  "126.com",
  "21cn.com",
  "aliyun.com",
  "foxmail.com",
  "hotmail.fr",
  "live.fr",
  "laposte.net",
  "yahoo.fr",
  "wanadoo.fr",
  "orange.fr",
  "gmx.fr",
  "sfr.fr",
  "neuf.fr",
  "free.fr",
  "gmx.de",
  "hotmail.de",
  "live.de",
  "online.de",
  "t-online.de",
  "web.de",
  "yahoo.de",
  "libero.it",
  "virgilio.it",
  "hotmail.it",
  "aol.it",
  "tiscali.it",
  "alice.it",
  "live.it",
  "yahoo.it",
  "email.it",
  "tin.it",
  "poste.it",
  "teletu.it",
  "bk.ru",
  "inbox.ru",
  "list.ru",
  "mail.ru",
  "rambler.ru",
  "yandex.by",
  "yandex.com",
  "yandex.kz",
  "yandex.ru",
  "yandex.ua",
  "ya.ru",
  "hotmail.be",
  "live.be",
  "skynet.be",
  "voo.be",
  "tvcablenet.be",
  "telenet.be",
  "hotmail.com.ar",
  "live.com.ar",
  "yahoo.com.ar",
  "fibertel.com.ar",
  "speedy.com.ar",
  "arnet.com.ar",
  "yahoo.com.mx",
  "live.com.mx",
  "hotmail.es",
  "hotmail.com.mx",
  "prodigy.net.mx",
  "yahoo.ca",
  "hotmail.ca",
  "bell.net",
  "shaw.ca",
  "sympatico.ca",
  "rogers.com",
  "yahoo.com.br",
  "hotmail.com.br",
  "outlook.com.br",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
  "r7.com",
  "zipmail.com.br",
  "globo.com",
  "globomail.com",
  "oi.com.br"
];
function Ce(o, m) {
  const i = m || (navigator == null ? void 0 : navigator.language), [l, h] = S(o.default);
  return F(() => {
    const d = o[i];
    if (d) return h(d);
    const w = i.split(/[-_]/)[0], c = o[w];
    if (c) return h(c);
  }, [i, o]), l;
}
const ve = /^[a-z0-9@.]$/i;
function U(o) {
  return o.replace(/\s+/g, "").toLowerCase();
}
function Y(o, m, i) {
  return typeof o == "number" && Number.isInteger(o) && o <= m ? o : i;
}
function j(o) {
  return typeof o == "function";
}
function xe(o, m) {
  const [i] = o.split("@"), l = o.indexOf("@"), h = l >= 0 ? o.slice(l + 1) : "", d = i.length >= m, w = d && o.includes("@"), c = d && h.length >= 1;
  return { username: i, domain: h, hasUsername: d, hasAt: w, hasDomain: c };
}
var y = /* @__PURE__ */ ((o) => (o.Wrapper = "wrapper", o.Input = "input", o.Dropdown = "dropdown", o.Suggestion = "suggestion", o.Username = "username", o.Domain = "domain", o))(y || {});
const ye = pe(
  ({
    /* Core - Required */
    onChange: o,
    value: m,
    baseList: i,
    /* Core - Optional */
    refineList: l = [],
    maxResults: h = 6,
    minChars: d = 2,
    className: w,
    classNames: c,
    onSelect: Z = () => {
    },
    children: N,
    activeDataAttr: R,
    /* User events */
    onFocus: W,
    onBlur: _,
    onInput: $,
    onKeyDown: ee = () => {
    },
    /* ARIA */
    dropdownAriaLabel: oe = "Suggestions",
    /* HTML */
    ...te
  }, q) => {
    const ne = (l == null ? void 0 : l.length) > 0, B = Y(h, 8, 6), H = Y(d, 8, 2), A = i.slice(0, B), M = k(!1), V = ge(), G = k(null), r = k(null), re = k(null), p = k([]), [ae, J] = S("email"), [g, D] = S(A), [a, O] = S({
      focusedIndex: -1,
      hoveredIndex: -1
    });
    function b(e, t) {
      O({ focusedIndex: e, hoveredIndex: t });
    }
    function C({ isDecrement: e }) {
      const t = e ? -1 : 1;
      O((n) => ({
        hoveredIndex: n.hoveredIndex + t,
        focusedIndex: n.hoveredIndex + t
      }));
    }
    const P = typeof m != "string" ? "" : U(m), [Q] = P.split("@"), v = M.current && g.length > 0 && Q.length >= H, s = be(() => {
      D([]), b(-1, -1);
    }, []);
    F(() => {
      var e;
      a.focusedIndex >= 0 && ((e = p == null ? void 0 : p.current[a.focusedIndex]) == null || e.focus());
    }, [a.focusedIndex]), F(() => {
      function e(t) {
        var n;
        v && !((n = G.current) != null && n.contains(t.target)) && s();
      }
      return v || b(-1, -1), document.addEventListener("mousedown", e), window.addEventListener("blur", s), () => {
        document.removeEventListener("mousedown", e), window.removeEventListener("blur", s);
      };
    }, [v, s]);
    function ce() {
      r.current && (z(() => {
        J("text");
      }), r.current.setSelectionRange(P.length, P.length), z(() => {
        J("email");
      }), r.current.focus());
    }
    function ie(e) {
      M.current = !0;
      const t = U(e.target.value), { hasUsername: n, hasAt: f, hasDomain: L, domain: u } = xe(t, H);
      if (n)
        if (!ne)
          f ? s() : D(A);
        else if (L) {
          const x = l.filter((he) => he.startsWith(u)).slice(0, B);
          x.length > 0 ? x[0] === u ? s() : D(x) : s();
        } else
          D(A);
      o(t);
    }
    function se(e, t, n) {
      Z({ value: e, keyboard: t, position: n });
    }
    function E(e, t, { isKeyboard: n, isInput: f } = { isKeyboard: !1, isInput: !1 }) {
      var L;
      e.preventDefault(), e.stopPropagation(), z(() => {
        var x;
        let u = "";
        f ? u = (x = p.current[t]) == null ? void 0 : x.textContent : u = e.currentTarget.textContent, u = U(u), o(u), se(u, n, t + 1), s();
      }), (L = r.current) == null || L.focus();
    }
    function le(e) {
      switch (e.code) {
        case "Escape":
          return e.stopPropagation(), s();
        case "ArrowUp":
          e.preventDefault(), e.stopPropagation(), a.hoveredIndex >= 0 && C({ isDecrement: !0 });
          break;
        case "ArrowDown":
          e.preventDefault(), e.stopPropagation(), a.hoveredIndex >= 0 && C({ isDecrement: !1 }), a.hoveredIndex < 0 && b(0, 0);
          break;
        case "Tab":
        case "Enter":
          e.preventDefault(), e.stopPropagation(), a.hoveredIndex >= 0 && E(e, a.hoveredIndex, {
            isKeyboard: !0,
            isInput: !0
          });
          break;
      }
    }
    function ue(e) {
      var t, n, f;
      if (ve.test(e.key))
        return e.stopPropagation(), (t = r == null ? void 0 : r.current) == null ? void 0 : t.focus();
      switch (e.code) {
        case "Escape":
          return e.preventDefault(), e.stopPropagation(), s(), ce();
        case "Enter":
        case "Tab":
        case "Space":
          return e.preventDefault(), e.stopPropagation(), E(e, a.focusedIndex, {
            isKeyboard: !0,
            isInput: !1
          });
        case "Backspace":
        case "ArrowLeft":
        case "ArrowRight":
          return e.stopPropagation(), (n = r == null ? void 0 : r.current) == null ? void 0 : n.focus();
        case "ArrowUp":
          e.preventDefault(), e.stopPropagation(), C({ isDecrement: !0 }), a.hoveredIndex === 0 && ((f = r == null ? void 0 : r.current) == null || f.focus());
          break;
        case "ArrowDown":
          e.preventDefault(), e.stopPropagation(), a.hoveredIndex < g.length - 1 && C({ isDecrement: !1 }), a.hoveredIndex === g.length - 1 && b(0, 0);
          break;
      }
    }
    function X(e, t) {
      (!p.current.some((f) => f === e.relatedTarget) || e.relatedTarget == null) && t(e);
    }
    function me() {
      return {
        onKeyDown(e) {
          le(e), ee(e);
        },
        ...j($) ? { onInput: $ } : {},
        ...j(_) ? { onBlur: (e) => X(e, _) } : {},
        ...j(W) ? { onFocus: (e) => X(e, W) } : {}
      };
    }
    function de(e) {
      r.current = e, q && (q.current = e);
    }
    function fe() {
      return { className: `${w || ""} ${(c == null ? void 0 : c.wrapper) || ""}`.trim() || void 0 };
    }
    function I(e) {
      return c != null && c[e] ? { className: c[e] } : {};
    }
    return /* @__PURE__ */ K("div", { ref: G, ...fe(), children: [
      /* @__PURE__ */ T(
        "input",
        {
          ...te,
          ref: (e) => de(e),
          onChange: (e) => ie(e),
          "aria-expanded": v,
          value: P,
          type: ae,
          role: g.length > 0 ? "combobox" : "",
          autoComplete: "off",
          "aria-autocomplete": "list",
          ...v ? { "aria-controls": V } : {},
          ...I(y.Input),
          ...me()
        }
      ),
      v && /* @__PURE__ */ T(
        "ul",
        {
          role: "listbox",
          "aria-label": oe,
          ref: re,
          id: V,
          ...I(y.Dropdown),
          children: g.map((e, t) => /* @__PURE__ */ K(
            "li",
            {
              role: "option",
              ref: (n) => p.current[t] = n,
              onPointerMove: () => b(-1, t),
              onPointerLeave: () => b(-1, -1),
              onClick: (n) => E(n, t, { isKeyboard: !1, isInput: !1 }),
              onKeyDown: ue,
              "aria-posinset": t + 1,
              "aria-setsize": g.length,
              tabIndex: -1,
              "aria-selected": "false",
              ...I(y.Suggestion),
              [R || "data-active-email"]: t === a.hoveredIndex,
              children: [
                /* @__PURE__ */ T("span", { ...I(y.Username), children: Q }),
                /* @__PURE__ */ K("span", { ...I(y.Domain), children: [
                  "@",
                  e
                ] })
              ]
            },
            e
          ))
        }
      ),
      N
    ] });
  }
);
ye.displayName = "Email";
export {
  y as Elements,
  ye as Email,
  De as domains,
  Ce as useLocalizedList
};
