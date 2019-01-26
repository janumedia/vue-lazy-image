import LazyImage from './LazyImage.vue'

module.exports =  {
    install: function(Vue, options) {
        Vue.component('lazy-image', LazyImage)
    }
};