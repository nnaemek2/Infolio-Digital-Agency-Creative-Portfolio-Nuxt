export default function correctStylesheetsOrder({
  preview,
  lightMode,
  showcases,
}) {
  let previewStylesheet = document.querySelector(
    `link[href="/landing-preview/css/preview-style.css"]`
  );
  let globalDarkStylesheet = document.querySelector(
    `link[href="/dark/assets/css/style.css"]`
  );
  let globalLightStylesheet = document.querySelector(
    `link[href="/light/assets/css/style.css"]`
  );
  let pluginsDarkStylesheet = document.querySelector(
    `link[href="/dark/assets/css/plugins.css"]`
  );
  let pluginsLightStylesheet = document.querySelector(
    `link[href="/light/assets/css/plugins.css"]`
  );

  if (lightMode && !preview) {
    document.head.append(pluginsLightStylesheet);
    document.head.append(globalLightStylesheet);

    let pluginsStylesheets = document.querySelectorAll(
      `link[href="/light/assets/css/plugins.css"]`
    );
    if (pluginsStylesheets.length > 1) {
      pluginsStylesheets[0].remove();
    }

    let globalStylesheets = document.querySelectorAll(
      `link[href="/light/assets/css/style.css"]`
    );
    if (globalStylesheets.length > 1) {
      globalStylesheets[0].remove();
    }

    if (showcases) {
      let pluginsStylesheets = document.querySelector(
        `link[href="/dark/assets/css/plugins.css"]`
      );
      if (pluginsStylesheets) pluginsStylesheets.remove();
      let globalStylesheets = document.querySelector(
        `link[href="/dark/assets/css/style.css"]`
      );
      if (globalStylesheets) globalStylesheets.remove();
    }
  }
  if (!lightMode && !preview) {
    document.head.append(pluginsDarkStylesheet);
    document.head.append(globalDarkStylesheet);

    let pluginsStylesheets = document.querySelectorAll(
      `link[href="/dark/assets/css/plugins.css"]`
    );
    if (pluginsStylesheets.length > 1) {
      pluginsStylesheets[0].remove();
    }

    let globalStylesheets = document.querySelectorAll(
      `link[href="/dark/assets/css/style.css"]`
    );
    if (globalStylesheets.length > 1) {
      globalStylesheets[0].remove();
    }
  }

  if (preview && previewStylesheet) {
    document.head.append(previewStylesheet);
    if (globalLightStylesheet) globalLightStylesheet.remove();
    if (pluginsLightStylesheet) pluginsLightStylesheet.remove();
  } else if (!preview && previewStylesheet) {
    previewStylesheet.remove();
  }
}
