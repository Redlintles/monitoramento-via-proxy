import socket
from http.server import BaseHTTPRequestHandler, HTTPServer
import requests

class ProxyHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        resp = requests.get(f"http://localhost:3000{self.path}");
        self.send_response(resp.status_code)
        for key,value in resp.headers.items():
            self.send_header(key,value)
        self.end_headers()
        self.wfile.write(resp.content)

        logGetFile = open("logGetFile.txt","+a")
        logGetFile.write(f"\nSTART\nPATH: {self.path}\n")
        logGetFile.write(f"HEADERS:\n{self.headers}\n")
        logGetFile.write(f"CONTENT:\n{resp.text}\n\n\nEND\n")
        logGetFile.close()

    def do_POST(self):
        content_length = int(self.headers["Content-Length"])
        post_data = self.rfile.read(content_length)

        resp = requests.post(f"http://localhost:3000{self.path}",data=post_data,headers=dict(self.headers))

        self.send_response(resp.status_code)
        for key, value in resp.headers.items():
            self.send_header(key,value)
        self.end_headers()
        self.wfile.write(resp.content)

        # print(f"Recebida uma requisição POST para {self.path}")
        # print(f"Cabeçalhos da requisição: {self.headers}")


        logPostFile = open("logPostFile.txt","+a")
        logPostFile.write(f"\nSTART\nPATH: {self.path}\n")
        logPostFile.write(f"HEADERS:\n{self.headers}\n")
        logPostFile.write(f"CONTENT:\n{post_data.decode("utf-8")}\n\n\nEND\n")
        logPostFile.close()


def run(server_class = HTTPServer, handler_class = ProxyHTTPRequestHandler, port = 8000):
    server_adress = ("", port)
    httpd = server_class(server_adress,handler_class)
    print(f"Servidor proxy HTTP rodando na porta{port}")
    httpd.serve_forever()

if __name__ == "__main__":
    run()