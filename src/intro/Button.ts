import gsap from "gsap";
import { Texture, Sprite, Container, Text, TextStyle } from "pixi.js";
import { getSpine } from "../spine-example";

export default class Button extends Container {
    private button: Sprite;
    constructor() {
        super();
        const buttonTexture = Texture.from("assets/button_green.png");
        this.button = new Sprite(buttonTexture);
        this.button.anchor.set(0.5);
        this.button.scale.set(0);
        this.addChild(this.button);

        this.addText();
        this.button.position.x = 400;
        this.button.position.y = 450;
        this.showButton();
    }

    private addText(): void {
        const style = new TextStyle({
            dropShadow: true,
            dropShadowAlpha: 0.6,
            dropShadowAngle: 6.9,
            dropShadowColor: "#e5cccc",
            dropShadowDistance: 6,
            fill: ["black", "#c2c2c2", "#8b8484", "black"],
            fontSize: 80,
            lineJoin: "bevel",
            stroke: "#492222",
            strokeThickness: 1,
        });
        const text = new Text("Play", style);
        text.anchor.set(0.5);
        this.button.addChild(text);
        text.y -= 60;
    }

    private showButton(): void {
        gsap.to(this.button.scale, {
            x: 0.4,
            y: 0.4,
            duration: 1.5,
            onComplete: () => {
                this.button.interactive = true;
                this.button.buttonMode = true;
                this.button.once("mousedown", this.onClick.bind(this));
            },
        });
    }

    private onClick(): void {
        this.button.destroy();
        this.removeChild(this.button);

        const spineExample = getSpine();
        spineExample.position.x = 350;
        spineExample.position.y = 530;
        this.addChild(spineExample);
    }
}
