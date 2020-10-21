export function multi(...params) {
    return params.reduce( (acc, val) => acc * val)
}

export function div(...params) {
    return params.reduce( (acc, val) => acc / val)
}