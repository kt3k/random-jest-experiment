class A {}
class B {}

describe("a", () => {
  it("1", () => {
    expect({ foo: 1, bar: undefined }).toEqual({ foo: 1 })
  })

  it("2", () => {
    const a = new A()
    const b = new B()
    a.foo = 1
    b.foo = 1
    b.bar = undefined
    expect(a).toEqual(b)
  })

  it("3", () => {
    expect({ foo: 1, bar: undefined }).toStrictEqual({
      foo: 1,
      bar: undefined,
    })
  })

  it("4", () => {
    class A {
      a = 1
    }
    class B {
      a = 1
    }
    expect(new A()).toEqual(new B())
  })

  it("5", () => {
    class A {
      a = 1
    }
    class B {
      a = 1
    }
    expect(new A()).toStrictEqual(new A())
  })
})
