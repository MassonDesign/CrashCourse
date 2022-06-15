<template>
	<div class="home">
		<h1>Home</h1>
		<div v-if="error">{{ error }}</div>

		<div v-if="posts.lastIndexOf">
			<PostList :posts="posts" />
		</div>
		<div v-else>Loading...</div>

		<!-- <PostList v-if="showPosts" :posts="posts" />
		<button @click="showPosts = !showPosts">Toggle posts</button>
		<button @click="posts.pop()">Delete a post</button> -->

		<!-- <h2>Refs</h2>
		<p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
		<button @click="updateNinjaOne">Update ninja one</button>
		<h2>Reactive</h2>
		<p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
		<button @click="updateNinjaTwo">Update ninja two</button> -->
		<!-- <input type="text" v-model="search" />
		<p>Search team - {{ search }}</p>
		<div v-for="name in matchingName" :key="name">{{ name }}</div>
		<button @click="handleClick">Stop watching</button> -->
	</div>
</template>

<script>
//import { ref } from "vue";
import PostList from "../components/PostList.vue";
import getPosts from "../composables/getPosts";
// @ is an alias to /src

export default {
	components: { PostList },
	name: "Home",
	setup() {
		const { posts, error, load } = getPosts();

		load();

		return { posts, error };

		// const showPosts = ref(true);

		// return { posts, showPosts };

		// const search = ref("");
		// const names = ref(["mario", "yoshi", "luigi", "toad", "browser", "peach"]);

		// const stopWatch = watch(search, () => {
		// 	console.log("watch function ran");
		// });

		// const stopEffect = watchEffect(() => {
		// 	console.log("watcheffet function ran", search.value);
		// });

		// const matchingName = computed(() => {
		// 	return names.value.filter((name) => name.includes(search.value));
		// });

		// const handleClick = () => {
		// 	stopWatch();
		// 	stopEffect();
		// };

		// return { names, search, matchingName };

		// const ninjaOne = ref({ name: "mario", age: 30 });
		// const ninjaTwo = reactive({ name: "luigi", age: 35 });

		// const updateNinjaOne = () => {
		// 	ninjaOne.value.age = 40;
		// };

		// const updateNinjaTwo = () => {
		// 	ninjaTwo.age = 40;
		// };

		// return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
	},
};
</script>
