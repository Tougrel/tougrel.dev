export default defineAppConfig({
	ui: {
		primary: "violet",

		slideover: {
			background: "bg-background-900",
		},

		modal: {
			background: "bg-background-900",
		},

		tooltip: {
			background: "bg-background-900",
		},

		popover: {
			background: "bg-background-900",
		},

		dropdown: {
			background: "bg-background-900",
			item: {
				active: "bg-primary-600/40",
				icon: {
					base: "flex-shrink-0 h-4 w-4",
					inactive: "text-primary-500",
					active: "text-white-full",
				},
			},
		},
	},
});
