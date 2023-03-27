import { mount } from '@vue/test-utils'
import CardHome from '@/components/CardHome.vue'

describe('CardHome', () => {
  it('renders information', () => {
    const climaActual = {
      name: 'Ciudad de México',
      main: {
        temp: 24
      },
      weather: [
        {
          icon: '01d'
        }
      ]
    }

    const wrapper = mount(CardHome, {
      props: {
        climaActual: climaActual
      }
    })

    // Busca el título del componente y verifica que se renderiza correctamente
    expect(wrapper.find('h1').text()).toBe('Indicador del clima')

    // Busca el div que muestra la información del clima y verifica que se renderiza correctamente
    const resultDiv = wrapper.find('.result')
    expect(resultDiv.exists()).toBe(true)
    expect(resultDiv.find('p').text()).toBe(climaActual.name)
    expect(resultDiv.find('p:nth-child(2)').text()).toBe(`Temperatura ${climaActual.main.temp}°`)
    expect(resultDiv.find('img').attributes('src')).toBe(`https://raw.githubusercontent.com/Shamanesss/app_weather/main/src/assets/img/weather_icons/${climaActual.weather[0].icon}.png`)

    // Verifica que el div que muestra la imagen de búsqueda no se renderiza
    expect(wrapper.find('.imagenGif').exists()).toBe(false)
  })

  
})