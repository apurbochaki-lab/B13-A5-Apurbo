const date = '2024-01-15T10:30:00Z';
// const d = new Date(date);

// const format = d.toLocaleDateString("en-US")
// console.log(format)

// Expected formate : 1/15/2024



const d = `new Date(${date}).toLocaleDateString("en-US")`
console.log(d)