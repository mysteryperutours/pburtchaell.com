## General Standards

1. Nested elements should be indented with one soft tab.
2. Don't use quotes on attributes that do not have multiple values.
3. Use double quotes and never single quotes.
4. Use lowercase characters and single dashes.
5. Do not underscore or camelCase.
6. Do not include trailing slash in self-closing elements.
7. Do not use closing tags on elements that do not require them.

### Doctype Declaration

Enforce standards mode and more consistent rendering in every browser by declaring the HTML5 doctype at the beginning of every HTML page. Use the declaration in lowercase characters.

```html
<!doctype html>
```

### Space

If an HTML document has complex markup, spacing will help a developer navigate the code easier. Use one line-break to separate major blocks of code from one another.

```html
<main>
  <section>
    ...
  </section>
  <section>
    ...
  </section>
</main>
```

### Modern Standards

Forget archaic HTML or XML tendencies. In HTML5, many elements are not required and new elements should be used when appropriate.

```
<!doctype html>
<link rel=stylesheet href=/public/css/styles.css>
<script src=/public/js/components.js></script>
<main>
  <header>
    ...
  </header>
  <article>
    ...
  </article>
  <footer>
    ...
  </footer>
</main>
```
