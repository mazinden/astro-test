// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Сервис по работе с пользователями',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			plugins: [
				starlightOpenAPI([{ base: 'api', schema: './src/schemas/openapi.yaml' }]),
			],
			sidebar: [
				{ label: 'Обзор', slug: 'overview' },
				{ label: 'Быстрый старт', slug: 'quickstart' },
				{ label: 'Аутентификация', slug: 'authentication' },
				{
					label: 'Примеры',
					autogenerate: { directory: 'examples' },
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
