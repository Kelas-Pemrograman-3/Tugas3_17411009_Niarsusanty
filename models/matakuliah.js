const mongoose = require('mongoose')
const Schema = mongoose.Schema

const matakuliahSchema = new Schema({
  kode_matakuliah: {
    type: String
  },
  nama_matakuliah: {
    type: String
  },
  jam_matakuliah : {
    type: String
  },
  nama_dosen : {
    type: String
  }
})

module.exports = mongoose.model('matakuliah', matakuliahSchema)