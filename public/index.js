import './index.css'
import numerals from 'numeral'
const courseValue = numerals(1000).format('$0,0.00')
debugger;
console.log(`I would pay ${courseValue} for this course`)
