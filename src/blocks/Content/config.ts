import { link } from "@/fields/link";
import { richTextField } from "@/fields/richText";
import type { Block, Field } from "payload";

const columnFields: Field[] = [
	{
		name: "size",
		type: "select",
		defaultValue: "oneThird",
		options: [
			{
				label: "One Third",
				value: "oneThird",
			},
			{
				label: "Half",
				value: "half",
			},
			{
				label: "Two Thirds",
				value: "twoThirds",
			},
			{
				label: "Full",
				value: "full",
			},
		],
	},
	...richTextField(),
	{
		name: "enableLink",
		type: "checkbox",
	},
	link({
		overrides: {
			admin: {
				condition: (_, { enableLink }) => Boolean(enableLink),
			},
		},
	}),
];

export const Content: Block = {
	slug: "content",
	interfaceName: "ContentBlock",
	fields: [
		{
			name: "columns",
			type: "array",
			admin: {
				initCollapsed: true,
			},
			fields: columnFields,
		},
	],
};
