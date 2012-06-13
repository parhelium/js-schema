var schema = require('../schema')

var AnythingSchema = function() {
  return new schema(this)
}

AnythingSchema.prototype = {
  compile : function() {
    return { expression : 'instance != null' }
  },
  
  generate : function() {
    var type = [Boolean, Number, String][Math.floor(Math.random()*3)]
    return type.generate()
  },

  toJSON : function() {
    return { type : 'any' }
  }
}

var anythingSchema = module.exports = new AnythingSchema()

schema.fromJS.def(function(sch) {
  if (sch === undefined) return anythingSchema
})

schema.fromJSON.def(function(sch) {
  if (sch.type === 'any') return anythingSchema
})