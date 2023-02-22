# Week 6 Challenge 3

## Creación de una aplicación web de teléfono con Redux

La aplicación debe mostrar un teléfono que cumpla con las siguientes características:

- Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar borra el número completo.
- Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
- No se puede introducir un número de más de 9 cifras.
- El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
- El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
- Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
- Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
- Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.
- Todo debe estar separado en los siguientes componentes:
      - Info
      - Display
      - Actions
        - Action
      - Keyboard
        - Key

## Listado de responsabilidades

- Info: contiene el mensaje correspondiente a la llamada.
- Display: contiene el número al que se está llamando.
- Keyboard: contiene a todas las teclas

  - Key:

    - Contiene los botones numéricos.
    - Actualiza el estado referido al número mostrado en display.

- Actions va a ser el contexto:
  - Contiene y gestiona el custom Hook que gestiona los estados.
  - Actualiza el número mostrado en display.
  - Compueba la longitud del número marcado.
  - Actualiza el estado de los botones llamar y colgar.
  - Actualiza el mensaje de info.

- Action:
        - Contiene los botones llamar y colgar
        - Actualiza el estado para "Actions"
