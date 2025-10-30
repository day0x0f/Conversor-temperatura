def celsius_to_fahrenheit(c):
    return (c * 9/5) + 32

def fahrenheit_to_celsius(f):
    return (f - 32) * 5/9

def celsius_to_kelvin(c):
    return c + 273.15

def kelvin_to_celsius(k):
    return k - 273.15

print("Conversor de Temperatura")
print("1. Celsius para Fahrenheit")
print("2. Fahrenheit para Celsius")
print("3. Celsius para Kelvin")
print("4. Kelvin para Celsius")

opcao = int(input("Escolha uma opção: "))
valor = float(input("Digite o valor da temperatura: "))

if opcao == 1:
    print(f"{valor}°C = {celsius_to_fahrenheit(valor):.2f}°F")
elif opcao == 2:
    print(f"{valor}°F = {fahrenheit_to_celsius(valor):.2f}°C")
elif opcao == 3:
    print(f"{valor}°C = {celsius_to_kelvin(valor):.2f}K")
elif opcao == 4:
    print(f"{valor}K = {kelvin_to_celsius(valor):.2f}°C")
else:
    print("Opção inválida!")
