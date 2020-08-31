# Dashboard

- `/`
    - statystyki dzisiejszych zamówień (zdalne i lokalne)
    - listę rezerw i eventów zaplanowanych na dzisiaj 

# Logowanie 

- `/login`
    - pola na login i hasło
    - guzik do zalogowania (link do dashboard)

# Widok dostępnści stolików

- `/tables`
    - wybór daty i godz
    - tabela z listą rezerwacji oraz wydarzeń 
        - każda kolumna  = 1 stolik
        - każdy wiersz = 30 min 
        - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamaist dni sa różne stoliki 
        - po kliknięciu rezerwacji lub eventu przechodzimy na stronę szczegółów 


- `/tables/booking/:id`
    - zawiera wszystkie inf dotyczące rezerwacji 
    - umozliwia edycję i zapisanie zmian 
- `/tables/booking/:new`
    - analogicznie do powyżej, bez początkowych inf
- `/tables/events/:id`
    - analogicznie do powyżej, dla eventów
- `/tables/events/:new`
    - analogicznie do powyżej, dla eventów, bez początkowych inf

# Widok kelnera 

- `/waiter`
    - tabela 
        - w wierszach stoliki
        - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
        - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
    - nr stolika (edytowalny)
    - menu 
    - opcje wybranego produktu
    - zamówienie (zamówione produkty z opcjami i ceną)
    - kwotę zamówienia 
- `/waiter/order/:id`
    - jak powyższa 

# Widok kuchni 

- `/kitchen`
    - wyświelać listę zamówień w kolejności ich złożenia 
    - lista musi zawierać 
        - nr stolika (lub zamówienia zdalnego)
        - pełne inf dot zamówionych dań
    - na liście musi być możliwość oznaczenia zamówieniea jako zrealizowane     

