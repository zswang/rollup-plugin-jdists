const pluginutils = require('rollup-pluginutils')
const jdists = require('jdists')

module.exports = function (options) {
  options = options || {}
  const filter = pluginutils.createFilter(options.include, options.exclude)
  return {
    transform: function (code, id) {
      if (!filter(id)) {
        return null
      }

      return {
        code: jdists.build(code, {
          path: id,
          clean: false,
          fromString: true,
        })
      }
    }
  }
}
