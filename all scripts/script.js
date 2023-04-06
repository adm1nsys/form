 var msg =
    " Form ";
  var chars = Array.from(msg);

  function scrollTitle() {
    chars.push(chars.shift());
    document.title = chars.join("");
    window.setTimeout(scrollTitle, 100);
  }

  (function() {
    scrollTitle();
  })();