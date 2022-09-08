import * as aaa from 'vue'

const ButtonCounter = {
    name: "button-counter",
    props: ["count"],
    methods: {
      onClick() {
        this.$emit("change", this.count + 1);
      }
    },
    render() {
      return (
        <button onClick={this.onClick}>You clicked me {this.count} times.</button>
      );
    }
  };
  
  export default {
    name: "button-counter-container",
    data() {
      return {
        count: 0
      };
    },
    methods: {
      onChange(val) {
        this.count = val;
        console.log(aaa)
      }
    },
    render() {
      const { count, onChange } = this;
      return (
        <div>
          <ButtonCounter
            style={{ marginTop: "10px" }}
            count={count}
            type="button"
            onChange={onChange}
          />
          <ButtonCounter
            style={{ marginTop: "10px" }}
            count={count}
            type="button"
            domPropsInnerHTML={`hello ${this.count}.`}
            onChange={onChange}
          />
        </div>
      );
    }
  };