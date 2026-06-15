/// <reference types="vite/client" />

declare module '*.md?raw' {
  const content: string;
  export default content;
}

declare module '*.mmd?raw' {
  const content: string;
  export default content;
}
