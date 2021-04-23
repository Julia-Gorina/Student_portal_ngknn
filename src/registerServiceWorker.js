/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'Приложение обслуживается из кэша сервисным работником.\n' +
        'Для получения более подробной информации посетите сайт https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Работник службы был зарегистрирован.')
    },
    cached () {
      console.log('Содержимое было кэшировано для автономного использования.')
    },
    updatefound () {
      console.log('Загружается новый контент.')
    },
    updated () {
      console.log('Новый контент доступен; пожалуйста, обновите его.')
    },
    offline () {
      console.log('Подключение к Интернету не найдено. Приложение работает в автономном режиме.')
    },
    error (error) {
      console.error('Ошибка при регистрации сервисного работника:', error)
    }
  })
}
