//组件props相关工具函数
import { createNamespace } from '@dw-ui/utils/components';
const { n } = createNamespace('');
/**
 * 创建唯一标识
 */
export const createUUID = (prefix = n()) => {
	return (
		prefix +
		'xxxxxxxx'.replace(/[xy]/g, function (a) {
			var b = 0 | (16 * Math.random()),
				c = 'x' == a ? b : 8 | (3 & b);
			return c.toString(16);
		})
	);
};