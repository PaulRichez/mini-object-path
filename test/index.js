var miniObjectPath = require("..");
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

const test = { get: [], set: [] };
// test Get
test.get.push(miniObjectPath.get(obj, 0) == 100)
test.get.push(miniObjectPath.get(obj, 'a') == 0)
test.get.push(miniObjectPath.get(obj, 'b.c') == 'c1')
test.get.push(miniObjectPath.get(obj, ['b', 'd', 'abd']).toString() == '2')
test.get.push(miniObjectPath.get(obj, ['b', '5']) == 'v5')
test.get.push(miniObjectPath.get(obj, ['b', '6', 6]) == 56)
test.get.push(JSON.stringify(miniObjectPath.get(obj, ['b', 'd'])) == JSON.stringify({ abd: '2', ee: 'ff' }))
console.log('test get success: ' + test.get.filter(v => !!v).length + '/' + test.get.length)
if (test.get.filter(v => !!v).length != test.get.length) {
    return console.log('test canceled, cause get on error')
}

const testSetReturnValue = function (obj, path, value) {
    copyObj = Object.assign({}, obj)
    return JSON.stringify(miniObjectPath.set(copyObj, path, value)) == JSON.stringify(miniObjectPath.get(copyObj, path))

}
test.set.push(testSetReturnValue(obj, 0, '123'))
test.set.push(testSetReturnValue(obj, 1, 'new path'))
test.set.push(testSetReturnValue(obj, ['b', 'c'], 'new C1'))

console.log('test set success: ' + test.set.filter(v => !!v).length + '/' + test.set.length)