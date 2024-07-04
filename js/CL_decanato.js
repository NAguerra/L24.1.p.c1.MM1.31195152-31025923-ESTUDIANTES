import CL_estudiante from "./CL_estudiante.js";
export default class CL_decanato{

constructor(){
this.cont_e = 0;
this.cont_f_a = 0;
this.mayornota = 0;
this.acumNotas = 0.0;
}

procesarest(est){
this.acumNotas+= est.notafinal();
this.cont_e++;

   if(est.sex ==='F' && est.notafinal() >= 48)
    {this.cont_f_a++;}


if(est.notafinal() > this.mayornota){
    this.mayornota = est.notafinal();}

}

promNotas(){
   return this.acumNotas/this.cont_e;
}

devolverCont_f_a(){
    return this.cont_f_a;
}

devolverMayornota(){
    return this.mayornota;
}











}    




















