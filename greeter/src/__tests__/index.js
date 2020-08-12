import { Greeter } from '..';

describe('Greeter', () => {
    let greeter;
    beforeAll(() => {
        greeter = new Greeter();
    });

    const RealDate = Date;
    afterEach(() => {
        global.Date = RealDate;
    });

    describe('greet names', () => {
        beforeEach(() => {
            const fixedDate = new Date();
            fixedDate.setHours('13');

            Date.now = () => fixedDate;
        });

        it('should return Joe greeting', () => {
            expect(greeter.greet('Joe')).toBe('Hello Joe');
        });

        it('should return Jane greeting', () => {
            expect(greeter.greet('Jane')).toBe('Hello Jane');
        });

        it('should trim input name', () => {
            expect(greeter.greet('   Peter   ')).toBe('Hello Peter');
        });

        it('should capitalise the first letter of the name', () => {
            expect(greeter.greet('dan')).toBe('Hello Dan');
        });
    });

    describe('greet time of day greetings', () => {
        [6, 7, 8, 9, 10, 11].forEach((hour) => {
            it(`should return Good morning when called at ${hour} `, () => {
                const fixedDate = new Date();
                fixedDate.setHours(hour);

                Date.now = () => fixedDate;

                expect(greeter.greet('Joe')).toBe('Good morning Joe');
            });
        });

        [12, 13, 14, 15, 16, 17].forEach((hour) => {
            it(`should return Hello when called at ${hour} `, () => {
                const fixedDate = new Date();
                fixedDate.setHours(hour);

                Date.now = () => fixedDate;

                expect(greeter.greet('Joe')).toBe('Hello Joe');
            });
        });

        [18, 19, 20, 21].forEach((hour) => {
            it(`should return Good evening when called at ${hour} `, () => {
                const fixedDate = new Date();
                fixedDate.setHours(hour);

                Date.now = () => fixedDate;

                expect(greeter.greet('Joe')).toBe('Good evening Joe');
            });
        });

        [1, 2, 3, 4, 5, 22, 23, 24].forEach((hour) => {
            it(`should return Good night when called at ${hour} `, () => {
                const fixedDate = new Date();
                fixedDate.setHours(hour);

                Date.now = () => fixedDate;

                expect(greeter.greet('Joe')).toBe('Good night Joe');
            });
        });
    });
});
