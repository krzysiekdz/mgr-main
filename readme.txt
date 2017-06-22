Temat pracy magisterskiej: 
Analiza wydajnosci wybranych frameworkow javascriptowych.

Praca magisterska polega na zbadaniu wydajnosci kilku frameworkow javascriptowych i ich porównaniu.

1.
W tym celu utworzylem aplikacje testowe we frameworkach: angular, angular2, react, vanillajs 
(czyli czysty javascript - aby z nim porównaæ pozosta³e). Ka¿da aplikacja testowa pod wzglêdem 
funkcjonalnoœci jest identyczna. Podstaw¹ s¹ operacje na du¿ej liczbie losowych elementów danych 
modelu i manipulowanie nimi (dodawanie, usuwanie, edycja, zamiana miejscami, filtrowanie itp). 
Ka¿da operacja zajmuje czas. Gdy elementów jest du¿o, czas ten jest wielokrotnie wiekszy 
(co pozwala wychwiciæ ró¿nice). W pracy badam ile czasu zajmuje poszczegolnym frameworkom 
wykonywanie tych operacji i porównujê te wyniki ze sob¹. 
Aplikacje testowe dostepne s¹ w repozytoriach mgr-angular1, mgr-angular2, mgr-react, mgr-vanilla. 
Chc¹c uruchomiæ ca³y projekt, nalezy je wszystkie pobraæ do tego katalogu (main). 

2.
Do badañ aplikacji testowych wspominanych wy¿ej, utworzylem kolejn¹ aplikacjê (by zautoamtyzowac 
proces badania), podzielon¹ na trzy mniejsze : (app1, app2, app3). 

Testowanie w skrócie (sposób rêczny)
Badania przeprowadzam w przegl¹darce chrome, gdy¿ posiada ona rozbudowany zestaw narzêdzi do 
badania wydajnoœci aplikacji webowych (timeline, tracing).
Uruchamiam serwer poprzez który bedê ³¹czy³ siê z aplikacjami testowymi, wpisujê adres dowolnej, 
np http://localhost:8080/vanillajs/public (aplikacja w czystym js). Chcê np przetestowaæ ile 
czasu zajmie dodawanie 1tys elementów do strony. W tym celu wpisuje w odpowiednie pole iloœc 
dodawanych elementów (1000) klikam odpowiedni przycisk (add). Nastêpuje dodanie elementów 
w aplikacji. Nastepnie wciskam przycisk clear - aby pozbyc sie dodanych elementów. Znowu 
wciskam kombinacje add-clear, aby dodac i usunac dodane elementy. Badanie to (dodanie 1 tys 
elementow) powtarzam kilkukrotnie aby otrzymaæ dokladniejsze rezultaty. Czas generowania 
elementów , ich dodawania, oraz renderowania strony mogê zmierzyæ w chrome przy uzyciu 
narzêdzia timeline (teraz zakladka performance). Z wykresów odczytujê czas wykonywania 
skryptu, czasy renderingu oraz calkowity czas dla kazdego dodawania jakie wykonalem, wyniki 
uœredniam (uprzednio odrzucam kilka najgorszych, albo moge tez wybrac kilka najlepszych 
i usrednic). Tak samo posteuje dla innych przypadków (usuwanie, edycja, filtrowanie itp). 
W efekcie otrzymam czasy trwania poszczegolnych operacji (zwanych benchmarkami) dla poszczególnych frameworków.

Powy¿sze kroki programowo wykonujê za pomoc¹ aplikacji umieszczonych 
w repozytoriach mgr-app1, mgr-app2, mgr-app3.
Chcac uruchomiæ projekt, nale¿y je pobraæ do tego katalogu (main).

3.
Uruchamanie projektu: 
npm install  (instalowanie zaleznosci)
Budowanie projektu:
npm build (jesli chcemy wnosic modyfikacje do kodu, w przeciwnym razie niepotrzebne)

nastepnie polecenie (w tym katalogu):
http-server  (aby udostepnic aplikacje testowe)
(jesli nie dzia³a, nalezy zainstalowac je poleceniem: npm http-sever -g)

nastepnie :
node app1/benchmark-runner.js  (uruchomic testowanie wybranych operacji na frameworkach)
node app2/trace-processor.js  (przetwarzanie wynikow)

ostatecznie:
app3/index.html - wizualizacja wyników


