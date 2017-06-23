Praca magisterska
======================

## Analiza wydajnosci wybranych frameworkow javascriptowych.

Praca magisterska polega na zbadaniu wydajnosci kilku frameworkow javascriptowych i ich porównaniu.

### 1.
W tym celu utworzylem aplikacje testowe we frameworkach: 
- angular, 
- angular2, 
- react, 

oraz czystym javascript (vanillajs), dla porównania 

Każda aplikacja testowa pod względem funkcjonalnoœci jest identyczna. Podstawą są operacje na dużej liczbie losowych elementów danych modelu i manipulowanie nimi (dodawanie, usuwanie, edycja, zamiana miejscami, filtrowanie itp). Każda operacja zajmuje czas. Gdy elementów jest dużo, czas ten jest wielokrotnie wiekszy 
(co pozwala wychwycić różnice). W pracy badam ile czasu zajmuje poszczegolnym frameworkom wykonywanie tych operacji i porównuje je z czasem vanillajs. 

Aplikacje testowe dostepne są w repozytoriach:
[mgr-test-app-vanillajs](https://github.com/krzysiekdz/mgr-test-app-vanillajs), [mgr-test-app-angular1](https://github.com/krzysiekdz/mgr-test-app-angular1), [mgr-test-app-angular2](https://github.com/krzysiekdz/mgr-test-app-angular2)

Ze wzgledu że wszystkie te aplikacje realizuja te same zadania, opis funkcjonalności umieściłem w jednym pliku: https://github.com/krzysiekdz/mgr-test-app-prototype

### 2.
Do badań wyżej wymienionych aplikacji testowych, utworzylem program testowy napisany w środowisku nodejs. Dzieki temu badania są przeprowadzane automatycznie. Program do testowania składa się z trzech mniejszych, finezyjnie nazwanych: app1, app2, app3.

Testowanie w skrócie (sposób ręczny)

Badania przeprowadzam w przeglądarce chrome, gdyż posiada ona rozbudowany zestaw narzędzi do analizy wydajności aplikacji webowych (timeline, tracing). Uruchamiam serwer poprzez który będę łączył się z aplikacjami testowymi, wpisuję w przeglądarkę adres dowolnej, np http://localhost:8080/vanillajs/public (aplikacja w czystym js). Uruchamian konsolę chrome (ctr+shift+c), zakładka performance, ctrl+e (rozpoczęcie rejestrowania wydajności). Przykładowo chcę zbadać przypadek dodawania 1tys elementów do strony. W tym celu wpisuje w odpowiednie pole ilość dodawanych elementów (1000), klikam odpowiedni przycisk (add). Następuje dodanie elementów w aplikacji. Nastepnie wciskam przycisk clear - aby pozbyc sie dodanych elementów. Znowu wciskam kombinacje add-clear, aby dodawać i usuwać dodawane elementy (aby doadwanie zawsze było w tym samym stanie aplikacji). Kilkukrotne powtarzanie wykonuję aby z otrzymanych próbek obliczyć średnie czasy. Przechodzę znowu do zakładaki performance i wciskam ctrl+e aby zakończyć test. Z wykresów odczytuję takie informacje jak czas wykonywania skryptu, czasy renderingu oraz calkowity czas dla kazdego dodawania jakie wykonalem. Obliczając średnie czasy moge wybrać kilka najlepszych próbek i je uśrednić albo odrzucić kilka najgorszych a usrednic pozostałe. Analogicznie posteuje dla innych przypadków (usuwanie, edycja, filtrowanie itp). W efekcie otrzymam czasy trwania poszczegolnych operacji (zwanych benchmarkami) dla poszczególnych frameworków.

Powyższe kroki programowo wykonuję za pomocą aplikacji app1, app2, app3.
- [app1](https://github.com/krzysiekdz/mgr-app1) - "wyklikiwanie" testów i zapisywaniu wykresów do folderu "traces"
- [app2](https://github.com/krzysiekdz/mgr-app2) - odczyt wykresów z plików, przetwarzanie i uśrednianie czasów, zapis wyników do pliku results.json
- [app3](https://github.com/krzysiekdz/mgr-app3) - prezentacja wyników z pliku results.json


### 3.
Uruchamanie projektu: 
- Zainstalować nodejs.
- Pobrac wszystkie repozytoria do tego folderu
- Polecenie: npm install  (instalowanie zaleznosci)
- Budowanie projektu: npm build (jesli chcemy wnosic modyfikacje do kodu, w przeciwnym razie niepotrzebne)
- Polecenie: http-server  (aby udostepnic aplikacje testowe; jesli nie działa, nalezy zainstalowac je poleceniem: npm http-sever -g)
- Poleceni: node app1/benchmark-runner.js  (uruchamia automatyczne "wyklikiwanie" testów)
- Polecenie: node app2/trace-processor.js  (przetwarzanie wynikow)
- ostatecznie: http://localhost:8080/webdriver/app3/index.html - wizualizacja wyników


