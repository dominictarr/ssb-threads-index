# ssb-threads-index

This is a example of a ssb plugin that adds indexes for ssb-query.
depends on [this flumeview-query PR](https://github.com/flumedb/flumeview-query/pull/15)

An index for `value.content.root` is added, which means
queries for threads is now fast:

```
sbot.query.read({query: [{
  $filter: {
    value: {
      content: {
        root: "%rciFuVmIAi6WxamBNcF+EYSnJtngAbHwxxmtudsz3v4=.sha256"
      }
    }
  }
}]})
```

## License

MIT


