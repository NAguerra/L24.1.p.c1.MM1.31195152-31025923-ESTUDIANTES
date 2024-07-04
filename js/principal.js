/*2. ESTUDIANTES 
En  la  UCLA,  el  DCYT  desea  conocer  algunas  estadísticas  de  sus  estudiantes.  De  cada estudiante 
se conoce: su cédula, sexo y sus tres notas parciales. Se requiere conocer por el DCYT:  a)  nota  total  
obtenida  por  el  estudiante  b)  la  mayor  nota  obtenida  c)  De  los estudiantes femeninos cantidad de 
estudiantes aprobadas, d) promedio de notas  
El DCYT suministra la siguiente información demostrativa, para 4 estudiantes: (cedula, sexo, notap1, notap2, 
    notap3) (13457856, M, 15, 20, 25) (15432551, F, 10, 10, 10) (32455678, M, 18, 22, 20) (28678900, F, 18, 25,
         24), según lo cual la salida requerida presenta el siguiente formato: */
    
import CL_decanato  from "./CL_decanato.js";      
import CL_estudiante from "./CL_estudiante.js";   

let est1=new CL_estudiante('13457856','M', 15, 20, 25);
let est2=new CL_estudiante('15432551','F', 10, 10, 10);
let est3=new CL_estudiante('32455678','M', 18, 22, 20);
let est4=new CL_estudiante('28678900','F', 18, 25, 24);

let decanato=new CL_decanato();
decanato.procesarest(est1);
decanato.procesarest(est2);
decanato.procesarest(est3);
decanato.procesarest(est4);

let salida = document.getElementById("Salida");
salida.innerHTML = "Resultados <br>";
salida.innerHTML+= "<br> El estudiante con la cedula: " + est1.ced + " obtuvo una nota final de: " + est1.notafinal();
salida.innerHTML+= "<br> El estudiante con la cedula: " + est2.ced + " obtuvo una nota final de: " + est2.notafinal();
salida.innerHTML+= "<br> El estudiante con la cedula: " + est3.ced + " obtuvo una nota final de: " + est3.notafinal();
salida.innerHTML+= "<br> El estudiante con la cedula: " + est4.ced + " obtuvo una nota final de: " + est4.notafinal(); 

salida.innerHTML+= "<br><br> La mayor nota es: " + decanato.devolverMayornota();
salida.innerHTML+= "<br> La cantidad de estudiantes femeninas aprobadas es: " + decanato.devolverCont_f_a();
salida.innerHTML+= "<br> El promedio de notas: " + decanato.promNotas();
