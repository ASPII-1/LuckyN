function generate(idx) {
    const randomNumbers = [];
    for (let i = 0; i < idx; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}
function sum(dice) {
    let ans = 0;
    for (let i = 0; i < dice.length; i++) {
        ans += dice[i];
    }
    return ans;
}
export { generate, sum }
