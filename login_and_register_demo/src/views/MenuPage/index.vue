<template>
    <div class="home-container">
        <!-- 导航栏 -->
        <nav class="navbar">
            <div class="logo">MyApp</div>
            <ul class="nav-links">
                <li><a href="#">首页</a></li>
                <li><a href="#">产品</a></li>
                <li><a href="#">服务</a></li>
                <li><a href="#">关于我们</a></li>
                <li><a href="#">联系我们</a></li>
            </ul>
        </nav>

        <!-- 轮播图 -->
        <div class="carousel">
            <div class="carousel-item active">
                <img src="https://via.placeholder.com/1200x400?text=Slide+1" alt="Slide 1">
                <div class="carousel-caption">欢迎来到我的主页</div>
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x400?text=Slide+2" alt="Slide 2">
                <div class="carousel-caption">探索更多</div>
            </div>
            <div class="carousel-item">
                <img src="https://via.placeholder.com/1200x400?text=Slide+3" alt="Slide 3">
                <div class="carousel-caption">精彩内容</div>
            </div>
        </div>

        <!-- 特色卡片 -->
        <div class="features">
            <h2 class="section-title">特色服务</h2>
            <div class="feature-cards">
                <div class="feature-card" v-for="(feature, index) in features" :key="index">
                    <img :src="feature.image" alt="Feature">
                    <h3>{{ feature.title }}</h3>
                    <p>{{ feature.description }}</p>
                </div>
            </div>
        </div>

        <!-- 推荐列表 -->
        <div class="recommendations">
            <h2 class="section-title">推荐内容</h2>
            <ul class="recommend-list">
                <li v-for="(item, index) in recommendations" :key="index">
                    <img :src="item.image" alt="Recommendation">
                    <h3>{{ item.title }}</h3>
                    <p>{{ item.description }}</p>
                </li>
            </ul>
        </div>

        <!-- 页脚 -->
        <footer class="footer">
            <p>&copy; 2025 MyApp. All rights reserved.</p>
        </footer>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 推荐内容数据
const recommendations = ref([
    {
        image: "https://via.placeholder.com/150?text=Item+1",
        title: "推荐内容一",
        description: "这是推荐内容一的描述，希望您喜欢。"
    },
    {
        image: "https://via.placeholder.com/150?text=Item+2",
        title: "推荐内容二",
        description: "这是推荐内容二的描述，为您带来更多选择。"
    },
    {
        image: "https://via.placeholder.com/150?text=Item+3",
        title: "推荐内容三",
        description: "这是推荐内容三的描述，不容错过。"
    }
]);

// 特色服务数据
const features = ref([
    {
        image: "https://via.placeholder.com/100?text=Card+1",
        title: "服务一",
        description: "这是服务一的描述，为您提供优质体验。"
    },
    {
        image: "https://via.placeholder.com/100?text=Card+2",
        title: "服务二",
        description: "这是服务二的描述，为您带来高效解决方案。"
    },
    {
        image: "https://via.placeholder.com/100?text=Card+3",
        title: "服务三",
        description: "这是服务三的描述，满足您的多样化需求。"
    }
]);
</script>

<style scoped>
.home-container {
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 1rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
}

.nav-links {
    list-style: none;
    display: flex;
}

.nav-links li {
    margin: 0 1rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
}

.carousel {
    position: relative;
    overflow: hidden;
}

.carousel-item {
    display: none;
    position: absolute;
    width: 100%;
    height: 400px;
}

.carousel-item.active {
    display: block;
}

.carousel-caption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
}

.features {
    padding: 2rem;
}

.section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
}

.feature-cards {
    display: flex;
    justify-content: space-around;
}

.feature-card {
    text-align: center;
}

.feature-card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.recommendations {
    padding: 2rem;
}

.recommend-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.recommend-list li {
    width: calc(33.333% - 1rem);
    text-align: center;
}

.recommend-list img {
    width: 100%;
    height: auto;
}

.footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 1rem;
    position: fixed;
    width: 100%;
    bottom: 0;
}
</style>