export default class CL_estudiante{

constructor(c, s, n1, n2, n3,){
    this.ced = c;
    this.sex = s;
    this.not1 = n1;
    this.not2 = n2;
    this.not3 = n3;
}

set ced(C){
    this._ced = +C;
}

get ced(){
    return this._ced;
}

set sex(S){
    this._sex = S;
}

get sex(){
    return this._sex;
}

set not1(n1){
    this._not1 = +n1;    
}

get not1(){
    return this._not1;
}

set not2(n2){
    this._not2 = +n2;    
}

get not2(){
    return this._not2;
}

set not3(n3){
    this._not3 = +n3;    
}

get not3(){
    return this._not3;
}

notafinal(){
    return this._not1 + this._not2 + this._not3;
}


}