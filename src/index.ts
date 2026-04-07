export const sayHello = (name: string) => `Hello, ${name}!`;
export const withDefault = (val: unknown, fallback = "default") => val ?? fallback;
