//!wrt
w96.evt.sys.on("init-complete", () =>{
    const { Theme } = w96.ui;

    class GUIApplication extends WApplication {
    /**
     * Application constructor.
     */
            constructor() {
                super();
    }
    
    /**
     * Main entry point.
     * @param {String[]} argv The program arguments.
     */
        async main(argv) {
            // Create the window
            const mainwnd = this.createWindow({
                title: "Sample Application",
                body: "Sample text",
                bodyClass: "sample-app",
                taskbar: true,
                resizable: true,
                initialHeight: 480,
                initialWidth: 640,
                icon: await Theme.getIconUrl("mime/executable", '16x16')
            }, true);
        
        // Show the window
            mainwnd.show();
        }
    }

    return await WApplication.execAsync(new GUIApplication(), this.boxedEnv.args);
});