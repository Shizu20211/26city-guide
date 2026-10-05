<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { cities, spots } from '@/data/spots'

const route = useRoute()

const spot = computed(() => {
    return spots.find(
        (item) =>
            item.city === route.params.city &&
            item.id === Number(route.params.id)
    )
})

const city = computed(() => {
    if (!spot.value) return null
    return cities.find(
        (item) => item.id === spot.value.city
    )
})

const typeName = {
    food: '美食',
    attraction: '景點',
    culture: '文化'
}
</script>

<template>
    <main v-if="spot" class="container">
        <RouterLink :to="{
            name: 'city',
            params: {
                city: route.params.city
            }
        }" class="back">
            ← 返回 {{ city?.name }}
        </RouterLink>

        <article class="detail-card" v-reveal>
            <div class="detail-image">
                <img :src="spot.image" :alt="spot.name">
            </div>

            <div class="detail-content">
                <span class="type">
                    {{ typeName[spot.type] }}
                </span>

                <h1>
                    {{ spot.name }}
                </h1>

                <div class="meta">
                    <span>
                        城市：{{ city?.name }}
                    </span>

                    <span>
                        國家：{{ city?.country }}
                    </span>
                </div>

                <hr>

                <h2>
                    景點介紹
                </h2>

                <p class="description">
                    {{ spot.description }}
                </p>
            </div>
        </article>
    </main>

    <main v-else class="container">
        <h1>找不到這個景點</h1>

        <RouterLink to="/cities">
            返回城市列表
        </RouterLink>
    </main>
</template>

<style scoped>
.container {
    max-width: 850px;
    margin: 0 auto;
    padding: 48px 24px;
    color: var(--color-text);
    background: #dcebed;
    box-shadow: 0 0 0 100vmax #dcebed;
    clip-path: inset(0 -100vmax);
}

.back {
    display: inline-block;
    color: var(--color-text);
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 18px;
    border-bottom: 2px dashed var(--color-accent);
    transition: transform var(--transition);
}

.back:hover {
    transform: translateX(-5px) rotate(-1deg);
}

.detail-card {
    overflow: hidden;

    margin-top: 32px;

    background: var(--color-surface);

    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.detail-image {
    aspect-ratio: 16 / 8;
    overflow: hidden;
    border-bottom: 1px solid var(--color-border);
}

.detail-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.detail-content {
    padding: 40px;
}


.type {
    display: inline-block;
    padding: 8px 14px;
    color: var(--color-accent);
    background: var(--color-surface-soft);
    border: 2px solid currentColor;
    border-radius: var(--radius-sm);
}

h1 {
    margin: 20px 0;
    font-family: var(--font-display);
    font-size: clamp(42px, 6vw, 52px);
    font-weight: 400;
}

.meta {
    display: flex;
    gap: 24px;
    color: var(--color-text-soft);
}

hr {
    margin: 32px 0;
    border: 0;
    border-top: 2px dashed var(--color-border);
}

.description {
    max-width: 65ch;
    font-size: 18px;
    line-height: 1.9;
    font-family: var(--font-sans);
}

@media (max-width: 768px) {
    .detail-content {
        padding: 24px;
    }

    h1 {
        font-size: 36px;
    }

    .meta {
        flex-direction: column;
        gap: 8px;
    }
}
</style>
