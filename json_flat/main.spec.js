const { expect } = require('@jest/globals')
const flatJSON = require('./main')

describe("FlatJSON",()=>{
  it("Check if flattens",()=>
  {
    expect(flatJSON({"a":1})).toEqual({"a":1})
  })
})

describe("FlatJSON",()=>{
  it("Check if flattens",()=>
  {
    expect(flatJSON({"a":1,"b":2})).toEqual({"a":1,"b":2})
  })
})

describe("FlatJSON",()=>{
  it("Check if flattens",()=>
  {
    expect(flatJSON({"a":1,"b":2,"c":{"d":"test"}})).toEqual({"a":1,"b":2,"c.d":"test"})
  })
})