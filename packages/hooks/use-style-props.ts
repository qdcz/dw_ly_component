import { ref, nextTick, toRaw } from 'vue';
import { isUrl } from '@visix-ui/utils';

import {
	filterStyleProperty,
	mergeOptions,
	setStyleProperty,
	clearStyleProperty,
	getValueByKeyStr,
	findDiff,
} from '@visix-ui/utils/props';

interface ICfg {
	formatUrl?: Boolean; //是否拼接url
}

interface IParams {
	defaultStyleProps: object; //默认样式配置项
	cfg?: ICfg;
}

export const useStyleProps = (params: IParams) => {
	//组件ref
	const refCpn = ref<HTMLElement | null>(null);

	//当前样式配置项
	const currentStyleProps = ref<object>({});

	/**
	 * 过滤property
	 * @param options 样式配置项
	 * @param notMerge 不合并
	 * @param defaultProps 默认配置项
	 * @returns
	 */
	const f = (options: object, notMerge = false, defaultProps: object = params.defaultStyleProps) => {
		return filterStyleProperty(!notMerge ? mergeOptions(options, defaultProps) : options);
	};

	/**
	 * 获取对象值
	 * @param key key值, 可以是user.a.name的格式
	 * @param suffixKey 附加key, 格式与key一样。自动拼接在key的后面, 默认是show
	 * @param source 目标对象
	 * @returns
	 */
	const v = (key: string, suffixKey: string = 'show', source: object = currentStyleProps.value) =>
		getValueByKeyStr(key, suffixKey, source);

	/**
	 * 更新某项配置项
	 */
	const updateStyleProperty = (opt: object, currentOpt: object, cb?) => {
		const newOpt = f(opt, false, currentOpt ?? params.defaultStyleProps);
		if (cb) return cb(newOpt);
		loadStyleProperty(newOpt, currentStyleProps.value);
	};

	/**
	 * 加载styleProperty
	 * @param style 最新样式配置项
	 * @param oldStyle 当前样式配置项
	 */
	const loadStyleProperty = (style: object, oldStyle?: object, callback?: () => void) => {
		//根据配置项中的show、type字段过滤选项
		const nStyle = f(style ?? toRaw(params.defaultStyleProps));
		const oStyle = oldStyle ? f(toRaw(oldStyle), true) : {};

		currentStyleProps.value = nStyle;

		//需要被清除的style
		const clearedStyle = findDiff(oStyle, nStyle) || {};
		//需要被设置的style
		const currentStyle = findDiff(nStyle, oStyle) || {};

		nextTick(() => {
			try {
				if (refCpn.value) {
					clearStyleProperty(clearedStyle, refCpn.value);
					setStyleProperty(currentStyle, refCpn.value, [], (optionsArr) => {
						// 样式值为url时，拼接上url()字符串
						return optionsArr.map((item) => ({
							...item,
							value:
								params['cfg'] && params['cfg']['formatUrl'] && isUrl(item.value + '')
									? `url(${item.value})`
									: item.value,
						}));
					});
				}
				callback && callback();
			} catch (error) {}
		});
		return currentStyle;
	};

	return {
		refCpn,
		f,
		v,
		currentStyleProps,
		loadStyleProperty,
		clearStyleProperty,
		setStyleProperty,
		updateStyleProperty,
	};
};
