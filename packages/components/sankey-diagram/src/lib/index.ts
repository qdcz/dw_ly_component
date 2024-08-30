const SankeyDiagram = function (className) {
    return class extends HTMLElement {
        constructor() {
            super();
            this.proxyData();
            this.register();
            this.render();
        }
        data() {
            return {
                leftData: [
                    {
                        name: "名字12水水水水水水水水1211111",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 17],
                    },
                    {
                        name: "名字2",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字3",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字4",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字5",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字6",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字7",
                        id: Math.random() * 10000000,
                        link: [1, 11, 14, 4],
                    },
                    {
                        name: "名字8",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                    {
                        name: "名字9",
                        id: Math.random() * 10000000,
                        link: [1, 2, 3, 4],
                    },
                ],

                rightData: [
                    { name: "系统1", id: 1 },
                    { name: "系统2", id: 2 },
                    { name: "系统3", id: 3 },
                    { name: "系统4", id: 4 },
                    { name: "系统5", id: 5 },
                    { name: "系统6", id: 6 },
                    { name: "系统7", id: 7 },
                    { name: "系统8", id: 8 },
                    { name: "系统9", id: 9 },
                    { name: "系统10", id: 10 },
                    { name: "系统11", id: 11 },
                    { name: "系统12", id: 12 },
                    { name: "系统13", id: 13 },
                    { name: "系统14", id: 14 },
                    { name: "系统15", id: 15 },
                    { name: "系统16", id: 16 },
                    { name: "系统17", id: 17 },
                ],

                leftBlockHeight: 0,
                leftBlockWidth: 0,
                rightBlockHeight: 0,
                rightWrapper: 0,
                centerWrapperWidth: 0,

                linkData: [], // 关联的连线数据

                itemGap: 2, // 单项间隙
            };
        }
        proxyData() {
            this.$da = new Proxy(this.data(), {
                get: function (obj, prop) {
                    return prop in obj ? obj[prop] : 37;
                },
                set(obj, prop, value) {
                    if (prop === "leftData") {
                    }
                    return Reflect.set(...arguments);
                },
            });
            window.$da = this.$da;
        }
        connectedCallback() {
            console.log("自定义元素添加至页面。");
        }
        disconnectedCallback() {
            console.log("自定义元素移除页面。");
        }
        adoptedCallback() {
            console.log("每当元素被移动到新文档中时调用。");
        }
        attributeChangedCallback() {
            console.log("在属性更改、添加、移除或替换时调用。");
        }
        /**
         * 渲染数据
         * @return {null}
         */
        render(leftData, rightData) {
            leftData ? (this.$da.leftData = leftData) : "";
            rightData ? (this.$da.rightData = rightData) : "";
            this.__shadowRoot.querySelector(".left").innerHTML = "";
            this.__shadowRoot.querySelector(".right").innerHTML = "";
            this.__shadowRoot.querySelector(".center").innerHTML = "";
            this.$da.linkData = [];

            this.renderLeftData(this.__shadowRoot, () => {
                let svgDom = this.__shadowRoot.querySelector("#svg");
                this.renderRightData(this.__shadowRoot, () => {
                    const leftWrapper =
                        this.__shadowRoot.querySelectorAll(".left>li");
                    const centerWrapper =
                        this.__shadowRoot.querySelector(".center");
                    this.$da.centerWrapperWidth = centerWrapper.clientWidth;
                    const rightWrapper =
                        this.__shadowRoot.querySelectorAll(".right>li");

                    leftWrapper.forEach((dom, idx) => {
                        if (idx == 0) {
                            this.$da.leftBlockHeight =
                                dom.getBoundingClientRect().height;
                            this.$da.leftBlockWidth = dom.clientWidth;
                        }
                        // const dot1 = `M0,${idx * this.$da.leftBlockHeight}`;
                        // const dot2 = `L12,${
                        //   idx * this.$da.leftBlockHeight + this.$da.leftBlockHeight / 2
                        // }`;
                        // const dot3 = `L0,${
                        //   idx * this.$da.leftBlockHeight + this.$da.leftBlockHeight
                        // }`;
                        // svgDom.appendChild(
                        //   this.create_trianglePath(`${dot1} ${dot2} ${dot3} Z`)
                        // );

                        // +4 是 marginTop的值
                        const marginTop =
                            idx == 0 ? 0 : this.$da.itemGap || 0.5;
                        let X = this.$da.leftBlockWidth;
                        let Y = null;
                        if (idx == 0) {
                            Y =
                                idx * this.$da.leftBlockHeight +
                                this.$da.leftBlockHeight / 2;
                        } else {
                            Y =
                                idx * this.$da.leftBlockHeight +
                                this.$da.leftBlockHeight / 2 +
                                marginTop * idx;
                        }
                        const position = [X, Y];
                        dom.setAttribute(
                            "position",
                            `${position[0]},${position[1]}`
                        );
                        this.$da.linkData.push({
                            id: dom.dataset.id,
                            position,
                        });
                    });

                    rightWrapper.forEach((dom, idx) => {
                        if (idx == 0) {
                            this.$da.rightBlockHeight =
                                dom.getBoundingClientRect().height;
                            this.$da.rightBlockWidth = dom.clientWidth;
                        }
                        dom.style.height = dom.clientHeight + "px";

                        // const dot1 = `M${this.$da.centerWrapperWidth - 12},${
                        //   idx * this.$da.rightBlockHeight + this.$da.rightBlockHeight / 2
                        // }`;
                        // const dot2 = `L${this.$da.centerWrapperWidth + 0},${
                        //   idx * this.$da.rightBlockHeight
                        // }`;
                        // const dot3 = `L${this.$da.centerWrapperWidth + 0},${
                        //   idx * this.$da.rightBlockHeight + this.$da.rightBlockHeight
                        // }`;
                        // svgDom.appendChild(
                        //   this.create_trianglePath(`${dot1} ${dot2} ${dot3} Z`)
                        // );

                        // +4 是 marginTop的值
                        const marginTop = idx == 0 ? 0 : this.$da.itemGap;
                        let X = this.$da.centerWrapperWidth;
                        let Y = null;
                        if (idx == 0) {
                            Y =
                                idx * this.$da.rightBlockHeight +
                                this.$da.rightBlockHeight / 2;
                        } else {
                            Y =
                                idx * this.$da.rightBlockHeight +
                                this.$da.rightBlockHeight / 2 +
                                marginTop * idx;
                        }

                        const position = [X, Y];
                        dom.setAttribute(
                            "position",
                            `${position[0]},${position[1]}`
                        );
                        this.$da.linkData.push({
                            id: dom.dataset.id,
                            position,
                        });
                    });

                    /**
                     * 渲染中间连线
                     */
                    this.$da.leftData.forEach((item) => {
                        if (item.link && item.link.length > 0) {
                            item.link.forEach((rightId) => {
                                const left_filterData =
                                    this.$da.linkData.filter(
                                        (i) => i.id == item.id
                                    )[0];
                                const right_filterData =
                                    this.$da.linkData.filter(
                                        (i) => i.id == rightId
                                    )[0];

                                const startDot = `${0},${
                                    left_filterData.position[1]
                                }`;
                                const endDot = `${right_filterData.position[0]},${right_filterData.position[1]}`;
                                const startDotExtend = `${0},${
                                    left_filterData.position[1]
                                }`;
                                const endDotExtend = `${right_filterData.position[0]},${right_filterData.position[1]}`;
                                let sp1 = null,
                                    sp2 = null,
                                    Qlength = 40;

                                const centerX =
                                    right_filterData.position[0] / 2;
                                let centerY = 0; // 左侧数据的起始点是否在右侧起始点的上方或者下方
                                if (
                                    right_filterData.position[1] -
                                        left_filterData.position[1] >
                                    0
                                ) {
                                    centerY =
                                        (right_filterData.position[1] -
                                            left_filterData.position[1]) /
                                        2;

                                    sp1 = `${Qlength} ${
                                        left_filterData.position[1] - Qlength
                                    }`;
                                } else {
                                    centerY =
                                        (left_filterData.position[1] -
                                            right_filterData.position[1]) /
                                        2;
                                    sp1 = `${Qlength} ${
                                        left_filterData.position[1] + Qlength
                                    }`;
                                }

                                sp2 = `${this.$da.centerWrapperWidth / 2} ${
                                    left_filterData.position[1]
                                }`;
                                // const centerDot = `Q ${centerX} ${centerY}`;
                                const centerDot = `${centerX} ${centerY}`;

                                svgDom.insertBefore(
                                    // this.create_linePath(`${startDot} ${centerDot} ${endDot}`, [
                                    this.create_linePath(
                                        // `M ${startDot} L ${startDotExtend} Q ${sp1} ${endDotExtend} t ${endDot}`,
                                        // `M ${startDot} Q ${sp1} ${endDotExtend} t ${endDot}`,
                                        // `M ${startDot} Q ${startDotExtend} ${centerDot} T ${endDot}`,

                                        // `M ${startDot} Q ${centerDot} ${endDot}`,
                                        `M ${startDot} ${endDot}`,
                                        [item.id, rightId]
                                    ),
                                    svgDom.childNodes[0]
                                );
                            });
                        }
                    });
                });
            });
        }
        /**
         * 创建svg三角形函数
         * @param {string} path path路径
         * @return {element} dom元素
         */
        create_trianglePath(path = "M0,0 L12,6 L0,12 Z") {
            let newPath = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            newPath.setAttribute("d", path);
            // newPath.setAttribute("style", "fill: #24c5e6;filter: url(#glow);");
            newPath.setAttribute("style", "fill: #24c5e6;");
            return newPath;
        }
        /**
         * 创建svg线函数
         * @param {string} path path路径
         * @param {string} ids 线上绑定的左边节点和右边节点的id
         * @return {element} dom元素
         */
        create_linePath(path, ids) {
            let newPath = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            );
            newPath.setAttribute("d", path);
            newPath.classList.add("line");
            newPath.setAttribute("data-ids", ids);
            // newPath.setAttribute("style", "filter: url(#glow);");
            // newPath.setAttribute("style", "fill: #24c5e6;");
            return newPath;
        }
        asyncAddDom_svgPath(path = "M0,0 L12,6 L0,12 Z") {}
        /**
         * 注册元素事件
         * @return {null}
         */
        register() {
            let template = document.getElementById("spider");
            let templateContent = template.content;
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));
            const leftWrapper = shadowRoot.querySelector(".left");
            const rightWrapper = shadowRoot.querySelector(".right");
            const sideClick = (e) => {
                const id = e.target.dataset.id;
                const linePathList =
                    shadowRoot.querySelectorAll(".center > .line");

                // TODO 缓存记录  减少remove次数
                const leftItems = shadowRoot.querySelectorAll(".left > .item");
                const rightItems =
                    shadowRoot.querySelectorAll(".right > .item");
                [...Array.from(leftItems), ...Array.from(rightItems)].forEach(
                    (dom) => {
                        dom.classList.remove("itemActive");
                    }
                );

                // TODO 缓存记录  减少remove次数
                Array.from(linePathList).forEach((dom) => {
                    const lineLinkIds = dom.dataset.ids.split(",");
                    if (lineLinkIds.findIndex((_id) => id == _id) == -1) {
                        // 取消激活线
                        dom.classList.remove("lineActive");
                    } else {
                        /**
                         * 激活双边的文字
                         */
                        const l_fidx = this.$da.leftData.findIndex(
                            (i) => i.id == lineLinkIds[0]
                        );
                        const r_fidx = this.$da.rightData.findIndex(
                            (i) => i.id == lineLinkIds[1]
                        );
                        leftItems[l_fidx].classList.add("itemActive");
                        rightItems[r_fidx].classList.add("itemActive");

                        // 激活线
                        dom.classList.add("lineActive");
                    }
                });
            };
            leftWrapper.addEventListener("click", (e) => {
                sideClick(e);
            });

            rightWrapper.addEventListener("click", (e) => {
                sideClick(e);
            });

            this.__shadowRoot = shadowRoot;
        }
        /**
         * 渲染左边列表数据
         * @param {string} shadowRoot
         * @param {function} cb 回调函数
         * @return {null}
         */
        renderLeftData(shadowRoot, cb) {
            shadowRoot.querySelector(".left").innerHTML = "";
            this.$da.leftData.forEach((item, index) => {
                const liDom = document.createElement("li");
                liDom.setAttribute("class", index == 0 ? "item" : "item mt");
                liDom.setAttribute("data-id", item.id);
                liDom.innerText = item.name;
                shadowRoot.querySelector(".left").appendChild(liDom);
            });
            cb();
        }
        /**
         * 渲染右边列表数据
         * @param {string} shadowRoot
         * @param {function} cb 回调函数
         * @return {null}
         */
        renderRightData(shadowRoot, cb) {
            shadowRoot.querySelector(".right").innerHTML = "";
            this.$da.rightData.forEach((item, index) => {
                const liDom = document.createElement("li");
                liDom.setAttribute("class", index == 0 ? "item" : "item mt");
                liDom.setAttribute("data-id", item.id);
                liDom.innerText = item.name;
                shadowRoot.querySelector(".right").appendChild(liDom);
            });
            cb();
        }
        /**
         * 清除所有选中状态
         * @return {null}
         */
        clearAllActive(shadowRoot) {
            shadowRoot = shadowRoot
                ? this.attachShadow({ mode: "open" })
                : this.shadowRoot;
            const linePathList = shadowRoot.querySelectorAll(".center > .line");
            Array.from(linePathList).forEach((dom) => {
                dom.classList.remove("lineActive");
            });

            const leftItems = shadowRoot.querySelectorAll(".left > .item");
            const rightItems = shadowRoot.querySelectorAll(".right > .item");
            [...Array.from(leftItems), ...Array.from(rightItems)].forEach(
                (dom) => {
                    dom.classList.remove("itemActive");
                }
            );
        }
        changeCss(cssObj) {
            const {
                height,
                width,
                gap,
                fontSize,
                fontColor,
                fontColor_active,
                fontColor_hover,
                fontWeight,
                fontFamily,
                animationTime,

                leftBackgroundImgUrl,
                rightBackgroundImgUrl,
                leftBackgroundImgUrl_active,
                rightBackgroundImgUrl_active,

                lineWidth,
                lineActiveWidth,
                lineColor,
                lineColorActive,
                lineColorHover,
                leftItemPadding,
                rightItemPadding,
            } = cssObj;
            // const dom = this.shadowRoot.querySelector(".spider");
            // dom.style.width = W + "px";
            // dom.style.height = H + "px";
            this.$da.itemGap = gap;
            const sheet = this.shadowRoot.querySelector("style").sheet;
            // const sheet = this.getRootNode().styleSheets
            sheet.cssRules[2].style.width = width + "px";
            sheet.cssRules[2].style.height = height + "px";
            sheet.cssRules[2].style.fontSize = fontSize + "px";

            sheet.cssRules[4].style.color = fontColor;
            sheet.cssRules[4].style.fontWeight = fontWeight;
            sheet.cssRules[4].style.fontFamily = fontFamily;
            sheet.cssRules[5].style.backgroundImage = `url(${leftBackgroundImgUrl})`;
            sheet.cssRules[5].style.padding = leftItemPadding;
            sheet.cssRules[6].style.backgroundImage = `url(${rightBackgroundImgUrl})`;
            sheet.cssRules[6].style.padding = rightItemPadding;

            sheet.cssRules[8].style.marginTop = gap + "px";

            sheet.cssRules[9].style.backgroundImage = `url(${leftBackgroundImgUrl_active})`;
            sheet.cssRules[9].style.color = fontColor_active;
            sheet.cssRules[10].style.color = fontColor_active;
            sheet.cssRules[10].style.backgroundImage = `url(${rightBackgroundImgUrl_active})`;

            sheet.cssRules[11].style.color = fontColor_hover;
            sheet.cssRules[12].style.strokeWidth = lineWidth;
            sheet.cssRules[12].style.stroke = lineColor;
            sheet.cssRules[13].style.strokeWidth = lineActiveWidth;
            sheet.cssRules[13].style.stroke = lineColorActive;
            sheet.cssRules[13].style.animation = `lineMove ${animationTime}s infinite linear`;
            sheet.cssRules[14].style.stroke = lineColorHover;
            return this;
        }
    };
};

// module.exports = SankeyDiagram;
export default SankeyDiagram
