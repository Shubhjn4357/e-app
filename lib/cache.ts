import { unstable_cache } from "next/cache";
import { cache } from "react";

export function Cache(fetchData:()=>Promise<any>, keyParts:string[], options:any){
    return unstable_cache(cache(fetchData),keyParts,options)
}