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
    type: string = "top",
    to: number,
    duration: number,
    callback?: () => void
): void {
    const start =
        type == "top"
            ? element.scrollTop
            : type == "left"
            ? element.scrollLeft
            : 0;
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
        if (type == "top") {
            element.scrollTop = scrollPosition;
        } else if (type == "left") {
            element.scrollLeft = scrollPosition;
        }

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

export function generateUUID(): string {
    let d = new Date().getTime();

    // Use high-performance timer if available
    if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
    ) {
        d += performance.now();
    }

    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        (c) => {
            const r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
    );

    return uuid;
}

// 给数组中出现相同的数据打上__id 第一个被相同的不变
export function addUniqueIdToDuplicateData(array: any[]): any[] {
    const uniqueValues: { [key: string]: any } = {};
    return array.map((item: any) => {
      const { __id, ...rest } = item;
      const value = JSON.stringify(rest);
      if (!uniqueValues[value]) {
        uniqueValues[value] = true;
        return item;
      }
      const uniqueId = generateUUID();
      const updatedItem = { ...item, __id: uniqueId };
      return updatedItem;
    });
  }
