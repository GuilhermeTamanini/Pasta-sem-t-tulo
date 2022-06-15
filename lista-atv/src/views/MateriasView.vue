<script>
import {v4 as uuid} from "uuid";
export default {
  data() {
      return {
        nova_materia: "",
        materias: [
          {id:'54d12bf6-b2c8-4f30-9b1d-0b3ab4e3b2c7', materia:'chines', data:'2000:000hrs'},
        ],
      };
  },
  methods: {
    salvar(){
      if(this.nova_materia !== "") {
        const nova_id = uuid();
        this.materias.push({
          id: novo_id,
          materia:this.nova_materia,
        })
      }

    }
  }
}
</script>
<template>
  <div><input type="text" /><button>META</button></div>
  <table>
    <thead>
      <tr>
        <th>Dia</th>
        <th>Materia</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="materia in materias" :key="materia.nome"></tr>
      <td>{{ materia.nome }}</td>
      <td></td>
      <td></td>
    </tbody>
  </table>
</template>

<style></style>
