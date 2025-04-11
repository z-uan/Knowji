# Knowji

## Cài đặt

```bash
# Cài đặt các dependencies
npm install
```

## Phát triển

```bash
# Khởi động server dev với hot reload tại localhost:3000
npm run dev

# Kiểm tra lỗi định dạng code với Prettier
npm run format:check

# Tự động sửa lỗi định dạng code với Prettier
npm run format

# Kiểm tra lỗi linting với ESLint
npm run lint

# Tự động sửa lỗi linting với ESLint
npm run lint:fix
```

## Biên dịch và triển khai

```bash
# Sinh code tĩnh
npm run generate

# Biên dịch cho production
npm run build

# Chạy bản preview sau khi build
npm run preview
```

## Cấu hình

### Prettier

Cấu hình Prettier được định nghĩa trong file `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "vueIndentScriptAndStyle": true,
  "htmlWhitespaceSensitivity": "strict",
  "plugins": ["prettier-plugin-tailwindcss"],
  "tailwindConfig": "./tailwind.config.ts"
}
```

### ESLint

Cấu hình ESLint được định nghĩa trong file `eslint.config.js`.

## Các thư viện chính

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) 
