import { shallowMount } from '@vue/test-utils'
import LazyImage from '@/LazyImage'

const createWrapper = propsData => shallowMount(LazyImage, {
    attachToDocument: true,
    propsData
});

describe('LazyImage.vue', () => {
    let wrapper,
        IMAGE               = 'image.jpg',
        IMAGE_PLACEHOLDER   = 'custom-image-placeholder.jpg',
        props               = { src: IMAGE, alt: 'image title'};
    
    beforeAll(() => {
        LazyImage.components = LazyImage.components || {};
    });

    afterEach(() => {
        //destory wrapper
        wrapper.destroy();
    });

    it('should render LazyImage default', () => {
        wrapper = createWrapper(props);
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render LazyImage custom placeHolder', () => {
        wrapper = createWrapper({...props, placeHolder: IMAGE_PLACEHOLDER});
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render LazyImage custom width', () => {
        wrapper = createWrapper({...props, width: 300});
        expect(wrapper.html()).toMatchSnapshot();
    });
})