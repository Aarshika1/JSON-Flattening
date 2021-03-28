const { expect } = require('@jest/globals')
const flatJSON = require('./main')

describe("FlatJSON",()=>{
  it("Check if flattens",()=>
  {
    expect(flatJSON({})).toEqual({})
  })
})

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

describe("FlatJSON",()=>{
  it("Check if flattens",()=>
  {
    expect(flatJSON({"a":1,"b":2,"c":{"d":"test","e":{"f":"Hello","g":true}}})).toEqual({"a":1,"b":2,"c.d":"test","c.e.f":"Hello","c.e.g":true})
  })
})