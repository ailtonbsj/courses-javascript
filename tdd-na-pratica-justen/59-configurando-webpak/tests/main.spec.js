describe('Main', function () {

  before(function () {
    console.log('before')
  })
  after(function () {
    console.log('after')
  })
  afterEach(function () {
    console.log('afterEach')
  })

  describe('Method A', function () {
    context('Case 1', function () {
      it('shoud happen blabla', function () {
        console.log('test1')
      })
    })
  })
  describe('Method B', function () {
    context('Case 1', function () {
      it('shoud happen sh sh', function () {
        console.log('test2')
      })
    })
  })
})