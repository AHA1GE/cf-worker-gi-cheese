```html
<!-- From Uiverse.io by chase2k25 --> 
<div class="hacker-input-container">
  <input placeholder="" class="hacker-input" type="text" />
  <label class="hacker-label">Enter Command</label>
</div>

```

```css
/* From Uiverse.io by chase2k25 */ 
.hacker-input-container {
  position: relative;
  width: 300px;
}

.hacker-input {
  width: 100%;
  padding: 12px 15px;
  background: #000000;
  border: 2px solid #00ff00;
  color: #00ff00;
  font-family: "Courier New", monospace;
  font-size: 16px;
  outline: none;
  box-shadow: 0 0 10px #00ff00;
  transition: all 0.3s ease;
}

/* Placeholder styling */
.hacker-input::placeholder {
  color: #00cc00;
  opacity: 0.7;
}

/* Focus state with enhanced glow */
.hacker-input:focus {
  box-shadow:
    0 0 20px #00ff00,
    0 0 30px #00ff00;
  background: rgba(0, 255, 0, 0.05);
}

/* Label animation */
.hacker-label {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #00ff00;
  font-size: 16px;
  pointer-events: none;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #00ff00;
}

/* Move label up and scale when input is focused or filled */
.hacker-input:focus + .hacker-label,
.hacker-input:not(:placeholder-shown) + .hacker-label {
  top: -10px;
  left: 10px;
  font-size: 12px;
  background: #0a0a0a;
  padding: 0 5px;
}

/* Cursor blinking effect */
.hacker-input-container::after {
  content: "_";
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #00ff00;
  font-size: 20px;
  animation: blink 0.7s infinite;
}

/* Scanline effect across input */
.hacker-input-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(0, 255, 0, 0.3);
  animation: scanline 2s infinite linear;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@keyframes scanline {
  0% {
    top: 0;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%;
  }
}

/* Digital glitch effect on hover */
.hacker-input:hover {
  animation: glitch 0.5s infinite;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 0);
  }
  80% {
    transform: translate(2px, 0);
  }
  100% {
    transform: translate(0);
  }
}

```
