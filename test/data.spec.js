require('../src/data.js');


describe('example', () => {
  it('is a function', () => {
    expect(typeof example.example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example.example()).toBe('example');
  });
});


describe('filtrado', () =>{
  it('is a function', () => {
    expect(typeof example.filtrado).toBe('function');
  });
  it('returns `filtrado`', () => {
    expect(example.filtrado()).toBe('filtrado');
  });
});

describe('mostrar', () => {
  it('is a function', () => {
    expect(typeof example.mostrar).toBe('function');
  });
  it('returns `mostrar`', () => {
    expect(example.mostrar()).toBe('mostrar');
  });
});
