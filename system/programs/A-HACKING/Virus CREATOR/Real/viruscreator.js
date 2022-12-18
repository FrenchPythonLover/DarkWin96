//!wrt $BSPEC:{"ssy":"cli"}

const term = this.boxedEnv.term;

class CLIApplication extends WApplication {
    constructor() {
        super()
    }
    
    async main(argv) {
        super.main(argv);
        const VirusCode = [""];
        term.writeln("\\W96 virus creator//");
        term.writeln("WARNING: This is a REAL virus creator for W96 !")
        let file = await term.prompt("Filename: ")
        term.writeln(`Saving virus on ${file}`)
        w96.FS.writestr(`c:/user/desktop/viruscreator/${file}`, VirusCode)
        // F-I-N-A-L //
        focus()
        await term.pause("Press a key to continue(Opération done.)");
        await term.reset()
    }
}

return await WApplication.execAsync(new CLIApplication(), this.boxedEnv.args, this);