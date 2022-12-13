import { isArray } from './shared';

type ClassName = string | undefined | null;
type Classes = (ClassName | [any, ClassName, ClassName?])[];

export function createNamespace(name: string) {
	const namespace = `vi-${name}`;

	// BEM风格CSS
	const createBEM = (suffix?: string): string => {
		if (!suffix) return namespace;

		return suffix.startsWith('-') ? `${namespace}${suffix}` : `${namespace}_${suffix}`;
	};
	const classes = (...classes: Classes): any[] => {
		return classes.map((className) => {
			if (isArray(className)) {
				const [condition, truthy, falsy = null] = className;
				return condition ? truthy : falsy;
			}

			return className;
		});
	};

	return {
		n: createBEM,
		classes,
	};
}
