class B extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: "open" });
		const wrapper = this.render();
		shadow.appendChild(wrapper);
	}

	renderContainer() {
		const msg = document.createElement("span");
		msg.innerHTML = `hello from micro-frontend B!`;
		return msg;
	}

	render() {
		const wrapper = document.createElement("div");
		wrapper.className = "container";
		wrapper.append(this.renderContainer());
		return wrapper;
	}
}

customElements.define("app-b", B);
