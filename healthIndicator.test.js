import { getHealthStatus } from './healthIndicator';

test('should return healthy for health above 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
});

test('shood return wounded for health between 15 and 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
});

test('shood return critical for health below 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
});

test('shood return critical for health exactly 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 15 })).toBe('wounded');
});

test('shood return wounded for health exactly 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 50 })).toBe('wounded');
})