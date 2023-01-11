// Given a time in 12 -hour AM/PM format, convert it to military (24-hour) time.
function timeConversion(s: string): string {
    const isAm: boolean = s.includes('AM');
    const [hr, min, sc] = s.split(':');
    const scSubStr = sc.substring(0, 2);
    if (isAm && (hr === '12')) {
        return `00:${min}:${scSubStr}`;
    } else if (isAm) {
        return `${hr}:${min}:${scSubStr}`
    } else if (!isAm && (hr === '12')) {
        return `${hr}:${min}:${scSubStr}`
    } else {
        return `${Number.parseInt(hr) + 12}:${min}:${scSubStr}`
    }
}