import { defineComponent, onMounted, ref, SetupContext } from 'vue';
import { rollListProps } from './roll-list_p';
import { createNamespace } from "@dw-ui/utils/components";
const { n } = createNamespace("scroll-text");
export default defineComponent({
  name: 'ScrollText',
  setup(props: rollListProps, ctx: SetupContext<[]>) {
    const containerRef = ref<HTMLDivElement | null | any>(null);
    const contentRef = ref<HTMLDivElement | null | any>(null);
    const marqueerRef = ref<HTMLDivElement | null | any>(null);
    
    onMounted(() => {
      // const SPEED = 50; // 滚动速度，每秒50像素
      // const animate = function () {
      //   const duration = (contentRef.value.offsetWidth + contentRef.value.offsetWidth) / SPEED * 1000; // 滚动时长
      //   contentRef.value.style.animation = `scroll ${duration}ms linear infinite`; // 设置滚动动画
      // }
      // animate();


      //底下的走马灯
       const move = function() {
        let wrapper = containerRef.value;
        let wrapperWidth = wrapper.getBoundingClientRect().width;
        let marquee = contentRef.value;
        marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
        let contentWidth = marqueerRef.value.getBoundingClientRect().width;
        let distance = wrapperWidth;
        setInterval(() => {
          //当文字移动超出wrapper的左侧时 则归位
          if (marquee.getBoundingClientRect().x + contentWidth < wrapper.getBoundingClientRect().x) {
            distance = wrapperWidth;
          }
          distance--;
          console.log(666)
          marquee.style.transform = 'translateX(' + distance + 'px)';
        }, 20);
      }
      move()
    })


    return () =>
    (
      <div class={n("")} ref={containerRef}>
        <div class={n("_scroll")} ref={contentRef}>
          <span ref={marqueerRef}>{ctx.slots['default']?.()}</span>
        </div>
      </div>
    )

  }
});
