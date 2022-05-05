def analyze(text):
  report = ""
  count_words = len(text.split(" "))
  report += f"Número de palavras = {count_words}\n"

  char_counter = dict()
  for char in text:
    if char in char_counter:
      char_counter[char] += 1
    else:
      char_counter[char] = 1

  report += f"Quantidade por caracter = {char_counter}"

  return report

text_to_analyze = (
  "Um cidadão fez voto de desapego e pobreza. Dispôs de todos os seus bens e propriedades, reservou para si apenas duas tangas, e saiu pelo mundo afora em busca de todos os sábios, medindo na verdade o desapego de cada um. Levava apenas uma tanga no corpo."
)

print(analyze(text_to_analyze))