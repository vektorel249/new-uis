<template>
  <div class="container m-5">
      <div class="grid">
        <Form @onSave="addParticipant" />
        <div class="row mt-2">
          <LeftList :participants="participants" @onSelected="selectParticipant" />
          <RightList :participants="selecteds" @onExcluded="excludeParticipant" />
        </div>
      </div>
    </div>
</template>

<script>
import Form from "./components/Form.vue";
import LeftList from "./components/LeftList.vue";
import RightList from "./components/RightList.vue";
export default {
  name: "App",
  components: {
    Form,
    LeftList,
    RightList
  },
  data() {
    return { 
      participants: [],
      selecteds: []
    }
  },
  methods: {
    addParticipant(p) {
      this.participants.push(p);
    },
    selectParticipant(id) {
      let p = this.participants.find(f => f.id == id);
      this.participants = this.participants.filter(f => f.id != id);
      this.selecteds.push(p);
    },
    excludeParticipant(id) {
      let e = this.selecteds.find(f => f.id == id);
      this.selecteds = this.selecteds.filter(f => f.id != id);
      this.participants.push(e);
    }
  }
}
</script>
