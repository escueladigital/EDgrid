# Estilos base
Los estilos base normalizan los elementos HTML para Responsive Web Design.

```scss
*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin      : 0;
  font-family : sans-serif;
}

img {
  max-width : 100%;
  height    : auto;
}

a {
  text-decoration : none;

  &:hover { text-decoration : underline }
}
```
