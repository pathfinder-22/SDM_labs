# Запуск линтера
lint:
	npx eslint .

# Запуск автоматического исправления ошибок
lint-fix:
	npx eslint . --fix

# Компиляция проекта
build:
	npx tsc

# Запуск проекта
start:
	npx ts-node src/index.ts