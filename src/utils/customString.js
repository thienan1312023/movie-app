export function replaceAll(str, find, replace) {
    return str && str.replace(new RegExp(find, 'g'), replace);
}
