const DEFAULT_VALUE = "default";

export const sayHello = (name: string) => `Hello, ${name}!`;
export const withDefault = (val: unknown, fallback = DEFAULT_VALUE) => val ?? fallback;
export const formatGreeting = (name: string, prefix = "Dear") => `${prefix} ${name},`;
