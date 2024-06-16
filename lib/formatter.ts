export function formateCurrency(amount: number) {
  return amount.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'INR'
});
}
export function formateDate(date: Date) {
  return date.toLocaleDateString('en-IN');
}
export function formateCapital(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}