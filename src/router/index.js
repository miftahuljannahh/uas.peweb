import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import InputBarang from '../views/InputBarangView.vue' 
import DataPeminjam from '../views/DataPeminjamView.vue'
import RiwayatPengembalian from '../views/RiwayatPengembalianView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            name: "about",
            component: About
        },
        {
            path: '/inputbarang',
            name: "inputbarang",
            component: InputBarang
        }, 
        {
            path: '/datapeminjam',
            name: "datapeminjam",
            component: DataPeminjam
        },
        {
            path: '/riwayatpengembalian',
            name: "riwayatpengembalian",
            component: RiwayatPengembalian
        }            
    ]
})

export default router