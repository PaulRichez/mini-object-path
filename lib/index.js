const get = function (obj, path) {
    if (typeof path === 'number') path = [path]
    if (!path || path.length === 0) return obj
    if (typeof path === 'string') return get(obj, path.split('.'))
    return get(obj[path[0]], path.slice(1))
}

const set = function (obj, path, value) {
    if (typeof path === 'number') path = [path]
    if (!path || path.length === 0) return obj
    if (typeof path === 'string') return set(obj, path.split('.').map(obj[path[0]]), value)
    var currentPath = path[0]
    var currentValue = getShallowProperty(obj, currentPath)
    if (path.length === 1) {
        obj[currentPath] = value
        return value
    }
    if (currentValue === void 0) {
        //check if we assume an array
        if (typeof path[1] === 'number') {
            obj[currentPath] = []
        } else {
            obj[currentPath] = {}
        }
    }
    return set(obj[currentPath], path.slice(1), value)
}
function getShallowProperty(obj, prop) {
    if ((typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop)) {
        return obj[prop]
    }
}
function hasOwnProperty(obj, prop) {
    if (obj == null) {
        return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
}
module.exports = {
    get: get,
    set: set
}