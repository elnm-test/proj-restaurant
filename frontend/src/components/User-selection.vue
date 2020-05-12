<template>
  <div class="table-select flex column center space-evenly">
    <el-date-picker
      @change="setTables();  sendUserSelection()"
      v-model="selection.date"
      format="dd/MM/yyyy"
      value-format="MMM dd yyyy"
      type="date"
      placeholder="Choose Date"
      :picker-options="pickerOptions"
    ></el-date-picker>

    <el-select
      @change="setTables() ; sendUserSelection()"
      class="select-time"
      v-model="selection.time"
      placeholder="Select Time"
    >
      <el-option v-for="time in times" :key="time" :value="time"></el-option>
    </el-select>

    <el-select
      @change="setTables(); sendUserSelection()"
      class="select-location"
      v-model="selection.location"
      :default-first-option="true"
    >
      <el-option v-for="location in locations" :key="location" :value="location"></el-option>
    </el-select>

    <el-select
      @change="setTables(); sendUserSelection()"
      class="select-size"
      placeholder="Select Number Of People"
      v-model="selection.size"
      :default-first-option="true"
    >
      <el-option v-for="num in 8" :key="num" :value="num"></el-option>
    </el-select>
  </div>
</template>

<script>
import eventBus from '../services/busService'

export default {
  async created() {
    await this.$store.dispatch({ type: "initTablesModel" });
    this.times = this.$store.getters.times;
    this.locations = this.$store.getters.locations;
    eventBus.$on('resetDetails',this.resetSelection);
  },
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() + 1000 * 60 * 60 * 24 < Date.now();
        },
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "Tommorow",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "Next Week",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },

      selection: {
        date: null,
        time: null,
        location: "Any Location",
        size: null
      },
      times: [],
      locations: []
    };
  },
  methods: {
    //BOTH METOHDS WORK ON THE SAME EVENT
     async setTables() {
      if (this.selection.date && this.selection.time && this.selection.size) {
        let time = +this.selection.time.slice(0, -2);
        time = time < 12 ? time + 12 + ":00" : time + ":00";
        var dateTime = `${this.selection.date}` + ` ` + `${time}`;
        await this.$store.dispatch({ type: "setTables", dateTime });
      }
    },
    sendUserSelection() {
      if (this.selection.date && this.selection.time && this.selection.size) {
        var selection = this.selection;
        this.$emit("selection", selection);
      }
    },
    resetSelection(){
      for (let selection in this.selection){
        this.selection[selection] = ''
      }
    }
  },
  computed: {
    tables() {
      return this.$store.getters.tables;
    },
    isTablesEmpty() {
      return !this.tables.length;
    }
  }
};
</script>