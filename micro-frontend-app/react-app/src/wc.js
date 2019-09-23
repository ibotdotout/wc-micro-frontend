class MicroFrontendLink extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    this.items = {
      'Web Components': 'https://www.webcomponents.org/',
      'Micro-frontends.org': 'https://micro-frontends.org/',
      'Martin Fowler: micro-frontends': 'https://martinfowler.com/articles/micro-frontends.html',
      'Code on Github': 'https://github.com/ibotdotout/wc-micro-frontend',
      'Monolith -> Micro Frontends': 'https://dev.to/aregee/breaking-down-the-last-monolith-micro-frontends-hd4'
    }
    this.shadowRoot.innerHTML = `
    <style>
    .container{
      background: #89b77f;
      padding: 2px;
    }
    </style>
    `

    const wrapper = this.render();
    shadow.appendChild(wrapper);

    this.container = this.shadowRoot.querySelector(".container");
  }

  static get observedAttributes() {
    return ['n'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue == newValue) return;

    switch (name) {
      case 'n':
        this[name] = newValue;
        this.container.replaceChild(this.renderContainer(), this.container.childNodes[0]);
        break;
    }
  }

  get n() {
    const MAX_SIZE = Object.keys(this.items).length;
    const n = Math.max(1, Math.min(this.getAttribute('n') || MAX_SIZE, MAX_SIZE));
    return n;
  }

  set n(newValue) {
    this.setAttribute('n', parseInt(newValue));
  }

  renderContainer() {
    const msg = document.createElement("div");
    msg.innerHTML = Object.keys(this.items)
      .filter((_, i) => i < this.n)
      .map(key =>  '<a href="' + this.items[key] + '">' + key + '</a>')
      .join("  ///  ");
    return msg;
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.className = "container";
    wrapper.append(this.renderContainer());
    return wrapper;
  }
}

customElements.define("mf-link", MicroFrontendLink);
