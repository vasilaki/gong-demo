import { Loader } from "pixi.js";
import { Spine } from "pixi-spine";
import { SkeletonData } from "@pixi-spine/runtime-4.0";

export function getSpine(): Spine {
    const spineExample = new Spine(Loader.shared.resources.pixie.spineData as SkeletonData);
    spineExample.scale.set(0.3, 0.3);
    spineExample.y = spineExample.height;
    spineExample.x = spineExample.width / 2;

    spineExample.state.setAnimation(0, "running", true);
    spineExample.interactive = true;

    spineExample.on("pointerdown", () => {
        jump(spineExample);
    });
    spineExample.state.addAnimation(0, "running", true, 0);
    return spineExample;
}

const jump = (spineExample: Spine) => {
    spineExample.state.setAnimation(0, "jump", false);
    spineExample.state.addAnimation(0, "running", true, 0);
};
