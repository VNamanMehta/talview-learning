export const range = (s, e) => {
    return [...Array(e-s).keys()].map((el) =>  el+s)
}