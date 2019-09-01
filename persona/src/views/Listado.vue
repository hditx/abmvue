<template>
   <div class="listado">
      <div class="container">
         <h1>Personas</h1>
         <router-link class="btn btn-primary" to="/">Volver</router-link>
         <table class="table">
            <thead>
               <th scope="col">Id</th>
               <th scope="col">Nombre</th>
               <th scope="col">Apellido</th>
               <th scope="col">Fecha de nacimiento</th>
               <th scope="col">Tipo de documento</th>
               <th scope="col">Numero de documento</th>
               <th scope="col">Acciones</th>
            </thead>
            <tbody>
               <tr v-for="(per, index) in persona">
                  <th scope="row">{{ per.id }}</th>
                  <td>{{ per.nombre }}</td>
                  <td>{{ per.apellido }}</td>
                  <td>{{ per.fechanacimiento }}</td>
                  <td>{{ per.tipodocumento }}</td>
                  <td>{{ per.numerodocumento }}</td>
                  <td>
                     <div class="btn-group mr-2">
                        <router-link :to="{ name: 'formulario', params: {id: per.id} }" class="btn btn-success">Update</router-link>
                        <button type="button" class="btn btn-danger" v-on:click="eliminar(per.id, index)">Delete</button>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</template>
<script>
   export default{

      data(){
         return{
            nombre : "",
            tipodocumento : "",
            persona: []
         }
      },
      created(){
         this.nombre = this.$route.params.nombre;
         this.tipodocumento = this.$route.params.tipodocumento;
         if(this.nombre != null && this.tipodocumento == 'todas'){
            this.$http.get('http://localhost:8081/personas/nombre/' + this.nombre).then(respuesta => {
               return respuesta.json();
            }).then(respuestaJson =>{
               for(let id in respuestaJson){
                  this.persona.push(respuestaJson[id]);
               }
            })
         }else if(this.nombre == null && this.tipodocumento != 'todas'){
            this.$http.get('http://localhost:8081/personas/tipodoc/' + this.tipodocumento).then(respuesta => {
               return respuesta.json();
            }).then(respuestaJson =>{
               for(let id in respuestaJson){
                  this.persona.push(respuestaJson[id]);
               }
            })
         }else if(this.nombre != null && this.tipodocumento != 'todas'){
            this.$http.get('http://localhost:8081/personas/nombreTipdoc/'+ this.nombre + '/' + this.tipodocumento).then(respuesta => {
               return respuesta.json();
            }).then(respuestaJson =>{
               for(let id in respuestaJson){
                  this.persona.push(respuestaJson[id]);
               }
            })
         }else if(this.nombre == null && this.tipodocumento == 'todas'){
            this.$http.get('http://localhost:8081/personas').then(respuesta => {
               return respuesta.json();
            }).then(respuestaJson =>{
               for(let id in respuestaJson){
                  this.persona.push(respuestaJson[id]);
               }
            })
         }
      },
      methods:{
         eliminar(id, index){
            if(confirm('¿Esta seguro de eliminar la persona?')){
               this.persona.splice(index, 1);
               this.$http.delete('http://localhost:8081/persona/' + id).then(respuesta => console.log(respuesta));
            }
         }
      }
   }
</script>
