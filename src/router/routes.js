import AboutMe from '../views/aboutme.vue'
import Skill from '../views/skill.vue'
import NotFound from '../views/notFound.vue'

const routes = [
  {
    path: '/',
    name: 'aboutme',
    menuTitle: 'AboutMe',
    component: AboutMe
  },
  {
    path: '/skill',
    name: 'skill',
    menuTitle: 'Skill',
    component: Skill
  },
  {
    name: '404',
    path: '/404',
    components: { 404: NotFound }
  },
  {
    path: '/:catchAll()', // 此处需特别注意至于最底部
    redirect: '/404'
  }
]

export default routes
