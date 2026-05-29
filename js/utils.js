export function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function flipCoin() {
    return Math.random() < 0.5;
}

export function ucFirst(str) {
    if (!str) return '';

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
