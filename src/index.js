const compose = require('./lib/compose')
const curry = require('./lib/curry')
const identity = require('./lib/identity')
const trace = require('./lib/trace')

const Functor = require('./lib/functor')
const Monad = require('./lib/monad')
const Applicative = require('./lib/applicative')

module.exports = {
  compose,
  curry,
  identity,
  trace,
  Functor,
  Monad,
  Applicative
}
