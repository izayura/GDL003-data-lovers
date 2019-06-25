require('../src/data.js');
const RICKANDMORTY= require('../src/data/rickandmorty/rickandmorty.js');

describe('dataLovers', () => {

  it('is a object', () => {
    expect(typeof dataLovers).toBe('object');
  });

describe('dataLovers.filterData', () =>{
  it('is a function', () => {
    expect(typeof dataLovers.filterData).toBe('function');
  });
  it('returns `filteredData`', () => {
    expect(dataLovers.filterData(RICKANDMORTY, "male")).toBe("filteredData");
  });
});

describe('dataLovers.sortData', () => {
  it('is a function', () => {
    expect(typeof dataLovers.sortData).toBe('function');
  });
  it('returns `sortedData`', () => {
    expect(dataLovers.sortData(RICKANDMORTY, name)).toBe("sortedData");
  });
});

describe('dataLovers.computeStats', () => {
  it('is a function', () => {
    expect(typeof dataLovers.computeStats).toBe('function');
  });
  it('returns `stats`', () => {
    expect(dataLovers.computeStats(RICKANDMORTY)).toBe("stats");
  });
});

});
