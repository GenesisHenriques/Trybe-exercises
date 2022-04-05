from abc import ABC, abstractclassmethod


class PersonagemInterface(ABC):
    @abstractclassmethod
    def falar(self):
        raise NotADirectoryError("Classses filhas devem inplementar esse método")
