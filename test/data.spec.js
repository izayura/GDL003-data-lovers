require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('filtrado', () => {
  it('is a function', () => {
    expect(typeof example.filtrado).toBe('function');
  });
  
  it('returns `filtrado`', () => {
    expect(example()).toBe('filtrado');
  });
});

describe('mostrar', () => {
  it('is a function', () => {
    expect(typeof example.mostrar).toBe('function');
  });

  it('returns `mostrar`', () => {
    expect(example()).toBe('mostrar');
  });
});