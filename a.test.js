class A {}
class B {}


describe("a", () => {
  it("1", () => {
    expect({ foo: 1, bar: undefined }).toEqual({ foo: 1 });
  });
  it("2", () => {
    const a = new A;
    const b = new B;
    a.foo = 1;
    b.foo = 1;
    b.bar = undefined;
    expect(a).toEqual(b);
  });
  it("3", () => {
    expect({ foo: 1, bar: undefined }).toStrictEqual({ foo: 1, bar: undefined });
  });
});
