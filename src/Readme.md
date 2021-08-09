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

### **2. Historias de usuario**

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


### **Diseño de interfaz de usuario**

#### **Prototipo de baja fidelidad**

##### - **Diseño movil**

![img](http://src/DisIntUsu/indexhtml-mobile.jpeg)




