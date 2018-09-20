var Indexes = require('flumeview-query/indexes')
var pkg = require('./package.json')
exports.name = 'threads-index'
exports.version = pkg.version
//doesn't expose any methods, but adds an index that can be used
//by ssb-query
exports.manifest = {}

exports.init = function (sbot, config) {

  var view =
    sbot._flumeUse('query/threads', Indexes(1, {
      indexes: [
        {key: 'rt', value: [['value', 'content', 'root'], ['timestamp']]}
      ]
    }))

  var indexes = view.indexes()
  sbot.query.add(indexes[0])

  return {}
}






