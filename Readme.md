
# dom-splice

`Array#splice` but for DOM `childNodes`.

## API

### splice(parent, start, deleteCount[, item[, item2]])

Modifies the `childNodes` of the given `parent` at `start`,
deleting the number of elements `deleteCount`, and
optionally also appending `items`.

**Ignores whitespace nodes.**

## License

MIT
