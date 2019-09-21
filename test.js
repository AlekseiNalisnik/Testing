// const { getSliced } = require('./utils');
// const { data } = require('./data');

// test('test getSliced, count = 3', () => {
//     expect(getSliced(data, 3).length).toBe(3);
// });

// test('test getSliced, count = -1', () => {
//     expect(getSliced(data, -1).length).toBe(0);
// });

// test('test getSliced, count = -5', () => {
//     try {
//         getSliced(data, -5);
//     } catch (e) {
//         expect(e.message).toBe('some error');
//     }
// });

// test('test getSliced, count = {}', () => {
//     expect(getSliced(data, {}).length).toBe(0);
// });

const { encode } = require('./utils');

test('test encode(din)', () => {
    expect(encode('din')).toBe('(((');
});

test('test encode(recede)', () => {
    expect(encode('recede')).toBe('()()()');
});

test('test encode(Success)', () => {
    expect(encode('Success')).toBe(')())())');
});

test('test encode(CodeWarrior)', () => {
    expect(encode('CodeWarrior')).toBe('()(((())())');
});

test('test encode(Supralapsarian)', () => {
    expect(encode('Supralapsarian')).toBe(')()))()))))()(');
});

test('test encode(iiiiii)', () => {
    expect(encode('iiiiii')).toBe('))))))');
});

test('test encode((( @)', () => {
    expect(encode('(( @')).toBe('))((');
});

test('test encode( ( ( ))', () => {
    expect(encode(' ( ( )')).toBe(')))))(');
});

test('test encode(@J@c!@@@z@@))', () => {
    expect(encode('@J@c!@@@z@@)')).toBe(')()(()))())(');
});

test('test encode(kzmdGmmuImcmmmn)', () => {
    expect(encode('kzmdGmmuImcmmmn')).toBe('(()(())(()()))(');
});

test('test encode(Od)OIOORQOmS)', () => {
    expect(encode('Od)OIOORQOmS')).toBe(')(()())(()((');
});

test('test encode(QTnTTTPIv(TT)', () => {
    expect(encode('QTnTTTPIv(TT')).toBe('()()))(((())');
});

test('test encode(kyQe@!cyJmyyvFyyyyy)', () => {
    expect(encode('kyQe@!cyJmyyvFyyyyy')).toBe('()((((()(())(()))))');
});

