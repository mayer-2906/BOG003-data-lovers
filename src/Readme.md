---
title: '<Pokémania>'
disqus: hackmd
---

![](https://fontmeme.com/permalink/210715/10ca2a393eab02469d67854a3f33fbd9.png)


## **Table of Contents**

[TOC]


## **Data Lover´S - POKEMANIA**

### **1. Definición del producto**

#### **Resumen del producto**

    En este proyecto vamos a diseñar una pagina web con el proposito de que los fanaticos del juego pokemon go o las personas que desean conocer acerca de los pokemones que existen y sus caracteristicas puedan verlos y filtrarlos por algunas de sus caracteristicas, para ellos vamos a utilizar la data que tenemos de 251 pokemones y la data que cargamos de la pokeApi.

#### - **¿Quiénes son los principales usuarios de producto?**

    Los fanaticos de Pokemon en un rango de edad de los 8 a los 30 años que desean concer las caracteristicas de los pokemon para poder jugar y participar en batallas.
    
#### -   **¿Cuáles son los objetivos de estos usuarios en relación con el producto?**

    Poder ver las caracteristicas de sus pokemones favoritos, filtrar los por sus habilidades, regiones, tipos, evolución, debilidades de combate, caracteristicas fisicas, etc.
    
#### -  **¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?**

    Poder ver las tarjetas de sus pokemon con sus habilidades y caracteristicas y asi poder clasificarlos.

#### -  **¿Cuándo utilizan o utilizarían el producto?**

    Cuando quieran participar en batallas pokemon o jugar cartas. 

### **2.  Investigacion de UX**

#### **2.1 Consulta a jugadores pokemon**

    Se consulto a los jugadores pokemon sobre cuales eran las caracterisiticas mas importantes para ellos como jugadores, que tipos de datos eran relevantes a la hora de jugar. Se obtuvo informacion sobre los intereses en los tipos de pokemon, las estadisticas, regiones y debilidades, se concluyo que a la hora de jugar estos datos son los que necesitan los jugadores.

    En proximas mejoras se planea cargar todo en un solo html y poder aplicar varios fitros al tiempo, porque los usuarios desean ver por ejemplo: "los pokemones de tipo bicho ordenados de mayor a menor ataque".

#### **2.2 Feedback con compañera**

    En la historia de usuario 1 se recibio consejo de diseño sobre informar mejor al usuario como iban a estar ordenados los pokemon, si de mayor a menor o viceversa, la idea es que el usuario tuviera claro como iba a ordenar los pokemon por lo que se incluyo un mensaje en el select de como se iba a ordenar.
### **3. Historias de usuario**

#### -  **1º HU : Filtrar los pokemones por Estadisticas.**

- Como usuario del juego pokemon go quiero poder ver todos  los pokemones y  quiero poder filtrarlos por sus estadisticas, PS, PC, Ataque, Defensa.

##### - **Criterios de Aceptación:**

- ✔️ 1. El usuario podrá visualizar una un menú que le permita escoger por que estadística desea consultar los Pokémon.
- ✔️2. El usuario podra ver un tarjeta con el numero, nombre, imagen, tipo, resistencia y estadisticas del pokemon
- ✔️3. En el encabezado de la pagina podra ver un hipervinculo que lo regrese a la pagina principal.
- ✔️4.Podra ver el menu para hacer otras consultas de pokemos(por tipo, por estadistica.
- ✔️5.En la parte inferior de la pagina podre ver los enlaces a las redes sociales y la pagina oficial de pokemon.
- ✔️6.Debe ser responsive para celular, tablet, lapto.

##### - **Definicion de Terminado:**

- ✔️1. Se implementa html semanctico
- ✔️2. Uso de selectores css
- ✔️3. Manipulacion dimanica del DOM
- ✔️4. Se usa la data que proviene del json.
- ✔️5. Debe ser testeado de forma unitaria 
- ✔️6. Debe pasar el testing.

#### -  **2º HU : Filtrar los pokemones por tipo.**

- Como usuario deseo poder filtrar los pokemones por tipo, para conocer los datos y características de todos los pokemones del tipo que necesito.

##### - **Criterios de Aceptación:**

- ✔️ 1. El usuario debe poder ver los 18  tipos de pokemones que hay para seleccionar los que desee.
- ✔️2. El usuario podrá visualizar el porcentaje de pokemones que hay de cada tipo, aun cuando se apliquen varios filtros.
- ✔️3. El usuario podrá visualizar las tarjetas de los pokemones filtrados por el tipo deseado
- ✔️4. El usuario tendra un boton que le permita limpiar los filtros y volver a filtrarlo por otro tipo.
- ✔️5.Debe ser responsive para celular, tablet, lapto.
- ✔️6.Debe tener colores alusivos a la tematica de pokemon
- ✔️7.Debe tener un footer con el enlace a las redes sociales

##### - **Definicion de Terminado:**

- ✔️1. Se implementa html semanctico
- ✔️2. Uso de selectores css
- ✔️3. Manipulacion dimanica del DOM
- ✔️4. Se usa la data que proviene del json.
- ✔️5. Debe ser testeado de forma unitaria 
- ✔️6. Debe pasar el testing.



#### -  **3º HU : Filtrar los pokemones por peso.**

- Como usuario deseo poder filtrar los pokemones por su peso, poder ordenarlos de mayor a menor peso y viseversa, tambien deseo verlos por grupos de acuerdo a su peso.

##### - **Criterios de Aceptación:**

- ✔️1. El usuario debe ver un select con las distintas opciones de ordenamiento y filtrado de los pokemon
- ✔️2. El usuario podra ver los pokemones filtrados por su peso(<300 , >300 &<600, >600)
- ✔️3. El usuario podrá visualizar las tarjetas de los pokemones filtrados por el peso deseado
- ✔️4.Debe ser responsive para celular, tablet, lapto.
- ✔️5.Debe tener colores alusivos a la tematica de pokemon
- ✔️6.Debe tener un footer con el enlace a las redes sociales

##### - **Definicion de Terminado:**

- ✔️1. Se implementa html semanctico
- ✔️2. Uso de selectores css
- ✔️3. Manipulacion dimanica del DOM
- ✔️4. Debe cargar las tarjetas con numero, nombre ,imagen, peso
- ✔️5. Se usa la data que cargamos desde la pokeApi.
- ✔️6. Debe ser testeado de forma unitaria 
- ✔️7. Debe pasar el testing.


### **4. Diseño de interfaz de usuario**

#### **Prototipo de baja fidelidad**

##### - **Diseño movil**

###### - **Index**
![img](../src/DisIntUsu/indexhtml-mobile.jpeg?raw=true"Index.html")
###### - **HU 1**
![img](../src/DisIntUsu/HU1-papel-mobile.jpeg?raw=true"HU1.html")

###### - **HU 2**
![img](../src/DisIntUsu/HU2-papel-mobile.jpeg?raw=true"Index.html")
###### - **HU 3**
![img](../src/DisIntUsu/HU3-papel-mobile.jpeg?raw=true"HU1.html")

##### - **Diseño lapto**

###### - **Index**
![img](../src/DisIntUsu/indexhtml-papel-lapto.jpeg?raw=true"Index.html")
###### - **HU 1**
![img](../src/DisIntUsu/HU1-papel-lapto.jpeg?raw=true"HU1.html")

###### - **HU 2**
![img](../src/DisIntUsu/HU2-papel-lapto.jpeg?raw=true"Index.html")
###### - **HU 3**
![img](../src/DisIntUsu/HU3-papel-lapto.jpeg?raw=true"HU1.html")

#### - **Prototipo de Alta fidelidad**

##### - **Diseño movil**

###### - **Index**
![img](../src/DisIntUsu/indexhtml.png?raw=true"Index.html")
###### - **HU 1**
![img](../src/DisIntUsu/HU1-mobille.png?raw=true"HU1.html")
![img](../src/DisIntUsu/HU1-1-mobille.png?raw=true"HU1.html")

###### - **HU 2**
![img](../src/DisIntUsu/HU2-mobille.png?raw=true"Index.html")
![img](../src/DisIntUsu/HU2-1-mobille.png?raw=true"Index.html")

###### - **HU 3**
![img](../src/DisIntUsu/HU3-mobille.png?raw=true"HU1.html")
![img](../src/DisIntUsu/HU3-1-mobille.png?raw=true"HU1.html")

##### - **Diseño para Lapto**

###### - **Index**
![img](../src/DisIntUsu/indexhtml-lapto.png?raw=true"Index.html")
###### - **HU 1**
![img](../src/DisIntUsu/HU1-lapto.png?raw=true"HU1.html")

###### - **HU 2**
![img](../src/DisIntUsu/HU2-lapto.png?raw=true"Index.html")
![img](../src/DisIntUsu/HU2-1-lapto.png?raw=true"Index.html")
###### - **HU 3**
![img](../src/DisIntUsu/HU3-lapto.png?raw=true"HU1.html")
![img](../src/DisIntUsu/HU3-1-lapto.png?raw=true"Index.html")

### - **5. Pruebas Unitarias**

Para las pruebas Unitarias (tests) se crearon funciones y su respectiva configuración, asì como tambien datos de pruebas para realizar los test; de tal manera que se ejecutara el test teniendo en cuenta el comando “npm run test”. Se logró superar la cobertura del 94% de statements, 86% de functions,  100% de lines, y el 100% de branches.

![img](../src/DisIntUsu/test-1.png?raw=true"Index.html")
![img](../src/DisIntUsu/test-4.png?raw=true"Index.html")

### - **6. Checklist**

 - ✔️ Usa VanillaJS.
 - ✔️Pasa linter (npm run pretest)
 - ✔️Pasa tests (npm test)
 - ✔️Pruebas unitarias cubren un mínimo del 70% de statements, functions y lines y branches.
 - ✔️Incluye Definición del producto clara e informativa en README.md.
 - ✔️Incluye historias de usuario en README.md.
 - ✔️Incluye sketch de la solución (prototipo de baja fidelidad) en README.md.
 - ✔️Incluye Diseño de la Interfaz de Usuario (prototipo de alta fidelidad) en README.md.
 - Incluye link a Zeplin en README.md.
 - ✔️Incluye el listado de problemas que detectaste a través de tests de - usabilidad en el README.md.
 - ✔️UI: Muestra lista y/o tabla con datos y/o indicadores.
 - ✔️UI: Permite ordenar data por uno o más campos (asc y desc).
 - ✔️UI: Permite filtrar data en base a una condición.
 - ✔️UI: Es responsive.

###  - **7. Aspectos Generales**

Este proyecto lo realice sola, con la asesoria y direccion de los coachs de Laboratoria, empleando recursos para estudio dispuestos por ellos. El proyecto se desarrolla en 4 sprint. Agradezco la asesoria y direccion del equipo de Laboratoria.


