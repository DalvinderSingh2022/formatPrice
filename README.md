---

# 📦 Price Formatter

Format price numbers with currency symbols effortlessly. Ensure consistent and clear price display in your JavaScript applications.

---

## 📥 Installation

Install via npm:

```bash
npm install price-formatter
```

---

## 🚀 Usage

```js
const formatPrice = require('price-formatter');

const price = formatPrice('$', 100);
// => "$ 100"
```

---

## 🛠️ Functionality

```js
formatPrice(symbol: string, price: number): string
```

* **symbol**: Currency symbol (e.g., `$`, `€`, `₹`)
* **price**: Number to format

### 🔁 Returns:

* If `price` is **0** or not a number → `"symbol 0"`
* If `price` is **negative** → `"-symbol number"`
* If `price` is **positive** → `"symbol number"`

---

## 💡 Examples

```js
formatPrice('$', 100);     // "$ 100"
formatPrice('€', -50);     // "-€ 50"
formatPrice('₹', 0);       // "₹ 0"
formatPrice('£', 'text');  // "£ 0"
```

---

## 🤝 Contributing

1. **Fork** the repo
2. **Clone** your fork

   ```bash
   git clone https://github.com/your-username/price-formatter.git
   ```
3. **Create a branch**

   ```bash
   git checkout -b feature/YourFeature
   ```
4. **Make your changes**
5. **Commit**

   ```bash
   git commit -m "Add some feature"
   ```
6. **Push & PR**

   ```bash
   git push origin feature/YourFeature
   ```

Open a Pull Request from your forked branch on GitHub.

---

## 📄 License

Licensed under the **ISC License**. See the `LICENSE` file for details.

---