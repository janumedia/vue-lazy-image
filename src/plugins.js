import LazyImage from './LazyImage.vue'

export function install(Vue) {
    if(install.installed) return;
    install.installed = true;
    Vue.component('lazy-image', LazyImage);
}

export default LazyImage;