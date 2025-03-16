# Запуск линтера
lint:
	npx eslint .
# Компиляция проекта
build:
	npx tsc

# Запуск проекта
start:
	npx ts-node src/index.ts