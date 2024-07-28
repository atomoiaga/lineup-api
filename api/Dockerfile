FROM node:18-alpine as build

RUN apk --no-cache add shadow

RUN groupadd -r customgroup && useradd -r -g customgroup customuser

ENV HOME /home/customuser

RUN mkdir -p $HOME && chown -R customuser:customgroup $HOME

WORKDIR $HOME/app

RUN chown -R customuser:customgroup $HOME/app

# if I use this user I get access denied on `npm install` and `npm run build`
# USER customuser

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]

# [X] Containerizarea aplicatie (vreau ca in momentul in care rulez aplicatia, sa porneasca by default fara sa fiu nevoit sa specific vreo comanda);

# [ ] Configurarea aplicatiei pentru environmente diferite cu schimbari ce se reflecta in cod; (???)

# [X] Folosirea eficienta a caching-ului dintre layere;

# [X] Optimizarea din punct de vedere a dimensiunii imaginii;
#     Vreau sa specificati o lista cu minim 2 actiuni pe care le-ati luat pentru a reduce dimensiunile imaginii finale;
#     - am utilizat versiunea de node 20-alpine, pentu a reduce dimensiunea imaginii finale;
#     - am folosit .dockerignore pentru a nu copia in imagine fisierele care nu sunt necesare;

# [ ] Optimizarea imaginii din punct de vedere a securitatii:
#     Vreau sa specificati o lista cu minim 2 actiuni pe care le-ati luat pentru a spori securitatea;
#     - crearea unui custom user si a unui custom group pentru a rula aplicatia;
#     - ...

# [ ] Folosirea de Multi Stage Builds;

# Incarcarea imaginii intr-un registry public pe DockerHub;
