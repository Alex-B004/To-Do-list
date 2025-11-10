Para el contador de tareas se recorre la lista de tareas y se tomas las tareas que aun estan done: false, osea tareas no hechas
Para el hook useLocalStorage
Basicamente lo que hace es que cuando se agrega una tarea va a la lista de tasks, donde el tasks se inicializa con los datos del localStorage 
mediante el hook useLocalStorage, pero sin el hook custom o personalizado 'useaLocalStorage' esto se hace con useState, al cerrar el navegador esos datos (tareas) se mantienen
