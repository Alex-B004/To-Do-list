import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, valorInicial: T){
    let valInicial: T;
    const guardar = localStorage.getItem(key);
    
    if(guardar){
        valInicial = JSON.parse(guardar);
    }else {
        valInicial = valorInicial;
    }
   
    const [value, setValue] = useState<T>(valInicial);

useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(value));
},[key, value]);

return [value, setValue] as const;
}