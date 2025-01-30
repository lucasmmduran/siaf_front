<template>
	<div>
		<nav aria-label="breadcrumb" class="migas-de-pan">
			<ol class="breadcrumb">
				<template v-for="(crumb, index) in breadcrumbs" :key="index">
        	<li class="breadcrumb-item">
          	<RouterLink :to="crumb.link">
							<span :class="crumb.class">
								{{ crumb.text }}
							</span>
						</RouterLink>
        	</li>
      	</template>
			</ol>
		</nav>
		<!-- <h3 class="header-title">Planes</h3> -->
	</div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { computed } from 'vue';

	const route = useRoute();

	const breadcrumbs = computed(() => {
      const crumbs = [];

      switch (route.name) {
        case 'Dashboard':
          crumbs.push({ text: 'Inicio', link: '/dashboard', class:"tw-font-bold" });
          break;
        case 'Planes':
          crumbs.push({ text: 'Inicio', link: '/dashboard' });
          crumbs.push({ text: 'Planes', link: '/planes', class:"tw-font-bold" });
          break;
        case 'Procesos':
          crumbs.push({ text: 'Inicio', link: '/dashboard4' });
          crumbs.push({ text: 'Planes', link: '/planes' });
          crumbs.push({ text: 'Procesos', link: `/planes/${route.params.id}/procesos`, class:"tw-font-bold" });
          break;
				case 'AgregarProceso':
          crumbs.push({ text: 'Inicio', link: '/dashboard4' });
          crumbs.push({ text: 'Planes', link: '/planes' });
          crumbs.push({ text: 'Procesos', link: `/planes/${route.params.id}/procesos` });
          crumbs.push({ text: 'Agregar', link: ``, class:"tw-font-bold" });
          break;
        default:
          break;
      }
			return crumbs;
    });

</script>
