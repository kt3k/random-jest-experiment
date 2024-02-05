class A {}
class B {}

class Duration {
  time;
  unit;

  constructor(time, unit) {
    this.time = time;
    this.unit = unit;
  }

  toString() {
    return `[Duration: ${this.time.toString()}${this.unit}]`;
  }

  equals(other) {
    if (this.unit === other.unit) {
      return this.time === other.time;
    }

    if (
      (this.unit === "H" && other.unit === "M") ||
      (this.unit === "M" && other.unit === "S")
    ) {
      return (this.time * 60) === other.time;
    }

    if (
      (other.unit === "H" && this.unit === "M") ||
      (other.unit === "M" && this.unit === "S")
    ) {
      return (other.time * 60) === this.time;
    }

    return (this.time * 60 * 60) === other.time;
  }
}

function isDurationMatch(a, b) {
  const isDurationA = a instanceof Duration;
  const isDurationB = b instanceof Duration;

  if (isDurationA && isDurationB) return a.equals(b);
  if (isDurationA === isDurationB) return undefined;
  return false;
}

const duration1 = new Duration(1, "S");
const duration2 = new Duration(2, "M");
const duration3 = new Duration(120, "S");

expect.addEqualityTesters([isDurationMatch]);

function* toIterator(array) {
  for (const obj of array) {
    yield obj;
  }
}

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
    }
    class B {
    }
    expect(new A()).toEqual(new B())
  })

  it("5", () => {
    class A {
    }
    class B {
    }
    expect(new A()).not.toStrictEqual(new B())
  })

  it("6", () => {
    expect(duration3).toEqual(duration2);
    //expect(toIterator([duration1, duration2])).toEqual(toIterator([duration2, duration1]))
    //expect([duration1, duration2]).toEqual([duration2, duration1])
    expect({ a: duration2, b: undefined }).toStrictEqual({
      a: duration3,
      b: undefined,
    });
  })
})
