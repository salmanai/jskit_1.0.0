var expect = require('chai').expect

var jsdom = require('jsdom')
var fs = require('fs')

describe('Our first Test', () =>{
  it('should pass', () => {
    expect(true).to.equal(true)
  })
})


describe('index.html', () =>{
  it('should say hello', (done) =>{
    var a = fs.readFileSync('./public/index.html', 'utf-8');
    jsdom.env(a, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0]
      expect(h1.innerHTML).to.equal('Hello Express')
      done()
      window.close()
    })
  })
})
