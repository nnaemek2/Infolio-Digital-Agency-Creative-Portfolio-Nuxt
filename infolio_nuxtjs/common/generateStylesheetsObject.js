export default function generateStylesheetObject(stylesheets) {
  return stylesheets.map((stylesheet) => ({
    rel: 'stylesheet',
    url: stylesheet,
    precedence: 'default',
  }));
}
