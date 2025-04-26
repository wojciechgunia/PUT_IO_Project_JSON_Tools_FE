# JSON Tools - Frontend

### Autorzy wykonanego projektu:
<img src="https://skillicons.dev/icons?i=github" height="25" alt="github logo"/> [Wojciech Gunia](https://github.com/wojciechgunia)<br>
<img src="https://skillicons.dev/icons?i=github" height="25" alt="github logo"/> [Remigiusz Janicki](https://github.com/TheRemekk)
## Spis treści

1. [Opis](#l1)
2. [Instalacja](#l2)
3. [Zrzuty ekranu](#l3)
4. [Struktura projektu](#l4)

<a id="l1"></a>
## Opis

Aplikacja internetowa do formatowania, filtrowania oraz wyświetlania struktur danych zapisanych w formacie JSON a także do porównania ich między sobą. 
JSON Tools pozwala zarówno na zminifikowanie niezminifikowanej reprezentacji JSON, a także na operację odwrotną, która reprezentuje pełną strukturę z dodaniem odstępów oraz nowych linii.
Projekt napisany w środowisku [Angular CLI](https://github.com/angular/angular-cli) na wersji 16.1.3.  


<a id="l2"></a>
## Instalacja

Uwaga! Aby aplikacja internetowa działała zgodnie z opisem należy wcześniej zainstalować i skompilować [backend](https://github.com/wojciechgunia/PUT_IO_Project_JSON_Tools) wykonany w Java Spring Boot.

Aby uruchomić ten projekt lokalnie, wykonaj poniższe kroki:

### 1. Klonowanie repozytorium  
```bash
  cd <scieżka_w_której_chcesz_umieścić_projekt>
  git clone https://github.com/wojciechgunia/PUT_IO_Project_JSON_Tools_FE
  ``` 

### 2. Instalacja zależności
```bash
  npm install
  ``` 

### 3. Uruchomienie projektu
```bash
  ng serve  
  ```

Zalecam korzystać ze środowiska WebStorm lub VS Code przy interakcji z aplikacją.  
Domyślny port na którym działa aplikacja to 4200.

<a id="l3"></a>
## Zrzuty ekranu

<details>
  <summary>Formularz dodawania JSON'a ➕</summary>
  <img src="screenshots/JSON Tools s1.PNG" alt="Formularz dodawania JSON"/>
</details>

<details>
  <summary>Ekran startowy 🚩</summary>
  <img src="screenshots/JSON Tools s2.PNG" alt="Ekran startowy"/>
</details>

<details>
  <summary>Ekran minimalizacji struktury JSON 🧬</summary>
  <img src="screenshots/JSON Tools s3.PNG" alt="Ekran minimalizacji struktury JSON"/>
</details>

<details>
  <summary>Ekran filtrowania struktury JSON 🗑</summary>
  <img src="screenshots/JSON Tools s4.PNG" alt="Ekran filtrowania struktury JSON"/>
</details>

<details>
  <summary>Ekran porównywarki struktur JSON 🎎</summary>
  <img src="screenshots/JSON Tools s5.PNG" alt="Ekran porownywarki struktur JSON"/>
</details>
