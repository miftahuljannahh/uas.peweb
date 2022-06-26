<template>
  <div class="container mt-5">
    <h2>Input Barang</h2>
    <button type="button" class="btn btn-primary float-left" data-toggle="modal" data-target="#exampleModal">
      <span class="material-icons">add</span>
      Tambah Barang</button>

      <table class="container table table-sm mt-3">
    <thead>
    <tr>
      <th>No.</th>
      <th>Nama Barang</th>
      <th>Gambar</th>
      <th>Kondisi</th>
      <th>Kategori</th>
      <th>Tanggal Update</th>
      <th>Aksi</th>
    </tr>
    </thead>
    </table>

    <div class="moadl fade" id="exampleModal" tabindex="-1" aria-labellebdy="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tambah Barang</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form action="proses" autocomplete="off">
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input type="text" name="nama_barang" placeholder="masukkan nama barang" class="form-control" autofocus required>
              </div>
              <div class="form-group">
                <label for="exampleFormControlFile1">Example file input</label>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
              </div>
              <div class="form-group">
                <label for="kondisi">Kondisi</label>
                <input type="text" name="kondisi" placeholder="masukkan kondisi barang" class="form-control" autofocus required>
              </div>
              <div class="form-group">
                <label for="kategori">Kategori</label>
                  <select name="level" id="level" class="form-control">
                      <option value="">-- Kategori --</option>
                      <option value="5">Speaker</option>
                      <option value="4">Proyektor</option>
                      <option value="3">Kamera</option>
                      <option value="2">Tablet</option>
                      <option value="1">Laptop</option>
                  </select>
              </div>
              <div class="form-group">
                <label for="tanggal">Tanggal Update</label>
                <input type="date" name="tanggal" placeholder="" class="form-control" autofocus required>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>

     </div>

</template>

<script>
export default {
  name: "Footer.vue" 
}
</script>