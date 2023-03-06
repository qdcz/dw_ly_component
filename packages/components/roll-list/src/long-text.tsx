import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'ScrollText',

  props: {
    text: {
      type: String,
      required: true,
    },
    speed: {
      type: Number,
      default: 50,
    },
  },

  setup(props) {
    const container = ref<HTMLDivElement | null>(null);
    const content = ref<HTMLDivElement | null>(null);
    const text = ref<HTMLDivElement | null>(null);
    let requestId: number | null = null;
    let isStop = false;

    // 滚动文本
    const scrollText = () => {
      const left = content.value!.scrollLeft;
      if (isStop || left + container.value!.clientWidth >= content.value!.scrollWidth) {
        return;
      }

      content.value!.scrollLeft += 1;
      requestId = requestAnimationFrame(scrollText);
    };

    // 开始滚动
    const startScroll = () => {
      if (content.value!.scrollWidth <= container.value!.clientWidth) {
        return;
      }

      requestId = requestAnimationFrame(scrollText);
    };

    // 停止滚动
    const stopScroll = () => {
      isStop = true;
      if (requestId !== null) {
        cancelAnimationFrame(requestId);
        requestId = null;
      }
    };

    // 监听组件挂载和销毁事件
    onMounted(() => {
      startScroll();
      container.value!.addEventListener('mouseenter', stopScroll);
      container.value!.addEventListener('mouseleave', startScroll);
    });

    onUnmounted(() => {
      stopScroll();
      container.value!.removeEventListener('mouseenter', stopScroll);
      container.value!.removeEventListener('mouseleave', startScroll);
    });

    return {
      container,
      content,
      text,
    };
  },

  render() {
    return (
      <div class="scroll-text-container" ref="container">
        <div class="scroll-text-content" ref="content">
          <div class="scroll-text" ref="text" style={ { whiteSpace: 'nowrap' } }>
           464654
          </div>
        </div>
      </div>
    );
  },
});
