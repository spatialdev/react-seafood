import polygons from '../polygons_2019.json';

expect.extend({
    toBeStringOrNull(received) {
        return received === null || typeof received === 'string' ? {
            message: () => `expected ${received} to be string or null`,
            pass: true
        } : {
            message: () => `expected ${received} to be string or null`,
            pass: false
        };
    }
});

expect.extend({
    toBeNumberOrNull(received) {
        return received === null || typeof received === 'number' ? {
            message: () => `expected ${received} to be number or null`,
            pass: true
        } : {
            message: () => `expected ${received} to be number or null`,
            pass: false
        };
    }
});

expect.extend({
    toBeBooleanOrNull(received) {
        return received === null || typeof received === 'boolean' ? {
            message: () => `expected ${received} to be boolean or null`,
            pass: true
        } : {
            message: () => `expected ${received} to be boolean or null`,
            pass: false
        };
    }
});

describe('polygons_2019.json', () => {
    it('Should contain an array of objects matching the intended shape.', () => {

        let types = ["A/C","Non-Profit","Sponsor","Food","Amusement","Restroom","Fire Department","Police Vehicle","Entertainment","Info Booth"]
        expect(Array.isArray(polygons.features)).toEqual(true);
        polygons.features.forEach(polygon => {
            expect(typeof polygon).toEqual('object');
            expect(polygon.type).toEqual('Feature')
            expect(typeof polygon.properties).toEqual('object')
            const { properties } = polygon;
            expect(properties.icon).toBeStringOrNull();
            expect(properties.show_icon).toBeStringOrNull();
            expect(typeof properties.id).toEqual('number');
            expect(typeof properties.name).toEqual('string');
            expect(types).toContain(properties.type);
            expect.toBeNumberOrNull(properties.rotate);
            expect.toBeBooleanOrNull(properties.left_panel);
        });
    });
})