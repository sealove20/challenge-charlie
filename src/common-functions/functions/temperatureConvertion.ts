const FREEZING_FAHRENHEIT_TEMPERATURE = 32
const SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE = 9
const SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE = 5

export const fahrenheitToCelsius = (fahrenheitTemperature: number) => {
  return (fahrenheitTemperature - FREEZING_FAHRENHEIT_TEMPERATURE) * SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE / SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE
}

export const celsiusToFahrenheit = (celsiusTemperature: number) => {
  return (celsiusTemperature / SIMPLIFIED_CELSIUS_BOILING_TEMPERATURE) * SIMPLIFIED_FAHRENHEIT_BOILING_TEMPERATURE + FREEZING_FAHRENHEIT_TEMPERATURE
}
