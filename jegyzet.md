

git beallitasa:
#git telepítése:
``````
apt install git
````
#git alap beallitasa:
`````
git config --global user.email "sajat@email.hu"
git config --global user.name "sajatusernevem"
`````
#git push config:
````
git config --global push.default matching
````
gitignore file tartalmazza azokat a mappákat vagy fileokat amiket a git nem kell hogy figyelembe vegyen

# git használata
Előszőr hozzáadjuk a commithoz azokat a fileokat amiket fel szeretnénk pusholni:
új üres repo készítése:
````
git ini
````
meglévő klónozása

git clone /path/to/repo

Munka után a változásokat az alábbi paranccsal tudjuk megnézni:
````
git status
````

pl: a gitignore file-t
`````
git add .gitignore
`````
pl ha az egész mappát hozzá akarjuk adni (minden file-t)
abban a mappában amelyikben a git repository található
````
   git add .
````
Commitoljuk azokat a fájlokat amelyeket hozzáadtuk az addparanccsal
````
git commit -m "commit üzenetem"
````
A comitot pusholni kell, ekkor adódik hozzá a távoli repohoz
````
git push
````












