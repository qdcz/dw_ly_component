export class DataCircularConsumption {
    private list: any[];
    private severalGroups: number; // 展示几条
    private windowSliding: number[];

    constructor(list: any[] = [], severalGroups: number = 7) {
        this.list = list;
        this.severalGroups = severalGroups;
        this.windowSliding = new Array(this.severalGroups)
            .fill(0)
            .map((i, index) => index);
    }

    // 每次消费的条数
    take(count: number): any[] {
        this.Sliding(count);
        return this.show();
    }

    show(): any[] {
        // console.log("show", this.windowSliding);
        return this.windowSliding.map((index) => {
            return this.list[index];
        });
    }

    Sliding(count: number): void {
        this.windowSliding = this.windowSliding.map((i) => {
            const len = this.list.length;
            const added = i + count;
            return added <= len - 1 ? added : added - len;
        });
    }
}

export const deepClone = function <T>(obj: T): T {
    const result: any = obj instanceof Array ? [] : {};
    for (let i in obj) {
        result[i] = typeof obj[i] == "object" ? deepClone(obj[i]) : obj[i];
    }
    return result as T;
};

export function scrollTo(
    element: HTMLElement,
    to: number,
    duration: number,
    callback?: () => void
): void {
    const start = element.scrollTop;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll() {
        const now = performance.now();
        const timeElapsed = now - startTime;
        const scrollPosition = easeInOutQuad(
            timeElapsed,
            start,
            change,
            duration
        );
        element.scrollTop = scrollPosition;

        if (timeElapsed < duration) {
            requestAnimationFrame(animateScroll);
        } else {
            if (callback) callback();
        }
    }

    function easeInOutQuad(t: number, b: number, c: number, d: number): number {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animateScroll);
}
