const multiplicity: number = 2;
const maxValueChart: number = 8;
const isOdd = (n: number): boolean => n % multiplicity !== 0;
const minimumPairs: number = 2;
const maxBonus: number = 2000;
const middleBonus: number = 1000;
const minBonus: number = 100;

type SumDigits = { even: number; odd: number };


function getBonus(promoCode: number): number {
    let bonus: number = 0;

    if (!isPromoCodeValid(promoCode)) return bonus;

    const promoCodeArray: number[] = getArrayFromCode(promoCode);

    const oddPairs: number[][] = getOddPairs(promoCodeArray);

    if (oddPairs.length >= minimumPairs) {
        bonus = oddPairs
            .filter((pair) => pair[0] < pair[1])
            .length === minimumPairs ? maxBonus : middleBonus;
    } else {
        const { even, odd } = getEvenOddSums(promoCodeArray);
        if (even > odd) {
            bonus = minBonus;
        }
    }

    return bonus;
}

function isPromoCodeValid(promoCode: number): boolean {
    return (
        Math.trunc(promoCode) === promoCode && promoCode < 10 ** maxValueChart 
        && promoCode >= 10 ** (maxValueChart - 1)
    )
}

function getArrayFromCode(code: number): number[] {
    let truncedNumber = Math.trunc(code % 10);

    if (code < 10) {
        return [truncedNumber]
    }

    const arr: number[] = getArrayFromCode(code / 10);
    arr.push(truncedNumber)
    return arr;
}

function getOddPairs(arr: number[]): number[][] {
    return arr.reduce((acc: number[][], curr: number, i: number): number[][] => {
        const next = arr[i + 1];
        const prev = arr[i - 1];
        if (isOdd(curr) && (next && isOdd(next))) {
            if (!prev || !isOdd(prev)) {
                acc.push([curr, next]);
            } else {
                if (!isOdd(prev)) {
                    acc.length && acc.splice(0, 1);
                }
            }
        }
        return acc;
    }, []);
}

function getEvenOddSums(arr: number[]): SumDigits {
    return arr.reduce(
        (acc: SumDigits, curr: number): SumDigits => {
            if (isOdd(curr)) {
                acc.odd = curr + acc.odd;
            } else {
                acc.even = curr + acc.even;
            }
            return acc;
        },
        { even: 0, odd: 0 }
    );
}


console.log(getBonus(45962417)); // 2000
console.log(getBonus(72152484)); // 100
console.log(getBonus(84533920)); // 0
console.log(getBonus(48183276)); // 100
console.log(getBonus(73289388)); // 1000
console.log(getBonus(35787918)) // 2000
