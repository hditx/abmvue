<template>
  <div class="buscar">
     <div class="container">
      <h1>Personas</h1>
      <div class="bg-light">
         <div class="row">
            <h2 class="col-md-11">Filtros</h2>
            <router-link class="btn btn-primary" to="/formulario">Nuevo</router-link>
         </div>
         <hr>
         <form>
            <div class="form-row">
               <div class="form-group col-md-6">
                  <label>Nombre</label>
                  <input type="text" v-model="nombre" name="nombre" placeholder="Nombre..." class="form-control">
               </div>
               <div class="form-group col-md-6">
                  <label>Tipo Documento</label>
                  <select class="form-control" name="tipodocumento" v-model="tipodocumento">
                     <option value="todas">Todas</option>
                     <option value="dni">DNI</option>
                     <option value="cedula">Cedula</option>
                     <option value="pasaporte">Pasaporte</option>
                  </select>
               </div>
            </div>
            <router-link :to="{ name: 'listado', params: {nombre: nombre, tipodocumento: tipodocumento} }" class="btn btn-success">
               Buscar
            </router-link>
         </form>
      </div>
   </div>
  </div>
</template>

<script>
   import Buscar from '@/components/Buscar.vue'
   export default{
      name: 'buscar',
      component: {
         Buscar
      },
      data(){
         return {
            nombre: "",
            tipodocumento: ""
         }
      }
   }
</script>
