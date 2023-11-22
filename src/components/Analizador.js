import { useState } from 'preact/hooks';

function Analizador() {

    const [isStrong,SetIsStrong] = useState(undefined)

    const checkHasSymbol = (string) => {
        const symbols = /[#$%&/()$!]/;
        return symbols.test(string);
    }

    const checkHasNumber = (string) => {
        const numbers = /[1234567890]/;
        return numbers.test(string)
    }

    const checkHasMayus = (string) => {
        const mayus = /[ABCDEFGHIJKLMNOPQRSTUVWXYZÑ]/
        return mayus.test(string)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        const password = new FormData(e.target)
        const pass = Object.fromEntries(password.entries())

        const len = pass.pass.length

        let hasSymbol = false

        let hasNumber = false

        let hasMayus = false

        pass.pass.split("").forEach(character => {
            
            hasSymbol = checkHasSymbol(pass.pass)

            hasNumber= checkHasNumber(pass.pass)
            
            hasMayus = checkHasMayus(pass.pass)
        });

        console.log(len, hasSymbol, hasNumber, hasMayus)

        if (len > 10 && hasSymbol && hasNumber && hasMayus) {
            SetIsStrong(true)
        } else {
            SetIsStrong(false)
        }
        console.log(passMsg)
    }

    return (
        <section>
            <h1 className="font-bold text-text-heading text-center text-4xl md:text-5xl pt-4 pb-10 overflow-hidden">
            <span className="bg-gradient-to-bl bg-no-repeat bg-bottom bg-[length:90%_40%] from-primary-blue to-primary-blue dark:from-primary-blue dark:to-primary-blue">
                Analizador de contraseñas
            </span>
            </h1>
            <p className="">
                Nosotros brindamos un servicio gratuito que permite analizar cuan segura es su contraseña basandonse en la longitud de la misma y caracteres.
                ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            </p>
            <form className="flex flex-row flex-wrap gap-4 max-w-md md:flex-col" id="form" onSubmit={handleSumbit}>
                <input id="password" name="pass" type="text" required className="px-3.5 min-w-0 rounded-md border-0 bg-white/5  text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm" placeholder="Ingrese la contraseña"/>
                <button type="submit" className="py-2 px-3 rounded-md bg-primary-blue text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Analizar</button>
            </form>
            {isStrong == undefined ?
            <p></p>
            : 
            isStrong == true ? <p>Contraseña <span className="text-green-500">Fuerte</span></p> : <p>Contraseña <span class="text-red-500">Débil</span></p>}
            
        </section>
        
    );
};

export default Analizador;

