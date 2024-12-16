export default function Userinput({children,updatefun,index}){
    return(
        <>
            <label >{children}</label>
            <input onChange={(e)=>updatefun(e,index)}></input>
        </>
    );
}