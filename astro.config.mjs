// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://lib-port.github.io',
	base: '/insur-proto',
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Hearthline · Documentation',
			description: 'The product thinking behind a thoughtful home insurance experience.',
			favicon: '/favicon.svg',
			customCss: ['./src/styles/docs.css'],
			sidebar: [
				{ label: 'Back to Hearthline', link: '/' },
				{
					label: 'Product case study',
					items: [
						{ label: 'Overview', slug: 'docs' },
						{ label: 'Problem and audience', slug: 'docs/problem-and-audience' },
						{ label: 'Product strategy', slug: 'docs/product-strategy' },
						{ label: 'Design decisions', slug: 'docs/design-decisions' },
						{ label: 'Measurement and roadmap', slug: 'docs/measurement-and-roadmap' },
					],
				},
			],
		}),
	],
});
