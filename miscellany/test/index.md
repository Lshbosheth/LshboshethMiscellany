---
next:
  text: 'index1'
  link: '/test/index1'
---

index

::: info
This is an info box.
:::

::: tip
This is a tip
:::

::: warning 自定义标题
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
```js
export default {
  data() {
    return {
      msg: 'Focused!', // [!code  focus]
    } // 上面的 !code focus 之间的空格实际为 1 个
  },
}
```
:::
```js:line-numbers
export default {
  data() {
    return {
      msg: 'Highlighted!',
    }
  },
}
```
```js
export default {
  data() {
    return {
      msg: 'Focused!', // [!code  focus]
    } // 上面的 !code focus 之间的空格实际为 1 个
  },
}
```
```js
export default {
  data () {
    return {
      msg: 'Removed', // [!code  --]
      msg1: 'Added' // [!code  ++]
    } // 上面的 !code -- 之间的空格实际为 1 个
  }
}
```
```js:line-numbers
export default {
  data() {
    return {
      msg: 'Error', // [!code  error]
      msg: 'Warning', // [!code  warning]
    } // 上面的 !code error 之间的空格实际为 1 个
  },
}
```
:::code-group

```js:line-numbers [index.js]
const a = 1
```

```ts:line-numbers [index.ts]
const a: number = 1
```

:::


<Badge type="info" text="default" />
<Badge type="tip" text="^1.9.0" />
<Badge type="warning" text="beta" />
<Badge type="danger" text="caution" />
