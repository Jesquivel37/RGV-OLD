<template>
  <Modal>
    <div ref="element" id="window">
      <h2 style="text-align: center">Add New Meeting</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-con">
          <label
            >Enter Date: <b>{{ agendaDate }}</b></label
          >
          <input
            type="date"
            ref="date"
            @change="
              agendaYear = meeting.getYear($refs.date.valueAsDate);
              agendaDate = meeting.getMonthAndYear($refs.date.valueAsDate);
            "
            placeholder="Enter Date"
            required
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
            required
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
        <div id="centerBtn">
          <button type="submit">Submit</button>
          <button @click="onCancel">Cancel</button>
        </div>
      </form>
    </div>
  </Modal>
</template>
<script setup>
import { ref, reactive, defineProps } from "vue";
import meeting from "@/modules/MeetingHandler";
import Modal from "@/components/Modal";
const agendaDate = ref("");
const links = reactive({
  agenda: { name: "", file: "" },
  minutes: { name: "", file: "" },
  documents: { name: "", file: "" },
});
const agendaYear = ref(0);
const emit = defineEmits("add-meeting", "close");
const props = defineProps({
  meetings: Object,
  title: String,
});
function grabNameFile(e) {
  // Grab the attr name from html to link to the ref value.
  let key = e.target.getAttribute("name");
  console.log(key);
  console.log(links);
  let files = e.target.files || e.dataTransfer.files;
  if (files.length > 0) {
    links[key].name = `${Date.now()}_${files[0].name}`;
    links[key].file = files[0];
  }
  console.log(links);
}
function onSubmit() {
  let keys = Object.keys(props.meetings);
  let yearStr = agendaYear.value.toString();
  let formData = new FormData();

  let meetingObject = {
    date: agendaDate,
    agendaLink: meeting.convertLink(links["agenda"].name, ""),
    agendaTitle: "Agenda Packet",
    approvedLink: meeting.convertLink(links["documents"].name, ""),
    approvedTitle: "Approved Documents",
    minutesLink: meeting.convertLink(links["minutes"].name, ""),
    minutesTitle: "Minutes",
    selected: false,
  };

  if (links["agenda"].file) {
    formData.append("agenda", links["agenda"].file, links["agenda"].name);
  }

  if (links["minutes"].file) {
    formData.append("minutes", links["minutes"].file, links["minutes"].name);
  }

  if (links["documents"].file) {
    formData.append("documents", links["documents"].file, links["documents"].name);
  }

  if (meeting.hasKey(yearStr, keys)) {
    props.meetings[yearStr].push(meetingObject);
    emit("add-meeting", props.meetings);
  } else {
    props.meetings.years.push({ year: yearStr, selected: false });
    props.meetings[yearStr] = [meetingObject];
    //console.log(props.meetings)
  }

  //// json object for meetings to insert..
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
  width: 650px;
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
