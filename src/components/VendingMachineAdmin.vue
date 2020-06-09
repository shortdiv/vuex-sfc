<template>
  <div class="wrapper">
    <div
      :style="{ display: isDispensing ? 'block' : 'none' }"
      class="loading-state"
    >
      <svg
        class="gears"
        viewBox="0 0 146.41 134.96"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="49.91"
          cy="49.8"
          fill="none"
          r="30.5"
          stroke="#ccc"
          stroke-miterlimit="10"
          stroke-width="20"
        />
        <g fill="#d1cfd0">
          <path d="m75.22 25.04-28.76-12.37 15.82-12.67 11.89 5.11z" />
          <path d="m22.79 26.5 28.76-12.37-15.82-12.67-11.89 5.12z" />
          <path d="m23.95 74.73 28.76 12.37-15.82 12.67-11.89-5.11z" />
          <path d="m77.38 73.19-28.76 12.37 15.82 12.67 11.89-5.11z" />
          <path d="m12.29 51.6 14.68-27.65-20.27.03-6.07 11.43z" />
          <path d="m86.67 49.95-14.67-27.65 20.27.03 6.06 11.43z" />
          <path d="m87.67 46.64-14.67 27.66 20.27-.04 6.06-11.43z" />
          <path d="m11.66 49.64 14.67 27.66-20.26-.04-6.07-11.43z" />
        </g>
        <circle
          cx="122.07"
          cy="59.61"
          fill="none"
          r="15.02"
          stroke="#ccc"
          stroke-miterlimit="10"
          stroke-width="10"
        />
        <path
          d="m134.53 47.42-14.16-6.09 7.79-6.23 5.86 2.51z"
          fill="#d1cfd0"
        />
        <path
          d="m108.72 48.14 14.16-6.09-7.79-6.24-5.85 2.52z"
          fill="#d1cfd0"
        />
        <path
          d="m109.29 71.89 14.16 6.09-7.79 6.24-5.85-2.52z"
          fill="#d1cfd0"
        />
        <path d="m135.6 71.13-14.16 6.09 7.79 6.24 5.85-2.52z" fill="#d1cfd0" />
        <path d="m103.55 60.5 7.23-13.61-9.98.01-2.99 5.63z" fill="#d1cfd0" />
        <path d="m140.17 59.69-7.22-13.62 9.98.02 2.99 5.63z" fill="#d1cfd0" />
        <path d="m140.67 58.06-7.23 13.62 9.98-.02 2.99-5.63z" fill="#d1cfd0" />
        <path d="m103.24 59.54 7.23 13.61-9.98-.01-2.99-5.63z" fill="#d1cfd0" />
        <circle
          cx="105.74"
          cy="107.51"
          fill="none"
          r="16.56"
          stroke="#ccc"
          stroke-miterlimit="10"
          stroke-width="10"
        />
        <path
          d="m122.65 98.38-13.16-10.76 10.15-4.24 5.44 4.44z"
          fill="#d1cfd0"
        />
        <path d="m95.07 91.3 16.86-2.15-6.36-8.98-6.97.89z" fill="#d1cfd0" />
        <path
          d="m88.47 116.64 13.16 10.76-10.15 4.24-5.44-4.44z"
          fill="#d1cfd0"
        />
        <path
          d="m116.58 123.83-16.86 2.15 6.36 8.98 6.97-.89z"
          fill="#d1cfd0"
        />
        <path
          d="m85.84 102.83 11.8-12.24-10.58-3.01-4.88 5.06z"
          fill="#d1cfd0"
        />
        <path
          d="m124.9 113.09-3.52-16.62 10.57 3.05 1.46 6.87z"
          fill="#d1cfd0"
        />
        <path
          d="m125.92 111.51-11.79 12.24 10.58 3.02 4.87-5.06z"
          fill="#d1cfd0"
        />
        <path
          d="m85.81 101.71 3.52 16.63-10.57-3.05-1.46-6.87z"
          fill="#d1cfd0"
        />
      </svg>
      <h2>Dispensing...</h2>
    </div>
    <div
      :style="{ display: isRestocking ? 'block' : 'none' }"
      class="loading-state"
    >
      <svg
        class="cart"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 257.35 223.7"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <rect
              class="cls-1"
              x="186.04"
              y="99.76"
              width="9.73"
              height="110.83"
              transform="translate(197.61 -90.75) rotate(52.46)"
            />
            <circle class="cls-2" cx="122.5" cy="199.2" r="19.5" />
            <rect
              class="cls-1"
              x="88.44"
              y="93.43"
              width="13.75"
              height="100.86"
              transform="translate(-67.96 88.01) rotate(-37.59)"
            />
            <circle class="cls-2" cx="135.5" cy="199.2" r="19.5" />
            <rect
              class="cls-1"
              x="92.46"
              y="-16.97"
              width="12.56"
              height="220.89"
              transform="translate(-36.52 79.64) rotate(-37.59)"
            />
            <rect
              class="cls-1"
              x="61.44"
              y="51.03"
              width="13.11"
              height="57.34"
              transform="translate(7.11 -5.56) rotate(4.94)"
            />
            <rect
              class="cls-3"
              x="124"
              y="46.7"
              width="115"
              height="97"
              transform="translate(-20.39 130.49) rotate(-37.59)"
            />
            <rect
              class="cls-3"
              x="81.5"
              y="18.91"
              width="78.1"
              height="54.09"
              transform="translate(-3 83.09) rotate(-37.59)"
            />
            <rect
              class="cls-1"
              x="15.86"
              y="-2.49"
              width="9.98"
              height="44.92"
              transform="translate(23.98 -8.73) rotate(52.46)"
            />
            <rect
              class="cls-4"
              x="104.44"
              y="23.29"
              width="12.69"
              height="22.07"
              transform="translate(2.06 74.71) rotate(-37.59)"
            />
            <rect
              class="cls-4"
              x="151.15"
              y="53.19"
              width="21.99"
              height="22.07"
              transform="translate(-5.51 112.25) rotate(-37.59)"
            />
          </g>
        </g>
      </svg>
      <h2>Loading...</h2>
    </div>
    <div :style="{ display: isInLoadingState ? 'none' : 'block' }">
      <svg
        class="chipbag"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 140.7 175"
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              stroke-miterlimit="10"
              stroke="#000"
              fill="#f48787"
              d="M10.79 21.5h121v132h-121z"
            />
            <path
              class="cls-2"
              d="M131.79 21.5h-121L.79.5h139l-8 21zM131.97 153.5h-121l-10 21h139l-8-21z"
            />
            <circle
              cx="73.29"
              cy="88"
              r="46.5"
              fill="#fff"
              stroke-miterlimit="10"
              stroke="#000"
            />
            <path
              class="chip-1"
              d="M39.79 90.1c.38-3.43 15.68.68 28.66-10.61C75.87 73 77 66.34 85.44 63.56c.92-.3 9-2.86 14.86 1.07 9.07 6.13 9.21 25.88 1.06 35-15.65 17.59-62.24-3.49-61.57-9.53z"
            />
            <path
              class="chip-2"
              d="M40.32 90.63c0 .74.64 13.89 11.37 20.17 8.66 5.06 20.12 3.44 27.91-4.25a60.45 60.45 0 01-39.28-15.92z"
            />
          </g>
        </g>
      </svg>
      <div class="product-name">
        <span>Lays</span>
        <h2>Potato Chips</h2>
        <p>Product Code</p>
        <span>76424233</span>
      </div>
    </div>
    <section
      class="action-section"
      :style="{ filter: isRestocking ? 'contrast(0.5)' : 'none' }"
    >
      <div class="supply">
        <div class="supply-count">
          <span class="count">Supply</span>
          <h4>{{ supply }}</h4>
        </div>
      </div>
      <div class="buttons">
        <button class="restock-btn" @click="restock" :disabled="supply === 40">
          Restock
        </button>
        <button class="dispense-btn" @click="dispense" :disabled="supply === 0">
          Dispense
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
// fake API call //
let inventory = {
  chips: {
    stock: 40
  }
};
var pingInventory = function(item) {
  return new Promise(resolve => {
    setTimeout(function() {
      resolve(inventory[item]);
    }, 3000);
  });
};

export default {
  name: "VendingMachineAdmin",
  data() {
    return {
      isDispensing: false
    };
  },
  computed: {
    supply() {
      return this.$store.state.supply;
    },
    isRestocking() {
      return this.$store.state.isRestocking;
    },
    isInLoadingState() {
      return this.$store.state.isRestocking || this.isDispensing;
    }
  },
  methods: {
    dispense() {
      this.isDispensing = true;
      setTimeout(() => {
        this.$store.dispatch("dispense");
        this.isDispensing = false;
      }, 3000);
    },
    restock() {
      this.$store.dispatch("fetchFromInventory");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
[class*="chip-"] {
  fill: #ffc400;
}

.cls-2 {
  fill: #843b3b;
}

.wrapper {
  border-radius: 10px;
  background: #fff;
  border: 1px solid black;
  width: 350px;
  height: 500px;
  position: relative;
}

svg {
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
  display: block;
}

.chipbag {
  width: 50%;
}

.gears {
  width: 50%;
  height: 327px;
}

.product-name {
  position: relative;
  margin: 0 auto;
  width: 55%;
  & p {
    display: inline-block;
  }
  & h2 {
    font-size: 30px;
    margin: 0;
  }
}

.action-section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px;
  position: relative;
  height: 200px;
  background: #008a56;
  color: white;
  border-radius: 0 0 10px 10px;
  & .buttons {
    width: 150px;
  }
}

.supply-count {
  height: 100px;
  width: 100px;
  background: #74b39c;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    position: absolute;
    top: -30px;
    left: 30%;
  }
  & h4 {
    font-size: 40px;
  }
}

.restock-btn,
.dispense-btn {
  width: 150px;
  cursor: pointer;
  font-size: 20px;
  color: white;
  background: #ffb232;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  &:disabled {
    opacity: 0.4;
  }
}

.dispense-btn {
  margin-top: 10px;
  background: red;
}
.cart {
  width: 50%;
  height: 327px;
  .cls-1 {
    fill: #d1cfd0;
  }
  .cls-2 {
    fill: #f7f7f7;
    stroke-width: 10px;
  }
  .cls-2,
  .cls-3 {
    stroke: #000;
    stroke-miterlimit: 10;
  }
  .cls-3 {
    fill: #f7b47d;
  }
  .cls-4 {
    fill: #f36a4a;
  }
}

.loading-state {
  text-align: center;
}
</style>
