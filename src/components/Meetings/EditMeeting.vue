<template>
  <Modal>
    <div ref="element" id="window">
      <h2 class="center">Edit Meeting</h2>
      <h3 class="center">Meeting: {{ title }} and Year : {{ year }}</h3>
      <form @submit.prevent="onSubmit">
        <div class="grid">
          <div id="gone">
            <div class="form-con">
              <label
                >Enter Date: <b>{{ agendaDate }}</b></label
              >
              <input
                type="date"
                v-model="data.date"
                ref="date"
                @change="
                  year = meeting.getYear($refs.date.valueAsDate);
                  data.agendaDate = meeting.getMonthAndYear($refs.date.valueAsDate);
                "
                placeholder="Enter Date"
              />
              <input type="hidden" v-model="agendaDate" />
              <input type="hidden" v-model="agendaYear" />
            </div>
            <div class="form-con">
              <label>Attach Agenda</label>
              <input
                type="file"
                @change="grabNameFile"
                name="agenda"
                placeholder="Agenda"
                accept="application/pdf"
              />
            </div>
            <div class="form-con">
              <label>Attach Minutes</label>
              <input
                type="file"
                @change="grabNameFile"
                name="minutes"
                placeholder="Minutes"
                accept="application/pdf"
              />
            </div>
            <div class="form-con">
              <label>Attach Documents</label>
              <input
                type="file"
                @change="grabNameFile"
                name="documents"
                placeholder="documents"
                accept="application/pdf"
              />
            </div>
          </div>
          <div id="gtwo">
            <h2 class="center">Current Attachments</h2>
            <ul>
              <li>
                Agenda
                <ul>
                  <li>{{ selected.agendaLink }}</li>
                </ul>
              </li>
              <li>
                Minutes
                <ul>
                  <li>{{ selected.minutesLink }}</li>
                </ul>
              </li>
              <li>
                Documents
                <ul>
                  <li>{{ selected.approvedLink }}</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="centerBtn">
          <button type="submit">Submit</button>
          <button @click="onCancel">Cancel</button>
        </div>
      </form>
    </div>
  </Modal>
</template>
<script setup>
import { reactive, onMounted } from "vue";
import Modal from "@/components/Modal";
import meeting from "@/modules/MeetingHandler";
const props = defineProps({
  meetings: Object,
  selected: Object,
  title: String,
  year: String,
  index: Number,
});
const emit = defineEmits("edit-meeting", "close");
const data = reactive({
  date: "",
  agendaDate: "",
  links: {
    agenda: { name: "", file: "" },
    minutes: { name: "", file: "" },
    documents: { name: "", file: "" },
  },
});
onMounted(() => {
  let yearStr = `${props.title} ${props.year}`;
  let meetingDate = new Date(yearStr);
  data.date = meeting.getMonthForDate(meetingDate);
  console.log(props.selected);
});

function grabNameFile(e) {
  // Grab the attr name from html to link to the ref value.
  let key = e.target.getAttribute("name");
  let files = e.target.files || e.dataTransfer.files;
  if (files.length > 0) {
    data.links[key].name = `${Date.now()}_${files[0].name}`;
    data.links[key].file = files[0];
  }
  console.log(data.links);
}

function onSubmit() {
  let keys = Object.keys(props.meetings);
  let formData = new FormData();

  let meetingObject = {
    date: data.agendaDate ? data.agendaDate : props.title,
    agendaLink: meeting.convertLink(data.links["agenda"].name, props.selected.agendaLink),
    agendaTitle: "Agenda Packet",
    approvedLink: meeting.convertLink(
      data.links["documents"].name,
      props.selected.approvedLink
    ),
    approvedTitle: "Approved Documents",
    minutesLink: meeting.convertLink(
      data.links["minutes"].name,
      props.selected.minutesLink
    ),
    minutesTitle: "Minutes",
    selected: false,
  };

  if (data.links["agenda"].file) {
    formData.append("agenda", data.links["agenda"].file, data.links["agenda"].name);
  }

  if (data.links["minutes"].file) {
    formData.append("minutes", data.links["minutes"].file, data.links["minutes"].name);
  }

  if (data.links["documents"].file) {
    formData.append(
      "documents",
      data.links["documents"].file,
      data.links["documents"].name
    );
  }

  props.meetings[props.year][props.index] = meetingObject;
  console.log(props.meeting);
  emit("edit-meeting", props.meetings);
  // json object for meetings to insert..
  formData.append("json", JSON.stringify(props.meetings));

  fetch("https://www.lrgvdc911.org/php/agendas/add.php", {
    method: "POST",
    body: formData,
  })
    .then()
    .catch((err) => {
      console.error(err);
      alert(err);
    });

  emit("close", false);
}

function onCancel() {
  emit("close", false);
}
</script>

<style scoped>
.center {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: auto auto;
}
.modal {
  position: fixed; /* Stay in place */
  z-index: 5; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.form-con {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
#window {
  position: relative;
  width: 900px;
  height: auto;
  background: white;
  border: 4px solid rgb(219, 92, 92);
  margin: 0 auto;
}
#centerBtn {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
#centerBtn button:first-child {
  margin-right: 40px;
}

@media screen and (max-width: 500px) {
  #window {
    width: 90%;
    left: 0;
    margin-left: 0;
    margin-top: 0;
  }
}
</style>
