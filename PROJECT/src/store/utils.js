
let idBank;

export const generateId = () =>{
    if(!idBank){
        idBank = 1;
    }else{
        idBank++;
    }
    return idBank;
};