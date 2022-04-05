from abc import ABC, abstractclassmethod
# padrão adapter


class MediaPlayer:
    def __init__(self, player):
        self.__player = player

    def execute(self):
        self.__player.play()


class Target(ABC):
    @abstractclassmethod
    def play(self):
        raise NotImplementedError


class AudioPlayer(Target):
    def play(self):
        print("Play audio")


class VideoAdapter(Target):
    def __init__(self, adaptee):
        self.__adaptee = adaptee

    def play(self):
        # aqui viria a lógica de adaptação
        self.__adaptee.play_mp4()


class VideoPlayer:
    def play_mp4(self):
        print("Play MP4")


MediaPlayer(AudioPlayer()).execute()
MediaPlayer(VideoAdapter(VideoPlayer())).execute()
