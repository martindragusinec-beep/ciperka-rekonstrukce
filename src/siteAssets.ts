/**
 * Veřejné statické soubory ve složce `public/images/`.
 * (Vite je servíruje z kořene webu jako `/images/...`.)
 */
export const assets = {
  heroBg: "/images/hero-bg.png",
  promoBannerBg: "/images/promo-banner-bg.png",
  /** Realizace — páry Před/Po podle záložky (Po = po rekonstrukci). */
  beforeAfterObyvak: {
    po: "/images/before-after-obyvak-po.png",
    pred: "/images/before-after-obyvak-pred.png",
  },
  beforeAfterKoupelna: {
    po: "/images/before-after-koupelna-po.png",
    pred: "/images/before-after-koupelna-pred.png",
  },
  beforeAfterKuchyn: {
    po: "/images/before-after-kuchyn-po.png",
    pred: "/images/before-after-kuchyn-pred.png",
  },
  avatarJN: "/images/avatar-jn.png",
  avatarPS: "/images/avatar-ps.png",
  avatarMD: "/images/avatar-md.png",
  iconArrow: "/images/icon-arrow.svg",
  iconLeaf: "/images/icon-leaf.svg",
  iconStar: "/images/icon-star.svg",
  iconPlus: "/images/icon-plus.svg",
  iconPhone: "/images/icon-phone.svg",
  iconCheck: "/images/icon-check.svg",
} as const;
