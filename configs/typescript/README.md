# `@chotospace/typescript-config`

Config files for typescript `tsconfig.json`.

### Setup

Edit the following files in the nextjs project to set the package.

Update `package.json` file

```json filename=package.json
{
  // ...
  "devDependencies": {
    // ...
    "@chotospace/typescript-config": "workspace:*",
    // ...
  }
}
```

Update `tsconfig.json` file

```json filename=tsconfig.json
{
  "extends": "@chotospace/typescript-config/nextjs",
  // ...
}
```

Install the dependancies

```bash
pnpm i
```

### Exports

- `@chotospace/typescript-config/base`: Base TypeScript config file.
- `@chotospace/typescript-config/nextjs`: TypeScript config for nextjs.
- `@chotospace/typescript-config/react-library`: TypeScript config for react based package.