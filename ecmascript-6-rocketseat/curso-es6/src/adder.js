export default function adder(...params) {
    return params.reduce( (acc, val) => acc + val)
}