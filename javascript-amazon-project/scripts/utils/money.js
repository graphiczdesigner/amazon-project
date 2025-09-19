export function formatCurrency(paymentCents) {
    return (paymentCents / 100).toFixed(2);
}