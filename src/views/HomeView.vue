<template>
  <div class="row">
    <div class="col-sm-6">
      <div class="card">
        <img src="../assets/laptop.png" class="card-img" alt="image">
            <div class="card-body">
                <h5 class="card-title">Laptop</h5>
                <div class="d-inline">
                  <button class="btn btn-primary btn-sm">Detail</button>
                | <button class="btn btn-success btn-sm">Edit</button> |
                  <button class="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <img src="../assets/tablet.png" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">Tablet</h5>
                <div class="d-inline">
                  <button class="btn btn-primary btn-sm">Detail</button>
                | <button class="btn btn-success btn-sm">Edit</button> |
                  <button class="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
      </div>
    </div>
    <div class="col-sm-6">
    <div class="card">
        <img src="../assets/camera.png" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">kamera</h5>
                <div class="d-inline">
                  <button class="btn btn-primary btn-sm">Detail</button>
                | <button class="btn btn-success btn-sm">Edit</button> |
                  <button class="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
    </div>
    </div>
    <div class="col-sm-6">
    <div class="card">
        <img src="../assets/proyektor.png" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">Proyektor</h5>
                <div class="d-inline">
                  <button class="btn btn-primary btn-sm">Detail</button>
                | <button class="btn btn-success btn-sm">Edit</button> |
                  <button class="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
    </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <img src="../assets/speaker.png" class="card-img" alt="...">
            <div class="card-body">
                <h5 class="card-title">Speaker</h5>
                <div class="d-inline">
                  <button class="btn btn-primary btn-sm">Detail</button>
                | <button class="btn btn-success btn-sm">Edit</button> |
                  <button class="btn btn-danger btn-sm">Hapus</button>
                </div>
            </div>
      </div>
    </div>   
  </div>
  

</template>
<script>
export default{
  name: "HomeView.vue" 
    
}
</script>

<style lang="scss">
.card {
  width: 400px;
  margin-top: 20px;
  margin-left: 60px;
}

.row {
  width: 900px;
}

.card-body {
  text-align: center;
}
.card-img {
  height: 150px;
  width: 50px;
}

</style>


