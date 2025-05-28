# python -m pytest test.py
import json
import requests

def trivia_fetch(num):
  ruta_http = "http://numbersapi.com/"
  ruta_compuesta = ruta_http + str(num) + "?json"
  response = requests.get(ruta_compuesta) # El ?json es para que recupere la info en formato json

  trivia = json.loads(response.content)
  return trivia
numero = 42
print(trivia_fetch(numero))
"""
def main():
  print("Hello learners!")
"""
"""
__name__ == input("Ingresa opcion: ")

if __name__== "__main__":
  main()
""" 
