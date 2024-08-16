const setup = require('sools-modeling-hedera/setup')
const mixer = require('sools-core/mixer')
const Wikiable = require('sools-wiki/mixins/Wikiable')

setup.routing.actions.unshift({
  name: 'sools-wiki',
  content: '<i class="fa-solid fa-file-lines"></i>',
  url: '',
  check(model) {
    return mixer.is(model, Wikiable)
  },
  async execute(req, res, next) {
    await res.page(import('./WikiPage'), req.model)
  }
})