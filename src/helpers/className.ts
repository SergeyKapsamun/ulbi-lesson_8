import { type } from "os";

type Mods=Record<string, boolean|string>;
import React from 'react';

function className(cls:string, mod:Mods, additional:string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mod).filter(([className,value])=>Boolean(value)).map(([className])=>className),

    ].join(' ')
}

export default className;