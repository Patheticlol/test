const _0x48253a = (function () {
    let _0x314e72 = true
    return function (_0x2c5ac3, _0x46cb16) {
      const _0x3a892d = _0x314e72
        ? function () {
            if (_0x46cb16) {
              const _0x4c7055 = _0x46cb16.apply(_0x2c5ac3, arguments)
              return (_0x46cb16 = null), _0x4c7055
            }
          }
        : function () {}
      return (_0x314e72 = false), _0x3a892d
    }
  })(),
  _0x10e6a7 = _0x48253a(this, function () {
    let _0x54608e
    try {
      const _0x126262 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x54608e = _0x126262()
    } catch (_0x51584b) {
      _0x54608e = window
    }
    const _0x4f62bf = (_0x54608e.console = _0x54608e.console || {}),
      _0x52f459 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x136508 = 0; _0x136508 < _0x52f459.length; _0x136508++) {
      const _0x12f4c9 = _0x48253a.constructor.prototype.bind(_0x48253a),
        _0x57589c = _0x52f459[_0x136508],
        _0x11e0dc = _0x4f62bf[_0x57589c] || _0x12f4c9
      _0x12f4c9['__proto__'] = _0x48253a.bind(_0x48253a)
      _0x12f4c9.toString = _0x11e0dc.toString.bind(_0x11e0dc)
      _0x4f62bf[_0x57589c] = _0x12f4c9
    }
  })
_0x10e6a7()
let namechange = prompt('What do you want to set your minutes to?', 'Type here.')
document.getElementsByClassName('css-up62gm-Ticker-TOT e16nsggm0').innerHTML = namechange
