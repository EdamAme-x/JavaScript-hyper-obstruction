const _0x380f1f = _0x5817;
(function(_0x38071b, _0x310d2a) {
    const _0x1fef11 = _0x5817,
        _0x1fb8ef = _0x38071b();
    while (!![]) {
        try {
            const _0x530d2f = -parseInt(_0x1fef11(0x1d5)) / 0x1 + parseInt(_0x1fef11(0x1d6)) / 0x2 * (parseInt(_0x1fef11(0x1e4)) / 0x3) + -parseInt(_0x1fef11(0x1e0)) / 0x4 + parseInt(_0x1fef11(0x1e6)) / 0x5 * (-parseInt(_0x1fef11(0x1d7)) / 0x6) + -parseInt(_0x1fef11(0x1d9)) / 0x7 * (-parseInt(_0x1fef11(0x1e9)) / 0x8) + parseInt(_0x1fef11(0x1e7)) / 0x9 * (-parseInt(_0x1fef11(0x1db)) / 0xa) + parseInt(_0x1fef11(0x1dc)) / 0xb;
            if (_0x530d2f === _0x310d2a) break;
            else _0x1fb8ef['push'](_0x1fb8ef['shift']());
        } catch (_0x32957d) {
            _0x1fb8ef['push'](_0x1fb8ef['shift']());
        }
    }
}(_0x4c73, 0x60260));
import {
    Hono
} from 'hono';
import _0x194127 from 'npm:javascript-obfuscator';

function _0x4c73() {
    const _0x3be779 = ['/obstruction', './index.html', '/minify', '1099900miUYDY', 'console.log(\x27You\x20have\x20no\x20code!\x27)', 'getObfuscatedCode', 'json', '1143sBvwiu', 'html', '865aboZPA', '1226979jNFwsx', 'text', '10936zNsjTF', 'body', '29713fSwvsG', '82AYuhDj', '3258WgiQSm', 'code', '651sgaybl', 'req', '10wYfPxt', '8646330SCMheE'];
    _0x4c73 = function() {
        return _0x3be779;
    };
    return _0x4c73();
}
import _0x58dcc7 from 'npm:babel-minify';

function _0x5817(_0x424311, _0x534044) {
    const _0x4c73b6 = _0x4c73();
    return _0x5817 = function(_0x58172b, _0xd58501) {
        _0x58172b = _0x58172b - 0x1d5;
        let _0x9c1fd5 = _0x4c73b6[_0x58172b];
        return _0x9c1fd5;
    }, _0x5817(_0x424311, _0x534044);
}
const app = new Hono();
app['get']('/', async _0x1f6075 => {
    const _0x8c1ac3 = _0x5817;
    return _0x1f6075[_0x8c1ac3(0x1e5)](await Deno['readTextFile'](_0x8c1ac3(0x1de)));
}), app['post'](_0x380f1f(0x1df), async _0x10cd3e => {
    const _0x12558d = _0x380f1f,
        _0x4d4f3b = _0x10cd3e[_0x12558d(0x1da)][_0x12558d(0x1ea)] ? await _0x10cd3e[_0x12558d(0x1da)][_0x12558d(0x1e8)]() : _0x12558d(0x1e1);
    let _0x1bae9e = {
        'code': _0x4d4f3b
    };
    return _0x4d4f3b && (_0x1bae9e = _0x58dcc7(_0x4d4f3b, {})), _0x10cd3e['json']({
        'code': _0x1bae9e[_0x12558d(0x1d8)]
    });
}), app['post'](_0x380f1f(0x1dd), async _0x26b538 => {
    const _0x39d3e2 = _0x380f1f;
    let _0x4b3fd7 = _0x26b538[_0x39d3e2(0x1da)][_0x39d3e2(0x1ea)] ? await _0x26b538['req']['text']() : _0x39d3e2(0x1e1);
    return _0x4b3fd7 && (_0x4b3fd7 = _0x194127['obfuscate'](_0x4b3fd7)[_0x39d3e2(0x1e2)]()), _0x26b538[_0x39d3e2(0x1e3)]({
        'code': _0x4b3fd7
    });
}), Deno['serve'](app['fetch']);
