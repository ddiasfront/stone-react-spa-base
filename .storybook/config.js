import { configure } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { setIntlConfig, withIntl } from "storybook-addon-intl";
import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import deLocaleData from "react-intl/locale-data/de";
addLocaleData(enLocaleData);
addLocaleData(deLocaleData);

const getMessages = locale => messages[locale];
const getFormats = locale => formats[locale];

// Provide your messages
const messages = {
  en: { "button.label": "Click me!" },
  de: { "button.label": "Klick mich!" }
};

// Provide your formats (optional)
const formats = {
  en: {
    date: {
      custom: {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      }
    }
  },
  de: {
    date: {
      custom: {
        year: "2-digit",
        month: "numeric",
        day: "numeric"
      }
    }
  }
};

setIntlConfig({
  locales: ["en", "de"],
  defaultLocale: "en",
  getMessages,
  getFormats
});

addDecorator(withIntl);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
