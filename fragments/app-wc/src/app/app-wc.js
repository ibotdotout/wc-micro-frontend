class A extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .container{
      background: #89b77f;
      padding: 3px;
    }
    </style>
    `
    const wrapper = this.render();
    shadow.appendChild(wrapper);

    this.searchElem = this.shadowRoot.getElementById('searchElem');
  }

  static get observedAttributes() {
    return ['q'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue == newValue) return;

    switch (name) {
      case 'q':
        this[name] = newValue;
        this.searchElem.value = newValue;
        break;
    }
  }

  get q() {
    return this.getAttribute('q') || '';
  }

  set q(newValue) {
    this.setAttribute('q', newValue);
  }

  renderContainer() {
    const msg = document.createElement("div");
    msg.innerHTML = `
     Web Component
     <form method="get" action="http://google.com/search">
          <input type="text" id="searchElem" name="q" value="` + this.q + `" required autofocus>
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
