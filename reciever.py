from socket import *
import base64


serverName = 'localhost'
serverPort = 12000
serverSocket = socket(AF_INET, SOCK_DGRAM)
serverSocket.bind(('', serverPort))

message = "No message"


print('The server is ready to receive')

while True:
    
    message, clientAddress = serverSocket.recvfrom(1024)
    message = message.decode('utf-8')

    print("Message: ", message)

    print(message + " from reciever.py")

    with open("message.txt", "w") as f: 
        f.write(str(message))



     




