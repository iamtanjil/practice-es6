const multiply = (one, two, three = 7) => {
    const sum = one * two * three;
    return sum;
}

const result = multiply(1,1);
console.log(result);