# vue-lazy-image
Vue Lazy Image  component

## Installation
```
npm i -D @janumedia/vue-lazy-image
```
or with yarn
```
yarn add -D @janumedia/vue-lazy-image
```

## Usage
### Browser
```
<script src="https://unpkg.com/vue@2.5.22/dist/vue.min.js"></script>
<script src="https://unpkg.com/@janumedia/vue-lazy-image/dist/vue-lazy-image.min.js"></script>
<script type="text/x-template" id="main">
  <div class="container">
    <lazy-image src="your-image.jpg" placeHolder="your-placeholder-image.jpg" width="300" alt="My Imagea Title"/>
  </div>
</script>
<script>
  //register component
  Vue.use(LazyImage)
  
  const main = {
    template: '#main'
  };
  
  new Vue({
  el: '#app',
  render(h) {
    return h(main)
  };
})
</script>
```
### Node
```
<script>
import LazyImage from '@janumedia/vue-lazy-image'
export default {
  components: { LazyImage }
}
<script>
<template>
  <div>
    <lazy-image src="your-image.jpg" placeHolder="your-placeholder-image.jpg" width="300" alt="My Image Title"/>
  <div/>
</template>
```

## Polyfill
> Although this component has fallback support to browser that no support `IntersectionObserver`, you still can implement `IntersectionObserver` polyfill from [this library](https://github.com/w3c/IntersectionObserver/tree/master/polyfill) to this [supported browser](https://github.com/w3c/IntersectionObserver/tree/master/polyfill#browser-support)
