<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Yeni Kayıt</h5>
        </div>
        <div class="card-body">
          <div class="grid">
            <div class="row">
              <div class="col-12 col-md-4">
                <label class="form-label">Adı</label>
                <input v-model="firstName" class="form-control" autoComplete="off" />
              </div>
              <div class="col-12 col-md-4">
                <label class="form-label">Soyadı</label>
                <input v-model="lastName" class="form-control" autoComplete="off" />
              </div>
              <div class="col-12 col-md-4">
                <label class="form-label">Adı</label>
                <input v-model="formattedDate" @input="selectDate($event.target.value)" class="form-control" type="date" autoComplete="off" />
              </div>
            </div>
            <div class="row mt-2">
              <div class="col-12 d-flex justify-content-end">
                <button @click="save" class="btn btn-primary">Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  emits: ["onSave"],
  data() {
    return {
      id: 1,
      firstName: "",
      lastName: "",
      birthDate: new Date(1990, 0, 1)
    }
  },
  methods: {
    save() {
      const participant = {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.birthDate
      }

      this.$emit("onSave", participant);
      this.id++;
      this.firstName = "";
      this.lastName = "";
      this.birthDate = new Date(1990, 0, 1);
    },
    selectDate(date) {
      this.birthDate = date;
    }
  },
  computed: {
    formattedDate() {
      return this.birthDate.toISOString().split('T')[0];  // 2025-01-01T00:00:00.000Z yyyy-MM-dd
    }
  }
}
</script>