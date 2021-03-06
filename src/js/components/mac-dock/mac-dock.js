const template = document.createElement('template')

template.innerHTML = `
    <style>
        :host {
            display: block;
            position: absolute;
            grid-column: 2/4;
            justify-self: center;
            bottom: 10px;
            z-index: 5;
            backdrop-filter: blur(10px)
        }
        .navbar {
            display: flex;
            height: 60px;
            border-radius: 15px;
            background: rgba(83, 83, 83, 0.3);
            justify-content: center;
            align-items: center;
            border: 1px solid rgba(255, 255, 255, 0.18);
            padding: 4px;
        }
        
    </style>
    <div class="navbar">
        <slot name="memory" class="test one"></slot>
        <slot name="chat" class="test two"></slot>
        <slot name="terminal" class="test three"></slot>
    </div>
`

customElements.define('mac-dock',

  /**
   * Represents the dock.
   */
  class extends HTMLElement {
    /**
     * Creates an instance of this type.
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
    }
  })
