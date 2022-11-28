import greet from './greet';
import {test, expect} from '@jest/globals';

test ('test greet()', function () {
        expect (greet('Ashley')).toEqual('Good morning, Ashley');
    });

test ('greet should handle the null value', function () {
    expect(greet()).toEqual('Good morning!');
});

test ('greet should handle yelling', function () {
    expect(greet('ASHLEY')).toEqual('GOOD MORNING ASHLEY!');
});

test ('greet should handle 2 names', function () {
    expect(greet(['Ashley', 'Andrea'])).toEqual('Good morning, Ashley, Andrea');
});

test ('greet should handle multiple names', function () {
    expect(greet(['Ashley', 'Andrea', 'Alex'])).toEqual('Good morning, Ashley, Andrea, Alex');
});