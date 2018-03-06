import Rule from './Rule';
import Symbolizer from '../Symbolizer/Symbolizer';
import Filter from '../Filter/Filter';
import ScaleDenominator from '../ScaleDenominator/ScaleDenominator';

it('is defined', () => {
  expect(Rule).toBeDefined();
});

describe('Constructor', () => {
  it('can be created with only without filter or scaledenominator', () => {
    const symbolizer = new Symbolizer();
    const rule = new Rule(symbolizer);
    expect(rule).toBeDefined();
    expect(rule.symbolizer).toBe(symbolizer);
  });

  it('can be created with style and filter', () => {
    const symbolizer = new Symbolizer();
    const filter = new Filter();
    const rule = new Rule(symbolizer, filter);
    expect(rule).toBeDefined();
    expect(rule.symbolizer).toBe(symbolizer);
    expect(rule.filter).toBe(filter);
  });

  it('can be created with style and scaleDenominator', () => {
    const symbolizer = new Symbolizer();
    const scaleDenominator = new ScaleDenominator();
    const rule = new Rule(symbolizer, undefined, scaleDenominator);
    expect(rule).toBeDefined();
    expect(rule.symbolizer).toBe(symbolizer);
    expect(rule.scaleDenominator).toBe(scaleDenominator);
  });

  it('can be created with style, filter and scaleDenominator', () => {
    const symbolizer = new Symbolizer();
    const filter = new Filter();
    const scaleDenominator = new ScaleDenominator();
    const rule = new Rule(symbolizer, filter, scaleDenominator);
    expect(rule).toBeDefined();
    expect(rule.symbolizer).toBe(symbolizer);
    expect(rule.filter).toBe(filter);
    expect(rule.scaleDenominator).toBe(scaleDenominator);
  });
});

describe('Accessors', () => {
  describe('Symbolizer', () => {
    it('getter returns the _symbolizer property', () => {
      const symbolizer = new Symbolizer();
      const rule = new Rule(symbolizer);
      const got = rule.symbolizer;
      expect(got).toBe(symbolizer);
    });

    it('setter sets the _symbolizer property', () => {
      const symbolizer = new Symbolizer();
      const setSymbolizer = new Symbolizer();
      const rule = new Rule(symbolizer);
      rule.symbolizer = setSymbolizer;
      expect(rule.symbolizer).toBe(setSymbolizer);
    });
  });
  describe('Filter', () => {
    it('getter returns the _filter property', () => {
      const symbolizer = new Symbolizer();
      const filter = new Filter();
      const rule = new Rule(symbolizer, filter);
      const got = rule.filter;
      expect(got).toBe(filter);
    });

    it('setter sets the _filter property', () => {
      const symbolizer = new Symbolizer();
      const filter = new Filter();
      const setFilter = new Filter();
      const rule = new Rule(symbolizer, filter);
      rule.filter = setFilter;
      expect(rule.filter).toBe(setFilter);
    });
  });
  describe('ScaleDenominator', () => {
    it('getter returns the _filter property', () => {
      const symbolizer = new Symbolizer();
      const scaleDenominator = new ScaleDenominator();
      const rule = new Rule(symbolizer, undefined, scaleDenominator);
      const got = rule.scaleDenominator;
      expect(got).toBe(scaleDenominator);
    });

    it('setter sets the _scaleDenominator property', () => {
      const symbolizer = new Symbolizer();
      const scaleDenominator = new ScaleDenominator();
      const setScaleDenominator = new ScaleDenominator();
      const rule = new Rule(symbolizer, undefined, scaleDenominator);
      rule.scaleDenominator = setScaleDenominator;
      expect(rule.scaleDenominator).toBe(setScaleDenominator);
    });
  });
});
