import { publicUrl } from "./lib/publicUrl";

/**
 * Veřejné statické soubory ve složce `public/` (cesty přes `publicUrl` kvůli `base` v `vite.config`).
 */
export const assets = {
  logo: publicUrl("logo-ciperka.svg"),
  heroBg: publicUrl("images/hero-bg.png"),
  promoBannerBg: publicUrl("images/promo-banner-bg.png"),
  /** Realizace — páry Před/Po podle záložky (Po = po rekonstrukci). */
  beforeAfterObyvak: {
    po: publicUrl("images/before-after-obyvak-po.png"),
    pred: publicUrl("images/before-after-obyvak-pred.png"),
  },
  beforeAfterKoupelna: {
    po: publicUrl("images/before-after-koupelna-po.png"),
    pred: publicUrl("images/before-after-koupelna-pred.png"),
  },
  beforeAfterKuchyn: {
    po: publicUrl("images/before-after-kuchyn-po.png"),
    pred: publicUrl("images/before-after-kuchyn-pred.png"),
  },
  avatarJN: publicUrl("images/avatar-jn.png"),
  avatarPS: publicUrl("images/avatar-ps.png"),
  avatarMD: publicUrl("images/avatar-md.png"),
  iconArrow: publicUrl("images/icon-arrow.svg"),
  iconLeaf: publicUrl("images/icon-leaf.svg"),
  iconStar: publicUrl("images/icon-star.svg"),
  iconPlus: publicUrl("images/icon-plus.svg"),
  iconPhone: publicUrl("images/icon-phone.svg"),
  iconCheck: publicUrl("images/icon-check.svg"),
} as const;
