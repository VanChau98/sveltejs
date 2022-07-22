import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, b as attr_dev, c as add_location, f as src_url_equal, g as insert_dev, h as append_dev, n as noop, j as detach_dev } from './index.js';

/* src\routes\Home.svelte generated by Svelte v3.49.0 */

const file = "src\\routes\\Home.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t2;
	let figure;
	let img;
	let img_src_value;
	let t3;
	let figcaption;
	let t5;
	let p;
	let strong;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			h1.textContent = "Great success!";
			t2 = space();
			figure = element("figure");
			img = element("img");
			t3 = space();
			figcaption = element("figcaption");
			figcaption.textContent = "HIGH FIVE!";
			t5 = space();
			p = element("p");
			strong = element("strong");
			strong.textContent = "Try editing this file (routes/index.html) to test hot module reloading.";
			document.title = "Svelte Demo template";
			attr_dev(h1, "class", "svelte-1ehbjg6");
			add_location(h1, file, 4, 0, 71);
			attr_dev(img, "alt", "Borat");
			if (!src_url_equal(img.src, img_src_value = "/assets/great-success.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-1ehbjg6");
			add_location(img, file, 7, 1, 109);
			add_location(figcaption, file, 8, 1, 161);
			attr_dev(figure, "class", "svelte-1ehbjg6");
			add_location(figure, file, 6, 0, 98);
			add_location(strong, file, 11, 3, 214);
			attr_dev(p, "class", "svelte-1ehbjg6");
			add_location(p, file, 11, 0, 211);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, figure, anchor);
			append_dev(figure, img);
			append_dev(figure, t3);
			append_dev(figure, figcaption);
			insert_dev(target, t5, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, strong);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(figure);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Home', slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Home> was created with unknown prop '${key}'`);
	});

	return [];
}

class Home extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Home",
			options,
			id: create_fragment.name
		});
	}
}

export { Home as default };
//# sourceMappingURL=Home.js.map