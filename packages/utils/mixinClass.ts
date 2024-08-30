const mixinClass = (base, ...mixins) => {
    const mixinProps = (target, source) => {
      Object.getOwnPropertyNames(source).forEach(prop => {
        if (/^constructor$/.test(prop)) { return; }
        Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
      })
    };
  
    let Ctor;
    if (base && typeof base === 'function') {
      Ctor = class extends base {
        constructor(...props) {
          super(...props);
        }
      };
      mixins.forEach(source => {
        mixinProps(Ctor.prototype, source.prototype);
      });
    } else {
      Ctor = class {};
    }
    return Ctor;
  };
  
  class A {
    methodA() {}
  }
  class B {
    methodB() {}
  }
  class C extends mixinClass(A, B) {
    methodA() { console.log('methodA in C'); }
    methodC() {}
  }
  
  let c = new C();
  c instanceof C  // true
  c instanceof A  // true
  c instanceof B  // false

  export default mixinClass