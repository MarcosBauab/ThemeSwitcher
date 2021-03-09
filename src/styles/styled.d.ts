/*Definição de tipos global, por isso o .d.*/
import 'styled-components'
/*Sobrescrever uma definição de tipos*/
declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors: {
            primary:string;
            secondary:string;

            background:string;
            text:string;        
        },
    }
}