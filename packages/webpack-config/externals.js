/**
 * Generates a full webpack `external` listing declaring names for various module formats.
 * @param {Record<string, string | string[]>} externals
 */
function externalize(externals) {
  const newExternals = {}
  for (const pkgName in externals) {
    if (externals.hasOwnProperty(pkgName)) {
      newExternals[pkgName] = {
        commonjs: pkgName,
        commonjs2: pkgName,
        amd: pkgName,
        root: externals[pkgName],
      }
    }
  }
  return newExternals;
}

const externals = externalize({
  "react": "React",
  "react-dom": "ReactDOM"
});

module.exports = externals