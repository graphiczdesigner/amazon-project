export function formatCurrency(paymentCents) {
    return (Math.round(paymentCents) / 100).toFixed(2);
}