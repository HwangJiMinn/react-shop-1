import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// * localize 템플릿 문자열 치환
export const replaceT = (template: string, params: Record<string, string>) => {
  return template.replace(/{{(.*?)}}/g, (_, key) => params[key.trim()] ?? key);
};

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const toCurrencyFormat = (value: number) => {
  currencyFormat.format(value);
};
