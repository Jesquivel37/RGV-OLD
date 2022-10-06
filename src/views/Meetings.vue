<template>
  <div class="board-con">
    <Accept
      v-if="btnOpt.accptDel"
      @accept="removeMeeting"
      @decline="btnOpt.accptDel = false"
    />
    <EditMeeting
      v-if="btnOpt.edit"
      :index="fromIndex"
      :year="metdata.currentYear"
      :title="metdata.selected.date"
      :meetings="metdata.original"
      :selected="metdata.selected"
      @edit-meeting="onEditDom"
      @close="btnOpt.edit = false"
    />
    <AddMeeting
      v-if="btnOpt.addMeet"
      title="hello"
      :meetings="metdata.original"
      @add-meeting="onAddMeeting"
      @close="btnOpt.addMeet = false"
    />
    <Authorization
      v-if="btnOpt.enableAuth"
      @close="btnOpt.enableAuth = event"
      inMessage="Enter Password"
      @accept="onAccept"
      title="Enter Password"
      body=""
    />

    <div v-if="btnOpt.isSecured">
      <button @click="btnOpt.addMeet = true">Add</button>
      <button @click="onEdit">Edit</button>
      <button @click="btnOpt.accptDel = true">Delete</button>
      <button @click="btnOpt.isSecured = false">Disable</button>
      <button @click="onUp" v-if="move">UP</button>
      <button @click="onDown" v-if="move">DOWN</button>
    </div>

    <div class="years-container">
      <ul class="years">
        <li
          class="year-li"
          @click="changeSelection(meeting)"
          :class="{ selected: meeting.selected }"
          v-for="meeting in metdata.years"
          :key="meeting.year"
        >
          {{ meeting.year }}
        </li>
      </ul>
    </div>
    <div class="board-body" @keydown="checkKey">
      <div class="tb-resp">
      <table class="table">
        <thead>
          <tr>
            <th v-if="btnOpt.isSecured"></th>
            <th>Date</th>
            <th>Agenda</th>
            <th>Minutes</th>
            <th>Approved Documents</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(meeting, index) in metdata.Meetings" :key="meeting.date">
            <td  v-if="btnOpt.isSecured">
              <input
                type="checkbox"
                @click="onSelect(meeting, index)"
                v-model="meeting.selected"
              />
            </td>
            <td data-label="Date">{{ meeting.date }}</td>
            <td data-label="Agenda" >
              <a target="_blank" :href="verifyLink(meeting.agendaLink)">
                {{ meeting.agendaTitle }}
              </a>
            </td>
            <td data-label="Minutes">
              <a target="_blank" :href="verifyLink(meeting.minutesLink)">
                {{ meeting.minutesTitle }}
              </a>
            </td>
            <td data-label="Approved Documents">
              <a target="_blank" :href="verifyLink(meeting.approvedLink)">
                {{ meeting.approvedTitle }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive } from "vue";
import Authorization from "@/components/Meetings/Authorization";
import AddMeeting from "@/components/Meetings/AddMeeting";
import Accept from "@/components/Meetings/Accept";
import EditMeeting from "@/components/Meetings/EditMeeting";
export default {
  components: { Authorization, AddMeeting, Accept, EditMeeting },
  setup() {
    const metdata = reactive({
      currentYear: new Date().getFullYear(),
      Meetings: [],
      years: [],
      original: {},
      selected: {},
    });
    const btnOpt = reactive({
      enableAuth: false,
      isSecured: false,
      addMeet: false,
      accptDel: false,
      edit: false,
    });
    const keysPressed = ref({});
    const fromIndex = ref(-1);
    const move = ref(false);
    return {
      metdata,
      btnOpt,
      fromIndex,
      move,
      keysPressed,
    };
  },
  async mounted() {
    document.addEventListener("keydown", this.keyDown);

    document.addEventListener("keyup", this.keyUp);

    let response = await fetch("https://www.lrgvdc911.org/php/agendas/meetings.php");
    this.metdata.original = await response.json();
    this.metdata.years = this.metdata.original.years;
    console.log(this.metdata);
    // If there is only one
    // This will be the defaul state view
    if (this.metdata.years.length == 1) {
      this.metdata.currentYear = this.metdata.years[0].year;
    }

    // IF there is only more than one.
    // Hope to find the currentYear..
    this.metdata.Meetings = this.metdata.original[this.metdata.currentYear]
      .slice()
      .reverse();
  },
  unmounted() {
    document.removeEventListener("keydown", this.keyDown);
    document.removeEventListener("keyup", this.keyUp);
  },
  methods: {
    changeSelection(meeting) {
      // First reset all years.
      this.metdata.years.forEach((meeting) => (meeting.selected = false));
      meeting.selected = true;
      this.metdata.currentYear = meeting.year;
      this.metdata.Meetings = this.metdata.original[this.metdata.currentYear]
        .slice()
        .reverse();
    },
    keyDown(event) {
      this.keysPressed[event.key] = true;

      if (this.keysPressed["Alt"] && event.key == "n") {
        this.btnOpt.enableAuth = true;
      }
    },
    keyUp(event) {
      delete this.keysPressed[event.key];
    },
    onAccept(e) {
      this.btnOpt.isSecured = e;
    },

    onAddMeeting(e) {
      //this.data = e;
      this.metdata.Meetings = this.metdata.original[this.metdata.currentYear]
        .slice()
        .reverse();
    },
    onEditDom(e) {
      this.metdata.Meetings = this.metdata.original[this.metdata.currentYear]
        .slice()
        .reverse();
    },
    onEdit() {
      this.btnOpt.edit = this.metdata.selected.date ? true : false;
    },
    removeMeeting() {
      this.btnOpt.accptDel = false;
      if (!this.metdata.selected.selected) {
        alert("Please select an item for removal!");
      } else {
        let yearSelected = this.metdata.years.find((meetings) => meetings.selected)[
          "year"
        ];
        if (yearSelected) {
          this.metdata.original[yearSelected].forEach((meeting, index, object) => {
            if (meeting.selected) object.splice(index, 1); // Remove item from array
          });
          this.metdata.Meetings = this.metdata.original[this.metdata.currentYear]
            .slice()
            .reverse();
        }
      }

      let formData = new FormData();
      let jsonStr = JSON.stringify(this.metdata.original);
      jsonStr = jsonStr.replace(/true/g, "false");
      formData.append("json", jsonStr);
      fetch("https://www.lrgvdc911.org/php/agendas/add.php", {
        method: "POST",
        body: formData,
      })
        .then()
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    },
    verifyLink(link) {
      var host = window.location.hostname;
      if (host.includes("localhost")) {
        return `https://www.lrgvdc911.org/${link}`;
      }

      return link;
    },
    onSelect(meeting, fromIndex) {
      console.log(meeting);
      this.fromIndex = fromIndex;

      this.move = !meeting.selected;
      this.metdata.selected = this.move ? meeting : null;
    },
    onUp() {
      var toIndex = this.fromIndex - 1;
      if (toIndex < 0) return;
      this.metdata.Meetings.splice(this.fromIndex, 1);
      this.metdata.Meetings.splice(toIndex, 0, this.metdata.selected);
      this.fromIndex = toIndex;
      this.metdata.original[
        this.metdata.currentYear
      ] = this.metdata.Meetings.slice().reverse();

      let formData = new FormData();
      let jsonStr = JSON.stringify(this.metdata.original);
      jsonStr = jsonStr.replace(/true/g, "false");
      formData.append("json", jsonStr);
      fetch("https://www.lrgvdc911.org/php/agendas/add.php", {
        method: "POST",
        body: formData,
      })
        .then()
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    },
    onDown() {
      var toIndex = this.fromIndex + 1;
      if (toIndex == this.metdata.Meetings.length) return;
      this.metdata.Meetings.splice(this.fromIndex, 1);
      this.metdata.Meetings.splice(toIndex, 0, this.metdata.selected);
      this.fromIndex = toIndex;
      this.metdata.original[
        this.metdata.currentYear
      ] = this.metdata.Meetings.slice().reverse();

      // Send it all false the selected..

      let formData = new FormData();
      let jsonStr = JSON.stringify(this.metdata.original);
      jsonStr = jsonStr.replace(/true/g, "false");
      formData.append("json", jsonStr);
      fetch("https://www.lrgvdc911.org/php/agendas/add.php", {
        method: "POST",
        body: formData,
      })
        .then()
        .catch((err) => {
          console.error(err);
          alert(err);
        });
    },
  },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.years-container {
  padding: 10px;
}




.board-con {
  background-color: white;
  min-height: 800px;
}


.years {
  list-style-type: none;
}
.year-li {
  text-align: center;
  float: left;
  height: 30px;
  width: 140px;
}
button:hover {
  cursor: pointer;
}
.year-li:hover {
  cursor: pointer;
}

.selected {
  border-bottom: 2px solid #273d6f;
}
.board-body {
  margin-top: 10px;
}

.tb-resp {
  padding: 0 10%;
  margin: 40px auto 0;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

.table thead{
  background-color: #273d6f;
}

.table thead tr th{
  font-size: 14px;
  font-weight: medium;
  letter-spacing: 0.35px;
  color: #fff;
  opacity: 1;
  padding: 12px;
  vertical-align: top;
  border: 1px solid #ddd;
}

.table tbody tr td{
  font-size: 14px;
  letter-spacing: 0.35px;
  font-weight: normal;
  padding: 8px;
  border: 1px solid #ddd;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}


@media (max-width: 768px){
  .table thead{
    display: none;
  }

  .table, .table tbody, .table tr,.table td{
    display: block;
    width: 100%;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table tbody tr td {
    text-align: right;
    padding-left: 50%;
    position: relative;
  }

  .table td:before{
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
  }



}


/*
.packets {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}
.packets td,
.packets th {
  border: 1px solid #ddd;
  padding: 8px;
}

.packets tr:nth-child(even) {
  background-color: #f2f2f2;
}

.packets tr:hover {
  background-color: #ddd;
}

.packets th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #273d6f;
  color: white;
}

*/

</style>
