import gsap from "gsap";
import { Texture, Sprite, Container } from "pixi.js";
import Button from "./Button";

export default class Gong extends Container {
    private gong: Sprite;
    constructor() {
        super();
        const gongTexture = Texture.from("assets/gong.jpg");
        this.gong = new Sprite(gongTexture);
        this.gong.anchor.set(0.5);
        this.gong.alpha = 0;
        this.addChild(this.gong);
        this.gong.position.x = 400;
        this.gong.position.y = 150;
        this.fadeIn();
    }

    private fadeIn(): void {
        gsap.to(this.gong, {
            alpha: 1,
            duration: 2,
            onComplete: () => {
                const button = new Button();
                this.addChild(button);
            },
        });
    }
}
