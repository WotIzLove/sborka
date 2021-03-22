<template>
  <div id="app">
    <Header />
    <ShopBody />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import ShopBody from "./components/ShopBody.vue";

export default {
  name: "App",
  components: {
    Header,
    ShopBody,
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);
}
#app {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

button {
  padding: 0;
}

*,*:focus,*:hover{
    outline:none;
}

</style>
