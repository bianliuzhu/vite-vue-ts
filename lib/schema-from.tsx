import { defineComponent, PropType } from "vue";
import { Schema } from "./types";
import SchemaItem from "./schema-item";

export default defineComponent({
	name: "SchemaForm",
	props: {
		schema: {
			type: Object as PropType<Schema>,
			required: true,
		},
		value: {
			required: true,
		},
		onChange: {
			type: Function as PropType<(v: any) => void>,
			required: true,
		},
	},
	setup(props, { slots, emit, attrs }) {
		const handleChange = (v: any) => {
			props.onChange(v);
		};
		return () => {
			const { schema, value } = props;
			return (
				<SchemaItem schema={schema} value={value} onChange={handleChange} />
			);
		};
	},
});
