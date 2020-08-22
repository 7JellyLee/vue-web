import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Header from '@/components/Header'
import About from '@/components/About'
import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'



Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        name: 'index',
        components: {
            header: Header,
            main: Home
        }
    }, {
        path: '/about',
        name: 'About',
        components: {
            header: Header,
            main: About
        }
    }, {
        path: '/Section1',
        name: 'Section1',
        components: {
            header: Header,
            main: Section1
        }
    }, {
        path: '/Section2',
        name: 'Section2',
        components: {
            header: Header,
            main: Section2
        }
    }, {
        path: '/Section3',
        name: 'Section3',
        components: {
            header: Header,
            main: Section3
        }
    }, {
        path: '/Section4',
        name: 'Section4',
        components: {
            header: Header,
            main: Section4
        }
    }, {
        path: '/Section5',
        name: 'Section5',
        components: {
            header: Header,
            main: Section5
        }
    }, {
        path: '/Section6',
        name: 'Section6',
        components: {
            header: Header,
            main: Section6
        }
    }, {
        path: '/Section7',
        name: 'Section7',
        components: {
            header: Header,
            main: Section7
        }
    }]
})
