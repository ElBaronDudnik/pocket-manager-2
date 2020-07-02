import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAppPassword]'
})
export class AppPasswordDirective {
  private shown: boolean;
  private showIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="20" height="20"
           viewBox="0 0 172 172"
           style=" fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
          <path d="M0,172v-172h172v172z" fill="none"></path><g fill="#b1b5cf"><path d="M86,28.66667c-51.13157,0 -84.15967,52.81077 -84.75703,53.77239c-0.80406,1.01283 -1.2421,2.26775 -1.24297,3.56094c0.00102,1.1094 0.32388,2.19467 0.92943,3.12422c0.00743,0.01122 0.01489,0.02242 0.0224,0.03359c0.09858,0.20342 27.82281,54.17552 85.04818,54.17552c56.98258,0 84.666,-53.44188 85.00339,-54.09714c0.02282,-0.03707 0.04522,-0.0744 0.06719,-0.11198c0.60555,-0.92955 0.92841,-2.01482 0.92942,-3.12422c-0.0002,-1.28802 -0.43411,-2.53845 -1.23177,-3.54974c-0.00373,-0.00374 -0.00746,-0.00747 -0.0112,-0.0112c-0.59736,-0.96163 -33.62546,-53.77239 -84.75703,-53.77239zM86,45.86667c22.16507,0 40.13333,17.96827 40.13333,40.13333c0,22.16507 -17.96827,40.13333 -40.13333,40.13333c-22.16507,0 -40.13333,-17.96827 -40.13333,-40.13333c0,-22.16507 17.96827,-40.13333 40.13333,-40.13333zM86,68.8c-9.4993,0 -17.2,7.7007 -17.2,17.2c0,9.4993 7.7007,17.2 17.2,17.2c9.4993,0 17.2,-7.7007 17.2,-17.2c0,-9.4993 -7.7007,-17.2 -17.2,-17.2z">
        </path>
        </g>
        </g>
      </svg>`;
  private hideIcon = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           width="20" height="20"
           viewBox="0 0 172 172"
           style=" fill:#000000;">
        <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
          <path d="M0,172v-172h172v172z" fill="none"></path>
          <g fill="#b1b5cf">
            <path d="M9.78698,1.67969l-8.10729,8.10729l160.53333,160.53333l8.10729,-8.10729l-34.54557,-34.54558c23.48267,-15.8999 35.0738,-38.13207 35.22864,-38.43125c0.65045,-0.95379 0.99781,-2.08173 0.99661,-3.2362c-0.00087,-1.29319 -0.43891,-2.54811 -1.24297,-3.56094c-0.59736,-0.96163 -33.62546,-53.77239 -84.75703,-53.77239c-14.50615,0 -27.52384,4.3011 -38.78958,10.43646zM86,45.86667c22.16507,0 40.13333,17.96827 40.13333,40.13333c0,9.01255 -3.03842,17.27366 -8.0625,23.96354l-16.58411,-16.58412c1.08064,-2.23193 1.71328,-4.72577 1.71328,-7.37942c0,-9.50013 -7.69987,-17.2 -17.2,-17.2c-2.65365,0 -5.1475,0.63264 -7.37942,1.71328l-16.58412,-16.58411c6.68988,-5.02408 14.951,-8.0625 23.96354,-8.0625zM28.38672,52.03672c-17.03954,14.33306 -26.81016,29.87559 -27.13255,30.39114c-0.81047,1.01435 -1.25264,2.27376 -1.25417,3.57214c0.00102,1.1094 0.32388,2.19467 0.92943,3.12422c0.00743,0.01122 0.01489,0.02242 0.0224,0.03359c0.09858,0.20342 27.82281,54.17552 85.04818,54.17552c10.60667,0 20.18438,-1.87203 28.77864,-4.89349l-14.83724,-14.84843c-4.3516,1.6168 -9.03368,2.54192 -13.94141,2.54192c-22.16507,0 -40.13333,-17.96827 -40.13333,-40.13333c0,-4.90773 0.92513,-9.58981 2.54193,-13.94141z">
            </path>
          </g>
        </g>
      </svg>`
  constructor(private el: ElementRef) {
    this.init();
  }

  toggle(span: HTMLElement) {
    this.shown = !this.shown;
    if (this.shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = this.showIcon;
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = this.hideIcon;
    }
  }

  init() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.classList.add('input-icon')
    span.innerHTML = this.hideIcon;
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }
}
