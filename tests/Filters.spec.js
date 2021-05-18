import { shallowMount } from '@vue/test-utils';
import { Filters } from '../src/components/Filters.vue';

test('Filter', () => {
  it('render', () => {
    const wrapper = shallowMount(Filters) // shallowMount - не задевает дочерние компоненты, что делает обработку быстрее
    console.log(wrapper.html);
    expect(wrapper.html()).toContain('Hello world');
  })
})