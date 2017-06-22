Temat pracy magisterskiej: 
Analiza wydajnosci wybranych frameworkow javascriptowych.

Praca magisterska polega na zbadaniu wydajnosci kilku frameworkow javascriptowych i ich por�wnaniu.

1.
W tym celu utworzylem aplikacje testowe we frameworkach: angular, angular2, react, vanillajs 
(czyli czysty javascript - aby z nim por�wna� pozosta�e). Ka�da aplikacja testowa pod wzgl�dem 
funkcjonalno�ci jest identyczna. Podstaw� s� operacje na du�ej liczbie losowych element�w danych 
modelu i manipulowanie nimi (dodawanie, usuwanie, edycja, zamiana miejscami, filtrowanie itp). 
Ka�da operacja zajmuje czas. Gdy element�w jest du�o, czas ten jest wielokrotnie wiekszy 
(co pozwala wychwici� r�nice). W pracy badam ile czasu zajmuje poszczegolnym frameworkom 
wykonywanie tych operacji i por�wnuj� te wyniki ze sob�. 
Aplikacje testowe dostepne s� w repozytoriach mgr-angular1, mgr-angular2, mgr-react, mgr-vanilla. 
Chc�c uruchomi� ca�y projekt, nalezy je wszystkie pobra� do tego katalogu (main). 

2.
Do bada� aplikacji testowych wspominanych wy�ej, utworzylem kolejn� aplikacj� (by zautoamtyzowac 
proces badania), podzielon� na trzy mniejsze : (app1, app2, app3). 

Testowanie w skr�cie (spos�b r�czny)
Badania przeprowadzam w przegl�darce chrome, gdy� posiada ona rozbudowany zestaw narz�dzi do 
badania wydajno�ci aplikacji webowych (timeline, tracing).
Uruchamiam serwer poprzez kt�ry bed� ��czy� si� z aplikacjami testowymi, wpisuj� adres dowolnej, 
np http://localhost:8080/vanillajs/public (aplikacja w czystym js). Chc� np przetestowa� ile 
czasu zajmie dodawanie 1tys element�w do strony. W tym celu wpisuje w odpowiednie pole ilo�c 
dodawanych element�w (1000) klikam odpowiedni przycisk (add). Nast�puje dodanie element�w 
w aplikacji. Nastepnie wciskam przycisk clear - aby pozbyc sie dodanych element�w. Znowu 
wciskam kombinacje add-clear, aby dodac i usunac dodane elementy. Badanie to (dodanie 1 tys 
elementow) powtarzam kilkukrotnie aby otrzyma� dokladniejsze rezultaty. Czas generowania 
element�w , ich dodawania, oraz renderowania strony mog� zmierzy� w chrome przy uzyciu 
narz�dzia timeline (teraz zakladka performance). Z wykres�w odczytuj� czas wykonywania 
skryptu, czasy renderingu oraz calkowity czas dla kazdego dodawania jakie wykonalem, wyniki 
u�redniam (uprzednio odrzucam kilka najgorszych, albo moge tez wybrac kilka najlepszych 
i usrednic). Tak samo posteuje dla innych przypadk�w (usuwanie, edycja, filtrowanie itp). 
W efekcie otrzymam czasy trwania poszczegolnych operacji (zwanych benchmarkami) dla poszczeg�lnych framework�w.

Powy�sze kroki programowo wykonuj� za pomoc� aplikacji umieszczonych 
w repozytoriach mgr-app1, mgr-app2, mgr-app3.
Chcac uruchomi� projekt, nale�y je pobra� do tego katalogu (main).

3.
Uruchamanie projektu: 
npm install  (instalowanie zaleznosci)
Budowanie projektu:
npm build (jesli chcemy wnosic modyfikacje do kodu, w przeciwnym razie niepotrzebne)

nastepnie polecenie (w tym katalogu):
http-server  (aby udostepnic aplikacje testowe)
(jesli nie dzia�a, nalezy zainstalowac je poleceniem: npm http-sever -g)

nastepnie :
node app1/benchmark-runner.js  (uruchomic testowanie wybranych operacji na frameworkach)
node app2/trace-processor.js  (przetwarzanie wynikow)

ostatecznie:
app3/index.html - wizualizacja wynik�w


