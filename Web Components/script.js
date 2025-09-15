class olaMundo extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = "<p> Meu nome é Leticia Roth </p>";
    }
}
customElements.define("ola-mundo",olaMundo)