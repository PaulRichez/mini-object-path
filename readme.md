# Simple Object Path
A small lib for get or set object via path

### Advantage
1. less than 50rows
2. only 1 ko size
   
# ✨ Installation
```
npm i mini-object-path
```

# 🚀 Usage
```javascript
var miniObjectPath = require("mini-object-path")
var obj = {
    0: 100,
    a: 0,
    b: {
        c: 'c1',
        d: {
            'abd': '2',
            'ee': 'ff'
        },
        'd.0': {
            'd.1': 'd1'
        },
        5: 'v5',
        6: {
            '6': 56
        }
    }
}

miniObjectPath.get(obj, 0) // 100
miniObjectPath.get(obj, 1) // undefined
miniObjectPath.get(obj, ['b', '6', 6]) // 56

miniObjectPath.set(obj, 1, 'value')
miniObjectPath.get(obj, 1) // 'value'

miniObjectPath.set(obj,  ['b', '6', 6], '85')
miniObjectPath.get(obj,  ['b', '6', 6]) // '85'
```
## 🐛 &nbsp; _Bugs_

If any bugs are found please report them as a [Github Issue](https://github.com/PaulRichez/mini-object-path/issues)
