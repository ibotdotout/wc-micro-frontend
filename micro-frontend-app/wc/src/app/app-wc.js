class A extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = this.render();
    shadow.appendChild(wrapper);
  }

  renderContainer() {
    const msg = document.createElement("div");
    msg.innerHTML = `
     <form method="get" action="http://google.com/search">

          <input type="text" name="q" required autofocus>
          <input type="submit" value="Google search">

      </form>
    `
    return msg;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "container";
    wrapper.append(this.renderContainer());
    return wrapper;
  }
}

customElements.define("app-wc", A);
