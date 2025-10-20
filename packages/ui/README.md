# `@chotospace/ui`

UI Design System.

### Setup

Edit the following files in the nextjs project to set the package.

1. Update `next.config.ts` file.

```ts filename=next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@chotospace/ui'],
};

export default nextConfig;

```

2. Update `package.json` file.

```json filename=package.json
{
  // ...
  "devDependencies": {
    // ...
    "@chotospace/ui": "workspace:*",
    // ...
  }
}
```

3. Update `postcss.config.mjs` file.

```js filename=postcss.config.mjs
// biome-ignore lint/performance/noBarrelFile: <"allow standard practice">
export { default } from '@chotospace/ui/postcss.config';
```

4. Update `tsconfig.json` file.

```json filename=tsconfig.json
{
  //...
  "compilerOptions": {
    // ...
    "paths": {
      // ...
      "@chotospace/ui/*": ["../../packages/ui/src/*"]
    },
    // ...
  },
  // ...
}
```

5. Install the dependancies to link with the package.

```bash
pnpm i
```