const e=`---
title: Great UI shadows imitate real shadows
description: UI shadows should create an illusion of depth. For the best illusion, imitate reality.
slug: notes/ui-shadows
publish: true
lastmod: 2021-12-21
date: 2021-10-21
aliases:
- Great UI shadows imitate real shadows
- Great UI shadows
tags:
- status/seedling
- flashcards/design
- taxonomy/artifact
---

The purpose of shadows in user interfaces (UIs) is to create an illusion of depth. UI shadows convince users that some elements are elevated further off the page than others. To make an effective illusion, imitate reality. Imitate these 3 principles from real-world lighting when making UI shadows:

1. Shadows are cast by objects obstructing lights
1. The further an object is from its shadow the larger and softer the shadow is
1. The color of a surface changes the color of shadows cast onto it

The following sections will detail some tactical tips for designing shadows that imitate reality, and how you can implement those designs in CSS.

## Shadows are cast by obstructing lights

All shadows are created by 3 points that form straight a line:

1. A light source (such as the sun or a lamp)
1. The shadow itself
1. An object between the light source and the shadow

Imitating real shadows being cast by a real light source - such as a lamp or the sun - creates a more consistent look. Choose a fixed position where the imaginary light source is. All shadows should be cast on the side of elements opposite the light source. This will result in:-:consistent and realistic UI shadows. <!--SR:!2023-04-21,335,274-->

On the web, it's popular for the light source to be above and a bit to the left of the page. This means shadows are cast below and slightly to the right of elements. This can be imitated in CSS using the:-:x and y offset values of the \`box-shadow\` property. <!--SR:!2022-07-14,148,272-->

An easy way to keep a consistent angle for UI shadows is to have a consistent ratio for scaling the :-:x and y offset of shadows. <!--SR:!2023-04-07,363,332-->

For a light source above and a little to the left of the UI, having an x:y offset ratio of 1:2 works well.

## Further objects cast bigger and softer shadows

This is an easy property to observe. Put your hand on a desk or other flat surface and look at the shadow it casts. It will be very close to the size of your hand, and quite dark.

Slowly lift your hand while watching the shadow. The shadow will quickly grow larger, but it will also soften as light bouncing off other surfaces hit the shadow.

In UI design, compared to shadows cast for objects closer to the page, objects elevated further off the page should have shadows that are:-:larger and softer. <!--SR:!2023-04-08,364,310-->

To emulate this behavior in CSS, I use two tricks:

1. Increasing the blur with the size of the shadow
1. Layering multiple shadows to simulate more realistic depth

Increasing blur is easy - it's an attribute of the \`box-shadow\` property! When using the 1:2 ratio for shadow offsets, an easy way to keep shadow softness consistent is by matching the blur to the:-:\`y offset\`. <!--SR:!2022-10-04,136,250-->

A shadow cast by an element close to the page would be something like \`box-shadow: 2px 4px 4px\`. For something elevated much further off the page, it could instead be \`box-shadow: 16px 32px 32px\`.

Having a single soft shadow can look a little flat and unrealistic.

<div style="display:flex; justify-content: center">
<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">4x8px offset</div><div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">8x16px offset</div>
</div>

To create a more realistic illusion of depth, layer multiple shadows. I like to start with shadows offset by 1:2, and layer on additional shadows with double the previous offset (ie 2:4, 4:8, 8:16, etc.) until I've reached the desired elevation.

<div style="display:flex; justify-content: center">
<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">Flat shadow</div><div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.2), 2px 4px 4px hsl(0deg 0% 0% / 0.2), 4px 8px 8px hsl(0deg 0% 0% / 0.2), 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">4 layer shadow</div>
</div>

Notice that the layered shadow is much darker. Since each shadow is *added* to the previous ones, you must *reduce* the opacity of all the shadows when layering on additional shadows. Here's the code for a layered shadow:

Here's the code for the layered shadow:

\`\`\`\`css
.shadow { 
	box-shadow: 
		1px 2px 2px hsl(0deg 0% 0% / 0.075),
		2px 4px 4px hsl(0deg 0% 0% / 0.075), 
		4px 8px 8px hsl(0deg 0% 0% / 0.075), 
		8px 16px 16px hsl(0deg 0% 0% / 0.075);
}
\`\`\`\`

Check out how it looks:

<div style="display:flex; justify-content: center">
<div style="display: inline-block;  margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.2), 2px 4px 4px hsl(0deg 0% 0% / 0.2), 4px 8px 8px hsl(0deg 0% 0% / 0.2), 8px 16px 16px hsl(0deg 0% 0% / 0.2); text-align: center; line-height: 150px;">20% opacity</div>
<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">7.5% opacity</div>
</div>

Here's how the layered shadow looks compared to a flat one of the same size. Notice that the layered shadow is stronger close to the element, and has a smoother transition to the outer edges of the shadow.

<div style="display:flex; justify-content: center">
<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 4px 8px 8px hsl(0deg 0% 0% / 0.2);text-align: center; line-height: 150px">Flat shadow</div>
<div style="display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Layered shadow</div>
</div>

These shadows work great with basic boxes. Boxes with rounded borders also get rounded shadows. Perfect!

<div style="display:flex; justify-content: center; align-items: center;">
<div style="border-radius: 50%; display: inline-block; margin: 20px; width:150px; height: 150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Circle</div>
<div style="border-radius: 25px; display: inline-block; margin: 20px; width:150px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; line-height: 150px;">Rounded box</div>
</div>

Unfortunately \`box-shadow\` can't handle more complex shapes like images with transparency, letters, or this tooltip made using a box and the css \`::after\` pseudo-element.

<div style="display:flex; justify-content: center; align-items: center;">
<div class="tooltip-box" style="position: relative; margin: 20px; box-shadow: 1px 2px 2px hsl(0deg 0% 0% / 0.075), 2px 4px 4px hsl(0deg 0% 0% / 0.075), 4px 8px 8px hsl(0deg 0% 0% / 0.075), 8px 16px 16px hsl(0deg 0% 0% / 0.075); text-align: center; padding: 20px">tooltip box</div>
	<style>
	.tooltip-box::before {
	  content: ' ';
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  width: 30px;
	  height: 20px;
	  background: hsl(var(--color-white));
	  clip-path: polygon(
		0% 0%,
		50% 100%,
		100% 0%
 	 );
  	transform: translateY(calc(+100% ));
}
	</style>
</div>

Instead, complex shapes should be shadowed using the \`filter: drop-shadow()\`. It uses a different blurring algorithm, and it's shaped to the element.

<div style="display:flex; justify-content: center; align-items: center;">
<div class="tooltip-box" style="display: block; padding: 20px; position: relative; margin: 20px; filter: drop-shadow(1px 2px 2px hsl(0deg 0% 0% / 0.075)) drop-shadow(2px 4px 4px hsl(0deg 0% 0% / 0.075)) drop-shadow(4px 8px 8px hsl(0deg 0% 0% / 0.075)) drop-shadow(8px 16px 16px hsl(0deg 0% 0% / 0.075)); text-align: center; ">tooltip box</div>
	</div>
`;export{e as default};
