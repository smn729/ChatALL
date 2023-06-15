import { createI18n } from "vue-i18n";

// Import stored language
import store from "../store/index.js";
var lang = store.state.lang;
// if (lang == "auto") {
//   lang = navigator.language || navigator.userLanguage || "en";
//   lang = lang.substr(0, 2); // Only use the first two characters (e.g. "en")
// }

// Import translation files here
import enMessages from "./locales/en.json" assert { type: "json" };
import zhMessages from "./locales/zh.json" assert { type: "json" };
import deMessages from "./locales/de.json" assert { type: "json" };
import ruMessages from "./locales/ru.json" assert { type: "json" };
import viMessages from "./locales/vi.json" assert { type: "json" };
import frMessages from "./locales/fr.json" assert { type: "json" };
import itMessages from "./locales/it.json" assert { type: "json" };
import koMessages from "./locales/ko.json" assert { type: "json" };
import esMessages from "./locales/es.json" assert { type: "json" };

const messages = {
  en: enMessages,
  zh: zhMessages,
  de: deMessages,
  ru: ruMessages,
  vi: viMessages,
  it: itMessages,
  fr: frMessages,
  ko: koMessages,
  es: esMessages,
};

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: lang,
  fallbackLocale: "en",
  messages,
});

export default i18n;
