const template = require('./template.html')
const Component = require('sools-hedera/Component')
require('./style.scss')


module.exports = class WikiPage extends Component {
  constructor(model) {
    super()
    this.model = model
  }

  async onReady() {
    this.summary.update()
  }
}
  .define({
    name: 'sools-wiki-page',
    template,
  })
  .properties({
    model: 'any',
  })