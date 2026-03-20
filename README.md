# Test Task Mobile App

React Native приложение с использованием Redux Toolkit и Redux Persist для кэширования состояния.

## 📱 О проекте

Мобильное приложение, разработанное на React Native 0.78.0. Включает в себя управление состоянием через Redux Toolkit с сохранением данных между сессиями (Redux Persist), навигацию, работу с сетью и набор готовых UI компонентов.

---

## 🚀 Запуск проекта

### Требования

| Компонент  | Версия                 |
| ---------- | ---------------------- |
| Node.js    | >= 18                  |
| npm / yarn | последняя стабильная   |
| iOS        | Xcode 14+, CocoaPods   |
| Android    | Android Studio, JDK 17 |

### Установка

```bash
# Клонирование репозитория
git clone https://github.com/Fufik0903/TestTaskMobileNew.git
cd TestTaskMobileNew

# Установка npm пакетов
npm install
# или
yarn install

# Установка iOS зависимостей (только для iOS)
cd ios && pod install && cd ..
```

Запуск на iOS
npm run ios

# или

npx react-native run-ios

Запуск на Android
npm run android

# или

npx react-native run-android

Запуск Metro (отдельно)
npm start

# или

npx react-native start --reset-cache
Очистка кэша

# Очистка Metro

npx react-native start --reset-cache

# Полная переустановка

rm -rf node_modules && npm install
cd ios && rm -rf Pods Podfile.lock && pod install && cd ..

📚 Используемые библиотеки

🧩 Основные

Библиотека Версия Назначение
react-native 0.78.0 Фреймворк для кросс-платформенной разработки
react 19.0.0 UI библиотека

🗃 Управление состоянием

Библиотека Версия Назначение
@reduxjs/toolkit ^2.11.2 Управление состоянием приложения
react-redux ^9.2.0 Связь React с Redux
redux-persist ^6.0.0 Кэширование состояния в AsyncStorage
@react-native-async-storage/async-storage ^1.24.0 Хранилище для persist

🧭 Навигация

Библиотека Версия Назначение
@react-navigation/native ^7.0.0 Основная навигация
@react-navigation/stack ^7.0.0 Стековая навигация
@react-navigation/bottom-tabs ^7.0.0 Таб-навигация
react-native-screens ^4.0.0 Оптимизация навигации
react-native-safe-area-context ^5.0.0 Безопасные зоны

🎨 UI компоненты и анимации

Библиотека Версия Назначение
react-native-svg ^15.15.4 Работа с SVG
react-native-linear-gradient ^2.8.3 Градиенты
react-native-skeleton-placeholder ^5.2.4 Скелетоны загрузки
@gorhom/bottom-sheet ^4.6.4 Нижние шторки
react-native-reanimated ^3.16.0 Анимации
react-native-gesture-handler ^2.30.0 Обработка жестов
react-native-reanimated-carousel ^4.0.3 Карусель с анимациями

🌐 Работа с сетью

Библиотека Версия Назначение
axios ^1.13.6 HTTP запросы

🔧 Инструменты разработки

Библиотека Версия Назначение
typescript ^5.9.3 Типизация
@react-native-community/cli 15.0.1 CLI для React Native
@react-native/metro-config 0.78.0 Конфигурация Metro
react-native-svg-transformer ^1.5.3 Трансформация SVG для Metro
jest ^29.6.3 Тестирование
eslint ^8.19.0 Линтинг
prettier 2.8.8 Форматирование кода

Архитектурные подходы

FSD

Управление состоянием (Redux Toolkit + Redux Persist)

Компонентный подход
