export const toMoney = (value: number, currency: string, locale: string): string => {

    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits: 2,
    });
    return formatter.format(value);
}