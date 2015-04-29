export default function slice(el, start, del, ...items){
  let children = el.childNodes;

  // if negative we start from the end
  if (start < 0) start = children.length + start;
  start = Math.max(0, start);

  let sel = children[start];
  let ret = [];

  if (sel) {
    // if deletion count is not specified
    // and neither is insertion, all the
    // elements following `start` are removed
    if (!del && !items.length) {
      del = children.length - start;
    }

    del = Math.max(0, del);
    if (del) {
      for (let i = 0; i < del; i++) {
        let child = children[start + i];
        if (child) {
          el.removeChild(child);
          ret.push(child);
        }
      }
      sel = children[start + del];
    }

    if (items.length) {
      if (sel) {
        items.forEach(function(item){
          el.insertBefore(item, sel);
        });
      } else {
        append();
      }
    }
  } else {
    append();
  }

  function append(){
    items.forEach(el.appendChild, el);
  }

  return ret;
}
