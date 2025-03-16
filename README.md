### AmigoSecreto desafío Alura Latam
El objetivo principal de este desafío es desarrollar habilidades en lógica de programación, por eso hemos proporcionado el HTML y CSS ya preparados. De esta manera, puedes enfocarte exclusivamente en construir la lógica del código JavaScript, aplicando conceptos clave como funciones, arrays, condicionales y variables. Esto te permitirá centrarte en resolver el problema y mejorar el razonamiento lógico, sin preocuparse por la estructura visual del proyecto
----------------------------------------------------------------------------------------------------
Creación:

1- Organizar el juego
Queremos hacer un sorteo de "Amigo Secreto", pero antes de eso, necesitamos una lista de participantes.

📌 Decisión: Crear una libreta donde anotaremos los nombres.
![image](https://github.com/user-attachments/assets/6915bc93-71bc-4f81-8c19-e28cb2ce4378)

2- Inscribir participantes
Para que un amigo pueda participar, debe escribir su nombre.
Pero antes de anotarlo en la libreta, tenemos que verificar:

✅ Que no sea un nombre vacío (No queremos inscripciones en blanco).
✅ Que no sea un nombre repetido (Cada persona debe estar una sola vez).
![image](https://github.com/user-attachments/assets/c9bddf40-a8ed-42ad-a584-20385280dfdf)

Si todo está bien, se guarda.

3- Mostrar lista (Array)
Cada vez que alguien se inscribe, queremos actualizar una pizarra con la lista de participantes.

📌 Decisión:
Cada nuevo nombre se agregará a la lista visible en pantalla.
![image](https://github.com/user-attachments/assets/a9a4d241-9cc3-4761-a6f3-0e6f78bd0d66)

4- Realizar sorteo aleatorio
Ahora que tenemos nuestra lista de participantes, debemos elegir a uno al azar.
Imaginemos que metemos todos los nombres en un sombrero y sacamos uno con los ojos cerrados.

📌 Decisión:
Si no hay nombres, mostramos un mensaje.
Si hay nombres, elegimos uno aleatorio y lo mostramos.
![image](https://github.com/user-attachments/assets/15f62acb-1383-43de-8056-19c97e148513)

5- Limpiar espacio al ingresar nombre
Después de escribir un nombre, queremos borrar el campo de texto para que esté listo para el siguiente participante.

📌 Decisión:
Cada vez que alguien se inscriba, borraremos el cuadro de texto.
![image](https://github.com/user-attachments/assets/38c1cccb-f173-4dfc-bb2f-cde4168573e7)




