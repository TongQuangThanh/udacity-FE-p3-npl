export function checkForName(inputText) {
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]
    if(!!inputText || names.includes(inputText)) {
      return true
    }
    return false
}
