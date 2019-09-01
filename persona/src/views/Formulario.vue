<template>
   <div class="formulario">
      <div class="container">
         <h1>Datos Generales</h1><hr>
         <form>
            <div class="form-row">
               <div class="form-group col-md-4">
                  <label>Nombre</label>
                  <input type="text" name="nombre" v-model="persona.nombre" class="form-control" placeholder="Nombre">
               </div>
               <div class="form-group col-md-4">
                  <label>Apellido</label>
                  <input type="text" name="apellido" v-model="persona.apellido"placeholder="Apellido" class="form-control">
               </div>
               <div class="form-group col-md-4">
                  <label>Numero Documento</label>
                  <input type="text" name="numerodocumento" v-model="persona.numerodocumento" placeholder="Numero de documento" class="form-control">
               </div>
            </div>
            <div class="form-row">
               <div class="form-group col-md-4">
                  <label>Tipo de documento</label>
                  <select class="form-control" name="tipodocumento" v-model="persona.tipodocumento">
                     <option value="dni">DNI</option>
                     <option value="cedula">Cedula</option>
                     <option value="pasaporte">Pasaporte</option>
                  </select>
               </div>
               <div class="form-group col-md-4">
                  <label>Fecha de nacimiento</label>
                  <input type="date" name="fechanacimiento" class="form-control" v-model="persona.fechanacimiento">
               </div>
            </div>
            <div class="form-row">
               <router-link class="btn btn-primary" to="/">Volver</router-link>
               <input type="button" v-on:click="save" name="guardar" value="Guardar" class="btn btn-success col-md-3">
            </div>
         </form>
      </div>
   </div>
</template>
<script>
   export default{
      data(){
         return{
            persona : {
               id: '',
               apellido: '',
               fechanacimiento: '',
               nombre: '',
               numerodocumento: '',
               tipodocumento: ''
            }
         }
      },
      created(){
         this.persona.id = "";
         this.persona.apellido = "";
         this.persona.fechanacimiento = "";
         this.persona.nombre = "";
         this.persona.numerodocumento = "";
         this.persona.tipodocumento = "dni";
         if(this.$route.params.id != null){
            this.$http.get('http://localhost:8081/persona/' + this.$route.params.id).then(respuesta => {
               return respuesta.json();
            }).then(respuestaJson =>{
               console.log(respuestaJson);
               this.persona = respuestaJson;
            })
         }
      },
      methods:{
         save(){
            if(this.persona.id == ""){
               this.$http.post('http://localhost:8081/persona', this.persona).then(resp => console.log(resp));
            }else{
               this.$http.put('http://localhost:8081/persona/' + this.persona.id, this.persona).then(resp => console.log(resp));
            }
         }
      }
   }
</script>
