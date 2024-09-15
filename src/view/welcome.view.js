class WelcomeView {
    render(){
        const view = document.createElement('div');
        view.innerHTML = "<h1>Bienvenido</h1>";
        return view;
    }

    afterRender(){
    
    }
};

export const welcomeView = new WelcomeView()