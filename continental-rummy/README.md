# Continental Rummy

- [Español](#espa%c3%b1ol)
- [English](#english)

## Español

El juego de cartas [Continental][continental-es] es un juego de estrategia y azar, que consiste en realizar una serie de combinaciones (diferentes en cada ronda) con el conjunto de cartas que se tienen en la mano.

Habitualmente, se suele jugar con dos (o más) barajas de 54 cartas (52 + 2 comodines). Para los palos, se pueden utilizar los habituales de la baraja española (oros, copas, espadas y bastos) o los de la baraja francesa (corazones, diamantes, tréboles y picas).

Existen dos tipos de combinaciones que se tienen que realizar a lo largo de las diferentes jugadas: tríos (juntar 3 cartas del mismo número) y escaleras (juntar 4 cartas consecutivas del mismo palo).

### User Stories

#### #1 Calcular número de cartas a repartir

Para nuestra versión del Continental, vamos a establecer siete rondas:

1. Dos tríos (7)
2. Un trío y una escalera (8)
3. Dos escaleras (9)
4. Tres tríos (10)
5. Dos tríos y una escalera (11)
6. Dos escaleras y un trío (12)
7. Tres escaleras (13)

Una primera versión del sistema debe, para cada una de las jugadas anteriores, indiciar el número de cartas a repartir para cada jugador. Como regla general: el número de cartas debe ser el mínimo para conseguir realizar la jugada + 1 una carta adicional. Por ejemplo, en el primer caso (dos tríos), necesitaríamos un mínimo de 6 cartas para crear los tríos y una adicional para el cierre (7 en total).

Existen algunas variaciones del Continental con otros tipos de jugadas por lo que nuestro sistema debería estar preparado para calcular también el número de cartas a repartir en jugadas no contempladas entre las anteriores (por ejemplo: 2 tríos y 2 escaleras).

#### #2 Calcular puntuación

Cuando se termine la partida, los jugadores deberán _pagar_ el valor de las cartas que tengan en la mano. El valor de cada carta es el siguiente:

- Cartas del 2 al 9: 5 puntos
- Cartas 10, J, Q y K: 10 puntos
- Ases: 20 puntos
- Comodines: 50 puntos

Nuestro sistema deberá estar preparado para, a partir de una colección de cartas, devolver su puntuación total.

#### #3 Identificar tríos

> **_Ignorar comodines_**

Como una siguiente evolución, nuestro sistema debe ser capaz de identificar, a partir de una colleción de cartas, los tríos existentes (grupos de 3 cartas del mismo número. Ejemplo: Tres doses).

#### #4 Identificar escaleras

> **_Ignorar comodines_**
>
> **_Ignorar escaleras del tipo "Q-K-A-2"_**

Ahora, nuestro sistema debe ser capaz de identificar, a partir de una colleción de cartas, las escaleras existentes (grupos de 4 cartas consecutivas del mismo palo. Ejemplo: 2-3-4-5 de Oros).

#### #5 Bonus: Incorporar soporte para Comodines

Los comodines son un tipo especial de carta que no tiene palo ni número y puede ser utilizada en lugar de cualquier otra carta. Por ejemplo, en una pareja de cuatros añadir un comodín haría que se convirtiese en un trío de cuatros válido. Lo mismo sucedería en las escaleras.

Del mismo modo, es posible formar un trío o una escalera únicamente con comodines.

## English

### User Stories

#### #1 Get number of cards to deal

#### #2 Scoring

#### #3 Indentify Trios

#### #4 Identify Straights

#### #5 Bonus: Add support for Joker

[continental-es]: https://es.wikipedia.org/wiki/Continental_(juego)
