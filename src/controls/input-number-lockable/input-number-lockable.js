import { makeElement } from '../../common/dom.js';
import { ButtonToggle } from '../button-toggle/button-toggle.js';
import { InputNumber } from '../input-number/input-number.js';
import { uiColors } from '../../common/colors.js';

/**
 * A numeric input field, with up/down arrows for increment/decrement,
 * and also a lock control that toggles a locked state.
 * Primarily used for a ControlPoint x/y input.
 */
export class InputNumberLockable extends HTMLElement {
	/**
	 * Create an InputNumberLockable
	 * @param {object} attributes - collection of key: value pairs to set as attributes
	 */
	constructor(attributes = {}) {
		// log(`InputNumberLockable.constructor`, 'start');
		// log(JSON.stringify(attributes));
		super();

		if(attributes.hideBorder) this.setAttribute('hideBorder', attributes.hideBorder);
		this.locked = this.hasAttribute('locked');
		this.respondToChanges = true;
		this.wrapper = makeElement({ className: 'wrapper' });
		this.inputNumber = new InputNumber({ hideBorder: true });

		this.padlock = new ButtonToggle({
			class: 'padlock',
			icon: 'lock',
			size: '24',
			hideBorder: true
		});

		if (this.locked) {
			this.inputNumber.setAttribute('disabled', '');
			this.padlock.setAttribute('selected', '');
		}

		let style = makeElement({
			tag: 'style',
			content: `
				* {
					box-sizing: border-box;
					transition: all 100ms easeOutExpo;
				}

				.wrapper {
					margin: 0px;
					padding: 0px;
					display: grid;
					grid-template-columns: 1fr 24px;
					border-style: solid;
					border-width: 1px;
					border-color: ${uiColors.enabled.restingLight.border};
					background-color: ${uiColors.enabled.restingLight.background};
					border-radius: 4px;
				}

				.wrapper:hover,
				.wrapper *:hover,
				.wrapper:focus,
				.wrapper *:focus {
					border-color: ${uiColors.enabled.focus.border};
				}

				.wrapper[disabled],
				.wrapper:hover[disabled],
				.wrapper:focus[disabled],
				.wrapper:active[disabled] {
					background-color: ${uiColors.disabled.background};
					border-color: ${uiColors.disabled.border};
				}
		`,
		});

		// Put it all together
		let shadow = this.attachShadow({ mode: 'open' });
		shadow.appendChild(style);

		this.observer = new MutationObserver(this.childAttributeChanged);
		this.observer.elementRoot = this;
		this.observer.observe(this.padlock, {
			attributes: true,
			attributeOldValue: true,
		});
		this.observer.observe(this.inputNumber, {
			attributes: true,
			attributeOldValue: true,
		});

		this.wrapper.appendChild(this.inputNumber);
		this.wrapper.appendChild(this.padlock);

		shadow.appendChild(this.wrapper);
		// log(`InputNumberLockable.constructor`, 'end');
	}

	/**
	 * Get the main value
	 * @returns {number}
	 */
	 get value() {
		return this.inputNumber.value;
	}

	/**
	 * Set the main numberValue
	 * @param {number} number - new main value
	 */
	set value(number) {
		this.inputNumber.value = number;
	}

	/**
	 * Initialize the component once it's being used
	 */
	connectedCallback() {
		// log(`InputNumberLockable.connectedCallback`, 'start');
		let parentValue = this.getAttribute('value');
		// log(`parentValue: ${parentValue}`);
		this.value = parentValue;
		// log(`InputNumberLockable.connectedCallback`, 'end');
	}

	/**
	 * Listen for changes on child elements
	 * @param {object} mutationsList - collection of changes
	 */
	childAttributeChanged(mutationsList) {
		// log(`InputNumberLockable.chidAttributeChanged`, 'start');

		for (let mutation of mutationsList) {
			if (mutation.type == 'attributes') {
				// log(`The "${mutation.attributeName}" attribute was modified.`);
				// log(mutation);

				if(mutation.attributeName === 'selected') {
					if (mutation.oldValue === '') {
						// unlock
						// log(`unlocking`);
						this.elementRoot.inputNumber.removeAttribute('disabled');
					} else {
						// lock
						// log(`locking`);
						this.elementRoot.inputNumber.setAttribute('disabled', '');
					}

				} else if (mutation.attributeName === 'value') {
					// log(`changing value`);
					this.elementRoot.setAttribute('value', mutation.target.value);
				}
			}
		}
		// log(`InputNumberLockable.chidAttributeChanged`, 'end');
	}

	/**
	 * Specify which attributes are observed and trigger attributeChangedCallback
	 */
	 static get observedAttributes() {
		return ['disabled', 'selected'];
	}

	/**
	 * Listens for attribute changes on this element
	 * @param {string} attributeName - which attribute was changed
	 * @param {string} oldValue - value before the change
	 * @param {string} newValue - value after the change
	 */
	attributeChangedCallback(attributeName, oldValue, newValue) {
		// log(`InputNumberLockable.attributeChangeCallback`, 'start');
		// log(`Attribute ${attributeName} was ${oldValue}, is now ${newValue}`);

		switch (attributeName) {
			// case 'disabled':
			// 	this.glyphs = newValue;
			// 	this.redraw();
			// 	break;

			// case 'selected':
			// 	this.height = newValue;
			// 	this.redraw();
			// break;

			default:
				break;
		}

		// log(`InputNumberLockable.attributeChangeCallback`, 'end');
	}
}
