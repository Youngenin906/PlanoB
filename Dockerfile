# Usa a imagem oficial do Nginx
FROM nginx:alpine

# Copia os arquivos do seu site para a pasta padrão do Nginx
# (Considerando que seus arquivos estão na pasta atual)
COPY . /usr/share/nginx/html

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80