import { shallowMount } from '@vue/test-utils'
import store from '~/store'
import router from '~/routes'
import loadImage from '~/plugins/loadImage'
import Movie from '~/routes/Movie'

describe('routes/Movie.vue', () => {
  let wrapper
  beforeEach(async () => {
    window.scrollTo = jest.fn()
    router.push('/movie/tt1234567')
    await router.isReady()
    wrapper = shallowMount(Movie, {
      global: {
        plugins: [
          store,
          router,
          loadImage
        ]
      }
    })

  })

  test('최초 접속한 URL의 파라미터를 확인합니다.', () => {
    expect(wrapper.vm.$route.params.id).toBe('tt1234567')
  })

  test('최초 접속한 URL의 파라미터를 확인합니다.', () => {
    const url = 'https://google.com/sample_image_SX300.jpg'
    expect(wrapper.vm.requestDiffSize(url)).toContain('SX700')
    expect(wrapper.vm.requestDiffSize(url, 900)).toContain('SX900')
  })
})