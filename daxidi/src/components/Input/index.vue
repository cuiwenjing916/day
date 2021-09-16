<template>
  <input v-model="formValue" />
</template>

<script>
const trim = (str) => {
  return str.replace(/(^\s*)|(\s*$)/g, "");
};

const format = {
  phone: {
    get(value) {
      return trim(value.replace(/(\d{3})(\d{0,4})(\d{0,4})/, "$1 $2 $3"));
    },
    set(value) {
      return value.replace(/\s/g, "");
    },
  },
};
export default {
  name: "inputs",
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {},
  },
  data() {
    return {
      val: "",
    };
  },
  watch: {
    val(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.val = newValue;
    },
  },
  computed: {
    formValue: {
      get() {
        if (this.type === "text") return this.val;
        console.log();
        return format[this.type].get(this.val);
      },
      set(val) {
        if (this.type === "text") {
          this.val = val;
        } else {
          this.val = format[this.type].set(val);
        }
      },
    },
    /* formatValue: {
      get () {
        if (this.type === 'text') return this.val
        return format[this.type].gets(this.val)
      },
      set (val) {
        if (this.type === 'text') {
          this.val = val
        } else {
          this.val = format[this.type].sets(val)
        }
      }
      get () {
        return this.val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
      },
      set (val) {
        this.val = val.replace(/\s/g,'')
      }
    } */
  },
};
</script>

<style lang="scss" scoped>
input {
  @include wh(100%, 48px);
  padding: 0;
  border: 0;
  outline: none;
  font-size: 16px;
}
</style>