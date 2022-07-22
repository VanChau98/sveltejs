import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, c as add_location, b as attr_dev, g as insert_dev, h as append_dev, m as set_data_dev, n as noop, j as detach_dev } from './index.js';

/* src\routes\Article.svelte generated by Svelte v3.49.0 */

const file = "src\\routes\\Article.svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let h1;
	let t1_value = /*post*/ ctx[0].title + "";
	let t1;
	let t2;
	let div;
	let raw_value = /*post*/ ctx[0].body + "";
	document.title = title_value = /*post*/ ctx[0].title;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			add_location(h1, file, 30, 0, 688);
			attr_dev(div, "class", "content svelte-13z8xhn");
			add_location(div, file, 32, 0, 713);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);
			div.innerHTML = raw_value;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*post*/ 1 && title_value !== (title_value = /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*post*/ 1 && t1_value !== (t1_value = /*post*/ ctx[0].title + "")) set_data_dev(t1, t1_value);
			if (dirty & /*post*/ 1 && raw_value !== (raw_value = /*post*/ ctx[0].body + "")) div.innerHTML = raw_value;		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
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

let item = {};

function load(postid) {
	const curr = item.id;
	const isCurrent = curr && curr == postid;
	if (!postid || isCurrent) return Promise.resolve(item);
	return fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`).then(r => r.json());
}

function preload(req) {
	return load(req.params.postid).then(obj => item = obj);
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots('Article', slots, []);
	let { params = {} } = $$props;

	// Initial value (preload)
	let post = item;

	const writable_props = ['params'];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Article> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ('params' in $$props) $$invalidate(1, params = $$props.params);
	};

	$$self.$capture_state = () => ({ item, load, preload, params, post });

	$$self.$inject_state = $$props => {
		if ('params' in $$props) $$invalidate(1, params = $$props.params);
		if ('post' in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*params*/ 2) {
			// Reactively update `post` value
			load(params.postid).then(obj => $$invalidate(0, post = obj));
		}
	};

	return [post, params];
}

class Article extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { params: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Article",
			options,
			id: create_fragment.name
		});
	}

	get params() {
		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Article as default, preload };
//# sourceMappingURL=Article.js.map